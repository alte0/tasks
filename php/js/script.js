!function(e){function t(t){for(var r,u,i=t[0],c=t[1],l=t[2],d=0,f=[];d<i.length;d++)u=i[d],o[u]&&f.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(s&&s(t);f.length;)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={0:0},a=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var s=c;a.push([8,1]),n()}({8:function(e,t,n){"use strict";n.r(t);var r,o=n(1),a=n.n(o),u=n(2),i=n.n(u),c=(n(5),document.querySelector("#textarea-text")),l={removePlugins:["ImageUpload"],toolbar:["Heading","bold","italic","|","Link","bulletedList","numberedList","blockQuote","MediaEmbed","Undo","Redo"],language:"ru"};c&&(i.a.create(c,l).then(function(e){return r=e,!0}).catch(function(e){console.error(e)}),document.querySelector('[type="submit"]').addEventListener("click",function(){var e=r.getData();c.innerHTML=e}));var s,d=function(){r.setData("")},f=n(3),p=n.n(f),v=n(4),h=document.body.querySelector(".flatpickr"),m={locale:v.Russian,defaultDate:"today",mode:"range",dateFormat:"d.m.Y",minDate:"today",weekNumbers:!0,wrap:!0};h&&(s=p()(h,m)).config.onOpen.push(function(){s.redraw()});var y=function(){s.clear(),s.setDate(+new Date,!0,m.dateFormat)},b=n(0),g=n.n(b);g.a.options={closeButton:!1,debug:!1,newestOnTop:!1,progressBar:!0,positionClass:"toast-top-center",preventDuplicates:!1,onclick:null,showDuration:"300",hideDuration:"1000",timeOut:"4000",extendedTimeOut:"1000",showEasing:"swing",hideEasing:"linear",showMethod:"fadeIn",hideMethod:"fadeOut"};var w=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";n?g.a[e](t,n):g.a[e](t)},O={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error"},S=document.body.querySelector(".form_task-add");S&&S.addEventListener("submit",function(e){e.preventDefault();var t=new FormData(S);t.append("ajax","yes"),t.append("task-add","");var n=S.querySelector(".form__date"),r=S.querySelector(".form__list-users"),o=S.querySelector(".form__title-add"),a=S.querySelector("#textarea-text");""!==n.value&&""!==r.value&&""!==o.value&&""!==a.value?fetch("/ajax/task-add.php",{method:"POST",body:t}).then(function(e){if(e.ok&&200===e.status)return e.json();throw new Error("Не удалось добавить задачу")}).then(function(e){return w(e.msgsType,e.textMsgs[0]),S.reset(),d(),y(),!1}).catch(function(e){w(O.ERROR,e)}):w(O.WARNING,"Заполните все поля!","Внимание!")}),a()()}});
//# sourceMappingURL=script.js.map