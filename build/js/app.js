!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){(function(n){var o,r;
/*! smooth-scroll v16.1.3 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,n=(this.document||this.ownerDocument).querySelectorAll(e),o=this;do{for(t=n.length;0<=--t&&n.item(t)!==o;);}while(t<0&&(o=o.parentElement));return o}),function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}"function"!=typeof window.CustomEvent&&(e.prototype=window.Event.prototype,window.CustomEvent=e)}(),function(){for(var e=0,t=["ms","moz","webkit","o"],n=0;n<t.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,n){var o=(new Date).getTime(),r=Math.max(0,16-(o-e)),i=window.setTimeout((function(){t(o+r)}),r);return e=o+r,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}(),r=void 0!==n?n:"undefined"!=typeof window?window:this,void 0===(o=function(){return function(e){"use strict";var t={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},n=function(){var e={};return Array.prototype.forEach.call(arguments,(function(t){for(var n in t){if(!t.hasOwnProperty(n))return;e[n]=t[n]}})),e},o=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,r=-1,i="",a=n.charCodeAt(0);++r<o;){if(0===(t=n.charCodeAt(r)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");i+=1<=t&&t<=31||127==t||0===r&&48<=t&&t<=57||1===r&&48<=t&&t<=57&&45===a?"\\"+t.toString(16)+" ":128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?n.charAt(r):"\\"+n.charAt(r)}return"#"+i},r=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},i=function(t,n,o){0===t&&document.body.focus(),o||(t.focus(),document.activeElement!==t&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,n))},a=function(t,n,o,r){if(n.emitEvents&&"function"==typeof e.CustomEvent){var i=new CustomEvent(t,{bubbles:!0,detail:{anchor:o,toggle:r}});document.dispatchEvent(i)}};return function(c,u){var l,s,d,m,f={cancelScroll:function(e){cancelAnimationFrame(m),m=null,e||a("scrollCancel",l)},animateScroll:function(o,c,u){f.cancelScroll();var s=n(l||t,u||{}),y="[object Number]"===Object.prototype.toString.call(o),p=y||!o.tagName?null:o;if(y||p){var h=e.pageYOffset;s.header&&!d&&(d=document.querySelector(s.header));var g,v,b,S,w,E,A,q,O=function(t){return t?(n=t,parseInt(e.getComputedStyle(n).height,10)+t.offsetTop):0;var n}(d),L=y?o:function(t,n,o,i){var a=0;if(t.offsetParent)for(;a+=t.offsetTop,t=t.offsetParent;);return a=Math.max(a-n-o,0),i&&(a=Math.min(a,r()-e.innerHeight)),a}(p,O,parseInt("function"==typeof s.offset?s.offset(o,c):s.offset,10),s.clip),M=L-h,j=r(),k=0,x=(g=M,b=(v=s).speedAsDuration?v.speed:Math.abs(g/1e3*v.speed),v.durationMax&&b>v.durationMax?v.durationMax:v.durationMin&&b<v.durationMin?v.durationMin:parseInt(b,10));0===e.pageYOffset&&e.scrollTo(0,0),A=o,q=s,y||history.pushState&&q.updateURL&&history.pushState({smoothScroll:JSON.stringify(q),anchor:A.id},document.title,A===document.documentElement?"#top":"#"+A.id),"matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches?i(o,Math.floor(L),!1):(a("scrollStart",s,o,c),f.cancelScroll(!0),e.requestAnimationFrame((function t(n){var r,u,l;S||(S=n),k+=n-S,E=h+M*(u=w=1<(w=0===x?0:k/x)?1:w,"easeInQuad"===(r=s).easing&&(l=u*u),"easeOutQuad"===r.easing&&(l=u*(2-u)),"easeInOutQuad"===r.easing&&(l=u<.5?2*u*u:(4-2*u)*u-1),"easeInCubic"===r.easing&&(l=u*u*u),"easeOutCubic"===r.easing&&(l=--u*u*u+1),"easeInOutCubic"===r.easing&&(l=u<.5?4*u*u*u:(u-1)*(2*u-2)*(2*u-2)+1),"easeInQuart"===r.easing&&(l=u*u*u*u),"easeOutQuart"===r.easing&&(l=1- --u*u*u*u),"easeInOutQuart"===r.easing&&(l=u<.5?8*u*u*u*u:1-8*--u*u*u*u),"easeInQuint"===r.easing&&(l=u*u*u*u*u),"easeOutQuint"===r.easing&&(l=1+--u*u*u*u*u),"easeInOutQuint"===r.easing&&(l=u<.5?16*u*u*u*u*u:1+16*--u*u*u*u*u),r.customEasing&&(l=r.customEasing(u)),l||u),e.scrollTo(0,Math.floor(E)),function(t,n){var r=e.pageYOffset;if(t==n||r==n||(h<n&&e.innerHeight+r)>=j)return f.cancelScroll(!0),i(o,n,y),a("scrollStop",s,o,c),!(m=S=null)}(E,L)||(m=e.requestAnimationFrame(t),S=n)})))}}},y=function(t){if(!t.defaultPrevented&&!(0!==t.button||t.metaKey||t.ctrlKey||t.shiftKey)&&"closest"in t.target&&(s=t.target.closest(c))&&"a"===s.tagName.toLowerCase()&&!t.target.closest(l.ignore)&&s.hostname===e.location.hostname&&s.pathname===e.location.pathname&&/#/.test(s.href)){var n,r;try{n=o(decodeURIComponent(s.hash))}catch(t){n=o(s.hash)}if("#"===n){if(!l.topOnEmptyHash)return;r=document.documentElement}else r=document.querySelector(n);(r=r||"#top"!==n?r:document.documentElement)&&(t.preventDefault(),function(t){if(history.replaceState&&t.updateURL&&!history.state){var n=e.location.hash;n=n||"",history.replaceState({smoothScroll:JSON.stringify(t),anchor:n||e.pageYOffset},document.title,n||e.location.href)}}(l),f.animateScroll(r,s))}},p=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(l)){var t=history.state.anchor;"string"==typeof t&&t&&!(t=document.querySelector(o(history.state.anchor)))||f.animateScroll(t,null,{updateURL:!1})}};return f.destroy=function(){l&&(document.removeEventListener("click",y,!1),e.removeEventListener("popstate",p,!1),f.cancelScroll(),m=d=s=l=null)},function(){if(!("querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";f.destroy(),l=n(t,u||{}),d=l.header?document.querySelector(l.header):null,document.addEventListener("click",y,!1),l.updateURL&&l.popstate&&e.addEventListener("popstate",p,!1)}(),f}}(r)}.apply(t,[]))||(e.exports=o)}).call(this,n(1))},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o;o=function(){return this}();try{o=o||new Function("return this")()}catch(e){"object"===("undefined"==typeof window?"undefined":n(window))&&(o=window)}e.exports=o},function(e,t){var n=document.getElementById("join"),o=(document.querySelector("#join .country select"),document.querySelector("#join .member-kind #personal")),r=document.querySelector("#join .member-kind #company"),i=Array.from(document.querySelectorAll("#join .member-kind .company-box input")),a=document.querySelector("#join .interest .ecosystem #ecosystem"),c=document.querySelector("#join .interest .ecosystem input[type='text']"),u=document.querySelector("#join .interest .other-interest #other-interest"),l=document.querySelector("#join .interest .other-interest input[type='text']");null!==n&&(null!==o&&o.addEventListener("click",(function(e){i.map((function(e){e.disabled=!0,e.value="",e.style.opacity=.5,e.parentElement.previousElementSibling.style.opacity=.5}))})),null!==r&&r.addEventListener("click",(function(e){i.map((function(e){e.disabled=!1,e.style.opacity=1,e.parentElement.previousElementSibling.style.opacity=1}))})),null!==a&&a.addEventListener("click",(function(e){e.currentTarget.checked?(c.disabled=!1,c.style.opacity=1):(c.disabled=!0,c.value="",c.style.opacity=.5)})),null!==u&&u.addEventListener("click",(function(e){e.currentTarget.checked?(l.disabled=!1,l.style.opacity=1):(l.disabled=!0,l.value="",l.style.opacity=.5)})))},function(e,t){var n=document.querySelector("body > header"),o=document.querySelector(".hamburger"),r=document.querySelector(".mobile-nav-back"),i=document.querySelector(".mobile-nav"),a=document.querySelector(".mobile-nav .close");if(null!==n){var c=function(e){i.classList.toggle("active"),r.classList.toggle("active")};o.addEventListener("click",c),a.addEventListener("click",c)}},function(e,t){var n=Array.from(document.querySelectorAll(".language-select")),o=Array.from(document.querySelectorAll(".language-select > img")),r=Array.from(document.querySelectorAll(".language-select ul")),i=Array.from(document.querySelectorAll(".language-select ul li"));null!==n&&(n.map((function(e){e.addEventListener("click",(function(e){r.map((function(e){e.classList.toggle("active")}))}))})),i.map((function(e){e.addEventListener("click",(function(){"korea"==this.dataset.country&&o.map((function(e){e.src="/assets/images/flag/korea.svg",e.style.opacity=1})),"kingdom"==this.dataset.country&&o.map((function(e){e.src="/assets/images/flag/kingdom.svg",e.style.opacity=1})),"china"==this.dataset.country&&o.map((function(e){e.src="/assets/images/flag/china.svg",e.style.opacity=1})),"japan"==this.dataset.country&&o.map((function(e){e.src="/assets/images/flag/japan.svg",e.style.opacity=1})),"vietnam"==this.dataset.country&&o.map((function(e){e.src="/assets/images/flag/vietnam.svg",e.style.opacity=1}))}))})))},function(e,t){var n=document.querySelector("section#detail .container"),o=Array.from(document.querySelectorAll("section#detail .container img")),r=Array.from(document.querySelectorAll("section#detail .container iframe"));null!==document.querySelector("section#detail")&&null!==n&&(r.forEach((function(e){var t=document.createElement("div");t.setAttribute("class","youtube-wrap"),t.innerHTML=e.outerHTML,e.parentNode.insertBefore(t,e),e.remove()})),o.forEach((function(e){var t=document.createElement("div");t.setAttribute("class","image-box"),t.innerHTML=e.outerHTML,e.parentNode.insertBefore(t,e),e.remove()})))},function(e,t,n){"use strict";n.r(t);var o=n(0);new(n.n(o).a)('a[href*="#"]',{speed:300,speedAsDuration:!0});n(2),n(3),n(4),n(5)}]);
//# sourceMappingURL=app.js.map