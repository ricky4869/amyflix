(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e0732720"],{1476:function(t,a,i){},1799:function(t,a,i){"use strict";var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("nav",{attrs:{"aria-label":"Page navigation example"}},[i("ul",{staticClass:"pagination"},[i("li",{staticClass:"page-item",class:{disabled:1==t.pagination.current_page}},[i("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(a){return a.preventDefault(),t.getPage(t.pagination.current_page-1)}}},[i("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pagination.total_pages,(function(a){return i("li",{key:a,staticClass:"page-item",class:{active:t.pagination.current_page===a}},[i("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(i){return i.preventDefault(),t.getPage(a)}}},[t._v(t._s(a))])])})),i("li",{staticClass:"page-item",class:{disabled:t.pagination.current_page==t.pagination.total_pages}},[i("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(a){return a.preventDefault(),t.getPage(t.pagination.current_page+1)}}},[i("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])])},s=[],n={props:["pagination"],methods:{getPage:function(t){this.$emit("getPages",t)}}},c=n,r=(i("bcce"),i("2877")),o=Object(r["a"])(c,e,s,!1,null,"583ef7b2",null);a["a"]=o.exports},"53dc":function(t,a,i){},8418:function(t,a,i){"use strict";var e=i("c04e"),s=i("9bf2"),n=i("5c6c");t.exports=function(t,a,i){var c=e(a);c in t?s.f(t,c,n(0,i)):t[c]=i}},8455:function(t,a,i){"use strict";var e=i("f16e"),s=i.n(e);s.a},"99af":function(t,a,i){"use strict";var e=i("23e7"),s=i("d039"),n=i("e8b5"),c=i("861d"),r=i("7b0b"),o=i("50c4"),l=i("8418"),u=i("65f0"),d=i("1dde"),p=i("b622"),v=i("2d00"),f=p("isConcatSpreadable"),g=9007199254740991,h="Maximum allowed index exceeded",b=v>=51||!s((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),m=d("concat"),_=function(t){if(!c(t))return!1;var a=t[f];return void 0!==a?!!a:n(t)},C=!b||!m;e({target:"Array",proto:!0,forced:C},{concat:function(t){var a,i,e,s,n,c=r(this),d=u(c,0),p=0;for(a=-1,e=arguments.length;a<e;a++)if(n=-1===a?c:arguments[a],_(n)){if(s=o(n.length),p+s>g)throw TypeError(h);for(i=0;i<s;i++,p++)i in n&&l(d,p,n[i])}else{if(p>=g)throw TypeError(h);l(d,p++,n)}return d.length=p,d}})},a89e:function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),i("div",{staticClass:"row mt-4"},t._l(t.filterProducts.slice(t.starProduct,t.starProduct+10),(function(a){return i("div",{key:a.id,staticClass:"col-sm-6 col-lg-4 mb-4 product-item"},[i("div",{staticClass:"card border-0 shadow-sm"},[i("div",{staticClass:"bg-cover product-image",staticStyle:{height:"300px"},style:{backgroundImage:"url("+a.imageUrl+")"}}),i("div",{staticClass:"card-body"},[i("span",{staticClass:"badge badge-secondary float-right ml-2"},[t._v(t._s(a.category))]),i("h5",{staticClass:"card-title"},[i("a",{staticClass:"text-dark text-decoration-none",attrs:{href:"#"}},[t._v(t._s(a.title))])]),i("div",{staticClass:"d-flex align-items-baseline",class:{"justify-content-end":!a.origin_price,"justify-content-between":a.origin_price}},[a.origin_price?t._e():i("div",{staticClass:"h5"},[t._v(t._s(t._f("currency")(a.price))+" 元")]),a.origin_price?i("del",{staticClass:"h6"},[t._v("原價 "+t._s(t._f("currency")(a.origin_price))+" 元")]):t._e(),a.origin_price?i("div",{staticClass:"h5"},[t._v("優惠"+t._s(t._f("currency")(a.price))+" 元")]):t._e()])]),i("div",{staticClass:"card-footer d-flex bg-warning"},[i("button",{staticClass:"btn btn-info btn-sm",attrs:{type:"button"},on:{click:function(i){return t.getPorduct(a.id)}}},[t.status.isItem===a.id?i("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v(" 查看更多 ")]),i("button",{staticClass:"btn btn-primary btn-sm ml-auto",attrs:{type:"button"},on:{click:function(i){return t.addCart(a.id)}}},[t.status.isCart===a.id?i("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v(" 加到購物車 ")])])])])})),0),t.products.length?i("Pagination",{attrs:{pagination:t.pagination},on:{getPages:t.getPorducts}}):t._e()],1)},s=[],n=(i("99af"),i("4de4"),i("1157"),i("eb00")),c=i("1799"),r={components:{ProductSider:n["a"],Pagination:c["a"]},props:["active"],data:function(){return{starProduct:"",totalPages:"",buyQty:1,isLoading:!1,products:[],product:{},pagination:"",carts:[],cartLen:"",delCart:{},cartTitle:"",status:{isItem:"",isCart:""},couponCode:"",form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{getPorducts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a="".concat("https://vue-course-api.hexschool.io/","api/").concat("ricky","/products/all"),i=this;i.isLoading=!0,this.$http.get(a).then((function(a){i.products=a.data.products;var e=i.products.filter((function(t){return"all"==i.active?t:i.active==t.category?t:void 0}));i.starProduct=10*(t-1),i.totalPages=Math.ceil(e.length/10),i.pagination={total_pages:i.totalPages,current_page:t},window.scrollTo(0,0),i.isLoading=!1}))},getPorduct:function(t){"".concat("https://vue-course-api.hexschool.io/","api/").concat("ricky","/product/").concat(t);var a=this;a.$router.push("/productspage/product/".concat(t))},addCart:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i="".concat("https://vue-course-api.hexschool.io/","api/").concat("ricky","/cart"),e=this;e.status.isCart=t;var s={product_id:t,qty:a};this.$http.post(i,{data:s}).then((function(t){alert(t.data.message),e.status.isCart="",window.location.reload()}))},creatOrder:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io/","api/").concat("ricky","/order"),i=t.form;this.$http.post(a,{data:i}).then((function(a){console.log(a.data),a.data.success&&t.$router.push("/admin/checkout/".concat(a.data.orderId))}))}},computed:{filterProducts:function(){var t=this;return t.products.filter((function(a){return"all"==t.active?a:a.category==t.active?a:void 0}))}},watch:{active:function(){console.log(this.active),this.getPorducts()}},created:function(){this.getPorducts()}},o=r,l=(i("8455"),i("2877")),u=Object(l["a"])(o,e,s,!1,null,"1b30e4ef",null);a["default"]=u.exports},bcce:function(t,a,i){"use strict";var e=i("53dc"),s=i.n(e);s.a},d14d:function(t,a,i){"use strict";var e=i("1476"),s=i.n(e);s.a},eb00:function(t,a,i){"use strict";var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("nav",[i("ul",{staticClass:"nav-navbar mr-auto text-center list-unstyled"},[i("li",{staticClass:"nav-item bg-warning text-white h5 py-3 mb-0 "},[t._v("商品類別")]),i("li",{staticClass:"nav-item h5 mb-0 text-dark border-top-0"},[i("a",{staticClass:"nav-link p-3 sider-item",class:{active:"all"==t.active},attrs:{href:"#"},on:{click:function(a){t.active="all"}}},[t._v("全部商品")])]),i("li",{staticClass:"nav-item h5 mb-0 text-dark border-top-0"},[i("a",{staticClass:"nav-link p-3 sider-item",class:{active:"movie"==t.active},attrs:{href:"#"},on:{click:function(a){t.active="movie"}}},[t._v("熱門電影")])]),i("li",{staticClass:"nav-item h5 mb-0 text-dark border-top-0"},[i("a",{staticClass:"nav-link p-3 sider-item",class:{active:"tv"==t.active},attrs:{href:"#"},on:{click:function(a){t.active="tv"}}},[t._v("精彩影集")])]),i("li",{staticClass:"nav-item h5 mb-0 text-dark border-top-0"},[i("a",{staticClass:"nav-link p-3 sider-item",class:{active:"eat"==t.active},attrs:{href:"#"},on:{click:function(a){t.active="eat"}}},[t._v("嘴饞推薦")])])])])])},s=[],n={props:["active"]},c=n,r=(i("d14d"),i("2877")),o=Object(r["a"])(c,e,s,!1,null,"50bc00bf",null);a["a"]=o.exports},f16e:function(t,a,i){}}]);
//# sourceMappingURL=chunk-e0732720.0992c4bc.js.map