"use strict";(self.webpackChunk_sern_website=self.webpackChunk_sern_website||[]).push([[7180],{5788:(e,a,t)=>{t.d(a,{Iu:()=>g,yg:()=>u});var n=t(1504);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function d(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),m=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},g=function(e){var a=m(e.components);return n.createElement(p.Provider,{value:a},e.children)},o="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},s=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,g=d(e,["components","mdxType","originalType","parentName"]),o=m(t),s=r,u=o["".concat(p,".").concat(s)]||o[s]||y[s]||l;return t?n.createElement(u,i(i({ref:a},g),{},{components:t})):n.createElement(u,i({ref:a},g))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=s;var d={};for(var p in a)hasOwnProperty.call(a,p)&&(d[p]=a[p]);d.originalType=e,d[o]="string"==typeof e?e:r,i[1]=d;for(var m=2;m<l;m++)i[m]=t[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},5408:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var n=t(5072),r=(t(1504),t(5788));const l={id:"ModuleManager",title:"Interface: ModuleManager",sidebar_label:"ModuleManager",sidebar_position:0,custom_edit_url:null},i=void 0,d={unversionedId:"api/interfaces/ModuleManager",id:"api/interfaces/ModuleManager",title:"Interface: ModuleManager",description:"Since",source:"@site/docs/api/interfaces/ModuleManager.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/ModuleManager",permalink:"/docs/api/interfaces/ModuleManager",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ModuleManager",title:"Interface: ModuleManager",sidebar_label:"ModuleManager",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Module",permalink:"/docs/api/interfaces/Module"},next:{title:"Plugin",permalink:"/docs/api/interfaces/Plugin"}},p={},m=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Implemented by",id:"implemented-by",level:2},{value:"Methods",id:"methods",level:2},{value:"get",id:"get",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"getByNameCommandType",id:"getbynamecommandtype",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"getMetadata",id:"getmetadata",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"getPublishableCommands",id:"getpublishablecommands",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"set",id:"set",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"setMetadata",id:"setmetadata",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-5",level:4}],g={toc:m},o="wrapper";function y(e){let{components:a,...t}=e;return(0,r.yg)(o,(0,n.c)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Since"))),(0,r.yg)("p",null,"2.0.0"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"direct access to the module manager will be removed in version 4")),(0,r.yg)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"MetadataAccess")),(0,r.yg)("p",{parentName:"li"},"\u21b3 ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"ModuleManager"))))),(0,r.yg)("h2",{id:"implemented-by"},"Implemented by"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/api/classes/DefaultModuleManager"},(0,r.yg)("inlineCode",{parentName:"a"},"DefaultModuleManager")))),(0,r.yg)("h2",{id:"methods"},"Methods"),(0,r.yg)("h3",{id:"get"},"get"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"get"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"id"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"p"},"string")),(0,r.yg)("h4",{id:"parameters"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"id")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"string"))))),(0,r.yg)("h4",{id:"returns"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"p"},"string")),(0,r.yg)("h4",{id:"defined-in"},"Defined in"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/9d5c6c7/src/core/contracts/module-manager.ts#L19"},"src/core/contracts/module-manager.ts:19")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"getbynamecommandtype"},"getByNameCommandType"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"getByNameCommandType"),"<",(0,r.yg)("inlineCode",{parentName:"p"},"T"),">","(",(0,r.yg)("inlineCode",{parentName:"p"},"name"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"commandType"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.yg)("a",{parentName:"p",href:"/docs/api/interfaces/CommandModuleDefs"},(0,r.yg)("inlineCode",{parentName:"a"},"CommandModuleDefs")),"[",(0,r.yg)("inlineCode",{parentName:"p"},"T"),"]",">"),(0,r.yg)("h4",{id:"type-parameters"},"Type parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"T")),(0,r.yg)("td",{parentName:"tr",align:"left"},"extends ",(0,r.yg)("a",{parentName:"td",href:"/docs/api/enums/CommandType"},(0,r.yg)("inlineCode",{parentName:"a"},"CommandType")))))),(0,r.yg)("h4",{id:"parameters-1"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"name")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"string"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"commandType")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"T"))))),(0,r.yg)("h4",{id:"returns-1"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.yg)("a",{parentName:"p",href:"/docs/api/interfaces/CommandModuleDefs"},(0,r.yg)("inlineCode",{parentName:"a"},"CommandModuleDefs")),"[",(0,r.yg)("inlineCode",{parentName:"p"},"T"),"]",">"),(0,r.yg)("h4",{id:"defined-in-1"},"Defined in"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/9d5c6c7/src/core/contracts/module-manager.ts#L23"},"src/core/contracts/module-manager.ts:23")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"getmetadata"},"getMetadata"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"getMetadata"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"m"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"p"},"CommandMeta")),(0,r.yg)("h4",{id:"parameters-2"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"m")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"Module"))))),(0,r.yg)("h4",{id:"returns-2"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"p"},"CommandMeta")),(0,r.yg)("h4",{id:"inherited-from"},"Inherited from"),(0,r.yg)("p",null,"MetadataAccess.getMetadata"),(0,r.yg)("h4",{id:"defined-in-2"},"Defined in"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/9d5c6c7/src/core/contracts/module-manager.ts#L10"},"src/core/contracts/module-manager.ts:10")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"getpublishablecommands"},"getPublishableCommands"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"getPublishableCommands"),"(): ",(0,r.yg)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.yg)("a",{parentName:"p",href:"/docs/api/modules#commandmodule"},(0,r.yg)("inlineCode",{parentName:"a"},"CommandModule")),"[]",">"),(0,r.yg)("h4",{id:"returns-3"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.yg)("a",{parentName:"p",href:"/docs/api/modules#commandmodule"},(0,r.yg)("inlineCode",{parentName:"a"},"CommandModule")),"[]",">"),(0,r.yg)("h4",{id:"defined-in-3"},"Defined in"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/9d5c6c7/src/core/contracts/module-manager.ts#L22"},"src/core/contracts/module-manager.ts:22")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"set"},"set"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"set"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"id"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"path"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("h4",{id:"parameters-3"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"id")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"string"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"path")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"string"))))),(0,r.yg)("h4",{id:"returns-4"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("h4",{id:"defined-in-4"},"Defined in"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/9d5c6c7/src/core/contracts/module-manager.ts#L21"},"src/core/contracts/module-manager.ts:21")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"setmetadata"},"setMetadata"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"setMetadata"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"m"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"c"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("h4",{id:"parameters-4"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"m")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"Module"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"c")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"CommandMeta"))))),(0,r.yg)("h4",{id:"returns-5"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("h4",{id:"inherited-from-1"},"Inherited from"),(0,r.yg)("p",null,"MetadataAccess.setMetadata"),(0,r.yg)("h4",{id:"defined-in-5"},"Defined in"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/9d5c6c7/src/core/contracts/module-manager.ts#L11"},"src/core/contracts/module-manager.ts:11")))}y.isMDXComponent=!0}}]);