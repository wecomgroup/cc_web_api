(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-setting-bank"],{"4a0e":function(n,a,t){"use strict";t("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;a.default={data:function(){return{real_name:"",bank_name:"",bank_account:"",bank_dizhi:"",alipay_account:"",wechat_nickname:"",wechat_account:""}},onShow:function(){this.getCard()},methods:{getCard:function(){var n=this;this.$u.api.setting.getCard().then((function(a){var t=a.message;n.real_name=t.real_name,n.bank_name=t.bank_name,n.bank_account=t.bank_account,n.bank_dizhi=t.bank_dizhi,n.alipay_account=t.alipay_account,n.wechat_account=t.wechat_account,n.wechat_nickname=t.wechat_nickname}))},submit:function(){var n=this,a=this.i18n,t=this.real_name,i=this.bank_name,e=this.bank_account,c=this.bank_dizhi,u=this.alipay_account,s=this.wechat_account,o=this.wechat_nickname;t&&i&&e&&c||this.$utils.showToast(a.allNeed),this.$u.api.setting.saveCard({real_name:t,bank_name:i,bank_account:e,bank_dizhi:c,alipay_account:u,wechat_account:s,wechat_nickname:o}).then((function(a){n.$utils.showToast(a.message)}))}},computed:{i18n:function(){return this.$t("setting")}}}},"932c":function(n,a,t){"use strict";t.r(a);var i=t("4a0e"),e=t.n(i);for(var c in i)["default"].indexOf(c)<0&&function(n){t.d(a,n,(function(){return i[n]}))}(c);a["default"]=e.a},edfe:function(n,a,t){"use strict";t.d(a,"b",(function(){return e})),t.d(a,"c",(function(){return c})),t.d(a,"a",(function(){return i}));var i={uNavbar:t("cc06").default},e=function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("v-uni-view",{},[t("u-navbar",{attrs:{title:n.i18n.addBank}}),t("v-uni-view",{staticClass:"mx-30 mt-30 box-shadow  bg-black p-30 border-radius-20 text-white"},[t("v-uni-view",{staticClass:"login-input-group mt-0"},[t("v-uni-text",{staticClass:"label"},[n._v(n._s(n.i18n.real_name))]),t("v-uni-input",{staticClass:"login-input",attrs:{type:"text"},model:{value:n.real_name,callback:function(a){n.real_name=a},expression:"real_name"}})],1),t("v-uni-view",{staticClass:"login-input-group"},[t("v-uni-text",{staticClass:"label"},[n._v(n._s(n.i18n.bank_name))]),t("v-uni-input",{staticClass:"login-input",attrs:{type:"text"},model:{value:n.bank_name,callback:function(a){n.bank_name=a},expression:"bank_name"}})],1),t("v-uni-view",{staticClass:"login-input-group"},[t("v-uni-text",{staticClass:"label"},[n._v(n._s(n.i18n.bank_dizhi))]),t("v-uni-input",{staticClass:"login-input",attrs:{type:"text"},model:{value:n.bank_dizhi,callback:function(a){n.bank_dizhi=a},expression:"bank_dizhi"}})],1),t("v-uni-view",{staticClass:"login-input-group"},[t("v-uni-text",{staticClass:"label"},[n._v(n._s(n.i18n.bank_account))]),t("v-uni-input",{staticClass:"login-input",attrs:{type:"text"},model:{value:n.bank_account,callback:function(a){n.bank_account=a},expression:"bank_account"}})],1)],1),t("v-uni-view",{staticClass:"m-30"},[t("v-uni-button",{staticClass:"warning-button py-0",on:{click:function(a){arguments[0]=a=n.$handleEvent(a),n.submit.apply(void 0,arguments)}}},[n._v(n._s(n.$t("common.confirm")))])],1)],1)},c=[]},f862:function(n,a,t){"use strict";t.r(a);var i=t("edfe"),e=t("932c");for(var c in e)["default"].indexOf(c)<0&&function(n){t.d(a,n,(function(){return e[n]}))}(c);var u=t("f0c5"),s=Object(u["a"])(e["default"],i["b"],i["c"],!1,null,"e2bfcb6a",null,!1,i["a"],void 0);a["default"]=s.exports}}]);