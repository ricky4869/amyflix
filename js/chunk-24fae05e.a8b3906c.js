(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24fae05e"],{"0013":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),e("div",{staticClass:"row mt-4"},t._l(t.products,(function(a){return e("div",{key:a.id,staticClass:"col-md-4 mb-4"},[e("div",{staticClass:"card border-0 shadow-sm"},[e("div",{staticStyle:{height:"300px","background-size":"cover","background-position":"center"},style:{backgroundImage:"url("+a.imageUrl+")"}}),e("div",{staticClass:"card-body"},[e("span",{staticClass:"badge badge-secondary float-right ml-2"},[t._v(t._s(a.category))]),e("h5",{staticClass:"card-title"},[e("a",{staticClass:"text-dark",attrs:{href:"#"}},[t._v(t._s(a.title))])]),e("p",{staticClass:"card-text"},[t._v(t._s(a.content))]),e("div",{staticClass:"d-flex align-items-baseline",class:{"justify-content-end":!a.origin_price,"justify-content-between":a.origin_price}},[a.origin_price?t._e():e("div",{staticClass:"h5"},[t._v(t._s(t._f("currency")(a.price))+" 元")]),a.origin_price?e("del",{staticClass:"h6"},[t._v("原價 "+t._s(t._f("currency")(a.origin_price))+" 元")]):t._e(),a.origin_price?e("div",{staticClass:"h5"},[t._v("現在只要 "+t._s(t._f("currency")(a.price))+" 元")]):t._e()])]),e("div",{staticClass:"card-footer d-flex"},[e("button",{staticClass:"btn btn-outline-secondary btn-sm",attrs:{type:"button"},on:{click:function(e){return t.getPorduct(a.id)}}},[t.status.isItem===a.id?e("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v(" 查看更多 ")]),e("button",{staticClass:"btn btn-outline-danger btn-sm ml-auto",attrs:{type:"button"},on:{click:function(e){return t.addCart(a.id)}}},[t.status.isCart===a.id?e("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v(" 加到購物車 ")])])])])})),0),t.products.length?e("Pagination",{attrs:{pagination:t.pagination},on:{getPages:t.getPorducts}}):t._e(),t.cartLen>0?e("div",{staticClass:"container mt-5"},[e("h3",{staticClass:"text-center"},[t._v("購物車")]),e("table",{staticClass:"table mt-4 table-lg"},[t._m(0),e("tbody",t._l(t.carts.carts,(function(a){return e("tr",{key:a.id},[e("td",[e("button",{staticClass:"btn btn-outline-danger",attrs:{type:"button"},on:{click:function(e){return t.removeCartModal(a)}}},[e("i",{staticClass:"far fa-trash-alt"})])]),e("td",[t._v(" "+t._s(a.product.title)+" "),a.coupon?e("div",{staticClass:"text-success"},[t._v("已使用優惠券")]):t._e()]),e("td",{},[t._v(t._s(t._f("currency")(a.product.price))+"/"+t._s(a.product.unit))]),e("td",{},[t._v(t._s(a.qty)+t._s(a.product.unit))]),e("td",[e("div",{class:{"text-line-through":a.coupon}},[t._v(t._s(t._f("currency")(a.total)))]),a.coupon?e("div",{staticClass:"text-success"},[t._v(t._s(t._f("currency")(a.final_total)))]):t._e()])])})),0),e("tfoot",[e("tr",[e("th"),e("th"),e("th"),e("th",{staticClass:"h5"},[t._v("總計:")]),e("th",{staticClass:"h5",class:{"text-line-through":t.carts.final_total!==t.carts.total}},[t._v(t._s(t._f("currency")(t.carts.total)))])]),t.carts.final_total!==t.carts.total?e("tr",{staticClass:"text-success"},[e("th"),e("th"),e("th"),e("th",{staticClass:"h5"},[t._v("優惠價:")]),e("th",{staticClass:"h5"},[t._v(t._s(t._f("currency")(t.carts.final_total)))])]):t._e()])]),e("div",{staticClass:"input-group my-4"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.couponCode,expression:"couponCode"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.couponCode},on:{input:function(a){a.target.composing||(t.couponCode=a.target.value)}}}),e("div",{staticClass:"input-group-append"},[e("button",{staticClass:"btn btn-outline-success",attrs:{type:"button"},on:{click:t.useCoupon}},[t._v("輸入優惠券")])])])]):t._e(),e("div",{staticClass:"row my-5 justify-content-center"},[e("ValidationObserver",{staticClass:"col-md-6",scopedSlots:t._u([{key:"default",fn:function(a){var s=a.handleSubmit;return[e("form",{on:{submit:function(a){return a.preventDefault(),s(t.creatOrder)}}},[e("h4",{staticClass:"text-center"},[t._v("建立訂單")]),e("div",{staticClass:"form-group pb-2"},[e("ValidationProvider",{attrs:{rules:"email|required"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors,r=a.classes;return[e("label",{attrs:{for:"useremail"}},[t._v("Email")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.email,expression:"form.user.email"}],staticClass:"form-control",class:r,attrs:{type:"email",name:"email",id:"useremail"},domProps:{value:t.form.user.email},on:{input:function(a){a.target.composing||t.$set(t.form.user,"email",a.target.value)}}}),e("span",{staticClass:"text-danger"},[t._v(t._s(s[0]))])]}}],null,!0)})],1),e("div",{staticClass:"form-group pb-2"},[e("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors,r=a.classes;return[e("label",{attrs:{for:"username"}},[t._v("收件人姓名")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.name,expression:"form.user.name"}],staticClass:"form-control",class:r,attrs:{type:"text",name:"name",id:"username"},domProps:{value:t.form.user.name},on:{input:function(a){a.target.composing||t.$set(t.form.user,"name",a.target.value)}}}),e("span",{staticClass:"text-danger"},[t._v(t._s(s[0]))])]}}],null,!0)})],1),e("div",{staticClass:"form-group pb-2"},[e("ValidationProvider",{attrs:{rules:"required|numeric"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors,r=a.classes;return[e("label",{attrs:{for:"usertel"}},[t._v("收件人電話")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.tel,expression:"form.user.tel"}],staticClass:"form-control",class:r,attrs:{type:"text",name:"tel",id:"usertel"},domProps:{value:t.form.user.tel},on:{input:function(a){a.target.composing||t.$set(t.form.user,"tel",a.target.value)}}}),e("span",{staticClass:"text-danger"},[t._v(t._s(s[0]))])]}}],null,!0)})],1),e("div",{staticClass:"form-group pb-2"},[e("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors,r=a.classes;return[e("label",{attrs:{for:"useraddresss"}},[t._v("收件人地址")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.address,expression:"form.user.address"}],staticClass:"form-control",class:r,attrs:{type:"text",name:"address",id:"useraddress"},domProps:{value:t.form.user.address},on:{input:function(a){a.target.composing||t.$set(t.form.user,"address",a.target.value)}}}),e("span",{staticClass:"text-danger"},[t._v(t._s(s[0]))])]}}],null,!0)})],1),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"message"}},[t._v("留言")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{name:"message",id:"message",cols:"30",rows:"10"},domProps:{value:t.form.message},on:{input:function(a){a.target.composing||t.$set(t.form,"message",a.target.value)}}})]),e("div",{staticClass:"text-right"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("送出訂單")])])])]}}])})],1),e("div",{staticClass:"modal fade",attrs:{id:"productModal"}},[e("div",{staticClass:"modal-dialog modal-dialog-centered"},[e("div",{staticClass:"modal-content border-0"},[e("div",{staticClass:"modal-header bg-dark text-white"},[e("h5",{staticClass:"modal-title"},[e("span",[t._v(t._s(t.product.title))])]),t._m(1)]),e("div",{staticClass:"modal-body"},[e("img",{staticClass:"w-100",attrs:{src:t.product.imageUrl,alt:""}}),e("div",{staticClass:"d-flex align-items-baseline my-4",class:{"justify-content-end":!t.product.origin_price,"justify-content-between":t.product.origin_price}},[t.product.origin_price?t._e():e("div",{staticClass:"h4"},[t._v(t._s(t._f("currency")(t.product.price))+" 元")]),t.product.origin_price?e("del",{staticClass:"h6"},[t._v("原價 "+t._s(t._f("currency")(t.product.origin_price))+" 元")]):t._e(),t.product.origin_price?e("div",{staticClass:"h4"},[t._v("現在只要 "+t._s(t._f("currency")(t.product.price))+" 元")]):t._e()]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.buyQty,expression:"buyQty"}],staticClass:"custom-select form-control mt-3",on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.buyQty=a.target.multiple?e:e[0]}}},t._l(10,(function(a){return e("option",{key:a,domProps:{value:a}},[t._v("選購 "+t._s(a)+" "+t._s(t.product.unit))])})),0)]),e("div",{staticClass:"modal-footer"},[e("h5",{staticClass:"mr-3"},[t._v("小計 "+t._s(t._f("currency")(t.product.price*t.buyQty))+" 元")]),e("button",{staticClass:"btn btn-primary text-white",attrs:{type:"button"},on:{click:function(a){return t.addCart(t.product.id,t.buyQty)}}},[t._v("加入購物車")])])])])]),e("div",{staticClass:"modal fade",attrs:{id:"delCartModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content border-0"},[t._m(2),e("div",{staticClass:"modal-body"},[t._v(" 是否刪除 "),e("strong",{staticClass:"text-danger"},[t._v(t._s(t.delCart.title))]),t._v(" 商品(刪除後將無法恢復)。 ")]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),e("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.removeCart}},[t._v("確認刪除")])])])])])],1)},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",{attrs:{width:"50"}}),e("th",[t._v("產品名稱")]),e("th",{attrs:{width:"120"}},[t._v("單價")]),e("th",{attrs:{width:"120"}},[t._v("數量")]),e("th",{attrs:{width:"120"}},[t._v("小計")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"close text-white",attrs:{type:"button","data-dismiss":"modal"}},[e("i",{staticClass:"fas fa-times"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header bg-danger text-white"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[e("span",[t._v("從購物車刪除")])]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],i=(e("99af"),e("1157")),o=e.n(i),n=e("1799"),c=e("6d5f"),l={data:function(){return{buyQty:1,isLoading:!1,products:[],product:{},pagination:{},carts:[],cartLen:"",delCart:{},cartTitle:"",status:{isItem:"",isCart:""},couponCode:"",form:{user:{name:"",email:"",tel:"",address:""},message:""}}},mixins:[c["a"]],components:{Pagination:n["a"]},methods:{getPorducts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a="".concat("https://vue-course-api.hexschool.io/","api/").concat("ricky","/products?page=").concat(t),e=this;e.isLoading=!0,this.$http.get(a).then((function(t){e.products=t.data.products,console.log(e.products),e.isLoading=!1,e.pagination=t.data.pagination}))},getPorduct:function(t){var a="".concat("https://vue-course-api.hexschool.io/","api/").concat("ricky","/product/").concat(t),e=this;e.isLoading=!0,e.buyQty=1,e.status.isItem=t,this.$http.get(a).then((function(t){console.log(t.data),o()("#productModal").modal("show"),e.product=t.data.product,console.log(e.product.num),e.product.num=1,e.isLoading=!1,e.status.isItem=""}))},addCart:function(t){var a=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,s="".concat("https://vue-course-api.hexschool.io/","api/").concat("ricky","/cart"),r=this;r.status.isCart=t;var i={product_id:t,qty:e};console.log(i),this.$http.post(s,{data:i}).then((function(t){console.log(t.data),r.status.isCart="",a.getCarts(),o()("#productModal").modal("hide")}))},getCarts:function(){var t="".concat("https://vue-course-api.hexschool.io/","api/").concat("ricky","/cart"),a=this;a.isLoading=!0,this.$http.get(t).then((function(t){a.carts=t.data.data,a.cartLen=t.data.data.carts.length,a.isLoading=!1,console.log(t.data)}))},removeCartModal:function(t){o()("#delCartModal").modal("show"),this.delCart=t,this.delCart.title=t.product.title,this.cartTitle=t.product.title,console.log(this.delCart)},removeCart:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io/","api/").concat("ricky","/cart/").concat(t.delCart.id);t.isLoading=!0,this.$http.delete(a).then((function(a){o()("#delCartModal").modal("hide"),t.getCarts(),console.log(t.carts),t.isLoading=!1}))},useCoupon:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io/","api/").concat("ricky","/coupon"),e={code:t.couponCode};this.$http.post(a,{data:e}).then((function(a){t.getCarts(),t.couponCode="",console.log(a.data)}))},creatOrder:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io/","api/").concat("ricky","/order"),e=t.form;this.$http.post(a,{data:e}).then((function(a){console.log(a.data),a.data.success&&t.$router.push("/admin/checkout/".concat(a.data.orderId))}))}},created:function(){this.getPorducts(),this.getCarts()}},u=l,d=e("2877"),p=Object(d["a"])(u,s,r,!1,null,null,null);a["default"]=p.exports},1799:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item",class:{disabled:1==t.pagination.current_page}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(a){return a.preventDefault(),t.getPage(t.pagination.current_page-1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pagination.total_pages,(function(a){return e("li",{key:a,staticClass:"page-item",class:{active:t.pagination.current_page===a}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.getPage(a)}}},[t._v(t._s(a))])])})),e("li",{staticClass:"page-item",class:{disabled:t.pagination.current_page==t.pagination.total_pages}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(a){return a.preventDefault(),t.getPage(t.pagination.current_page+1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])])},r=[],i={props:["pagination"],methods:{getPage:function(t){this.$emit("getPages",t)}}},o=i,n=(e("bcce"),e("2877")),c=Object(n["a"])(o,s,r,!1,null,"583ef7b2",null);a["a"]=c.exports},"53dc":function(t,a,e){},"6d5f":function(t,a,e){"use strict";a["a"]={methods:{check:function(){var t="".concat("https://vue-course-api.hexschool.io/","api/user/check"),a=this;a.$http.post(t).then((function(t){t.data.success||a.$router.push("/login")}))}},created:function(){this.check()}}},8418:function(t,a,e){"use strict";var s=e("c04e"),r=e("9bf2"),i=e("5c6c");t.exports=function(t,a,e){var o=s(a);o in t?r.f(t,o,i(0,e)):t[o]=e}},"99af":function(t,a,e){"use strict";var s=e("23e7"),r=e("d039"),i=e("e8b5"),o=e("861d"),n=e("7b0b"),c=e("50c4"),l=e("8418"),u=e("65f0"),d=e("1dde"),p=e("b622"),m=e("2d00"),v=p("isConcatSpreadable"),f=9007199254740991,g="Maximum allowed index exceeded",h=m>=51||!r((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),_=d("concat"),C=function(t){if(!o(t))return!1;var a=t[v];return void 0!==a?!!a:i(t)},b=!h||!_;s({target:"Array",proto:!0,forced:b},{concat:function(t){var a,e,s,r,i,o=n(this),d=u(o,0),p=0;for(a=-1,s=arguments.length;a<s;a++)if(i=-1===a?o:arguments[a],C(i)){if(r=c(i.length),p+r>f)throw TypeError(g);for(e=0;e<r;e++,p++)e in i&&l(d,p,i[e])}else{if(p>=f)throw TypeError(g);l(d,p++,i)}return d.length=p,d}})},bcce:function(t,a,e){"use strict";var s=e("53dc"),r=e.n(s);r.a}}]);
//# sourceMappingURL=chunk-24fae05e.a8b3906c.js.map