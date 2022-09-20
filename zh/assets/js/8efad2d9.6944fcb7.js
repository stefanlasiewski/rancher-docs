"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[98758],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return l}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),d=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=d(e.components);return n.createElement(s.Provider,{value:r},e.children)},g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),f=d(t),l=o,p=f["".concat(s,".").concat(l)]||f[l]||g[l]||a;return t?n.createElement(p,i(i({ref:r},c),{},{components:t})):n.createElement(p,i({ref:r},c))}));function l(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var u={};for(var s in r)hasOwnProperty.call(r,s)&&(u[s]=r[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var d=2;d<a;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},456:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return s},default:function(){return l},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return g}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],u={title:"\u81ea\u5b9a\u4e49 Grafana \u4eea\u8868\u677f",weight:3},s=void 0,d={unversionedId:"how-to-guides/advanced-user-guides/monitoring-alerting-guides/prometheus-federator-guides/customize-grafana-dashboards",id:"how-to-guides/advanced-user-guides/monitoring-alerting-guides/prometheus-federator-guides/customize-grafana-dashboards",title:"\u81ea\u5b9a\u4e49 Grafana \u4eea\u8868\u677f",description:"\u65e0\u8bba\u662f\u7528\u4e8e rancher-monitoring \u8fd8\u662f Prometheus Federator\uff0cGrafana \u4eea\u8868\u677f\u7684\u5b9a\u5236\u65b9\u5f0f\u90fd\u662f\u76f8\u540c\u7684\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/advanced-user-guides/monitoring-alerting-guides/prometheus-federator-guides/customize-grafana-dashboards.md",sourceDirName:"how-to-guides/advanced-user-guides/monitoring-alerting-guides/prometheus-federator-guides",slug:"/how-to-guides/advanced-user-guides/monitoring-alerting-guides/prometheus-federator-guides/customize-grafana-dashboards",permalink:"/zh/how-to-guides/advanced-user-guides/monitoring-alerting-guides/prometheus-federator-guides/customize-grafana-dashboards",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/monitoring-alerting-guides/prometheus-federator-guides/customize-grafana-dashboards.md",tags:[],version:"current",lastUpdatedAt:1663710212,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"\u81ea\u5b9a\u4e49 Grafana \u4eea\u8868\u677f",weight:3},sidebar:"tutorialSidebar",previous:{title:"\u5378\u8f7d Prometheus Federator",permalink:"/zh/how-to-guides/advanced-user-guides/monitoring-alerting-guides/prometheus-federator-guides/uninstall-prometheus-federator"},next:{title:"\u4e3a\u5de5\u4f5c\u8d1f\u8f7d\u8bbe\u7f6e Prometheus Federator",permalink:"/zh/how-to-guides/advanced-user-guides/monitoring-alerting-guides/prometheus-federator-guides/set-up-workloads"}},c={},g=[],f={toc:g};function l(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u65e0\u8bba\u662f\u7528\u4e8e rancher-monitoring \u8fd8\u662f Prometheus Federator\uff0cGrafana \u4eea\u8868\u677f\u7684\u5b9a\u5236\u65b9\u5f0f\u90fd\u662f\u76f8\u540c\u7684\u3002"),(0,a.kt)("p",null,"\u6709\u5173\u8bf4\u660e\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/monitoring-alerting-guides/customize-grafana-dashboard"},"\u6b64\u9875\u9762"),"\u3002"))}l.isMDXComponent=!0}}]);