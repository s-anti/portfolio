import{s as T,n as g,c as q,u as H,g as I,d as V}from"../chunks/scheduler.e108d1fd.js";import{S,i as D,g as f,s as k,h as m,j as $,f as _,c as y,x,k as h,a as b,y as p,z as L,r as M,u as z,v as B,d as j,t as E,w as N}from"../chunks/index.76135fca.js";function O(r){let e,s="light_mode",o,t;return{c(){e=f("button"),e.textContent=s,this.h()},l(a){e=m(a,"BUTTON",{class:!0,"data-svelte-h":!0}),x(e)!=="svelte-j7cte0"&&(e.textContent=s),this.h()},h(){h(e,"class","material-icons")},m(a,n){b(a,e,n),o||(t=L(e,"click",r[3]),o=!0)},p:g,d(a){a&&_(e),o=!1,t()}}}function U(r){let e,s="dark_mode",o,t;return{c(){e=f("button"),e.textContent=s,this.h()},l(a){e=m(a,"BUTTON",{class:!0,"data-svelte-h":!0}),x(e)!=="svelte-3ueowt"&&(e.textContent=s),this.h()},h(){h(e,"class","material-icons")},m(a,n){b(a,e,n),o||(t=L(e,"click",r[2]),o=!0)},p:g,d(a){a&&_(e),o=!1,t()}}}function A(r){let e,s,o,t,a="2023",n,l,c='<button class="bg-secondary border-text border text-text flex items-center justify-center p-2 rounded-full gap-2 hover:rotate-6 transition-all">Contacto <span class="material-icons">add_ic_call</span></button>';function C(u,d){return u[0]?U:O}let v=C(r),i=v(r);return{c(){e=f("header"),s=f("div"),i.c(),o=k(),t=f("div"),t.textContent=a,n=k(),l=f("div"),l.innerHTML=c,this.h()},l(u){e=m(u,"HEADER",{class:!0});var d=$(e);s=m(d,"DIV",{class:!0});var w=$(s);i.l(w),w.forEach(_),o=y(d),t=m(d,"DIV",{class:!0,"data-svelte-h":!0}),x(t)!=="svelte-1ptpwlq"&&(t.textContent=a),n=y(d),l=m(d,"DIV",{class:!0,"data-svelte-h":!0}),x(l)!=="svelte-1doqogq"&&(l.innerHTML=c),d.forEach(_),this.h()},h(){h(s,"class","flex-1 justify-center flex gap-2"),h(t,"class","flex-1 justify-center flex"),h(l,"class","flex-1 justify-center flex"),h(e,"class","flex justify-between p-2 items-center fixed z-40 top-0 w-full backdrop:blur-3xl")},m(u,d){b(u,e,d),p(e,s),i.m(s,null),p(e,o),p(e,t),p(e,n),p(e,l)},p(u,[d]){v===(v=C(u))&&i?i.p(u,d):(i.d(1),i=v(u),i&&(i.c(),i.m(s,null)))},i:g,o:g,d(u){u&&_(e),i.d()}}}function R(r,e,s){var o=!1;function t(){localStorage.theme==="dark"||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?(document.documentElement.classList.add("dark"),s(0,o=!0)):(document.documentElement.classList.remove("dark"),s(0,o=!1))}return[o,t,()=>{localStorage.theme="light",t()},()=>{localStorage.theme="dark",t()}]}class F extends S{constructor(e){super(),D(this,e,R,A,T,{})}}function G(r){let e,s,o,t;s=new F({});const a=r[1].default,n=q(a,r,r[0],null);return{c(){e=f("div"),M(s.$$.fragment),o=k(),n&&n.c(),this.h()},l(l){e=m(l,"DIV",{class:!0});var c=$(e);z(s.$$.fragment,c),o=y(c),n&&n.l(c),c.forEach(_),this.h()},h(){h(e,"class","bg-background text-text")},m(l,c){b(l,e,c),B(s,e,null),p(e,o),n&&n.m(e,null),t=!0},p(l,[c]){n&&n.p&&(!t||c&1)&&H(n,a,l,l[0],t?V(a,l[0],c,null):I(l[0]),null)},i(l){t||(j(s.$$.fragment,l),j(n,l),t=!0)},o(l){E(s.$$.fragment,l),E(n,l),t=!1},d(l){l&&_(e),N(s),n&&n.d(l)}}}function J(r,e,s){let{$$slots:o={},$$scope:t}=e;return r.$$set=a=>{"$$scope"in a&&s(0,t=a.$$scope)},[t,o]}class Q extends S{constructor(e){super(),D(this,e,J,G,T,{})}}export{Q as component};
