(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/registration"],{"040d":function(n,t,e){"use strict";var o=e("d371"),u=e.n(o);u.a},"0b41":function(n,t,e){"use strict";(function(n){e("3350");o(e("66fd"));var t=o(e("32c3"));function o(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=e,n(t.default)}).call(this,e("543d")["createPage"])},"27b7":function(n,t,e){"use strict";e.r(t);var o=e("e864"),u=e.n(o);for(var a in o)"default"!==a&&function(n){e.d(t,n,(function(){return o[n]}))}(a);t["default"]=u.a},"32c3":function(n,t,e){"use strict";e.r(t);var o=e("ead8"),u=e("27b7");for(var a in u)"default"!==a&&function(n){e.d(t,n,(function(){return u[n]}))}(a);e("040d");var c,r=e("f0c5"),i=Object(r["a"])(u["default"],o["b"],o["c"],!1,null,"3e8bacc6",null,!1,o["a"],c);t["default"]=i.exports},d371:function(n,t,e){},e864:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{captchaImg:"",info:{username:"王炸",password:"123"}}},onLoad:function(){},methods:{gotoLogin:function(){n.navigateTo({url:"login"})},handleReg:function(){this.$post("/1.1/users",this.info).then((function(t){console.log(t);t.objectId;var e=t.code,o=202===e?"账号已被占用":"注册层成功";n.showToast({title:o,icon:"none"})}))}}};t.default=e}).call(this,e("543d")["default"])},ead8:function(n,t,e){"use strict";var o;e.d(t,"b",(function(){return u})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return o}));var u=function(){var n=this,t=n.$createElement;n._self._c},a=[]}},[["0b41","common/runtime","common/vendor"]]]);