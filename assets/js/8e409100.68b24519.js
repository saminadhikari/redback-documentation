"use strict";(self.webpackChunkredback_documentation=self.webpackChunkredback_documentation||[]).push([[1152],{2468:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=t(74848),i=t(28453);const a={sidebar_position:1},r="Best Practices for Collaborative Python Development",s={id:"project-2/Data Science and Analytics/Best_Practices",title:"Best Practices for Collaborative Python Development",description:"Develop in a Virtual Environment",source:"@site/docs/project-2/Data Science and Analytics/Best_Practices.md",sourceDirName:"project-2/Data Science and Analytics",slug:"/project-2/Data Science and Analytics/Best_Practices",permalink:"/redback-documentation/docs/project-2/Data Science and Analytics/Best_Practices",draft:!1,unlisted:!1,editUrl:"https://github.com/Redback-Operations/redback-documentation/blob/main/docs/project-2/Data Science and Analytics/Best_Practices.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Data Anayltics",permalink:"/redback-documentation/docs/category/data-anayltics"},next:{title:"Predictive modelling of Alzheimer's Disease",permalink:"/redback-documentation/docs/project-2/Data Science and Analytics/AlzheimersProject"}},l={},c=[{value:"Develop in a Virtual Environment",id:"develop-in-a-virtual-environment",level:2},{value:"1. PIP",id:"1-pip",level:2},{value:"Creating a venv:",id:"creating-a-venv",level:3},{value:"Entering a venv:",id:"entering-a-venv",level:3},{value:"Logging your packages:",id:"logging-your-packages",level:3},{value:"Installing someone elses venv",id:"installing-someone-elses-venv",level:3},{value:"2. Conda",id:"2-conda",level:2},{value:"Creating a venv:",id:"creating-a-venv-1",level:3},{value:"Logging your packages:",id:"logging-your-packages-1",level:3},{value:"Installing someone elses venv",id:"installing-someone-elses-venv-1",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"best-practices-for-collaborative-python-development",children:"Best Practices for Collaborative Python Development"}),"\n",(0,o.jsx)("hr",{}),"\n",(0,o.jsx)(n.h2,{id:"develop-in-a-virtual-environment",children:"Develop in a Virtual Environment"}),"\n",(0,o.jsxs)(n.p,{children:["Using a virtual environment in Python is simple and ensures that there won't be any conflicts between a previously installed version of a library and that which you are running. It functionally allows you to pretend that you're running a clean Python3 installation with just the packages you need in that particular instance.\r\nFurthermore, It also provides the advantage that you can provide a ",(0,o.jsx)(n.code,{children:"requirements.txt"}),' file, which gives an easy method to share the necessary file versions that work together and solves a great proportion of "It works on my machine issues"']}),"\n",(0,o.jsxs)(n.p,{children:["Another consideration I would recommend is the use of ",(0,o.jsx)(n.a,{href:"https://github.com/pyenv/pyenv/tree/master",children:(0,o.jsx)(n.code,{children:"pyenv"})})," (",(0,o.jsx)(n.a,{href:"https://github.com/pyenv-win/pyenv-win",children:"windows version here"}),"). This is a tool that grants you the ability to swap in python versions / interpreters in the same way we might swap around versions of python libraries. If a tool is running on a specific old version of python3 and is broken in new versions, it is worth considering using this to manage it. Especially with the quality of life features provided by being able to to set specific versions to specific folders / projects."]}),"\n",(0,o.jsx)(n.p,{children:"The temptation may exist to download this via PIP (or whatever package manager) but I can't stress what a bootstrapping nightmare it is to have a package manager tied to a python version in charge of a python version manager and so on. do yourself a favour and keep pyenv as the overseer of its python versions.\r\nSame is especially true as conda does provide similiar functionality in that you can configure venvs with particular python versions, but again, bootstrapping hell"}),"\n",(0,o.jsx)(n.p,{children:"With that out of the way, let's examine Virtual environments:"}),"\n",(0,o.jsx)(n.h2,{id:"1-pip",children:"1. PIP"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["Do you install your packages by running ",(0,o.jsx)(n.code,{children:"pip install {packagename}"}),"?",(0,o.jsx)(n.br,{}),"\n","Read this bit"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["First things first, we want to ensure that python is in your shell's path. to do so simply open a terminal and type:",(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.code,{children:"python"}),(0,o.jsx)(n.br,{}),"\n","If this results in output that shows the current python version and and interpreter (denoted by the ",(0,o.jsx)(n.code,{children:">>>"})," prompt ) you should be good to go.",(0,o.jsx)(n.br,{}),"\n","If not, ask an LLM chatbot to walk you through it with your particular OS / terminal info."]}),"\n",(0,o.jsx)(n.h3,{id:"creating-a-venv",children:"Creating a venv:"}),"\n",(0,o.jsxs)(n.p,{children:["In your terminal navigate to the folder your project (or projects if they're related and going to share packages) is located and type",(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.code,{children:"python -m .venv ."})]}),"\n",(0,o.jsxs)(n.p,{children:["This will create a hidden folder in that directory (the ",(0,o.jsx)(n.code,{children:"."})," argument) named ",(0,o.jsx)(n.code,{children:".venv"})," that contains the python bin info and will be where all of your installed libraries are contained. You can technically name it whatever you like, but in this case its convention, and .venv is already included in the gitignore.\r\nSince our collaborators probably wont be using the exact same python binary, we dont want to force them to download personalized junk. What we do want to do, is to provide them with a list of things they need to make our application / jupyter notebook to work like it does on our machine."]}),"\n",(0,o.jsx)(n.h3,{id:"entering-a-venv",children:"Entering a venv:"}),"\n",(0,o.jsx)(n.p,{children:"If you've just create the venv from above, you can activate it by typing:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["UNIX (MAC / Linux)","\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Bash / zsh: ",(0,o.jsx)(n.code,{children:"source .venv/bin/activate"})]}),"\n",(0,o.jsxs)(n.li,{children:["fish: ",(0,o.jsx)(n.code,{children:"source .venv/bin/activate.fsh"})]}),"\n",(0,o.jsxs)(n.li,{children:["csh/tcsh: ",(0,o.jsx)(n.code,{children:"source .venv/bin/activate.csh"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Windows:","\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Powershell: ",(0,o.jsx)(n.code,{children:".venv\\Scripts\\Activate.ps1"})]}),"\n",(0,o.jsxs)(n.li,{children:["cmd (in current year?): ",(0,o.jsx)(n.code,{children:".venv\\Scripts\\Activate.bat"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"You'll know it was a success if in your terminal it shows up with (.venv) before the prompt."}),"\n",(0,o.jsx)(n.h3,{id:"logging-your-packages",children:"Logging your packages:"}),"\n",(0,o.jsxs)(n.p,{children:["Now download all your packages and when you've got everything your jupyter notebook or python script requires, run",(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.code,{children:"pip freeze > requirements.txt"}),(0,o.jsx)(n.br,{}),"\n","This will output all of the packages in this venv and write them to a file named ",(0,o.jsx)(n.code,{children:"requirements.txt"})]}),"\n",(0,o.jsx)(n.h3,{id:"installing-someone-elses-venv",children:"Installing someone elses venv"}),"\n",(0,o.jsxs)(n.p,{children:["Then, all anyone needs to do to get a working build of your code on their machine, should be to download the repo, navigate to the project folder, make their own venv and run:\r\n",(0,o.jsx)(n.code,{children:"pip install -r requirements.txt"}),"\r\nor failing that:\r\n",(0,o.jsx)(n.code,{children:"python -m pip install -r requirements.txt"})]}),"\n",(0,o.jsx)(n.h2,{id:"2-conda",children:"2. Conda"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["Do you install your packages by running ",(0,o.jsx)(n.code,{children:"Conda install {packagename}"}),"?",(0,o.jsx)(n.br,{}),"\n","or just downloaded Anaconda for a unit ages ago and have everything already?",(0,o.jsx)(n.br,{}),"\n","Read this bit"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Assuming you ran the anaconda installer with default settings, conda should be on your system's PATH.\r\nThis can be tested by opening a terminal and running ",(0,o.jsx)(n.code,{children:"conda"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"You should get some version info. if you get a file not found error, ask an LLM chatbot to walk you through it with your particular OS / terminal info."}),"\n",(0,o.jsx)(n.h3,{id:"creating-a-venv-1",children:"Creating a venv:"}),"\n",(0,o.jsxs)(n.p,{children:["In your terminal navigate to the folder your project (or projects if they're related and going to share packages) is located and type",(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.code,{children:"conda create -n .venv"})]}),"\n",(0,o.jsxs)(n.p,{children:["This will create a hidden folder in that directory named ",(0,o.jsx)(n.code,{children:".venv"})," that contains the python and conda bin info and will be where all of your installed libraries are contained.  You can technically name it whatever you like, but in this case its convention, and .venv is already included in the gitignore."]}),"\n",(0,o.jsxs)(n.p,{children:["You can also specify python version by appending the ",(0,o.jsx)(n.code,{children:"version=x.x"})," as well as initialize the venv with any packages you know you'll want by appending the package names to the end of the command"]}),"\n",(0,o.jsx)(n.p,{children:"Since our collaborators probably wont be using the exact same python binary, we dont want to force them to download personalized junk. What we do want to do, is to provide them with a list of things they need to make our application / jupyter notebook to work like it does on our machine."}),"\n",(0,o.jsx)(n.h3,{id:"logging-your-packages-1",children:"Logging your packages:"}),"\n",(0,o.jsxs)(n.p,{children:["Now download all your packages and when you've got everything your jupyter notebook or python script requires, run",(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.code,{children:"conda list -e > requirements.txt"}),(0,o.jsx)(n.br,{}),"\n","This will output all of the packages in this venv and write them to a file named ",(0,o.jsx)(n.code,{children:"requirements.txt"})]}),"\n",(0,o.jsx)(n.h3,{id:"installing-someone-elses-venv-1",children:"Installing someone elses venv"}),"\n",(0,o.jsxs)(n.p,{children:["Then, all anyone needs to do to get a working build of your code on their machine, should be to download the repo, navigate to the project folder, make their own venv and run:\r\n",(0,o.jsx)(n.code,{children:"conda create -n .venv --file requirements.txt"})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var o=t(96540);const i={},a=o.createContext(i);function r(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);