(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8662],{8955:function(e,n,t){"use strict";t.d(n,{G7:function(){return y},ZP:function(){return P},u$:function(){return j}});var r=t(75582),i=t(82394),u=t(26304),o=t(90299),l=t(9134),c=t(24138),a=t(38276),s=t(30160),d=t(75499),p=t(70515),f=t(16488),v=t(42122),h=t(28598),b=["height","heightOffset","pipeline","selectedRun","selectedTab","setSelectedTab"];function g(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var j=44,O={uuid:"Run details"},x={uuid:"Dependency tree"},y=[x,O];function P(e){var n=e.height,t=e.heightOffset,i=e.pipeline,g=e.selectedRun,P=e.selectedTab,k=e.setSelectedTab,Z=m({},(0,u.Z)(e,b));g?Z.blockStatus=(0,f.IJ)(null==g?void 0:g.block_runs):Z.noStatus=!0;var _=(0,v.Kn)(null==g?void 0:g.variables)?m({},null==g?void 0:g.variables):(null==g?void 0:g.variables)||{},w=null==g?void 0:g.event_variables;if(w&&(0,v.Kn)(w)&&!(0,v.Qr)(w))if((0,v.Kn)(_)&&_.hasOwnProperty("event")){var T=(0,v.Kn)(_.event)?_.event:{};_.event=m(m({},T),w)}else _.event=m({},w);var S=[];_&&JSON.stringify(_,null,2).split("\n").forEach((function(e){S.push("    ".concat(e))}));var E=g&&[["Run ID",null==g?void 0:g.id],["Variables",(0,h.jsx)(l.Z,{language:"json",small:!0,source:S.join("\n")},"variable_value")]],I=g&&(0,h.jsx)(a.Z,{pb:p.cd,px:p.cd,children:(0,h.jsx)(d.Z,{alignTop:!0,columnFlex:[null,1],columnMaxWidth:function(e){return 1===e?"100px":null},rows:E.map((function(e,n){var t=(0,r.Z)(e,2),i=t[0],u=t[1];return[(0,h.jsx)(s.ZP,{monospace:!0,muted:!0,children:i},"key_".concat(n)),(0,h.jsx)(s.ZP,{monospace:!0,textOverflow:!0,children:u},"val_".concat(n))]})),uuid:"LogDetail"})}),D=P&&k;return(0,h.jsxs)(h.Fragment,{children:[D&&(0,h.jsx)(o.Z,{onClickTab:k,selectedTabUUID:null==P?void 0:P.uuid,tabs:y,underlineStyle:!0}),(!D||x.uuid===(null==P?void 0:P.uuid))&&(0,h.jsx)(c.ZP,m(m({},Z),{},{height:n,heightOffset:(t||0)+(D?j:0),pipeline:i})),O.uuid===(null==P?void 0:P.uuid)&&I]})}},66909:function(e,n,t){"use strict";t.d(n,{Eh:function(){return a},t0:function(){return s}});var r=t(9518),i=t(2842),u=t(4982),o=t(61896),l=t(47041),c=t(70515),a=(c.iI,u.O$+3*c.iI+o.dN),s=r.default.div.withConfig({displayName:"indexstyle__SidekickContainerStyle",componentId:"sc-15ofupc-0"})([""," overflow:auto;position:absolute;width:100%;"," ",""],l.w5,(function(e){return"\n    height: calc(100vh - ".concat(i.uX,"px - ").concat(e.heightOffset,"px);\n  ")}),(function(e){return e.overflowHidden&&"\n    overflow: hidden;\n  "}));r.default.div.withConfig({displayName:"indexstyle__PaddingContainerStyle",componentId:"sc-15ofupc-1"})(["padding:","px;",""],2*c.iI,(function(e){return e.noPadding&&"\n    padding: 0;\n  "}))},16488:function(e,n,t){"use strict";t.d(n,{IJ:function(){return h},M8:function(){return Z},Uc:function(){return O},XM:function(){return k},_U:function(){return v},eI:function(){return j},gU:function(){return y},lO:function(){return E},ri:function(){return g},tL:function(){return x},vJ:function(){return P},xH:function(){return m}});var r,i=t(82394),u=t(92083),o=t.n(u),l=t(3917),c=t(4383),a=t(30229),s=t(42122),d=t(86735);function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var v=function(e){return!!e&&!Object.values(a.U5).includes(e)};function h(e){return null==e?void 0:e.reduce((function(e,n){var t=n.block_uuid,r=n.completed_at,u=n.started_at,l=n.status,c=null;u&&r&&(c=o()(r).valueOf()-o()(u).valueOf());return f(f({},e),{},(0,i.Z)({},t,{runtime:c,status:l}))}),{})}var b,g=function(e){var n=[{description:function(){return"This pipeline will run continuously on an interval or just once."},label:function(){return"Schedule"},uuid:a.Xm.TIME},{description:function(){return"This pipeline will run when a specific event occurs."},label:function(){return"Event"},uuid:a.Xm.EVENT},{description:function(){return"Run this pipeline when you make an API call."},label:function(){return"API"},uuid:a.Xm.API}];return e?n.slice(0,1):n};function m(e){var n=(0,s.gR)(e,[a.gm.INTERVAL,a.gm.TYPE]),t=e[a.gm.INTERVAL];t&&(n["schedule_interval[]"]=encodeURIComponent(t));var r=e[a.gm.TYPE];return r&&(n["schedule_type[]"]=r),n}function j(e){return e?new Date(o()(e).valueOf()):null}function O(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return n?(0,l.XG)(e,n,t):function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if("string"!=typeof e)return e;var t=e.split("+")[0];return o()(j(t)).format(n||l.Nx)}(e,t)}!function(e){e.DAY="day",e.HOUR="hour",e.MINUTE="minute",e.SECOND="second"}(b||(b={}));var x=(r={},(0,i.Z)(r,b.DAY,86400),(0,i.Z)(r,b.HOUR,3600),(0,i.Z)(r,b.MINUTE,60),(0,i.Z)(r,b.SECOND,1),r);function y(e){var n=b.SECOND,t=e;return e%86400==0?(t/=86400,n=b.DAY):e%3600==0?(t/=3600,n=b.HOUR):e%60==0&&(t/=60,n=b.MINUTE),{time:t,unit:n}}function P(e,n){return e*x[n]}function k(e,n,t){var r,i=o()(e);return i.set("hour",+(null==n?void 0:n.hour)||0),i.set("minute",+(null==n?void 0:n.minute)||0),i.set("second",0),r=i.format(l.TD),null!=t&&t.includeSeconds&&(r=r.concat(":00")),null!=t&&t.localTimezone&&(r=i.format(l.lE),null!=t&&t.convertToUtc&&(r=(0,l.d$)(r,{includeSeconds:null==t?void 0:t.includeSeconds,utcFormat:!0}))),r}function Z(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t="",r=(0,c.XF)();return n?t="".concat(r,"/api/pipeline_schedules/").concat(null==e?void 0:e.id,"/api_trigger"):(t="".concat(r,"/api/pipeline_schedules/").concat(null==e?void 0:e.id,"/pipeline_runs"),null!=e&&e.token&&(t="".concat(t,"/").concat(e.token))),t}function _(e,n,t){return e.match(/[*,-/]/)?{additionalOffset:0,cronValue:e}:function(e,n,t){var r=t.indexOf(e),i=0;if(n<0)for(var u=0;u>n;u--)0===r?(r=t.length-1,i-=1):r-=1;else if(n>0)for(var o=0;o<n;o++)r===t.length-1?(r=0,i+=1):r+=1;var l="number"==typeof t[r]?t[r]:e;return{additionalOffset:i,cronValue:String(l)}}(+e,n,t)}var w=(0,d.m5)(60),T=(0,d.m5)(24),S=(0,l.Cs)();function E(e,n){if(!e)return e;var t=o()().local().format("Z"),r=t.split(":"),i="-"===t[0],u=3===r[0].length?Number(r[0].slice(1)):Number(r[0]),l=Number(r[1]);(i&&!n||!i&&n)&&(u=-u,l=-l);var c=e.split(" "),a=c[0],s=c[1],d=c[2],p=_(a,l,w),f=_(s,u+p.additionalOffset,T);if(c[0]=p.cronValue,c[1]=f.cronValue,0!==(null==f?void 0:f.additionalOffset)){var v=_(d,f.additionalOffset,S);c[2]=v.cronValue}return c.join(" ")}},55072:function(e,n,t){"use strict";t.d(n,{Et:function(){return p},Q:function(){return d}});t(82684);var r=t(71180),i=t(55485),u=t(38276),o=t(31748),l=t(72473),c=t(79633),a=t(70515),s=t(28598),d=30,p=9;n.ZP=function(e){var n=e.page,t=e.maxPages,d=e.onUpdate,p=e.totalPages,f=[],v=t;if(v>p)f=Array.from({length:p},(function(e,n){return n}));else{var h=Math.floor(v/2),b=n-h;n+h>=p?(b=p-v+2,v-=2):n-h<=0?(b=0,v-=2):(v-=4,b=n-Math.floor(v/2)),f=Array.from({length:v},(function(e,n){return n+b}))}return(0,s.jsx)(s.Fragment,{children:p>0&&(0,s.jsxs)(i.ZP,{alignItems:"center",children:[(0,s.jsx)(r.ZP,{disabled:0===n,onClick:function(){return d(n-1)},children:(0,s.jsx)(l.PaginateArrowLeft,{size:1.5*a.iI,stroke:o.Av})}),!f.includes(0)&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(u.Z,{ml:1,children:(0,s.jsx)(r.ZP,{borderLess:!0,noBackground:!0,onClick:function(){return d(0)},children:1})},0),!f.includes(1)&&(0,s.jsx)(u.Z,{ml:1,children:(0,s.jsx)(r.ZP,{noBackground:!0,noPadding:!0,notClickable:!0,children:"..."})},0)]}),f.map((function(e){return(0,s.jsx)(u.Z,{ml:1,children:(0,s.jsx)(r.ZP,{backgroundColor:e===n&&c.a$,borderLess:!0,noBackground:!0,notClickable:e===n,onClick:function(){e!==n&&d(e)},children:e+1})},e)})),!f.includes(p-1)&&(0,s.jsxs)(s.Fragment,{children:[!f.includes(p-2)&&(0,s.jsx)(u.Z,{ml:1,children:(0,s.jsx)(r.ZP,{noBackground:!0,noPadding:!0,notClickable:!0,children:"..."})},0),(0,s.jsx)(u.Z,{ml:1,children:(0,s.jsx)(r.ZP,{borderLess:!0,noBackground:!0,onClick:function(){return d(p-1)},children:p})},p-1)]}),(0,s.jsx)(u.Z,{ml:1}),(0,s.jsx)(r.ZP,{disabled:n===p-1,onClick:function(){return d(n+1)},children:(0,s.jsx)(l.PaginateArrowRight,{size:1.5*a.iI,stroke:o.Av})})]})})}},9134:function(e,n,t){"use strict";var r=t(82684),i=t(20433),u=t(31811),o=t(9518),l=t(65292),c=t(44897),a=t(95363),s=t(70515),d=t(28598);n.Z=function(e){var n=e.language,t=e.maxWidth,p=e.showLineNumbers,f=e.small,v=e.source,h=e.wrapLines,b=(0,r.useContext)(o.ThemeContext);function g(e){var r=e.value;return(0,d.jsx)(u.Z,{customStyle:{backgroundColor:(b.background||c.Z.background).popup,border:"none",borderRadius:"none",boxShadow:"none",fontFamily:a.Vp,fontSize:f?12:14,marginBottom:0,marginTop:0,maxWidth:t,paddingBottom:2*s.iI,paddingTop:2*s.iI},language:n,lineNumberStyle:{color:(b.content||c.Z.content).muted},showLineNumbers:p,style:l._4,useInlineStyles:!0,wrapLines:h,children:r})}return(0,d.jsx)(i.D,{components:{code:function(e){var n=e.children;return(0,d.jsx)(g,{value:n})}},children:v})}},14532:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return ce}});var r=t(77837),i=t(75582),u=t(82394),o=t(38860),l=t.n(o),c=t(82684),a=t(83455),s=t(34376),d=t(23192),p=t(71180),f=t(15338),v=t(97618),h=t(55485),b=t(85854),g=t(55072),m=t(75457),j=t(44265),O=t(57653),x=t(93808),y=t(38276),P=t(4190),k=t(30160),Z=t(35686),_=t(21831),w=t(26304),T=t(90299),S=t(93859),E=t(24138),I=t(72858),D=t.n(I),C=t(88494),N=t(28256),R=t(48339),M=t(46684),U=t(70515),L=t(66909),A=t(8955),B=t(16488),G=t(81728),F=t(86735),H=t(28598),X=["blockRuns","blocks","blocksOverride","columns","dataType","height","heightOffset","loadingData","outputs","pipeline","renderColumnHeader","rows","selectedRun","selectedTab","setSelectedTab","textData","width"];function V(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function z(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?V(Object(t),!0).forEach((function(n){(0,u.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):V(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var J={uuid:"Dependency tree"},Y={uuid:"Block output"},K=[Y,J],$=40;var q=t(28795),W=t(81655),Q=t(3917),ee=t(72619),ne=t(95924),te=t(69419),re=t(70320);function ie(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function ue(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ie(Object(t),!0).forEach((function(n){(0,u.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ie(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var oe=100;function le(e){var n=e.pipeline,t=e.pipelineRun,r=(0,re.qB)(),u=(0,s.useRouter)(),o=(0,te.iV)(),l=null!=o&&o.page?o.page:0,x=(0,c.useState)(null),I=x[0],V=x[1],ie=(0,c.useState)(K[0]),le=ie[0],ce=ie[1],ae=(0,c.useState)(null),se=ae[0],de=ae[1],pe=(0,c.useState)(null),fe=pe[0],ve=pe[1],he=(0,c.useMemo)((function(){return!!fe&&fe!==j.VO.RUNNING}),[fe]),be=n.uuid,ge=Z.ZP.pipelines.detail(be,{includes_content:!1,includes_outputs:!1},{revalidateOnFocus:!1}).data,me=(0,c.useMemo)((function(){return ue(ue({},null==ge?void 0:ge.pipeline),{},{uuid:be})}),[ge,be]),je=Z.ZP.pipeline_runs.detail(t.id,{_format:"with_basic_details"},{refreshInterval:he?null:3e3,revalidateOnFocus:!0}),Oe=je.data,xe=je.mutate,ye=(0,c.useMemo)((function(){return(null==Oe?void 0:Oe.pipeline_run)||{}}),[Oe]),Pe=ye.execution_date,ke=ye.id,Ze=ye.status,_e={_limit:oe,_offset:l*oe,pipeline_run_id:ke},we=null==o?void 0:o[W.lG.SORT_COL_IDX],Te=null==o?void 0:o[W.lG.SORT_DIRECTION];if(we){var Se=d.fi[we],Ee=Te||W.sh.ASC;_e.order_by="".concat(Se,"%20").concat(Ee)}(0,c.useEffect)((function(){fe!==Ze&&ve(Ze)}),[fe,Ze]);var Ie=Z.ZP.block_runs.list(_e,{refreshInterval:he?null:5e3},{pauseFetch:null==ke}),De=Ie.data,Ce=Ie.mutate,Ne=(0,c.useMemo)((function(){return(null==De?void 0:De.block_runs)||[]}),[De]),Re=Ne.map((function(e){return e.block_uuid})),Me=(0,c.useMemo)((function(){return Re}),[Re]),Ue=Z.ZP.blocks.pipeline_runs.list(null==t?void 0:t.id,{_limit:oe,block_uuid:Me},{refreshInterval:he?null:5e3}).data,Le=(0,a.Db)(Z.ZP.pipeline_runs.useUpdate(ke),{onSuccess:function(e){return(0,ee.wD)(e,{callback:function(e){e.pipeline_run;V(null),null==Ce||Ce(),xe()},onErrorCallback:function(e,n){return de({errors:n,response:e})}})}}),Ae=(0,i.Z)(Le,2),Be=Ae[0],Ge=Ae[1].isLoading,Fe=Z.ZP.outputs.block_runs.list(null==I?void 0:I.id),He=Fe.data,Xe=Fe.loading;(0,c.useEffect)((function(){I||(null==le?void 0:le.uuid)!==Y.uuid||ce(J)}),[I,null==le?void 0:le.uuid]);var Ve=(0,c.useMemo)((function(){return(0,H.jsx)(d.ZP,{blockRuns:Ne,onClickRow:function(e){V((function(n){var t=Ne[e],r=(null==n?void 0:n.id)!==t.id?t:null;return r&&ce((function(e){return e!==Y?Y:e})),r}))},pipeline:me,selectedRun:I,setErrors:de,sortableColumnIndexes:d.lG})}),[Ne,me,I]),ze=(null==me?void 0:me.type)!==O.qL.STREAMING&&fe&&fe!==j.VO.COMPLETED,Je=((null==me?void 0:me.type)===O.qL.PYTHON||(null==me?void 0:me.type)===O.qL.INTEGRATION)&&I&&j.Az.includes(fe),Ye=(0,c.useMemo)((function(){var e;return(null==De||null===(e=De.metadata)||void 0===e?void 0:e.count)||[]}),[De]),Ke=(0,c.useMemo)((function(){return(0,H.jsx)(y.Z,{p:2,children:(0,H.jsx)(g.ZP,{maxPages:g.Et,onUpdate:function(e){var n=Number(e),t=ue(ue({},o),{},{page:n>=0?n:0});V(null),u.push("/pipelines/[pipeline]/runs/[run]","/pipelines/".concat(be,"/runs/").concat(ke,"?").concat((0,te.uM)(t)))},page:Number(l),totalPages:Math.ceil(Ye/oe)})})}),[l,ke,be,o,u,Ye]),$e=(0,c.useCallback)((function(e){return function(e){var n,t,r,u=e.blockRuns,o=e.blocks,l=e.blocksOverride,c=(e.columns,e.dataType,e.height),a=e.heightOffset,s=e.loadingData,d=e.outputs,p=e.pipeline,v=e.renderColumnHeader,b=(e.rows,e.selectedRun),g=e.selectedTab,m=e.setSelectedTab,j=(e.textData,e.width),O=z({},(0,w.Z)(e,X));O.blockStatus=(0,B.IJ)(u);var x=(0,F.HK)(o,(function(e){return e.uuid})),Z=(0,F.HK)(l,(function(e){return e.uuid})),I=z(z({},x),Z),V=null==I?void 0:I[null==b||null===(n=b.block_uuid)||void 0===n||null===(t=n.split)||void 0===t||null===(r=t.call(n,":"))||void 0===r?void 0:r[0]],q=[],W=[],Q=(0,G.bH)();if(!s){var ee,ne={};null==d||d.forEach((function(e){var n=e.type;ne[n]||(ne[n]={outputs:[],priority:Object.keys(ne).length}),ne[n].outputs.push(e)})),null===(ee=(0,F.YC)(Object.entries(ne),(function(e){var n=(0,i.Z)(e,2);return n[0],n[1].priority})))||void 0===ee||ee.forEach((function(e,n){var t=(0,i.Z)(e,2),r=t[0],u=t[1].outputs,o=[];null==u||u.forEach((function(e,t){var i=e.sample_data,l=e.text_data,s=e.type,d=(0,H.jsx)(y.Z,{ml:2,children:(0,H.jsx)(k.ZP,{children:"This block run has no output."})},"output-empty-".concat(n,"-").concat(t)),p=(0,H.jsx)("div",{});if(s)p=(0,H.jsx)(N.Z,{block:V,contained:!0,containerWidth:j,disableSpacingBetweenGroups:!0,first:0===t,height:c-(a+90)-102,index:t,last:t===u.length-1,normalPadding:!0,output:e,selected:!0},"output-".concat(t));else if(s===R.Gi.TABLE){var f=((null==i?void 0:i.columns)||[]).slice(0,$),h=(null==i?void 0:i.rows)||[];p=h&&(null==h?void 0:h.length)>=1?(0,H.jsx)(S.Z,{columnHeaderHeight:v?L.Eh:0,columns:f,height:c-a-90,noBorderBottom:!0,noBorderLeft:!0,noBorderRight:!0,renderColumnHeader:v,rows:h},"output-table-".concat(n,"-").concat(t)):d}else if(R.Gi.IMAGE_PNG===s&&l)p=(0,H.jsx)("div",{style:{backgroundColor:"white",maxHeight:c-a-90,overflow:"auto"},children:(0,H.jsx)("img",{alt:"Image from code output",src:"data:image/png;base64, ".concat(l)})});else if(R.Gi.TEXT_HTML===s&&l){var b=String((0,G.un)(l));p=(0,H.jsx)(C.T5,{contained:!0,normalPadding:!0,children:(0,H.jsx)(C.wx,{monospace:!0,children:(0,H.jsx)(D(),{html:l})})},b)}else{var g=(0,G.Pb)(l)?JSON.stringify(JSON.parse(l),null,2):l;p=null!=l?(0,H.jsx)(y.Z,{ml:2,children:(0,H.jsx)(k.ZP,{monospace:!0,children:(0,H.jsx)("pre",{children:g})})},"output-text-".concat(n,"-").concat(t)):d}var m=Q[n];R.Gi.TEXT===r?(o.push(p),0===t&&W.push({uuid:"Block output ".concat(t+1).concat(m)})):(q.push(p),W.push({uuid:"Block output ".concat(t+1).concat(m)}))})),R.Gi.TEXT===r&&q.push(o)}))}var te=q,re=W,ie=K;(null==re?void 0:re.length)>=2&&(ie=[Y].concat((0,_.Z)(re.slice(1)),[J]));var ue=g&&m,oe=te[ie.findIndex((function(e){return e.uuid===(null==g?void 0:g.uuid)}))];return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)("div",{style:{position:"fixed",top:M.Mz},children:ue&&(0,H.jsx)(H.Fragment,{children:(0,H.jsx)(y.Z,{py:0,children:(0,H.jsx)(T.Z,{onClickTab:m,regularSizeText:!0,selectedTabUUID:null==g?void 0:g.uuid,tabs:b?ie:[J],underlineStyle:!0})})})}),(0,H.jsxs)("div",{style:{position:"relative",top:A.u$},children:[ue&&(0,H.jsx)(f.Z,{light:!0}),(!b||J.uuid===(null==g?void 0:g.uuid))&&(0,H.jsx)(E.ZP,z(z({},O),{},{blocksOverride:l,enablePorts:!1,height:c,heightOffset:(a||0)+(ue?A.u$+1:0),pipeline:p})),b&&g&&J.uuid!==(null==g?void 0:g.uuid)&&(0,H.jsxs)(H.Fragment,{children:[s&&(0,H.jsx)(y.Z,{mt:2,children:(0,H.jsx)(h.ZP,{alignItems:"center",fullWidth:!0,justifyContent:"center",children:(0,H.jsx)(P.Z,{color:"white",large:!0})})}),!s&&(0,H.jsx)(y.Z,{py:U.cd,children:oe})]})]})]})}(ue(ue({},e),{},{blocks:null==Ue?void 0:Ue.blocks,blockRuns:Ne,blocksOverride:Ye<=oe?null==Ue?void 0:Ue.blocks:null,loadingData:Xe,outputs:null==He?void 0:He.outputs,selectedRun:I,selectedTab:le,setSelectedTab:ce,showDynamicBlocks:!0}))}),[Ne,Ue,He,Xe,I,le,ce,Ye]);return(0,H.jsxs)(m.Z,{breadcrumbs:[{label:function(){return"Runs"},linkProps:{as:"/pipelines/".concat(be,"/runs"),href:"/pipelines/[pipeline]/runs"}},{label:function(){return r?(0,Q.XG)(Pe,r):Pe}}],buildSidekick:$e,errors:se,pageName:q.M.RUNS,pipeline:me,setErrors:de,subheader:(ze||Je)&&(0,H.jsxs)(h.ZP,{alignItems:"center",children:[j.BF.includes(fe)&&(0,H.jsxs)(v.Z,{children:[(0,H.jsx)(k.ZP,{bold:!0,default:!0,large:!0,children:"Pipeline is running"}),(0,H.jsx)(y.Z,{mr:1}),(0,H.jsx)(P.Z,{inverted:!0}),(0,H.jsx)(y.Z,{mr:2})]}),ze&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(p.ZP,{danger:!0,loading:Ge,onClick:function(e){(0,ne.j)(e),Be({pipeline_run:{pipeline_run_action:"retry_blocks"}})},outline:!0,children:"Retry incomplete blocks"}),(0,H.jsx)(y.Z,{mr:2})]}),Je&&(0,H.jsxs)(p.ZP,{loading:Ge,onClick:function(e){(0,ne.j)(e),Be({pipeline_run:{from_block_uuid:I.block_uuid,pipeline_run_action:"retry_blocks"}})},outline:!0,primary:!0,children:["Retry from selected block (",I.block_uuid,")"]})]}),title:function(e){var n=e.name;return"".concat(n," runs")},uuid:"pipelines/detail/".concat(q.M.RUNS),children:[(0,H.jsx)(y.Z,{mt:U.cd,px:U.cd,children:(0,H.jsx)(b.Z,{level:5,children:"Block runs"})}),(0,H.jsx)(f.Z,{light:!0,mt:U.cd,short:!0}),Ve,Ke]})}le.getInitialProps=function(){var e=(0,r.Z)(l().mark((function e(n){var t,r,i;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.query,r=t.pipeline,i=t.run,e.abrupt("return",{pipeline:{uuid:r},pipelineRun:{id:i}});case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();var ce=(0,x.Z)(le)},39525:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines/[pipeline]/runs/[run]",function(){return t(14532)}])}},function(e){e.O(0,[125,1799,7849,140,1557,3782,8095,4982,9774,2888,179],(function(){return n=39525,e(e.s=n);var n}));var n=e.O();_N_E=n}]);