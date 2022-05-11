import{u as w,V as B,F as f,P as v,f as h,H as k,T as L,O as M,M as P,a as T}from"./vendor.70bd082a.js";const z=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function n(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?a.credentials="include":e.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(e){if(e.ep)return;e.ep=!0;const a=n(e);fetch(e.href,a)}};z();w();const r=await fetch("data.json").then(t=>t.json()).then(t=>t);console.log(r);let l=0,c=r.Bezigrad.percent_occupied.length,d=l;$('input[name="daterange"]').daterangepicker({locale:{format:"DD/MM/YYYY"},minDate:new Date(Math.min(...r.Bezigrad.timestamps)*1e3),maxDate:new Date(Math.max(...r.Bezigrad.timestamps)*1e3)});$('input[name="daterange"]').on("apply.daterangepicker",(t,o)=>{let n=Math.floor(o.startDate._d.getTime()/1e3),i=Math.floor(o.endDate._d.getTime()/1e3);l=-1,c=-1;for(let e=0;e<r.Bezigrad.timestamps.length;e++)if(console.log(e),l==-1&&n<=r.Bezigrad.timestamps[e]&&(l=e),c==-1&&r.Bezigrad.timestamps[e]>=i){c=e;break}d=l});const p=document.getElementById("speed");let g=50,s=!1;$("#stop").addClass("activeButton");let m=new B;m.addFeature(new f({name:"MAX",geometry:new v(h([0,0,0])),magnitude:1}));const S=[[14.517521,46.039284,"Dolenjska cesta (Strelisce)"],[14.508285,46.062497,"Bezigrad"],[14.514254,46.087035,"BS4/ I"],[14.514251,46.086728,"BS4/ II"],[14.518,46.074537,"Gosarjeva ulica"],[14.515989,46.074583,"Gosarjeva ulica II."],[14.510116,46.061856,"Gospodarsko razstavisce"],[14.503415,46.050617,"PH Kongresni trg"],[14.504961,46.056943,"Kozolec"],[14.522073,46.070205,"Kranjceva ulica"],[14.50918,46.063127,"Linhartova"],[14.516126,46.056973,"Metelkova ulica"],[14.494343,46.046584,"Mirje"],[14.501974,46.046687,"NUK II."],[14.493818,46.04236,"PH Kolezija"],[14.511568,46.05213,"Petkovskovo nabrezje II."],[14.582565,46.054942,"Pokopalisce Polje"],[14.529375,46.05125,"Povsetova ulica"],[14.508596,46.053622,"Senatorij Emona"],[14.507321,46.088504,"Slovenceva ulica"],[14.500366,46.056411,"Tivoli I."],[14.497231,46.059912,"Tivoli II."],[14.49567,46.046982,"Trg mladinskih delovnih brigad"],[14.488943,46.068388,"Trg prekomorskih brigad"],[14.528873,46.068968,"Zale I."],[14.52868,46.067131,"Zale II."],[14.526062,46.067969,"Zale III."],[14.526815,46.069497,"Zale IV."],[14.531361,46.074782,"Zale V."]];S.forEach(t=>{m.addFeature(new f({name:t[2],geometry:new v(h([t[0],t[1],0])),magnitude:0}))});const j=new k({source:m,blur:18,radius:20,weight:t=>(t.get("name"),t.get("magnitude"))}),D=new L({source:new M}),b=new P({layers:[D,j],target:"map",view:new T({center:[14.505751,46.056946],zoom:13})});let I=()=>{if(s){m.forEachFeature(o=>{let n=o.getProperties().name;if(n!=="MAX"){let i=r[n].percent_occupied[d];d<c||(s=!1,$("#play").removeClass("activeButton"),$("#stop").addClass("activeButton")),o.setProperties({magnitude:i})}}),b.render();let t=new Date(r.Bezigrad.timestamps[d]*1e3);$("#currentTime").html(`
            <p>${t.toLocaleDateString()}</p>
            <p>${t.toLocaleTimeString()}</p>
        `),d++,setTimeout(I,g)}};$("#play").click(()=>{s||(s=!0,setTimeout(I,g),$("#play").addClass("activeButton"),$("#stop").removeClass("activeButton"))});$("#stop").click(()=>{s&&(s=!1,$("#play").removeClass("activeButton"),$("#stop").addClass("activeButton"))});const y=()=>{g=500-parseInt(p.value)};p.addEventListener("input",y);p.addEventListener("speed",y);
//# sourceMappingURL=index.d8fd87b4.js.map
