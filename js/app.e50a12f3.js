(function(e){function t(t){for(var n,i,s=t[0],u=t[1],l=t[2],c=0,d=[];c<s.length;c++)i=s[c],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,i=1;i<a.length;i++){var u=a[i];0!==r[u]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={app:0},o=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"cae17bc2"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var t=[],a=r[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=n);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=i(e);var l=new Error;o=function(t){u.onerror=u.onload=null,clearTimeout(c);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",l.name="ChunkLoadError",l.type=n,l.request=o,a[1](l)}r[e]=void 0}};var c=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var p=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},1847:function(e,t,a){"use strict";a("d509")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("e792"),a("0cdd");var n=a("2b0e"),r=a("3d31"),o=a("c015");a("ab8b"),a("2dd8");n["default"].use(r["a"]),n["default"].use(o["a"]);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},s=[],u=(a("5c0b"),a("2877")),l={},c=Object(u["a"])(l,i,s,!1,null,null,null),p=c.exports,d=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Map")},f=[],h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"container"}},[a("div",{staticClass:"radio-group"},[a("b-form-radio-group",{attrs:{options:e.collegeOptions,"value-field":"no","text-field":"name",inline:""},model:{value:e.selectedCollege,callback:function(t){e.selectedCollege=t},expression:"selectedCollege"}})],1),a("div",{staticClass:"slider"},[a("b-form-checkbox",{model:{value:e.enableTimeAxis,callback:function(t){e.enableTimeAxis=t},expression:"enableTimeAxis"}},[e._v("使用時間軸")]),a("vue-slider",{ref:"slider",attrs:{data:e.timeAxisData,lazy:!0,"hide-label":!0,marks:!1,process:!0,"data-value":"value","data-label":"label"},model:{value:e.displayDate,callback:function(t){e.displayDate=t},expression:"displayDate"}})],1),a("div",{attrs:{id:"map"}}),a("div",{staticClass:"ol-popup",attrs:{id:"popup"}},[a("a",{staticClass:"ol-popup-closer",attrs:{href:"#",id:"popup-closer"}}),a("div",{staticClass:"hide",attrs:{id:"popup-existing"}},[a("div",{staticClass:"name"},[e._v(e._s(e.markerName))]),a("div",{staticClass:"transfered"},[e._v(e._s(e.markerTransfered))]),a("div",{staticClass:"note"},[e._v(e._s(e.markerNote))]),a("div",{staticClass:"appendix"},[e._v(e._s(e.markerAppendix))])]),a("div",{staticClass:"hide",attrs:{id:"popup-new"}},[a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.markerName,expression:"markerName"}],attrs:{placeholder:"輸入顯示名稱"},domProps:{value:e.markerName},on:{input:function(t){t.target.composing||(e.markerName=t.target.value)}}})])])])])},v=[],g=a("1da1"),b=a("2909"),w=a("53ca"),y=a("3835"),x=(a("96cf"),a("b0c0"),a("d81d"),a("99af"),a("159b"),a("0481"),a("4de4"),a("4fad"),a("4e82"),a("a630"),a("5bc0"),a("4cdf")),O=a("5eee"),F=a("f403"),P=a("a2c7"),A=a("0710"),j=a("6c77"),k=a("6cbf"),M=a("83a6"),D=a("8682"),_=a("ce2c"),E=a("d0e9"),C=a("5831"),T=a("480c"),N=a("3e6b"),I=a("ca42"),L=a("256f"),S=a("834d"),B=a("35a7"),R=a("4971"),Y=a.n(R),V=(a("3e39"),a("a002")),J=a.n(V),$=J.a.createInstance({name:"mydatabase",version:1,storeName:"mystorageobj"});$.setDriver([J.a.INDEXEDDB,J.a.WEBSQL,J.a.LOCALSTORAGE]).then((function(){$.setItem("testkey","testvalue",(function(){console.log("Of the driver options given, localforage is using:"+$.driver())}))})).catch((function(e){console.error("QQ",new Error(e))}));var G=[{"編號":"3","校名":"私立／國立復旦大學","分校":"a.渝校","時間":"1930/01/01","遷移地名":"上海","經度":"121.28","緯度":"31.13","附註":"","備註":""},{"編號":"3","校名":"私立／國立復旦大學","分校":"a.渝校","時間":"1930/01/01","遷移地名":"江西盧山","經度":"115.47","緯度":"29.3","附註":"","備註":""},{"編號":"3","校名":"私立／國立復旦大學","分校":"a.渝校","時間":"1930/01/01","遷移地名":"貴陽","經度":"106.42","緯度":"26.34","附註":"","備註":""},{"編號":"3","校名":"私立／國立復旦大學","分校":"a.渝校","時間":"1938/02/01","遷移地名":"重慶","經度":"106.3","緯度":"29.3","附註":"1938年2月，確定校址於重慶北邊150餘里北碚對岸的夏壩。二月下旬，師生分批到達，暫借黃桷鎮河神廟（又名紫陽宮）為辦公室，小學餘屋為教室，煤炭坪為學生宿舍，王家花園為教師宿舍。","備註":"（復旦大學校史編寫組編，《復旦大學誌》（第一卷）（上海復旦大學出版社，1985年），頁153。）"},{"編號":"3","校名":"私立／國立復旦大學","分校":"a.渝校","時間":"1938/02/01","遷移地名":"上海江灣","經度":"121.3","緯度":"31.18","附註":"","備註":""},{"編號":"3","校名":"私立／國立復旦大學","分校":"b.滬校","時間":"1930/01/01","遷移地名":"上海","經度":"121.28","緯度":"31.13","附註":"","備註":""},{"編號":"3","校名":"私立／國立復旦大學","分校":"b.滬校","時間":"1938/02/01","遷移地名":"上海英/法租界","經度":"121.28","緯度":"31.13","附註":"1938年2月，復旦數百留滬學生要求李登輝校長設法上課，解決失學問題。以滬上租界之內，尚屬安全，並無任何干涉。以上好最後一課的精神，維持復旦在滬之根基。如形勢突變，則「當散即散」，亦屬易事。于是，在校友的協助下，租英租北京東路中一信托大樓的四、五樓作為臨時校舍，1938年2月23日正式上課，至1938年6月25日學期結束。\n因中一信托大樓地處鬧市，熙熙嚷嚷，不宜辦學。1938年下學期，租借法租界霞飛路（今淮海路）1726號房屋為校舍。\n吳南軒由渝來滬，商定滬校改稱復旦大學補習部。","備註":"（復旦大學校史編寫組編，《復旦大學誌》（第一卷）（上海復旦大學出版社，1985年），頁154, 155。）"},{"編號":"3","校名":"私立／國立復旦大學","分校":"b.滬校","時間":"1938/11/01","遷移地名":"上海仁記路","經度":"121.28","緯度":"31.14","附註":"法租界當局害怕日本帝國主義，堅決不准復旦在該處上課。不得已，1938年11月三遷校址至仁記路（今滇池路）中孚大樓三樓上課。","備註":"復旦大學校史編寫組編，《復旦大學誌》（第一卷）（上海復旦大學出版社，1985年），頁154。）"},{"編號":"3","校名":"私立／國立復旦大學","分校":"b.滬校","時間":"1938/09/01","遷移地名":"上海仁記路","經度":"121.28","緯度":"31.14","附註":"1938年秋，吳南軒因在重慶市區比較容易聘請教師和進行教學實習，將商學院各系及新聞系、經濟系遷往菜園壩。","備註":"（復旦大學校史編寫組編，《復旦大學誌》（第一卷）（上海復旦大學出版社，1985年），頁155。）"},{"編號":"3","校名":"私立／國立復旦大學","分校":"b.滬校","時間":"1939/04/01","遷移地名":"上海赫德路","經度":"121.26","緯度":"31.14","附註":"1939年4月，四遷至赫德路（今常德路）574號上課。","備註":"（復旦大學校史編寫組編，《復旦大學誌》（第一卷）（上海復旦大學出版社，1985年），頁154。）"},{"編號":"3","校名":"私立／國立復旦大學","分校":"b.滬校","時間":"1939/05/01","遷移地名":"重慶","經度":"106.3","緯度":"29.3","附註":"1939年5月3及4兩日，日機對重慶市區狂轟濫炸，商學院及新聞、經濟兩系，只得又遷回北碚黃桷鎮。","備註":"（復旦大學校史編寫組編，《復旦大學誌》（第一卷）（上海復旦大學出版社，1985年），頁155。）"},{"編號":"3","校名":"私立／國立復旦大學","分校":"b.滬校","時間":"1946/07/01","遷移地名":"上海江灣","經度":"121.3","緯度":"31.18","附註":"1946年7月，開始自重慶運送全體員生及公物回滬，10月完成復員，並與抗戰期間在滬設立之上海補習部合併。","備註":"（《第二次中國教育年鑑》，頁610）"},{"編號":"37","校名":"私立南華學院","分校":"","時間":"1938/07/01","遷移地名":"香港","經度":"114.11","緯度":"22.19","附註":"該院（港校）於1938年10月創設於香港九龍獅子石道。1939年7月，由教育部立案。","備註":"（《第二次中國教育年鑑》，頁739。）"},{"編號":"37","校名":"私立南華學院","分校":"","時間":"1939/08/01","遷移地名":"梅縣","經度":"116.06","緯度":"24.33","附註":"1939年8月，設校本部於梅縣之古田村租民房開學。","備註":"（《第二次中國教育年鑑》，頁739。）"},{"編號":"37","校名":"私立南華學院","分校":"","時間":"1940/02/01","遷移地名":"梅縣","經度":"116.06","緯度":"24.33","附註":"1940年2月，港校遷何文田太平道新校舍上課。","備註":"（《第二次中國教育年鑑》，頁739。）"},{"編號":"37","校名":"私立南華學院","分校":"","時間":"1941/04/01","遷移地名":"梅縣","經度":"116.06","緯度":"24.33","附註":"1941年4月，將港校大學部移梅縣集中辦理。","備註":"（《第二次中國教育年鑑》，頁739。）"},{"編號":"37","校名":"私立南華學院","分校":"","時間":"1946/02/01","遷移地名":"汕頭","經度":"116.41","緯度":"23.23","附註":"1946年2月，院址遷汕頭。","備註":"（《第二次中國教育年鑑》，頁739。）"}],Q={name:"Map",props:{msg:String},components:{VueSlider:Y.a},data:function(){return{map:null,tileLayer:null,source:null,vector:null,overlay:null,duration:3e3,markerName:"",markerNote:"",markerAppendix:"",markerTransfered:"",focusingFeature:null,storedFeatureProps:[],autoplaying:!1,autoplayIndex:0,selectedCollege:"all",displayDate:new Date("1930-01"),collegeOptions:[],enableTimeAxis:!1,startMonth:new Date("1931-01-01"),endMonth:new Date("1930-01-31"),timeAxisData:[{label:"1930-01",value:new Date("1930-01")}]}},watch:{selectedCollege:function(){this.redrawFeatures()},storedFeatureProps:function(){this.updateCollegeOptions(),this.updateTimeAxis(),this.redrawFeatures()},displayDate:function(){this.enableTimeAxis&&this.redrawFeatures()},enableTimeAxis:function(){this.redrawFeatures()}},computed:{popupContainer:function(){return document.getElementById("popup")},popupExisting:function(){return document.getElementById("popup-existing")},popupNew:function(){return document.getElementById("popup-new")},popupCloser:function(){return document.getElementById("popup-closer")}},methods:{addRandomFeature:function(){var e=360*Math.random()-180,t=180*Math.random()-90,a=new F["a"](Object(L["d"])([e,t],Object({NODE_ENV:"production",BASE_URL:"/"}).MAP_PROJ)),n=new x["a"](a);return this.source.addFeature(n),n},createNewFeature:function(e){var t=e.uuid,a=e.no,n=e.name,r=e.time,o=e.branch,i=e.transfered,s=e.note,u=e.appendix,l=e.lat,c=e.long,p=new F["a"](Object(L["d"])([c,l],Object({NODE_ENV:"production",BASE_URL:"/"}).MAP_PROJ)),d=new x["a"](p);d.set("uuid",t),d.set("no",a),d.set("name",n),d.set("time",r),d.set("branch",o),d.set("transfered",i),d.set("note",s),d.set("appendix",u),d.setStyle(new j["b"]({image:new k["a"]({src:"img/".concat(a,".png"),scale:.05}),fill:new M["a"]({color:"purple"}),stroke:new D["a"]({color:"purple",width:1.25})})),this.source.addFeature(d)},flash:function(e){var t=this,a=(new Date).getTime(),n=this.tileLayer.on("postrender",(function(r){var o=Object(S["a"])(r),i=r.frameState,s=e.getGeometry().clone(),u=i.time-a,l=u/t.duration,c=25*Object(I["b"])(l)+5,p=Object(I["b"])(1-l),d=new j["b"]({image:new _["a"]({radius:c,stroke:new D["a"]({color:"rgba(255, 0, 0, "+p+")",width:.25+p})})});o.setStyle(d),o.drawGeometry(s),u>t.duration?Object(B["b"])(n):t.map.render()}))},initMap:function(){var e=this;this.tileLayer=new T["a"]({source:new E["a"]({wrapX:!1})}),this.overlay=new A["a"]({element:this.popupContainer,autoPan:!0,autoPanAnimation:{duration:250}}),this.map=new O["a"]({target:"map",layers:[this.tileLayer],overlays:[this.overlay],view:new P["a"]({projection:Object({NODE_ENV:"production",BASE_URL:"/"}).MAP_PROJ,center:[0,0],zoom:3,multiWorld:!0})}),this.source=new C["a"]({wrapX:!1}),this.vector=new N["a"]({source:this.source,style:new j["b"]({image:new _["a"]({radius:5,fill:new M["a"]({color:"purple"}),stroke:new D["a"]({color:"purple",width:5})})})}),this.map.addLayer(this.vector),this.map.addOverlay(this.overlay),this.popupCloser.onclick=this.hidePopup,this.map.on("singleclick",(function(t){if(!0===e.map.hasFeatureAtPixel(t.pixel)){var a=t.coordinate;if(e.overlay.setPosition(a),e.focusingFeature=e.map.getFeaturesAtPixel(t.pixel)[0],!e.focusingFeature.get("uuid"))return;e.markerName="".concat(e.focusingFeature.get("name")||"","             ").concat(e.focusingFeature.get("branch")||""),e.markerTransfered=e.focusingFeature.get("transfered")||"",e.markerNote=e.focusingFeature.get("note")||"",e.markerAppendix=e.focusingFeature.get("appendix")||"",e.popupNew.classList.add("hide"),e.popupExisting.classList.remove("hide")}else e.hidePopup()}))},clearAll:function(){var e=this;$.setItem("saveFeatureProp",[]).then((function(){e.storedFeatureProps=[],e.source.clear()}))},overview:function(){var e=this;if(this.autoplaying)return console.log("cancel overview"),this.map.getView().cancelAnimations(),void(this.autoplaying=!1);this.autoplaying=!0,this.autoplayIndex=0;var t=function t(){if(e.autoplaying){var a=e.storedFeatureProps[e.autoplayIndex++];e.map.getView().animate({center:[a.long,a.lat]}),e.autoplayIndex>=e.storedFeatureProps.length?e.autoplaying=!1:window.setTimeout(t,3e3)}};t()},getFeatureProp:function(e){var t=e.編號,a=e.校名,n=e.分校,r=e.時間,o=e.經度,i=e.緯度,s=e.遷移地名,u=e.備註,l=e.附註,c={uuid:Date.now(),no:parseInt(t),name:a,time:new Date(r),branch:n,transfered:s,note:l,appendix:u,lat:parseFloat(i),long:parseFloat(o)};return this.extendTimeAxis(r),c},hidePopup:function(){return this.popupNew.classList.add("hide"),this.popupExisting.classList.add("hide"),this.overlay.setPosition(void 0),this.popupCloser.blur(),!1},redrawFeatures:function(){var e=this;this.hidePopup(),this.source.clear(),Object.entries(this.storedFeatureProps).filter((function(t){var a=Object(y["a"])(t,1),n=a[0];return"all"===e.selectedCollege||parseInt(n)===parseInt(e.selectedCollege)})).map((function(t){var a=Object(y["a"])(t,2),n=a[0],r=a[1];return console.log("2nd map",n,r),Object.entries(e.groupBy(r,"branch")).map((function(t){var a=Object(y["a"])(t,2),n=a[0],r=a[1];if(console.log("branch",n),console.log("list",r),console.log("this.enableTimeAxis",e.enableTimeAxis,Object(w["a"])(e.enableTimeAxis)),console.log("this.displayDate",e.displayDate),e.enableTimeAxis){var o,i=(null===(o=r.filter((function(t){return t.time<=e.displayDate})).sort((function(e,t){return t.time-e.time}))[0])||void 0===o?void 0:o.time)||null;return console.log("visibleLastDate",i),r.filter((function(e){var t=e.time;return console.log("fProp.time",t),i&&t.getFullYear()===i.getFullYear()&&t.getMonth()===i.getMonth()}))}return r}))})).flat(2).forEach((function(t){t&&e.createNewFeature(t)}))},extendTimeAxis:function(e){var t=new Date(e);t<this.startMonth&&(this.startMonth.setFullYear(t.getFullYear()),this.startMonth.setMonth(t.getMonth(),1)),this.endMonth<t&&(this.endMonth.setFullYear(t.getFullYear()),this.endMonth.setMonth(t.getMonth()+1,0))},groupBy:function(e,t){return e.reduce((function(e,a){return(e[a[t]]=e[a[t]]||[]).push(a),e}),{})},updateCollegeOptions:function(){this.collegeOptions=[{no:"all",name:"All"}].concat(Object(b["a"])(Object.entries(this.storedFeatureProps).map((function(e){var t=Object(y["a"])(e,2),a=t[0],n=t[1];return{no:a,name:n[0].name}}))))},updateTimeAxis:function(){var e=[],t=new Date(this.startMonth);while(t<=this.endMonth)e.push({label:"".concat(t.getFullYear(),"/").concat(t.getMonth()+1),value:new Date(t)}),t.setMonth(t.getMonth()+1);console.log("newTimeAxis",e),this.timeAxisData=e,this.$refs.slider.setIndex(0)}},mounted:function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.initMap(),e.next=3,$.getItem("rawDataInit");case 3:if(t=e.sent,t){e.next=8;break}return this.storedFeatureProps=this.groupBy(Array.from(G).map(this.getFeatureProp),"no"),e.next=8,$.setItem("saveFeatureProp",this.storedFeatureProps);case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},U=Q,X=(a("1847"),Object(u["a"])(U,h,v,!1,null,"07a832ec",null)),z=X.exports,H={name:"Home",components:{Map:z}},W=H,q=Object(u["a"])(W,m,f,!1,null,null,null),K=q.exports;n["default"].use(d["a"]);var Z=[{path:"/",name:"Home",component:K},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],ee=new d["a"]({mode:"history",base:"/",routes:Z}),te=ee,ae=a("2f62");n["default"].use(ae["a"]);var ne=new ae["a"].Store({state:{},mutations:{},actions:{},modules:{}});n["default"].config.productionTip=!1,new n["default"]({router:te,store:ne,render:function(e){return e(p)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";a("9c0c")},"9c0c":function(e,t,a){},d509:function(e,t,a){}});
//# sourceMappingURL=app.e50a12f3.js.map