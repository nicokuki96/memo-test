import { React, useState, useEffect } from "react";
import uuniq from "uniqid";
import arrayShuffle from "array-shuffle";
import Popup from "./Popup";

const Board = () => {
  // const [squares1, setSquares1] = useState([
  //   "cyan",
  //   "gold",
  //   "pink",
  //   "chili",
  //   "black",
  //   "blue",
  // ]);
  const [allBoard, setAllBoard] = useState([]);
  const [selected, setSelected] = useState();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    apiFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const apiFetch = async () => {
    const random = randomNumberInRange(0, 100);
    const request = await fetch(
      `https://api.pexels.com/v1/curated?page=${random}}&per_page=6
    `,
      {
        headers: {
          Authorization:
            "HbBjqRDPA4Ea4zSvMndnaN8KOoyys3cZWbmcFelwrQha9cLqJa5zJggU",
        },
      }
    );
    const data = await request.json();
    const dataPics = data.photos;
    const imageFromServer = [];
    dataPics.forEach((item) => {
      imageFromServer.push(item.src.tiny);
    });
    setRandomPosition(imageFromServer);
  };

  const setRandomPosition = (imageFromServer) => {
    const random1 = arrayShuffle(imageFromServer);
    const random2 = arrayShuffle(imageFromServer);
    let board = random1.concat(random2);
    board = board.map((item, i) => {
      // states: 0 (close), 1 (opened but wrong), 2 (opened pair)
      return {
        id: uuniq(),
        color: item,
        state: 0,
      };
    });
    setAllBoard(board);
  };
  const showColor = (item) => {
    if (item.state === 0) {
      // const find = allBoard.findIndex((i) => i.id === item.id);
      const newBoard = allBoard.map((square) => {
        if (square.id === item.id) {
          const newSquare = {
            ...item,
            state: 1,
          };
          return newSquare;
        }
        return square;
      });
      // Block click when the array has 2 in state un 1
      const twoSelected = newBoard.filter((x) => x.state === 1).length;
      if (twoSelected < 3) {
        setAllBoard(newBoard);
      }
      if (selected) {
        checkPair(item);
      } else {
        setSelected(item.color);
      }
    }
  };

  const checkPair = (item) => {
    const arrSelected = allBoard.map((square) => {
      if (square.color === selected && selected === item.color) {
        const pairBoard = {
          ...square,
          state: 2,
        };
        return pairBoard;
      } else if (square.state === 1) {
        const wrongBoard = {
          ...square,
          state: 0,
        };
        return wrongBoard;
      } else {
        return square;
      }
    });
    setSelected();
    setTimeout(() => {
      setAllBoard(arrSelected);
    }, 1000);
    checkWin();
  };

  const checkWin = () => {
    // const win = allBoard.every((v) => v.state === 2);
    const win = allBoard.filter((x) => x.state === 2).length;
    if (win === 10) {
      handleOpen();
    }
  };

  // Si esta funcion la meto en renderBoar no funciona
  //   const squareRender = (number, id) => {
  //     <div id={id} className="squares">
  //       {number}
  //     </div>;
  //   };

  const renderBoard = () => {
    return (
      <>
        {allBoard.map((item) => (
          <div
            style={{
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${
                (item.state === 1 || item.state === 2) && item.color
              })`,
            }}
            onClick={() => showColor(item)}
            key={uuniq()}
            className={`squares ${
              (item.state === 1 || item.state === 2) && item.color
            }
            `}
          ></div>
        ))}
      </>
    );
  };

  return (
    <div className="board" id="board">
      {renderBoard()}
      <Popup
        open={open}
        apiFetch={apiFetch}
        allBoard={allBoard}
        handleClose={handleClose}
      />
    </div>
  );
};

export default Board;
