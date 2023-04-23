import{_ as u,c as J,s as S,a as v,u as D,r as T,b as P,j as A,d as M,e as N,g as Z,f as U,h as R,i as s,k as t}from"./index-d08647f4.js";import{T as n}from"./Typography-6b1f831a.js";const Y=["className","component","disableGutters","fixed","maxWidth","classes"],z=J(),E=S("div",{name:"MuiContainer",slot:"Root",overridesResolver:(o,r)=>{const{ownerState:a}=o;return[r.root,r[`maxWidth${v(String(a.maxWidth))}`],a.fixed&&r.fixed,a.disableGutters&&r.disableGutters]}}),I=o=>D({props:o,name:"MuiContainer",defaultTheme:z}),K=(o,r)=>{const a=d=>Z(r,d),{classes:f,fixed:b,disableGutters:w,maxWidth:e}=o,i={root:["root",e&&`maxWidth${v(String(e))}`,b&&"fixed",w&&"disableGutters"]};return N(i,a,f)};function V(o={}){const{createStyledComponent:r=E,useThemeProps:a=I,componentName:f="MuiContainer"}=o,b=r(({theme:e,ownerState:i})=>u({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!i.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}),({theme:e,ownerState:i})=>i.fixed&&Object.keys(e.breakpoints.values).reduce((d,c)=>{const p=c,l=e.breakpoints.values[p];return l!==0&&(d[e.breakpoints.up(p)]={maxWidth:`${l}${e.breakpoints.unit}`}),d},{}),({theme:e,ownerState:i})=>u({},i.maxWidth==="xs"&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},i.maxWidth&&i.maxWidth!=="xs"&&{[e.breakpoints.up(i.maxWidth)]:{maxWidth:`${e.breakpoints.values[i.maxWidth]}${e.breakpoints.unit}`}}));return T.forwardRef(function(i,d){const c=a(i),{className:p,component:l="div",disableGutters:B=!1,fixed:F=!1,maxWidth:G="lg"}=c,O=P(c,Y),C=u({},c,{component:l,disableGutters:B,fixed:F,maxWidth:G}),j=K(C,f);return A(b,u({as:l,ownerState:C,className:M(j.root,p),ref:d},O))})}const L=V({createStyledComponent:U("div",{name:"MuiContainer",slot:"Root",overridesResolver:(o,r)=>{const{ownerState:a}=o;return[r.root,r[`maxWidth${v(String(a.maxWidth))}`],a.fixed&&r.fixed,a.disableGutters&&r.disableGutters]}}),useThemeProps:o=>R({props:o,name:"MuiContainer"})}),H=L,Q=s.section`
  padding-top: 6rem;
  width: 100%;
  min-height: 100vh;
  background-color: #f8f8f8;
  overflow: hidden;
`,X=s.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  margin: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,y=s.div`
  padding: 2rem;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease-in-out;
  &:first-child {
    background-color: #e93030;
    color: #fff;
  }
  &:hover {
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0.1);
  }
`,q=s.div`
  grid-column: 1 / span 2;
  width: 100%;
  min-height: 400px;
  @media screen and (max-width: 768px) {
    grid-column: auto;
  }
`,$=s.div`
  margin: auto auto;
  max-width: 711px;
  min-width: 300px;
  height: 100%;
`,k=s.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`,W=s.div`
  width: 45px;
  height: auto;
`,_=s.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  padding-bottom: 2rem;
  border: 1px solid #c1c0c0;
  border-radius: 0.5rem;
  position: relative;
  > h2 {
    color: #303030;
    text-align: center;
    margin: 1rem;
    font-weight: 500;
  }
`,m=s.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${o=>o.color||"#ccc"};
  width: 50px;
  height: 50px;
  border-radius: 0.5rem;
  &::after {
  }
`,h=s.div`
  max-width: 300px;
  min-height: 180px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`,g=s.div`
  content: "";
  display: block;
  width: 100%;
  border-bottom: 1px solid #ccc;
`,x=s.div`
  text-align: center;
  height: 90px;
`,AA=s.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 2rem;
  gap: 1.5rem;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
  }
`,eA=Q,tA="data:image/png;base64,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",oA="/assets/easyIcon-3305eab0.png",rA=()=>t(_,{children:[A(n,{variant:"h2",children:"How it's used"}),t(AA,{children:[t(h,{children:[A(m,{color:"#e0840b",children:"1"}),A(g,{}),t(x,{children:[A(n,{variant:"h6",children:"Focus Duration"}),A("p",{children:"Use slider to define your focus session"})]})]}),t(h,{children:[A(m,{color:"#E45C53",children:"2"}),A(g,{}),t(x,{children:[A(n,{variant:"h6",children:"Number of Sessions"}),A("p",{children:"Decide how many times you want to have a focus session"})]})]}),t(h,{children:[A(m,{color:"#82558D",children:"3"}),A(g,{}),t(x,{children:[A(n,{variant:"h6",children:"Duration of Break"}),A("p",{children:"Pick the duration of the break between focus sessions"})]})]}),t(h,{children:[A(m,{color:"#FFEACD",children:"4"}),A(g,{}),t(x,{children:[A(n,{variant:"h6",children:"Select Your Tag"}),A("p",{children:"Pick the tag you want and hit focus"})]})]})]})]}),iA=rA,nA=()=>A(eA,{children:t(H,{children:[A(iA,{}),t(X,{children:[t(y,{children:[t(k,{children:[A(W,{children:A("img",{src:oA,alt:"A progress icon"})}),A(n,{variant:"h4",children:"Easy to use"})]}),A(n,{children:"Our Pomodoro app is designed with a simple, uncluttered interface that's easy to navigate. With intuitive controls, clear instructions, and customizable settings, users can start using the Pomodoro technique with ease. Available on multiple platforms for convenience."})]}),t(y,{children:[t(k,{children:[A(W,{children:A("img",{src:tA,alt:"A progress icon"})}),A(n,{variant:"h4",children:"See your progress"})]}),A(n,{children:"Our Pomodoro app helps you track your progress and stay motivated. The app provides real-time stats on completed tasks, session lengths, and break times, so you can see how much you've accomplished. With detailed reports and visual graphs, you can easily track your progress over time and stay motivated to reach your goals."})]}),A(q,{children:A($,{children:A("iframe",{width:"100%",height:"100%",src:"https://www.youtube.com/embed/uApO20W43Gg",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})})]})]})});export{nA as default};
