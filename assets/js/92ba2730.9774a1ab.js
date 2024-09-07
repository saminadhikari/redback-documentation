"use strict";(self.webpackChunkredback_documentation=self.webpackChunkredback_documentation||[]).push([[3125],{92625:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>n,metadata:()=>a,toc:()=>h});var s=i(74848),o=i(28453);const n={sidebar_position:1},r="Using the Mission Activator: How To Create Missions And Add Them Into The Board",a={id:"project-1/vr/mission",title:"Using the Mission Activator: How To Create Missions And Add Them Into The Board",description:"After working on the mission activator as I go from the previous leader, I am noting down tips and tricks as I go to ensure smooth sailing in creating scripts for missions without any problems. Any difficulties that have been solved throughout the process will be recorded so juniors will not make the same mistakes. Anyone else is free to note any problems in relation with their own scripts being used in the mission activator.",source:"@site/docs/project-1/vr/mission.md",sourceDirName:"project-1/vr",slug:"/project-1/vr/mission",permalink:"/redback-documentation/docs/project-1/vr/mission",draft:!1,unlisted:!1,editUrl:"https://github.com/Redback-Operations/redback-documentation/blob/main/docs/project-1/vr/mission.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"VR",permalink:"/redback-documentation/docs/category/vr"},next:{title:"IoT",permalink:"/redback-documentation/docs/category/iot"}},c={},h=[];function d(e){const t={a:"a",h1:"h1",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"using-the-mission-activator-how-to-create-missions-and-add-them-into-the-board",children:"Using the Mission Activator: How To Create Missions And Add Them Into The Board"}),"\n",(0,s.jsx)(t.p,{children:"After working on the mission activator as I go from the previous leader, I am noting down tips and tricks as I go to ensure smooth sailing in creating scripts for missions without any problems. Any difficulties that have been solved throughout the process will be recorded so juniors will not make the same mistakes. Anyone else is free to note any problems in relation with their own scripts being used in the mission activator."}),"\n",(0,s.jsx)(t.p,{children:"This is with the assumption that you already created your own mission scripts in the Unity Project and need to add them to the mission activator. To start off, here is the video that will help you understand at first:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://deakin365.sharepoint.com/sites/RedbackOperations9/_layouts/15/stream.aspx?id=%2Fsites%2FRedbackOperations9%2FShared%20Documents%2FHowToAddAMission%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E4a8e6eb1%2D2f43%2D44ee%2Dbbeb%2D492704e87eff",children:"Unity Mission Activator"})}),"\n",(0,s.jsx)(t.p,{children:"Before you start working on any missions, note that you should be able to put your script in an empty object and it should still function correctly otherwise you are going to have to upgrade it that way later which is more work for you."}),"\n",(0,s.jsx)(t.p,{children:"If you have already added the missions into the activators and found out that your script is not working compared to say, adding the script directly to the bike as a means to testing it out, there are a few reasons for that:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"For the bike, there is a need to collect items, press buttons or bump into things that usually when the script is directly added into the bike for mission testing purposes, any collision function is used such as OnTriggerEnter for the interaction. However, that will only work when the script is added directly to the bike. With the Mission Activator using an empty object to store the mission script, alternate ways can be used depending on the mission's content in the update function."}),"\n",(0,s.jsx)(t.li,{children:"To collect items, finding game objects with tags such as FindGameObjectsWithTag() and FindWithTag() functions for array and a singular item respectively as well as using activeSelf for the gameObject that is set to false to indicate the item's removal thanks to the bike is a good start for an alternate way from the collision function but still a guideline depending how the mission is created."}),"\n",(0,s.jsx)(t.li,{children:"SetActives are also important parts in mission because they can detect the success of the mission by the object's in the area. To understand the meaning better, please refer to previous missions such as Mission 1 and Mission 5 in Unity."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"When testing the missions, there are a few things with the mission activator that you should consider:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Make sure that all empty objects with missions are placed inside Objectives > Missions for the missions to work. Any game object (not prefab) should be added alongside your mission empty objects so they can be used such as Mission 1 with robot and b (non prefab game objects). If robot and b were put anywhere else, they will black out and not work."}),"\n",(0,s.jsx)(t.li,{children:"Make sure that there are missions on the list. If the mission list is empty, they will run all the missions in the file as the mission list serves as an activator / deactivator"}),"\n",(0,s.jsx)(t.li,{children:"When making missions in different scenes, make sure the Objectives from City Scene is copied to the new scene, if haven't already, and from the Mission Activator script, make sure that the list has the same number of elements in each scene. it is OK for the element to be blank for the particular mission that is on a specific scene."}),"\n",(0,s.jsx)(t.li,{children:"For point above, only work on any missions in CityScene until other scenees are stated useable for testing purposes."}),"\n"]})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>a});var s=i(96540);const o={},n=s.createContext(o);function r(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);