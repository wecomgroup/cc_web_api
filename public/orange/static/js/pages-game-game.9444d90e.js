(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-game-game"],{"39c7":function(t,n,e){"use strict";e.r(n);var r=e("af62"),u=e("f38a");for(var a in u)"default"!==a&&function(t){e.d(n,t,(function(){return u[t]}))}(a);var i,c=e("f0c5"),f=Object(c["a"])(u["default"],r["b"],r["c"],!1,null,"bd434f30",null,!1,r["a"],i);n["default"]=f.exports},af62:function(t,n,e){"use strict";var r;e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return r}));var u=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("v-uni-web-view",{attrs:{src:t.src}})],1)},a=[]},be00:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={data:function(){return{src:""}},onLoad:function(){this.getGameUrl()},methods:{getGameUrl:function(){var t=this;this.$u.api.common.getSetting("game_url").then((function(n){t.src=n.message.value}))}}};n.default=r},f38a:function(t,n,e){"use strict";e.r(n);var r=e("be00"),u=e.n(r);for(var a in r)"default"!==a&&function(t){e.d(n,t,(function(){return r[t]}))}(a);n["default"]=u.a}}]);