"use strict";(self.webpackChunk_sern_website=self.webpackChunk_sern_website||[]).push([[592],{5788:(e,n,r)=>{r.d(n,{Iu:()=>c,yg:()=>m});var t=r(1504);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=t.createContext({}),s=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},c=function(e){var n=s(e.components);return t.createElement(u.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(r),y=a,m=p["".concat(u,".").concat(y)]||p[y]||d[y]||i;return r?t.createElement(m,l(l({ref:n},c),{},{components:r})):t.createElement(m,l({ref:n},c))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=y;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},1832:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var t=r(5072),a=(r(1504),r(5788));const i={id:"PayloadType",title:"Enumeration: PayloadType",sidebar_label:"PayloadType",sidebar_position:0,custom_edit_url:null},l=void 0,o={unversionedId:"api/enums/PayloadType",id:"api/enums/PayloadType",title:"Enumeration: PayloadType",description:"Enumeration Members",source:"@site/docs/api/enums/PayloadType.md",sourceDirName:"api/enums",slug:"/api/enums/PayloadType",permalink:"/docs/api/enums/PayloadType",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"PayloadType",title:"Enumeration: PayloadType",sidebar_label:"PayloadType",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"EventType",permalink:"/docs/api/enums/EventType"},next:{title:"PluginType",permalink:"/docs/api/enums/PluginType"}},u={},s=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"Failure",id:"failure",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Success",id:"success",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"Warning",id:"warning",level:3},{value:"Defined in",id:"defined-in-2",level:4}],c={toc:s},p="wrapper";function d(e){let{components:n,...r}=e;return(0,a.yg)(p,(0,t.c)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,a.yg)("h3",{id:"failure"},"Failure"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"Failure")," = ",(0,a.yg)("inlineCode",{parentName:"p"},'"failure"')),(0,a.yg)("p",null,"The PayloadType for a SernEmitter failure event"),(0,a.yg)("h4",{id:"defined-in"},"Defined in"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/9d5c6c7/src/core/structures/enums.ts#L98"},"src/core/structures/enums.ts:98")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"success"},"Success"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"Success")," = ",(0,a.yg)("inlineCode",{parentName:"p"},'"success"')),(0,a.yg)("p",null,"The PayloadType for a SernEmitter success event"),(0,a.yg)("h4",{id:"defined-in-1"},"Defined in"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/9d5c6c7/src/core/structures/enums.ts#L94"},"src/core/structures/enums.ts:94")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"warning"},"Warning"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"Warning")," = ",(0,a.yg)("inlineCode",{parentName:"p"},'"warning"')),(0,a.yg)("p",null,"The PayloadType for a SernEmitter warning event"),(0,a.yg)("h4",{id:"defined-in-2"},"Defined in"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/9d5c6c7/src/core/structures/enums.ts#L102"},"src/core/structures/enums.ts:102")))}d.isMDXComponent=!0}}]);