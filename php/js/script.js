!function(e){function t(t){for(var r,u,i=t[0],s=t[1],c=t[2],d=0,f=[];d<i.length;d++)u=i[d],o[u]&&f.push(o[u][0]),o[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(l&&l(t);f.length;)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={0:0},a=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var i=window.webpackJsonp=window.webpackJsonp||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var l=s;a.push([9,1]),n()}({7:function(e,t){var n=document.querySelector(".tasks");n&&n.addEventListener("click",function(e){var t=e.target;if("A"===t.tagName&&t.closest(".task__execute")){var n=t.closest(".task").querySelector(".task__title").innerText;confirm("Вы хотите выполнить задачу - ".concat(n,"?"))||e.preventDefault()}})},8:function(e,t){var n=document.querySelector(".user-menu__logout");n&&n.addEventListener("click",function(e){confirm("Вы действительно хотите выйти?")||e.preventDefault()})},9:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=(n(4),n(0)),u=n.n(a);u.a.options={closeButton:!1,debug:!1,newestOnTop:!1,progressBar:!0,positionClass:"toast-top-center",preventDuplicates:!1,onclick:null,showDuration:"300",hideDuration:"1000",timeOut:"5000",extendedTimeOut:"1000",showEasing:"swing",hideEasing:"linear",showMethod:"fadeIn",hideMethod:"fadeOut"};var i,s,c,l=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";n?u.a[e](t,n):u.a[e](t)},d="warning",f="error",p=document.querySelector(".form_task-add"),m={removePlugins:["ImageUpload"],toolbar:["Heading","bold","italic","|","Link","bulletedList","numberedList","blockQuote","MediaEmbed","Undo","Redo"],language:"ru",mediaEmbed:{previewsInData:!0}};p&&(s=p.querySelector("#textarea-text"),c=p.querySelector('[type="submit"]'),o.a.create(s,m).then(function(e){return(i=e).model.document.on("change:data",function(){var e=i.getData();s.innerHTML=e;var t=s.textLength>1e3;c.toggleAttribute("disabled",t),t&&l(d,"В редакторе превышен лимит в ".concat(1e3," символов!"))}),!0}).catch(function(e){console.error(e)}));var y,b=n(2),v=n.n(b),g=n(3),h=document.body.querySelector(".flatpickr"),w={locale:g.Russian,defaultDate:"today",mode:"range",dateFormat:"d.m.Y",minDate:"today",weekNumbers:!0,wrap:!0};h&&(y=v()(h,w)).config.onOpen.push(function(){y.redraw()});var x=200,T=3e3,S=document.body.querySelector(".form_task-add");S&&(S.addEventListener("submit",function(e){e.preventDefault();var t=S.querySelector(".form__submit"),n=new FormData(S),r=!0;null===n.get("executor")&&(r=!1);var o=!0,a=!1,u=void 0;try{for(var s,c=n.entries()[Symbol.iterator]();!(o=(s=c.next()).done);o=!0)""===s.value[1]&&(r=!1)}catch(e){a=!0,u=e}finally{try{o||null==c.return||c.return()}finally{if(a)throw u}}r?(n.append("add-task","ajax"),t.setAttribute("disabled","disabled"),fetch("/ajax/add-task.php",{method:"POST",body:n}).then(function(e){if(e.ok&&e.status===x)return e.json();throw new Error("Не удалось отправить данные!")}).then(function(e){return"success"===e.msgsType?(l(e.msgsType,e.textMsgs),S.reset(),i.setData(""),y.clear(),y.setDate(+new Date,!0,w.dateFormat)):"error"===e.msgsType&&l(e.msgsType,e.textMsgs),!1}).finally(function(){setTimeout(function(){t.removeAttribute("disabled")},T)}).catch(function(e){l(f,e)})):l(d,"Заполните всю форму!","Внимание!")}),S.querySelector('[name="text"]').removeAttribute("required"));n(7),n(8);var _=document.body.querySelector(".form_auth");_&&_.addEventListener("submit",function(e){e.preventDefault();var t=_.querySelector(".form__button"),n=new FormData(_),r=!0,o=!0,a=!1,u=void 0;try{for(var i,s=n.entries()[Symbol.iterator]();!(o=(i=s.next()).done);o=!0)""===i.value[1]&&(r=!1)}catch(e){a=!0,u=e}finally{try{o||null==s.return||s.return()}finally{if(a)throw u}}r?(n.append("signin","ajax"),t.setAttribute("disabled","disabled"),fetch("/ajax/signin.php",{method:"POST",body:n}).then(function(e){if(e.ok&&e.status===x)return e.json();throw new Error("Не удалось отправить данные!")}).then(function(e){return"success"===e.msgsType?(l(e.msgsType,e.textMsgs),setTimeout(function(){location="/index.php"},T)):"error"===e.msgsType&&l(e.msgsType,e.textMsgs),!1}).finally(function(){setTimeout(function(){t.removeAttribute("disabled")},T)}).catch(function(e){l(f,e)})):l(d,"Заполните всю форму!","Внимание!")});var k=document.body.querySelector(".form_reg");k&&k.addEventListener("submit",function(e){e.preventDefault();var t=k.querySelector(".form__button"),n=new FormData(k),r=!0,o=!0,a=!1,u=void 0;try{for(var i,s=n.entries()[Symbol.iterator]();!(o=(i=s.next()).done);o=!0){var c=i.value;console.log(c),""===c[1]&&(r=!1)}}catch(e){a=!0,u=e}finally{try{o||null==s.return||s.return()}finally{if(a)throw u}}r?(n.append("signup","ajax"),t.setAttribute("disabled","disabled"),fetch("/ajax/signup.php",{method:"POST",body:n}).then(function(e){if(e.ok&&e.status===x)return e.json();throw new Error("Не удалось отправить данные!")}).then(function(e){return"success"===e.msgsType?(l(e.msgsType,e.textMsgs),setTimeout(function(){location="/signin.php"},T)):"error"===e.msgsType&&l(e.msgsType,e.textMsgs),!1}).finally(function(){setTimeout(function(){t.removeAttribute("disabled")},T)}).catch(function(e){l(f,e)})):l(d,"Заполните всю форму!","Внимание!")})}});
//# sourceMappingURL=script.js.map