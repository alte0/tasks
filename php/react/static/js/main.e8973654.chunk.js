(this["webpackJsonpspa-react"]=this["webpackJsonpspa-react"]||[]).push([[0],{25:function(e,t,a){},43:function(e,t,a){e.exports=a(84)},52:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(20),i=a.n(s),o=a(13),c=a(7),l=a(36),u={name:"",surname:"",patronymic:"",userId:0},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_USER_INFO":return t.payload;default:return e}},d=a(42),h=a(24),_=function(e,t,a){return e.length>=t&&e.length<=a},p=function(e){var t=(new Date).getTime();return new Date(E(e)).getTime()<t},g=function(e){var t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):void 0};var f=function(e){!function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};(a=Object(h.a)({path:"/"},a)).expires instanceof Date&&(a.expires=a.expires.toUTCString());var n=encodeURIComponent(e)+"="+encodeURIComponent(t);for(var r in a){n+="; "+r;var s=a[r];!0!==s&&(n+="="+s)}document.cookie=n}(e,"",{"max-age":-1})},E=function(e){return e.split(".").reverse().join("-")},v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";switch(e){case"/my-tasks-done":return"\u041c\u043e\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u044b\u0435 \u0437\u0430\u0434\u0430\u0447\u0438.";case"/designated-tasks":return"\u042f \u043d\u0430\u0437\u043d\u0430\u0447\u0438\u043b \u0437\u0430\u0434\u0430\u0447\u0438.";case"/designated-tasks-done":return"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0435 \u0437\u0430\u0434\u0430\u0447\u0438 \u0434\u0440\u0443\u0433\u0438\u043c\u0438.";case"/search":return'\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u043f\u043e\u0438\u0441\u043a\u0430 \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 - "'.concat(t,'"');default:return"\u041c\u043e\u0438 \u0437\u0430\u0434\u0430\u0447\u0438."}},k=function(e){return Object.assign({},e,{task_status:"1"})},N=function(){return g("userInfo")&&g("PHPSESSID")},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_TASK":return t.payload;case"EXECUTE_TASK":return k(t.payload);default:return e}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ALL_USERS":return t.payload;default:return e}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TASKS":return t.payload;default:return e}},C=Object(o.c)({user:m,task:T,users:b,tasks:S}),w=(a(52),a(4)),y=a(5),O=a(9),x=a(6),L=a(8);function D(e){return r.a.createElement("div",{className:"container"},e.children)}a(53);function j(){return r.a.createElement("footer",{className:"footer"},r.a.createElement(D,null,r.a.createElement("p",null,"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0414\u043c\u0438\u0442\u0440\u0438\u0435\u0432 \u041c\u0430\u043a\u0441\u0438\u043c. \xa9 2019 \u0433.")))}var I=a(2),R=a(14),F=function(e){return{type:"GET_USER_INFO",payload:e}},M=a(11),G=function(e){function t(e){var a;return Object(w.a)(this,t),(a=Object(O.a)(this,Object(x.a)(t).call(this,e))).initialState={textSearch:e.textSearch||"",valid:!1},a.state=a.initialState,a._handleChangeTextSearch=a._handleChangeTextSearch.bind(Object(M.a)(a)),a._handleSubmitFormSearch=a._handleSubmitFormSearch.bind(Object(M.a)(a)),a}return Object(L.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this._handleSubmitFormSearch,className:"form form_search",method:"get"},r.a.createElement("h3",{className:"form__title visually-hidden"},"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0437\u0430\u0434\u0430\u0447\u0430\u043c."),r.a.createElement("div",{className:"form__row form__row_search"},r.a.createElement("input",{className:"form__input form__input_search",type:"search",name:"search-field",placeholder:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0437\u0430\u0434\u0430\u0447\u0430\u043c",value:this.state.textSearch,onChange:this._handleChangeTextSearch}),r.a.createElement("button",{disabled:!this.state.valid,className:"form__button submit",type:"submit"},"\u041d\u0430\u0439\u0442\u0438")))}},{key:"_handleChangeTextSearch",value:function(e){var t=e.target.value;this.setState({textSearch:t,valid:Boolean(t.trim())})}},{key:"_handleSubmitFormSearch",value:function(e){e.preventDefault(),this.props.history.push("/search?q=".concat(encodeURIComponent(this.state.textSearch.trim())))}}]),t}(n.Component),P=Object(R.g)(G),A=(a(55),a(18)),H=a.n(A),X=function(e){var t,a,n=arguments;return H.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t=n.length>1&&void 0!==n[1]?n[1]:{method:"GET",cache:"no-store"},r.next=3,H.a.awrap(fetch("/ajax/".concat(e),t));case 3:return a=r.sent,r.next=6,H.a.awrap(a.json());case 6:return r.abrupt("return",r.sent);case 7:case"end":return r.stop()}}))},q=function(){return X("get-my-tasks.php?my-tasks=ajax")},U=function(){return X("get-my-tasks-done.php?my-tasks-done=ajax")},W=function(){return X("get-designated-tasks.php?get-designated-task=ajax")},K=function(){return X("get-designated-tasks-done.php?get-designated-task-done=ajax")},B=function(e){return X("execute-task.php?execute-task=ajax&action=execute&id=".concat(e))},z=function(e){return X("add-task.php",{method:"POST",body:e})},$=function(e){return X("signup.php",{method:"POST",body:e})},J=function(e){return X("signin.php",{method:"POST",body:e})},Q=a(16),Y=a.n(Q);Y.a.options={closeButton:!1,debug:!1,newestOnTop:!1,progressBar:!0,positionClass:"toast-top-center",onclick:null,showDuration:"300",hideDuration:"1000",extendedTimeOut:"1000",showEasing:"swing",hideEasing:"linear",showMethod:"fadeIn",hideMethod:"fadeOut"};var V,Z,ee=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{time:5e3,preventDuplicates:!1};Y.a.options.timeOut=n.time,Y.a.options.preventDuplicates=n.preventDuplicates,a?Y.a[e](t,a):Y.a[e](t)},te={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error"},ae=Object(R.g)(Object(c.b)((function(e){return{user:e.user}}))((function(e){var t=e.user,a=e.url,n=e.history;return r.a.createElement("nav",{className:"user-menu"},r.a.createElement("span",{className:"user-menu__user-name"},"".concat(t.surname," ").concat(t.name," ").concat(t.patronymic)),function(e){switch(e){case"/":return[{textLink:"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u044b\u0435 \u0437\u0430\u0434\u0430\u0447\u0438 \u043c\u043d\u043e\u044e",href:"/my-tasks-done"},{textLink:"\u042f \u043d\u0430\u0437\u043d\u0430\u0447\u0438\u043b \u0437\u0430\u0434\u0430\u0447\u0438",href:"/designated-tasks"}];case"/my-tasks-done":return[{textLink:"\u041c\u043e\u0438 \u0437\u0430\u0434\u0430\u0447\u0438",href:"/"},{textLink:"\u042f \u043d\u0430\u0437\u043d\u0430\u0447\u0438\u043b \u0437\u0430\u0434\u0430\u0447\u0438",href:"/designated-tasks"}];case"/designated-tasks":case"/designated-tasks-done":return[{textLink:"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u044b\u0435 \u0437\u0430\u0434\u0430\u0447\u0438 \u0434\u0440\u0443\u0433\u0438\u043c\u0438",href:"/designated-tasks-done"},{textLink:"\u041c\u043e\u0438 \u0437\u0430\u0434\u0430\u0447\u0438",href:"/"}];case"/search":default:return[{textLink:"\u041c\u043e\u0438 \u0437\u0430\u0434\u0430\u0447\u0438",href:"/"},{textLink:"\u042f \u043d\u0430\u0437\u043d\u0430\u0447\u0438\u043b \u0437\u0430\u0434\u0430\u0447\u0438",href:"/designated-tasks"}]}}(a).map((function(e,t){return r.a.createElement(I.b,{className:"user-menu__link link",key:e.href+t,to:e.href},e.textLink)})),r.a.createElement(I.b,{className:"user-menu__link link",to:"/add-task"},"\u041f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443"),r.a.createElement("a",{className:"user-menu__link user-menu__logout link",onClick:function(e){e.preventDefault(),window.confirm("\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0432\u044b\u0439\u0442\u0438?")&&X("logout.php?logout=ajax&action=exit").then((function(e){return ee(e.msgsType,"",e.textMsgs),"success"===e.msgsType&&(f("PHPSESSID"),f("userInfo"),n.push("/sing-in")),!0})).catch((function(e){console.error(e),ee(te.ERROR,e)}))},href:"/log-out"},"\u0412\u044b\u0439\u0442\u0438"))}))),ne=(a(59),a(38)),re=a.n(ne).a.sanitize,se=function(e){var t,a,n=e.isShowDesc,s=e.isMore,i=e.task,o=e.userId,c=i.task_date_end,l=i.task_title,u=i.task_desc,m=i.task_date_start,d=i.task_status,_=i.task_date_no_limit,p=i.task_id,g=i.author_name,f=i.author_surname,E=i.author_patronymic,v=i.executor_id,k=i.executor_name,N=i.executor_patronymic,T=i.executor_surname;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"task__title"},l),r.a.createElement("div",{className:"task__desc",dangerouslySetInnerHTML:{__html:(t=n,a=u,t?re(a):"")}}),r.a.createElement("footer",{className:"task__footer"},r.a.createElement("div",{className:"task__date-start"},"\u041d\u0430\u0447\u0430\u043b\u043e \u0437\u0430\u0434\u0430\u0447\u0438: ",m),r.a.createElement("div",{className:"task__date-end"},"\u0417\u0430\u043a\u043e\u043d\u0447\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443 \u0434\u043e: ",1===Number(_)?"\u0431\u0435\u0437 \u0434\u0430\u0442\u044b \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f":c),r.a.createElement("div",{className:"task__status"},"\u0421\u0442\u0430\u0442\u0443\u0441: ",Number(d)?"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e.":"\u0412 \u0440\u0430\u0431\u043e\u0442\u0435."),r.a.createElement("div",{className:"task__execute"},Number(d)||o!==Number(v)?"":r.a.createElement("button",{"data-id-task":p,"data-title":l,onClick:e.handleClickExecuteTask},"\u0412\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443")),r.a.createElement("div",{className:"task__author"},"\u041d\u0430\u0437\u043d\u0430\u0447\u0438\u043b: ",f," ",g," ",E),r.a.createElement("div",{className:"task__executor"},"\u0418\u0441\u043f\u043e\u043d\u0438\u0442\u0435\u043b\u044c: ",T," ",k," ",N)),s?r.a.createElement(I.b,{to:function(e){return Object(h.a)({},e,{pathname:"/task/".concat(p)})},className:"link"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"):"")},ie=function(e){var t=e.isShowDesc,a=e.isTasks,n=e.task,s=n.task_date_end,i=n.task_date_no_limit;if(a)return se(e);var o=p(s)&&0===Number(i)?"task_expired":"";return r.a.createElement("section",{className:"task ".concat(o," ").concat(t?"task_single":"")},se(e))},oe=(a(60),!0),ce=!1,le=!0,ue=function(e){var t=e.title,a=e.tasks,n=e.userId;return r.a.createElement("section",{className:"tasks"},r.a.createElement("h2",{className:"tasks__title"},t),a.length?r.a.createElement("ul",{className:"tasks__lists"},a.map((function(t){var a=le?"task":"",s=p(t.task_date_end)&&0===Number(t.task_date_no_limit)?"task_expired":"";return r.a.createElement("li",{className:"tasks__item ".concat(a," ").concat(s),key:t.task_id},r.a.createElement(ie,{isMore:oe,isShowDesc:ce,isTasks:le,task:t,userId:n,handleClickMore:e.handleClickMore,handleClickExecuteTask:e.handleClickExecuteTask}))}))):r.a.createElement("div",null,"\u041d\u0435\u0442 \u043d\u0438\u043a\u0430\u043a\u0438\u0445 \u0437\u0430\u0434\u0430\u0447"))},me=(a(61),function(e){var t=e.pagesCount,a=e.pageCurrentPagination,n=new Array(t).fill(t),s=n.length,i=a-1===0?1:a-1,o=a+1>s?s:a+1;return r.a.createElement("ul",{className:"pagination-list"},r.a.createElement("li",{className:"pagination-list__item pagination-list__item_prev"},i===a?r.a.createElement("a",{className:"pagination-list__link",onClick:function(e){return e.preventDefault()},href:"#prev"},"<"):r.a.createElement("a",{className:"pagination-list__link",onClick:e.handleClickChangePagePagination,"data-page-id-pag":i,href:"page-"+i},"<")),n.map((function(t,n){return r.a.createElement("li",{className:"pagination-list__item".concat(a===n+1?" pagination-list__item_active":""),key:"page-"+n},r.a.createElement("a",{className:"pagination-list__link",onClick:e.handleClickChangePagePagination,"data-page-id-pag":n+1,href:"page-"+(n+1)},n+1))})),r.a.createElement("li",{className:"pagination-list__item pagination-list__item_next"},o===a?r.a.createElement("a",{className:"pagination-list__link",onClick:function(e){return e.preventDefault()},href:"#next"},">"):r.a.createElement("a",{className:"pagination-list__link",onClick:e.handleClickChangePagePagination,"data-page-id-pag":o,href:"page-"+o},">")))}),de=(a(62),function(){return r.a.createElement("div",{className:"loader-container"},r.a.createElement("div",{className:"loader"},r.a.createElement("div",{className:"text"},"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445"),r.a.createElement("div",{className:"dots"},r.a.createElement("div",{className:"dot"}),r.a.createElement("div",{className:"dot"}),r.a.createElement("div",{className:"dot"}),r.a.createElement("div",{className:"dot"}))))}),he=function(e){var t=e.search;return new URLSearchParams(t).get("q")},_e=function(e){function t(e){var a;return Object(w.a)(this,t),(a=Object(O.a)(this,Object(x.a)(t).call(this,e))).initialState={itemsTasks:9,pagesCount:0,pageCurrentPagination:1,loading:!0},a.state=a.initialState,a._handleClickExecuteTask=a._handleClickExecuteTask.bind(Object(M.a)(a)),a._handleClickChangePagePagination=a._handleClickChangePagePagination.bind(Object(M.a)(a)),a}return Object(L.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.url;if("/search"===e){var t=he(this.props.location);this._getSearchData(t)}else{var a=this._getFuncData(e);this._getData(a)}}},{key:"shouldComponentUpdate",value:function(e,t){var a=this.props.match.url,n=e.match.url;if(a!==n&&"/search"!==n){var r=this._getFuncData(n);return this._getData(r),!0}var s=he(this.props.location),i=he(e.location);return("/search"===a||"/search"===n)&&s!==i?(this._getSearchData(i),!0):t.loading!==this.state.loading||t.pageCurrentPagination!==this.state.pageCurrentPagination}},{key:"render",value:function(){if(!N())return r.a.createElement(R.a,{to:"/sing-in"});var e=this.props,t=e.tasks,a=e.user,n=e.match,s=e.location,i=n.url,o=a.userId,c=function(e){if(!e)return"";var t=new URL(e);if(t.searchParams.has("q")){var a=t.searchParams.get("q");return decodeURIComponent(a)}}("".concat(window.location.origin).concat(s.search)),l=this.state,u=l.pageCurrentPagination,m=l.itemsTasks,d=l.pagesCount,h=t.length?t.slice((u-1)*m,u*m):t;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ae,{url:i}),this.state.loading?r.a.createElement(de,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(P,{textSearch:c}),r.a.createElement(ue,{tasks:h,title:v(i,c),userId:o,handleClickExecuteTask:this._handleClickExecuteTask}),t.length>m?r.a.createElement(me,{pagesCount:d,pageCurrentPagination:u,handleClickChangePagePagination:this._handleClickChangePagePagination}):null))}},{key:"_getData",value:function(e){var t=this;this.setState({loading:!0,pageCurrentPagination:this.initialState.pageCurrentPagination}),e().then((function(e){if("error"===e.msgsType)return t.props.getTasksDispatch([]),!0;t.props.getTasksDispatch(e);var a=e.length;t.setState((function(e){var t=e.itemsTasks;return{pagesCount:Math.ceil(a/t)}}))})).catch((function(e){console.error(e),ee(te.ERROR,e,"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445.")})).finally((function(){t.setState({loading:!1})}))}},{key:"_getFuncData",value:function(e){switch(e){case"/my-tasks-done":return U;case"/designated-tasks":return W;case"/designated-tasks-done":return K;default:return q}}},{key:"_handleClickExecuteTask",value:function(e){var t=this,a=e.target.dataset.idTask,n=e.target.dataset.title;window.confirm("\u0412\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443 - ".concat(n,"?"))&&B(a).then((function(e){if(ee(e.msgsType,"",e.textMsgs),"success"===e.msgsType){var n=function(e,t){var a=Object(d.a)(e),n=a.findIndex((function(e){return Number(e.task_id)===Number(t)}));return-1!==n&&a.splice(n,1),a}(t.props.tasks,a);t.props.getTasksDispatch(n)}})).catch((function(e){console.error(e),ee(te.ERROR,e,"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430.")}))}},{key:"_handleClickChangePagePagination",value:function(e){e.preventDefault(),this.setState({pageCurrentPagination:+e.target.dataset.pageIdPag})}},{key:"_getSearchData",value:function(e){var t,a=this;(t=e,X("get-result-search.php?search-field=".concat(t))).then((function(e){if("warning"===e.msgsType)return a.props.getTasksDispatch([]),a.setState({pageCurrentPagination:a.initialState.pageCurrentPagination}),!0;a.props.getTasksDispatch(e);var t=e.length;a.setState((function(e){var a=e.itemsTasks;return{pagesCount:Math.ceil(t/a)}}))})).catch((function(e){console.error(e),ee(te.ERROR,e,"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445.")})).finally((function(){a.setState({loading:!1})}))}}]),t}(n.Component),pe=Object(c.b)((function(e){return{user:e.user,tasks:e.tasks}}),(function(e){return{getTasksDispatch:function(t){e({type:"GET_TASKS",payload:t})}}}))(Object(R.g)(_e)),ge=(a(25),Object.freeze({MIN_LENGTH_LOGIN:2,MAX_LENGTH_LOGIN:20,MIN_LENGTH_PASSWORD:6,MAX_LENGTH_PASSWORD:20,MIN_LENGTH_TEXT:2,MAX_LENGTH_TEXT:20})),fe=Object.freeze({MIN_LENGTH_TEXT:2,MAX_LENGTH_TEXT_TITLE:255,MAX_LENGTH_TEXT_DESK:255}),Ee=(Object.freeze({REDIRECTION_SIGN_IN_TIME:3e3,REDIRECTION_TASKS_TIME:3e3}),function(e){function t(e){var a;return Object(w.a)(this,t),(a=Object(O.a)(this,Object(x.a)(t).call(this,e)))._validateForm=function(e){var t=e.login,a=e.password,n=_(t,ge.MIN_LENGTH_LOGIN,ge.MAX_LENGTH_LOGIN),r=_(a,ge.MIN_LENGTH_PASSWORD,ge.MAX_LENGTH_PASSWORD);return n&&r},a._handleLoginChange=function(e){var t=e.target.value;a.setState((function(e){return{login:t,validForm:a._validateForm(Object.assign({},e,{login:t}))}}))},a._handlePasswordChange=function(e){var t=e.target.value;a.setState((function(e){return{password:t,validForm:a._validateForm(Object.assign({},e,{password:t}))}}))},a._handleSubmitForm=function(e){e.preventDefault();var t=new FormData(e.target);t.append("signin","ajax"),J(t).then((function(e){if(ee(e.msgsType,"",e.textMsgs),"success"===e.msgsType&&(a.setState(a.initialState),N())){var t=g("userInfo").split(";"),n=F({name:t[0],surname:t[1],patronymic:t[2],userId:Number(t[3])});a.props.getUserInfoToProps(n),a.props.history.push("/")}})).catch((function(e){console.error(e),ee(te.ERROR,e,"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430.")}))},a.initialState={login:"",password:"",validForm:!1},a.state=a.initialState,a}return Object(L.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this._handleSubmitForm,className:"form form_center form_auth",method:"post"},r.a.createElement("h3",{className:"form__title"},"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"),r.a.createElement("div",{className:"form__row form__row_content-column"},r.a.createElement("label",{htmlFor:"login"},"\u0412\u0430\u0448 \u043b\u043e\u0433\u0438\u043d:"),r.a.createElement("input",{value:this.state.login,onChange:this._handleLoginChange,className:"form__input input",id:"login",type:"text",name:"login",minLength:ge.MIN_LENGTH_LOGIN,maxLength:ge.MAX_LENGTH_LOGIN,required:"required"})),r.a.createElement("div",{className:"form__row form__row_content-column"},r.a.createElement("label",{htmlFor:"password"},"\u041f\u0430\u0440\u043e\u043b\u044c:"),r.a.createElement("input",{value:this.state.password,onChange:this._handlePasswordChange,className:"form__input input",id:"password",type:"password",name:"password",minLength:ge.MIN_LENGTH_PASSWORD,maxLength:ge.MAX_LENGTH_PASSWORD,required:"required"})),r.a.createElement("div",{className:"form__row form__row_content-column"},r.a.createElement("button",{className:"form__button submit",disabled:!this.state.validForm,type:"submit"},"\u0412\u043e\u0439\u0442\u0438")),r.a.createElement("div",{className:"form__row form__row_text-center"},r.a.createElement(I.b,{to:"/sing-up",className:"form__link-signup link"},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f")))}}]),t}(n.Component)),ve=Object(R.g)(Object(c.b)(null,(function(e){return{getUserInfoToProps:function(t){return e(t)}}}))(Ee)),ke=function(){return N()?r.a.createElement(R.a,{to:"/"}):r.a.createElement(ve,null)},Ne=function(e){function t(e){var a;return Object(w.a)(this,t),(a=Object(O.a)(this,Object(x.a)(t).call(this,e)))._validateForm=function(e){var t=e.login,a=e.password,n=e.password2,r=e.name,s=e.surname,i=e.patronymic,o=_(t,ge.MIN_LENGTH_LOGIN,ge.MAX_LENGTH_LOGIN),c=_(a,ge.MIN_LENGTH_PASSWORD,ge.MAX_LENGTH_PASSWORD),l=_(n,ge.MIN_LENGTH_PASSWORD,ge.MAX_LENGTH_PASSWORD),u=a===n,m=_(r,ge.MIN_LENGTH_TEXT,ge.MAX_LENGTH_TEXT),d=_(s,ge.MIN_LENGTH_TEXT,ge.MAX_LENGTH_TEXT),h=_(i,ge.MIN_LENGTH_TEXT,ge.MAX_LENGTH_TEXT);return o&&c&&l&&u&&m&&d&&h},a._handleLoginChange=function(e){var t=e.target.value;a.setState((function(e){return{login:t,validForm:a._validateForm(Object.assign({},e,{login:t}))}}))},a._handlePasswordChange=function(e){var t=e.target.value;a.setState((function(e){return{password:t,validForm:a._validateForm(Object.assign({},e,{password:t}))}}))},a._handlePassword2Change=function(e){var t=e.target.value;a.setState((function(e){return{password2:t,validForm:a._validateForm(Object.assign({},e,{password2:t}))}}))},a._handleNameChange=function(e){var t=e.target.value;a.setState((function(e){return{name:t,validForm:a._validateForm(Object.assign({},e,{name:t}))}}))},a._handleSurnameChange=function(e){var t=e.target.value;a.setState((function(e){return{surname:t,validForm:a._validateForm(Object.assign({},e,{surname:t}))}}))},a.handlePatronymicChange=function(e){var t=e.target.value;a.setState((function(e){return{patronymic:t,validForm:a._validateForm(Object.assign({},e,{patronymic:t}))}}))},a._handleSubmitForm=function(e){e.preventDefault();var t=new FormData(e.target);t.append("signup","ajax"),$(t).then((function(e){if(ee(e.msgsType,"",e.textMsgs),"success"===e.msgsType)return a.setState(a.initialState),!0})).catch((function(e){console.error(e),ee(te.ERROR,e,"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430.")}))},a._onBlurInput=function(){var e=a.state,t=e.password,n=e.password2;t.length>=ge.MIN_LENGTH_PASSWORD&&t!==n&&ee(te.WARNING,'\u0412 \u043f\u043e\u043b\u0435 "\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c", \u043f\u0430\u0440\u043e\u043b\u044c \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0435\u0442 \u0441 \u043f\u043e\u043b\u0435\u043c "\u041f\u0430\u0440\u043e\u043b\u044c"!')},a.initialState={login:"",password:"",password2:"",name:"",surname:"",patronymic:"",validForm:!1},a.state=a.initialState,a}return Object(L.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this._handleSubmitForm,className:"form form_center form_reg",method:"post"},r.a.createElement("h3",{className:"form__title"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u043d\u043e\u0432\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"),r.a.createElement("div",{className:"form__row form__row_content-column"},r.a.createElement("label",{htmlFor:"login"},"\u0412\u0430\u0448 \u043b\u043e\u0433\u0438\u043d:"),r.a.createElement("input",{value:this.state.login,onChange:this._handleLoginChange,className:"form__input input",id:"login",type:"text",name:"login",minLength:ge.MIN_LENGTH_LOGIN,maxLength:ge.MAX_LENGTH_LOGIN,required:"required"})),r.a.createElement("div",{className:"form__row form__row_content-column"},r.a.createElement("label",{htmlFor:"password"},"\u041f\u0430\u0440\u043e\u043b\u044c:"),r.a.createElement("input",{value:this.state.password,onChange:this._handlePasswordChange,className:"form__input input",id:"password",type:"password",name:"password",minLength:ge.MIN_LENGTH_PASSWORD,maxLength:ge.MAX_LENGTH_PASSWORD,required:"required"})),r.a.createElement("div",{className:"form__row form__row_content-column"},r.a.createElement("label",{htmlFor:"password2"},"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c:"),r.a.createElement("input",{value:this.state.password2,onChange:this._handlePassword2Change,onBlur:this._onBlurInput,className:"form__input input",id:"password2",type:"password",name:"password2",minLength:ge.MIN_LENGTH_PASSWORD,maxLength:ge.MAX_LENGTH_PASSWORD,required:"required"})),r.a.createElement("div",{className:"form__row form__row_content-column"},r.a.createElement("label",{htmlFor:"name"},"\u0418\u043c\u044f:"),r.a.createElement("input",{value:this.state.name,onChange:this._handleNameChange,className:"form__input input",id:"name",type:"text",name:"name",minLength:ge.MIN_LENGTH_TEXT,maxLength:ge.MAX_LENGTH_TEXT,required:"required"})),r.a.createElement("div",{className:"form__row form__row_content-column"},r.a.createElement("label",{htmlFor:"surname"},"\u0424\u0430\u043c\u0438\u043b\u0438\u044f:"),r.a.createElement("input",{value:this.state.surname,onChange:this._handleSurnameChange,className:"form__input input",id:"surname",type:"text",name:"surname",minLength:ge.MIN_LENGTH_TEXT,maxLength:ge.MAX_LENGTH_TEXT,required:"required"})),r.a.createElement("div",{className:"form__row form__row_content-column"},r.a.createElement("label",{htmlFor:"patronymic"},"\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e:"),r.a.createElement("input",{value:this.state.patronymic,onChange:this.handlePatronymicChange,className:"form__input input",id:"patronymic",type:"text",name:"patronymic",minLength:ge.MIN_LENGTH_TEXT,maxLength:ge.MAX_LENGTH_TEXT,required:"required"})),r.a.createElement("div",{className:"form__row form__row_content-column"},r.a.createElement("button",{disabled:!this.state.validForm,className:"form__button submit",type:"submit"},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f")),r.a.createElement("div",{className:"form__row form__row_text-center"},r.a.createElement(I.b,{to:"/sing-in",className:"form__link-signup link"},"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f")))}}]),t}(n.Component),Te=function(){return N()?r.a.createElement(R.a,{to:"/"}):r.a.createElement(Ne,null)},be=a(39),Se=a.n(be),Ce={locale:a(40).Russian,defaultDate:"today",mode:"range",dateFormat:"d.m.Y",minDate:"today",weekNumbers:!0,wrap:!0},we=function(){V.clear(),V.setDate(+new Date,!0,Ce.dateFormat)},ye=a(41),Oe=a.n(ye),xe=(a(81),{removePlugins:["ImageUpload"],toolbar:["Heading","bold","italic","|","Link","bulletedList","numberedList","blockQuote","MediaEmbed","Undo","Redo"],language:"ru",mediaEmbed:{previewsInData:!0}}),Le=function(){Z.setData("")},De=function(e){function t(e){var a;return Object(w.a)(this,t),(a=Object(O.a)(this,Object(x.a)(t).call(this,e)))._validateForm=function(e){var t=e.selectedDates,a=e.valueSelect,n=e.titleTask,r=e.descTask,s="disabled"!==a,i=_(n,fe.MIN_LENGTH_TEXT,fe.MAX_LENGTH_TEXT_TITLE),o=_(r,fe.MIN_LENGTH_TEXT,fe.MAX_LENGTH_TEXT_DESK);return t&&s&&i&&o},a._handleDatesChange=function(e){var t=e.target.value;a.setState((function(e){return{selectedDates:t,validForm:a._validateForm(Object.assign(e,{selectedDates:t}))}}))},a._handleDateNoLimitChange=function(){a.setState((function(e){return{isCheckedDateNoLimit:!e.isCheckedDateNoLimit}}))},a._handleTitleTaskChange=function(e){var t=e.target.value;a.setState((function(e){return{titleTask:t,validForm:a._validateForm(Object.assign(e,{titleTask:t}))}}))},a._handleDescTaskChange=function(e){a.setState((function(t){return{descTask:e,validForm:a._validateForm(Object.assign(t,{descTask:e}))}}))},a._handleSelectChange=function(e){var t=e.target.value;a.setState((function(e){return{valueSelect:t,validForm:a._validateForm(Object.assign(e,{valueSelect:t}))}}))},a.handleSubmitForm=function(e){e.preventDefault();var t=new FormData(e.target);t.append("add-task","ajax"),z(t).then((function(e){ee(e.msgsType,"",e.textMsgs),"success"===e.msgsType&&(a.setState({isCheckedDateNoLimit:!1,valueSelect:"disabled",titleTask:"",validForm:!1}),Le(),we())})).catch((function(e){console.error(e),ee(te.ERROR,e,"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430.")}))},a.initialState={selectedDates:"",isCheckedDateNoLimit:!1,valueSelect:"disabled",titleTask:"",descTask:"",validForm:!1},a.state=a.initialState,a.inputDatesRef=r.a.createRef(),a.textareaRef=r.a.createRef(),a}return Object(L.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){var e,t=this;e=this.inputDatesRef.current,(V=Se()(e,Ce)).setDate(+new Date,!0,Ce.dateFormat),function(e,t){Oe.a.create(e,xe).then((function(e){(Z=e).model.document.on("change:data",(function(){var e=Z.getData();t(e)}))})).catch((function(e){console.error(e)}))}(this.textareaRef.current,this._handleDescTaskChange),X("get-all-users.php?all-users=ajax").then((function(e){"error"!==e.msgsType?t.props.getAllUsersDispatch(e):t.props.getAllUsersDispatch([])})).catch((function(e){console.error(e),ee(te.ERROR,e,"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445.")}))}},{key:"componentWillUnmount",value:function(){Z.destroy().catch((function(e){console.log(e)})),V.destroy()}},{key:"render",value:function(){var e=this.props.user.userId;return r.a.createElement("form",{onSubmit:this.handleSubmitForm,className:"form form_task-add",action:"",method:"post"},r.a.createElement("div",{className:"form__row form__row_label-group-two"},r.a.createElement("label",{htmlFor:"date"},"\u0414\u0430\u0442\u0430 \u043d\u0430\u0447\u0430\u043b\u0430 \u0438 \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f \u0437\u0430\u0434\u0430\u0447\u0438"),r.a.createElement("div",{ref:this.inputDatesRef,className:"flatpickr"},r.a.createElement("input",{className:"form__date input",onInput:this._handleDatesChange,id:"date",type:"text",name:"date",placeholder:"\u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u0438\u043b\u0438 \u0434\u0430\u0442\u044b","data-input":"data-input",required:"required"}),r.a.createElement("button",{type:"button",title:"\u041e\u0442\u043a\u0440\u044b\u0442/\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u044c","data-toggle":""},"\u043a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u044c"),r.a.createElement("button",{type:"button",title:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u044c","data-clear":""},"\u043e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"))),r.a.createElement("div",{className:"form__row"},r.a.createElement("input",{className:"form__checkbox",onChange:this._handleDateNoLimitChange,checked:this.state.isCheckedDateNoLimit,type:"checkbox",name:"date-no-limit",id:"date-no-limit"}),r.a.createElement("label",{htmlFor:"date-no-limit"},"\u0411\u0435\u0437 \u0434\u0430\u0442\u044b \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f (\u0434\u0430\u0442\u0430 \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u0430\u044f \u0432\u044b\u0448\u0435, \u0431\u0443\u0434\u0435\u0442 \u0438\u0433\u043d\u043e\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u0430)")),r.a.createElement("div",{className:"form__row form__row_content-column"},r.a.createElement("span",null,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044f"),r.a.createElement("select",{value:this.state.valueSelect,onChange:this._handleSelectChange,className:"form__select",name:"executor",required:"required"},r.a.createElement("option",{value:"disabled",disabled:"disabled"},"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e"),this.props.users.map((function(t){return r.a.createElement("option",{value:t.user_id,key:t.user_id}," ",e===Number(t.user_id)?"\u042f":"".concat(t.user_surname," ").concat(t.user_name," ").concat(t.user_patronymic)," ")})))),r.a.createElement("div",{className:"form__row form__row_content-column"},r.a.createElement("label",null,"\u0417\u0430\u0433\u0430\u043b\u043e\u0432\u043e\u043a \u0437\u0430\u0434\u0430\u0447\u0438"),r.a.createElement("textarea",{value:this.state.titleTask,onChange:this._handleTitleTaskChange,className:"form__title-add textarea",name:"title",maxLength:"255",placeholder:"\u0441\u0434\u0435\u043b\u0430\u0442\u044c ...",required:"required"})),r.a.createElement("div",{className:"form__row form__row_content-column"},r.a.createElement("label",null,"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043f\u043e \u0437\u0430\u0434\u0430\u0447\u0435"),r.a.createElement("textarea",{className:"textarea",ref:this.textareaRef,value:this.state.descTask,onChange:this._handleDescTaskChange,id:"textarea-text",name:"text",maxLength:"1000",placeholder:"\u041e\u0431\u044c\u044f\u0441\u043d\u0435\u043d\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438 ...",required:"required"})),r.a.createElement("div",{className:"form__row form__row_text-center"},r.a.createElement("button",{disabled:!this.state.validForm,className:"form__submit submit",type:"submit"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443"),r.a.createElement(I.b,{className:"form__link link",to:"/"},"\u041a \u0441\u043f\u0438\u0441\u043a\u0443 \u043c\u043e\u0438\u0445 \u0437\u0430\u0434\u0430\u0447")))}}]),t}(n.Component),je=Object(c.b)((function(e){return{user:e.user,users:e.users}}),(function(e){return{getAllUsersDispatch:function(t){e({type:"GET_ALL_USERS",payload:t})}}}))(De),Ie=function(){return N()?r.a.createElement(je,null):r.a.createElement(R.a,{to:"/sing-in"})},Re=!1,Fe=!0,Me=function(e){function t(e){var a;return Object(w.a)(this,t),(a=Object(O.a)(this,Object(x.a)(t).call(this,e))).initialState={loading:!0},a.state=a.initialState,a._handleClickExecuteTask=a._handleClickExecuteTask.bind(Object(M.a)(a)),a}return Object(L.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){var e=this;(function(e){return X("get-task.php?task=ajax&id=".concat(e))})(this.props.idTask).then((function(t){"error"===t.msgsType&&e.props.fetchTaskDispatch(null),e.props.fetchTaskDispatch(t)})).catch((function(e){console.error(e),ee(te.ERROR,e,"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445.")})).finally((function(){e.setState({loading:!1})}))}},{key:"render",value:function(){if(!N())return r.a.createElement(R.a,{to:"/sing-in"});var e=this.props,t=e.user,a=e.handleClickExit,n=e.url,s=e.task,i=t.userId;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ae,{handleClickExit:a,user:t,url:n}),this.state.loading?r.a.createElement(de,null):s?r.a.createElement(ie,{isMore:Re,isShowDesc:Fe,task:s,userId:i,handleClickExecuteTask:this._handleClickExecuteTask}):r.a.createElement("p",null,"\u0422\u0430\u043a\u0430\u044f \u0437\u0430\u0434\u0430\u0447\u0430 \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442!"))}},{key:"_handleClickExecuteTask",value:function(e){var t=this,a=e.target.dataset.idTask,n=e.target.dataset.title;window.confirm("\u0412\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443 - ".concat(n,"?"))&&B(a).then((function(e){ee(e.msgsType,"",e.textMsgs),"success"===e.msgsType&&t.props.executeTaskDispatch(t.props.task)})).catch((function(e){console.error(e),ee(te.ERROR,e,"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430.")}))}}]),t}(n.Component),Ge=Object(c.b)((function(e){return{user:e.user,task:e.task}}),(function(e){return{fetchTaskDispatch:function(t){e({type:"FETCH_TASK",payload:t})},executeTaskDispatch:function(t){e({type:"EXECUTE_TASK",payload:t})}}}))(Me),Pe=(a(82),a(83),function(e){function t(e){var a;return Object(w.a)(this,t),(a=Object(O.a)(this,Object(x.a)(t).call(this,e))).initialState={textSearch:""},a.state=a.initialState,a}return Object(L.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){if(N()){var e=g("userInfo").split(";"),t=F({name:e[0],surname:e[1],patronymic:e[2],userId:Number(e[3])});this.props.getUserInfoDispatch(t)}}},{key:"render",value:function(){return r.a.createElement(I.a,{basename:"/react/"},r.a.createElement("main",{className:"bg main"},r.a.createElement(D,null,r.a.createElement(R.d,null,r.a.createElement(R.b,{path:"/",exact:!0},r.a.createElement(pe,null)),r.a.createElement(R.b,{path:"/search"},r.a.createElement(pe,null)),r.a.createElement(R.b,{path:"/my-tasks-done"},r.a.createElement(pe,null)),r.a.createElement(R.b,{path:"/designated-tasks"},r.a.createElement(pe,null)),r.a.createElement(R.b,{path:"/designated-tasks-done"},r.a.createElement(pe,null)),r.a.createElement(R.b,{path:"/sing-up"},r.a.createElement(Te,null)),r.a.createElement(R.b,{path:"/sing-in"},r.a.createElement(ke,null)),r.a.createElement(R.b,{path:"/add-task"},r.a.createElement(Ie,null)),r.a.createElement(R.b,{path:"/task/:id",render:function(e){var t=e.match,a=t.params.id;return r.a.createElement(Ge,{url:t.url,idTask:a})}}),r.a.createElement(R.b,null,r.a.createElement("h1",null,"\u0422\u0430\u043a\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u043d\u0435\u0442\u0443!"))))),r.a.createElement(j,null))}}]),t}(n.Component)),Ae=Object(c.b)(null,(function(e){return{getUserInfoDispatch:function(t){e(t)}}}))(Pe);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var He=Object(o.a)(l.a),Xe=Object(o.d)(He),qe=Object(o.e)(C,void 0,Xe);i.a.render(r.a.createElement(c.a,{store:qe},r.a.createElement(Ae,null)),document.querySelector(".root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[43,1,2]]]);
//# sourceMappingURL=main.e8973654.chunk.js.map