(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"22381e977359dd6bfab6":function(e,n,t){"use strict";t.r(n);var o,r=t("8af190b70a6bc55c6f1b"),i=t.n(r),a=t("549965b55baa058476b1"),u=t.n(a),l=t("ec2822f19b53e994df3f"),c=t.n(l),s=t("3c477e4382ca1c79ca38"),f=t.n(s),p=t("124ce8dac218e11083f7"),y=t.n(p),d=t("9d8baee270337396dfcd"),b=t.n(d);function h(e){return(h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,n,t,r){o||(o="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,a=arguments.length-3;if(n||0===a||(n={children:void 0}),n&&i)for(var u in i)void 0===n[u]&&(n[u]=i[u]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var l=new Array(a),c=0;c<a;c++)l[c]=arguments[c+3];n.children=l}return{$$typeof:o,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}function v(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function g(e,n){return!n||"object"!==h(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,n){return(P=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var S,k=m(y.a,{name:"list"}),O=m(y.a,{name:"volume up"}),C=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),g(this,w(n).apply(this,arguments))}var t,o,r;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&P(e,n)}(n,i.a.Component),t=n,(o=[{key:"render",value:function(){var e=this;return m("div",{className:"audioContainer"},void 0,i.a.createElement("audio",{className:"audioContainer",id:"audio",ref:this.props.myRef,controls:"",src:this.props.URL,autoPlay:!0,onEnded:this.props.onEnd}),m(f.a,{className:"playerGrid"},void 0,m(f.a.Row,{},void 0,m(f.a.Column,{width:1},void 0,m("div",{style:{}},void 0,m(c.a,{trigger:k,inverted:!0,hoverable:!0,style:{backgroundColor:"rgba(255,255,255, .05)"}},void 0,m(u.a,{vertical:!0,size:"mini",compact:!0,inverted:!0,style:{backgroundColor:"rgba(0,0,0, .6)",overflowY:"scroll",height:"200px"}},void 0,this.props.songs.map(function(n,t){return m(b.a,{size:"mini",fluid:!0,inverted:!0,color:"blue",active:n.idSongs===e.props.nowPlaying.idSongs,onClick:function(){return e.props.onPlaying(n)}},t,n.title)}))),this.props.nowPlaying.title)),m(f.a.Column,{width:2},void 0,m(b.a,{inverted:!0,color:"blue",icon:"angle double left",onClick:this.props.skipBack}),m(b.a,{size:"mini",inverted:!0,color:"blue",icon:this.props._icon,onClick:this.props.onClick}),m(b.a,{inverted:!0,color:"blue",icon:"angle double right",onClick:this.props.onEnd})),m(f.a.Column,{},void 0,this.props.currentTime," / ",this.props.duration),m(f.a.Column,{className:"playerCol",width:9},void 0,m("input",{type:"range",min:"1",max:"100",value:this.props.percentPlayed,className:"songslider",onChange:this.props.onSongPosition})),m(f.a.Column,{width:2},void 0,m(c.a,{trigger:O,hoverable:!0,style:{backgroundColor:"rgba(0,0,0, .2)",borderStyle:"none"}},void 0,m("input",{orient:"vertical",type:"range",min:"0",max:"100",value:100*this.props.volume,onChange:this.props.onVolume,className:"slider",id:"myRange"}))))))}}])&&v(t.prototype,o),r&&v(t,r),n}();function _(e){return(_="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,n){return(E=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function N(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var B,x=function(e){function n(e){var t,o,r;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),o=this,r=R(n).call(this,e),t=!r||"object"!==_(r)&&"function"!==typeof r?T(o):r,N(T(T(t)),"handlePlay",function(){t.interval=setInterval(function(){return t.getCurrentTime()},300),t.myRef.current.play()}),N(T(T(t)),"handlePause",function(){t.myRef.current.pause(),clearInterval(t.interval)}),N(T(T(t)),"handleClick",function(){t.props.onAudioButton()}),N(T(T(t)),"handleVolume",function(e){var n=e.target.value/100;t.myRef.current.volume=n,t.setState({volume:n})}),N(T(T(t)),"handleSongPosition",function(e){var n=e.target.value/100,o=t.myRef.current.duration*n;o&&t.myRef.current.fastSeek(o)}),N(T(T(t)),"getMinSec",function(e){var n=Math.round(e);return n=Math.floor(n/60)+":"+n%60}),N(T(T(t)),"getCurrentTime",function(){var e=t.getMinSec(t.myRef.current.currentTime),n=t.getMinSec(t.myRef.current.duration),o=String((t.myRef.current.currentTime+1)/(t.myRef.current.duration+1)*100);"NaN:NaN"===n&&(o="0",n="0",e="0"),t.setState({percentPlayed:o,currentTime:e,duration:n})}),t.myRef=i.a.createRef(),t.state={percentPlayed:"0",duration:"0",currentTime:"0",volume:.5},t}var t,o,r;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&E(e,n)}(n,i.a.Component),t=n,(o=[{key:"componentDidUpdate",value:function(e){e.paused!==this.props.paused&&(this.interval&&clearInterval(this.interval),this.props.paused?this.handlePause():this.handlePlay())}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return function(e,n,t,o){S||(S="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,i=arguments.length-3;if(n||0===i||(n={children:void 0}),n&&r)for(var a in r)void 0===n[a]&&(n[a]=r[a]);else n||(n=r||{});if(1===i)n.children=o;else if(i>1){for(var u=new Array(i),l=0;l<i;l++)u[l]=arguments[l+3];n.children=u}return{$$typeof:S,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}(C,{myRef:this.myRef,onClick:this.handleClick,onVolume:this.handleVolume,onSongPosition:this.handleSongPosition,volume:this.state.volume,duration:this.state.duration,currentTime:this.state.currentTime,percentPlayed:this.state.percentPlayed,onEnd:this.props.onEnd,songs:this.props.songs,URL:this.props.song.URL,skipBack:this.props.skipBack,nowPlaying:this.props.nowPlaying,onPlaying:this.props.onPlaying,_icon:this.props.paused?"play":"pause"})}}])&&j(t.prototype,o),r&&j(t,r),n}(),$=t("ab1540874d5dec57806c");function A(e){return(A="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function M(e,n,t,o){B||(B="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,i=arguments.length-3;if(n||0===i||(n={children:void 0}),n&&r)for(var a in r)void 0===n[a]&&(n[a]=r[a]);else n||(n=r||{});if(1===i)n.children=o;else if(i>1){for(var u=new Array(i),l=0;l<i;l++)u[l]=arguments[l+3];n.children=u}return{$$typeof:B,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}function U(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function I(e,n){return!n||"object"!==A(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function V(e){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function z(e,n){return(z=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var L=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),I(this,V(n).apply(this,arguments))}var t,o,r;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&z(e,n)}(n,i.a.Component),t=n,(o=[{key:"render",value:function(){return M($.a.Consumer,{},void 0,function(e){return M(x,{onEnd:e.onEnd,song:e.nowPlaying,paused:e.paused,onAudioButton:e.onPausing,skipBack:e.skipBack,songs:e.songs,nowPlaying:e.nowPlaying,onPlaying:e.onPlaying})})}}])&&U(t.prototype,o),r&&U(t,r),n}();n.default=L}}]);