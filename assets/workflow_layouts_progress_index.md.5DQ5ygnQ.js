import{V as y}from"./chunks/vmp_components.m-0VEKod.js";import{l as F,c as k,o as E,h as r,q as i,Q as c,f as e,a4 as C,ab as o,L as t,b as n,g as u,e as s,a9 as B}from"./chunks/framework.35Ps3iiG.js";const m={class:"flex-col-center gap-6"},A={class:"pk whitespace-nowrap"},b={class:"px-4"},v={class:"pk-item pk-right flex items-center justify-end"},D={class:"px-4"},f={__name:"index.md.DemoBlockIed058e47",setup(p){const a=F(50),l=k(()=>((a.value-10)/80*100).toFixed(1)),d=k(()=>(100-l.value).toFixed(1));return(T,h)=>(E(),r("div",m,[i("div",A,[i("div",{class:"pk-item pk-left flex items-center",style:c({width:`${a.value}%`})},[i("div",b,"支持 "+e(l.value)+"%",1)],4),i("div",v,[i("div",D,"反对 "+e(d.value)+"%",1)])]),C(i("input",{type:"range",min:"10",max:"90","onUpdate:modelValue":h[0]||(h[0]=g=>a.value=g)},null,512),[[o,a.value]])]))}},w=i("h1",{id:"进度条布局与样式",tabindex:"-1"},[s("进度条布局与样式 "),i("a",{class:"header-anchor",href:"#进度条布局与样式","aria-label":'Permalink to "进度条布局与样式"'},"​")],-1),x=i("h2",{id:"pk-投票进度条",tabindex:"-1"},[s("PK 投票进度条 "),i("a",{class:"header-anchor",href:"#pk-投票进度条","aria-label":'Permalink to "PK 投票进度条"'},"​")],-1),_=i("p",null,[s("利用 "),i("code",null,"linear-gradient"),s(" 和 "),i("code",null,"-webkit-mask"),s(" 实现的投票进度条")],-1),S=i("div",{class:"language-vue vp-adaptive-theme line-numbers-mode"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"vue"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," setup"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { ref, computed } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'vue'")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," value"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," ref"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"50"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// 进度条最大值为 80，最小值为 10，以此计算出左右两边的百分比")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," left"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," computed"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(() "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"  return"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," (((value.value "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"-"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 10"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"/"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 80"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"*"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 100"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"toFixed"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"1"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"})")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," right"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," computed"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(() "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"  return"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"100"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," -"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," left.value)."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"toFixed"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"1"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"})")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"div"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," class"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"flex-col-center gap-6"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"div"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," class"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"pk whitespace-nowrap"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"div"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," class"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"pk-item pk-left flex items-center"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," :"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"style"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"{ "),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"width"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"`${"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"value"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"}%`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," }"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"div"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," class"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"px-4"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">支持 {{ left }}%</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"div"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"div"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"div"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," class"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"pk-item pk-right flex items-center justify-end"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"div"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," class"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"px-4"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">反对 {{ right }}%</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"div"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"div"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"div"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"input"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," type"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"range"'),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," min"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"10"'),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," max"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"90"'),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," v-model"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"value"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," />")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"div"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"style"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},".pk"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"  overflow"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"hidden"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"  display"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"flex"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"  border-radius"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"40"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"px"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"  width"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"100"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"%"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},".pk-item"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"  min-width"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"min-content"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"  height"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"40"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"px"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},".pk-left"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"  background"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"linear-gradient"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"85"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"deg"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"#ff9078"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 7.57"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"%"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"#fa3440"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 80.06"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"%"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"  -webkit-mask"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"linear-gradient"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"red"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"red"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"    url"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},`"data:image/svg+xml,%3Csvg width='16' height='40' viewBox='0 0 16 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 0h-2.344a1 1 0 0 1 .957 1.287L3.855 37.148A4 4 0 0 1 .023 40H16V0z' fill='%23C6F'/%3E%3C/svg%3E"`),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"      right"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"/"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"auto"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 100"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"%"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," no-repeat"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"  -webkit-mask-composite"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": source-out;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},".pk-right"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"  flex"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"1"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"  background"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"linear-gradient"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"274"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"deg"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"#5fb6f5"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -3.81"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"%"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"#4b80ee"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 62.98"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"%"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"  -webkit-mask"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"linear-gradient"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"red"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"red"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"    url"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},`"data:image/svg+xml,%3Csvg width='16' height='40' viewBox='0 0 16 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 40h2.344a1 1 0 0 1-.957-1.287L12.145 2.85A4 4 0 0 1 15.977 0H0v40z' fill='%23C6F'/%3E%3C/svg%3E"`),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"      left"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"/"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"auto"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 100"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"%"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," no-repeat"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"  -webkit-mask-composite"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": source-out;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"style"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])]),i("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[i("span",{class:"line-number"},"1"),i("br"),i("span",{class:"line-number"},"2"),i("br"),i("span",{class:"line-number"},"3"),i("br"),i("span",{class:"line-number"},"4"),i("br"),i("span",{class:"line-number"},"5"),i("br"),i("span",{class:"line-number"},"6"),i("br"),i("span",{class:"line-number"},"7"),i("br"),i("span",{class:"line-number"},"8"),i("br"),i("span",{class:"line-number"},"9"),i("br"),i("span",{class:"line-number"},"10"),i("br"),i("span",{class:"line-number"},"11"),i("br"),i("span",{class:"line-number"},"12"),i("br"),i("span",{class:"line-number"},"13"),i("br"),i("span",{class:"line-number"},"14"),i("br"),i("span",{class:"line-number"},"15"),i("br"),i("span",{class:"line-number"},"16"),i("br"),i("span",{class:"line-number"},"17"),i("br"),i("span",{class:"line-number"},"18"),i("br"),i("span",{class:"line-number"},"19"),i("br"),i("span",{class:"line-number"},"20"),i("br"),i("span",{class:"line-number"},"21"),i("br"),i("span",{class:"line-number"},"22"),i("br"),i("span",{class:"line-number"},"23"),i("br"),i("span",{class:"line-number"},"24"),i("br"),i("span",{class:"line-number"},"25"),i("br"),i("span",{class:"line-number"},"26"),i("br"),i("span",{class:"line-number"},"27"),i("br"),i("span",{class:"line-number"},"28"),i("br"),i("span",{class:"line-number"},"29"),i("br"),i("span",{class:"line-number"},"30"),i("br"),i("span",{class:"line-number"},"31"),i("br"),i("span",{class:"line-number"},"32"),i("br"),i("span",{class:"line-number"},"33"),i("br"),i("span",{class:"line-number"},"34"),i("br"),i("span",{class:"line-number"},"35"),i("br"),i("span",{class:"line-number"},"36"),i("br"),i("span",{class:"line-number"},"37"),i("br"),i("span",{class:"line-number"},"38"),i("br"),i("span",{class:"line-number"},"39"),i("br"),i("span",{class:"line-number"},"40"),i("br"),i("span",{class:"line-number"},"41"),i("br"),i("span",{class:"line-number"},"42"),i("br"),i("span",{class:"line-number"},"43"),i("br"),i("span",{class:"line-number"},"44"),i("br"),i("span",{class:"line-number"},"45"),i("br"),i("span",{class:"line-number"},"46"),i("br"),i("span",{class:"line-number"},"47"),i("br"),i("span",{class:"line-number"},"48"),i("br"),i("span",{class:"line-number"},"49"),i("br"),i("span",{class:"line-number"},"50"),i("br"),i("span",{class:"line-number"},"51"),i("br"),i("span",{class:"line-number"},"52"),i("br"),i("span",{class:"line-number"},"53"),i("br"),i("span",{class:"line-number"},"54"),i("br"),i("span",{class:"line-number"},"55"),i("br")])],-1),P=B('<div class="info custom-block"><p class="custom-block-title">相关资料</p><ul><li><a href="https://mp.weixin.qq.com/s/QrXlbuSKyq8uQId5tT4_9A" target="_blank" rel="noreferrer">CSS mask 与 切图艺术</a></li><li><a href="https://codepen.io/xboxyan/pen/oNJeoYv" target="_blank" rel="noreferrer">CSS PK | codepen</a></li><li><a href="https://code.juejin.cn/pen/7281253921112621097" target="_blank" rel="noreferrer">CSS PK | 码上掘金</a></li></ul></div>',1),j=JSON.parse('{"title":"进度条布局与样式","description":"","frontmatter":{},"headers":[],"relativePath":"workflow/layouts/progress/index.md","filePath":"workflow/layouts/progress/index.md","lastUpdated":1710428896000}'),V={name:"workflow/layouts/progress/index.md"},z=Object.assign(V,{setup(p){return(a,l)=>(E(),r("div",null,[w,x,_,t(u(y),{lang:"vue",meta:"preview",code:"%3Cscript%20setup%3E%0Aimport%20%7B%20ref%2C%20computed%20%7D%20from%20'vue'%0A%0Aconst%20value%20%3D%20ref(50)%0A%0A%2F%2F%20%E8%BF%9B%E5%BA%A6%E6%9D%A1%E6%9C%80%E5%A4%A7%E5%80%BC%E4%B8%BA%2080%EF%BC%8C%E6%9C%80%E5%B0%8F%E5%80%BC%E4%B8%BA%2010%EF%BC%8C%E4%BB%A5%E6%AD%A4%E8%AE%A1%E7%AE%97%E5%87%BA%E5%B7%A6%E5%8F%B3%E4%B8%A4%E8%BE%B9%E7%9A%84%E7%99%BE%E5%88%86%E6%AF%94%0Aconst%20left%20%3D%20computed(()%20%3D%3E%20%7B%0A%20%20return%20(((value.value%20-%2010)%20%2F%2080)%20*%20100).toFixed(1)%0A%7D)%0Aconst%20right%20%3D%20computed(()%20%3D%3E%20%7B%0A%20%20return%20(100%20-%20left.value).toFixed(1)%0A%7D)%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cdiv%20class%3D%22flex-col-center%20gap-6%22%3E%0A%20%20%20%20%3Cdiv%20class%3D%22pk%20whitespace-nowrap%22%3E%0A%20%20%20%20%20%20%3Cdiv%20class%3D%22pk-item%20pk-left%20flex%20items-center%22%20%3Astyle%3D%22%7B%20width%3A%20%60%24%7Bvalue%7D%25%60%20%7D%22%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22px-4%22%3E%E6%94%AF%E6%8C%81%20%7B%7B%20left%20%7D%7D%25%3C%2Fdiv%3E%0A%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%3Cdiv%20class%3D%22pk-item%20pk-right%20flex%20items-center%20justify-end%22%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22px-4%22%3E%E5%8F%8D%E5%AF%B9%20%7B%7B%20right%20%7D%7D%25%3C%2Fdiv%3E%0A%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3Cinput%20type%3D%22range%22%20min%3D%2210%22%20max%3D%2290%22%20v-model%3D%22value%22%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cstyle%3E%0A.pk%20%7B%0A%20%20overflow%3A%20hidden%3B%0A%20%20display%3A%20flex%3B%0A%20%20border-radius%3A%2040px%3B%0A%20%20width%3A%20100%25%3B%0A%7D%0A.pk-item%20%7B%0A%20%20min-width%3A%20min-content%3B%0A%20%20height%3A%2040px%3B%0A%7D%0A.pk-left%20%7B%0A%20%20background%3A%20linear-gradient(85deg%2C%20%23ff9078%207.57%25%2C%20%23fa3440%2080.06%25)%3B%0A%20%20-webkit-mask%3A%20linear-gradient(red%2C%20red)%2C%0A%20%20%20%20url(%22data%3Aimage%2Fsvg%2Bxml%2C%253Csvg%20width%3D'16'%20height%3D'40'%20viewBox%3D'0%200%2016%2040'%20fill%3D'none'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%253E%253Cpath%20fill-rule%3D'evenodd'%20clip-rule%3D'evenodd'%20d%3D'M16%200h-2.344a1%201%200%200%201%20.957%201.287L3.855%2037.148A4%204%200%200%201%20.023%2040H16V0z'%20fill%3D'%2523C6F'%2F%253E%253C%2Fsvg%253E%22)%0A%20%20%20%20%20%20right%2Fauto%20100%25%20no-repeat%3B%0A%20%20-webkit-mask-composite%3A%20source-out%3B%0A%7D%0A.pk-right%20%7B%0A%20%20flex%3A%201%3B%0A%20%20background%3A%20linear-gradient(274deg%2C%20%235fb6f5%20-3.81%25%2C%20%234b80ee%2062.98%25)%3B%0A%20%20-webkit-mask%3A%20linear-gradient(red%2C%20red)%2C%0A%20%20%20%20url(%22data%3Aimage%2Fsvg%2Bxml%2C%253Csvg%20width%3D'16'%20height%3D'40'%20viewBox%3D'0%200%2016%2040'%20fill%3D'none'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%253E%253Cpath%20fill-rule%3D'evenodd'%20clip-rule%3D'evenodd'%20d%3D'M0%2040h2.344a1%201%200%200%201-.957-1.287L12.145%202.85A4%204%200%200%201%2015.977%200H0v40z'%20fill%3D'%2523C6F'%2F%253E%253C%2Fsvg%253E%22)%0A%20%20%20%20%20%20left%2Fauto%20100%25%20no-repeat%3B%0A%20%20-webkit-mask-composite%3A%20source-out%3B%0A%7D%0A%3C%2Fstyle%3E",component:"CodePreview"},{code:n(()=>[S]),default:n(()=>[t(f)]),_:1}),P]))}});export{j as __pageData,z as default};
