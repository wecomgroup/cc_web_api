(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-fund-assets_record"],{"00ee0":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return n}));var n={uNavbar:a("320b").default,uGap:a("ef7d").default,uSubsection:a("4d45").default,defaultPage:a("6377").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"pb-50"},[a("u-navbar",{attrs:{title:t.assetsType.type}}),a("v-uni-view",{staticClass:"deposit m-30"},[a("v-uni-view",{staticClass:"d-flex align-items-center"},[a("v-uni-text",{staticClass:"d-block font-size-28 mr-10"},[t._v(t._s(t.i18n.convert2))]),a("v-uni-text",{staticClass:"iconfont icon-yanjing_xianshi text-white font-size-36"})],1),a("v-uni-view",{staticClass:"mt-30"},[a("v-uni-view",{staticClass:"d-flex align-items-baseline"},[a("v-uni-text",{staticClass:"font-size-40 mr-20"},[t._v(t._s(t.balance.usdt_price))]),a("v-uni-text",{staticClass:"font-size-22"},[t._v("USDT")])],1)],1),a("v-uni-view",{staticClass:"d-block font-size-22 opacity-50 mt-8"},[t._v("≈ "+t._s((t.balance.usdt_price*t.$store.state.fiat.rate).toFixed(4))+" "+t._s(t.$store.state.fiat.currency_code))]),a("v-uni-view",{staticClass:"earnings-wrap"},[a("v-uni-view",{staticClass:"earnings font-size-22 d-grid-columns-2"},[a("v-uni-view",{},[a("v-uni-text",{staticClass:"d-block font-size-22 opacity-50"},[t._v(t._s(t.i18n.availableQuota)+"(USDT)")]),a("v-uni-text",{staticClass:"d-block font-size-22 mt-10"},[t._v(t._s(parseFloat(t.balance.balance)))])],1),a("v-uni-view",{},[a("v-uni-text",{staticClass:"d-block font-size-22 opacity-50"},[t._v(t._s(t.i18n.locked)+"(USDT)")]),a("v-uni-text",{staticClass:"d-block font-size-22 mt-10"},[t._v(t._s(parseFloat(t.balance.lock_balance)))])],1)],1)],1)],1),a("u-gap",{attrs:{height:"12","bg-color":"#f2f2f2"}}),a("v-uni-view",{staticClass:"m-30"},[a("u-subsection",{attrs:{list:t.nav}}),a("v-uni-view",{staticClass:"mt-30"},[t.list.length?t._l(t.list,(function(e){return a("v-uni-view",{staticClass:"p-30 box-shadow border-radius-20 mb-30"},[a("v-uni-view",{staticClass:"d-flex-between-center py-10"},[a("v-uni-text",{staticClass:"opacity-50"},[t._v(t._s(t.i18n.number))]),a("v-uni-text",{staticClass:"font-weight-bold",style:{color:t.$utils.getColor(e.value)}},[t._v(t._s(Number(e.value)+" "+e.currency_name))])],1),a("v-uni-view",{staticClass:"d-flex-between-center py-10"},[a("v-uni-text",{staticClass:"opacity-50"},[t._v(t._s(t.i18n.time))]),a("v-uni-text",{staticClass:"font-weight-bold"},[t._v(t._s(e.created_time))])],1),a("v-uni-view",{staticClass:"py-10 font-size-30"},[t._v(t._s(e.info))])],1)})):a("default-page")],2)],1)],1)},s=[]},"09e4":function(t,e,a){"use strict";a.r(e);var n=a("7582"),i=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a},"182a":function(t,e,a){t.exports=a.p+"static/img/empty.032ff13a.svg"},2667:function(t,e,a){t.exports=a.p+"static/img/update.5a19e0e2.svg"},2909:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var n=u(a("6005")),i=u(a("db90")),s=u(a("06c5")),c=u(a("3427"));function u(t){return t&&t.__esModule?t:{default:t}}function o(t){return(0,n.default)(t)||(0,i.default)(t)||(0,s.default)(t)||(0,c.default)()}},"31d0":function(t,e,a){t.exports=a.p+"static/img/data.1439158f.svg"},3335:function(t,e,a){t.exports=a.p+"static/img/comment.60b356bc.svg"},3427:function(t,e,a){"use strict";function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},"3b35":function(t,e,a){t.exports=a.p+"static/img/collect.e5625625.svg"},"4d3a":function(t,e,a){t.exports=a.p+"static/img/bill.fb3e16d2.svg"},"5ac8":function(t,e,a){t.exports=a.p+"static/img/net.0f9f721f.svg"},6005:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var n=i(a("6b75"));function i(t){return t&&t.__esModule?t:{default:t}}function s(t){if(Array.isArray(t))return(0,n.default)(t)}},6377:function(t,e,a){"use strict";a.r(e);var n=a("f91d"),i=a("969f");for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);var c,u=a("f0c5"),o=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,"08fc67de",null,!1,n["a"],c);e["default"]=o.exports},6797:function(t,e,a){t.exports=a.p+"static/img/content.7f19abd8.svg"},"6e31":function(t,e,a){"use strict";a.r(e);var n=a("00ee0"),i=a("09e4");for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);var c,u=a("f0c5"),o=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,"ae4f19d2",null,!1,n["a"],c);e["default"]=o.exports},7582:function(t,e,a){"use strict";var n=a("4ea4");a("99af"),a("7db0"),a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("2909")),s={data:function(){return{nav:[{name:this.$t("fund.financialRecords")}],currency:0,type_id:0,type_name:"",balance:{},page:1,list:[],canGet:!0}},onLoad:function(t){var e=t.currency,a=t.type_id,n=t.type_name;if(!e||!a||!n)return this.$utils.showToast(this.$t("common.paramsWrong")),void setTimeout((function(){uni.navigateBack({delta:1})}),1200);this.currency=e,this.type_id=a,this.type_name=n},onShow:function(){this.getDetail(),this.getLegalLog()},methods:{getDetail:function(){var t=this,e=this.currency,a=this.type_name;this.$u.api.wallet.getDetail(e,a).then((function(e){var a=e.message;1==t.type_id?(a.balance=Number(e.message.legal_balance),a.lock_balance=Number(e.message.lock_legal_balance)):2==t.type_id?(a.balance=Number(e.message.change_balance),a.lock_balance=Number(e.message.lock_change_balance)):3==t.type_id?(a.balance=Number(e.message.lever_balance),a.lock_balance=Number(e.message.lock_lever_balance)):4==t.type_id&&(a.balance=Number(e.message.micro_balance),a.lock_balance=Number(e.message.lock_micro_balance)),t.balance=a}))},getLegalLog:function(){var t=this;if(this.canGet){var e=this.currency,a=this.type_id,n=this.page;this.$u.api.wallet.getLegalLog(e,a,n).then((function(e){var a=e.message.list;a.length?(t.list=[].concat((0,i.default)(t.list),(0,i.default)(a)),t.page++):t.canGet=!1}))}}},computed:{i18n:function(){return this.$t("fund")},assetsType:function(){var t=this,e=this.$t("fund"),a=[{id:1,name:"legal",type:e.fiat+e.account},{id:2,name:"change",type:e.exchange+e.account},{id:3,name:"lever",type:e.leverage+e.account},{id:4,name:"micro",type:e.second+e.account}];return a.find((function(e){return e.id==t.type_id}))}},onReachBottom:function(){this.getLegalLog()}};e.default=s},"969f":function(t,e,a){"use strict";a.r(e);var n=a("fa8f"),i=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a},b43f:function(t,e,a){t.exports=a.p+"static/img/order.7c5cfe37.svg"},b5b7:function(t,e,a){t.exports=a.p+"static/img/coupon.9fe7727e.svg"},c524:function(t,e,a){t.exports=a.p+"static/img/card.d87c16dc.svg"},db90:function(t,e,a){"use strict";function n(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}a("a4d3"),a("e01a"),a("d28b"),a("a630"),a("d3b7"),a("3ca3"),a("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},ef87:function(t,e,a){t.exports=a.p+"static/img/address.94a4030c.svg"},ef91:function(t,e,a){t.exports=a.p+"static/img/message.654f52a9.svg"},f91d:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[t.total?a("v-uni-text",{staticClass:"text-center opacity-50 font-size-22 py-20 d-block"},[t._v(t._s(t.$t("common.hasNoData")))]):a("v-uni-image",{staticClass:"mx-auto d-block my-30",staticStyle:{width:"320rpx",height:"240rpx"},attrs:{src:t.data}})],1)},s=[]},fa8f:function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"default-page",props:{name:{type:String,default:"empty"},length:{type:Number,default:0},total:{type:Number,default:0}},data:function(){return{list:{address:a("ef87"),bill:a("4d3a"),card:a("c524"),collect:a("3b35"),comment:a("3335"),content:a("6797"),coupon:a("b5b7"),data:a("31d0"),message:a("ef91"),net:a("5ac8"),order:a("b43f"),empty:a("182a"),update:a("2667")}}},computed:{data:function(){var t=this.list[this.name];return t||(t?void 0:this.list["empty"])}}};e.default=n}}]);