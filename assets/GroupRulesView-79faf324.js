import{D as $,R as de,r as X,a as re,o,b as c,f as v,g as Y,e as M,h as V,c as b,i as ue,F as T,A as S,t as _,n as J,d as A,O as ce,aa as he,k as N,a2 as pe,ab as q,j as k,x as d,w as x,M as j,ac as G,Y as F,z as R,$ as E,L as B,l as D,a0 as H,X as z,ad as me,a4 as fe,ae as L}from"./index-e442c57d.js";import{b as ge,_ as Q,c as O,s as Z,a as ye}from"./panel.esm-e2614a2d.js";import{s as ee}from"./splitbutton.esm-aca87a08.js";var le={name:"TreeNode",emits:["node-toggle","node-click","checkbox-change"],props:{node:{type:null,default:null},expandedKeys:{type:null,default:null},selectionKeys:{type:null,default:null},selectionMode:{type:String,default:null},templates:{type:null,default:null},level:{type:Number,default:null},index:{type:Number,default:null}},nodeTouched:!1,mounted(){this.$refs.currentNode.closest(".p-treeselect-items-wrapper")&&this.setAllNodesTabIndexes()},methods:{toggle(){this.$emit("node-toggle",this.node)},label(l){return typeof l.label=="function"?l.label():l.label},onChildNodeToggle(l){this.$emit("node-toggle",l)},onClick(l){$.hasClass(l.target,"p-tree-toggler")||$.hasClass(l.target.parentElement,"p-tree-toggler")||(this.isCheckboxSelectionMode()?this.toggleCheckbox():this.$emit("node-click",{originalEvent:l,nodeTouched:this.nodeTouched,node:this.node}),this.nodeTouched=!1)},onChildNodeClick(l){this.$emit("node-click",l)},onTouchEnd(){this.nodeTouched=!0},onKeyDown(l){if(this.isSameNode(l))switch(l.code){case"Tab":this.onTabKey(l);break;case"ArrowDown":this.onArrowDown(l);break;case"ArrowUp":this.onArrowUp(l);break;case"ArrowRight":this.onArrowRight(l);break;case"ArrowLeft":this.onArrowLeft(l);break;case"Enter":case"Space":this.onEnterKey(l);break}},onArrowDown(l){const t=l.target,e=t.children[1];if(e)this.focusRowChange(t,e.children[0]);else if(t.nextElementSibling)this.focusRowChange(t,t.nextElementSibling);else{let i=this.findNextSiblingOfAncestor(t);i&&this.focusRowChange(t,i)}l.preventDefault()},onArrowUp(l){const t=l.target;if(t.previousElementSibling)this.focusRowChange(t,t.previousElementSibling,this.findLastVisibleDescendant(t.previousElementSibling));else{let e=this.getParentNodeElement(t);e&&this.focusRowChange(t,e)}l.preventDefault()},onArrowRight(l){this.leaf||this.expanded||(l.currentTarget.tabIndex=-1,this.$emit("node-toggle",this.node),this.$nextTick(()=>{this.onArrowDown(l)}))},onArrowLeft(l){const t=$.findSingle(l.currentTarget,".p-tree-toggler");if(this.level===0&&!this.expanded)return!1;if(this.expanded&&!this.leaf)return t.click(),!1;const e=this.findBeforeClickableNode(l.currentTarget);e&&this.focusRowChange(l.currentTarget,e)},onEnterKey(l){this.setTabIndexForSelectionMode(l,this.nodeTouched),this.onClick(l),l.preventDefault()},onTabKey(){this.setAllNodesTabIndexes()},setAllNodesTabIndexes(){const l=$.find(this.$refs.currentNode.closest(".p-tree-container"),".p-treenode"),t=[...l].some(e=>e.getAttribute("aria-selected")==="true"||e.getAttribute("aria-checked")==="true");if([...l].forEach(e=>{e.tabIndex=-1}),t){const e=[...l].filter(i=>i.getAttribute("aria-selected")==="true"||i.getAttribute("aria-checked")==="true");e[0].tabIndex=0;return}[...l][0].tabIndex=0},setTabIndexForSelectionMode(l,t){if(this.selectionMode!==null){const e=[...$.find(this.$refs.currentNode.parentElement,".p-treenode")];l.currentTarget.tabIndex=t===!1?-1:0,e.every(i=>i.tabIndex===-1)&&(e[0].tabIndex=0)}},focusRowChange(l,t,e){l.tabIndex="-1",t.tabIndex="0",this.focusNode(e||t)},findBeforeClickableNode(l){const t=l.closest("ul").closest("li");if(t){const e=$.findSingle(t,"button");return e&&e.style.visibility!=="hidden"?t:this.findBeforeClickableNode(l.previousElementSibling)}return null},toggleCheckbox(){let l=this.selectionKeys?{...this.selectionKeys}:{};const t=!this.checked;this.propagateDown(this.node,t,l),this.$emit("checkbox-change",{node:this.node,check:t,selectionKeys:l})},propagateDown(l,t,e){if(t?e[l.key]={checked:!0,partialChecked:!1}:delete e[l.key],l.children&&l.children.length)for(let i of l.children)this.propagateDown(i,t,e)},propagateUp(l){let t=l.check,e={...l.selectionKeys},i=0,s=!1;for(let n of this.node.children)e[n.key]&&e[n.key].checked?i++:e[n.key]&&e[n.key].partialChecked&&(s=!0);t&&i===this.node.children.length?e[this.node.key]={checked:!0,partialChecked:!1}:(t||delete e[this.node.key],s||i>0&&i!==this.node.children.length?e[this.node.key]={checked:!1,partialChecked:!0}:delete e[this.node.key]),this.$emit("checkbox-change",{node:l.node,check:l.check,selectionKeys:e})},onChildCheckboxChange(l){this.$emit("checkbox-change",l)},findNextSiblingOfAncestor(l){let t=this.getParentNodeElement(l);return t?t.nextElementSibling?t.nextElementSibling:this.findNextSiblingOfAncestor(t):null},findLastVisibleDescendant(l){const t=l.children[1];if(t){const e=t.children[t.children.length-1];return this.findLastVisibleDescendant(e)}else return l},getParentNodeElement(l){const t=l.parentElement.parentElement;return $.hasClass(t,"p-treenode")?t:null},focusNode(l){l.focus()},isCheckboxSelectionMode(){return this.selectionMode==="checkbox"},isSameNode(l){return l.currentTarget&&(l.currentTarget.isSameNode(l.target)||l.currentTarget.isSameNode(l.target.closest(".p-treenode")))}},computed:{hasChildren(){return this.node.children&&this.node.children.length>0},expanded(){return this.expandedKeys&&this.expandedKeys[this.node.key]===!0},leaf(){return this.node.leaf===!1?!1:!(this.node.children&&this.node.children.length)},selectable(){return this.node.selectable===!1?!1:this.selectionMode!=null},selected(){return this.selectionMode&&this.selectionKeys?this.selectionKeys[this.node.key]===!0:!1},containerClass(){return["p-treenode",{"p-treenode-leaf":this.leaf}]},contentClass(){return["p-treenode-content",this.node.styleClass,{"p-treenode-selectable":this.selectable,"p-highlight":this.checkboxMode?this.checked:this.selected}]},icon(){return["p-treenode-icon",this.node.icon]},toggleIcon(){return["p-tree-toggler-icon pi pi-fw",this.expanded?this.node.expandedIcon||"pi-chevron-down":this.node.collapsedIcon||"pi-chevron-right"]},checkboxClass(){return["p-checkbox-box",{"p-highlight":this.checked,"p-indeterminate":this.partialChecked}]},checkboxIcon(){return["p-checkbox-icon",{"pi pi-check":this.checked,"pi pi-minus":this.partialChecked}]},checkboxMode(){return this.selectionMode==="checkbox"&&this.node.selectable!==!1},checked(){return this.selectionKeys?this.selectionKeys[this.node.key]&&this.selectionKeys[this.node.key].checked:!1},partialChecked(){return this.selectionKeys?this.selectionKeys[this.node.key]&&this.selectionKeys[this.node.key].partialChecked:!1},ariaChecked(){return this.selectionMode==="single"||this.selectionMode==="multiple"?this.selected:void 0},ariaSelected(){return this.checkboxMode?this.checked:void 0}},directives:{ripple:de}};const be=["aria-label","aria-selected","aria-expanded","aria-setsize","aria-posinset","aria-level","aria-checked","tabindex"],xe={key:0,class:"p-checkbox p-component","aria-hidden":"true"},ke={class:"p-treenode-label"},ve={key:0,class:"p-treenode-children",role:"group"};function Ve(l,t,e,i,s,n){const f=X("TreeNode",!0),y=re("ripple");return o(),c("li",{ref:"currentNode",class:M(n.containerClass),role:"treeitem","aria-label":n.label(e.node),"aria-selected":n.ariaSelected,"aria-expanded":n.expanded,"aria-setsize":e.node.children?e.node.children.length:0,"aria-posinset":e.index+1,"aria-level":e.level,"aria-checked":n.ariaChecked,tabindex:e.index===0?0:-1,onKeydown:t[3]||(t[3]=(...h)=>n.onKeyDown&&n.onKeyDown(...h))},[v("div",{class:M(n.contentClass),onClick:t[1]||(t[1]=(...h)=>n.onClick&&n.onClick(...h)),onTouchend:t[2]||(t[2]=(...h)=>n.onTouchEnd&&n.onTouchEnd(...h)),style:J(e.node.style)},[Y((o(),c("button",{type:"button",class:"p-tree-toggler p-link",onClick:t[0]||(t[0]=(...h)=>n.toggle&&n.toggle(...h)),tabindex:"-1","aria-hidden":"true"},[v("span",{class:M(n.toggleIcon)},null,2)])),[[y]]),n.checkboxMode?(o(),c("div",xe,[v("div",{class:M(n.checkboxClass),role:"checkbox"},[v("span",{class:M(n.checkboxIcon)},null,2)],2)])):V("",!0),v("span",{class:M(n.icon)},null,2),v("span",ke,[e.templates[e.node.type]||e.templates.default?(o(),b(ue(e.templates[e.node.type]||e.templates.default),{key:0,node:e.node},null,8,["node"])):(o(),c(T,{key:1},[S(_(n.label(e.node)),1)],64))])],38),n.hasChildren&&n.expanded?(o(),c("ul",ve,[(o(!0),c(T,null,A(e.node.children,h=>(o(),b(f,{key:h.key,node:h,templates:e.templates,level:e.level+1,expandedKeys:e.expandedKeys,onNodeToggle:n.onChildNodeToggle,onNodeClick:n.onChildNodeClick,selectionMode:e.selectionMode,selectionKeys:e.selectionKeys,onCheckboxChange:n.propagateUp},null,8,["node","templates","level","expandedKeys","onNodeToggle","onNodeClick","selectionMode","selectionKeys","onCheckboxChange"]))),128))])):V("",!0)],42,be)}le.render=Ve;var te={name:"Tree",emits:["node-expand","node-collapse","update:expandedKeys","update:selectionKeys","node-select","node-unselect"],props:{value:{type:null,default:null},expandedKeys:{type:null,default:null},selectionKeys:{type:null,default:null},selectionMode:{type:String,default:null},metaKeySelection:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:"pi pi-spinner"},filter:{type:Boolean,default:!1},filterBy:{type:String,default:"label"},filterMode:{type:String,default:"lenient"},filterPlaceholder:{type:String,default:null},filterLocale:{type:String,default:void 0},scrollHeight:{type:String,default:null},level:{type:Number,default:0},"aria-labelledby":{type:String,default:null},"aria-label":{type:String,default:null}},data(){return{d_expandedKeys:this.expandedKeys||{},filterValue:null}},watch:{expandedKeys(l){this.d_expandedKeys=l}},methods:{onNodeToggle(l){const t=l.key;this.d_expandedKeys[t]?(delete this.d_expandedKeys[t],this.$emit("node-collapse",l)):(this.d_expandedKeys[t]=!0,this.$emit("node-expand",l)),this.d_expandedKeys={...this.d_expandedKeys},this.$emit("update:expandedKeys",this.d_expandedKeys)},onNodeClick(l){if(this.selectionMode!=null&&l.node.selectable!==!1){const e=(l.nodeTouched?!1:this.metaKeySelection)?this.handleSelectionWithMetaKey(l):this.handleSelectionWithoutMetaKey(l);this.$emit("update:selectionKeys",e)}},onCheckboxChange(l){this.$emit("update:selectionKeys",l.selectionKeys),l.check?this.$emit("node-select",l.node):this.$emit("node-unselect",l.node)},handleSelectionWithMetaKey(l){const t=l.originalEvent,e=l.node,i=t.metaKey||t.ctrlKey,s=this.isNodeSelected(e);let n;return s&&i?(this.isSingleSelectionMode()?n={}:(n={...this.selectionKeys},delete n[e.key]),this.$emit("node-unselect",e)):(this.isSingleSelectionMode()?n={}:this.isMultipleSelectionMode()&&(n=i?this.selectionKeys?{...this.selectionKeys}:{}:{}),n[e.key]=!0,this.$emit("node-select",e)),n},handleSelectionWithoutMetaKey(l){const t=l.node,e=this.isNodeSelected(t);let i;return this.isSingleSelectionMode()?e?(i={},this.$emit("node-unselect",t)):(i={},i[t.key]=!0,this.$emit("node-select",t)):e?(i={...this.selectionKeys},delete i[t.key],this.$emit("node-unselect",t)):(i=this.selectionKeys?{...this.selectionKeys}:{},i[t.key]=!0,this.$emit("node-select",t)),i},isSingleSelectionMode(){return this.selectionMode==="single"},isMultipleSelectionMode(){return this.selectionMode==="multiple"},isNodeSelected(l){return this.selectionMode&&this.selectionKeys?this.selectionKeys[l.key]===!0:!1},isChecked(l){return this.selectionKeys?this.selectionKeys[l.key]&&this.selectionKeys[l.key].checked:!1},isNodeLeaf(l){return l.leaf===!1?!1:!(l.children&&l.children.length)},onFilterKeydown(l){l.which===13&&l.preventDefault()},findFilteredNodes(l,t){if(l){let e=!1;if(l.children){let i=[...l.children];l.children=[];for(let s of i){let n={...s};this.isFilterMatched(n,t)&&(e=!0,l.children.push(n))}}if(e)return!0}},isFilterMatched(l,{searchFields:t,filterText:e,strict:i}){let s=!1;for(let n of t)String(ce.resolveFieldData(l,n)).toLocaleLowerCase(this.filterLocale).indexOf(e)>-1&&(s=!0);return(!s||i&&!this.isNodeLeaf(l))&&(s=this.findFilteredNodes(l,{searchFields:t,filterText:e,strict:i})||s),s}},computed:{containerClass(){return["p-tree p-component",{"p-tree-selectable":this.selectionMode!=null,"p-tree-loading":this.loading,"p-tree-flex-scrollable":this.scrollHeight==="flex"}]},loadingIconClass(){return["p-tree-loading-icon pi-spin",this.loadingIcon]},filteredValue(){let l=[];const t=this.filterBy.split(","),e=this.filterValue.trim().toLocaleLowerCase(this.filterLocale),i=this.filterMode==="strict";for(let s of this.value){let n={...s},f={searchFields:t,filterText:e,strict:i};(i&&(this.findFilteredNodes(n,f)||this.isFilterMatched(n,f))||!i&&(this.isFilterMatched(n,f)||this.findFilteredNodes(n,f)))&&l.push(n)}return l},valueToRender(){return this.filterValue&&this.filterValue.trim().length>0?this.filteredValue:this.value}},components:{TreeNode:le}};const Ce={key:0,class:"p-tree-loading-overlay p-component-overlay"},we={key:1,class:"p-tree-filter-container"},Ke=["placeholder"],Se=v("span",{class:"p-tree-filter-icon pi pi-search"},null,-1),_e=["aria-labelledby","aria-label"];function Te(l,t,e,i,s,n){const f=X("TreeNode");return o(),c("div",{class:M(n.containerClass)},[e.loading?(o(),c("div",Ce,[v("i",{class:M(n.loadingIconClass)},null,2)])):V("",!0),e.filter?(o(),c("div",we,[Y(v("input",{"onUpdate:modelValue":t[0]||(t[0]=y=>s.filterValue=y),type:"text",autocomplete:"off",class:"p-tree-filter p-inputtext p-component",placeholder:e.filterPlaceholder,onKeydown:t[1]||(t[1]=(...y)=>n.onFilterKeydown&&n.onFilterKeydown(...y))},null,40,Ke),[[he,s.filterValue]]),Se])):V("",!0),v("div",{class:"p-tree-wrapper",style:J({maxHeight:e.scrollHeight})},[v("ul",{class:"p-tree-container",role:"tree","aria-labelledby":l.ariaLabelledby,"aria-label":l.ariaLabel},[(o(!0),c(T,null,A(n.valueToRender,(y,h)=>(o(),b(f,{key:y.key,node:y,templates:l.$slots,level:e.level+1,index:h,expandedKeys:s.d_expandedKeys,onNodeToggle:n.onNodeToggle,onNodeClick:n.onNodeClick,selectionMode:e.selectionMode,selectionKeys:e.selectionKeys,onCheckboxChange:n.onCheckboxChange},null,8,["node","templates","level","index","expandedKeys","onNodeToggle","onNodeClick","selectionMode","selectionKeys","onCheckboxChange"]))),128))],8,_e)],4)],2)}function Ne(l,t){t===void 0&&(t={});var e=t.insertAt;if(!(!l||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",e==="top"&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=l:s.appendChild(document.createTextNode(l))}}var Me=`
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
`;Ne(Me);te.render=Te;const Ee=v("p",null,"blah",-1),Re=N({__name:"RuleTree",props:{value:null,moveRule:null},emits:["pickGlobal"],setup(l,{emit:t}){const e=l,i=pe();q(),i.globalRules;const s=f=>{console.log("selected node",f),f.key&&t("pickGlobal",f.key)},n=f=>{console.log("onEnd",f),e.moveRule(f.oldIndex,f.newIndex)};return(f,y)=>(o(),c(T,null,[k(d(te),{value:e.value,"selection-mode":"single",onNodeSelect:s},null,8,["value"]),k(d(Q),{list:e.value,"item-key":"key",tag:"ul",onEnd:n,class:"p-tree-container"},{item:x(({element:h,index:m})=>[(o(),c("li",{class:"draggable p-tree-node",key:h.key},[k(d(ge),{label:h.label,icon:"pi pi-bars"},null,8,["label"])]))]),default:x(()=>[Ee]),_:1},8,["list"])],64))}});var W={name:"Toolbar",props:{"aria-labelledby":{type:String,default:null}}};const $e=["aria-labelledby"],Ae={class:"p-toolbar-group-start p-toolbar-group-left"},Ue={class:"p-toolbar-group-center"},Ie={class:"p-toolbar-group-end p-toolbar-group-right"};function De(l,t,e,i,s,n){return o(),c("div",{class:"p-toolbar p-component",role:"toolbar","aria-labelledby":l.ariaLabelledby},[v("div",Ae,[j(l.$slots,"start")]),v("div",Ue,[j(l.$slots,"center")]),v("div",Ie,[j(l.$slots,"end")])],8,$e)}function Pe(l,t){t===void 0&&(t={});var e=t.insertAt;if(!(!l||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",e==="top"&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=l:s.appendChild(document.createTextNode(l))}}var Le=`
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
`;Pe(Le);W.render=De;const Fe={key:0},Be={key:1},ne=N({__name:"OneOrManyString",props:{modelValue:null},emits:["update:modelValue","remove:modelValue"],setup(l,{emit:t}){const e=l,i=G({isEditing:!1}),s=y=>{t("update:modelValue",y)},n=(y,h)=>{E(e.modelValue)&&e.modelValue.splice(h,1,y)},f=y=>{E(e.modelValue)&&(e.modelValue.length<=1?t("remove:modelValue"):e.modelValue.splice(y,1))};return(y,h)=>d(F)(e.modelValue)?(o(),c("div",Fe,[v("ul",null,[v("li",null,[i.isEditing?(o(),b(d(R),{key:1,value:e.modelValue,type:"text",onFocusout:h[1]||(h[1]=m=>i.isEditing=!1),"onUpdate:modelValue":s},null,8,["value"])):(o(),c("b",{key:0,onDblclick:h[0]||(h[0]=m=>i.isEditing=!0)},_(e.modelValue),33))])])])):d(E)(e.modelValue)?(o(),c("ul",Be,[(o(!0),c(T,null,A(e.modelValue,(m,g)=>(o(),c("li",null,[i.isEditing?(o(),b(d(R),{key:1,onFocusout:h[3]||(h[3]=p=>i.isEditing=!1),value:m,type:"text","onUpdate:modelValue":p=>n(p,g)},null,8,["value","onUpdate:modelValue"])):(o(),c("b",{key:0,onDblclick:h[2]||(h[2]=p=>i.isEditing=!0)},_(m),33)),k(d(B),{icon:"pi pi-times",class:"p-button-rounded p-button-danger p-button-text",onClick:p=>f(g)},null,8,["onClick"])]))),256))])):V("",!0)}}),se=N({__name:"RuleExists",props:{modelValue:null},emits:["update:modelValue","remove:modelValue"],setup(l,{emit:t}){const e=l;return(i,s)=>(o(),b(d(O),{header:"Exists",toggleable:!0},{default:x(()=>[k(ne,{"model-value":e.modelValue,"onUpdate:modelValue":s[0]||(s[0]=n=>t("update:modelValue",n)),"onRemove:modelValue":s[1]||(s[1]=()=>t("remove:modelValue"))},null,8,["model-value"])]),_:1}))}}),ie=N({__name:"RuleMissing",props:{modelValue:null},emits:["update:modelValue","remove:modelValue"],setup(l,{emit:t}){const e=l;return(i,s)=>(o(),b(d(O),{header:"Missing",toggleable:!0},{default:x(()=>[k(ne,{"model-value":e.modelValue,"onUpdate:modelValue":s[0]||(s[0]=n=>t("update:modelValue",n)),"onRemove:modelValue":s[1]||(s[1]=()=>t("remove:modelValue"))},null,8,["model-value"])]),_:1}))}}),Ge={class:"grid"},Oe={class:"col-2"},je={class:"col"},ze={key:1,class:"grid"},qe={class:"col-12"},oe=N({__name:"RuleMatch",props:{modelValue:null},emits:["update:modelValue"],setup(l,{emit:t}){const e=l,i=D(!1),s=H(()=>i?"Match":"Match.. "+Object.keys(e.modelValue).join(",")),n=(m,g)=>{console.log(`updating old key: ${m} to ${g}`);let p=e.modelValue;p[g]=p[m],delete p[m]},f=(m,g,p)=>{console.log("Updating KV",m,g,p);const C=e.modelValue[m];E(C)?C.splice(g,1,p):F(C)&&(e.modelValue[m]=p)},y=(m,g)=>{console.log("Removing KI",m,g);const p=e.modelValue[m];E(p)&&p.splice(g,1)},h=m=>{if(E(e.modelValue[m])){console.log("adding row to array for key ",m);const g=e.modelValue[m];let p=E(g)?g:[g];p.push("");let C=e.modelValue;C[m]=p,t("update:modelValue",C)}else{let g=e.modelValue[m];if(console.log("dict key = ",m),console.log("dict value = ",g),F(g)){let p=[g];p.push(""),e.modelValue,e.modelValue[m]=p}}};return(m,g)=>(o(),b(d(O),{header:d(s),toggleable:!0,collapsed:i.value,"onUpdate:collapsed":g[0]||(g[0]=p=>i.value=p)},{default:x(()=>[(o(!0),c(T,null,A(e.modelValue,(p,C,P)=>(o(),c("div",Ge,[v("div",Oe,[k(d(R),{value:C,type:"text","onUpdate:modelValue":K=>n(C,K)},null,8,["value","onUpdate:modelValue"])]),v("div",je,[d(F)(p)?(o(),b(d(R),{key:0,value:p,"onUpdate:modelValue":K=>f(C,-1,K),type:"text"},null,8,["value","onUpdate:modelValue"])):d(E)(p)?(o(),c("div",ze,[(o(!0),c(T,null,A(p,(K,U)=>(o(),c("div",qe,[k(d(R),{placeholder:"String",value:K,type:"text","onUpdate:modelValue":I=>f(C,U,I)},null,8,["value","onUpdate:modelValue"]),k(d(B),{icon:"pi pi-times",class:"p-button-rounded p-button-danger p-button-text",onClick:I=>y(C,U)},null,8,["onClick"])]))),256))])):V("",!0),k(d(B),{label:"Add",icon:"pi pi-plus",onClick:K=>h(C)},null,8,["onClick"])])]))),256))]),_:1},8,["header","collapsed"]))}}),He={key:0,style:{"list-style":"none"}},We={style:{margin:"5px"}},ae=N({__name:"Rule",props:{rule:null},emits:["save"],setup(l,{emit:t}){const e=l,i=D([{label:"off",value:!1},{label:"on",value:!0}]),s=G({editTitle:!1,showPencil:!1}),n=D([{label:"Match",icon:"pi pi-plus",command:a=>{console.log("X",a),e.rule.match===void 0?e.rule.match={"":""}:e.rule.match[""]=[]}},{label:"Equals",icon:"pi pi-plus"},{label:"Exists",icon:"pi pi-plus",command:()=>{if(e.rule.exists===void 0)e.rule.exists=["changeme"],t("save",e.rule);else if(f(e.rule.exists)){console.log("exists already existed");let a=e.rule.exists;e.rule.exists=[a,"changeme"]}else y(e.rule.exists)&&e.rule.exists.push("changeme")}},{label:"Missing",icon:"pi pi-plus",command:()=>{if(e.rule.missing===void 0)e.rule.missing=["changeme"];else if(f(e.rule.missing)){let a=e.rule.missing;e.rule.missing=[a,"changeme"]}else y(e.rule.missing)&&e.rule.missing.push("changeme")}}]),f=a=>typeof a=="string",y=a=>Array.isArray(a),h=H(()=>{let a=[];return e.rule.all!==void 0&&a.push({all:e.rule.all}),e.rule.equals!==void 0&&a.push({equals:e.rule.equals}),e.rule.missing!==void 0&&a.push({missing:e.rule.missing}),e.rule.exists!==void 0&&a.push({exists:e.rule.exists}),e.rule.match!==void 0&&a.push({match:e.rule.match}),a}),m=a=>{let r={...e.rule,missing:a};console.log("Saving",r),t("save",r)},g=a=>{let r={...e.rule,exists:a};console.log("Saving",r),t("save",r)},p=a=>{let r={...e.rule,match:a};console.log("Saving match",r),t("save",r)},C=()=>{let a={...e.rule};delete a.exists,t("save",a)},P=()=>{let a={...e.rule};delete a.missing,t("save",a)},K=a=>{e.rule.name=a},U=()=>{s.editTitle=s.editTitle===!1},I=a=>{console.log("LOG",a)};return(a,r)=>e.rule?(o(),b(d(z),{key:0},{title:x(()=>[s.editTitle?(o(),b(d(R),{key:1,value:e.rule.name,type:"text","onUpdate:modelValue":K,onFocusout:r[3]||(r[3]=u=>s.editTitle=!1)},null,8,["value"])):(o(),c("div",{key:0,onDblclick:r[0]||(r[0]=u=>s.editTitle=!0),onPointerover:r[1]||(r[1]=u=>s.showPencil=!0),onPointerleave:r[2]||(r[2]=u=>s.showPencil=!1)},[S(" Rule: "+_(e.rule.name)+" ",1),s.showPencil?(o(),c("i",{key:0,class:"pi pi-pencil",onClick:U})):V("",!0)],32))]),subtitle:x(()=>[S(_(e.rule.uuid),1)]),content:x(()=>[d(h).length>0?(o(),c("ul",He,[(o(!0),c(T,null,A(d(h),u=>(o(),c("li",We,[u.all!==void 0?(o(),b(d(Z),{key:0,"onUpdate:modelValue":[I,w=>u.all=w],modelValue:u.all,options:i.value,"option-label":"label","option-value":"value"},null,8,["modelValue","onUpdate:modelValue","options"])):V("",!0),u.missing!==void 0?(o(),b(ie,{key:1,modelValue:u.missing,"onUpdate:modelValue":[w=>u.missing=w,m],"onRemove:modelValue":P},null,8,["modelValue","onUpdate:modelValue"])):V("",!0),u.exists!==void 0?(o(),b(se,{key:2,modelValue:u.exists,"onUpdate:modelValue":[w=>u.exists=w,g],"onRemove:modelValue":C},null,8,["modelValue","onUpdate:modelValue"])):V("",!0),u.match!==void 0?(o(),b(oe,{key:3,modelValue:u.match,"onUpdate:modelValue":[w=>u.match=w,p]},null,8,["modelValue","onUpdate:modelValue"])):V("",!0)]))),256))])):(o(),b(d(z),{key:1},{title:x(()=>[S(" Add rules")]),content:x(()=>[S(" This rule is missing some selectors ")]),_:1}))]),footer:x(()=>[k(d(W),null,{start:x(()=>[k(d(ee),{label:"add",icon:"pi pi-plus",model:n.value},null,8,["model"])]),_:1})]),_:1})):V("",!0)}}),Xe=N({__name:"RulePanel",props:{rule:null},setup(l){const t=l,e=G({editTitle:!1,showPencil:!1});return(i,s)=>(o(),b(d(O),{collapsed:!0,toggleable:!0},me({default:x(()=>[k(ae,{rule:t.rule},null,8,["rule"])]),_:2},[e.editTitle?{name:"header",fn:x(()=>[k(d(R),{value:t.rule.name,type:"text","onUpdate:modelValue":s[4]||(s[4]=n=>t.rule.name=n),onFocusout:s[5]||(s[5]=n=>e.editTitle=!1)},null,8,["value"])]),key:"1"}:{name:"header",fn:x(()=>[v("div",{onDblclick:s[1]||(s[1]=n=>e.editTitle=!0),onMouseover:s[2]||(s[2]=n=>e.showPencil=!0),onMouseleave:s[3]||(s[3]=n=>e.showPencil=!1)},[S(_(t.rule.name)+" ",1),e.showPencil?(o(),c("i",{key:0,class:"pi pi-pencil",onClick:s[0]||(s[0]=n=>e.editTitle=!e.editTitle)})):V("",!0)],32)]),key:"0"}]),1024))}}),Ye=N({__name:"GroupRule",props:{rule:null},emits:["save"],setup(l,{emit:t}){const e=l,i=q(),s=D([{label:"off",value:!1},{label:"on",value:!0}]),n=G({editTitle:!1,showPencil:!1}),f=D([{label:"Add Rule",icon:"pi pi-plus",command:a=>{i.addRuleToGroup(e.rule.uuid)}}]),y=H(()=>{let a=[];return e.rule.all!==void 0&&a.push({all:e.rule.all}),e.rule.equals!==void 0&&a.push({equals:e.rule.equals}),e.rule.missing!==void 0&&a.push({missing:e.rule.missing}),e.rule.exists!==void 0&&a.push({exists:e.rule.exists}),e.rule.match!==void 0&&a.push({match:e.rule.match}),a}),h=(a,r)=>{i.moveRuleInGroup(a,r.oldIndex,r.newIndex)},m=a=>{let r={...e.rule,missing:a};console.log("Saving",r),t("save",r)},g=a=>{let r={...e.rule,exists:a};console.log("Saving",r),t("save",r)},p=a=>{let r={...e.rule,match:a};console.log("Saving match",r),t("save",r)},C=()=>{let a={...e.rule};delete a.exists,t("save",a)},P=()=>{let a={...e.rule};delete a.missing,t("save",a)},K=a=>{e.rule.name=a},U=()=>{n.editTitle=n.editTitle===!1},I=a=>{console.log("LOG",a)};return(a,r)=>e.rule?(o(),b(d(z),{key:0},{title:x(()=>[n.editTitle?(o(),b(d(R),{key:1,value:e.rule.name,type:"text","onUpdate:modelValue":K,onFocusout:r[3]||(r[3]=u=>n.editTitle=!1)},null,8,["value"])):(o(),c("div",{key:0,onDblclick:r[0]||(r[0]=u=>n.editTitle=!0),onPointerover:r[1]||(r[1]=u=>n.showPencil=!0),onPointerleave:r[2]||(r[2]=u=>n.showPencil=!1)},[S(" Group Rule: "+_(e.rule.name)+" ",1),n.showPencil?(o(),c("i",{key:0,class:"pi pi-pencil",onClick:U})):V("",!0)],32))]),subtitle:x(()=>[S(_(e.rule.uuid),1)]),content:x(()=>[v("ul",null,[(o(!0),c(T,null,A(d(y),u=>(o(),c("li",null,[u.all!==void 0?(o(),b(d(Z),{key:0,"onUpdate:modelValue":[I,w=>u.all=w],modelValue:u.all,options:s.value,"option-label":"label","option-value":"value"},null,8,["modelValue","onUpdate:modelValue","options"])):V("",!0),u.missing!==void 0?(o(),b(ie,{key:1,modelValue:u.missing,"onUpdate:modelValue":[w=>u.missing=w,m],"onRemove:modelValue":P},null,8,["modelValue","onUpdate:modelValue"])):V("",!0),u.exists!==void 0?(o(),b(se,{key:2,modelValue:u.exists,"onUpdate:modelValue":[w=>u.exists=w,g],"onRemove:modelValue":C},null,8,["modelValue","onUpdate:modelValue"])):V("",!0),u.match!==void 0?(o(),b(oe,{key:3,modelValue:u.match,"onUpdate:modelValue":[w=>u.match=w,p]},null,8,["modelValue","onUpdate:modelValue"])):V("",!0)]))),256))]),k(d(Q),{class:"",style:{"list-style":"none"},list:e.rule.rules,"item-key":"uuid",tag:"ul",onEnd:r[4]||(r[4]=u=>h(e.rule.uuid,u))},{header:x(()=>[S(" rule count: "+_(e.rule.rules.length),1)]),item:x(({element:u,index:w})=>[(o(),c("li",{class:"draggable",style:{margin:"5px"},key:u.uuid},[k(Xe,{rule:u},null,8,["rule"])]))]),_:1},8,["list"])]),footer:x(()=>[k(d(W),null,{start:x(()=>[k(d(ee),{label:"add",icon:"pi pi-plus",model:f.value},null,8,["model"])]),_:1})]),_:1})):V("",!0)}}),Je={class:"grid"},Qe={class:"col-2"},Ze={key:0,class:"col"},el={key:1,class:"col"},sl=N({__name:"GroupRulesView",setup(l){const t=q();fe(()=>{t.load([{uuid:L(),name:"1st group",rules:[{uuid:L(),name:"1st rule"}]},{uuid:L(),name:"2nd group",rules:[]},{uuid:L(),name:"3rd group",rules:[]}])});const e=s=>{console.log("global clicked",s),t.setRuleSelected(s,void 0)},i=()=>{t.addGroup()};return(s,n)=>(o(),c("div",Je,[v("div",Qe,[k(Re,{value:d(t).rules,"move-rule":d(t).moveRule,onPickGlobal:e},null,8,["value","move-rule"]),k(d(ye)),k(d(B),{onClick:i},{default:x(()=>[S("Add Rule")]),_:1})]),d(t).selectedGroupRule?(o(),c("div",Ze,[k(Ye,{rule:d(t).selectedGroupRule},null,8,["rule"])])):d(t).selectedRule?(o(),c("div",el,[k(ae,{rule:d(t).selectedRule},null,8,["rule"])])):V("",!0)]))}});export{sl as default};
