"use strict";(self.webpackChunk_sern_website=self.webpackChunk_sern_website||[]).push([[4688],{5788:(e,n,r)=>{r.d(n,{Iu:()=>s,yg:()=>u});var t=r(1504);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function d(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),o=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},s=function(e){var n=o(e.components);return t.createElement(p.Provider,{value:n},e.children)},y="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),y=o(r),m=a,u=y["".concat(p,".").concat(m)]||y[m]||g[m]||i;return r?t.createElement(u,l(l({ref:n},s),{},{components:r})):t.createElement(u,l({ref:n},s))}));function u(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var d={};for(var p in n)hasOwnProperty.call(n,p)&&(d[p]=n[p]);d.originalType=e,d[y]="string"==typeof e?e:a,l[1]=d;for(var o=2;o<i;o++)l[o]=r[o];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6260:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var t=r(5072),a=(r(1504),r(5788));const i={id:"SernEventCommand",title:"Interface: SernEventCommand<T>",sidebar_label:"SernEventCommand",sidebar_position:0,custom_edit_url:null},l=void 0,d={unversionedId:"api/interfaces/SernEventCommand",id:"api/interfaces/SernEventCommand",title:"Interface: SernEventCommand<T>",description:"Type parameters",source:"@site/docs/api/interfaces/SernEventCommand.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/SernEventCommand",permalink:"/docs/api/interfaces/SernEventCommand",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"SernEventCommand",title:"Interface: SernEventCommand<T>",sidebar_label:"SernEventCommand",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"SernEmitterPlugin",permalink:"/docs/api/interfaces/SernEmitterPlugin"},next:{title:"SernEventPlugin",permalink:"/docs/api/interfaces/SernEventPlugin"}},p={},o=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"description",id:"description",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"name",id:"name",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"onEvent",id:"onevent",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"plugins",id:"plugins",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"type",id:"type",level:3},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"Methods",id:"methods",level:2},{value:"execute",id:"execute",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides-2",level:4},{value:"Defined in",id:"defined-in-5",level:4}],s={toc:o},y="wrapper";function g(e){let{components:n,...r}=e;return(0,a.yg)(y,(0,t.c)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"type-parameters"},"Type parameters"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"T")),(0,a.yg)("td",{parentName:"tr",align:"left"},"extends keyof ",(0,a.yg)("a",{parentName:"td",href:"/docs/api/interfaces/SernEventsMapping"},(0,a.yg)("inlineCode",{parentName:"a"},"SernEventsMapping"))," = keyof ",(0,a.yg)("a",{parentName:"td",href:"/docs/api/interfaces/SernEventsMapping"},(0,a.yg)("inlineCode",{parentName:"a"},"SernEventsMapping")))))),(0,a.yg)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"Module")),(0,a.yg)("p",{parentName:"li"},"\u21b3 ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"SernEventCommand"))))),(0,a.yg)("h2",{id:"properties"},"Properties"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.yg)("strong",{parentName:"p"},"description"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"string")),(0,a.yg)("h4",{id:"inherited-from"},"Inherited from"),(0,a.yg)("p",null,"Module.description"),(0,a.yg)("h4",{id:"defined-in"},"Defined in"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/9d5c6c7/src/types/core-modules.ts#L37"},"src/types/core-modules.ts:37")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"name"},"name"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.yg)("strong",{parentName:"p"},"name"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"T")),(0,a.yg)("h4",{id:"overrides"},"Overrides"),(0,a.yg)("p",null,"Module.name"),(0,a.yg)("h4",{id:"defined-in-1"},"Defined in"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/9d5c6c7/src/types/core-modules.ts#L43"},"src/types/core-modules.ts:43")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"onevent"},"onEvent"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"onEvent"),": ",(0,a.yg)("a",{parentName:"p",href:"/docs/api/interfaces/ControlPlugin"},(0,a.yg)("inlineCode",{parentName:"a"},"ControlPlugin")),"<",(0,a.yg)("inlineCode",{parentName:"p"},"any"),"[]",">","[]"),(0,a.yg)("h4",{id:"inherited-from-1"},"Inherited from"),(0,a.yg)("p",null,"Module.onEvent"),(0,a.yg)("h4",{id:"defined-in-2"},"Defined in"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/9d5c6c7/src/types/core-modules.ts#L35"},"src/types/core-modules.ts:35")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"plugins"},"plugins"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"plugins"),": ",(0,a.yg)("a",{parentName:"p",href:"/docs/api/interfaces/InitPlugin"},(0,a.yg)("inlineCode",{parentName:"a"},"InitPlugin")),"<",(0,a.yg)("inlineCode",{parentName:"p"},"any"),"[]",">","[]"),(0,a.yg)("h4",{id:"inherited-from-2"},"Inherited from"),(0,a.yg)("p",null,"Module.plugins"),(0,a.yg)("h4",{id:"defined-in-3"},"Defined in"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/9d5c6c7/src/types/core-modules.ts#L36"},"src/types/core-modules.ts:36")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"type"},"type"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"type"),": ",(0,a.yg)("a",{parentName:"p",href:"/docs/api/enums/EventType#sern"},(0,a.yg)("inlineCode",{parentName:"a"},"Sern"))),(0,a.yg)("h4",{id:"overrides-1"},"Overrides"),(0,a.yg)("p",null,"Module.type"),(0,a.yg)("h4",{id:"defined-in-4"},"Defined in"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/9d5c6c7/src/types/core-modules.ts#L44"},"src/types/core-modules.ts:44")),(0,a.yg)("h2",{id:"methods"},"Methods"),(0,a.yg)("h3",{id:"execute"},"execute"),(0,a.yg)("p",null,"\u25b8 ",(0,a.yg)("strong",{parentName:"p"},"execute"),"(",(0,a.yg)("inlineCode",{parentName:"p"},"...args"),"): ",(0,a.yg)("inlineCode",{parentName:"p"},"unknown")),(0,a.yg)("h4",{id:"parameters"},"Parameters"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"...args")),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("a",{parentName:"td",href:"/docs/api/interfaces/SernEventsMapping"},(0,a.yg)("inlineCode",{parentName:"a"},"SernEventsMapping")),"[",(0,a.yg)("inlineCode",{parentName:"td"},"T"),"]")))),(0,a.yg)("h4",{id:"returns"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"unknown")),(0,a.yg)("h4",{id:"overrides-2"},"Overrides"),(0,a.yg)("p",null,"Module.execute"),(0,a.yg)("h4",{id:"defined-in-5"},"Defined in"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/9d5c6c7/src/types/core-modules.ts#L45"},"src/types/core-modules.ts:45")))}g.isMDXComponent=!0}}]);