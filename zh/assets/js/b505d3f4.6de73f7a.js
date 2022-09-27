"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[98357],{3905:function(e,r,n){n.d(r,{Zo:function(){return c},kt:function(){return d}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function u(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?u(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},u=Object.keys(e);for(t=0;t<u.length;t++)n=u[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(t=0;t<u.length;t++)n=u[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=t.createContext({}),p=function(e){var r=t.useContext(a),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},c=function(e){var r=p(e.components);return t.createElement(a.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},h=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,u=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(n),d=o,f=h["".concat(a,".").concat(d)]||h[d]||l[d]||u;return n?t.createElement(f,i(i({ref:r},c),{},{components:n})):t.createElement(f,i({ref:r},c))}));function d(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var u=n.length,i=new Array(u);i[0]=h;var s={};for(var a in r)hasOwnProperty.call(r,a)&&(s[a]=r[a]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<u;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}h.displayName="MDXCreateElement"},58635:function(e,r,n){n.r(r),n.d(r,{assets:function(){return c},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return l}});var t=n(87462),o=n(63366),u=(n(67294),n(3905)),i=["components"],s={title:"\u914d\u7f6e\u6811\u5185 vSphere \u4e91\u63d0\u4f9b\u5546"},a=void 0,p={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/vsphere/configure-in-tree-vsphere",id:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/vsphere/configure-in-tree-vsphere",title:"\u914d\u7f6e\u6811\u5185 vSphere \u4e91\u63d0\u4f9b\u5546",description:"\u8981\u8bbe\u7f6e\u6811\u5185 vSphere \u4e91\u63d0\u4f9b\u5546\uff0c\u8bf7\u5728 Rancher \u4e2d\u521b\u5efa vSphere \u96c6\u7fa4\u65f6\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u64cd\u4f5c\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/vsphere/configure-in-tree-vsphere.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/vsphere",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/vsphere/configure-in-tree-vsphere",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/vsphere/configure-in-tree-vsphere",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/vsphere/configure-in-tree-vsphere.md",tags:[],version:"current",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"2022/9/23",frontMatter:{title:"\u914d\u7f6e\u6811\u5185 vSphere \u4e91\u63d0\u4f9b\u5546"},sidebar:"tutorialSidebar",previous:{title:"\u8bbe\u7f6e vSphere \u4e91\u63d0\u4f9b\u5546",permalink:"/zh/pages-for-subheaders/vsphere-cloud-provider"},next:{title:"\u914d\u7f6e\u6811\u5916 vSphere \u4e91\u63d0\u4f9b\u5546",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/vsphere/configure-out-of-tree-vsphere"}},c={},l=[],h={toc:l};function d(e){var r=e.components,n=(0,o.Z)(e,i);return(0,u.kt)("wrapper",(0,t.Z)({},h,n,{components:r,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"\u8981\u8bbe\u7f6e\u6811\u5185 vSphere \u4e91\u63d0\u4f9b\u5546\uff0c\u8bf7\u5728 Rancher \u4e2d\u521b\u5efa vSphere \u96c6\u7fa4\u65f6\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u64cd\u4f5c\uff1a"),(0,u.kt)("ol",null,(0,u.kt)("li",{parentName:"ol"},(0,u.kt)("p",{parentName:"li"},"\u5c06 ",(0,u.kt)("strong",{parentName:"p"},"Cloud Provider")," \u9009\u9879\u8bbe\u7f6e\u4e3a ",(0,u.kt)("inlineCode",{parentName:"p"},"Custom")," \u6216 ",(0,u.kt)("inlineCode",{parentName:"p"},"Custom (In-Tree)"),"\u3002")),(0,u.kt)("li",{parentName:"ol"},(0,u.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,u.kt)("strong",{parentName:"p"},"\u4ee5 YAML \u6587\u4ef6\u7f16\u8f91"),"\u3002")),(0,u.kt)("li",{parentName:"ol"},(0,u.kt)("p",{parentName:"li"},"\u5c06\u4ee5\u4e0b\u7ed3\u6784\u63d2\u5165\u5230\u9884\u586b\u5145\u7684\u96c6\u7fa4 YAML\u3002\u8fd9\u4e2a\u7ed3\u6784\u5fc5\u987b\u653e\u5728 ",(0,u.kt)("inlineCode",{parentName:"p"},"rancher_kubernetes_engine_config")," \u4e0b\u3002\u8bf7\u6ce8\u610f\uff0c",(0,u.kt)("inlineCode",{parentName:"p"},"name")," ",(0,u.kt)("em",{parentName:"p"},"\u5fc5\u987b"),"\u8bbe\u7f6e\u4e3a ",(0,u.kt)("inlineCode",{parentName:"p"},"vsphere"),"\u3002"),(0,u.kt)("pre",{parentName:"li"},(0,u.kt)("code",{parentName:"pre",className:"language-yaml"},"rancher_kubernetes_engine_config:\n  cloud_provider:\n      name: vsphere\n      vsphereCloudProvider:\n          [Insert provider configuration]\n")))),(0,u.kt)("p",null,"Rancher \u4f7f\u7528 RKE\uff08Rancher Kubernetes Engine\uff09\u6765\u914d\u7f6e Kubernetes \u96c6\u7fa4\u3002\u6709\u5173 ",(0,u.kt)("inlineCode",{parentName:"p"},"vsphereCloudProvider")," \u7684\u5c5e\u6027\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 RKE \u6587\u6863\u4e2d\u7684 ",(0,u.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/cloud-providers/vsphere/config-reference/"},"vSphere \u914d\u7f6e\u53c2\u8003"),"\u3002"))}d.isMDXComponent=!0}}]);