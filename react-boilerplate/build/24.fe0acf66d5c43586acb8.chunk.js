(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"36fb304c7c80e57136d1":function(e,t,n){"use strict";n.r(t);var r,o=n("5ab2f4c6a102c650b88f"),i=n.n(o),a=n("3ed1c1f235c25d2fd92f"),s=n.n(a),c=n("8af190b70a6bc55c6f1b"),u=n.n(c),l=n("e95a63b25fb92ed15721"),f=(n("8a2d1b95e05b6a321e74"),n("a28fc3c963a1d4d1a2e5")),p=n("d7dd51e1bf6bfc2c9c3d"),d=n("ab4cb61bcb2dc161defb"),b=n("d95b0cf107403b178365"),y=n("adc20f99e57c573c589c"),v=n("ed9c52280d03fd555aff"),m=n.n(v),h=n("39dfff85008816df58d7"),g=n("7acf433a624a535c4dba"),S=n("9d8baee270337396dfcd"),O=n.n(S);function w(e){return(w="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function _(e,t,n,o){r||(r="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&i)for(var s in i)void 0===t[s]&&(t[s]=i[s]);else t||(t=i||{});if(1===a)t.children=o;else if(a>1){for(var c=new Array(a),u=0;u<a;u++)c[u]=arguments[u+3];t.children=c}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var x,L=_("span",{}),A=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return r=this,o=(e=C(t)).call.apply(e,[this].concat(a)),n=!o||"object"!==w(o)&&"function"!==typeof o?k(r):o,P(k(k(n)),"state",{renderChild:!1}),P(k(k(n)),"toggleOpen",function(){n.state.renderChild?n.setState({renderChild:!1}):n.setState({renderChild:!0})}),n}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(t,u.a.Component),n=t,(r=[{key:"render",value:function(){return _("div",{},void 0,this.state.renderChild?_(i.a,{},void 0,u.a.cloneElement(this.props.children,{closeChild:this.toggleOpen})):_("div",{},void 0,u.a.createElement(O.a,j({onClick:this.toggleOpen},this.props.buttonProps),this.props.message?_("span",{},void 0,this.props.message):L)))}}])&&E(n.prototype,r),o&&E(n,o),t}(),T=n("23994f4f61a8e760637f"),R=n.n(T),I=n("d5735d19f5de76fb0206"),$=n.n(I),G=n("a093460f2fae74481307"),D=n.n(G);function V(e){return(V="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function J(e,t){return(J=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function U(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var H,q=function(e){function t(){var e,n,r,o,i,a,s;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var c=arguments.length,u=new Array(c),l=0;l<c;l++)u[l]=arguments[l];return r=this,o=(e=N(t)).call.apply(e,[this].concat(u)),n=!o||"object"!==V(o)&&"function"!==typeof o?U(r):o,i=U(U(n)),s=function(e,t){n.props.onChange(t)},(a="onDropdownChange")in i?Object.defineProperty(i,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):i[a]=s,n}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&J(e,t)}(t,u.a.Component),n=t,(r=[{key:"render",value:function(){return function(e,t,n,r){x||(x="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&o)for(var a in o)void 0===t[a]&&(t[a]=o[a]);else t||(t=o||{});if(1===i)t.children=r;else if(i>1){for(var s=new Array(i),c=0;c<i;c++)s[c]=arguments[c+3];t.children=s}return{$$typeof:x,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}(D.a,{fluid:!0,search:!0,selection:!0,name:this.props.name,value:this.props.value,options:this.props.options,loading:this.props.isLoading,onChange:this.onDropdownChange,placeholder:this.props.placeholder})}}])&&F(n.prototype,r),o&&F(n,o),t}();function B(e){return(B="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function z(e,t,n,r){H||(H="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&o)for(var a in o)void 0===t[a]&&(t[a]=o[a]);else t||(t=o||{});if(1===i)t.children=r;else if(i>1){for(var s=new Array(i),c=0;c<i;c++)s[c]=arguments[c+3];t.children=s}return{$$typeof:H,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function W(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Y(e){return(Y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function K(e,t){return(K=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Q(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function X(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Z=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return r=this,o=(e=Y(t)).call.apply(e,[this].concat(a)),n=!o||"object"!==B(o)&&"function"!==typeof o?Q(r):o,X(Q(Q(n)),"state",{recipient:{value:"",error:""},subject:{value:"",error:""},body:{value:"",error:""}}),X(Q(Q(n)),"handleInputChange",function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){X(e,t,n[t])})}return e}({},e.target),r=t.name,o=t.value,i=ee(r,o);n.setState(X({},r,{value:o,error:i}))}),X(Q(Q(n)),"handleFormSubmit",function(e){e.preventDefault();var t={recipient:n.state.recipient.value,subject:n.state.subject.value,body:n.state.body.value};n.props.onSendMessage(t)}),n}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&K(e,t)}(t,u.a.Component),n=t,(r=[{key:"render",value:function(){var e=Object.values(this.state).find(function(e){return e.error.length}),t=z($.a.Field,{required:!0,error:!!this.state.recipient.error},void 0,z(q,{name:"recipient",placeholder:"recipient",value:this.state.recipient.value,onChange:this.handleInputChange,users:this.props.users,isLoading:this.props.usersAreLoading}),this.state.recipient.error),n=z($.a.Field,{required:!0,error:!!this.state.subject.error},void 0,z(R.a,{name:"subject",placeholder:"Subject",value:this.state.subject.value,onChange:this.handleInputChange}),this.state.subject.error),r=z($.a.Field,{required:!0,error:!!this.state.body.error},void 0,z(R.a,{name:"body",placeholder:"Body",value:this.state.body.value,onChange:this.handleInputChange}),this.state.body.error);return z(s.a,{},void 0,z(g.a,{isLoading:this.props.isLoading}),z($.a,{onSubmit:this.handleFormSubmit},void 0,t,n,r,z(O.a,{type:"submit",disabled:e},void 0,"Post")))}}])&&W(n.prototype,r),o&&W(n,o),t}(),ee=function(e,t){return"recipient"===e?te(t):"subject"===e?ne(t):"body"===e?re(t):""},te=function(e){return e?"":"Recipient is required."},ne=function(e){return e.length<3?"Subject must be > 3 characters":""},re=function(e){return e.length<10?"body must be > 10 characters":""},oe=n("54f683fcda7806277002"),ie="boilerplate/MessageComposer/SEND_MESSAGE",ae="boilerplate/MessageComposer/SEND_MESSAGE_COMPLETED",se="boilerplate/MessageComposer/SEND_MESSAGE_FAILED",ce="boilerplate/MessageComposer/GET_USERS",ue="boilerplate/MessageComposer/GET_USERS_COMPLETED",le=Object(oe.fromJS)({isLoading:!1,users:[],sentMessage:{}});var fe=n("bd183afcc37eabd79225"),pe=n.n(fe),de=n("6c68d13fe9e3e77d8fc4"),be=n("6203e81e86b152a86ac0");function ye(e){return{type:ue,users:e}}var ve=regeneratorRuntime.mark(ge),me=regeneratorRuntime.mark(Se),he=regeneratorRuntime.mark(Oe);function ge(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(de.e)(ce,Se);case 2:return e.next=4,Object(de.e)(ie,Oe);case 4:case"end":return e.stop()}},ve,this)}function Se(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(de.b)(we);case 3:return e=t.sent,t.next=6,Object(de.c)(ye(e));case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(de.c)(Object(be.b)(t.t0.message));case 12:case"end":return t.stop()}},me,this,[[0,8]])}function Oe(e){var t;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(de.b)(je,e.subject,e.body,e.recipient);case 3:return t=n.sent,n.next=6,Object(de.c)({type:ae,message:t});case 6:n.next=14;break;case 8:return n.prev=8,n.t0=n.catch(0),n.next=12,Object(de.c)(Object(be.b)(n.t0.message));case 12:return n.next=14,Object(de.c)({type:se});case 14:case"end":return n.stop()}},he,this,[[0,8]])}function we(){return pe()({method:"get",url:"https://thread-204819.appspot.com/emailSearch",withCredentials:!0}).then(function(e){return e.data.map(function(e){return{text:e.userName,image:e.imageUrl,key:e.idUsers,value:e.idUsers}})}).catch(function(e){throw e})}function je(e,t,n){return pe()({method:"post",url:"https://thread-204819.appspot.com/sendMessage",data:{subject:e,body:t,recipient:n,date:(new Date).toISOString().substring(0,19).replace("T"," ")},withCredentials:!0}).then(function(e){return e.data}).catch(function(e){throw e})}var _e,Ee=function(e){return e.get("MessageComposer")};function Ce(e){return(Ce="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Me(e,t,n,r){_e||(_e="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&o)for(var a in o)void 0===t[a]&&(t[a]=o[a]);else t||(t=o||{});if(1===i)t.children=r;else if(i>1){for(var s=new Array(i),c=0;c<i;c++)s[c]=arguments[c+3];t.children=s}return{$$typeof:_e,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function ke(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Pe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function xe(e,t){return!t||"object"!==Ce(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Le(e){return(Le=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ae(e,t){return(Ae=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Te,Re=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),xe(this,Le(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ae(e,t)}(t,u.a.Component),n=t,(r=[{key:"componentDidMount",value:function(){this.props.getUsers()}},{key:"render",value:function(){return Object.keys(this.props.sentMessage).length?Me(l.Redirect,{to:{pathname:"/message/view",state:{message:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){ke(e,t,n[t])})}return e}({},this.props.sentMessage)}}}):Me("div",{},void 0,Me(Z,{users:this.props.users,isLoading:this.props.isLoading,onSendMessage:this.props.sendMessage}))}}])&&Pe(n.prototype,r),o&&Pe(n,o),t}(),Ie={getUsers:function(){return{type:ce}},sendMessage:function(e){return{type:ie,message:e}}},$e=Object(p.connect)(function(){return Object(f.b)({isLoading:Object(f.a)(Ee,function(e){return e.get("isLoading")}),sentMessage:Object(f.a)(Ee,function(e){return e.get("sentMessage")}),users:Object(f.a)(Ee,function(e){return e.get("users")})})},Ie),Ge=Object(b.a)({key:"MessageComposer",reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ue:return e.set("usersAreLoading",!1).set("users",Object(oe.fromJS)(t.users));case ie:return e.set("isLoading",!0);case ae:return e.set("isLoading",!1).set("sentMessage",Object(oe.fromJS)(t.message));case se:return e.set("isLoading",!1);default:return e}}}),De=Object(y.a)({key:"MessageComposer",saga:ge}),Ve=Object(d.compose)(Ge,De,$e)(Re);function Fe(e,t,n,r){Te||(Te="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&o)for(var a in o)void 0===t[a]&&(t[a]=o[a]);else t||(t=o||{});if(1===i)t.children=r;else if(i>1){for(var s=new Array(i),c=0;c<i;c++)s[c]=arguments[c+3];t.children=s}return{$$typeof:Te,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}var Ne=Fe(m.a,{}),Je=Fe(m.a,{}),Ue=Fe(m.a,{}),He=function(e){return Fe(s.a,{},void 0,Fe(g.a,{isLoading:e.isLoading},void 0,Fe(h.a,{field:e.message},void 0,Fe("div",{style:{float:"right"}},void 0,e.message.date),"From: ",e.message.senderName,Ne,"Subject: ",e.message.subject,Je,e.message.text,Ue,Fe(A,{buttonProps:{icon:"reply"}},void 0,Fe(Ve,{recipient:e.message.sender})))))},qe="boilerplate/MessageViewContainer/GET_MESSAGE",Be="boilerplate/MessageViewContainer/GET_MESSAGE_COMPLETED",ze="boilerplate/MessageViewContainer/GET_MESSAGE_FAILED",We=Object(oe.fromJS)({isLoading:!0,message:{}});function Ye(e){return{type:Be,message:e}}var Ke,Qe=function(e){return e.get("MessageViewContainer")},Xe=function(e,t){return t},Ze=function(){return Object(f.a)(Xe,function(e){return e.location.state.id||e.location.state.message.idmessages})},et=regeneratorRuntime.mark(nt),tt=regeneratorRuntime.mark(rt);function nt(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(de.e)(qe,rt);case 2:case"end":return e.stop()}},et,this)}function rt(){var e,t;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(de.d)(Ze());case 3:return e=n.sent,n.next=6,Object(de.b)(ot,e);case 6:return t=n.sent,n.next=9,Object(de.c)(Ye(t));case 9:n.next=17;break;case 11:return n.prev=11,n.t0=n.catch(0),n.next=15,Object(de.c)(Object(be.b)(n.t0.message));case 15:return n.next=17,Object(de.c)({type:ze});case 17:case"end":return n.stop()}},tt,this,[[0,11]])}function ot(e){return pe()({method:"get",url:"https://thread-204819.appspot.com/getMessage",params:{id:e},withCredentials:!0})}function it(e){return(it="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function at(e,t,n,r){Ke||(Ke="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&o)for(var a in o)void 0===t[a]&&(t[a]=o[a]);else t||(t=o||{});if(1===i)t.children=r;else if(i>1){for(var s=new Array(i),c=0;c<i;c++)s[c]=arguments[c+3];t.children=s}return{$$typeof:Ke,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function st(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ct(e,t){return!t||"object"!==it(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ut(e){return(ut=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function lt(e,t){return(lt=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var ft=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),ct(this,ut(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&lt(e,t)}(t,c["Component"]),n=t,(r=[{key:"componentDidMount",value:function(){this.props.message||this.props.getMessage()}},{key:"render",value:function(){return at("div",{},void 0,at(He,{message:this.props.message,isLoading:this.props.isLoading}))}}])&&st(n.prototype,r),o&&st(n,o),t}(),pt={getMessage:function(){return{type:qe}}},dt=Object(p.connect)(function(){return Object(f.b)({isLoading:Object(f.a)(Qe,function(e){return e.get("isLoading")}),message:Object(f.a)(Qe,Xe,function(e,t){return t.location.state.message||e.get("message")})})},pt),bt=Object(b.a)({key:"MesssageViewContainer",reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case qe:return e.set("isLoading",!0);case Be:return e.set("isLoading",!1).set("message",t.message);case ze:return e.set("isLoading",!1);default:return e}}}),yt=Object(y.a)({key:"MessageViewContainer",saga:nt}),vt=Object(d.compose)(bt,yt,dt)(ft),mt=function(e){return e.get("MessagesContainer")},ht=function(){return Object(oe.createSelector)(mt,function(e){return e.get("messages")})},gt=function(){return Object(oe.createSelector)(Object(oe.createSelector)(ht(),function(e){return e.filter(function(e){return!!e.selected})}),function(e){return e.map(function(e){return e.idmessages})})},St="boilerplate/MessagesContainer/GET_MESSAGES",Ot="boilerplate/MessagesContainer/GET_MESSAGES_COMPLETED",wt="boilerplate/MessagesContainer/GET_MESSAGES_FAILED",jt="boilerplate/MessagesContainer/DELETE_MESSAGES",_t="boilerplate/MessagesContainer/DELETE_MESSAGES_COMPLETED",Et="boilerplate/MessagesContainer/DELETE_MESSAGES_FAILED",Ct="boilerplate/MessagesContainer/SELECT_MESSAGE";function Mt(e){return{type:Ot,messages:e}}function kt(e){return{type:_t,messageIds:e}}var Pt,xt=n("77a347aff4ed61b55fce"),Lt=n.n(xt),At=n("45239fced27fc7917d16"),Tt=n.n(At);function Rt(e){return(Rt="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function It(e,t,n,r){Pt||(Pt="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&o)for(var a in o)void 0===t[a]&&(t[a]=o[a]);else t||(t=o||{});if(1===i)t.children=r;else if(i>1){for(var s=new Array(i),c=0;c<i;c++)s[c]=arguments[c+3];t.children=s}return{$$typeof:Pt,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function $t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Gt(e){return(Gt=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Dt(e,t){return(Dt=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Vt(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ft(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Nt,Jt=It("span",{}),Ut=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return r=this,o=(e=Gt(t)).call.apply(e,[this].concat(a)),n=!o||"object"!==Rt(o)&&"function"!==typeof o?Vt(r):o,Ft(Vt(Vt(n)),"state",{messageToView:"",redirect:!1}),Ft(Vt(Vt(n)),"handleViewMessage",function(e){n.setState({redirect:!0,messageToView:e.target.id})}),n}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Dt(e,t)}(t,u.a.Component),n=t,(r=[{key:"render",value:function(){var e=this;return this.state.redirect?It(l.Redirect,{to:{pathname:"/messages/view",state:{id:this.state.messageToView}}}):It("div",{},void 0,It(Tt.a.Body,{},void 0," ",this.props.messages.map(function(t,n){var r=t.viewed?{opacity:".6"}:{};return It(Tt.a.Row,{style:r},n," ",It(Tt.a.Cell,{},void 0," ",It(Lt.a,{className:"messageCheckbox",size:"mini",id:t.idmessages,checked:!!t.selected,onChange:e.props.onSelectMessage})," ",Jt," ")," ",It(Tt.a.Cell,{id:t.idmessages,onClick:e.handleViewMessage},void 0," ",t.senderName," ")," ",It(Tt.a.Cell,{id:t.idmessages,onClick:e.handleViewMessage},void 0," ",t.subject," ")," ",It(Tt.a.Cell,{id:t.idmessages,onClick:e.handleViewMessage},void 0,t.date.slice(0,10)))})))}}])&&$t(n.prototype,r),o&&$t(n,o),t}();function Ht(e,t,n,r){Nt||(Nt="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&o)for(var a in o)void 0===t[a]&&(t[a]=o[a]);else t||(t=o||{});if(1===i)t.children=r;else if(i>1){for(var s=new Array(i),c=0;c<i;c++)s[c]=arguments[c+3];t.children=s}return{$$typeof:Nt,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}var qt,Bt=Ht(Tt.a.HeaderCell,{}),zt=Ht("span",{},void 0,"Sender"),Wt=Ht("span",{},void 0,"Recipient"),Yt=Ht(Tt.a.HeaderCell,{},void 0,"Subject"),Kt=Ht(Tt.a.HeaderCell,{},void 0,"Date"),Qt=function(e){return Ht("div",{},void 0,Ht(Tt.a.Header,{},void 0,Ht(Tt.a.Row,{},void 0,Bt,Ht(Tt.a.HeaderCell,{},void 0,e.isInbox?zt:Wt),Yt,Kt)))},Xt=n("124ce8dac218e11083f7"),Zt=n.n(Xt),en=n("549965b55baa058476b1"),tn=n.n(en);function nn(e,t,n,r){qt||(qt="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&o)for(var a in o)void 0===t[a]&&(t[a]=o[a]);else t||(t=o||{});if(1===i)t.children=r;else if(i>1){for(var s=new Array(i),c=0;c<i;c++)s[c]=arguments[c+3];t.children=s}return{$$typeof:qt,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}var rn,on=nn("div",{},void 0,nn(Tt.a.Footer,{},void 0,nn(Tt.a.Row,{},void 0,nn(Tt.a.HeaderCell,{colSpan:"4"},void 0,nn(tn.a,{floated:"right",pagination:!0},void 0,nn(tn.a.Item,{as:"a",icon:!0},void 0,nn(Zt.a,{name:"chevron left"})),nn(tn.a.Item,{as:"a"},void 0,"1"),nn(tn.a.Item,{as:"a"},void 0,"2"),nn(tn.a.Item,{as:"a"},void 0,"3"),nn(tn.a.Item,{as:"a"},void 0,"4"),nn(tn.a.Item,{as:"a",icon:!0},void 0,nn(Zt.a,{name:"chevron right"}))))))),an=function(e,t){return t};function sn(e,t,n,r){rn||(rn="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&o)for(var a in o)void 0===t[a]&&(t[a]=o[a]);else t||(t=o||{});if(1===i)t.children=r;else if(i>1){for(var s=new Array(i),c=0;c<i;c++)s[c]=arguments[c+3];t.children=s}return{$$typeof:rn,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}var cn,un=sn(function(e){return on},{}),ln={selectMessage:function(e){return{type:Ct,id:e.target.id}}},fn=Object(p.connect)(function(){return Object(f.b)({messages:ht(),isInbox:Object(f.a)(an,function(e){return"/messages/inbox"===e.location.pathname})})},ln),pn=Object(d.compose)(fn)(function(e){return sn("div",{},void 0,sn(Table,{selectable:!0},void 0,sn(Qt,{isInbox:e.isInbox}),sn(Ut,{onSelectMessage:e.selectMessage,messages:e.messages}),un))}),dn=n("a13c1ebed48ad2d1dd93"),bn=n.n(dn);function yn(e,t,n,r){cn||(cn="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&o)for(var a in o)void 0===t[a]&&(t[a]=o[a]);else t||(t=o||{});if(1===i)t.children=r;else if(i>1){for(var s=new Array(i),c=0;c<i;c++)s[c]=arguments[c+3];t.children=s}return{$$typeof:cn,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}var vn=yn(l.Link,{to:"/messages/compose"},void 0,yn(tn.a.Item,{name:"compose"},void 0,yn(Zt.a,{name:"keyboard"}),"Compose")),mn=yn(tn.a.Item,{name:"inbox"},void 0,yn(Zt.a,{name:"mail"}),"Inbox"),hn=yn(tn.a.Item,{name:"sent"},void 0,yn(Zt.a,{name:"send"}),"Sent"),gn=yn(Zt.a,{name:"trash"}),Sn=function(e){return yn("div",{},void 0,yn(bn.a,{className:"messagesSidebar",as:tn.a,width:"thin",direction:"left",visible:!0,icon:"labeled",vertical:!0},void 0,vn,yn(l.Link,{to:"/messages/inbox",onClick:e.onGetInbox},void 0,mn),yn(l.Link,{to:"/messages/sent",onClick:e.onGetSent},void 0,hn),yn(tn.a.Item,{name:"delete",onClick:e.onDelete},void 0,gn,"Delete")))},On=Object(oe.fromJS)({isLoading:!0,messages:[]});var wn,jn=n("6ca10bbfc8efae0f8e2b"),_n=regeneratorRuntime.mark(Mn),En=regeneratorRuntime.mark(kn),Cn=regeneratorRuntime.mark(Pn);function Mn(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(de.e)(St,kn);case 2:return e.next=4,Object(de.e)(jt,Pn);case 4:case"end":return e.stop()}},_n,this)}function kn(e){var t,n;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,"inbox"!==e.kind){r.next=9;break}return r.next=4,Object(de.b)(xn);case 4:return t=r.sent,r.next=7,Object(de.c)(Mt(t));case 7:r.next=14;break;case 9:return r.next=11,Object(de.b)(Ln);case 11:return n=r.sent,r.next=14,Object(de.c)(Mt(n));case 14:r.next=22;break;case 16:return r.prev=16,r.t0=r.catch(0),r.next=20,Object(de.c)(Object(be.b)(r.t0.message));case 20:return r.next=22,Object(de.c)({type:wt});case 22:case"end":return r.stop()}},En,this,[[0,16]])}function Pn(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(de.d)(gt());case 3:return e=t.sent,t.next=6,Object(de.b)(An,e);case 6:return t.next=8,Object(de.c)(kt(e));case 8:return t.next=10,Object(de.c)(Object(jn.a)("messages deleted"));case 10:t.next=18;break;case 12:return t.prev=12,t.t0=t.catch(0),t.next=16,Object(de.c)(Object(be.b)(t.t0.message));case 16:return t.next=18,Object(de.c)({type:Et});case 18:case"end":return t.stop()}},Cn,this,[[0,12]])}function xn(){return pe()({method:"get",url:"https://thread-204819.appspot.com/getMessages",withCredentials:!0}).then(function(e){return e.data}).catch(function(e){throw e})}function Ln(){return pe()({method:"get",url:"https://thread-204819.appspot.com/getSentMessages",withCredentials:!0}).then(function(e){return e.data}).catch(function(e){throw e})}function An(e){return pe()({method:"post",url:"https://thread-204819.appspot.com/deleteMessages",data:{messages:e},withCredentials:!0}).catch(function(e){throw e})}function Tn(e){return(Tn="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Rn(e,t,n,r){wn||(wn="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&o)for(var a in o)void 0===t[a]&&(t[a]=o[a]);else t||(t=o||{});if(1===i)t.children=r;else if(i>1){for(var s=new Array(i),c=0;c<i;c++)s[c]=arguments[c+3];t.children=s}return{$$typeof:wn,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function In(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function $n(e){return($n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Gn(e,t){return(Gn=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Dn(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Vn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Fn,Nn=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return r=this,o=(e=$n(t)).call.apply(e,[this].concat(a)),n=!o||"object"!==Tn(o)&&"function"!==typeof o?Dn(r):o,Vn(Dn(Dn(n)),"handleGetInbox",function(){n.props.getMessages("inbox")}),Vn(Dn(Dn(n)),"handleGetSent",function(){n.props.getMessages("sent")}),n}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Gn(e,t)}(t,u.a.Component),n=t,(r=[{key:"render",value:function(){return Rn("div",{},void 0,Rn(Sn,{onGetInbox:this.handleGetInbox,onGetSent:this.handleGetSent,onDelete:this.props.deleteMessages}))}}])&&In(n.prototype,r),o&&In(n,o),t}(),Jn={getMessages:function(e){return{type:St,kind:e}},deleteMessages:function(){return{type:jt}}},Un=Object(p.connect)({},Jn),Hn=Object(b.a)({key:"MessagesContainer",reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:On,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case St:return e.set("isLoading",!0);case Ot:return e.set("isLoading",!1).set("messages",Object(oe.fromJS)(t.messages));case wt:return e.set("isLoading",!1);case jt:return e.set("isLoading",!0);case _t:return e.set("isLoading",!1).update("messages",function(e){return e.filter(function(e){return!t.messageIds.includes(e.idmessages)})});case Et:return e.set("isLoading",!1);case Ct:var n=e.get("messages").findIndex(function(e){return e.idmessages===t.id}),r=e.getIn(["messages",n,"selected"]);return e.updateIn(["messages",n,"selected"],function(){return!r});default:return e}}}),qn=Object(y.a)({key:"MessagesContainer",saga:Mn});function Bn(e,t,n,r){Fn||(Fn="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&o)for(var a in o)void 0===t[a]&&(t[a]=o[a]);else t||(t=o||{});if(1===i)t.children=r;else if(i>1){for(var s=new Array(i),c=0;c<i;c++)s[c]=arguments[c+3];t.children=s}return{$$typeof:Fn,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}var zn=Bn(Object(d.compose)(Hn,qn,Un)(Nn),{}),Wn=Bn(l.Switch,{},void 0,Bn(l.Route,{path:"/messages/view",component:vt}),Bn(l.Route,{path:"/messages/compose",component:Ve}),Bn(l.Route,{path:"/messages",component:pn}));t.default=function(){return Bn("div",{},void 0,zn,Bn(i.a,{style:{width:"50%",margin:"auto"},className:"messagesTable"},void 0,Bn(s.a,{style:{height:"70vh",overflowY:"scroll"}},void 0,Wn)))}},"39dfff85008816df58d7":function(e,t,n){"use strict";var r;n("8af190b70a6bc55c6f1b"),n("8a2d1b95e05b6a321e74");function o(e,t,n,o){r||(r="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&i)for(var s in i)void 0===t[s]&&(t[s]=i[s]);else t||(t=i||{});if(1===a)t.children=o;else if(a>1){for(var c=new Array(a),u=0;u<a;u++)c[u]=arguments[u+3];t.children=c}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}var i=o("div",{});t.a=function(e){return o("div",{},void 0,e.field?o("div",{},void 0,e.children):o("div",{},void 0,e.alt?o("div",{},void 0,e.alt):i))}},"6ca10bbfc8efae0f8e2b":function(e,t,n){"use strict";var r="boilerplate/SuccessWrapper/SET_SUCCESS";function o(e){return{type:r,error:e}}n.d(t,"a",function(){return o})},"7acf433a624a535c4dba":function(e,t,n){"use strict";var r,o=n("734adf2e6cd4330e49a7"),i=n.n(o),a=(n("8af190b70a6bc55c6f1b"),n("8a2d1b95e05b6a321e74"),n("0962f52d4fac404c08b4"));function s(e,t,n,o){r||(r="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&i)for(var s in i)void 0===t[s]&&(t[s]=i[s]);else t||(t=i||{});if(1===a)t.children=o;else if(a>1){for(var c=new Array(a),u=0;u<a;u++)c[u]=arguments[u+3];t.children=c}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}var c=s(i.a,{inverted:!0,active:!0}),u=s("span",{}),l=s(a.a,{});t.a=function(e){return s("span",{},void 0,e.isLoading?s("span",{},void 0,e.dimmer?c:u,l):s("span",{},void 0,e.children))}}}]);