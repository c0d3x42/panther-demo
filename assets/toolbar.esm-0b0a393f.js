import{o as s,e as i,f as l,g as a}from"./index-db3394f4.js";var p={name:"Toolbar",props:{"aria-labelledby":{type:String,default:null}}};const d=["aria-labelledby"],b={class:"p-toolbar-group-start p-toolbar-group-left"},c={class:"p-toolbar-group-center"},f={class:"p-toolbar-group-end p-toolbar-group-right"};function u(e,o,r,n,t,m){return s(),i("div",{class:"p-toolbar p-component",role:"toolbar","aria-labelledby":e.ariaLabelledby},[l("div",b,[a(e.$slots,"start")]),l("div",c,[a(e.$slots,"center")]),l("div",f,[a(e.$slots,"end")])],8,d)}function g(e,o){o===void 0&&(o={});var r=o.insertAt;if(!(!e||typeof document>"u")){var n=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",r==="top"&&n.firstChild?n.insertBefore(t,n.firstChild):n.appendChild(t),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}}var y=`
.p-toolbar {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
}
.p-toolbar-group-start,
.p-toolbar-group-center,
.p-toolbar-group-end {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}
.p-toolbar-group-left,
.p-toolbar-group-right {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}
`;g(y);p.render=u;export{p as s};
