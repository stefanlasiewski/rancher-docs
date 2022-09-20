"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[97180],{3905:function(e,t,n){n.d(t,{Zo:function(){return g},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},g=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,p=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(p,i(i({ref:t},g),{},{components:n})):r.createElement(p,i({ref:t},g))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},71488:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"Migrating to Rancher v2.5 Monitoring",weight:9,aliases:["/rancher/v2.5/en/monitoring-alerting/migrating","/rancher/v2.x/en/monitoring-alerting/v2.5/migrating/"]},l=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/monitoring-alerting-guides/migrate-to-rancher-v2.5+-monitoring",id:"version-2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/migrate-to-rancher-v2.5+-monitoring",title:"Migrating to Rancher v2.5 Monitoring",description:"If you previously enabled Monitoring, Alerting, or Notifiers in Rancher before v2.5, there is no automatic upgrade path for switching to the new monitoring/alerting solution. Before deploying the new monitoring solution via Cluster Explore, you will need to disable and remove all existing custom alerts, notifiers and monitoring installations for the whole cluster and in all projects.",source:"@site/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/migrate-to-rancher-v2.5+-monitoring.md",sourceDirName:"how-to-guides/advanced-user-guides/monitoring-alerting-guides",slug:"/how-to-guides/advanced-user-guides/monitoring-alerting-guides/migrate-to-rancher-v2.5+-monitoring",permalink:"/zh/v2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/migrate-to-rancher-v2.5+-monitoring",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/migrate-to-rancher-v2.5+-monitoring.md",tags:[],version:"2.5",lastUpdatedAt:1663710212,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"Migrating to Rancher v2.5 Monitoring",weight:9,aliases:["/rancher/v2.5/en/monitoring-alerting/migrating","/rancher/v2.x/en/monitoring-alerting/v2.5/migrating/"]},sidebar:"tutorialSidebar",previous:{title:"Debugging High Memory Usage",permalink:"/zh/v2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/debug-high-memory-usage"},next:{title:"Configuration",permalink:"/zh/v2.5/pages-for-subheaders/monitoring-v2-configuration-guides"}},g={},c=[{value:"Monitoring Before Rancher v2.5",id:"monitoring-before-rancher-v25",level:2},{value:"Monitoring and Alerting via Cluster Explorer in Rancher 2.5",id:"monitoring-and-alerting-via-cluster-explorer-in-rancher-25",level:2},{value:"Changes to Role-based Access Control",id:"changes-to-role-based-access-control",level:2},{value:"Migrating from Monitoring V1 to Monitoring V2",id:"migrating-from-monitoring-v1-to-monitoring-v2",level:2},{value:"RKE Template Clusters",id:"rke-template-clusters",level:4},{value:"Migrating Grafana Dashboards",id:"migrating-grafana-dashboards",level:4},{value:"Migrating Alerts",id:"migrating-alerts",level:3},{value:"Migrating Notifiers",id:"migrating-notifiers",level:3},{value:"Migrating for RKE Template Users",id:"migrating-for-rke-template-users",level:3}],d={toc:c};function m(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you previously enabled Monitoring, Alerting, or Notifiers in Rancher before v2.5, there is no automatic upgrade path for switching to the new monitoring/alerting solution. Before deploying the new monitoring solution via Cluster Explore, you will need to disable and remove all existing custom alerts, notifiers and monitoring installations for the whole cluster and in all projects."),(0,o.kt)("h2",{id:"monitoring-before-rancher-v25"},"Monitoring Before Rancher v2.5"),(0,o.kt)("p",null,"As of v2.2.0, Rancher's Cluster Manager allowed users to enable Monitoring & Alerting V1 (both powered by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator"},"Prometheus Operator"),") independently within a cluster. "),(0,o.kt)("p",null,"When Monitoring is enabled, Monitoring V1 deploys ",(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/"},"Prometheus")," and ",(0,o.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/getting-started/what-is-grafana/"},"Grafana")," onto a cluster to monitor the state of processes of your cluster nodes, Kubernetes components, and software deployments and create custom dashboards to make it easy to visualize collected metrics."),(0,o.kt)("p",null,"Monitoring V1 could be configured on both a cluster-level and on a project-level and would automatically scrape certain workloads deployed as Apps on the Rancher cluster."),(0,o.kt)("p",null,"When Alerts or Notifiers are enabled, Alerting V1 deploys ",(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/alerting/latest/alertmanager/"},"Prometheus Alertmanager")," and a set of Rancher controllers onto a cluster that allows users to define alerts and configure alert-based notifications via Email, Slack, PagerDuty, etc. Users can choose to create different types of alerts depending on what needs to be monitored (e.g. System Services, Resources, CIS Scans, etc.); however, PromQL Expression-based alerts can only be created if Monitoring V1 is enabled."),(0,o.kt)("h2",{id:"monitoring-and-alerting-via-cluster-explorer-in-rancher-25"},"Monitoring and Alerting via Cluster Explorer in Rancher 2.5"),(0,o.kt)("p",null,"As of v2.5.0, Rancher's Cluster Explorer now allows users to enable Monitoring & Alerting V2 (both powered by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator"},"Prometheus Operator"),") together within a cluster. "),(0,o.kt)("p",null,"Unlike in Monitoring & Alerting V1, both features are packaged in a single Helm chart found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/charts/blob/main/charts/rancher-monitoring"},"here"),". The behavior of this chart and configurable fields closely matches ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/prometheus-community/helm-charts/tree/main/charts/kube-prometheus-stack"},"kube-prometheus-stack"),", a Prometheus Community Helm chart, and any deviations from the upstream chart can be found in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/charts/blob/main/charts/rancher-monitoring/CHANGELOG.md"},"CHANGELOG.md")," maintained with the chart."),(0,o.kt)("p",null,"Monitoring V2 can only be configured on the cluster level. Project-level monitoring and alerting is no longer supported."),(0,o.kt)("p",null,"For more information on how to configure Monitoring & Alerting V2, see ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.5/pages-for-subheaders/monitoring-v2-configuration-guides"},"this page.")),(0,o.kt)("h2",{id:"changes-to-role-based-access-control"},"Changes to Role-based Access Control"),(0,o.kt)("p",null,"Project owners and members no longer get access to Grafana or Prometheus by default. If view-only users had access to Grafana, they would be able to see data from any namespace. For Kiali, any user can edit things they don\u2019t own in any namespace."),(0,o.kt)("p",null,"For more information about role-based access control in ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-monitoring"),", refer to ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.5/explanations/integrations-in-rancher/monitoring-and-alerting/rbac-for-monitoring"},"this page.")),(0,o.kt)("h2",{id:"migrating-from-monitoring-v1-to-monitoring-v2"},"Migrating from Monitoring V1 to Monitoring V2"),(0,o.kt)("p",null,"While there is no automatic migration available, it is possible to manually migrate custom Grafana dashboards and alerts that were created in Monitoring V1 to Monitoring V2."),(0,o.kt)("p",null,"Before you can install Monitoring V2, Monitoring V1 needs to be uninstalled completely. In order to uninstall Monitoring V1:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Remove all cluster and project specific alerts and alerts groups."),(0,o.kt)("li",{parentName:"ul"},"Remove all notifiers."),(0,o.kt)("li",{parentName:"ul"},"Disable all project monitoring installations under Cluster -> Project -> Tools -> Monitoring."),(0,o.kt)("li",{parentName:"ul"},"Ensure that all project-monitoring apps in all projects have been removed and are not recreated after a few minutes"),(0,o.kt)("li",{parentName:"ul"},"Disable the cluster monitoring installation under Cluster -> Tools -> Monitoring."),(0,o.kt)("li",{parentName:"ul"},"Ensure that the cluster-monitoring app and the monitoring-operator app in the System project have been removed and are not recreated after a few minutes.")),(0,o.kt)("h4",{id:"rke-template-clusters"},"RKE Template Clusters"),(0,o.kt)("p",null,"To prevent V1 monitoring from being re-enabled, disable monitoring and in future RKE template revisions via modification of the RKE template yaml:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"enable_cluster_alerting: false\nenable_cluster_monitoring: false\n")),(0,o.kt)("h4",{id:"migrating-grafana-dashboards"},"Migrating Grafana Dashboards"),(0,o.kt)("p",null,"You can migrate any dashboard added to Grafana in Monitoring V1 to Monitoring V2. In Monitoring V1 you can export an existing dashboard like this:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sign into Grafana"),(0,o.kt)("li",{parentName:"ul"},"Navigate to the dashboard you want to export"),(0,o.kt)("li",{parentName:"ul"},"Go to the dashboard settings"),(0,o.kt)("li",{parentName:"ul"},"Copy the ",(0,o.kt)("a",{parentName:"li",href:"https://grafana.com/docs/grafana/latest/dashboards/json-model/"},"JSON Model"))),(0,o.kt)("p",null,"In the JSON Model, change all ",(0,o.kt)("inlineCode",{parentName:"p"},"datasource")," fields from ",(0,o.kt)("inlineCode",{parentName:"p"},"RANCHER_MONITORING")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"Prometheus"),". You can easily do this by replacing all occurrences of ",(0,o.kt)("inlineCode",{parentName:"p"},'"datasource": "RANCHER_MONITORING"')," with ",(0,o.kt)("inlineCode",{parentName:"p"},'"datasource": "Prometheus"'),"."),(0,o.kt)("p",null,"If Grafana is backed by a persistent volume, you can now ",(0,o.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/dashboards/export-import/"},"import")," this JSON Model into the Monitoring V2 Grafana UI.\nIt is recommended to provide the dashboard to Grafana with a ConfigMap in the ",(0,o.kt)("inlineCode",{parentName:"p"},"cattle-dashboards")," namespace that has the label ",(0,o.kt)("inlineCode",{parentName:"p"},'grafana_dashboard: "1"'),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: custom-dashboard\n  namespace: cattle-dashboards\n  labels:\n    grafana_dashboard: "1"\ndata:\n  custom-dashboard.json: |\n    { \n      ... \n    }\n')),(0,o.kt)("p",null,"Once this ConfigMap is created, the dashboard will automatically be added to Grafana."),(0,o.kt)("h3",{id:"migrating-alerts"},"Migrating Alerts"),(0,o.kt)("p",null,"It is only possible to directly migrate expression-based alerts to Monitoring V2. Fortunately, the event-based alerts that could be set up to alert on system component, node or workload events, are already covered out-of-the-box by the alerts that are part of Monitoring V2. So it is not necessary to migrate them."),(0,o.kt)("p",null,"To migrate the following expression alert"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(24943).Z,width:"1124",height:"604"})),(0,o.kt)("p",null,"you have to either create a PrometheusRule configuration like this in any namespace"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: monitoring.coreos.com/v1\nkind: PrometheusRule\nmetadata:\n  name: custom-rules\n  namespace: default\nspec:\n  groups:\n    - name: custom.rules\n      rules:\n        - alert: Custom Expression Alert\n          expr: prometheus_query > 5\n          for: 5m\n          labels:\n            severity: critical\n          annotations:\n            summary: "The result of prometheus_query has been larger than 5 for 5m. Current value {{ $value }}"\n')),(0,o.kt)("p",null,"or add the Prometheus Rule through the Cluster Explorer"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(75002).Z,width:"1496",height:"1320"})),(0,o.kt)("p",null,"For more details on how to configure PrometheusRules in Monitoring V2 see ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.5/pages-for-subheaders/monitoring-v2-configuration-guides#prometheusrules"},"Monitoring Configuration"),"."),(0,o.kt)("h3",{id:"migrating-notifiers"},"Migrating Notifiers"),(0,o.kt)("p",null,"There is no direct equivalent for how notifiers work in Monitoring V1. Instead you have to replicate the desired setup with ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.5/pages-for-subheaders/monitoring-v2-configuration-guides#alertmanager-config"},"Routes and Receivers")," in Monitoring V2."),(0,o.kt)("h3",{id:"migrating-for-rke-template-users"},"Migrating for RKE Template Users"),(0,o.kt)("p",null,"If the cluster is managed using an RKE template, you will need to disable monitoring in future RKE template revisions to prevent legacy monitoring from being re-enabled."))}m.isMDXComponent=!0},24943:function(e,t,n){t.Z=n.p+"assets/images/alert_2.4_to_2.5_source-2653609a04a39ed7d490eafc8b2e6f30.png"},75002:function(e,t,n){t.Z=n.p+"assets/images/alert_2.4_to_2.5_target-14e433f28900c9b0269d5121e2801750.png"}}]);