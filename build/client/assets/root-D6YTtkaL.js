import{o as u,p as y,q as f,t as g,h as i,_ as x,n as e,M as w,L as S,O as j,S as M}from"./components-JNPPpeZA.js";/**
 * @remix-run/react v2.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let a="positions";function k({getKey:o,...l}){let{isSpaMode:c}=u(),r=y(),p=f();g({getKey:o,storageKey:a});let h=i.useMemo(()=>{if(!o)return null;let t=o(r,p);return t!==r.key?t:null},[]);if(c)return null;let m=((t,d)=>{if(!window.history.state||!window.history.state.key){let s=Math.random().toString(32).slice(2);window.history.replaceState({key:s},"")}try{let n=JSON.parse(sessionStorage.getItem(t)||"{}")[d||window.history.state.key];typeof n=="number"&&window.scrollTo(0,n)}catch(s){console.error(s),sessionStorage.removeItem(t)}}).toString();return i.createElement("script",x({},l,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${m})(${JSON.stringify(a)}, ${JSON.stringify(h)})`}}))}const R="/assets/tailwind-CPjzpRr0.css",b=()=>[{rel:"stylesheet",href:R},{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"}],L=()=>[{title:"Biccas — Remix Landing"},{name:"description",content:"A responsive landing page built with Remix, Tailwind and Framer Motion."}];function I(){return e.jsxs("html",{lang:"en",children:[e.jsxs("head",{children:[e.jsx(w,{}),e.jsx(S,{})]}),e.jsxs("body",{className:"font-sans bg-gradient-to-b from-emerald-50/60 to-white",children:[e.jsx(j,{}),e.jsx(k,{}),e.jsx(M,{})]})]})}export{I as default,b as links,L as meta};
