(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28384bfc"],{8418:function(t,a,e){"use strict";var s=e("c04e"),r=e("9bf2"),o=e("5c6c");t.exports=function(t,a,e){var n=s(a);n in t?r.f(t,n,o(0,e)):t[n]=e}},"99af":function(t,a,e){"use strict";var s=e("23e7"),r=e("d039"),o=e("e8b5"),n=e("861d"),i=e("7b0b"),l=e("50c4"),c=e("8418"),d=e("65f0"),u=e("1dde"),m=e("b622"),p=e("2d00"),v=m("isConcatSpreadable"),f=9007199254740991,h="Maximum allowed index exceeded",C=p>=51||!r((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),_=u("concat"),g=function(t){if(!n(t))return!1;var a=t[v];return void 0!==a?!!a:o(t)},b=!C||!_;s({target:"Array",proto:!0,forced:b},{concat:function(t){var a,e,s,r,o,n=i(this),u=d(n,0),m=0;for(a=-1,s=arguments.length;a<s;a++)if(o=-1===a?n:arguments[a],g(o)){if(r=l(o.length),m+r>f)throw TypeError(h);for(e=0;e<r;e++,m++)e in o&&c(u,m,o[e])}else{if(m>=f)throw TypeError(h);c(u,m++,o)}return u.length=m,u}})},b83a:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),e("div",{staticClass:"bg-light"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-center pt-5"},[e("div",{staticClass:"col-md-8"},[e("h3",{staticClass:"text-center"},[t._v("購物車")]),e("table",{staticClass:"table mt-4 table-lg"},[t._m(0),e("tbody",t._l(t.carts.carts,(function(a){return e("tr",{key:a.id},[e("td",[e("button",{staticClass:"btn btn-outline-danger",attrs:{type:"button"},on:{click:function(e){return t.removeCartModal(a)}}},[e("i",{staticClass:"far fa-trash-alt"})])]),e("td",[t._v(" "+t._s(a.product.title)+" "),a.coupon?e("div",{staticClass:"text-success"},[t._v("已使用優惠券")]):t._e()]),e("td",{},[t._v(t._s(t._f("currency")(a.product.price))+"/"+t._s(a.product.unit))]),e("td",{},[t._v(t._s(a.qty)+t._s(a.product.unit))]),e("td",[e("div",{class:{"text-line-through":a.coupon}},[t._v(t._s(t._f("currency")(a.total)))]),a.coupon?e("div",{staticClass:"text-success"},[t._v(t._s(t._f("currency")(a.final_total)))]):t._e()])])})),0),e("tfoot",[e("tr",[e("th"),e("th"),e("th"),e("th",{staticClass:"h5"},[t._v("總計:")]),e("th",{staticClass:"h5",class:{"text-line-through":t.carts.final_total!==t.carts.total}},[t._v(t._s(t._f("currency")(t.carts.total)))])]),t.carts.final_total!==t.carts.total?e("tr",{staticClass:"text-success"},[e("th"),e("th"),e("th"),e("th",{staticClass:"h5"},[t._v("優惠價:")]),e("th",{staticClass:"h5"},[t._v(t._s(t._f("currency")(t.carts.final_total)))])]):t._e()])]),e("div",{staticClass:"input-group my-4"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.couponCode,expression:"couponCode"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.couponCode},on:{input:function(a){a.target.composing||(t.couponCode=a.target.value)}}}),e("div",{staticClass:"input-group-append"},[e("button",{staticClass:"btn btn-outline-success",attrs:{type:"button"},on:{click:t.useCoupon}},[t._v("輸入優惠券")])])])])]),e("div",{staticClass:"row mt-5 pb-5 justify-content-center"},[e("ValidationObserver",{staticClass:"col-md-6",scopedSlots:t._u([{key:"default",fn:function(a){var s=a.handleSubmit;return[e("form",{on:{submit:function(a){return a.preventDefault(),s(t.creatOrder)}}},[e("h4",{staticClass:"text-center"},[t._v("建立訂單")]),e("div",{staticClass:"form-group pb-2"},[e("ValidationProvider",{attrs:{rules:"email|required"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors,r=a.classes;return[e("label",{attrs:{for:"useremail"}},[t._v("Email")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.email,expression:"form.user.email"}],staticClass:"form-control",class:r,attrs:{type:"email",name:"email",id:"useremail"},domProps:{value:t.form.user.email},on:{input:function(a){a.target.composing||t.$set(t.form.user,"email",a.target.value)}}}),e("span",{staticClass:"text-danger"},[t._v(t._s(s[0]))])]}}],null,!0)})],1),e("div",{staticClass:"form-group pb-2"},[e("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors,r=a.classes;return[e("label",{attrs:{for:"username"}},[t._v("收件人姓名")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.name,expression:"form.user.name"}],staticClass:"form-control",class:r,attrs:{type:"text",name:"name",id:"username"},domProps:{value:t.form.user.name},on:{input:function(a){a.target.composing||t.$set(t.form.user,"name",a.target.value)}}}),e("span",{staticClass:"text-danger"},[t._v(t._s(s[0]))])]}}],null,!0)})],1),e("div",{staticClass:"form-group pb-2"},[e("ValidationProvider",{attrs:{rules:"required|numeric"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors,r=a.classes;return[e("label",{attrs:{for:"usertel"}},[t._v("收件人電話")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.tel,expression:"form.user.tel"}],staticClass:"form-control",class:r,attrs:{type:"text",name:"tel",id:"usertel"},domProps:{value:t.form.user.tel},on:{input:function(a){a.target.composing||t.$set(t.form.user,"tel",a.target.value)}}}),e("span",{staticClass:"text-danger"},[t._v(t._s(s[0]))])]}}],null,!0)})],1),e("div",{staticClass:"form-group pb-2"},[e("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors,r=a.classes;return[e("label",{attrs:{for:"useraddresss"}},[t._v("收件人地址")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.address,expression:"form.user.address"}],staticClass:"form-control",class:r,attrs:{type:"text",name:"address",id:"useraddress"},domProps:{value:t.form.user.address},on:{input:function(a){a.target.composing||t.$set(t.form.user,"address",a.target.value)}}}),e("span",{staticClass:"text-danger"},[t._v(t._s(s[0]))])]}}],null,!0)})],1),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"message"}},[t._v("留言")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{name:"message",id:"message",cols:"30",rows:"10"},domProps:{value:t.form.message},on:{input:function(a){a.target.composing||t.$set(t.form,"message",a.target.value)}}})]),e("div",{staticClass:"text-right"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("送出訂單")])])])]}}])})],1)]),e("div",{staticClass:"modal fade",attrs:{id:"delCartModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content border-0"},[t._m(1),e("div",{staticClass:"modal-body"},[t._v(" 是否刪除 "),e("strong",{staticClass:"text-danger"},[t._v(t._s(t.delCart.title))]),t._v(" 商品(刪除後將無法恢復)。 ")]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),e("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.removeCart}},[t._v("確認刪除")])])])])])])],1)},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",{attrs:{width:"50"}}),e("th",[t._v("產品名稱")]),e("th",{attrs:{width:"120"}},[t._v("單價")]),e("th",{attrs:{width:"120"}},[t._v("數量")]),e("th",{attrs:{width:"120"}},[t._v("小計")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header bg-danger text-white"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[e("span",[t._v("從購物車刪除")])]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],o=(e("99af"),e("1157")),n=e.n(o),i={data:function(){return{isLoading:!1,carts:[],delCart:{},couponCode:"",form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{getCarts:function(){var t="".concat("https://vue-course-api.hexschool.io/","api/").concat("ricky","/cart"),a=this;a.isLoading=!0,this.$http.get(t).then((function(t){a.carts=t.data.data,a.cartLen=t.data.data.carts.length,a.isLoading=!1,console.log(t.data)}))},removeCartModal:function(t){n()("#delCartModal").modal("show"),this.delCart=t,this.delCart.title=t.product.title,this.cartTitle=t.product.title,console.log(this.delCart)},removeCart:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io/","api/").concat("ricky","/cart/").concat(t.delCart.id);this.$http.delete(a).then((function(t){n()("#delCartModal").modal("hide"),window.location.reload()}))},useCoupon:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io/","api/").concat("ricky","/coupon"),e={code:t.couponCode};this.$http.post(a,{data:e}).then((function(a){t.getCarts(),t.couponCode="",console.log(a.data)}))},creatOrder:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io/","api/").concat("ricky","/order"),e=t.form;this.$http.post(a,{data:e}).then((function(a){console.log(a.data),a.data.success&&t.$router.push("/pay/".concat(a.data.orderId))}))}},created:function(){this.getCarts()}},l=i,c=e("2877"),d=Object(c["a"])(l,s,r,!1,null,null,null);a["default"]=d.exports}}]);
//# sourceMappingURL=chunk-28384bfc.8e7a197d.js.map