import{o as _,c as x,n as g,b,d as k,u as w,e as p,w as t,a as n,f as a,g as e,s as C,t as d,h as u,i as f,p as B,j as X,_ as z}from"./index-2d3e59d7.js";import{s as i}from"./card.esm-9ee9acdb.js";import{s as h,a as y}from"./column.esm-a7311b7e.js";import{u as I}from"./rule-0484b7c1.js";import"./overlayeventbus.esm-4f20f3c9.js";var S={name:"Skeleton",props:{shape:{type:String,default:"rectangle"},size:{type:String,default:null},width:{type:String,default:"100%"},height:{type:String,default:"1rem"},borderRadius:{type:String,default:null},animation:{type:String,default:"wave"}},computed:{containerClass(){return["p-skeleton p-component",{"p-skeleton-circle":this.shape==="circle","p-skeleton-none":this.animation==="none"}]},containerStyle(){return this.size?{width:this.size,height:this.size,borderRadius:this.borderRadius}:{width:this.width,height:this.height,borderRadius:this.borderRadius}}}};function $(o,s,m,c,r,v){return _(),x("div",{style:g(v.containerStyle),class:b(v.containerClass),"aria-hidden":"true"},null,6)}function D(o,s){s===void 0&&(s={});var m=s.insertAt;if(!(!o||typeof document>"u")){var c=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",m==="top"&&c.firstChild?c.insertBefore(r,c.firstChild):c.appendChild(r),r.styleSheet?r.styleSheet.cssText=o:r.appendChild(document.createTextNode(o))}}var N=`
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
`;D(N);S.render=$;const l=o=>(B("data-v-895212df"),o=o(),X(),o),R={class:"grid p-fluid"},E={class:"col-12 md:col-4 justify-items-start"},V=l(()=>n("div",{id:"console-name"},"Default",-1)),j=l(()=>n("div",{id:"welcome"},"welcome back",-1)),T={class:"col-12 md:col-8"},A={class:"grid"},G={class:"text-center text-7xl"},M=l(()=>n("div",{class:"text-center ev-card-1"},"Intermediate",-1)),O={class:"text-center text-7xl"},L=l(()=>n("div",{class:"text-center ev-card-2"},"Warning",-1)),W={class:"text-center text-7xl"},q=l(()=>n("div",{class:"text-center ev-card-3"},"Major",-1)),F={class:"text-center text-7xl"},H=l(()=>n("div",{class:"text-center ev-card-4"},"Minor",-1)),J={class:"text-center text-7xl"},K=l(()=>n("div",{class:"text-center ev-card-5"},"Critical",-1)),P={class:"col-12 md:col-6"},Q={class:"col-12 md:col-6"},U=k({__name:"Dashboard",setup(o){const s=w();return I(),(m,c)=>(_(),p(e(i),null,{content:t(()=>[n("div",R,[n("div",E,[V,j,a(e(C),{label:"Open Console"})]),n("div",T,[n("div",A,[a(e(i),{class:"col-2"},{content:t(()=>[n("div",G,d(e(s).summaryBySeverity.sev1),1)]),footer:t(()=>[M]),_:1}),a(e(i),{class:"col-2 ev-card"},{content:t(()=>[n("div",O,d(e(s).summaryBySeverity.sev2),1)]),footer:t(()=>[L]),_:1}),a(e(i),{class:"col-2"},{content:t(()=>[n("div",W,d(e(s).summaryBySeverity.sev3),1)]),footer:t(()=>[q]),_:1}),a(e(i),{class:"col-2"},{content:t(()=>[n("div",F,d(e(s).summaryBySeverity.sev4),1)]),footer:t(()=>[H]),_:1}),a(e(i),{class:"col-2"},{content:t(()=>[n("div",J,d(e(s).summaryBySeverity.sev5),1)]),footer:t(()=>[K]),_:1})])]),n("div",P,[e(s).eventCount>0?(_(),p(e(i),{key:0},{title:t(()=>[u("Event Groups")]),content:t(()=>[a(e(y),{value:e(s).summaryByGroup},{default:t(()=>[a(e(h),{field:"group",header:"Group"}),a(e(h),{field:"count",header:"Count"})]),_:1},8,["value"])]),_:1})):f("",!0)]),n("div",Q,[e(s).eventCount>0?(_(),p(e(i),{key:0},{title:t(()=>[u("Activity Streams")]),content:t(()=>[a(e(S),{height:"5rem"})]),_:1})):f("",!0),e(s).eventCount>0?(_(),p(e(i),{key:1},{title:t(()=>[u("Inventory")]),content:t(()=>[a(e(y),{value:e(s).lastSeenByNode},{default:t(()=>[a(e(h),{field:"node",header:"hostname"}),a(e(h),{field:"last_seen",header:"Last seen"},{body:t(r=>[u(d(new Date(r.data.last_seen).toISOString()),1)]),_:1})]),_:1},8,["value"])]),_:1})):f("",!0)])])]),_:1}))}});const Y=z(U,[["__scopeId","data-v-895212df"]]),Z={class:"mx-8"},oe=k({__name:"DashboardView",setup(o){return(s,m)=>(_(),x("div",Z,[a(Y)]))}});export{oe as default};
