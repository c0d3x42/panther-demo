import{$ as o,aa as d,ag as r}from"./index-ce3b542e.js";const u=o("apikey",()=>{const a=d(new Array),s=n=>a.find(t=>t.uuid===n),e=n=>{const t={uuid:r(),key:`random-key-${r()}`,creator:n,created:Date.now()};a.push(t)};return{keys:a,getKeyByUUID:s,add:e,generateKeys:()=>{e("admin"),e("admin-2"),e("admin-3")}}});export{u};
