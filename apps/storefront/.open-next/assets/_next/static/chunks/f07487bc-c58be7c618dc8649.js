"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3902],{22693:(e,t,o)=>{let r,n;o.d(t,{$n:()=>t$,$w:()=>t1,A3:()=>C,AM:()=>ob,BJ:()=>oC,Cy:()=>tE,D0:()=>W,DZ:()=>tT,Dr:()=>ra,EY:()=>tu,JU:()=>e3,KC:()=>J,M4:()=>Q,Ml:()=>y,Nj:()=>rn,PR:()=>F,Pm:()=>Y,Q3:()=>A,QY:()=>E,Sc:()=>tS,U1:()=>_,W1:()=>rr,WE:()=>z,WP:()=>on,Wd:()=>oe,XS:()=>t3,Z4:()=>t7,ZL:()=>oi,Zp:()=>tI,az:()=>ts,bz:()=>X,cV:()=>tF,g5:()=>tv,gK:()=>e0,jt:()=>eo,ks:()=>oU,l_:()=>eQ,m_:()=>o3,mc:()=>t_,nY:()=>S,oz:()=>rs,q4:()=>N,sU:()=>x,sb:()=>R,so:()=>th,sx:()=>ow,u4:()=>tQ,wb:()=>ru,xA:()=>tL,y$:()=>tm,zd:()=>j});var i=o(93523),a=o(54568),d=o(80668),l=o(7620),s=o(67316),c=o(7505),u=o(15203),f=o(22953),p=o(38629),h=o(80374),g=o(94929),b=o(7601),m=o(55021),v=o(97509),w=o(42706);(0,i.me)();let y=[],x={},$={initial:{scale:.97,willChange:"transform"},hidden:{opacity:0},visible:{opacity:1,transition:{when:"beforeChildren",duration:.1}},scaleIn:{scale:1},scaleOut:{scale:.97}},k={hidden:{opacity:0},visible:{opacity:1}},I={type:"spring",visualDuration:.2,bounce:.25};function j(e){return S(e)||z(e)}function R(e){return e instanceof Node&&e.nodeType===Node.ELEMENT_NODE}function S(e){return R(e)&&"A"===e.nodeName}function C(e){return R(e)&&"INPUT"===e.nodeName}function z(e){return R(e)&&"BUTTON"===e.nodeName}function N(e){return R(e)&&"SELECT"===e.nodeName}function E(e){return R(e)&&"TEXTAREA"===e.nodeName}function A(e,t){return e.contains(t)||e===t}function W(e){return 0===e?0:`${e/16}rem`}function _(e,t,o){return(t?.map(o)||[]).map((t,o)=>0===o?t:{[`@media screen and (min-width: ${e[o-1]}px)`]:t})}function H(e,t){return void 0===e?t||y:Array.isArray(e)?e:[e]}function L(e,t,o=y){if(!Array.isArray(o))throw Error("the property must be array of numbers");if(0===o.length)return null;let{media:r,space:n}=(0,i.JW)(e);return _(r,o,e=>{var o;return o=W(n[e]),t.reduce((e,t)=>(e[t]=o,e),{})})}function M(e,t){let{$size:o,$weight:r}=t,{font:n,media:a}=(0,i.JW)(t.theme),{family:d,sizes:l,weights:s}=n[e],c=r&&s[r]||s.regular,u=l[2],f={position:"relative",fontFamily:d,fontWeight:`${c}`,padding:"1px 0",margin:0,"&:before":{content:'""',display:"block",height:0},"&:after":{content:'""',display:"block",height:0},"& > code, & > span":{display:"block"},"&:not([hidden])":{display:"block"}};return o?[f,..._(a,o,e=>(function(e){let{ascenderHeight:t,descenderHeight:o,fontSize:r,iconSize:n,letterSpacing:i,lineHeight:a}=e,d=t+o,l=a-d,s=2*Math.floor(1.125*r/2)+1;return{fontSize:W(r),lineHeight:`calc(${a} / ${r})`,letterSpacing:W(i),transform:`translateY(${W(o)})`,"&:before":{marginTop:`calc(${W(0-d)} - 1px)`},"&:after":{marginBottom:"-1px"},"& svg:not([data-sanity-icon])":{fontSize:`calc(${s} / 16 * 1rem)`,margin:W((l-s)/2)},"& [data-sanity-icon]":{fontSize:`calc(${n} / 16 * 1rem)`,margin:W((l-n)/2)}}})(l[e]||u))]:(M.warned||(console.warn("No size specified for responsive font",{fontKey:e,$size:o,props:t,base:f}),M.warned=!0),[f])}function T(e){let{media:t}=(0,i.JW)(e.theme);return _(t,e.$align,e=>({textAlign:e}))}function J(e,t){let o,r=(0,d.c)(3);r[0]!==t||r[1]!==e?(o=()=>[H(e,t),JSON.stringify(e??t)],r[0]=t,r[1]=e,r[2]=o):o=r[2];let[n,i]=(0,l.useState)(o),[a,s]=n,c=JSON.stringify(e??t);return c!==s&&i([H(e,t),c]),a}function F(e,t,o){let r,n,i,a=(0,d.c)(9),s=void 0===t?O:t;a[0]!==o||a[1]!==s||a[2]!==e?(r=t=>{if(!e)return;let r=t.target;if(!(r instanceof Node))return;let n=o?.();if(!n||n.contains(r)){for(let e of s().flat())if(e&&(r===e||e.contains(r)))return;e(t)}},a[0]=o,a[1]=s,a[2]=e,a[3]=r):r=a[3];let c=(0,w.J)(r),u=!!e;a[4]!==u||a[5]!==c?(n=()=>{if(!u)return;let e=e=>c(e);return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},a[4]=u,a[5]=c,a[6]=n):n=a[6],a[7]!==u?(i=[u],a[7]=u,a[8]=i):i=a[8],(0,l.useEffect)(n,i),(0,l.useDebugValue)(e?"MouseDown On":"MouseDown Off")}function O(){return y}function B(e,t){let o,r,n=(0,d.c)(4);n[0]!==t||n[1]!==e?(o=()=>{e.current?.setCustomValidity(t||"")},r=[t,e],n[0]=t,n[1]=e,n[2]=o,n[3]=r):(o=n[2],r=n[3]),(0,l.useEffect)(o,r)}let P="u">typeof document&&"u">typeof window&&window.ResizeObserver?window.ResizeObserver:m.tb,D=(r=new WeakMap,n=new WeakMap,{subscribe(e,t){let o=n.get(e)||[],i=r.get(e);return n.has(e)||(n.set(e,o),i=({subscribe(e,t){let o=new P(([e])=>{t({_contentRect:e.contentRect,border:{width:e.borderBoxSize[0].inlineSize,height:e.borderBoxSize[0].blockSize},content:{width:e.contentRect.width,height:e.contentRect.height}})});return o.observe(e),()=>{o.unobserve(e),o.disconnect()}}}).subscribe(e,e=>{for(let t of o)t(e)})),o.push(t),()=>{let e=o.indexOf(t);e>-1&&o.splice(e,1),0===o.length&&i&&i()}}});function V(e){let t,o,r=(0,d.c)(3),[n,i]=(0,l.useState)(null);return r[0]!==e?(t=()=>{if(e)return D.subscribe(e,i)},o=[e],r[0]=e,r[1]=t,r[2]=o):(t=r[1],o=r[2]),(0,l.useEffect)(t,o),n}function Y(e){let t,o,r,n=(0,d.c)(5);n[0]!==e?(t=t=>e(t),n[0]=e,n[1]=t):t=n[1];let i=(0,w.J)(t);n[2]!==i?(o=()=>{let e=e=>i(e);return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},n[2]=i,n[3]=o):o=n[3],n[4]===Symbol.for("react.memo_cache_sentinel")?(r=[],n[4]=r):r=n[4],(0,l.useEffect)(o,r)}let G=function(){if("u">typeof globalThis)return globalThis;if("u">typeof window)return window;if("u">typeof self)return self;if("u">typeof global)return global;throw Error("@sanity/ui: could not locate global scope")}();function X(e,t){let o=Symbol.for(e);return typeof document>"u"?(0,l.createContext)(t):(G[o]=G[o]||(0,l.createContext)(t),G[o])}let U=X("@sanity/ui/context/theme",null);function q(e){let t,o,r,n,c=(0,d.c)(15),u=(0,l.useContext)(U),{children:f}=e,p=e.scheme??(u?.scheme||"light"),h=e.theme??(u?.theme||null),g=e.tone??(u?.tone||"default");e:{let e;if(!h){t=null;break e}c[0]!==h||c[1]!==p||c[2]!==g?(e={version:0,theme:h,scheme:p,tone:g},c[0]=h,c[1]=p,c[2]=g,c[3]=e):e=c[3],t=e}let b=t;t:{let e;if(!h){o=null;break t}c[4]!==h||c[5]!==p||c[6]!==g?(e=(0,i.sR)(h,p,g),c[4]=h,c[5]=p,c[6]=g,c[7]=e):e=c[7],o=e}let m=o;if(!m){let e;return c[8]===Symbol.for("react.memo_cache_sentinel")?(e=(0,a.jsx)("pre",{children:'ThemeProvider: no "theme" property provided'}),c[8]=e):e=c[8],e}return c[9]!==f||c[10]!==m?(r=(0,a.jsx)(s.NP,{theme:m,children:f}),c[9]=f,c[10]=m,c[11]=r):r=c[11],c[12]!==r||c[13]!==b?(n=(0,a.jsx)(U.Provider,{value:b,children:r}),c[12]=r,c[13]=b,c[14]=n):n=c[14],n}function K(){let e=(0,l.useContext)(U);if(!e)throw Error("useRootTheme(): missing context value");return e}function Z(e){let t,o=(0,d.c)(5),{children:r,scheme:n,tone:i}=e,l=K(),s=n||l.scheme;return o[0]!==r||o[1]!==l.theme||o[2]!==s||o[3]!==i?(t=(0,a.jsx)(q,{scheme:s,theme:l.theme,tone:i,children:r}),o[0]=r,o[1]=l.theme,o[2]=s,o[3]=i,o[4]=t):t=o[4],t}function Q(){let e,t=(0,d.c)(2),o=(0,s.DP)();return t[0]!==o?(e=(0,i.JW)(o),t[0]=o,t[1]=e):e=t[1],e}function ee(){return 0}function et(){let e,t,o,r,n=(0,d.c)(2),{media:i}=Q();n[0]!==i?(o=i.length,r=()=>{if(!t){t=[];for(let r=o;r>-1;r-=1){var e;let o=0===(e=r)?`screen and (max-width: ${i[e]-1}px)`:e===i.length?`screen and (min-width: ${i[e-1]}px)`:`screen and (min-width: ${i[e-1]}px) and (max-width: ${i[e]-1}px)`;t.push({index:r,mq:window.matchMedia(o)})}}return t},e={getSnapshot:()=>{for(let{index:e,mq:t}of r())if(t.matches)return e;return 0},subscribe:e=>{let t=[];for(let{mq:o}of r()){let r=()=>{o.matches&&e()};o.addEventListener("change",r),t.push(()=>o.removeEventListener("change",r))}return()=>{for(let e of t)e()}}},n[0]=i,n[1]=e):e=n[1];let a=e;return(0,l.useSyncExternalStore)(a.subscribe,a.getSnapshot,ee)}function eo(e){var t,o;let r,n,i;return t="(prefers-reduced-motion: reduce)",o=void 0===e?er:e,i=(0,d.c)(4),(0,l.useDebugValue)(t),i[0]!==t?(r=e=>{let o=window.matchMedia(t);return o.addEventListener("change",e),()=>o.removeEventListener("change",e)},i[0]=t,i[1]=r):r=i[1],i[2]!==t?(n=()=>window.matchMedia(t).matches,i[2]=t,i[3]=n):n=i[3],(0,l.useSyncExternalStore)(r,n,o)}function er(){return!1}function en(e){let{card:t,media:o}=(0,i.JW)(e.theme),r=`${t.border?.width??1}px solid var(--card-border-color)`;return _(o,e.$border,e=>e?{"&&":{border:r}}:{"&&":{border:0}})}function ei(e){let{card:t,media:o}=(0,i.JW)(e.theme),r=`${t.border?.width??1}px solid var(--card-border-color)`;return _(o,e.$borderTop,e=>e?{"&&":{borderTop:r}}:{"&&":{borderTop:0}})}function ea(e){let{card:t,media:o}=(0,i.JW)(e.theme),r=`${t.border?.width??1}px solid var(--card-border-color)`;return _(o,e.$borderRight,e=>e?{"&&":{borderRight:r}}:{"&&":{borderRight:0}})}function ed(e){let{card:t,media:o}=(0,i.JW)(e.theme),r=`${t.border?.width??1}px solid var(--card-border-color)`;return _(o,e.$borderBottom,e=>e?{"&&":{borderBottom:r}}:{"&&":{borderBottom:0}})}function el(e){let{card:t,media:o}=(0,i.JW)(e.theme),r=`${t.border?.width??1}px solid var(--card-border-color)`;return _(o,e.$borderLeft,e=>e?{"&&":{borderLeft:r}}:{"&&":{borderLeft:0}})}q.displayName="ThemeProvider",Z.displayName="ThemeColorProvider";let es={'&[data-as="ul"],&[data-as="ol"]':{listStyle:"none"}},ec={content:"content-box",border:"border-box"},eu={stretch:"stretch",fill:"100%"};function ef(e){let{media:t}=(0,i.JW)(e.theme);return _(t,e.$display,e=>({"&:not([hidden])":{display:e}}))}function ep(e){let{media:t}=(0,i.JW)(e.theme);return _(t,e.$sizing,e=>({boxSizing:ec[e]}))}function eh(e){let{media:t}=(0,i.JW)(e.theme);return _(t,e.$height,e=>({height:eu[e]}))}function eg(e){let{media:t}=(0,i.JW)(e.theme);return _(t,e.$overflow,e=>({overflow:e}))}let eb={minWidth:0,minHeight:0};function em(){return[eb,ev]}function ev(e){let{media:t}=(0,i.JW)(e.theme);return e.$flex?_(t,e.$flex,e=>({flex:`${e}`})):y}let ew={"&&:not([hidden])":{display:"flex"}};function ey(e){let{media:t}=(0,i.JW)(e.theme);return _(t,e.$align,e=>({alignItems:e}))}function ex(e){let{media:t,space:o}=(0,i.JW)(e.theme);return _(t,e.$gap,e=>({gap:e?W(o[e]):void 0}))}function e$(e){let{media:t}=(0,i.JW)(e.theme);return _(t,e.$wrap,e=>({flexWrap:e}))}function ek(e){let{media:t}=(0,i.JW)(e.theme);return _(t,e.$justify,e=>({justifyContent:e}))}function eI(e){let{media:t}=(0,i.JW)(e.theme);return _(t,e.$direction,e=>({flexDirection:e}))}function ej(e){return`inset 0 0 0 ${e.width}px ${e.color}`}function eR(e){let{base:t,border:o,focusRing:r}=e,n=r.offset+r.width,i=0-r.offset,a=t?t.bg:"var(--card-bg-color)";return[i>0&&`inset 0 0 0 ${i}px var(--card-focus-ring-color)`,o&&ej(o),i<0&&`0 0 0 ${0-i}px ${a}`,n>0&&`0 0 0 ${n}px var(--card-focus-ring-color)`].filter(Boolean).join(",")}let eS={auto:"auto",full:"1 / -1"},eC={auto:"auto",full:"1 / -1"};function ez(e){let{media:t}=(0,i.JW)(e.theme);return _(t,e.$row,e=>"number"==typeof e?{gridRow:`span ${e} / span ${e}`}:{gridRow:eS[e]})}function eN(e){let{media:t}=(0,i.JW)(e.theme);return _(t,e.$rowStart,e=>({gridRowStart:`${e}`}))}function eE(e){let{media:t}=(0,i.JW)(e.theme);return _(t,e.$rowEnd,e=>({gridRowEnd:`${e}`}))}function eA(e){let{media:t}=(0,i.JW)(e.theme);return _(t,e.$column,e=>"number"==typeof e?{gridColumn:`span ${e} / span ${e}`}:{gridColumn:eC[e]})}function eW(e){let{media:t}=(0,i.JW)(e.theme);return _(t,e.$columnStart,e=>({gridColumnStart:`${e}`}))}function e_(e){let{media:t}=(0,i.JW)(e.theme);return _(t,e.$columnEnd,e=>({gridColumnEnd:`${e}`}))}let eH={"&&:not([hidden])":{display:"grid"},'&[data-as="ul"],&[data-as="ol"]':{listStyle:"none"}},eL={auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0, 1fr)"},eM={auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0, 1fr)"};function eT(e){let{media:t}=(0,i.JW)(e.theme);return _(t,e.$autoFlow,e=>({gridAutoFlow:e}))}function eJ(e){let{media:t}=(0,i.JW)(e.theme);return _(t,e.$autoRows,e=>({gridAutoRows:e&&eM[e]}))}function eF(e){let{media:t}=(0,i.JW)(e.theme);return _(t,e.$autoCols,e=>({gridAutoColumns:e&&eL[e]}))}function eO(e){let{media:t}=(0,i.JW)(e.theme);return _(t,e.$columns,e=>({gridTemplateColumns:e&&`repeat(${e},minmax(0,1fr));`}))}function eB(e){let{media:t}=(0,i.JW)(e.theme);return _(t,e.$rows,e=>({gridTemplateRows:e&&`repeat(${e},minmax(0,1fr));`}))}function eP(e){let{media:t,space:o}=(0,i.JW)(e.theme);return _(t,e.$gap,e=>({gridGap:e?W(o[e]):void 0}))}function eD(e){let{media:t,space:o}=(0,i.JW)(e.theme);return _(t,e.$gapX,e=>({columnGap:e?W(o[e]):void 0}))}function eV(e){let{media:t,space:o}=(0,i.JW)(e.theme);return _(t,e.$gapY,e=>({rowGap:e?W(o[e]):void 0}))}function eY(e){let{$fontSize:t,$iconLeft:o,$iconRight:r,$padding:n,$space:a}=e,{font:d,media:l,space:s}=(0,i.JW)(e.theme),c=Math.max(n.length,a.length,t.length),u=[],f=[],p=[];for(let e=0;e<c;e+=1)p[e]=void 0===t[e]?p[e-1]:t[e],u[e]=void 0===n[e]?u[e-1]:n[e],f[e]=void 0===a[e]?f[e-1]:a[e];return _(l,u,(e,t)=>{let n=d.text.sizes[p[t]]||d.text.sizes[2],i=n.lineHeight-n.ascenderHeight-n.descenderHeight,a=s[u[t]],l=s[f[t]],c={paddingTop:W(a-n.ascenderHeight),paddingRight:W(a),paddingBottom:W(a-n.descenderHeight),paddingLeft:W(a)};return r&&(c.paddingRight=W(a+i+l)),o&&(c.paddingLeft=W(a+i+l)),c})}function eG(e){return eY({...e,$iconRight:!0})}let eX=(0,s.AH)`
  &:not([hidden]) {
    display: flex;
  }

  align-items: center;
