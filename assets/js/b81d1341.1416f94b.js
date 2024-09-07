"use strict";(self.webpackChunkredback_documentation=self.webpackChunkredback_documentation||[]).push([[4135],{19651:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=n(74848),s=n(28453);const r={sidebar_position:10},o="Adjusting MAC address anonymization for the MQTT Manager",a={id:"cybersecurity/secure-code/adjusting-mac",title:"Adjusting MAC address anonymization for the MQTT Manager",description:"Proposed changes for MQTT",source:"@site/docs/cybersecurity/secure-code/adjusting-mac.md",sourceDirName:"cybersecurity/secure-code",slug:"/cybersecurity/secure-code/adjusting-mac",permalink:"/redback-documentation/docs/cybersecurity/secure-code/adjusting-mac",draft:!1,unlisted:!1,editUrl:"https://github.com/Redback-Operations/redback-documentation/blob/main/docs/cybersecurity/secure-code/adjusting-mac.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Bandit: Advanced Security Scanning for Redback Operations",permalink:"/redback-documentation/docs/cybersecurity/secure-code/Bandit_Documentation"},next:{title:"MQTT Summary",permalink:"/redback-documentation/docs/cybersecurity/secure-code/project-1-MQTT"}},c={},d=[];function h(e){const t={admonition:"admonition",code:"code",h1:"h1",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"adjusting-mac-address-anonymization-for-the-mqtt-manager",children:"Adjusting MAC address anonymization for the MQTT Manager"}),"\n",(0,i.jsx)(t.p,{children:"Proposed changes for MQTT"}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Author:"})," Rinor Gimolli"]})}),"\n",(0,i.jsx)(t.p,{children:"The code, using Python, aims to use data anonymization of client information \u2013 more\r\nspecifically client names and client MAC addresses. The earlier code did this however, at a\r\nrequest, the idea was to scramble the MAC address into a alphanumeric ID \u2013 with the option\r\nto convert it back."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Initial Code:"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Initial Code",src:n(44302).A+"",width:"602",height:"270"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Code After Changes"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"After Code",src:n(1957).A+"",width:"602",height:"344"})}),"\n",(0,i.jsx)(t.p,{children:"This update hashes the MAC address using MD5, to the encode it in Base64, then it shortens it to 10\r\ncharacters. This is used to create an alphanumeric ID. Due to these changes, 2 libraries need to be\r\nimported as shown below."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"import base64\r\nimport hashlib\n"})}),"\n",(0,i.jsx)(t.p,{children:"Although with these changes reversing to get the original MAC address still isn\u2019t possible, it is still the\r\nmost plausible method. For that to happen we would have to convert the hashes into encryption,\r\nwhich in itself is riskier"})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1957:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/mac-changes-1622fd9c20198ceb88e20b5f5e524ab5.jpg"},44302:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/mac-initial-ae19d75c78843436f1080a4c3568133e.jpg"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var i=n(96540);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);