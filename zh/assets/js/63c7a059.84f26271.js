"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[18203],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=a,N=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(N,o(o({ref:n},p),{},{components:t})):r.createElement(N,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},88648:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],s={title:"\u914d\u7f6e NGINX \u8d1f\u8f7d\u5747\u8861\u5668",weight:4},c=void 0,l={unversionedId:"how-to-guides/new-user-guides/infrastructure-setup/nginx-load-balancer",id:"how-to-guides/new-user-guides/infrastructure-setup/nginx-load-balancer",title:"\u914d\u7f6e NGINX \u8d1f\u8f7d\u5747\u8861\u5668",description:"\u5c06 NGINX \u914d\u7f6e\u4e3a\u56db\u5c42\u8d1f\u8f7d\u5747\u8861\u5668\uff08TCP\uff09\uff0c\u7528\u4e8e\u5c06\u8fde\u63a5\u8f6c\u53d1\u5230 Rancher \u8282\u70b9\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/new-user-guides/infrastructure-setup/nginx-load-balancer.md",sourceDirName:"how-to-guides/new-user-guides/infrastructure-setup",slug:"/how-to-guides/new-user-guides/infrastructure-setup/nginx-load-balancer",permalink:"/zh/how-to-guides/new-user-guides/infrastructure-setup/nginx-load-balancer",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/infrastructure-setup/nginx-load-balancer.md",tags:[],version:"current",lastUpdatedAt:1663710212,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"\u914d\u7f6e NGINX \u8d1f\u8f7d\u5747\u8861\u5668",weight:4},sidebar:"tutorialSidebar",previous:{title:"\u5728 Amazon RDS \u4e2d\u521b\u5efa MySQL \u6570\u636e\u5e93",permalink:"/zh/how-to-guides/new-user-guides/infrastructure-setup/mysql-database-in-amazon-rds"},next:{title:"\u8bbe\u7f6e Amazon NLB \u7f51\u7edc\u8d1f\u8f7d\u5747\u8861\u5668",permalink:"/zh/how-to-guides/new-user-guides/infrastructure-setup/amazon-elb-load-balancer"}},p={},u=[{value:"\u5b89\u88c5 NGINX",id:"\u5b89\u88c5-nginx",level:2},{value:"\u521b\u5efa NGINX \u914d\u7f6e",id:"\u521b\u5efa-nginx-\u914d\u7f6e",level:2},{value:"\u53ef\u9009 - \u5c06 NGINX \u4f5c\u4e3a Docker \u5bb9\u5668\u8fd0\u884c",id:"\u53ef\u9009---\u5c06-nginx-\u4f5c\u4e3a-docker-\u5bb9\u5668\u8fd0\u884c",level:2}],d={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5c06 NGINX \u914d\u7f6e\u4e3a\u56db\u5c42\u8d1f\u8f7d\u5747\u8861\u5668\uff08TCP\uff09\uff0c\u7528\u4e8e\u5c06\u8fde\u63a5\u8f6c\u53d1\u5230 Rancher \u8282\u70b9\u3002"),(0,i.kt)("p",null,"\u5728\u6b64\u914d\u7f6e\u4e2d\uff0c\u8d1f\u8f7d\u5747\u8861\u5668\u4f4d\u4e8e\u8282\u70b9\u7684\u524d\u9762\u3002\u8d1f\u8f7d\u5747\u8861\u5668\u53ef\u4ee5\u662f\u4efb\u4f55\u80fd\u8fd0\u884c NGINX \u7684\u4e3b\u673a\u3002"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u4e0d\u8981\u4f7f\u7528 Rancher \u8282\u70b9\u4f5c\u4e3a\u8d1f\u8f7d\u5747\u8861\u5668\u3002"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u8fd9\u4e9b\u793a\u4f8b\u4e2d\uff0c\u8d1f\u8f7d\u5747\u8861\u5668\u5c06\u6d41\u91cf\u8f6c\u53d1\u5230\u4e09\u4e2a Rancher Server \u8282\u70b9\u3002\u5982\u679c Rancher \u5b89\u88c5\u5728 RKE Kubernetes \u96c6\u7fa4\u4e0a\uff0c\u5219\u9700\u8981\u4e09\u4e2a\u8282\u70b9\u3002\u5982\u679c Rancher \u5b89\u88c5\u5728 K3s Kubernetes \u96c6\u7fa4\u4e0a\uff0c\u5219\u53ea\u9700\u8981\u4e24\u4e2a\u8282\u70b9\u3002")),(0,i.kt)("h2",{id:"\u5b89\u88c5-nginx"},"\u5b89\u88c5 NGINX"),(0,i.kt)("p",null,"\u9996\u5148\uff0c\u5728\u8981\u7528\u4f5c\u8d1f\u8f7d\u5747\u8861\u5668\u7684\u8282\u70b9\u4e0a\u5b89\u88c5 NGINX\u3002NGINX \u6709\u9002\u7528\u4e8e\u6240\u6709\u5df2\u77e5\u64cd\u4f5c\u7cfb\u7edf\u7684\u8f6f\u4ef6\u5305\u3002\u5df2\u6d4b\u8bd5\u7684\u7248\u672c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"1.14")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"1.15"),"\u3002\u5982\u9700\u83b7\u5f97\u5b89\u88c5 NGINX \u7684\u5e2e\u52a9\uff0c\u8bf7\u53c2\u89c1",(0,i.kt)("a",{parentName:"p",href:"https://www.nginx.com/resources/wiki/start/topics/tutorials/install/"},"\u5b89\u88c5\u6587\u6863"),"\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"stream")," \u6a21\u5757\u662f\u5fc5\u9700\u7684\uff0cNGINX \u5b98\u65b9\u5b89\u88c5\u5305\u5305\u542b\u4e86\u8be5\u6a21\u5757\u3002\u8bf7\u53c2\u89c1\u4f60\u64cd\u4f5c\u7cfb\u7edf\u7684\u6587\u6863\uff0c\u4e86\u89e3\u5982\u4f55\u5728\u64cd\u4f5c\u7cfb\u7edf\u4e0a\u5b89\u88c5\u548c\u542f\u7528 NGINX \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"stream")," \u6a21\u5757\u3002"),(0,i.kt)("h2",{id:"\u521b\u5efa-nginx-\u914d\u7f6e"},"\u521b\u5efa NGINX \u914d\u7f6e"),(0,i.kt)("p",null,"\u5b89\u88c5 NGINX \u540e\uff0c\u4f7f\u7528\u8282\u70b9\u7684 IP \u5730\u5740\u66f4\u65b0 NGINX \u914d\u7f6e\u6587\u4ef6 ",(0,i.kt)("inlineCode",{parentName:"p"},"nginx.conf"),"\u3002"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5c06\u4ee5\u4e0b\u7684\u793a\u4f8b\u4ee3\u7801\u590d\u5236\u5e76\u7c98\u8d34\u5230\u4f60\u4f7f\u7528\u7684\u6587\u672c\u7f16\u8f91\u5668\u4e2d\u3002\u5c06\u6587\u4ef6\u4fdd\u5b58\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"nginx.conf"),"\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"nginx.conf")," \u4e2d\uff0c\u5c06\u6240\u6709\uff08\u7aef\u53e3 80 \u548c\u7aef\u53e3 443\uff09\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"<IP_NODE_1>"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"<IP_NODE_2>"),"\u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"<IP_NODE_3>")," \u66ff\u6362\u4e3a\u4f60\u8282\u70b9\u7684 IP \u5730\u5740\u3002"),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u53c2\u89c1 ",(0,i.kt)("a",{parentName:"p",href:"https://docs.nginx.com/nginx/admin-guide/load-balancer/tcp-udp-load-balancer/"},"NGINX \u6587\u6863\uff1aTCP \u548c UDP \u8d1f\u8f7d\u5747\u8861"),"\u4e86\u89e3\u6240\u6709\u914d\u7f6e\u9009\u9879\u3002"))))),(0,i.kt)("figcaption",null,"\u793a\u4f8b NGINX \u914d\u7f6e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"worker_processes 4;\nworker_rlimit_nofile 40000;\n\nevents {\n    worker_connections 8192;\n}\n\nstream {\n    upstream rancher_servers_http {\n        least_conn;\n        server <IP_NODE_1>:80 max_fails=3 fail_timeout=5s;\n        server <IP_NODE_2>:80 max_fails=3 fail_timeout=5s;\n        server <IP_NODE_3>:80 max_fails=3 fail_timeout=5s;\n    }\n    server {\n        listen 80;\n        proxy_pass rancher_servers_http;\n    }\n\n    upstream rancher_servers_https {\n        least_conn;\n        server <IP_NODE_1>:443 max_fails=3 fail_timeout=5s;\n        server <IP_NODE_2>:443 max_fails=3 fail_timeout=5s;\n        server <IP_NODE_3>:443 max_fails=3 fail_timeout=5s;\n    }\n    server {\n        listen     443;\n        proxy_pass rancher_servers_https;\n    }\n\n}\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"nginx.conf")," \u4fdd\u5b58\u5230\u4f60\u7684\u8d1f\u8f7d\u5747\u8861\u5668\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/nginx/nginx.conf")," \u8def\u5f84\u4e0a\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u91cd\u65b0\u52a0\u8f7d NGINX \u914d\u7f6e\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"# nginx -s reload\n")))),(0,i.kt)("h2",{id:"\u53ef\u9009---\u5c06-nginx-\u4f5c\u4e3a-docker-\u5bb9\u5668\u8fd0\u884c"},"\u53ef\u9009 - \u5c06 NGINX \u4f5c\u4e3a Docker \u5bb9\u5668\u8fd0\u884c"),(0,i.kt)("p",null,"\u9664\u4e86\u5c06 NGINX \u4f5c\u4e3a\u8f6f\u4ef6\u5305\u5b89\u88c5\u5728\u64cd\u4f5c\u7cfb\u7edf\u4e0a\u5916\uff0c\u4f60\u4e5f\u53ef\u4ee5\u5c06\u5176\u4f5c\u4e3a Docker \u5bb9\u5668\u8fd0\u884c\u3002\u5c06\u7f16\u8f91\u540e\u7684 ",(0,i.kt)("strong",{parentName:"p"},"NGINX \u914d\u7f6e\u793a\u4f8b")," \u4fdd\u5b58\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/nginx.conf"),"\uff0c\u5e76\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u542f\u52a8 NGINX \u5bb9\u5668\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker run -d --restart=unless-stopped \\\n  -p 80:80 -p 443:443 \\\n  -v /etc/nginx.conf:/etc/nginx/nginx.conf \\\n  nginx:1.14\n")))}m.isMDXComponent=!0}}]);