(this.webpackJsonpmycovid19=this.webpackJsonpmycovid19||[]).push([[0],{1225:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(32),i=c.n(r),s=(c(414),c(119)),o=c(120),l=(c(415),c(1277)),j=c(58),d=c(1280),b=c(1281),u=c(1279),h=c(1282),p=c(1286),O=c(1283),x=c(397),f=c.n(x),g=c(398),m=c.n(g),v=c(292),y=c.n(v),C=c(399),k=c.n(C),w=c(1287),M=c(132),N=c.n(M),S=c(223),R=c(394),E=c(106),z=c(1285),A=c(1275),B=c(1273),I=c(1274),T=c(1272),L=c(1276),F=c(1268),J=c(54),q=(c(150),c(68)),D=c(69),P=c(72),H=c(71),U=c(2),G=function(e){Object(P.a)(c,e);var t=Object(H.a)(c);function c(){return Object(q.a)(this,c),t.apply(this,arguments)}return Object(D.a)(c,[{key:"render",value:function(){return Object(U.jsx)("div",{children:Object(U.jsxs)("footer",{class:"bg-light text-center text-lg-start",children:[Object(U.jsx)("div",{class:"container p-4 pb-0"}),Object(U.jsx)("div",{class:"text-center p-3",style:{backgroundColor:"rgba(0, 0, 0, 0.87)"},children:Object(U.jsx)("a",{class:"text-white",children:"\xa9 2021 Copyright: Berny Jim\xe9nez S\xe1nchez"})})]})})}}]),c}(a.a.Component),K=function(){var e=Object(J.f)().COM;console.log(e);var t=a.a.useState([]),c=Object(s.a)(t,2),n=(c[0],c[1]);return a.a.useEffect((function(){(function(){var t=Object(S.a)(N.a.mark((function t(){var c,a;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://apiv1.geoapi.es/provincias?CCOM=".concat(e,"&type=JSON&key=&sandbox=1"));case 2:return c=t.sent,t.next=5,c.json();case 5:a=t.sent,n(a);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(U.jsxs)("div",{class:" justify-content-center .bg-transparent",children:[Object(U.jsx)("h1",{children:e}),Object(U.jsxs)("p",{children:["Toque de queda: No",Object(U.jsx)("p",{children:"Movilidad: Se mantienen cierres en localidades que pasen de 500 de incidencia acumulada*"}),Object(U.jsx)("p",{children:"Reuni\xf3n: Sin l\xedmites en las reuniones sociales Comercio y restauraci\xf3n: Hasta la 1.00 y m\xe1ximo de 10"})]}),Object(U.jsx)("p",{children:"personas Incidencia**: 96"})]})},Q=a.a.forwardRef((function(e,t){return Object(U.jsx)(F.a,Object(R.a)({direction:"up",ref:t},e))})),V=function(){var e=a.a.useState(!1),t=Object(s.a)(e,2),c=t[0],n=t[1],r=function(){n(!0)},i=function(){n(!1)},o=a.a.useState([]),l=Object(s.a)(o,2),j=l[0],d=l[1];a.a.useEffect((function(){b()}),[]);var b=function(){var e=Object(S.a)(N.a.mark((function e(){var t,c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://apiv1.geoapi.es/comunidades?type=JSON&key=ace7ae841a8385807b7b68b3d443aca05b3ab9c04417c0bc8fb8b1d6f8179da1");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,console.log(c),d(c.data);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(U.jsx)("div",{children:j.map((function(e){return Object(U.jsxs)("ul",{children:[Object(U.jsxs)(E.b,{to:"/".concat(e.COM),style:{color:"#252122"},variant:"outlined",color:"primary",onClick:r,children:[e.CCOM,"-",e.COM]}),Object(U.jsxs)(z.a,{open:c,TransitionComponent:Q,keepMounted:!0,onClose:i,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description",class:"bg-light",children:[Object(U.jsx)(T.a,{id:"alert-dialog-title",children:Object(U.jsx)(K,{children:e.COM},e.data)}),Object(U.jsx)(B.a,{children:Object(U.jsx)(I.a,{id:"alert-dialog-description"})}),Object(U.jsx)(A.a,{children:Object(U.jsx)(L.a,{onClick:i,color:"primary",children:"Cerrar"})}),Object(U.jsx)(G,{})]})]},e.data)}))})},W=function(e){Object(P.a)(c,e);var t=Object(H.a)(c);function c(){return Object(q.a)(this,c),t.apply(this,arguments)}return Object(D.a)(c,[{key:"render",value:function(){return Object(U.jsx)("div",{children:Object(U.jsx)("div",{class:"card-group justify-content-center bg-light",children:Object(U.jsx)("div",{class:"card bg-light",children:Object(U.jsxs)("div",{class:"card-body",children:[Object(U.jsx)("h3",{class:"card-title",textAlign:"center",children:"Comunidades"}),Object(U.jsx)("p",{class:"card-text",children:Object(U.jsx)(V,{})})]})})})})}}]),c}(a.a.Component),X=c.p+"static/media/descarga.12ff1045.jpg",Y=function(e){Object(P.a)(c,e);var t=Object(H.a)(c);function c(){return Object(q.a)(this,c),t.apply(this,arguments)}return Object(D.a)(c,[{key:"render",value:function(){return Object(U.jsx)("div",{children:Object(U.jsx)("div",{class:"card-group bg-light",children:Object(U.jsxs)("div",{class:"card bg-light",children:[Object(U.jsx)("img",{class:"card-img-top",src:X,alt:"Card image cap"}),Object(U.jsxs)("div",{class:"card-body",children:[Object(U.jsx)("h3",{class:"card-title",children:"Restricciones"}),Object(U.jsx)("p",{class:"card-text",children:"Haz Click en cualquier comunidad para acceder a las restricciones"})]}),Object(U.jsxs)("div",{class:"card-footer",children:[Object(U.jsx)("small",{class:"text-muted",children:"Actualizaciones diarias de restricciones"}),Object(U.jsx)("button",{style:{backgroundcolor:"#858484"},onClick:this.handleClick,children:"Abrir Chat"})]})]})})})}}]),c}(a.a.Component),Z=(c(421),a.a.Component,c(229)),$=function(e){Object(P.a)(c,e);var t=Object(H.a)(c);function c(){return Object(q.a)(this,c),t.apply(this,arguments)}return Object(D.a)(c,[{key:"render",value:function(){return Object(U.jsx)("div",{children:Object(U.jsx)(Z.Form,{src:"https://jehxlsbniufgcnr.form.io/login",style:{color:"#252122"}})})}}]),c}(a.a.Component),_=function(e){Object(P.a)(c,e);var t=Object(H.a)(c);function c(){return Object(q.a)(this,c),t.apply(this,arguments)}return Object(D.a)(c,[{key:"render",value:function(){return Object(U.jsx)("div",{children:Object(U.jsx)(Z.Form,{src:"https://jehxlsbniufgcnr.form.io/register",style:{color:"#252122"}})})}}]),c}(a.a.Component),ee=(a.a.Component,Object(l.a)((function(e){return{grow:{flexGrow:1,backgroundColor:"rgba(34,30,31,0.88)",color:"inherit"},menuButton:{marginRight:e.spacing(2),backgroundColor:"rgba(34,30,31,0.88)",color:"#ffffff"},title:Object(o.a)({display:"none"},e.breakpoints.up("sm"),{display:"block",color:"inherit"}),search:Object(o.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(j.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(j.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(o.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(o.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(o.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}})));var te=function(){var e=ee(),t=a.a.useState(null),c=Object(s.a)(t,2),n=c[0],r=c[1],i=a.a.useState(null),o=Object(s.a)(i,2),l=o[0],j=o[1],x=Boolean(n),g=Boolean(l),v=function(e){r(e.currentTarget)},C=function(){j(null)},M=function(){r(null),C()},N="primary-search-account-menu",S=Object(U.jsxs)(O.a,{anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},id:N,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:x,onClose:M,children:[Object(U.jsx)(p.a,{onClick:M,children:"Sobre Nosotros"}),Object(U.jsx)(p.a,{onClick:M,children:Object(U.jsx)(E.b,{id:"app",to:"/Login",children:"Cuenta"})}),Object(U.jsx)(p.a,{onClick:M,children:Object(U.jsx)(E.b,{id:"app",to:"/Register",children:"Registrarse"})})]}),R="primary-search-account-menu-mobile",z=Object(U.jsx)(O.a,{anchorEl:l,anchorOrigin:{vertical:"top",horizontal:"right"},id:R,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:g,onClose:C,children:Object(U.jsx)(w.a,{title:"CUENTA",children:Object(U.jsx)(p.a,{onClick:v,children:Object(U.jsx)(u.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit",children:Object(U.jsx)(y.a,{})})})})});return Object(U.jsx)(E.a,{children:Object(U.jsxs)("div",{className:"App",children:[Object(U.jsx)(d.a,{position:"static",style:{backgroundColor:"rgba(34,30,31,0.88)"},children:Object(U.jsxs)(b.a,{children:[Object(U.jsx)(E.b,{to:"https://apiv1.geoapi.es/comunidades?type=JSON&key=&sandbox=1",children:Object(U.jsx)(u.a,{edge:"start",className:e.menuButton,color:"#ffffff","aria-label":"open drawer",children:Object(U.jsx)(f.a,{})})}),Object(U.jsxs)("div",{className:e.search,children:[Object(U.jsx)("div",{className:e.searchIcon,children:Object(U.jsx)(m.a,{})}),Object(U.jsx)(h.a,{placeholder:"Buscar\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})]}),Object(U.jsx)("div",{className:e.grow}),Object(U.jsx)("div",{className:e.sectionDesktop,children:Object(U.jsx)(w.a,{title:"CUENTA",children:Object(U.jsx)(u.a,{edge:"end","aria-label":"account of current user","aria-controls":N,"aria-haspopup":"true",onClick:v,color:"inherit",children:Object(U.jsx)(y.a,{})})})}),Object(U.jsx)("div",{className:e.sectionMobile,children:Object(U.jsx)(u.a,{"aria-label":"show more","aria-controls":R,"aria-haspopup":"true",onClick:function(e){j(e.currentTarget)},color:"inherit",children:Object(U.jsx)(k.a,{})})})]})}),Object(U.jsxs)(J.c,{children:[Object(U.jsx)(J.a,{path:"/Chat",exact:!0}),Object(U.jsx)(J.a,{path:"/Register",exact:!0,children:Object(U.jsx)(_,{})}),Object(U.jsx)(J.a,{path:"/Login",exact:!0,children:Object(U.jsx)($,{})}),Object(U.jsx)(J.a,{path:"/:COM",exact:!0}),Object(U.jsx)(J.a,{path:"/",exact:!0})]}),z,S,Object(U.jsx)("div",{class:"container p-4",children:Object(U.jsx)("h1",{style:{textAlign:"center",color:"#d52349"},children:"Restricciones Comunidades Aut\xf3nomas, Espa\xf1a"})}),Object(U.jsx)("div",{class:"container-fluid content-row justify-content-center",children:Object(U.jsxs)("div",{class:"row",children:[Object(U.jsx)("div",{class:"col",children:Object(U.jsx)(W,{children:Object(U.jsx)(V,{})})}),Object(U.jsx)("div",{class:"col",children:Object(U.jsx)(Y,{})})]})}),Object(U.jsx)("div",{})]})})},ce=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,1288)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))};i.a.render(Object(U.jsx)(a.a.StrictMode,{children:Object(U.jsx)(te,{})}),document.getElementById("root")),ce()},414:function(e,t,c){},415:function(e,t,c){},421:function(e,t,c){}},[[1225,1,2]]]);
//# sourceMappingURL=main.afdc0c11.chunk.js.map