(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0034cf20"],{"057f":function(t,e,n){var r=n("fc6a"),o=n("241c").f,c={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return o(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==c.call(t)?a(t):o(r(t))}},1514:function(t,e,n){"use strict";n("1ed7")},"159b":function(t,e,n){var r=n("da84"),o=n("fdbc"),c=n("17c2"),i=n("9112");for(var a in o){var u=r[a],f=u&&u.prototype;if(f&&f.forEach!==c)try{i(f,"forEach",c)}catch(s){f.forEach=c}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,o=n("a640"),c=o("forEach");t.exports=c?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,n){var r=n("d039"),o=n("b622"),c=n("2d00"),i=o("species");t.exports=function(t){return c>=51||!r((function(){var e=[],n=e.constructor={};return n[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"1ed7":function(t,e,n){},"4de4":function(t,e,n){"use strict";var r=n("23e7"),o=n("b727").filter,c=n("1dde"),i=c("filter");r({target:"Array",proto:!0,forced:!i},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n("b64b"),n("a4d3"),n("4de4"),n("e439"),n("159b"),n("dbb4");function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},"65f0":function(t,e,n){var r=n("861d"),o=n("e8b5"),c=n("b622"),i=c("species");t.exports=function(t,e){var n;return o(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?r(n)&&(n=n[i],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},"746f":function(t,e,n){var r=n("428f"),o=n("5135"),c=n("e538"),i=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});o(e,t)||i(e,t,{value:c.f(t)})}},8418:function(t,e,n){"use strict";var r=n("c04e"),o=n("9bf2"),c=n("5c6c");t.exports=function(t,e,n){var i=r(e);i in t?o.f(t,i,c(0,n)):t[i]=n}},"893c":function(t,e,n){"use strict";n.r(e);n("b0c0");var r=n("7a23"),o=Object(r["P"])("data-v-b342e336");Object(r["A"])("data-v-b342e336");var c={id:"box"},i={class:"user-box"},a={class:"user-info"},u={class:"info"},f={alt:"头像"},s={class:"user-desc"},b=Object(r["j"])("span",{class:"name"},"个性签名：还没想好要写什么",-1),l={class:"user-list"},d=Object(r["j"])("span",null,"我的收藏",-1),p=Object(r["j"])("span",null,"我的订单",-1),j=Object(r["j"])("span",null,"地址管理",-1),O=Object(r["j"])("span",null,"关于我们",-1),v={style:{margin:"15px"}},h=Object(r["i"])("退出登录");Object(r["y"])();var g=o((function(t,e,n,g,y,m){var w=Object(r["E"])("van-nav-bar"),P=Object(r["E"])("van-icon"),S=Object(r["E"])("van-button"),k=Object(r["F"])("lazy");return Object(r["x"])(),Object(r["g"])("div",c,[Object(r["j"])(w,{title:"个人中心","left-text":"返回","left-arrow":"",onClickLeft:e[1]||(e[1]=function(e){return t.$router.go(-1)})}),Object(r["j"])("div",i,[Object(r["j"])("div",a,[Object(r["j"])("div",u,[Object(r["O"])(Object(r["j"])("img",f,null,512),[[k,t.user.avatar_url]]),Object(r["j"])("div",s,[Object(r["j"])("span",null,"昵称："+Object(r["I"])(t.user.name),1),Object(r["j"])("span",null,"登录名："+Object(r["I"])(t.user.email),1),b])])]),Object(r["j"])("ul",l,[Object(r["j"])("li",{class:"van-hairline--bottom",onClick:e[2]||(e[2]=function(e){return t.goTo("/collect")})},[d,Object(r["j"])(P,{name:"arrow"})]),Object(r["j"])("li",{class:"van-hairline--bottom",onClick:e[3]||(e[3]=function(e){return t.goTo("/order")})},[p,Object(r["j"])(P,{name:"arrow"})]),Object(r["j"])("li",{class:"van-hairline--bottom",onClick:e[4]||(e[4]=function(e){return t.goTo("/address")})},[j,Object(r["j"])(P,{name:"arrow"})]),Object(r["j"])("li",{class:"van-hairline--bottom",onClick:e[5]||(e[5]=function(e){return t.goTo("/about")})},[O,Object(r["j"])(P,{name:"arrow"})])])]),Object(r["j"])("div",v,[Object(r["j"])(S,{onClick:t.toLogout,round:"",block:"",color:"#44ba80"},{default:o((function(){return[h]})),_:1},8,["onClick"])])])})),y=n("5530"),m=n("6c02"),w=n("5502"),P=n("9baa"),S=n("626a"),k=n("dbe5");function E(){return Object(k["a"])({url:"/api/user"})}var x=Object(r["k"])({setup:function(){var t=Object(w["b"])(),e=Object(m["d"])(),n=Object(r["B"])({user:{}});Object(r["v"])((function(){S["a"].loading({message:"加载中...",forbidClick:!0}),E().then((function(t){n.user=t,S["a"].clear()}))}));var o=function(){Object(P["b"])().then((function(n){204===n.status&&(S["a"].success("退出成功"),window.localStorage.setItem("bookshopToken",""),t.commit("setIsLogin",!1),t.state.shopCartCount=0,setTimeout((function(){e.push({path:"/login"})}),500))}))},c=function(t,n){e.push({path:t,query:n||{}})};return Object(y["a"])(Object(y["a"])({},Object(r["J"])(n)),{},{toLogout:o,goTo:c})}});n("1514");x.render=g,x.__scopeId="data-v-b342e336";e["default"]=x},"9baa":function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return i}));var r=n("dbe5");function o(t){return Object(r["a"])({url:"/api/auth/register",method:"post",data:t})}function c(t){return Object(r["a"])({url:"/api/auth/login",method:"post",data:t})}function i(){return Object(r["a"])({url:"/api/auth/logout",method:"post"})}},a4d3:function(t,e,n){"use strict";var r=n("23e7"),o=n("da84"),c=n("d066"),i=n("c430"),a=n("83ab"),u=n("4930"),f=n("fdbf"),s=n("d039"),b=n("5135"),l=n("e8b5"),d=n("861d"),p=n("825a"),j=n("7b0b"),O=n("fc6a"),v=n("c04e"),h=n("5c6c"),g=n("7c73"),y=n("df75"),m=n("241c"),w=n("057f"),P=n("7418"),S=n("06cf"),k=n("9bf2"),E=n("d1e7"),x=n("9112"),C=n("6eeb"),T=n("5692"),A=n("f772"),D=n("d012"),I=n("90e3"),J=n("b622"),N=n("e538"),F=n("746f"),L=n("d44e"),_=n("69f3"),B=n("b727").forEach,q=A("hidden"),z="Symbol",Q="prototype",W=J("toPrimitive"),$=_.set,G=_.getterFor(z),H=Object[Q],K=o.Symbol,M=c("JSON","stringify"),R=S.f,U=k.f,V=w.f,X=E.f,Y=T("symbols"),Z=T("op-symbols"),tt=T("string-to-symbol-registry"),et=T("symbol-to-string-registry"),nt=T("wks"),rt=o.QObject,ot=!rt||!rt[Q]||!rt[Q].findChild,ct=a&&s((function(){return 7!=g(U({},"a",{get:function(){return U(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=R(H,e);r&&delete H[e],U(t,e,n),r&&t!==H&&U(H,e,r)}:U,it=function(t,e){var n=Y[t]=g(K[Q]);return $(n,{type:z,tag:t,description:e}),a||(n.description=e),n},at=f?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof K},ut=function(t,e,n){t===H&&ut(Z,e,n),p(t);var r=v(e,!0);return p(n),b(Y,r)?(n.enumerable?(b(t,q)&&t[q][r]&&(t[q][r]=!1),n=g(n,{enumerable:h(0,!1)})):(b(t,q)||U(t,q,h(1,{})),t[q][r]=!0),ct(t,r,n)):U(t,r,n)},ft=function(t,e){p(t);var n=O(e),r=y(n).concat(pt(n));return B(r,(function(e){a&&!bt.call(n,e)||ut(t,e,n[e])})),t},st=function(t,e){return void 0===e?g(t):ft(g(t),e)},bt=function(t){var e=v(t,!0),n=X.call(this,e);return!(this===H&&b(Y,e)&&!b(Z,e))&&(!(n||!b(this,e)||!b(Y,e)||b(this,q)&&this[q][e])||n)},lt=function(t,e){var n=O(t),r=v(e,!0);if(n!==H||!b(Y,r)||b(Z,r)){var o=R(n,r);return!o||!b(Y,r)||b(n,q)&&n[q][r]||(o.enumerable=!0),o}},dt=function(t){var e=V(O(t)),n=[];return B(e,(function(t){b(Y,t)||b(D,t)||n.push(t)})),n},pt=function(t){var e=t===H,n=V(e?Z:O(t)),r=[];return B(n,(function(t){!b(Y,t)||e&&!b(H,t)||r.push(Y[t])})),r};if(u||(K=function(){if(this instanceof K)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=I(t),n=function(t){this===H&&n.call(Z,t),b(this,q)&&b(this[q],e)&&(this[q][e]=!1),ct(this,e,h(1,t))};return a&&ot&&ct(H,e,{configurable:!0,set:n}),it(e,t)},C(K[Q],"toString",(function(){return G(this).tag})),C(K,"withoutSetter",(function(t){return it(I(t),t)})),E.f=bt,k.f=ut,S.f=lt,m.f=w.f=dt,P.f=pt,N.f=function(t){return it(J(t),t)},a&&(U(K[Q],"description",{configurable:!0,get:function(){return G(this).description}}),i||C(H,"propertyIsEnumerable",bt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:K}),B(y(nt),(function(t){F(t)})),r({target:z,stat:!0,forced:!u},{for:function(t){var e=String(t);if(b(tt,e))return tt[e];var n=K(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(b(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),r({target:"Object",stat:!0,forced:!u,sham:!a},{create:st,defineProperty:ut,defineProperties:ft,getOwnPropertyDescriptor:lt}),r({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:dt,getOwnPropertySymbols:pt}),r({target:"Object",stat:!0,forced:s((function(){P.f(1)}))},{getOwnPropertySymbols:function(t){return P.f(j(t))}}),M){var jt=!u||s((function(){var t=K();return"[null]"!=M([t])||"{}"!=M({a:t})||"{}"!=M(Object(t))}));r({target:"JSON",stat:!0,forced:jt},{stringify:function(t,e,n){var r,o=[t],c=1;while(arguments.length>c)o.push(arguments[c++]);if(r=e,(d(e)||void 0!==t)&&!at(t))return l(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!at(e))return e}),o[1]=e,M.apply(null,o)}})}K[Q][W]||x(K[Q],W,K[Q].valueOf),L(K,z),D[q]=!0},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},b0c0:function(t,e,n){var r=n("83ab"),o=n("9bf2").f,c=Function.prototype,i=c.toString,a=/^\s*function ([^ (]*)/,u="name";r&&!(u in c)&&o(c,u,{configurable:!0,get:function(){try{return i.call(this).match(a)[1]}catch(t){return""}}})},b727:function(t,e,n){var r=n("0366"),o=n("44ad"),c=n("7b0b"),i=n("50c4"),a=n("65f0"),u=[].push,f=function(t){var e=1==t,n=2==t,f=3==t,s=4==t,b=6==t,l=7==t,d=5==t||b;return function(p,j,O,v){for(var h,g,y=c(p),m=o(y),w=r(j,O,3),P=i(m.length),S=0,k=v||a,E=e?k(p,P):n||l?k(p,0):void 0;P>S;S++)if((d||S in m)&&(h=m[S],g=w(h,S,y),t))if(e)E[S]=g;else if(g)switch(t){case 3:return!0;case 5:return h;case 6:return S;case 2:u.call(E,h)}else switch(t){case 4:return!1;case 7:u.call(E,h)}return b?-1:f||s?s:E}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterOut:f(7)}},dbb4:function(t,e,n){var r=n("23e7"),o=n("83ab"),c=n("56ef"),i=n("fc6a"),a=n("06cf"),u=n("8418");r({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,n,r=i(t),o=a.f,f=c(r),s={},b=0;while(f.length>b)n=o(r,e=f[b++]),void 0!==n&&u(s,e,n);return s}})},e439:function(t,e,n){var r=n("23e7"),o=n("d039"),c=n("fc6a"),i=n("06cf").f,a=n("83ab"),u=o((function(){i(1)})),f=!a||u;r({target:"Object",stat:!0,forced:f,sham:!a},{getOwnPropertyDescriptor:function(t,e){return i(c(t),e)}})},e538:function(t,e,n){var r=n("b622");e.f=r},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}}}]);