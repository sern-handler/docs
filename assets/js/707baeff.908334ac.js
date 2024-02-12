"use strict";(self.webpackChunk_sern_website=self.webpackChunk_sern_website||[]).push([[5528],{5788:(e,n,t)=>{t.d(n,{Iu:()=>u,yg:()=>y});var r=t(1504);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(t),m=i,y=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return t?r.createElement(y,l(l({ref:n},u),{},{components:t})):r.createElement(y,l({ref:n},u))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5252:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=t(5072),i=(t(1504),t(5788));const a={id:"EventType",title:"Enumeration: EventType",sidebar_label:"EventType",sidebar_position:0,custom_edit_url:null},l=void 0,o={unversionedId:"api/enums/EventType",id:"api/enums/EventType",title:"Enumeration: EventType",description:"A bitfield that discriminates event modules",source:"@site/docs/api/enums/EventType.md",sourceDirName:"api/enums",slug:"/api/enums/EventType",permalink:"/docs/api/enums/EventType",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"EventType",title:"Enumeration: EventType",sidebar_label:"EventType",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"CommandType",permalink:"/docs/api/enums/CommandType"},next:{title:"PayloadType",permalink:"/docs/api/enums/PayloadType"}},s={},p=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"Discord",id:"discord",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"External",id:"external",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"Sern",id:"sern",level:3},{value:"Defined in",id:"defined-in-2",level:4}],u={toc:p},d="wrapper";function c(e){let{components:n,...t}=e;return(0,i.yg)(d,(0,r.c)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"A bitfield that discriminates event modules"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-ts"},"export default eventModule({\n    //highlight-next-line\n    type : EventType.Discord,\n    name : 'guildMemberAdd'\n    execute(member : GuildMember) {\n        console.log(member)\n    }\n})\n")),(0,i.yg)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,i.yg)("h3",{id:"discord"},"Discord"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"Discord")," = ",(0,i.yg)("inlineCode",{parentName:"p"},"1")),(0,i.yg)("p",null,"The EventType for handling discord events"),(0,i.yg)("h4",{id:"defined-in"},"Defined in"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/9d5c6c7/src/core/structures/enums.ts#L51"},"src/core/structures/enums.ts:51")),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"external"},"External"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"External")," = ",(0,i.yg)("inlineCode",{parentName:"p"},"3")),(0,i.yg)("p",null,"The EventType for handling external events.\nCould be for example, ",(0,i.yg)("inlineCode",{parentName:"p"},"process")," events, database events"),(0,i.yg)("h4",{id:"defined-in-1"},"Defined in"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/9d5c6c7/src/core/structures/enums.ts#L60"},"src/core/structures/enums.ts:60")),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"sern"},"Sern"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"Sern")," = ",(0,i.yg)("inlineCode",{parentName:"p"},"2")),(0,i.yg)("p",null,"The EventType for handling sern events"),(0,i.yg)("h4",{id:"defined-in-2"},"Defined in"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/9d5c6c7/src/core/structures/enums.ts#L55"},"src/core/structures/enums.ts:55")))}c.isMDXComponent=!0}}]);