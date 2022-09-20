"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[69550],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(n),d=r,m=h["".concat(s,".").concat(d)]||h[d]||p[d]||a;return n?i.createElement(m,o(o({ref:t},u),{},{components:n})):i.createElement(m,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return o}});var i=n(67294),r=n(86010),a="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return i.createElement("div",{role:"tabpanel",className:(0,r.Z)(a,o),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return d}});var i=n(87462),r=n(67294),a=n(86010),o=n(72389),l=n(67392),s=n(7094),c=n(12466),u="tabList__CuJ",p="tabItem_LNqP";function h(e){var t,n,o=e.lazy,h=e.block,d=e.defaultValue,m=e.values,f=e.groupId,k=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=m?m:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,l.l)(y,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===d?d:null!=(t=null!=d?d:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==v&&!y.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,s.U)(),w=N.tabGroupChoices,P=N.setTabGroupChoices,I=(0,r.useState)(v),C=I[0],S=I[1],j=[],T=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var E=w[f];null!=E&&E!==C&&y.some((function(e){return e.value===E}))&&S(E)}var x=function(e){var t=e.currentTarget,n=j.indexOf(t),i=y[n].value;i!==C&&(T(t),S(i),null!=f&&P(f,String(i)))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var i,r=j.indexOf(e.currentTarget)+1;n=null!=(i=j[r])?i:j[0];break;case"ArrowLeft":var a,o=j.indexOf(e.currentTarget)-1;n=null!=(a=j[o])?a:j[j.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":h},k)},y.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,i.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return j.push(e)},onKeyDown:O,onFocus:x,onClick:x},o,{className:(0,a.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(b.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function d(e){var t=(0,o.Z)();return r.createElement(h,(0,i.Z)({key:String(t)},e))}},65835:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return d}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),o=n(65488),l=n(85162),s=["components"],c={title:"Enable Istio with Pod Security Policies",weight:1,aliases:["/rancher/v2.5/en/istio/setup/enable-istio-in-cluster/enable-istio-with-psp","/rancher/v2.5/en/istio/legacy/setup/enable-istio-in-cluster/enable-istio-with-psp","/rancher/v2.5/en/istio/v2.5/setup/enable-istio-in-cluster/enable-istio-with-psp","/rancher/v2.5/en/istio/v2.5/configuration-reference/enable-istio-with-psp","/rancher/v2.x/en/istio/v2.5/configuration-reference/enable-istio-with-psp/"]},u=void 0,p={unversionedId:"explanations/integrations-in-rancher/istio/configuration-options/pod-security-policies",id:"version-2.5/explanations/integrations-in-rancher/istio/configuration-options/pod-security-policies",title:"Enable Istio with Pod Security Policies",description:"If you have restrictive Pod Security Policies enabled, then Istio may not be able to function correctly, because it needs certain permissions in order to install itself and manage pod infrastructure. In this section, we will configure a cluster with PSPs enabled for an Istio install, and also set up the Istio CNI plugin.",source:"@site/versioned_docs/version-2.5/explanations/integrations-in-rancher/istio/configuration-options/pod-security-policies.md",sourceDirName:"explanations/integrations-in-rancher/istio/configuration-options",slug:"/explanations/integrations-in-rancher/istio/configuration-options/pod-security-policies",permalink:"/v2.5/explanations/integrations-in-rancher/istio/configuration-options/pod-security-policies",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/explanations/integrations-in-rancher/istio/configuration-options/pod-security-policies.md",tags:[],version:"2.5",lastUpdatedAt:1663710212,formattedLastUpdatedAt:"9/20/2022",frontMatter:{title:"Enable Istio with Pod Security Policies",weight:1,aliases:["/rancher/v2.5/en/istio/setup/enable-istio-in-cluster/enable-istio-with-psp","/rancher/v2.5/en/istio/legacy/setup/enable-istio-in-cluster/enable-istio-with-psp","/rancher/v2.5/en/istio/v2.5/setup/enable-istio-in-cluster/enable-istio-with-psp","/rancher/v2.5/en/istio/v2.5/configuration-reference/enable-istio-with-psp","/rancher/v2.x/en/istio/v2.5/configuration-reference/enable-istio-with-psp/"]},sidebar:"tutorialSidebar",previous:{title:"Configuration Options",permalink:"/v2.5/pages-for-subheaders/configuration-options"},next:{title:"Selectors and Scrape Configs",permalink:"/v2.5/explanations/integrations-in-rancher/istio/configuration-options/selectors-and-scrape-configurations"}},h={},d=[{value:"1. Set the PodSecurityPolicy to unrestricted",id:"1-set-the-podsecuritypolicy-to-unrestricted",level:3},{value:"2. Enable the CNI",id:"2-enable-the-cni",level:3},{value:"3. Verify that the CNI is working",id:"3-verify-that-the-cni-is-working",level:3},{value:"1. Configure the System Project Policy to allow Istio install",id:"1-configure-the-system-project-policy-to-allow-istio-install",level:3},{value:"2. Install the CNI Plugin in the System Project",id:"2-install-the-cni-plugin-in-the-system-project",level:3},{value:"3. Install Istio",id:"3-install-istio",level:3}],m={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you have restrictive Pod Security Policies enabled, then Istio may not be able to function correctly, because it needs certain permissions in order to install itself and manage pod infrastructure. In this section, we will configure a cluster with PSPs enabled for an Istio install, and also set up the Istio CNI plugin."),(0,a.kt)("p",null,"The Istio CNI plugin removes the need for each application pod to have a privileged ",(0,a.kt)("inlineCode",{parentName:"p"},"NET_ADMIN")," container. For further information, see the ",(0,a.kt)("a",{parentName:"p",href:"https://istio.io/docs/setup/additional-setup/cni"},"Istio CNI Plugin docs"),". Please note that the ",(0,a.kt)("a",{parentName:"p",href:"https://istio.io/about/feature-stages/"},"Istio CNI Plugin is in alpha"),"."),(0,a.kt)("p",null,"The steps differ based on the Rancher version."),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"v2.5.4+",mdxType:"TabItem"},(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Prerequisites:")),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"The cluster must be an RKE Kubernetes cluster."),(0,a.kt)("li",{parentName:"ul"},"The cluster must have been created with a default PodSecurityPolicy.")),(0,a.kt)("p",{parentName:"blockquote"},"To enable pod security policy support when creating a Kubernetes cluster in the Rancher UI, go to ",(0,a.kt)("b",null,"Advanced Options.")," In the ",(0,a.kt)("b",null,"Pod Security Policy Support")," section, click ",(0,a.kt)("b",null,"Enabled.")," Then select a default pod security policy.")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#1-set-the-podsecuritypolicy-to-unrestricted"},"Set the PodSecurityPolicy to unrestricted")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#2-enable-the-cni"},"Enable the CNI")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#3-verify-that-the-cni-is-working"},"Verify that the CNI is working."))),(0,a.kt)("h3",{id:"1-set-the-podsecuritypolicy-to-unrestricted"},"1. Set the PodSecurityPolicy to unrestricted"),(0,a.kt)("p",null,"An unrestricted PSP allows Istio to be installed."),(0,a.kt)("p",null,"Set the PSP to ",(0,a.kt)("inlineCode",{parentName:"p"},"unrestricted")," in the project where is Istio is installed, or the project where you plan to install Istio."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"From the cluster view of the ",(0,a.kt)("strong",{parentName:"li"},"Cluster Manager,")," select ",(0,a.kt)("strong",{parentName:"li"},"Projects/Namespaces.")),(0,a.kt)("li",{parentName:"ol"},"Find the ",(0,a.kt)("strong",{parentName:"li"},"Project: System")," and select the ",(0,a.kt)("strong",{parentName:"li"},"\u22ee"," > Edit"),"."),(0,a.kt)("li",{parentName:"ol"},"Change the Pod Security Policy option to be unrestricted, then click ",(0,a.kt)("strong",{parentName:"li"},"Save."))),(0,a.kt)("h3",{id:"2-enable-the-cni"},"2. Enable the CNI"),(0,a.kt)("p",null,"When installing or upgrading Istio through ",(0,a.kt)("strong",{parentName:"p"},"Apps & Marketplace,")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Components.")),(0,a.kt)("li",{parentName:"ol"},"Check the box next to ",(0,a.kt)("strong",{parentName:"li"},"Enabled CNI.")),(0,a.kt)("li",{parentName:"ol"},"Finish installing or upgrading Istio.")),(0,a.kt)("p",null,"The CNI can also be enabled by editing the ",(0,a.kt)("inlineCode",{parentName:"p"},"values.yaml"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"istio_cni.enabled: true\n")),(0,a.kt)("p",null,"Istio should install successfully with the CNI enabled in the cluster."),(0,a.kt)("h3",{id:"3-verify-that-the-cni-is-working"},"3. Verify that the CNI is working"),(0,a.kt)("p",null,"Verify that the CNI is working by deploying a ",(0,a.kt)("a",{parentName:"p",href:"https://istio.io/latest/docs/examples/bookinfo/"},"sample application")," or deploying one of your own applications.")),(0,a.kt)(l.Z,{value:"v2.5.0-v2.5.3",mdxType:"TabItem"},(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Prerequisites:")),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"The cluster must be an RKE Kubernetes cluster."),(0,a.kt)("li",{parentName:"ul"},"The cluster must have been created with a default PodSecurityPolicy.")),(0,a.kt)("p",{parentName:"blockquote"},"To enable pod security policy support when creating a Kubernetes cluster in the Rancher UI, go to ",(0,a.kt)("b",null,"Advanced Options.")," In the ",(0,a.kt)("b",null,"Pod Security Policy Support")," section, click ",(0,a.kt)("b",null,"Enabled.")," Then select a default pod security policy.")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#1-configure-the-system-project-policy-to-allow-istio-install"},"Configure the System Project Policy to allow Istio install.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#2-install-the-cni-plugin-in-the-system-project"},"Install the CNI plugin in the System project.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#3-install-istio"},"Install Istio."))),(0,a.kt)("h3",{id:"1-configure-the-system-project-policy-to-allow-istio-install"},"1. Configure the System Project Policy to allow Istio install"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"From the cluster view of the ",(0,a.kt)("strong",{parentName:"li"},"Cluster Manager,")," select ",(0,a.kt)("strong",{parentName:"li"},"Projects/Namespaces.")),(0,a.kt)("li",{parentName:"ol"},"Find the ",(0,a.kt)("strong",{parentName:"li"},"Project: System")," and select the ",(0,a.kt)("strong",{parentName:"li"},"\u22ee"," > Edit"),"."),(0,a.kt)("li",{parentName:"ol"},"Change the Pod Security Policy option to be unrestricted, then click Save.")),(0,a.kt)("h3",{id:"2-install-the-cni-plugin-in-the-system-project"},"2. Install the CNI Plugin in the System Project"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"From the main menu of the ",(0,a.kt)("strong",{parentName:"li"},"Dashboard"),", select ",(0,a.kt)("strong",{parentName:"li"},"Projects/Namespaces"),"."),(0,a.kt)("li",{parentName:"ol"},"Select the ",(0,a.kt)("strong",{parentName:"li"},"Project: System")," project."),(0,a.kt)("li",{parentName:"ol"},"Choose ",(0,a.kt)("strong",{parentName:"li"},"Tools > Catalogs")," in the navigation bar."),(0,a.kt)("li",{parentName:"ol"},"Add a catalog with the following:",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Name: istio-cni"),(0,a.kt)("li",{parentName:"ol"},"Catalog URL: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/istio/cni"},"https://github.com/istio/cni")),(0,a.kt)("li",{parentName:"ol"},"Branch: The branch that matches your current release, for example: ",(0,a.kt)("inlineCode",{parentName:"li"},"release-1.4"),"."))),(0,a.kt)("li",{parentName:"ol"},"From the main menu select ",(0,a.kt)("strong",{parentName:"li"},"Apps")),(0,a.kt)("li",{parentName:"ol"},"Click Launch and select istio-cni"),(0,a.kt)("li",{parentName:"ol"},'Update the namespace to be "kube-system"'),(0,a.kt)("li",{parentName:"ol"},'In the answers section, click "Edit as YAML" and paste in the following, then click launch:')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'---\n  logLevel: "info"\n  excludeNamespaces:\n    - "istio-system"\n    - "kube-system"\n')),(0,a.kt)("h3",{id:"3-install-istio"},"3. Install Istio"),(0,a.kt)("p",null,"Follow the ",(0,a.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-cluster"},"primary instructions"),", adding a custom answer: ",(0,a.kt)("inlineCode",{parentName:"p"},"istio_cni.enabled: true"),"."),(0,a.kt)("p",null,"After Istio has finished installing, the Apps page in System Projects should show both istio and ",(0,a.kt)("inlineCode",{parentName:"p"},"istio-cni")," applications deployed successfully. Sidecar injection will now be functional."))))}f.isMDXComponent=!0}}]);