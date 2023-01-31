import{o as m,c as x,n as b,a as g,d as k,u as w,b as p,w as t,e as n,f as o,g as e,s as C,t as _,h,i as v,j as B,p as X,k as $}from"./index-0aac089a.js";import{s as i}from"./card.esm-41638ff4.js";import{s as f,a as y}from"./column.esm-7066eb35.js";import{u as z}from"./rule-101b218c.js";import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";import"./overlayeventbus.esm-57d5aec1.js";var S={name:"Skeleton",props:{shape:{type:String,default:"rectangle"},size:{type:String,default:null},width:{type:String,default:"100%"},height:{type:String,default:"1rem"},borderRadius:{type:String,default:null},animation:{type:String,default:"wave"}},computed:{containerClass(){return["p-skeleton p-component",{"p-skeleton-circle":this.shape==="circle","p-skeleton-none":this.animation==="none"}]},containerStyle(){return this.size?{width:this.size,height:this.size,borderRadius:this.borderRadius}:{width:this.width,height:this.height,borderRadius:this.borderRadius}}}};function D(r,c,s,l,a,u){return m(),x("div",{style:b(u.containerStyle),class:g(u.containerClass),"aria-hidden":"true"},null,6)}function N(r,c){c===void 0&&(c={});var s=c.insertAt;if(!(!r||typeof document>"u")){var l=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",s==="top"&&l.firstChild?l.insertBefore(a,l.firstChild):l.appendChild(a),a.styleSheet?a.styleSheet.cssText=r:a.appendChild(document.createTextNode(r))}}var R=`
.p-skeleton {
    position: relative;
    overflow: hidden;
}
.p-skeleton::after {
    content: '';
    -webkit-animation: p-skeleton-animation 1.2s infinite;
            animation: p-skeleton-animation 1.2s infinite;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    -webkit-transform: translateX(-100%);
            transform: translateX(-100%);
    z-index: 1;
}
.p-skeleton.p-skeleton-circle {
    border-radius: 50%;
}
.p-skeleton-none::after {
    -webkit-animation: none;
            animation: none;
}
@-webkit-keyframes p-skeleton-animation {
from {
        -webkit-transform: translateX(-100%);
                transform: translateX(-100%);
}
to {
        -webkit-transform: translateX(100%);
                transform: translateX(100%);
}
}
@keyframes p-skeleton-animation {
from {
        -webkit-transform: translateX(-100%);
                transform: translateX(-100%);
}
to {
        -webkit-transform: translateX(100%);
                transform: translateX(100%);
}
}
`;N(R);S.render=D;const d=r=>(X("data-v-cde5b452"),r=r(),$(),r),E={class:"grid p-fluid"},V={class:"col-12 md:col-4 justify-items-start"},j=d(()=>n("div",{id:"console-name"},"Default",-1)),T=d(()=>n("div",{id:"welcome"},"welcome back",-1)),A={class:"col-12 md:col-8"},G={class:"grid"},M={class:"text-center text-7xl"},O=d(()=>n("div",{class:"text-center ev-card-1"},"Intermediate",-1)),L={class:"text-center text-7xl"},W=d(()=>n("div",{class:"text-center ev-card-2"},"Warning",-1)),q={class:"text-center text-7xl"},F=d(()=>n("div",{class:"text-center ev-card-3"},"Major",-1)),H={class:"text-center text-7xl"},J=d(()=>n("div",{class:"text-center ev-card-4"},"Minor",-1)),K={class:"text-center text-7xl"},P=d(()=>n("div",{class:"text-center ev-card-5"},"Critical",-1)),Q={class:"col-12 md:col-6"},U={class:"col-12 md:col-6"},Y=k({__name:"Dashboard",setup(r){const c=B(),s=w();return z(),(l,a)=>(m(),p(e(i),null,{content:t(()=>[n("div",E,[n("div",V,[j,T,o(e(C),{label:"Open Console",onClick:a[0]||(a[0]=u=>e(c).push("/console"))})]),n("div",A,[n("div",G,[o(e(i),{class:"col-2"},{content:t(()=>[n("div",M,_(e(s).summaryBySeverity.sev1),1)]),footer:t(()=>[O]),_:1}),o(e(i),{class:"col-2 ev-card"},{content:t(()=>[n("div",L,_(e(s).summaryBySeverity.sev2),1)]),footer:t(()=>[W]),_:1}),o(e(i),{class:"col-2"},{content:t(()=>[n("div",q,_(e(s).summaryBySeverity.sev3),1)]),footer:t(()=>[F]),_:1}),o(e(i),{class:"col-2"},{content:t(()=>[n("div",H,_(e(s).summaryBySeverity.sev4),1)]),footer:t(()=>[J]),_:1}),o(e(i),{class:"col-2"},{content:t(()=>[n("div",K,_(e(s).summaryBySeverity.sev5),1)]),footer:t(()=>[P]),_:1})])]),n("div",Q,[e(s).eventCount>0?(m(),p(e(i),{key:0},{title:t(()=>[h("Event Groups")]),content:t(()=>[o(e(y),{value:e(s).summaryByGroup},{default:t(()=>[o(e(f),{field:"group",header:"Group"}),o(e(f),{field:"count",header:"Count"})]),_:1},8,["value"])]),_:1})):v("",!0)]),n("div",U,[e(s).eventCount>0?(m(),p(e(i),{key:0},{title:t(()=>[h("Activity Streams")]),content:t(()=>[o(e(S),{height:"5rem"})]),_:1})):v("",!0),e(s).eventCount>0?(m(),p(e(i),{key:1},{title:t(()=>[h("Inventory")]),content:t(()=>[o(e(y),{value:e(s).lastSeenByNode},{default:t(()=>[o(e(f),{field:"node",header:"hostname"}),o(e(f),{field:"last_seen",header:"Last seen"},{body:t(u=>[h(_(new Date(u.data.last_seen).toISOString()),1)]),_:1})]),_:1},8,["value"])]),_:1})):v("",!0)])])]),_:1}))}});const Z=I(Y,[["__scopeId","data-v-cde5b452"]]),ee={class:"mx-8"},ie=k({__name:"DashboardView",setup(r){return(c,s)=>(m(),x("div",ee,[o(Z)]))}});export{ie as default};
