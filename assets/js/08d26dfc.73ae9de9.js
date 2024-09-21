"use strict";(self.webpackChunkredback_documentation=self.webpackChunkredback_documentation||[]).push([[3750],{65532:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var o=t(74848),i=t(28453);const c={sidebar_position:80},r="How to fix Bluetooth Connectivity for Raspberry Pi with Wahoo device connection?",s={id:"project-1/iot/ble-connectivity/BLEConnectivityFix",title:"BLEConnectivityFix",description:"This PDF document is old and some of its contents may be wrong. You should not need to use this and instead rely on the newer bleautoconnect.sh script.",source:"@site/docs/project-1/iot/ble-connectivity/BLEConnectivityFix.md",sourceDirName:"project-1/iot/ble-connectivity",slug:"/project-1/iot/ble-connectivity/BLEConnectivityFix",permalink:"/redback-documentation/docs/project-1/iot/ble-connectivity/BLEConnectivityFix",draft:!1,unlisted:!1,editUrl:"https://github.com/Redback-Operations/redback-documentation/blob/main/docs/project-1/iot/ble-connectivity/BLEConnectivityFix.md",tags:[],version:"current",sidebarPosition:80,frontMatter:{sidebar_position:80},sidebar:"tutorialSidebar",previous:{title:"BLE-Auto-Connect-Script",permalink:"/redback-documentation/docs/project-1/iot/ble-connectivity/BLE-Auto-Connect-Script"},next:{title:"Project 2",permalink:"/redback-documentation/docs/category/project-2"}},a={},d=[];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.admonition,{title:"Important!",type:"danger",children:(0,o.jsxs)(n.p,{children:["This PDF document is old and some of its contents may be wrong. You should not need to use this and instead rely on the newer ",(0,o.jsx)(n.code,{children:"ble_auto_connect.sh"})," script."]})}),"\n",(0,o.jsx)(n.h1,{id:"how-to-fix-bluetooth-connectivity-for-raspberry-pi-with-wahoo-device-connection",children:"How to fix Bluetooth Connectivity for Raspberry Pi with Wahoo device connection?"}),"\n",(0,o.jsx)(n.p,{children:"Due to the volatility of BLE connection, while running the script to have the Raspberry Pi send data to the cloud, you might have encountered the following message:"}),"\n",(0,o.jsx)(n.p,{children:"[MAC ADDRESS] Connected"}),"\n",(0,o.jsx)(n.p,{children:"[MAC ADDRESS] Disconnected"}),"\n",(0,o.jsx)(n.p,{children:"While research is being done to move to a serial connection, I have created a way through which the Wahoo device will stay connected to the Raspberry after which the script can be ran for testing and showcases."}),"\n",(0,o.jsx)(n.p,{children:"Here are the steps to follow:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Open a terminal in the Raspberry Pi."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Ensure the Pi\u2019s Bluetooth is switched on."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Type \u2018sudo bluetoothctl\u2019. It has already been installed in Bike 1\u2019s Raspberry Pi."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Type in \u2018agent on\u2019, then \u2018default-agent\u2019 to enable device scanning and connections."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"As the device is already connected, you can type connect [MAC ADDRESS OF DEVICE]*."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"In case of the device being unpaired with the Pi, type in \u2018pair [MAC ADDRESS OF DEVICE]*."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Run your script and the Bluetooth connectivity will stay on throughout the script being ran."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["*Check the constants.py file in the lib file from the ",(0,o.jsx)(n.a,{href:"https://github.com/Redback-Operations/redback-smartbike-iot",children:"redback-smartbike-iot"})," repository."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var o=t(96540);const i={},c=o.createContext(i);function r(e){const n=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);