`;function eU(){return eX}function eq(e){let{$scheme:t,$tone:o,$weight:r}=e,{color:n,font:a}=(0,i.JW)(e.theme);return(0,s.AH)`
    appearance: none;
    background: none;
    border: 0;
    border-radius: 0;
    outline: none;
    width: 100%;
    box-sizing: border-box;
    font-family: ${a.text.family};
    font-weight: ${r&&a.text.weights[r]||a.text.weights.regular};
    margin: 0;
    position: relative;
    z-index: 1;
    display: block;

    /* NOTE: This is a hack to disable Chrome’s autofill styles */
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-text-fill-color: var(--input-fg-color) !important;
      transition: background-color 5000s;
      transition-delay: 86400s /* 24h */;
    }

    /* &:is(textarea) */
    &[data-as='textarea'] {
      resize: none;
    }

    color: var(--input-fg-color);

    &::placeholder {
      color: var(--input-placeholder-color);
    }

    &[data-scheme='${t}'][data-tone='${o}'] {
      --input-fg-color: ${n.input.default.enabled.fg};
      --input-placeholder-color: ${n.input.default.enabled.placeholder};

      /* enabled */
      &:not(:invalid):not(:disabled):not(:read-only) {
        --input-fg-color: ${n.input.default.enabled.fg};
        --input-placeholder-color: ${n.input.default.enabled.placeholder};
      }

      /* disabled */
      &:not(:invalid):disabled {
        --input-fg-color: ${n.input.default.disabled.fg};
        --input-placeholder-color: ${n.input.default.disabled.placeholder};
      }

      /* invalid */
      &:invalid {
        --input-fg-color: ${n.input.invalid.enabled.fg};
        --input-placeholder-color: ${n.input.invalid.enabled.placeholder};
      }

      /* readOnly */
      &:read-only {
        --input-fg-color: ${n.input.default.readOnly.fg};
        --input-placeholder-color: ${n.input.default.readOnly.placeholder};
      }
    }
  `}function eK(e){let{font:t,media:o}=(0,i.JW)(e.theme);return _(o,e.$fontSize,e=>{let o=t.text.sizes[e]||t.text.sizes[2];return{fontSize:W(o.fontSize),lineHeight:`${o.lineHeight/o.fontSize}`}})}function eZ(e){let{$hasPrefix:t,$hasSuffix:o,$scheme:r,$tone:n,$unstableDisableFocusRing:a}=e,{color:d,input:l}=(0,i.JW)(e.theme);return(0,s.AH)`
    --input-box-shadow: none;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
    pointer-events: none;
    z-index: 0;

    background-color: var(--card-bg-color);
    box-shadow: var(--input-box-shadow);

    border-top-left-radius: ${t?0:void 0};
    border-bottom-left-radius: ${t?0:void 0};
    border-top-right-radius: ${o?0:void 0};
    border-bottom-right-radius: ${o?0:void 0};

    &[data-scheme='${r}'][data-tone='${n}'] {
      --card-bg-color: ${d.input.default.enabled.bg};
      --card-fg-color: ${d.input.default.enabled.fg};

      /* enabled */
      *:not(:disabled) + &[data-border] {
        --input-box-shadow: ${ej({color:d.input.default.enabled.border,width:l.border.width})};
      }

      /* invalid */
      *:not(:disabled):invalid + & {
        --card-bg-color: ${d.input.invalid.enabled.bg};
        --card-fg-color: ${d.input.invalid.enabled.fg};

        &[data-border] {
          --input-box-shadow: ${ej({color:d.input.invalid.enabled.border,width:l.border.width})};
        }
      }

      /* focused */
      *:not(:disabled):focus + & {
        &[data-border] {
          --input-box-shadow: ${a?void 0:eR({border:{color:d.input.default.enabled.border,width:l.border.width},focusRing:l.text.focusRing})};
        }

        &:not([data-border]) {
          --input-box-shadow: ${a?void 0:eR({focusRing:l.text.focusRing})};
        }
      }

      /* disabled */
      *:not(:invalid):disabled + & {
        --card-bg-color: ${d.input.default.disabled.bg} !important;
        --card-fg-color: ${d.input.default.disabled.fg} !important;
        --card-icon-color: ${d.input.default.disabled.fg} !important;

        &[data-border] {
          --input-box-shadow: ${ej({color:d.input.default.disabled.border,width:l.border.width})};
        }
      }

      *:invalid:disabled + & {
        --card-bg-color: ${d.input.invalid.disabled.bg} !important;
        --card-fg-color: ${d.input.invalid.disabled.fg} !important;
        --card-icon-color: ${d.input.invalid.disabled.fg} !important;

        &[data-border] {
          --input-box-shadow: ${ej({color:d.input.invalid.disabled.border,width:l.border.width})};
        }
      }

      /* readOnly */
      *:not(:invalid):read-only + & {
        --card-bg-color: ${d.input.default.readOnly.bg} !important;
        --card-fg-color: ${d.input.default.readOnly.fg} !important;
      }

      *:invalid:read-only + & {
        --card-bg-color: ${d.input.invalid.readOnly.bg} !important;
        --card-fg-color: ${d.input.invalid.readOnly.fg} !important;
      }

      /* hovered */
      @media (hover: hover) {
        *:not(:disabled):not(:read-only):not(:invalid):hover + & {
          --card-bg-color: ${d.input.default.hovered.bg};
          --card-fg-color: ${d.input.default.hovered.fg};
        }

        *:invalid:not(:disabled):not(:read-only):hover + & {
          --card-bg-color: ${d.input.invalid.hovered.bg};
          --card-fg-color: ${d.input.invalid.hovered.fg};
        }

        *:not(:disabled):not(:read-only):not(:invalid):not(:focus):hover + &[data-border] {
          --input-box-shadow: ${ej({color:d.input.default.hovered.border,width:l.border.width})};
        }

        *:invalid:not(:disabled):not(:read-only):not(:focus):hover + &[data-border] {
          --input-box-shadow: ${ej({color:d.input.invalid.hovered.border,width:l.border.width})};
        }
      }
    }
  `}function eQ(e){let{theme:t}=e;return[L(t,["padding"],e.$padding),L(t,["paddingLeft","paddingRight"],e.$paddingX),L(t,["paddingTop","paddingBottom"],e.$paddingY),L(t,["paddingTop"],e.$paddingTop),L(t,["paddingRight"],e.$paddingRight),L(t,["paddingBottom"],e.$paddingBottom),L(t,["paddingLeft"],e.$paddingLeft)].filter(Boolean)}function e0(e){let{media:t,radius:o}=(0,i.JW)(e.theme);return _(t,e.$radius,e=>{let t=0;return"number"==typeof e&&(t=W(o[e])),"full"===e&&(t="9999px"),{borderRadius:t}})}function e1(e,t){return`${e.map(W).join(" ")} ${t}`}let e2=s.I4.span.withConfig({displayName:"SpanWithTextOverflow",componentId:"sc-ol2i3b-0"})`display:block;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;overflow:clip;`,e4=s.I4.div.withConfig({displayName:"StyledLabel",componentId:"sc-1luap7z-0"})(function(e){return M("label",e)},T,function(e){let{$accent:t,$muted:o}=e,{font:r}=(0,i.JW)(e.theme);return(0,s.AH)`
    text-transform: uppercase;

    ${t&&(0,s.AH)`
      color: var(--card-accent-fg-color);
    `}

    ${o&&(0,s.AH)`
      color: var(--card-muted-fg-color);
    `}

    & code {
      font-family: ${r.code.family};
      border-radius: 1px;
    }

    & a {
      text-decoration: none;
      border-radius: 1px;
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
    }
  `}),e3=(0,l.forwardRef)(function(e,t){let o,r,n,i,l,s,c,u,f,p=(0,d.c)(22);p[0]!==e?({accent:o,align:r,children:n,muted:l,size:s,textOverflow:c,weight:u,...i}=e,p[0]=e,p[1]=o,p[2]=r,p[3]=n,p[4]=i,p[5]=l,p[6]=s,p[7]=c,p[8]=u):(o=p[1],r=p[2],n=p[3],i=p[4],l=p[5],s=p[6],c=p[7],u=p[8]);let h=void 0!==l&&l,g=void 0===s?2:s,b=n;if("ellipsis"===c){let e;p[9]!==b?(e=(0,a.jsx)(e2,{children:b}),p[9]=b,p[10]=e):e=p[10],b=e}else{let e;p[11]!==b?(e=(0,a.jsx)("span",{children:b}),p[11]=b,p[12]=e):e=p[12],b=e}let m=J(r),v=J(g);return p[13]!==o||p[14]!==b||p[15]!==h||p[16]!==t||p[17]!==i||p[18]!==m||p[19]!==v||p[20]!==u?(f=(0,a.jsx)(e4,{"data-ui":"Label",...i,$accent:o,$align:m,$muted:h,$size:v,$weight:u,ref:t,children:b}),p[13]=o,p[14]=b,p[15]=h,p[16]=t,p[17]=i,p[18]=m,p[19]=v,p[20]=u,p[21]=f):f=p[21],f});e3.displayName="ForwardRef(Label)";let e5=s.I4.div.withConfig({displayName:"StyledAvatar",componentId:"sc-1rj7kl0-0"})(function(e){let{avatar:t,media:o}=(0,i.JW)(e.theme);return _(o,e.$size,e=>{let o=t.sizes[e]||t.sizes[0];return{width:W(o.size),height:W(o.size),borderRadius:W(o.size/2),"&>svg":{width:W(o.size),height:W(o.size),borderRadius:W(o.size/2)}}})},function(e){let{$color:t}=e,{avatar:o}=(0,i.JW)(e.theme);return{"--avatar-bg-color":`var(--card-avatar-${t}-bg-color)`,"--avatar-fg-color":`var(--card-avatar-${t}-fg-color)`,backgroundColor:"var(--avatar-bg-color)",position:"relative",boxSizing:"border-box",userSelect:"none",boxShadow:"0 0 0 1px var(--card-bg-color)",'&[data-status="inactive"]':{opacity:"0.5"},"&>svg":{"&:not([hidden])":{display:"block"}},'&[data-as="button"]':{WebkitFontSmoothing:"inherit",appearance:"none",margin:0,padding:0,border:0,font:"inherit",color:"inherit",outline:"none","&:focus":{boxShadow:eR({focusRing:o.focusRing})},"&:focus:not(:focus-visible)":{boxShadow:"none"}}}}),e6=s.I4.div.withConfig({displayName:"Arrow",componentId:"sc-1rj7kl0-1"})(function(){return{position:"absolute",boxSizing:"border-box",zIndex:"0",opacity:"0",transition:"all 0.2s linear",transform:"rotate(-90deg) translate3d(0, 6px, 0)",left:0,right:0,top:0,bottom:0,"& > svg":{width:"11px",height:"7px",position:"absolute",top:"-5px",left:"50%",transform:"translateX(-6px)","&:not([hidden])":{display:"block"}},"[data-arrow-position='inside'] > &":{transform:"rotate(-90deg) translate3d(0, 6px, 0)",opacity:"0"},"[data-arrow-position='top'] > &":{opacity:"1",transform:"rotate(0deg)"},"[data-arrow-position='bottom'] > &":{opacity:"1",transform:"rotate(-180deg)"}}}),e7=s.I4.ellipse.withConfig({displayName:"BgStroke",componentId:"sc-1rj7kl0-2"})(function(){return{strokeWidth:"4px",stroke:"var(--card-bg-color)"}}),e8=s.I4.ellipse.withConfig({displayName:"Stroke",componentId:"sc-1rj7kl0-3"})(function(){return{strokeWidth:"2px",stroke:"var(--avatar-bg-color)",'[data-status="editing"] &':{strokeDasharray:"2 4",strokeLinecap:"round"}}}),e9=s.I4.div.withConfig({displayName:"Initials",componentId:"sc-1rj7kl0-4"})(function(){return{width:"100%",height:"100%",color:"var(--avatar-fg-color)",alignItems:"center",justifyContent:"center",textTransform:"uppercase",textAlign:"center",borderRadius:"50%","&:not([hidden])":{display:"flex"}}}),te=(0,s.I4)(e3).withConfig({displayName:"InitialsLabel",componentId:"sc-1rj7kl0-5"})({color:"inherit"}),tt=s.I4.svg.withConfig({displayName:"AvatarImage",componentId:"sc-1rj7kl0-6"})(function(){return{position:"relative"}});function to(e){return 1===e?1:2===e?3:5*(3===e)}(0,l.forwardRef)(function(e,t){let o,r,n,i,s,u,f,p,h,g,b,m,v,w,y,x,$,k,I,j,R,S,C=(0,d.c)(52);C[0]!==e?({__unstable_hideInnerStroke:o,as:i,color:h,src:p,title:m,initials:s,onImageLoadError:u,arrowPosition:n,animateArrowFrom:r,status:g,size:b,...f}=e,C[0]=e,C[1]=o,C[2]=r,C[3]=n,C[4]=i,C[5]=s,C[6]=u,C[7]=f,C[8]=p,C[9]=h,C[10]=g,C[11]=b,C[12]=m):(o=C[1],r=C[2],n=C[3],i=C[4],s=C[5],u=C[6],f=C[7],p=C[8],h=C[9],g=C[10],b=C[11],m=C[12]);let z=void 0===h?"gray":h,N=void 0===g?"online":g,E=void 0===b?1:b,{avatar:A}=Q(),W=c.isValidElementType(i)?i:"div",_=J(E),H=(A.sizes[_[0]]||A.sizes[0]).size,L=H/2,M=(0,l.useId)(),[T,F]=(0,l.useState)(r||n||"inside"),[O,B]=(0,l.useState)(!1),P=`avatar-image-${M}`;C[13]!==T||C[14]!==n?(v=()=>{if(T===n)return;let e=requestAnimationFrame(()=>F(n));return()=>cancelAnimationFrame(e)},w=[T,n],C[13]=T,C[14]=n,C[15]=v,C[16]=w):(v=C[15],w=C[16]),(0,l.useEffect)(v,w),C[17]!==p?(y=()=>{p&&B(!1)},x=[p],C[17]=p,C[18]=y,C[19]=x):(y=C[18],x=C[19]),(0,l.useEffect)(y,x),C[20]!==u?($=()=>{B(!0),u&&u(Error("Avatar: the image failed to load"))},C[20]=u,C[21]=$):$=C[21];let D=$;C[22]!==_?(k=_.map(to),C[22]=_,C[23]=k):k=C[23];let V=k,Y="string"==typeof W?W:void 0;return C[24]!==z?(I=(0,a.jsx)(e6,{children:(0,a.jsx)("svg",{width:"11",height:"7",viewBox:"0 0 11 7",fill:"none",children:(0,a.jsx)("path",{d:"M6.67948 1.50115L11 7L0 7L4.32052 1.50115C4.92109 0.736796 6.07891 0.736795 6.67948 1.50115Z",fill:z})})}),C[24]=z,C[25]=I):I=C[25],C[26]!==o||C[27]!==L||C[28]!==H||C[29]!==D||C[30]!==O||C[31]!==P||C[32]!==p?(j=!O&&p&&(0,a.jsxs)(tt,{viewBox:`0 0 ${H} ${H}`,fill:"none",children:[(0,a.jsx)("defs",{children:(0,a.jsx)("pattern",{id:P,patternContentUnits:"objectBoundingBox",width:"1",height:"1",children:(0,a.jsx)("image",{href:p,width:"1",height:"1",onError:D})})}),(0,a.jsx)("circle",{cx:L,cy:L,r:L,fill:`url(#${P})`}),!o&&(0,a.jsx)(e7,{cx:L,cy:L,rx:L,ry:L,vectorEffect:"non-scaling-stroke"}),(0,a.jsx)(e8,{cx:L,cy:L,rx:L,ry:L,vectorEffect:"non-scaling-stroke"})]}),C[26]=o,C[27]=L,C[28]=H,C[29]=D,C[30]=O,C[31]=P,C[32]=p,C[33]=j):j=C[33],C[34]!==O||C[35]!==s||C[36]!==V||C[37]!==p?(R=(O||!p)&&s&&(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e9,{children:(0,a.jsx)(te,{forwardedAs:"span",size:V,weight:"medium",children:s})})}),C[34]=O,C[35]=s,C[36]=V,C[37]=p,C[38]=R):R=C[38],C[39]!==T||C[40]!==W||C[41]!==z||C[42]!==t||C[43]!==f||C[44]!==_||C[45]!==N||C[46]!==I||C[47]!==j||C[48]!==R||C[49]!==Y||C[50]!==m?(S=(0,a.jsxs)(e5,{as:W,"data-as":Y,"data-ui":"Avatar",...f,$color:z,$size:_,"aria-label":m,"data-arrow-position":T,"data-status":N,ref:t,title:m,children:[I,j,R]}),C[39]=T,C[40]=W,C[41]=z,C[42]=t,C[43]=f,C[44]=_,C[45]=N,C[46]=I,C[47]=j,C[48]=R,C[49]=Y,C[50]=m,C[51]=S):S=C[51],S}).displayName="ForwardRef(Avatar)";let tr=s.I4.div.withConfig({displayName:"StyledAvatarCounter",componentId:"sc-1ydx86y-0"})(function(e){let{avatar:t,media:o}=(0,i.JW)(e.theme);return _(o,e.$size,e=>{let o=t.sizes[e];return o?{borderRadius:W(o.size/2),minWidth:W(o.size),height:W(o.size)}:x})},function(e){let{space:t}=(0,i.JW)(e.theme);return(0,s.AH)`
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    user-select: none;
    color: inherit;
    color: var(--card-fg-color);
    background: var(--card-bg-color);
    box-shadow:
      0 0 0 1px var(--card-bg-color),
      inset 0 0 0 1px var(--card-hairline-hard-color);
    padding: 0 ${W(t[2])};

    &:not([hidden]) {
      display: flex;
    }
  `}),tn=(0,l.forwardRef)(function(e,t){let o,r,n,i=(0,d.c)(9),{count:l,size:s}=e,c=J(void 0===s?1:s);i[0]!==c?(o=c.map(ti),i[0]=c,i[1]=o):o=i[1];let u=o;return i[2]!==l||i[3]!==u?(r=(0,a.jsx)(e3,{as:"span",size:u,weight:"medium",children:l}),i[2]=l,i[3]=u,i[4]=r):r=i[4],i[5]!==t||i[6]!==c||i[7]!==r?(n=(0,a.jsx)(tr,{$size:c,"data-ui":"AvatarCounter",ref:t,children:r}),i[5]=t,i[6]=c,i[7]=r,i[8]=n):n=i[8],n});function ti(e){return 1===e?1:2===e?3:5*(3===e)}tn.displayName="ForwardRef(AvatarCounter)";let ta=(0,s.AH)`
  white-space: nowrap;

  & > div {
    vertical-align: top;

    &:not([hidden]) {
      display: inline-block;
    }
  }
`,td=s.I4.div.withConfig({displayName:"StyledAvatarStack",componentId:"sc-cysmbb-0"})(function(e){let{avatar:t,media:o}=(0,i.JW)(e.theme);return _(o,e.$size,e=>{let o=t.sizes[e];return o?{"& > div + div":{marginLeft:W(o.distance)}}:x})},function(){return ta});(0,l.forwardRef)(function(e,t){let o,r,n,i,s,c,u,f,p=(0,d.c)(22);p[0]!==e?({children:o,maxLength:n,size:i,...r}=e,p[0]=e,p[1]=o,p[2]=r,p[3]=n,p[4]=i):(o=p[1],r=p[2],n=p[3],i=p[4]);let h=void 0===n?4:n,g=void 0===i?1:i,b=l.Children.toArray(o).filter(l.isValidElement),m=Math.max(h,0),v=J(g),w=b.length,y=w-(m-1),x=y>1?b.slice(y,w):b;p[5]!==w||p[6]!==v?(s=0===w&&(0,a.jsx)("div",{children:(0,a.jsx)(tn,{count:w,size:v})}),p[5]=w,p[6]=v,p[7]=s):s=p[7],p[8]!==y||p[9]!==w||p[10]!==v?(c=0!==w&&y>1&&(0,a.jsx)("div",{children:(0,a.jsx)(tn,{count:y,size:v})}),p[8]=y,p[9]=w,p[10]=v,p[11]=c):c=p[11],p[12]!==v?(u=(e,t)=>(0,a.jsx)("div",{children:(0,l.cloneElement)(e,{size:v})},String(t)),p[12]=v,p[13]=u):u=p[13];let $=x.map(u);return p[14]!==td||p[15]!==t||p[16]!==r||p[17]!==v||p[18]!==s||p[19]!==c||p[20]!==$?(f=(0,a.jsxs)(td,{"data-ui":"AvatarStack",...r,ref:t,$size:v,children:[s,c,$]}),p[14]=td,p[15]=t,p[16]=r,p[17]=v,p[18]=s,p[19]=c,p[20]=$,p[21]=f):f=p[21],f}).displayName="ForwardRef(AvatarStack)";let tl=s.I4.div.withConfig({displayName:"StyledBox",componentId:"sc-1hhky9f-0"})(function(){return es},em,function(){return[ep,eh,eg,ef]},function(){return[ez,eN,eE,eA,eW,e_]},function(e){let{theme:t}=e;return[L(t,["margin"],e.$margin),L(t,["marginLeft","marginRight"],e.$marginX),L(t,["marginTop","marginBottom"],e.$marginY),L(t,["marginTop"],e.$marginTop),L(t,["marginRight"],e.$marginRight),L(t,["marginBottom"],e.$marginBottom),L(t,["marginLeft"],e.$marginLeft)].filter(Boolean)},eQ),ts=(0,l.forwardRef)(function(e,t){let o,r,n,i,l,s,c,u,f,p,h,g,b,m,v,w,y,x,$,k,I,j,R,S,C,z,N,E,A=(0,d.c)(59);A[0]!==e?({as:S,column:o,columnStart:n,columnEnd:r,display:C,flex:i,height:l,margin:z,marginX:p,marginY:h,marginTop:f,marginRight:u,marginBottom:s,marginLeft:c,overflow:g,padding:N,paddingX:y,paddingY:x,paddingTop:w,paddingRight:v,paddingBottom:b,paddingLeft:m,row:k,rowStart:j,rowEnd:I,sizing:R,...$}=e,A[0]=e,A[1]=o,A[2]=r,A[3]=n,A[4]=i,A[5]=l,A[6]=s,A[7]=c,A[8]=u,A[9]=f,A[10]=p,A[11]=h,A[12]=g,A[13]=b,A[14]=m,A[15]=v,A[16]=w,A[17]=y,A[18]=x,A[19]=$,A[20]=k,A[21]=I,A[22]=j,A[23]=R,A[24]=S,A[25]=C,A[26]=z,A[27]=N):(o=A[1],r=A[2],n=A[3],i=A[4],l=A[5],s=A[6],c=A[7],u=A[8],f=A[9],p=A[10],h=A[11],g=A[12],b=A[13],m=A[14],v=A[15],w=A[16],y=A[17],x=A[18],$=A[19],k=A[20],I=A[21],j=A[22],R=A[23],S=A[24],C=A[25],z=A[26],N=A[27]);let W=void 0===S?"div":S,_=void 0===C?"block":C,H=void 0===z?0:z,L=void 0===N?0:N,M="string"==typeof W?W:void 0,T=J(o),F=J(n),O=J(r),B=J(_),P=J(i),D=J(l),V=J(H),Y=J(p),G=J(h),X=J(f),U=J(u),q=J(s),K=J(c),Z=J(g),Q=J(L),ee=J(y),et=J(x),eo=J(w),er=J(v),en=J(b),ei=J(m),ea=J(k),ed=J(j),el=J(I),es=J(R);return A[28]!==W||A[29]!==e.children||A[30]!==t||A[31]!==$||A[32]!==D||A[33]!==V||A[34]!==Y||A[35]!==G||A[36]!==X||A[37]!==U||A[38]!==q||A[39]!==K||A[40]!==Z||A[41]!==Q||A[42]!==ee||A[43]!==et||A[44]!==eo||A[45]!==er||A[46]!==en||A[47]!==ei||A[48]!==ea||A[49]!==ed||A[50]!==el||A[51]!==es||A[52]!==M||A[53]!==T||A[54]!==F||A[55]!==O||A[56]!==B||A[57]!==P?(E=(0,a.jsx)(tl,{"data-as":M,"data-ui":"Box",...$,$column:T,$columnStart:F,$columnEnd:O,$display:B,$flex:P,$height:D,$margin:V,$marginX:Y,$marginY:G,$marginTop:X,$marginRight:U,$marginBottom:q,$marginLeft:K,$overflow:Z,$padding:Q,$paddingX:ee,$paddingY:et,$paddingTop:eo,$paddingRight:er,$paddingBottom:en,$paddingLeft:ei,$row:ea,$rowStart:ed,$rowEnd:el,$sizing:es,as:W,ref:t,children:e.children}),A[28]=W,A[29]=e.children,A[30]=t,A[31]=$,A[32]=D,A[33]=V,A[34]=Y,A[35]=G,A[36]=X,A[37]=U,A[38]=q,A[39]=K,A[40]=Z,A[41]=Q,A[42]=ee,A[43]=et,A[44]=eo,A[45]=er,A[46]=en,A[47]=ei,A[48]=ea,A[49]=ed,A[50]=el,A[51]=es,A[52]=M,A[53]=T,A[54]=F,A[55]=O,A[56]=B,A[57]=P,A[58]=E):E=A[58],E});ts.displayName="ForwardRef(Box)";let tc=s.I4.div.withConfig({displayName:"StyledText",componentId:"sc-11ov82j-0"})(function(e){return M("text",e)},T,function(e){let{$accent:t,$muted:o}=e,{font:r}=(0,i.JW)(e.theme);return(0,s.AH)`
    color: var(--card-fg-color);

    ${t&&(0,s.AH)`
      color: var(--card-accent-fg-color);
    `}

    ${o&&(0,s.AH)`
      color: var(--card-muted-fg-color);
    `}

    & code {
      font-family: ${r.code.family};
      border-radius: 1px;
      background-color: var(--card-code-bg-color);
      color: var(--card-code-fg-color);
    }

    & a {
      text-decoration: none;
      border-radius: 1px;
      color: var(--card-link-color);
      outline: none;

      @media (hover: hover) {
        &:hover {
          text-decoration: underline;
        }
      }

      &:focus {
        box-shadow:
          0 0 0 1px var(--card-bg-color),
          0 0 0 3px var(--card-focus-ring-color);
      }

      &:focus:not(:focus-visible) {
        box-shadow: none;
      }
    }

    & strong {
      font-weight: ${r.text.weights.bold};
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
      color: var(--card-icon-color);

      & path {
        vector-effect: non-scaling-stroke !important;
      }
    }
  `}),tu=(0,l.forwardRef)(function(e,t){let o,r,n,i,l,s,c,u,f,p,h=(0,d.c)(22);h[0]!==e?({accent:i,align:o,children:r,muted:l,size:s,textOverflow:c,weight:u,...n}=e,h[0]=e,h[1]=o,h[2]=r,h[3]=n,h[4]=i,h[5]=l,h[6]=s,h[7]=c,h[8]=u):(o=h[1],r=h[2],n=h[3],i=h[4],l=h[5],s=h[6],c=h[7],u=h[8]);let g=void 0!==i&&i,b=void 0!==l&&l,m=void 0===s?2:s,v=r;if("ellipsis"===c){let e;h[9]!==v?(e=(0,a.jsx)(e2,{children:v}),h[9]=v,h[10]=e):e=h[10],v=e}let w=J(o),y=J(m);return h[11]!==v?(f=(0,a.jsx)("span",{children:v}),h[11]=v,h[12]=f):f=h[12],h[13]!==g||h[14]!==b||h[15]!==t||h[16]!==n||h[17]!==w||h[18]!==y||h[19]!==f||h[20]!==u?(p=(0,a.jsx)(tc,{"data-ui":"Text",...n,$accent:g,$align:w,$muted:b,ref:t,$size:y,$weight:u,children:f}),h[13]=g,h[14]=b,h[15]=t,h[16]=n,h[17]=w,h[18]=y,h[19]=f,h[20]=u,h[21]=p):p=h[21],p});tu.displayName="ForwardRef(Text)";let tf=(0,s.I4)(ts).withConfig({displayName:"StyledBadge",componentId:"sc-5u140l-0"})(e0,function(e){let{$tone:t}=e;return{"--card-bg-color":`var(--card-badge-${t}-bg-color)`,"--card-fg-color":`var(--card-badge-${t}-fg-color)`,backgroundColor:"var(--card-bg-color)",cursor:"default","&:not([hidden])":{display:"inline-block",verticalAlign:"top"}}});(0,l.forwardRef)(function(e,t){let o,r,n,i,l,s,c,u,f=(0,d.c)(17);if(f[0]!==e){let{children:t,fontSize:a,mode:d,padding:c,radius:u,tone:p,...h}=e;o=t,n=a,i=c,l=u,s=p,r=h,f[0]=e,f[1]=o,f[2]=r,f[3]=n,f[4]=i,f[5]=l,f[6]=s}else o=f[1],r=f[2],n=f[3],i=f[4],l=f[5],s=f[6];let p=void 0===n?1:n,h=void 0===i?1:i,g=void 0===s?"default":s,b=J(void 0===l?"full":l),m=J(h);return f[7]!==o||f[8]!==p?(c=(0,a.jsx)(tu,{size:p,children:o}),f[7]=o,f[8]=p,f[9]=c):c=f[9],f[10]!==t||f[11]!==r||f[12]!==b||f[13]!==m||f[14]!==c||f[15]!==g?(u=(0,a.jsx)(tf,{"data-ui":"Badge",...r,$tone:g,$radius:b,padding:m,ref:t,children:c}),f[10]=t,f[11]=r,f[12]=b,f[13]=m,f[14]=c,f[15]=g,f[16]=u):u=f[16],u}).displayName="ForwardRef(Badge)";let tp=(0,s.I4)(ts).withConfig({displayName:"StyledFlex",componentId:"sc-oxesg3-0"})(em,function(){return[ew,ey,ex,e$,ek,eI]}),th=(0,l.forwardRef)(function(e,t){let o,r,n,i,l,s,c,u,f=(0,d.c)(17);f[0]!==e?({align:o,as:r,direction:s,gap:n,justify:i,wrap:c,...l}=e,f[0]=e,f[1]=o,f[2]=r,f[3]=n,f[4]=i,f[5]=l,f[6]=s,f[7]=c):(o=f[1],r=f[2],n=f[3],i=f[4],l=f[5],s=f[6],c=f[7]);let p=void 0===s?"row":s,h=J(o),g=J(p),b=J(n),m=J(i),v=J(c);return f[8]!==r||f[9]!==t||f[10]!==l||f[11]!==h||f[12]!==g||f[13]!==b||f[14]!==m||f[15]!==v?(u=(0,a.jsx)(tp,{"data-ui":"Flex",...l,$align:h,$direction:g,$gap:b,$justify:m,$wrap:v,forwardedAs:r,ref:t}),f[8]=r,f[9]=t,f[10]=l,f[11]=h,f[12]=g,f[13]=b,f[14]=m,f[15]=v,f[16]=u):u=f[16],u});th.displayName="ForwardRef(Flex)";let tg=(0,s.i7)`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`,tb=(0,s.I4)(tu).withConfig({displayName:"StyledSpinner",componentId:"sc-124hnd0-0"})`& > span > svg{animation:${tg} 500ms linear infinite;}`,tm=(0,l.forwardRef)(function(e,t){let o,r,n=(0,d.c)(4);return n[0]===Symbol.for("react.memo_cache_sentinel")?(o=(0,a.jsx)(f.Nl1,{}),n[0]=o):o=n[0],n[1]!==e||n[2]!==t?(r=(0,a.jsx)(tb,{"data-ui":"Spinner",...e,ref:t,children:o}),n[1]=e,n[2]=t,n[3]=r):r=n[3],r});function tv(e,t,o=!1){return{"--card-backdrop-color":e.backdrop,"--card-focus-ring-color":e.focusRing,"--card-shadow-outline-color":e.shadow.outline,"--card-shadow-umbra-color":e.shadow.umbra,"--card-shadow-penumbra-color":e.shadow.penumbra,"--card-shadow-ambient-color":e.shadow.ambient,"--card-accent-fg-color":t.accent.fg,"--card-avatar-gray-bg-color":t.avatar.gray.bg,"--card-avatar-gray-fg-color":t.avatar.gray.fg,"--card-avatar-blue-bg-color":t.avatar.blue.bg,"--card-avatar-blue-fg-color":t.avatar.blue.fg,"--card-avatar-purple-bg-color":t.avatar.purple.bg,"--card-avatar-purple-fg-color":t.avatar.purple.fg,"--card-avatar-magenta-bg-color":t.avatar.magenta.bg,"--card-avatar-magenta-fg-color":t.avatar.magenta.fg,"--card-avatar-red-bg-color":t.avatar.red.bg,"--card-avatar-red-fg-color":t.avatar.red.fg,"--card-avatar-orange-bg-color":t.avatar.orange.bg,"--card-avatar-orange-fg-color":t.avatar.orange.fg,"--card-avatar-yellow-bg-color":t.avatar.yellow.bg,"--card-avatar-yellow-fg-color":t.avatar.yellow.fg,"--card-avatar-green-bg-color":t.avatar.green.bg,"--card-avatar-green-fg-color":t.avatar.green.fg,"--card-avatar-cyan-bg-color":t.avatar.cyan.bg,"--card-avatar-cyan-fg-color":t.avatar.cyan.fg,"--card-bg-color":t.bg,"--card-bg-image":o?`repeating-conic-gradient(${t.bg} 0% 25%, ${t.muted.bg} 0% 50%)`:void 0,"--card-border-color":t.border,"--card-badge-default-bg-color":t.badge.default.bg,"--card-badge-default-dot-color":t.badge.default.dot,"--card-badge-default-fg-color":t.badge.default.fg,"--card-badge-default-icon-color":t.badge.default.icon,"--card-badge-neutral-bg-color":t.badge.neutral?.bg,"--card-badge-neutral-dot-color":t.badge.neutral?.dot,"--card-badge-neutral-fg-color":t.badge.neutral?.fg,"--card-badge-neutral-icon-color":t.badge.neutral?.icon,"--card-badge-primary-bg-color":t.badge.primary.bg,"--card-badge-primary-dot-color":t.badge.primary.dot,"--card-badge-primary-fg-color":t.badge.primary.fg,"--card-badge-primary-icon-color":t.badge.primary.icon,"--card-badge-suggest-bg-color":t.badge.suggest?.bg,"--card-badge-suggest-dot-color":t.badge.suggest?.dot,"--card-badge-suggest-fg-color":t.badge.suggest?.fg,"--card-badge-suggest-icon-color":t.badge.suggest?.icon,"--card-badge-positive-bg-color":t.badge.positive.bg,"--card-badge-positive-dot-color":t.badge.positive.dot,"--card-badge-positive-fg-color":t.badge.positive.fg,"--card-badge-positive-icon-color":t.badge.positive.icon,"--card-badge-caution-bg-color":t.badge.caution.bg,"--card-badge-caution-dot-color":t.badge.caution.dot,"--card-badge-caution-fg-color":t.badge.caution.fg,"--card-badge-caution-icon-color":t.badge.caution.icon,"--card-badge-critical-bg-color":t.badge.critical.bg,"--card-badge-critical-dot-color":t.badge.critical.dot,"--card-badge-critical-fg-color":t.badge.critical.fg,"--card-badge-critical-icon-color":t.badge.critical.icon,"--card-code-bg-color":t.code.bg,"--card-code-fg-color":t.code.fg,"--card-fg-color":t.fg,"--card-icon-color":t.icon,"--card-kbd-bg-color":t.kbd.bg,"--card-kbd-border-color":t.kbd.border,"--card-kbd-fg-color":t.kbd.fg,"--card-link-fg-color":t.link.fg,"--card-muted-bg-color":t.muted.bg,"--card-muted-fg-color":t.muted.fg,"--card-skeleton-color-from":t.skeleton.from,"--card-skeleton-color-to":t.skeleton.to,"--card-bg2-color":t.muted.bg,"--card-link-color":t.link.fg,"--card-hairline-soft-color":t.border,"--card-hairline-hard-color":t.border}}function tw(...e){return e.filter(Boolean).join(",")}tm.displayName="ForwardRef(Spinner)";let ty=s.I4.button.withConfig({displayName:"StyledButton",componentId:"sc-aaekt4-0"})(e0,function(e){let{$width:t}=e,{style:o}=(0,i.JW)(e.theme);return(0,s.AH)`
    ${o?.button};

    -webkit-font-smoothing: inherit;
    appearance: none;
    display: inline-flex;
    align-items: center;
    font: inherit;
    border: 0;
    outline: none;
    user-select: none;
    text-decoration: none;
    border: 0;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    white-space: nowrap;
    text-align: left;
    position: relative;
    vertical-align: top;

    ${"fill"===t&&(0,s.AH)`
      width: -moz-available;
      width: -webkit-fill-available;
      width: stretch;
    `}

    & > span {
      display: block;
      flex: 1;
      min-width: 0;
      border-radius: inherit;
    }

    &::-moz-focus-inner {
      border: 0;
      padding: 0;
    }
  `},function(e){let{$mode:t}=e,{button:o,color:r,style:n}=(0,i.JW)(e.theme),a="ghost"===e.$mode,d=r.button[t]||r.button.default,l=d[e.$tone]||d.default,s={width:o.border.width,color:"var(--card-border-color)"},c;return[tv(r,l.enabled),{backgroundColor:"var(--card-bg-color)",color:"var(--card-fg-color)",boxShadow:ej(s),'&:disabled, &[data-disabled="true"]':tv(r,l.disabled),"&:not([data-disabled='true'])":{boxShadow:tw(ej(s),a?c:void 0),"&:focus":{boxShadow:eR({base:r,border:{width:2,color:r.bg},focusRing:o.focusRing})},"&:focus:not(:focus-visible)":{boxShadow:tw(ej(s),a?c:void 0)},"@media (hover: hover)":{"&:hover":tv(r,l.hovered),"&:active":tv(r,l.pressed),"&[data-hovered]":tv(r,l.hovered)},"&[data-selected]":tv(r,l.pressed)}},n?.button?.root].filter(Boolean)}),tx=s.I4.div.withConfig({displayName:"LoadingBox",componentId:"sc-aaekt4-1"})`position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;background-color:var(--card-bg-color);border-radius:inherit;z-index:1;box-shadow:inherit;`,t$=(0,l.forwardRef)(function(e,t){let o,r,n,i,s,c,f,p,h,g,b,m,v,w,y,x,$,k,I,j,R,S,C,z,N,E,A,W,_,H,L,M=(0,d.c)(66);M[0]!==e?({children:n,disabled:i,fontSize:w,icon:o,iconRight:r,justify:y,loading:s,mode:x,padding:$,paddingX:g,paddingY:b,paddingTop:h,paddingBottom:c,paddingLeft:f,paddingRight:p,radius:k,selected:v,space:I,text:C,textAlign:z,textWeight:N,tone:j,type:R,muted:S,width:E,...m}=e,M[0]=e,M[1]=o,M[2]=r,M[3]=n,M[4]=i,M[5]=s,M[6]=c,M[7]=f,M[8]=p,M[9]=h,M[10]=g,M[11]=b,M[12]=m,M[13]=v,M[14]=w,M[15]=y,M[16]=x,M[17]=$,M[18]=k,M[19]=I,M[20]=j,M[21]=R,M[22]=S,M[23]=C,M[24]=z,M[25]=N,M[26]=E):(o=M[1],r=M[2],n=M[3],i=M[4],s=M[5],c=M[6],f=M[7],p=M[8],h=M[9],g=M[10],b=M[11],m=M[12],v=M[13],w=M[14],y=M[15],x=M[16],$=M[17],k=M[18],I=M[19],j=M[20],R=M[21],S=M[22],C=M[23],z=M[24],N=M[25],E=M[26]);let T=void 0===w?1:w,F=void 0===y?"center":y,O=void 0===x?"default":x,B=void 0===$?3:$,P=void 0===k?2:k,D=void 0===I?3:I,V=void 0===j?"default":j,Y=void 0===R?"button":R,G=void 0!==S&&S,{button:X}=Q(),U=J(F),q=J(B),K=J(g),Z=J(b),ee=J(h),et=J(c),eo=J(f),er=J(p),en=J(P),ei=J(D);M[27]!==q||M[28]!==et||M[29]!==eo||M[30]!==er||M[31]!==ee||M[32]!==K||M[33]!==Z?(A={padding:q,paddingX:K,paddingY:Z,paddingTop:ee,paddingBottom:et,paddingLeft:eo,paddingRight:er},M[27]=q,M[28]=et,M[29]=eo,M[30]=er,M[31]=ee,M[32]=K,M[33]=Z,M[34]=A):A=M[34];let ea=A,ed=!!(s||i),el=v?"":void 0,es=!!(s||i);return M[35]!==s?(W=!!s&&(0,a.jsx)(tx,{children:(0,a.jsx)(tm,{})}),M[35]=s,M[36]=W):W=M[36],M[37]!==o||M[38]!==r||M[39]!==ea||M[40]!==X||M[41]!==T||M[42]!==U||M[43]!==G||M[44]!==ei||M[45]!==C||M[46]!==z||M[47]!==N?(_=(o||C||r)&&(0,a.jsx)(ts,{as:"span",...ea,children:(0,a.jsxs)(th,{as:"span",justify:U,gap:ei,children:[o&&(0,a.jsxs)(tu,{size:T,children:[(0,l.isValidElement)(o)&&o,(0,u.isValidElementType)(o)&&(0,a.jsx)(o,{})]}),C&&(0,a.jsx)(ts,{children:(0,a.jsx)(tu,{muted:G,align:z,size:T,textOverflow:"ellipsis",weight:N??X.textWeight,children:C})}),r&&(0,a.jsxs)(tu,{size:T,children:[(0,l.isValidElement)(r)&&r,(0,u.isValidElementType)(r)&&(0,a.jsx)(r,{})]})]})}),M[37]=o,M[38]=r,M[39]=ea,M[40]=X,M[41]=T,M[42]=U,M[43]=G,M[44]=ei,M[45]=C,M[46]=z,M[47]=N,M[48]=_):_=M[48],M[49]!==ea||M[50]!==n?(H=n&&(0,a.jsx)(ts,{as:"span",...ea,children:n}),M[49]=ea,M[50]=n,M[51]=H):H=M[51],M[52]!==O||M[53]!==en||M[54]!==t||M[55]!==m||M[56]!==ed||M[57]!==el||M[58]!==es||M[59]!==W||M[60]!==_||M[61]!==H||M[62]!==V||M[63]!==Y||M[64]!==E?(L=(0,a.jsxs)(ty,{"data-ui":"Button",...m,$mode:O,$radius:en,$tone:V,"data-disabled":ed,"data-selected":el,disabled:es,ref:t,type:Y,$width:E,children:[W,_,H]}),M[52]=O,M[53]=en,M[54]=t,M[55]=m,M[56]=ed,M[57]=el,M[58]=es,M[59]=W,M[60]=_,M[61]=H,M[62]=V,M[63]=Y,M[64]=E,M[65]=L):L=M[65],L});t$.displayName="ForwardRef(Button)";let tk=(0,s.I4)(ts).withConfig({displayName:"StyledCard",componentId:"sc-osnro2-0"})(function(){return[en,ei,ea,ed,el]},e0,function(e){let{card:t,media:o,shadow:r}=(0,i.JW)(e.theme);return _(o,e.$shadow,e=>(function(e,t=1){if(!e)return x;let o=`0 0 0 ${W(t)} var(--card-shadow-outline-color)`,r=e1(e.umbra,"var(--card-shadow-umbra-color)"),n=e1(e.penumbra,"var(--card-shadow-penumbra-color)"),i=e1(e.ambient,"var(--card-shadow-ambient-color)");return{boxShadow:`${o}, ${r}, ${n}, ${i}`}})(r[e],t.shadow.outline))},function(e){return[function(e){let{$checkered:t}=e,{space:o}=(0,i.JW)(e.theme);return(0,s.AH)`
    ${t&&(0,s.AH)`
      background-size: ${o[3]}px ${o[3]}px;
      background-position: 50% 50%;
      background-image: var(--card-bg-image);
    `}

    &[data-as='button'] {
      -webkit-font-smoothing: inherit;
      appearance: none;
      outline: none;
      font: inherit;
      text-align: inherit;
      border: 0;
      width: -moz-available;
      width: -webkit-fill-available;
      width: stretch;
    }

    /* &:is(a) */
    &[data-as='a'] {
      outline: none;
      text-decoration: none;
    }

    /* &:is(pre) */
    &[data-as='pre'] {
      font: inherit;
    }
  `}(e),function(e){let{$checkered:t,$focusRing:o,$muted:r}=e,{card:n,color:a,style:d}=(0,i.JW)(e.theme),l={width:n.border.width,color:"var(--card-border-color)"};return(0,s.AH)`
    color-scheme: ${a._dark?"dark":"light"};

    ${tv(a,a,t)}

    background-color: ${r?"var(--card-muted-bg-color)":"var(--card-bg-color)"};
    color: var(--card-fg-color);

    /* &:is(button) */
    &[data-as='button'] {
      --card-focus-ring-box-shadow: none;

      cursor: default;
      box-shadow: var(--card-focus-ring-box-shadow);

      &:disabled {
        ${tv(a,a.selectable.default.disabled,t)}
      }

      &:not(:disabled) {
        &[data-pressed] {
          ${tv(a,a.selectable.default.pressed,t)}
        }

        &[data-selected] {
          ${tv(a,a.selectable.default.selected,t)}
        }

        @media (hover: hover) {
          &:not([data-pressed]):not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${tv(a,a.selectable.default.hovered,t)}
            }

            &:active {
              ${tv(a,a.selectable.default.pressed,t)}
            }
          }
        }

        &:focus-visible {
          --card-focus-ring-box-shadow: ${o?eR({base:a,border:l,focusRing:n.focusRing}):void 0};
        }
      }
    }

    /* &:is(a) */
    &[data-as='a'] {
      cursor: pointer;
      box-shadow: var(--card-focus-ring-box-shadow);

      &[data-disabled] {
        ${tv(a,a.selectable.default.disabled,t)}
      }

      &:not([data-disabled]) {
        &[data-pressed] {
          ${tv(a,a.selectable.default.pressed,t)}
        }

        &[data-selected] {
          ${tv(a,a.selectable.default.selected,t)}
        }

        @media (hover: hover) {
          &:not([data-pressed]):not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${tv(a,a.selectable.default.hovered,t)}
            }

            &:active {
              ${tv(a,a.selectable.default.pressed,t)}
            }
          }
        }

        &:focus-visible {
          --card-focus-ring-box-shadow: ${o?eR({base:a,border:l,focusRing:n.focusRing}):void 0};
        }
      }
    }

    ${d?.card?.root}
  `}(e)]}),tI=(0,l.forwardRef)(function(e,t){let o,r,n,i,l,s,c,f,p,h,g,b,m,v,w,y,x,$,k=(0,d.c)(42);k[0]!==e?({__unstable_checkered:m,__unstable_focusRing:v,as:o,border:r,borderTop:s,borderRight:l,borderBottom:n,borderLeft:i,muted:c,pressed:f,radius:w,scheme:h,selected:g,shadow:b,tone:y,...p}=e,k[0]=e,k[1]=o,k[2]=r,k[3]=n,k[4]=i,k[5]=l,k[6]=s,k[7]=c,k[8]=f,k[9]=p,k[10]=h,k[11]=g,k[12]=b,k[13]=m,k[14]=v,k[15]=w,k[16]=y):(o=k[1],r=k[2],n=k[3],i=k[4],l=k[5],s=k[6],c=k[7],f=k[8],p=k[9],h=k[10],g=k[11],b=k[12],m=k[13],v=k[14],w=k[15],y=k[16]);let I=void 0!==m&&m,j=void 0!==v&&v,R=void 0===w?0:w,S=void 0===y?"default":y,C=(0,u.isValidElementType)(o)?o:"div",z=K(),N="inherit"===S?z.tone:S,E="string"==typeof C?C:void 0,A=z.scheme,W=J(r),_=J(s),H=J(l),L=J(n),M=J(i),T=J(R),F=J(b),O=I?"":void 0,B=f?"":void 0,P=g?"":void 0;return k[17]!==C||k[18]!==I||k[19]!==j||k[20]!==c||k[21]!==t||k[22]!==p||k[23]!==z.scheme||k[24]!==g||k[25]!==M||k[26]!==T||k[27]!==F||k[28]!==O||k[29]!==B||k[30]!==P||k[31]!==E||k[32]!==W||k[33]!==_||k[34]!==H||k[35]!==L||k[36]!==N?(x=(0,a.jsx)(tk,{"data-as":E,"data-scheme":A,"data-ui":"Card","data-tone":N,...p,$border:W,$borderTop:_,$borderRight:H,$borderBottom:L,$borderLeft:M,$checkered:I,$focusRing:j,$muted:c,$radius:T,$shadow:F,$tone:N,"data-checkered":O,"data-pressed":B,"data-selected":P,forwardedAs:C,ref:t,selected:g}),k[17]=C,k[18]=I,k[19]=j,k[20]=c,k[21]=t,k[22]=p,k[23]=z.scheme,k[24]=g,k[25]=M,k[26]=T,k[27]=F,k[28]=O,k[29]=B,k[30]=P,k[31]=E,k[32]=W,k[33]=_,k[34]=H,k[35]=L,k[36]=N,k[37]=x):x=k[37],k[38]!==h||k[39]!==x||k[40]!==N?($=(0,a.jsx)(Z,{scheme:h,tone:N,children:x}),k[38]=h,k[39]=x,k[40]=N,k[41]=$):$=k[41],$});tI.displayName="ForwardRef(Card)";let tj=s.I4.div.withConfig({displayName:"StyledCheckbox",componentId:"sc-1l5mt2l-0"})(function(){return(0,s.AH)`
    position: relative;
    display: inline-block;
  `}),tR=s.I4.input.withConfig({displayName:"Input",componentId:"sc-1l5mt2l-1"})(function(e){let{color:t,input:o,radius:r}=(0,i.JW)(e.theme),{focusRing:n}=o.checkbox;return(0,s.AH)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    outline: none;
    opacity: 0;
    z-index: 1;
    padding: 0;
    margin: 0;

    & + span {
      position: relative;
      display: block;
      height: ${W(o.checkbox.size)};
      width: ${W(o.checkbox.size)};
      box-sizing: border-box;
      box-shadow: ${ej({color:t.input.default.enabled.border,width:o.border.width})};
      border-radius: ${W(r[2])};
      line-height: 1;
      background-color: ${t.input.default.enabled.bg};

      & > svg {
        display: block;
        position: absolute;
        opacity: 0;
        height: 100%;
        width: 100%;

        & > path {
          vector-effect: non-scaling-stroke;
          stroke-width: 1.5px !important;
        }
      }
    }

    &:checked + span {
      background: ${t.input.default.enabled.fg};
      box-shadow: ${ej({color:t.input.default.enabled.fg,width:o.border.width})};
      color: ${t.input.default.enabled.bg};
    }

    /* focus */
    &:not(:disabled):focus:focus-visible + span {
      box-shadow: ${eR({focusRing:n})};
    }

    /* focus when checked - uses a different offset */
    &:not(:disabled):focus:focus-visible&:checked + span {
      box-shadow: ${eR({focusRing:{width:1,offset:1}})};
    }

    &[data-error] + span {
      background-color: ${t.input.invalid.enabled.border};
      box-shadow: ${ej({width:o.border.width,color:t.input.invalid.enabled.muted.bg})};
      color: ${t.input.default.disabled.fg};
    }
    &[data-error]&:checked + span {
      background-color: ${t.input.invalid.enabled.muted.bg};
      color: ${t.input.default.enabled.bg};
    }
    &[data-error]&:checked&:not(:disabled):focus:focus-visible + span {
      box-shadow: ${eR({border:{width:o.border.width,color:t.input.invalid.readOnly.muted.bg},focusRing:{width:1,offset:1}})};
    }

    &:disabled + span {
      background-color: ${t.input.default.disabled.bg};
      box-shadow: ${ej({width:o.border.width,color:t.input.default.disabled.border})};
      color: ${t.input.default.disabled.fg};
    }
    &:disabled&:checked + span {
      background-color: ${t.input.default.disabled.muted.bg};
    }

    &[data-read-only] + span {
      background-color: ${t.input.default.readOnly.bg};
      box-shadow: ${ej({width:o.border.width,color:t.input.default.readOnly.border})};
      color: ${t.input.default.readOnly.fg};
    }

    &[data-read-only]&:checked + span {
      background-color: ${t.input.default.readOnly.muted.bg};
    }

    &:checked + span > svg:first-child {
      opacity: 1;
    }
    &:indeterminate + span > svg:last-child {
      opacity: 1;
    }
  `}),tS=(0,l.forwardRef)(function(e,t){let o,r,n,i,s,c,u,p,h,g,b,m,v,w,y=(0,d.c)(25);y[0]!==e?({checked:o,className:r,disabled:i,indeterminate:s,customValidity:n,readOnly:c,style:p,...u}=e,y[0]=e,y[1]=o,y[2]=r,y[3]=n,y[4]=i,y[5]=s,y[6]=c,y[7]=u,y[8]=p):(o=y[1],r=y[2],n=y[3],i=y[4],s=y[5],c=y[6],u=y[7],p=y[8]);let x=(0,l.useRef)(null);y[9]===Symbol.for("react.memo_cache_sentinel")?(h=()=>x.current,y[9]=h):h=y[9],(0,l.useImperativeHandle)(t,h),y[10]!==s?(g=()=>{x.current&&(x.current.indeterminate=s||!1)},b=[s],y[10]=s,y[11]=g,y[12]=b):(g=y[11],b=y[12]),(0,l.useEffect)(g,b),B(x,n);let $=!i&&c?"":void 0,k=n?"":void 0,I=i||c;return y[13]!==o||y[14]!==c||y[15]!==u||y[16]!==$||y[17]!==k||y[18]!==I?(m=(0,a.jsx)(tR,{"data-read-only":$,"data-error":k,...u,checked:o,disabled:I,type:"checkbox",readOnly:c,ref:x}),y[13]=o,y[14]=c,y[15]=u,y[16]=$,y[17]=k,y[18]=I,y[19]=m):m=y[19],y[20]===Symbol.for("react.memo_cache_sentinel")?(v=(0,a.jsxs)("span",{children:[(0,a.jsx)(f.Nrt,{}),(0,a.jsx)(f.YPx,{})]}),y[20]=v):v=y[20],y[21]!==r||y[22]!==p||y[23]!==m?(w=(0,a.jsxs)(tj,{className:r,"data-ui":"Checkbox",style:p,children:[m,v]}),y[21]=r,y[22]=p,y[23]=m,y[24]=w):w=y[24],w});function tC({theme:e}){let{color:{syntax:t}}=(0,i.JW)(e);return{"&.atrule":{color:t.atrule},"&.attr-name":{color:t.attrName},"&.attr-value":{color:t.attrValue},"&.attribute":{color:t.attribute},"&.boolean":{color:t.boolean},"&.builtin":{color:t.builtin},"&.cdata":{color:t.cdata},"&.char":{color:t.char},"&.class":{color:t.class},"&.class-name":{color:t.className},"&.comment":{color:t.comment},"&.constant":{color:t.constant},"&.deleted":{color:t.deleted},"&.doctype":{color:t.doctype},"&.entity":{color:t.entity},"&.function":{color:t.function},"&.hexcode":{color:t.hexcode},"&.id":{color:t.id},"&.important":{color:t.important},"&.inserted":{color:t.inserted},"&.keyword":{color:t.keyword},"&.number":{color:t.number},"&.operator":{color:t.operator},"&.prolog":{color:t.prolog},"&.property":{color:t.property},"&.pseudo-class":{color:t.pseudoClass},"&.pseudo-element":{color:t.pseudoElement},"&.punctuation":{color:t.punctuation},"&.regex":{color:t.regex},"&.selector":{color:t.selector},"&.string":{color:t.string},"&.symbol":{color:t.symbol},"&.tag":{color:t.tag},"&.unit":{color:t.unit},"&.url":{color:t.url},"&.variable":{color:t.variable}}}tS.displayName="ForwardRef(Checkbox)";let tz=(0,l.lazy)(()=>o.e(7667).then(o.bind(o,17667))),tN=s.I4.pre.withConfig({displayName:"StyledCode",componentId:"sc-4dymyn-0"})(function(){return(0,s.AH)`
    color: var(--card-code-fg-color);

    & code {
      font-family: inherit;

      &.refractor .token {
        ${tC}
      }
    }

    & a {
      color: inherit;
      text-decoration: underline;
      border-radius: 1px;
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
    }
  `},function(e){return M("code",e)}),tE=(0,l.forwardRef)(function(e,t){let o,r,n,i,s,c,u,f,p,h=(0,d.c)(20);h[0]!==e?({children:o,language:r,size:i,weight:s,...n}=e,h[0]=e,h[1]=o,h[2]=r,h[3]=n,h[4]=i,h[5]=s):(o=h[1],r=h[2],n=h[3],i=h[4],s=h[5]);let g=J(void 0===i?2:i);return h[6]!==o?(c=(0,a.jsx)("code",{children:o}),h[6]=o,h[7]=c):c=h[7],h[8]!==o||h[9]!==r?(u=(0,a.jsx)(tz,{language:r,value:o}),h[8]=o,h[9]=r,h[10]=u):u=h[10],h[11]!==c||h[12]!==u?(f=(0,a.jsx)(l.Suspense,{fallback:c,children:u}),h[11]=c,h[12]=u,h[13]=f):f=h[13],h[14]!==t||h[15]!==n||h[16]!==g||h[17]!==f||h[18]!==s?(p=(0,a.jsx)(tN,{"data-ui":"Code",...n,$size:g,$weight:s,ref:t,children:f}),h[14]=t,h[15]=n,h[16]=g,h[17]=f,h[18]=s,h[19]=p):p=h[19],p});tE.displayName="ForwardRef(Code)";let tA={width:"100%",margin:"0 auto"},tW=(0,s.I4)(ts).withConfig({displayName:"StyledContainer",componentId:"sc-wyroop-0"})(function(){return tA},function(e){let{container:t,media:o}=(0,i.JW)(e.theme);return _(o,e.$width,e=>({maxWidth:"auto"===e?"none":W(t[e])}))}),t_=(0,l.forwardRef)(function(e,t){let o,r,n,i,l=(0,d.c)(9);l[0]!==e?({as:o,width:n,...r}=e,l[0]=e,l[1]=o,l[2]=r,l[3]=n):(o=l[1],r=l[2],n=l[3]);let s=J(void 0===n?2:n);return l[4]!==o||l[5]!==t||l[6]!==r||l[7]!==s?(i=(0,a.jsx)(tW,{"data-ui":"Container",...r,$width:s,forwardedAs:o,ref:t}),l[4]=o,l[5]=t,l[6]=r,l[7]=s,l[8]=i):i=l[8],i});t_.displayName="ForwardRef(Container)";let tH=(0,s.I4)(ts).withConfig({displayName:"StyledGrid",componentId:"sc-v8t8oz-0"})(function(){return[eH,eT,eJ,eF,eO,eB,eP,eD,eV]}),tL=(0,l.forwardRef)(function(e,t){let o,r,n,i,l,s,c,u,f,p,h,g,b=(0,d.c)(26);b[0]!==e?({as:o,autoRows:i,autoCols:r,autoFlow:n,columns:s,gap:c,gapX:u,gapY:f,rows:h,children:l,...p}=e,b[0]=e,b[1]=o,b[2]=r,b[3]=n,b[4]=i,b[5]=l,b[6]=s,b[7]=c,b[8]=u,b[9]=f,b[10]=p,b[11]=h):(o=b[1],r=b[2],n=b[3],i=b[4],l=b[5],s=b[6],c=b[7],u=b[8],f=b[9],p=b[10],h=b[11]);let m="string"==typeof o?o:void 0,v=J(i),w=J(r),y=J(n),x=J(s),$=J(c),k=J(u),I=J(f),j=J(h);return b[12]!==o||b[13]!==l||b[14]!==t||b[15]!==p||b[16]!==m||b[17]!==v||b[18]!==w||b[19]!==y||b[20]!==x||b[21]!==$||b[22]!==k||b[23]!==I||b[24]!==j?(g=(0,a.jsx)(tH,{"data-as":m,"data-ui":"Grid",...p,$autoRows:v,$autoCols:w,$autoFlow:y,$columns:x,$gap:$,$gapX:k,$gapY:I,$rows:j,forwardedAs:o,ref:t,children:l}),b[12]=o,b[13]=l,b[14]=t,b[15]=p,b[16]=m,b[17]=v,b[18]=w,b[19]=y,b[20]=x,b[21]=$,b[22]=k,b[23]=I,b[24]=j,b[25]=g):g=b[25],g});tL.displayName="ForwardRef(Grid)";let tM=s.I4.div.withConfig({displayName:"StyledHeading",componentId:"sc-137lwim-0"})(function(e){let{$accent:t,$muted:o}=e,{font:r}=(0,i.JW)(e.theme);return(0,s.AH)`
    ${t&&(0,s.AH)`
      color: var(--card-accent-fg-color);
    `}

    ${o&&(0,s.AH)`
      color: var(--card-muted-fg-color);
    `}

    & code {
      font-family: ${r.code.family};
      border-radius: 1px;
    }

    & a {
      text-decoration: none;
      border-radius: 1px;
      color: var(--card-link-color);
      outline: none;

      @media (hover: hover) {
        &:hover {
          text-decoration: underline;
        }
      }

      &:focus {
        box-shadow:
          0 0 0 1px var(--card-bg-color),
          0 0 0 3px var(--card-focus-ring-color);
      }

      &:focus:not(:focus-visible) {
        box-shadow: none;
      }
    }

    & strong {
      font-weight: ${r.heading.weights.bold};
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
    }
  `},T,function(e){return M("heading",e)}),tT=(0,l.forwardRef)(function(e,t){let o,r,n,i,l,s,c,u,f,p,h=(0,d.c)(22);h[0]!==e?({accent:i,align:o,children:r,muted:l,size:s,textOverflow:c,weight:u,...n}=e,h[0]=e,h[1]=o,h[2]=r,h[3]=n,h[4]=i,h[5]=l,h[6]=s,h[7]=c,h[8]=u):(o=h[1],r=h[2],n=h[3],i=h[4],l=h[5],s=h[6],c=h[7],u=h[8]);let g=void 0!==i&&i,b=void 0!==l&&l,m=void 0===s?2:s,v=r;if("ellipsis"===c){let e;h[9]!==v?(e=(0,a.jsx)(e2,{children:v}),h[9]=v,h[10]=e):e=h[10],v=e}let w=J(o),y=J(m);return h[11]!==v?(f=(0,a.jsx)("span",{children:v}),h[11]=v,h[12]=f):f=h[12],h[13]!==g||h[14]!==b||h[15]!==t||h[16]!==n||h[17]!==w||h[18]!==y||h[19]!==f||h[20]!==u?(p=(0,a.jsx)(tM,{"data-ui":"Heading",...n,$accent:g,$align:w,$muted:b,$size:y,$weight:u,ref:t,children:f}),h[13]=g,h[14]=b,h[15]=t,h[16]=n,h[17]=w,h[18]=y,h[19]=f,h[20]=u,h[21]=p):p=h[21],p});tT.displayName="ForwardRef(Heading)";let tJ=(0,s.I4)(ts).withConfig({displayName:"StyledInline",componentId:"sc-1pkiy6j-0"})(function(){return{lineHeight:"0","&&:not([hidden])":{display:"block"},"& > div":{display:"inline-block",verticalAlign:"middle"}}},function(e){let{media:t,space:o}=(0,i.JW)(e.theme);return _(t,e.$space,e=>{let t=W(.5===e?o[1]/2:o[e]);return{margin:`-${t} 0 0 -${t}`,"& > div":{padding:`${t} 0 0 ${t}`}}})}),tF=(0,l.forwardRef)(function(e,t){let o,r,n,i,s,c,u=(0,d.c)(13);u[0]!==e?({as:o,children:r,space:i,...n}=e,u[0]=e,u[1]=o,u[2]=r,u[3]=n,u[4]=i):(o=u[1],r=u[2],n=u[3],i=u[4]),u[5]!==r?(s=l.Children.map(r,tO),u[5]=r,u[6]=s):s=u[6];let f=s,p=J(i);return u[7]!==o||u[8]!==f||u[9]!==n||u[10]!==p||u[11]!==t?(c=(0,a.jsx)(tJ,{"data-ui":"Inline",...n,$space:p,forwardedAs:o,ref:t,children:f}),u[7]=o,u[8]=f,u[9]=n,u[10]=p,u[11]=t,u[12]=c):c=u[12],c});function tO(e){return e&&(0,a.jsx)("div",{children:e})}tF.displayName="ForwardRef(Inline)";let tB=s.I4.kbd.withConfig({displayName:"StyledKBD",componentId:"sc-1w7yd8w-0"})(e0,function(){return(0,s.AH)`
    --card-bg-color: var(--card-kbd-bg-color);
    --card-border-color: var(--card-kbd-border-color);
    --card-fg-color: var(--card-kbd-fg-color);

    box-shadow: inset 0 0 0 1px var(--card-border-color);
    background: var(--card-bg-color);
    font: inherit;

    vertical-align: top;

    &:not([hidden]) {
      display: inline-block;
    }
  `}),tP=(0,l.forwardRef)(function(e,t){let o,r,n,i,l,s,c,u,f=(0,d.c)(17);f[0]!==e?({children:o,fontSize:n,padding:i,radius:l,...r}=e,f[0]=e,f[1]=o,f[2]=r,f[3]=n,f[4]=i,f[5]=l):(o=f[1],r=f[2],n=f[3],i=f[4],l=f[5]);let p=void 0===n?0:n,h=void 0===i?1:i,g=J(void 0===l?2:l);return f[6]!==o||f[7]!==p?(s=(0,a.jsx)(tu,{as:"span",size:p,weight:"semibold",children:o}),f[6]=o,f[7]=p,f[8]=s):s=f[8],f[9]!==h||f[10]!==s?(c=(0,a.jsx)(ts,{as:"span",padding:h,children:s}),f[9]=h,f[10]=s,f[11]=c):c=f[11],f[12]!==t||f[13]!==r||f[14]!==g||f[15]!==c?(u=(0,a.jsx)(tB,{"data-ui":"KBD",...r,$radius:g,ref:t,children:c}),f[12]=t,f[13]=r,f[14]=g,f[15]=c,f[16]=u):u=f[16],u});tP.displayName="ForwardRef(KBD)";let tD={name:"@sanity/ui/origin",fn({middlewareData:e,placement:t,rects:o}){let[r]=t.split("-"),n=o.floating.width,i=o.floating.height,a=e.shift?.x||0,d=e.shift?.y||0;if(n<=0||i<=0)return{};let{originX:l,originY:s}=["bottom","top"].includes(r)?{originX:tV(.5-a/n,0,1),originY:+("bottom"!==r)}:{originX:+("left"===r),originY:tV(.5-d/i,0,1)};return{data:{originX:l,originY:s}}}};function tV(e,t,o){return Math.min(Math.max(e,t),o)}function tY(e,t,o){let r=t.x-e.x,n=t.y-e.y;return tG(e,t,Math.min(1,o/Math.sqrt(r*r+n*n)))}function tG(e,t,o){return{x:e.x+(t.x-e.x)*o,y:e.y+(t.y-e.y)*o}}let tX=s.I4.div.withConfig({displayName:"StyledArrow",componentId:"sc-12vzy6c-0"})(({$w:e})=>(0,s.AH)`
    position: absolute;
    width: ${e}px;
    height: ${e}px;

    :empty + & {
      display: none;
    }

    & > svg {
      display: block;
      line-height: 0;
      transform-origin: ${e/2}px ${e/2}px;
    }

    [data-placement^='top'] > & {
      bottom: -${e}px;

      & > svg {
        transform: rotate(0);
      }
    }

    [data-placement^='right'] > & {
      left: -${e}px;

      & > svg {
        transform: rotate(90deg);
      }
    }

    [data-placement^='left'] > & {
      right: -${e}px;

      & > svg {
        transform: rotate(-90deg);
      }
    }

    [data-placement^='bottom'] > & {
      top: -${e}px;

      & > svg {
        transform: rotate(180deg);
      }
    }
  `),tU=s.I4.path.withConfig({displayName:"StrokePath",componentId:"sc-12vzy6c-1"})`stroke:var(--card-shadow-outline-color);`,tq=s.I4.path.withConfig({displayName:"ShapePath",componentId:"sc-12vzy6c-2"})`fill:var(--card-bg-color);`,tK=(0,l.forwardRef)(function(e,t){let o,r,n,i,l,s,c,u,f,p,h=(0,d.c)(29);h[0]!==e?({width:i,height:o,radius:n,...r}=e,h[0]=e,h[1]=o,h[2]=r,h[3]=n,h[4]=i):(o=h[1],r=h[2],n=h[3],i=h[4]);let g=void 0===n?0:n,{card:b}=Q(),m=b.shadow.outline,v=i/2;h[5]!==v||h[6]!==o||h[7]!==g||h[8]!==i?(l=(function(e){let t=e.length,o=[];for(let r=0;r<t;r+=1){let t=e[r],n=e[r-1],i=e[r+1];if(n&&t.radius){let e=tY(t,n,t.radius),r=tY(t,i,t.radius),a=tG(e,t,.5),d=tG(t,r,.5);o.push({type:"point",...e}),o.push({type:"curve",curveEnd:r,startControl:a,endControl:d})}else o.push({type:"point",...t})}return o})([{x:0,y:0},{x:g,y:0,radius:g},{x:v,y:o-1,radius:g},{x:i-g,y:0,radius:g},{x:i,y:0}]).map((e,t)=>"point"===e.type?`${0===t?"M":"L"} ${e.x} ${e.y}`:"curve"===e.type?`C ${e.startControl.x} ${e.startControl.y} ${e.endControl.x} ${e.endControl.y} ${e.curveEnd.x} ${e.curveEnd.y}`:"").join(" "),h[5]=v,h[6]=o,h[7]=g,h[8]=i,h[9]=l):l=h[9];let w=l,y=`${w}`,x=`${w} M ${i} -1 M 0 -1 Z`,$=`0 0 ${i} ${i}`;h[10]!==m||h[11]!==i?(s=(0,a.jsx)("mask",{id:"stroke-mask",children:(0,a.jsx)("rect",{x:0,y:m,width:i,height:i,fill:"white"})}),h[10]=m,h[11]=i,h[12]=s):s=h[12];let k=2*m;return h[13]!==y||h[14]!==k?(c=(0,a.jsx)(tU,{d:y,mask:"url(#stroke-mask)",strokeWidth:k}),h[13]=y,h[14]=k,h[15]=c):c=h[15],h[16]!==x?(u=(0,a.jsx)(tq,{d:x}),h[16]=x,h[17]=u):u=h[17],h[18]!==$||h[19]!==s||h[20]!==c||h[21]!==u||h[22]!==i?(f=(0,a.jsxs)("svg",{width:i,height:i,viewBox:$,children:[s,c,u]}),h[18]=$,h[19]=s,h[20]=c,h[21]=u,h[22]=i,h[23]=f):f=h[23],h[24]!==t||h[25]!==r||h[26]!==f||h[27]!==i?(p=(0,a.jsx)(tX,{...r,$w:i,ref:t,children:f}),h[24]=t,h[25]=r,h[26]=f,h[27]=i,h[28]=p):p=h[28],p});tK.displayName="ForwardRef(Arrow)";let tZ=X("@sanity/ui/context/boundaryElement",null);function tQ(e){return!!(e&&"object"==typeof e&&!Array.isArray(e))}let t0={version:0,element:null};function t1(){let e=(0,l.useContext)(tZ);if(e&&(!tQ(e)||0!==e.version))throw Error("useBoundaryElement(): the context value is not compatible");return e||t0}function t2(e){if(!tQ(e)||0!==e.version)throw Error("the context value is not compatible");if(!e)throw Error("components using `useLayer()` should be wrapped in a <LayerProvider>.");if(0===e.version)return e;throw Error("could not get layer context")}(0,l.forwardRef)(function(e,t){let o,r,n,i,s,c,u,f,p=(0,d.c)(18),h=Q();p[0]!==e?({children:r,media:o,...n}=e,p[0]=e,p[1]=o,p[2]=r,p[3]=n):(o=p[1],r=p[2],n=p[3]);let g=o??h.media,[b,m]=(0,l.useState)(null),v=V(b)?.border.width??window.innerWidth;if(p[4]!==g||p[5]!==v){let e=function(e,t){let o=[];for(let r=0;r<e.length;r+=1)e[r]>t&&o.push(r);return o}(g,v);i=e.length?e.join(" "):void 0,p[4]=g,p[5]=v,p[6]=i}else i=p[6];let w=i;if(p[7]!==g||p[8]!==v){let e=function(e,t){let o=[];for(let r=0;r<e.length;r+=1)e[r]<=t&&o.push(r);return o}(g,v);s=e.length?e.join(" "):void 0,p[7]=g,p[8]=v,p[9]=s}else s=p[9];let y=s;return p[10]!==b?(c=()=>b,u=[b],p[10]=b,p[11]=c,p[12]=u):(c=p[11],u=p[12]),(0,l.useImperativeHandle)(t,c,u),p[13]!==r||p[14]!==w||p[15]!==y||p[16]!==n?(f=(0,a.jsx)("div",{"data-ui":"ElementQuery",...n,"data-eq-max":w,"data-eq-min":y,ref:m,children:r}),p[13]=r,p[14]=w,p[15]=y,p[16]=n,p[17]=f):f=p[17],f}).displayName="ForwardRef(ElementQuery)";let t4=X("@sanity/ui/context/layer",null);function t3(e){let t,o,r,n,i,s,c,u=(0,d.c)(19),{children:f,zOffset:p}=e,h=(0,l.useContext)(t4);u[0]!==h?(t=h&&t2(h),u[0]=h,u[1]=t):t=u[1];let g=t,b=g?.registerChild,m=(g?.level??0)+1,v=J(void 0===p?0:p),w=v.length-1,y=Math.min(et(),w),x=g?g.zIndex+v[y]:v[y];u[2]===Symbol.for("react.memo_cache_sentinel")?(o={},u[2]=o):o=u[2];let[,$]=(0,l.useState)(o),[k,I]=(0,l.useState)(0),j=0===k;u[3]!==b||u[4]!==$?(r=e=>{let t=b?.(e);return void 0!==e?$(t=>{let o=t[e]??0,r={...t,[e]:o+1};return I(Object.keys(r).length),r}):I(t6),()=>{void 0!==e?$(t=>{let o={...t};return 1===o[e]?(delete o[e],I(Object.keys(o).length)):o[e]=o[e]-1,o}):I(t5),t?.()}},u[3]=b,u[4]=$,u[5]=r):r=u[5];let R=r;u[6]!==m||u[7]!==b?(n=()=>b?.(m),i=[m,b],u[6]=m,u[7]=b,u[8]=n,u[9]=i):(n=u[8],i=u[9]),(0,l.useEffect)(n,i),u[10]!==j||u[11]!==m||u[12]!==R||u[13]!==k||u[14]!==x?(s={version:0,isTopLayer:j,level:m,registerChild:R,size:k,zIndex:x},u[10]=j,u[11]=m,u[12]=R,u[13]=k,u[14]=x,u[15]=s):s=u[15];let S=s;return u[16]!==f||u[17]!==S?(c=(0,a.jsx)(t4.Provider,{value:S,children:f}),u[16]=f,u[17]=S,u[18]=c):c=u[18],c}function t5(e){return e-1}function t6(e){return e+1}function t7(){let e=(0,d.c)(2),t=(0,l.useContext)(t4);if(!t)throw Error("useLayer(): missing context value");try{let o;return e[0]!==t?(o=t2(t),e[0]=t,e[1]=o):o=e[1],o}catch(e){throw e instanceof Error?Error(`useLayer(): ${e.message}`):Error(`useLayer(): ${e}`)}}t3.displayName="LayerProvider";let t8=s.I4.div.withConfig({displayName:"StyledLayer",componentId:"sc-16kojrv-0"})({position:"relative"}),t9=(0,l.forwardRef)(function(e,t){let o,r,n,i,s,c,u,f,p,h,g,b=(0,d.c)(22);b[0]!==e?({children:o,onActivate:r,onFocus:n,style:s,...i}=e,b[0]=e,b[1]=o,b[2]=r,b[3]=n,b[4]=i,b[5]=s):(o=b[1],r=b[2],n=b[3],i=b[4],s=b[5]);let m=void 0===s?x:s,{zIndex:v,isTopLayer:w}=t7(),y=(0,l.useRef)(null),$=(0,l.useRef)(null),k=(0,l.useRef)(w);b[6]===Symbol.for("react.memo_cache_sentinel")?(c=()=>$.current,b[6]=c):c=b[6],(0,l.useImperativeHandle)(t,c),b[7]!==w||b[8]!==r?(u=()=>{k.current!==w&&w&&r?.({activeElement:y.current}),k.current=w},f=[w,r],b[7]=w,b[8]=r,b[9]=u,b[10]=f):(u=b[9],f=b[10]),(0,l.useEffect)(u,f),b[11]!==w||b[12]!==n?(p=e=>{n?.(e);let t=$.current,o=document.activeElement;!w||!t||!o||R(o)&&A(t,o)&&(y.current=o)},b[11]=w,b[12]=n,b[13]=p):p=b[13];let I=p;return b[14]!==m||b[15]!==v?(h={...m,zIndex:v},b[14]=m,b[15]=v,b[16]=h):h=b[16],b[17]!==o||b[18]!==I||b[19]!==i||b[20]!==h?(g=(0,a.jsx)(t8,{...i,"data-ui":"Layer",onFocus:I,ref:$,style:h,children:o}),b[17]=o,b[18]=I,b[19]=i,b[20]=h,b[21]=g):g=b[21],g}),oe=(0,l.forwardRef)(function(e,t){let o,r,n,i,l,s=(0,d.c)(11);s[0]!==e?({children:o,zOffset:n,...r}=e,s[0]=e,s[1]=o,s[2]=r,s[3]=n):(o=s[1],r=s[2],n=s[3]);let c=void 0===n?1:n;return s[4]!==o||s[5]!==t||s[6]!==r?(i=(0,a.jsx)(t9,{...r,ref:t,children:o}),s[4]=o,s[5]=t,s[6]=r,s[7]=i):i=s[7],s[8]!==i||s[9]!==c?(l=(0,a.jsx)(t3,{zOffset:c,children:i}),s[8]=i,s[9]=c,s[10]=l):l=s[10],l});oe.displayName="ForwardRef(Layer)";let ot="@sanity/ui/context/portal",oo=Symbol.for(`${ot}/element`);G[oo]=null;let or=X(ot,{version:0,boundaryElement:null,get element(){return typeof document>"u"?null:(G[oo]||(G[oo]=document.createElement("div"),G[oo].setAttribute("data-portal",""),document.body.appendChild(G[oo])),G[oo])}});function on(){let e=(0,l.useContext)(or);if(!e)throw Error("usePortal(): missing context value");if(!tQ(e)||0!==e.version)throw Error("usePortal(): the context value is not compatible");return e}function oi(e){let t,o=(0,d.c)(3),{children:r,__unstable_name:n}=e,i=on(),a=(n?i.elements&&i.elements[n]:i.element)||i.elements?.default;return a?(o[0]!==r||o[1]!==a?(t=(0,v.createPortal)(r,a),o[0]=r,o[1]=a,o[2]=t):t=o[2],t):null}oi.displayName="Portal";let oa=s.I4.div.withConfig({displayName:"StyledSrOnly",componentId:"sc-mubr0c-0"})`display:block;width:0;height:0;position:absolute;overflow:hidden;overflow:clip;`;(0,l.forwardRef)(function(e,t){let o,r=(0,d.c)(4),{as:n,children:i}=e;return r[0]!==n||r[1]!==i||r[2]!==t?(o=(0,a.jsx)(oa,{"aria-hidden":!0,as:n,"data-ui":"SrOnly",ref:t,children:i}),r[0]=n,r[1]=i,r[2]=t,r[3]=o):o=r[3],o}).displayName="ForwardRef(SrOnly)";let od=s.I4.div.withConfig({displayName:"StyledVirtualList",componentId:"sc-dlqsj4-0"})`position:relative;`,ol=s.I4.div.withConfig({displayName:"ItemWrapper",componentId:"sc-dlqsj4-1"})`position:absolute;left:0;right:0;`;function os(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,o=t&&"isReactWarning"in t&&t.isReactWarning;return o?e.ref:(o=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}(0,l.forwardRef)(function(e,t){let o,r,n,i,s,c,u,f,p,h,g,b,m,v,w,y,x,$,k,I=(0,d.c)(56);I[0]!==e?({as:s,gap:c,getItemKey:o,items:u,onChange:r,renderItem:n,...i}=e,I[0]=e,I[1]=o,I[2]=r,I[3]=n,I[4]=i,I[5]=s,I[6]=c,I[7]=u):(o=I[1],r=I[2],n=I[3],i=I[4],s=I[5],c=I[6],u=I[7]);let j=void 0===s?"div":s,R=void 0===c?0:c;I[8]!==u?(f=void 0===u?[]:u,I[8]=u,I[9]=f):f=I[9];let S=f,{space:C}=Q(),z=(0,l.useRef)(null),N=(0,l.useRef)(null),[E,A]=(0,l.useState)(0),[W,_]=(0,l.useState)(0),[H,L]=(0,l.useState)(-1);I[10]===Symbol.for("react.memo_cache_sentinel")?(p=()=>z.current,I[10]=p):p=I[10],(0,l.useImperativeHandle)(t,p),I[11]===Symbol.for("react.memo_cache_sentinel")?(h=()=>{if(!N.current)return;let e=N.current.firstChild;e instanceof HTMLElement&&L(e.offsetHeight)},I[11]=h):h=I[11],I[12]!==n?(g=[n],I[12]=n,I[13]=g):g=I[13],(0,l.useEffect)(h,g),I[14]===Symbol.for("react.memo_cache_sentinel")?(b=()=>{if(!z.current)return;let e=function(e){let t=e;for(;t&&!function(e){if(!(e instanceof Element))return!1;let t=window.getComputedStyle(e);return t.overflowX.includes("auto")||t.overflowX.includes("scroll")||t.overflowY.includes("auto")||t.overflowY.includes("scroll")}(t);)t=t.parentNode;return t}(z.current.parentNode);if(e){if(!(e instanceof HTMLElement))return;let t=()=>{A(e.scrollTop)};e.addEventListener("scroll",t,{passive:!0});let o=new P(e=>{_(e[0].contentRect.height)});return o.observe(e),t(),()=>{e.removeEventListener("scroll",t),o.unobserve(e),o.disconnect()}}let t=()=>{A(window.scrollY)},o=()=>{_(window.innerHeight)};return window.addEventListener("scroll",t,{passive:!0}),window.addEventListener("resize",o),_(window.innerHeight),t(),()=>{window.removeEventListener("scroll",t),window.removeEventListener("resize",o)}},m=[],I[14]=b,I[15]=m):(b=I[14],m=I[15]),(0,l.useEffect)(b,m);let M=S.length,T=H?M*(H+C[R])-C[R]:0,J=T?Math.max(Math.floor(E/T*M)-2,0):0,F=T?Math.ceil((E+W)/T*M)+1:0;I[16]!==J||I[17]!==R||I[18]!==H||I[19]!==r||I[20]!==W||I[21]!==E||I[22]!==C||I[23]!==F?(w=()=>{r&&r({fromIndex:J,gap:C[R],itemHeight:H,scrollHeight:W,scrollTop:E,toIndex:F})},v=[J,R,H,r,W,E,C,F],I[16]=J,I[17]=R,I[18]=H,I[19]=r,I[20]=W,I[21]=E,I[22]=C,I[23]=F,I[24]=v,I[25]=w):(v=I[24],w=I[25]),(0,l.useEffect)(w,v);e:{let e;if(!n||0===S.length){y=null;break e}if(-1===H){let e,t;I[26]!==S[0]||I[27]!==n?(e=n(S[0]),I[26]=S[0],I[27]=n,I[28]=e):e=I[28],I[29]!==e?(t=[(0,a.jsx)(ol,{children:e},0)],I[29]=e,I[30]=t):t=I[30],y=t;break e}if(I[31]!==J||I[32]!==R||I[33]!==o||I[34]!==H||I[35]!==S||I[36]!==n||I[37]!==C||I[38]!==F){let t;I[40]!==J||I[41]!==R||I[42]!==o||I[43]!==H||I[44]!==n||I[45]!==C?(t=(e,t)=>{let r=J+t,i=n(e),d=o?o(e,r):r;return(0,a.jsx)(ol,{style:{top:r*(H+C[R])},children:i},d)},I[40]=J,I[41]=R,I[42]=o,I[43]=H,I[44]=n,I[45]=C,I[46]=t):t=I[46],e=S.slice(J,F).map(t),I[31]=J,I[32]=R,I[33]=o,I[34]=H,I[35]=S,I[36]=n,I[37]=C,I[38]=F,I[39]=e}else e=I[39];y=e}let O=y;I[47]!==T?(x={height:T},I[47]=T,I[48]=x):x=I[48];let B=x;return I[49]!==O||I[50]!==B?($=(0,a.jsx)("div",{ref:N,style:B,children:O}),I[49]=O,I[50]=B,I[51]=$):$=I[51],I[52]!==j||I[53]!==i||I[54]!==$?(k=(0,a.jsx)(od,{as:j,"data-ui":"VirtualList",...i,ref:z,children:$}),I[52]=j,I[53]=i,I[54]=$,I[55]=k):k=I[55],k}).displayName="ForwardRef(VirtualList)";let oc=[0,0,0,0],ou={top:["bottom","left","right"],"top-start":["bottom-start","left-start","right-start"],"top-end":["bottom-end","left-end","right-end"],bottom:["top","left","right"],"bottom-start":["top-start","left-start","right-start"],"bottom-end":["top-end","left-end","right-end"],left:["right","top","bottom"],"left-start":["right-start","top-start","bottom-start"],"left-end":["right-end","top-end","bottom-end"],right:["left","top","bottom"],"right-start":["left-start","top-start","bottom-start"],"right-end":["left-end","top-end","bottom-end"]},of=(0,s.I4)(g.P.create(tI)).withConfig({displayName:"MotionCard",componentId:"sc-ihg31s-0"})`&:not([hidden]){display:flex;}flex-direction:column;width:max-content;min-width:min-content;will-change:transform;`,op=(0,s.I4)(g.P.create(th)).withConfig({displayName:"MotionFlex",componentId:"sc-ihg31s-1"})`will-change:opacity;`,oh=(0,l.memo)((0,l.forwardRef)(function(e,t){let o,r,n,i,l,s,c,u,f,p,h,g,b,m,v,w,y,x,j,R,S,C,z,N,E,A,W,_,H,L,M,T=(0,d.c)(66);T[0]!==e?({__unstable_margins:c,animate:o,arrow:r,arrowRef:n,arrowX:i,arrowY:l,children:s,padding:h,placement:g,originX:u,originY:f,overflow:p,radius:b,scheme:v,shadow:w,strategy:y,style:x,tone:j,width:R,x:S,y:C,...m}=e,T[0]=e,T[1]=o,T[2]=r,T[3]=n,T[4]=i,T[5]=l,T[6]=s,T[7]=c,T[8]=u,T[9]=f,T[10]=p,T[11]=h,T[12]=g,T[13]=b,T[14]=m,T[15]=v,T[16]=w,T[17]=y,T[18]=x,T[19]=j,T[20]=R,T[21]=S,T[22]=C):(o=T[1],r=T[2],n=T[3],i=T[4],l=T[5],s=T[6],c=T[7],u=T[8],f=T[9],p=T[10],h=T[11],g=T[12],b=T[13],m=T[14],v=T[15],w=T[16],y=T[17],x=T[18],j=T[19],R=T[20],S=T[21],C=T[22]);let{zIndex:J}=t7(),F=c||oc,O=(S??0)+F[3],B=(C??0)+F[0],P=o?"transform":void 0;T[23]!==u||T[24]!==f||T[25]!==y||T[26]!==x||T[27]!==P||T[28]!==R||T[29]!==O||T[30]!==B||T[31]!==J?(z={left:O,originX:u,originY:f,position:y,top:B,width:R,zIndex:J,willChange:P,...x},T[23]=u,T[24]=f,T[25]=y,T[26]=x,T[27]=P,T[28]=R,T[29]=O,T[30]=B,T[31]=J,T[32]=z):z=T[32];let D=z,V=null!==i?i:void 0,Y=null!==l?l:void 0;T[33]!==V||T[34]!==Y?(N={left:V,top:Y,right:void 0,bottom:void 0},T[33]=V,T[34]=Y,T[35]=N):N=T[35];let G=N,X=m;return T[36]!==o?(E=o?["hidden","initial"]:void 0,T[36]=o,T[37]=E):E=T[37],T[38]!==o?(A=o?["visible","scaleIn"]:void 0,T[38]=o,T[39]=A):A=T[39],T[40]!==o?(W=o?["hidden","scaleOut"]:void 0,T[40]=o,T[41]=W):W=T[41],T[42]!==s||T[43]!==h?(_=(0,a.jsx)(th,{direction:"column",flex:1,padding:h,children:s}),T[42]=s,T[43]=h,T[44]=_):_=T[44],T[45]!==p||T[46]!==_?(H=(0,a.jsx)(op,{"data-ui":"Popover__wrapper",direction:"column",flex:1,overflow:p,variants:k,transition:I,children:_}),T[45]=p,T[46]=_,T[47]=H):H=T[47],T[48]!==r||T[49]!==n||T[50]!==G?(L=r&&(0,a.jsx)(tK,{ref:n,style:G,width:19,height:8,radius:2}),T[48]=r,T[49]=n,T[50]=G,T[51]=L):L=T[51],T[52]!==g||T[53]!==b||T[54]!==t||T[55]!==D||T[56]!==v||T[57]!==w||T[58]!==H||T[59]!==L||T[60]!==X||T[61]!==E||T[62]!==A||T[63]!==W||T[64]!==j?(M=(0,a.jsxs)(of,{"data-ui":"Popover",...X,"data-placement":g,radius:b,ref:t,scheme:v,shadow:w,sizing:"border",style:D,tone:j,variants:$,transition:I,initial:E,animate:A,exit:W,children:[H,L]}),T[52]=g,T[53]=b,T[54]=t,T[55]=D,T[56]=v,T[57]=w,T[58]=H,T[59]=L,T[60]=X,T[61]=E,T[62]=A,T[63]=W,T[64]=j,T[65]=M):M=T[65],M}));oh.displayName="Memo(ForwardRef(PopoverCard))";let og=()=>{let e,t=(0,d.c)(2),{zIndex:o}=t7();return t[0]!==o?(e=(0,a.jsx)("div",{style:{height:"100vh",inset:0,position:"fixed",width:"100vw",zIndex:o}}),t[0]=o,t[1]=e):e=t[1],e},ob=(0,l.memo)((0,l.forwardRef)(function(e,t){let{container:o,layer:r}=Q(),n=t1(),{__unstable_margins:i=oc,animate:d=!1,arrow:s=!1,boundaryElement:c=n.element,children:u,constrainSize:f=!1,content:g,disabled:m,fallbackPlacements:v=e.fallbackPlacements??ou[e.placement??"bottom"],matchReferenceWidth:w,floatingBoundary:y=e.boundaryElement??n.element,modal:x,onActivate:$,open:k,overflow:I="hidden",padding:j,placement:R="bottom",placementStrategy:S="flip",portal:C,preventOverflow:z=!0,radius:N=3,referenceBoundary:E=e.boundaryElement??n.element,referenceElement:A,scheme:W,shadow:_=3,tone:H="inherit",width:L="auto",zOffset:M=r.popover.zOffset,updateRef:T,...F}=e,O=!eo()&&d,B=V(c)?.border,P=J(j),D=J(N),Y=J(_),G=J(L),X=J(M),U=(0,l.useRef)(null),q=(0,l.useRef)(null),K="viewport";(0,l.useImperativeHandle)(t,()=>U.current);let Z=et(),ee=f||z?B?.width:void 0,er=function(e){let{container:t,mediaIndex:o,width:r}=e,n=r[o],i=void 0===n?r[r.length-1]:n;return"number"==typeof i?t[i]:void 0}({container:o,mediaIndex:Z,width:G}),en=(0,l.useRef)(er);(0,l.useEffect)(()=>{en.current=er},[er]);let ei=function(e){let{boundaryWidth:t,currentWidth:o}=e;if(void 0!==o||void 0!==t)return Math.min(o??1/0,(t||1/0)-8)}({boundaryWidth:ee,currentWidth:er}),ea=(0,l.useRef)(ei);(0,l.useEffect)(()=>{ea.current=ei},[ei]);let ed=(0,l.useRef)(void 0);(0,l.useEffect)(()=>{let e=U.current;if(!k||!e)return;let t=ed.current;w?void 0!==t&&(e.style.width=`${t}px`):void 0!==er&&(e.style.width=`${er}px`),"number"==typeof ei&&(e.style.maxWidth=`${ei}px`)},[er,w,ei,k]);let el=(0,l.useMemo)(()=>{let e=[];return(f||z)&&("autoPlacement"===S?e.push((0,h.RK)({allowedPlacements:[R].concat(v)})):e.push((0,h.UU)({boundary:y||void 0,fallbackPlacements:v,padding:4,rootBoundary:K}))),e.push((0,h.cY)({mainAxis:4})),(f||w)&&e.push(function(e){let{apply:t,margins:o,padding:r=0}=e;return{name:"@sanity/ui/size",async fn(n){let{elements:i,placement:a,platform:d,rects:l}=n,{floating:s,reference:c}=l,u=await (0,p.__)(n,{altBoundary:!0,boundary:e.boundaryElement||void 0,elementContext:"floating",padding:r,rootBoundary:"viewport"}),f=1/0,h=1/0,g=s.width,b=s.height;a.includes("top")&&(f=g-(u.left+u.right),h=b-u.top),a.includes("right")&&(f=g-u.right,h=b-(u.top+u.bottom)),a.includes("bottom")&&(f=g-(u.left+u.right),h=b-u.bottom),a.includes("left")&&(f=g-u.left,h=b-(u.top+u.bottom)),t({availableWidth:f-o[1]-o[3],availableHeight:h-o[0]-o[2],elements:i,referenceWidth:c.width-o[1]-o[3]});let m=await d.getDimensions(i.floating),v=m.height;return g!==m.width||b!==v?{reset:{rects:!0}}:{}}}}({apply({availableWidth:e,availableHeight:t,elements:o,referenceWidth:r}){ed.current=r;let n=en.current,i=ea.current;w?o.floating.style.width=`${r}px`:void 0!==n&&(o.floating.style.width=`${n}px`),f&&(o.floating.style.maxWidth=`${Math.min(e,i??1/0)}px`,o.floating.style.maxHeight=`${t}px`)},boundaryElement:y||void 0,margins:i,padding:4})),z&&e.push((0,h.BN)({boundary:y||void 0,rootBoundary:K,padding:4})),s&&e.push((0,h.UE)({element:q,padding:4})),O&&e.push(tD),e.push((0,h.jD)({boundary:E||void 0,padding:4,strategy:"referenceHidden"})),e},[O,s,f,v,R,S,y,i,w,z,E]),{x:es,y:ec,middlewareData:eu,placement:ef,refs:ep,strategy:eh,update:eg}=(0,h.we)({middleware:el,placement:R,whileElementsMounted:p.ll,elements:A?{reference:A}:void 0}),eb=eu.hide?.referenceHidden,em=eu.arrow?.x,ev=eu.arrow?.y,ew=eu["@sanity/ui/origin"]?.originX,ey=eu["@sanity/ui/origin"]?.originY,ex=(0,l.useCallback)(e=>{q.current=e},[]),e$=(0,l.useCallback)(e=>{U.current=e,ep.setFloating(e)},[ep]),ek=(0,l.useCallback)(e=>{ep.setReference(e);let t=os(u);"function"==typeof t?t(e):t&&(t.current=e)},[u,ep]),eI=(0,l.useMemo)(()=>A?u:u?(0,l.cloneElement)(u,{ref:ek}):null,[u,A,ek]);if((0,l.useEffect)(()=>{T&&("function"==typeof T?T(eg):T&&(T.current=eg))},[eg,T]),m)return u||(0,a.jsx)(a.Fragment,{});let ej=(0,a.jsxs)(t3,{zOffset:X,children:[x&&(0,a.jsx)(og,{}),(0,a.jsx)(oh,{...F,__unstable_margins:i,animate:O,arrow:s,arrowRef:ex,arrowX:em,arrowY:ev,hidden:eb,overflow:I,padding:P,placement:ef,radius:D,ref:e$,scheme:W,shadow:Y,originX:ew,originY:ey,strategy:eh,tone:H,width:w?ed.current:er,x:es,y:ec,children:g})]}),eR=k&&(C?(0,a.jsx)(oi,{__unstable_name:"string"==typeof C?C:void 0,children:ej}):ej);return(0,a.jsxs)(a.Fragment,{children:[O?(0,a.jsx)(b.N,{children:eR}):eR,eI]})}));ob.displayName="Memo(ForwardRef(Popover))";let om=s.I4.div.withConfig({displayName:"StyledRadio",componentId:"sc-ccrwkf-0"})(function(){return(0,s.AH)`
    position: relative;

    &:not([hidden]) {
      display: inline-block;
    }

    &[data-read-only] {
      outline: 1px solid red;
    }
  `}),ov=s.I4.input.withConfig({displayName:"Input",componentId:"sc-ccrwkf-1"})(function(e){let{color:t,input:o}=(0,i.JW)(e.theme),r=(o.radio.size-o.radio.markSize)/2;return(0,s.AH)`
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    height: 100%;
    width: 100%;
    outline: none;
    z-index: 1;
    padding: 0;
    margin: 0;
    border-radius: ${W(o.radio.size/2)};
    border: none;

    /* enabled */
    & + span {
      display: block;
      position: relative;
      height: ${W(o.radio.size)};
      width: ${W(o.radio.size)};
      border-radius: ${W(o.radio.size/2)};
      background: ${t.input.default.enabled.bg};
      box-shadow: ${ej({color:t.input.default.enabled.border,width:o.border.width})};

      &::after {
        content: '';
        position: absolute;
        top: ${W(r)};
        left: ${W(r)};
        height: ${W(o.radio.markSize)};
        width: ${W(o.radio.markSize)};
        border-radius: ${W(o.radio.markSize/2)};
        background: ${t.input.default.enabled.fg};
        opacity: 0;
      }
    }

    /* focused */
    &:not(:disabled):focus + span {
      box-shadow: ${eR({border:{width:o.border.width,color:t.input.default.enabled.border},focusRing:o.radio.focusRing})};
    }

    &:not(:disabled):focus:not(:focus-visible) + span {
      box-shadow: ${ej({color:t.input.default.enabled.border,width:o.border.width})};
    }

    &:checked + span::after {
      opacity: 1;
    }

    /* customValidity */
    &[data-error] + span {
      background-color: ${t.input.invalid.enabled.border};
      box-shadow: ${ej({width:o.border.width,color:t.input.invalid.enabled.muted.bg})};
      &::after {
        background: ${t.input.invalid.enabled.muted.bg};
      }
    }

    /* read only */
    &[data-read-only] + span {
      box-shadow: 0 0 0 1px ${t.input.default.readOnly.border};
      background: ${t.input.default.readOnly.bg};

      &::after {
        background: ${t.input.default.readOnly.border};
      }
    }

    /* disabled */
    &:not([data-read-only]):disabled + span {
      box-shadow: 0 0 0 1px ${t.input.default.disabled.border};
      background: ${t.input.default.disabled.bg};

      &::after {
        background: ${t.input.default.disabled.border};
      }
    }
  `}),ow=(0,l.forwardRef)(function(e,t){let o,r,n,i,s,c,u,f,p,h,g=(0,d.c)(19);g[0]!==e?({className:o,disabled:n,style:c,customValidity:r,readOnly:i,...s}=e,g[0]=e,g[1]=o,g[2]=r,g[3]=n,g[4]=i,g[5]=s,g[6]=c):(o=g[1],r=g[2],n=g[3],i=g[4],s=g[5],c=g[6]);let b=(0,l.useRef)(null);g[7]===Symbol.for("react.memo_cache_sentinel")?(u=()=>b.current,g[7]=u):u=g[7],(0,l.useImperativeHandle)(t,u),B(b,r);let m=!n&&i?"":void 0,v=r?"":void 0,w=n||i;return g[8]!==i||g[9]!==s||g[10]!==m||g[11]!==v||g[12]!==w?(f=(0,a.jsx)(ov,{"data-read-only":m,"data-error":v,...s,disabled:w,readOnly:i,ref:b,type:"radio"}),g[8]=i,g[9]=s,g[10]=m,g[11]=v,g[12]=w,g[13]=f):f=g[13],g[14]===Symbol.for("react.memo_cache_sentinel")?(p=(0,a.jsx)("span",{}),g[14]=p):p=g[14],g[15]!==o||g[16]!==c||g[17]!==f?(h=(0,a.jsxs)(om,{className:o,"data-ui":"Radio",style:c,children:[f,p]}),g[15]=o,g[16]=c,g[17]=f,g[18]=h):h=g[18],h});function oy(e){let{font:t}=(0,i.JW)(e.theme);return(0,s.AH)`
    -webkit-font-smoothing: antialiased;
    appearance: none;
    border: 0;
    font-family: ${t.text.family};
    color: inherit;
    width: 100%;
    outline: none;
    margin: 0;

    &:disabled {
      opacity: 1;
    }
  `}function ox(e){let{color:t,input:o}=(0,i.JW)(e.theme);return(0,s.AH)`
    /* enabled */
    background-color: ${t.input.default.enabled.bg};
    color: ${t.input.default.enabled.fg};
    box-shadow: ${ej({color:t.input.default.enabled.border,width:o.border.width})};

    /* hovered */
    @media (hover: hover) {
      &:not(:disabled):hover {
        background-color: ${t.input.default.hovered.bg};
        color: ${t.input.default.hovered.fg};
        box-shadow: ${ej({color:t.input.default.hovered.border,width:o.border.width})};
      }
    }

    /* focused */
    &:not(:disabled):focus {
      box-shadow: ${eR({border:{width:o.border.width,color:t.input.default.enabled.border},focusRing:o.select.focusRing})};
    }

    /* read-only */
    &[data-read-only] {
      background-color: ${t.input.default.readOnly.bg};
      color: ${t.input.default.readOnly.fg};
      box-shadow: ${ej({color:t.input.default.readOnly.border,width:o.border.width})};
    }

    /* disabled */
    &:not([data-read-only]):disabled {
      background-color: ${t.input.default.disabled.bg};
      color: ${t.input.default.disabled.fg};
      box-shadow: ${ej({color:t.input.default.disabled.border,width:o.border.width})};
    }
  `}function o$(e){let{$fontSize:t}=e,{font:o,media:r}=(0,i.JW)(e.theme);return _(r,t,e=>{var t;return{fontSize:W((t=o.text.sizes[e]||o.text.sizes[2]).fontSize),lineHeight:`${W(t.lineHeight)}`}})}ow.displayName="ForwardRef(Radio)";let ok=s.I4.div.withConfig({displayName:"StyledSelect",componentId:"sc-5mxno7-0"})(function(){return(0,s.AH)`
    position: relative;
    width: -moz-available;
    width: -webkit-fill-available;
    width: stretch;

    &:not([hidden]) {
      display: inline-block;
    }
  `}),oI=s.I4.select.withConfig({displayName:"Input",componentId:"sc-5mxno7-1"})(function(){return[e0,oy,ox,o$,eG]}),oj=(0,s.I4)(ts).withConfig({displayName:"IconBox",componentId:"sc-5mxno7-2"})(function(e){let{color:t}=(0,i.JW)(e.theme);return(0,s.AH)`
    pointer-events: none;
    position: absolute;
    top: 0;
    right: 0;

    /* enabled */
    --card-fg-color: ${t.input.default.enabled.fg};

    /* hover */
    @media (hover: hover) {
      select:not(disabled):not(:read-only):hover + && {
        --card-fg-color: ${t.input.default.hovered.fg};
      }
    }

    /* disabled */
    select:disabled + && {
      --card-fg-color: ${t.input.default.disabled.fg};
    }

    /* read-only */
    select[data-read-only] + && {
      --card-fg-color: ${t.input.default.readOnly.fg};
    }
  `});(0,l.forwardRef)(function(e,t){let o,r,n,i,s,c,u,p,h,g,b,m,v,w,y,x=(0,d.c)(29);x[0]!==e?({children:o,customValidity:r,disabled:n,fontSize:c,padding:u,radius:p,readOnly:i,space:h,...s}=e,x[0]=e,x[1]=o,x[2]=r,x[3]=n,x[4]=i,x[5]=s,x[6]=c,x[7]=u,x[8]=p,x[9]=h):(o=x[1],r=x[2],n=x[3],i=x[4],s=x[5],c=x[6],u=x[7],p=x[8],h=x[9]);let $=void 0===c?2:c,k=void 0===u?3:u,I=void 0===p?2:p,j=void 0===h?3:h,R=(0,l.useRef)(null);x[10]===Symbol.for("react.memo_cache_sentinel")?(g=()=>R.current,x[10]=g):g=x[10],(0,l.useImperativeHandle)(t,g),B(R,r);let S=!n&&i?"":void 0,C=J($),z=J(k),N=J(I),E=J(j),A=n||i;return x[11]!==o||x[12]!==s||x[13]!==A||x[14]!==S||x[15]!==C||x[16]!==z||x[17]!==N||x[18]!==E?(b=(0,a.jsx)(oI,{"data-read-only":S,"data-ui":"Select",...s,$fontSize:C,$padding:z,$radius:N,$space:E,disabled:A,ref:R,children:o}),x[11]=o,x[12]=s,x[13]=A,x[14]=S,x[15]=C,x[16]=z,x[17]=N,x[18]=E,x[19]=b):b=x[19],x[20]===Symbol.for("react.memo_cache_sentinel")?(m=(0,a.jsx)(f.D3D,{}),x[20]=m):m=x[20],x[21]!==$?(v=(0,a.jsx)(tu,{size:$,children:m}),x[21]=$,x[22]=v):v=x[22],x[23]!==k||x[24]!==v?(w=(0,a.jsx)(oj,{padding:k,children:v}),x[23]=k,x[24]=v,x[25]=w):w=x[25],x[26]!==b||x[27]!==w?(y=(0,a.jsxs)(ok,{"data-ui":"Select",children:[b,w]}),x[26]=b,x[27]=w,x[28]=y):y=x[28],y}).displayName="ForwardRef(Select)";let oR={"&&:not([hidden])":{display:"grid"},'&[data-as="ul"],&[data-as="ol"]':{listStyle:"none"},gridTemplateColumns:"minmax(0, 1fr)",gridAutoRows:"min-content"},oS=(0,s.I4)(ts).withConfig({displayName:"StyledStack",componentId:"sc-8dpfq2-0"})(function(){return oR},function(e){let{media:t,space:o}=(0,i.JW)(e.theme);return _(t,e.$space,e=>({gridGap:W(o[e])}))}),oC=(0,l.forwardRef)(function(e,t){let o,r,n,i,l=(0,d.c)(10);l[0]!==e?({as:o,space:n,...r}=e,l[0]=e,l[1]=o,l[2]=r,l[3]=n):(o=l[1],r=l[2],n=l[3]);let s="string"==typeof o?o:void 0,c=J(n);return l[4]!==o||l[5]!==t||l[6]!==r||l[7]!==s||l[8]!==c?(i=(0,a.jsx)(oS,{"data-as":s,"data-ui":"Stack",...r,$space:c,forwardedAs:o,ref:t}),l[4]=o,l[5]=t,l[6]=r,l[7]=s,l[8]=c,l[9]=i):i=l[9],i});oC.displayName="ForwardRef(Stack)";let oz=s.I4.span.withConfig({displayName:"StyledSwitch",componentId:"sc-dw1foe-0"})(function(){return(0,s.AH)`
    position: relative;
    &:not([hidden]) {
      display: inline-block;
    }
  `}),oN=s.I4.input.withConfig({displayName:"Input",componentId:"sc-dw1foe-1"})(function(){return(0,s.AH)`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    height: 100%;
    width: 100%;
    outline: none;
    padding: 0;
    margin: 0;

    /* Place the input element above the representation element */
    z-index: 1;
  `}),oE=s.I4.span.withConfig({displayName:"Representation",componentId:"sc-dw1foe-2"})(function(e){let{color:t,input:o}=(0,i.JW)(e.theme);return(0,s.AH)`
    --switch-bg-color: ${t.input.default.enabled.border};
    --switch-fg-color: ${t.input.default.enabled.bg};
    --switch-box-shadow: none;

    &:not([hidden]) {
      display: block;
    }
    position: relative;
    width: ${W(o.switch.width)};
    height: ${W(o.switch.height)};
    border-radius: ${W(o.switch.height/2)};

    /* Make sure it’s not possible to interact with the wrapper element */
    pointer-events: none;

    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      box-shadow: var(--switch-box-shadow);
      border-radius: inherit;
    }

    /* Focus styles */
    input:focus + && {
      --switch-box-shadow: ${eR({focusRing:o.switch.focusRing})};
    }

    input:focus:not(:focus-visible) + && {
      --switch-box-shadow: none;
    }

    input:checked + && {
      --switch-bg-color: ${t.input.default.enabled.fg};
      --switch-fg-color: ${t.input.default.enabled.bg};
    }

    @media (hover: hover) {
      input:not(:disabled):hover + && {
        --switch-bg-color: ${t.input.default.hovered.border};
        --switch-fg-color: ${t.input.default.hovered.bg};
      }

      input:not(:disabled):checked:hover + && {
        --switch-bg-color: ${t.input.default.enabled.fg};
        --switch-fg-color: ${t.input.default.enabled.bg};
      }
    }

    input:not([data-read-only]):disabled + && {
      --switch-bg-color: ${t.input.default.disabled.border};
      --switch-fg-color: ${t.input.default.disabled.bg};
    }

    input[data-read-only]:disabled + && {
      --switch-bg-color: ${t.input.default.readOnly.border};
      --switch-fg-color: ${t.input.default.readOnly.bg};
    }

    input:checked[data-read-only]:disabled + && {
      --switch-bg-color: ${t.input.default.readOnly.fg};
      --switch-fg-color: ${t.input.default.readOnly.bg};
    }
  `}),oA=s.I4.span.withConfig({displayName:"Track",componentId:"sc-dw1foe-3"})(function(e){let{input:t}=(0,i.JW)(e.theme);return(0,s.AH)`
    &:not([hidden]) {
      display: block;
    }
    background-color: var(--switch-bg-color);
    position: absolute;
    left: 0;
    top: 0;
    width: ${W(t.switch.width)};
    height: ${W(t.switch.height)};
    border-radius: ${W(t.switch.height/2)};
  `}),oW=s.I4.span.withConfig({displayName:"Thumb",componentId:"sc-dw1foe-4"})(function(e){let{$indeterminate:t}=e,{input:o}=(0,i.JW)(e.theme),r=o.switch.width,n=o.switch.height,a=o.switch.padding,d=n-2*o.switch.padding,l=r-2*a-d,c=r/2-d/2-a,u=!0!==t&&!0===e.$checked;return(0,s.AH)`
    &:not([hidden]) {
      display: block;
    }
    position: absolute;
    left: ${W(a)};
    top: ${W(a)};
    height: ${W(d)};
    width: ${W(d)};
    border-radius: ${W(d/2)};
    transition-property: transform;
    transition-duration: ${o.switch.transitionDurationMs}ms;
    transition-timing-function: ${o.switch.transitionTimingFunction};
    background: var(--switch-fg-color);
    transform: translate3d(0, 0, 0);
    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05);

    ${u&&(0,s.AH)`
      transform: translate3d(${l}px, 0, 0);
    `}

    ${t&&(0,s.AH)`
      transform: translate3d(${c}px, 0, 0);
    `}
  `});(0,l.forwardRef)(function(e,t){let o,r,n,i,s,c,u,f,p,h,g,b,m,v,w=(0,d.c)(26);w[0]!==e?({checked:o,className:r,disabled:n,indeterminate:i,readOnly:s,style:u,...c}=e,w[0]=e,w[1]=o,w[2]=r,w[3]=n,w[4]=i,w[5]=s,w[6]=c,w[7]=u):(o=w[1],r=w[2],n=w[3],i=w[4],s=w[5],c=w[6],u=w[7]);let y=(0,l.useRef)(null);w[8]===Symbol.for("react.memo_cache_sentinel")?(f=()=>y.current,w[8]=f):f=w[8],(0,l.useImperativeHandle)(t,f),w[9]!==i?(p=()=>{y.current&&(y.current.indeterminate=i||!1)},h=[i],w[9]=i,w[10]=p,w[11]=h):(p=w[10],h=w[11]),(0,l.useEffect)(p,h);let x=!n&&s?"":void 0,$=!0!==i&&o,k=n||s;return w[12]!==c||w[13]!==x||w[14]!==$||w[15]!==k?(g=(0,a.jsx)(oN,{"data-read-only":x,...c,checked:$,disabled:k,type:"checkbox",ref:y}),w[12]=c,w[13]=x,w[14]=$,w[15]=k,w[16]=g):g=w[16],w[17]===Symbol.for("react.memo_cache_sentinel")?(b=(0,a.jsx)(oA,{}),w[17]=b):b=w[17],w[18]!==o||w[19]!==i?(m=(0,a.jsxs)(oE,{"aria-hidden":!0,"data-name":"representation",children:[b,(0,a.jsx)(oW,{$checked:o,$indeterminate:i})]}),w[18]=o,w[19]=i,w[20]=m):m=w[20],w[21]!==r||w[22]!==u||w[23]!==g||w[24]!==m?(v=(0,a.jsxs)(oz,{className:r,"data-ui":"Switch",style:u,children:[g,m]}),w[21]=r,w[22]=u,w[23]=g,w[24]=m,w[25]=v):v=w[25],v}).displayName="ForwardRef(Switch)";let o_=s.I4.span.withConfig({displayName:"StyledTextArea",componentId:"sc-1d6h1o8-0"})(eU),oH=s.I4.span.withConfig({displayName:"InputRoot",componentId:"sc-1d6h1o8-1"})`flex:1;min-width:0;display:block;position:relative;`,oL=s.I4.textarea.withConfig({displayName:"Input",componentId:"sc-1d6h1o8-2"})(eY,eq,eK),oM=s.I4.div.withConfig({displayName:"Presentation",componentId:"sc-1d6h1o8-3"})(e0,eZ);(0,l.forwardRef)(function(e,t){let o,r,n,i,s,c,u,f,p,h,g,b,m,v=(0,d.c)(29);v[0]!==e?({border:i,customValidity:r,disabled:s,fontSize:c,padding:u,radius:f,weight:p,__unstable_disableFocusRing:o,...n}=e,v[0]=e,v[1]=o,v[2]=r,v[3]=n,v[4]=i,v[5]=s,v[6]=c,v[7]=u,v[8]=f,v[9]=p):(o=v[1],r=v[2],n=v[3],i=v[4],s=v[5],c=v[6],u=v[7],f=v[8],p=v[9]);let w=void 0===i||i,y=void 0!==s&&s,x=void 0===c?2:c,$=void 0===u?3:u,k=void 0===f?2:f,I=(0,l.useRef)(null),j=K();v[10]===Symbol.for("react.memo_cache_sentinel")?(h=()=>I.current,v[10]=h):h=v[10],(0,l.useImperativeHandle)(t,h),B(I,r);let R=j.scheme,S=j.tone,C=J(x),z=J($),N=j.scheme,E=J(0);v[11]!==y||v[12]!==n||v[13]!==j.scheme||v[14]!==j.tone||v[15]!==E||v[16]!==C||v[17]!==z||v[18]!==p?(g=(0,a.jsx)(oL,{"data-as":"textarea","data-scheme":R,"data-tone":S,...n,$fontSize:C,$padding:z,$scheme:N,$space:E,$tone:j.tone,$weight:p,disabled:y,ref:I}),v[11]=y,v[12]=n,v[13]=j.scheme,v[14]=j.tone,v[15]=E,v[16]=C,v[17]=z,v[18]=p,v[19]=g):g=v[19];let A=J(k),W=w?"":void 0;return v[20]!==o||v[21]!==j.scheme||v[22]!==j.tone||v[23]!==A||v[24]!==W?(b=(0,a.jsx)(oM,{$radius:A,$unstableDisableFocusRing:o,$scheme:j.scheme,$tone:j.tone,"data-border":W,"data-scheme":j.scheme,"data-tone":j.tone}),v[20]=o,v[21]=j.scheme,v[22]=j.tone,v[23]=A,v[24]=W,v[25]=b):b=v[25],v[26]!==g||v[27]!==b?(m=(0,a.jsx)(o_,{"data-ui":"TextArea",children:(0,a.jsxs)(oH,{children:[g,b]})}),v[26]=g,v[27]=b,v[28]=m):m=v[28],m}).displayName="ForwardRef(TextArea)";let oT={zIndex:2},oJ=(0,s.I4)(tI).attrs({forwardedAs:"span"}).withConfig({displayName:"StyledTextInput",componentId:"sc-h62wco-0"})(eU),oF=s.I4.span.withConfig({displayName:"InputRoot",componentId:"sc-h62wco-1"})`flex:1;min-width:0;display:block;position:relative;`,oO=(0,s.I4)(tI).attrs({forwardedAs:"span"}).withConfig({displayName:"Prefix",componentId:"sc-h62wco-2"})`border-top-right-radius:0;border-bottom-right-radius:0;& > span{display:block;margin:-1px;}`,oB=(0,s.I4)(tI).attrs({forwardedAs:"span"}).withConfig({displayName:"Suffix",componentId:"sc-h62wco-3"})`border-top-left-radius:0;border-bottom-left-radius:0;& > span{display:block;margin:-1px;}`,oP=s.I4.input.withConfig({displayName:"Input",componentId:"sc-h62wco-4"})(eY,eq,eK),oD=s.I4.span.withConfig({displayName:"Presentation",componentId:"sc-h62wco-5"})(e0,eZ),oV=(0,s.I4)(ts).withConfig({displayName:"LeftBox",componentId:"sc-h62wco-6"})`position:absolute;top:0;left:0;`,oY=(0,s.I4)(ts).withConfig({displayName:"RightBox",componentId:"sc-h62wco-7"})`position:absolute;top:0;right:0;`,oG=(0,s.I4)(tI).withConfig({displayName:"RightCard",componentId:"sc-h62wco-8"})`background-color:transparent;position:absolute;top:0;right:0;`,oX=(0,s.I4)(t$).withConfig({displayName:"TextInputClearButton",componentId:"sc-h62wco-9"})({"&:not([hidden])":{display:"block"}}),oU=(0,l.forwardRef)(function(e,t){let o,r,n,i,s,c,p,h,g,b,m,v,w,y,$,k,I,j,R,S,C,z,N,E,A,W,_,H,L,M,T,F=(0,d.c)(84);F[0]!==e?({__unstable_disableFocusRing:n,border:m,clearButton:i,disabled:v,fontSize:w,icon:o,iconRight:r,onClear:c,padding:y,prefix:p,radius:$,readOnly:h,space:k,suffix:b,customValidity:s,type:I,weight:j,...g}=e,F[0]=e,F[1]=o,F[2]=r,F[3]=n,F[4]=i,F[5]=s,F[6]=c,F[7]=p,F[8]=h,F[9]=g,F[10]=b,F[11]=m,F[12]=v,F[13]=w,F[14]=y,F[15]=$,F[16]=k,F[17]=I,F[18]=j):(o=F[1],r=F[2],n=F[3],i=F[4],s=F[5],c=F[6],p=F[7],h=F[8],g=F[9],b=F[10],m=F[11],v=F[12],w=F[13],y=F[14],$=F[15],k=F[16],I=F[17],j=F[18]);let O=void 0===m||m,P=void 0!==v&&v,D=void 0===w?2:w,V=void 0===y?3:y,Y=void 0===$?2:$,G=void 0===k?3:k,X=void 0===I?"text":I,U=(0,l.useRef)(null),q=K(),Z=J(D),Q=J(V),ee=J(Y),et=J(G),eo=!!i,er=!!o,en=!!r,ei=!!b,ea=!!p;F[19]===Symbol.for("react.memo_cache_sentinel")?(R=()=>U.current,F[19]=R):R=F[19],(0,l.useImperativeHandle)(t,R),B(U,s),F[20]!==c?(S=e=>{e.preventDefault(),e.stopPropagation(),c&&c(),U.current?.focus()},F[20]=c,F[21]=S):S=F[21];let ed=S;F[22]!==p||F[23]!==ee?(C=p&&(0,a.jsx)(oO,{borderTop:!0,borderLeft:!0,borderBottom:!0,radius:ee,sizing:"border",tone:"inherit",children:(0,a.jsx)("span",{children:p})}),F[22]=p,F[23]=ee,F[24]=C):C=F[24];let el=C,es=O?"":void 0;F[25]!==o||F[26]!==Z||F[27]!==Q?(z=o&&(0,a.jsx)(oV,{padding:Q,children:(0,a.jsxs)(tu,{size:Z,children:[(0,l.isValidElement)(o)&&o,(0,u.isValidElementType)(o)&&(0,a.jsx)(o,{})]})}),F[25]=o,F[26]=Z,F[27]=Q,F[28]=z):z=F[28],F[29]!==eo||F[30]!==r||F[31]!==Z||F[32]!==Q?(N=!eo&&r&&(0,a.jsx)(oY,{padding:Q,children:(0,a.jsxs)(tu,{size:Z,children:[(0,l.isValidElement)(r)&&r,(0,u.isValidElementType)(r)&&(0,a.jsx)(r,{})]})}),F[29]=eo,F[30]=r,F[31]=Z,F[32]=Q,F[33]=N):N=F[33],F[34]!==ea||F[35]!==ei||F[36]!==n||F[37]!==ee||F[38]!==q.scheme||F[39]!==q.tone||F[40]!==es||F[41]!==z||F[42]!==N?(E=(0,a.jsxs)(oD,{$hasPrefix:ea,$unstableDisableFocusRing:n,$hasSuffix:ei,$radius:ee,$scheme:q.scheme,$tone:q.tone,"data-border":es,"data-scheme":q.scheme,"data-tone":q.tone,children:[z,N]}),F[34]=ea,F[35]=ei,F[36]=n,F[37]=ee,F[38]=q.scheme,F[39]=q.tone,F[40]=es,F[41]=z,F[42]=N,F[43]=E):E=F[43];let ec=E;F[44]!==Q?(A=Q.map(oK),F[44]=Q,F[45]=A):A=F[45];let eu=A;F[46]!==Q?(W=Q.map(oZ),F[46]=Q,F[47]=W):W=F[47];let ef=W,ep="object"==typeof i?i:x;F[48]!==i||F[49]!==eu||F[50]!==ef||F[51]!==ep||F[52]!==s||F[53]!==P||F[54]!==Z||F[55]!==ed||F[56]!==ee||F[57]!==h?(_=!P&&!h&&i&&(0,a.jsx)(oG,{forwardedAs:"span",padding:eu,style:oT,tone:s?"critical":"inherit",children:(0,a.jsx)(oX,{"aria-label":"Clear","data-qa":"clear-button",fontSize:Z,icon:f.USm,mode:"bleed",padding:ef,radius:ee,...ep,onClick:ed,onMouseDown:oq})}),F[48]=i,F[49]=eu,F[50]=ef,F[51]=ep,F[52]=s,F[53]=P,F[54]=Z,F[55]=ed,F[56]=ee,F[57]=h,F[58]=_):_=F[58];let eh=_;F[59]!==ee||F[60]!==b?(H=b&&(0,a.jsx)(oB,{borderTop:!0,borderRight:!0,borderBottom:!0,radius:ee,sizing:"border",tone:"inherit",children:(0,a.jsx)("span",{children:b})}),F[59]=ee,F[60]=b,F[61]=H):H=F[61];let eg=H,eb=en||eo;return F[62]!==er||F[63]!==P||F[64]!==Z||F[65]!==Q||F[66]!==h||F[67]!==g||F[68]!==q.scheme||F[69]!==q.tone||F[70]!==et||F[71]!==eb||F[72]!==X||F[73]!==j?(L=(0,a.jsx)(oP,{"data-as":"input","data-scheme":q.scheme,"data-tone":q.tone,...g,$fontSize:Z,$iconLeft:er,$iconRight:eb,$padding:Q,$scheme:q.scheme,$space:et,$tone:q.tone,$weight:j,disabled:P,readOnly:h,ref:U,type:X}),F[62]=er,F[63]=P,F[64]=Z,F[65]=Q,F[66]=h,F[67]=g,F[68]=q.scheme,F[69]=q.tone,F[70]=et,F[71]=eb,F[72]=X,F[73]=j,F[74]=L):L=F[74],F[75]!==eh||F[76]!==ec||F[77]!==L?(M=(0,a.jsxs)(oF,{children:[L,ec,eh]}),F[75]=eh,F[76]=ec,F[77]=L,F[78]=M):M=F[78],F[79]!==el||F[80]!==q.tone||F[81]!==eg||F[82]!==M?(T=(0,a.jsxs)(oJ,{"data-ui":"TextInput",tone:q.tone,children:[el,M,eg]}),F[79]=el,F[80]=q.tone,F[81]=eg,F[82]=M,F[83]=T):T=F[83],T});function oq(e){e.preventDefault(),e.stopPropagation()}function oK(e){return 0===e?0:1===e||2===e?1:e-2}function oZ(e){return 0===e||1===e?0:2===e?1:e-1}oU.displayName="ForwardRef(TextInput)";let oQ={top:["top-end","top-start","bottom","left","right"],"top-start":["top","top-end","bottom-start","left-start","right-start"],"top-end":["top","top-start","bottom-end","left-end","right-end"],bottom:["bottom-end","bottom-start","top","left","right"],"bottom-start":["bottom","bottom-end","top-start","left-start","right-start"],"bottom-end":["bottom","bottom-start","top-end","left-end","right-end"],left:["left-end","left-start","right","top","bottom"],"left-start":["left","left-end","right-start","top-start","bottom-start"],"left-end":["left","left-start","right-end","top-end","bottom-end"],right:["right-end","right-start","left","top","bottom"],"right-start":["right","right-end","left-start","top-start","bottom-start"],"right-end":["right","right-start","left-end","top-end","bottom-end"]},o0=(0,s.I4)(g.P.create(tI)).withConfig({displayName:"MotionCard",componentId:"sc-1xn138w-0"})`will-change:transform;`,o1=(0,l.memo)((0,l.forwardRef)(function(e,t){let o,r,n,i,l,s,c,u,f,p,h,g,b,m,v,w,y,x,k,j,R,S,C=(0,d.c)(48);C[0]!==e?({animate:o,arrow:r,arrowRef:n,arrowX:i,arrowY:l,children:s,originX:c,originY:u,padding:f,placement:p,radius:h,scheme:b,shadow:m,style:v,...g}=e,C[0]=e,C[1]=o,C[2]=r,C[3]=n,C[4]=i,C[5]=l,C[6]=s,C[7]=c,C[8]=u,C[9]=f,C[10]=p,C[11]=h,C[12]=g,C[13]=b,C[14]=m,C[15]=v):(o=C[1],r=C[2],n=C[3],i=C[4],l=C[5],s=C[6],c=C[7],u=C[8],f=C[9],p=C[10],h=C[11],g=C[12],b=C[13],m=C[14],v=C[15]);let z=o?"transform":void 0;C[16]!==c||C[17]!==u||C[18]!==v||C[19]!==z?(w={originX:c,originY:u,willChange:z,...v},C[16]=c,C[17]=u,C[18]=v,C[19]=z,C[20]=w):w=C[20];let N=w,E=null!==i?i:void 0,A=null!==l?l:void 0;C[21]!==E||C[22]!==A?(y={left:E,top:A,right:void 0,bottom:void 0},C[21]=E,C[22]=A,C[23]=y):y=C[23];let W=y,_=g;return C[24]!==o?(x=o?["hidden","initial"]:void 0,C[24]=o,C[25]=x):x=C[25],C[26]!==o?(k=o?["visible","scaleIn"]:void 0,C[26]=o,C[27]=k):k=C[27],C[28]!==o?(j=o?["hidden","scaleOut"]:void 0,C[28]=o,C[29]=j):j=C[29],C[30]!==r||C[31]!==n||C[32]!==W?(R=r&&(0,a.jsx)(tK,{ref:n,style:W,width:15,height:6,radius:2}),C[30]=r,C[31]=n,C[32]=W,C[33]=R):R=C[33],C[34]!==s||C[35]!==f||C[36]!==p||C[37]!==h||C[38]!==t||C[39]!==N||C[40]!==b||C[41]!==m||C[42]!==_||C[43]!==x||C[44]!==k||C[45]!==j||C[46]!==R?(S=(0,a.jsxs)(o0,{"data-ui":"Tooltip__card",..._,"data-placement":p,padding:f,radius:h,ref:t,scheme:b,shadow:m,style:N,variants:$,transition:I,initial:x,animate:k,exit:j,children:[s,R]}),C[34]=s,C[35]=f,C[36]=p,C[37]=h,C[38]=t,C[39]=N,C[40]=b,C[41]=m,C[42]=_,C[43]=x,C[44]=k,C[45]=j,C[46]=R,C[47]=S):S=C[47],S}));o1.displayName="Memo(ForwardRef(TooltipCard))";let o2=X("@sanity/ui/context/tooltipDelayGroup",null),o4=(0,s.I4)(oe).withConfig({displayName:"StyledTooltip",componentId:"sc-13f2zvh-0"})`pointer-events:none;`,o3=(0,l.forwardRef)(function(e,t){let o=t1(),{layer:r}=Q(),{animate:n=!1,arrow:i=!1,boundaryElement:s=o?.element,children:c,content:u,disabled:f,fallbackPlacements:g=e.fallbackPlacements??oQ[e.placement??"bottom"],padding:m=2,placement:v="bottom",portal:y,radius:x=2,scheme:$,shadow:k=2,zOffset:I=r.tooltip.zOffset,delay:j,...R}=e,S=!eo()&&n,C=J(g),z=(0,l.useRef)(null),[N,E]=(0,l.useState)(null),A=(0,l.useRef)(null),W="viewport",[_,H]=(0,l.useState)(0);(0,l.useImperativeHandle)(t,()=>z.current);let L=on(),M="string"==typeof y?L.elements?.[y]||null:L.element,T=(0,l.useMemo)(()=>{let e=[];return e.push((0,h.UU)({boundary:s||void 0,fallbackPlacements:C,padding:4,rootBoundary:W})),e.push((0,h.cY)({mainAxis:4})),e.push((0,h.BN)({boundary:s||void 0,rootBoundary:W,padding:4})),i&&e.push((0,h.UE)({element:A,padding:4})),S&&e.push(tD),e},[S,i,s,C]),{floatingStyles:F,placement:O,middlewareData:B,refs:P,update:D}=(0,h.we)({middleware:T,placement:v,whileElementsMounted:p.ll,elements:{reference:N}}),V=B.arrow?.x,Y=B.arrow?.y,G=B["@sanity/ui/origin"]?.originX,X=B["@sanity/ui/origin"]?.originY,U=(0,l.useId)(),[q,K]=function(e){let t,o,r=(0,d.c)(3),[n,i]=(0,l.useState)(e),a=(0,l.useRef)(void 0);r[0]===Symbol.for("react.memo_cache_sentinel")?(t=(e,t)=>{let o=()=>{i(e)};if(a.current&&(clearTimeout(a.current),a.current=void 0),!t)return o();a.current=setTimeout(o,t)},r[0]=t):t=r[0];let s=t;return r[1]!==n?(o=[n,s],r[1]=n,r[2]=o):o=r[2],o}(!1),Z=(0,l.useContext)(o2),{setIsGroupActive:ee,setOpenTooltipId:et}=Z||{},er=q||Z?.openTooltipId===U,en=null!==Z,ei="number"==typeof j?j:j?.open||0,ea="number"==typeof j?j:j?.close||0,ed=en?Z.openDelay:ei,el=en?Z.closeDelay:ea,es=(0,l.useCallback)((e,t)=>{if(en)if(e){let o=t?0:ed;ee?.(e,o),et?.(U,o)}else{let o=el>200?el:200;ee?.(e,o),et?.(null,t?0:el)}else K(e,t?0:e?ed:el)},[en,ed,ee,et,U,el,K]),ec=(0,l.useCallback)(e=>{es(!1),c?.props?.onBlur?.(e)},[c?.props,es]),eu=(0,l.useCallback)(e=>{es(!1,!0),c?.props.onClick?.(e)},[c?.props,es]),ef=(0,l.useCallback)(e=>{es(!1,!0),c?.props.onContextMenu?.(e)},[c?.props,es]),ep=(0,l.useCallback)(e=>{es(!0),c?.props?.onFocus?.(e)},[c?.props,es]),eh=(0,l.useCallback)(e=>{es(!0),c?.props?.onMouseEnter?.(e)},[c?.props,es]),eg=(0,l.useCallback)(e=>{es(!1),c?.props?.onMouseLeave?.(e)},[c?.props,es]);(function(e){let t,o,r,n=(0,d.c)(10),{handleIsOpenChange:i,referenceElement:a,showTooltip:s,isInsideGroup:c}=e;n[0]!==i||n[1]!==a?(t=(e,t)=>{a&&(a===e||e instanceof Node&&a.contains(e)||(i(!1),t()))},n[0]=i,n[1]=a,n[2]=t):t=n[2];let u=(0,w.J)(t);n[3]!==c||n[4]!==u||n[5]!==s?(o=()=>{if(!s||c)return;let e=t=>{u(t.target,()=>window.removeEventListener("mousemove",e))};return window.addEventListener("mousemove",e),()=>window.removeEventListener("mousemove",e)},n[3]=c,n[4]=u,n[5]=s,n[6]=o):o=n[6],n[7]!==c||n[8]!==s?(r=[c,s],n[7]=c,n[8]=s,n[9]=r):r=n[9],(0,l.useEffect)(o,r)})({handleIsOpenChange:es,referenceElement:N,showTooltip:er,isInsideGroup:en}),(0,l.useEffect)(()=>{f&&er&&es(!1)},[f,es,er]),(0,l.useEffect)(()=>{!u&&er&&es(!1)},[u,es,er]),(0,l.useEffect)(()=>{if(er)return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)};function e(e){"Escape"===e.key&&es(!1,!0)}},[es,er]),(0,l.useLayoutEffect)(()=>{H(Math.min(...s?[s.offsetWidth]:[],M?.offsetWidth||document.body.offsetWidth)-8)},[s,M]);let eb=(0,l.useCallback)(e=>{A.current=e,D()},[D]),em=(0,l.useCallback)(e=>{z.current=e,P.setFloating(e)},[P]),ev=(0,l.useMemo)(()=>c?(0,l.cloneElement)(c,{onBlur:ec,onFocus:ep,onMouseEnter:eh,onMouseLeave:eg,onClick:eu,onContextMenu:ef,ref:E}):null,[c,ec,eu,ef,ep,eh,eg]);if((0,l.useImperativeHandle)(c?os(c):null,()=>N,[N]),!ev)return(0,a.jsx)(a.Fragment,{});if(f)return ev;let ew=(0,a.jsx)(o4,{"data-ui":"Tooltip",...R,ref:em,style:{...F,maxWidth:_>0?`${_}px`:void 0},zOffset:I,children:(0,a.jsx)(o1,{...R,animate:S,arrow:i,arrowRef:eb,arrowX:V,arrowY:Y,originX:G,originY:X,padding:m,placement:O,radius:x,ref:em,scheme:$,shadow:k,children:u})}),ey=er&&(y?(0,a.jsx)(oi,{__unstable_name:"string"==typeof y?y:void 0,children:ew}):ew);return(0,a.jsxs)(a.Fragment,{children:[S?(0,a.jsx)(b.N,{children:ey}):ey,ev]})});o3.displayName="ForwardRef(Tooltip)";let o5=s.I4.kbd.withConfig({displayName:"StyledHotkeys",componentId:"sc-b37mge-0"})`font:inherit;padding:1px;&:not([hidden]){display:block;}`,o6=(0,s.I4)(tP).withConfig({displayName:"Key",componentId:"sc-b37mge-1"})`&:not([hidden]){display:block;}`,o7=(0,l.forwardRef)(function(e,t){let o,r,n,i,l,s,c,u,f,p=(0,d.c)(24);p[0]!==e?({fontSize:o,keys:r,padding:n,radius:i,space:s,...l}=e,p[0]=e,p[1]=o,p[2]=r,p[3]=n,p[4]=i,p[5]=l,p[6]=s):(o=p[1],r=p[2],n=p[3],i=p[4],l=p[5],s=p[6]);let h=J(void 0===s?.5:s);if(!r||0===r.length){let e;return p[7]===Symbol.for("react.memo_cache_sentinel")?(e=(0,a.jsx)(a.Fragment,{}),p[7]=e):e=p[7],e}if(p[8]!==o||p[9]!==r||p[10]!==n||p[11]!==i){let e;p[13]!==o||p[14]!==n||p[15]!==i?(e=(e,t)=>(0,a.jsx)(o6,{fontSize:o,padding:n,radius:i,children:e},t),p[13]=o,p[14]=n,p[15]=i,p[16]=e):e=p[16],c=r.map(e),p[8]=o,p[9]=r,p[10]=n,p[11]=i,p[12]=c}else c=p[12];return p[17]!==h||p[18]!==c?(u=(0,a.jsx)(tF,{as:"span",space:h,children:c}),p[17]=h,p[18]=c,p[19]=u):u=p[19],p[20]!==t||p[21]!==l||p[22]!==u?(f=(0,a.jsx)(o5,{"data-ui":"Hotkeys",...l,ref:t,children:u}),p[20]=t,p[21]=l,p[22]=u,p[23]=f):f=p[23],f});o7.displayName="ForwardRef(Hotkeys)";let o8=X("@sanity/ui/context/menu",null);function o9(e){return S(e)&&"true"!==e.getAttribute("data-disabled")||z(e)&&!e.disabled}function re(e){return e.filter(o9)}let rt=[],ro=(0,s.I4)(ts).withConfig({displayName:"StyledMenu",componentId:"sc-xt0tnv-0"})`outline:none;overflow:auto;`,rr=(0,l.forwardRef)(function(e,t){let o,r,n,i,s,c,u,f,p,h,g,b,m,v,w,y,x,$,k,I,j,R,S,C=(0,d.c)(50);if(C[0]!==e){let{children:t,focusFirst:a,focusLast:d,onClickOutside:l,onEscape:m,onItemClick:v,onItemSelect:w,onKeyDown:y,originElement:x,padding:$,registerElement:k,shouldFocus:I,space:j,...R}=e;r=t,n=l,i=m,s=v,c=w,u=y,f=x,g=$,p=k,o=I,b=j,h=R,C[0]=e,C[1]=o,C[2]=r,C[3]=n,C[4]=i,C[5]=s,C[6]=c,C[7]=u,C[8]=f,C[9]=p,C[10]=h,C[11]=g,C[12]=b}else o=C[1],r=C[2],n=C[3],i=C[4],s=C[5],c=C[6],u=C[7],f=C[8],p=C[9],h=C[10],g=C[11],b=C[12];let z=void 0===g?1:g,N=void 0===b?1:b,E=o??(e.focusFirst&&"first"||e.focusLast&&"last"||null),A=(0,l.useRef)(null);C[13]===Symbol.for("react.memo_cache_sentinel")?(m=()=>A.current,C[13]=m):m=C[13],(0,l.useImperativeHandle)(t,m);let{isTopLayer:W}=t7();C[14]!==u||C[15]!==f||C[16]!==E?(v={onKeyDown:u,originElement:f,shouldFocus:E,rootElementRef:A},C[14]=u,C[15]=f,C[16]=E,C[17]=v):v=C[17];let{activeElement:_,activeIndex:H,handleItemMouseEnter:L,handleItemMouseLeave:M,handleKeyDown:T,mount:J}=function(e){let{onKeyDown:t,originElement:o,shouldFocus:r,rootElementRef:n}=e,i=(0,l.useRef)([]),[a,d]=(0,l.useState)(-1),s=(0,l.useRef)(a),c=(0,l.useMemo)(()=>i.current[a]||null,[a]),u=!!n.current,f=(0,l.useCallback)(e=>{d(e),s.current=e},[]),p=(0,l.useCallback)((e,t)=>e?(-1===i.current.indexOf(e)&&(i.current.push(e),function(e,t){if(!e)return;let o=new WeakMap;for(let r of t)o.set(r,function(e,t){let o=[],r=t;for(;r!==e;){let t=r.parentElement;if(!t)break;let n=Array.from(t.childNodes).indexOf(r);if(o.unshift(n),t===e)break;r=t}return o}(e,r));t.sort((e,t)=>{let r=o.get(e)||rt,n=o.get(t)||rt,i=Math.max(r.length,n.length);for(let e=0;e<i;e+=1){let t=r[e]||-1,o=n[e]||-1;if(t!==o)return t-o}return 0})}(n.current,i.current)),t&&f(i.current.indexOf(e)),()=>{let t=i.current.indexOf(e);t>-1&&i.current.splice(t,1)}):()=>{},[n,f]),h=(0,l.useCallback)(e=>{if("Tab"===e.key){o&&o.focus();return}if("Home"===e.key){e.preventDefault(),e.stopPropagation();let t=re(i.current)[0];if(!t)return;f(i.current.indexOf(t));return}if("End"===e.key){e.preventDefault(),e.stopPropagation();let t=re(i.current),o=t[t.length-1];if(!o)return;f(i.current.indexOf(o));return}if("ArrowUp"===e.key){e.preventDefault(),e.stopPropagation();let t=re(i.current),o=t.length;if(0===o)return;let r=i.current[s.current],n=t.indexOf(r),a=t[n=(n-1+o)%o];f(i.current.indexOf(a));return}if("ArrowDown"===e.key){e.preventDefault(),e.stopPropagation();let t=re(i.current),o=t.length;if(0===o)return;let r=i.current[s.current],n=t.indexOf(r),a=t[n=(n+1)%o];f(i.current.indexOf(a));return}t&&t(e)},[t,o,f]),g=(0,l.useCallback)(e=>{let t=e.currentTarget;f(i.current.indexOf(t))},[f]),b=(0,l.useCallback)(()=>{f(-2),n.current?.focus()},[n,f]);return(0,l.useEffect)(()=>{if(!u)return;let e=requestAnimationFrame(()=>{if(-1===a){if("first"===r){let e=re(i.current)[0];e&&f(i.current.indexOf(e))}if("last"===r){let e=re(i.current),t=e[e.length-1];t&&f(i.current.indexOf(t))}return}(i.current[a]||null)?.focus()});return()=>cancelAnimationFrame(e)},[a,u,f,r]),{activeElement:c,activeIndex:a,handleItemMouseEnter:g,handleItemMouseLeave:b,handleKeyDown:h,mount:p}}(v),O=(0,l.useRef)(null);C[18]!==p?(w=e=>{O.current&&(O.current(),O.current=null),A.current=e,A.current&&p&&(O.current=p(A.current))},C[18]=p,C[19]=w):w=C[19];let B=w;C[20]!==H||C[21]!==c?(y=()=>{c&&c(H)},x=[H,c],C[20]=H,C[21]=c,C[22]=y,C[23]=x):(y=C[22],x=C[23]),(0,l.useEffect)(y,x),C[24]===Symbol.for("react.memo_cache_sentinel")?($=()=>[A.current],C[24]=$):$=C[24],F(W&&n,$),C[25]!==W||C[26]!==i?(k=e=>{W&&"Escape"===e.key&&(e.stopPropagation(),i&&i())},C[25]=W,C[26]=i,C[27]=k):k=C[27],Y(k),C[28]!==_||C[29]!==H||C[30]!==L||C[31]!==M||C[32]!==J||C[33]!==n||C[34]!==i||C[35]!==s||C[36]!==p?(I={version:0,activeElement:_,activeIndex:H,mount:J,onClickOutside:n,onEscape:i,onItemClick:s,onItemMouseEnter:L,onItemMouseLeave:M,registerElement:p,onMouseEnter:L,onMouseLeave:M},C[28]=_,C[29]=H,C[30]=L,C[31]=M,C[32]=J,C[33]=n,C[34]=i,C[35]=s,C[36]=p,C[37]=I):I=C[37];let P=I;return C[38]!==r||C[39]!==N?(j=(0,a.jsx)(oC,{space:N,children:r}),C[38]=r,C[39]=N,C[40]=j):j=C[40],C[41]!==T||C[42]!==B||C[43]!==z||C[44]!==h||C[45]!==j?(R=(0,a.jsx)(ro,{"data-ui":"Menu",...h,onKeyDown:T,padding:z,ref:B,role:"menu",tabIndex:-1,children:j}),C[41]=T,C[42]=B,C[43]=z,C[44]=h,C[45]=j,C[46]=R):R=C[46],C[47]!==R||C[48]!==P?(S=(0,a.jsx)(o8.Provider,{value:P,children:R}),C[47]=R,C[48]=P,C[49]=S):S=C[49],S});rr.displayName="ForwardRef(Menu)";let rn=s.I4.hr.withConfig({displayName:"MenuDivider",componentId:"sc-uhoxwu-0"})`height:1px;border:0;background:var(--card-hairline-soft-color);margin:0;`;rn.displayName="MenuDivider";let ri=(0,s.I4)(ts).withConfig({displayName:"Selectable",componentId:"sc-1w01ang-0"})(e0,function(){return(0,s.AH)`
    background-color: inherit;
    color: inherit;

    &[data-as='button'] {
      -webkit-font-smoothing: inherit;
      appearance: none;
      outline: none;
      font: inherit;
      text-align: inherit;
      border: 0;
      width: -moz-available;
      width: -webkit-fill-available;
      width: stretch;
    }

    /* &:is(a) */
    &[data-as='a'] {
      text-decoration: none;
    }
  `},function(e){let{$tone:t}=e,{color:o,style:r}=(0,i.JW)(e.theme),n=o.selectable[t];return(0,s.AH)`
    ${tv(o,n.enabled)}

    background-color: var(--card-bg-color);
    color: var(--card-fg-color);
    outline: none;

    /* &:is(button) */
    &[data-as='button'] {
      &:disabled {
        ${tv(o,n.disabled)}
      }

      &:not(:disabled) {
        &[aria-pressed='true'] {
          ${tv(o,n.pressed)}
        }

        &[data-selected],
        &[aria-selected='true'] > & {
          ${tv(o,n.selected)}
        }

        @media (hover: hover) {
          &:not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${tv(o,n.hovered)}
            }

            &:active {
              ${tv(o,n.pressed)}
            }
          }
        }
      }
    }

    /* &:is(a) */
    &[data-as='a'] {
      &[data-disabled] {
        ${tv(o,n.disabled)}
      }

      &:not([data-disabled]) {
        &[data-pressed] {
          ${tv(o,n.pressed)}
        }

        &[data-selected] {
          ${tv(o,n.selected)}
        }

        @media (hover: hover) {
          &:not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${tv(o,n.hovered)}
            }
            &:active {
              ${tv(o,n.pressed)}
            }
          }
        }
      }
    }

    ${r?.card?.root}
  `});ri.displayName="Selectable";let ra=(0,l.forwardRef)(function(e,t){let o,r,n,i,s,c,f,p,h,g,b,m,v,w,y,x,$,k,I,j,R,S,C,z,N,E,A,W,_,H,L,M,T=(0,d.c)(73);T[0]!==e?({as:x,children:n,disabled:i,fontSize:$,hotkeys:s,icon:o,iconRight:r,onClick:c,padding:k,paddingX:b,paddingY:m,paddingTop:g,paddingRight:h,paddingBottom:f,paddingLeft:p,pressed:v,radius:I,selected:y,space:j,text:S,tone:R,...w}=e,T[0]=e,T[1]=o,T[2]=r,T[3]=n,T[4]=i,T[5]=s,T[6]=c,T[7]=f,T[8]=p,T[9]=h,T[10]=g,T[11]=b,T[12]=m,T[13]=v,T[14]=w,T[15]=y,T[16]=x,T[17]=$,T[18]=k,T[19]=I,T[20]=j,T[21]=R,T[22]=S):(o=T[1],r=T[2],n=T[3],i=T[4],s=T[5],c=T[6],f=T[7],p=T[8],h=T[9],g=T[10],b=T[11],m=T[12],v=T[13],w=T[14],y=T[15],x=T[16],$=T[17],k=T[18],I=T[19],j=T[20],R=T[21],S=T[22]);let F=void 0===x?"button":x,O=void 0===$?1:$,B=void 0===k?3:k,P=void 0===I?2:I,D=void 0===j?3:j,V=void 0===R?"default":R,{scheme:Y}=K(),G=function(){let e=(0,l.useContext)(o8);if(!e)throw Error("useMenu(): missing context value");if(!tQ(e)||0!==e.version)throw Error("useMenu(): the context value is not compatible");return e}(),{activeElement:X,mount:U,onItemClick:q,onItemMouseEnter:Z,onItemMouseLeave:Q}=G,ee=Z??G.onMouseEnter,et=Q??G.onMouseLeave,[eo,er]=(0,l.useState)(null),en=!!X&&X===eo,ei=(0,l.useRef)(null);T[23]===Symbol.for("react.memo_cache_sentinel")?(C=()=>ei.current,T[23]=C):C=T[23],(0,l.useImperativeHandle)(t,C),T[24]!==U||T[25]!==eo||T[26]!==y?(z=()=>U(eo,y),N=[U,eo,y],T[24]=U,T[25]=eo,T[26]=y,T[27]=z,T[28]=N):(z=T[27],N=T[28]),(0,l.useEffect)(z,N),T[29]!==i||T[30]!==c||T[31]!==q?(E=e=>{i||(c&&c(e),q&&q())},T[29]=i,T[30]=c,T[31]=q,T[32]=E):E=T[32];let ea=E;T[33]!==B||T[34]!==f||T[35]!==p||T[36]!==h||T[37]!==g||T[38]!==b||T[39]!==m?(A={padding:B,paddingX:b,paddingY:m,paddingTop:g,paddingRight:h,paddingBottom:f,paddingLeft:p},T[33]=B,T[34]=f,T[35]=p,T[36]=h,T[37]=g,T[38]=b,T[39]=m,T[40]=A):A=T[40];let ed=A,el=J(O);T[41]!==el?(W=el.map(rd),T[41]=el,T[42]=W):W=T[42];let es=W;T[43]===Symbol.for("react.memo_cache_sentinel")?(_=e=>{ei.current=e,er(e)},T[43]=_):_=T[43];let ec=_,eu="button"!==F&&v?"":void 0,ef=en?"":void 0,ep=i?"":void 0,eh=J(P),eg=J(0),eb=i?"default":V,em="button"===F?"button":void 0;return T[44]!==o||T[45]!==r||T[46]!==O||T[47]!==s||T[48]!==es||T[49]!==ed||T[50]!==D||T[51]!==S?(H=(o||S||r)&&(0,a.jsxs)(th,{as:"span",gap:D,align:"center",...ed,children:[o&&(0,a.jsxs)(tu,{size:O,children:[(0,l.isValidElement)(o)&&o,(0,u.isValidElementType)(o)&&(0,a.jsx)(o,{})]}),S&&(0,a.jsx)(ts,{flex:1,children:(0,a.jsx)(tu,{size:O,textOverflow:"ellipsis",weight:"medium",children:S})}),s&&(0,a.jsx)(o7,{fontSize:es,keys:s,style:{marginTop:-4,marginBottom:-4}}),r&&(0,a.jsxs)(tu,{size:O,children:[(0,l.isValidElement)(r)&&r,(0,u.isValidElementType)(r)&&(0,a.jsx)(r,{})]})]}),T[44]=o,T[45]=r,T[46]=O,T[47]=s,T[48]=es,T[49]=ed,T[50]=D,T[51]=S,T[52]=H):H=T[52],T[53]!==n||T[54]!==ed?(L=n&&(0,a.jsx)(ts,{as:"span",...ed,children:n}),T[53]=n,T[54]=ed,T[55]=L):L=T[55],T[56]!==F||T[57]!==i||T[58]!==ea||T[59]!==ee||T[60]!==et||T[61]!==w||T[62]!==Y||T[63]!==eu||T[64]!==ef||T[65]!==ep||T[66]!==eh||T[67]!==eg||T[68]!==eb||T[69]!==em||T[70]!==H||T[71]!==L?(M=(0,a.jsxs)(ri,{"data-ui":"MenuItem",role:"menuitem",...w,"data-pressed":eu,"data-selected":ef,"data-disabled":ep,forwardedAs:F,$radius:eh,$padding:eg,$tone:eb,$scheme:Y,disabled:i,onClick:ea,onMouseEnter:ee,onMouseLeave:et,ref:ec,tabIndex:-1,type:em,children:[H,L]}),T[56]=F,T[57]=i,T[58]=ea,T[59]=ee,T[60]=et,T[61]=w,T[62]=Y,T[63]=eu,T[64]=ef,T[65]=ep,T[66]=eh,T[67]=eg,T[68]=eb,T[69]=em,T[70]=H,T[71]=L,T[72]=M):M=T[72],M});function rd(e){return e-1}ra.displayName="ForwardRef(MenuItem)";let rl=(0,s.I4)(t$).withConfig({displayName:"CustomButton",componentId:"sc-1kns779-0"})`max-width:100%;`,rs=(0,l.forwardRef)(function(e,t){let o,r,n,i,s,c,u,f,p,h,g,b,m,v,w,y,x=(0,d.c)(30);x[0]!==e?({icon:r,id:n,focused:o,fontSize:p,label:i,onClick:s,onFocus:c,padding:h,selected:f,...u}=e,x[0]=e,x[1]=o,x[2]=r,x[3]=n,x[4]=i,x[5]=s,x[6]=c,x[7]=u,x[8]=f,x[9]=p,x[10]=h):(o=x[1],r=x[2],n=x[3],i=x[4],s=x[5],c=x[6],u=x[7],f=x[8],p=x[9],h=x[10]);let $=void 0===p?1:p,k=void 0===h?2:h,I=(0,l.useRef)(null),j=(0,l.useRef)(!1);x[11]===Symbol.for("react.memo_cache_sentinel")?(g=()=>I.current,x[11]=g):g=x[11],(0,l.useImperativeHandle)(t,g),x[12]===Symbol.for("react.memo_cache_sentinel")?(b=()=>{j.current=!1},x[12]=b):b=x[12];let R=b;x[13]!==c?(m=e=>{j.current=!0,c&&c(e)},x[13]=c,x[14]=m):m=x[14];let S=m;x[15]!==o?(v=()=>{o&&!j.current&&(I.current&&I.current.focus(),j.current=!0)},w=[o],x[15]=o,x[16]=v,x[17]=w):(v=x[16],w=x[17]),(0,l.useEffect)(v,w);let C=f?"true":"false",z=f?0:-1;return x[18]!==$||x[19]!==S||x[20]!==r||x[21]!==n||x[22]!==i||x[23]!==s||x[24]!==k||x[25]!==u||x[26]!==f||x[27]!==C||x[28]!==z?(y=(0,a.jsx)(rl,{"data-ui":"Tab",...u,"aria-selected":C,fontSize:$,icon:r,id:n,mode:"bleed",onClick:s,onBlur:R,onFocus:S,padding:k,ref:I,role:"tab",selected:f,tabIndex:z,text:i,type:"button"}),x[18]=$,x[19]=S,x[20]=r,x[21]=n,x[22]=i,x[23]=s,x[24]=k,x[25]=u,x[26]=f,x[27]=C,x[28]=z,x[29]=y):y=x[29],y});rs.displayName="ForwardRef(Tab)";let rc=(0,s.I4)(tF).withConfig({displayName:"CustomInline",componentId:"sc-5cm04m-0"})`& > div{display:inline-block;vertical-align:middle;max-width:100%;box-sizing:border-box;}`,ru=(0,l.forwardRef)(function(e,t){let o,r,n,i,s,c=(0,d.c)(15);c[0]!==e?({children:o,...r}=e,c[0]=e,c[1]=o,c[2]=r):(o=c[1],r=c[2]);let[u,f]=(0,l.useState)(-1);if(c[3]!==o||c[4]!==u){let e,t=l.Children.toArray(o).filter(l.isValidElement);c[6]!==u?(e=(e,t)=>(0,l.cloneElement)(e,{focused:u===t,key:t,onFocus:()=>f(t)}),c[6]=u,c[7]=e):e=c[7],n=t.map(e),c[3]=o,c[4]=u,c[5]=n}else n=c[5];let p=n,h=p.length;c[8]!==h?(i=e=>{"ArrowLeft"===e.key&&f(e=>(e+h-1)%h),"ArrowRight"===e.key&&f(e=>(e+1)%h)},c[8]=h,c[9]=i):i=c[9];let g=i;return c[10]!==g||c[11]!==t||c[12]!==r||c[13]!==p?(s=(0,a.jsx)(rc,{"data-ui":"TabList",...r,onKeyDown:g,ref:t,role:"tablist",children:p}),c[10]=g,c[11]=t,c[12]=r,c[13]=p,c[14]=s):s=c[14],s});ru.displayName="ForwardRef(TabList)"}}]);