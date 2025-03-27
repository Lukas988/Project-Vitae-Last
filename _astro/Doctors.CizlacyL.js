import{j as e,B as x,M as p,S as h,s as j,p as u}from"./SearchableDropdown.B676FX54.js";import{r as o}from"./index.Dy6lLLXr.js";function f({styles:s}){return e.jsx("svg",{width:"20",height:"20",className:s,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M3 6H17M6 10H14M9 14H11",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}function g({setSelectedOrder:s,setSelectedSpecialty:t}){const[a,c]=o.useState(!1),[n,l]=o.useState("asc"),[i,d]=o.useState(""),m=()=>{s(n),t(i),c(!1)};return e.jsxs(e.Fragment,{children:[e.jsx("section",{className:"w-full flex justify-end mb-6",children:e.jsxs(x,{onClick:()=>c(!0),styles:"bg-primary-500 hover:bg-primary-600 text-white",children:[e.jsx(f,{styles:"w-5 h-5 me-2 -ms-1"}),"Filtros"]})}),e.jsxs(p,{title:"Filtros",isOpen:a,onClose:()=>c(!1),children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("label",{className:"text-slate-600 font-semibold",children:"Ordenar por"}),e.jsx("div",{className:"flex space-x-4",children:["asc","desc"].map(r=>e.jsx(x,{onClick:()=>l(r),styles:`${n===r?"bg-cyan-500 text-white":"bg-slate-100 text-slate-600"}`,children:r.toUpperCase()},r))})]}),e.jsx("hr",{className:"border-gray-200 my-4"}),e.jsx("div",{children:e.jsx(h,{label:"Especialidad",options:j.map(r=>r.name),value:i,onChange:r=>d(r),placeholder:"Buscar especialidad..."})}),e.jsx("div",{className:"flex justify-end mt-6",children:e.jsx(x,{onClick:m,styles:"bg-primary-500 hover:bg-primary-600 text-white",children:"Aceptar"})})]})]})}function b({doctor:s}){const{id:t,name:a,image:c,mp:n,specialties:l,prefix:i}=s;return e.jsxs("div",{className:"bg-white p-4 rounded-lg shadow-md border border-slate-200",children:[e.jsxs("section",{className:"relative",children:[e.jsx("img",{src:c,alt:a,className:"w-full aspect-square object-cover rounded-t"}),e.jsx("span",{className:"absolute bg-cyan-500 text-white px-4 py-1 rounded-md bottom-4 left-4",children:i})]}),e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-xl font-bold",children:a}),e.jsxs("p",{className:"text-cyan-500 font-semibold",children:["MP: ",n]}),e.jsx("ul",{className:"mt-4",children:l.map((d,m)=>e.jsxs("li",{className:"flex items-center space-x-2 text-slate-600 text-sm",children:[e.jsx("span",{className:"text-cyan-500",children:"✔"}),d==="Director Médico"?e.jsx("span",{className:"font-semibold text-cyan-500",children:d}):e.jsx("span",{children:d})]},m))})]})]},t)}function y({doctors:s}){return e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:s.length>0?s.map(t=>e.jsx(b,{doctor:t},t.id)):e.jsxs("div",{className:"text-center text-slate-600 col-span-full",children:[e.jsx("h2",{className:"text-xl font-bold",children:"No hay doctores disponibles"}),e.jsx("p",{children:"Intenta con otra especialidad o revisa los filtros aplicados."})]})})}function w(){const[s,t]=o.useState("asc"),[a,c]=o.useState(""),n=o.useMemo(()=>u.filter(l=>!a||l.categories.includes(a)).sort((l,i)=>s==="asc"?l.name.localeCompare(i.name):i.name.localeCompare(l.name)),[s,a]);return e.jsxs(e.Fragment,{children:[e.jsx(g,{setSelectedOrder:t,setSelectedSpecialty:c}),e.jsx(y,{doctors:n})]})}export{w as default};
