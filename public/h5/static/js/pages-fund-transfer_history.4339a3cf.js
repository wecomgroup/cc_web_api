(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-fund-transfer_history"],{"29df":function(t,e,n){"use strict";n.r(e);var i=n("cdb9"),a=n("ed6da");for(var s in a)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(s);var c=n("f0c5"),u=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"f8dbb8c0",null,!1,i["a"],void 0);e["default"]=u.exports},"344e":function(t,e,n){"use strict";(function(t){n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("99af");var a=i(n("2909")),s={data:function(){return{page:1,canGet:!0,list:[]}},onShow:function(){this.page=1,this.canGet=!0,this.list=[],this.getTransferHistory()},methods:{getTransferHistory:function(){var e=this;this.canGet&&this.$u.api.wallet.getTransferHistory(this.page).then((function(n){var i=n.message.data||[];t.log(i),i.length?(e.list=[].concat((0,a.default)(e.list),(0,a.default)(i)),e.page++):e.canGet=!1}))}},computed:{i18n:function(){return this.$t("fund")}},onReachBottom:function(){this.getTransferHistory()}};e.default=s}).call(this,n("5a52")["default"])},cdb9:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}));var i={uNavbar:n("cc06").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("u-navbar",{attrs:{title:t.i18n.financialRecords}}),n("v-uni-view",{staticClass:"m-30"},t._l(t.list,(function(e){return n("v-uni-view",{staticClass:"p-20 box-shadow border-radius-20 mb-20 bg-black text-white"},[n("v-uni-view",{staticClass:"d-flex-between-center py-10 "},[n("v-uni-text",{staticClass:"opacity-50"},[t._v(t._s(t.i18n.currencyName))]),n("v-uni-text",{staticClass:"font-weight-bold"},[t._v(t._s(e.currency_name))])],1),n("v-uni-view",{staticClass:"d-flex-between-center py-10 "},[n("v-uni-text",{staticClass:"opacity-50"},[t._v(t._s(t.i18n.transactionInfo))]),n("v-uni-text",{staticClass:"font-weight-bold"},[t._v(t._s(e.transaction_info))])],1),n("v-uni-view",{staticClass:"d-flex-between-center py-10 "},[n("v-uni-text",{staticClass:"opacity-50"},[t._v(t._s(t.i18n.number))]),n("v-uni-text",{staticClass:"font-weight-bold",style:{color:t.$utils.getColor(e.value)}},[t._v(t._s(Number(e.value)))])],1),n("v-uni-view",{staticClass:"d-flex-between-center py-10"},[n("v-uni-text",{staticClass:"opacity-50"},[t._v(t._s(t.i18n.time))]),n("v-uni-text",{staticClass:"font-weight-bold"},[t._v(t._s(e.created_time))])],1),n("v-uni-view",{staticClass:"d-flex-between-center py-10"},[n("v-uni-text",{staticClass:"font-weight-bold"},[t._v(t._s(e.info))])],1)],1)})),1)],1)},s=[]},ed6da:function(t,e,n){"use strict";n.r(e);var i=n("344e"),a=n.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a}}]);