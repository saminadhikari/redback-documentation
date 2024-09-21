"use strict";(self.webpackChunkredback_documentation=self.webpackChunkredback_documentation||[]).push([[8103],{10759:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var n=o(74848),i=o(28453);const r={sidebar_position:1},s="Next-Gen Dotty Research",a={id:"project-5/next-gen-dotty",title:"Next-Gen Dotty Research",description:"Where to next for BugBox",source:"@site/docs/project-5/next-gen-dotty.md",sourceDirName:"project-5",slug:"/project-5/next-gen-dotty",permalink:"/redback-documentation/docs/project-5/next-gen-dotty",draft:!1,unlisted:!1,editUrl:"https://github.com/Redback-Operations/redback-documentation/blob/main/docs/project-5/next-gen-dotty.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Project 5",permalink:"/redback-documentation/docs/category/project-5"},next:{title:"Teacher Research",permalink:"/redback-documentation/docs/category/teacher-research"}},d={},l=[{value:"The Current Bot",id:"the-current-bot",level:2},{value:"The Desired Outcome",id:"the-desired-outcome",level:2},{value:"Proposed Modules",id:"proposed-modules",level:2},{value:"Sound Module",id:"sound-module",level:3},{value:"Button Module",id:"button-module",level:3},{value:"Light / Display Module",id:"light--display-module",level:3},{value:"Inertia Module",id:"inertia-module",level:3},{value:"Battery Module",id:"battery-module",level:3},{value:"Standard Connection / Ease-Of-Use",id:"standard-connection--ease-of-use",level:2},{value:"Board Improvements",id:"board-improvements",level:2}];function h(e){const t={admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"next-gen-dotty-research",children:"Next-Gen Dotty Research"}),"\n",(0,n.jsx)(t.p,{children:"Where to next for BugBox"}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Document Creation:"})," 28 July, 2024. ",(0,n.jsx)(t.strong,{children:"Last Edited:"})," 28 July, 2024. ",(0,n.jsx)(t.strong,{children:"Author:"})," Kaleb Bowen."]})}),"\n",(0,n.jsx)(t.h2,{id:"the-current-bot",children:"The Current Bot"}),"\n",(0,n.jsx)(t.p,{children:"In the existing configuration of the \u201cDotty\u201d robot, the bot is powered by an Arduino Nano V3.0, supported by a custom PCB. This PCB enhances the user experience by embedding the motor drives directly and re-routing the pins of the board to logical spaces."}),"\n",(0,n.jsx)(t.p,{children:"The grunt force behind the bot is two TT motors, running a dual shaft gearbox, and variable voltage up to 12 volts.\r\nIn terms of capabilities, the bot recovers code through a command line interface connected via Micro USB to the bot, powered by Amazon EC2 which is fed from the BugBox Playground learning environment."}),"\n",(0,n.jsx)(t.p,{children:"Present expandability functions are rather limited both by the PCB layout and by the functionality of the Arduino Nano board. Beyond the core platform, the bot has the ability to expand to contain two ultrasonic sensors and two infrared sensors. These two sensors will be continuing into the thought process of the new model, and thus not discussed in the proposed new components."}),"\n",(0,n.jsx)(t.h2,{id:"the-desired-outcome",children:"The Desired Outcome"}),"\n",(0,n.jsx)(t.p,{children:"Looking into the long-term, the ideal outcome for the bot is to have an established base bot that can be effortlessly modified using pre-defined \u201cmodules\u201d that are integrated both with the physical bot and through the Playground environment. A refreshed Dotty will provide more opportunities for students to learn, across a larger number of auxiliary accessories to the device. In upgrading the device in this manner, so too will the price become modular, with schools being able to customise their purchasing to suit the current needs of the students, only buying what the accessories necessary to them. Expanding on this platform provides further growth in the BugBox curriculum, with the opportunity to grow challenges and tasks based off the functionality of extra modules. Building a solid foundation will also ensure that BugBox is sustainable into the future, with a modular build allowing for upgrading components with less waste when inevitable future iterations occur."}),"\n",(0,n.jsx)(t.h2,{id:"proposed-modules",children:"Proposed Modules"}),"\n",(0,n.jsx)(t.h3,{id:"sound-module",children:"Sound Module"}),"\n",(0,n.jsx)(t.p,{children:"Combining a small form factor microphone and speaker, Dotty would gain an enormous amount of functionality at a relatively low-cost and size. This dynamic duo would engage students through the following abilities:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Function to program sound effects to play back on the device, such as when running into objects and being responsive to objects through the two sensor modules."}),"\n",(0,n.jsx)(t.li,{children:"Using a combination of the microphone and quick swivel movements to recognise the location of where sound comes from."}),"\n",(0,n.jsx)(t.li,{children:"In a more advanced option, the implementation of basic voice commands could be added."}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"button-module",children:"Button Module"}),"\n",(0,n.jsx)(t.p,{children:"Adding a small panel of tactile buttons to the top of the bot will add physical controls to the device. This addition could relay with the Playground to act as a trigger of sorts, with each button assigned to a group of blocks created by the user. Use cases could include:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Buttons to control the direction and speed of Dotty."}),"\n",(0,n.jsx)(t.li,{children:"A soundboard."}),"\n",(0,n.jsx)(t.li,{children:"Quick switching between different scripts."}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"light--display-module",children:"Light / Display Module"}),"\n",(0,n.jsx)(t.p,{children:"Another responsive and useful addition would be through various types of light and display modules, which could be used through progression, moving up complexity of the module, such as:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Single LCDs"}),"\n",(0,n.jsx)(t.li,{children:"LCD panel"}),"\n",(0,n.jsx)(t.li,{children:"OLED display"}),"\n",(0,n.jsx)(t.li,{children:"Touch-screen display"}),"\n",(0,n.jsx)(t.li,{children:"E-ink display"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"These affordable options add another versatile learning experience, through the ability to program different light sequences and light displays. The more complex displays could be turned into fun displays such as a programmable \u201cface\u201d for the Dotty bot, which could be programmed by students to respond to events, potentially through gathered events of other sensors. A touch screen sensor could add even more reactivity to this, creating an interactive screen option, or working like the button module to deliver responsive feedback guided movements."}),"\n",(0,n.jsx)(t.h3,{id:"inertia-module",children:"Inertia Module"}),"\n",(0,n.jsx)(t.p,{children:"Likely suited for the older side of BugBox\u2019s demographic, an inertia module would provide useful statistics to the user. An inertia module would allow the bot to detect its speed, direction, and rotation status. This data could in-turn be used to provide feedback for other sensors, or simply returned to the user in order to complete assigned tasks."}),"\n",(0,n.jsx)(t.h3,{id:"battery-module",children:"Battery Module"}),"\n",(0,n.jsx)(t.p,{children:"Albeit not an upgrade for the users, one upgrade to the bot itself that would improve overall functionality would be the addition of a LiPo battery pack. The full functionality of this addition would be enabled through either sourcing or creating a separate component that is capable of transmitting power to the battery pack, and data to the device, all though one single connection. Given the small battery usage of the device, it is likely that the short time Dotty is connected to the computer to get code would be enough to recharge any drained battery. LiPo batteries are also relatively cheap and have a greater capacity over alkaline batteries."}),"\n",(0,n.jsx)(t.h2,{id:"standard-connection--ease-of-use",children:"Standard Connection / Ease-Of-Use"}),"\n",(0,n.jsx)(t.p,{children:"In order to fully utilise this new modular design, the bot will need the implementation of several standardised connections that work with all modules. To ensure cheap manufacturing and easy use for students, the easiest implementation of this of this may be through having several \u201cpatches\u201d of either female or male pins in several key locations on the board, that has the minimal number of pins required to sufficiently run all the components. This would likely need research in trimester three by someone with PCB and IoT knowledge to fully maximise the design."}),"\n",(0,n.jsx)(t.h2,{id:"board-improvements",children:"Board Improvements"}),"\n",(0,n.jsx)(t.p,{children:"The current board, an Arduino Nano, is likely not able to power or handle the data flow of several of these new modules. In researching this topic, many non-Arduino boards appear to be the best options. This however may not be the best option, as the current Playground environment has the avrgirl-arduino package as an integral part of the program, handling all code deployments to Dotty. By switching to a non-Arduino board, this would also require a full rebuild of the backend, potentially meaning BugBox would have to develop their own solution to meet the needs of the particular board."}),"\n",(0,n.jsx)(t.p,{children:"So considering this, the Arduino Mega may be the best option going forward. It offers significantly more memory (30kB vs 248kB when removing bootloader usage) which is likely needed for the display and sound modules, nearly three times as many pins, and four serial ports which could be used for the modules."}),"\n",(0,n.jsx)(t.p,{children:"The Mega does come with a substantial price increase over the Nano, however for the longevity of the device, this price could be justified. The older Nano and PCBs could still be used in basic classes to avoid waste."})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>a});var n=o(96540);const i={},r=n.createContext(i);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);