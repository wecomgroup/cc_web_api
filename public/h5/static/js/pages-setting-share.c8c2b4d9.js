(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-setting-share"],{"00f9":function(t,e,s){"use strict";s.d(e,"b",(function(){return n})),s.d(e,"c",(function(){return r})),s.d(e,"a",(function(){return i}));var i={uNavbar:s("cc06").default,uqrcode:s("31b1").default},n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-uni-view",[s("u-navbar",{attrs:{title:t.i18n.share}}),s("v-uni-text",{staticClass:"d-block text-center font-size-50 text-white m-30 py-30"},[t._v(t._s(t.i18n.my_qrcode))]),s("v-uni-view",{staticClass:"m-30 p-30 border-radius-20 bg-black text-white"},[s("v-uni-view",{staticClass:"d-flex  align-items-center"},[s("v-uni-image",{staticClass:"border-radius-50per border",staticStyle:{width:"120rpx",height:"120rpx"},attrs:{src:t._f("retImageUrl")(t.user.head_portrait),mode:"aspectFill"}}),s("v-uni-view",{staticClass:"ml-22"},[s("v-uni-text",{staticClass:"d-block font-size-36 font-weight-bold"},[t._v(t._s(t.user.account_number||t.$t("common.plsLogin")))]),t.user.id?s("v-uni-text",{staticClass:"d-block font-size-22 opacity-50 mt-4"},[t._v("ID:"+t._s(t.user.id))]):t._e(),t.user.score?s("v-uni-text",{staticClass:"d-block font-size-22 opacity-50 mt-4"},[t._v(t._s(t.$t("common.invitecode"))+":"+t._s(t.user.extension_code))]):t._e()],1)],1),s("v-uni-view",{staticClass:"mt-50 mx-auto text-center p-30 bg-333 border-radius-20",staticStyle:{width:"340px"}},[s("uqrcode",{ref:"uqrcode"})],1),s("v-uni-view",{staticClass:"text-center"},[s("v-uni-text",{staticClass:"d-block font-size-22 opacity-50 mt-4"},[t._v(t._s(t.shareUrl))])],1),s("v-uni-button",{staticStyle:{background:"#fbc68b",color:"color:white","margin-top":"5%"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.copy(t.shareUrl)}}},[t._v(t._s(t.i18n.share))])],1)],1)},r=[]},"212f":function(t,e,s){"use strict";s.r(e);var i=s("00f9"),n=s("cc6f");for(var r in n)["default"].indexOf(r)<0&&function(t){s.d(e,t,(function(){return n[t]}))}(r);var c=s("f0c5"),a=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"c66a3278",null,!1,i["a"],void 0);e["default"]=a.exports},"8bbf":function(t,e,s){"use strict";s("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{user:{},shareUrl:""}},onLoad:function(){this.user=this.$store.state.user,this.shareUrl=this.$store.state.baseDomain+"/h5/#/pages/common/register?code="+this.user.extension_code},onShow:function(){this.$nextTick((function(){this.$refs.uqrcode.make({size:300,text:this.shareUrl})}))},methods:{copy:function(t){var e=document.createElement("textarea");e.value=t,document.body.appendChild(e),e.select(),e.focus(),document.execCommand("copy")&&this.$u.toast("success"),document.body.removeChild(e)}},computed:{i18n:function(){return this.$t("setting")}}};e.default=i},cc6f:function(t,e,s){"use strict";s.r(e);var i=s("8bbf"),n=s.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){s.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a}}]);