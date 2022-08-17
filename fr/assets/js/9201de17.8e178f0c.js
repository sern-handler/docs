"use strict";(self.webpackChunk_sern_website=self.webpackChunk_sern_website||[]).push([[803],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4743:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const i={},a="Introduction",l={unversionedId:"guide/README",id:"guide/README",title:"Introduction",description:"Welcome to our official guide. This guide will go through all the core features of the framework.",source:"@site/docs/guide/README.md",sourceDirName:"guide",slug:"/guide/",permalink:"/fr/docs/guide/",draft:!1,editUrl:"https://github.com/sern-handler/website/edit/master/docs/guide/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Welcome!",permalink:"/fr/docs/intro"},next:{title:"Choosing an IDE",permalink:"/fr/docs/guide/getting-started/choose-ide"}},u={},s=[{value:"You will learn",id:"you-will-learn",level:2},{value:"Working with plugins",id:"working-with-plugins",level:3},{value:"Events",id:"events",level:3},{value:"Good to know",id:"good-to-know",level:3}],c={toc:s};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Welcome to our official guide. This guide will go through all the core features of the framework."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\ud83d\udc96 Thank you for choosing sern to be your framework!")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Teaching the discord.js library and / or Javascript / Typescript is out of scope of this project, so the documentation assumes you already know these elements.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"discord.js v14 is the only supported library at the moment"))),(0,o.kt)("h2",{id:"you-will-learn"},"You will learn"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/fr/docs/guide/walkthrough/goal"},"sern's goal")),(0,o.kt)("li",{parentName:"ul"},"How to use sern with the ",(0,o.kt)("a",{parentName:"li",href:"/fr/docs/guide/walkthrough/cli"},"CLI")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/fr/docs/guide/walkthrough/first-command"},"Your first command")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/fr/docs/guide/walkthrough/first-command#context-class"},"The Context class"))),(0,o.kt)("h3",{id:"working-with-plugins"},"Working with plugins"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/fr/docs/guide/walkthrough/plugins"},"Plugins"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/fr/docs/guide/walkthrough/plugins#command-plugins"},"Command Plugins")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/fr/docs/guide/walkthrough/plugins#event-plugins"},"Event Plugins"))))),(0,o.kt)("h3",{id:"events"},"Events"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/fr/docs/guide/walkthrough/sern-emitter"},"The SernEmitter class")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/fr/docs/guide/walkthrough/first-event"},"Your first event"))),(0,o.kt)("h3",{id:"good-to-know"},"Good to know"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/fr/docs/guide/walkthrough/good-to-know"},"sern.config.json"))))}p.isMDXComponent=!0}}]);