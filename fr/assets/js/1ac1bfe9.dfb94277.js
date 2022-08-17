"use strict";(self.webpackChunk_sern_website=self.webpackChunk_sern_website||[]).push([[5],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return t?r.createElement(g,l(l({ref:n},u),{},{components:t})):r.createElement(g,l({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4291:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const a={sidebar_position:5},l="Plugins",i={unversionedId:"guide/walkthrough/plugins",id:"guide/walkthrough/plugins",title:"Plugins",description:"As of now, modules seem a little underwhelming. It appears that sern doesn't have all the features of a standard handler,",source:"@site/docs/guide/walkthrough/plugins.md",sourceDirName:"guide/walkthrough",slug:"/guide/walkthrough/plugins",permalink:"/fr/docs/guide/walkthrough/plugins",draft:!1,editUrl:"https://github.com/sern-handler/website/edit/master/docs/guide/walkthrough/plugins.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"First Event Module",permalink:"/fr/docs/guide/walkthrough/first-event"},next:{title:"The SernEmitter class",permalink:"/fr/docs/guide/walkthrough/sern-emitter"}},s={},p=[{value:"Command Plugins",id:"command-plugins",level:2},{value:"The controller object",id:"the-controller-object",level:3},{value:"Event Plugins",id:"event-plugins",level:2}],u={toc:p};function c(e){let{components:n,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"plugins"},"Plugins"),(0,o.kt)("p",null,"As of now, modules seem a little underwhelming. It appears that sern doesn't have all the features of a standard handler, which manages permissions, categorizes, cool-downs, publishes application commands, role permissions, etc."),(0,o.kt)("p",null,"Many important parts that manage access and help streamline command creation to make are apparently absent. Below is an example of an event plugin, one of the types of plugins."),(0,o.kt)("p",null,"Typescript:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'export function serenOnly(): EventPlugin<CommandType.Both> {\n  return {\n    type: PluginType.Event,\n    async execute([ctx, args], controller) {\n      if (ctx.user.id !== "182326315813306368") {\n        await ctx.reply({content: "You cannot use this command"})\n        return controller.stop()\n      }\n      return controller.next();\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Javascript:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'export function serenOnly() {\n    return {\n        type: PluginType.Event,\n        async execute([ctx, args], controller) {\n            if (ctx.user.id !== "182326315813306368") {\n                await ctx.reply({content: "You cannot use this command"})\n                return controller.stop()\n            }\n            return controller.next();\n        }\n    }\n}\n')),(0,o.kt)("br",null)," As part of our extensibility, the plugins feature make sern just as powerful, if not more powerful than standard handlers. Plugins modify and add new behavior to standard modules, extending customizability and implementing automation.",(0,o.kt)("br",null)," At the moment, there are two types of plugins:",(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Command Plugins"),(0,o.kt)("li",{parentName:"ul"},"Event Plugins")),(0,o.kt)("h2",{id:"command-plugins"},"Command Plugins"),(0,o.kt)("p",null,"All modules are registered into sern's system. With command plugins, you can modify how commands are loaded,\nor do some kind of preprocessing before they are loaded into sern."),(0,o.kt)("h3",{id:"the-controller-object"},"The controller object"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface Controller {\n  next: () => Ok<void>;\n  stop: () => Err<void>;\n}\n")),(0,o.kt)("p",null,"An instance of the above object is passed into every plugin. ",(0,o.kt)("br",null),"\nThis controls whether a module is stored into sern. ",(0,o.kt)("br",null),"\nTypescript:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export function inDir(dir : string) : CommandPlugin<CommandType.Both> {\n  return {\n    type: PluginType.Command,\n    async execute(wrapper, { absPath, module }, controller) {\n      if(path.dirname(absPath) !== dir) {\n        console.log(+new Date(),  `${module.name} is not in the correct directory!`);\n        return controller.stop()\n      }\n      console.log(+new Date(),  `${module.name} is in the correct directory!`);\n      return controller.next(); //continue\n    }\n  }\n}\n")),(0,o.kt)("p",null,"Javascript:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"export function inDir(dir : string) {\n  return {\n    type: PluginType.Command,\n    async execute(wrapper, { absPath, module }, controller) {\n        if(path.dirname(absPath) !== dir) {\n          console.log(+new Date(),  `${module.name} is not in the correct directory!`);\n          return controller.stop()\n        }\n        console.log(+new Date(),  `${module.name} is in the correct directory!`);\n        return controller.next(); //continue\n    }\n  }\n}\n")),(0,o.kt)("p",null,"Above, this simple plugin logs that the module has been loaded along with a timestamp. ",(0,o.kt)("br",null),"\nAgain, it is up to ",(0,o.kt)("strong",{parentName:"p"},"you")," to define plugin logic! The possibilities to customize your bots are endless."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Command Plugins are good for ensuring the shape, location, and preprocessing of your commands.")),(0,o.kt)("h2",{id:"event-plugins"},"Event Plugins"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"event-plugins",src:t(6061).Z,width:"542",height:"377"})," ",(0,o.kt)("br",null)),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An event is emitted by discord.js."),(0,o.kt)("li",{parentName:"ul"},"This event is passed to all plugins (",(0,o.kt)("strong",{parentName:"li"},"in order!!"),"),"),(0,o.kt)("li",{parentName:"ul"},"If all are successful,")),(0,o.kt)("p",null,"The command is executed. Calling ",(0,o.kt)("inlineCode",{parentName:"p"},"controller.stop()")," notifies sern that this command should not be run,\nand this event is ignored."),(0,o.kt)("p",null,"So, what does a command module look like with plugins?"),(0,o.kt)("p",null,"Typescript:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { commandModule, CommandType } from '@sern/handler';\n\nexport default commandModule({\n    type: CommandType.Both,\n    plugins: [\n        inDir(\"other\"), \n        serenOnly()\n    ],\n    description: 'A ping command',\n    //alias : [],\n    execute: async (ctx, args) => {\n        await ctx.reply({ content: 'Pong \ud83c\udfd3' });\n    },\n});\n")),(0,o.kt)("p",null,"Javascript:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const { commandModule, CommandType } = require('@sern/handler');\n\nexports.default = commandModule({\n    type: CommandType.Both,\n    plugins: [\n        inDir(\"other\"), \n        serenOnly() //The plugins in this section applied to this module!\n    ],\n    description: 'A ping command',\n    //alias : [],\n    execute: async (ctx, args) => {\n        await ctx.reply({ content: 'Pong \ud83c\udfd3' });\n    },\n});\n")),(0,o.kt)("p",null,"Can you predict the behavior of this command?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Before loading into sern, this command module will check if this module is in the correct directory ",(0,o.kt)("inlineCode",{parentName:"li"},"other"),"."),(0,o.kt)("li",{parentName:"ul"},"Before an event occurs, this command module will check if the user has the id ",(0,o.kt)("inlineCode",{parentName:"li"},"182326315813306368"),".")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Event Plugins are good for filtering, preconditions, parsing.")),(0,o.kt)("p",null,"If all plugins return ",(0,o.kt)("inlineCode",{parentName:"p"},"controller.next()"),", this command replies ",(0,o.kt)("inlineCode",{parentName:"p"},"Pong \ud83c\udfd3")))}c.isMDXComponent=!0},6061:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/eventplugins.drawio-f22ee78041e60a62a45024f542a2b104.svg"}}]);