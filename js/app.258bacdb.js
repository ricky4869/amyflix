(function(e){function n(n){for(var c,a,u=n[0],i=n[1],d=n[2],l=0,f=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);h&&h(n);while(f.length)f.shift()();return o.push.apply(o,d||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],c=!0,a=1;a<t.length;a++){var u=t[a];0!==r[u]&&(c=!1)}c&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var c={},a={app:0},r={app:0},o=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-00390e7d":"f5296f16","chunk-0dd2ad31":"c86c7858","chunk-13ad02a1":"7472ce9d","chunk-188892c4":"fe67a3e7","chunk-1d57f658":"b9fffab6","chunk-28384bfc":"8e7a197d","chunk-33cc17a0":"165baee2","chunk-513e75e4":"f21fb92d","chunk-5c08d7b2":"a7f0e6ea","chunk-7236aaf9":"a3c82333","chunk-749142bc":"13177840","chunk-a686ae7c":"af0719e8","chunk-cfca9734":"ea84b239","chunk-d78af7aa":"1fc96f00","chunk-f5391314":"9f51698e"}[e]+".js"}function i(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-00390e7d":1,"chunk-0dd2ad31":1,"chunk-13ad02a1":1,"chunk-188892c4":1,"chunk-513e75e4":1,"chunk-7236aaf9":1,"chunk-749142bc":1,"chunk-a686ae7c":1,"chunk-cfca9734":1,"chunk-d78af7aa":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-00390e7d":"070c5a46","chunk-0dd2ad31":"906b6ee7","chunk-13ad02a1":"145fc977","chunk-188892c4":"c887d67a","chunk-1d57f658":"31d6cfe0","chunk-28384bfc":"31d6cfe0","chunk-33cc17a0":"31d6cfe0","chunk-513e75e4":"c887d67a","chunk-5c08d7b2":"31d6cfe0","chunk-7236aaf9":"c887d67a","chunk-749142bc":"c887d67a","chunk-a686ae7c":"8308bfde","chunk-cfca9734":"6e29def3","chunk-d78af7aa":"d27ef47b","chunk-f5391314":"31d6cfe0"}[e]+".css",r=i.p+c,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var d=o[u],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===c||l===r))return n()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){d=f[u],l=d.getAttribute("data-href");if(l===c||l===r)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var c=n&&n.target&&n.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=c,delete a[e],h.parentNode.removeChild(h),t(o)},h.href=r;var s=document.getElementsByTagName("head")[0];s.appendChild(h)})).then((function(){a[e]=0})));var c=r[e];if(0!==c)if(c)n.push(c[2]);else{var o=new Promise((function(n,t){c=r[e]=[n,t]}));n.push(c[2]=o);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var f=new Error;d=function(n){l.onerror=l.onload=null,clearTimeout(h);var t=r[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+c+": "+a+")",f.name="ChunkLoadError",f.type=c,f.request=a,t[1](f)}r[e]=void 0}};var h=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(n)},i.m=e,i.c=c,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)i.d(t,c,function(n){return e[n]}.bind(null,c));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/amyflix/",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=n,d=d.slice();for(var f=0;f<d.length;f++)n(d[f]);var h=l;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("4de4"),t("4160"),t("b64b"),t("159b"),t("e260"),t("e6cf"),t("cca6"),t("a79d");var c=t("2b0e"),a=t("bc3a"),r=t.n(a),o=t("a7fe"),u=t.n(o),i=(t("4989"),t("1157"),t("9062")),d=t.n(i),l=(t("e40d"),t("7bb1")),f=t("4c93"),h=t("60d4"),s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},p=[],m={name:"App",created:function(){console.log("https://vue-course-api.hexschool.io/")}},b=m,k=(t("5c0b"),t("2877")),v=Object(k["a"])(b,s,p,!1,null,null,null),g=v.exports,y=(t("d3b7"),t("8c4f"));c["a"].use(y["a"]);var w=[{path:"*",redirect:"/login"},{path:"/",name:"Home",component:function(){return t.e("chunk-a686ae7c").then(t.bind(null,"57da"))},children:[{path:"",name:"HomePage",component:function(){return t.e("chunk-d78af7aa").then(t.bind(null,"f4a9"))}},{path:"aboutpage",name:"AboutPage",component:function(){return t.e("chunk-33cc17a0").then(t.bind(null,"0bd2"))}},{path:"cartpage",name:"CartPage",component:function(){return t.e("chunk-28384bfc").then(t.bind(null,"b83a"))}},{path:"pay/:orderId",name:"Pay",component:function(){return t.e("chunk-5c08d7b2").then(t.bind(null,"76a1"))}},{path:"productspage",name:"ProductsPage",component:function(){return t.e("chunk-00390e7d").then(t.bind(null,"9982"))},children:[{path:":active",name:"AllProducts",component:function(){return t.e("chunk-13ad02a1").then(t.bind(null,"a89e"))}},{path:"product/:productId",name:"GetProduct",component:function(){return t.e("chunk-1d57f658").then(t.bind(null,"73aa"))}}]}]},{path:"/admin",name:"Dashboard",component:function(){return t.e("chunk-cfca9734").then(t.bind(null,"0c7c"))},children:[{path:"products",name:"Products",component:function(){return t.e("chunk-188892c4").then(t.bind(null,"e6dc"))},meta:{requiresAuth:!0}},{path:"order",name:"Order",component:function(){return t.e("chunk-749142bc").then(t.bind(null,"cf2a"))},meta:{requiresAuth:!0}},{path:"cupons",name:"Cupons",component:function(){return t.e("chunk-7236aaf9").then(t.bind(null,"d928"))},meta:{requiresAuth:!0}},{path:"fakeorder",name:"FakeOrder",component:function(){return t.e("chunk-513e75e4").then(t.bind(null,"4615"))},meta:{requiresAuth:!0}},{path:"checkout/:orderId",name:"Checkout",component:function(){return t.e("chunk-f5391314").then(t.bind(null,"7cb4"))},meta:{requiresAuth:!0}}]},{path:"/login",name:"Login",component:function(){return t.e("chunk-0dd2ad31").then(t.bind(null,"a55b"))}}],O=new y["a"]({routes:w,scrollBehavior:function(e,n,t){return{x:0,y:0}}}),P=O;c["a"].prototype.$bus=new c["a"];t("a9e3"),t("b680"),t("ac1f"),t("5319");var j=function(e){var n=Number(e);return void 0==e?"$0":"$".concat(n.toFixed(0).replace(/./g,(function(e,n,t){var c=n&&"."!==e&&(t.length-n)%3===0?", ".concat(e).replace(/\s/g,""):e;return c})))},A=t("e808");c["a"].config.productionTip=!1,c["a"].use(u.a,r.a),c["a"].component("ValidationProvider",l["b"]),c["a"].component("ValidationObserver",l["a"]),Object(l["e"])("tw",h),Object(l["e"])({tw:{names:{email:"E-mail",password:"Password",name:"姓名",tel:"收件人電話",address:"收件人地址"}}}),Object(l["c"])({classes:{valid:"is-valid",invalid:"is-invalid",dirty:["is-dirty","is-dirty"]}}),Object.keys(f).forEach((function(e){Object(l["d"])(e,f[e])})),r.a.defaults.withCredentials=!0,c["a"].component("Loading",d.a),c["a"].filter("currency",j),c["a"].mixin("flyIn",A["a"]),new c["a"]({router:P,render:function(e){return e(g)}}).$mount("#app"),P.beforeEach((function(e,n,t){if(e.meta.requiresAuth){var c="".concat("https://vue-course-api.hexschool.io/","api/user/check");r.a.post(c).then((function(e){console.log(e.data),e.data.success?t():t({path:"/login"})}))}else t()}))},"5c0b":function(e,n,t){"use strict";var c=t("9c0c"),a=t.n(c);a.a},"9c0c":function(e,n,t){},e808:function(e,n,t){"use strict";t("4160"),t("159b");n["a"]={methods:{flyIn:function(){var e=document.querySelectorAll(".fly-box"),n=window.scrollY,t=window.scrollY+window.innerHeight;e.forEach((function(e){var c=e.querySelectorAll(".fly-item"),a=e.offsetTop+e.scrollHeight/2;t>a&&n<a?c.forEach((function(e){e.classList.add("fly-in")})):c.forEach((function(e){e.classList.remove("fly-in")}))}))}},created:function(){window.addEventListener("scroll",this.flyIn)}}}});
//# sourceMappingURL=app.258bacdb.js.map