import{E as t,s as r,r as e,_ as n,a as o,b as a,c as i,i as s,d as c,S as u,e as l,t as h,n as f,f as v,g as p,h as d,j as y,p as g,q as m,k as w,l as x,F as E,G as b,H as L,y as $,z as _,I as z}from"./index.c522fbb9.js";var O,j=(function(r){var e=function(r){var e,n=Object.prototype,o=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(t,r,e,n){var o=r&&r.prototype instanceof y?r:y,a=Object.create(o.prototype),i=new j(n||[]);return a._invoke=function(t,r,e){var n=h;return function(o,a){if(n===v)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw a;return I()}for(e.method=o,e.arg=a;;){var i=e.delegate;if(i){var s=_(i,e);if(s){if(s===d)continue;return s}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===h)throw n=p,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=v;var c=l(t,r,e);if("normal"===c.type){if(n=e.done?p:f,c.arg===d)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(n=p,e.method="throw",e.arg=c.arg)}}}(t,e,i),a}function l(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=u;var h="suspendedStart",f="suspendedYield",v="executing",p="completed",d={};function y(){}function g(){}function m(){}var w={};w[i]=function(){return this};var x=Object.getPrototypeOf,E=x&&x(x(k([])));E&&E!==n&&o.call(E,i)&&(w=E);var b=m.prototype=y.prototype=Object.create(w);function L(t){["next","throw","return"].forEach(function(r){t[r]=function(t){return this._invoke(r,t)}})}function $(r){var e;this._invoke=function(n,a){function i(){return new Promise(function(e,i){!function e(n,a,i,s){var c=l(r[n],r,a);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"===t(h)&&o.call(h,"__await")?Promise.resolve(h.__await).then(function(t){e("next",t,i,s)},function(t){e("throw",t,i,s)}):Promise.resolve(h).then(function(t){u.value=t,i(u)},function(t){return e("throw",t,i,s)})}s(c.arg)}(n,a,e,i)})}return e=e?e.then(i,i):i()}}function _(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,_(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function z(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function O(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(z,this),this.reset(!0)}function k(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function r(){for(;++n<t.length;)if(o.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:I}}function I(){return{value:e,done:!0}}return g.prototype=b.constructor=m,m.constructor=g,m[c]=g.displayName="GeneratorFunction",r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(b),t},r.awrap=function(t){return{__await:t}},L($.prototype),$.prototype[s]=function(){return this},r.AsyncIterator=$,r.async=function(t,e,n,o){var a=new $(u(t,e,n,o));return r.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},L(b),b[c]="Generator",b[i]=function(){return this},b.toString=function(){return"[object Generator]"},r.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},r.values=k,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return s.type="throw",s.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=r,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),d},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),O(e),d}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;O(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:k(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},r}(r.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}(O={exports:{}},O.exports),O.exports);function k(t,r,e,n,o,a,i){try{var s=t[a](i),c=s.value}catch(t){return void e(t)}s.done?r(c):Promise.resolve(c).then(n,o)}function I(t){return function(){var r=this,e=arguments;return new Promise(function(n,o){var a=t.apply(r,e);function i(t){k(a,n,o,i,s,"next",t)}function s(t){k(a,n,o,i,s,"throw",t)}i(void 0)})}}var G=[];function N(t){var n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,a=[];function i(e){if(r(t,e)&&(t=e,n)){for(var o=!G.length,i=0;i<a.length;i+=1){var s=a[i];s[1](),G.push(s,t)}if(o){for(var c=0;c<G.length;c+=2)G[c][0](G[c+1]);G.length=0}}}return{set:i,update:function(r){i(r(t))},subscribe:function(r){var s=[r,arguments.length>1&&void 0!==arguments[1]?arguments[1]:e];return a.push(s),1===a.length&&(n=o(i)||e),r(t),function(){var t=a.indexOf(s);-1!==t&&a.splice(t,1),0===a.length&&(n(),n=null)}}}}function P(t){var r,n,o,a,i,s,c,u,E,b,L,$,_,z,O,j;return{c:function(){r=l("footer"),n=l("div"),o=l("a"),a=h("Impressum"),i=f(),s=l("a"),c=h("Datenschutz"),u=f(),E=l("span"),b=h("Datenschutz ist toll!"),L=f(),$=l("a"),_=h("Kontakt"),z=f(),O=l("a"),j=l("img"),this.h()},l:function(t){r=v(t,"FOOTER",{class:!0},!1);var e=p(r);n=v(e,"DIV",{class:!0},!1);var l=p(n);o=v(l,"A",{rel:!0,href:!0,class:!0},!1);var h=p(o);a=d(h,"Impressum"),h.forEach(y),i=g(l),s=v(l,"A",{rel:!0,href:!0,class:!0},!1);var f=p(s);c=d(f,"Datenschutz"),f.forEach(y),u=g(l),E=v(l,"SPAN",{class:!0},!1);var m=p(E);b=d(m,"Datenschutz ist toll!"),m.forEach(y),L=g(l),$=v(l,"A",{rel:!0,href:!0,class:!0},!1);var w=p($);_=d(w,"Kontakt"),w.forEach(y),z=g(l),O=v(l,"A",{rel:!0,href:!0,class:!0},!1);var x=p(O);j=v(x,"IMG",{src:!0,alt:!0,class:!0},!1),p(j).forEach(y),x.forEach(y),l.forEach(y),e.forEach(y),this.h()},h:function(){m(o,"rel","noopener"),m(o,"href","https://owlabout.de/impressum.html"),m(o,"class","svelte-zix6vx"),m(s,"rel","noopener"),m(s,"href","https://owlabout.de/datenschutz.html"),m(s,"class","svelte-zix6vx"),m(E,"class","footnote-container svelte-zix6vx"),m($,"rel","noopener"),m($,"href","https://owlabout.de/#contact"),m($,"class","svelte-zix6vx"),m(j,"src","/app/logo-owl.png"),m(j,"alt","owlabout"),m(j,"class","svelte-zix6vx"),m(O,"rel","noopener"),m(O,"href","https://owlabout.de/"),m(O,"class","svelte-zix6vx"),m(n,"class","container svelte-zix6vx"),m(r,"class","svelte-zix6vx")},m:function(t,e){w(t,r,e),x(r,n),x(n,o),x(o,a),x(n,i),x(n,s),x(s,c),x(n,u),x(n,E),x(E,b),x(n,L),x(n,$),x($,_),x(n,z),x(n,O),x(O,j)},p:e,i:e,o:e,d:function(t){t&&y(r)}}}var F=function(t){function e(t){var n;return o(this,e),n=a(this,i(e).call(this)),s(c(n),t,null,P,r,[]),n}return n(e,u),e}();function A(t){var r,e,n,o,a,i,s=t.$$slots.default,c=E(s,t,null);return{c:function(){r=l("div"),e=l("div"),n=f(),o=l("main"),c&&c.c(),this.h()},l:function(t){r=v(t,"DIV",{class:!0},!1);var a=p(r);e=v(a,"DIV",{class:!0},!1),p(e).forEach(y),n=g(a),o=v(a,"MAIN",{class:!0},!1);var i=p(o);c&&c.l(i),i.forEach(y),a.forEach(y),this.h()},h:function(){m(e,"class","top-bar"),m(o,"class",t.classes),m(r,"class",a="layout "+t.classes)},m:function(t,a){w(t,r,a),x(r,e),x(r,n),x(r,o),c&&c.m(o,null),i=!0},p:function(t,e){c&&c.p&&t.$$scope&&c.p(b(s,e,t,null),L(s,e,null)),i&&!t.classes||m(o,"class",e.classes),i&&!t.classes||a===(a="layout "+e.classes)||m(r,"class",a)},i:function(t){i||($(c,t),i=!0)},o:function(t){_(c,t),i=!1},d:function(t){t&&y(r),c&&c.d(t)}}}var S=N("de"),D=S.subscribe,T=S.set,R={subscribe:D,set:function(t){T(t||"de")}};function V(t,r,e){var n;z(t,R,function(t){e("$lang",n=t)});var o,a=r.segment,i=r.$$slots,s=void 0===i?{}:i,c=r.$$scope;return t.$set=function(t){"segment"in t&&e("segment",a=t.segment),"$$scope"in t&&e("$$scope",c=t.$$scope)},t.$$.update=function(){var t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{segment:1,$lang:1};r.segment&&e("classes",o="layout__".concat(a||"start")),r.$lang&&(t=n,"undefined"!=typeof document&&(document.documentElement.lang=t))},{segment:a,classes:o,$$slots:s,$$scope:c}}var K=function(t){function e(t){var n;return o(this,e),n=a(this,i(e).call(this)),s(c(n),t,V,A,r,["segment"]),n}return n(e,u),e}();export{F,K as L,I as _,j as a,R as l,N as w};