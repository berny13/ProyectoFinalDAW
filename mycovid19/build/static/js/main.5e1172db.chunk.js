(this.webpackJsonpmycovid19=this.webpackJsonpmycovid19||[]).push([[0],{1215:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(34),i=c.n(r),s=(c(403),c(126)),o=c(147),l=(c(404),c(1252)),j=c(89),d=c(1257),u=c(1258),b=c(1256),h=c(1260),p=c(1262),O=c(1259),x=c(389),f=c.n(x),g=c(390),m=c.n(g),v=c(287),y=c.n(v),C=c(391),k=c.n(C),w=c(1263),N=c(125),R=c.n(N),S=c(220),E=c(103),M=c(3),A=function(){var e=a.a.useState([]),t=Object(s.a)(e,2),c=t[0],n=t[1];a.a.useEffect((function(){r()}),[]);var r=function(){var e=Object(S.a)(R.a.mark((function e(){var t,c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://apiv1.geoapi.es/comunidades?type=JSON&key=&sandbox=1");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,console.log(c),n(c.data);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(M.jsx)("div",{children:c.map((function(e){return Object(M.jsx)("ul",{children:Object(M.jsxs)(E.b,{to:"/geoapi/".concat(e.data),style:{color:"#252122"},children:[e.CCOM,"-",e.COM]})},e.data)}))})},B=c(52),I=function(){var e=Object(B.f)().data,t=a.a.useState([]),c=Object(s.a)(t,2),n=c[0],r=c[1];return a.a.useEffect((function(){(function(){var t=Object(S.a)(R.a.mark((function t(){var c,n;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://apiv1.geoapi.es/provincias?CCOM=".concat(e,"01&type=JSON&key=&sandbox=1"));case 2:return c=t.sent,t.next=5,c.json();case 5:n=t.sent,r(n);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(M.jsxs)("div",{children:[Object(M.jsx)("h2",{children:n.data}),Object(M.jsx)("h3",{children:n.CCOM})]})},L=c(95),z=c(96),F=c(99),T=c(98),J=function(e){Object(F.a)(c,e);var t=Object(T.a)(c);function c(){return Object(L.a)(this,c),t.apply(this,arguments)}return Object(z.a)(c,[{key:"render",value:function(){return Object(M.jsx)("div",{children:Object(M.jsx)("div",{class:"card-group justify-content-center ",children:Object(M.jsx)("div",{class:"card",children:Object(M.jsxs)("div",{class:"card-body",children:[Object(M.jsx)("h3",{class:"card-title",textAlign:"center",children:"Comunidades"}),Object(M.jsx)("p",{class:"card-text",children:Object(M.jsx)(A,{})})]})})})})}}]),c}(a.a.Component),P=c.p+"static/media/descarga.12ff1045.jpg",D=function(e){Object(F.a)(c,e);var t=Object(T.a)(c);function c(){return Object(L.a)(this,c),t.apply(this,arguments)}return Object(z.a)(c,[{key:"render",value:function(){return Object(M.jsx)("div",{children:Object(M.jsx)("div",{class:"card-group",children:Object(M.jsxs)("div",{class:"card",children:[Object(M.jsx)("img",{class:"card-img-top",src:P,alt:"Card image cap"}),Object(M.jsxs)("div",{class:"card-body",children:[Object(M.jsx)("h3",{class:"card-title",children:"Restricciones"}),Object(M.jsx)("p",{class:"card-text",children:"Haz Click en cualquier comunidad para acceder a las restricciones"})]}),Object(M.jsxs)("div",{class:"card-footer",children:[Object(M.jsx)("small",{class:"text-muted",children:"Actualizaciones diarias de restricciones"}),Object(M.jsx)("button",{style:{backgroundcolor:"#858484"},onClick:this.handleClick,children:"Abrir Chat"})]})]})})})}}]),c}(a.a.Component),U=(c(410),a.a.Component,c(411),c(223)),q=function(e){Object(F.a)(c,e);var t=Object(T.a)(c);function c(){return Object(L.a)(this,c),t.apply(this,arguments)}return Object(z.a)(c,[{key:"render",value:function(){return Object(M.jsx)("div",{children:Object(M.jsx)(U.Form,{src:"https://jehxlsbniufgcnr.form.io/login",style:{color:"#252122"}})})}}]),c}(a.a.Component),G=function(e){Object(F.a)(c,e);var t=Object(T.a)(c);function c(){return Object(L.a)(this,c),t.apply(this,arguments)}return Object(z.a)(c,[{key:"render",value:function(){return Object(M.jsx)("div",{children:Object(M.jsx)(U.Form,{src:"https://jehxlsbniufgcnr.form.io/register",style:{color:"#252122"}})})}}]),c}(a.a.Component),H=Object(l.a)((function(e){return{grow:{flexGrow:1,backgroundColor:"rgba(34,30,31,0.88)",color:"inherit"},menuButton:{marginRight:e.spacing(2),backgroundColor:"rgba(34,30,31,0.88)",color:"#ffffff"},title:Object(o.a)({display:"none"},e.breakpoints.up("sm"),{display:"block",color:"inherit"}),search:Object(o.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(j.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(j.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(o.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(o.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(o.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}));var K=function(){var e=H(),t=a.a.useState(null),c=Object(s.a)(t,2),n=c[0],r=c[1],i=a.a.useState(null),o=Object(s.a)(i,2),l=o[0],j=o[1],x=Boolean(n),g=Boolean(l),v=function(e){r(e.currentTarget)},C=function(){j(null)},N=function(){r(null),C()},R="primary-search-account-menu",S=Object(M.jsxs)(O.a,{anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},id:R,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:x,onClose:N,children:[Object(M.jsx)(p.a,{onClick:N,children:"Sobre Nosotros"}),Object(M.jsx)(p.a,{onClick:N,children:Object(M.jsx)(E.b,{id:"app",to:"/Login",children:"Cuenta"})}),Object(M.jsx)(p.a,{onClick:N,children:Object(M.jsx)(E.b,{id:"app",to:"/Register",children:"Registrarse"})})]}),L="primary-search-account-menu-mobile",z=Object(M.jsx)(O.a,{anchorEl:l,anchorOrigin:{vertical:"top",horizontal:"right"},id:L,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:g,onClose:C,children:Object(M.jsx)(w.a,{title:"CUENTA",children:Object(M.jsxs)(p.a,{onClick:v,children:[Object(M.jsx)(b.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit",children:Object(M.jsx)(y.a,{})}),Object(M.jsx)("p",{children:"Perfil"})]})})});return Object(M.jsx)(E.a,{children:Object(M.jsxs)("div",{className:"App",children:[Object(M.jsx)(d.a,{position:"static",style:{backgroundColor:"rgba(34,30,31,0.88)"},children:Object(M.jsxs)(u.a,{children:[Object(M.jsx)(E.b,{to:"https://apiv1.geoapi.es/comunidades?type=JSON&key=&sandbox=1",children:Object(M.jsx)(b.a,{edge:"start",className:e.menuButton,color:"#ffffff","aria-label":"open drawer",children:Object(M.jsx)(f.a,{})})}),Object(M.jsxs)("div",{className:e.search,children:[Object(M.jsx)("div",{className:e.searchIcon,children:Object(M.jsx)(m.a,{})}),Object(M.jsx)(h.a,{placeholder:"Buscar\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})]}),Object(M.jsx)("div",{className:e.grow}),Object(M.jsx)("div",{className:e.sectionDesktop,children:Object(M.jsx)(w.a,{title:"CUENTA",children:Object(M.jsx)(b.a,{edge:"end","aria-label":"account of current user","aria-controls":R,"aria-haspopup":"true",onClick:v,color:"inherit",children:Object(M.jsx)(y.a,{})})})}),Object(M.jsx)("div",{className:e.sectionMobile,children:Object(M.jsx)(b.a,{"aria-label":"show more","aria-controls":L,"aria-haspopup":"true",onClick:function(e){j(e.currentTarget)},color:"inherit",children:Object(M.jsx)(k.a,{})})})]})}),Object(M.jsxs)(B.c,{children:[Object(M.jsx)(B.a,{path:"/Chat",exact:!0}),Object(M.jsx)(B.a,{path:"/Register",exact:!0,children:Object(M.jsx)(G,{})}),Object(M.jsx)(B.a,{path:"/Login",exact:!0,children:Object(M.jsx)(q,{})}),Object(M.jsx)(B.a,{path:"/:data",exact:!0,children:Object(M.jsx)(I,{})}),Object(M.jsx)(B.a,{path:"/",exact:!0})]}),z,S,Object(M.jsx)("div",{class:"container p-4",children:Object(M.jsx)("h1",{style:{textAlign:"center",color:"#d52349"},children:"Restricciones Comunidades Aut\xf3nomas, Espa\xf1a"})}),Object(M.jsx)("div",{class:"container-fluid content-row justify-content-center",children:Object(M.jsxs)("div",{class:"row",children:[Object(M.jsx)("div",{class:"col",children:Object(M.jsx)(J,{children:Object(M.jsx)(A,{})})}),Object(M.jsx)("div",{class:"col",children:Object(M.jsx)(D,{})})]})})]})})},Q=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,1264)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))};i.a.render(Object(M.jsx)(a.a.StrictMode,{children:Object(M.jsx)(K,{})}),document.getElementById("root")),Q()},403:function(e,t,c){},404:function(e,t,c){},410:function(e,t,c){}},[[1215,1,2]]]);
//# sourceMappingURL=main.5e1172db.chunk.js.map