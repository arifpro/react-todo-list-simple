(this["webpackJsonpreact-todo-list-simple"]=this["webpackJsonpreact-todo-list-simple"]||[]).push([[0],{13:function(e,t,n){e.exports=n(26)},18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),c=n.n(r),l=(n(18),n(12)),i=n(7),u=(n(19),n(20),n(9)),s=n(10),m=function(e){var t=e.items.map((function(t){return o.a.createElement("div",{className:"list",key:t.key},o.a.createElement("p",null,o.a.createElement("input",{type:"text",id:t.text,value:t.text,onChange:function(n){return e.setUpdate(n.target.value,t.key)}}),o.a.createElement("span",null,o.a.createElement(u.a,{className:"faicons",icon:"trash",onClick:function(){return e.deleteItem(t.key)}}))))}));return o.a.createElement("div",null,o.a.createElement(s.a,{duration:500,easing:"ease-in-out"},t))},d=n(4),f=n(11);d.b.add(f.a);var v=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)({text:"",key:""}),u=Object(i.a)(c,2),s=u[0],d=u[1];return o.a.createElement("div",{id:"mainDiv"},o.a.createElement("header",null,o.a.createElement("form",{id:"to-do-form",onSubmit:function(e){if(e.preventDefault(),""!==s.text){var t=[].concat(Object(l.a)(n),[s]);r(t),d({text:"",key:""})}}},o.a.createElement("input",{type:"text",placeholder:"Enter Text",value:s.text,onChange:function(e){d({text:e.target.value,key:Date.now()})}}),o.a.createElement("button",{type:"submit"},"Add"))),o.a.createElement(m,{items:n,deleteItem:function(e){var t=n.filter((function(t){return t.key!==e}));r(t)},setUpdate:function(e,t){console.log(e);var a=n;a.map((function(n){n.key===t&&(console.log(n.key===t),n.text=e)})),console.log(a),r(a)}}))};var p=function(){return o.a.createElement("div",null,o.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.7373199a.chunk.js.map