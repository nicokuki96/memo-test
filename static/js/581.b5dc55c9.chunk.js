"use strict";(self.webpackChunkmemo_test=self.webpackChunkmemo_test||[]).push([[581],{8581:function(t,n,e){e.r(n),e.d(n,{default:function(){return b}});var a=e(1413),r=e(4165),o=e(5861),c=e(885),i=e(2791),s=e(4191),u=e.n(s),l=e(7898),d=e(890),f=e(2984),p=e(4554),h=e(6435),m=e(184),Z={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},v=function(t){var n=t.handleClose,e=t.open,a=t.allBoard,r=t.apiFetch;return(0,m.jsx)("div",{children:(0,m.jsx)(f.Z,{open:e,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,m.jsxs)(p.Z,{sx:Z,children:[(0,m.jsx)(d.Z,{id:"modal-modal-title",variant:"h6",component:"h2",children:"You win!"}),(0,m.jsx)(d.Z,{id:"modal-modal-description",sx:{mt:2},children:(0,m.jsx)(h.Z,{onClick:function(){a.forEach((function(t,n){t.state=0})),n(),r()},variant:"contained",children:"Restart"})})]})})})},b=function(){var t=(0,i.useState)([]),n=(0,c.Z)(t,2),e=n[0],s=n[1],d=(0,i.useState)(),f=(0,c.Z)(d,2),p=f[0],h=f[1],Z=(0,i.useState)(!1),b=(0,c.Z)(Z,2),x=b[0],g=b[1];(0,i.useEffect)((function(){j()}),[]);var j=function(){var t=(0,o.Z)((0,r.Z)().mark((function t(){var n,e,a,o,c;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=0,i=100,n=Math.floor(Math.random()*(i-r+1))+r,t.next=3,fetch("https://api.pexels.com/v1/curated?page=".concat(n,"}&per_page=6\n    "),{headers:{Authorization:"HbBjqRDPA4Ea4zSvMndnaN8KOoyys3cZWbmcFelwrQha9cLqJa5zJggU"}});case 3:return e=t.sent,t.next=6,e.json();case 6:a=t.sent,o=a.photos,c=[],o.forEach((function(t){c.push(t.src.tiny)})),k(c);case 11:case"end":return t.stop()}var r,i}),t)})));return function(){return t.apply(this,arguments)}}(),k=function(t){var n=(0,l.Z)(t),e=(0,l.Z)(t),a=n.concat(e);a=a.map((function(t,n){return{id:u()(),color:t,state:0}})),s(a)},w=function(t){var n=e.map((function(n){return n.color===p&&p===t.color?(0,a.Z)((0,a.Z)({},n),{},{state:2}):1===n.state?(0,a.Z)((0,a.Z)({},n),{},{state:0}):n}));h(),setTimeout((function(){s(n)}),1e3),y()},y=function(){10===e.filter((function(t){return 2===t.state})).length&&g(!0)};return(0,m.jsxs)("div",{className:"board",id:"board",children:[(0,m.jsx)(m.Fragment,{children:e.map((function(t){return(0,m.jsx)("div",{style:{backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundImage:"url(".concat((1===t.state||2===t.state)&&t.color,")")},onClick:function(){return function(t){if(0===t.state){var n=e.map((function(n){return n.id===t.id?(0,a.Z)((0,a.Z)({},t),{},{state:1}):n}));n.filter((function(t){return 1===t.state})).length<3&&s(n),p?w(t):h(t.color)}}(t)},className:"squares ".concat((1===t.state||2===t.state)&&t.color,"\n            ")},u()())}))}),(0,m.jsx)(v,{open:x,apiFetch:j,allBoard:e,handleClose:function(){return g(!1)}})]})}}}]);
//# sourceMappingURL=581.b5dc55c9.chunk.js.map