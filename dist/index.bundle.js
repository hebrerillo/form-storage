(()=>{"use strict";var e={238:(e,t,r)=>{r.d(t,{A:()=>c});var n=r(601),o=r.n(n),a=r(314),i=r.n(a)()(o());i.push([e.id,"html{box-sizing:border-box;font-size:62.5%}*,*:before,*:after{box-sizing:inherit;padding:0;margin:0px}.form{max-width:40rem;margin:7rem auto 4rem auto;padding:0 1rem}.form fieldset{display:flex;flex-direction:column;row-gap:1.7rem;border:none}.form fieldset legend{margin-bottom:2rem;text-transform:uppercase;font-size:2rem;text-align:center;width:100%}.form__row{display:flex;column-gap:4rem;align-items:center}.form__item-label{font-size:1.4rem}.form__item{display:block;width:100%;min-height:3rem;padding:0 .4rem}.form__block{display:flex;flex-direction:column;row-gap:.5rem;flex-grow:1}.form__block--inline{display:flex;column-gap:.8rem}input[type=radio],input[type=checkbox],label[for]{cursor:pointer}",""]);const c=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);n&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],u=n.base?s[0]+n.base:s[0],l=a[u]||0,d="".concat(u," ").concat(l);a[u]=l+1;var f=r(d),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)t[f].references++,t[f].updater(p);else{var m=o(p,n);n.byIndex=c,t.splice(c,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=r(a[i]);t[c].references--}for(var s=n(e,o),u=0;u<a.length;u++){var l=r(a[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},659:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nc=void 0;var n=r(72),o=r.n(n),a=r(825),i=r.n(a),c=r(659),s=r.n(c),u=r(56),l=r.n(u),d=r(540),f=r.n(d),p=r(113),m=r.n(p),v=r(238),h={};h.styleTagTransform=m(),h.setAttributes=l(),h.insert=s().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=f(),o()(v.A,h),v.A&&v.A.locals&&v.A.locals;var g=function(){function e(e,t){void 0===t&&(t=sessionStorage),this.form=e,this.storage=t,this.retrieveFormFromStorage(),this.initEventListeners()}return e.prototype.initEventListeners=function(){var e;null===(e=this.form)||void 0===e||e.addEventListener("input",this.saveFormToStorage.bind(this))},e.prototype.canBeStored=function(e){var t,r=null==e?void 0:e.getAttribute("name");if(!r||0===r.length||!e)return!1;var n=null!==(t=null==e?void 0:e.type)&&void 0!==t?t:"";if(("radio"===n||"checkbox"===n)&&!e.checked)return!1;switch(n){case"text":case"email":case"checkbox":case"radio":case"hidden":case"date":case"color":case"datetime-local":case"month":case"number":case"range":case"search":case"tel":case"time":case"url":case"week":case"textarea":case"select-one":return!0}return!1},e.prototype.buildFormStorageItem=function(e){if(!this.canBeStored(e))return null;var t=e.getAttribute("type"),r="checkbox"===t||"radio"===t;return{name:e.getAttribute("name"),checked:r,value:e.value}},e.prototype.setInputValueFromStorageItem=function(e,t){e&&t&&(t.checked&&t.value===e.value?e.checked=t.checked:t.checked||(e.value=t.value))},e.prototype.retrieveFormFromStorage=function(){var e,t,r,n,o=null!==(t=null===(e=this.form)||void 0===e?void 0:e.getAttribute("id"))&&void 0!==t?t:"",a={list:[]};try{a.list=JSON.parse(null!==(r=this.storage.getItem(o))&&void 0!==r?r:"")}catch(e){}for(var i=0,c=a.list;i<c.length;i++){var s=c[i],u=null===(n=this.form)||void 0===n?void 0:n.querySelector('[name="'.concat(s.name,'"]'));this.setInputValueFromStorageItem(u,s)}},e.prototype.saveFormToStorage=function(){var e,t,r,n=this,o=null===(e=this.form)||void 0===e?void 0:e.getAttribute("id");if(o&&0!==o.length){var a={list:[]};Array.from(null!==(r=null===(t=this.form)||void 0===t?void 0:t.elements)&&void 0!==r?r:[]).forEach((function(e){var t=e,r=n.buildFormStorageItem(t);r&&a.list.push(r)})),this.storage.setItem(o,JSON.stringify(a.list))}},e}();document.addEventListener("DOMContentLoaded",(function(){new g(document.querySelector("#form_contact"))}))})();