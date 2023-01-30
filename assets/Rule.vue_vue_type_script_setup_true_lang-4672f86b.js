import{u as Z,a as ee,b as te,_ as le,c as D,d as S,e as P,f as O,g as ne}from"./divider.esm-4e1f8540.js";import{D as T,R as ie,g as z,h as se,o,c,a as g,l as H,n as K,e as C,u as x,A as oe,F as N,i as I,t as R,d as W,b as E,O as ae,$ as de,J as A,j as V,M as h,w as v,r as L,H as q,p as M,L as F,I as G}from"./index-79d3e87e.js";import{s as B,a as re}from"./v4-495bc8f0.js";var J={name:"TreeNode",emits:["node-toggle","node-click","checkbox-change"],props:{node:{type:null,default:null},expandedKeys:{type:null,default:null},selectionKeys:{type:null,default:null},selectionMode:{type:String,default:null},templates:{type:null,default:null},level:{type:Number,default:null},index:{type:Number,default:null}},nodeTouched:!1,mounted(){this.$refs.currentNode.closest(".p-treeselect-items-wrapper")&&this.setAllNodesTabIndexes()},methods:{toggle(){this.$emit("node-toggle",this.node)},label(t){return typeof t.label=="function"?t.label():t.label},onChildNodeToggle(t){this.$emit("node-toggle",t)},onClick(t){T.hasClass(t.target,"p-tree-toggler")||T.hasClass(t.target.parentElement,"p-tree-toggler")||(this.isCheckboxSelectionMode()?this.toggleCheckbox():this.$emit("node-click",{originalEvent:t,nodeTouched:this.nodeTouched,node:this.node}),this.nodeTouched=!1)},onChildNodeClick(t){this.$emit("node-click",t)},onTouchEnd(){this.nodeTouched=!0},onKeyDown(t){if(this.isSameNode(t))switch(t.code){case"Tab":this.onTabKey(t);break;case"ArrowDown":this.onArrowDown(t);break;case"ArrowUp":this.onArrowUp(t);break;case"ArrowRight":this.onArrowRight(t);break;case"ArrowLeft":this.onArrowLeft(t);break;case"Enter":case"Space":this.onEnterKey(t);break}},onArrowDown(t){const l=t.target,e=l.children[1];if(e)this.focusRowChange(l,e.children[0]);else if(l.nextElementSibling)this.focusRowChange(l,l.nextElementSibling);else{let i=this.findNextSiblingOfAncestor(l);i&&this.focusRowChange(l,i)}t.preventDefault()},onArrowUp(t){const l=t.target;if(l.previousElementSibling)this.focusRowChange(l,l.previousElementSibling,this.findLastVisibleDescendant(l.previousElementSibling));else{let e=this.getParentNodeElement(l);e&&this.focusRowChange(l,e)}t.preventDefault()},onArrowRight(t){this.leaf||this.expanded||(t.currentTarget.tabIndex=-1,this.$emit("node-toggle",this.node),this.$nextTick(()=>{this.onArrowDown(t)}))},onArrowLeft(t){const l=T.findSingle(t.currentTarget,".p-tree-toggler");if(this.level===0&&!this.expanded)return!1;if(this.expanded&&!this.leaf)return l.click(),!1;const e=this.findBeforeClickableNode(t.currentTarget);e&&this.focusRowChange(t.currentTarget,e)},onEnterKey(t){this.setTabIndexForSelectionMode(t,this.nodeTouched),this.onClick(t),t.preventDefault()},onTabKey(){this.setAllNodesTabIndexes()},setAllNodesTabIndexes(){const t=T.find(this.$refs.currentNode.closest(".p-tree-container"),".p-treenode"),l=[...t].some(e=>e.getAttribute("aria-selected")==="true"||e.getAttribute("aria-checked")==="true");if([...t].forEach(e=>{e.tabIndex=-1}),l){const e=[...t].filter(i=>i.getAttribute("aria-selected")==="true"||i.getAttribute("aria-checked")==="true");e[0].tabIndex=0;return}[...t][0].tabIndex=0},setTabIndexForSelectionMode(t,l){if(this.selectionMode!==null){const e=[...T.find(this.$refs.currentNode.parentElement,".p-treenode")];t.currentTarget.tabIndex=l===!1?-1:0,e.every(i=>i.tabIndex===-1)&&(e[0].tabIndex=0)}},focusRowChange(t,l,e){t.tabIndex="-1",l.tabIndex="0",this.focusNode(e||l)},findBeforeClickableNode(t){const l=t.closest("ul").closest("li");if(l){const e=T.findSingle(l,"button");return e&&e.style.visibility!=="hidden"?l:this.findBeforeClickableNode(t.previousElementSibling)}return null},toggleCheckbox(){let t=this.selectionKeys?{...this.selectionKeys}:{};const l=!this.checked;this.propagateDown(this.node,l,t),this.$emit("checkbox-change",{node:this.node,check:l,selectionKeys:t})},propagateDown(t,l,e){if(l?e[t.key]={checked:!0,partialChecked:!1}:delete e[t.key],t.children&&t.children.length)for(let i of t.children)this.propagateDown(i,l,e)},propagateUp(t){let l=t.check,e={...t.selectionKeys},i=0,s=!1;for(let n of this.node.children)e[n.key]&&e[n.key].checked?i++:e[n.key]&&e[n.key].partialChecked&&(s=!0);l&&i===this.node.children.length?e[this.node.key]={checked:!0,partialChecked:!1}:(l||delete e[this.node.key],s||i>0&&i!==this.node.children.length?e[this.node.key]={checked:!1,partialChecked:!0}:delete e[this.node.key]),this.$emit("checkbox-change",{node:t.node,check:t.check,selectionKeys:e})},onChildCheckboxChange(t){this.$emit("checkbox-change",t)},findNextSiblingOfAncestor(t){let l=this.getParentNodeElement(t);return l?l.nextElementSibling?l.nextElementSibling:this.findNextSiblingOfAncestor(l):null},findLastVisibleDescendant(t){const l=t.children[1];if(l){const e=l.children[l.children.length-1];return this.findLastVisibleDescendant(e)}else return t},getParentNodeElement(t){const l=t.parentElement.parentElement;return T.hasClass(l,"p-treenode")?l:null},focusNode(t){t.focus()},isCheckboxSelectionMode(){return this.selectionMode==="checkbox"},isSameNode(t){return t.currentTarget&&(t.currentTarget.isSameNode(t.target)||t.currentTarget.isSameNode(t.target.closest(".p-treenode")))}},computed:{hasChildren(){return this.node.children&&this.node.children.length>0},expanded(){return this.expandedKeys&&this.expandedKeys[this.node.key]===!0},leaf(){return this.node.leaf===!1?!1:!(this.node.children&&this.node.children.length)},selectable(){return this.node.selectable===!1?!1:this.selectionMode!=null},selected(){return this.selectionMode&&this.selectionKeys?this.selectionKeys[this.node.key]===!0:!1},containerClass(){return["p-treenode",{"p-treenode-leaf":this.leaf}]},contentClass(){return["p-treenode-content",this.node.styleClass,{"p-treenode-selectable":this.selectable,"p-highlight":this.checkboxMode?this.checked:this.selected}]},icon(){return["p-treenode-icon",this.node.icon]},toggleIcon(){return["p-tree-toggler-icon pi pi-fw",this.expanded?this.node.expandedIcon||"pi-chevron-down":this.node.collapsedIcon||"pi-chevron-right"]},checkboxClass(){return["p-checkbox-box",{"p-highlight":this.checked,"p-indeterminate":this.partialChecked}]},checkboxIcon(){return["p-checkbox-icon",{"pi pi-check":this.checked,"pi pi-minus":this.partialChecked}]},checkboxMode(){return this.selectionMode==="checkbox"&&this.node.selectable!==!1},checked(){return this.selectionKeys?this.selectionKeys[this.node.key]&&this.selectionKeys[this.node.key].checked:!1},partialChecked(){return this.selectionKeys?this.selectionKeys[this.node.key]&&this.selectionKeys[this.node.key].partialChecked:!1},ariaChecked(){return this.selectionMode==="single"||this.selectionMode==="multiple"?this.selected:void 0},ariaSelected(){return this.checkboxMode?this.checked:void 0}},directives:{ripple:ie}};const ce=["aria-label","aria-selected","aria-expanded","aria-setsize","aria-posinset","aria-level","aria-checked","tabindex"],ue={key:0,class:"p-checkbox p-component","aria-hidden":"true"},he={class:"p-treenode-label"},pe={key:0,class:"p-treenode-children",role:"group"};function me(t,l,e,i,s,n){const p=z("TreeNode",!0),f=se("ripple");return o(),c("li",{ref:"currentNode",class:K(n.containerClass),role:"treeitem","aria-label":n.label(e.node),"aria-selected":n.ariaSelected,"aria-expanded":n.expanded,"aria-setsize":e.node.children?e.node.children.length:0,"aria-posinset":e.index+1,"aria-level":e.level,"aria-checked":n.ariaChecked,tabindex:e.index===0?0:-1,onKeydown:l[3]||(l[3]=(...d)=>n.onKeyDown&&n.onKeyDown(...d))},[g("div",{class:K(n.contentClass),onClick:l[1]||(l[1]=(...d)=>n.onClick&&n.onClick(...d)),onTouchend:l[2]||(l[2]=(...d)=>n.onTouchEnd&&n.onTouchEnd(...d)),style:W(e.node.style)},[H((o(),c("button",{type:"button",class:"p-tree-toggler p-link",onClick:l[0]||(l[0]=(...d)=>n.toggle&&n.toggle(...d)),tabindex:"-1","aria-hidden":"true"},[g("span",{class:K(n.toggleIcon)},null,2)])),[[f]]),n.checkboxMode?(o(),c("div",ue,[g("div",{class:K(n.checkboxClass),role:"checkbox"},[g("span",{class:K(n.checkboxIcon)},null,2)],2)])):C("",!0),g("span",{class:K(n.icon)},null,2),g("span",he,[e.templates[e.node.type]||e.templates.default?(o(),x(oe(e.templates[e.node.type]||e.templates.default),{key:0,node:e.node},null,8,["node"])):(o(),c(N,{key:1},[I(R(n.label(e.node)),1)],64))])],38),n.hasChildren&&n.expanded?(o(),c("ul",pe,[(o(!0),c(N,null,E(e.node.children,d=>(o(),x(p,{key:d.key,node:d,templates:e.templates,level:e.level+1,expandedKeys:e.expandedKeys,onNodeToggle:n.onChildNodeToggle,onNodeClick:n.onChildNodeClick,selectionMode:e.selectionMode,selectionKeys:e.selectionKeys,onCheckboxChange:n.propagateUp},null,8,["node","templates","level","expandedKeys","onNodeToggle","onNodeClick","selectionMode","selectionKeys","onCheckboxChange"]))),128))])):C("",!0)],42,ce)}J.render=me;var X={name:"Tree",emits:["node-expand","node-collapse","update:expandedKeys","update:selectionKeys","node-select","node-unselect"],props:{value:{type:null,default:null},expandedKeys:{type:null,default:null},selectionKeys:{type:null,default:null},selectionMode:{type:String,default:null},metaKeySelection:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:"pi pi-spinner"},filter:{type:Boolean,default:!1},filterBy:{type:String,default:"label"},filterMode:{type:String,default:"lenient"},filterPlaceholder:{type:String,default:null},filterLocale:{type:String,default:void 0},scrollHeight:{type:String,default:null},level:{type:Number,default:0},"aria-labelledby":{type:String,default:null},"aria-label":{type:String,default:null}},data(){return{d_expandedKeys:this.expandedKeys||{},filterValue:null}},watch:{expandedKeys(t){this.d_expandedKeys=t}},methods:{onNodeToggle(t){const l=t.key;this.d_expandedKeys[l]?(delete this.d_expandedKeys[l],this.$emit("node-collapse",t)):(this.d_expandedKeys[l]=!0,this.$emit("node-expand",t)),this.d_expandedKeys={...this.d_expandedKeys},this.$emit("update:expandedKeys",this.d_expandedKeys)},onNodeClick(t){if(this.selectionMode!=null&&t.node.selectable!==!1){const e=(t.nodeTouched?!1:this.metaKeySelection)?this.handleSelectionWithMetaKey(t):this.handleSelectionWithoutMetaKey(t);this.$emit("update:selectionKeys",e)}},onCheckboxChange(t){this.$emit("update:selectionKeys",t.selectionKeys),t.check?this.$emit("node-select",t.node):this.$emit("node-unselect",t.node)},handleSelectionWithMetaKey(t){const l=t.originalEvent,e=t.node,i=l.metaKey||l.ctrlKey,s=this.isNodeSelected(e);let n;return s&&i?(this.isSingleSelectionMode()?n={}:(n={...this.selectionKeys},delete n[e.key]),this.$emit("node-unselect",e)):(this.isSingleSelectionMode()?n={}:this.isMultipleSelectionMode()&&(n=i?this.selectionKeys?{...this.selectionKeys}:{}:{}),n[e.key]=!0,this.$emit("node-select",e)),n},handleSelectionWithoutMetaKey(t){const l=t.node,e=this.isNodeSelected(l);let i;return this.isSingleSelectionMode()?e?(i={},this.$emit("node-unselect",l)):(i={},i[l.key]=!0,this.$emit("node-select",l)):e?(i={...this.selectionKeys},delete i[l.key],this.$emit("node-unselect",l)):(i=this.selectionKeys?{...this.selectionKeys}:{},i[l.key]=!0,this.$emit("node-select",l)),i},isSingleSelectionMode(){return this.selectionMode==="single"},isMultipleSelectionMode(){return this.selectionMode==="multiple"},isNodeSelected(t){return this.selectionMode&&this.selectionKeys?this.selectionKeys[t.key]===!0:!1},isChecked(t){return this.selectionKeys?this.selectionKeys[t.key]&&this.selectionKeys[t.key].checked:!1},isNodeLeaf(t){return t.leaf===!1?!1:!(t.children&&t.children.length)},onFilterKeydown(t){t.which===13&&t.preventDefault()},findFilteredNodes(t,l){if(t){let e=!1;if(t.children){let i=[...t.children];t.children=[];for(let s of i){let n={...s};this.isFilterMatched(n,l)&&(e=!0,t.children.push(n))}}if(e)return!0}},isFilterMatched(t,{searchFields:l,filterText:e,strict:i}){let s=!1;for(let n of l)String(ae.resolveFieldData(t,n)).toLocaleLowerCase(this.filterLocale).indexOf(e)>-1&&(s=!0);return(!s||i&&!this.isNodeLeaf(t))&&(s=this.findFilteredNodes(t,{searchFields:l,filterText:e,strict:i})||s),s}},computed:{containerClass(){return["p-tree p-component",{"p-tree-selectable":this.selectionMode!=null,"p-tree-loading":this.loading,"p-tree-flex-scrollable":this.scrollHeight==="flex"}]},loadingIconClass(){return["p-tree-loading-icon pi-spin",this.loadingIcon]},filteredValue(){let t=[];const l=this.filterBy.split(","),e=this.filterValue.trim().toLocaleLowerCase(this.filterLocale),i=this.filterMode==="strict";for(let s of this.value){let n={...s},p={searchFields:l,filterText:e,strict:i};(i&&(this.findFilteredNodes(n,p)||this.isFilterMatched(n,p))||!i&&(this.isFilterMatched(n,p)||this.findFilteredNodes(n,p)))&&t.push(n)}return t},valueToRender(){return this.filterValue&&this.filterValue.trim().length>0?this.filteredValue:this.value}},components:{TreeNode:J}};const fe={key:0,class:"p-tree-loading-overlay p-component-overlay"},ge={key:1,class:"p-tree-filter-container"},ye=["placeholder"],be=g("span",{class:"p-tree-filter-icon pi pi-search"},null,-1),xe=["aria-labelledby","aria-label"];function ke(t,l,e,i,s,n){const p=z("TreeNode");return o(),c("div",{class:K(n.containerClass)},[e.loading?(o(),c("div",fe,[g("i",{class:K(n.loadingIconClass)},null,2)])):C("",!0),e.filter?(o(),c("div",ge,[H(g("input",{"onUpdate:modelValue":l[0]||(l[0]=f=>s.filterValue=f),type:"text",autocomplete:"off",class:"p-tree-filter p-inputtext p-component",placeholder:e.filterPlaceholder,onKeydown:l[1]||(l[1]=(...f)=>n.onFilterKeydown&&n.onFilterKeydown(...f))},null,40,ye),[[de,s.filterValue]]),be])):C("",!0),g("div",{class:"p-tree-wrapper",style:W({maxHeight:e.scrollHeight})},[g("ul",{class:"p-tree-container",role:"tree","aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel},[(o(!0),c(N,null,E(n.valueToRender,(f,d)=>(o(),x(p,{key:f.key,node:f,templates:t.$slots,level:e.level+1,index:d,expandedKeys:s.d_expandedKeys,onNodeToggle:n.onNodeToggle,onNodeClick:n.onNodeClick,selectionMode:e.selectionMode,selectionKeys:e.selectionKeys,onCheckboxChange:n.onCheckboxChange},null,8,["node","templates","level","index","expandedKeys","onNodeToggle","onNodeClick","selectionMode","selectionKeys","onCheckboxChange"]))),128))],8,xe)],4)],2)}function ve(t,l){l===void 0&&(l={});var e=l.insertAt;if(!(!t||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",e==="top"&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t))}}var Ce=`
.p-tree-container {
    margin: 0;
    padding: 0;
    list-style-type: none;
    overflow: auto;
}
.p-treenode-children {
    margin: 0;
    padding: 0;
    list-style-type: none;
}
.p-tree-wrapper {
    overflow: auto;
}
.p-treenode-selectable {
    cursor: pointer;
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
}
.p-tree-toggler {
    cursor: pointer;
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    overflow: hidden;
    position: relative;
    -ms-flex-negative: 0;
        flex-shrink: 0;
}
.p-treenode-leaf > .p-treenode-content .p-tree-toggler {
    visibility: hidden;
}
.p-treenode-content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}
.p-tree-filter {
    width: 100%;
}
.p-tree-filter-container {
    position: relative;
    display: block;
    width: 100%;
}
.p-tree-filter-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
}
.p-tree-loading {
    position: relative;
    min-height: 4rem;
}
.p-tree .p-tree-loading-overlay {
    position: absolute;
    z-index: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
}
.p-tree-flex-scrollable {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
        -ms-flex: 1;
            flex: 1;
    height: 100%;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
}
.p-tree-flex-scrollable .p-tree-wrapper {
    -webkit-box-flex: 1;
        -ms-flex: 1;
            flex: 1;
}
`;ve(Ce);X.render=ke;const Ve=g("p",null,"blah",-1),We=A({__name:"RuleTree",props:{value:null,moveRule:null},emits:["pickGlobal"],setup(t,{emit:l}){const e=t,i=Z();ee(),i.globalRules;const s=p=>{console.log("selected node",p),p.key&&l("pickGlobal",p.key)},n=p=>{console.log("onEnd",p),e.moveRule(p.oldIndex,p.newIndex)};return(p,f)=>(o(),c(N,null,[V(h(X),{value:e.value,"selection-mode":"single",onNodeSelect:s},null,8,["value"]),V(h(le),{list:e.value,"item-key":"key",tag:"ul",onEnd:n,class:"p-tree-container"},{item:v(({element:d,index:u})=>[(o(),c("li",{class:"draggable p-tree-node",key:d.key},[V(h(te),{label:d.label,icon:"pi pi-bars"},null,8,["label"])]))]),default:v(()=>[Ve]),_:1},8,["list"])],64))}});var Q={name:"Toolbar",props:{"aria-labelledby":{type:String,default:null}}};const we=["aria-labelledby"],Ke={class:"p-toolbar-group-start p-toolbar-group-left"},Se={class:"p-toolbar-group-center"},Ne={class:"p-toolbar-group-end p-toolbar-group-right"};function _e(t,l,e,i,s,n){return o(),c("div",{class:"p-toolbar p-component",role:"toolbar","aria-labelledby":t.ariaLabelledby},[g("div",Ke,[L(t.$slots,"start")]),g("div",Se,[L(t.$slots,"center")]),g("div",Ne,[L(t.$slots,"end")])],8,we)}function Te(t,l){l===void 0&&(l={});var e=l.insertAt;if(!(!t||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",e==="top"&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t))}}var Me=`
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
`;Te(Me);Q.render=_e;const Ee={key:0},Ae={key:1},Y=A({__name:"OneOrManyString",props:{modelValue:null},emits:["update:modelValue","remove:modelValue"],setup(t,{emit:l}){const e=t,i=q({isEditing:!1}),s=f=>{l("update:modelValue",f)},n=(f,d)=>{S(e.modelValue)&&e.modelValue.splice(d,1,f)},p=f=>{S(e.modelValue)&&(e.modelValue.length<=1?l("remove:modelValue"):e.modelValue.splice(f,1))};return(f,d)=>h(D)(e.modelValue)?(o(),c("div",Ee,[g("ul",null,[g("li",null,[i.isEditing?(o(),x(h(M),{key:1,value:e.modelValue,type:"text",onFocusout:d[1]||(d[1]=u=>i.isEditing=!1),"onUpdate:modelValue":s},null,8,["value"])):(o(),c("b",{key:0,onDblclick:d[0]||(d[0]=u=>i.isEditing=!0)},R(e.modelValue),33))])])])):h(S)(e.modelValue)?(o(),c("ul",Ae,[(o(!0),c(N,null,E(e.modelValue,(u,m)=>(o(),c("li",null,[i.isEditing?(o(),x(h(M),{key:1,onFocusout:d[3]||(d[3]=r=>i.isEditing=!1),value:u,type:"text","onUpdate:modelValue":r=>n(r,m)},null,8,["value","onUpdate:modelValue"])):(o(),c("b",{key:0,onDblclick:d[2]||(d[2]=r=>i.isEditing=!0)},R(u),33)),V(h(B),{icon:"pi pi-times",class:"p-button-rounded p-button-danger p-button-text",onClick:r=>p(m)},null,8,["onClick"])]))),256))])):C("",!0)}}),Ie=A({__name:"RuleExists",props:{modelValue:null},emits:["update:modelValue","remove:modelValue"],setup(t,{emit:l}){const e=t;return(i,s)=>(o(),x(h(P),{header:"Exists",toggleable:!0},{default:v(()=>[V(Y,{"model-value":e.modelValue,"onUpdate:modelValue":s[0]||(s[0]=n=>l("update:modelValue",n)),"onRemove:modelValue":s[1]||(s[1]=()=>l("remove:modelValue"))},null,8,["model-value"])]),_:1}))}}),Re=A({__name:"RuleMissing",props:{modelValue:null},emits:["update:modelValue","remove:modelValue"],setup(t,{emit:l}){const e=t;return(i,s)=>(o(),x(h(P),{header:"Missing",toggleable:!0},{default:v(()=>[V(Y,{"model-value":e.modelValue,"onUpdate:modelValue":s[0]||(s[0]=n=>l("update:modelValue",n)),"onRemove:modelValue":s[1]||(s[1]=()=>l("remove:modelValue"))},null,8,["model-value"])]),_:1}))}}),$e={class:"grid"},Ue={class:"col-2"},De={class:"col"},Le={key:1,class:"grid"},Fe={class:"col-12"},Be=A({__name:"RuleMatch",props:{modelValue:null},emits:["update:modelValue"],setup(t,{emit:l}){const e=t,i=F(!1),s=G(()=>i?"Match":"Match.. "+Object.keys(e.modelValue).join(",")),n=(u,m)=>{console.log(`updating old key: ${u} to ${m}`);let r=e.modelValue;r[m]=r[u],delete r[u]},p=(u,m,r)=>{console.log("Updating KV",u,m,r);const k=e.modelValue[u];S(k)?k.splice(m,1,r):D(k)&&(e.modelValue[u]=r)},f=(u,m)=>{console.log("Removing KI",u,m);const r=e.modelValue[u];S(r)&&r.splice(m,1)},d=u=>{if(S(e.modelValue[u])){console.log("adding row to array for key ",u);const m=e.modelValue[u];let r=S(m)?m:[m];r.push("");let k=e.modelValue;k[u]=r,l("update:modelValue",k)}else{let m=e.modelValue[u];if(console.log("dict key = ",u),console.log("dict value = ",m),D(m)){let r=[m];r.push(""),e.modelValue,e.modelValue[u]=r}}};return(u,m)=>(o(),x(h(P),{header:h(s),toggleable:!0,collapsed:i.value,"onUpdate:collapsed":m[0]||(m[0]=r=>i.value=r)},{default:v(()=>[(o(!0),c(N,null,E(e.modelValue,(r,k,j)=>(o(),c("div",$e,[g("div",Ue,[V(h(M),{value:k,type:"text","onUpdate:modelValue":w=>n(k,w)},null,8,["value","onUpdate:modelValue"])]),g("div",De,[h(D)(r)?(o(),x(h(M),{key:0,value:r,"onUpdate:modelValue":w=>p(k,-1,w),type:"text"},null,8,["value","onUpdate:modelValue"])):h(S)(r)?(o(),c("div",Le,[(o(!0),c(N,null,E(r,(w,$)=>(o(),c("div",Fe,[V(h(M),{placeholder:"String",value:w,type:"text","onUpdate:modelValue":U=>p(k,$,U)},null,8,["value","onUpdate:modelValue"]),V(h(B),{icon:"pi pi-times",class:"p-button-rounded p-button-danger p-button-text",onClick:U=>f(k,$)},null,8,["onClick"])]))),256))])):C("",!0),V(h(B),{label:"Add",icon:"pi pi-plus",onClick:w=>d(k)},null,8,["onClick"])])]))),256))]),_:1},8,["header","collapsed"]))}}),Pe={key:0,style:{"list-style":"none"}},je={style:{margin:"5px"}},qe=A({__name:"Rule",props:{rule:null},emits:["save"],setup(t,{emit:l}){const e=t,i=F([{label:"off",value:!1},{label:"on",value:!0}]),s=q({editTitle:!1,showPencil:!1}),n=F([{label:"Match",icon:"pi pi-plus",command:a=>{console.log("X",a),e.rule.match===void 0?e.rule.match={"":""}:e.rule.match[""]=[]}},{label:"Equals",icon:"pi pi-plus"},{label:"Exists",icon:"pi pi-plus",command:()=>{if(e.rule.exists===void 0)e.rule.exists=["changeme"],l("save",e.rule);else if(p(e.rule.exists)){console.log("exists already existed");let a=e.rule.exists;e.rule.exists=[a,"changeme"]}else f(e.rule.exists)&&e.rule.exists.push("changeme")}},{label:"Missing",icon:"pi pi-plus",command:()=>{if(e.rule.missing===void 0)e.rule.missing=["changeme"];else if(p(e.rule.missing)){let a=e.rule.missing;e.rule.missing=[a,"changeme"]}else f(e.rule.missing)&&e.rule.missing.push("changeme")}}]),p=a=>typeof a=="string",f=a=>Array.isArray(a),d=G(()=>{let a=[];return e.rule.all!==void 0&&a.push({all:e.rule.all}),e.rule.equals!==void 0&&a.push({equals:e.rule.equals}),e.rule.missing!==void 0&&a.push({missing:e.rule.missing}),e.rule.exists!==void 0&&a.push({exists:e.rule.exists}),e.rule.match!==void 0&&a.push({match:e.rule.match}),a}),u=a=>{let y={...e.rule,missing:a};console.log("Saving",y),l("save",y)},m=a=>{let y={...e.rule,exists:a};console.log("Saving",y),l("save",y)},r=a=>{let y={...e.rule,match:a};console.log("Saving match",y),l("save",y)},k=()=>{let a={...e.rule};delete a.exists,l("save",a)},j=()=>{let a={...e.rule};delete a.missing,l("save",a)},w=a=>{e.rule.name=a},$=()=>{s.editTitle=s.editTitle===!1},U=a=>{console.log("LOG",a)};return(a,y)=>e.rule?(o(),x(h(O),{key:0},{title:v(()=>[s.editTitle?(o(),x(h(M),{key:1,value:e.rule.name,type:"text","onUpdate:modelValue":w,onFocusout:y[3]||(y[3]=b=>s.editTitle=!1)},null,8,["value"])):(o(),c("div",{key:0,onDblclick:y[0]||(y[0]=b=>s.editTitle=!0),onPointerover:y[1]||(y[1]=b=>s.showPencil=!0),onPointerleave:y[2]||(y[2]=b=>s.showPencil=!1)},[I(" Rule: "+R(e.rule.name)+" ",1),s.showPencil?(o(),c("i",{key:0,class:"pi pi-pencil",onClick:$})):C("",!0)],32))]),subtitle:v(()=>[I(R(e.rule.uuid),1)]),content:v(()=>[h(d).length>0?(o(),c("ul",Pe,[(o(!0),c(N,null,E(h(d),b=>(o(),c("li",je,[b.all!==void 0?(o(),x(h(ne),{key:0,"onUpdate:modelValue":[U,_=>b.all=_],modelValue:b.all,options:i.value,"option-label":"label","option-value":"value"},null,8,["modelValue","onUpdate:modelValue","options"])):C("",!0),b.missing!==void 0?(o(),x(Re,{key:1,modelValue:b.missing,"onUpdate:modelValue":[_=>b.missing=_,u],"onRemove:modelValue":j},null,8,["modelValue","onUpdate:modelValue"])):C("",!0),b.exists!==void 0?(o(),x(Ie,{key:2,modelValue:b.exists,"onUpdate:modelValue":[_=>b.exists=_,m],"onRemove:modelValue":k},null,8,["modelValue","onUpdate:modelValue"])):C("",!0),b.match!==void 0?(o(),x(Be,{key:3,modelValue:b.match,"onUpdate:modelValue":[_=>b.match=_,r]},null,8,["modelValue","onUpdate:modelValue"])):C("",!0)]))),256))])):(o(),x(h(O),{key:1},{title:v(()=>[I(" Add rules")]),content:v(()=>[I(" This rule is missing some selectors ")]),_:1}))]),footer:v(()=>[V(h(Q),null,{start:v(()=>[V(h(re),{label:"add",icon:"pi pi-plus",model:n.value},null,8,["model"])]),_:1})]),_:1})):C("",!0)}});export{We as _,qe as a,Re as b,Ie as c,Be as d,Q as s};
