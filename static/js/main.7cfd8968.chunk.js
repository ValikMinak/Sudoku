(this["webpackJsonpreact-sudoku"]=this["webpackJsonpreact-sudoku"]||[]).push([[0],{21:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return c})),t.d(n,"c",(function(){return a}));var r=t(8),o=function(){return{type:r.a}},c=function(e,n){return{coords:n,type:r.b,value:e}},a=function(e){return{coords:e,type:r.c}}},22:function(e,n){},3:function(e,n,t){"use strict";var r=t(30),o=t(21);t.d(n,"createGrid",(function(){return o.a})),t.d(n,"fillBlock",(function(){return o.b})),t.d(n,"selectBlock",(function(){return o.c}));t(22);n.default=r.a},30:function(e,n,t){"use strict";var r=t(7),o=t(9);var c=function(e){for(var n=0;n<9;n++)for(var t=0;t<9;t++)if(0===e[n][t])return!1;return!0};var a=function e(n,t){if(!Array.isArray(n)&&!Array.isArray(t))return n===t;if(n.length!==t.length)return!1;for(var r=0,o=n.length;r<o;r++)if(!e(n[r],t[r]))return!1;return!0};var i=function(e){for(var n=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]],t=0;t<9;t++)for(var r=0;r<9;r++)n[t][r]=e[t][r];return n};var l=function(){var e=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];return s(e),e},u=t(15),d=[1,2,3,4,5,6,7,8,9];var s=function e(n){for(var t=0,r=0,o=0;o<81;o++)if(r=o%9,0===n[t=Math.floor(o/9)][r]){j(d);var a,i=Object(u.a)(d);try{for(i.s();!(a=i.n()).done;){var l=a.value;if(!h({grid:n,row:t,value:l})&&!b({col:r,grid:n,value:l})){var s=v({col:r,grid:n,row:t});if(!k({square:s,value:l})){if(n[t][r]=l,c(n))return!0;if(e(n))return!0}}}}catch(f){i.e(f)}finally{i.f()}break}n[t][r]=0};var f=function(){return Math.floor(Math.random()*Math.floor(9))};var v=function(e){var n=e.col,t=e.grid,r=e.row,o=[];if(r<3)if(n<3)for(var c=0;c<3;c++)o.push([t[c][0],t[c][1],t[c][2]]);else if(n<6)for(var a=0;a<3;a++)o.push([t[a][3],t[a][4],t[a][5]]);else for(var i=0;i<3;i++)o.push([t[i][6],t[i][7],t[i][8]]);else if(r<6)if(n<3)for(var l=3;l<6;l++)o.push([t[l][0],t[l][1],t[l][2]]);else if(n<6)for(var u=3;u<6;u++)o.push([t[u][3],t[u][4],t[u][5]]);else for(var d=3;d<6;d++)o.push([t[d][6],t[d][7],t[d][8]]);else if(n<3)for(var s=6;s<9;s++)o.push([t[s][0],t[s][1],t[s][2]]);else if(n<6)for(var f=6;f<9;f++)o.push([t[f][3],t[f][4],t[f][5]]);else for(var v=6;v<9;v++)o.push([t[v][6],t[v][7],t[v][8]]);return o};var b=function(e){for(var n=e.col,t=e.grid,r=e.value,o=0;o<9;o++)if(r===t[o][n])return!0;return!1};var h=function(e){var n=e.grid,t=e.row,r=e.value;return n[t].includes(r)};var k=function(e){var n=e.square,t=e.value;return[].concat(Object(r.a)(n[0]),Object(r.a)(n[1]),Object(r.a)(n[2])).includes(t)},g={counter:0};var p=function(e){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;n>0;){for(var t=f(),r=f();0===e[t][r];)for(t=f(),r=f();0===e[t][r];)t=f(),r=f();var o=e[t][r];e[t][r]=0;var c=i(e);g.counter=0,w(c),1!==g.counter&&(e[t][r]=o,n--)}return e};var j=function(e){for(var n=e.length-1;n>0;n--){var t=Math.floor(Math.random()*(n+1)),r=[e[t],e[n]];e[n]=r[0],e[t]=r[1]}},O=[1,2,3,4,5,6,7,8,9];var w=function e(n){for(var t=0,r=0,o=0;o<81;o++)if(r=o%9,0===n[t=Math.floor(o/9)][r]){var a,i=Object(u.a)(O);try{for(i.s();!(a=i.n()).done;){var l=a.value;if(!h({grid:n,row:t,value:l})&&!b({col:r,grid:n,value:l})){var d=v({col:r,grid:n,row:t});if(!k({square:d,value:l})){if(n[t][r]=l,c(n)){g.counter++;break}if(e(n))return!0}}}}catch(s){i.e(s)}finally{i.f()}break}n[t][r]=0},m=t(8),y={};n.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case m.a:var t=l(),c=i(t),u=p(c),d=i(u);return Object(o.a)(Object(o.a)({},e),{},{challengeGrid:u,solvedGrid:t,workingGrid:d});case m.b:return e.workingGrid&&e.solvedGrid?e.solvedGrid[n.coords[0]][n.coords[1]]!==n.value?(alert("Incorrect Option!"),e):(e.workingGrid[n.coords[0]][n.coords[1]]=n.value,a(e.workingGrid,e.solvedGrid)&&alert("Completed!"),Object(o.a)(Object(o.a)({},e),{},{workingGrid:Object(r.a)(e.workingGrid)})):e;case m.c:return Object(o.a)(Object(o.a)({},e),{},{selectedBlock:n.coords});default:return e}}},31:function(e,n,t){e.exports=t(45)},45:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),c=t(13),a=t.n(c),i=t(5),l=t(24),u=t(1),d=t(7),s=t(4),f=t(3),v=t(2);function b(){var e=Object(v.a)(["\n    align-items: center;\n    background-color: ",";\n    border: solid 1px ",";\n    cursor: pointer;\n    display: flex;\n    flex-grow: 1;\n    flex-shrink: 0;\n    flex-basis: 0;\n    font-size: 20px;\n    font-weight: ",";\n    height: auto;\n    justify-content: center;\n    transition: ",";\n    user-select: none;\n\n    &:before {\n      padding-top: 100%;\n      content: '';\n      float: left;\n    }\n\n    &:hover {\n      background-color: ",";\n    }\n  "]);return b=function(){return e},e}function h(){var e=Object(v.a)(["\n  ","\n"]);return h=function(){return e},e}var k=u.d.div(h(),(function(e){var n=e.active,t=e.puzzle,r=e.theme;return Object(u.c)(b(),n?r.colors.blue:r.colors.white,r.colors.black,t?"bold":"normal",r.transition,r.colors.lightBlue)})),g=function(e){var n=e.colIndex,t=e.rowIndex,r=Object(i.c)((function(e){var r=e.challengeGrid,o=e.selectedBlock,c=e.workingGrid;return{isActive:!!o&&(o[0]===t&&o[1]===n),isPuzzle:!(!r||0===r[t][n]),value:c?c[t][n]:0}})),c=Object(i.b)();return o.a.createElement(k,{active:r.isActive,"data-cy":"block-".concat(t,"-").concat(n),onClick:function(){r.isActive||c(Object(f.selectBlock)([t,n]))},puzzle:r.isPuzzle},0===r.value?"":r.value)};function p(){var e=Object(v.a)(["\n    display: flex;\n    flex-flow: row;\n\n    &:nth-child(1) {\n      div {\n        border-top: solid 4px ",";\n      }\n    }\n    &:nth-child(3),\n    &:nth-child(6) {\n      div {\n        border-bottom: solid 3px ",";\n      }\n    }\n    &:nth-child(9) {\n      border-bottom: solid 4px ",";\n    }\n\n    div {\n      &:nth-child(1) {\n        border-left: solid 4px ",";\n      }\n      &:nth-child(3),\n      &:nth-child(6),\n      &:nth-child(9) {\n        border-right: solid 4px ",";\n      }\n      &:nth-child(4),\n      &:nth-child(7) {\n        border-left: none;\n      }\n    }\n  "]);return p=function(){return e},e}function j(){var e=Object(v.a)(["\n  ","\n"]);return j=function(){return e},e}function O(){var e=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 10px 0;\n"]);return O=function(){return e},e}var w=u.d.div(O()),m=u.d.div(j(),(function(e){var n=e.theme;return Object(u.c)(p(),n.colors.black,n.colors.black,n.colors.black,n.colors.black,n.colors.black)})),y=function(){var e=Object(i.c)((function(e){var n=e.selectedBlock,t=e.solvedGrid,r=e.workingGrid;return{selectedBlock:n,selectedValue:r&&n?r[n[0]][n[1]]:0,solvedGrid:t}})),n=Object(i.b)(),t=Object(r.useCallback)((function(){return n(Object(f.createGrid)())}),[n]),c=Object(r.useCallback)((function(t){e.selectedBlock&&0===e.selectedValue&&n(Object(f.fillBlock)(t,e.selectedBlock))}),[n,e.selectedBlock,e.selectedValue]);return Object(s.a)("1",(function(){return c(1)})),Object(s.a)("2",(function(){return c(2)})),Object(s.a)("3",(function(){return c(3)})),Object(s.a)("4",(function(){return c(4)})),Object(s.a)("5",(function(){return c(5)})),Object(s.a)("6",(function(){return c(6)})),Object(s.a)("7",(function(){return c(7)})),Object(s.a)("8",(function(){return c(8)})),Object(s.a)("9",(function(){return c(9)})),Object(s.a)("down",(function(){e.selectedBlock&&e.selectedBlock[0]<8&&n(Object(f.selectBlock)([e.selectedBlock[0]+1,e.selectedBlock[1]]))})),Object(s.a)("left",(function(){e.selectedBlock&&e.selectedBlock[1]>0&&n(Object(f.selectBlock)([e.selectedBlock[0],e.selectedBlock[1]-1]))})),Object(s.a)("right",(function(){e.selectedBlock&&e.selectedBlock[1]<8&&n(Object(f.selectBlock)([e.selectedBlock[0],e.selectedBlock[1]+1]))})),Object(s.a)("up",(function(){e.selectedBlock&&e.selectedBlock[0]>0&&n(Object(f.selectBlock)([e.selectedBlock[0]-1,e.selectedBlock[1]]))})),Object(r.useEffect)((function(){e.solvedGrid||t()}),[t,e.solvedGrid]),o.a.createElement(w,{"data-cy":"grid-container"},r.Children.toArray(Object(d.a)(Array(9)).map((function(e,n){return o.a.createElement(m,{"data-cy":"grid-row-container"},r.Children.toArray(Object(d.a)(Array(9)).map((function(e,t){return o.a.createElement(g,{colIndex:t,rowIndex:n})}))))}))))},x=function(){var e=Object(i.b)(),n=Object(r.useCallback)((function(){window.confirm("Are you sure you want to start a new game?")&&e(Object(f.createGrid)())}),[e]);return o.a.createElement(S,{onClick:n},"New Game")},B=function(e){var n=e.value,t=Object(i.c)((function(e){var n=e.selectedBlock,t=e.workingGrid;return{selectedBlock:n,selectedValue:t&&n?t[n[0]][n[1]]:0}})),c=Object(i.b)(),a=Object(r.useCallback)((function(){t.selectedBlock&&0===t.selectedValue&&c(Object(f.fillBlock)(n,t.selectedBlock))}),[c,t.selectedBlock,t.selectedValue,n]);return o.a.createElement(S,{onClick:a},n)};function E(){var e=Object(v.a)(["\n  display: flex;\n  flex-flow: row;\n"]);return E=function(){return e},e}var G=u.d.div(E()),A=function(){return o.a.createElement(G,null,[1,2,3,4,5,6,7,8,9].map((function(e){return o.a.createElement(B,{key:e,value:e})})))};function C(){var e=Object(v.a)(["\n    align-items: center;\n    background-color: ",";\n    border: 2px solid ",";\n    border-radius: 4px;\n    color: ",";\n    cursor: pointer;\n    display: flex;\n    flex: 1;\n    font-size: 16px;\n    font-weight: bold;\n    height: 40px;\n    justify-content: center;\n    margin: 4px 2px;\n    min-height: 40px;\n    opacity: 0.9;\n    padding: 0;\n    transition: ",";\n\n    &:focus {\n      border-color: ",";\n      outline: none;\n    }\n\n    &:hover {\n      opacity: 0.6;\n    }\n  "]);return C=function(){return e},e}function z(){var e=Object(v.a)(["\n  ","\n"]);return z=function(){return e},e}var S=u.d.button(z(),(function(e){var n=e.theme;return Object(u.c)(C(),n.colors.black,n.colors.black,n.colors.white,n.transition,n.colors.blue)}));function I(){var e=Object(v.a)(["\n    background-color: ",";\n    border-radius: 15px;\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    max-height: fit-content;\n    padding: 15px;\n  "]);return I=function(){return e},e}function W(){var e=Object(v.a)(["\n  ","\n"]);return W=function(){return e},e}var L=u.d.div(W(),(function(e){var n=e.theme;return Object(u.c)(I(),n.colors.white)}));function M(){var e=Object(v.a)(["\n  max-width: 500px;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: center;\n"]);return M=function(){return e},e}var V=u.d.div(M());function R(){var e=Object(v.a)(["\n    color: ",";\n    margin-top: 0;\n    text-align: center;\n  "]);return R=function(){return e},e}function T(){var e=Object(v.a)(["\n  ","\n"]);return T=function(){return e},e}var P=u.d.h1(T(),(function(e){var n=e.theme;return Object(u.c)(R(),n.colors.white)})),q=t(6),N=t(18),U=t(28),_=t.n(U),J=t(29),K={key:"root",storage:_.a},D=Object(N.a)(K,f.default);var F=function(){var e=Object(q.createStore)(D,Object(J.devToolsEnhancer)({}));return{persistor:Object(N.b)(e),store:e}},$=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function H(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}function Q(){var e=Object(v.a)(["\n    html {\n      height: 100%;\n\n      body {\n        display: flex;\n        flex-direction: column;\n        height: 100%;\n        margin: 0;\n\n        #root {\n          background: ",";\n          color: ",";\n          display: flex;\n          font-family: sans-serif;\n          height: 100%;\n          justify-content: center;\n          padding: 15px;\n        }\n      }\n    }\n  "]);return Q=function(){return e},e}function X(){var e=Object(v.a)(["\n  ","\n"]);return X=function(){return e},e}var Y=Object(u.b)(X(),(function(e){var n=e.theme;return Object(u.c)(Q(),n.colors.background,n.colors.black)})),Z=F(),ee=Z.persistor,ne=Z.store;a.a.render(o.a.createElement(u.a,{theme:{colors:{background:"radial-gradient(#282c34cc, #282c34)",black:"#282c34",blue:"#a0e9fd",lightBlue:"#caf3fe",white:"white"},transition:"0.3s"}},o.a.createElement(Y,null),o.a.createElement(i.a,{store:ne},o.a.createElement(l.a,{loading:null,persistor:ee},o.a.createElement(V,{"data-cy":"content"},o.a.createElement(P,{"data-cy":"title"},"Sudoku"),o.a.createElement(L,{"data-cy":"card"},o.a.createElement(x,null),o.a.createElement(y,null),o.a.createElement(A,null)))))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Sudoku",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/Sudoku","/service-worker.js");$?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):H(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):H(n,e)}))}}()},8:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return c}));var r="CREATE_GRID",o="FILL_BLOCK",c="SELECT_BLOCK"}},[[31,1,2]]]);
//# sourceMappingURL=main.7cfd8968.chunk.js.map