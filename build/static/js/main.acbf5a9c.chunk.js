(this["webpackJsonpWhat-The-Spec"]=this["webpackJsonpWhat-The-Spec"]||[]).push([[0],{10:function(e,t,n){"use strict";t.a={UPDATE_QUOTE:"UPDATE_QUOTE",UPDATE_VIEW:"UPDATE_VIEW"}},17:function(e,t,n){e.exports={base:"Nav_base__w5ntu",css:"Nav_css__3uoE3",html:"Nav_html__dXWE2",js:"Nav_js__ADGBP"}},21:function(e,t,n){"use strict";var a=n(10),r=[].concat([{quote:'What\'s the difference between "Candidate Recommendation" and "Proposed Recommendation" again?',cite:"Jeff"},{quote:'What the spec is "FPWD"?',cite:"Jeff"},{quote:"Just going to look that up real quick...",cite:"Jeff"}],[{cite:"Jess",quote:"Does that mean it's ready to use?"},{quote:'What the spec is "Living Standards"?',cite:"Jess"},{quote:"Just need a refresher on that TC39 process.",cite:"Jess"}]),o=r[Math.floor(Math.random()*r.length)];n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var c=a.a.UPDATE_QUOTE,l=a.a.UPDATE_VIEW,i=o||{},s=function(){return{type:c,payload:i}},u=function(e){return{type:l,view:e}}},26:function(e,t,n){e.exports={base:"Body_base__TVDqZ",title:"Body_title__3VWMq"}},30:function(e,t,n){e.exports={base:"Header_base__1BVUv"}},35:function(e,t,n){e.exports={base:"Footer_base__sFEnN"}},38:function(e,t,n){e.exports=n(52)},47:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(18),c=n.n(o),l=n(14),i=n(16),s=n(27),u=n(10),h=u.a.UPDATE_QUOTE,f=u.a.UPDATE_VIEW,m={quote:"",cite:""},d={view:window.location.pathname.replace("/","")},p=(n(47),n(9)),E=n(30),b=n.n(E),v=n(17),g=n.n(v),w=n(21),y=n(11),_=n(12);var j=function(){var e=Object(l.c)((function(e){return e.updateSpecView.view})),t=Object(l.b)(),n=function(e){t(Object(w.b)(e))};return Object(a.useEffect)((function(){t(Object(w.b)(e))}),[t,e]),r.a.createElement("nav",{"data-view":e,className:g.a.base},r.a.createElement("ul",null,r.a.createElement("li",{className:g.a.css},r.a.createElement(p.b,{to:"/css",onClick:function(){return n("css")}},r.a.createElement(y.a,{icon:_.a}),"CSS")),r.a.createElement("li",{className:g.a.html},r.a.createElement(p.b,{to:"/html",onClick:function(){return n("html")}},r.a.createElement(y.a,{icon:_.c}),"HTML")),r.a.createElement("li",{className:g.a.js,onClick:function(){return n("javascript")}},r.a.createElement(p.b,{to:"javascript"},r.a.createElement(y.a,{icon:_.d}),"Javascript"))))},W=function(){return r.a.createElement("header",{className:b.a.base},r.a.createElement("hgroup",null,r.a.createElement("h1",null,r.a.createElement("span",null,"W"),"hat ",r.a.createElement("span",null,"T"),"he ",r.a.createElement("span",null,"S"),"pec?"),r.a.createElement("h2",null,"Definitions on proposal stages for CSS, HTML & Javascript specifications")),r.a.createElement(j,null))},O=n(8),T=n(26),k=n.n(T),S=n(32),N=n(33),U=n(36),D=n(34),A=n(37),P=function(e){function t(e){var n;return Object(S.a)(this,t),(n=Object(U.a)(this,Object(D.a)(t).call(this,e))).state={hasError:!1,error:null},n}return Object(A.a)(t,e),Object(N.a)(t,[{key:"componentDidCatch",value:function(e,t){console.error(e,t)}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("div",{style:{fontWeight:"normal"}},r.a.createElement("h1",null,"Oops! We got nothing."),r.a.createElement("h3",null,"Error loading route")):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0,error:e}}}]),t}(a.Component),q=Object(a.lazy)((function(){return n.e(6).then(n.bind(null,59))})),C=Object(a.lazy)((function(){return n.e(3).then(n.bind(null,56))})),J=Object(a.lazy)((function(){return n.e(4).then(n.bind(null,57))})),V=Object(a.lazy)((function(){return n.e(5).then(n.bind(null,58))})),x=function(){return r.a.createElement(P,null,r.a.createElement("section",{className:k.a.base},r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",{className:k.a.title},"Loading...")},r.a.createElement(O.c,null,r.a.createElement(O.a,{exact:!0,path:"/",component:q}),r.a.createElement(O.a,{path:"/css",component:C}),r.a.createElement(O.a,{path:"/html",component:J}),r.a.createElement(O.a,{path:"/javascript",component:V})))))},B=n(35),L=n.n(B),R=function(){return r.a.createElement("footer",{className:L.a.base},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("em",null,"What The Spec?")),r.a.createElement("li",null,"Source code on ",r.a.createElement(y.a,{icon:_.b})," ",r.a.createElement("a",{href:"https://github.com/UncaughtTypeError/What-The-Spec/",target:"_blank",rel:"noopener",title:"Github Repo"},"GitHub")),r.a.createElement("li",null,"Hosted on, and deployed by ",r.a.createElement("a",{href:"https://netlify.com/",target:"_blank",rel:"noopener",title:"Netlify"},"Netlify ",r.a.createElement("img",{width:"80",loading:"lazy",alt:"Netlify",src:"https://www.netlify.com/img/global/badges/netlify-dark.svg"})))))},z=function(){return r.a.createElement(p.a,null,r.a.createElement(W,null),r.a.createElement(x,null),r.a.createElement(R,null))},H=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var M=Object(i.b)({updateQuote:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case h:return Object(s.a)({},e,{quote:t.payload.quote,cite:t.payload.cite});default:return e}},updateSpecView:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case f:return Object(s.a)({},e,{view:t.view});default:return e}}}),Q=Object(i.c)(M);c.a.render(r.a.createElement(l.a,{store:Q},r.a.createElement(z,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");H?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):I(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):I(t,e)}))}}()}},[[38,1,2]]]);
//# sourceMappingURL=main.acbf5a9c.chunk.js.map