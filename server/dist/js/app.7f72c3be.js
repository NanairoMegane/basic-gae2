(function(e){function t(t){for(var n,a,u=t[0],s=t[1],i=t[2],p=0,f=[];p<u.length;p++)a=u[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);c&&c(t);while(f.length)f.shift()();return l.push.apply(l,i||[]),r()}function r(){for(var e,t=0;t<l.length;t++){for(var r=l[t],n=!0,u=1;u<r.length;u++){var s=r[u];0!==o[s]&&(n=!1)}n&&(l.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={app:0},l=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var c=s;l.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("HelloWorld"),r("ToTest"),r("div",[r("router-view")],1)],1)},l=[],a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[e._v(" HelloWorld. ")])},u=[],s={name:"HelloWorld"},i=s,c=r("2877"),p=Object(c["a"])(i,a,u,!1,null,null,null),f=p.exports,d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"totest"},[r("router-link",{attrs:{to:"/test"}},[e._v("Go to Test Page")])],1)},v=[],b={name:"ToTest"},h=b,m=Object(c["a"])(h,d,v,!1,null,null,null),y=m.exports,_={name:"App",components:{HelloWorld:f,ToTest:y}},g=_,O=Object(c["a"])(g,o,l,!1,null,null,null),j=O.exports,w=r("8c4f"),T=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"test"},[e._v(" This is Test Page. ")]),r("div",{staticClass:"tobase"},[r("router-link",{attrs:{to:"/"}},[e._v("Go to Base Page")])],1)])},P=[],x={name:"TestPage"},k=x,S=Object(c["a"])(k,T,P,!1,null,null,null),$=S.exports;n["a"].use(w["a"]);var C=[{path:"/test",name:"test",component:$}],E=new w["a"]({mode:"history",base:"/",routes:C});new n["a"]({router:E,render:function(e){return e(j)}}).$mount("#app")}});
//# sourceMappingURL=app.7f72c3be.js.map