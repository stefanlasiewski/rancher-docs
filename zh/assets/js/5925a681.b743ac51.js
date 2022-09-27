"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[16183],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(o,".").concat(h)]||d[h]||p[h]||l;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),r=n(86010),l="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(87462),r=n(67294),l=n(86010),i=n(72389),s=n(67392),o=n(7094),u=n(12466),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n,i=e.lazy,d=e.block,h=e.defaultValue,m=e.values,f=e.groupId,k=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,s.l)(v,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===h?h:null!=(t=null!=h?h:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==N&&!v.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,o.U)(),C=y.tabGroupChoices,w=y.setTabGroupChoices,E=(0,r.useState)(N),I=E[0],S=E[1],T=[],K=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var R=C[f];null!=R&&R!==I&&v.some((function(e){return e.value===R}))&&S(R)}var x=function(e){var t=e.currentTarget,n=T.indexOf(t),a=v[n].value;a!==I&&(K(t),S(a),null!=f&&w(f,String(a)))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=T.indexOf(e.currentTarget)+1;n=null!=(a=T[r])?a:T[0];break;case"ArrowLeft":var l,i=T.indexOf(e.currentTarget)-1;n=null!=(l=T[i])?l:T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},k)},v.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:I===t?0:-1,"aria-selected":I===t,key:t,ref:function(e){return T.push(e)},onKeyDown:O,onFocus:x,onClick:x},i,{className:(0,l.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":I===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(b.filter((function(e){return e.props.value===I}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==I})}))))}function h(e){var t=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},58979:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return h}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=n(65488),s=n(85162),o=["components"],u={title:"CIS Scans"},c=void 0,p={unversionedId:"pages-for-subheaders/cis-scans",id:"version-2.5/pages-for-subheaders/cis-scans",title:"CIS Scans",description:"Rancher can run a security scan to check whether Kubernetes is deployed according to security best practices as defined in the CIS Kubernetes Benchmark.",source:"@site/versioned_docs/version-2.5/pages-for-subheaders/cis-scans.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/cis-scans",permalink:"/zh/v2.5/pages-for-subheaders/cis-scans",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/pages-for-subheaders/cis-scans.md",tags:[],version:"2.5",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"2022/9/23",frontMatter:{title:"CIS Scans"},sidebar:"tutorialSidebar",previous:{title:"Integrations in Rancher",permalink:"/zh/v2.5/pages-for-subheaders/integrations-in-rancher"},next:{title:"Configuration",permalink:"/zh/v2.5/explanations/integrations-in-rancher/cis-scans/configuration-reference"}},d={},h=[{value:"Changes in Rancher v2.5",id:"changes-in-rancher-v25",level:2},{value:"About the CIS Benchmark",id:"about-the-cis-benchmark",level:2},{value:"About the Generated Report",id:"about-the-generated-report",level:2},{value:"Test Profiles",id:"test-profiles",level:2},{value:"About Skipped and Not Applicable Tests",id:"about-skipped-and-not-applicable-tests",level:2},{value:"Roles-based Access Control",id:"roles-based-access-control",level:2},{value:"Configuration",id:"configuration",level:2},{value:"How-to Guides",id:"how-to-guides",level:2}],m={toc:h};function f(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Rancher can run a security scan to check whether Kubernetes is deployed according to security best practices as defined in the CIS Kubernetes Benchmark."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"rancher-cis-benchmark")," app leverages ",(0,l.kt)("a",{href:"https://github.com/aquasecurity/kube-bench",target:"_blank"},"kube-bench,")," an open-source tool from Aqua Security, to check clusters for CIS Kubernetes Benchmark compliance. Also, to generate a cluster-wide report, the application utilizes ",(0,l.kt)("a",{href:"https://github.com/vmware-tanzu/sonobuoy",target:"_blank"},"Sonobuoy")," for report aggregation."),(0,l.kt)("h2",{id:"changes-in-rancher-v25"},"Changes in Rancher v2.5"),(0,l.kt)("p",null,"We now support running CIS scans on any Kubernetes cluster, including hosted Kubernetes providers such as EKS, AKS, and GKE. Previously it was only supported to run CIS scans on RKE Kubernetes clusters."),(0,l.kt)("p",null,"In Rancher v2.4, the CIS scan tool was available from the ",(0,l.kt)("strong",{parentName:"p"},"cluster manager")," in the Rancher UI. Now it is available in the ",(0,l.kt)("strong",{parentName:"p"},"Cluster Explorer")," and it can be enabled and deployed using a Helm chart. It can be installed from the Rancher UI, but it can also be installed independently of Rancher. It  deploys a CIS scan operator for the cluster, and deploys Kubernetes custom resources for cluster scans. The custom resources can be managed directly from the ",(0,l.kt)("strong",{parentName:"p"},"Cluster Explorer.")),(0,l.kt)("p",null,"In v1 of the CIS scan tool, which was available in Rancher v2.4 through the cluster manager, recurring scans could be scheduled. The ability to schedule recurring scans is now also available for CIS v2 from Rancher v2.5.4."),(0,l.kt)("p",null,"Support for alerting for the cluster scan results is now also available from Rancher v2.5.4."),(0,l.kt)("p",null,"In Rancher v2.4, permissive and hardened profiles were included. In Rancher v2.5.0 and in v2.5.4, more profiles were included."),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"Profiles in v2.5.4",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Generic CIS 1.5"),(0,l.kt)("li",{parentName:"ul"},"Generic CIS 1.6"),(0,l.kt)("li",{parentName:"ul"},"RKE permissive 1.5"),(0,l.kt)("li",{parentName:"ul"},"RKE hardened 1.5"),(0,l.kt)("li",{parentName:"ul"},"RKE permissive 1.6"),(0,l.kt)("li",{parentName:"ul"},"RKE hardened 1.6"),(0,l.kt)("li",{parentName:"ul"},"EKS"),(0,l.kt)("li",{parentName:"ul"},"GKE"),(0,l.kt)("li",{parentName:"ul"},"RKE2 permissive 1.5"),(0,l.kt)("li",{parentName:"ul"},"RKE2 permissive 1.5"))),(0,l.kt)(s.Z,{value:"Profiles in v2.5.0-v2.5.3",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Generic CIS 1.5"),(0,l.kt)("li",{parentName:"ul"},"RKE permissive"),(0,l.kt)("li",{parentName:"ul"},"RKE hardened"),(0,l.kt)("li",{parentName:"ul"},"EKS"),(0,l.kt)("li",{parentName:"ul"},"GKE")))),(0,l.kt)("br",null),(0,l.kt)("p",null,"The default profile and the supported CIS benchmark version depends on the type of cluster that will be scanned and the Rancher version:"),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"v2.5.4",mdxType:"TabItem"},(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"rancher-cis-benchmark")," supports the CIS 1.6 Benchmark version."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"For RKE Kubernetes clusters, the RKE Permissive 1.6 profile is the default."),(0,l.kt)("li",{parentName:"ul"},"EKS and GKE have their own CIS Benchmarks published by ",(0,l.kt)("inlineCode",{parentName:"li"},"kube-bench"),". The corresponding test profiles are used by default for those clusters."),(0,l.kt)("li",{parentName:"ul"},"For RKE2 Kubernetes clusters, the RKE2 Permissive 1.5 profile is the default."),(0,l.kt)("li",{parentName:"ul"},"For cluster types other than RKE, RKE2, EKS and GKE, the Generic CIS 1.5 profile will be used by default."))),(0,l.kt)(s.Z,{value:"v2.5.0-v2.5.3",mdxType:"TabItem"},(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"rancher-cis-benchmark")," supports the CIS 1.5 Benchmark version."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"For RKE Kubernetes clusters, the RKE permissive profile is the default."),(0,l.kt)("li",{parentName:"ul"},"EKS and GKE have their own CIS Benchmarks published by ",(0,l.kt)("inlineCode",{parentName:"li"},"kube-bench"),". The corresponding test profiles are used by default for those clusters."),(0,l.kt)("li",{parentName:"ul"},"For cluster types other than RKE, EKS and GKE, the Generic CIS 1.5 profile will be used by default.")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:")," CIS v1 cannot run on a cluster when CIS v2 is deployed. In other words, after ",(0,l.kt)("inlineCode",{parentName:"p"},"rancher-cis-benchmark")," is installed, you can't run scans by going to the Cluster Manager view in the Rancher UI and clicking ",(0,l.kt)("b",null,"Tools > CIS Scans."))),(0,l.kt)("h2",{id:"about-the-cis-benchmark"},"About the CIS Benchmark"),(0,l.kt)("p",null,"The Center for Internet Security is a 501(c",")",'(3) non-profit organization, formed in October 2000, with a mission to "identify, develop, validate, promote, and sustain best practice solutions for cyber defense and build and lead communities to enable an environment of trust in cyberspace". The organization is headquartered in East Greenbush, New York, with members including large corporations, government agencies, and academic institutions.'),(0,l.kt)("p",null,"CIS Benchmarks are best practices for the secure configuration of a target system. CIS Benchmarks are developed through the generous volunteer efforts of subject matter experts, technology vendors, public and private community members, and the CIS Benchmark Development team."),(0,l.kt)("p",null,"The official Benchmark documents are available through the CIS website. The sign-up form to access the documents is"),(0,l.kt)("a",{href:"https://learn.cisecurity.org/benchmarks",target:"_blank"},"here."),(0,l.kt)("h2",{id:"about-the-generated-report"},"About the Generated Report"),(0,l.kt)("p",null,"Each scan generates a report can be viewed in the Rancher UI and can be downloaded in CSV format."),(0,l.kt)("p",null,"From Rancher v2.5.4, the scan uses the CIS Benchmark v1.6 by default. In Rancher v2.5.0-2.5.3, the CIS Benchmark v1.5. is used."),(0,l.kt)("p",null,"The Benchmark version is included in the generated report."),(0,l.kt)("p",null,"The Benchmark provides recommendations of two types: Automated and Manual. Recommendations marked as Manual in the Benchmark are not included in the generated report."),(0,l.kt)("p",null,'Some tests are designated as "Not Applicable." These tests will not be run on any CIS scan because of the way that Rancher provisions RKE clusters. For information on how test results can be audited, and why some tests are designated to be not applicable, refer to Rancher\'s ',(0,l.kt)("a",{parentName:"p",href:"/zh/v2.5/pages-for-subheaders/rancher-security#the-cis-benchmark-and-self-assessment"},"self-assessment guide")," for the corresponding Kubernetes version."),(0,l.kt)("p",null,"The report contains the following information:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Column in Report"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:null},"The ID number of the CIS Benchmark.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"description")),(0,l.kt)("td",{parentName:"tr",align:null},"The description of the CIS Benchmark test.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"remediation")),(0,l.kt)("td",{parentName:"tr",align:null},"What needs to be fixed in order to pass the test.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"state")),(0,l.kt)("td",{parentName:"tr",align:null},"Indicates if the test passed, failed, was skipped, or was not applicable.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"node_type")),(0,l.kt)("td",{parentName:"tr",align:null},"The node role, which affects which tests are run on the node. Master tests are run on controlplane nodes, etcd tests are run on etcd nodes, and node tests are run on the worker nodes.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"audit")),(0,l.kt)("td",{parentName:"tr",align:null},"This is the audit check that ",(0,l.kt)("inlineCode",{parentName:"td"},"kube-bench")," runs for this test.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"audit_config")),(0,l.kt)("td",{parentName:"tr",align:null},"Any configuration applicable to the audit script.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"test_info")),(0,l.kt)("td",{parentName:"tr",align:null},"Test-related info as reported by ",(0,l.kt)("inlineCode",{parentName:"td"},"kube-bench"),", if any.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"commands")),(0,l.kt)("td",{parentName:"tr",align:null},"Test-related commands as reported by ",(0,l.kt)("inlineCode",{parentName:"td"},"kube-bench"),", if any.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"config_commands")),(0,l.kt)("td",{parentName:"tr",align:null},"Test-related configuration data as reported by ",(0,l.kt)("inlineCode",{parentName:"td"},"kube-bench"),", if any.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"actual_value")),(0,l.kt)("td",{parentName:"tr",align:null},"The test's actual value, present if reported by ",(0,l.kt)("inlineCode",{parentName:"td"},"kube-bench"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"expected_result")),(0,l.kt)("td",{parentName:"tr",align:null},"The test's expected result, present if reported by ",(0,l.kt)("inlineCode",{parentName:"td"},"kube-bench"),".")))),(0,l.kt)("p",null,"Refer to the ",(0,l.kt)("a",{parentName:"p",href:"/zh/v2.5/pages-for-subheaders/rancher-security"},"table in the cluster hardening guide")," for information on which versions of Kubernetes, the Benchmark, Rancher, and our cluster hardening guide correspond to each other. Also refer to the hardening guide for configuration files of CIS-compliant clusters and information on remediating failed tests."),(0,l.kt)("h2",{id:"test-profiles"},"Test Profiles"),(0,l.kt)("p",null,"The following profiles are available:"),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"Profiles in v2.5.4",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Generic CIS 1.5"),(0,l.kt)("li",{parentName:"ul"},"Generic CIS 1.6"),(0,l.kt)("li",{parentName:"ul"},"RKE permissive 1.5"),(0,l.kt)("li",{parentName:"ul"},"RKE hardened 1.5"),(0,l.kt)("li",{parentName:"ul"},"RKE permissive 1.6"),(0,l.kt)("li",{parentName:"ul"},"RKE hardened 1.6"),(0,l.kt)("li",{parentName:"ul"},"EKS"),(0,l.kt)("li",{parentName:"ul"},"GKE"),(0,l.kt)("li",{parentName:"ul"},"RKE2 permissive 1.5"),(0,l.kt)("li",{parentName:"ul"},"RKE2 permissive 1.5"))),(0,l.kt)(s.Z,{value:"Profiles in v2.5.0-v2.5.3",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Generic CIS 1.5"),(0,l.kt)("li",{parentName:"ul"},"RKE permissive"),(0,l.kt)("li",{parentName:"ul"},"RKE hardened"),(0,l.kt)("li",{parentName:"ul"},"EKS"),(0,l.kt)("li",{parentName:"ul"},"GKE")))),(0,l.kt)("p",null,"You also have the ability to customize a profile by saving a set of tests to skip."),(0,l.kt)("p",null,"All profiles will have a set of not applicable tests that will be skipped during the CIS scan. These tests are not applicable based on how a RKE cluster manages Kubernetes."),(0,l.kt)("p",null,"There are two types of RKE cluster scan profiles:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Permissive:")," This profile has a set of tests that have been will be skipped as these tests will fail on a default RKE Kubernetes cluster. Besides the list of skipped tests, the profile will also not run the not applicable tests."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Hardened:")," This profile will not skip any tests, except for the non-applicable tests.")),(0,l.kt)("p",null,"The EKS and GKE cluster scan profiles are based on CIS Benchmark versions that are specific to those types of clusters."),(0,l.kt)("p",null,'In order to pass the "Hardened" profile, you will need to follow the steps on the ',(0,l.kt)("a",{parentName:"p",href:"/zh/v2.5/pages-for-subheaders/rancher-security#rancher-hardening-guide"},"hardening guide")," and use the ",(0,l.kt)("inlineCode",{parentName:"p"},"cluster.yml")," defined in the hardening guide to provision a hardened cluster."),(0,l.kt)("h2",{id:"about-skipped-and-not-applicable-tests"},"About Skipped and Not Applicable Tests"),(0,l.kt)("p",null,"For a list of skipped and not applicable tests, refer to ",(0,l.kt)("a",{parentName:"p",href:"/zh/v2.5/explanations/integrations-in-rancher/cis-scans/skipped-and-not-applicable-tests"},"this page"),"."),(0,l.kt)("p",null,"For now, only user-defined skipped tests are marked as skipped in the generated report."),(0,l.kt)("p",null,"Any skipped tests that are defined as being skipped by one of the default profiles are marked as not applicable."),(0,l.kt)("h2",{id:"roles-based-access-control"},"Roles-based Access Control"),(0,l.kt)("p",null,"For information about permissions, refer to ",(0,l.kt)("a",{parentName:"p",href:"/zh/v2.5/explanations/integrations-in-rancher/cis-scans/rbac-for-cis-scans"},"this page"),"."),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("p",null,"For more information about configuring the custom resources for the scans, profiles, and benchmark versions, refer to ",(0,l.kt)("a",{parentName:"p",href:"/zh/v2.5/explanations/integrations-in-rancher/cis-scans/configuration-reference"},"this page"),"."),(0,l.kt)("h2",{id:"how-to-guides"},"How-to Guides"),(0,l.kt)("p",null,"Please refer ",(0,l.kt)("a",{parentName:"p",href:"/zh/v2.5/pages-for-subheaders/cis-scan-guides"},"here")," for how-to guides on CIS scans."))}f.isMDXComponent=!0}}]);