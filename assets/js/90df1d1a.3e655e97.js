"use strict";(self.webpackChunkredback_documentation=self.webpackChunkredback_documentation||[]).push([[339],{80021:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var r=t(74848),i=t(28453);const o={sidebar_position:1},s="Project RedOps: LDAP Ubuntu Server",l={id:"cybersecurity/Ubuntu Server/LDAP Ubuntu Server Handover",title:"Project RedOps: LDAP Ubuntu Server",description:"Document Creation 19 September, 2024. Authors: Drew Baker.",source:"@site/docs/cybersecurity/Ubuntu Server/LDAP Ubuntu Server Handover.md",sourceDirName:"cybersecurity/Ubuntu Server",slug:"/cybersecurity/Ubuntu Server/LDAP Ubuntu Server Handover",permalink:"/redback-documentation/docs/cybersecurity/Ubuntu Server/LDAP Ubuntu Server Handover",draft:!1,unlisted:!1,editUrl:"https://github.com/Redback-Operations/redback-documentation/blob/main/docs/cybersecurity/Ubuntu Server/LDAP Ubuntu Server Handover.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Ubuntu Server",permalink:"/redback-documentation/docs/category/ubuntu-server"},next:{title:"Project RedOps: LDAP Ubuntu Server",permalink:"/redback-documentation/docs/cybersecurity/Ubuntu Server/LDAP Configuration"}},d={},a=[{value:"Introduction",id:"introduction",level:2},{value:"Ubuntu Environment Setup",id:"ubuntu-environment-setup",level:2},{value:"Windows Host Environment Setup",id:"windows-host-environment-setup",level:2},{value:"Learning opportunities",id:"learning-opportunities",level:2},{value:"Possible tasks and contributions",id:"possible-tasks-and-contributions",level:2},{value:"Existing Documentation",id:"existing-documentation",level:2},{value:"Useful Links",id:"useful-links",level:2}];function c(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"project-redops-ldap-ubuntu-server",children:"Project RedOps: LDAP Ubuntu Server"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Document Creation:"})," 17 September, 2024. ",(0,r.jsx)(n.strong,{children:"Last Edited:"})," 19 September, 2024. ",(0,r.jsx)(n.strong,{children:"Authors:"})," Drew Baker.\r\n",(0,r.jsx)("br",{}),(0,r.jsx)(n.strong,{children:"Effective Date:"})," 18 September 2024. ",(0,r.jsx)(n.strong,{children:"Expiry Date:"})," 19 September 2025."]})}),"\n",(0,r.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(n.p,{children:"Over the course of the trimester my contribution for this unit largely comprised of creating an on prem environment to replicate the functionality of Microsoft's AD. After a couple of viability assessments for alternatives and following direction from the company department lead at the time the decision was made to utilise OpenLDAP. To achieve this I elected to implement this in Ubuntu Server 22.04, while this lacks a GUI making it a little challenging at times to work with this decision was made due to it`s light-weight nature. In this Docusaurus page I aim to answer any question you may have regarding setting this up yourselves or where to go next with this."}),"\n",(0,r.jsx)(n.h2,{id:"ubuntu-environment-setup",children:"Ubuntu Environment Setup"}),"\n",(0,r.jsxs)(n.p,{children:["To configure the environment to run the ",(0,r.jsx)(n.code,{children:"RedOps Ubuntu Server"})," system I would recommend configuring this VM on a separate system largely for convenience. In my deployment I used a soon to be retired Windows 10 Pro host machine where I had added a registry key to execute a script which would start the VM on launch. If you would like to do the same please follow the following steps:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Please download the ",(0,r.jsx)(n.code,{children:"Ubuntu Server Workspace"})," OVA file from the ",(0,r.jsx)(n.code,{children:"Cyber Security Team > 2024 Trimester 2"})," folder in the company Sharepoint."]}),"\n",(0,r.jsx)(n.admonition,{type:"important",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note the system login credentials are:"}),"\r\n",(0,r.jsx)(n.strong,{children:"USER:"})," ",(0,r.jsx)(n.code,{children:"rboadmin"}),"\r\n",(0,r.jsx)(n.strong,{children:"PASS:"})," ",(0,r.jsx)(n.code,{children:"admin"}),":::"]})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Once you have imported the appliance double check your network adapter settings to ensure that you are have either connected to the pfSense ",(0,r.jsx)(n.code,{children:"internal"})," adapter or are using a ",(0,r.jsx)(n.code,{children:"bridged"})," adapter. After successfully booting the machine, please sign in and run the following:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo apt update && sudo apt upgrade\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Before continuing please ensure that the systems password has been changed from ",(0,r.jsx)(n.code,{children:"admin"})," and shared it with your team along with your IP and chosen external port (provided that the system will be port forwarded)."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"To check your IP, run:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl ifconfig.me\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"windows-host-environment-setup",children:"Windows Host Environment Setup"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"To enable it so the rest of your team is able to SSH into the server to tinker and work on their own individual projects you will need to port forward the devices IP in your router`s configuration (not pfSense) port 21 and 22 (FTP and SSH)."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Please ensure that your ISP doesn`t use CGNAT or that it has been disabled as this will cause implementation issues."})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"(Optional but strongly recommended) To set it up to automatically launch the VM on host system start you`ll need to create a script. Open your text editor of choice and insert the following command string:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'"C:\\Program Files\\Oracle\\VirtualBox\\VBoxManage.exe" startvm "Ubuntu Server Workspace"\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Saving this as a ",(0,r.jsx)(n.code,{children:".bat"})," file will allow us to point the registry key to the command on start up via the ",(0,r.jsx)(n.code,{children:"RUN"})," registry."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Navigate to the ",(0,r.jsx)(n.code,{children:"HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run"})," registry and add a string with the file path to the ",(0,r.jsx)(n.code,{children:".bat"})," file as the value."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"learning-opportunities",children:"Learning opportunities"}),"\n",(0,r.jsx)(n.p,{children:"By working on this setup, you\u2019ll gain knowledge in various areas:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Get comfortable with Ubuntu\u2019s command-line interface (CLI)."}),"\n",(0,r.jsx)(n.li,{children:"Explore Microsoft Server Active Directory (AD) and Entra ID."}),"\n",(0,r.jsxs)(n.li,{children:["Investigate key topics like:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Kerberos"}),"\n",(0,r.jsx)(n.li,{children:"OpenSSH"}),"\n",(0,r.jsx)(n.li,{children:"OpenLDAP"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"possible-tasks-and-contributions",children:"Possible tasks and contributions"}),"\n",(0,r.jsx)(n.p,{children:"Here are some ways you can further enhance the LDAP setup:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Integrate LDAP with Kerberos using SASL."}),"\n",(0,r.jsx)(n.li,{children:"Implement encryption for LDAP user credentials."}),"\n",(0,r.jsx)(n.li,{children:"Modify LDAP Access Control Lists (ACLs) to improve security."}),"\n",(0,r.jsx)(n.li,{children:"Add SSL to LDAP for encrypted communication."}),"\n",(0,r.jsx)(n.li,{children:"Expand the pfSense Snort configuration for improved network protection."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"existing-documentation",children:"Existing Documentation"}),"\n",(0,r.jsx)(n.p,{children:"The following have both been written in Markdown and should be available in the sidebar.\r\nUbuntu Server LDAP Configuration\r\nUbuntu Server Optional Services"}),"\n",(0,r.jsx)(n.h2,{id:"useful-links",children:"Useful Links"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://ubuntu.com/server/docs/install-and-configure-ldap",children:"Ubuntu install and configure LDAP"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.geeksforgeeks.org/difference-between-ldap-and-kerberos/",children:"LDAP vs. Kerberos"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.ibm.com/docs/en/zos/2.5.0?topic=utilities-ldapmodify-ldapadd",children:"IBM LDAP utilities"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.server-world.info/en/note?os=Ubuntu_22.04&p=openldap&f=4",children:"LDAP over SSL"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var r=t(96540);const i={},o=r.createContext(i);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);