var _JUPYTERLAB;(()=>{"use strict";var e,r,t,a,n,o,l,u,i,d,s,f,c,p,h,b,m,v,y,g,j,w,P={3437:(e,r,t)=>{var a={"./index":()=>Promise.all([t.e(697),t.e(271),t.e(689)]).then((()=>()=>t(5753))),"./extension":()=>Promise.all([t.e(697),t.e(271),t.e(689)]).then((()=>()=>t(5753))),"./style":()=>t.e(534).then((()=>()=>t(8534)))},n=(e,r)=>(t.R=r,r=t.o(a,e)?a[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),o=(e,r)=>{if(t.S){var a=t.S.default,n="default";if(a&&a!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>n,init:()=>o})}},S={};function E(e){var r=S[e];if(void 0!==r)return r.exports;var t=S[e]={id:e,loaded:!1,exports:{}};return P[e].call(t.exports,t,t.exports,E),t.loaded=!0,t.exports}E.m=P,E.c=S,E.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return E.d(r,{a:r}),r},E.d=(e,r)=>{for(var t in r)E.o(r,t)&&!E.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},E.f={},E.e=e=>Promise.all(Object.keys(E.f).reduce(((r,t)=>(E.f[t](e,r),r)),[])),E.u=e=>e+"."+{216:"df250ba291225fb6b196",271:"d854ec01bdc01000240e",534:"4edb324bb27cb7d8c6c0",618:"e54c5627f383c0311000",689:"5f908998bfb7ecef500d",697:"1099b2c17e094250dafc",700:"feedcab510d3dfe25ae0",762:"7abcf250ad4abd938325"}[e]+".js?v="+{216:"df250ba291225fb6b196",271:"d854ec01bdc01000240e",534:"4edb324bb27cb7d8c6c0",618:"e54c5627f383c0311000",689:"5f908998bfb7ecef500d",697:"1099b2c17e094250dafc",700:"feedcab510d3dfe25ae0",762:"7abcf250ad4abd938325"}[e],E.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),E.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="@jupyterlab/pullrequests:",E.l=(t,a,n,o)=>{if(e[t])e[t].push(a);else{var l,u;if(void 0!==n)for(var i=document.getElementsByTagName("script"),d=0;d<i.length;d++){var s=i[d];if(s.getAttribute("src")==t||s.getAttribute("data-webpack")==r+n){l=s;break}}l||(u=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,E.nc&&l.setAttribute("nonce",E.nc),l.setAttribute("data-webpack",r+n),l.src=t),e[t]=[a];var f=(r,a)=>{l.onerror=l.onload=null,clearTimeout(c);var n=e[t];if(delete e[t],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((e=>e(a))),r)return r(a)},c=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),u&&document.head.appendChild(l)}},E.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},E.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{E.S={};var e={},r={};E.I=(t,a)=>{a||(a=[]);var n=r[t];if(n||(n=r[t]={}),!(a.indexOf(n)>=0)){if(a.push(n),e[t])return e[t];E.o(E.S,t)||(E.S[t]={});var o=E.S[t],l="@jupyterlab/pullrequests",u=(e,r,t,a)=>{var n=o[e]=o[e]||{},u=n[r];(!u||!u.loaded&&(!a!=!u.eager?a:l>u.from))&&(n[r]={get:t,from:l,eager:!!a})},i=[];switch(t){case"default":u("@jupyterlab/pullrequests","3.0.0",(()=>Promise.all([E.e(697),E.e(271),E.e(689)]).then((()=>()=>E(5753))))),u("json-source-map","0.6.1",(()=>E.e(216).then((()=>()=>E(4216))))),u("moment","2.29.1",(()=>Promise.all([E.e(762),E.e(700)]).then((()=>()=>E(381))))),u("react-spinners","0.5.13",(()=>Promise.all([E.e(618),E.e(271)]).then((()=>()=>E(1618)))))}return e[t]=i.length?Promise.all(i).then((()=>e[t]=1)):1}}})(),(()=>{var e;E.g.importScripts&&(e=E.g.location+"");var r=E.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),E.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),a=t[1]?r(t[1]):[];return t[2]&&(a.length++,a.push.apply(a,r(t[2]))),t[3]&&(a.push([]),a.push.apply(a,r(t[3]))),a},a=(e,r)=>{e=t(e),r=t(r);for(var a=0;;){if(a>=e.length)return a<r.length&&"u"!=(typeof r[a])[0];var n=e[a],o=(typeof n)[0];if(a>=r.length)return"u"==o;var l=r[a],u=(typeof l)[0];if(o!=u)return"o"==o&&"n"==u||"s"==u||"u"==o;if("o"!=o&&"u"!=o&&n!=l)return n<l;a++}},n=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var a=1,o=1;o<e.length;o++)a--,t+="u"==(typeof(u=e[o]))[0]?"-":(a>0?".":"")+(a=2,u);return t}var l=[];for(o=1;o<e.length;o++){var u=e[o];l.push(0===u?"not("+i()+")":1===u?"("+i()+" || "+i()+")":2===u?l.pop()+" "+l.pop():n(u))}return i();function i(){return l.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,r)=>{if(0 in e){r=t(r);var a=e[0],n=a<0;n&&(a=-a-1);for(var l=0,u=1,i=!0;;u++,l++){var d,s,f=u<e.length?(typeof e[u])[0]:"";if(l>=r.length||"o"==(s=(typeof(d=r[l]))[0]))return!i||("u"==f?u>a&&!n:""==f!=n);if("u"==s){if(!i||"u"!=f)return!1}else if(i)if(f==s)if(u<=a){if(d!=e[u])return!1}else{if(n?d>e[u]:d<e[u])return!1;d!=e[u]&&(i=!1)}else if("s"!=f&&"n"!=f){if(n||u<=a)return!1;i=!1,u--}else{if(u<=a||s<f!=n)return!1;i=!1}else"s"!=f&&"n"!=f&&(i=!1,u--)}}var c=[],p=c.pop.bind(c);for(l=1;l<e.length;l++){var h=e[l];c.push(1==h?p()|p():2==h?p()&p():h?o(h,r):!p())}return!!p()},l=(e,r)=>{var t=E.S[e];if(!t||!E.o(t,r))throw new Error("Shared module "+r+" doesn't exist in shared scope "+e);return t},u=(e,r)=>{var t=e[r];return(r=Object.keys(t).reduce(((e,r)=>!e||a(e,r)?r:e),0))&&t[r]},i=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&a(e,r)?r:e),0)},d=(e,r,t)=>"Unsatisfied version "+r+" of shared singleton module "+e+" (required "+n(t)+")",s=(e,r,t,a)=>{var n=i(e,t);return o(a,n)||"undefined"!=typeof console&&console.warn&&console.warn(d(t,n,a)),h(e[t][n])},f=(e,r,t)=>{var n=e[r];return(r=Object.keys(n).reduce(((e,r)=>!o(t,r)||e&&!a(e,r)?e:r),0))&&n[r]},c=(e,r,t,a)=>{var o=e[t];return"No satisfying version ("+n(a)+") of shared module "+t+" found in shared scope "+r+".\nAvailable versions: "+Object.keys(o).map((e=>e+" from "+o[e].from)).join(", ")},p=(e,r,t,a)=>{"undefined"!=typeof console&&console.warn&&console.warn(c(e,r,t,a))},h=e=>(e.loaded=1,e.get()),m=(b=e=>function(r,t,a,n){var o=E.I(r);return o&&o.then?o.then(e.bind(e,r,E.S[r],t,a,n)):e(r,E.S[r],t,a,n)})(((e,r,t,a)=>(l(e,t),h(f(r,t,a)||p(r,e,t,a)||u(r,t))))),v=b(((e,r,t,a)=>(l(e,t),s(r,0,t,a)))),y=b(((e,r,t,a,n)=>{var o=r&&E.o(r,t)&&f(r,t,a);return o?h(o):n()})),g={},j={6271:()=>v("default","react",[1,17,0,1]),69:()=>v("default","codemirror",[2,5,57,0]),267:()=>v("default","@jupyterlab/git",[,[4,0,40,0],[-1,0,40,0],1,[0,0,30,0],2]),616:()=>m("default","@jupyterlab/nbformat",[1,3,0,5]),879:()=>v("default","@jupyterlab/settingregistry",[1,3,0,5]),1380:()=>y("default","json-source-map",[2,0,6,1],(()=>E.e(216).then((()=>()=>E(4216))))),1797:()=>v("default","@lumino/coreutils",[1,1,5,3]),2036:()=>v("default","@jupyterlab/codemirror",[1,3,0,7]),2502:()=>v("default","@jupyterlab/codeeditor",[1,3,0,7]),3211:()=>v("default","@lumino/messaging",[1,1,4,3]),3277:()=>y("default","react-spinners",[2,0,5,12],(()=>E.e(618).then((()=>()=>E(1618))))),3730:()=>v("default","@jupyterlab/application",[1,3,0,9]),4031:()=>y("default","moment",[1,2,24,0],(()=>Promise.all([E.e(762),E.e(700)]).then((()=>()=>E(381))))),5066:()=>v("default","@jupyterlab/services",[1,6,0,7]),5331:()=>v("default","@jupyterlab/coreutils",[1,5,0,5]),5669:()=>v("default","@jupyterlab/ui-components",[1,3,0,6]),6120:()=>v("default","@jupyterlab/apputils",[1,3,0,7]),6168:()=>v("default","@lumino/signaling",[1,1,4,3]),6510:()=>v("default","@lumino/widgets",[1,1,16,1]),8389:()=>v("default","@jupyterlab/rendermime",[1,3,0,8]),8681:()=>v("default","codemirror",[1,5,0,0]),9241:()=>m("default","@jupyterlab/docregistry",[1,3,0,9]),9850:()=>v("default","@lumino/algorithm",[1,1,3,3])},w={271:[6271],689:[69,267,616,879,1380,1797,2036,2502,3211,3277,3730,4031,5066,5331,5669,6120,6168,6510,8389,8681,9241,9850]},E.f.consumes=(e,r)=>{E.o(w,e)&&w[e].forEach((e=>{if(E.o(g,e))return r.push(g[e]);var t=r=>{g[e]=0,E.m[e]=t=>{delete E.c[e],t.exports=r()}},a=r=>{delete g[e],E.m[e]=t=>{throw delete E.c[e],r}};try{var n=j[e]();n.then?r.push(g[e]=n.then(t).catch(a)):t(n)}catch(e){a(e)}}))},(()=>{var e={567:0};E.f.j=(r,t)=>{var a=E.o(e,r)?e[r]:void 0;if(0!==a)if(a)t.push(a[2]);else if(271!=r){var n=new Promise(((t,n)=>{a=e[r]=[t,n]}));t.push(a[2]=n);var o=E.p+E.u(r),l=new Error;E.l(o,(t=>{if(E.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+r+" failed.\n("+n+": "+o+")",l.name="ChunkLoadError",l.type=n,l.request=o,a[1](l)}}),"chunk-"+r,r)}else e[r]=0};var r=(r,t)=>{var a,n,[o,l,u]=t,i=0;for(a in l)E.o(l,a)&&(E.m[a]=l[a]);for(u&&u(E),r&&r(t);i<o.length;i++)n=o[i],E.o(e,n)&&e[n]&&e[n][0](),e[o[i]]=0},t=self.webpackChunk_jupyterlab_pullrequests=self.webpackChunk_jupyterlab_pullrequests||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var k=E(3437);(_JUPYTERLAB=void 0===_JUPYTERLAB?{}:_JUPYTERLAB)["@jupyterlab/pullrequests"]=k})();