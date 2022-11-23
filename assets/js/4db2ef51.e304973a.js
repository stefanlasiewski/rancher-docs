"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[88099],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,g=p["".concat(s,".").concat(d)]||p[d]||h[d]||i;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},40171:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return h}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"Configure Google OAuth"},s=void 0,c={unversionedId:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-google-oauth",id:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-google-oauth",title:"Configure Google OAuth",description:"If your organization uses G Suite for user authentication, you can configure Rancher to allow your users to log in using their G Suite credentials.",source:"@site/docs/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-google-oauth.md",sourceDirName:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config",slug:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-google-oauth",permalink:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-google-oauth",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-google-oauth.md",tags:[],version:"current",lastUpdatedAt:1667002146,formattedLastUpdatedAt:"10/29/2022",frontMatter:{title:"Configure Google OAuth"},sidebar:"tutorialSidebar",previous:{title:"Local Authentication",permalink:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/create-local-users"},next:{title:"Configure Active Directory (AD)",permalink:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-active-directory"}},u={},h=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setting up G Suite for OAuth with Rancher",id:"setting-up-g-suite-for-oauth-with-rancher",level:2},{value:"1. Adding Rancher as an Authorized Domain",id:"1-adding-rancher-as-an-authorized-domain",level:3},{value:"2. Creating OAuth2 Credentials for the Rancher Server",id:"2-creating-oauth2-credentials-for-the-rancher-server",level:3},{value:"3. Creating Service Account Credentials",id:"3-creating-service-account-credentials",level:3},{value:"4. Register the Service Account Key as an OAuth Client",id:"4-register-the-service-account-key-as-an-oauth-client",level:3},{value:"Configuring Google OAuth in Rancher",id:"configuring-google-oauth-in-rancher",level:2}],p={toc:h};function d(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If your organization uses G Suite for user authentication, you can configure Rancher to allow your users to log in using their G Suite credentials."),(0,i.kt)("p",null,"Only admins of the G Suite domain have access to the Admin SDK. Therefore, only G Suite admins can configure Google OAuth for Rancher."),(0,i.kt)("p",null,"Within Rancher, only administrators or users with the ",(0,i.kt)("strong",{parentName:"p"},"Manage Authentication")," ",(0,i.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"global role")," can configure authentication."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You must have a ",(0,i.kt)("a",{parentName:"li",href:"https://admin.google.com"},"G Suite admin account")," configured."),(0,i.kt)("li",{parentName:"ul"},"G Suite requires a ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/google/guava/wiki/InternetDomainNameExplained#public-suffixes-and-private-domains"},"top private domain FQDN")," as an authorized domain. One way to get an FQDN is by creating an A-record in Route53 for your Rancher server. You do not need to update your Rancher Server URL setting with that record, because there could be clusters using that URL."),(0,i.kt)("li",{parentName:"ul"},"You must have the Admin SDK API enabled for your G Suite domain. You can enable it using the steps on ",(0,i.kt)("a",{parentName:"li",href:"https://support.google.com/a/answer/60757?hl=en"},"this page."))),(0,i.kt)("p",null,"After the Admin SDK API is enabled, your G Suite domain's API screen should look like this:\n",(0,i.kt)("img",{alt:"Enable Admin APIs",src:n(76815).Z,width:"2398",height:"1286"})),(0,i.kt)("h2",{id:"setting-up-g-suite-for-oauth-with-rancher"},"Setting up G Suite for OAuth with Rancher"),(0,i.kt)("p",null,"Before you can set up Google OAuth in Rancher, you need to log in to your G Suite account and do the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#1-adding-rancher-as-an-authorized-domain"},"Add Rancher as an authorized domain in G Suite")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#2-creating-oauth2-credentials-for-the-rancher-server"},"Generate OAuth2 credentials for the Rancher server")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#3-creating-service-account-credentials"},"Create service account credentials for the Rancher server")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#4-register-the-service-account-key-as-an-oauth-client"},"Register the service account key as an OAuth Client"))),(0,i.kt)("h3",{id:"1-adding-rancher-as-an-authorized-domain"},"1. Adding Rancher as an Authorized Domain"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("a",{parentName:"li",href:"https://console.developers.google.com/apis/credentials"},"here")," to go to credentials page of your Google domain."),(0,i.kt)("li",{parentName:"ol"},"Select your project and click ",(0,i.kt)("strong",{parentName:"li"},"OAuth consent screen"),".\n",(0,i.kt)("img",{alt:"OAuth Consent Screen",src:n(64137).Z,width:"1082",height:"712"})),(0,i.kt)("li",{parentName:"ol"},"Go to ",(0,i.kt)("strong",{parentName:"li"},"Authorized Domains")," and enter the top private domain of your Rancher server URL in the list. The top private domain is the rightmost superdomain. So for example, ",(0,i.kt)("a",{parentName:"li",href:"http://www.foo.co.uk"},"www.foo.co.uk")," a top private domain of foo.co.uk. For more information on top-level domains, refer to ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/google/guava/wiki/InternetDomainNameExplained#public-suffixes-and-private-domains"},"this article.")),(0,i.kt)("li",{parentName:"ol"},"Go to ",(0,i.kt)("strong",{parentName:"li"},"Scopes for Google APIs")," and make sure ",(0,i.kt)("strong",{parentName:"li"},"email,")," ",(0,i.kt)("strong",{parentName:"li"},"profile")," and ",(0,i.kt)("strong",{parentName:"li"},"openid")," are enabled.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," Rancher has been added as an authorized domain for the Admin SDK API."),(0,i.kt)("h3",{id:"2-creating-oauth2-credentials-for-the-rancher-server"},"2. Creating OAuth2 Credentials for the Rancher Server"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to the Google API console, select your project, and go to the ",(0,i.kt)("a",{parentName:"li",href:"https://console.developers.google.com/apis/credentials"},"credentials page."),(0,i.kt)("img",{alt:"Credentials",src:n(70922).Z,width:"1004",height:"418"})),(0,i.kt)("li",{parentName:"ol"},"On the ",(0,i.kt)("strong",{parentName:"li"},"Create Credentials")," dropdown, select ",(0,i.kt)("strong",{parentName:"li"},"OAuth client ID"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Web application"),"."),(0,i.kt)("li",{parentName:"ol"},"Provide a name."),(0,i.kt)("li",{parentName:"ol"},"Fill out the ",(0,i.kt)("strong",{parentName:"li"},"Authorized JavaScript origins")," and ",(0,i.kt)("strong",{parentName:"li"},"Authorized redirect URIs"),". Note: The Rancher UI page for setting up Google OAuth (available from the Global view under ",(0,i.kt)("strong",{parentName:"li"},"Security > Authentication > Google"),") provides you the exact links to enter for this step.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Under ",(0,i.kt)("strong",{parentName:"li"},"Authorized JavaScript origins,")," enter your Rancher server URL."),(0,i.kt)("li",{parentName:"ul"},"Under ",(0,i.kt)("strong",{parentName:"li"},"Authorized redirect URIs,")," enter your Rancher server URL appended with the path ",(0,i.kt)("inlineCode",{parentName:"li"},"verify-auth"),". For example, if your URI is ",(0,i.kt)("inlineCode",{parentName:"li"},"https://rancherServer"),", you will enter ",(0,i.kt)("inlineCode",{parentName:"li"},"https://rancherServer/verify-auth"),".")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click on ",(0,i.kt)("strong",{parentName:"li"},"Create"),"."),(0,i.kt)("li",{parentName:"ol"},"After the credential is created, you will see a screen with a list of your credentials. Choose the credential you just created, and in that row on rightmost side, click ",(0,i.kt)("strong",{parentName:"li"},"Download JSON"),". Save the file so that you can provide these credentials to Rancher.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," Your OAuth credentials have been successfully created."),(0,i.kt)("h3",{id:"3-creating-service-account-credentials"},"3. Creating Service Account Credentials"),(0,i.kt)("p",null,"Since the Google Admin SDK is available only to admins, regular users cannot use it to retrieve profiles of other users or their groups. Regular users cannot even retrieve their own groups."),(0,i.kt)("p",null,"Since Rancher provides group-based membership access, we require the users to be able to get their own groups, and look up other users and groups when needed."),(0,i.kt)("p",null,"As a workaround to get this capability, G Suite recommends creating a service account and delegating authority of your G Suite domain to that service account."),(0,i.kt)("p",null,"This section describes how to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a service account"),(0,i.kt)("li",{parentName:"ul"},"Create a key for the service account and download the credentials as JSON")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("a",{parentName:"li",href:"https://console.developers.google.com/iam-admin/serviceaccounts"},"here")," and select your project for which you generated OAuth credentials."),(0,i.kt)("li",{parentName:"ol"},"Click on ",(0,i.kt)("strong",{parentName:"li"},"Create Service Account"),"."),(0,i.kt)("li",{parentName:"ol"},"Enter a name and click ",(0,i.kt)("strong",{parentName:"li"},"Create"),".\n",(0,i.kt)("img",{alt:"Service account creation Step 1",src:n(96013).Z,width:"1470",height:"990"})),(0,i.kt)("li",{parentName:"ol"},"Don't provide any roles on the ",(0,i.kt)("strong",{parentName:"li"},"Service account permissions")," page and click ",(0,i.kt)("strong",{parentName:"li"},"Continue"),(0,i.kt)("img",{alt:"Service account creation Step 2",src:n(92901).Z,width:"1560",height:"888"})),(0,i.kt)("li",{parentName:"ol"},"Click on ",(0,i.kt)("strong",{parentName:"li"},"Create Key")," and select the JSON option. Download the JSON file and save it so that you can provide it as the service account credentials to Rancher.\n",(0,i.kt)("img",{alt:"Service account creation Step 3",src:n(58129).Z,width:"2278",height:"1328"}))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," Your service account is created."),(0,i.kt)("h3",{id:"4-register-the-service-account-key-as-an-oauth-client"},"4. Register the Service Account Key as an OAuth Client"),(0,i.kt)("p",null,"You will need to grant some permissions to the service account you created in the last step. Rancher requires you to grant only read-only permissions for users and groups."),(0,i.kt)("p",null,"Using the Unique ID of the service account key, register it as an Oauth Client using the following steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Get the Unique ID of the key you just created. If it's not displayed in the list of keys right next to the one you created, you will have to enable it. To enable it, click ",(0,i.kt)("strong",{parentName:"p"},"Unique ID")," and click ",(0,i.kt)("strong",{parentName:"p"},"OK"),". This will add a ",(0,i.kt)("strong",{parentName:"p"},"Unique ID")," column to the list of service account keys. Save the one listed for the service account you created. NOTE: This is a numeric key, not to be confused with the alphanumeric field ",(0,i.kt)("strong",{parentName:"p"},"Key ID"),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Service account Unique ID",src:n(62726).Z,width:"500",height:"732"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to the ",(0,i.kt)("a",{parentName:"p",href:"https://admin.google.com/ac/owl/domainwidedelegation"},(0,i.kt)("strong",{parentName:"a"},"Domain-wide Delegation")," page."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add the Unique ID obtained in the previous step in the ",(0,i.kt)("strong",{parentName:"p"},"Client Name")," field.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"One or More API Scopes")," field, add the following scopes:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"openid,profile,email,https://www.googleapis.com/auth/admin.directory.user.readonly,https://www.googleapis.com/auth/admin.directory.group.readonly\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Authorize"),"."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," The service account is registered as an OAuth client in your G Suite account."),(0,i.kt)("h2",{id:"configuring-google-oauth-in-rancher"},"Configuring Google OAuth in Rancher"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Sign into Rancher using a local user assigned the ",(0,i.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"administrator")," role. This user is also called the local principal."),(0,i.kt)("li",{parentName:"ol"},"In the top left corner, click ",(0,i.kt)("strong",{parentName:"li"},"\u2630 > Users & Authentication"),"."),(0,i.kt)("li",{parentName:"ol"},"In the left navigation menu, click ",(0,i.kt)("strong",{parentName:"li"},"Auth Provider"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Google"),". The instructions in the UI cover the steps to set up authentication with Google OAuth.",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Admin Email: Provide the email of an administrator account from your GSuite setup. In order to perform user and group lookups, google apis require an administrator's email in conjunction with the service account key."),(0,i.kt)("li",{parentName:"ol"},"Domain: Provide the domain on which you have configured GSuite. Provide the exact domain and not any aliases."),(0,i.kt)("li",{parentName:"ol"},"Nested Group Membership: Check this box to enable nested group memberships. Rancher admins can disable this at any time after configuring auth.")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step One")," is about adding Rancher as an authorized domain, which we already covered in ",(0,i.kt)("a",{parentName:"li",href:"#1-adding-rancher-as-an-authorized-domain"},"this section.")),(0,i.kt)("li",{parentName:"ul"},"For ",(0,i.kt)("strong",{parentName:"li"},"Step Two,")," provide the OAuth credentials JSON that you downloaded after completing ",(0,i.kt)("a",{parentName:"li",href:"#2-creating-oauth2-credentials-for-the-rancher-server"},"this section.")," You can upload the file or paste the contents into the ",(0,i.kt)("strong",{parentName:"li"},"OAuth Credentials")," field."),(0,i.kt)("li",{parentName:"ul"},"For ",(0,i.kt)("strong",{parentName:"li"},"Step Three,")," provide the service account credentials JSON that downloaded at the end of ",(0,i.kt)("a",{parentName:"li",href:"#3-creating-service-account-credentials"},"this section.")," The credentials will only work if you successfully ",(0,i.kt)("a",{parentName:"li",href:"#4-register-the-service-account-key-as-an-oauth-client"},"registered the service account key")," as an OAuth client in your G Suite account."))),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Authenticate with Google"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Enable"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," Google authentication is successfully configured."))}d.isMDXComponent=!0},70922:function(e,t,n){t.Z=n.p+"assets/images/Google-Credentials-tab-c55f5c0e773946934414505d230366df.png"},76815:function(e,t,n){t.Z=n.p+"assets/images/Google-Enable-APIs-Screen-b50535bfb53acfe043e5e24347bb6f8d.png"},64137:function(e,t,n){t.Z=n.p+"assets/images/Google-OAuth-consent-screen-tab-32c3418c5270f4125e762342da7d3f9a.png"},62726:function(e,t,n){t.Z=n.p+"assets/images/Google-Select-UniqueID-column-8a3aaf074a5bf58e635aa59ab2ce7189.png"},96013:function(e,t,n){t.Z=n.p+"assets/images/Google-svc-acc-step1-d5ffa189a2f7d48276489dc822af13dc.png"},92901:function(e,t,n){t.Z=n.p+"assets/images/Google-svc-acc-step2-81585fe242ee9d1f74d269931261eec7.png"},58129:function(e,t,n){t.Z=n.p+"assets/images/Google-svc-acc-step3-key-creation-ab07e4e887ee459e9cc6eb172689dffc.png"}}]);