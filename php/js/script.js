!function(e){function t(t){for(var r,s,i=t[0],u=t[1],c=t[2],d=0,f=[];d<i.length;d++)s=i[d],o[s]&&f.push(o[s][0]),o[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(l&&l(t);f.length;)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={0:0},a=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var i=window.webpackJsonp=window.webpackJsonp||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var l=u;a.push([7,1]),n()}({7:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=(n(4),n(0)),s=n.n(a);s.a.options={closeButton:!1,debug:!1,newestOnTop:!1,progressBar:!0,positionClass:"toast-top-center",preventDuplicates:!1,onclick:null,showDuration:"300",hideDuration:"1000",timeOut:"5000",extendedTimeOut:"1000",showEasing:"swing",hideEasing:"linear",showMethod:"fadeIn",hideMethod:"fadeOut"};var i,u,c,l=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";n?s.a[e](t,n):s.a[e](t)},d="warning",f="error",p=document.querySelector(".form_task-add"),m={removePlugins:["ImageUpload"],toolbar:["Heading","bold","italic","|","Link","bulletedList","numberedList","blockQuote","MediaEmbed","Undo","Redo"],language:"ru",mediaEmbed:{previewsInData:!0}};p&&(u=p.querySelector("#textarea-text"),c=p.querySelector('[type="submit"]'),o.a.create(u,m).then(function(e){return(i=e).model.document.on("change:data",function(){var e=i.getData();u.innerHTML=e;var t=u.textLength>1e3;c.toggleAttribute("disabled",t),t&&l(d,"В редакторе превышен лимит в ".concat(1e3," символов!"))}),!0}).catch(function(e){console.error(e)}));var y,h=n(2),g=n.n(h),v=n(3),b=document.body.querySelector(".flatpickr"),x={locale:v.Russian,defaultDate:"today",mode:"range",dateFormat:"d.m.Y",minDate:"today",weekNumbers:!0,wrap:!0};b&&(y=g()(b,x)).config.onOpen.push(function(){y.redraw()});var w=200,T=3e3,S=document.body.querySelector(".form_task-add");S&&(S.addEventListener("submit",function(e){e.preventDefault();var t=S.querySelector(".form__submit"),n=new FormData(S),r=!0;null===n.get("executor")&&(r=!1);var o=!0,a=!1,s=void 0;try{for(var u,c=n.entries()[Symbol.iterator]();!(o=(u=c.next()).done);o=!0)""===u.value[1]&&(r=!1)}catch(e){a=!0,s=e}finally{try{o||null==c.return||c.return()}finally{if(a)throw s}}r?(n.append("add-task","ajax"),t.setAttribute("disabled","disabled"),fetch("/ajax/add-task.php",{method:"POST",body:n}).then(function(e){if(e.ok&&e.status===w)return e.json();throw new Error("Не удалось отправить данные!")}).then(function(e){return"success"===e.msgsType?(l(e.msgsType,e.textMsgs),S.reset(),i.setData(""),y.clear(),y.setDate(+new Date,!0,x.dateFormat)):"error"===e.msgsType&&l(e.msgsType,e.textMsgs),!1}).finally(function(){setTimeout(function(){t.removeAttribute("disabled")},T)}).catch(function(e){l(f,e)})):l(d,"Заполните всю форму!","Внимание!")}),S.querySelector('[name="text"]').removeAttribute("required"));var k=document.querySelector(".task"),_=document.querySelector(".tasks"),j=_||k;j&&j.addEventListener("click",function(e){var t=e.target;if("A"===t.tagName&&t.closest(".task__execute")){e.preventDefault();var n=t.closest(".task").querySelector(".task__title").textContent;if(confirm("Вы хотите выполнить задачу - ".concat(n,"?"))){var r=new URL(t.href);r.searchParams.append("execute-task","ajax"),fetch("/ajax/execute-task.php"+r.search,{cache:"no-store"}).then(function(e){if(e.ok&&e.status===w)return e.json();throw new Error("Не удалось отправить данные!")}).then(function(e){if("success"===e.msgsType){if(l(e.msgsType,e.textMsgs),_){var n=t.closest(".tasks__item"),r=_.querySelector(".tasks__lists"),o=document.querySelector(".pagination-list");n.parentElement.removeChild(n)}0===r.childElementCount&&_&&!o&&(_.removeChild(r),_.insertAdjacentHTML("beforeend","<div>Нет никаких задач</div>"))}else"error"===e.msgsType&&l(e.msgsType,e.textMsgs);return!1}).catch(function(e){l(f,e)})}}});var M=document.querySelector(".user-menu__logout");M&&(M.addEventListener("click",function(e){e.preventDefault();confirm("Вы действительно хотите выйти?")&&fetch("/ajax/logout.php?logout=ajax&action=exit",{cache:"no-store"}).then(function(e){if(e.ok&&e.status===w)return e.json();throw new Error("Не удалось выйти! Проверьте ваше соединение.")}).then(function(e){return"success"===e.msgsType?(l(e.msgsType,e.textMsgs),setTimeout(function(){location="/signin.php"},T)):"error"===e.msgsType&&l(e.msgsType,e.textMsgs),!1}).catch(function(e){l(f,e)})}),M.removeAttribute("href"),M.setAttribute("tabindex","0"));var q=document.body.querySelector(".form_auth");q&&q.addEventListener("submit",function(e){e.preventDefault();var t=q.querySelector(".form__button"),n=new FormData(q),r=!0,o=!0,a=!1,s=void 0;try{for(var i,u=n.entries()[Symbol.iterator]();!(o=(i=u.next()).done);o=!0)""===i.value[1]&&(r=!1)}catch(e){a=!0,s=e}finally{try{o||null==u.return||u.return()}finally{if(a)throw s}}r?(n.append("signin","ajax"),t.setAttribute("disabled","disabled"),fetch("/ajax/signin.php",{method:"POST",body:n}).then(function(e){if(e.ok&&e.status===w)return e.json();throw new Error("Не удалось отправить данные!")}).then(function(e){return"success"===e.msgsType?(l(e.msgsType,e.textMsgs),setTimeout(function(){location="/index.php"},T)):"error"===e.msgsType&&l(e.msgsType,e.textMsgs),!1}).finally(function(){setTimeout(function(){t.removeAttribute("disabled")},T)}).catch(function(e){l(f,e)})):l(d,"Заполните всю форму!","Внимание!")});var D=document.body.querySelector(".form_reg");D&&D.addEventListener("submit",function(e){e.preventDefault();var t=D.querySelector(".form__button"),n=new FormData(D),r=!0,o=!0,a=!1,s=void 0;try{for(var i,u=n.entries()[Symbol.iterator]();!(o=(i=u.next()).done);o=!0){var c=i.value;console.log(c),""===c[1]&&(r=!1)}}catch(e){a=!0,s=e}finally{try{o||null==u.return||u.return()}finally{if(a)throw s}}r?(n.append("signup","ajax"),t.setAttribute("disabled","disabled"),fetch("/ajax/signup.php",{method:"POST",body:n}).then(function(e){if(e.ok&&e.status===w)return e.json();throw new Error("Не удалось отправить данные!")}).then(function(e){return"success"===e.msgsType?(l(e.msgsType,e.textMsgs),setTimeout(function(){location="/signin.php"},T)):"error"===e.msgsType&&l(e.msgsType,e.textMsgs),!1}).finally(function(){setTimeout(function(){t.removeAttribute("disabled")},T)}).catch(function(e){l(f,e)})):l(d,"Заполните всю форму!","Внимание!")})}});
//# sourceMappingURL=script.js.map