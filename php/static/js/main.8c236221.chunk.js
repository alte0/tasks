(this["webpackJsonpspa-react"]=this["webpackJsonpspa-react"]||[]).push([[0],{19:function(e,t,a){},36:function(e,t,a){e.exports=a(77)},41:function(e,t,a){},42:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(28),s=a.n(i),o=(a(41),a(3)),l=a(4),c=a(6),u=a(5),m=a(9),d=a(7);function h(e){return r.a.createElement("div",{className:"container"},e.children)}a(42);function _(){return r.a.createElement("footer",{className:"footer"},r.a.createElement(h,null,r.a.createElement("p",null,"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0414\u043c\u0438\u0442\u0440\u0438\u0435\u0432 \u041c\u0430\u043a\u0441\u0438\u043c. \xa9 2019 \u0433.")))}var g=a(14),f=a.n(g);f.a.options={closeButton:!1,debug:!1,newestOnTop:!1,progressBar:!0,positionClass:"toast-top-center",onclick:null,showDuration:"300",hideDuration:"1000",extendedTimeOut:"1000",showEasing:"swing",hideEasing:"linear",showMethod:"fadeIn",hideMethod:"fadeOut"};var p=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{time:5e3,preventDuplicates:!1};f.a.options.timeOut=n.time,f.a.options.preventDuplicates=n.preventDuplicates,a?f.a[e](t,a):f.a[e](t)},E={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error"},k=a(35),v=a(17),N=function(e,t,a){return e.length>=t&&e.length<=a},b=function(e){var t=(new Date).getTime();return new Date(x(e)).getTime()<t},T=function(e){var t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):void 0};var S,C,L=function(e){!function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};(a=Object(v.a)({path:"/"},a)).expires instanceof Date&&(a.expires=a.expires.toUTCString());var n=encodeURIComponent(e)+"="+encodeURIComponent(t);for(var r in a){n+="; "+r;var i=a[r];!0!==i&&(n+="="+i)}document.cookie=n}(e,"",{"max-age":-1})},x=function(e){return e.split(".").reverse().join("-")},w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";switch(e){case"/my-tasks-done":return"\u041c\u043e\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u044b\u0435 \u0437\u0430\u0434\u0430\u0447\u0438.";case"/designated-tasks":return"\u042f \u043d\u0430\u0437\u043d\u0430\u0447\u0438\u043b \u0437\u0430\u0434\u0430\u0447\u0438.";case"/designated-tasks-done":return"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0435 \u0437\u0430\u0434\u0430\u0447\u0438 \u0434\u0440\u0443\u0433\u0438\u043c\u0438.";case"/search":return'\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u043f\u043e\u0438\u0441\u043a\u0430 \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 - "'.concat(t,'"');default:return"\u041c\u043e\u0438 \u0437\u0430\u0434\u0430\u0447\u0438."}},O=function(e,t){var a=Object(k.a)(e),n=a.findIndex((function(e){return Number(e.task_id)===Number(t)}));return-1!==n&&(a[n].task_status="1",a.splice(n,1)),a},y=function(e){if(!e)return"";var t=new URL(e);if(t.searchParams.has("q")){var a=t.searchParams.get("q");return decodeURIComponent(a)}},I=a(16),D=a.n(I),F=function(e){var t,a,n=arguments;return D.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t=n.length>1&&void 0!==n[1]?n[1]:{method:"GET",cache:"no-store"},r.next=3,D.a.awrap(fetch("/ajax/".concat(e),t));case 3:return a=r.sent,r.next=6,D.a.awrap(a.json());case 6:return r.abrupt("return",r.sent);case 7:case"end":return r.stop()}}))},j=function(){return F("get-my-tasks.php?my-tasks=ajax")},M=function(){return F("get-my-tasks-done.php?my-tasks-done=ajax")},R=function(){return F("get-designated-tasks.php?get-designated-task=ajax")},P=function(){return F("get-designated-tasks-done.php?get-designated-task-done=ajax")},G=function(e){return F("add-task.php",{method:"POST",body:e})},H=function(e){return F("signup.php",{method:"POST",body:e})},A=function(e){return F("signin.php",{method:"POST",body:e})},X=a(1),q=a(12),W=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).initialState={textSearch:e.textSearch||"",valid:!1},a.state=a.initialState,a._handleChangeTextSearch=a._handleChangeTextSearch.bind(Object(m.a)(a)),a._handleSubmitFormSearch=a._handleSubmitFormSearch.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this._handleSubmitFormSearch,className:"form form_search",method:"get"},r.a.createElement("h3",{className:"form__title visually-hidden"},"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0437\u0430\u0434\u0430\u0447\u0430\u043c."),r.a.createElement("div",{className:"form__row form__row_search"},r.a.createElement("input",{className:"form__input form__input_search",type:"search",name:"search-field",placeholder:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0437\u0430\u0434\u0430\u0447\u0430\u043c",value:this.state.textSearch,onChange:this._handleChangeTextSearch}),r.a.createElement("button",{disabled:!this.state.valid,className:"form__button submit",type:"submit"},"\u041d\u0430\u0439\u0442\u0438")))}},{key:"_handleChangeTextSearch",value:function(e){var t=e.target.value;this.setState({textSearch:t,valid:Boolean(t.trim())})}},{key:"_handleSubmitFormSearch",value:function(e){e.preventDefault(),this.props.history.push("/search?q=".concat(encodeURIComponent(this.state.textSearch.trim())))}}]),t}(n.Component),U=Object(q.g)(W),B=(a(51),function(e){var t=e.user,a=e.url,n=e.handleClickExit;return r.a.createElement("nav",{className:"user-menu"},r.a.createElement("span",{className:"user-menu__user-name"},"".concat(t.surname," ").concat(t.name," ").concat(t.patronymic)),function(e){switch(e){case"/":return[{textLink:"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u044b\u0435 \u0437\u0430\u0434\u0430\u0447\u0438 \u043c\u043d\u043e\u044e",href:"/my-tasks-done"},{textLink:"\u042f \u043d\u0430\u0437\u043d\u0430\u0447\u0438\u043b \u0437\u0430\u0434\u0430\u0447\u0438",href:"/designated-tasks"}];case"/my-tasks-done":return[{textLink:"\u041c\u043e\u0438 \u0437\u0430\u0434\u0430\u0447\u0438",href:"/"},{textLink:"\u042f \u043d\u0430\u0437\u043d\u0430\u0447\u0438\u043b \u0437\u0430\u0434\u0430\u0447\u0438",href:"/designated-tasks"}];case"/designated-tasks":case"/designated-tasks-done":return[{textLink:"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u044b\u0435 \u0437\u0430\u0434\u0430\u0447\u0438 \u0434\u0440\u0443\u0433\u0438\u043c\u0438",href:"/designated-tasks-done"},{textLink:"\u041c\u043e\u0438 \u0437\u0430\u0434\u0430\u0447\u0438",href:"/"}];case"/search":default:return[{textLink:"\u041c\u043e\u0438 \u0437\u0430\u0434\u0430\u0447\u0438",href:"/"},{textLink:"\u042f \u043d\u0430\u0437\u043d\u0430\u0447\u0438\u043b \u0437\u0430\u0434\u0430\u0447\u0438",href:"/designated-tasks"}]}}(a).map((function(e,t){return r.a.createElement(X.b,{className:"user-menu__link link",key:e.href+t,to:e.href},e.textLink)})),r.a.createElement(X.b,{className:"user-menu__link link",to:"/add-task"},"\u041f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443"),r.a.createElement("a",{className:"user-menu__link user-menu__logout link",onClick:n,href:"/logout"},"\u0412\u044b\u0439\u0442\u0438"))}),z=(a(52),a(31)),K=a.n(z).a.sanitize,$=function(e){var t,a,n=e.isShowDesc,i=e.isMore,s=e.task,o=e.isShowLinkExecute,l=s.task_date_end,c=s.task_title,u=s.task_desc,m=s.task_date_start,d=s.task_status,h=s.task_date_no_limit,_=s.task_id,g=s.author_name,f=s.author_surname,p=s.author_patronymic,E=s.executor_name,k=s.executor_patronymic,N=s.executor_surname;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"task__title"},c),r.a.createElement("div",{className:"task__desc",dangerouslySetInnerHTML:{__html:(t=n,a=u,t?K(a):"")}}),r.a.createElement("footer",{className:"task__footer"},r.a.createElement("div",{className:"task__date-start"},"\u041d\u0430\u0447\u0430\u043b\u043e \u0437\u0430\u0434\u0430\u0447\u0438: ",m),r.a.createElement("div",{className:"task__date-end"},"\u0417\u0430\u043a\u043e\u043d\u0447\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443 \u0434\u043e: ",1===Number(h)?"\u0431\u0435\u0437 \u0434\u0430\u0442\u044b \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f":l),r.a.createElement("div",{className:"task__status"},"\u0421\u0442\u0430\u0442\u0443\u0441: ",Number(d)?"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e.":"\u0412 \u0440\u0430\u0431\u043e\u0442\u0435."),r.a.createElement("div",{className:"task__execute"},!Number(d)&&o?r.a.createElement("button",{"data-id-task":_,"data-title":c,onClick:e.handleClickExecuteTask},"\u0412\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443"):""),r.a.createElement("div",{className:"task__author"},"\u041d\u0430\u0437\u043d\u0430\u0447\u0438\u043b: ",f," ",g," ",p),r.a.createElement("div",{className:"task__executor"},"\u0418\u0441\u043f\u043e\u043d\u0438\u0442\u0435\u043b\u044c: ",N," ",E," ",k)),i?r.a.createElement(X.b,{to:function(e){return Object(v.a)({},e,{pathname:"/task/".concat(_)})},className:"link"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"):"")},J=function(e){var t=e.isShowDesc,a=e.isTasks,n=e.task,i=n.task_date_end,s=n.task_date_no_limit;if(a)return $(e);var o=b(i)&&0===Number(s)?"task_expired":"";return r.a.createElement("section",{className:"task ".concat(o," ").concat(t?"task_single":"")},$(e))},Q=(a(53),!0),Y=!1,V=!0,Z=function(e){var t=e.title,a=e.tasks;return r.a.createElement("section",{className:"tasks"},r.a.createElement("h2",{className:"tasks__title"},t),a.length?r.a.createElement("ul",{className:"tasks__lists"},a.map((function(t){var a=V?"task":"",n=b(t.task_date_end)&&0===Number(t.task_date_no_limit)?"task_expired":"";return r.a.createElement("li",{className:"tasks__item ".concat(a," ").concat(n),key:t.task_id},r.a.createElement(J,{isMore:Q,isShowDesc:Y,isTasks:V,task:t,isShowLinkExecute:e.isShowLinkExecute,handleClickMore:e.handleClickMore,handleClickExecuteTask:e.handleClickExecuteTask}))}))):r.a.createElement("div",null,"\u041d\u0435\u0442 \u043d\u0438\u043a\u0430\u043a\u0438\u0445 \u0437\u0430\u0434\u0430\u0447"))},ee=(a(54),function(e){var t=e.pagesCount,a=e.pageCurrentPagination,n=new Array(t).fill(t),i=n.length,s=a-1===0?1:a-1,o=a+1>i?i:a+1;return r.a.createElement("ul",{className:"pagination-list"},r.a.createElement("li",{className:"pagination-list__item pagination-list__item_prev"},s===a?r.a.createElement("a",{className:"pagination-list__link",onClick:function(e){return e.preventDefault()},href:"#prev"},"<"):r.a.createElement("a",{className:"pagination-list__link",onClick:e.handleClickChangePagePagination,"data-page-id-pag":s,href:"page-"+s},"<")),n.map((function(t,n){return r.a.createElement("li",{className:"pagination-list__item".concat(a===n+1?" pagination-list__item_active":""),key:"page-"+n},r.a.createElement("a",{className:"pagination-list__link",onClick:e.handleClickChangePagePagination,"data-page-id-pag":n+1,href:"page-"+(n+1)},n+1))})),r.a.createElement("li",{className:"pagination-list__item pagination-list__item_next"},o===a?r.a.createElement("a",{className:"pagination-list__link",onClick:function(e){return e.preventDefault()},href:"#next"},">"):r.a.createElement("a",{className:"pagination-list__link",onClick:e.handleClickChangePagePagination,"data-page-id-pag":o,href:"page-"+o},">")))}),te=(a(55),function(){return r.a.createElement("div",{className:"loader-container"},r.a.createElement("div",{className:"loader"},r.a.createElement("div",{className:"text"},"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445"),r.a.createElement("div",{className:"dots"},r.a.createElement("div",{className:"dot"}),r.a.createElement("div",{className:"dot"}),r.a.createElement("div",{className:"dot"}),r.a.createElement("div",{className:"dot"}))))}),ae=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).initialState={tasks:[],itemsTasks:9,pagesCount:0,pageCurrentPagination:1,loading:!0},a.state=a.initialState,a._handleClickExecuteTask=a._handleClickExecuteTask.bind(Object(m.a)(a)),a._handleClickChangePagePagination=a._handleClickChangePagePagination.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.url;if("/search"!==e){var t=this._getFuncData(e);this._getData(t)}else this._getSearchData()}},{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.url,n=t.urlOrigin;if("/search"!==a&&a!==e.url){var r=this._getFuncData(this.props.url);this._getData(r)}"/search"===a&&n!==e.urlOrigin&&this._getSearchData()}},{key:"render",value:function(){if(!this.props.isLoggedIn)return r.a.createElement(q.a,{to:"/sing-in"});var e=this.props,t=e.user,a=e.handleClickExit,n=e.url,i=e.urlOrigin,s=y(i),o=this.state,l=o.tasks,c=o.pageCurrentPagination,u=o.itemsTasks,m=o.pagesCount,d=l.length?l.slice((c-1)*u,c*u):l,h="/"===n;return r.a.createElement(r.a.Fragment,null,r.a.createElement(B,{handleClickExit:a,user:t,url:n}),this.state.loading?r.a.createElement(te,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(U,{textSearch:s}),r.a.createElement(Z,{tasks:d,title:w(n,s),isShowLinkExecute:h,handleClickMore:function(e){e.preventDefault(),console.log("handleClickMore")},handleClickExecuteTask:this._handleClickExecuteTask}),l.length>u?r.a.createElement(ee,{pagesCount:m,pageCurrentPagination:c,handleClickChangePagePagination:this._handleClickChangePagePagination}):null))}},{key:"_getData",value:function(e){var t=this;this.setState({loading:!0,tasks:this.initialState.tasks,pageCurrentPagination:this.initialState.pageCurrentPagination}),e().then((function(e){if("error"===e.msgsType)return t.setState({tasks:[]}),!0;var a=e.length;t.setState((function(t){var n=t.itemsTasks;return{tasks:e,pagesCount:Math.ceil(a/n)}}))})).catch((function(e){console.error(e),p(E.ERROR,e,"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445.")})).finally((function(){t.setState({loading:!1})}))}},{key:"_getFuncData",value:function(e){switch(e){case"/my-tasks-done":return M;case"/designated-tasks":return R;case"/designated-tasks-done":return P;default:return j}}},{key:"_handleClickExecuteTask",value:function(e){var t=this,a=e.target.dataset.idTask,n=e.target.dataset.title;window.confirm("\u0412\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443 - ".concat(n,"?"))&&function(e){return F("execute-task.php?execute-task=ajax&action=execute&id=".concat(e))}(a).then((function(e){if(p(e.msgsType,"",e.textMsgs),"success"===e.msgsType)return t.setState((function(e){return{tasks:O(e.tasks,a)}})),!0})).catch((function(e){console.error(e),p(E.ERROR,e,"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430.")}))}},{key:"_handleClickChangePagePagination",value:function(e){e.preventDefault(),this.setState({pageCurrentPagination:+e.target.dataset.pageIdPag})}},{key:"_getSearchData",value:function(){var e,t=this,a=y(this.props.urlOrigin)||"";(e=a,F("get-result-search.php?search-field=".concat(e))).then((function(e){if("warning"===e.msgsType)return t.setState({tasks:t.initialState.tasks,pageCurrentPagination:t.initialState.pageCurrentPagination}),!0;var a=e.length;t.setState((function(t){var n=t.itemsTasks;return{tasks:e,pagesCount:Math.ceil(a/n)}}))})).catch((function(e){console.error(e),p(E.ERROR,e,"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445.")})).finally((function(){t.setState({loading:!1})}))}}]),t}(n.Component),ne=(a(19),Object.freeze({MIN_LENGTH_LOGIN:2,MAX_LENGTH_LOGIN:20,MIN_LENGTH_PASSWORD:6,MAX_LENGTH_PASSWORD:20,MIN_LENGTH_TEXT:2,MAX_LENGTH_TEXT:20})),re=Object.freeze({MIN_LENGTH_TEXT:2,MAX_LENGTH_TEXT_TITLE:255,MAX_LENGTH_TEXT_DESK:255}),ie=(Object.freeze({REDIRECTION_SIGN_IN_TIME:3e3,REDIRECTION_TASKS_TIME:3e3}),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e)))._validateForm=function(e){var t=e.login,a=e.password,n=N(t,ne.MIN_LENGTH_LOGIN,ne.MAX_LENGTH_LOGIN),r=N(a,ne.MIN_LENGTH_PASSWORD,ne.MAX_LENGTH_PASSWORD);return n&&r},a._handleLoginChange=function(e){var t=e.target.value;a.setState((function(e){return{login:t,validForm:a._validateForm(Object.assign({},e,{login:t}))}}))},a._handlePasswordChange=function(e){var t=e.target.value;a.setState((function(e){return{password:t,validForm:a._validateForm(Object.assign({},e,{password:t}))}}))},a._handleSubmitForm=function(e){e.preventDefault();var t=new FormData(e.target);t.append("signin","ajax"),A(t).then((function(e){p(e.msgsType,"",e.textMsgs),"success"===e.msgsType&&(a.setState(a.initialState),T("userInfo")&&T("PHPSESSID")&&(a.props.setLoggedIn(!0),a.props.getFullName(),a.props.history.push("/")))})).catch((function(e){console.error(e),p(E.ERROR,e,"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430.")}))},a.initialState={login:"",password:"",validForm:!1},a.state=a.initialState,a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this._handleSubmitForm,className:"form form_center form_auth",method:"post"},r.a.createElement("h3",{className:"form__title"},"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"),r.a.createElement("div",{className:"form__row form__row_content-column"},r.a.createElement("label",{htmlFor:"login"},"\u0412\u0430\u0448 \u043b\u043e\u0433\u0438\u043d:"),r.a.createElement("input",{value:this.state.login,onChange:this._handleLoginChange,className:"form__input input",id:"login",type:"text",name:"login",minLength:ne.MIN_LENGTH_LOGIN,maxLength:ne.MAX_LENGTH_LOGIN,required:"required"})),r.a.createElement("div",{className:"form__row form__row_content-column"},r.a.createElement("label",{htmlFor:"password"},"\u041f\u0430\u0440\u043e\u043b\u044c:"),r.a.createElement("input",{value:this.state.password,onChange:this._handlePasswordChange,className:"form__input input",id:"password",type:"password",name:"password",minLength:ne.MIN_LENGTH_PASSWORD,maxLength:ne.MAX_LENGTH_PASSWORD,required:"required"})),r.a.createElement("div",{className:"form__row form__row_content-column"},r.a.createElement("button",{className:"form__button submit",disabled:!this.state.validForm,type:"submit"},"\u0412\u043e\u0439\u0442\u0438")),r.a.createElement("div",{className:"form__row form__row_text-center"},r.a.createElement(X.b,{to:"/sing-up",className:"form__link-signup link"},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f")))}}]),t}(n.Component)),se=Object(q.g)(ie),oe=function(e){var t=e.isLoggedIn,a=e.getFullName,n=e.setLoggedIn;return t?r.a.createElement(q.a,{to:"/"}):r.a.createElement(se,{getFullName:a,setLoggedIn:n})},le=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e)))._validateForm=function(e){var t=e.login,a=e.password,n=e.password2,r=e.name,i=e.surname,s=e.patronymic,o=N(t,ne.MIN_LENGTH_LOGIN,ne.MAX_LENGTH_LOGIN),l=N(a,ne.MIN_LENGTH_PASSWORD,ne.MAX_LENGTH_PASSWORD),c=N(n,ne.MIN_LENGTH_PASSWORD,ne.MAX_LENGTH_PASSWORD),u=a===n,m=N(r,ne.MIN_LENGTH_TEXT,ne.MAX_LENGTH_TEXT),d=N(i,ne.MIN_LENGTH_TEXT,ne.MAX_LENGTH_TEXT),h=N(s,ne.MIN_LENGTH_TEXT,ne.MAX_LENGTH_TEXT);return o&&l&&c&&u&&m&&d&&h},a._handleLoginChange=function(e){var t=e.target.value;a.setState((function(e){return{login:t,validForm:a._validateForm(Object.assign({},e,{login:t}))}}))},a._handlePasswordChange=function(e){var t=e.target.value;a.setState((function(e){return{password:t,validForm:a._validateForm(Object.assign({},e,{password:t}))}}))},a._handlePassword2Change=function(e){var t=e.target.value;a.setState((function(e){return{password2:t,validForm:a._validateForm(Object.assign({},e,{password2:t}))}}))},a._handleNameChange=function(e){var t=e.target.value;a.setState((function(e){return{name:t,validForm:a._validateForm(Object.assign({},e,{name:t}))}}))},a._handleSurnameChange=function(e){var t=e.target.value;a.setState((function(e){return{surname:t,validForm:a._validateForm(Object.assign({},e,{surname:t}))}}))},a.handlePatronymicChange=function(e){var t=e.target.value;a.setState((function(e){return{patronymic:t,validForm:a._validateForm(Object.assign({},e,{patronymic:t}))}}))},a._handleSubmitForm=function(e){e.preventDefault();var t=new FormData(e.target);t.append("signup","ajax"),H(t).then((function(e){if(p(e.msgsType,"",e.textMsgs),"success"===e.msgsType)return a.setState(a.initialState),!0})).catch((function(e){console.error(e),p(E.ERROR,e,"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430.")}))},a._onBlurInput=function(){var e=a.state,t=e.password,n=e.password2;t.length>=ne.MIN_LENGTH_PASSWORD&&t!==n&&p(E.WARNING,'\u0412 \u043f\u043e\u043b\u0435 "\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c", \u043f\u0430\u0440\u043e\u043b\u044c \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0435\u0442 \u0441 \u043f\u043e\u043b\u0435\u043c "\u041f\u0430\u0440\u043e\u043b\u044c"!')},a.initialState={login:"",password:"",password2:"",name:"",surname:"",patronymic:"",validForm:!1},a.state=a.initialState,a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this._handleSubmitForm,className:"form form_center form_reg",method:"post"},r.a.createElement("h3",{className:"form__title"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u043d\u043e\u0432\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"),r.a.createElement("div",{className:"form__row form__row_content-column"},r.a.createElement("label",{htmlFor:"login"},"\u0412\u0430\u0448 \u043b\u043e\u0433\u0438\u043d:"),r.a.createElement("input",{value:this.state.login,onChange:this._handleLoginChange,className:"form__input input",id:"login",type:"text",name:"login",minLength:ne.MIN_LENGTH_LOGIN,maxLength:ne.MAX_LENGTH_LOGIN,required:"required"})),r.a.createElement("div",{className:"form__row form__row_content-column"},r.a.createElement("label",{htmlFor:"password"},"\u041f\u0430\u0440\u043e\u043b\u044c:"),r.a.createElement("input",{value:this.state.password,onChange:this._handlePasswordChange,className:"form__input input",id:"password",type:"password",name:"password",minLength:ne.MIN_LENGTH_PASSWORD,maxLength:ne.MAX_LENGTH_PASSWORD,required:"required"})),r.a.createElement("div",{className:"form__row form__row_content-column"},r.a.createElement("label",{htmlFor:"password2"},"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c:"),r.a.createElement("input",{value:this.state.password2,onChange:this._handlePassword2Change,onBlur:this._onBlurInput,className:"form__input input",id:"password2",type:"password",name:"password2",minLength:ne.MIN_LENGTH_PASSWORD,maxLength:ne.MAX_LENGTH_PASSWORD,required:"required"})),r.a.createElement("div",{className:"form__row form__row_content-column"},r.a.createElement("label",{htmlFor:"name"},"\u0418\u043c\u044f:"),r.a.createElement("input",{value:this.state.name,onChange:this._handleNameChange,className:"form__input input",id:"name",type:"text",name:"name",minLength:ne.MIN_LENGTH_TEXT,maxLength:ne.MAX_LENGTH_TEXT,required:"required"})),r.a.createElement("div",{className:"form__row form__row_content-column"},r.a.createElement("label",{htmlFor:"surname"},"\u0424\u0430\u043c\u0438\u043b\u0438\u044f:"),r.a.createElement("input",{value:this.state.surname,onChange:this._handleSurnameChange,className:"form__input input",id:"surname",type:"text",name:"surname",minLength:ne.MIN_LENGTH_TEXT,maxLength:ne.MAX_LENGTH_TEXT,required:"required"})),r.a.createElement("div",{className:"form__row form__row_content-column"},r.a.createElement("label",{htmlFor:"patronymic"},"\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e:"),r.a.createElement("input",{value:this.state.patronymic,onChange:this.handlePatronymicChange,className:"form__input input",id:"patronymic",type:"text",name:"patronymic",minLength:ne.MIN_LENGTH_TEXT,maxLength:ne.MAX_LENGTH_TEXT,required:"required"})),r.a.createElement("div",{className:"form__row form__row_content-column"},r.a.createElement("button",{disabled:!this.state.validForm,className:"form__button submit",type:"submit"},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f")),r.a.createElement("div",{className:"form__row form__row_text-center"},r.a.createElement(X.b,{to:"/sing-in",className:"form__link-signup link"},"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f")))}}]),t}(n.Component),ce=function(e){return e.isLoggedIn?r.a.createElement(q.a,{to:"/"}):r.a.createElement(le,null)},ue=a(32),me=a.n(ue),de={locale:a(33).Russian,defaultDate:"today",mode:"range",dateFormat:"d.m.Y",minDate:"today",weekNumbers:!0,wrap:!0},he=function(){S.clear(),S.setDate(+new Date,!0,de.dateFormat)},_e=a(34),ge=a.n(_e),fe=(a(74),{removePlugins:["ImageUpload"],toolbar:["Heading","bold","italic","|","Link","bulletedList","numberedList","blockQuote","MediaEmbed","Undo","Redo"],language:"ru",mediaEmbed:{previewsInData:!0}}),pe=function(){C.setData("")},Ee=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e)))._validateForm=function(e){var t=e.selectedDates,a=e.valueSelect,n=e.titleTask,r=e.descTask,i="disabled"!==a,s=N(n,re.MIN_LENGTH_TEXT,re.MAX_LENGTH_TEXT_TITLE),o=N(r,re.MIN_LENGTH_TEXT,re.MAX_LENGTH_TEXT_DESK);return t&&i&&s&&o},a._handleDatesChange=function(e){var t=e.target.value;a.setState((function(e){return{selectedDates:t,validForm:a._validateForm(Object.assign(e,{selectedDates:t}))}}))},a._handleDateNoLimitChange=function(){a.setState((function(e){return{isCheckedDateNoLimit:!e.isCheckedDateNoLimit}}))},a._handleTitleTaskChange=function(e){var t=e.target.value;a.setState((function(e){return{titleTask:t,validForm:a._validateForm(Object.assign(e,{titleTask:t}))}}))},a._handleDescTaskChange=function(e){a.setState((function(t){return{descTask:e,validForm:a._validateForm(Object.assign(t,{descTask:e}))}}))},a._handleSelectChange=function(e){var t=e.target.value;a.setState((function(e){return{valueSelect:t,validForm:a._validateForm(Object.assign(e,{valueSelect:t}))}}))},a.handleSubmitForm=function(e){e.preventDefault();var t=new FormData(e.target);t.append("add-task","ajax"),G(t).then((function(e){if(p(e.msgsType,"",e.textMsgs),"success"===e.msgsType)return a.setState({isCheckedDateNoLimit:!1,valueSelect:"disabled",titleTask:"",validForm:!1}),pe(),he(),!0})).catch((function(e){console.error(e),p(E.ERROR,e,"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430.")}))},a._handleClick=function(e){e.preventDefault(),a.props.changeActivePage("screen-tasks")},a.initialState={selectedDates:"",isCheckedDateNoLimit:!1,valueSelect:"disabled",titleTask:"",descTask:"",validForm:!1,allUsers:[]},a.state=a.initialState,a.inputDatesRef=r.a.createRef(),a.textareaRef=r.a.createRef(),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e,t=this;e=this.inputDatesRef.current,(S=me()(e,de)).setDate(+new Date,!0,de.dateFormat),function(e,t){ge.a.create(e,fe).then((function(e){(C=e).model.document.on("change:data",(function(){var e=C.getData();t(e)}))})).catch((function(e){console.error(e)}))}(this.textareaRef.current,this._handleDescTaskChange),F("get-all-users.php?all-users=ajax").then((function(e){if("error"===e.msgsType)return t.setState({allUsers:[]}),!0;t.setState({allUsers:e})})).catch((function(e){console.error(e),p(E.ERROR,e,"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445.")}))}},{key:"componentWillUnmount",value:function(){C.destroy().catch((function(e){console.log(e)})),S.destroy()}},{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmitForm,className:"form form_task-add",action:"",method:"post"},r.a.createElement("div",{className:"form__row form__row_label-group-two"},r.a.createElement("label",{htmlFor:"date"},"\u0414\u0430\u0442\u0430 \u043d\u0430\u0447\u0430\u043b\u0430 \u0438 \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f \u0437\u0430\u0434\u0430\u0447\u0438"),r.a.createElement("div",{ref:this.inputDatesRef,className:"flatpickr"},r.a.createElement("input",{className:"form__date input",onInput:this._handleDatesChange,id:"date",type:"text",name:"date",placeholder:"\u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u0438\u043b\u0438 \u0434\u0430\u0442\u044b","data-input":"data-input",required:"required"}),r.a.createElement("button",{type:"button",title:"\u041e\u0442\u043a\u0440\u044b\u0442/\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u044c","data-toggle":""},"\u043a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u044c"),r.a.createElement("button",{type:"button",title:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u044c","data-clear":""},"\u043e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"))),r.a.createElement("div",{className:"form__row"},r.a.createElement("input",{className:"form__checkbox",onChange:this._handleDateNoLimitChange,checked:this.state.isCheckedDateNoLimit,type:"checkbox",name:"date-no-limit",id:"date-no-limit"}),r.a.createElement("label",{htmlFor:"date-no-limit"},"\u0411\u0435\u0437 \u0434\u0430\u0442\u044b \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f (\u0434\u0430\u0442\u0430 \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u0430\u044f \u0432\u044b\u0448\u0435, \u0431\u0443\u0434\u0435\u0442 \u0438\u0433\u043d\u043e\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u0430)")),r.a.createElement("div",{className:"form__row form__row_content-column"},r.a.createElement("span",null,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044f"),r.a.createElement("select",{value:this.state.valueSelect,onChange:this._handleSelectChange,className:"form__select",name:"executor",required:"required"},r.a.createElement("option",{value:"disabled",disabled:"disabled"},"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e"),this.state.allUsers.map((function(e){return r.a.createElement("option",{value:e.user_id,key:e.user_id},e.user_surname," ",e.user_name," ",e.user_patronymic)})))),r.a.createElement("div",{className:"form__row form__row_content-column"},r.a.createElement("label",null,"\u0417\u0430\u0433\u0430\u043b\u043e\u0432\u043e\u043a \u0437\u0430\u0434\u0430\u0447\u0438"),r.a.createElement("textarea",{value:this.state.titleTask,onChange:this._handleTitleTaskChange,className:"form__title-add textarea",type:"date",name:"title",maxLength:"255",placeholder:"\u0441\u0434\u0435\u043b\u0430\u0442\u044c ...",required:"required"})),r.a.createElement("div",{className:"form__row form__row_content-column"},r.a.createElement("label",null,"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043f\u043e \u0437\u0430\u0434\u0430\u0447\u0435"),r.a.createElement("textarea",{className:"textarea",ref:this.textareaRef,value:this.state.descTask,onChange:this._handleDescTaskChange,id:"textarea-text",name:"text",maxLength:"1000",placeholder:"\u041e\u0431\u044c\u044f\u0441\u043d\u0435\u043d\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438 ...",required:"required"})),r.a.createElement("div",{className:"form__row form__row_text-center"},r.a.createElement("button",{disabled:!this.state.validForm,className:"form__submit submit",type:"submit"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443"),r.a.createElement(X.b,{className:"form__link link",to:"/"},"\u041a \u0441\u043f\u0438\u0441\u043a\u0443 \u043c\u043e\u0438\u0445 \u0437\u0430\u0434\u0430\u0447")))}}]),t}(n.Component),ke=function(e){return e.isLoggedIn?r.a.createElement(Ee,null):r.a.createElement(q.a,{to:"/sing-in"})},ve=!1,Ne=!0,be=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).initialState={task:null,loading:!0},a.state=a.initialState,a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;(function(e){return F("get-task.php?task=ajax&id=".concat(e))})(this.props.idTask).then((function(t){if("error"===t.msgsType)return e.setState({task:e.initialState.task}),!0;e.setState({task:t})})).catch((function(e){console.error(e),p(E.ERROR,e,"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445.")})).finally((function(){e.setState({loading:!1})}))}},{key:"render",value:function(){if(!this.props.isLoggedIn)return r.a.createElement(q.a,{to:"/sing-in"});var e=this.props,t=e.user,a=e.handleClickExit,n=e.url;return r.a.createElement(r.a.Fragment,null,r.a.createElement(B,{handleClickExit:a,user:t,url:n}),this.state.loading?r.a.createElement(te,null):this.state.task?r.a.createElement(J,{isMore:ve,isShowDesc:Ne,task:this.state.task,isShowLinkExecute:this.isShowLinkExecute,handleClickExecuteTask:this.handleClickExecuteTask}):r.a.createElement("p",null,"\u0422\u0430\u043a\u0430\u044f \u0437\u0430\u0434\u0430\u0447\u0430 \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442!"))}}]),t}(n.Component);a(75);a(76);var Te=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).initialState={user:{name:"",surname:"",patronymic:"",userId:null},textSearch:"",isLoggedIn:Boolean(a._isAuthUser())},a.state=a.initialState,a._getFullName=a._getFullName.bind(Object(m.a)(a)),a._setLoggedIn=a._setLoggedIn.bind(Object(m.a)(a)),a._handleClickExit=a._handleClickExit.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this._getFullName()}},{key:"render",value:function(){var e=this,t=this.state,a=t.isLoggedIn,n=t.user;return r.a.createElement(X.a,null,r.a.createElement("main",{className:"bg main".concat(this.state.loading?" flex":"")},r.a.createElement(h,null,r.a.createElement(q.d,null,r.a.createElement(q.b,{path:"/",render:function(t){var i=t.location,s=t.match;return r.a.createElement(ae,{isLoggedIn:a,user:n,url:s.url,urlOrigin:"".concat(window.location.origin).concat(i.search),handleClickExit:e._handleClickExit})},exact:!0}),r.a.createElement(q.b,{path:"/search",render:function(t){var i=t.location,s=t.match;return r.a.createElement(ae,{isLoggedIn:a,user:n,url:s.url,urlOrigin:"".concat(window.location.origin).concat(i.search),handleClickExit:e._handleClickExit})}}),r.a.createElement(q.b,{path:"/my-tasks-done",render:function(t){var i=t.match;return r.a.createElement(ae,{isLoggedIn:a,user:n,url:i.url,handleClickExit:e._handleClickExit})}}),r.a.createElement(q.b,{path:"/designated-tasks",render:function(t){var i=t.match;return r.a.createElement(ae,{isLoggedIn:a,user:n,url:i.url,handleClickExit:e._handleClickExit})}}),r.a.createElement(q.b,{path:"/designated-tasks-done",render:function(t){var i=t.match;return r.a.createElement(ae,{isLoggedIn:a,user:n,url:i.url,handleClickExit:e._handleClickExit})}}),r.a.createElement(q.b,{path:"/sing-up",render:function(){return r.a.createElement(ce,{isLoggedIn:a})}}),r.a.createElement(q.b,{path:"/sing-in",render:function(){return r.a.createElement(oe,{isLoggedIn:a,getFullName:e._getFullName,setLoggedIn:e._setLoggedIn})}}),r.a.createElement(q.b,{path:"/add-task",render:function(){return r.a.createElement(ke,{isLoggedIn:a})}}),r.a.createElement(q.b,{path:"/task/:id",render:function(t){var i=t.match,s=i.params.id;return r.a.createElement(be,{user:n,url:i.url,idTask:s,handleClickExit:e._handleClickExit,isLoggedIn:a})}}),r.a.createElement(q.b,{render:function(){return r.a.createElement("h1",null,"\u0422\u0430\u043a\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u043d\u0435\u0442\u0443!")}})))),r.a.createElement(_,null))}},{key:"_isAuthUser",value:function(){return T("userInfo")&&T("PHPSESSID")}},{key:"_getFullName",value:function(){if(this._isAuthUser()){var e=T("userInfo").split(";");this.setState({user:{name:e[0],surname:e[1],patronymic:e[2],userId:Number(e[3])}})}}},{key:"_setLoggedIn",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.setState({isLoggedIn:e})}},{key:"_handleClickExit",value:function(e){var t=this;e.preventDefault(),window.confirm("\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0432\u044b\u0439\u0442\u0438?")&&F("logout.php?logout=ajax&action=exit").then((function(e){return p(e.msgsType,"",e.textMsgs),"success"===e.msgsType&&(L("PHPSESSID"),L("userInfo"),t._setLoggedIn(!1)),!0})).catch((function(e){console.error(e),p(E.ERROR,e)}))}}]),t}(n.PureComponent);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(Te,null),document.querySelector(".root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[36,1,2]]]);
//# sourceMappingURL=main.8c236221.chunk.js.map