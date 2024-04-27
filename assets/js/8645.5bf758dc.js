"use strict";(self.webpackChunksern_website=self.webpackChunksern_website||[]).push([[8645],{7293:(n,e,t)=>{t.d(e,{A:()=>_});var i=t(6540),s=t(4848);function o(n){const{mdxAdmonitionTitle:e,rest:t}=function(n){const e=i.Children.toArray(n),t=e.find((n=>i.isValidElement(n)&&"mdxAdmonitionTitle"===n.type)),o=e.filter((n=>n!==t)),a=t?.props.children;return{mdxAdmonitionTitle:a,rest:o.length>0?(0,s.jsx)(s.Fragment,{children:o}):null}}(n.children),o=n.title??e;return{...n,...o&&{title:o},children:t}}var a=t(53),l=t(1312),r=t(7559);const c={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function d(n){let{type:e,className:t,children:i}=n;return(0,s.jsx)("div",{className:(0,a.A)(r.G.common.admonition,r.G.common.admonitionType(e),c.admonition,t),children:i})}function u(n){let{icon:e,title:t}=n;return(0,s.jsxs)("div",{className:c.admonitionHeading,children:[(0,s.jsx)("span",{className:c.admonitionIcon,children:e}),t]})}function m(n){let{children:e}=n;return e?(0,s.jsx)("div",{className:c.admonitionContent,children:e}):null}function h(n){const{type:e,icon:t,title:i,children:o,className:a}=n;return(0,s.jsxs)(d,{type:e,className:a,children:[(0,s.jsx)(u,{title:i,icon:t}),(0,s.jsx)(m,{children:o})]})}function f(n){return(0,s.jsx)("svg",{viewBox:"0 0 14 16",...n,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const x={icon:(0,s.jsx)(f,{}),title:(0,s.jsx)(l.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function j(n){return(0,s.jsx)(h,{...x,...n,className:(0,a.A)("alert alert--secondary",n.className),children:n.children})}function p(n){return(0,s.jsx)("svg",{viewBox:"0 0 12 16",...n,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const v={icon:(0,s.jsx)(p,{}),title:(0,s.jsx)(l.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function g(n){return(0,s.jsx)(h,{...v,...n,className:(0,a.A)("alert alert--success",n.className),children:n.children})}function A(n){return(0,s.jsx)("svg",{viewBox:"0 0 14 16",...n,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const N={icon:(0,s.jsx)(A,{}),title:(0,s.jsx)(l.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function y(n){return(0,s.jsx)(h,{...N,...n,className:(0,a.A)("alert alert--info",n.className),children:n.children})}function C(n){return(0,s.jsx)("svg",{viewBox:"0 0 16 16",...n,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const b={icon:(0,s.jsx)(C,{}),title:(0,s.jsx)(l.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function w(n){return(0,s.jsx)("svg",{viewBox:"0 0 12 16",...n,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const z={icon:(0,s.jsx)(w,{}),title:(0,s.jsx)(l.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const T={icon:(0,s.jsx)(C,{}),title:(0,s.jsx)(l.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const M={...{note:j,tip:g,info:y,warning:function(n){return(0,s.jsx)(h,{...b,...n,className:(0,a.A)("alert alert--warning",n.className),children:n.children})},danger:function(n){return(0,s.jsx)(h,{...z,...n,className:(0,a.A)("alert alert--danger",n.className),children:n.children})}},...{secondary:n=>(0,s.jsx)(j,{title:"secondary",...n}),important:n=>(0,s.jsx)(y,{title:"important",...n}),success:n=>(0,s.jsx)(g,{title:"success",...n}),caution:function(n){return(0,s.jsx)(h,{...T,...n,className:(0,a.A)("alert alert--warning",n.className),children:n.children})}}};function _(n){const e=o(n),t=(i=e.type,M[i]||(console.warn(`No admonition component found for admonition type "${i}". Using Info as fallback.`),M.info));var i;return(0,s.jsx)(t,{...e})}},8645:(n,e,t)=>{t.d(e,{A:()=>T});var i=t(6540),s=t(8453),o=t(5260),a=t(4428),l=t(4848);var r=t(5489);var c=t(53),d=t(2303),u=t(1422);const m={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function h(n){return!!n&&("SUMMARY"===n.tagName||h(n.parentElement))}function f(n,e){return!!n&&(n===e||f(n.parentElement,e))}function x(n){let{summary:e,children:t,...s}=n;const o=(0,d.A)(),a=(0,i.useRef)(null),{collapsed:r,setCollapsed:x}=(0,u.u)({initialState:!s.open}),[j,p]=(0,i.useState)(s.open),v=i.isValidElement(e)?e:(0,l.jsx)("summary",{children:e??"Details"});return(0,l.jsxs)("details",{...s,ref:a,open:j,"data-collapsed":r,className:(0,c.A)(m.details,o&&m.isBrowser,s.className),onMouseDown:n=>{h(n.target)&&n.detail>1&&n.preventDefault()},onClick:n=>{n.stopPropagation();const e=n.target;h(e)&&f(e,a.current)&&(n.preventDefault(),r?(x(!1),p(!0)):x(!0))},children:[v,(0,l.jsx)(u.N,{lazy:!1,collapsed:r,disableSSRStyle:!0,onCollapseTransitionEnd:n=>{x(n),p(!n)},children:(0,l.jsx)("div",{className:m.collapsibleContent,children:t})})]})}const j={details:"details_b_Ee"},p="alert alert--info";function v(n){let{...e}=n;return(0,l.jsx)(x,{...e,className:(0,c.A)(p,j.details,e.className)})}function g(n){const e=i.Children.toArray(n.children),t=e.find((n=>i.isValidElement(n)&&"summary"===n.type)),s=(0,l.jsx)(l.Fragment,{children:e.filter((n=>n!==t))});return(0,l.jsx)(v,{...n,summary:t,children:s})}var A=t(1107);function N(n){return(0,l.jsx)(A.A,{...n})}const y={containsTaskList:"containsTaskList_mC6p"};function C(n){if(void 0!==n)return(0,c.A)(n,n?.includes("contains-task-list")&&y.containsTaskList)}const b={img:"img_ev3q"};var w=t(7293);const z={Head:o.A,details:g,Details:g,code:function(n){return i.Children.toArray(n.children).every((n=>"string"==typeof n&&!n.includes("\n")))?(0,l.jsx)("code",{...n}):(0,l.jsx)(a.A,{...n})},a:function(n){return(0,l.jsx)(r.A,{...n})},pre:function(n){return(0,l.jsx)(l.Fragment,{children:n.children})},ul:function(n){return(0,l.jsx)("ul",{...n,className:C(n.className)})},img:function(n){return(0,l.jsx)("img",{loading:"lazy",...n,className:(e=n.className,(0,c.A)(e,b.img))});var e},h1:n=>(0,l.jsx)(N,{as:"h1",...n}),h2:n=>(0,l.jsx)(N,{as:"h2",...n}),h3:n=>(0,l.jsx)(N,{as:"h3",...n}),h4:n=>(0,l.jsx)(N,{as:"h4",...n}),h5:n=>(0,l.jsx)(N,{as:"h5",...n}),h6:n=>(0,l.jsx)(N,{as:"h6",...n}),admonition:w.A,mermaid:()=>null};function T(n){let{children:e}=n;return(0,l.jsx)(s.x,{components:z,children:e})}},8453:(n,e,t)=>{t.d(e,{R:()=>a,x:()=>l});var i=t(6540);const s={},o=i.createContext(s);function a(n){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),i.createElement(o.Provider,{value:e},n.children)}}}]);