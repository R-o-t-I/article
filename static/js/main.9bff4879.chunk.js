(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{149:function(e,t,a){e.exports=a(200)},186:function(e,t,a){},200:function(e,t,a){"use strict";a.r(t);a(150),a(175);var c=a(0),n=a.n(c),l=a(39),r=a.n(l),i=a(31),o=a(85),s=a(19),m=a(13),u=a(11),p=a(42),d=a(41),E=a.n(d),b=function(e){var t=fe.getState().router.activePanel,a=fe.getState().router.panelsHistory;return"undefined"!==typeof a[e]&&(t=a[e][a[e].length-1]),t},v={activeStory:null,activeView:null,activePanel:null,storiesHistory:[],viewsHistory:[],panelsHistory:[],activeModals:[],modalHistory:[],popouts:[],scrollPosition:[]},f={accessToken:void 0,colorScheme:"client_light",activeTab:[],componentScroll:[]},h={forms:[]},y=Object(i.combineReducers)({vkui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_COLOR_SCHEME":return Object(u.a)({},e,{colorScheme:t.payload});case"SET_ACTIVE_TAB":return Object(u.a)({},e,{activeTab:Object(u.a)({},e.activeTab,Object(m.a)({},t.payload.component,t.payload.tab))});case"SET_SCROLL_POSITION":return Object(u.a)({},e,{componentScroll:Object(u.a)({},e.componentScroll,Object(m.a)({},t.payload.component,{x:t.payload.x,y:t.payload.y}))});case"SET_SCROLL_POSITION_BY_ID":var a=document.getElementById(t.payload.component).getElementsByClassName("HorizontalScroll__in")[0],c=a.scrollLeft,n=a.scrollTop;return Object(u.a)({},e,{componentScroll:Object(u.a)({},e.componentScroll,Object(m.a)({},t.payload.component,{x:c,y:n}))});default:return e}},router:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PAGE":var a=t.payload.view,c=t.payload.panel;window.history.pushState(null,null);var n=e.panelsHistory[a]||[],l=e.viewsHistory[e.activeStory]||[],r=l.indexOf(a);return-1!==r&&l.splice(r,1),-1===n.indexOf(c)&&(n=[].concat(Object(p.a)(n),[c])),n.length>1&&E.a.send("VKWebAppEnableSwipeBack",{}).then(function(e){return e}).catch(function(e){return e}),Object(u.a)({},e,{activeView:a,activePanel:c,panelsHistory:Object(u.a)({},e.panelsHistory,Object(m.a)({},a,n)),viewsHistory:Object(u.a)({},e.viewsHistory,Object(m.a)({},e.activeStory,[].concat(Object(p.a)(l),[a]))),scrollPosition:Object(u.a)({},e.scrollPosition,Object(m.a)({},e.activeStory+"_"+e.activeView+"_"+e.activePanel,window.pageYOffset))});case"SET_STORY":window.history.pushState(null,null);var i=e.viewsHistory[t.payload.story]||[t.payload.story],o=e.storiesHistory,s=i[i.length-1],d=e.panelsHistory[s]||[t.payload.initial_panel],b=d[d.length-1];if(t.payload.story===e.activeStory)if(d.length>1){var f=d.shift();b=(d=[f])[d.length-1]}else if(i.length>1){var h=i.shift();s=(i=[h])[i.length-1],b=(d=e.panelsHistory[s])[d.length-1]}return t.payload.story===e.activeStory&&1===d.length&&window.pageYOffset>0&&(window.scrollTo(0,30),function e(){var t=document.documentElement.scrollTop||document.body.scrollTop;t>30||t>0&&(window.requestAnimationFrame(e),window.scrollTo(0,t-t/8))}()),(-1===o.indexOf(t.payload.story)||o[0]===t.payload.story&&o[o.length-1]!==t.payload.story)&&(o=[].concat(Object(p.a)(o),[t.payload.story])),Object(u.a)({},e,{activeStory:t.payload.story,activeView:s,activePanel:b,storiesHistory:o,viewsHistory:Object(u.a)({},e.viewsHistory,Object(m.a)({},s,i)),panelsHistory:Object(u.a)({},e.panelsHistory,Object(m.a)({},s,d)),scrollPosition:Object(u.a)({},e.scrollPosition,Object(m.a)({},e.activeStory+"_"+e.activeView+"_"+e.activePanel,window.pageYOffset))});case"GO_BACK":var y=e.activeView,g=e.activePanel,O=e.activeStory,j=e.popouts;if(j[y])return j[y]=null,Object(u.a)({},e,{popouts:Object(u.a)({},e.popouts,{popoutsData:j})});var w=e.modalHistory[y];if(void 0!==w&&0!==w.length){var k=w[w.length-2]||null;return null===k?w=[]:-1!==w.indexOf(k)?w=w.splice(0,w.indexOf(k)+1):w.push(k),Object(u.a)({},e,{activeModals:Object(u.a)({},e.activeModals,Object(m.a)({},y,k)),modalHistory:Object(u.a)({},e.modalHistory,Object(m.a)({},y,w))})}var N=e.panelsHistory[y]||[],S=e.viewsHistory[e.activeStory]||[],x=e.storiesHistory;if(N.length>1)N.pop(),g=N[N.length-1];else if(S.length>1){S.pop(),y=S[S.length-1];var P=e.panelsHistory[y];g=P[P.length-1]}else if(x.length>1){x.pop(),O=x[x.length-1],y=e.viewsHistory[O][e.viewsHistory[O].length-1];var C=e.panelsHistory[y];g=C.length>1?C[C.length-1]:C[0]}else E.a.send("VKWebAppClose",{status:"success"}).then(function(e){return e}).catch(function(e){return e});return 1===N.length&&E.a.send("VKWebAppDisableSwipeBack",{}).then(function(e){return e}).catch(function(e){return e}),Object(u.a)({},e,{activeView:y,activePanel:g,activeStory:O,viewsHistory:Object(u.a)({},e.viewsHistory,Object(m.a)({},e.activeView,S)),panelsHistory:Object(u.a)({},e.panelsHistory,Object(m.a)({},e.activeView,N))});case"OPEN_POPOUT":return window.history.pushState(null,null),Object(u.a)({},e,{popouts:Object(u.a)({},e.popouts,Object(m.a)({},e.activeView,t.payload.popout))});case"CLOSE_POPOUT":return Object(u.a)({},e,{popouts:Object(u.a)({},e.popouts,Object(m.a)({},e.activeView,null))});case"OPEN_MODAL":window.history.pushState(null,null);var A=t.payload.id||null,H=e.modalHistory[e.activeView]?Object(p.a)(e.modalHistory[e.activeView]):[];return null===A?H=[]:-1!==H.indexOf(A)?H=H.splice(0,H.indexOf(A)+1):H.push(A),Object(u.a)({},e,{activeModals:Object(u.a)({},e.activeModals,Object(m.a)({},e.activeView,A)),modalHistory:Object(u.a)({},e.modalHistory,Object(m.a)({},e.activeView,H))});case"CLOSE_MODAL":var _=e.modalHistory[e.activeView][e.modalHistory[e.activeView].length-2]||null,T=e.modalHistory[e.activeView]?Object(p.a)(e.modalHistory[e.activeView]):[];return null===_?T=[]:-1!==T.indexOf(_)?T=T.splice(0,T.indexOf(_)+1):T.push(_),Object(u.a)({},e,{activeModals:Object(u.a)({},e.activeModals,Object(m.a)({},e.activeView,_)),modalHistory:Object(u.a)({},e.modalHistory,Object(m.a)({},e.activeView,T))});default:return e}},formData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_FORM_DATA":return Object(u.a)({},e,{forms:Object(u.a)({},e.forms,Object(m.a)({},t.payload.form,t.payload.data))});default:return e}}}),g=a(86),O=function(e,t){return{type:"SET_STORY",payload:{story:e,initial_panel:t}}},j=function(){return{type:"GO_BACK"}},w=function(e){return{type:"OPEN_MODAL",payload:{id:e}}},k=function(){return{type:"CLOSE_MODAL"}},N=(a(185),a(186),a(44)),S=a.n(N),x=a(40),P=a.n(x),C=a(49),A=a(23),H=a(24),_=a(26),T=a(25),I=a(27),B=a(1),V=a(220),M=a(22),z=a(201),J=a(204),R=a(205),D=a(206),L=a(207),K=a(208),U=a(209),q=a(210),Q=a(211),W=a(212),F=a(213),Y=a(214),G=a(215),X=a(216),Z=a(217),$=function(e){function t(e){var a;return Object(A.a)(this,t),(a=Object(_.a)(this,Object(T.a)(t).call(this,e))).showImg=function(){a.setState({showImg:!0})},a.state={showImg:!1,activeTab:"published",popout:null},a.openInteractionArticles=a.openInteractionArticles.bind(Object(M.a)(Object(M.a)(a))),a.openInteractionArticlesNo=a.openInteractionArticlesNo.bind(Object(M.a)(Object(M.a)(a))),a.openInteractionSub=a.openInteractionSub.bind(Object(M.a)(Object(M.a)(a))),a.openInteractionSort=a.openInteractionSort.bind(Object(M.a)(Object(M.a)(a))),a.iconsTargetRef=n.a.createRef(),a}return Object(I.a)(t,e),Object(H.a)(t,[{key:"openPopout",value:function(){var e=this;this.props.openPopout(n.a.createElement(B.d,{actions:[{title:"\u041d\u0435\u0442",autoclose:!0,mode:"cancel"},{title:"\u0414\u0430",autoclose:!0,mode:"destructive",action:this.showImg}],onClose:function(){return e.props.closePopout()},header:"\u0412\u043e\u043f\u0440\u043e\u0441 \u0437\u043d\u0430\u0447\u0438\u0442",text:"\u0412\u0430\u0441 \u0440\u043e\u043d\u044f\u043b\u0438 \u0432 \u0434\u0435\u0442\u0441\u0442\u0432\u0435?"}))}},{key:"openSpinner",value:function(){var e=Object(C.a)(P.a.mark(function e(){return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.props.openPopout(n.a.createElement(B.B,null)),e.next=3,this.sleep(2500);case 3:this.props.closePopout();case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"openSnackbar",value:function(){var e=this;this.props.openPopout(n.a.createElement(B.D,{layout:"vertical",onClose:function(){return e.props.closePopout()},action:"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u043a\u043d\u043e\u043f\u043a\u0430",before:n.a.createElement(B.f,{size:24,style:{background:"var(--accent)"}}," ",n.a.createElement(z.a,{fill:"#fff",width:14,height:14})," ")},"\u041a\u0430\u043a\u043e\u0439-\u0442\u043e \u0442\u0435\u043a\u0441\u0442"))}},{key:"sleep",value:function(e){return new Promise(function(t){return setTimeout(t,e)})}},{key:"openInteractionArticles",value:function(){var e=this;this.props.openPopout(n.a.createElement(B.a,{onClose:function(){return e.props.closePopout()},iosCloseItem:n.a.createElement(B.b,{autoclose:!0,mode:"cancel"},"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"),toggleRef:this.iconsTargetRef.current},n.a.createElement(B.b,{autoclose:!0,before:n.a.createElement(J.a,null)},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0432 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0430\u0445"),n.a.createElement(B.b,{autoclose:!0,before:n.a.createElement(R.a,null)},"\u0421\u043a\u0440\u044b\u0442\u044c \u0441\u043e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u0441\u0442\u0430\u0442\u0435\u0439"),n.a.createElement(B.b,{autoclose:!0,before:n.a.createElement(D.a,null)},"\u0417\u0430\u043a\u0440\u0435\u043f\u0438\u0442\u044c \u0432 \u0441\u043f\u0438\u0441\u043a\u0435 \u0441\u0442\u0430\u0442\u0435\u0439"),n.a.createElement(B.b,{autoclose:!0,before:B.N===B.n?n.a.createElement(L.a,null):n.a.createElement(K.a,null),mode:"destructive"},n.a.createElement("div",{style:{color:"var(--destructive)"}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u044c\u044e"))))}},{key:"openInteractionArticlesNo",value:function(){var e=this;this.props.openPopout(n.a.createElement(B.a,{onClose:function(){return e.props.closePopout()},iosCloseItem:n.a.createElement(B.b,{autoclose:!0,mode:"cancel"},"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"),toggleRef:this.iconsTargetRef.current},n.a.createElement(B.b,{autoclose:!0,before:n.a.createElement(U.a,null)},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0438\u0437 \u0437\u0430\u043a\u043b\u0430\u0434\u043e\u043a"),n.a.createElement(B.b,{autoclose:!0,before:n.a.createElement(R.a,null)},"\u0421\u043a\u0440\u044b\u0442\u044c \u0441\u043e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u0441\u0442\u0430\u0442\u0435\u0439"),n.a.createElement(B.b,{autoclose:!0,before:n.a.createElement(q.a,null)},"\u041e\u0442\u043a\u0440\u0435\u043f\u0438\u0442\u044c"),n.a.createElement(B.b,{autoclose:!0,before:B.N===B.n?n.a.createElement(L.a,null):n.a.createElement(K.a,null),mode:"destructive"},n.a.createElement("div",{style:{color:"var(--destructive)"}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u044c\u044e"))))}},{key:"openInteractionSub",value:function(){var e=this;this.props.openPopout(n.a.createElement(B.a,{onClose:function(){return e.props.closePopout()},iosCloseItem:n.a.createElement(B.b,{autoclose:!0,mode:"cancel"},"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"),toggleRef:this.iconsTargetRef.current},n.a.createElement(B.b,{autoclose:!0},"\u041e\u0442\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f")))}},{key:"openInteractionSort",value:function(){var e=this;this.props.openPopout(n.a.createElement(B.a,{onClose:function(){return e.props.closePopout()},iosCloseItem:n.a.createElement(B.b,{autoclose:!0,mode:"cancel"},"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"),toggleRef:this.iconsTargetRef.current,header:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"},n.a.createElement(B.b,{autoclose:!0},"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e"),n.a.createElement(B.b,{autoclose:!0},"\u041f\u043e \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u0438")))}},{key:"render",value:function(){var e=this,t=this.props,a=t.id;t.setPage,t.withoutEpic;return n.a.createElement(B.v,{id:a},n.a.createElement(B.w,{left:n.a.createElement(n.a.Fragment,null,n.a.createElement(B.x,null)),separator:!1,style:{zIndex:"1"}}),n.a.createElement(B.m,null,n.a.createElement(B.l,{style:{margin:["-59px -7px 0px -7px"],display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:["36px 0 24px"]}},n.a.createElement(B.f,{src:"https://sun9-40.userapi.com/impg/qibniluRy0n2tlv9etXMLBAsOD6dfUjncaUdDA/zu6iAe1FvTc.jpg?size=800x800&quality=96&sign=1a2220f4603f6419c1852e39c005261b&type=album",size:80}),n.a.createElement(B.q,{href:"https:vk.com/skyreglis",target:"_blank",style:{display:"flex",color:"var(--text_primary)"}},n.a.createElement(B.K,{style:{fontSize:"18px",marginBottom:0,marginTop:12,cursor:"pointer"},level:"2",weight:"medium"},"SkyReglis Stydio"),n.a.createElement(B.o,null,n.a.createElement(Q.a,{style:{marginLeft:"-12px",color:"var(--accent)"}}))),n.a.createElement(B.J,{style:{fontSize:"13px",marginBottom:10,color:"var(--text_secondary)"}},"21,5K \u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432 \xb7 9 \u0441\u0442\u0430\u0442\u0435\u0439 "),n.a.createElement(B.j,{style:{display:"flex"}},n.a.createElement(B.g,{before:n.a.createElement(W.a,null),size:"s",stretched:!0,mode:"secondary"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u0442\u0430\u0442\u044c\u044e"))),n.a.createElement(B.H,null,n.a.createElement(B.I,{onClick:function(){return e.setState({activeTab:"published"})},selected:"published"===this.state.activeTab},"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043d\u044b\u0435"),n.a.createElement(B.I,{onClick:function(){return e.setState({activeTab:"drafts"})},selected:"drafts"===this.state.activeTab},"\u0427\u0435\u0440\u043d\u043e\u0432\u0438\u043a\u0438")),n.a.createElement(B.C,{icon:n.a.createElement(F.a,{onClick:function(){return e.openInteractionSort()}})}),"published"===this.state.activeTab?n.a.createElement("div",null,n.a.createElement(B.j,null,n.a.createElement("div",{className:"interaction-articles"},n.a.createElement("img",{className:"img-article",src:"https://sun9-16.userapi.com/impg/72MRBeVlwD1yu5l4c_PZe0a5dyWYYPcrqMJ3TQ/nvpK0cFImuI.jpg?size=1200x800&quality=96&sign=9e140da1b974bfedc2e35c263dcfa645&type=album"}),n.a.createElement("div",{onClick:function(){return e.openInteractionArticlesNo()}},n.a.createElement(B.o,{className:"block-icon-interaction-articles-background"},n.a.createElement(Y.a,{width:32,height:32})),n.a.createElement(B.o,{className:"block-icon-interaction-articles"},n.a.createElement(G.a,null)))),n.a.createElement("div",{style:{display:"flex"}},n.a.createElement(B.K,{level:"3",className:"title-article"},"\u041e \u043d\u0430\u0441"),n.a.createElement(X.a,{style:{marginTop:"8px",marginLeft:"5px",color:"var(--icon_medium)"}})),n.a.createElement(B.J,{className:"text-article"},"\u0414\u043e\u0431\u0440\u043e\u0433\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0441\u0443\u0442\u043e\u043a! \u0425\u043e\u0442\u0435\u043b\u0438 \u0431\u044b \u0432 \u044d\u0442\u043e\u0439 \u0441\u0442\u0430\u0442\u044c\u0435 \u0440\u0430\u0441\u0441\u043a\u0430\u0437\u0430\u0442\u044c \u043a\u0442\u043e \u043c\u044b \u0438 \u0447\u0435\u043c \u0437\u0430\u043d\u0438\u043c\u0430\u0435\u043c\u0441\u044f."),n.a.createElement(B.J,{className:"footer-article"},"22 \u0438\u044e\u043d 2020 \xb7 1003 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430")),n.a.createElement(B.E,{separator:"center"}),n.a.createElement(B.j,{className:"block-articles"},n.a.createElement("div",{className:"text-articles"},n.a.createElement(B.K,{level:"3",className:"title-article-list"},"\u041d\u0430\u0448\u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u044b"),n.a.createElement(B.J,{className:"text-article"},"CooK - \u0440\u0435\u0446\u0435\u043f\u0442\u044b:"),n.a.createElement(B.J,{className:"footer-article"},"16 \u043c\u0430\u0440 \u0432 17:31 \xb7 517 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u043e\u0432")),n.a.createElement("div",{className:"interaction-articles"},n.a.createElement("img",{className:"img-article-list",src:"https://sun9-30.userapi.com/impg/OGutglyY6zebjC46NhqWmIzL8G1rWzxiLeNGgA/YyPBiO5S3j8.jpg?size=1200x800&quality=96&sign=3dec86f6924901ff369a5e324a8d5403&type=album"}),n.a.createElement("div",{onClick:function(){return e.openInteractionArticles()}},n.a.createElement(B.o,{className:"block-icon-interaction-articles-list-background"},n.a.createElement(Y.a,{width:32,height:32})),n.a.createElement(B.o,{className:"block-icon-interaction-articles-list"},n.a.createElement(G.a,null))))),n.a.createElement(B.E,{separator:"center"}),n.a.createElement(B.j,{className:"block-articles"},n.a.createElement("div",{className:"text-articles"},n.a.createElement(B.K,{level:"3",className:"title-article-list"},"\u041e\u0442\u0432\u0435\u0442\u044b \u043d\u0430 \u0447\u0430\u0441\u0442\u043e \u0437\u0430\u0434\u0430\u0432\u0430\u043c\u044b\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b"),n.a.createElement(B.J,{className:"text-article"},"\u0427\u0442\u043e \u0437\u0430 \u0438\u0433\u0440\u0430 \u0412\u0430\u043a\u043d\u0446\u0438\u043d\u0430?"),n.a.createElement(B.J,{className:"footer-article"},"5 \u0438\u044e\u043d \u0432 14:37 \xb7 404 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430")),n.a.createElement("div",{className:"interaction-articles"},n.a.createElement("img",{className:"img-article-list",src:"https://sun9-6.userapi.com/impg/XJ9rNdvujB68mSRn5_yB8Bj69kirFv3UY-17AQ/Q-Q0y-nTHWU.jpg?size=960x576&quality=96&sign=f95ef7c6c77cc9a3ca57dfc6c3b963f6&type=album"}),n.a.createElement("div",{onClick:function(){return e.openInteractionArticles()}},n.a.createElement(B.o,{className:"block-icon-interaction-articles-list-background"},n.a.createElement(Y.a,{width:32,height:32})),n.a.createElement(B.o,{className:"block-icon-interaction-articles-list"},n.a.createElement(G.a,null))))),n.a.createElement(B.E,{separator:"center"}),n.a.createElement(B.j,{className:"block-articles"},n.a.createElement("div",{className:"text-articles"},n.a.createElement(B.K,{level:"3",className:"title-article-list"},"\u041d\u0430\u0448\u0438 \u043c\u0430\u0441\u043a\u0438"),n.a.createElement(B.J,{className:"text-article"},"\u041c\u0430\u0441\u043a\u0430 \u0412\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0435 \xab\u0421 \u043b\u044e\u0431\u043e\u0432\u044c\u044e, \u0424\u043b\u0438\u043d\u0441\u0442\u0438\xbb:"),n.a.createElement(B.J,{className:"footer-article"},"6 \u0430\u043f\u0440 \u0432 19:24 \xb7 178 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u043e\u0432")),n.a.createElement("div",{className:"interaction-articles"},n.a.createElement("img",{className:"img-article-list",src:"https://sun9-46.userapi.com/impg/qBHWvhOrQ0iEcnnChA-_vHYCCUw4hOOofqz6Jw/fXU3jhFBixo.jpg?size=1200x800&quality=96&sign=d4ac0550b1c80ee54cb207de6ff864de&type=album"}),n.a.createElement("div",{onClick:function(){return e.openInteractionArticles()}},n.a.createElement(B.o,{className:"block-icon-interaction-articles-list-background"},n.a.createElement(Y.a,{width:32,height:32})),n.a.createElement(B.o,{className:"block-icon-interaction-articles-list"},n.a.createElement(G.a,null))))),n.a.createElement(B.E,{separator:"center"}),n.a.createElement(B.j,{className:"block-articles"},n.a.createElement("div",{className:"text-articles"},n.a.createElement(B.K,{level:"3",className:"title-article-list"},"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0412\u0430\u043a\u0446\u0438\u043d\u044b 3.0"),n.a.createElement(B.J,{className:"text-article"},"\u041d\u043e\u0432\u044b\u0435 \u0446\u0435\u043d\u044b \u043d\u0430 \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u044f"),n.a.createElement(B.J,{className:"footer-article"},"20 \u0438\u044e\u043d \u0432 23:20 \xb7 423 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430")),n.a.createElement("div",{className:"interaction-articles"},n.a.createElement("img",{className:"img-article-list",src:"https://sun9-6.userapi.com/impg/XJ9rNdvujB68mSRn5_yB8Bj69kirFv3UY-17AQ/Q-Q0y-nTHWU.jpg?size=960x576&quality=96&sign=f95ef7c6c77cc9a3ca57dfc6c3b963f6&type=album"}),n.a.createElement("div",{onClick:function(){return e.openInteractionArticles()}},n.a.createElement(B.o,{className:"block-icon-interaction-articles-list-background"},n.a.createElement(Y.a,{width:32,height:32})),n.a.createElement(B.o,{className:"block-icon-interaction-articles-list"},n.a.createElement(G.a,null))))),n.a.createElement(B.E,{separator:"center"}),n.a.createElement(B.j,{className:"block-articles"},n.a.createElement("div",{className:"text-articles"},n.a.createElement(B.K,{level:"3",className:"title-article-list"},"\u041e\u0442\u0432\u0435\u0442\u044b \u043d\u0430 \u0447\u0430\u0441\u0442\u043e \u0437\u0430\u0434\u0430\u0432\u0430\u043c\u044b\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b"),n.a.createElement(B.J,{className:"text-article"},"\u0427\u0442\u043e \u0437\u0430 \u0438\u0433\u0440\u0430 \u0412\u0430\u043a\u043d\u0446\u0438\u043d\u0430?"),n.a.createElement(B.J,{className:"footer-article"},"5 \u0438\u044e\u043d \u0432 14:37 \xb7 404 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430")),n.a.createElement("div",{className:"interaction-articles"},n.a.createElement("img",{className:"img-article-list",src:"https://sun9-6.userapi.com/impg/XJ9rNdvujB68mSRn5_yB8Bj69kirFv3UY-17AQ/Q-Q0y-nTHWU.jpg?size=960x576&quality=96&sign=f95ef7c6c77cc9a3ca57dfc6c3b963f6&type=album"}),n.a.createElement("div",{onClick:function(){return e.openInteractionArticles()}},n.a.createElement(B.o,{className:"block-icon-interaction-articles-list-background"},n.a.createElement(Y.a,{width:32,height:32})),n.a.createElement(B.o,{className:"block-icon-interaction-articles-list"},n.a.createElement(G.a,null))))),n.a.createElement(B.E,{separator:"center"}),n.a.createElement(B.j,{className:"block-articles"},n.a.createElement("div",{className:"text-articles"},n.a.createElement(B.K,{level:"3",className:"title-article-list"},"\u041e\u0442\u0432\u0435\u0442\u044b \u043d\u0430 \u0447\u0430\u0441\u0442\u043e \u0437\u0430\u0434\u0430\u0432\u0430\u043c\u044b\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b"),n.a.createElement(B.J,{className:"text-article"},"\u0427\u0442\u043e \u0437\u0430 \u0438\u0433\u0440\u0430 \u0412\u0430\u043a\u043d\u0446\u0438\u043d\u0430?"),n.a.createElement(B.J,{className:"footer-article"},"5 \u0438\u044e\u043d \u0432 14:37 \xb7 404 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430")),n.a.createElement("div",{className:"interaction-articles"},n.a.createElement("img",{className:"img-article-list",src:"https://sun9-6.userapi.com/impg/XJ9rNdvujB68mSRn5_yB8Bj69kirFv3UY-17AQ/Q-Q0y-nTHWU.jpg?size=960x576&quality=96&sign=f95ef7c6c77cc9a3ca57dfc6c3b963f6&type=album"}),n.a.createElement("div",{onClick:function(){return e.openInteractionArticles()}},n.a.createElement(B.o,{className:"block-icon-interaction-articles-list-background"},n.a.createElement(Y.a,{width:32,height:32})),n.a.createElement(B.o,{className:"block-icon-interaction-articles-list"},n.a.createElement(G.a,null))))),n.a.createElement(B.E,{separator:"center"}),n.a.createElement(B.j,{className:"block-articles"},n.a.createElement("div",{className:"text-articles"},n.a.createElement(B.K,{level:"3",className:"title-article-list"},"\u041e\u0442\u0432\u0435\u0442\u044b \u043d\u0430 \u0447\u0430\u0441\u0442\u043e \u0437\u0430\u0434\u0430\u0432\u0430\u043c\u044b\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b"),n.a.createElement(B.J,{className:"text-article"},"\u0427\u0442\u043e \u0437\u0430 \u0438\u0433\u0440\u0430 \u0412\u0430\u043a\u043d\u0446\u0438\u043d\u0430?"),n.a.createElement(B.J,{className:"footer-article"},"5 \u0438\u044e\u043d \u0432 14:37 \xb7 404 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430")),n.a.createElement("div",{className:"interaction-articles"},n.a.createElement("img",{className:"img-article-list",src:"https://sun9-6.userapi.com/impg/XJ9rNdvujB68mSRn5_yB8Bj69kirFv3UY-17AQ/Q-Q0y-nTHWU.jpg?size=960x576&quality=96&sign=f95ef7c6c77cc9a3ca57dfc6c3b963f6&type=album"}),n.a.createElement("div",{onClick:function(){return e.openInteractionArticles()}},n.a.createElement(B.o,{className:"block-icon-interaction-articles-list-background"},n.a.createElement(Y.a,{width:32,height:32})),n.a.createElement(B.o,{className:"block-icon-interaction-articles-list"},n.a.createElement(G.a,null))))),n.a.createElement(B.E,{separator:"center"}),n.a.createElement(B.j,{className:"block-articles"},n.a.createElement("div",{className:"text-articles"},n.a.createElement(B.K,{level:"3",className:"title-article-list"},"\u041e\u0442\u0432\u0435\u0442\u044b \u043d\u0430 \u0447\u0430\u0441\u0442\u043e \u0437\u0430\u0434\u0430\u0432\u0430\u043c\u044b\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b"),n.a.createElement(B.J,{className:"text-article"},"\u0427\u0442\u043e \u0437\u0430 \u0438\u0433\u0440\u0430 \u0412\u0430\u043a\u043d\u0446\u0438\u043d\u0430?"),n.a.createElement(B.J,{className:"footer-article"},"5 \u0438\u044e\u043d \u0432 14:37 \xb7 404 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430")),n.a.createElement("div",{className:"interaction-articles"},n.a.createElement("img",{className:"img-article-list",src:"https://sun9-6.userapi.com/impg/XJ9rNdvujB68mSRn5_yB8Bj69kirFv3UY-17AQ/Q-Q0y-nTHWU.jpg?size=960x576&quality=96&sign=f95ef7c6c77cc9a3ca57dfc6c3b963f6&type=album"}),n.a.createElement("div",{onClick:function(){return e.openInteractionArticles()}},n.a.createElement(B.o,{className:"block-icon-interaction-articles-list-background"},n.a.createElement(Y.a,{width:32,height:32})),n.a.createElement(B.o,{className:"block-icon-interaction-articles-list"},n.a.createElement(G.a,null)))))):null,"drafts"===this.state.activeTab?n.a.createElement("div",null,n.a.createElement(B.z,{icon:n.a.createElement(Z.a,{width:56,height:56})},"\u0423 \u0412\u0430\u0441 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442 \u0447\u0435\u0440\u043d\u043e\u0432\u0438\u043a\u043e\u0432")):null))}}]),t}(n.a.Component),ee={setPage:function(e,t){return{type:"SET_PAGE",payload:{view:e,panel:t}}},goBack:j,openPopout:function(e){return{type:"OPEN_POPOUT",payload:{popout:e}}},closePopout:function(){return{type:"CLOSE_POPOUT"}},openModal:w},te=Object(s.b)(null,ee)($),ae=a(218),ce=function(e){function t(){return Object(A.a)(this,t),Object(_.a)(this,Object(T.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(H.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.goBack;return n.a.createElement(B.v,{id:t},n.a.createElement(B.w,{left:n.a.createElement(B.x,{onClick:function(){return a()}})},"Examples 1.2"),n.a.createElement(B.m,null,n.a.createElement(B.z,{icon:n.a.createElement(ae.a,null),header:"\u0417\u0430\u0433\u043b\u0443\u0448\u043a\u0430"},"\u041f\u0440\u043e\u0441\u0442\u043e\u0439 Placeholder. \u0417\u0434\u0435\u0441\u044c \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435\u0442")))}}]),t}(n.a.Component),ne={goBack:j},le=Object(s.b)(null,ne)(ce),re=a(203),ie=a(219),oe=a(202),se=[{name:"VK Mini Apps",avatar:"https://sun9-1.userapi.com/impf/c846420/v846420985/1526c3/ISX7VF8NjZk.jpg?size=800x800&quality=96&sign=fefc1a684879e75bd9d36b4ba2907310&type=album",desc:"\u041a\u0430\u043a\u043e\u0439-\u0442\u043e \u0442\u0435\u043a\u0441\u0442"},{name:"VK API",avatar:"https://sun2.is74.userapi.com/impf/c638629/v638629852/2afba/o-dvykjSIB4.jpg?size=600x600&quality=96&sign=553d78e3d9a15f06cacc3f421d9a4919&type=album",desc:"\u041a\u0430\u043a\u043e\u0439-\u0442\u043e \u0442\u0435\u043a\u0441\u0442"},{name:"VK Testers",avatar:"https://sun1.is74.userapi.com/impf/c626821/v626821590/2ae79/TI4fleAH-cs.jpg?size=1280x724&quality=96&sign=851a3817064034d2fa974ce029b71a5a&type=album",desc:"\u041a\u0430\u043a\u043e\u0439-\u0442\u043e \u0442\u0435\u043a\u0441\u0442"}],me=function(e){function t(){return Object(A.a)(this,t),Object(_.a)(this,Object(T.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(H.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.onClose,c=e.openModal,l=e.platform;return n.a.createElement(B.s,{id:t,header:n.a.createElement(B.t,{left:l!==B.n&&n.a.createElement(B.y,{onClick:a},n.a.createElement(re.a,null)),right:l===B.n&&n.a.createElement(B.y,{onClick:a},n.a.createElement(ie.a,null))},"VK"),onClose:a,settlingHeight:80},n.a.createElement(B.r,null,se.map(function(e,t){return n.a.createElement(B.h,{key:t,description:e.desc,before:n.a.createElement(B.f,{size:40,src:e.avatar}),onClick:function(){return c("MODAL_PAGE_BOT_INFO")},asideContent:n.a.createElement(oe.a,{fill:"#528bcc"})},e.name)})))}}]),t}(n.a.Component),ue={openModal:w},pe=Object(B.O)(Object(s.b)(null,ue)(me)),de=function(e){function t(){return Object(A.a)(this,t),Object(_.a)(this,Object(T.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(H.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.onClose,c=e.platform;return n.a.createElement(B.s,{id:t,header:n.a.createElement(B.t,{left:c!==B.n&&n.a.createElement(B.y,{onClick:a},n.a.createElement(re.a,null)),right:c===B.n&&n.a.createElement(B.y,{onClick:a},n.a.createElement(ie.a,null))},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0435"),onClose:a,settlingHeight:80},n.a.createElement(B.h,{description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",before:n.a.createElement(B.f,{size:40,src:"https://vk.com/images/community_100.png?ava=1"})},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),n.a.createElement(B.r,null,n.a.createElement(B.h,null,n.a.createElement(B.p,{header:"\u041f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432"},"8800")),n.a.createElement(B.h,null,n.a.createElement(B.p,{header:"\u0417\u0430\u043f\u0438\u0441\u0435\u0439"},"555")),n.a.createElement(B.h,null,n.a.createElement(B.p,{header:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433"},"3535"))))}}]),t}(n.a.Component),Ee=Object(B.O)(Object(s.b)()(de)),be=function(e){function t(e){var a;return Object(A.a)(this,t),(a=Object(_.a)(this,Object(T.a)(t).call(this,e))).state={hasHeader:!0,isDesktop:!1,Platform:Object(B.N)()},a.lastAndroidBackAction=0,a}return Object(I.a)(t,e),Object(H.a)(t,[{key:"componentDidMount",value:function(){var e=Object(C.a)(P.a.mark(function e(){var t,a=this;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props.goBack,"desktop_web"===new URL(window.location.href).searchParams.get("vk_platform")&&this.setState({isDesktop:!0,hasHeader:!1,Platform:B.L}),window.onpopstate=function(){var e=+new Date;e-a.lastAndroidBackAction>500?(a.lastAndroidBackAction=e,t()):window.history.pushState(null,null)};case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e,t,a){var c=this.props,n=c.activeView,l=c.activeStory,r=c.activePanel,i=c.scrollPosition;if(e.activeView!==n||e.activePanel!==r||e.activeStory!==l){var o=i[l+"_"+n+"_"+r]||0;window.scroll(0,o)}}},{key:"render",value:function(){var e=this.props,t=e.goBack,a=e.setStory,c=e.closeModal,l=e.popouts,r=e.activeView,i=e.activeStory,o=e.activeModals,s=e.panelsHistory,m=this.state,u=m.isDesktop,p=m.hasHeader,d=m.Platform,E=void 0===s[r]?[r]:s[r],v=void 0===l[r]?null:l[r],f=void 0===o[r]?null:o[r],h=n.a.createElement(B.u,{activeModal:f},n.a.createElement(pe,{id:"MODAL_PAGE_BOTS_LIST",onClose:function(){return c()}}),n.a.createElement(Ee,{id:"MODAL_PAGE_BOT_INFO",onClose:function(){return c()}}));return n.a.createElement(B.i,{platform:d,isWebView:!0},n.a.createElement(B.c,null,n.a.createElement(B.e,null,n.a.createElement(B.G,{header:p&&n.a.createElement(B.w,{separator:!1}),style:{justifyContent:"center"}},n.a.createElement(B.F,{animate:!u,spaced:u,width:u?"560px":"100%",maxWidth:u?"560px":"100%"},n.a.createElement(B.k,{activeStory:i},n.a.createElement(B.A,{id:"home",activeView:r,popout:v},n.a.createElement(B.M,{id:"home",modal:h,activePanel:b("home"),history:E,onSwipeBack:function(){return t()}},n.a.createElement(te,{id:"base",withoutEpic:!1}),n.a.createElement(le,{id:"placeholder"}))))),u&&n.a.createElement(B.F,{fixed:!0,width:"280px",maxWidth:"280px"},n.a.createElement(B.v,{id:"menuDesktop"},p&&n.a.createElement(B.w,null),n.a.createElement(B.m,null,n.a.createElement(B.h,{onClick:function(){return a("home","base")},disabled:"home"===i,before:n.a.createElement(V.a,null),style:"home"===i?{backgroundColor:"var(--button_secondary_background)",borderRadius:8}:{}},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"))))))))}}]),t}(n.a.Component);var ve=Object(s.b)(function(e){return{activeView:e.router.activeView,activeStory:e.router.activeStory,panelsHistory:e.router.panelsHistory,activeModals:e.router.activeModals,popouts:e.router.popouts,scrollPosition:e.router.scrollPosition}},function(e){return Object(u.a)({dispatch:e},Object(i.bindActionCreators)({setStory:O,goBack:j,closeModal:k},e))})(be);a.d(t,"store",function(){return fe}),S.a.subscribe(function(e){switch(e.detail.type){case"VKWebAppUpdateConfig":var t=document.createAttribute("scheme");t.value=e.detail.data.scheme?e.detail.data.scheme:"client_light",document.body.attributes.setNamedItem(t)}}),S.a.send("VKWebAppInit",{});var fe=Object(i.createStore)(y,Object(g.composeWithDevTools)(Object(i.applyMiddleware)(o.a)));fe.dispatch(O("home","base")),r.a.render(n.a.createElement(s.a,{store:fe},n.a.createElement(ve,null)),document.getElementById("root")),Promise.all([a.e(3),a.e(4)]).then(a.bind(null,224)).then(function(e){e.default})}},[[149,1,2]]]);