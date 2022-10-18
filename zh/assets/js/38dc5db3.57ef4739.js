"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[70210],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=u(n),d=r,m=h["".concat(s,".").concat(d)]||h[d]||p[d]||l;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),r=n(86010),l="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(87462),r=n(67294),l=n(86010),o=n(72389),i=n(67392),s=n(7094),u=n(12466),c="tabList__CuJ",p="tabItem_LNqP";function h(e){var t,n,o=e.lazy,h=e.block,d=e.defaultValue,m=e.values,f=e.groupId,k=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=m?m:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,i.l)(y,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(t=null!=d?d:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==b&&!y.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,s.U)(),C=N.tabGroupChoices,w=N.setTabGroupChoices,R=(0,r.useState)(b),T=R[0],E=R[1],S=[],I=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var A=C[f];null!=A&&A!==T&&y.some((function(e){return e.value===A}))&&E(A)}var K=function(e){var t=e.currentTarget,n=S.indexOf(t),a=y[n].value;a!==T&&(I(t),E(a),null!=f&&w(f,String(a)))},H=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=S.indexOf(e.currentTarget)+1;n=null!=(a=S[r])?a:S[0];break;case"ArrowLeft":var l,o=S.indexOf(e.currentTarget)-1;n=null!=(l=S[o])?l:S[S.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":h},k)},y.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return S.push(e)},onKeyDown:H,onFocus:K,onClick:K},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(g.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function d(e){var t=(0,o.Z)();return r.createElement(h,(0,a.Z)({key:String(t)},e))}},60716:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return d}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=n(65488),i=n(85162),s=["components"],u={title:"Install/Upgrade Rancher on a Kubernetes Cluster",description:"Learn how to install Rancher in development and production environments. Read about single node and high availability installation"},c=void 0,p={unversionedId:"pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster",id:"version-2.5/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster",title:"Install/Upgrade Rancher on a Kubernetes Cluster",description:"Learn how to install Rancher in development and production environments. Read about single node and high availability installation",source:"@site/versioned_docs/version-2.5/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster",permalink:"/zh/v2.5/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster.md",tags:[],version:"2.5",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"2022/9/23",frontMatter:{title:"Install/Upgrade Rancher on a Kubernetes Cluster",description:"Learn how to install Rancher in development and production environments. Read about single node and high availability installation"},sidebar:"tutorialSidebar",previous:{title:"Port Requirements",permalink:"/zh/v2.5/getting-started/installation-and-upgrade/installation-requirements/port-requirements"},next:{title:"Rollbacks",permalink:"/zh/v2.5/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rollbacks"}},h={},d=[{value:"Kubernetes Cluster",id:"kubernetes-cluster",level:3},{value:"CLI Tools",id:"cli-tools",level:3},{value:"Ingress Controller (For Hosted Kubernetes)",id:"ingress-controller-for-hosted-kubernetes",level:3},{value:"1. Add the Helm Chart Repository",id:"1-add-the-helm-chart-repository",level:3},{value:"2. Create a Namespace for Rancher",id:"2-create-a-namespace-for-rancher",level:3},{value:"3. Choose your SSL Configuration",id:"3-choose-your-ssl-configuration",level:3},{value:"4. Install cert-manager",id:"4-install-cert-manager",level:3},{value:"5. Install Rancher with Helm and Your Chosen Certificate Option",id:"5-install-rancher-with-helm-and-your-chosen-certificate-option",level:3},{value:"6. Verify that the Rancher Server is Successfully Deployed",id:"6-verify-that-the-rancher-server-is-successfully-deployed",level:3},{value:"7. Save Your Options",id:"7-save-your-options",level:3},{value:"Finishing Up",id:"finishing-up",level:3},{value:"Optional Next Steps",id:"optional-next-steps",level:3}],m={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"In this section, you'll learn how to deploy Rancher on a Kubernetes cluster using the Helm CLI."),(0,l.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#kubernetes-cluster"},"Kubernetes Cluster")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#cli-tools"},"CLI Tools")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#ingress-controller-for-hosted-kubernetes"},"Ingress Controller (Only for Hosted Kubernetes)"))),(0,l.kt)("h3",{id:"kubernetes-cluster"},"Kubernetes Cluster"),(0,l.kt)("p",null,"Set up the Rancher server's local Kubernetes cluster."),(0,l.kt)("p",null,"Rancher can be installed on any Kubernetes cluster. This cluster can use upstream Kubernetes, or it can use one of Rancher's Kubernetes distributions, or it can be a managed Kubernetes cluster from a provider such as Amazon EKS."),(0,l.kt)("p",null,"For help setting up a Kubernetes cluster, we provide these tutorials:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"RKE:")," For the tutorial to install an RKE Kubernetes cluster, refer to ",(0,l.kt)("a",{parentName:"li",href:"/zh/v2.5/how-to-guides/new-user-guides/kubernetes-cluster-setup/rke1-for-rancher"},"this page.")," For help setting up the infrastructure for a high-availability RKE cluster, refer to ",(0,l.kt)("a",{parentName:"li",href:"/zh/v2.5/how-to-guides/new-user-guides/infrastructure-setup/ha-rke1-kubernetes-cluster"},"this page.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"K3s:")," For the tutorial to install a K3s Kubernetes cluster, refer to ",(0,l.kt)("a",{parentName:"li",href:"/zh/v2.5/how-to-guides/new-user-guides/kubernetes-cluster-setup/k3s-for-rancher"},"this page.")," For help setting up the infrastructure for a high-availability K3s cluster, refer to ",(0,l.kt)("a",{parentName:"li",href:"/zh/v2.5/how-to-guides/new-user-guides/infrastructure-setup/ha-k3s-kubernetes-cluster"},"this page.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"RKE2:")," For the tutorial to install an RKE2 Kubernetes cluster, refer to ",(0,l.kt)("a",{parentName:"li",href:"/zh/v2.5/how-to-guides/new-user-guides/kubernetes-cluster-setup/rke2-for-rancher"},"this page.")," For help setting up the infrastructure for a high-availability RKE2 cluster, refer to ",(0,l.kt)("a",{parentName:"li",href:"/zh/v2.5/how-to-guides/new-user-guides/infrastructure-setup/ha-rke2-kubernetes-cluster"},"this page.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Amazon EKS:")," For details on how to install Rancher on Amazon EKS, including how to install an ingress so that the Rancher server can be accessed, refer to ",(0,l.kt)("a",{parentName:"li",href:"/zh/v2.5/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-amazon-eks"},"this page.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"AKS:")," For details on how to install Rancher with Azure Kubernetes Service, including how to install an ingress so that the Rancher server can be accessed, refer to ",(0,l.kt)("a",{parentName:"li",href:"/zh/v2.5/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-aks"},"this page.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"GKE:")," For details on how to install Rancher with Google Kubernetes Engine, including how to install an ingress so that the Rancher server can be accessed, refer to ",(0,l.kt)("a",{parentName:"li",href:"/zh/v2.5/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-gke"},"this page."))),(0,l.kt)("h3",{id:"cli-tools"},"CLI Tools"),(0,l.kt)("p",null,"The following CLI tools are required for setting up the Kubernetes cluster. Please make sure these tools are installed and available in your ",(0,l.kt)("inlineCode",{parentName:"p"},"$PATH"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl"},"kubectl")," - Kubernetes command-line tool."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.helm.sh/using_helm/#installing-helm"},"helm")," - Package management for Kubernetes. Refer to the ",(0,l.kt)("a",{parentName:"li",href:"/zh/v2.5/getting-started/installation-and-upgrade/resources/helm-version-requirements"},"Helm version requirements")," to choose a version of Helm to install Rancher. Refer to the ",(0,l.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"instructions provided by the Helm project")," for your specific platform.")),(0,l.kt)("h3",{id:"ingress-controller-for-hosted-kubernetes"},"Ingress Controller (For Hosted Kubernetes)"),(0,l.kt)("p",null,"To deploy Rancher v2.5 on a hosted Kubernetes cluster such as EKS, GKE, or AKS, you should deploy a compatible Ingress controller first to configure ",(0,l.kt)("a",{parentName:"p",href:"#3-choose-your-ssl-configuration"},"SSL termination on Rancher.")),(0,l.kt)("p",null,"For an example of how to deploy an ingress on EKS, refer to ",(0,l.kt)("a",{parentName:"p",href:"/zh/v2.5/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-amazon-eks#5-install-an-ingress"},"this section.")),(0,l.kt)("h1",{id:"install-the-rancher-helm-chart"},"Install the Rancher Helm Chart"),(0,l.kt)("p",null,"Rancher is installed using the Helm package manager for Kubernetes. Helm charts provide templating syntax for Kubernetes YAML manifest documents."),(0,l.kt)("p",null,"With Helm, we can create configurable deployments instead of just using static files. For more information about creating your own catalog of deployments, check out the docs at ",(0,l.kt)("a",{parentName:"p",href:"https://helm.sh/"},"https://helm.sh/"),"."),(0,l.kt)("p",null,"For systems without direct internet access, see ",(0,l.kt)("a",{parentName:"p",href:"/zh/v2.5/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha"},"Air Gap: Kubernetes install"),"."),(0,l.kt)("p",null,"To choose a Rancher version to install, refer to ",(0,l.kt)("a",{parentName:"p",href:"/zh/v2.5/getting-started/installation-and-upgrade/resources/choose-a-rancher-version"},"Choosing a Rancher Version.")),(0,l.kt)("p",null,"To choose a version of Helm to install Rancher with, refer to the ",(0,l.kt)("a",{parentName:"p",href:"/zh/v2.5/getting-started/installation-and-upgrade/resources/helm-version-requirements"},"Helm version requirements")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:")," The installation instructions assume you are using Helm 3. For migration of installs started with Helm 2, refer to the official ",(0,l.kt)("a",{parentName:"p",href:"https://helm.sh/blog/migrate-from-helm-v2-to-helm-v3/"},"Helm 2 to 3 migration docs.")," This ",(0,l.kt)("a",{parentName:"p",href:"/zh/v2.5/getting-started/installation-and-upgrade/resources/helm-version-requirements"},"section")," provides a copy of the older installation instructions for Rancher installed on an RKE Kubernetes cluster with Helm 2, and it is intended to be used if upgrading to Helm 3 is not feasible.")),(0,l.kt)("p",null,"To set up Rancher,"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#1-add-the-helm-chart-repository"},"Add the Helm chart repository")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#2-create-a-namespace-for-rancher"},"Create a namespace for Rancher")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#3-choose-your-ssl-configuration"},"Choose your SSL configuration")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#4-install-cert-manager"},"Install cert-manager")," (unless you are bringing your own certificates, or TLS will be terminated on a load balancer)"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#5-install-rancher-with-helm-and-your-chosen-certificate-option"},"Install Rancher with Helm and your chosen certificate option")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#6-verify-that-the-rancher-server-is-successfully-deployed"},"Verify that the Rancher server is successfully deployed")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#7-save-your-options"},"Save your options"))),(0,l.kt)("h3",{id:"1-add-the-helm-chart-repository"},"1. Add the Helm Chart Repository"),(0,l.kt)("p",null,"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"helm repo add")," command to add the Helm chart repository that contains charts to install Rancher. For more information about the repository choices and which is best for your use case, see ",(0,l.kt)("a",{parentName:"p",href:"/zh/v2.5/reference-guides/installation-references/helm-chart-options#helm-chart-repositories"},"Choosing a Version of Rancher"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Latest: Recommended for trying out the newest features",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"helm repo add rancher-latest https://releases.rancher.com/server-charts/latest\n"))),(0,l.kt)("li",{parentName:"ul"},"Stable: Recommended for production environments",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"helm repo add rancher-stable https://releases.rancher.com/server-charts/stable\n"))),(0,l.kt)("li",{parentName:"ul"},"Alpha: Experimental preview of upcoming releases.",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"helm repo add rancher-stable https://releases.rancher.com/server-charts/stable\n")),"  Note: Upgrades are not supported to, from, or between Alphas.")),(0,l.kt)("h3",{id:"2-create-a-namespace-for-rancher"},"2. Create a Namespace for Rancher"),(0,l.kt)("p",null,"We'll need to define a Kubernetes namespace where the resources created by the Chart should be installed. This should always be ",(0,l.kt)("inlineCode",{parentName:"p"},"cattle-system"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl create namespace cattle-system\n")),(0,l.kt)("h3",{id:"3-choose-your-ssl-configuration"},"3. Choose your SSL Configuration"),(0,l.kt)("p",null,"The Rancher management server is designed to be secure by default and requires SSL/TLS configuration."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:")," If you want terminate SSL/TLS externally, see ",(0,l.kt)("a",{parentName:"p",href:"/zh/v2.5/reference-guides/installation-references/helm-chart-options#external-tls-termination"},"TLS termination on an External Load Balancer"),".")),(0,l.kt)("p",null,"There are three recommended options for the source of the certificate used for TLS termination at the Rancher server:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Rancher-generated TLS certificate:")," In this case, you will need to install ",(0,l.kt)("inlineCode",{parentName:"li"},"cert-manager")," into the cluster. Rancher utilizes ",(0,l.kt)("inlineCode",{parentName:"li"},"cert-manager")," to issue and maintain its certificates. Rancher will generate a CA certificate of its own, and sign a cert using that CA. ",(0,l.kt)("inlineCode",{parentName:"li"},"cert-manager")," is then responsible for managing that certificate."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Let's Encrypt:")," The Let's Encrypt option also uses ",(0,l.kt)("inlineCode",{parentName:"li"},"cert-manager"),". However, in this case, cert-manager is combined with a special Issuer for Let's Encrypt that performs all actions (including request and validation) necessary for getting a Let's Encrypt issued cert. This configuration uses HTTP validation (",(0,l.kt)("inlineCode",{parentName:"li"},"HTTP-01"),"), so the load balancer must have a public DNS record and be accessible from the internet."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Bring your own certificate:")," This option allows you to bring your own public- or private-CA signed certificate. Rancher will use that certificate to secure websocket and HTTPS traffic. In this case, you must upload this certificate (and associated key) as PEM-encoded files with the name ",(0,l.kt)("inlineCode",{parentName:"li"},"tls.crt")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"tls.key"),". If you are using a private CA, you must also upload that certificate. This is due to the fact that this private CA may not be trusted by your nodes. Rancher will take that CA certificate, and generate a checksum from it, which the various Rancher components will use to validate their connection to Rancher.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Configuration"),(0,l.kt)("th",{parentName:"tr",align:null},"Helm Chart Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Requires cert-manager"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Rancher Generated Certificates (Default)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ingress.tls.source=rancher")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#5-install-cert-manager"},"yes"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Let\u2019s Encrypt"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ingress.tls.source=letsEncrypt")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#5-install-cert-manager"},"yes"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Certificates from Files"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ingress.tls.source=secret")),(0,l.kt)("td",{parentName:"tr",align:null},"no")))),(0,l.kt)("h3",{id:"4-install-cert-manager"},"4. Install cert-manager"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"You should skip this step if you are bringing your own certificate files (option ",(0,l.kt)("inlineCode",{parentName:"p"},"ingress.tls.source=secret"),"), or if you use ",(0,l.kt)("a",{parentName:"p",href:"/zh/v2.5/reference-guides/installation-references/helm-chart-options#external-tls-termination"},"TLS termination on an external load balancer"),".")),(0,l.kt)("p",null,"This step is only required to use certificates issued by Rancher's generated CA (",(0,l.kt)("inlineCode",{parentName:"p"},"ingress.tls.source=rancher"),") or to request Let's Encrypt issued certificates (",(0,l.kt)("inlineCode",{parentName:"p"},"ingress.tls.source=letsEncrypt"),")."),(0,l.kt)("details",{id:"cert-manager"},(0,l.kt)("summary",null,"Click to Expand"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Important:")," Recent changes to cert-manager require an upgrade. If you are upgrading Rancher and using a version of cert-manager older than v0.11.0, please see our ",(0,l.kt)("a",{parentName:"p",href:"/zh/v2.5/getting-started/installation-and-upgrade/resources/upgrade-cert-manager/"},"upgrade documentation"),".")),(0,l.kt)("p",null,"These instructions are adapted from the ",(0,l.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/installation/kubernetes/#installing-with-helm"},"official cert-manager documentation"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# If you have installed the CRDs manually instead of with the `--set installCRDs=true` option added to your Helm install command, you should upgrade your CRD resources before upgrading the Helm chart:\nkubectl apply -f https://github.com/jetstack/cert-manager/releases/download/v1.5.1/cert-manager.crds.yaml\n\n# Add the Jetstack Helm repository\nhelm repo add jetstack https://charts.jetstack.io\n\n# Update your local Helm chart repository cache\nhelm repo update\n\n# Install the cert-manager Helm chart\nhelm install cert-manager jetstack/cert-manager \\\n  --namespace cert-manager \\\n  --create-namespace \\\n  --version v1.5.1\n")),(0,l.kt)("p",null,"Once you\u2019ve installed cert-manager, you can verify it is deployed correctly by checking the cert-manager namespace for running pods:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl get pods --namespace cert-manager\n\nNAME                                       READY   STATUS    RESTARTS   AGE\ncert-manager-5c6866597-zw7kh               1/1     Running   0          2m\ncert-manager-cainjector-577f6d9fd7-tr77l   1/1     Running   0          2m\ncert-manager-webhook-787858fcdb-nlzsq      1/1     Running   0          2m\n"))),(0,l.kt)("h3",{id:"5-install-rancher-with-helm-and-your-chosen-certificate-option"},"5. Install Rancher with Helm and Your Chosen Certificate Option"),(0,l.kt)("p",null,"The exact command to install Rancher differs depending on the certificate configuration."),(0,l.kt)("p",null,"However, irrespective of the certificate configuration, the name of the Rancher installation in the ",(0,l.kt)("inlineCode",{parentName:"p"},"cattle-system")," namespace should always be ",(0,l.kt)("inlineCode",{parentName:"p"},"rancher"),"."),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Rancher-generated Certificates",mdxType:"TabItem"},(0,l.kt)("p",null,"The default is for Rancher to generate a self-signed CA, and uses ",(0,l.kt)("inlineCode",{parentName:"p"},"cert-manager")," to issue the certificate for access to the Rancher server interface."),(0,l.kt)("p",null,"Because ",(0,l.kt)("inlineCode",{parentName:"p"},"rancher")," is the default option for ",(0,l.kt)("inlineCode",{parentName:"p"},"ingress.tls.source"),", we are not specifying ",(0,l.kt)("inlineCode",{parentName:"p"},"ingress.tls.source")," when running the ",(0,l.kt)("inlineCode",{parentName:"p"},"helm install")," command."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Set ",(0,l.kt)("inlineCode",{parentName:"li"},"hostname")," to the DNS record that resolves to your load balancer."),(0,l.kt)("li",{parentName:"ul"},"Set ",(0,l.kt)("inlineCode",{parentName:"li"},"replicas")," to the number of replicas to use for the Rancher Deployment. This defaults to 3; if you have less than 3 nodes in your cluster you should reduce it accordingly."),(0,l.kt)("li",{parentName:"ul"},"To install a specific Rancher version, use the ",(0,l.kt)("inlineCode",{parentName:"li"},"--version")," flag, example: ",(0,l.kt)("inlineCode",{parentName:"li"},"--version 2.3.6"),"."),(0,l.kt)("li",{parentName:"ul"},"If you are installing an alpha version, Helm requires adding the ",(0,l.kt)("inlineCode",{parentName:"li"},"--devel")," option to the command.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"helm install rancher rancher-<CHART_REPO>/rancher \\\n  --namespace cattle-system \\\n  --set hostname=rancher.my.org \\\n  --set replicas=3\n")),(0,l.kt)("p",null,"Wait for Rancher to be rolled out:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'kubectl -n cattle-system rollout status deploy/rancher\nWaiting for deployment "rancher" rollout to finish: 0 of 3 updated replicas are available...\ndeployment "rancher" successfully rolled out\n'))),(0,l.kt)(i.Z,{value:"Let's Encrypt",mdxType:"TabItem"},(0,l.kt)("p",null,"This option uses ",(0,l.kt)("inlineCode",{parentName:"p"},"cert-manager")," to automatically request and renew ",(0,l.kt)("a",{parentName:"p",href:"https://letsencrypt.org/"},"Let's Encrypt")," certificates. This is a free service that provides you with a valid certificate as Let's Encrypt is a trusted CA."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:")," You need to have port 80 open as the HTTP-01 challenge can only be done on port 80.")),(0,l.kt)("p",null,"In the following command,"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Set ",(0,l.kt)("inlineCode",{parentName:"li"},"hostname")," to the public DNS record that resolves to your load balancer."),(0,l.kt)("li",{parentName:"ul"},"Set ",(0,l.kt)("inlineCode",{parentName:"li"},"replicas")," to the number of replicas to use for the Rancher Deployment. This defaults to 3; if you have less than 3 nodes in your cluster you should reduce it accordingly."),(0,l.kt)("li",{parentName:"ul"},"Set ",(0,l.kt)("inlineCode",{parentName:"li"},"ingress.tls.source")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"letsEncrypt"),"."),(0,l.kt)("li",{parentName:"ul"},"Set ",(0,l.kt)("inlineCode",{parentName:"li"},"letsEncrypt.email")," to the email address used for communication about your certificate (for example, expiry notices)."),(0,l.kt)("li",{parentName:"ul"},"Set ",(0,l.kt)("inlineCode",{parentName:"li"},"letsEncrypt.ingress.class")," to whatever your ingress controller is, e.g., ",(0,l.kt)("inlineCode",{parentName:"li"},"traefik"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"nginx"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"haproxy"),", etc."),(0,l.kt)("li",{parentName:"ul"},"To install a specific Rancher version, use the ",(0,l.kt)("inlineCode",{parentName:"li"},"--version")," flag, example: ",(0,l.kt)("inlineCode",{parentName:"li"},"--version 2.3.6"),"."),(0,l.kt)("li",{parentName:"ul"},"If you are installing an alpha version, Helm requires adding the ",(0,l.kt)("inlineCode",{parentName:"li"},"--devel")," option to the command.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"helm install rancher rancher-<CHART_REPO>/rancher \\\n  --namespace cattle-system \\\n  --set hostname=rancher.my.org \\\n  --set replicas=3 \\\n  --set ingress.tls.source=letsEncrypt \\\n  --set letsEncrypt.email=me@example.org \\\n  --set letsEncrypt.ingress.class=nginx\n")),(0,l.kt)("p",null,"Wait for Rancher to be rolled out:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'kubectl -n cattle-system rollout status deploy/rancher\nWaiting for deployment "rancher" rollout to finish: 0 of 3 updated replicas are available...\ndeployment "rancher" successfully rolled out\n'))),(0,l.kt)(i.Z,{value:"Certificates from Files",mdxType:"TabItem"},"In this option, Kubernetes secrets are created from your own certificates for Rancher to use.",(0,l.kt)("p",null,"When you run this command, the ",(0,l.kt)("inlineCode",{parentName:"p"},"hostname")," option must match the ",(0,l.kt)("inlineCode",{parentName:"p"},"Common Name")," or a ",(0,l.kt)("inlineCode",{parentName:"p"},"Subject Alternative Names")," entry in the server certificate, or the Ingress controller will fail to configure correctly."),(0,l.kt)("p",null,"Although an entry in the ",(0,l.kt)("inlineCode",{parentName:"p"},"Subject Alternative Names")," is technically required, having a matching ",(0,l.kt)("inlineCode",{parentName:"p"},"Common Name")," maximizes compatibility with older browsers and applications."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If you want to check if your certificates are correct, see ",(0,l.kt)("a",{parentName:"p",href:"/zh/v2.5/faq/technical-items#how-do-i-check-common-name-and-subject-alternative-names-in-my-server-certificate"},"How do I check Common Name and Subject Alternative Names in my server certificate?"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Set ",(0,l.kt)("inlineCode",{parentName:"li"},"hostname")," as appropriate for your certificate, as described above."),(0,l.kt)("li",{parentName:"ul"},"Set ",(0,l.kt)("inlineCode",{parentName:"li"},"replicas")," to the number of replicas to use for the Rancher Deployment. This defaults to 3; if you have less than 3 nodes in your cluster you should reduce it accordingly."),(0,l.kt)("li",{parentName:"ul"},"Set ",(0,l.kt)("inlineCode",{parentName:"li"},"ingress.tls.source")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"secret"),"."),(0,l.kt)("li",{parentName:"ul"},"To install a specific Rancher version, use the ",(0,l.kt)("inlineCode",{parentName:"li"},"--version")," flag, example: ",(0,l.kt)("inlineCode",{parentName:"li"},"--version 2.3.6"),"."),(0,l.kt)("li",{parentName:"ul"},"If you are installing an alpha version, Helm requires adding the ",(0,l.kt)("inlineCode",{parentName:"li"},"--devel")," option to the command.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"helm install rancher rancher-<CHART_REPO>/rancher \\\n  --namespace cattle-system \\\n  --set hostname=rancher.my.org \\\n  --set replicas=3 \\\n  --set ingress.tls.source=secret\n")),(0,l.kt)("p",null,"If you are using a Private CA signed certificate , add ",(0,l.kt)("inlineCode",{parentName:"p"},"--set privateCA=true")," to the command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"helm install rancher rancher-<CHART_REPO>/rancher \\\n  --namespace cattle-system \\\n  --set hostname=rancher.my.org \\\n  --set ingress.tls.source=secret \\\n  --set privateCA=true\n")),(0,l.kt)("p",null,"Now that Rancher is deployed, see ",(0,l.kt)("a",{parentName:"p",href:"/zh/v2.5/getting-started/installation-and-upgrade/resources/add-tls-secrets"},"Adding TLS Secrets")," to publish the certificate files so Rancher and the Ingress controller can use them."))),(0,l.kt)("p",null,"The Rancher chart configuration has many options for customizing the installation to suit your specific environment. Here are some common advanced scenarios."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/zh/v2.5/reference-guides/installation-references/helm-chart-options#http-proxy"},"HTTP Proxy")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/zh/v2.5/reference-guides/installation-references/helm-chart-options#private-registry-and-air-gap-installs"},"Private Docker Image Registry")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/zh/v2.5/reference-guides/installation-references/helm-chart-options#external-tls-termination"},"TLS Termination on an External Load Balancer"))),(0,l.kt)("p",null,"See the ",(0,l.kt)("a",{parentName:"p",href:"/zh/v2.5/reference-guides/installation-references/helm-chart-options"},"Chart Options")," for the full list of options."),(0,l.kt)("h3",{id:"6-verify-that-the-rancher-server-is-successfully-deployed"},"6. Verify that the Rancher Server is Successfully Deployed"),(0,l.kt)("p",null,"After adding the secrets, check if Rancher was rolled out successfully:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'kubectl -n cattle-system rollout status deploy/rancher\nWaiting for deployment "rancher" rollout to finish: 0 of 3 updated replicas are available...\ndeployment "rancher" successfully rolled out\n')),(0,l.kt)("p",null,"If you see the following error: ",(0,l.kt)("inlineCode",{parentName:"p"},'error: deployment "rancher" exceeded its progress deadline'),", you can check the status of the deployment by running the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl -n cattle-system get deploy rancher\nNAME      DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE\nrancher   3         3         3            3           3m\n")),(0,l.kt)("p",null,"It should show the same count for ",(0,l.kt)("inlineCode",{parentName:"p"},"DESIRED")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"AVAILABLE"),"."),(0,l.kt)("h3",{id:"7-save-your-options"},"7. Save Your Options"),(0,l.kt)("p",null,"Make sure you save the ",(0,l.kt)("inlineCode",{parentName:"p"},"--set")," options you used. You will need to use the same options when you upgrade Rancher to new versions with Helm."),(0,l.kt)("h3",{id:"finishing-up"},"Finishing Up"),(0,l.kt)("p",null,"That's it. You should have a functional Rancher server."),(0,l.kt)("p",null,"In a web browser, go to the DNS name that forwards traffic to your load balancer. Then you should be greeted by the colorful login page."),(0,l.kt)("p",null,"Doesn't work? Take a look at the ",(0,l.kt)("a",{parentName:"p",href:"/zh/v2.5/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/troubleshooting"},"Troubleshooting")," Page"),(0,l.kt)("h3",{id:"optional-next-steps"},"Optional Next Steps"),(0,l.kt)("p",null,"Enable the Enterprise Cluster Manager."))}f.isMDXComponent=!0}}]);