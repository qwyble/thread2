(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{0:function(n,e,t){t("5b15df55c1316f23e9d0"),n.exports=t("8b703812aa8ae3c41814")},"02619d7892182f52bb37":function(n,e,t){var r=t("5d79f0a0b9e0f764ab58");"string"===typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t("1e4534d1d62a11482e97")(r,o);r.locals&&(n.exports=r.locals)},"0962f52d4fac404c08b4":function(n,e,t){"use strict";var r,o=t("d74b4b79960f2e7702d0"),i=t.n(o);t("8af190b70a6bc55c6f1b");function a(n,e,t,o){r||(r="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=n&&n.defaultProps,a=arguments.length-3;if(e||0===a||(e={children:void 0}),e&&i)for(var c in i)void 0===e[c]&&(e[c]=i[c]);else e||(e=i||{});if(1===a)e.children=o;else if(a>1){for(var u=new Array(a),f=0;f<a;f++)u[f]=arguments[f+3];e.children=u}return{$$typeof:r,type:n,key:void 0===t?null:""+t,ref:null,props:e,_owner:null}}var c=a("div",{},void 0,a(i.a,{active:!0}));e.a=function(){return c}},"0cbc23df16a5c6ceec4d":function(n,e,t){n.exports=t.p+".htaccess"},"1be39f43959432ca8f11":function(n,e,t){"use strict";var r=t("54f683fcda7806277002"),o=t("a5649f2d3e74e117afa0"),i=Object(r.fromJS)({user:Object(r.fromJS)({}),isLoggedIn:!1,isLoading:!0});e.a=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case o.a:return n.set("isLoading",!0);case o.c:return n.set("isLoggedIn",!0).set("user",Object(r.fromJS)(e.user)).set("isLoading",!1);case o.b:return n.set("isLoading",!1);default:return n}}},"3bf1551a8dbe31d8f3b6":function(n,e,t){"use strict";t.d(e,"b",function(){return r}),t.d(e,"a",function(){return o});var r="boilerplate/ErrorWrapper/SET_ERROR",o="boilerplate/ErrorWrapper/REMOVE_ERROR"},"491cc2e27aa2b4221847":function(n,e,t){"use strict";t.d(e,"a",function(){return u});var r=t("4e2e9348dad8fe460c1d"),o=t("accfe20dac886d57b695"),i=t("5e98cee1846dbfd41421"),a=t("1be39f43959432ca8f11");function c(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function u(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object(r.combineReducers)(function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.forEach(function(e){c(n,e,t[e])})}return n}({appReducer:a.a},n));return Object(o.connectRouter)(i.a)(e)}},"54c794702af6f0dc8632":function(n,e,t){var r=t("f7c283a123cd789c161e");"string"===typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t("1e4534d1d62a11482e97")(r,o);r.locals&&(n.exports=r.locals)},"5d79f0a0b9e0f764ab58":function(n,e,t){(n.exports=t("c138e55a31f3f8960e99")(!1)).push([n.i,".checkboxSpan {\n  height: 25px;\n  width: 25px;\n  background-color: #eee;\n}\n.ui.fluid.search .results {\n  opacity: 0.95;\n}\n\n.messagePortal {\n  position: relative !important;\n  margin: auto !important;\n}\n\n.ui.segment {\n  background-color: rgba(255, 255, 255, 0.9) !important;\n  border-radius: 0px;\n}\n\n.messageCheckbox {\n  z-index: 1000000;\n}\n\n.ui.segment.messagesTable {\n  position: fixed;\n  top: 10vh !important;\n  margin-top: 1% !important;\n  left: 25vw;\n}\n\n.ui.thin.left.sidebar.messagesSidebar {\n  height: 60vh;\n  max-height: 60vh;\n  position: relative;\n  background-color: rgba(255, 255, 255, 0.6);\n}\n\n.fillerDiv {\n  background-color: rgba(0, 0, 0, 1);\n  height: 10vh;\n}\n\n.ui.menu.topBar {\n  z-index: 1000000;\n  width: 100vw;\n  height: 7vh;\n  min-height: 30px !important;\n  max-height: 50px !important;\n}\n\n.ui.search > .results .result .image.searchImage {\n  float: left;\n  width: 35px;\n  height: auto;\n  border-radius: 500rem;\n}\n\n.ui.fluid.search .results {\n  height: 70vh;\n  overflow: auto;\n}\n\n.prompt {\n  border-radius: 2px !important;\n  opacity: 0.8;\n}\n\n.ui.modal.profileModal {\n  margin: auto;\n}\n.ui.button.playlistButton {\n  padding-right: 1cm !important;\n  width: 100% !important;\n  color: white !important;\n  background-color: #2bbbff;\n  opacity: 0.8;\n}\n\n.songInfoContainer {\n  position: relative;\n  top: 100px;\n}\n\n#pButton {\n  border: none;\n\n  background-position: center;\n  margin: 0;\n  padding: 0;\n  height: 100% !important;\n  width: 100% !important;\n}\n\n.ui.progress .bar {\n  height: 80% !important;\n}\n.progress {\n  margin: 0 !important;\n\n  height: 80% !important;\n}\n\n.primaryContainer {\n  height: 86vh !important;\n  margin: 0 !important;\n}\n\n.audioContainer {\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.9) !important;\n  color: #2bbbff !important;\n  position: fixed;\n  bottom: 0;\n  padding-bottom: 20px !important;\n  height: 55px !important;\n  width: 100vw;\n}\n.ui.grid {\n  margin-top: 0em !important;\n  margin-bottom: 0em !important;\n}\n\n.playerCol {\n  color: #2bbbff !important;\n}\n\n.sideBarLoader {\n  padding-top: 20% !important;\n\n  padding-bottom: 20% !important;\n}\n\n.stickyTop {\n  position: -webkit-sticky !important;\n  position: sticky !important;\n  top: 0 !important;\n  background: rgba(0, 0, 0, 0.3) !important;\n  z-index: 100;\n}\n.stickyBottom {\n  position: -webkit-sticky !important;\n  position: sticky !important;\n  bottom: 0 !important;\n  background: rgba(0, 0, 0, 0.5) !important;\n}\n\n.ui.inverted.table.t1 {\n  margin: 0 !important;\n  color: rgba(255, 255, 255, 0.8) !important;\n}\n\n.ui.rating .active.icon {\n  color: rgba(43, 187, 255, 0.9) !important;\n}\n\n.ui.labeled.icon.button.button2 {\n  width: 100%;\n  right: 0%;\n  height: 100%;\n  padding-left: 0px;\n}\n\n.ui.labeled.icon.menu .item .sideBarItem {\n  width: 100%;\n  padding: 0;\n  font-size: 0.5rem;\n}\n\n.ui.inverted.menu .item.sideBarItem {\n  width: 100%;\n  padding: 0;\n  font-size: 0.5rem;\n}\n\n.ui.labeled.icon.menu .item > .icon:not(.dropdown).button2 {\n  margin: 0 !important;\n  height: auto;\n}\n\n.ui.floating.dropdown .menu {\n  z-index: 1000000 !important;\n}\n\n.ui.dropdown.dropOverlay {\n  position: absolute;\n  font-size: 0.9rem;\n  float: left;\n  left: 1%;\n  top: 20%;\n\n  z-index: 100;\n  color: #2bbbff !important;\n}\n\n.ui.modal.uploadModal {\n  vertical-align: middle !important;\n  position: relative;\n  margin: auto !important;\n  margin-top: 0vh !important;\n}\n\n.button {\n  border-radius: 0 !important;\n  border-style: hidden !important;\n  border-width: 0px !important;\n  box-shadow: 0 0 0 0px inset !important;\n}\n\n.ui.menu .sideItems {\n  padding: 0em !important;\n}\n.ui.labeled.icon.menu .item {\n}\n\n.ui.icon.button.trashcan {\n  position: fixed !important;\n  float: right;\n  z-index: 10000 !important;\n  right: 0%;\n}\n\n.pushable > .pusher.pusherContainer {\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.8);\n  margin: 0 !important;\n  width: 100%;\n}\n\n.ui.inverted.blue.button.sidebarButton {\n  position: fixed;\n  z-index: 123421;\n}\n\n.ui.thin.left.sidebar,\n.ui.thin.right.sidebar {\n  width: 13vw !important;\n}\n\n.ui.visible.thin.left.sidebar ~ .pusher {\n  -webkit-transform: translate3d(15vw, 0, 0);\n  transform: translate3d(15vw, 0, 0);\n  transition: transform 1s;\n}\n\n.ui.visible.thin.left.sidebar ~ .pusher {\n  width: 87% !important;\n  transform: scale(85%, 100%) !important;\n  overflow: auto !important;\n  transition: width 0.5s, transform 0.5s;\n}\n\n.ui.visible.left.sidebar ~ .pusher {\n  transform: translate3d(13vw, 0, 0) !important;\n}\n\n.ui.thin.left.sidebar ~ .pusher {\n  width: 100%;\n  transition: width 0.5s, transform 0.5s;\n}\n\n.App {\n  text-align: center;\n}\n\n.App-logo {\n  animation: App-logo-spin infinite 4s linear;\n  height: 20px;\n}\n\n.App-header {\n  background-color: #222;\n  height: 150px;\n  padding: 20px;\n  color: white;\n}\n\n.App-title {\n  font-size: 1.5em;\n}\n\n.App-intro {\n  font-size: large;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n",""])},"5e98cee1846dbfd41421":function(n,e,t){"use strict";var r=t("89fa59dfd48f288c4600"),o=t.n(r)()();e.a=o},"6203e81e86b152a86ac0":function(n,e,t){"use strict";t.d(e,"b",function(){return o}),t.d(e,"a",function(){return i});var r=t("3bf1551a8dbe31d8f3b6");function o(n){return{type:r.b,error:n}}function i(){return{type:r.a}}},"70c8781683003416b6b7":function(n,e,t){"use strict";t.d(e,"c",function(){return i}),t.d(e,"b",function(){return a}),t.d(e,"a",function(){return c});var r=t("a28fc3c963a1d4d1a2e5"),o=function(n){return n.get("UserContainer")},i=function(){return Object(r.a)(o,function(n){return n.get("user")})},a=function(){return Object(r.a)(o,function(n){return n.get("isLoggedIn")})},c=function(){return Object(r.a)(o,function(n){return n.get("isLoading")})}},"8b703812aa8ae3c41814":function(n,e,t){"use strict";t.r(e);t("8c8e4f08a118a28666b0");var r=t("8af190b70a6bc55c6f1b"),o=t.n(r),i=t("63f14ac74ce296f77f4d"),a=t.n(i),c=t("d7dd51e1bf6bfc2c9c3d"),u=t("accfe20dac886d57b695"),f=t("260f3680b921ede7f717"),s=t.n(f),d=t("5e98cee1846dbfd41421"),p=(t("6735bdf1a3a541ab43fd"),t("02619d7892182f52bb37"),t("54c794702af6f0dc8632"),t("8a2d1b95e05b6a321e74"),t("ab4cb61bcb2dc161defb")),l=t("a28fc3c963a1d4d1a2e5"),b=t("e95a63b25fb92ed15721"),m=t("d95b0cf107403b178365"),g=t("adc20f99e57c573c589c"),h=t("5ab2f4c6a102c650b88f"),y=t.n(h),v=t("04e604007a0d180a9113"),w=t.n(v),j=t("54f683fcda7806277002"),O=t("3bf1551a8dbe31d8f3b6"),x=Object(j.fromJS)({error:""});var S=t("6c68d13fe9e3e77d8fc4"),k=t("74431d47afb6248fcb69"),R=t("6203e81e86b152a86ac0"),P=regeneratorRuntime.mark(_),E=regeneratorRuntime.mark(C);function _(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(S.e)(O.b,C);case 2:case"end":return n.stop()}},P,this)}function C(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(S.b)(k.b,5e3);case 2:return n.next=4,Object(S.c)(Object(R.a)());case 4:case"end":return n.stop()}},E,this)}var A,L=function(n){return n.get("GlobalError")};function T(n,e,t,r){A||(A="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=n&&n.defaultProps,i=arguments.length-3;if(e||0===i||(e={children:void 0}),e&&o)for(var a in o)void 0===e[a]&&(e[a]=o[a]);else e||(e=o||{});if(1===i)e.children=r;else if(i>1){for(var c=new Array(i),u=0;u<i;u++)c[u]=arguments[u+3];e.children=c}return{$$typeof:A,type:n,key:void 0===t?null:""+t,ref:null,props:e,_owner:null}}t("e29d5073d455f688a37f");var I=T("div",{}),z=Object(c.connect)(function(){return Object(l.b)({error:Object(l.a)(L,function(n){return n.get("error")})})}),U=Object(m.a)({key:"GlobalError",reducer:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case O.b:return n.set("error",e.error);case O.a:return n.set("error","");default:return n}}}),B=Object(g.a)({key:"GlobalError",saga:_}),M=Object(p.compose)(U,B,z)(function(n){return T(w.a,{open:!!n.error.length,className:"errorSegment"},void 0,T(y.a,{},void 0,T("div",{},void 0,n.error?T("div",{},void 0,n.error):I)))}),$=t("0962f52d4fac404c08b4"),J=t("49112c95d93be1863904"),W=t.n(J),D=W()({loader:function(){return Promise.all([t.e(4),t.e(24)]).then(t.bind(null,"2ecbb860f39717173921"))},loading:$.a,render:function(n,e){var t=n.default;return o.a.createElement(t,e)}}),N=W()({loader:function(){return Promise.all([t.e(0),t.e(4),t.e(18)]).then(t.bind(null,"040c5458573e01382f78"))},loading:$.a,render:function(n,e){var t=n.default;return o.a.createElement(t,e)}}),Y=t("70c8781683003416b6b7"),G=t("a5649f2d3e74e117afa0");var H,q=t("1be39f43959432ca8f11"),F=t("bd183afcc37eabd79225"),V=t.n(F),K=regeneratorRuntime.mark(X),Q=regeneratorRuntime.mark(Z);function X(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(S.e)(G.a,Z);case 2:case"end":return n.stop()}},K,this)}function Z(n){var e,t,r;return regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return e=n.creds,t=n.ext,o.prev=1,o.next=4,Object(S.b)(nn,[t,e]);case 4:return r=o.sent,o.next=7,Object(S.c)((i=r,{type:G.c,user:i}));case 7:o.next=15;break;case 9:return o.prev=9,o.t0=o.catch(1),o.next=13,Object(S.c)({type:G.b});case 13:return o.next=15,Object(S.c)(Object(R.b)(o.t0.message));case 15:case"end":return o.stop()}var i},Q,this,[[1,9]])}function nn(n,e){return V()({method:"get",url:"https://thread-204819.appspot.com/auth/".concat(n),data:e,withCredentials:!0}).then(function(n){return n.data}).catch(function(n){throw n})}function en(n){return(en="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function tn(){return(tn=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function rn(n,e,t,r){H||(H="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=n&&n.defaultProps,i=arguments.length-3;if(e||0===i||(e={children:void 0}),e&&o)for(var a in o)void 0===e[a]&&(e[a]=o[a]);else e||(e=o||{});if(1===i)e.children=r;else if(i>1){for(var c=new Array(i),u=0;u<i;u++)c[u]=arguments[u+3];e.children=c}return{$$typeof:H,type:n,key:void 0===t?null:""+t,ref:null,props:e,_owner:null}}function on(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function an(n){return(an=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function cn(n,e){return(cn=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function un(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}var fn=rn("div",{},void 0,"Authenticating . . ."),sn=rn(M,{}),dn=function(n){function e(){var n,t,r,o,i,a,c;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var u=arguments.length,f=new Array(u),s=0;s<u;s++)f[s]=arguments[s];return r=this,o=(n=an(e)).call.apply(n,[this].concat(f)),t=!o||"object"!==en(o)&&"function"!==typeof o?un(r):o,i=un(un(t)),c=function(){t.props.onLogout({},"logout")},(a="handleLogout")in i?Object.defineProperty(i,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[a]=c,t}var t,r,i;return function(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&cn(n,e)}(e,o.a.Component),t=e,(r=[{key:"componentDidMount",value:function(){this.props.onAuth({},"session")}},{key:"render",value:function(){var n=this;return console.log("rendering in UserContainer"),this.props.isLoading?rn("div",{},void 0,rn($.a,{style:{marginTop:"30vh"},active:!0,inline:"centered"}),fn):rn(b.BrowserRouter,{},void 0,rn("div",{},void 0,sn,rn(b.Switch,{},void 0,rn(b.Route,{path:"/auth",render:function(e){return o.a.createElement(N,tn({},e,{isLoggedIn:n.props.isLoggedIn,onAuth:n.props.onAuth}))}}),rn(b.Route,{path:"/",render:function(e){return o.a.createElement(D,tn({},e,{isLoggedIn:n.props.isLoggedIn,onLogout:n.handleLogout}))}}))))}}])&&on(t.prototype,r),i&&on(t,i),e}(),pn=Object(l.b)({isLoggedIn:Object(Y.b)(),isLoading:Object(Y.a)()});var ln=Object(c.connect)(pn,function(n){return{onAuth:function(e,t){return n(function(n,e){return{type:G.a,creds:n,ext:e}}(e,t))}}}),bn=Object(m.a)({key:"UserContainer",reducer:q.a}),mn=Object(g.a)({key:"UserContainer",saga:X}),gn=Object(p.compose)(bn,mn,ln)(dn),hn=(t("9c6be9f00377ac8be3d8"),t("0cbc23df16a5c6ceec4d"),t("491cc2e27aa2b4221847"));var yn,vn=Object(k.a)();function wn(n,e,t,r){yn||(yn="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=n&&n.defaultProps,i=arguments.length-3;if(e||0===i||(e={children:void 0}),e&&o)for(var a in o)void 0===e[a]&&(e[a]=o[a]);else e||(e=o||{});if(1===i)e.children=r;else if(i>1){for(var c=new Array(i),u=0;u<i;u++)c[u]=arguments[u+3];e.children=c}return{$$typeof:yn,type:n,key:void 0===t?null:""+t,ref:null,props:e,_owner:null}}new s.a("Open Sans",{}).load().then(function(){document.body.classList.add("fontLoaded")});var jn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,t=[vn,Object(u.routerMiddleware)(e)],r=[p.applyMiddleware.apply(void 0,t)],o=p.compose,i=Object(p.createStore)(Object(hn.a)(),Object(j.fromJS)(n),o.apply(void 0,r));return i.runSaga=vn.run,i.injectedReducers={},i.injectedSagas={},i}({},d.a),On=document.getElementById("app"),xn=wn(c.Provider,{store:jn},void 0,wn(u.ConnectedRouter,{history:d.a},void 0,wn(gn,{})));a.a.render(xn,On),t("30d14b3a3295666f3aba").install()},"9c6be9f00377ac8be3d8":function(n,e,t){n.exports=t.p+"favicon.ico"},a5649f2d3e74e117afa0:function(n,e,t){"use strict";t.d(e,"a",function(){return r}),t.d(e,"c",function(){return o}),t.d(e,"b",function(){return i});var r="boilerplate/UserContainer/AUTH_ATTEMPT",o="boilerplate/UserContainer/AUTH_SUCCESS",i="boilerplate/UserContainer/AUTH_FAILED"},adc20f99e57c573c589c:function(n,e,t){"use strict";var r=t("8af190b70a6bc55c6f1b"),o=t.n(r),i=t("8a2d1b95e05b6a321e74"),a=t.n(i),c=t("5ef9de3df8d92ea0e41c"),u=t.n(c),f=t("6a4f9c383785f9168266"),s=t.n(f),d=t("a1cf5d6fa4ed65a6ddd5"),p=t.n(d),l=t("f3b0ff1628e56352bcbf"),b=t.n(l),m=t("5fa3f8487e09c6182715"),g=t.n(m),h=t("f2873ecf7390fe7d7c89"),y=t.n(h),v=t("cc13decd9f9c09598c2f"),w="@@saga-injector/restart-on-remount",j="@@saga-injector/daemon",O="@@saga-injector/once-till-unmount";function x(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.forEach(function(e){S(n,e,t[e])})}return n}function S(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var k=[w,j,O],R=function(n){return s()(g()(n)&&!p()(n),"(app/utils...) injectSaga: Expected `key` to be a non empty string")},P=function(n){var e={saga:b.a,mode:function(n){return g()(n)&&k.includes(n)}};s()(y()(n,e),"(app/utils...) injectSaga: Expected a valid saga descriptor")};function E(n){return Object(v.a)(n),{injectSaga:function(n,e){return function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2?arguments[2]:void 0;e||Object(v.a)(n);var i=x({},r,{mode:r.mode||w}),a=i.saga,c=i.mode;R(t),P(i);var u=Reflect.has(n.injectedSagas,t);(!u||u&&c!==j&&c!==O)&&(n.injectedSagas[t]=x({},i,{task:n.runSaga(a,o)}))}}(n,!0),ejectSaga:function(n,e){return function(t){if(e||Object(v.a)(n),R(t),Reflect.has(n.injectedSagas,t)){var r=n.injectedSagas[t];r.mode!==j&&(r.task.cancel(),n.injectedSagas[t]="done")}}}(n,!0)}}function _(n){return(_="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function C(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function A(n){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function L(n,e){return(L=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function T(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function I(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}e.a=function(n){var e=n.key,t=n.saga,r=n.mode;return function(n){var i=function(i){function a(){var n,e,t,r;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return t=this,e=!(r=(n=A(a)).call.apply(n,[this].concat(i)))||"object"!==_(r)&&"function"!==typeof r?T(t):r,I(T(T(e)),"injectors",E(e.context.store)),e}var c,u,f;return function(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&L(n,e)}(a,o.a.Component),c=a,(u=[{key:"componentWillMount",value:function(){(0,this.injectors.injectSaga)(e,{saga:t,mode:r},this.props)}},{key:"componentWillUnmount",value:function(){(0,this.injectors.ejectSaga)(e)}},{key:"render",value:function(){return o.a.createElement(n,this.props)}}])&&C(c.prototype,u),f&&C(c,f),a}();return I(i,"WrappedComponent",n),I(i,"contextTypes",{store:a.a.object.isRequired}),I(i,"displayName","withSaga(".concat(n.displayName||n.name||"Component",")")),u()(i,n)}}},cc13decd9f9c09598c2f:function(n,e,t){"use strict";t.d(e,"a",function(){return d});var r=t("f2873ecf7390fe7d7c89"),o=t.n(r),i=t("f3b0ff1628e56352bcbf"),a=t.n(i),c=t("d3a850c4000d77bccc89"),u=t.n(c),f=t("6a4f9c383785f9168266"),s=t.n(f);function d(n){var e={dispatch:a.a,subscribe:a.a,getState:a.a,replaceReducer:a.a,runSaga:a.a,injectedReducers:u.a,injectedSagas:u.a};s()(o()(n,e),"(app/utils...) injectors: Expected a valid redux store")}},cd071fc931fa045428d5:function(n,e,t){(n.exports=t("c138e55a31f3f8960e99")(!1)).push([n.i,".errorSegment {\n  background-color: rgba(214, 12, 12, 0.6);\n  color: rgba(214, 12, 12, 0.9);\n  text-align: center;\n  position: fixed;\n  top: 0;\n  width: 100%;\n}\n",""])},d95b0cf107403b178365:function(n,e,t){"use strict";var r=t("8af190b70a6bc55c6f1b"),o=t.n(r),i=t("8a2d1b95e05b6a321e74"),a=t.n(i),c=t("5ef9de3df8d92ea0e41c"),u=t.n(c),f=t("6a4f9c383785f9168266"),s=t.n(f),d=t("a1cf5d6fa4ed65a6ddd5"),p=t.n(d),l=t("f3b0ff1628e56352bcbf"),b=t.n(l),m=t("5fa3f8487e09c6182715"),g=t.n(m),h=t("cc13decd9f9c09598c2f"),y=t("491cc2e27aa2b4221847");function v(n){return Object(h.a)(n),{injectReducer:function(n,e){return function(t,r){e||Object(h.a)(n),s()(g()(t)&&!p()(t)&&b()(r),"(app/utils...) injectReducer: Expected `reducer` to be a reducer function"),Reflect.has(n.injectedReducers,t)&&n.injectedReducers[t]===r||(n.injectedReducers[t]=r,n.replaceReducer(Object(y.a)(n.injectedReducers)))}}(n,!0)}}function w(n){return(w="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function j(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function O(n){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function x(n,e){return(x=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function S(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function k(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}e.a=function(n){var e=n.key,t=n.reducer;return function(n){var r=function(r){function i(){var n,e,t,r;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return t=this,e=!(r=(n=O(i)).call.apply(n,[this].concat(a)))||"object"!==w(r)&&"function"!==typeof r?S(t):r,k(S(S(e)),"injectors",v(e.context.store)),e}var a,c,u;return function(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&x(n,e)}(i,o.a.Component),a=i,(c=[{key:"componentWillMount",value:function(){(0,this.injectors.injectReducer)(e,t)}},{key:"render",value:function(){return o.a.createElement(n,this.props)}}])&&j(a.prototype,c),u&&j(a,u),i}();return k(r,"WrappedComponent",n),k(r,"contextTypes",{store:a.a.object.isRequired}),k(r,"displayName","withReducer(".concat(n.displayName||n.name||"Component",")")),u()(r,n)}}},e29d5073d455f688a37f:function(n,e,t){var r=t("cd071fc931fa045428d5");"string"===typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t("1e4534d1d62a11482e97")(r,o);r.locals&&(n.exports=r.locals)},f7c283a123cd789c161e:function(n,e,t){(n.exports=t("c138e55a31f3f8960e99")(!1)).push([n.i,".listSidebar{\n  opacity: 0;\n  transform: scaleY(0);\n  max-height: 0;\n  transform-origin: top;\n  transition: opacity .25s, transform .25s, max-height .25s;\n}\n\n.listSidebar.displayed{\n  transform: scaleY(1);\n  max-height: 500px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  opacity: 1;\n\n}\n\n\n.slider{\n  height: 100px;\n  width: 30px;\n\n}\n\n\n\n.playerSongList{\n  background-color: rgba(0, 0, 0, .9);\n  position: absolute;\n  width: 150px;\n  height: 200px;\n  bottom: 30%;\n  overflow-y: scroll;\n}\n\n.playlistTab{\n  z-index: 0;\n  padding: 0 !important;\n}\n\n.rows{\n  opacity: 1;\n  transform: scaleY(1);\n  transform-origin: top;\n  transition: opacity .2s, transform .2s;\n}\n\n.rows.loading{\n  opacity: 0;\n  transform: scaleY(0);\n}\n\n\n\n\n.songslider {\n    -webkit-appearance: none;\n    width: 100%;\n    height: 25px;\n    outline: none;\n    opacity: 0.8;\n    -webkit-transition: .2s;\n    transition: opacity .2s;\n}\n\n.songslider:hover {\n    opacity: 1;\n}\n\n.songslider::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 5px;\n    height: 10px;\n    background: #2bbbff;\n    cursor: pointer;\n}\n\n.songslider::-moz-range-thumb {\n    width: 5px;\n    height: 10px;\n    background: #2bbbff;\n    cursor: pointer;\n}\n",""])}},[[0,6,7]]]);