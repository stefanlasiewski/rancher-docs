"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[81627],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return g}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(a),g=r,f=m["".concat(s,".").concat(g)]||m[g]||u[g]||l;return a?n.createElement(f,i(i({ref:t},p),{},{components:a})):n.createElement(f,i({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5631:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return u}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],o={title:"Allow Unsupported Storage Drivers",weight:1,aliases:["/rancher/v2.0-v2.4/en/installation/options/feature-flags/enable-not-default-storage-drivers/"]},s=void 0,d={unversionedId:"getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/unsupported-storage-drivers",id:"version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/unsupported-storage-drivers",title:"Allow Unsupported Storage Drivers",description:"This feature allows you to use types for storage providers and provisioners that are not enabled by default.",source:"@site/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/unsupported-storage-drivers.md",sourceDirName:"getting-started/installation-and-upgrade/advanced-options/enable-experimental-features",slug:"/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/unsupported-storage-drivers",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/unsupported-storage-drivers",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/unsupported-storage-drivers.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663710212,formattedLastUpdatedAt:"9/20/2022",frontMatter:{title:"Allow Unsupported Storage Drivers",weight:1,aliases:["/rancher/v2.0-v2.4/en/installation/options/feature-flags/enable-not-default-storage-drivers/"]},sidebar:"tutorialSidebar",previous:{title:"Running on ARM64 (Experimental)",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/rancher-on-arm64"},next:{title:"UI for Istio Virtual Services and Destination Rules",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/istio-traffic-management-features"}},p={},u=[{value:"Types for Persistent Volume Plugins that are Enabled by Default",id:"types-for-persistent-volume-plugins-that-are-enabled-by-default",level:3},{value:"Types for StorageClass that are Enabled by Default",id:"types-for-storageclass-that-are-enabled-by-default",level:3}],m={toc:u};function g(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This feature allows you to use types for storage providers and provisioners that are not enabled by default."),(0,l.kt)("p",null,"To enable or disable this feature, refer to the instructions on ",(0,l.kt)("a",{parentName:"p",href:"/v2.0-v2.4/reference-guides/installation-references/feature-flags"},"the main page about enabling experimental features.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Environment Variable Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"unsupported-storage-drivers")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"This feature enables types for storage providers and provisioners that are not enabled by default.")))),(0,l.kt)("h3",{id:"types-for-persistent-volume-plugins-that-are-enabled-by-default"},"Types for Persistent Volume Plugins that are Enabled by Default"),(0,l.kt)("p",null,"Below is a list of storage types for persistent volume plugins that are enabled by default. When enabling this feature flag, any persistent volume plugins that are not on this list are considered experimental and unsupported:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Plugin"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Amazon EBS Disk"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"aws-ebs"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AzureFile"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"azure-file"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AzureDisk"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"azure-disk"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Google Persistent Disk"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"gce-pd"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Longhorn"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"flex-volume-longhorn"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"VMware vSphere Volume"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"vsphere-volume"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Local"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"local"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Network File System"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"nfs"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hostPath"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"host-path"))))),(0,l.kt)("h3",{id:"types-for-storageclass-that-are-enabled-by-default"},"Types for StorageClass that are Enabled by Default"),(0,l.kt)("p",null,"Below is a list of storage types for a StorageClass that are enabled by default. When enabling this feature flag, any persistent volume plugins that are not on this list are considered experimental and unsupported:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Plugin"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Amazon EBS Disk"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"aws-ebs"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AzureFile"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"azure-file"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AzureDisk"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"azure-disk"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Google Persistent Disk"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"gce-pd"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Longhorn"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"flex-volume-longhorn"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"VMware vSphere Volume"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"vsphere-volume"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Local"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"local"))))))}g.isMDXComponent=!0}}]);