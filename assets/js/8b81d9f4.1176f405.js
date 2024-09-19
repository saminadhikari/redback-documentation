"use strict";(self.webpackChunkredback_documentation=self.webpackChunkredback_documentation||[]).push([[8819],{70910:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=i(74848),n=i(28453);const o={sidebar_position:1},a="Wahoo Device Interfacing",s={id:"project-1/iot/wahoo-devices/Wahoo-Device-Interfacing",title:"Wahoo Device Interfacing",description:"The Raspberry Pi communicates with the bike through Bluetooth Low Energy (BLE), specifically by pairing with the KICKR smart trainer (the other devices automatically pair with the KICKR smart trainer). The KICKR smart trainer runs an ATT server on it which the Raspberry Pi can then read and write values from/to. This document covers how the above works regarding the bike.",source:"@site/docs/project-1/iot/wahoo-devices/Wahoo-Device-Interfacing.md",sourceDirName:"project-1/iot/wahoo-devices",slug:"/project-1/iot/wahoo-devices/Wahoo-Device-Interfacing",permalink:"/redback-documentation/docs/project-1/iot/wahoo-devices/Wahoo-Device-Interfacing",draft:!1,unlisted:!1,editUrl:"https://github.com/Redback-Operations/redback-documentation/blob/main/docs/project-1/iot/wahoo-devices/Wahoo-Device-Interfacing.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Wahoo Devices",permalink:"/redback-documentation/docs/category/wahoo-devices"},next:{title:"KICKR Smart Trainer",permalink:"/redback-documentation/docs/project-1/iot/wahoo-devices/KICKR-Smart-Trainer"}},c={},d=[{value:"<u><strong>G</strong></u>eneric <u><strong>ATT</strong></u>ribute Profile (<strong>GATT</strong>)",id:"generic-attribute-profile-gatt",level:2},{value:"Profiles, Services &amp; Characteristics",id:"profiles-services--characteristics",level:3},{value:"Indication &amp; Notification",id:"indication--notification",level:3},{value:"Fitness Machine Service (<strong>FTMS</strong>)",id:"fitness-machine-service-ftms",level:2},{value:"Control Point",id:"control-point",level:3},{value:"Wahoo Devices",id:"wahoo-devices",level:2}];function h(e){const t={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"wahoo-device-interfacing",children:"Wahoo Device Interfacing"}),"\n",(0,r.jsx)(t.p,{children:"The Raspberry Pi communicates with the bike through Bluetooth Low Energy (BLE), specifically by pairing with the KICKR smart trainer (the other devices automatically pair with the KICKR smart trainer). The KICKR smart trainer runs an ATT server on it which the Raspberry Pi can then read and write values from/to. This document covers how the above works regarding the bike."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"image",src:i(78268).A+"",width:"779",height:"500"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"A map of the network of Wahoo devices & Raspberry Pi."})}),"\n",(0,r.jsxs)(t.h2,{id:"generic-attribute-profile-gatt",children:[(0,r.jsx)("u",{children:(0,r.jsx)(t.strong,{children:"G"})}),"eneric ",(0,r.jsx)("u",{children:(0,r.jsx)(t.strong,{children:"ATT"})}),"ribute Profile (",(0,r.jsx)(t.strong,{children:"GATT"}),")"]}),"\n",(0,r.jsx)(t.p,{children:"GATT is a BLE protocol and an extension to the base Attribute (ATT) protocol. It uses a client-server relationship, where only a single client may be connected to the server at any time. Values are stored in a lookup table on the server side, which the client may request to read or write to depending on the value\u2019s properties. These values are called characteristics and are covered in more detail in another part of this document. GATT establishes a large set of generic profiles (collections of services and characteristics) for common devices and uses of ATT, meaning that we can expect devices built for GATT to behave in certain ways with pre-existing characteristics and services."}),"\n",(0,r.jsx)(t.h3,{id:"profiles-services--characteristics",children:"Profiles, Services & Characteristics"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"image",src:i(13397).A+"",width:"642",height:"70"})}),"\n",(0,r.jsx)(t.p,{children:"Profiles are standardised generic collections of services and characteristics. They are standardised by the Bluetooth standardisation organisation - Bluetooth SIG - and cover a wide range of use cases including fitness machines."}),"\n",(0,r.jsx)(t.p,{children:"Services are groupings of characteristics under a common context. A service has a 16-bit or 128-bit UUID which identifies it and its characteristics."}),"\n",(0,r.jsx)(t.p,{children:"Characteristics are the values which can be read or written to and have their own 16-bit or 128-bit UUIDs. They can also have descriptors which provide more context of the characteristic\u2019s use."}),"\n",(0,r.jsx)(t.p,{children:"In addition to the generic services and characteristics, manufacturers may also include custom services and characteristics. These custom ones use the 128-bit UUIDs whereas the generic ones use the 16-bit UUIDs."}),"\n",(0,r.jsx)(t.h3,{id:"indication--notification",children:"Indication & Notification"}),"\n",(0,r.jsx)(t.p,{children:"As GATT is a slave-master relationship (where the client is master) response and acknowledgement from the server must be explicitly authorised by the client. So, if we want to be updated when a characteristic on the server is updated, we must enable notification on that characteristic. Likewise, to receive acknowledgements of success or error on a write, we need to enable indications for that characteristic. The library we use seems to automatically enable indications but this needs to be further investigated."}),"\n",(0,r.jsxs)(t.h2,{id:"fitness-machine-service-ftms",children:["Fitness Machine Service (",(0,r.jsx)(t.strong,{children:"FTMS"}),")"]}),"\n",(0,r.jsxs)(t.p,{children:["The FTMS generic profile deals specifically with fitness machines like the Wahoo devices and the details of their official generic profile can be found ",(0,r.jsx)(t.a,{href:"https://www.bluetooth.org/DocMan/handlers/DownloadDoc.ashx?doc_id=423422",children:"here"})," including generic services and characteristics."]}),"\n",(0,r.jsx)(t.h3,{id:"control-point",children:"Control Point"}),"\n",(0,r.jsx)(t.p,{children:"As these machines may also need to be controlled by a client to execute some sort of functions, for instance increasing the incline on the climber, a control point characteristic is exposed for this purpose."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"image",src:i(10596).A+"",width:"653",height:"526"})}),"\n",(0,r.jsx)(t.p,{children:"The FTMS control point characteristic enables control over the FTMS functions. Functions have unique operation codes (Op Codes) which are used to request they be executed. To send commands to the control point, the client must first subscribe to indications for the control point and then request control over the control point by using the Request Control Op Code 0x00. If control is given, then other functions can be executed by writing their Op Code and parameter values to the control point. Control over the control point can also be reset by writing the Op Code 0x01."}),"\n",(0,r.jsx)(t.h2,{id:"wahoo-devices",children:"Wahoo Devices"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/redback-documentation/docs/project-1/iot/wahoo-devices/KICKR-Smart-Trainer",children:"KICKR Smart Trainer"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/redback-documentation/docs/project-1/iot/wahoo-devices/KICKR-Climber",children:"KICKR Climber"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/redback-documentation/docs/project-1/iot/wahoo-devices/Wahoo-Headwind-Smart-Bluetooth-Fan",children:"Wahoo Headwind Smart Bluetooth Fan"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/redback-documentation/docs/project-1/iot/wahoo-devices/Wahoo-Cadence-Sensor",children:"Wahoo Cadence Sensor"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/redback-documentation/docs/project-1/iot/wahoo-devices/Wahoo-Heart-Rate-Monitor",children:"Wahoo Heart Rate Monitor"})}),"\n"]})]})}function l(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},10596:(e,t,i)=>{i.d(t,{A:()=>r});const r=i.p+"assets/images/control_point_request-79c154073a53b9fbbfdda29ffb981f95.png"},13397:(e,t,i)=>{i.d(t,{A:()=>r});const r="data:image/png;base64,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"},78268:(e,t,i)=>{i.d(t,{A:()=>r});const r=i.p+"assets/images/wahoo_network_map-305be53f35075ba27d40ccf741e1d255.png"},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>s});var r=i(96540);const n={},o=r.createContext(n);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);