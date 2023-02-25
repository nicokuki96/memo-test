import React from "react";
import './App.css';
// import Board from './components/Board'

const Board = React.lazy(() => import('./components/Board'));

function App() {
  return (
    <div className="App">
      <Board/>
    </div>
  );
}

export default App;
