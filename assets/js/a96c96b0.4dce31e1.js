"use strict";(self.webpackChunk_sern_website=self.webpackChunk_sern_website||[]).push([[2640],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4713:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},i="Goal",l={unversionedId:"guide/walkthrough/goal",id:"guide/walkthrough/goal",title:"Goal",description:"This walkthrough will be written in TypeScript but will have JavaScript snippets throughout.",source:"@site/docs/guide/walkthrough/goal.md",sourceDirName:"guide/walkthrough",slug:"/guide/walkthrough/goal",permalink:"/docs/guide/walkthrough/goal",draft:!1,editUrl:"https://github.com/sern-handler/website/edit/main/docs/guide/walkthrough/goal.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Preparing to Code",permalink:"/docs/guide/getting-started/preparing"},next:{title:"Create a new project",permalink:"/docs/guide/walkthrough/new-project"}},s={},p=[{value:"Using @sapphire/framework",id:"using-sapphireframework",level:3},{value:"Using @sern/handler",id:"using-sernhandler",level:3}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"goal"},"Goal"),(0,a.kt)("p",null,"This walkthrough will be written in ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," but will have JavaScript snippets throughout. "),(0,a.kt)("h1",{id:"make-robust-modular-bots"},"Make robust, modular, bots"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Modularity"),":  sern is built with modularity in mind. You can swap pieces and parts easily. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Familiar"),": commands and structures are similar to classic v12 handlers and the official discord.js command handler guide, while packing many features"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Concise"),": Too much code is a liability. with sern, write less for more \ud83e\udd2f ")),(0,a.kt)("h3",{id:"using-sapphireframework"},"Using @sapphire/framework"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="commands/ping.ts" showLineNumbers',title:'"commands/ping.ts"',showLineNumbers:!0},"import { Command } from '@sapphire/framework'\nimport type { CommandInteraction } from 'discord.js'\n\nexport class PingCommand extends Command {\n  public constructor(context: Command.Context) {\n    super(context, {\n      description: 'Pong!',\n      chatInputCommand: {\n        register: true,\n      },\n    })\n  }\n  public async chatInputRun(interaction: CommandInteraction) {\n    await interaction.reply('Pong!')\n  }\n}\n")),(0,a.kt)("h3",{id:"using-sernhandler"},"Using @sern/handler"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="commands/ping.ts" showLineNumbers',title:'"commands/ping.ts"',showLineNumbers:!0},"import { commandModule, CommandType } from '@sern/handler'\nimport { publish } from '../plugins';\n\nexport default commandModule({ \n    type: CommandType.Both,\n    plugins: [publish()],\n    description: 'Pong!',\n    execute: (ctx, args) => {\n        await ctx.reply('Pong!')\n    }\n})\n")),(0,a.kt)("p",null,"Keep in mind the above example acts as both a slash command AND text command"))}m.isMDXComponent=!0}}]);