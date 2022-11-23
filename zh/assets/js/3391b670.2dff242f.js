"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[55940],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(67294),a=n(86010),i="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,o),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(87462),a=n(67294),i=n(86010),o=n(72389),l=n(67392),s=n(7094),u=n(12466),c="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,n,o=e.lazy,m=e.block,d=e.defaultValue,h=e.values,g=e.groupId,f=e.className,k=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=h?h:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.l)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===d?d:null!=(t=null!=d?d:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:k[0].props.value;if(null!==N&&!v.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,s.U)(),w=y.tabGroupChoices,C=y.setTabGroupChoices,E=(0,a.useState)(N),T=E[0],O=E[1],S=[],I=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var P=w[g];null!=P&&P!==T&&v.some((function(e){return e.value===P}))&&O(P)}var x=function(e){var t=e.currentTarget,n=S.indexOf(t),r=v[n].value;r!==T&&(I(t),O(r),null!=g&&C(g,String(r)))},R=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=S.indexOf(e.currentTarget)+1;n=null!=(r=S[a])?r:S[0];break;case"ArrowLeft":var i,o=S.indexOf(e.currentTarget)-1;n=null!=(i=S[o])?i:S[S.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":m},f)},v.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return S.push(e)},onKeyDown:R,onFocus:x,onClick:x},o,{className:(0,i.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(k.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function d(e){var t=(0,o.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},17371:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=n(65488),l=n(85162),s=["components"],u={title:"Enable Monitoring"},c=void 0,p={unversionedId:"how-to-guides/advanced-user-guides/monitoring-alerting-guides/enable-monitoring",id:"version-2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/enable-monitoring",title:"Enable Monitoring",description:"As an administrator or cluster owner, you can configure Rancher to deploy Prometheus to monitor your Kubernetes cluster.",source:"@site/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/enable-monitoring.md",sourceDirName:"how-to-guides/advanced-user-guides/monitoring-alerting-guides",slug:"/how-to-guides/advanced-user-guides/monitoring-alerting-guides/enable-monitoring",permalink:"/zh/v2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/enable-monitoring",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/enable-monitoring.md",tags:[],version:"2.5",lastUpdatedAt:1667002159,formattedLastUpdatedAt:"2022/10/29",frontMatter:{title:"Enable Monitoring"},sidebar:"tutorialSidebar",previous:{title:"Monitoring Guides",permalink:"/zh/v2.5/pages-for-subheaders/monitoring-alerting-guides"},next:{title:"Uninstall Monitoring",permalink:"/zh/v2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/uninstall-monitoring"}},m={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Setting Resource Limits and Requests",id:"setting-resource-limits-and-requests",level:2},{value:"Install the Monitoring Application",id:"install-the-monitoring-application",level:2},{value:"Enable Monitoring for use without SSL",id:"enable-monitoring-for-use-without-ssl",level:3},{value:"Enable Monitoring for use with SSL",id:"enable-monitoring-for-use-with-ssl",level:3}],h={toc:d};function g(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"As an ",(0,i.kt)("a",{parentName:"p",href:"/zh/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"administrator")," or ",(0,i.kt)("a",{parentName:"p",href:"/zh/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#cluster-roles"},"cluster owner"),", you can configure Rancher to deploy Prometheus to monitor your Kubernetes cluster."),(0,i.kt)("p",null,"This page describes how to enable monitoring and alerting within a cluster using the new monitoring application."),(0,i.kt)("p",null,"You can enable monitoring with or without SSL."),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Make sure that you are allowing traffic on port 9796 for each of your nodes because Prometheus will scrape metrics from here."),(0,i.kt)("li",{parentName:"ul"},"Make sure your cluster fulfills the resource requirements. The cluster should have at least 1950Mi memory available, 2700m CPU, and 50Gi storage. A breakdown of the resource limits and requests is ",(0,i.kt)("a",{parentName:"li",href:"/zh/v2.5/reference-guides/monitoring-v2-configuration/helm-chart-options#configuring-resource-limits-and-requests"},"here.")),(0,i.kt)("li",{parentName:"ul"},"When installing monitoring on an RKE cluster using RancherOS or Flatcar Linux nodes, change the etcd node certificate directory to ",(0,i.kt)("inlineCode",{parentName:"li"},"/opt/rke/etc/kubernetes/ssl"),"."),(0,i.kt)("li",{parentName:"ul"},"For clusters provisioned with the RKE CLI and the address is set to a hostname instead of an IP address, set ",(0,i.kt)("inlineCode",{parentName:"li"},"rkeEtcd.clients.useLocalhost")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," during the Values configuration step of the installation. The YAML snippet will look like the following:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"rkeEtcd:\n  clients:\n    useLocalhost: true\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," If you want to set up Alertmanager, Grafana or Ingress, it has to be done with the settings on the Helm chart deployment. It's problematic to create Ingress outside the deployment.")),(0,i.kt)("h2",{id:"setting-resource-limits-and-requests"},"Setting Resource Limits and Requests"),(0,i.kt)("p",null,"The resource requests and limits can be configured when installing ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-monitoring"),".  To configure Prometheus resources from the Rancher UI, click ",(0,i.kt)("strong",{parentName:"p"},"Apps & Marketplace > Monitoring")," in the upper left corner."),(0,i.kt)("p",null,"For more information about the default limits, see ",(0,i.kt)("a",{parentName:"p",href:"/zh/v2.5/reference-guides/monitoring-v2-configuration/helm-chart-options#configuring-resource-limits-and-requests"},"this page.")),(0,i.kt)("h2",{id:"install-the-monitoring-application"},"Install the Monitoring Application"),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"Rancher v2.5.8",mdxType:"TabItem"},(0,i.kt)("h3",{id:"enable-monitoring-for-use-without-ssl"},"Enable Monitoring for use without SSL"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the Rancher UI, go to the cluster where you want to install monitoring and click ",(0,i.kt)("strong",{parentName:"li"},"Cluster Explorer.")),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Apps.")),(0,i.kt)("li",{parentName:"ol"},"Click the ",(0,i.kt)("inlineCode",{parentName:"li"},"rancher-monitoring")," app."),(0,i.kt)("li",{parentName:"ol"},"Optional: Click ",(0,i.kt)("strong",{parentName:"li"},"Chart Options")," and configure alerting, Prometheus and Grafana. For help, refer to the ",(0,i.kt)("a",{parentName:"li",href:"/zh/v2.5/reference-guides/monitoring-v2-configuration/helm-chart-options"},"configuration reference.")),(0,i.kt)("li",{parentName:"ol"},"Scroll to the bottom of the Helm chart README and click ",(0,i.kt)("strong",{parentName:"li"},"Install."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," The monitoring app is deployed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"cattle-monitoring-system")," namespace."),(0,i.kt)("h3",{id:"enable-monitoring-for-use-with-ssl"},"Enable Monitoring for use with SSL"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Follow the steps on ",(0,i.kt)("a",{parentName:"li",href:"/zh/v2.5/how-to-guides/new-user-guides/kubernetes-resources-setup/secrets"},"this page")," to create a secret in order for SSL to be used for alerts.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The secret should be created in the ",(0,i.kt)("inlineCode",{parentName:"li"},"cattle-monitoring-system")," namespace. If it doesn't exist, create it first."),(0,i.kt)("li",{parentName:"ul"},"Add the ",(0,i.kt)("inlineCode",{parentName:"li"},"ca"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"cert"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"key")," files to the secret.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the Rancher UI, go to the cluster where you want to install monitoring and click ",(0,i.kt)("strong",{parentName:"li"},"Cluster Explorer.")),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Apps.")),(0,i.kt)("li",{parentName:"ol"},"Click the ",(0,i.kt)("inlineCode",{parentName:"li"},"rancher-monitoring")," app."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Alerting"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Additional Secrets")," and add the secrets created earlier.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," The monitoring app is deployed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"cattle-monitoring-system")," namespace."),(0,i.kt)("p",null,"When ",(0,i.kt)("a",{parentName:"p",href:"/zh/v2.5/reference-guides/monitoring-v2-configuration/receivers#creating-receivers-in-the-rancher-ui"},"creating a receiver,")," SSL-enabled receivers such as email or webhook will have a ",(0,i.kt)("strong",{parentName:"p"},"SSL")," section with fields for ",(0,i.kt)("strong",{parentName:"p"},"CA File Path"),", ",(0,i.kt)("strong",{parentName:"p"},"Cert File Path"),", and ",(0,i.kt)("strong",{parentName:"p"},"Key File Path"),". Fill in these fields with the paths to each of ",(0,i.kt)("inlineCode",{parentName:"p"},"ca"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"cert"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"key"),". The path will be of the form ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/alertmanager/secrets/name-of-file-in-secret"),"."),(0,i.kt)("p",null,"For example, if you created a secret with these key-value pairs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"ca.crt=`base64-content`\ncert.pem=`base64-content`\nkey.pfx=`base64-content`\n")),(0,i.kt)("p",null,"Then ",(0,i.kt)("strong",{parentName:"p"},"Cert File Path")," would be set to ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/alertmanager/secrets/cert.pem"),".")),(0,i.kt)(l.Z,{value:"Rancher v2.5.0-2.5.7",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the Rancher UI, go to the cluster where you want to install monitoring and click ",(0,i.kt)("strong",{parentName:"li"},"Cluster Explorer.")),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Apps.")),(0,i.kt)("li",{parentName:"ol"},"Click the ",(0,i.kt)("inlineCode",{parentName:"li"},"rancher-monitoring")," app."),(0,i.kt)("li",{parentName:"ol"},"Optional: Click ",(0,i.kt)("strong",{parentName:"li"},"Chart Options")," and configure alerting, Prometheus and Grafana. For help, refer to the ",(0,i.kt)("a",{parentName:"li",href:"/zh/v2.5/reference-guides/monitoring-v2-configuration/helm-chart-options"},"configuration reference.")),(0,i.kt)("li",{parentName:"ol"},"Scroll to the bottom of the Helm chart README and click ",(0,i.kt)("strong",{parentName:"li"},"Install."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," The monitoring app is deployed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"cattle-monitoring-system")," namespace."))))}g.isMDXComponent=!0}}]);