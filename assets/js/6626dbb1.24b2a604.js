"use strict";(self.webpackChunk_sern_website=self.webpackChunk_sern_website||[]).push([[9708],{5788:(e,n,t)=>{t.d(n,{Iu:()=>p,yg:()=>m});var a=t(1504);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(t),g=r,m=c["".concat(s,".").concat(g)]||c[g]||d[g]||l;return t?a.createElement(m,i(i({ref:n},p),{},{components:t})):a.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=g;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},5388:(e,n,t)=>{t.d(n,{c:()=>i});var a=t(1504),r=t(4971);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.c)(l.tabItem,i),hidden:t},n)}},1268:(e,n,t)=>{t.d(n,{c:()=>w});var a=t(5072),r=t(1504),l=t(4971),i=t(3943),o=t(5592),s=t(632),u=t(7128),p=t(1148);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function d(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??c(t);return function(e){const n=(0,u.w)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function g(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.Uz)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s._M)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function y(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,l=d(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[s,u]=m({queryString:t,groupId:a}),[c,y]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,p.IN)(t);return[a,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:a}),f=(()=>{const e=s??c;return g({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),y(e)}),[u,y,l]),tabValues:l}}var f=t(3664);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:n,block:t,selectedValue:o,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.MV)(),d=e=>{const n=e.currentTarget,t=p.indexOf(n),a=u[t].value;a!==o&&(c(n),s(a))},g=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;n=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;n=p[t]??p[p.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.c)("tabs",{"tabs--block":t},n)},u.map((e=>{let{value:n,label:t,attributes:i}=e;return r.createElement("li",(0,a.c)({role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,key:n,ref:e=>p.push(e),onKeyDown:g,onClick:d},i,{className:(0,l.c)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":o===n})}),t??n)})))}function v(e){let{lazy:n,children:t,selectedValue:a}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function N(e){const n=y(e);return r.createElement("div",{className:(0,l.c)("tabs-container",b.tabList)},r.createElement(h,(0,a.c)({},e,n)),r.createElement(v,(0,a.c)({},e,n)))}function w(e){const n=(0,f.c)();return r.createElement(N,(0,a.c)({key:String(n)},e))}},344:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var a=t(5072),r=(t(1504),t(5788)),l=t(1268),i=t(5388);const o={},s=void 0,u={unversionedId:"cli/build",id:"cli/build",title:"build",description:"Guiding Principles",source:"@site/docs/cli/build.md",sourceDirName:"cli",slug:"/cli/build",permalink:"/docs/cli/build",draft:!1,editUrl:"https://github.com/sern-handler/website/edit/main/docs/cli/build.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CLI",permalink:"/docs/cli/"},next:{title:"clear",permalink:"/docs/cli/clear"}},p={},c=[{value:"Guiding Principles",id:"guiding-principles",level:2},{value:"Experimental Features",id:"experimental-features",level:2},{value:"Features",id:"features",level:2},{value:"Implicits",id:"implicits",level:2},{value:"sern.build.js",id:"sernbuildjs",level:3},{value:"Usage",id:"usage",level:2},{value:"Adapting older projects",id:"adapting-older-projects",level:2},{value:"In depth",id:"in-depth",level:2},{value:"drop labels",id:"drop-labels",level:3},{value:"constants",id:"constants",level:3},{value:"process.env",id:"processenv",level:3}],d={toc:c},g="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(g,(0,a.c)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},'Usage: sern build [options]\n\nBuild your bot\n\nOptions:\n  -f --format [fmt]        The module system of your application. `cjs` or `esm` (default: "esm")\n  -m --mode [mode]         the mode for sern to build in. `production` or `development` (default: "development")\n  -W --suppress-warnings   suppress experimental warning\n  -p --project [filePath]  build with this sern.build file\n  -h, --help               display help for command\n')),(0,r.yg)("h2",{id:"guiding-principles"},"Guiding Principles"),(0,r.yg)("p",null,"When designing the ",(0,r.yg)("inlineCode",{parentName:"p"},"sern build")," command, our aim was to make building bot applications as simple as possible for the majority of developers. The setup process has been streamlined, and most of the configuration details have been handled for you. Here are some key points to keep in mind:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Minimal Configuration"),": In the vast majority (99%) of use cases, developers do not need to configure the bot application building process. We believe that simplicity is key, so only a few decisions need to be made on the developer's end.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Optimal Defaults"),": We've chosen sensible defaults. This means you can get started without getting bogged down by complex, unneeded configurations.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Finetuned for production bots"),": Our CLI leverages an opinionated build solution powered by esbuild. This ensures that bots are built without issues and can be shipped easily."))),(0,r.yg)("h2",{id:"experimental-features"},"Experimental Features"),(0,r.yg)("p",null,"Both the ",(0,r.yg)("inlineCode",{parentName:"p"},"sern build")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"sern publish")," commands are marked as experimental. While they might not be completely stable, they are designed to work for the majority of users. We appreciate any feedback in helping us make these features even better."),(0,r.yg)("h2",{id:"features"},"Features"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"sern build")," command comes equipped with a range of features designed to enhance your development process. Here's a glimpse of what it offers:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"esbuild Integration"),": our CLI takes inspiration from the efficiency of SvelteKit, ensuring your bot application is built effectively and with type safety. Leverage the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/esbuild/community-plugins"},"esbuild plugin ecosystem"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Zero Configuration"),": Building your bot application without additional configuration. The CLI handles most of the setup for you.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Experimental Image Support"),": We've introduced experimental support for top-level imports of PNG and JPG files, making it easier to include images in your bot application.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Compile Time Constants"),": Customize your build with constants such as ","_","_","DEV","_","_",", ","_","_","PROD","_","_",", allowing you to tailor your application to different production stages.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Development and Production Modes"),": The CLI supports both development and production modes, enabling you to tailor your bot application for different stages of development."))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Type-safe ",(0,r.yg)("inlineCode",{parentName:"strong"},"process.env")),": The CLI generates a type-safe ",(0,r.yg)("inlineCode",{parentName:"li"},"process.env"),", reducing potential errors.")),(0,r.yg)("h2",{id:"implicits"},"Implicits"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"command line arguments take precendence over sern.build configuration file"),(0,r.yg)("li",{parentName:"ul"},"default build format is ESM"),(0,r.yg)("li",{parentName:"ul"},"defineVersion = true"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"DEV")," AND ",(0,r.yg)("strong",{parentName:"li"},"PROD")," constants are configured. "),(0,r.yg)("li",{parentName:"ul"},"only a ",(0,r.yg)("a",{parentName:"li",href:"https://esbuild.github.io/content-types/#tsconfig-json"},"few tsconfig options")," are respected.")),(0,r.yg)("h3",{id:"sernbuildjs"},"sern.build.js"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"For any extra configuration you may need"),(0,r.yg)("li",{parentName:"ul"},"the cli was intentionally made to be installed globally, and we can't provide typings at a project level. If you need typings, here they are:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"type BuildOptions = {\n    /**\n      * Define __VERSION__\n      * This option is a quick switch to defining the __VERSION__ constant which will be a string of the version provided in \n      * cwd's package.json\n      */\n    defineVersion?: boolean \n    /**\n      * default = esm\n      */\n    format?: 'cjs' | 'esm'\n    /** \n      * extra esbuild plugins to build with sern.\n      */\n    esbuildPlugins?: esbuild.Plugin[]\n    /**\n     * https://esbuild.github.io/api/#drop-labels\n     **/\n    dropLabels?: string[]\n    /**\n     * https://esbuild.github.io/api/#define\n     **/\n    define?: Record<string, string>\n    /** \n    * Path to tsconfig\n    **/\n    tsconfig?: string;\n    /**\n      * default = 'development'\n      */\n    mode: 'production' | 'development',\n    /**\n      * will search for env file. If none exists, \n      * default to .env.\n      */\n    env?: string\n}\n")),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"sern build\n")),(0,r.yg)("p",null,"(that was easy)"),(0,r.yg)("h2",{id:"adapting-older-projects"},"Adapting older projects"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Change your tsconfig.json to extend our generated one. ")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{ \n    // highlight-start\n    "extends": "./.sern/tsconfig.json",\n    // highlight-end\n    "compilerOptions" : {\n        //all of your old fields  \n    }\n}\n')),(0,r.yg)("h2",{id:"in-depth"},"In depth"),(0,r.yg)("p",null,"We use the ",(0,r.yg)("inlineCode",{parentName:"p"},"define")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"drop labels")," api in C style macros to have easy development stage differences.\n",(0,r.yg)("a",{parentName:"p",href:"https://esbuild.github.io/api/#drop-labels"},"Here")," is the esbuild full API documentation"),(0,r.yg)("h3",{id:"drop-labels"},"drop labels"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"# mode is set to production\nsern build\n")),(0,r.yg)(l.c,{mdxType:"Tabs"},(0,r.yg)(i.c,{value:"input",label:"Input",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"__DEV__: console.log('This is for production only')\n__PROD__: console.log('This is for either mode')\n"))),(0,r.yg)(i.c,{value:"sh",label:"Running build for production",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"# mode is set to production\nsern build\n"))),(0,r.yg)(i.c,{value:"output",label:"Output",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"__PROD__ console.log('This is for either mode')\n")))),(0,r.yg)("h3",{id:"constants"},"constants"),(0,r.yg)("p",null,"sern builds with three default constants. ","_","_","DEV","_","_",", ","_","_","PROD","_","_",", ","_","_","VERSION","_","_",". "),(0,r.yg)(l.c,{mdxType:"Tabs"},(0,r.yg)(i.c,{value:"input",label:"Preprocess",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"sern build\n"))),(0,r.yg)(i.c,{value:"sh",label:"Constants available and typesafe!",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"if(__PROD__) {\n    console.log('Bot version: ' + __VERSION__)\n}\n")))),(0,r.yg)("p",null,"Full esbuild documentation ",(0,r.yg)("a",{parentName:"p",href:"https://esbuild.github.io/api/#define"},"here"),"\nAdd more to the ",(0,r.yg)("inlineCode",{parentName:"p"},"define")," field in build options (only availible with a ",(0,r.yg)("inlineCode",{parentName:"p"},"sern.build")," file at the moment."),(0,r.yg)("h3",{id:"processenv"},"process.env"),(0,r.yg)("p",null,"We generate your process.env with ",(0,r.yg)("inlineCode",{parentName:"p"},"dotenv")," and generate typings for process.env. Less hassle!"),(0,r.yg)(l.c,{mdxType:"Tabs"},(0,r.yg)(i.c,{value:"input",label:".env",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"DISCORD_TOKEN=<your token>\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"process.env.DISCORD_TOKEN // string | undefined (not typesafe :()\n"))),(0,r.yg)(i.c,{value:"sh",label:"sern build",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"sern build\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"process.env.DISCORD_TOKEN // string  (typesafe :))\n")))))}m.isMDXComponent=!0}}]);