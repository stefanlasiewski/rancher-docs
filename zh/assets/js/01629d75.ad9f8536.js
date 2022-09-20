"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[50381],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=u(n),k=i,f=h["".concat(l,".").concat(k)]||h[k]||s[k]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},95788:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],c={title:"kubectl Utility"},l="kubectl",u={unversionedId:"reference-guides/cli-with-rancher/kubectl-utility",id:"version-2.5/reference-guides/cli-with-rancher/kubectl-utility",title:"kubectl Utility",description:"Interact with Rancher using kubectl.",source:"@site/versioned_docs/version-2.5/reference-guides/cli-with-rancher/kubectl-utility.md",sourceDirName:"reference-guides/cli-with-rancher",slug:"/reference-guides/cli-with-rancher/kubectl-utility",permalink:"/zh/v2.5/reference-guides/cli-with-rancher/kubectl-utility",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/reference-guides/cli-with-rancher/kubectl-utility.md",tags:[],version:"2.5",lastUpdatedAt:1663710212,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"kubectl Utility"},sidebar:"tutorialSidebar",previous:{title:"Rancher CLI",permalink:"/zh/v2.5/reference-guides/cli-with-rancher/rancher-cli"},next:{title:"API",permalink:"/zh/v2.5/pages-for-subheaders/about-the-api"}},p={},s=[{value:"kubectl Utility",id:"kubectl-utility",level:3},{value:"Authentication with kubectl and kubeconfig Tokens with TTL",id:"authentication-with-kubectl-and-kubeconfig-tokens-with-ttl",level:3}],h={toc:s};function k(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kubectl"},"kubectl"),(0,o.kt)("p",null,"Interact with Rancher using kubectl."),(0,o.kt)("h3",{id:"kubectl-utility"},"kubectl Utility"),(0,o.kt)("p",null,"Install the ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," utility. See ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"},"install kubectl"),"."),(0,o.kt)("p",null,"Configure kubectl by visiting your cluster in the Rancher Web UI, clicking on ",(0,o.kt)("inlineCode",{parentName:"p"},"Kubeconfig"),", copying contents, and putting them into your ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.kube/config")," file."),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl cluster-info")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl get pods")," successfully."),(0,o.kt)("h3",{id:"authentication-with-kubectl-and-kubeconfig-tokens-with-ttl"},"Authentication with kubectl and kubeconfig Tokens with TTL"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Requirements")),(0,o.kt)("p",null,"If admins have ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.5/reference-guides/about-the-api/api-tokens#setting-ttl-on-kubeconfig-tokens"},"enforced TTL on kubeconfig tokens"),", the kubeconfig file requires the ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.5/pages-for-subheaders/cli-with-rancher"},"Rancher CLI")," to be present in your PATH when you run ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl"),". Otherwise, you\u2019ll see an error like:\n",(0,o.kt)("inlineCode",{parentName:"p"},'Unable to connect to the server: getting credentials: exec: exec: "rancher": executable file not found in $PATH'),"."),(0,o.kt)("p",null,"This feature enables kubectl to authenticate with the Rancher server and get a new kubeconfig token when required. The following auth providers are currently supported: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Local"),(0,o.kt)("li",{parentName:"ol"},"Active Directory (LDAP only)"),(0,o.kt)("li",{parentName:"ol"},"FreeIPA"),(0,o.kt)("li",{parentName:"ol"},"OpenLDAP "),(0,o.kt)("li",{parentName:"ol"},"SAML providers: Ping, Okta, ADFS, Keycloak, Shibboleth ")),(0,o.kt)("p",null,"When you first run kubectl, for example, ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl get pods"),", it will ask you to pick an auth provider and log in with the Rancher server. The kubeconfig token is cached in the path where you run kubectl under ",(0,o.kt)("inlineCode",{parentName:"p"},"./.cache/token"),". This token is valid until ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.5/reference-guides/about-the-api/api-tokens#setting-ttl-on-kubeconfig-tokens-period"},"it expires"),", or ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.5/reference-guides/about-the-api/api-tokens#deleting-tokens"},"gets deleted from the Rancher server"),". Upon expiration, the next ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl get pods")," will ask you to log in with the Rancher server again."))}k.isMDXComponent=!0}}]);