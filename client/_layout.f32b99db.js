import{s,n as e,S as t,i as a,e as l,t as c,a as n,c as o,b as r,d as h,f as u,g as i,h as f,j as p,k as v,l as m,m as d,o as $,p as g,q as x,r as b}from"./index.4783f61a.js";const z=[];function E(t,a=e){let l;const c=[];function n(e){if(s(t,e)&&(t=e,l)){const s=!z.length;for(let s=0;s<c.length;s+=1){const e=c[s];e[1](),z.push(e,t)}if(s){for(let s=0;s<z.length;s+=2)z[s][0](z[s+1]);z.length=0}}}return{set:n,update:function(s){n(s(t))},subscribe:function(s,o=e){const r=[s,o];return c.push(r),1===c.length&&(l=a(n)||e),s(t),()=>{const s=c.indexOf(r);-1!==s&&c.splice(s,1),0===c.length&&(l(),l=null)}}}}function w(s){var t,a,m,d,$,g,x,b,z,E,w,D,I,A,y,k;return{c(){t=l("footer"),a=l("div"),m=l("a"),d=c("Impressum"),$=n(),g=l("a"),x=c("Datenschutz"),b=n(),z=l("span"),E=c("Datenschutz ist toll!"),w=n(),D=l("a"),I=c("Kontakt"),A=n(),y=l("a"),k=l("img"),this.h()},l(s){t=o(s,"FOOTER",{class:!0},!1);var e=r(t);a=o(e,"DIV",{class:!0},!1);var l=r(a);m=o(l,"A",{rel:!0,href:!0,class:!0},!1);var c=r(m);d=h(c,"Impressum"),c.forEach(u),$=i(l),g=o(l,"A",{rel:!0,href:!0,class:!0},!1);var n=r(g);x=h(n,"Datenschutz"),n.forEach(u),b=i(l),z=o(l,"SPAN",{class:!0},!1);var f=r(z);E=h(f,"Datenschutz ist toll!"),f.forEach(u),w=i(l),D=o(l,"A",{rel:!0,href:!0,class:!0},!1);var p=r(D);I=h(p,"Kontakt"),p.forEach(u),A=i(l),y=o(l,"A",{rel:!0,href:!0,class:!0},!1);var v=r(y);k=o(v,"IMG",{src:!0,alt:!0,class:!0},!1),r(k).forEach(u),v.forEach(u),l.forEach(u),e.forEach(u),this.h()},h(){f(m,"rel","noopener"),f(m,"href","https://owlabout.de/impressum.html"),f(m,"class","svelte-zix6vx"),f(g,"rel","noopener"),f(g,"href","https://owlabout.de/datenschutz.html"),f(g,"class","svelte-zix6vx"),f(z,"class","footnote-container svelte-zix6vx"),f(D,"rel","noopener"),f(D,"href","https://owlabout.de/#contact"),f(D,"class","svelte-zix6vx"),f(k,"src","/app/logo-owl.png"),f(k,"alt","owlabout"),f(k,"class","svelte-zix6vx"),f(y,"rel","noopener"),f(y,"href","https://owlabout.de/"),f(y,"class","svelte-zix6vx"),f(a,"class","container svelte-zix6vx"),f(t,"class","svelte-zix6vx")},m(s,e){p(s,t,e),v(t,a),v(a,m),v(m,d),v(a,$),v(a,g),v(g,x),v(a,b),v(a,z),v(z,E),v(a,w),v(a,D),v(D,I),v(a,A),v(a,y),v(y,k)},p:e,i:e,o:e,d(s){s&&u(t)}}}class D extends t{constructor(e){super(),a(this,e,null,w,s,[])}}function I(s){var e,t,a,c,h,b;const z=s.$$slots.default,E=m(z,s,null);return{c(){e=l("div"),t=l("div"),a=n(),c=l("main"),E&&E.c(),this.h()},l(s){e=o(s,"DIV",{class:!0},!1);var l=r(e);t=o(l,"DIV",{class:!0},!1),r(t).forEach(u),a=i(l),c=o(l,"MAIN",{class:!0},!1);var n=r(c);E&&E.l(n),n.forEach(u),l.forEach(u),this.h()},h(){f(t,"class","top-bar"),f(c,"class",s.classes),f(e,"class",h="layout "+s.classes)},m(s,l){p(s,e,l),v(e,t),v(e,a),v(e,c),E&&E.m(c,null),b=!0},p(s,t){E&&E.p&&s.$$scope&&E.p(d(z,t,s,null),$(z,t,null)),b&&!s.classes||f(c,"class",t.classes),b&&!s.classes||h===(h="layout "+t.classes)||f(e,"class",h)},i(s){b||(g(E,s),b=!0)},o(s){x(E,s),b=!1},d(s){s&&u(e),E&&E.d(s)}}}const{subscribe:A,set:y}=E("de"),k={subscribe:A,set(s){y(s||"de")}};function O(s,e,t){let a;b(s,k,s=>{t("$lang",a=s)});let l,{segment:c}=e,{$$slots:n={},$$scope:o}=e;return s.$set=(s=>{"segment"in s&&t("segment",c=s.segment),"$$scope"in s&&t("$$scope",o=s.$$scope)}),s.$$.update=((s={segment:1,$lang:1})=>{s.segment&&t("classes",l=`layout__${c||"start"}`),s.$lang&&function(s){"undefined"!=typeof document&&(document.documentElement.lang=s)}(a)}),{segment:c,classes:l,$$slots:n,$$scope:o}}class V extends t{constructor(e){super(),a(this,e,O,I,s,["segment"])}}export{D as F,V as L,k as l,E as w};
