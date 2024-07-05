import{q as me,G as Ie,a as $,y as ue,N as L,v as f,b as h,B as b,_ as U,u as Y,l as Me,r as O,a2 as xe,a3 as $e,F as T,X as F,w as Q,L as Z,x as ie,O as pe,n as W,M as Pe,z as se,C as ee,$ as De,p as Fe,V as Ve,a4 as D,I as te,a5 as je,A as Be,H as Re,a6 as Ze,a7 as qe,a8 as We,a9 as Ue,aa as Ye,ab as Xe,ac as Ge,ad as Ke,ae as Je,af as Qe,ag as et,ah as tt,S as ot}from"./chunks/framework.975b469a.js";import{u as nt,_ as at,a as rt,t as de}from"./chunks/theme.20793475.js";/*! medium-zoom 1.0.8 | MIT License | https://github.com/francoischalifour/medium-zoom */var S=Object.assign||function(o){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(o[r]=n[r])}return o},R=function(e){return e.tagName==="IMG"},it=function(e){return NodeList.prototype.isPrototypeOf(e)},q=function(e){return e&&e.nodeType===1},ce=function(e){var n=e.currentSrc||e.src;return n.substr(-4).toLowerCase()===".svg"},le=function(e){try{return Array.isArray(e)?e.filter(R):it(e)?[].slice.call(e).filter(R):q(e)?[e].filter(R):typeof e=="string"?[].slice.call(document.querySelectorAll(e)).filter(R):[]}catch{throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`)}},st=function(e){var n=document.createElement("div");return n.classList.add("medium-zoom-overlay"),n.style.background=e,n},dt=function(e){var n=e.getBoundingClientRect(),r=n.top,c=n.left,z=n.width,_=n.height,l=e.cloneNode(),H=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,C=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return l.removeAttribute("id"),l.style.position="absolute",l.style.top=r+H+"px",l.style.left=c+C+"px",l.style.width=z+"px",l.style.height=_+"px",l.style.transform="",l},M=function(e,n){var r=S({bubbles:!1,cancelable:!1,detail:void 0},n);if(typeof window.CustomEvent=="function")return new CustomEvent(e,r);var c=document.createEvent("CustomEvent");return c.initCustomEvent(e,r.bubbles,r.cancelable,r.detail),c},ct=function o(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=window.Promise||function(a){function i(){}a(i,i)},c=function(a){var i=a.target;if(i===j){w();return}y.indexOf(i)!==-1&&ne({target:i})},z=function(){if(!(N||!t.original)){var a=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(ae-a)>d.scrollOffset&&setTimeout(w,150)}},_=function(a){var i=a.key||a.keyCode;(i==="Escape"||i==="Esc"||i===27)&&w()},l=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=a;if(a.background&&(j.style.background=a.background),a.container&&a.container instanceof Object&&(i.container=S({},d.container,a.container)),a.template){var m=q(a.template)?a.template:document.querySelector(a.template);i.template=m}return d=S({},d,i),y.forEach(function(u){u.dispatchEvent(M("medium-zoom:update",{detail:{zoom:p}}))}),p},H=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return o(S({},d,a))},C=function(){for(var a=arguments.length,i=Array(a),m=0;m<a;m++)i[m]=arguments[m];var u=i.reduce(function(s,v){return[].concat(s,le(v))},[]);return u.filter(function(s){return y.indexOf(s)===-1}).forEach(function(s){y.push(s),s.classList.add("medium-zoom-image")}),V.forEach(function(s){var v=s.type,E=s.listener,I=s.options;u.forEach(function(k){k.addEventListener(v,E,I)})}),p},ve=function(){for(var a=arguments.length,i=Array(a),m=0;m<a;m++)i[m]=arguments[m];t.zoomed&&w();var u=i.length>0?i.reduce(function(s,v){return[].concat(s,le(v))},[]):y;return u.forEach(function(s){s.classList.remove("medium-zoom-image"),s.dispatchEvent(M("medium-zoom:detach",{detail:{zoom:p}}))}),y=y.filter(function(s){return u.indexOf(s)===-1}),p},he=function(a,i){var m=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return y.forEach(function(u){u.addEventListener("medium-zoom:"+a,i,m)}),V.push({type:"medium-zoom:"+a,listener:i,options:m}),p},ye=function(a,i){var m=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return y.forEach(function(u){u.removeEventListener("medium-zoom:"+a,i,m)}),V=V.filter(function(u){return!(u.type==="medium-zoom:"+a&&u.listener.toString()===i.toString())}),p},oe=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=a.target,m=function(){var s={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},v=void 0,E=void 0;if(d.container)if(d.container instanceof Object)s=S({},s,d.container),v=s.width-s.left-s.right-d.margin*2,E=s.height-s.top-s.bottom-d.margin*2;else{var I=q(d.container)?d.container:document.querySelector(d.container),k=I.getBoundingClientRect(),X=k.width,Ee=k.height,we=k.left,Le=k.top;s=S({},s,{width:X,height:Ee,left:we,top:Le})}v=v||s.width-d.margin*2,E=E||s.height-d.margin*2;var P=t.zoomedHd||t.original,Ce=ce(P)?v:P.naturalWidth||v,ke=ce(P)?E:P.naturalHeight||E,B=P.getBoundingClientRect(),He=B.top,Ae=B.left,G=B.width,K=B.height,Se=Math.min(Math.max(G,Ce),v)/G,Oe=Math.min(Math.max(K,ke),E)/K,J=Math.min(Se,Oe),Te=(-Ae+(v-G)/2+d.margin+s.left)/J,Ne=(-He+(E-K)/2+d.margin+s.top)/J,re="scale("+J+") translate3d("+Te+"px, "+Ne+"px, 0)";t.zoomed.style.transform=re,t.zoomedHd&&(t.zoomedHd.style.transform=re)};return new r(function(u){if(i&&y.indexOf(i)===-1){u(p);return}var s=function X(){N=!1,t.zoomed.removeEventListener("transitionend",X),t.original.dispatchEvent(M("medium-zoom:opened",{detail:{zoom:p}})),u(p)};if(t.zoomed){u(p);return}if(i)t.original=i;else if(y.length>0){var v=y;t.original=v[0]}else{u(p);return}if(t.original.dispatchEvent(M("medium-zoom:open",{detail:{zoom:p}})),ae=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,N=!0,t.zoomed=dt(t.original),document.body.appendChild(j),d.template){var E=q(d.template)?d.template:document.querySelector(d.template);t.template=document.createElement("div"),t.template.appendChild(E.content.cloneNode(!0)),document.body.appendChild(t.template)}if(t.original.parentElement&&t.original.parentElement.tagName==="PICTURE"&&t.original.currentSrc&&(t.zoomed.src=t.original.currentSrc),document.body.appendChild(t.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),t.original.classList.add("medium-zoom-image--hidden"),t.zoomed.classList.add("medium-zoom-image--opened"),t.zoomed.addEventListener("click",w),t.zoomed.addEventListener("transitionend",s),t.original.getAttribute("data-zoom-src")){t.zoomedHd=t.zoomed.cloneNode(),t.zoomedHd.removeAttribute("srcset"),t.zoomedHd.removeAttribute("sizes"),t.zoomedHd.removeAttribute("loading"),t.zoomedHd.src=t.zoomed.getAttribute("data-zoom-src"),t.zoomedHd.onerror=function(){clearInterval(I),console.warn("Unable to reach the zoom image target "+t.zoomedHd.src),t.zoomedHd=null,m()};var I=setInterval(function(){t.zoomedHd.complete&&(clearInterval(I),t.zoomedHd.classList.add("medium-zoom-image--opened"),t.zoomedHd.addEventListener("click",w),document.body.appendChild(t.zoomedHd),m())},10)}else if(t.original.hasAttribute("srcset")){t.zoomedHd=t.zoomed.cloneNode(),t.zoomedHd.removeAttribute("sizes"),t.zoomedHd.removeAttribute("loading");var k=t.zoomedHd.addEventListener("load",function(){t.zoomedHd.removeEventListener("load",k),t.zoomedHd.classList.add("medium-zoom-image--opened"),t.zoomedHd.addEventListener("click",w),document.body.appendChild(t.zoomedHd),m()})}else m()})},w=function(){return new r(function(a){if(N||!t.original){a(p);return}var i=function m(){t.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(t.zoomed),t.zoomedHd&&document.body.removeChild(t.zoomedHd),document.body.removeChild(j),t.zoomed.classList.remove("medium-zoom-image--opened"),t.template&&document.body.removeChild(t.template),N=!1,t.zoomed.removeEventListener("transitionend",m),t.original.dispatchEvent(M("medium-zoom:closed",{detail:{zoom:p}})),t.original=null,t.zoomed=null,t.zoomedHd=null,t.template=null,a(p)};N=!0,document.body.classList.remove("medium-zoom--opened"),t.zoomed.style.transform="",t.zoomedHd&&(t.zoomedHd.style.transform=""),t.template&&(t.template.style.transition="opacity 150ms",t.template.style.opacity=0),t.original.dispatchEvent(M("medium-zoom:close",{detail:{zoom:p}})),t.zoomed.addEventListener("transitionend",i)})},ne=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=a.target;return t.original?w():oe({target:i})},_e=function(){return d},be=function(){return y},ze=function(){return t.original},y=[],V=[],N=!1,ae=0,d=n,t={original:null,zoomed:null,zoomedHd:null,template:null};Object.prototype.toString.call(e)==="[object Object]"?d=e:(e||typeof e=="string")&&C(e),d=S({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},d);var j=st(d.background);document.addEventListener("click",c),document.addEventListener("keyup",_),document.addEventListener("scroll",z),window.addEventListener("resize",w);var p={open:oe,close:w,toggle:ne,update:l,clone:H,attach:C,detach:ve,on:he,off:ye,getOptions:_e,getImages:be,getZoomedImage:ze};return p};function lt(o,e){e===void 0&&(e={});var n=e.insertAt;if(!(!o||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css",n==="top"&&r.firstChild?r.insertBefore(c,r.firstChild):r.appendChild(c),c.styleSheet?c.styleSheet.cssText=o:c.appendChild(document.createTextNode(o))}}var mt=".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";lt(mt);const ut=ct,pt=":not(a) > img:not(.image-src, .visitor, .vp-sponsor-grid-image)",ft=Symbol("medium-zoom"),gt=(o,e)=>{const n=ut();n.refresh=(r=pt)=>{n.detach(),n.attach(r)},o.provide(ft,n),me(()=>e.route.path,()=>Ie(()=>n.refresh()))},vt={key:0,class:"visitor",src:"https://visitor-badge.laobi.icu/badge?page_id=maomao1996.notes",onerror:"this.style.display='none'"},ht=$({__name:"MNavVisitor",setup(o){const e=ue("DEV");return(n,r)=>L(e)?b("",!0):(f(),h("img",vt))}});const yt=U(ht,[["__scopeId","data-v-89740a75"]]);function _t(){const{site:o}=Y(),e=Me();return O(()=>e.path.replace(o.value.base.replace(/\/$/,""),""))}const bt={key:0,class:"m-doc-footer"},zt={class:"m-doc-footer-message"},Et=["src"],wt={key:1},Lt={key:0,class:"m-doc-footer-copyright"},Ct=$({__name:"MDocFooter",setup(o){const e=ue("DEV"),{theme:n}=Y(),{hasSidebar:r}=nt(),c=_t(),z=O(()=>{const{footer:_={}}=n.value;return!e||_.message||_.copyright});return(_,l)=>{var H,C;return z.value?xe((f(),h("div",bt,[T("div",zt,[L(e)?b("",!0):(f(),h("img",{key:0,class:"visitor",src:`https://visitor-badge.laobi.icu/badge?page_id=maomao1996.notes.${L(c)}`,title:"当前页面累计访问数",onerror:"this.style.display='none'"},null,8,Et)),(H=L(n).footer)!=null&&H.message?(f(),h("p",wt,F(L(n).footer.message),1)):b("",!0)]),(C=L(n).footer)!=null&&C.copyright?(f(),h("p",Lt,F(L(n).footer.copyright),1)):b("",!0)],512)),[[$e,L(r)]]):b("",!0)}}});const kt=U(Ct,[["__scopeId","data-v-5ec639b0"]]),Ht={class:"m-sponsor-title"},At=$({__name:"MAsideSponsors",setup(o){const e=[{items:[{img:Q("/sponsor/wechat-color.webp")}]},{items:[{img:Q("/sponsor/alipay-color.webp")}]}];return(n,r)=>(f(),h(W,null,[T("p",Ht,[Z(" 鼓励作者：欢迎 "),ie(at,{href:"https://github.com/maomao1996/mm-notes","no-icon":""},{default:pe(()=>[Z("star")]),_:1}),Z(" 或打赏犒劳 ")]),ie(L(rt),{data:e})],64))}});const St=/[\u0000-\u001f]/g,Ot=/[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g,Tt=/[\u0300-\u036F]/g,fe=o=>o.normalize("NFKD").replace(Tt,"").replace(St,"").replace(Ot,"-").replace(/-{2,}/g,"-").replace(/^-+|-+$/g,"").replace(/^(\d)/,"_$1").toLowerCase(),Nt=["href"],It={class:"box-header"},Mt=["innerHTML"],xt={key:1,class:"icon"},$t=["src","alt"],Pt=["id"],Dt={key:1,class:"desc"},Ft=$({__name:"MNavLink",props:{noIcon:{},icon:{},badge:{},title:{},desc:{},link:{}},emits:["nav-click"],setup(o,{emit:e}){const n=o,r=O(()=>n.title?fe(n.title):""),c=O(()=>typeof n.icon=="object"?n.icon.svg:""),z=O(()=>typeof n.badge=="string"?{text:n.badge,type:"info"}:n.badge),_=()=>e("nav-click",n);return(l,H)=>{const C=Pe("Badge");return l.link?(f(),h("a",{key:0,class:"m-nav-link",href:l.link,target:"_blank",rel:"noreferrer",onClick:_},[T("article",{class:se(["box",{"has-badge":z.value}])},[T("div",It,[l.noIcon?b("",!0):(f(),h(W,{key:0},[c.value?(f(),h("div",{key:0,class:"icon",innerHTML:c.value},null,8,Mt)):l.icon&&typeof l.icon=="string"?(f(),h("div",xt,[T("img",{src:L(Q)(l.icon),alt:l.title,loading:"lazy",onerror:"this.parentElement.style.display='none'"},null,8,$t)])):b("",!0)],64)),l.title?(f(),h("h5",{key:1,id:r.value,class:se(["title",{"no-icon":l.noIcon}])},F(l.title),11,Pt)):b("",!0)]),z.value?(f(),ee(C,{key:0,class:"badge",type:z.value.type,text:z.value.text},null,8,["type","text"])):b("",!0),l.desc?(f(),h("p",Dt,F(l.desc),1)):b("",!0)],2)],8,Nt)):b("",!0)}}});const Vt=U(Ft,[["__scopeId","data-v-7824e526"]]),jt=["href"],Bt={class:"m-nav-links"},Rt=$({__name:"MNavLinks",props:{tag:{},title:{},noIcon:{type:Boolean},items:{}},setup(o){const e=o,n=O(()=>e.tag??"h2"),r=O(()=>fe(e.title));return(c,z)=>(f(),h(W,null,[c.title?(f(),ee(De(n.value),{key:0,id:r.value,tabindex:"-1"},{default:pe(()=>[Z(F(c.title)+" ",1),T("a",{class:"header-anchor",href:`#${r.value}`,"aria-hidden":"true"},null,8,jt)]),_:1},8,["id"])):b("",!0),T("div",Bt,[(f(!0),h(W,null,Fe(c.items,_=>(f(),ee(Vt,Ve({key:_.link,noIcon:c.noIcon},{..._,...c.$attrs}),null,16,["noIcon"]))),128))])],64))}});const Zt=U(Rt,[["__scopeId","data-v-d2248535"]]);typeof window<"u"&&(window.navigator&&navigator.serviceWorker&&navigator.serviceWorker.getRegistrations().then(function(o){for(let e of o)e.unregister()}),"caches"in window&&caches.keys().then(function(o){return Promise.all(o.map(function(e){return caches.delete(e)}))}));let A;const qt={extends:de,Layout:()=>{var n;const o={},{frontmatter:e}=Y();return(n=e.value)!=null&&n.layoutClass&&(o.class=e.value.layoutClass),D(de.Layout,o,{"nav-bar-title-after":()=>D(yt),"doc-after":()=>D(kt),"aside-bottom":()=>D(At)})},enhanceApp({app:o,router:e}){gt(o,e),o.component("MNavLinks",Zt),o.provide("DEV",!1),typeof window<"u"&&me(()=>e.route.data.relativePath,()=>Wt(location.pathname==="/"),{immediate:!0})}};if(typeof window<"u"){const o=navigator.userAgent.toLowerCase();o.includes("chrome")?document.documentElement.classList.add("browser-chrome"):o.includes("firefox")?document.documentElement.classList.add("browser-firefox"):o.includes("safari")&&document.documentElement.classList.add("browser-safari")}function Wt(o){if(o){if(A)return;A=document.createElement("style"),A.innerHTML=`
    :root {
      animation: rainbow 12s linear infinite;
    }`,document.body.appendChild(A)}else{if(!A)return;A.remove(),A=void 0}}function ge(o){if(o.extends){const e=ge(o.extends);return{...e,...o,async enhanceApp(n){e.enhanceApp&&await e.enhanceApp(n),o.enhanceApp&&await o.enhanceApp(n)}}}return o}const x=ge(qt),Ut=$({name:"VitePressApp",setup(){const{site:o}=Y();return Be(()=>{Re(()=>{document.documentElement.lang=o.value.lang,document.documentElement.dir=o.value.dir})}),Ze(),qe(),We(),x.setup&&x.setup(),()=>D(x.Layout)}});async function Yt(){const o=Gt(),e=Xt();e.provide(Ue,o);const n=Ye(o.route);return e.provide(Xe,n),e.component("Content",Ge),e.component("ClientOnly",Ke),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get(){return n.frontmatter.value}},$params:{get(){return n.page.value.params}}}),x.enhanceApp&&await x.enhanceApp({app:e,router:o,siteData:Je}),{app:e,router:o,data:n}}function Xt(){return Qe(Ut)}function Gt(){let o=te,e;return et(n=>{let r=tt(n);return r?(o&&(e=r),(o||e===r)&&(r=r.replace(/\.js$/,".lean.js")),te&&(o=!1),ot(()=>import(r),[])):null},x.NotFound)}te&&Yt().then(({app:o,router:e,data:n})=>{e.go().then(()=>{je(e.route,n.site),o.mount("#app")})});export{Yt as createApp};
