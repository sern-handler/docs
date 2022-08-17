"use strict";(self.webpackChunk_sern_website=self.webpackChunk_sern_website||[]).push([[146],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9017:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:2},i="CLI",l={unversionedId:"guide/walkthrough/cli",id:"guide/walkthrough/cli",title:"CLI",description:"Setting up the CLI is easy.",source:"@site/docs/guide/walkthrough/cli.md",sourceDirName:"guide/walkthrough",slug:"/guide/walkthrough/cli",permalink:"/fr/docs/guide/walkthrough/cli",draft:!1,editUrl:"https://github.com/sern-handler/website/edit/master/docs/guide/walkthrough/cli.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Goal",permalink:"/fr/docs/guide/walkthrough/goal"},next:{title:"First Command",permalink:"/fr/docs/guide/walkthrough/first-command"}},u={},s=[],p={toc:s};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cli"},"CLI"),(0,o.kt)("p",null,"Setting up the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/cli"},"CLI")," is easy. ",(0,o.kt)("br",null)),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To start a brand-new project, run :")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sern init (-y)\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"It creates a directory for you so you don't need to!")),(0,o.kt)("p",null,"Include the ",(0,o.kt)("inlineCode",{parentName:"p"},"-y")," flag if you want to set up defaults. The default langauge is ",(0,o.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"Typescript")," ",(0,o.kt)("br",null)),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To install ",(0,o.kt)("a",{parentName:"li",href:"/fr/docs/guide/walkthrough/plugins"},"plugins")," maintained by the community ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/sern-handler/awesome-plugins"},"repository"),",")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sern plugins\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Make sure to have a correct ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/guide/walkthrough/good-to-know#sernconfigjson"},"sern.config.json"))),(0,o.kt)("p",null,"This will display a menu selection of all installable plugins. ",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Note"),": You must have a ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/guide/walkthrough/good-to-know"},"sern.config.json")," to use this command.\nIf you want to view plugins, visit the repository linked above."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To install extra utilities into your project")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sern extra\n")))}c.isMDXComponent=!0}}]);