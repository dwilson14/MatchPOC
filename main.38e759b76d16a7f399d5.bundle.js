webpackJsonp([1],{"+Exm":function(n,e,t){"use strict";function l(n){return g["\u0275vid"](0,[(n()(),g["\u0275eld"](0,0,null,null,4,"h1",[["class","logo"]],null,null,null,null,null)),(n()(),g["\u0275ted"](-1,null,["\n    "])),(n()(),g["\u0275eld"](2,0,null,null,1,"a",[["href","https://github.com/leftstick/angular2-memory-game"],["target","_blank"]],null,null,null,null,null)),(n()(),g["\u0275ted"](-1,null,["Memory"])),(n()(),g["\u0275ted"](-1,null,["\n"]))],null,null)}function i(n){return g["\u0275vid"](0,[(n()(),g["\u0275eld"](0,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),g["\u0275ted"](1,null,["",""])),(n()(),g["\u0275ted"](-1,null,["\n"])),(n()(),g["\u0275eld"](3,0,null,null,1,"h3",[["class","text"]],null,null,null,null,null)),(n()(),g["\u0275ted"](4,null,["",""]))],null,function(n,e){var t=e.component;n(e,1,0,t.title),n(e,4,0,t.text)})}function a(n){return g["\u0275vid"](0,[(n()(),g["\u0275eld"](0,0,null,null,1,"logo",[],null,null,null,l,E)),g["\u0275did"](1,49152,null,0,y,[],null,null),(n()(),g["\u0275ted"](-1,null,["\n"])),(n()(),g["\u0275eld"](3,0,null,null,2,"info",[["title","Remains"]],null,null,null,i,C)),g["\u0275did"](4,49152,null,0,P,[],{title:[0,"title"],text:[1,"text"]},null),g["\u0275pid"](131072,S.a,[g.ChangeDetectorRef]),(n()(),g["\u0275ted"](-1,null,["\n"])),(n()(),g["\u0275eld"](7,0,null,null,2,"info",[["title","Top"]],null,null,null,i,C)),g["\u0275did"](8,49152,null,0,P,[],{title:[0,"title"],text:[1,"text"]},null),g["\u0275pid"](131072,S.a,[g.ChangeDetectorRef])],function(n,e){var t=e.component;n(e,4,0,"Remains",g["\u0275unv"](e,4,1,g["\u0275nov"](e,5).transform(t.remains$))),n(e,8,0,"Top",g["\u0275unv"](e,8,1,g["\u0275nov"](e,9).transform(t.highestSpeed$)))},null)}function o(n){return g["\u0275vid"](0,[(n()(),g["\u0275eld"](0,0,null,null,5,"div",[["class","card"]],[[2,"flipped",null]],[[null,"click"]],function(n,e,t){var l=!0,i=n.component;return"click"===e&&(l=!1!==i.flip(i.info)&&l),l},null,null)),(n()(),g["\u0275ted"](-1,null,["\n    "])),(n()(),g["\u0275eld"](2,0,null,null,0,"img",[["class","front"]],[[8,"src",4]],null,null,null,null)),(n()(),g["\u0275ted"](-1,null,["\n    "])),(n()(),g["\u0275eld"](4,0,null,null,0,"img",[["class","back"]],[[8,"src",4]],null,null,null,null)),(n()(),g["\u0275ted"](-1,null,["\n"]))],null,function(n,e){var t=e.component;n(e,0,0,t.info.flipped),n(e,2,0,g["\u0275inlineInterpolate"](1,"",t.info.url,"")),n(e,4,0,g["\u0275inlineInterpolate"](1,"",t.backCard.url,""))})}function r(n){return null===n||void 0===n}function u(n){return g["\u0275vid"](0,[(n()(),g["\u0275eld"](0,0,null,null,1,"card",[],null,[[null,"flipped"]],function(n,e,t){var l=!0;return"flipped"===e&&(l=!1!==n.component.actions.flipCard(t)&&l),l},o,O)),g["\u0275did"](1,49152,null,0,T,[],{info:[0,"info"]},{flipped:"flipped"})],function(n,e){n(e,1,0,e.context.$implicit)},null)}function d(n){return g["\u0275vid"](0,[(n()(),g["\u0275and"](16777216,null,null,2,null,u)),g["\u0275did"](1,802816,null,0,S.d,[g.ViewContainerRef,g.TemplateRef,g.IterableDiffers],{ngForOf:[0,"ngForOf"],ngForTrackBy:[1,"ngForTrackBy"]},null),g["\u0275pid"](131072,S.a,[g.ChangeDetectorRef])],function(n,e){var t=e.component;n(e,1,0,g["\u0275unv"](e,1,0,g["\u0275nov"](e,2).transform(t.cards$)),t.trackByCards)},null)}function p(n){return g["\u0275vid"](0,[(n()(),g["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),g["\u0275ted"](-1,null,["Ready"]))],null,null)}function s(n){return g["\u0275vid"](0,[(n()(),g["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),g["\u0275ted"](-1,null,["Playing"]))],null,null)}function c(n){return g["\u0275vid"](0,[(n()(),g["\u0275eld"](0,0,null,null,1,"span",[["class","hand"]],null,[[null,"click"]],function(n,e,t){var l=!0;return"click"===e&&(l=!1!==n.component.reset(t)&&l),l},null,null)),(n()(),g["\u0275ted"](-1,null,["Play again"]))],null,null)}function f(n){return g["\u0275vid"](0,[(n()(),g["\u0275ted"](-1,null,["\n"])),(n()(),g["\u0275and"](16777216,null,null,2,null,p)),g["\u0275did"](2,16384,null,0,S.e,[g.ViewContainerRef,g.TemplateRef],{ngIf:[0,"ngIf"]},null),g["\u0275pid"](131072,S.a,[g.ChangeDetectorRef]),(n()(),g["\u0275ted"](-1,null,["\n"])),(n()(),g["\u0275and"](16777216,null,null,2,null,s)),g["\u0275did"](6,16384,null,0,S.e,[g.ViewContainerRef,g.TemplateRef],{ngIf:[0,"ngIf"]},null),g["\u0275pid"](131072,S.a,[g.ChangeDetectorRef]),(n()(),g["\u0275ted"](-1,null,["\n"])),(n()(),g["\u0275and"](16777216,null,null,2,null,c)),g["\u0275did"](10,16384,null,0,S.e,[g.ViewContainerRef,g.TemplateRef],{ngIf:[0,"ngIf"]},null),g["\u0275pid"](131072,S.a,[g.ChangeDetectorRef]),(n()(),g["\u0275ted"](-1,null,["\n"])),(n()(),g["\u0275eld"](13,0,null,null,2,"span",[["class","elapsed"]],null,null,null,null,null)),(n()(),g["\u0275ted"](14,null,[""," s"])),g["\u0275pid"](131072,S.a,[g.ChangeDetectorRef]),(n()(),g["\u0275ted"](-1,null,["\n"]))],function(n,e){var t=e.component;n(e,2,0,g["\u0275unv"](e,2,0,g["\u0275nov"](e,3).transform(t.status$))===t.status.READY),n(e,6,0,g["\u0275unv"](e,6,0,g["\u0275nov"](e,7).transform(t.status$))===t.status.PLAYING),n(e,10,0,g["\u0275unv"](e,10,0,g["\u0275nov"](e,11).transform(t.status$))===t.status.PASS)},function(n,e){var t=e.component;n(e,14,0,g["\u0275unv"](e,14,0,g["\u0275nov"](e,15).transform(t.elapsedMs$)))})}function m(n){return g["\u0275vid"](0,[(n()(),g["\u0275eld"](0,0,null,null,1,"dashboard",[],null,null,null,a,w)),g["\u0275did"](1,49152,null,0,R,[],null,null),(n()(),g["\u0275ted"](-1,null,["\n"])),(n()(),g["\u0275eld"](3,0,null,null,1,"chessboard",[],null,null,null,d,L)),g["\u0275did"](4,49152,null,0,M,[I],null,null),(n()(),g["\u0275ted"](-1,null,["\n"])),(n()(),g["\u0275eld"](6,0,null,null,1,"status",[],null,null,null,f,U)),g["\u0275did"](7,49152,null,0,j,[I],null,null)],null,null)}Object.defineProperty(e,"__esModule",{value:!0});var g=t("LMZF"),h=function(){},x=function(){var n={};return n[n.READY=0]="READY",n[n.PLAYING=1]="PLAYING",n[n.PASS=2]="PASS",n}(),b=function(){function n(n){this.actions=n}return n.prototype.ngOnInit=function(){this.actions.updateStatus(x.READY),this.actions.reset()},n}(),y=function(){},E=g["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{width:160px;padding:5px;border-radius:5px;background-color:#5979ac;color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}@media screen and (max-width:450px){[_nghost-%COMP%]{width:150px}}@media screen and (max-width:380px){[_nghost-%COMP%]{width:140px}}@media screen and (max-width:360px){[_nghost-%COMP%]{width:110px}a[_ngcontent-%COMP%]{font-size:18px}}"]],data:{}}),P=function(){},C=g["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{width:120px;padding:10px;background-color:#bbada0;border-radius:5px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#eae0d1}.text[_ngcontent-%COMP%]{color:#fff}@media screen and (max-width:450px){[_nghost-%COMP%]{width:105px}}@media screen and (max-width:380px){[_nghost-%COMP%]{width:95px}h2[_ngcontent-%COMP%]{font-size:20px}}@media screen and (max-width:360px){[_nghost-%COMP%]{width:90px}}"]],data:{}}),S=t("Un6q"),A=t("6Xbx"),_=t("kKZY"),v=t("AP4T"),R=function(){function n(){}return Object(A.b)([Object(_.select)(),Object(A.d)("design:type",v.Observable)],n.prototype,"remains$",void 0),Object(A.b)([Object(_.select)(),Object(A.d)("design:type",v.Observable)],n.prototype,"highestSpeed$",void 0),n}(),w=g["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{width:100%;height:100px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-ms-flex-negative:0;flex-shrink:0}"]],data:{}}),k=["8-ball","baked-potato","dinosaur","kronos","rocket","skinny-unicorn","that-guy","zeppelin","back"].map(function(n){return{name:n,flipped:!1,url:"/angular5-memory-game/assets/"+n+".png"}}),D=k.filter(function(n){return"back"!==n.name}),T=function(){function n(){this.flipped=new g.EventEmitter,this.backCard=k.find(function(n){return"back"===n.name})}return n.prototype.flip=function(n){n.flipped||this.flipped.emit(n)},n}(),O=g["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{width:100px;height:121px;margin-right:3px;cursor:pointer;position:relative;-webkit-perspective:800px;perspective:800px}.card[_ngcontent-%COMP%]{width:100%;height:100%;transition:-webkit-transform 1s;transition:transform 1s;transition:transform 1s,-webkit-transform 1s;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.card.flipped[_ngcontent-%COMP%]{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;height:100%;width:100%;position:absolute;backface-visibility:hidden;-webkit-backface-visibility:hidden}.card[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]{background:blue;-webkit-transform:rotateY(0deg);transform:rotateY(0deg)}.card[_ngcontent-%COMP%]   .front[_ngcontent-%COMP%]{background:blue;-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}@media screen and (max-width:450px){[_nghost-%COMP%]{width:92px;height:111px;margin-right:1px}}@media screen and (max-width:380px){[_nghost-%COMP%]{width:85px;height:102px;margin-right:1px}}@media screen and (max-width:360px){[_nghost-%COMP%]{width:70px;height:84px;margin-right:1px}}"]],data:{}}),M=function(){function n(n){this.actions=n}return n.prototype.trackByCards=function(n,e){return e._id},Object(A.b)([Object(_.select)(),Object(A.d)("design:type",v.Observable)],n.prototype,"cards$",void 0),n}(),I=function(){function n(n){this.ngRedux=n}return n.prototype.reset=function(){this.ngRedux.dispatch({type:n.RESET})},n.prototype.updateStatus=function(e){var t=this;this.ngRedux.dispatch({type:n.UPDATE_STATUS,payload:e}),e===x.PLAYING?this.timerId=setInterval(function(){t.ngRedux.dispatch({type:n.UPDATE_ELAPSED,payload:+t.ngRedux.getState().elapsedMs+1})},1e3):e===x.PASS&&(clearInterval(this.timerId),this.ngRedux.dispatch({type:n.UPDATE_HIGHESTSPEED,payload:this.ngRedux.getState().elapsedMs}))},n.prototype.updateLastSelectedCard=function(e){this.ngRedux.dispatch({type:n.UPDATE_LAST_SELECTED_CARD,payload:e})},n.prototype.updateCardFlipped=function(e){this.ngRedux.dispatch({type:n.UPDATE_CARD_FLIPPED,payload:e})},n.prototype.match=function(){this.ngRedux.dispatch({type:n.UPDATE_REMAINS,payload:+this.ngRedux.getState().remains-1})},n.prototype.flipCard=function(n){var e=this,t=this.ngRedux.getState();if(this.updateCardFlipped(n),t.status===x.READY&&this.updateStatus(x.PLAYING),r(t.lastSelectedCard))return this.updateLastSelectedCard(n);if(t.lastSelectedCard.name===n.name)return this.updateLastSelectedCard(null),this.match(),+t.remains-1||this.updateStatus(x.PASS);var l=t.lastSelectedCard;this.updateLastSelectedCard(null),setTimeout(function(){e.updateCardFlipped(l),e.updateCardFlipped(n)},1e3)},n.RESET="RESET",n.UPDATE_STATUS="UPDATE_STATUS",n.UPDATE_LAST_SELECTED_CARD="UPDATE_LAST_SELECTED_CARD",n.UPDATE_CARD_FLIPPED="UPDATE_CARD_FLIPPED",n.UPDATE_REMAINS="UPDATE_REMAINS",n.UPDATE_ELAPSED="UPDATE_ELAPSED",n.UPDATE_HIGHESTSPEED="UPDATE_HIGHESTSPEED",n}(),L=g["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{margin-top:20px;width:100%;background-color:#fff;height:530px;border-radius:4px;padding:10px 5px;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:distribute;align-content:space-around}card[_ngcontent-%COMP%]:nth-child(4n){margin-right:0}@media screen and (max-width:450px){[_nghost-%COMP%]{height:480px;padding:10px 0}}@media screen and (max-width:370px){[_nghost-%COMP%]{height:450px}}"]],data:{}}),j=function(){function n(n){this.actions=n,this.status=x}return n.prototype.reset=function(n){!function(n){n&&(n.stopPropagation&&n.stopPropagation(),n.preventDefault&&n.preventDefault())}(n),this.actions.reset()},Object(A.b)([Object(_.select)(),Object(A.d)("design:type",v.Observable)],n.prototype,"status$",void 0),Object(A.b)([Object(_.select)(),Object(A.d)("design:type",v.Observable)],n.prototype,"elapsedMs$",void 0),n}(),U=g["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{position:relative;margin-top:10px;width:100%;height:20px;text-align:center;font-size:18px;font-weight:700}.hand[_ngcontent-%COMP%]{cursor:pointer}.elapsed[_ngcontent-%COMP%]{position:absolute;right:10px;font-size:15px;font-weight:400}"]],data:{}}),N=g["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{width:450px;height:670px;border:4px solid #bdbdbd;border-radius:2px;background-color:#faf8ef;padding:10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}@media screen and (max-width:450px){[_nghost-%COMP%]{width:100%;height:100%;-ms-flex-pack:distribute;justify-content:space-around}} a{text-decoration:none;color:#fff}"]],data:{}}),Y=g["\u0275ccf"]("memory-game",b,function(n){return g["\u0275vid"](0,[(n()(),g["\u0275eld"](0,0,null,null,1,"memory-game",[],null,null,null,m,N)),g["\u0275did"](1,114688,null,0,b,[I],null,null)],function(n,e){n(e,1,0)},null)},{},{},[]),F=t("RyBE"),$=t("5ySN"),Z=t("mkgw"),H=t("ALdi"),G=t("AYro"),z=Object(G.combineReducers)({remains:function(n,e){return e.type===I.RESET||r(n)?8:e.type===I.UPDATE_REMAINS?e.payload:n},highestSpeed:function(n,e){if(e.type===I.RESET||r(n))return localStorage.getItem("highestSpeed")||9999;if(e.type===I.UPDATE_HIGHESTSPEED){if(!localStorage.getItem("highestSpeed"))return localStorage.setItem("highestSpeed",e.payload)||e.payload;if(localStorage.getItem("highestSpeed")>e.payload)return localStorage.setItem("highestSpeed",e.payload)||e.payload}return n},status:function(n,e){return e.type===I.RESET||r(n)?x.READY:e.type===I.UPDATE_STATUS?e.payload:n},cards:function(n,e){return e.type===I.RESET||r(n)?function(n){for(var e=D.concat(D).map(function(n,e){return{_id:e,name:n.name,flipped:n.flipped,url:n.url}}).slice(),t=e.length;t;t-=1){var l=Math.floor(Math.random()*t),i=e[t-1];e[t-1]=e[l],e[l]=i}return e}():e.type===I.UPDATE_CARD_FLIPPED?n.map(function(n){return n._id===e.payload._id?{_id:n._id,name:n.name,flipped:!n.flipped,url:n.url}:n}):n},lastSelectedCard:function(n,e){return e.type===I.RESET||void 0===n?null:e.type===I.UPDATE_LAST_SELECTED_CARD?e.payload:n},elapsedMs:function(n,e){return e.type===I.RESET||r(n)?0:e.type===I.UPDATE_ELAPSED?e.payload:n}}),B=function(){return function(n){this.ngRedux=n,this.ngRedux.configureStore(z,{},[],[])}}(),V=g["\u0275cmf"](h,[b],function(n){return g["\u0275mod"]([g["\u0275mpd"](512,g.ComponentFactoryResolver,g["\u0275CodegenComponentFactoryResolver"],[[8,[Y]],[3,g.ComponentFactoryResolver],g.NgModuleRef]),g["\u0275mpd"](5120,g.LOCALE_ID,g["\u0275m"],[[3,g.LOCALE_ID]]),g["\u0275mpd"](4608,S.g,S.f,[g.LOCALE_ID,[2,S.j]]),g["\u0275mpd"](4608,g.Compiler,g.Compiler,[]),g["\u0275mpd"](5120,g.APP_ID,g["\u0275f"],[]),g["\u0275mpd"](5120,g.IterableDiffers,g["\u0275k"],[]),g["\u0275mpd"](5120,g.KeyValueDiffers,g["\u0275l"],[]),g["\u0275mpd"](4608,F.b,F.q,[S.c]),g["\u0275mpd"](6144,g.Sanitizer,null,[F.b]),g["\u0275mpd"](4608,F.e,F.f,[]),g["\u0275mpd"](5120,F.c,function(n,e,t,l,i){return[new F.j(n,e),new F.n(t),new F.m(l,i)]},[S.c,g.NgZone,S.c,S.c,F.e]),g["\u0275mpd"](4608,F.d,F.d,[F.c,g.NgZone]),g["\u0275mpd"](135680,F.l,F.l,[S.c]),g["\u0275mpd"](4608,F.k,F.k,[F.d,F.l]),g["\u0275mpd"](6144,g.RendererFactory2,null,[F.k]),g["\u0275mpd"](6144,F.o,null,[F.l]),g["\u0275mpd"](4608,g.Testability,g.Testability,[g.NgZone]),g["\u0275mpd"](4608,F.g,F.g,[S.c]),g["\u0275mpd"](4608,F.h,F.h,[S.c]),g["\u0275mpd"](4608,$.DevToolsExtension,$.DevToolsExtension,[g.ApplicationRef,Z.NgRedux]),g["\u0275mpd"](4608,I,I,[Z.NgRedux]),g["\u0275mpd"](512,S.b,S.b,[]),g["\u0275mpd"](1024,g.ErrorHandler,F.p,[]),g["\u0275mpd"](1024,g.APP_INITIALIZER,function(n){return[F.r(n)]},[[2,g.NgProbeToken]]),g["\u0275mpd"](512,g.ApplicationInitStatus,g.ApplicationInitStatus,[[2,g.APP_INITIALIZER]]),g["\u0275mpd"](131584,g.ApplicationRef,g.ApplicationRef,[g.NgZone,g["\u0275Console"],g.Injector,g.ErrorHandler,g.ComponentFactoryResolver,g.ApplicationInitStatus]),g["\u0275mpd"](512,g.ApplicationModule,g.ApplicationModule,[g.ApplicationRef]),g["\u0275mpd"](512,F.a,F.a,[[3,F.a]]),g["\u0275mpd"](512,H.NgReduxModule,H.NgReduxModule,[]),g["\u0275mpd"](1024,Z.NgRedux,H._ngReduxFactory,[g.NgZone]),g["\u0275mpd"](512,B,B,[Z.NgRedux]),g["\u0275mpd"](512,h,h,[])])});Object(g.enableProdMode)(),F.i().bootstrapModuleFactory(V),document.head.removeChild(document.querySelector("#splash-spinner")),document.body.removeChild(document.querySelector(".spinner"))},0:function(n,e,t){n.exports=t("+Exm")},YuZA:function(n,e){function t(n){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+n+"'.")})}t.keys=function(){return[]},t.resolve=t,n.exports=t,t.id="YuZA"}},[0]);