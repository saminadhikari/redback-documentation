"use strict";(self.webpackChunkredback_documentation=self.webpackChunkredback_documentation||[]).push([[6351],{88776:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var n=t(74848),s=t(28453);const r={sidebar_position:18},o="Secure Code Review",a={id:"cybersecurity/secure-code/secure-code-review-methodologies",title:"secure-code-review-methodologies",description:"Last Edited Tushar Sharma  Version: 3.0.",source:"@site/docs/cybersecurity/secure-code/secure-code-review-methodologies.md",sourceDirName:"cybersecurity/secure-code",slug:"/cybersecurity/secure-code/secure-code-review-methodologies",permalink:"/redback-documentation/docs/cybersecurity/secure-code/secure-code-review-methodologies",draft:!1,unlisted:!1,editUrl:"https://github.com/Redback-Operations/redback-documentation/blob/main/docs/cybersecurity/secure-code/secure-code-review-methodologies.md",tags:[],version:"current",sidebarPosition:18,frontMatter:{sidebar_position:18},sidebar:"tutorialSidebar",previous:{title:"MQTT Code Review",permalink:"/redback-documentation/docs/cybersecurity/secure-code/project1-mqtt-secure-code-review"},next:{title:"Backend & Penetration Testing",permalink:"/redback-documentation/docs/category/backend--penetration-testing"}},c={},d=[{value:"Secure Code Review",id:"secure-code-review-1",level:2},{value:"Methods and Practices for Enhancing Software Security",id:"methods-and-practices-for-enhancing-software-security",level:2},{value:"Security Requirements Analysis and Threat Modeling",id:"security-requirements-analysis-and-threat-modeling",level:3},{value:"Static and Dynamic Application Security Testing (SAST and DAST)",id:"static-and-dynamic-application-security-testing-sast-and-dast",level:3},{value:"Code Signing",id:"code-signing",level:3},{value:"Why Choose Secure Code Review?",id:"why-choose-secure-code-review",level:2},{value:"Proactive Vulnerability Detection",id:"proactive-vulnerability-detection",level:3},{value:"Integration with Development Process",id:"integration-with-development-process",level:3},{value:"Comprehensive Coverage",id:"comprehensive-coverage",level:3},{value:"Continuous Improvement",id:"continuous-improvement",level:3},{value:"Guide to Secure Code Review: A Step-by-Step Approach:",id:"guide-to-secure-code-review-a-step-by-step-approach",level:2},{value:"1. Understand the Application and its Requirements:",id:"1-understand-the-application-and-its-requirements",level:3},{value:"2. Set Up Your Development Environment:",id:"2-set-up-your-development-environment",level:3},{value:"3. Define Review Criteria and Objectives",id:"3-define-review-criteria-and-objectives",level:3},{value:"4. Review Execution",id:"4-review-execution",level:3},{value:"5. Identify Security Vulnerabilities",id:"5-identify-security-vulnerabilities",level:3},{value:"6. Document Findings and Provide Recommendations:",id:"6-document-findings-and-provide-recommendations",level:3},{value:"Secure Code Review Checklist",id:"secure-code-review-checklist",level:2},{value:"Key Concepts of Secure Code Review",id:"key-concepts-of-secure-code-review",level:2},{value:"Security Principles",id:"security-principles",level:3},{value:"Common Vulnerabilities and how to detect them",id:"common-vulnerabilities-and-how-to-detect-them",level:2},{value:"Common Patterns for Vulnerabilities:",id:"common-patterns-for-vulnerabilities",level:2},{value:"Some important documents for upskilling and practices:",id:"some-important-documents-for-upskilling-and-practices",level:2},{value:"References",id:"references",level:2}];function l(e){const i={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.admonition,{type:"info",children:(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Last Edited:"})," 6 May 2024. ",(0,n.jsx)(i.strong,{children:"Author:"})," Tushar Sharma  ",(0,n.jsx)(i.strong,{children:"Version:"})," 3.0."]})}),"\n",(0,n.jsx)(i.h1,{id:"secure-code-review",children:"Secure Code Review"}),"\n",(0,n.jsx)(i.p,{children:"Introduction to guidelines and methodologies for performing secure code reviews, covering key principles, common vulnerabilities, and best practices."}),"\n",(0,n.jsx)(i.h2,{id:"secure-code-review-1",children:"Secure Code Review"}),"\n",(0,n.jsx)(i.p,{children:"Secure code review is a critical process of reviewing the source code of an application aiming to identify and mitigate vulnerability, threats that could have been unintentionally placed during development [1]. This involves the examining of source code to find the potential weaknesses, loopholes or bugs that could be exploited by attackers. Beyond safeguarding against potential exploits by malicious actors, it also plays a vital role to improve the overall quality of the codebase. It also uncovers the code inefficiencies, poor coding practices, and potential points of failure. Therefore, many organizations are investing in secure code review processes for not only mitigating security risks, but also create a strong foundation for the long-term success of their projects [2]."}),"\n",(0,n.jsx)(i.h2,{id:"methods-and-practices-for-enhancing-software-security",children:"Methods and Practices for Enhancing Software Security"}),"\n",(0,n.jsx)(i.p,{children:"There are various methods and practices that contribute to fortifying applications against cyber threats. While each approach serves its purpose and strategies to enhance Security."}),"\n",(0,n.jsx)(i.h3,{id:"security-requirements-analysis-and-threat-modeling",children:"Security Requirements Analysis and Threat Modeling"}),"\n",(0,n.jsx)(i.p,{children:"Security requirements analysis and threat modeling are processes that help identify security needs and potential risks during software development. They ensure that security is considered right from the start and help decide which security measures are most important. However, they don't look at the code itself in as much detail as secure code review does."}),"\n",(0,n.jsx)(i.h3,{id:"static-and-dynamic-application-security-testing-sast-and-dast",children:"Static and Dynamic Application Security Testing (SAST and DAST)"}),"\n",(0,n.jsx)(i.p,{children:"Static and dynamic application security testing, known as SAST and DAST, examine software differently. SAST looks at the source code for vulnerabilities without running the program, while DAST tests the running application for vulnerabilities as it operates. Although these methods can uncover vulnerabilities, they might not catch all types of security issues and have limitations in their coverage."}),"\n",(0,n.jsx)(i.h3,{id:"code-signing",children:"Code Signing"}),"\n",(0,n.jsx)(i.p,{children:"Code signing is a process that confirms the authenticity and integrity of code, which helps maintain its integrity. While code signing ensures that the code hasn't been tampered with, it doesn't directly deal with or resolve security vulnerabilities present within the codebase."}),"\n",(0,n.jsx)(i.h2,{id:"why-choose-secure-code-review",children:"Why Choose Secure Code Review?"}),"\n",(0,n.jsx)(i.h3,{id:"proactive-vulnerability-detection",children:"Proactive Vulnerability Detection"}),"\n",(0,n.jsx)(i.p,{children:"Secure code review stands as a proactive measure in software development, ensuring that potential security vulnerabilities are identified and addressed before they pose risks to the system. By conducting thorough reviews of the codebase during the development phase, teams can prevent potential exploitation by attackers, safeguarding the integrity and security of the application. By regularly reviewing and discussing security best practices and common vulnerabilities, developers gain a deeper understanding of secure coding principles and learn to identify potential security risks in their code independently."}),"\n",(0,n.jsx)(i.p,{children:"For example, suppose a development team is building a web application that handles sensitive user data, such as financial information. During a secure code review, a developer identifies a section of code that doesn't properly validate user input before processing it, potentially exposing the application to SQL injection attacks. By catching this vulnerability early in the development process through code review, the team can implement proper input validation mechanisms to prevent such attacks, thereby enhancing the application's security posture."}),"\n",(0,n.jsx)(i.h3,{id:"integration-with-development-process",children:"Integration with Development Process"}),"\n",(0,n.jsx)(i.p,{children:"Secure code review seamlessly integrates with the software development lifecycle, making it a cost-effective and efficient method for ensuring security. Integrating secure code review into the development workflow allows for continuous monitoring and improvement of security practices. As developers review each other's code and collaborate on identifying and resolving vulnerabilities, they gain valuable insights into secure coding practices and common security pitfalls. This iterative process helps build a stronger security culture within the organization and empowers developers to write more secure code from the start."}),"\n",(0,n.jsx)(i.h3,{id:"comprehensive-coverage",children:"Comprehensive Coverage"}),"\n",(0,n.jsx)(i.p,{children:"Secure code review offers a distinct advantage over other methods by providing a rough examination of the codebase. While other security practices may focus on specific aspects of security, such as system defenses or runtime testing, secure code review delves deeply into the code itself, examining every line for potential vulnerabilities.\r\nThis comprehensive approach allows secure code review to uncover both common security weaknesses, such as input validation errors or insecure data handling, as well as more obscure vulnerabilities that may evade automated testing tools or go unnoticed during runtime analysis.\r\nFor example, a static analysis tool may flag a potential SQL injection vulnerability in a particular code snippet, but only a human reviewer conducting a thorough code review may notice subtle variations in input validation logic that could also lead to injection attacks. By providing this level of scrutiny, secure code review helps organizations bolster their defenses against a wide range of security threats, from the most common to the most sophisticated."}),"\n",(0,n.jsx)(i.h3,{id:"continuous-improvement",children:"Continuous Improvement"}),"\n",(0,n.jsx)(i.p,{children:"Secure code review does the continuous improvement within development teams by encouraging adherence to secure coding practices, knowledge sharing, and skills development."}),"\n",(0,n.jsx)(i.p,{children:"While other security practices play crucial roles, secure code review stands out as a proactive and comprehensive approach for ensuring software security. By addressing vulnerabilities at the source code level, organizations can build resilient software systems that withstand cyber threats. Prioritizing secure code review is fundamental for mitigating security risks and ensuring the long-term success of software projects."}),"\n",(0,n.jsx)(i.h2,{id:"guide-to-secure-code-review-a-step-by-step-approach",children:"Guide to Secure Code Review: A Step-by-Step Approach:"}),"\n",(0,n.jsx)(i.p,{children:"Conducting a secure code review is a critical process in software development aimed at identifying and mitigating security vulnerabilities within the codebase. Whether you're a seasoned developer or new to the field, following a structured approach can help ensure thorough examination and effective remediation of security issues. Here\u2019s steps involved in performing a secure code review:"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Secure-Code-Review-Process",src:t(86423).A+"",width:"602",height:"433"})}),"\n",(0,n.jsx)(i.h3,{id:"1-understand-the-application-and-its-requirements",children:"1. Understand the Application and its Requirements:"}),"\n",(0,n.jsx)(i.p,{children:"The first step involves obtaining a thorough understanding of the application's functionality, architecture, and specific security requirements. This knowledge acts as a roadmap for the review process, aiding in the effective prioritization of areas to focus on. Understanding the intricacies of the application's design and purpose is essential for conducting a targeted and efficient code review, ensuring comprehensive coverage of potential security vulnerabilities. Additionally, having a basic understanding of code is imperative to effectively assess the codebase."}),"\n",(0,n.jsx)(i.h3,{id:"2-set-up-your-development-environment",children:"2. Set Up Your Development Environment:"}),"\n",(0,n.jsx)(i.p,{children:"Ensure that you have access to essential tools, version control systems, and designated code review platforms. Familiarize yourself with the structure and organization of the codebase to facilitate seamless navigation during the review process. In our case, access to the project will be facilitated through a GitHub repository, where you will initiate a Git pull request to retrieve the codebase.\r\nOnce accessed, consider conducting preliminary tests on the codebase to ascertain its functionality and identify potential areas of concern. Additionally, you have the flexibility to choose between conducting the secure code review on your local host machine or within a Linux environment, depending on your preference and requirements.\r\nTo enhance the effectiveness of the code review, consider utilizing multiple scanning tools such as Snyk, SonarQube, bandit and many more. These tools can assist in identifying security vulnerabilities, ensuring a comprehensive evaluation of the codebase."}),"\n",(0,n.jsx)(i.h3,{id:"3-define-review-criteria-and-objectives",children:"3. Define Review Criteria and Objectives"}),"\n",(0,n.jsx)(i.p,{children:"Establishing clear criteria and objectives for the code review is essential for ensuring a focused and effective evaluation of the codebase. Begin by defining the security standards and compliance requirements that the application must adhere to. Identify key areas of concern based on factors such as the application's sensitivity, potential impact of security breaches, and industry-specific regulations.\r\nBy setting clear criteria and objectives, you provide a framework for conducting the code review, guiding reviewers to focus on the most critical aspects of security. This systematic approach ensures that the review process is thorough, targeted, and aligned with the overall security goals of the organization."}),"\n",(0,n.jsx)(i.h3,{id:"4-review-execution",children:"4. Review Execution"}),"\n",(0,n.jsx)(i.p,{children:"Execute the code review process by systematically examining the source code for potential security vulnerabilities. This can be achieved through a combination of manual inspection techniques and automated scanning tools.\r\nDuring the review, you can start with common security flaws such as injection attacks (e.g., SQL injection, XSS), authentication issues (e.g., weak password policies, improper session management), and data validation errors (e.g., lack of input validation, insufficient output encoding).\r\nBy following an approach that combines manual scrutiny with automated analysis, you can effectively identify and address security vulnerabilities within the codebase. This ensures that the application is fortified against potential threats and adheres to established security standards and best practices."}),"\n",(0,n.jsx)(i.h3,{id:"5-identify-security-vulnerabilities",children:"5. Identify Security Vulnerabilities"}),"\n",(0,n.jsx)(i.p,{children:"As you delve deeper into the codebase, consistently applying the review process, you'll begin to uncover potential security vulnerabilities. It's essential to maintain consistency and persistence during this phase, as it may initially be challenging to identify vulnerabilities. Don't be discouraged if you encounter difficulties in finding your first vulnerability; persistence is key. Keep iterating through the code, scrutinizing each component thoroughly, and remain vigilant for any signs of security weaknesses. Remember, every vulnerability identified brings the application one step closer to enhanced security and resilience. While conducting the review, it's vital to do more than just spotting vulnerabilities; take the time to understand why these vulnerabilities exist in the first place [2]."}),"\n",(0,n.jsx)(i.h3,{id:"6-document-findings-and-provide-recommendations",children:"6. Document Findings and Provide Recommendations:"}),"\n",(0,n.jsx)(i.p,{children:"Documenting findings is critical for effective code review process. Documents should have identified vulnerabilities, their severity, and proposed fixes in your documentation. Provide actionable recommendations for remediation, prioritizing vulnerabilities based on their potential impact on system security.\r\nThis documentation ensures that developers have clear guidance for addressing security issues and helps stakeholders understand the security posture of the application.\r\nFor documentation, we will provide you with a template, where you will document all your findings."}),"\n",(0,n.jsx)(i.p,{children:"In conclusion, these steps offer a pathway to contribute significantly to the security and reliability of software applications."}),"\n",(0,n.jsx)(i.h2,{id:"secure-code-review-checklist",children:"Secure Code Review Checklist"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"secure-code-review-checklist",src:t(62492).A+"",width:"362",height:"250"})}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"secure-code-review-checklist",src:t(14757).A+"",width:"1351",height:"901"})}),"\n",(0,n.jsx)(i.h2,{id:"key-concepts-of-secure-code-review",children:"Key Concepts of Secure Code Review"}),"\n",(0,n.jsx)(i.h3,{id:"security-principles",children:"Security Principles"}),"\n",(0,n.jsx)(i.p,{children:"There are some guidelines to secure the system, and these guidelines are Security Principles. These principles serve as the foundation for cybersecurity practices by guiding to mitigate the risk, securing data, and ensuring confidentiality, integrating, and availability of information [3]. There are lot of principles, some of them I will be explaining here:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"Principle of Least Privilege: This principle restricts the privileges that are granted. Least Privilege states that users and processes should be granted only the minimum level of access or permissions necessary to perform their legitimate task. This design of security reduces the attack surface."}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"Principle of Fail-Safe Defaults: This design of security encourages the system or software secure default settings. In simple language, at time of any failure, whether it is network failure, or misconfiguration, the system should fall back to secure state. This helps to prevent unauthorized access and data breaches."}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"Principle of Complete Mediation: Principle of Complete Mediation states the validating and enforcing access controls for every request or operation performed within a system. This ensures only validated users can access the controls, therefore it prevents security bypass."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"common-vulnerabilities-and-how-to-detect-them",children:"Common Vulnerabilities and how to detect them"}),"\n",(0,n.jsx)(i.p,{children:"Various vulnerabilities are commonly found across different codebases. To identify these vulnerabilities, developers and secure code reviewers can refer to two widely recognized lists: CWE and CVE.\r\nCommon Weakness Enumeration (CWE): CWE is a publicly available list of software security weaknesses that identifies and categorizes common software vulnerabilities. It helps developers and security professionals understand potential security risks and provides a common language for discussing and addressing these weaknesses.\r\nCommon Vulnerabilities and Exposures (CVE): CVE is a database of publicly known security vulnerabilities and exposures used to identify specific security issues in software and hardware systems. Each CVE entry provides a unique identifier, description, and relevant details to track vulnerabilities and ensure proper patch management and mitigation strategies.\r\nSecure code reviewers can use these lists to identify common vulnerabilities in codebases. Here are some of the most prevalent vulnerabilities, along with ways to detect them:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"CWE-79: Cross-Site Scripting (XSS): This occurs when user inputs are not properly sanitized, allowing attackers to inject malicious scripts into web pages. We can detect this vulnerability by looking after unsanitized user inputs in web applications."}),"\n",(0,n.jsx)(i.li,{children:"CWE-89: SQL Injection: It Happens when user inputs are used to construct SQL queries without proper parameterization, leading to injection attacks. We can check for raw SQL queries with direct user inputs."}),"\n",(0,n.jsx)(i.li,{children:"CWE-22: Path Traversal: Path Traversal occurs when a program improperly validates user-supplied file paths, allowing attackers to access restricted files or directories. Detecting this vulnerability involves looking for file operations that use user-controlled inputs, especially those involving directory traversal patterns like ../. To prevent path traversal, we need to validate and sanitize all file paths, restrict file access to specific directories, and avoid direct file system manipulation based on user input."}),"\n",(0,n.jsx)(i.li,{children:"CWE-434: Unrestricted File Upload: Unrestricted File Upload happens when an application allows file uploads without proper validation, potentially permitting malicious files. To detect this vulnerability, examine code that handles file uploads and ensure it validates file types and sizes. Implement security controls to allow only specific file formats and scan uploaded files for malware or suspicious content."}),"\n",(0,n.jsx)(i.li,{children:"CWE-120: Buffer Overflow: This happens when a program writes data beyond the allocated memory buffer, leading to crashes or code execution. This vulnerability can be detected by analyzing code for unbounded buffers and reviewing array operations to ensure proper bounds checking."}),"\n",(0,n.jsx)(i.li,{children:"CWE-732: Improper Authorization: Improper Authorization occurs when a system does not enforce authorization checks which allows the unauthorized access to resources or functions. This vulnerability can be detected by reviewing authentication and authorization logic, ensuring proper role-based access control, and confirming that all sensitive operations are properly protected. Implement strict permission checks and ensure a robust authorization model."}),"\n",(0,n.jsx)(i.li,{children:"CWE-94: Code Injection: Code Injection occurs when an application allows execution of arbitrary code due to insufficient input validation or unsanitized inputs. Detecting this vulnerability involves analyzing code that constructs executable statements or scripts and ensuring proper validation and sanitization."}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["You can read for the exploited vulnerability here to have an idea of CVE and CWE:\r\n",(0,n.jsx)(i.a,{href:"https://www.cyber.gov.au/about-us/view-all-content/alerts-and-advisories/2022-top-routinely-exploited-vulnerabilities",children:"link"})]}),"\n",(0,n.jsx)(i.h2,{id:"common-patterns-for-vulnerabilities",children:"Common Patterns for Vulnerabilities:"}),"\n",(0,n.jsx)(i.p,{children:"There are some common patterns or coding practices that often lead to security vulnerabilities. We can ease our work by recognizing these patterns. We can quickly identify high-risk areas in the codebase and recommend necessary changes. Here are some of the most common patterns which lead to vulnerability:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Direct Use of User Inputs: Most of the time in user input like constructing SQL queries or system commands, it creates a high risk for injection attacks. We should ensure that user inputs are properly sanitized, validated, and parameterized to prevent SQL Injection, Cross-Site Scripting (XSS)."}),"\n",(0,n.jsx)(i.li,{children:"Improper Error Handling: Detailed error messages should not be revealed as it can leak the system information or data can be exploited by attackers to gain insights into the application's structure or identify potential weak points. Reviewers should check for error messages that disclose sensitive information and recommend a more generic approach to error handling to avoid information leakage."}),"\n",(0,n.jsx)(i.li,{children:"Hardcoded Credentials: Storing sensitive information like passwords, API keys, or security tokens directly in the code is a significant security risk. These hardcoded credentials can be easily extracted by attackers."}),"\n",(0,n.jsx)(i.li,{children:"Insecure Configuration: Configuration files contains the security risks due to the reason exposed ports, weak permissions, or unencrypted connections, can lead to unauthorized access and other security issues. Reviewers should examine configuration files for these risks and recommend secure configuration practices, such as limiting access to only necessary users, using encrypted connections, and enforcing strong permissions."}),"\n",(0,n.jsx)(i.li,{children:"Inadequate Session Management: Improper handling of user sessions can lead to session hijacking or unauthorized access. We should check for secure session management practices, like generating unique session identifiers, implementing session expiration, and protecting sessions with encryption. Additionally, ensure that session tokens are not exposed or accessible to unauthorized users.\r\n\u2003"}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"some-important-documents-for-upskilling-and-practices",children:"Some important documents for upskilling and practices:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["OWASP Code Review Guide:\r\n",(0,n.jsx)(i.a,{href:"https://owasp.org/www-pdf-archive/OWASP_Code_Review_Guide_v2.pdf",children:"link"})]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["Secure Code Review Best Practices [cheat sheet included]:\r\n",(0,n.jsx)(i.a,{href:"https://blog.gitguardian.com/secure-code-review-cheat-sheet-included/#:~:text=Some%20popular%20SCA%20tools%20include%3A%201%20GitHub%20Dependabot,2%20Snyk%20Open%20Source%203%20Synopsys%20Black%20Duck",children:"link"})]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["Building a Practical Secure Code Review Process:\r\n",(0,n.jsx)(i.a,{href:"https://betterappsec.com/building-a-practical-secure-code-review-process-cdee8ebf68c8",children:"link"})]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["Secure Coding Practices Checklist:\r\n",(0,n.jsx)(i.a,{href:"https://owasp.org/www-project-secure-coding-practices-quick-reference-guide/stable-en/02-checklist/05-checklist.html",children:"link"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"references",children:"References"}),"\n",(0,n.jsxs)(i.p,{children:["[1] \tThreat Intelligence, \u201cSecure Code Reviews: What is it, Benefits and Checklist,\u201d 10 March 2023. [Online]. Available: ",(0,n.jsx)(i.a,{href:"https://www.threatintelligence.com/blog/secure-code-reviews",children:"https://www.threatintelligence.com/blog/secure-code-reviews"}),".\r\n[2] \tThe Cloud Native Experts, \u201cWhat Is Secure Code Review? Process, Tools, and Best Practices,\u201d 5 November 2023. [Online]. Available: ",(0,n.jsx)(i.a,{href:"https://www.aquasec.com/cloud-native-academy/devsecops/secure-code-review/",children:"https://www.aquasec.com/cloud-native-academy/devsecops/secure-code-review/"}),".\r\n[3] \tJ. Mlakar, \u201cInfoSec Design Principles \u2013 8 Security Principles To Implement,\u201d MlakarTechTalk, 16 April 2019. [Online]. Available: ",(0,n.jsx)(i.a,{href:"https://www.mlakartechtalk.com/infosec-design-principles-8-security-principles-to-implement/",children:"https://www.mlakartechtalk.com/infosec-design-principles-8-security-principles-to-implement/"}),"."]})]})}function u(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},86423:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/scr1-a13e55b19ba1715bf72609d02fdeab97.png"},62492:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/scr2-efecadba1b7c4a299c7e44a79c856458.png"},14757:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/scr3-e5d90ddd5b572942cf67e95b08b6eb54.png"},28453:(e,i,t)=>{t.d(i,{R:()=>o,x:()=>a});var n=t(96540);const s={},r=n.createContext(s);function o(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);