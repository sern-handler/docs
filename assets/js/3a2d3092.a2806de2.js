"use strict";(self.webpackChunk_sern_website=self.webpackChunk_sern_website||[]).push([[824],{5788:(e,n,t)=>{t.d(n,{Iu:()=>u,yg:()=>y});var r=t(1504);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),d=o,y=p["".concat(l,".").concat(d)]||p[d]||g[d]||i;return t?r.createElement(y,a(a({ref:n},u),{},{components:t})):r.createElement(y,a({ref:n},u))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2088:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(5072),o=(t(1504),t(5788));const i={sidebar_position:9},a="Good to know",s={unversionedId:"guide/walkthrough/good-to-know",id:"guide/walkthrough/good-to-know",title:"Good to know",description:"sern.config.json",source:"@site/docs/guide/walkthrough/good-to-know.md",sourceDirName:"guide/walkthrough",slug:"/guide/walkthrough/good-to-know",permalink:"/docs/guide/walkthrough/good-to-know",draft:!1,editUrl:"https://github.com/sern-handler/website/edit/main/docs/guide/walkthrough/good-to-know.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Conclusion",permalink:"/docs/guide/walkthrough/conclusion"}},l={},c=[{value:"sern.config.json",id:"sernconfigjson",level:2}],u={toc:c},p="wrapper";function g(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.c)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"good-to-know"},"Good to know"),(0,o.yg)("h2",{id:"sernconfigjson"},"sern.config.json"),(0,o.yg)("p",null,"A sern.config.json, although not necessary, allows your project to communicate with our cli."),(0,o.yg)("p",null,"For example, when installing typescript plugins, the language property is necessary to install from our\n",(0,o.yg)("a",{parentName:"p",href:"https://github.com/sern-handler/awesome-plugins"},"open source repository"),". ",(0,o.yg)("br",null)),(0,o.yg)("p",null,"Using the cli and running ",(0,o.yg)("inlineCode",{parentName:"p"},"sern init --sync")," on pre-existing projects should install this json file in the root directory given.\nOr, if this is a brand-new project, ",(0,o.yg)("inlineCode",{parentName:"p"},"sern init")," automatically installs it."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "language": "typescript",\n  "paths": {\n    "base": "src",\n    "commands": "commands"\n  }\n}\n')))}g.isMDXComponent=!0}}]);