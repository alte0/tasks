!function(e){function t(t){for(var r,s,u=t[0],i=t[1],c=t[2],d=0,f=[];d<u.length;d++)s=u[d],o[s]&&f.push(o[s][0]),o[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(l&&l(t);f.length;)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={0:0},a=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var u=window.webpackJsonp=window.webpackJsonp||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var l=i;a.push([7,1]),n()}({7:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=(n(4),n(0)),s=n.n(a);s.a.options={closeButton:!1,debug:!1,newestOnTop:!1,progressBar:!0,positionClass:"toast-top-center",preventDuplicates:!1,onclick:null,showDuration:"300",hideDuration:"1000",timeOut:"5000",extendedTimeOut:"1000",showEasing:"swing",hideEasing:"linear",showMethod:"fadeIn",hideMethod:"fadeOut"};var u,i,c,l=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";n?s.a[e](t,n):s.a[e](t)},d="warning",f="error",p=document.querySelector(".form_task-add"),m={removePlugins:["ImageUpload"],toolbar:["Heading","bold","italic","|","Link","bulletedList","numberedList","blockQuote","MediaEmbed","Undo","Redo"],language:"ru",mediaEmbed:{previewsInData:!0}};p&&(i=p.querySelector("#textarea-text"),c=p.querySelector('[type="submit"]'),o.a.create(i,m).then(function(e){return(u=e).model.document.on("change:data",function(){var e=u.getData();i.innerHTML=e;var t=i.textLength>1e3;c.toggleAttribute("disabled",t),t&&l(d,"В редакторе превышен лимит в ".concat(1e3," символов!"))}),!0}).catch(function(e){console.error(e)}));var y,h=n(2),g=n.n(h),b=n(3),v=document.body.querySelector(".flatpickr"),x={locale:b.Russian,defaultDate:"today",mode:"range",dateFormat:"d.m.Y",minDate:"today",weekNumbers:!0,wrap:!0};v&&(y=g()(v,x)).config.onOpen.push(function(){y.redraw()});var w=200,T=3e3,S=document.body.querySelector(".form_task-add");S&&(S.addEventListener("submit",function(e){e.preventDefault();var t=S.querySelector(".form__submit"),n=new FormData(S),r=!0;null===n.get("executor")&&(r=!1);var o=!0,a=!1,s=void 0;try{for(var i,c=n.entries()[Symbol.iterator]();!(o=(i=c.next()).done);o=!0)""===i.value[1]&&(r=!1)}catch(e){a=!0,s=e}finally{try{o||null==c.return||c.return()}finally{if(a)throw s}}r?(n.append("add-task","ajax"),t.setAttribute("disabled","disabled"),fetch("/ajax/add-task.php",{method:"POST",body:n}).then(function(e){if(e.ok&&e.status===w)return e.json();throw new Error("Не удалось отправить данные!")}).then(function(e){return"success"===e.msgsType?(l(e.msgsType,e.textMsgs),S.reset(),u.setData(""),y.clear(),y.setDate(+new Date,!0,x.dateFormat)):"error"===e.msgsType&&l(e.msgsType,e.textMsgs),!1}).finally(function(){setTimeout(function(){t.removeAttribute("disabled")},T)}).catch(function(e){l(f,e)})):l(d,"Заполните всю форму!","Внимание!")}),S.querySelector('[name="text"]').removeAttribute("required"));var k=document.querySelector(".task"),_=document.querySelector(".tasks")||k;_&&_.addEventListener("click",function(e){var t=e.target;if("A"===t.tagName&&t.closest(".task__execute")){e.preventDefault();var n=t.closest(".task"),r=n.querySelector(".task__execute"),o=n.querySelector(".task__status"),a=n.querySelector(".task__title").textContent;if(confirm("Вы хотите выполнить задачу - ".concat(a,"?"))){var s=new URL(t.href);s.searchParams.append("execute-task","ajax"),fetch("/ajax/execute-task.php"+s.search,{cache:"no-store"}).then(function(e){if(e.ok&&e.status===w)return e.json();throw new Error("Не удалось отправить данные!")}).then(function(e){return"success"===e.msgsType?(l(e.msgsType,e.textMsgs),r.innerHTML="",o.textContent="Статус: Выполнено!"):"error"===e.msgsType&&l(e.msgsType,e.textMsgs),!1}).catch(function(e){l(f,e)})}}});var j=document.querySelector(".user-menu__logout");j&&(j.addEventListener("click",function(e){e.preventDefault();confirm("Вы действительно хотите выйти?")&&fetch("/ajax/logout.php?logout=ajax&action=exit",{cache:"no-store"}).then(function(e){if(e.ok&&e.status===w)return e.json();throw new Error("Не удалось выйти! Проверьте ваше соединение.")}).then(function(e){return"success"===e.msgsType?(l(e.msgsType,e.textMsgs),setTimeout(function(){location="/signin.php"},T)):"error"===e.msgsType&&l(e.msgsType,e.textMsgs),!1}).catch(function(e){l(f,e)})}),j.removeAttribute("href"),j.setAttribute("tabindex","0"));var M=document.body.querySelector(".form_auth");M&&M.addEventListener("submit",function(e){e.preventDefault();var t=M.querySelector(".form__button"),n=new FormData(M),r=!0,o=!0,a=!1,s=void 0;try{for(var u,i=n.entries()[Symbol.iterator]();!(o=(u=i.next()).done);o=!0)""===u.value[1]&&(r=!1)}catch(e){a=!0,s=e}finally{try{o||null==i.return||i.return()}finally{if(a)throw s}}r?(n.append("signin","ajax"),t.setAttribute("disabled","disabled"),fetch("/ajax/signin.php",{method:"POST",body:n}).then(function(e){if(e.ok&&e.status===w)return e.json();throw new Error("Не удалось отправить данные!")}).then(function(e){return"success"===e.msgsType?(l(e.msgsType,e.textMsgs),setTimeout(function(){location="/index.php"},T)):"error"===e.msgsType&&l(e.msgsType,e.textMsgs),!1}).finally(function(){setTimeout(function(){t.removeAttribute("disabled")},T)}).catch(function(e){l(f,e)})):l(d,"Заполните всю форму!","Внимание!")});var q=document.body.querySelector(".form_reg");q&&q.addEventListener("submit",function(e){e.preventDefault();var t=q.querySelector(".form__button"),n=new FormData(q),r=!0,o=!0,a=!1,s=void 0;try{for(var u,i=n.entries()[Symbol.iterator]();!(o=(u=i.next()).done);o=!0){var c=u.value;console.log(c),""===c[1]&&(r=!1)}}catch(e){a=!0,s=e}finally{try{o||null==i.return||i.return()}finally{if(a)throw s}}r?(n.append("signup","ajax"),t.setAttribute("disabled","disabled"),fetch("/ajax/signup.php",{method:"POST",body:n}).then(function(e){if(e.ok&&e.status===w)return e.json();throw new Error("Не удалось отправить данные!")}).then(function(e){return"success"===e.msgsType?(l(e.msgsType,e.textMsgs),setTimeout(function(){location="/signin.php"},T)):"error"===e.msgsType&&l(e.msgsType,e.textMsgs),!1}).finally(function(){setTimeout(function(){t.removeAttribute("disabled")},T)}).catch(function(e){l(f,e)})):l(d,"Заполните всю форму!","Внимание!")})}});
//# sourceMappingURL=script.js.map