"use strict";(self.webpackChunk_sern_website=self.webpackChunk_sern_website||[]).push([[3268],{5788:(e,t,r)=>{r.d(t,{Iu:()=>c,yg:()=>f});var n=r(1504);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4652:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(5072),o=(r(1504),r(5788));const a={id:"CoreModuleStore",title:"Interface: CoreModuleStore",sidebar_label:"CoreModuleStore",sidebar_position:0,custom_edit_url:null},i=void 0,l={unversionedId:"api/interfaces/CoreModuleStore",id:"api/interfaces/CoreModuleStore",title:"Interface: CoreModuleStore",description:"Represents a core module store that stores IDs mapped to file paths.",source:"@site/docs/api/interfaces/CoreModuleStore.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/CoreModuleStore",permalink:"/docs/api/interfaces/CoreModuleStore",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"CoreModuleStore",title:"Interface: CoreModuleStore",sidebar_label:"CoreModuleStore",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"CoreDependencies",permalink:"/docs/api/interfaces/CoreDependencies"},next:{title:"Dependencies",permalink:"/docs/api/interfaces/Dependencies"}},s={},p=[{value:"Implemented by",id:"implemented-by",level:2},{value:"Properties",id:"properties",level:2},{value:"commands",id:"commands",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"metadata",id:"metadata",level:3},{value:"Defined in",id:"defined-in-1",level:4}],c={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,o.yg)(d,(0,n.c)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Represents a core module store that stores IDs mapped to file paths."),(0,o.yg)("h2",{id:"implemented-by"},"Implemented by"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/api/classes/ModuleStore"},(0,o.yg)("inlineCode",{parentName:"a"},"ModuleStore")))),(0,o.yg)("h2",{id:"properties"},"Properties"),(0,o.yg)("h3",{id:"commands"},"commands"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("strong",{parentName:"p"},"commands"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"Map"),"<",(0,o.yg)("inlineCode",{parentName:"p"},"string"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"string"),">"),(0,o.yg)("h4",{id:"defined-in"},"Defined in"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/9d5c6c7/src/core/contracts/module-store.ts#L7"},"src/core/contracts/module-store.ts:7")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"metadata"},"metadata"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("strong",{parentName:"p"},"metadata"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"WeakMap"),"<",(0,o.yg)("inlineCode",{parentName:"p"},"Module"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"CommandMeta"),">"),(0,o.yg)("h4",{id:"defined-in-1"},"Defined in"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/9d5c6c7/src/core/contracts/module-store.ts#L8"},"src/core/contracts/module-store.ts:8")))}u.isMDXComponent=!0}}]);