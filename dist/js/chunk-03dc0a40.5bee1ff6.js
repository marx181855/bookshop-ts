(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03dc0a40"],{"057f":function(t,e,n){var r=n("fc6a"),c=n("241c").f,o={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return c(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==o.call(t)?a(t):c(r(t))}},"159b":function(t,e,n){var r=n("da84"),c=n("fdbc"),o=n("17c2"),i=n("9112");for(var a in c){var u=r[a],f=u&&u.prototype;if(f&&f.forEach!==o)try{i(f,"forEach",o)}catch(s){f.forEach=o}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,c=n("a640"),o=c("forEach");t.exports=o?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,n){var r=n("d039"),c=n("b622"),o=n("2d00"),i=c("species");t.exports=function(t){return o>=51||!r((function(){var e=[],n=e.constructor={};return n[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},3183:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return o}));var r=n("dbe5");function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return Object(r["a"])({url:"/api/collects",page:t})}function o(t){return Object(r["a"])({url:"/api/collects/goods/".concat(t),method:"POST"})}},"438c":function(t,e,n){"use strict";n("8bb9")},"4de4":function(t,e,n){"use strict";var r=n("23e7"),c=n("b727").filter,o=n("1dde"),i=o("filter");r({target:"Array",proto:!0,forced:!i},{filter:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("b64b"),n("a4d3"),n("4de4"),n("e439"),n("159b"),n("dbb4");function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var r=n("1d80"),c=n("5899"),o="["+c+"]",i=RegExp("^"+o+o+"*"),a=RegExp(o+o+"*$"),u=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(i,"")),2&t&&(n=n.replace(a,"")),n}};t.exports={start:u(1),end:u(2),trim:u(3)}},"64df":function(t,e,n){"use strict";n.r(e);n("a4d3"),n("e01a");var r=n("7a23"),c={class:"good-detail-container"},o={class:"box"},i=Object(r["i"])("新书"),a={key:0},u={key:1};function f(t,e,n,f,s,l){var b=Object(r["E"])("van-nav-bar"),d=Object(r["E"])("van-image"),p=Object(r["E"])("van-tag"),j=Object(r["E"])("van-action-bar-icon"),O=Object(r["E"])("van-action-bar-button"),v=Object(r["E"])("van-action-bar"),g=Object(r["E"])("van-card"),h=Object(r["E"])("van-tab"),y=Object(r["E"])("goodList"),m=Object(r["E"])("van-tabs");return Object(r["x"])(),Object(r["g"])("div",c,[Object(r["j"])(b,{title:"商品详情："+t.$route.query.id,"left-text":"返回","left-arrow":"",onClickLeft:e[1]||(e[1]=function(e){return t.$router.go(-1)})},null,8,["title"]),Object(r["j"])("div",o,[Object(r["j"])(d,{width:"375",fit:"contain",src:t.detail.cover_url,"lazy-load":"",height:"375"},null,8,["src"]),Object(r["j"])(g,{style:{"text-align":"left"},num:t.detail.stock,price:t.detail.price+".00",desc:t.detail.description,title:t.detail.title},{tags:Object(r["N"])((function(){return[Object(r["j"])(p,{plain:"",type:"danger"},{default:Object(r["N"])((function(){return[i]})),_:1}),Object(r["j"])(p,{plain:"",type:"danger"},{default:Object(r["N"])((function(){return[Object(r["i"])(Object(r["I"])(t.detail.is_recommend?"推荐":"不推荐"),1)]})),_:1})]})),footer:Object(r["N"])((function(){return[Object(r["j"])(v,null,{default:Object(r["N"])((function(){return[Object(r["j"])(j,{icon:"cart-o",text:"购物车",to:"/shopcart"}),Object(r["j"])(j,{icon:t.collectIcon.icon,text:t.collectIcon.text,color:"#ff5000",onClick:t.handleCollect},null,8,["icon","text","onClick"]),Object(r["j"])(O,{type:"warning",text:"加入购物车",onClick:t.handleAddCart},null,8,["onClick"]),Object(r["j"])(O,{type:"danger",text:"立即购买",onClick:t.goToCart},null,8,["onClick"])]})),_:1})]})),_:1},8,["num","price","desc","title"]),Object(r["j"])(m,{modelValue:t.currentTab,"onUpdate:modelValue":e[2]||(e[2]=function(e){return t.currentTab=e})},{default:Object(r["N"])((function(){return[Object(r["j"])(h,{title:"概述"},{default:Object(r["N"])((function(){return[Object(r["j"])("div",{class:"content",innerHTML:t.detail.details},null,8,["innerHTML"])]})),_:1}),Object(r["j"])(h,{title:"热评"},{default:Object(r["N"])((function(){return[0!=t.detail.comments.length?(Object(r["x"])(),Object(r["g"])("div",a,[(Object(r["x"])(!0),Object(r["g"])(r["a"],null,Object(r["D"])(t.detail.comments,(function(t){return Object(r["x"])(),Object(r["g"])("div",{key:t})})),128))])):(Object(r["x"])(),Object(r["g"])("div",u,"暂时没有评论"))]})),_:1}),Object(r["j"])(h,{title:"相关图书"},{default:Object(r["N"])((function(){return[Object(r["j"])(y,{list:t.like_goods},null,8,["list"])]})),_:1})]})),_:1},8,["modelValue"])])])}var s=n("5530"),l=(n("a9e3"),n("6c02")),b=n("5502"),d=n("d399"),p=(n("e7e5"),n("dbe5"));function j(t){return Object(p["a"])({url:"/api/goods/".concat(t)})}var O=n("8c96"),v=n("3183"),g=n("98e3"),h=Object(r["k"])({name:"goodDetail",components:{goodList:g["a"]},setup:function(){var t=Object(b["b"])(),e=Object(r["C"])(0),n=Object(l["c"])(),c=Object(l["d"])(),o=Object(r["B"])({detail:{id:""},like_goods:[]}),i=Object(r["B"])({icon:"",text:""}),a=Object(r["C"])(0);Object(r["v"])((function(){d["a"].loading({message:"加载中...",forbidClick:!0}),a.value=Number(n.query.id),a.value,j(a.value).then((function(t){d["a"].clear(),o.detail=t.goods,o.like_goods=t.like_goods,o.like_goods,t.goods.is_collect?(i.icon="star",i.text="已收藏"):(i.icon="star-o",i.text="收藏")}))}));var u=function(){Object(v["a"])(a.value).then((function(t){201===t.status?(d["a"].success("收藏成功"),i.icon="star",i.text="已收藏"):204===t.status&&(d["a"].success("取消收藏成功"),i.icon="star-o")}))},f=function(){Object(O["a"])({goods_id:o.detail.id,num:1}).then((function(e){204!==e.status&&201!==e.status||(d["a"].success("添加成功"),t.dispatch("updateCart"))}))},p=function(){o.detail.id,Object(O["a"])({goods_id:o.detail.id,num:1}).then((function(e){204!==e.status&&201!==e.status||(d["a"].success("添加成功，显示购物车页面"),t.dispatch("updateCart"),c.push({path:"/shopcart"}))}))};return Object(s["a"])(Object(s["a"])({},Object(r["J"])(o)),{},{currentTab:e,handleAddCart:f,goToCart:p,collectIcon:i,handleCollect:u})}});n("438c");h.render=f;e["default"]=h},"65f0":function(t,e,n){var r=n("861d"),c=n("e8b5"),o=n("b622"),i=o("species");t.exports=function(t,e){var n;return c(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!c(n.prototype)?r(n)&&(n=n[i],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},7156:function(t,e,n){var r=n("861d"),c=n("d2bb");t.exports=function(t,e,n){var o,i;return c&&"function"==typeof(o=e.constructor)&&o!==n&&r(i=o.prototype)&&i!==n.prototype&&c(t,i),t}},"746f":function(t,e,n){var r=n("428f"),c=n("5135"),o=n("e538"),i=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});c(e,t)||i(e,t,{value:o.f(t)})}},8418:function(t,e,n){"use strict";var r=n("c04e"),c=n("9bf2"),o=n("5c6c");t.exports=function(t,e,n){var i=r(e);i in t?c.f(t,i,o(0,n)):t[i]=n}},"8bb9":function(t,e,n){},"98e3":function(t,e,n){"use strict";var r=n("7a23"),c=Object(r["P"])("data-v-6ec89153");Object(r["A"])("data-v-6ec89153");var o={class:"good-list"},i={class:"good-info"},a={class:"price"},u={class:"collect"};Object(r["y"])();var f=c((function(t,e,n,f,s,l){var b=Object(r["E"])("van-icon"),d=Object(r["E"])("van-grid-item"),p=Object(r["E"])("van-grid");return Object(r["x"])(),Object(r["g"])("div",o,[Object(r["j"])(p,{"column-num":2,"icon-size":"170px"},{default:c((function(){return[(Object(r["x"])(!0),Object(r["g"])(r["a"],null,Object(r["D"])(t.list,(function(e,n){return Object(r["x"])(),Object(r["g"])(d,{key:n,icon:e.cover_url,onClick:function(n){return t.$router.push({path:"/goodDetail",query:{id:e.id}})}},{text:c((function(){return[Object(r["j"])("div",i,[Object(r["j"])("p",null,Object(r["I"])(e.title),1),Object(r["j"])("span",a,"￥"+Object(r["I"])(e.price),1),Object(r["j"])("span",u,[Object(r["j"])(b,{name:"star-o"}),Object(r["i"])(Object(r["I"])(e.collects_count),1)])])]})),_:2},1032,["icon","onClick"])})),128))]})),_:1})])})),s=Object(r["k"])({props:{list:{type:Array,default:function(){return[]}}},setup:function(){return{}}});n("d68f");s.render=f,s.__scopeId="data-v-6ec89153";e["a"]=s},a4d3:function(t,e,n){"use strict";var r=n("23e7"),c=n("da84"),o=n("d066"),i=n("c430"),a=n("83ab"),u=n("4930"),f=n("fdbf"),s=n("d039"),l=n("5135"),b=n("e8b5"),d=n("861d"),p=n("825a"),j=n("7b0b"),O=n("fc6a"),v=n("c04e"),g=n("5c6c"),h=n("7c73"),y=n("df75"),m=n("241c"),w=n("057f"),E=n("7418"),x=n("06cf"),N=n("9bf2"),S=n("d1e7"),_=n("9112"),k=n("6eeb"),I=n("5692"),C=n("f772"),P=n("d012"),A=n("90e3"),T=n("b622"),D=n("e538"),F=n("746f"),L=n("d44e"),V=n("69f3"),M=n("b727").forEach,$=C("hidden"),J="Symbol",R="prototype",q=T("toPrimitive"),B=V.set,G=V.getterFor(J),U=Object[R],z=c.Symbol,H=o("JSON","stringify"),X=x.f,Y=N.f,Q=w.f,W=S.f,K=I("symbols"),Z=I("op-symbols"),tt=I("string-to-symbol-registry"),et=I("symbol-to-string-registry"),nt=I("wks"),rt=c.QObject,ct=!rt||!rt[R]||!rt[R].findChild,ot=a&&s((function(){return 7!=h(Y({},"a",{get:function(){return Y(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=X(U,e);r&&delete U[e],Y(t,e,n),r&&t!==U&&Y(U,e,r)}:Y,it=function(t,e){var n=K[t]=h(z[R]);return B(n,{type:J,tag:t,description:e}),a||(n.description=e),n},at=f?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof z},ut=function(t,e,n){t===U&&ut(Z,e,n),p(t);var r=v(e,!0);return p(n),l(K,r)?(n.enumerable?(l(t,$)&&t[$][r]&&(t[$][r]=!1),n=h(n,{enumerable:g(0,!1)})):(l(t,$)||Y(t,$,g(1,{})),t[$][r]=!0),ot(t,r,n)):Y(t,r,n)},ft=function(t,e){p(t);var n=O(e),r=y(n).concat(pt(n));return M(r,(function(e){a&&!lt.call(n,e)||ut(t,e,n[e])})),t},st=function(t,e){return void 0===e?h(t):ft(h(t),e)},lt=function(t){var e=v(t,!0),n=W.call(this,e);return!(this===U&&l(K,e)&&!l(Z,e))&&(!(n||!l(this,e)||!l(K,e)||l(this,$)&&this[$][e])||n)},bt=function(t,e){var n=O(t),r=v(e,!0);if(n!==U||!l(K,r)||l(Z,r)){var c=X(n,r);return!c||!l(K,r)||l(n,$)&&n[$][r]||(c.enumerable=!0),c}},dt=function(t){var e=Q(O(t)),n=[];return M(e,(function(t){l(K,t)||l(P,t)||n.push(t)})),n},pt=function(t){var e=t===U,n=Q(e?Z:O(t)),r=[];return M(n,(function(t){!l(K,t)||e&&!l(U,t)||r.push(K[t])})),r};if(u||(z=function(){if(this instanceof z)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=A(t),n=function(t){this===U&&n.call(Z,t),l(this,$)&&l(this[$],e)&&(this[$][e]=!1),ot(this,e,g(1,t))};return a&&ct&&ot(U,e,{configurable:!0,set:n}),it(e,t)},k(z[R],"toString",(function(){return G(this).tag})),k(z,"withoutSetter",(function(t){return it(A(t),t)})),S.f=lt,N.f=ut,x.f=bt,m.f=w.f=dt,E.f=pt,D.f=function(t){return it(T(t),t)},a&&(Y(z[R],"description",{configurable:!0,get:function(){return G(this).description}}),i||k(U,"propertyIsEnumerable",lt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:z}),M(y(nt),(function(t){F(t)})),r({target:J,stat:!0,forced:!u},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var n=z(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){ct=!0},useSimple:function(){ct=!1}}),r({target:"Object",stat:!0,forced:!u,sham:!a},{create:st,defineProperty:ut,defineProperties:ft,getOwnPropertyDescriptor:bt}),r({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:dt,getOwnPropertySymbols:pt}),r({target:"Object",stat:!0,forced:s((function(){E.f(1)}))},{getOwnPropertySymbols:function(t){return E.f(j(t))}}),H){var jt=!u||s((function(){var t=z();return"[null]"!=H([t])||"{}"!=H({a:t})||"{}"!=H(Object(t))}));r({target:"JSON",stat:!0,forced:jt},{stringify:function(t,e,n){var r,c=[t],o=1;while(arguments.length>o)c.push(arguments[o++]);if(r=e,(d(e)||void 0!==t)&&!at(t))return b(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!at(e))return e}),c[1]=e,H.apply(null,c)}})}z[R][q]||_(z[R],q,z[R].valueOf),L(z,J),P[$]=!0},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},a9e3:function(t,e,n){"use strict";var r=n("83ab"),c=n("da84"),o=n("94ca"),i=n("6eeb"),a=n("5135"),u=n("c6b6"),f=n("7156"),s=n("c04e"),l=n("d039"),b=n("7c73"),d=n("241c").f,p=n("06cf").f,j=n("9bf2").f,O=n("58a8").trim,v="Number",g=c[v],h=g.prototype,y=u(b(h))==v,m=function(t){var e,n,r,c,o,i,a,u,f=s(t,!1);if("string"==typeof f&&f.length>2)if(f=O(f),e=f.charCodeAt(0),43===e||45===e){if(n=f.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:r=2,c=49;break;case 79:case 111:r=8,c=55;break;default:return+f}for(o=f.slice(2),i=o.length,a=0;a<i;a++)if(u=o.charCodeAt(a),u<48||u>c)return NaN;return parseInt(o,r)}return+f};if(o(v,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var w,E=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof E&&(y?l((function(){h.valueOf.call(n)})):u(n)!=v)?f(new g(m(e)),n,E):m(e)},x=r?d(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),N=0;x.length>N;N++)a(g,w=x[N])&&!a(E,w)&&j(E,w,p(g,w));E.prototype=h,h.constructor=E,i(c,v,E)}},b727:function(t,e,n){var r=n("0366"),c=n("44ad"),o=n("7b0b"),i=n("50c4"),a=n("65f0"),u=[].push,f=function(t){var e=1==t,n=2==t,f=3==t,s=4==t,l=6==t,b=7==t,d=5==t||l;return function(p,j,O,v){for(var g,h,y=o(p),m=c(y),w=r(j,O,3),E=i(m.length),x=0,N=v||a,S=e?N(p,E):n||b?N(p,0):void 0;E>x;x++)if((d||x in m)&&(g=m[x],h=w(g,x,y),t))if(e)S[x]=h;else if(h)switch(t){case 3:return!0;case 5:return g;case 6:return x;case 2:u.call(S,g)}else switch(t){case 4:return!1;case 7:u.call(S,g)}return l?-1:f||s?s:S}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterOut:f(7)}},d68f:function(t,e,n){"use strict";n("f001")},dbb4:function(t,e,n){var r=n("23e7"),c=n("83ab"),o=n("56ef"),i=n("fc6a"),a=n("06cf"),u=n("8418");r({target:"Object",stat:!0,sham:!c},{getOwnPropertyDescriptors:function(t){var e,n,r=i(t),c=a.f,f=o(r),s={},l=0;while(f.length>l)n=c(r,e=f[l++]),void 0!==n&&u(s,e,n);return s}})},e01a:function(t,e,n){"use strict";var r=n("23e7"),c=n("83ab"),o=n("da84"),i=n("5135"),a=n("861d"),u=n("9bf2").f,f=n("e893"),s=o.Symbol;if(c&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var l={},b=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof b?new s(t):void 0===t?s():s(t);return""===t&&(l[e]=!0),e};f(b,s);var d=b.prototype=s.prototype;d.constructor=b;var p=d.toString,j="Symbol(test)"==String(s("test")),O=/^Symbol\((.*)\)[^)]+$/;u(d,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=p.call(t);if(i(l,t))return"";var n=j?e.slice(7,-1):e.replace(O,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:b})}},e439:function(t,e,n){var r=n("23e7"),c=n("d039"),o=n("fc6a"),i=n("06cf").f,a=n("83ab"),u=c((function(){i(1)})),f=!a||u;r({target:"Object",stat:!0,forced:f,sham:!a},{getOwnPropertyDescriptor:function(t,e){return i(o(t),e)}})},e538:function(t,e,n){var r=n("b622");e.f=r},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},f001:function(t,e,n){}}]);