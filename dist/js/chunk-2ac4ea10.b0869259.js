(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ac4ea10"],{"2b27":function(e,t,c){},"77b8":function(e,t,c){"use strict";c.r(t);c("fb6a");var n=c("7a23"),a=Object(n["P"])("data-v-3c06d3e3");Object(n["A"])("data-v-3c06d3e3");var i={class:"home-container"},o={key:0,class:"tab",style:{"z-index":"1",position:"fixed",left:"0",right:"0"}},r={class:"middle better-scroll-wrapper"},u={class:"content better-scroll-content"},s={ref:"bannerRef"},b={class:"swipe"},l={class:"recommend"},j={class:"tab"};Object(n["y"])();var d=a((function(e,t,c,d,O,f){var p=Object(n["E"])("van-nav-bar"),v=Object(n["E"])("van-tab"),g=Object(n["E"])("van-tabs"),T=Object(n["E"])("van-swipe-item"),m=Object(n["E"])("van-swipe"),k=Object(n["E"])("van-grid-item"),h=Object(n["E"])("van-grid"),w=Object(n["E"])("goodsList"),x=Object(n["E"])("back-to-top"),y=Object(n["F"])("lazy");return Object(n["x"])(),Object(n["g"])("div",i,[Object(n["j"])(p,{title:"图书商城","left-text":"返回","left-arrow":"",onClickLeft:t[1]||(t[1]=function(t){return e.$router.go(-1)})}),e.isTabFixed?(Object(n["x"])(),Object(n["g"])("div",o,[Object(n["j"])(g,{active:e.currentActiveTab,"onUpdate:active":t[2]||(t[2]=function(t){return e.currentActiveTab=t}),onClick:e.switchTab},{default:a((function(){return[(Object(n["x"])(!0),Object(n["g"])(n["a"],null,Object(n["D"])(e.tabTypes,(function(e,t,c){return Object(n["x"])(),Object(n["g"])(v,{title:e,key:c,name:t},null,8,["title","name"])})),128))]})),_:1},8,["active","onClick"])])):Object(n["h"])("",!0),Object(n["j"])("div",r,[Object(n["j"])("div",u,[Object(n["j"])("div",s,[Object(n["j"])("div",b,[Object(n["j"])(m,{autoplay:3e3,"lazy-render":""},{default:a((function(){return[(Object(n["x"])(!0),Object(n["g"])(n["a"],null,Object(n["D"])(e.swipeData,(function(e){return Object(n["x"])(),Object(n["g"])(T,{key:e.id},{default:a((function(){return[Object(n["O"])(Object(n["j"])("img",null,null,512),[[y,e.img_url]])]})),_:2},1024)})),128))]})),_:1})]),Object(n["j"])("div",l,[Object(n["j"])(h,{gutter:10,"icon-size":"65px"},{default:a((function(){return[(Object(n["x"])(!0),Object(n["g"])(n["a"],null,Object(n["D"])(e.recommendData.slice(0,4),(function(t,c){return Object(n["x"])(),Object(n["g"])(k,{key:c,icon:t.cover_url,text:t.title,onClick:function(c){return e.$router.push({path:"/goodDetail",query:{id:t.id}})}},null,8,["icon","text","onClick"])})),128))]})),_:1})])],512),Object(n["j"])("div",j,[Object(n["j"])(g,{active:e.currentActiveTab,"onUpdate:active":t[3]||(t[3]=function(t){return e.currentActiveTab=t}),onClick:e.switchTab},{default:a((function(){return[(Object(n["x"])(!0),Object(n["g"])(n["a"],null,Object(n["D"])(e.tabTypes,(function(e,t,c){return Object(n["x"])(),Object(n["g"])(v,{title:e,key:c,name:t},null,8,["title","name"])})),128))]})),_:1},8,["active","onClick"])]),Object(n["j"])(w,{list:e.goodsList},null,8,["list"])])]),Object(n["O"])(Object(n["j"])(x,{onBackToTopClick:e.backToTop},null,8,["onBackToTopClick"]),[[n["L"],e.isShowBackToTopIcon]])])})),O=c("5530"),f=c("2909"),p=c("1da1"),v=(c("96cf"),c("d399")),g=(c("e7e5"),c("229e")),T=c("0d3b"),m=c("616b"),k=c("98e3"),h=c("6a2a"),w=(c("99af"),c("dbe5"));function x(){return Object(w["a"])({url:"/api/index"})}function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"sales",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Object(w["a"])({url:"/api/index?".concat(e,"=1&page=").concat(t)})}g["a"].use(T["a"]).use(m["a"]);var D=Object(n["k"])({components:{goodsList:k["a"],backToTop:h["a"]},setup:function(){var e,t=Object(n["C"])(null),c=Object(n["B"])({swipeData:[],recommendData:[],tabTypes:{sales:"畅销",new:"新书",recommend:"精选"},currentActiveTab:"sales",isTabFixed:!1,goodsData:{sales:{page:1,list:[]},new:{page:1,list:[]},recommend:{page:1,list:[]}},isShowBackToTopIcon:!1}),a=function(){x().then((function(e){c.swipeData=e.slides,c.recommendData=e.goods.data})),y("sales").then((function(e){c.goodsData.sales.list=e.goods.data})),y("recommend").then((function(e){c.goodsData.recommend.list=e.goods.data})),y("new").then((function(e){c.goodsData.new.list=e.goods.data}))},i=function(){e=new g["a"](".better-scroll-wrapper",{probeType:3,click:!0,pullUpLoad:!0,mouseWheel:{speed:20,invert:!1,easeTime:300}}),e.on("scroll",(function(e){c.isTabFixed=c.isShowBackToTopIcon=-e.y>t.value.offsetHeight})),e.on("pullingUp",o)},o=function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=c.goodsData[c.currentActiveTab].page+1,y(c.currentActiveTab,n).then((function(e){var t;(t=c.goodsData[c.currentActiveTab].list).push.apply(t,Object(f["a"])(e.goods.data)),c.goodsData[c.currentActiveTab].page+=1,c.goodsData[c.currentActiveTab].page})),e.finishPullUp(),e.refresh();case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(n["v"])((function(){v["a"].loading({message:"加载中...",forbidClick:!0}),a(),i(),v["a"].clear()}));var r=Object(n["e"])((function(){return c.currentActiveTab,c.goodsData[c.currentActiveTab].list,c.goodsData[c.currentActiveTab].list})),u=function(){Object(n["q"])((function(){e&&e.refresh()}))},s=function(){e.scrollTo(0,0,500)};return Object(O["a"])(Object(O["a"])({},Object(n["J"])(c)),{},{bannerRef:t,switchTab:u,goodsList:r,backToTop:s})}});c("ab18");D.render=d,D.__scopeId="data-v-3c06d3e3";t["default"]=D},"98e3":function(e,t,c){"use strict";var n=c("7a23"),a=Object(n["P"])("data-v-6ec89153");Object(n["A"])("data-v-6ec89153");var i={class:"good-list"},o={class:"good-info"},r={class:"price"},u={class:"collect"};Object(n["y"])();var s=a((function(e,t,c,s,b,l){var j=Object(n["E"])("van-icon"),d=Object(n["E"])("van-grid-item"),O=Object(n["E"])("van-grid");return Object(n["x"])(),Object(n["g"])("div",i,[Object(n["j"])(O,{"column-num":2,"icon-size":"170px"},{default:a((function(){return[(Object(n["x"])(!0),Object(n["g"])(n["a"],null,Object(n["D"])(e.list,(function(t,c){return Object(n["x"])(),Object(n["g"])(d,{key:c,icon:t.cover_url,onClick:function(c){return e.$router.push({path:"/goodDetail",query:{id:t.id}})}},{text:a((function(){return[Object(n["j"])("div",o,[Object(n["j"])("p",null,Object(n["I"])(t.title),1),Object(n["j"])("span",r,"￥"+Object(n["I"])(t.price),1),Object(n["j"])("span",u,[Object(n["j"])(j,{name:"star-o"}),Object(n["i"])(Object(n["I"])(t.collects_count),1)])])]})),_:2},1032,["icon","onClick"])})),128))]})),_:1})])})),b=Object(n["k"])({props:{list:{type:Array,default:function(){return[]}}},setup:function(){return{}}});c("d68f");b.render=s,b.__scopeId="data-v-6ec89153";t["a"]=b},ab18:function(e,t,c){"use strict";c("2b27")},d68f:function(e,t,c){"use strict";c("f001")},f001:function(e,t,c){}}]);