(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"0da9d1fb78a04e00b258":function(e,t,n){"use strict";var r,o=n("23994f4f61a8e760637f"),a=n.n(o),i=n("8af190b70a6bc55c6f1b"),s=n.n(i);n("8a2d1b95e05b6a321e74");function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t,n,o){r||(r="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&a)for(var s in a)void 0===t[s]&&(t[s]=a[s]);else t||(t=a||{});if(1===i)t.children=o;else if(i>1){for(var l=new Array(i),c=0;c<i;c++)l[c]=arguments[c+3];t.children=l}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return r=this,o=(e=f(t)).call.apply(e,[this].concat(i)),n=!o||"object"!==l(o)&&"function"!==typeof o?d(r):o,y(d(d(n)),"state",{value:n.props.value,error:!1}),y(d(d(n)),"onChange",function(e){var t=e.target.name,r=e.target.value,o=!!n.props.validate&&n.props.validate(r);n.setState({value:r,error:o}),n.props.onChange({name:t,value:r,error:o})}),n}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,s.a.Component),n=t,o=[{key:"getDerivedStateFromProps",value:function(e,t){return{value:e.value}}}],(r=[{key:"render",value:function(){return c("div",{},void 0,c(a.a,{placeholder:this.props.placeholder,name:this.props.name,value:this.state.value,onChange:this.onChange}))}}])&&u(n.prototype,r),o&&u(n,o),t}();t.a=b},"8a900840e7a3541f1386":function(e,t,n){"use strict";n.r(t);var r,o=n("3ed1c1f235c25d2fd92f"),a=n.n(o),i=n("d74b4b79960f2e7702d0"),s=n.n(i),l=n("5ab2f4c6a102c650b88f"),c=n.n(l),u=n("8af190b70a6bc55c6f1b"),f=n.n(u),p=n("124ce8dac218e11083f7"),d=n.n(p),y=n("549965b55baa058476b1"),b=n.n(y),v=n("a13c1ebed48ad2d1dd93"),h=n.n(v),m=n("e95a63b25fb92ed15721");function g(e){return(g="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t,n,o){r||(r="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&a)for(var s in a)void 0===t[s]&&(t[s]=a[s]);else t||(t=a||{});if(1===i)t.children=o;else if(i>1){for(var l=new Array(i),c=0;c<i;c++)l[c]=arguments[c+3];t.children=l}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t){return!t||"object"!==g(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var P,C=w(m.Link,{to:"/messages/compose"},void 0,w(b.a.Item,{name:"compose"},void 0,w(d.a,{name:"keyboard"}),"Compose")),k=w(b.a.Item,{name:"inbox"},void 0,w(d.a,{name:"mail"}),"Inbox"),E=w(b.a.Item,{name:"sent"},void 0,w(d.a,{name:"send"}),"Sent"),M=w(d.a,{name:"trash"}),T=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),O(this,_(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,f.a.Component),n=t,(r=[{key:"render",value:function(){return w("div",{},void 0,w(h.a,{className:"messagesSidebar",as:b.a,width:"thin",direction:"left",visible:!0,icon:"labeled",vertical:!0},void 0,C,w(m.Link,{to:"/messages",onClick:this.props.onGetMessages},void 0,k),w(m.Link,{to:"/messages/sent",onClick:this.props.onGetSentMessages},void 0,E),w(b.a.Item,{name:"delete",onClick:this.props.onDelete},void 0,M,"Delete")))}}])&&S(n.prototype,r),o&&S(n,o),t}(),I=n("77a347aff4ed61b55fce"),R=n.n(I),D=n("45239fced27fc7917d16"),A=n.n(D);function $(e){return($="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t,n,r){P||(P="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&o)for(var i in o)void 0===t[i]&&(t[i]=o[i]);else t||(t=o||{});if(1===a)t.children=r;else if(a>1){for(var s=new Array(a),l=0;l<a;l++)s[l]=arguments[l+3];t.children=s}return{$$typeof:P,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function F(e){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function H(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function G(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var U,K=x(A.a.Header,{},void 0,x(A.a.Row,{},void 0,x(A.a.HeaderCell,{}),x(A.a.HeaderCell,{},void 0,"Sender"),x(A.a.HeaderCell,{},void 0,"Subject"),x(A.a.HeaderCell,{},void 0,"Date"))),q=x("span",{}),z=x(A.a.Footer,{},void 0,x(A.a.Row,{},void 0,x(A.a.HeaderCell,{colSpan:"4"},void 0,x(b.a,{floated:"right",pagination:!0},void 0,x(b.a.Item,{as:"a",icon:!0},void 0,x(d.a,{name:"chevron left"})),x(b.a.Item,{as:"a"},void 0,"1"),x(b.a.Item,{as:"a"},void 0,"2"),x(b.a.Item,{as:"a"},void 0,"3"),x(b.a.Item,{as:"a"},void 0,"4"),x(b.a.Item,{as:"a",icon:!0},void 0,x(d.a,{name:"chevron right"})))))),L=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return r=this,o=(e=F(t)).call.apply(e,[this].concat(i)),n=!o||"object"!==$(o)&&"function"!==typeof o?H(r):o,G(H(H(n)),"state",{messages:[],messageToView:"",redirect:!1}),G(H(H(n)),"handleViewMessage",function(e){n.setState({redirect:!0,messageToView:e.idmessages})}),n}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(t,f.a.Component),n=t,o=[{key:"getDerivedStateFromProps",value:function(e,t){return{messages:e.messages}}}],(r=[{key:"render",value:function(){var e=this;return this.state.redirect?x(m.Redirect,{to:{pathname:"/messages/view",state:{id:this.state.messageToView}}}):x("div",{},void 0,x(A.a,{selectable:!0},void 0,K,x(A.a.Body,{},void 0,this.state.messages.map(function(t,n){var r=t.viewed?{opacity:".6"}:{};return x(A.a.Row,{style:r},n,x(A.a.Cell,{},void 0,x(R.a,{className:"messageCheckbox",size:"mini",id:t.idmessages,checked:e.props.selectedMessages.includes(t.idmessages),onChange:e.props.onMessageSelect}),q),x(A.a.Cell,{onClick:e.handleViewMessage.bind(e,t)},void 0,t.senderName),x(A.a.Cell,{onClick:e.handleViewMessage.bind(e,t)},void 0,t.subject),x(A.a.Cell,{onClick:e.handleViewMessage.bind(e,t)},void 0,t.date.slice(0,10)))})),z))}}])&&V(n.prototype,r),o&&V(n,o),t}();function B(e){return(B="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function J(e,t,n,r){U||(U="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&o)for(var i in o)void 0===t[i]&&(t[i]=o[i]);else t||(t=o||{});if(1===a)t.children=r;else if(a>1){for(var s=new Array(a),l=0;l<a;l++)s[l]=arguments[l+3];t.children=s}return{$$typeof:U,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function Y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Q(e){return(Q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function W(e,t){return(W=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function X(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ee,te=J(A.a.Header,{},void 0,J(A.a.Row,{},void 0,J(A.a.HeaderCell,{},void 0,"Recipient"),J(A.a.HeaderCell,{},void 0,"Subject"),J(A.a.HeaderCell,{},void 0,"Date"))),ne=J(A.a.Footer,{},void 0,J(A.a.Row,{},void 0,J(A.a.HeaderCell,{colSpan:"4"},void 0,J(b.a,{floated:"right",pagination:!0},void 0,J(b.a.Item,{as:"a",icon:!0},void 0,J(d.a,{name:"chevron left"})),J(b.a.Item,{as:"a"},void 0,"1"),J(b.a.Item,{as:"a"},void 0,"2"),J(b.a.Item,{as:"a"},void 0,"3"),J(b.a.Item,{as:"a"},void 0,"4"),J(b.a.Item,{as:"a",icon:!0},void 0,J(d.a,{name:"chevron right"})))))),re=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return r=this,o=(e=Q(t)).call.apply(e,[this].concat(i)),n=!o||"object"!==B(o)&&"function"!==typeof o?X(r):o,Z(X(X(n)),"state",{messages:[],messageToView:"",redirect:!1}),Z(X(X(n)),"handleViewMessage",function(e){n.setState({redirect:!0,messageToView:e.idmessages})}),n}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&W(e,t)}(t,f.a.Component),n=t,o=[{key:"getDerivedStateFromProps",value:function(e,t){return{messages:e.messages}}}],(r=[{key:"render",value:function(){var e=this;return this.state.redirect?J(m.Redirect,{to:{pathname:"/messages/view",state:{id:this.state.messageToView}}}):J("div",{},void 0,J(A.a,{selectable:!0},void 0,te,J(A.a.Body,{},void 0,this.state.messages.map(function(t,n){return J(A.a.Row,{},n,J(A.a.Cell,{onClick:e.handleViewMessage.bind(e,t)},void 0,t.recipientName),J(A.a.Cell,{onClick:e.handleViewMessage.bind(e,t)},void 0,t.subject),J(A.a.Cell,{onClick:e.handleViewMessage.bind(e,t)},void 0,t.date.slice(0,10)))})),ne))}}])&&Y(n.prototype,r),o&&Y(n,o),t}(),oe=n("ed9c52280d03fd555aff"),ae=n.n(oe),ie=n("9d8baee270337396dfcd"),se=n.n(ie),le=n("bd183afcc37eabd79225"),ce=n.n(le),ue=n("d5735d19f5de76fb0206"),fe=n.n(ue),pe=n("734adf2e6cd4330e49a7"),de=n.n(pe),ye=n("c91778e5b2c58f14ad93"),be=n.n(ye);function ve(e){return(ve="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function he(e,t,n,r){ee||(ee="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&o)for(var i in o)void 0===t[i]&&(t[i]=o[i]);else t||(t=o||{});if(1===a)t.children=r;else if(a>1){for(var s=new Array(a),l=0;l<a;l++)s[l]=arguments[l+3];t.children=s}return{$$typeof:ee,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function me(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ge(e,t){return!t||"object"!==ve(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function we(e){return(we=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Se(e,t){return(Se=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Oe,_e=he(be.a.Header,{},void 0,"Message sent."),je=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),ge(this,we(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Se(e,t)}(t,f.a.Component),n=t,(r=[{key:"render",value:function(){return he(be.a,{open:!0,basic:!0,size:"mini",className:"messagePortal",width:2},void 0,_e,he(be.a.Content,{},void 0,he(m.Link,{to:"/messages"},void 0,he(se.a,{onClick:this.props.onGetMessages},void 0,"Back to messages"))))}}])&&me(n.prototype,r),o&&me(n,o),t}(),Pe=n("0da9d1fb78a04e00b258"),Ce=n("be6a399b68218876162f"),ke=n("a093460f2fae74481307"),Ee=n.n(ke);n("8a2d1b95e05b6a321e74");function Me(e){return(Me="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Te(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ie(e){return(Ie=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Re(e,t){return(Re=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function De(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ae(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var $e,xe=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return r=this,o=(e=Ie(t)).call.apply(e,[this].concat(i)),n=!o||"object"!==Me(o)&&"function"!==typeof o?De(r):o,Ae(De(De(n)),"state",{value:n.props.value,searchValue:"",users:[],error:""}),Ae(De(De(n)),"getUsers",function(e){ce()({method:"get",url:"https://thread-204819.appspot.com/emailSearch",params:{searchString:e}}).then(function(e){var t;t=e.data.map(function(e,t){return{text:e.userName,image:e.imageUrl,key:e.idUsers,value:e.idUsers}}),n.setState({users:t})})}),Ae(De(De(n)),"onSearchChange",function(e,t){var r=e.target.value,o=!!n.props.validate&&n.props.validate(r);n.setState({error:o,searchValue:r},function(){n.getUsers(n.state.searchValue)})}),Ae(De(De(n)),"onDropdownChange",function(e,t){var r=t.name,o=t.value,a=n.props.validate(o);n.setState({error:a,value:o}),n.props.onChange({name:r,value:o,error:a})}),n}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Re(e,t)}(t,f.a.Component),n=t,(r=[{key:"componentDidMount",value:function(){this.getUsers("%")}},{key:"render",value:function(){return function(e,t,n,r){Oe||(Oe="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&o)for(var i in o)void 0===t[i]&&(t[i]=o[i]);else t||(t=o||{});if(1===a)t.children=r;else if(a>1){for(var s=new Array(a),l=0;l<a;l++)s[l]=arguments[l+3];t.children=s}return{$$typeof:Oe,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}(Ee.a,{fluid:!0,search:!0,selection:!0,name:this.props.name,placeholder:this.props.placeholder,options:this.state.users,value:this.state.value,onChange:this.onDropdownChange,onSearchChange:this.onSearchChange})}}])&&Te(n.prototype,r),o&&Te(n,o),t}();function Ve(e){return(Ve="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Fe(e,t,n,r){$e||($e="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&o)for(var i in o)void 0===t[i]&&(t[i]=o[i]);else t||(t=o||{});if(1===a)t.children=r;else if(a>1){for(var s=new Array(a),l=0;l<a;l++)s[l]=arguments[l+3];t.children=s}return{$$typeof:$e,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function Ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){qe(e,t,n[t])})}return e}function He(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ge(e){return(Ge=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ue(e,t){return(Ue=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Ke(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function qe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ze,Le=Fe(de.a,{inverted:!0,active:!0},void 0,Fe(s.a,{active:!0})),Be=Fe("div",{}),Je=Fe("div",{}),Ye=Fe(d.a,{name:"send"}),Qe=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return r=this,o=(e=Ge(t)).call.apply(e,[this].concat(i)),n=!o||"object"!==Ve(o)&&"function"!==typeof o?Ke(r):o,qe(Ke(Ke(n)),"state",{message:{recipient:null,subject:"",body:""},fieldErrors:{recipient:"",subject:"",body:""},_loading:!1,success:!1}),qe(Ke(Ke(n)),"handleInputChange",function(e){var t=e.name,r=e.value,o=e.error,a=Ne({},n.state.message),i=Ne({},n.state.fieldErrors);a[t]=r,i[t]=o,n.setState({message:a,fieldErrors:i})}),qe(Ke(Ke(n)),"validate",function(){var e=Ne({},n.state.message),t=Ne({},n.state.fieldErrors),r=Object.keys(t).filter(function(e){return t[e]});return!e.recipient||(!e.subject||(!e.body||!!r.length))}),qe(Ke(Ke(n)),"handleFormSubmit",function(e){e.preventDefault(),n.validate()||n.sendMessageToDb()}),qe(Ke(Ke(n)),"sendMessageToDb",function(){n.setState({_loading:!0}),We(n.state.message.subject,n.state.message.body,n.state.message.recipient).then(function(){n.setState({_loading:!1,success:!0,message:{recipient:null,subject:"",body:""}})})}),n}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ue(e,t)}(t,f.a.Component),n=t,o=[{key:"getDerivedStateFromProps",value:function(e,t){if(e.recipient!==t.message.recipient){var n=Ne({},t.message);return n.recipient=e.recipient,{message:n}}return{}}}],(r=[{key:"render",value:function(){return Fe(a.a,{},void 0,this.state._loading?Le:Be,this.state.success?Fe(je,{onGetMessages:this.props.onGetMessages}):Je,Fe(fe.a,{onSubmit:this.handleFormSubmit},void 0,Fe(fe.a.Field,{required:!0,error:!!this.state.fieldErrors.recipient},void 0,Fe(xe,{name:"recipient",placeholder:"Choose recipient",value:this.state.message.recipient,onChange:this.handleInputChange,validate:function(e){return!e&&"recipient is required"}}),this.state.fieldErrors.recipient),Fe(fe.a.Field,{required:!0,error:!!this.state.fieldErrors.subject},void 0,Fe(Pe.a,{name:"subject",placeholder:"Subject",value:this.state.message.subject,onChange:this.handleInputChange,validate:function(e){return!e&&"Subject is required"}}),this.state.fieldErrors.subject),Fe(fe.a.Field,{required:!0,error:!!this.state.fieldErrors.body},void 0,Fe(Ce.a,{name:"body",placeholder:"Body",value:this.state.message.body,onChange:this.handleInputChange,validate:function(e){return!e&&"body is required"}}),this.state.fieldErrors.body),Fe(se.a,{type:"submit",disabled:this.validate()},void 0,Ye)))}}])&&He(n.prototype,r),o&&He(n,o),t}(),We=function(e,t,n){return ce()({method:"post",url:"https://thread-204819.appspot.com/sendMessage",data:{subject:e,body:t,recipient:n,date:(new Date).toISOString().substring(0,19).replace("T"," ")},withCredentials:!0})};function Xe(e){return(Xe="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ze(e,t,n,r){ze||(ze="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&o)for(var i in o)void 0===t[i]&&(t[i]=o[i]);else t||(t=o||{});if(1===a)t.children=r;else if(a>1){for(var s=new Array(a),l=0;l<a;l++)s[l]=arguments[l+3];t.children=s}return{$$typeof:ze,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function et(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function tt(e){return(tt=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function nt(e,t){return(nt=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function rt(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ot(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var at,it=Ze(m.Redirect,{to:"/messages"}),st=Ze(s.a,{active:!0}),lt=Ze("div",{}),ct=Ze(ae.a,{}),ut=Ze(ae.a,{}),ft=Ze(ae.a,{}),pt=Ze("div",{}),dt=Ze("div",{}),yt=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return r=this,o=(e=tt(t)).call.apply(e,[this].concat(i)),n=!o||"object"!==Xe(o)&&"function"!==typeof o?rt(r):o,ot(rt(rt(n)),"state",{message:{},messageId:"",redirect:!1,reply:!1}),ot(rt(rt(n)),"getMessage",function(){n.setState({_loading:!0}),ce()({method:"get",url:"https://thread-204819.appspot.com/getMessage",params:{id:n.state.messageId},withCredentials:!0}).then(function(e){n.setState({message:e.data[0],_loading:!1})})}),ot(rt(rt(n)),"handleReply",function(){n.state.reply?n.setState({reply:!1}):n.setState({reply:!0})}),n}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&nt(e,t)}(t,f.a.Component),n=t,o=[{key:"getDerivedStateFromProps",value:function(e,t){return e.location.state?{messageId:e.location.state.id}:{redirect:!0}}}],(r=[{key:"componentDidMount",value:function(){this.state.redirect||this.getMessage()}},{key:"render",value:function(){return this.state.redirect?it:Ze(a.a,{},void 0,this.state.loading?st:lt,this.state.message?Ze("div",{},void 0,Ze("div",{style:{float:"right"}},void 0,this.state.message.date),"From: ",this.state.message.senderName,ct,"Subject: ",this.state.message.subject,ut,this.state.message.text,ft,Ze(se.a,{icon:"reply",onClick:this.handleReply}),this.state.reply?Ze(Qe,{recipient:this.state.message.sender}):pt):dt)}}])&&et(n.prototype,r),o&&et(n,o),t}();function bt(e){return(bt="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function vt(){return(vt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ht(e,t,n,r){at||(at="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&o)for(var i in o)void 0===t[i]&&(t[i]=o[i]);else t||(t=o||{});if(1===a)t.children=r;else if(a>1){for(var s=new Array(a),l=0;l<a;l++)s[l]=arguments[l+3];t.children=s}return{$$typeof:at,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function mt(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function gt(e){return(gt=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function wt(e,t){return(wt=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function St(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ot(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _t=ht(s.a,{active:!0}),jt=ht("div",{}),Pt=ht(m.Route,{path:"/messages/view",component:yt}),Ct=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return r=this,o=(e=gt(t)).call.apply(e,[this].concat(i)),n=!o||"object"!==bt(o)&&"function"!==typeof o?St(r):o,Ot(St(St(n)),"state",{selectedMessages:[],messages:[],_loading:!1}),Ot(St(St(n)),"componentDidMount",function(){n.getMessages()}),Ot(St(St(n)),"getMessages",function(){n.setState({_loading:!0}),kt().then(function(e){n.setState({messages:e.data,_loading:!1})})}),Ot(St(St(n)),"getSentMessages",function(){n.setState({_loading:!0}),Et().then(function(e){return n.setState({_loading:!1,messages:e.data})})}),Ot(St(St(n)),"handleMessageSelect",function(e){var t=parseInt(e.target.id,10),r=n.state.selectedMessages;r.includes(t)?n.setState({selectedMessages:r.filter(function(e){return e!==t})}):n.setState({selectedMessages:r.concat(t)})}),Ot(St(St(n)),"handleDelete",function(){Mt(n.state.selectedMessages).then(function(){n.getMessages()})}),n}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&wt(e,t)}(t,f.a.Component),n=t,(r=[{key:"render",value:function(){var e=this;return ht("div",{},void 0,ht(T,{onGetMessages:this.getMessages,onGetSentMessages:this.getSentMessages,onDelete:this.handleDelete}),ht(c.a,{style:{width:"50%",margin:"auto"},className:"messagesTable"},void 0,ht(a.a,{style:{height:"70vh",overflowY:"scroll"}},void 0,this.state._loading?_t:jt,Pt,ht(m.Route,{path:"/messages/compose",render:function(t){return f.a.createElement(Qe,vt({},t,{onGetMessages:e.getMessages}))}}),ht(m.Route,{path:"/messages/sent",render:function(t){return f.a.createElement(re,vt({},t,{messages:e.state.messages}))}}),ht(m.Route,{exact:!0,path:"/messages",render:function(t){return f.a.createElement(L,vt({},t,{messages:e.state.messages,selectedMessages:e.state.selectedMessages,onMessageSelect:e.handleMessageSelect}))}}))))}}])&&mt(n.prototype,r),o&&mt(n,o),t}(),kt=(t.default=Ct,function(){return ce()({method:"get",url:"https://thread-204819.appspot.com/getMessages",withCredentials:!0})}),Et=function(){return ce()({method:"get",url:"https://thread-204819.appspot.com/getSentMessages",withCredentials:!0})},Mt=function(e){return ce()({method:"post",url:"https://thread-204819.appspot.com/deleteMessages",data:{messages:e},withCredentials:!0})}},be6a399b68218876162f:function(e,t,n){"use strict";var r,o=n("d5735d19f5de76fb0206"),a=n.n(o),i=n("8af190b70a6bc55c6f1b"),s=n.n(i);n("8a2d1b95e05b6a321e74");function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t,n,o){r||(r="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&a)for(var s in a)void 0===t[s]&&(t[s]=a[s]);else t||(t=a||{});if(1===i)t.children=o;else if(i>1){for(var l=new Array(i),c=0;c<i;c++)l[c]=arguments[c+3];t.children=l}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return r=this,o=(e=f(t)).call.apply(e,[this].concat(i)),n=!o||"object"!==l(o)&&"function"!==typeof o?d(r):o,y(d(d(n)),"state",{value:"",error:""}),y(d(d(n)),"onChange",function(e){var t=e.target.name,r=e.target.value,o=!!n.props.validate&&n.props.validate(r);n.setState({value:r,error:o}),n.props.onChange({name:t,value:r,error:o})}),n}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,s.a.Component),n=t,(r=[{key:"render",value:function(){return c("div",{},void 0,c(a.a.TextArea,{placeholder:this.props.placeholder,name:this.props.name,value:this.props.value,onChange:this.onChange}))}}])&&u(n.prototype,r),o&&u(n,o),t}();t.a=b},ed9c52280d03fd555aff:function(e,t,n){"use strict";var r=n("8e6d34d5e2b1c9c449c0");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("2c62cf50f9b98ad5e2af")),a=r(n("b912ecc4473ae8a2ff0b")),i=(r(n("8a2d1b95e05b6a321e74")),r(n("8af190b70a6bc55c6f1b"))),s=n("93c4a72365554acf71a9");function l(e){var t=e.children,n=e.className,r=e.clearing,c=e.content,u=e.fitted,f=e.hidden,p=e.horizontal,d=e.inverted,y=e.section,b=e.vertical,v=(0,a.default)("ui",(0,s.useKeyOnly)(r,"clearing"),(0,s.useKeyOnly)(u,"fitted"),(0,s.useKeyOnly)(f,"hidden"),(0,s.useKeyOnly)(p,"horizontal"),(0,s.useKeyOnly)(d,"inverted"),(0,s.useKeyOnly)(y,"section"),(0,s.useKeyOnly)(b,"vertical"),"divider",n),h=(0,s.getUnhandledProps)(l,e),m=(0,s.getElementType)(l,e);return i.default.createElement(m,(0,o.default)({},h,{className:v}),s.childrenUtils.isNil(t)?c:t)}l.handledProps=["as","children","className","clearing","content","fitted","hidden","horizontal","inverted","section","vertical"],l._meta={name:"Divider",type:s.META.TYPES.ELEMENT},l.propTypes={};var c=l;t.default=c}}]);