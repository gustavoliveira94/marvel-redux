(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(32)},24:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(11),o=a.n(c),l=(a(24),a(12)),i=a(13),s=a(17),u=a(14),m=a(18),d=(a(9),function(e){var t=e.detail;return n.a.createElement("div",{className:"row justify-content-center"},t.map(function(e){return n.a.createElement("ul",{key:e.id,className:"col-sm-12 col-md-6 col-lg-3 box-character"},n.a.createElement("div",{className:"card"},n.a.createElement("img",{className:"card-img-top",height:"300px",alt:e.name,src:e.thumbnail.path+"."+e.thumbnail.extension}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},e.name),n.a.createElement("button",{className:"btn btn-link-red",type:"button","data-toggle":"collapse","data-target":"#"+e.name.replace(/\W/g,"").replace(/[0-9]/g,""),"aria-expanded":"false","aria-controls":e.name.replace(/\W/g,"").replace(/[0-9]/g,"")},"Descri\xe7\xe3o do personagem"),n.a.createElement("div",{className:"collapse",id:e.name.replace(/\W/g,"").replace(/[0-9]/g,"")},n.a.createElement("p",{className:"card-text"},e.description?e.description:"Um personagem da Marvel")),n.a.createElement("a",{target:"window.open()",className:"btn btn-red",href:e.urls[0].url},"See all about this character"))))}))}),p=a(4),h="REQUEST_API_BEGIN",f="REQUEST_API_SUCCESS",g="REQUEST_API_FAILURE",b=function(){return{type:h}},v=function(e){return{type:f,payload:{items:e}}},E=function(e){return{type:g,payload:{error:e}}};var y=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.requestAPI()}},{key:"render",value:function(){console.log(this.props.api);var e=this.props.api;return n.a.createElement("div",{className:"App"},n.a.createElement("img",{className:"logo",width:"280px",src:"https://cdn-store.iseeme.com/skin/frontend/polar/default/images/marvel/category-pages/Marvel-logo.png",alt:"Marvel"}),n.a.createElement("div",{className:"container"},n.a.createElement(d,{detail:e})))}}]),t}(r.Component);var w=Object(p.b)(function(e){return{api:e.requestApiReducer.items}},function(e){return{requestAPI:function(){return e(function(e){return e(b()),fetch("https://gateway.marvel.com:443/v1/public/characters?apikey=46ddcc696410797f092cd0b95e6dfc7c").then(function(e){return e.json()}).then(function(t){return e(v(t.data.results)),t.data.results}).catch(function(t){return e(E(t))})})}}})(y);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=a(5),N=a(1),O={items:[],error:null};var k=Object(N.c)({requestApiReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(j.a)({},e,{error:null});case f:return Object(j.a)({},e,{items:t.payload.items});case g:return Object(j.a)({},e,{error:t.payload.error,items:[]});default:return e}}}),A=a(16),I=Object(N.d)(k,Object(N.a)(A.a));o.a.render(n.a.createElement(p.a,{store:I},n.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){}},[[19,2,1]]]);
//# sourceMappingURL=main.93d54671.chunk.js.map