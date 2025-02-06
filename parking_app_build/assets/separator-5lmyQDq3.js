import{b as p,d as $,j as u,f as v}from"./index-B53p_Gm4.js";import{r as i}from"./router-DLL89Qev.js";const c="horizontal",x=["horizontal","vertical"],s=i.forwardRef((r,e)=>{const{decorative:o,orientation:t=c,...a}=r,n=d(t)?t:c,l=o?{role:"none"}:{"aria-orientation":n==="vertical"?n:void 0,role:"separator"};return i.createElement(p.div,$({"data-orientation":n},l,a,{ref:e}))});s.propTypes={orientation(r,e,o){const t=r[e],a=String(t);return t&&!d(t)?new Error(m(a,o)):null}};function m(r,e){return`Invalid prop \`orientation\` of value \`${r}\` supplied to \`${e}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${c}\`.`}function d(r){return x.includes(r)}const f=s,h=i.forwardRef(({className:r,orientation:e="horizontal",decorative:o=!0,...t},a)=>u.jsx(f,{ref:a,decorative:o,orientation:e,className:v("shrink-0 bg-zinc-200 dark:bg-zinc-800",e==="horizontal"?"h-[1px] w-full":"h-full w-[1px]",r),...t}));h.displayName=f.displayName;export{h as S};
