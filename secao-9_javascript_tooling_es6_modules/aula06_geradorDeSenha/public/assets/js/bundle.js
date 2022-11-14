!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n,t){var r=t(1);"string"==typeof r&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};t(3)(r,o);r.locals&&(e.exports=r.locals)},function(e,n,t){(n=e.exports=t(2)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap);",""]),n.push([e.i,":root {\n  --primary-color: rgb(17, 86, 102);\n  --primary-color-darker: rgb(9, 48, 56);\n}\n\n* {\n  box-sizing: border-box;\n  outline: 0;\n}\n.container-options .container-flex{\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\nbody {\n  margin: 0;\n  padding: 0;\n  background: var(--primary-color);\n  font-family: 'Open sans', sans-serif;\n  font-size: 1.3em;\n  line-height: 1.5em;\n}\n\n.container {\n  max-width: 640px;\n  margin: 50px auto;\n  background: #fff;\n  padding: 20px;\n  border-radius: 10px;\n}\n\n.container button{\n  padding: 10px;\n}\n\n\n",""])},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(i=r,u=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u),"/*# ".concat(c," */")),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot).concat(e," */")}));return[t].concat(a).concat([o]).join("\n")}var i,u,c;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2],"{").concat(t,"}"):t})).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(var i=0;i<e.length;i++){var u=e[i];null!=u[0]&&r[u[0]]||(t&&!u[2]?u[2]=t:t&&(u[2]="(".concat(u[2],") and (").concat(t,")")),n.push(u))}},n}},function(e,n,t){"use strict";var r,o={},a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}();function u(e,n){for(var t=[],r={},o=0;o<e.length;o++){var a=e[o],i=n.base?a[0]+n.base:a[0],u={css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(u):t.push(r[i]={id:i,parts:[u]})}return t}function c(e,n){for(var t=0;t<e.length;t++){var r=e[t],a=o[r.id],i=0;if(a){for(a.refs++;i<a.parts.length;i++)a.parts[i](r.parts[i]);for(;i<r.parts.length;i++)a.parts.push(v(r.parts[i],n))}else{for(var u=[];i<r.parts.length;i++)u.push(v(r.parts[i],n));o[r.id]={id:r.id,refs:1,parts:u}}}}function s(e){var n=document.createElement("style");if(void 0===e.attributes.nonce){var r=t.nc;r&&(e.attributes.nonce=r)}if(Object.keys(e.attributes).forEach((function(t){n.setAttribute(t,e.attributes[t])})),"function"==typeof e.insert)e.insert(n);else{var o=i(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}return n}var l,f=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function d(e,n,t,r){var o=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=f(n,o);else{var a=document.createTextNode(o),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(a,i[n]):e.appendChild(a)}}function p(e,n,t){var r=t.css,o=t.media,a=t.sourceMap;if(o&&e.setAttribute("media",o),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,m=0;function v(e,n){var t,r,o;if(n.singleton){var a=m++;t=h||(h=s(n)),r=d.bind(null,t,a,!1),o=d.bind(null,t,a,!0)}else t=s(n),r=p.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).attributes="object"==typeof n.attributes?n.attributes:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=a());var t=u(e,n);return c(t,n),function(e){for(var r=[],a=0;a<t.length;a++){var i=t[a],s=o[i.id];s&&(s.refs--,r.push(s))}e&&c(u(e,n),n);for(var l=0;l<r.length;l++){var f=r[l];if(0===f.refs){for(var d=0;d<f.parts.length;d++)f.parts[d]();delete o[f.id]}}}}},function(e,n,t){"use strict";t.r(n);var r={letter:"abcdefghijklmnopqrstuvxwyz",symbols:".,;:?!/*@#$%&()_-=[]{}``~"},o=function(e,n){return Math.floor(Math.random()*(n-e)+e)},a=function(){return r.letter[o(0,26)].toUpperCase()},i=function(){return r.letter[o(0,26)]},u=function(){return o(0,9)},c=function(){return r.symbols[o(0,r.symbols.length)]};var s=document.querySelector("#passwordGenerate"),l=document.querySelector("#input-qtd-characters"),f=document.querySelector("#chk-letter-upperCase"),d=document.querySelector("#chk-letter-lowerCase"),p=document.querySelector("#chk-numbers"),h=document.querySelector("#chk-simbols"),m=document.querySelector("#btn-generates-password");t(0);m.addEventListener("click",(function(){s.innerHTML=function(e,n,t,r,o){var s=[];e=Number(e);for(var l=0;l<e;l++)n&&s.push(a()),t&&s.push(i()),r&&s.push(u()),o&&s.push(c());return s.join("").slice(0,e)}(l.value,f.checked,d.checked,p.checked,h.checked)||"Nada Selecionado"}))}]);
//# sourceMappingURL=bundle.js.map