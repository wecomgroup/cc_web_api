webpackJsonp([10],{KuvI:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={data:function(){return{list:[],filterPms:{type:"none",id:"",page:1,isSure:"none"},skins:localStorage.getItem("skin")||"days"}},beforeCreate:function(){document.querySelector("html").setAttribute("style","background-color:#f7f7f7;")},beforeDestroy:function(){document.querySelector("html").removeAttribute("style")},created:function(){var t=window.localStorage.getItem("token")||"";t&&(this.token=t,this.filterPms.id=this.$route.query.id||"",this.getList())},methods:{getList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],s={};e||(this.filterPms.page=1),s.currency_id=this.filterPms.id,s.page=this.filterPms.page,"none"!=this.filterPms.type&&(s.type=this.filterPms.type),"none"!=this.filterPms.isSure&&(s.is_sure=this.filterPms.isSure);var i=layer.load();this.$http({url:"/api/seller_legal_user_deal",params:s,headers:{Authorization:this.token}}).then(function(s){if(layer.close(i),"ok"==s.data.type){var a=s.data.message;e?a.data.length?t.list=t.list.concat(a.data):layer.msg(t.$t("td.nomore")):t.list=a.data,a.data.length&&(t.filterPms.page+=1)}})}}},a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:"days"==t.skins?"whites":"whites balck",attrs:{id:"legal-record"}},[s("div",{staticClass:"title bgf8"},[t._v(t._s(t.$t("header.fiat"))+t._s(t.$t("asset.record")))]),t._v(" "),s("div",{staticClass:"filter-box ft14 bgf8"},[s("div",[s("span",[t._v(t._s(t.$t("fat.tdType"))+"：")]),t._v(" "),s("span",{class:{select:"sell"==t.filterPms.type},on:{click:function(e){t.filterPms.type="sell",t.getList()}}},[t._v(t._s(t.$t("td.buy")))]),t._v(" "),s("span",{class:{select:"buy"==t.filterPms.type},on:{click:function(e){t.filterPms.type="buy",t.getList()}}},[t._v(t._s(t.$t("td.sell")))])]),t._v(" "),s("div",[s("span",[t._v(t._s(t.$t("fat.odStatus"))+"：")]),t._v(" "),s("span",{class:{select:1==t.filterPms.isSure},on:{click:function(e){t.filterPms.isSure=1,t.getList()}}},[t._v(t._s(t.$t("td.finished")))]),t._v(" "),s("span",{class:{select:2==t.filterPms.isSure},on:{click:function(e){t.filterPms.isSure=2,t.getList()}}},[t._v(t._s(t.$t("td.ceiled")))])])]),t._v(" "),s("ul",{staticClass:"ft14 bgf8"},t._l(t.list,function(e,i){return s("li",{key:i},[s("div",{staticClass:"flex li-t"},[s("div",{staticClass:"ft14 bold cblue"},["sell"==e.type?s("span",[t._v(t._s(t.$t("td.buy")))]):s("span",[t._v(t._s(t.$t("td.sell")))]),t._v(" "),s("span",[t._v(t._s(e.currency_name))])]),t._v(" "),s("div",{staticClass:"status"},[0==e.is_sure&&"sell"==e.type?s("router-link",{attrs:{to:{path:"/shopLegalPayDetail",query:{id:e.id}}}},[t._v(t._s(t.$t("td.nofinish"))+" >")]):0==e.is_sure&&"buy"==e.type?s("router-link",{attrs:{to:{path:"/shopLegalPayDetail",query:{id:e.id}}}},[t._v(t._s(t.$t("td.nofinish"))+" >")]):1==e.is_sure?s("router-link",{attrs:{to:{path:"/shopLegalPayDetail",query:{id:e.id}}}},[t._v(t._s(t.$t("td.finished"))+" >")]):2==e.is_sure?s("router-link",{staticClass:"ceilColor",attrs:{to:{path:"/shopLegalPayDetail",query:{id:e.id}}}},[t._v(t._s(t.$t("td.ceiled"))+" >")]):s("router-link",{attrs:{to:{path:"/shopLegalPayDetail",query:{id:e.id}}}},[t._v(t._s(t.$t("td.payed"))+" >")])],1)]),t._v(" "),s("div",{staticClass:"flex li-b"},[s("div",[s("span",[t._v(t._s(t.$t("td.time")))]),t._v(" "),s("span",[t._v(t._s(e.create_time))])]),t._v(" "),s("div",[s("span",[t._v(t._s(t.$t("td.num"))+"（"+t._s(e.currency_name)+")")]),t._v(" "),s("span",[t._v(t._s(t._f("numFilters")(e.number||"0.000",3)))])]),t._v(" "),s("div",[s("span",[t._v(t._s(t.$t("td.tradeTotal"))+"（CNY）")]),t._v(" "),s("span",[t._v(t._s(t._f("numFilters")(e.deal_money||"0.000",3)))])])])])})),t._v(" "),t.list.length?s("div",{staticClass:"more",on:{click:function(e){t.getList(!0)}}},[t._v(t._s(t.$t("td.more")))]):s("div",{staticClass:"nomore"},[t._v(t._s(t.$t("td.nomore")))])])},staticRenderFns:[]};var l=s("VU/8")(i,a,!1,function(t){s("Ybcj")},"data-v-204deafb",null);e.default=l.exports},Ybcj:function(t,e){}});
//# sourceMappingURL=10.9d377ad9e5e1549ba097.js.map