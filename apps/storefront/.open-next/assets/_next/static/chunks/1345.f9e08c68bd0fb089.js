"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1345],{1345:(e,t,i)=>{let a,s;i.r(t),i.d(t,{VideoPlayer:()=>dr});var r,n,o,l,d,u,h,c,m,p,v,b,g,E,f,y,A,k,w,I,T,_,M,S,C,L,x,R,D,N,P,U,O,W,H,$,B,V,q,G,F,Q,Z,j,K,z,Y,X,J,ee,et,ei,ea,es,er,en,eo,el,ed,eu,eh,ec,em,ep,ev,eb,eg,eE,ef,ey,eA,ek,ew,eI,eT,e_,eM,eS,eC,eL,ex,eR,eD,eN,eP,eU,eO,eW,eH,e$,eB,eV,eq,eG,eF,eQ,eZ,ej,eK,ez,eY,eX,eJ,e0,e1,e2,e3,e5,e4,e7,e8,e9,e6,te,tt,ti,ta,ts,tr,tn,to,tl,td,tu,th,tc,tm,tp,tv,tb,tg,tE,tf,ty,tA,tk,tw,tI,tT,t_,tM,tS,tC,tL,tx,tR,tD,tN,tP,tU,tO,tW,tH,t$,tB,tV,tq,tG,tF,tQ,tZ,tj,tK,tz,tY,tX,tJ,t0,t1,t2,t3,t5,t4,t7,t8,t9,t6,ie,it,ii,ia,is,ir,io,il,id,iu,ih,ic,im,ip,iv,ib,ig,iE,iy,iA,ik,iw,iI,iT,i_,iM,iS,iC,iL,ix,iR,iD,iN,iP,iU,iO,iW,iH,i$,iB,iV,iq,iG,iF,iQ,iZ,ij,iK,iz,iY,iX,iJ,i0,i1,i2,i3=i(54568),i5=i(99680);let i4={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},i7={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},i8={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_WIDTH:"mediaWidth"},i9=Object.entries(i8),i6=i9.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{}),ae=i9.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"});Object.entries(ae).reduce((e,[t,i])=>{let a=i6[t];return a&&(e[i]=a),e},{userinactivechange:"userinactive"});let at=Object.entries(i6).reduce((e,[t,i])=>{let a=ae[t];return a&&(e[i]=a),e},{userinactive:"userinactivechange"}),ai="subtitles",aa="captions",as="disabled",ar="showing",an="unavailable",ao="unsupported",al={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"};function ad(e){if(e){let{id:t,width:i,height:a}=e;return[t,i,a].filter(e=>null!=e).join(":")}}function au(e){if(e){let[t,i,a]=e.split(":");return{id:t,width:+i,height:+a}}}function ah(e){if(e){let{id:t,kind:i,language:a,label:s}=e;return[t,i,a,s].filter(e=>null!=e).join(":")}}function ac(e){if(e){let[t,i,a,s]=e.split(":");return{id:t,kind:i,language:a,label:s}}}function am(e){return"number"==typeof e&&!Number.isNaN(e)&&Number.isFinite(e)}function ap(e){return"string"==typeof e&&!isNaN(e)&&!isNaN(parseFloat(e))}let av=e=>new Promise(t=>setTimeout(t,e)),ab=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],ag=e=>{if(!am(e))return"";let t=Math.abs(e),i=t!==e,a=new Date(0,0,0,0,0,t,0),s=[a.getHours(),a.getMinutes(),a.getSeconds()].map((e,t)=>{let i;return e&&(i=1===e?ab[t].singular:ab[t].plural,`${e} ${i}`)}).filter(e=>e).join(", ");return`${s}${i?" remaining":""}`};function aE(e,t){let i=!1;e<0&&(i=!0,e=0-e);let a=Math.floor((e=e<0?0:e)%60),s=Math.floor(e/60%60),r=Math.floor(e/3600),n=Math.floor(t/60%60),o=Math.floor(t/3600);return(isNaN(e)||e===1/0)&&(r=s=a="0"),s=(((r=r>0||o>0?r+":":"")||n>=10)&&s<10?"0"+s:s)+":",(i?"-":"")+r+s+(a=a<10?"0"+a:a)}Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});let af={en:{"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it."}},ay=(null==(r=globalThis.navigator)?void 0:r.language)||"en",aA=(e,t={})=>(e=>{var t,i,a;let[s]=ay.split("-");return(null==(t=af[ay])?void 0:t[e])||(null==(i=af[s])?void 0:i[e])||(null==(a=af.en)?void 0:a[e])||e})(e).replace(/\{(\w+)\}/g,(e,i)=>i in t?String(t[i]):`{${i}}`);class ak{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}}class aw extends ak{}class aI extends aw{constructor(){super(...arguments),this.role=null}}class aT{observe(){}unobserve(){}disconnect(){}}let a_={createElement:function(){return new aM.HTMLElement},createElementNS:function(){return new aM.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent:e=>!1},aM={ResizeObserver:aT,document:a_,Node:aw,Element:aI,HTMLElement:class extends aI{constructor(){super(...arguments),this.innerHTML=""}get content(){return new aM.DocumentFragment}},DocumentFragment:class extends ak{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem:e=>null,setItem(e,t){},removeItem(e){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia:e=>({matches:!1,media:e}),DOMParser:class{parseFromString(e,t){return{body:{textContent:e}}}}},aS="u"<typeof window||void 0===window.customElements,aC=Object.keys(aM).every(e=>e in globalThis),aL=aS&&!aC?aM:globalThis,ax=aS&&!aC?a_:globalThis.document,aR=new WeakMap,aD=e=>{let t=aR.get(e);return t||aR.set(e,t=new Set),t},aN=new aL.ResizeObserver(e=>{for(let t of e)for(let e of aD(t.target))e(t)});function aP(e,t){aD(e).add(t),aN.observe(e)}function aU(e,t){let i=aD(e);i.delete(t),i.size||aN.unobserve(e)}function aO(e){let t={};for(let i of e)t[i.name]=i.value;return t}function aW(e){var t;return null!=(t=aH(e))?t:aq(e,"media-controller")}function aH(e){var t;let{MEDIA_CONTROLLER:i}=i7,a=e.getAttribute(i);if(a)return null==(t=aF(e))?void 0:t.getElementById(a)}let a$=(e,t,i=".value")=>{let a=e.querySelector(i);a&&(a.textContent=t)},aB=(e,t)=>{let i,a;return(i=`slot[name="${t}"]`,!(a=e.shadowRoot.querySelector(i))?[]:a.children)[0]},aV=(e,t)=>!!e&&!!t&&(null!=e&&!!e.contains(t)||aV(e,t.getRootNode().host)),aq=(e,t)=>{if(!e)return null;let i=e.closest(t);return i||aq(e.getRootNode().host,t)};function aG(e=document){var t;let i=null==e?void 0:e.activeElement;return i?null!=(t=aG(i.shadowRoot))?t:i:null}function aF(e){var t;let i=null==(t=null==e?void 0:e.getRootNode)?void 0:t.call(e);return i instanceof ShadowRoot||i instanceof Document?i:null}function aQ(e,{depth:t=3,checkOpacity:i=!0,checkVisibilityCSS:a=!0}={}){if(e.checkVisibility)return e.checkVisibility({checkOpacity:i,checkVisibilityCSS:a});let s=e;for(;s&&t>0;){let e=getComputedStyle(s);if(i&&"0"===e.opacity||a&&"hidden"===e.visibility||"none"===e.display)return!1;s=s.parentElement,t--}return!0}function aZ(e,t){let i=function(e,t){var i,a;let s;for(s of null!=(i=e.querySelectorAll("style:not([media])"))?i:[]){let e;try{e=null==(a=s.sheet)?void 0:a.cssRules}catch{continue}for(let i of null!=e?e:[])if(t(i.selectorText))return i}}(e,e=>e===t);return i||aj(e,t)}function aj(e,t){var i,a;let s=null!=(i=e.querySelectorAll("style:not([media])"))?i:[],r=null==s?void 0:s[s.length-1];return(null==r?void 0:r.sheet)?(null==r||r.sheet.insertRule(`${t}{}`,r.sheet.cssRules.length),null==(a=r.sheet.cssRules)?void 0:a[r.sheet.cssRules.length-1]):(console.warn("Media Chrome: No style sheet found on style tag of",e),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}})}function aK(e,t,i=NaN){let a=e.getAttribute(t);return null!=a?+a:i}function az(e,t,i){let a=+i;if(null==i||Number.isNaN(a)){e.hasAttribute(t)&&e.removeAttribute(t);return}aK(e,t,void 0)!==a&&e.setAttribute(t,`${a}`)}function aY(e,t){return e.hasAttribute(t)}function aX(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}aY(e,t)!=i&&e.toggleAttribute(t,i)}function aJ(e,t,i=null){var a;return null!=(a=e.getAttribute(t))?a:i}function a0(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}let a=`${i}`;aJ(e,t,void 0)!==a&&e.setAttribute(t,a)}var a1=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},a2=(e,t,i)=>(a1(e,t,"read from private field"),i?i.call(e):t.get(e)),a3=(e,t,i,a)=>(a1(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class a5 extends aL.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,n,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=aO(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[i7.MEDIA_CONTROLLER,i6.MEDIA_PAUSED]}attributeChangedCallback(e,t,i){var a,s,r,o,l;e===i7.MEDIA_CONTROLLER&&(t&&(null==(s=null==(a=a2(this,n))?void 0:a.unassociateElement)||s.call(a,this),a3(this,n,null)),i&&this.isConnected&&(a3(this,n,null==(r=this.getRootNode())?void 0:r.getElementById(i)),null==(l=null==(o=a2(this,n))?void 0:o.associateElement)||l.call(o,this)))}connectedCallback(){var e,t,i,a,s,r;let o;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),a3(this,n,(s=this,(o=s.getAttribute(i7.MEDIA_CONTROLLER))?null==(r=s.getRootNode())?void 0:r.getElementById(o):aq(s,"media-controller"))),this.getAttribute(i7.MEDIA_CONTROLLER)&&(null==(t=null==(e=a2(this,n))?void 0:e.associateElement)||t.call(e,this)),null==(i=a2(this,n))||i.addEventListener("pointerdown",this),null==(a=a2(this,n))||a.addEventListener("click",this)}disconnectedCallback(){var e,t,i,a;this.getAttribute(i7.MEDIA_CONTROLLER)&&(null==(t=null==(e=a2(this,n))?void 0:e.unassociateElement)||t.call(e,this)),null==(i=a2(this,n))||i.removeEventListener("pointerdown",this),null==(a=a2(this,n))||a.removeEventListener("click",this),a3(this,n,null)}handleEvent(e){var t;let i=null==(t=e.composedPath())?void 0:t[0];if(["video","media-controller"].includes(null==i?void 0:i.localName)){if("pointerdown"===e.type)this._pointerType=e.pointerType;else if("click"===e.type){let{clientX:t,clientY:i}=e,{left:a,top:s,width:r,height:n}=this.getBoundingClientRect(),o=t-a,l=i-s;if(o<0||l<0||o>r||l>n||0===r&&0===n)return;let{pointerType:d=this._pointerType}=e;if(this._pointerType=void 0,"touch"===d)return void this.handleTap(e);if("mouse"===d)return void this.handleMouseClick(e)}}}get mediaPaused(){return aY(this,i6.MEDIA_PAUSED)}set mediaPaused(e){aX(this,i6.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){let t=this.mediaPaused?i4.MEDIA_PLAY_REQUEST:i4.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new aL.CustomEvent(t,{composed:!0,bubbles:!0}))}}n=new WeakMap,a5.shadowRootOptions={mode:"open"},a5.getTemplateHTML=function(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `},aL.customElements.get("media-gesture-receiver")||aL.customElements.define("media-gesture-receiver",a5);var a4=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},a7=(e,t,i)=>(a4(e,t,"read from private field"),i?i.call(e):t.get(e)),a8=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},a9=(e,t,i,a)=>(a4(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),a6=(e,t,i)=>(a4(e,t,"access private method"),i);let se="audio",st="autohide",si="breakpoints",sa="gesturesdisabled",ss="keyboardcontrol",sr="noautohide",sn="userinactive",so="autohideovercontrols",sl=Object.values(i6);function sd(e,t){var i,a,s;if(!e.isConnected)return;let r=Object.fromEntries((null!=(i=e.getAttribute(si))?i:"sm:384 md:576 lg:768 xl:960").split(/\s+/).map(e=>e.split(":"))),n=(a=r,s=t,Object.keys(a).filter(e=>s>=parseInt(a[e]))),o=!1;if(Object.keys(r).forEach(t=>{if(n.includes(t)){e.hasAttribute(`breakpoint${t}`)||(e.setAttribute(`breakpoint${t}`,""),o=!0);return}e.hasAttribute(`breakpoint${t}`)&&(e.removeAttribute(`breakpoint${t}`),o=!0)}),o){let t=new CustomEvent(ae.BREAKPOINTS_CHANGE,{detail:n});e.dispatchEvent(t)}e.breakpointsComputed||(e.breakpointsComputed=!0,e.dispatchEvent(new CustomEvent(ae.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}class su extends aL.HTMLElement{constructor(){if(super(),a8(this,c),a8(this,b),a8(this,E),a8(this,y),a8(this,k),a8(this,I),a8(this,o,0),a8(this,l,null),a8(this,d,null),a8(this,u,void 0),this.breakpointsComputed=!1,a8(this,h,new MutationObserver(a6(this,c,m).bind(this))),a8(this,p,!1),a8(this,v,e=>{a7(this,p)||(setTimeout(()=>{sd(e.target,e.contentRect.width),a9(this,p,!1)},0),a9(this,p,!0))}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=aO(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}const e=this.querySelector(":scope > slot[slot=media]");e&&e.addEventListener("slotchange",()=>{if(!e.assignedElements({flatten:!0}).length){a7(this,l)&&this.mediaUnsetCallback(a7(this,l));return}this.handleMediaUpdated(this.media)})}static get observedAttributes(){return[st,sa].concat(sl).filter(e=>![i6.MEDIA_RENDITION_LIST,i6.MEDIA_AUDIO_TRACK_LIST,i6.MEDIA_CHAPTERS_CUES,i6.MEDIA_WIDTH,i6.MEDIA_HEIGHT,i6.MEDIA_ERROR,i6.MEDIA_ERROR_MESSAGE].includes(e))}attributeChangedCallback(e,t,i){e.toLowerCase()==st&&(this.autohide=i)}get media(){let e=this.querySelector(":scope > [slot=media]");return(null==e?void 0:e.nodeName)=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(a9(this,l,e),e.localName.includes("-")&&await aL.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;a7(this,h).observe(this,{childList:!0,subtree:!0}),aP(this,a7(this,v));let t=null!=this.getAttribute(se)?aA("audio player"):aA("video player");this.setAttribute("role","region"),this.setAttribute("aria-label",t),this.handleMediaUpdated(this.media),this.setAttribute(sn,""),sd(this,this.getBoundingClientRect().width),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),null==(e=aL.window)||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;a7(this,h).disconnect(),aU(this,a7(this,v)),this.media&&this.mediaUnsetCallback(this.media),null==(e=aL.window)||e.removeEventListener("mouseup",this)}mediaSetCallback(e){}mediaUnsetCallback(e){a9(this,l,null)}handleEvent(e){switch(e.type){case"pointerdown":a9(this,o,e.timeStamp);break;case"pointermove":a6(this,b,g).call(this,e);break;case"pointerup":a6(this,E,f).call(this,e);break;case"mouseleave":a6(this,y,A).call(this);break;case"mouseup":this.removeAttribute(ss);break;case"keyup":a6(this,I,T).call(this),this.setAttribute(ss,"")}}set autohide(e){let t=Number(e);a9(this,u,isNaN(t)?0:t)}get autohide(){return(void 0===a7(this,u)?2:a7(this,u)).toString()}get breakpoints(){return aJ(this,si)}set breakpoints(e){a0(this,si,e)}get audio(){return aY(this,se)}set audio(e){aX(this,se,e)}get gesturesDisabled(){return aY(this,sa)}set gesturesDisabled(e){aX(this,sa,e)}get keyboardControl(){return aY(this,ss)}set keyboardControl(e){aX(this,ss,e)}get noAutohide(){return aY(this,sr)}set noAutohide(e){aX(this,sr,e)}get autohideOverControls(){return aY(this,so)}set autohideOverControls(e){aX(this,so,e)}get userInteractive(){return aY(this,sn)}set userInteractive(e){aX(this,sn,e)}}o=new WeakMap,l=new WeakMap,d=new WeakMap,u=new WeakMap,h=new WeakMap,c=new WeakSet,m=function(e){let t=this.media;for(let i of e)if("childList"===i.type){for(let e of i.removedNodes){if("media"!=e.slot||i.target!=this)continue;let a=i.previousSibling&&i.previousSibling.previousElementSibling;if(a&&t){let t="media"!==a.slot;for(;null!==(a=a.previousSibling);)"media"==a.slot&&(t=!1);t&&this.mediaUnsetCallback(e)}else this.mediaUnsetCallback(e)}if(t)for(let e of i.addedNodes)e===t&&this.handleMediaUpdated(t)}},p=new WeakMap,v=new WeakMap,b=new WeakSet,g=function(e){if("mouse"!==e.pointerType&&e.timeStamp-a7(this,o)<250)return;a6(this,k,w).call(this),clearTimeout(a7(this,d));let t=this.hasAttribute(so);([this,this.media].includes(e.target)||t)&&a6(this,I,T).call(this)},E=new WeakSet,f=function(e){if("touch"===e.pointerType){let t=!this.hasAttribute(sn);[this,this.media].includes(e.target)&&t?a6(this,y,A).call(this):a6(this,I,T).call(this)}else e.composedPath().some(e=>["media-play-button","media-fullscreen-button"].includes(null==e?void 0:e.localName))&&a6(this,I,T).call(this)},y=new WeakSet,A=function(){if(0>a7(this,u)||this.hasAttribute(sn))return;this.setAttribute(sn,"");let e=new aL.CustomEvent(ae.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(e)},k=new WeakSet,w=function(){if(!this.hasAttribute(sn))return;this.removeAttribute(sn);let e=new aL.CustomEvent(ae.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(e)},I=new WeakSet,T=function(){a6(this,k,w).call(this),clearTimeout(a7(this,d));let e=parseInt(this.autohide);e<0||a9(this,d,setTimeout(()=>{a6(this,y,A).call(this)},1e3*e))},su.shadowRootOptions={mode:"open"},su.getTemplateHTML=function(e){return`
    <style>
      
      :host([${i6.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
      }

      :host(:not([${se}])) [part~=layer]:not([part~=media-layer]) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        pointer-events: none;
        background: none;
      }

      slot[name=media] {
        display: var(--media-slot-display, contents);
      }

      
      :host([${se}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${se}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${se}])[${sa}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${se}])[${sa}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${se}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${se}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${se}])) media-gesture-receiver[slot=gestures-chrome] {
        align-self: stretch;
        flex-grow: 1;
      }

      slot[name=middle-chrome] {
        display: inline;
        flex-grow: 1;
        pointer-events: none;
        background: none;
      }

      
      ::slotted([slot=media]),
      ::slotted([slot=poster]) {
        width: 100%;
        height: 100%;
      }

      
      :host(:not([${se}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${sr}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${sn}]:not([${i6.MEDIA_PAUSED}]):not([${i6.MEDIA_IS_AIRPLAYING}]):not([${i6.MEDIA_IS_CASTING}]):not([${se}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${sr}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${sn}]:not([${sr}]):not([${i6.MEDIA_PAUSED}]):not([${i6.MEDIA_IS_CASTING}]):not([${se}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${sn}][${so}]:not([${sr}]):not([${i6.MEDIA_PAUSED}]):not([${i6.MEDIA_IS_CASTING}]):not([${se}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      :host(:not([${se}])[${i6.MEDIA_HAS_PLAYED}]) slot[name=poster] {
        display: none;
      }

      ::slotted([role=dialog]) {
        width: 100%;
        height: 100%;
        align-self: center;
      }

      ::slotted([role=menu]) {
        align-self: end;
      }
    </style>

    <slot name="media" part="layer media-layer"></slot>
    <slot name="poster" part="layer poster-layer"></slot>
    <slot name="gestures-chrome" part="layer gesture-layer">
      <media-gesture-receiver slot="gestures-chrome">
        <template shadowrootmode="${a5.shadowRootOptions.mode}">
          ${a5.getTemplateHTML({})}
        </template>
      </media-gesture-receiver>
    </slot>
    <span part="layer vertical-layer">
      <slot name="top-chrome" part="top chrome"></slot>
      <slot name="middle-chrome" part="middle chrome"></slot>
      <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
      
      <slot part="bottom chrome"></slot>
    </span>
    <slot name="dialog" part="layer dialog-layer"></slot>
  `},aL.customElements.get("media-container")||aL.customElements.define("media-container",su);var sh=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sc=(e,t,i)=>(sh(e,t,"read from private field"),i?i.call(e):t.get(e)),sm=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},sp=(e,t,i,a)=>(sh(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class sv{constructor(e,t,{defaultValue:i}={defaultValue:void 0}){sm(this,L),sm(this,_,void 0),sm(this,M,void 0),sm(this,S,void 0),sm(this,C,new Set),sp(this,_,e),sp(this,M,t),sp(this,S,new Set(i))}[Symbol.iterator](){return sc(this,L,x).values()}get length(){return sc(this,L,x).size}get value(){var e;return null!=(e=[...sc(this,L,x)].join(" "))?e:""}set value(e){var t;e!==this.value&&(sp(this,C,new Set),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return[...sc(this,L,x)][e]}values(){return sc(this,L,x).values()}forEach(e,t){sc(this,L,x).forEach(e,t)}add(...e){var t,i;e.forEach(e=>sc(this,C).add(e)),(""!==this.value||(null==(t=sc(this,_))?void 0:t.hasAttribute(`${sc(this,M)}`)))&&(null==(i=sc(this,_))||i.setAttribute(`${sc(this,M)}`,`${this.value}`))}remove(...e){var t;e.forEach(e=>sc(this,C).delete(e)),null==(t=sc(this,_))||t.setAttribute(`${sc(this,M)}`,`${this.value}`)}contains(e){return sc(this,L,x).has(e)}toggle(e,t){if(void 0!==t)if(t)return this.add(e),!0;else return this.remove(e),!1;return this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){return this.remove(e),this.add(t),e===t}}_=new WeakMap,M=new WeakMap,S=new WeakMap,C=new WeakMap,L=new WeakSet,x=function(){return sc(this,C).size?sc(this,C):sc(this,S)};let sb=(e="")=>{let[t,i,a]=e.split(":");return{kind:"cc"===t?aa:ai,language:i,label:a?decodeURIComponent(a):void 0}},sg=(e="",t={})=>((e="")=>e.split(/\s+/))(e).map(e=>{let i=sb(e);return{...t,...i}}),sE=e=>e?Array.isArray(e)?e.map(e=>"string"==typeof e?sb(e):e):"string"==typeof e?sg(e):[e]:[],sf=({kind:e,label:t,language:i}={kind:"subtitles"})=>t?`${"captions"===e?"cc":"sb"}:${i}:${encodeURIComponent(t)}`:i,sy=(e=[])=>Array.prototype.map.call(e,sf).join(" "),sA=e=>{let t=Object.entries(e).map(([e,t])=>i=>i[e]===t);return e=>t.every(t=>t(e))},sk=(e,t=[],i=[])=>{let a=sE(i).map(sA);Array.from(t).filter(e=>a.some(t=>t(e))).forEach(t=>{t.mode=e})},sw=(e,t=()=>!0)=>{if(!(null==e?void 0:e.textTracks))return[];let i="function"==typeof t?t:sA(t);return Array.from(e.textTracks).filter(i)},sI=e=>{var t;return!!(null==(t=e.mediaSubtitlesShowing)?void 0:t.length)||e.hasAttribute(i6.MEDIA_SUBTITLES_SHOWING)},sT="exitFullscreen"in ax?"exitFullscreen":"webkitExitFullscreen"in ax?"webkitExitFullscreen":"webkitCancelFullScreen"in ax?"webkitCancelFullScreen":void 0,s_="fullscreenElement"in ax?"fullscreenElement":"webkitFullscreenElement"in ax?"webkitFullscreenElement":void 0,sM="fullscreenEnabled"in ax?"fullscreenEnabled":"webkitFullscreenEnabled"in ax?"webkitFullscreenEnabled":void 0,sS=()=>{var e;return a||(a=null==(e=null==ax?void 0:ax.createElement)?void 0:e.call(ax,"video"))},sC=async(e=sS())=>{if(!e)return!1;let t=e.volume;e.volume=t/2+.1;let i=new AbortController,a=await Promise.race([sL(e,i.signal),sx(e,t)]);return i.abort(),a},sL=(e,t)=>new Promise(i=>{e.addEventListener("volumechange",()=>i(!0),{signal:t})}),sx=async(e,t)=>{for(let i=0;i<10;i++){if(e.volume===t)return!1;await av(10)}return e.volume!==t},sR=/.*Version\/.*Safari\/.*/.test(aL.navigator.userAgent),sD=(e=sS())=>(!aL.matchMedia("(display-mode: standalone)").matches||!sR)&&"function"==typeof(null==e?void 0:e.requestPictureInPicture),sN=(e=sS())=>(e=>{let{documentElement:t,media:i}=e;return!!(null==t?void 0:t[sM])||i&&"webkitSupportsFullscreen"in i})({documentElement:ax,media:e}),sP=sN(),sU=sD(),sO=!!aL.WebKitPlaybackTargetAvailabilityEvent,sW=!!aL.chrome,sH=e=>sw(e.media,e=>[ai,aa].includes(e.kind)).sort((e,t)=>e.kind>=t.kind?1:-1),s$=e=>sw(e.media,e=>e.mode===ar&&[ai,aa].includes(e.kind)),sB=(e,t)=>{let i=sH(e),a=s$(e),s=!!a.length;if(i.length){if(!1===t||s&&!0!==t)sk(as,i,a);else if(!0===t||!s&&!1!==t){let t=i[0],{options:s}=e;if(!(null==s?void 0:s.noSubtitlesLangPref)){let e=globalThis.localStorage.getItem("media-chrome-pref-subtitles-lang"),a=e?[e,...globalThis.navigator.languages]:globalThis.navigator.languages,s=i.filter(e=>a.some(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))).sort((e,t)=>a.findIndex(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))-a.findIndex(e=>t.language.toLowerCase().startsWith(e.split("-")[0])));s[0]&&(t=s[0])}let{language:r,label:n,kind:o}=t;sk(as,i,a),sk(ar,i,[{language:r,label:n,kind:o}])}}},sV=(e,t)=>e===t||null!=e&&null!=t&&typeof e==typeof t&&(!!("number"==typeof e&&Number.isNaN(e)&&Number.isNaN(t))||"object"==typeof e&&(Array.isArray(e)?sq(e,t):Object.entries(e).every(([e,i])=>e in t&&sV(i,t[e])))),sq=(e,t)=>{let i=Array.isArray(e),a=Array.isArray(t);return i===a&&(!i&&!a||e.length===t.length&&e.every((e,i)=>sV(e,t[i])))},sG=Object.values(al),sF=sC().then(e=>s=e),sQ=async(...e)=>{await Promise.all(e.filter(e=>e).map(async e=>{if(!("localName"in e&&e instanceof aL.HTMLElement))return;let t=e.localName;if(!t.includes("-"))return;let i=aL.customElements.get(t);i&&e instanceof i||(await aL.customElements.whenDefined(t),aL.customElements.upgrade(e))}))},sZ=new aL.DOMParser,sj={mediaError:{get(e,t){let{media:i}=e;if((null==t?void 0:t.type)!=="playing")return null==i?void 0:i.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(e,t){var i;let{media:a}=e;if((null==t?void 0:t.type)!=="playing")return null==(i=null==a?void 0:a.error)?void 0:i.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(e,t){var i,a;let{media:s}=e;if((null==t?void 0:t.type)!=="playing")return null!=(a=null==(i=null==s?void 0:s.error)?void 0:i.message)?a:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoWidth)?t:0},mediaEvents:["resize"]},mediaHeight:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoHeight)?t:0},mediaEvents:["resize"]},mediaPaused:{get(e){var t;let{media:i}=e;return null==(t=null==i?void 0:i.paused)||t},set(e,t){var i;let{media:a}=t;a&&(e?a.pause():null==(i=a.play())||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(e,t){let{media:i}=e;return!!i&&(t?"playing"===t.type:!i.paused)},mediaEvents:["playing","emptied"]},mediaEnded:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.ended)&&t},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.playbackRate)?t:1},set(e,t){let{media:i}=t;!i||Number.isFinite(+e)&&(i.playbackRate=+e)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.muted)&&t},set(e,t){let{media:i}=t;if(i){try{aL.localStorage.setItem("media-chrome-pref-muted",e?"true":"false")}catch(e){console.debug("Error setting muted pref",e)}i.muted=e}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noMutedPref:i}}=t,{media:a}=t;if(a&&!a.muted&&!i)try{let i="true"===aL.localStorage.getItem("media-chrome-pref-muted");sj.mediaMuted.set(i,t),e(i)}catch(e){console.debug("Error getting muted pref",e)}}]},mediaVolume:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.volume)?t:1},set(e,t){let{media:i}=t;if(i){try{null==e?aL.localStorage.removeItem("media-chrome-pref-volume"):aL.localStorage.setItem("media-chrome-pref-volume",e.toString())}catch(e){console.debug("Error setting volume pref",e)}Number.isFinite(+e)&&(i.volume=+e)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noVolumePref:i}}=t;if(!i)try{let{media:i}=t;if(!i)return;let a=aL.localStorage.getItem("media-chrome-pref-volume");if(null==a)return;sj.mediaVolume.set(+a,t),e(+a)}catch(e){console.debug("Error getting volume pref",e)}}]},mediaVolumeLevel:{get(e){let{media:t}=e;return void 0===(null==t?void 0:t.volume)?"high":t.muted||0===t.volume?"off":t.volume<.5?"low":t.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.currentTime)?t:0},set(e,t){let{media:i}=t;i&&am(e)&&(i.currentTime=e)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(e){let{media:t,options:{defaultDuration:i}={}}=e;return i&&(!t||!t.duration||Number.isNaN(t.duration)||!Number.isFinite(t.duration))?i:Number.isFinite(null==t?void 0:t.duration)?t.duration:NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(e){let{media:t}=e;return(null==t?void 0:t.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(e){var t;let{media:i}=e;if(!(null==(t=null==i?void 0:i.seekable)?void 0:t.length))return;let a=i.seekable.start(0),s=i.seekable.end(i.seekable.length-1);if(a||s)return[Number(a.toFixed(3)),Number(s.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(e){var t;let{media:i}=e,a=null!=(t=null==i?void 0:i.buffered)?t:[];return Array.from(a).map((e,t)=>[Number(a.start(t).toFixed(3)),Number(a.end(t).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(e){let{media:t,options:{defaultStreamType:i}={}}=e,a=[al.LIVE,al.ON_DEMAND].includes(i)?i:void 0;if(!t)return a;let{streamType:s}=t;if(sG.includes(s))return s===al.UNKNOWN?a:s;let r=t.duration;return r===1/0?al.LIVE:Number.isFinite(r)?al.ON_DEMAND:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(e){let{media:t}=e;if(!t)return NaN;let{targetLiveWindow:i}=t,a=sj.mediaStreamType.get(e);return(null==i||Number.isNaN(i))&&a===al.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(e){let{media:t,options:{liveEdgeOffset:i=10}={}}=e;if(!t)return!1;if("number"==typeof t.liveEdgeStart)return!Number.isNaN(t.liveEdgeStart)&&t.currentTime>=t.liveEdgeStart;if(sj.mediaStreamType.get(e)!==al.LIVE)return!1;let a=t.seekable;if(!a)return!0;if(!a.length)return!1;let s=a.end(a.length-1)-i;return t.currentTime>=s},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get:e=>sH(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get:e=>s$(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i,a;let{media:s,options:r}=t;if(!s)return;let n=e=>{var i;r.defaultSubtitles&&(e&&![aa,ai].includes(null==(i=null==e?void 0:e.track)?void 0:i.kind)||sB(t,!0))};return s.addEventListener("loadstart",n),null==(i=s.textTracks)||i.addEventListener("addtrack",n),null==(a=s.textTracks)||a.addEventListener("removetrack",n),()=>{var e,t;s.removeEventListener("loadstart",n),null==(e=s.textTracks)||e.removeEventListener("addtrack",n),null==(t=s.textTracks)||t.removeEventListener("removetrack",n)}}]},mediaChaptersCues:{get(e){var t;let{media:i}=e;if(!i)return[];let[a]=sw(i,{kind:"chapters"});return Array.from(null!=(t=null==a?void 0:a.cues)?t:[]).map(({text:e,startTime:t,endTime:i})=>({text:e&&sZ.parseFromString(e,"text/html").body.textContent||e,startTime:t,endTime:i}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(!a)return;let s=a.querySelector('track[kind="chapters"][default][src]'),r=null==(i=a.shadowRoot)?void 0:i.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return null==s||s.addEventListener("load",e),null==r||r.addEventListener("load",e),()=>{null==s||s.removeEventListener("load",e),null==r||r.removeEventListener("load",e)}}]},mediaIsPip:{get(e){var t,i;let{media:a,documentElement:s}=e;if(!a||!s||!s.pictureInPictureElement)return!1;if(s.pictureInPictureElement===a)return!0;if(s.pictureInPictureElement instanceof HTMLMediaElement)return!!(null==(t=a.localName)?void 0:t.includes("-"))&&aV(a,s.pictureInPictureElement);if(s.pictureInPictureElement.localName.includes("-")){let e=s.pictureInPictureElement.shadowRoot;for(;null==e?void 0:e.pictureInPictureElement;){if(e.pictureInPictureElement===a)return!0;e=null==(i=e.pictureInPictureElement)?void 0:i.shadowRoot}}return!1},set(e,t){let{media:i}=t;if(i)if(e){if(!ax.pictureInPictureEnabled)return void console.warn("MediaChrome: Picture-in-picture is not enabled");if(!i.requestPictureInPicture)return void console.warn("MediaChrome: The current media does not support picture-in-picture");let e=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(t=>{if(11===t.code){if(!i.src)return void console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");if(0===i.readyState&&"none"===i.preload){let t=()=>{i.removeEventListener("loadedmetadata",a),i.preload="none"},a=()=>{i.requestPictureInPicture().catch(e),t()};i.addEventListener("loadedmetadata",a),i.preload="metadata",setTimeout(()=>{0===i.readyState&&e(),t()},1e3)}else throw t}else throw t})}else ax.pictureInPictureElement&&ax.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.videoRenditions)?t:[]].map(e=>({...e}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(e){var t,i,a;let{media:s}=e;return null==(a=null==(i=null==s?void 0:s.videoRenditions)?void 0:i[null==(t=s.videoRenditions)?void 0:t.selectedIndex])?void 0:a.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.videoRenditions))return void console.warn("MediaController: Rendition selection not supported by this media.");let a=Array.prototype.findIndex.call(i.videoRenditions,t=>t.id==e);i.videoRenditions.selectedIndex!=a&&(i.videoRenditions.selectedIndex=a)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.audioTracks)?t:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(e){var t,i;let{media:a}=e;return null==(i=[...null!=(t=null==a?void 0:a.audioTracks)?t:[]].find(e=>e.enabled))?void 0:i.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.audioTracks))return void console.warn("MediaChrome: Audio track selection not supported by this media.");for(let t of i.audioTracks)t.enabled=e==t.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get:e=>(e=>{var t;let{media:i,documentElement:a,fullscreenElement:s=i}=e;if(!i||!a)return!1;let r=(e=>{let{documentElement:t,media:i}=e,a=null==t?void 0:t[s_];return!a&&"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i&&i.webkitDisplayingFullscreen&&"fullscreen"===i.webkitPresentationMode?i:a})(e);if(!r)return!1;if(r===s||r===i)return!0;if(r.localName.includes("-")){let e=r.shadowRoot;if(!(s_ in e))return aV(r,s);for(;null==e?void 0:e[s_];){if(e[s_]===s)return!0;e=null==(t=e[s_])?void 0:t.shadowRoot}}return!1})(e),set(e,t){e?(e=>{var t;let{media:i,fullscreenElement:a}=e;try{let e=a&&"requestFullscreen"in a?"requestFullscreen":a&&"webkitRequestFullScreen"in a?"webkitRequestFullScreen":void 0;if(e){let i=null==(t=a[e])?void 0:t.call(a);if(i instanceof Promise)return i.catch(()=>{})}else(null==i?void 0:i.webkitEnterFullscreen)?i.webkitEnterFullscreen():(null==i?void 0:i.requestFullscreen)&&i.requestFullscreen()}catch(e){console.error(e)}})(t):(e=>{var t;let{documentElement:i}=e;if(sT){let e=null==(t=null==i?void 0:i[sT])?void 0:t.call(i);if(e instanceof Promise)return e.catch(()=>{})}})(t)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(e){var t;let{media:i}=e;return!!(null==i?void 0:i.remote)&&(null==(t=i.remote)?void 0:t.state)!=="disconnected"&&!!i.remote.state},set(e,t){var i,a;let{media:s}=t;if(s&&(!e||(null==(i=s.remote)?void 0:i.state)==="disconnected")&&(e||(null==(a=s.remote)?void 0:a.state)==="connected")){if("function"!=typeof s.remote.prompt)return void console.warn("MediaChrome: Casting is not supported in this environment");s.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get:()=>!1,set(e,t){let{media:i}=t;if(i){if(!(i.webkitShowPlaybackTargetPicker&&aL.WebKitPlaybackTargetAvailabilityEvent))return void console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(e){let{media:t}=e;if(!sP||!sN(t))return ao}},mediaPipUnavailable:{get(e){let{media:t}=e;if(!sU||!sD(t))return ao}},mediaVolumeUnavailable:{get(e){let{media:t}=e;if(!1===s||(null==t?void 0:t.volume)==void 0)return ao},stateOwnersUpdateHandlers:[e=>{null==s&&sF.then(t=>e(t?void 0:ao))}]},mediaCastUnavailable:{get(e,{availability:t="not-available"}={}){var i;let{media:a}=e;return sW&&(null==(i=null==a?void 0:a.remote)?void 0:i.state)?null!=t&&"available"!==t?an:void 0:ao},stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaAirplayUnavailable:{get:(e,t)=>sO?(null==t?void 0:t.availability)==="not-available"?an:void 0:ao,mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaRenditionUnavailable:{get(e){var t;let{media:i}=e;return(null==i?void 0:i.videoRenditions)?(null==(t=i.videoRenditions)?void 0:t.length)?void 0:an:ao},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(e){var t,i;let{media:a}=e;return(null==a?void 0:a.audioTracks)?(null!=(i=null==(t=a.audioTracks)?void 0:t.length)?i:0)<=1?an:void 0:ao},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]}},sK={[i4.MEDIA_PREVIEW_REQUEST](e,t,{detail:i}){var a,s,r;let n,o,{media:l}=t,d=null!=i?i:void 0;if(l&&null!=d){let[e]=sw(l,{kind:"metadata",label:"thumbnails"}),t=Array.prototype.find.call(null!=(a=null==e?void 0:e.cues)?a:[],(e,t,i)=>0===t?e.endTime>d:t===i.length-1?e.startTime<=d:e.startTime<=d&&e.endTime>d);if(t){let e=/'^(?:[a-z]+:)?\/\//i.test(t.text)||null==(s=null==l?void 0:l.querySelector('track[label="thumbnails"]'))?void 0:s.src,i=new URL(t.text,e);o=new URLSearchParams(i.hash).get("#xywh").split(",").map(e=>+e),n=i.href}}let u=e.mediaDuration.get(t),h=null==(r=e.mediaChaptersCues.get(t).find((e,t,i)=>t===i.length-1&&u===e.endTime?e.startTime<=d&&e.endTime>=d:e.startTime<=d&&e.endTime>d))?void 0:r.text;return null!=i&&null==h&&(h=""),{mediaPreviewTime:d,mediaPreviewImage:n,mediaPreviewCoords:o,mediaPreviewChapter:h}},[i4.MEDIA_PAUSE_REQUEST](e,t){e.mediaPaused.set(!0,t)},[i4.MEDIA_PLAY_REQUEST](e,t){var i,a,s,r;let n=e.mediaStreamType.get(t)===al.LIVE,o=!(null==(i=t.options)?void 0:i.noAutoSeekToLive),l=e.mediaTargetLiveWindow.get(t)>0;if(n&&o&&!l){let i=null==(a=e.mediaSeekable.get(t))?void 0:a[1];if(i){let a=null!=(r=null==(s=t.options)?void 0:s.seekToLiveOffset)?r:0;e.mediaCurrentTime.set(i-a,t)}}e.mediaPaused.set(!1,t)},[i4.MEDIA_PLAYBACK_RATE_REQUEST](e,t,{detail:i}){e.mediaPlaybackRate.set(i,t)},[i4.MEDIA_MUTE_REQUEST](e,t){e.mediaMuted.set(!0,t)},[i4.MEDIA_UNMUTE_REQUEST](e,t){e.mediaVolume.get(t)||e.mediaVolume.set(.25,t),e.mediaMuted.set(!1,t)},[i4.MEDIA_VOLUME_REQUEST](e,t,{detail:i}){i&&e.mediaMuted.get(t)&&e.mediaMuted.set(!1,t),e.mediaVolume.set(i,t)},[i4.MEDIA_SEEK_REQUEST](e,t,{detail:i}){e.mediaCurrentTime.set(i,t)},[i4.MEDIA_SEEK_TO_LIVE_REQUEST](e,t){var i,a,s;let r=null==(i=e.mediaSeekable.get(t))?void 0:i[1];if(Number.isNaN(Number(r)))return;let n=null!=(s=null==(a=t.options)?void 0:a.seekToLiveOffset)?s:0;e.mediaCurrentTime.set(r-n,t)},[i4.MEDIA_SHOW_SUBTITLES_REQUEST](e,t,{detail:i}){var a;let{options:s}=t,r=sH(t),n=sE(i),o=null==(a=n[0])?void 0:a.language;o&&!s.noSubtitlesLangPref&&aL.localStorage.setItem("media-chrome-pref-subtitles-lang",o),sk(ar,r,n)},[i4.MEDIA_DISABLE_SUBTITLES_REQUEST](e,t,{detail:i}){sk(as,sH(t),null!=i?i:[])},[i4.MEDIA_TOGGLE_SUBTITLES_REQUEST](e,t,{detail:i}){sB(t,i)},[i4.MEDIA_RENDITION_REQUEST](e,t,{detail:i}){e.mediaRenditionSelected.set(i,t)},[i4.MEDIA_AUDIO_TRACK_REQUEST](e,t,{detail:i}){e.mediaAudioTrackEnabled.set(i,t)},[i4.MEDIA_ENTER_PIP_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsPip.set(!0,t)},[i4.MEDIA_EXIT_PIP_REQUEST](e,t){e.mediaIsPip.set(!1,t)},[i4.MEDIA_ENTER_FULLSCREEN_REQUEST](e,t){e.mediaIsPip.get(t)&&e.mediaIsPip.set(!1,t),e.mediaIsFullscreen.set(!0,t)},[i4.MEDIA_EXIT_FULLSCREEN_REQUEST](e,t){e.mediaIsFullscreen.set(!1,t)},[i4.MEDIA_ENTER_CAST_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsCasting.set(!0,t)},[i4.MEDIA_EXIT_CAST_REQUEST](e,t){e.mediaIsCasting.set(!1,t)},[i4.MEDIA_AIRPLAY_REQUEST](e,t){e.mediaIsAirplaying.set(!0,t)}};var sz=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sY=(e,t,i)=>(sz(e,t,"read from private field"),i?i.call(e):t.get(e)),sX=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},sJ=(e,t,i,a)=>(sz(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),s0=(e,t,i)=>(sz(e,t,"access private method"),i);let s1=["ArrowLeft","ArrowRight","Enter"," ","f","m","k","c"],s2="defaultsubtitles",s3="defaultstreamtype",s5="defaultduration",s4="fullscreenelement",s7="hotkeys",s8="keysused",s9="liveedgeoffset",s6="seektoliveoffset",re="noautoseektolive",rt="nohotkeys",ri="novolumepref",ra="nosubtitleslangpref",rs="nodefaultstore",rr="keyboardforwardseekoffset",rn="keyboardbackwardseekoffset",ro="lang";class rl extends su{constructor(){super(),sX(this,W),sX(this,$),sX(this,V),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,sX(this,R,new sv(this,s7)),sX(this,D,void 0),sX(this,N,void 0),sX(this,P,void 0),sX(this,U,void 0),sX(this,O,e=>{var t;null==(t=sY(this,N))||t.dispatch(e)}),this.associateElement(this);let e={};sJ(this,P,t=>{Object.entries(t).forEach(([t,i])=>{if(t in e&&e[t]===i)return;this.propagateMediaState(t,i);let a=t.toLowerCase(),s=new aL.CustomEvent(at[a],{composed:!0,detail:i});this.dispatchEvent(s)}),e=t}),this.enableHotkeys()}static get observedAttributes(){return super.observedAttributes.concat(rt,s7,s3,s2,s5,ro)}get mediaStore(){return sY(this,N)}set mediaStore(e){var t,i;(sY(this,N)&&(null==(t=sY(this,U))||t.call(this),sJ(this,U,void 0)),sJ(this,N,e),sY(this,N)||this.hasAttribute(rs))?sJ(this,U,null==(i=sY(this,N))?void 0:i.subscribe(sY(this,P))):s0(this,W,H).call(this)}get fullscreenElement(){var e;return null!=(e=sY(this,D))?e:this}set fullscreenElement(e){var t;this.hasAttribute(s4)&&this.removeAttribute(s4),sJ(this,D,e),null==(t=sY(this,N))||t.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return aY(this,s2)}set defaultSubtitles(e){aX(this,s2,e)}get defaultStreamType(){return aJ(this,s3)}set defaultStreamType(e){a0(this,s3,e)}get defaultDuration(){return aK(this,s5)}set defaultDuration(e){az(this,s5,e)}get noHotkeys(){return aY(this,rt)}set noHotkeys(e){aX(this,rt,e)}get keysUsed(){return aJ(this,s8)}set keysUsed(e){a0(this,s8,e)}get liveEdgeOffset(){return aK(this,s9)}set liveEdgeOffset(e){az(this,s9,e)}get noAutoSeekToLive(){return aY(this,re)}set noAutoSeekToLive(e){aX(this,re,e)}get noVolumePref(){return aY(this,ri)}set noVolumePref(e){aX(this,ri,e)}get noSubtitlesLangPref(){return aY(this,ra)}set noSubtitlesLangPref(e){aX(this,ra,e)}get noDefaultStore(){return aY(this,rs)}set noDefaultStore(e){aX(this,rs,e)}attributeChangedCallback(e,t,i){var a,s,r,n,o,l,d,u;if(super.attributeChangedCallback(e,t,i),e===rt)i!==t&&""===i?(this.hasAttribute(s7)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):i!==t&&null===i&&this.enableHotkeys();else if(e===s7)sY(this,R).value=i;else if(e===s2&&i!==t)null==(a=sY(this,N))||a.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(s2)}});else if(e===s3)null==(r=sY(this,N))||r.dispatch({type:"optionschangerequest",detail:{defaultStreamType:null!=(s=this.getAttribute(s3))?s:void 0}});else if(e===s9)null==(n=sY(this,N))||n.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(s9)?+this.getAttribute(s9):void 0,seekToLiveOffset:this.hasAttribute(s6)?void 0:+this.getAttribute(s9)}});else if(e===s6)null==(o=sY(this,N))||o.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(s6)?+this.getAttribute(s6):void 0}});else if(e===re)null==(l=sY(this,N))||l.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(re)}});else if(e===s4){let e=i?null==(d=this.getRootNode())?void 0:d.getElementById(i):void 0;sJ(this,D,e),null==(u=sY(this,N))||u.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}else e===ro&&i!==t&&(ay=i)}connectedCallback(){var e,t;sY(this,N)||this.hasAttribute(rs)||s0(this,W,H).call(this),null==(e=sY(this,N))||e.dispatch({type:"documentelementchangerequest",detail:ax}),super.connectedCallback(),sY(this,N)&&!sY(this,U)&&sJ(this,U,null==(t=sY(this,N))?void 0:t.subscribe(sY(this,P))),this.enableHotkeys()}disconnectedCallback(){var e,t,i,a;null==(e=super.disconnectedCallback)||e.call(this),sY(this,N)&&(null==(t=sY(this,N))||t.dispatch({type:"documentelementchangerequest",detail:void 0}),null==(i=sY(this,N))||i.dispatch({type:i4.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})),sY(this,U)&&(null==(a=sY(this,U))||a.call(this),sJ(this,U,void 0))}mediaSetCallback(e){var t;super.mediaSetCallback(e),null==(t=sY(this,N))||t.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var t;super.mediaUnsetCallback(e),null==(t=sY(this,N))||t.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,t){rg(this.mediaStateReceivers,e,t)}associateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;if(t.has(e))return;let i=rE(e,this.registerMediaStateReceiver.bind(this),this.unregisterMediaStateReceiver.bind(this));Object.values(i4).forEach(t=>{e.addEventListener(t,sY(this,O))}),t.set(e,i)}unassociateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;t.has(e)&&(t.get(e)(),t.delete(e),Object.values(i4).forEach(t=>{e.removeEventListener(t,sY(this,O))}))}registerMediaStateReceiver(e){if(!e)return;let t=this.mediaStateReceivers;!(t.indexOf(e)>-1)&&(t.push(e),sY(this,N)&&Object.entries(sY(this,N).getState()).forEach(([t,i])=>{rg([e],t,i)}))}unregisterMediaStateReceiver(e){let t=this.mediaStateReceivers,i=t.indexOf(e);i<0||t.splice(i,1)}enableHotkeys(){this.addEventListener("keydown",s0(this,V,q))}disableHotkeys(){this.removeEventListener("keydown",s0(this,V,q)),this.removeEventListener("keyup",s0(this,$,B))}get hotkeys(){return aJ(this,s7)}set hotkeys(e){a0(this,s7,e)}keyboardShortcutHandler(e){var t,i,a,s,r;let n,o,l,d=e.target;if(!((null!=(a=null!=(i=null==(t=d.getAttribute(s8))?void 0:t.split(" "))?i:null==d?void 0:d.keysUsed)?a:[]).map(e=>"Space"===e?" ":e).filter(Boolean).includes(e.key)||sY(this,R).contains(`no${e.key.toLowerCase()}`))&&!(" "===e.key&&sY(this,R).contains("nospace")))switch(e.key){case" ":case"k":n=sY(this,N).getState().mediaPaused?i4.MEDIA_PLAY_REQUEST:i4.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new aL.CustomEvent(n,{composed:!0,bubbles:!0}));break;case"m":n="off"===this.mediaStore.getState().mediaVolumeLevel?i4.MEDIA_UNMUTE_REQUEST:i4.MEDIA_MUTE_REQUEST,this.dispatchEvent(new aL.CustomEvent(n,{composed:!0,bubbles:!0}));break;case"f":n=this.mediaStore.getState().mediaIsFullscreen?i4.MEDIA_EXIT_FULLSCREEN_REQUEST:i4.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new aL.CustomEvent(n,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new aL.CustomEvent(i4.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":{let e=this.hasAttribute(rn)?+this.getAttribute(rn):10;o=Math.max((null!=(s=this.mediaStore.getState().mediaCurrentTime)?s:0)-e,0),l=new aL.CustomEvent(i4.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:o}),this.dispatchEvent(l);break}case"ArrowRight":{let e=this.hasAttribute(rr)?+this.getAttribute(rr):10;o=Math.max((null!=(r=this.mediaStore.getState().mediaCurrentTime)?r:0)+e,0),l=new aL.CustomEvent(i4.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:o}),this.dispatchEvent(l)}}}}R=new WeakMap,D=new WeakMap,N=new WeakMap,P=new WeakMap,U=new WeakMap,O=new WeakMap,W=new WeakSet,H=function(){var e;this.mediaStore=(({media:e,fullscreenElement:t,documentElement:i,stateMediator:a=sj,requestMap:s=sK,options:r={},monitorStateOwnersOnlyWithSubscriptions:n=!0})=>{let o,l=[],d={options:{...r}},u=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0}),h=e=>{void 0==e||sV(e,u)||(u=Object.freeze({...u,...e}),l.forEach(e=>e(u)))},c=()=>{h(Object.entries(a).reduce((e,[t,{get:i}])=>(e[t]=i(d),e),{}))},m={},p=async(e,t)=>{var i,s,r,u,p,v,b,g,E,f,y,A,k,w,I,T;let _=!!o;if(o={...d,...null!=o?o:{},...e},_)return;await sQ(...Object.values(e));let M=l.length>0&&0===t&&n,S=d.media!==o.media,C=(null==(i=d.media)?void 0:i.textTracks)!==(null==(s=o.media)?void 0:s.textTracks),L=(null==(r=d.media)?void 0:r.videoRenditions)!==(null==(u=o.media)?void 0:u.videoRenditions),x=(null==(p=d.media)?void 0:p.audioTracks)!==(null==(v=o.media)?void 0:v.audioTracks),R=(null==(b=d.media)?void 0:b.remote)!==(null==(g=o.media)?void 0:g.remote),D=d.documentElement!==o.documentElement,N=!!d.media&&(S||M),P=!!(null==(E=d.media)?void 0:E.textTracks)&&(C||M),U=!!(null==(f=d.media)?void 0:f.videoRenditions)&&(L||M),O=!!(null==(y=d.media)?void 0:y.audioTracks)&&(x||M),W=!!(null==(A=d.media)?void 0:A.remote)&&(R||M),H=!!d.documentElement&&(D||M),$=N||P||U||O||W||H,B=0===l.length&&1===t&&n,V=!!o.media&&(S||B),q=!!(null==(k=o.media)?void 0:k.textTracks)&&(C||B),G=!!(null==(w=o.media)?void 0:w.videoRenditions)&&(L||B),F=!!(null==(I=o.media)?void 0:I.audioTracks)&&(x||B),Q=!!(null==(T=o.media)?void 0:T.remote)&&(R||B),Z=!!o.documentElement&&(D||B),j=V||q||G||F||Q||Z;if(!($||j)){Object.entries(o).forEach(([e,t])=>{d[e]=t}),c(),o=void 0;return}Object.entries(a).forEach(([e,{get:t,mediaEvents:i=[],textTracksEvents:a=[],videoRenditionsEvents:s=[],audioTracksEvents:r=[],remoteEvents:n=[],rootEvents:l=[],stateOwnersUpdateHandlers:u=[]}])=>{let c;m[e]||(m[e]={});let p=i=>{h({[e]:t(d,i)})};c=m[e].mediaEvents,i.forEach(t=>{c&&N&&(d.media.removeEventListener(t,c),m[e].mediaEvents=void 0),V&&(o.media.addEventListener(t,p),m[e].mediaEvents=p)}),c=m[e].textTracksEvents,a.forEach(t=>{var i,a;c&&P&&(null==(i=d.media.textTracks)||i.removeEventListener(t,c),m[e].textTracksEvents=void 0),q&&(null==(a=o.media.textTracks)||a.addEventListener(t,p),m[e].textTracksEvents=p)}),c=m[e].videoRenditionsEvents,s.forEach(t=>{var i,a;c&&U&&(null==(i=d.media.videoRenditions)||i.removeEventListener(t,c),m[e].videoRenditionsEvents=void 0),G&&(null==(a=o.media.videoRenditions)||a.addEventListener(t,p),m[e].videoRenditionsEvents=p)}),c=m[e].audioTracksEvents,r.forEach(t=>{var i,a;c&&O&&(null==(i=d.media.audioTracks)||i.removeEventListener(t,c),m[e].audioTracksEvents=void 0),F&&(null==(a=o.media.audioTracks)||a.addEventListener(t,p),m[e].audioTracksEvents=p)}),c=m[e].remoteEvents,n.forEach(t=>{var i,a;c&&W&&(null==(i=d.media.remote)||i.removeEventListener(t,c),m[e].remoteEvents=void 0),Q&&(null==(a=o.media.remote)||a.addEventListener(t,p),m[e].remoteEvents=p)}),c=m[e].rootEvents,l.forEach(t=>{c&&H&&(d.documentElement.removeEventListener(t,c),m[e].rootEvents=void 0),Z&&(o.documentElement.addEventListener(t,p),m[e].rootEvents=p)});let v=m[e].stateOwnersUpdateHandlers;u.forEach(t=>{v&&$&&v(),j&&(m[e].stateOwnersUpdateHandlers=t(p,o))})}),Object.entries(o).forEach(([e,t])=>{d[e]=t}),c(),o=void 0};return p({media:e,fullscreenElement:t,documentElement:i,options:r}),{dispatch(e){let{type:t,detail:i}=e;s[t]&&null==u.mediaErrorCode?h(s[t](a,d,e)):"mediaelementchangerequest"===t?p({media:i}):"fullscreenelementchangerequest"===t?p({fullscreenElement:i}):"documentelementchangerequest"===t?p({documentElement:i}):"optionschangerequest"===t&&Object.entries(null!=i?i:{}).forEach(([e,t])=>{d.options[e]=t})},getState:()=>u,subscribe:e=>(p({},l.length+1),l.push(e),e(u),()=>{let t=l.indexOf(e);t>=0&&(p({},l.length-1),l.splice(t,1))})}})({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(s2),defaultDuration:this.hasAttribute(s5)?+this.getAttribute(s5):void 0,defaultStreamType:null!=(e=this.getAttribute(s3))?e:void 0,liveEdgeOffset:this.hasAttribute(s9)?+this.getAttribute(s9):void 0,seekToLiveOffset:this.hasAttribute(s6)?+this.getAttribute(s6):this.hasAttribute(s9)?+this.getAttribute(s9):void 0,noAutoSeekToLive:this.hasAttribute(re),noVolumePref:this.hasAttribute(ri),noSubtitlesLangPref:this.hasAttribute(ra)}})},$=new WeakSet,B=function(e){let{key:t}=e;s1.includes(t)?this.keyboardShortcutHandler(e):this.removeEventListener("keyup",s0(this,$,B))},V=new WeakSet,q=function(e){let{metaKey:t,altKey:i,key:a}=e;t||i||!s1.includes(a)?this.removeEventListener("keyup",s0(this,$,B)):([" ","ArrowLeft","ArrowRight"].includes(a)&&!(sY(this,R).contains(`no${a.toLowerCase()}`)||" "===a&&sY(this,R).contains("nospace"))&&e.preventDefault(),this.addEventListener("keyup",s0(this,$,B),{once:!0}))};let rd=Object.values(i6),ru=Object.values(i8),rh=e=>{var t,i,a,s;let{observedAttributes:r}=e.constructor;!r&&(null==(t=e.nodeName)?void 0:t.includes("-"))&&(aL.customElements.upgrade(e),{observedAttributes:r}=e.constructor);let n=null==(s=null==(a=null==(i=null==e?void 0:e.getAttribute)?void 0:i.call(e,i7.MEDIA_CHROME_ATTRIBUTES))?void 0:a.split)?void 0:s.call(a,/\s+/);return Array.isArray(r||n)?(r||n).filter(e=>rd.includes(e)):[]},rc=e=>{var t,i;return(null==(t=e.nodeName)?void 0:t.includes("-"))&&aL.customElements.get(null==(i=e.nodeName)?void 0:i.toLowerCase())&&!(e instanceof aL.customElements.get(e.nodeName.toLowerCase()))&&aL.customElements.upgrade(e),ru.some(t=>t in e)||!!rh(e).length},rm=e=>{var t;return null==(t=null==e?void 0:e.join)?void 0:t.call(e,":")},rp={[i6.MEDIA_SUBTITLES_LIST]:sy,[i6.MEDIA_SUBTITLES_SHOWING]:sy,[i6.MEDIA_SEEKABLE]:rm,[i6.MEDIA_BUFFERED]:e=>null==e?void 0:e.map(rm).join(" "),[i6.MEDIA_PREVIEW_COORDS]:e=>null==e?void 0:e.join(" "),[i6.MEDIA_RENDITION_LIST]:function(e){return null==e?void 0:e.map(ad).join(" ")},[i6.MEDIA_AUDIO_TRACK_LIST]:function(e){return null==e?void 0:e.map(ah).join(" ")}},rv=async(e,t,i)=>{var a,s;if(e.isConnected||await av(0),"boolean"==typeof i||null==i)return aX(e,t,i);if("number"==typeof i)return az(e,t,i);if("string"==typeof i)return a0(e,t,i);if(Array.isArray(i)&&!i.length)return e.removeAttribute(t);let r=null!=(s=null==(a=rp[t])?void 0:a.call(rp,i))?s:i;return e.setAttribute(t,r)},rb=(e,t)=>{var i;if(null==(i=e.closest)?void 0:i.call(e,'*[slot="media"]'))return;let a=(e,t)=>{var i,a;rc(e)&&t(e);let{children:s=[]}=null!=e?e:{};[...s,...null!=(a=null==(i=null==e?void 0:e.shadowRoot)?void 0:i.children)?a:[]].forEach(e=>rb(e,t))},s=null==e?void 0:e.nodeName.toLowerCase();s.includes("-")&&!rc(e)?aL.customElements.whenDefined(s).then(()=>{a(e,t)}):a(e,t)},rg=(e,t,i)=>{e.forEach(e=>{if(t in e){e[t]=i;return}let a=rh(e),s=t.toLowerCase();a.includes(s)&&rv(e,s,i)})},rE=(e,t,i)=>{rb(e,t);let a=e=>{var i;t(null!=(i=null==e?void 0:e.composedPath()[0])?i:e.target)},s=e=>{var t;i(null!=(t=null==e?void 0:e.composedPath()[0])?t:e.target)};e.addEventListener(i4.REGISTER_MEDIA_STATE_RECEIVER,a),e.addEventListener(i4.UNREGISTER_MEDIA_STATE_RECEIVER,s);let r=[],n=e=>{let a=e.target;"media"!==a.name&&(r.forEach(e=>rb(e,i)),(r=[...a.assignedElements({flatten:!0})]).forEach(e=>rb(e,t)))};e.addEventListener("slotchange",n);let o=new MutationObserver(e=>{e.forEach(e=>{let{addedNodes:a=[],removedNodes:s=[],type:r,target:n,attributeName:o}=e;"childList"===r?(Array.prototype.forEach.call(a,e=>rb(e,t)),Array.prototype.forEach.call(s,e=>rb(e,i))):"attributes"===r&&o===i7.MEDIA_CHROME_ATTRIBUTES&&(rc(n)?t(n):i(n))})});return o.observe(e,{childList:!0,attributes:!0,subtree:!0}),()=>{rb(e,i),e.removeEventListener("slotchange",n),o.disconnect(),e.removeEventListener(i4.REGISTER_MEDIA_STATE_RECEIVER,a),e.removeEventListener(i4.UNREGISTER_MEDIA_STATE_RECEIVER,s)}};aL.customElements.get("media-controller")||aL.customElements.define("media-controller",rl);let rf="placement",ry="bounds";class rA extends aL.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var e;if(!aQ(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;let t=this.placement;if("left"===t||"right"===t)return void this.style.removeProperty("--media-tooltip-offset-x");let i=getComputedStyle(this),a=null!=(e=aq(this,"#"+this.bounds))?e:aW(this);if(!a)return;let{x:s,width:r}=a.getBoundingClientRect(),{x:n,width:o}=this.getBoundingClientRect(),l=i.getPropertyValue("--media-tooltip-offset-x"),d=l?parseFloat(l.replace("px","")):0,u=i.getPropertyValue("--media-tooltip-container-margin"),h=u?parseFloat(u.replace("px","")):0,c=n-s+d-h,m=n+o-(s+r)+d+h;c<0?this.style.setProperty("--media-tooltip-offset-x",`${c}px`):m>0?this.style.setProperty("--media-tooltip-offset-x",`${m}px`):this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=aO(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){const e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[rf,ry]}get placement(){return aJ(this,rf)}set placement(e){a0(this,rf,e)}get bounds(){return aJ(this,ry)}set bounds(e){a0(this,ry,e)}}rA.shadowRootOptions={mode:"open"},rA.getTemplateHTML=function(e){return`
    <style>
      :host {
        --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
        --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
        --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
        --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
        --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
        position: relative;
        pointer-events: none;
        display: var(--media-tooltip-display, inline-flex);
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        z-index: var(--media-tooltip-z-index, 1);
        background: var(--_tooltip-background);
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        font: var(--media-font,
          var(--media-font-weight, 400)
          var(--media-font-size, 13px) /
          var(--media-text-content-height, var(--media-control-height, 18px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        padding: var(--media-tooltip-padding, .35em .7em);
        border: var(--media-tooltip-border, none);
        border-radius: var(--media-tooltip-border-radius, 5px);
        filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
        white-space: var(--media-tooltip-white-space, nowrap);
      }

      :host([hidden]) {
        display: none;
      }

      img, svg {
        display: inline-block;
      }

      #arrow {
        position: absolute;
        width: 0px;
        height: 0px;
        border-style: solid;
        display: var(--media-tooltip-arrow-display, block);
      }

      :host(:not([placement])),
      :host([placement="top"]) {
        position: absolute;
        bottom: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host(:not([placement])) #arrow,
      :host([placement="top"]) #arrow {
        top: 100%;
        left: 50%;
        border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
        border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="right"]) {
        position: absolute;
        left: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="right"]) #arrow {
        top: 50%;
        right: 100%;
        border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
        border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
        transform: translate(0, -50%);
      }

      :host([placement="bottom"]) {
        position: absolute;
        top: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host([placement="bottom"]) #arrow {
        bottom: 100%;
        left: 50%;
        border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
        border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="left"]) {
        position: absolute;
        right: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="left"]) #arrow {
        top: 50%;
        left: 100%;
        border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
        border-color: transparent transparent transparent var(--_tooltip-arrow-background);
        transform: translate(0, -50%);
      }
      
      :host([placement="none"]) #arrow {
        display: none;
      }
    </style>
    <slot></slot>
    <div id="arrow"></div>
  `},aL.customElements.get("media-tooltip")||aL.customElements.define("media-tooltip",rA);var rk=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},rw=(e,t,i)=>(rk(e,t,"read from private field"),i?i.call(e):t.get(e)),rI=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},rT=(e,t,i,a)=>(rk(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let r_="tooltipplacement",rM="disabled",rS="notooltip";class rC extends aL.HTMLElement{constructor(){if(super(),rI(this,K),rI(this,G,void 0),this.preventClick=!1,this.tooltipEl=null,rI(this,F,e=>{this.preventClick||this.handleClick(e),setTimeout(rw(this,Q),0)}),rI(this,Q,()=>{var e,t;null==(t=null==(e=this.tooltipEl)?void 0:e.updateXOffset)||t.call(e)}),rI(this,Z,e=>{let{key:t}=e;this.keysUsed.includes(t)?this.preventClick||this.handleClick(e):this.removeEventListener("keyup",rw(this,Z))}),rI(this,j,e=>{let{metaKey:t,altKey:i,key:a}=e;t||i||!this.keysUsed.includes(a)?this.removeEventListener("keyup",rw(this,Z)):this.addEventListener("keyup",rw(this,Z),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=aO(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",r_,i7.MEDIA_CONTROLLER]}enable(){this.addEventListener("click",rw(this,F)),this.addEventListener("keydown",rw(this,j)),this.tabIndex=0}disable(){this.removeEventListener("click",rw(this,F)),this.removeEventListener("keydown",rw(this,j)),this.removeEventListener("keyup",rw(this,Z)),this.tabIndex=-1}attributeChangedCallback(e,t,i){var a,s,r,n,o;e===i7.MEDIA_CONTROLLER?(t&&(null==(s=null==(a=rw(this,G))?void 0:a.unassociateElement)||s.call(a,this),rT(this,G,null)),i&&this.isConnected&&(rT(this,G,null==(r=this.getRootNode())?void 0:r.getElementById(i)),null==(o=null==(n=rw(this,G))?void 0:n.associateElement)||o.call(n,this))):"disabled"===e&&i!==t?null==i?this.enable():this.disable():e===r_&&this.tooltipEl&&i!==t&&(this.tooltipEl.placement=i),rw(this,Q).call(this)}connectedCallback(){var e,t,i;let{style:a}=aZ(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");let s=this.getAttribute(i7.MEDIA_CONTROLLER);s&&(rT(this,G,null==(e=this.getRootNode())?void 0:e.getElementById(s)),null==(i=null==(t=rw(this,G))?void 0:t.associateElement)||i.call(t,this)),aL.customElements.whenDefined("media-tooltip").then(()=>{var e,t;return(e=K,t=z,rk(this,e,"access private method"),t).call(this)})}disconnectedCallback(){var e,t;this.disable(),null==(t=null==(e=rw(this,G))?void 0:e.unassociateElement)||t.call(e,this),rT(this,G,null),this.removeEventListener("mouseenter",rw(this,Q)),this.removeEventListener("focus",rw(this,Q)),this.removeEventListener("click",rw(this,F))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return aJ(this,r_)}set tooltipPlacement(e){a0(this,r_,e)}get mediaController(){return aJ(this,i7.MEDIA_CONTROLLER)}set mediaController(e){a0(this,i7.MEDIA_CONTROLLER,e)}get disabled(){return aY(this,rM)}set disabled(e){aX(this,rM,e)}get noTooltip(){return aY(this,rS)}set noTooltip(e){aX(this,rS,e)}handleClick(e){}}G=new WeakMap,F=new WeakMap,Q=new WeakMap,Z=new WeakMap,j=new WeakMap,K=new WeakSet,z=function(){this.addEventListener("mouseenter",rw(this,Q)),this.addEventListener("focus",rw(this,Q)),this.addEventListener("click",rw(this,F));let e=this.tooltipPlacement;e&&this.tooltipEl&&(this.tooltipEl.placement=e)},rC.shadowRootOptions={mode:"open"},rC.getTemplateHTML=function(e,t={}){return`
    <style>
      :host {
        position: relative;
        font: var(--media-font,
          var(--media-font-weight, bold)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        padding: var(--media-button-padding, var(--media-control-padding, 10px));
        justify-content: var(--media-button-justify-content, center);
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        transition: background .15s linear;
        pointer-events: auto;
        cursor: var(--media-cursor, pointer);
        -webkit-tap-highlight-color: transparent;
      }

      
      :host(:focus-visible) {
        box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
        outline: 0;
      }
      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgba(50 50 70 / .7));
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-button-icon-width);
        height: var(--media-button-icon-height, var(--media-control-height, 24px));
        transform: var(--media-button-icon-transform);
        transition: var(--media-button-icon-transition);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
      }

      media-tooltip {
        
        max-width: 0;
        overflow-x: clip;
        opacity: 0;
        transition: opacity .3s, max-width 0s 9s;
      }

      :host(:hover) media-tooltip,
      :host(:focus-visible) media-tooltip {
        max-width: 100vw;
        opacity: 1;
        transition: opacity .3s;
      }

      :host([notooltip]) slot[name="tooltip"] {
        display: none;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${rA.shadowRootOptions.mode}">
          ${rA.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(e)}
        </slot>
      </media-tooltip>
    </slot>
  `},rC.getSlotTemplateHTML=function(e,t){return`
    <slot></slot>
  `},rC.getTooltipContentHTML=function(){return""},aL.customElements.get("media-chrome-button")||aL.customElements.define("media-chrome-button",rC);let rL=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`,rx=e=>{let t=e.mediaIsAirplaying?aA("stop airplay"):aA("start airplay");e.setAttribute("aria-label",t)};class rR extends rC{static get observedAttributes(){return[...super.observedAttributes,i6.MEDIA_IS_AIRPLAYING,i6.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),rx(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i6.MEDIA_IS_AIRPLAYING&&rx(this)}get mediaIsAirplaying(){return aY(this,i6.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){aX(this,i6.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return aJ(this,i6.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){a0(this,i6.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){let e=new aL.CustomEvent(i4.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}}rR.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${i6.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${i6.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${i6.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${i6.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${rL}</slot>
      <slot name="exit">${rL}</slot>
    </slot>
  `},rR.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${aA("start airplay")}</slot>
    <slot name="tooltip-exit">${aA("stop airplay")}</slot>
  `},aL.customElements.get("media-airplay-button")||aL.customElements.define("media-airplay-button",rR);let rD=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,rN=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,rP=e=>{e.setAttribute("aria-checked",sI(e).toString())};class rU extends rC{static get observedAttributes(){return[...super.observedAttributes,i6.MEDIA_SUBTITLES_LIST,i6.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","switch"),this.setAttribute("aria-label",aA("closed captions")),rP(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i6.MEDIA_SUBTITLES_SHOWING&&rP(this)}get mediaSubtitlesList(){return rO(this,i6.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){rW(this,i6.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return rO(this,i6.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){rW(this,i6.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new aL.CustomEvent(i4.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}rU.getSlotTemplateHTML=function(e){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-checked="true"]) slot[name=tooltip-enable],
      :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${rD}</slot>
      <slot name="off">${rN}</slot>
    </slot>
  `},rU.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enable">${aA("Enable captions")}</slot>
    <slot name="tooltip-disable">${aA("Disable captions")}</slot>
  `};let rO=(e,t)=>{let i=e.getAttribute(t);return i?sg(i):[]},rW=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=sy(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};aL.customElements.get("media-captions-button")||aL.customElements.define("media-captions-button",rU);let rH=e=>{let t=e.mediaIsCasting?aA("stop casting"):aA("start casting");e.setAttribute("aria-label",t)};class r$ extends rC{static get observedAttributes(){return[...super.observedAttributes,i6.MEDIA_IS_CASTING,i6.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),rH(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i6.MEDIA_IS_CASTING&&rH(this)}get mediaIsCasting(){return aY(this,i6.MEDIA_IS_CASTING)}set mediaIsCasting(e){aX(this,i6.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return aJ(this,i6.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){a0(this,i6.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){let e=this.mediaIsCasting?i4.MEDIA_EXIT_CAST_REQUEST:i4.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new aL.CustomEvent(e,{composed:!0,bubbles:!0}))}}r$.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${i6.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${i6.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${i6.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${i6.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg></slot>
      <slot name="exit"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg></slot>
    </slot>
  `},r$.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${aA("Start casting")}</slot>
    <slot name="tooltip-exit">${aA("Stop casting")}</slot>
  `},aL.customElements.get("media-cast-button")||aL.customElements.define("media-cast-button",r$);var rB=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},rV=(e,t,i)=>(rB(e,t,"read from private field"),i?i.call(e):t.get(e)),rq=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},rG=(e,t,i,a)=>(rB(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),rF=(e,t,i)=>(rB(e,t,"access private method"),i);let rQ="open";class rZ extends aL.HTMLElement{constructor(){super(),rq(this,ee),rq(this,ei),rq(this,es),rq(this,en),rq(this,el),rq(this,eu),rq(this,Y,!1),rq(this,X,null),rq(this,J,null),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}static get observedAttributes(){return[rQ,"anchor"]}get open(){return aY(this,rQ)}set open(e){aX(this,rQ,e)}handleEvent(e){switch(e.type){case"invoke":rF(this,en,eo).call(this,e);break;case"focusout":rF(this,el,ed).call(this,e);break;case"keydown":rF(this,eu,eh).call(this,e)}}connectedCallback(){rF(this,ee,et).call(this),this.role||(this.role="dialog")}attributeChangedCallback(e,t,i){rF(this,ee,et).call(this),e===rQ&&i!==t&&(this.open?rF(this,ei,ea).call(this):rF(this,es,er).call(this))}focus(){rG(this,X,aG());let e=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),t=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(e||t)return;let i=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==i||i.focus()}get keysUsed(){return["Escape","Tab"]}}Y=new WeakMap,X=new WeakMap,J=new WeakMap,ee=new WeakSet,et=function(){if(!rV(this,Y)&&(rG(this,Y,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);let e=aO(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e),queueMicrotask(()=>{let{style:e}=aZ(this.shadowRoot,":host");e.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}},ei=new WeakSet,ea=function(){var e;null==(e=rV(this,J))||e.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})},es=new WeakSet,er=function(){var e;null==(e=rV(this,J))||e.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))},en=new WeakSet,eo=function(e){rG(this,J,e.relatedTarget),aV(this,e.relatedTarget)||(this.open=!this.open)},el=new WeakSet,ed=function(e){var t;!aV(this,e.relatedTarget)&&(null==(t=rV(this,X))||t.focus(),rV(this,J)&&rV(this,J)!==e.relatedTarget&&this.open&&(this.open=!1))},eu=new WeakSet,eh=function(e){var t,i,a,s,r;let{key:n,ctrlKey:o,altKey:l,metaKey:d}=e;o||l||d||this.keysUsed.includes(n)&&(e.preventDefault(),e.stopPropagation(),"Tab"===n?(e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(s=null==(a=this.nextElementSibling)?void 0:a.focus)||s.call(a),this.blur()):"Escape"===n&&(null==(r=rV(this,X))||r.focus(),this.open=!1))},rZ.shadowRootOptions={mode:"open"},rZ.getTemplateHTML=function(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(e)}
  `},rZ.getSlotTemplateHTML=function(e){return`
    <slot id="content"></slot>
  `},aL.customElements.get("media-chrome-dialog")||aL.customElements.define("media-chrome-dialog",rZ);var rj=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},rK=(e,t,i)=>(rj(e,t,"read from private field"),i?i.call(e):t.get(e)),rz=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},rY=(e,t,i,a)=>(rj(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),rX=(e,t,i)=>(rj(e,t,"access private method"),i);class rJ extends aL.HTMLElement{constructor(){if(super(),rz(this,eA),rz(this,ew),rz(this,eT),rz(this,eM),rz(this,eC),rz(this,ex),rz(this,eD),rz(this,eP),rz(this,ec,void 0),rz(this,em,void 0),rz(this,ep,void 0),rz(this,ev,void 0),rz(this,eb,{}),rz(this,eg,[]),rz(this,eE,()=>{if(this.range.matches(":focus-visible")){let{style:e}=aZ(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),rz(this,ef,()=>{let{style:e}=aZ(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),rz(this,ey,()=>{let e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=aO(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.container=this.shadowRoot.querySelector("#container"),rY(this,ep,this.shadowRoot.querySelector("#startpoint")),rY(this,ev,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",i7.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,s,r,n,o;e===i7.MEDIA_CONTROLLER?(t&&(null==(s=null==(a=rK(this,ec))?void 0:a.unassociateElement)||s.call(a,this),rY(this,ec,null)),i&&this.isConnected&&(rY(this,ec,null==(r=this.getRootNode())?void 0:r.getElementById(i)),null==(o=null==(n=rK(this,ec))?void 0:n.associateElement)||o.call(n,this))):("disabled"===e||"aria-disabled"===e&&t!==i)&&(null==i?(this.range.removeAttribute(e),rX(this,ew,eI).call(this)):(this.range.setAttribute(e,i),rX(this,eT,e_).call(this)))}connectedCallback(){var e,t,i;let{style:a}=aZ(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),rK(this,eb).pointer=aZ(this.shadowRoot,"#pointer"),rK(this,eb).progress=aZ(this.shadowRoot,"#progress"),rK(this,eb).thumb=aZ(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),rK(this,eb).activeSegment=aZ(this.shadowRoot,"#segments-clipping rect:nth-child(0)");let s=this.getAttribute(i7.MEDIA_CONTROLLER);s&&(rY(this,ec,null==(e=this.getRootNode())?void 0:e.getElementById(s)),null==(i=null==(t=rK(this,ec))?void 0:t.associateElement)||i.call(t,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",rK(this,eE)),this.shadowRoot.addEventListener("focusout",rK(this,ef)),rX(this,ew,eI).call(this),aP(this.container,rK(this,ey))}disconnectedCallback(){var e,t;rX(this,eT,e_).call(this),null==(t=null==(e=rK(this,ec))?void 0:e.unassociateElement)||t.call(e,this),rY(this,ec,null),this.shadowRoot.removeEventListener("focusin",rK(this,eE)),this.shadowRoot.removeEventListener("focusout",rK(this,ef)),aU(this.container,rK(this,ey))}updatePointerBar(e){var t;null==(t=rK(this,eb).pointer)||t.style.setProperty("width",`${100*this.getPointerRatio(e)}%`)}updateBar(){var e,t;let i=100*this.range.valueAsNumber;null==(e=rK(this,eb).progress)||e.style.setProperty("width",`${i}%`),null==(t=rK(this,eb).thumb)||t.style.setProperty("left",`${i}%`)}updateSegments(e){let t=this.shadowRoot.querySelector("#segments-clipping");if(t.textContent="",this.container.classList.toggle("segments",!!(null==e?void 0:e.length)),!(null==e?void 0:e.length))return;let i=[...new Set([+this.range.min,...e.flatMap(e=>[e.start,e.end]),+this.range.max])];rY(this,eg,[...i]);let a=i.pop();for(let[e,s]of i.entries()){let[r,n]=[0===e,e===i.length-1],o=r?"calc(var(--segments-gap) / -1)":`${100*s}%`,l=n?a:i[e+1],d=`calc(${(l-s)*100}%${r||n?"":" - var(--segments-gap)"})`,u=ax.createElementNS("http://www.w3.org/2000/svg","rect"),h=aZ(this.shadowRoot,`#segments-clipping rect:nth-child(${e+1})`);h.style.setProperty("x",o),h.style.setProperty("width",d),t.append(u)}}getPointerRatio(e){var t,i,a,s;let r,n,o;return t=e.clientX,i=e.clientY,a=rK(this,ep).getBoundingClientRect(),r=(s=rK(this,ev).getBoundingClientRect()).x-a.x,0==(o=r*r+(n=s.y-a.y)*n)?0:Math.max(0,Math.min(1,((t-a.x)*r+(i-a.y)*n)/o))}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":rX(this,eP,eU).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":rX(this,eC,eL).call(this,e);break;case"pointerdown":rX(this,eM,eS).call(this,e);break;case"pointerup":rX(this,ex,eR).call(this);break;case"pointerleave":rX(this,eD,eN).call(this)}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}ec=new WeakMap,em=new WeakMap,ep=new WeakMap,ev=new WeakMap,eb=new WeakMap,eg=new WeakMap,eE=new WeakMap,ef=new WeakMap,ey=new WeakMap,eA=new WeakSet,ek=function(e){let t=rK(this,eb).activeSegment;if(!t)return;let i=this.getPointerRatio(e),a=rK(this,eg).findIndex((e,t,a)=>{let s=a[t+1];return null!=s&&i>=e&&i<=s}),s=`#segments-clipping rect:nth-child(${a+1})`;t.selectorText==s&&t.style.transform||(t.selectorText=s,t.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))},ew=new WeakSet,eI=function(){this.hasAttribute("disabled")||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))},eT=new WeakSet,e_=function(){var e,t;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),null==(e=aL.window)||e.removeEventListener("pointerup",this),null==(t=aL.window)||t.removeEventListener("pointermove",this)},eM=new WeakSet,eS=function(e){var t;rY(this,em,e.composedPath().includes(this.range)),null==(t=aL.window)||t.addEventListener("pointerup",this)},eC=new WeakSet,eL=function(e){var t;"mouse"!==e.pointerType&&rX(this,eM,eS).call(this,e),this.addEventListener("pointerleave",this),null==(t=aL.window)||t.addEventListener("pointermove",this)},ex=new WeakSet,eR=function(){var e;null==(e=aL.window)||e.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")},eD=new WeakSet,eN=function(){var e,t;this.removeEventListener("pointerleave",this),null==(e=aL.window)||e.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),null==(t=rK(this,eb).activeSegment)||t.style.removeProperty("transform")},eP=new WeakSet,eU=function(e){this.toggleAttribute("dragging",1===e.buttons||"mouse"!==e.pointerType),this.updatePointerBar(e),rX(this,eA,ek).call(this,e),this.dragging&&("mouse"!==e.pointerType||!rK(this,em))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(e),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})))},rJ.shadowRootOptions={mode:"open"},rJ.getTemplateHTML=function(e){return`
    <style>
      :host {
        --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

        box-shadow: var(--_focus-visible-box-shadow, none);
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
        display: inline-flex;
        align-items: center;
        
        vertical-align: middle;
        box-sizing: border-box;
        position: relative;
        width: 100px;
        transition: background .15s linear;
        cursor: var(--media-cursor, pointer);
        pointer-events: auto;
        touch-action: none; 
      }

      
      input[type=range]:focus {
        outline: 0;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgb(50 50 70 / .7));
      }

      #leftgap {
        padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      }

      #rightgap {
        padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      }

      #startpoint,
      #endpoint {
        position: absolute;
      }

      #endpoint {
        right: 0;
      }

      #container {
        
        width: var(--media-range-track-width, 100%);
        transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        min-width: 40px;
      }

      #range {
        
        display: var(--media-time-range-hover-display, block);
        bottom: var(--media-time-range-hover-bottom, -7px);
        height: var(--media-time-range-hover-height, max(100% + 7px, 25px));
        width: 100%;
        position: absolute;
        cursor: var(--media-cursor, pointer);

        -webkit-appearance: none; 
        -webkit-tap-highlight-color: transparent;
        background: transparent; 
        margin: 0;
        z-index: 1;
      }

      @media (hover: hover) {
        #range {
          bottom: var(--media-time-range-hover-bottom, -5px);
          height: var(--media-time-range-hover-height, max(100% + 5px, 20px));
        }
      }

      
      
      #range::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: transparent;
        width: .1px;
        height: .1px;
      }

      
      #range::-moz-range-thumb {
        background: transparent;
        border: transparent;
        width: .1px;
        height: .1px;
      }

      #appearance {
        height: var(--media-range-track-height, 4px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        position: absolute;
        
        will-change: transform;
      }

      #track {
        background: var(--media-range-track-background, rgb(255 255 255 / .2));
        border-radius: var(--media-range-track-border-radius, 1px);
        border: var(--media-range-track-border, none);
        outline: var(--media-range-track-outline);
        outline-offset: var(--media-range-track-outline-offset);
        backdrop-filter: var(--media-range-track-backdrop-filter);
        -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
        box-shadow: var(--media-range-track-box-shadow, none);
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      #progress,
      #pointer {
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #progress {
        background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
        transition: var(--media-range-track-transition);
      }

      #pointer {
        background: var(--media-range-track-pointer-background);
        border-right: var(--media-range-track-pointer-border-right);
        transition: visibility .25s, opacity .25s;
        visibility: hidden;
        opacity: 0;
      }

      @media (hover: hover) {
        :host(:hover) #pointer {
          transition: visibility .5s, opacity .5s;
          visibility: visible;
          opacity: 1;
        }
      }

      #thumb,
      ::slotted([slot=thumb]) {
        width: var(--media-range-thumb-width, 10px);
        height: var(--media-range-thumb-height, 10px);
        transition: var(--media-range-thumb-transition);
        transform: var(--media-range-thumb-transform, none);
        opacity: var(--media-range-thumb-opacity, 1);
        translate: -50%;
        position: absolute;
        left: 0;
        cursor: var(--media-cursor, pointer);
      }

      #thumb {
        border-radius: var(--media-range-thumb-border-radius, 10px);
        background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
        box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
        border: var(--media-range-thumb-border, none);
      }

      :host([disabled]) #thumb {
        background-color: #777;
      }

      .segments #appearance {
        height: var(--media-range-segment-hover-height, 7px);
      }

      #track {
        clip-path: url(#segments-clipping);
      }

      #segments {
        --segments-gap: var(--media-range-segments-gap, 2px);
        position: absolute;
        width: 100%;
        height: 100%;
      }

      #segments-clipping {
        transform: translateX(calc(var(--segments-gap) / 2));
      }

      #segments-clipping:empty {
        display: none;
      }

      #segments-clipping rect {
        height: var(--media-range-track-height, 4px);
        y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
        transition: var(--media-range-segment-transition, transform .1s ease-in-out);
        transform: var(--media-range-segment-transform, scaleY(1));
        transform-origin: center;
      }
    </style>
    <div id="leftgap"></div>
    <div id="container">
      <div id="startpoint"></div>
      <div id="endpoint"></div>
      <div id="appearance">
        <div id="track" part="track">
          <div id="pointer"></div>
          <div id="progress" part="progress"></div>
        </div>
        <slot name="thumb">
          <div id="thumb" part="thumb"></div>
        </slot>
        <svg id="segments"><clipPath id="segments-clipping"></clipPath></svg>
      </div>
      <input id="range" type="range" min="0" max="1" step="any" value="0">
    </div>
    <div id="rightgap"></div>
  `},aL.customElements.get("media-chrome-range")||aL.customElements.define("media-chrome-range",rJ);var r0=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},r1=(e,t,i)=>(r0(e,t,"read from private field"),i?i.call(e):t.get(e)),r2=(e,t,i,a)=>(r0(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class r3 extends aL.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,eO,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=aO(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[i7.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,s,r,n,o;e===i7.MEDIA_CONTROLLER&&(t&&(null==(s=null==(a=r1(this,eO))?void 0:a.unassociateElement)||s.call(a,this),r2(this,eO,null)),i&&this.isConnected&&(r2(this,eO,null==(r=this.getRootNode())?void 0:r.getElementById(i)),null==(o=null==(n=r1(this,eO))?void 0:n.associateElement)||o.call(n,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(i7.MEDIA_CONTROLLER);a&&(r2(this,eO,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=r1(this,eO))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=r1(this,eO))?void 0:e.unassociateElement)||t.call(e,this),r2(this,eO,null)}}eO=new WeakMap,r3.shadowRootOptions={mode:"open"},r3.getTemplateHTML=function(e){return`
    <style>
      :host {
        
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --media-loading-indicator-icon-height: 44px;
      }

      ::slotted(media-time-range),
      ::slotted(media-volume-range) {
        min-height: 100%;
      }

      ::slotted(media-time-range),
      ::slotted(media-clip-selector) {
        flex-grow: 1;
      }

      ::slotted([role="menu"]) {
        position: absolute;
      }
    </style>

    <slot></slot>
  `},aL.customElements.get("media-control-bar")||aL.customElements.define("media-control-bar",r3);var r5=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},r4=(e,t,i)=>(r5(e,t,"read from private field"),i?i.call(e):t.get(e)),r7=(e,t,i,a)=>(r5(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class r8 extends aL.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,eW,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=aO(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[i7.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,s,r,n,o;e===i7.MEDIA_CONTROLLER&&(t&&(null==(s=null==(a=r4(this,eW))?void 0:a.unassociateElement)||s.call(a,this),r7(this,eW,null)),i&&this.isConnected&&(r7(this,eW,null==(r=this.getRootNode())?void 0:r.getElementById(i)),null==(o=null==(n=r4(this,eW))?void 0:n.associateElement)||o.call(n,this)))}connectedCallback(){var e,t,i;let{style:a}=aZ(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);let s=this.getAttribute(i7.MEDIA_CONTROLLER);s&&(r7(this,eW,null==(e=this.getRootNode())?void 0:e.getElementById(s)),null==(i=null==(t=r4(this,eW))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=r4(this,eW))?void 0:e.unassociateElement)||t.call(e,this),r7(this,eW,null)}}eW=new WeakMap,r8.shadowRootOptions={mode:"open"},r8.getTemplateHTML=function(e,t={}){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
        padding: var(--media-control-padding, 10px);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        text-align: center;
        pointer-events: auto;
      }

      
      :host(:focus-visible) {
        box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
        outline: 0;
      }

      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}
  `},r8.getSlotTemplateHTML=function(e,t){return`
    <slot></slot>
  `},aL.customElements.get("media-text-display")||aL.customElements.define("media-text-display",r8);var r9=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},r6=(e,t,i)=>(r9(e,t,"read from private field"),i?i.call(e):t.get(e));class ne extends r8{constructor(){var e;super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,eH,void 0),((e,t,i,a)=>(r9(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,eH,this.shadowRoot.querySelector("slot")),r6(this,eH).textContent=aE(null!=(e=this.mediaDuration)?e:0)}static get observedAttributes(){return[...super.observedAttributes,i6.MEDIA_DURATION]}attributeChangedCallback(e,t,i){e===i6.MEDIA_DURATION&&(r6(this,eH).textContent=aE(+i)),super.attributeChangedCallback(e,t,i)}get mediaDuration(){return aK(this,i6.MEDIA_DURATION)}set mediaDuration(e){az(this,i6.MEDIA_DURATION,e)}}eH=new WeakMap,ne.getSlotTemplateHTML=function(e,t){return`
    <slot>${aE(t.mediaDuration)}</slot>
  `},aL.customElements.get("media-duration-display")||aL.customElements.define("media-duration-display",ne);let nt={2:aA("Network Error"),3:aA("Decode Error"),4:aA("Source Not Supported"),5:aA("Encryption Error")},ni={2:aA("A network error caused the media download to fail."),3:aA("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:aA("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:aA("The media is encrypted and there are no keys to decrypt it.")},na=e=>{var t,i;return 1===e.code?null:{title:null!=(t=nt[e.code])?t:`Error ${e.code}`,message:null!=(i=ni[e.code])?i:e.message}};var ns=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};function nr(e){var t;let{title:i,message:a}=null!=(t=na(e))?t:{},s="";return i&&(s+=`<slot name="error-${e.code}-title"><h3>${i}</h3></slot>`),a&&(s+=`<slot name="error-${e.code}-message"><p>${a}</p></slot>`),s}let nn=[i6.MEDIA_ERROR_CODE,i6.MEDIA_ERROR_MESSAGE];class no extends rZ{constructor(){super(...arguments),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,e$,null)}static get observedAttributes(){return[...super.observedAttributes,...nn]}formatErrorMessage(e){return this.constructor.formatErrorMessage(e)}attributeChangedCallback(e,t,i){var a;if(super.attributeChangedCallback(e,t,i),!nn.includes(e))return;let s=null!=(a=this.mediaError)?a:{code:this.mediaErrorCode,message:this.mediaErrorMessage};this.open=s.code&&null!==na(s),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(s))}get mediaError(){var e,t;return ns(this,e=e$,"read from private field"),t?t.call(this):e.get(this)}set mediaError(e){var t,i;ns(this,t=e$,"write to private field"),i?i.call(this,e):t.set(this,e)}get mediaErrorCode(){return aK(this,"mediaerrorcode")}set mediaErrorCode(e){az(this,"mediaerrorcode",e)}get mediaErrorMessage(){return aJ(this,"mediaerrormessage")}set mediaErrorMessage(e){a0(this,"mediaerrormessage",e)}}e$=new WeakMap,no.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${e.mediaerrorcode}" id="content">
      ${nr({code:+e.mediaerrorcode,message:e.mediaerrormessage})}
    </slot>
  `},no.formatErrorMessage=nr,aL.customElements.get("media-error-dialog")||aL.customElements.define("media-error-dialog",no);let nl=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,nd=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`,nu=e=>{let t=e.mediaIsFullscreen?aA("exit fullscreen mode"):aA("enter fullscreen mode");e.setAttribute("aria-label",t)};class nh extends rC{static get observedAttributes(){return[...super.observedAttributes,i6.MEDIA_IS_FULLSCREEN,i6.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),nu(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i6.MEDIA_IS_FULLSCREEN&&nu(this)}get mediaFullscreenUnavailable(){return aJ(this,i6.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){a0(this,i6.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return aY(this,i6.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){aX(this,i6.MEDIA_IS_FULLSCREEN,e)}handleClick(){let e=this.mediaIsFullscreen?i4.MEDIA_EXIT_FULLSCREEN_REQUEST:i4.MEDIA_ENTER_FULLSCREEN_REQUEST;this.dispatchEvent(new aL.CustomEvent(e,{composed:!0,bubbles:!0}))}}nh.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${i6.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${i6.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${i6.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${i6.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${nl}</slot>
      <slot name="exit">${nd}</slot>
    </slot>
  `},nh.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${aA("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${aA("Exit fullscreen mode")}</slot>
  `},aL.customElements.get("media-fullscreen-button")||aL.customElements.define("media-fullscreen-button",nh);let{MEDIA_TIME_IS_LIVE:nc,MEDIA_PAUSED:nm}=i6,{MEDIA_SEEK_TO_LIVE_REQUEST:np,MEDIA_PLAY_REQUEST:nv}=i4,nb=e=>{let t=e.mediaPaused||!e.mediaTimeIsLive,i=t?aA("seek to live"):aA("playing live");e.setAttribute("aria-label",i),t?e.removeAttribute("aria-disabled"):e.setAttribute("aria-disabled","true")};class ng extends rC{static get observedAttributes(){return[...super.observedAttributes,nc,nm]}connectedCallback(){super.connectedCallback(),nb(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),nb(this)}get mediaPaused(){return aY(this,i6.MEDIA_PAUSED)}set mediaPaused(e){aX(this,i6.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return aY(this,i6.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){aX(this,i6.MEDIA_TIME_IS_LIVE,e)}handleClick(){(this.mediaPaused||!this.mediaTimeIsLive)&&(this.dispatchEvent(new aL.CustomEvent(np,{composed:!0,bubbles:!0})),this.hasAttribute(nm)&&this.dispatchEvent(new aL.CustomEvent(nv,{composed:!0,bubbles:!0})))}}ng.getSlotTemplateHTML=function(e){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${nc}]:not([${nm}])) slot[name=indicator] > *,
      :host([${nc}]:not([${nm}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${nc}]:not([${nm}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator"><svg viewBox="0 0 6 12"><circle cx="3" cy="6" r="2"></circle></svg></slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${aA("live")}</slot>
  `},aL.customElements.get("media-live-button")||aL.customElements.define("media-live-button",ng);var nE=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nf=(e,t,i)=>(nE(e,t,"read from private field"),i?i.call(e):t.get(e)),ny=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},nA=(e,t,i,a)=>(nE(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let nk="loadingdelay",nw="noautohide",nI=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;class nT extends aL.HTMLElement{constructor(){if(super(),ny(this,eB,void 0),ny(this,eV,500),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=aO(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[i7.MEDIA_CONTROLLER,i6.MEDIA_PAUSED,i6.MEDIA_LOADING,nk]}attributeChangedCallback(e,t,i){var a,s,r,n,o;e===nk&&t!==i?this.loadingDelay=Number(i):e===i7.MEDIA_CONTROLLER&&(t&&(null==(s=null==(a=nf(this,eB))?void 0:a.unassociateElement)||s.call(a,this),nA(this,eB,null)),i&&this.isConnected&&(nA(this,eB,null==(r=this.getRootNode())?void 0:r.getElementById(i)),null==(o=null==(n=nf(this,eB))?void 0:n.associateElement)||o.call(n,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(i7.MEDIA_CONTROLLER);a&&(nA(this,eB,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=nf(this,eB))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=nf(this,eB))?void 0:e.unassociateElement)||t.call(e,this),nA(this,eB,null)}get loadingDelay(){return nf(this,eV)}set loadingDelay(e){nA(this,eV,e);let{style:t}=aZ(this.shadowRoot,":host");t.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return aY(this,i6.MEDIA_PAUSED)}set mediaPaused(e){aX(this,i6.MEDIA_PAUSED,e)}get mediaLoading(){return aY(this,i6.MEDIA_LOADING)}set mediaLoading(e){aX(this,i6.MEDIA_LOADING,e)}get mediaController(){return aJ(this,i7.MEDIA_CONTROLLER)}set mediaController(e){a0(this,i7.MEDIA_CONTROLLER,e)}get noAutohide(){return aY(this,nw)}set noAutohide(e){aX(this,nw,e)}}eB=new WeakMap,eV=new WeakMap,nT.shadowRootOptions={mode:"open"},nT.getTemplateHTML=function(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
        vertical-align: middle;
        box-sizing: border-box;
        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, 500ms);
      }

      #status {
        color: rgba(0,0,0,0);
        width: 0px;
        height: 0px;
      }

      :host slot[name=icon] > *,
      :host ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 0);
        transition: opacity 0.15s;
      }

      :host([${i6.MEDIA_LOADING}]:not([${i6.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${i6.MEDIA_LOADING}]:not([${i6.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${i6.MEDIA_LOADING}]:not([${i6.MEDIA_PAUSED}])) #status {
        visibility: var(--media-loading-indicator-opacity, visible);
        transition: visibility 0.15s var(--_loading-indicator-delay);
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-loading-indicator-icon-width);
        height: var(--media-loading-indicator-icon-height, 100px);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
      }
    </style>

    <slot name="icon">${nI}</slot>
    <div id="status" role="status" aria-live="polite">${aA("media loading")}</div>
  `},aL.customElements.get("media-loading-indicator")||aL.customElements.define("media-loading-indicator",nT);let n_=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,nM=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,nS=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`,nC=e=>{let t="off"===e.mediaVolumeLevel?aA("unmute"):aA("mute");e.setAttribute("aria-label",t)};class nL extends rC{static get observedAttributes(){return[...super.observedAttributes,i6.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),nC(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i6.MEDIA_VOLUME_LEVEL&&nC(this)}get mediaVolumeLevel(){return aJ(this,i6.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){a0(this,i6.MEDIA_VOLUME_LEVEL,e)}handleClick(){let e="off"===this.mediaVolumeLevel?i4.MEDIA_UNMUTE_REQUEST:i4.MEDIA_MUTE_REQUEST;this.dispatchEvent(new aL.CustomEvent(e,{composed:!0,bubbles:!0}))}}nL.getSlotTemplateHTML=function(e){return`
    <style>
      :host(:not([${i6.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${i6.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${i6.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${i6.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${i6.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${i6.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${i6.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${n_}</slot>
      <slot name="low">${nM}</slot>
      <slot name="medium">${nM}</slot>
      <slot name="high">${nS}</slot>
    </slot>
  `},nL.getTooltipContentHTML=function(){return`
    <slot name="tooltip-mute">${aA("Mute")}</slot>
    <slot name="tooltip-unmute">${aA("Unmute")}</slot>
  `},aL.customElements.get("media-mute-button")||aL.customElements.define("media-mute-button",nL);let nx=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,nR=e=>{let t=e.mediaIsPip?aA("exit picture in picture mode"):aA("enter picture in picture mode");e.setAttribute("aria-label",t)};class nD extends rC{static get observedAttributes(){return[...super.observedAttributes,i6.MEDIA_IS_PIP,i6.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),nR(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i6.MEDIA_IS_PIP&&nR(this)}get mediaPipUnavailable(){return aJ(this,i6.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){a0(this,i6.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return aY(this,i6.MEDIA_IS_PIP)}set mediaIsPip(e){aX(this,i6.MEDIA_IS_PIP,e)}handleClick(){let e=this.mediaIsPip?i4.MEDIA_EXIT_PIP_REQUEST:i4.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new aL.CustomEvent(e,{composed:!0,bubbles:!0}))}}nD.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${i6.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${i6.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${i6.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${i6.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${nx}</slot>
      <slot name="exit">${nx}</slot>
    </slot>
  `},nD.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${aA("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${aA("Exit picture in picture mode")}</slot>
  `},aL.customElements.get("media-pip-button")||aL.customElements.define("media-pip-button",nD);var nN=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot read from private field");return i?i.call(e):t.get(e)};let nP="rates",nU=[1,1.2,1.5,1.7,2];class nO extends rC{constructor(){var e;super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,eq,new sv(this,nP,{defaultValue:nU})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${null!=(e=this.mediaPlaybackRate)?e:1}x`}static get observedAttributes(){return[...super.observedAttributes,i6.MEDIA_PLAYBACK_RATE,nP]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===nP&&(nN(this,eq).value=i),e===i6.MEDIA_PLAYBACK_RATE){let e=i?+i:NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",aA("Playback rate {playbackRate}",{playbackRate:t}))}}get rates(){return nN(this,eq)}set rates(e){e?Array.isArray(e)?nN(this,eq).value=e.join(" "):"string"==typeof e&&(nN(this,eq).value=e):nN(this,eq).value=""}get mediaPlaybackRate(){return aK(this,i6.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){az(this,i6.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,t;let i=Array.from(nN(this,eq).values(),e=>+e).sort((e,t)=>e-t),a=null!=(t=null!=(e=i.find(e=>e>this.mediaPlaybackRate))?e:i[0])?t:1,s=new aL.CustomEvent(i4.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(s)}}eq=new WeakMap,nO.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${e.mediaplaybackrate||1}x</slot>
  `},nO.getTooltipContentHTML=function(){return aA("Playback rate")},aL.customElements.get("media-playback-rate-button")||aL.customElements.define("media-playback-rate-button",nO);let nW=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,nH=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`,n$=e=>{let t=e.mediaPaused?aA("play"):aA("pause");e.setAttribute("aria-label",t)};class nB extends rC{static get observedAttributes(){return[...super.observedAttributes,i6.MEDIA_PAUSED,i6.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),n$(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i6.MEDIA_PAUSED&&n$(this)}get mediaPaused(){return aY(this,i6.MEDIA_PAUSED)}set mediaPaused(e){aX(this,i6.MEDIA_PAUSED,e)}handleClick(){let e=this.mediaPaused?i4.MEDIA_PLAY_REQUEST:i4.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new aL.CustomEvent(e,{composed:!0,bubbles:!0}))}}nB.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${i6.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${i6.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${i6.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${i6.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${nW}</slot>
      <slot name="pause">${nH}</slot>
    </slot>
  `},nB.getTooltipContentHTML=function(){return`
    <slot name="tooltip-play">${aA("Play")}</slot>
    <slot name="tooltip-pause">${aA("Pause")}</slot>
  `},aL.customElements.get("media-play-button")||aL.customElements.define("media-play-button",nB);let nV="placeholdersrc";class nq extends aL.HTMLElement{static get observedAttributes(){return[nV,"src"]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=aO(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,t,i){if("src"===e&&(null==i?this.image.removeAttribute("src"):this.image.setAttribute("src",i)),e===nV)if(null==i)this.image.style.removeProperty("background-image");else{var a;a=this.image,a.style["background-image"]=`url('${i}')`}}get placeholderSrc(){return aJ(this,nV)}set placeholderSrc(e){a0(this,"src",e)}get src(){return aJ(this,"src")}set src(e){a0(this,"src",e)}}nq.shadowRootOptions={mode:"open"},nq.getTemplateHTML=function(e){return`
    <style>
      :host {
        pointer-events: none;
        display: var(--media-poster-image-display, inline-block);
        box-sizing: border-box;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        background-repeat: no-repeat;
        background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
        background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, center);
      }
    </style>

    <img part="poster img" aria-hidden="true" id="image"/>
  `},aL.customElements.get("media-poster-image")||aL.customElements.define("media-poster-image",nq);var nG=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};class nF extends r8{constructor(){super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,eG,void 0),((e,t,i,a)=>(nG(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,eG,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,i6.MEDIA_PREVIEW_CHAPTER]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===i6.MEDIA_PREVIEW_CHAPTER&&i!==t&&null!=i){var a,s;(nG(this,a=eG,"read from private field"),s?s.call(this):a.get(this)).textContent=i,""!==i?this.setAttribute("aria-valuetext",`chapter: ${i}`):this.removeAttribute("aria-valuetext")}}get mediaPreviewChapter(){return aJ(this,i6.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){a0(this,i6.MEDIA_PREVIEW_CHAPTER,e)}}eG=new WeakMap,aL.customElements.get("media-preview-chapter-display")||aL.customElements.define("media-preview-chapter-display",nF);var nQ=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nZ=(e,t,i)=>(nQ(e,t,"read from private field"),i?i.call(e):t.get(e)),nj=(e,t,i,a)=>(nQ(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class nK extends aL.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,eF,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=aO(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[i7.MEDIA_CONTROLLER,i6.MEDIA_PREVIEW_IMAGE,i6.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,t,i;let a=this.getAttribute(i7.MEDIA_CONTROLLER);a&&(nj(this,eF,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=nZ(this,eF))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=nZ(this,eF))?void 0:e.unassociateElement)||t.call(e,this),nj(this,eF,null)}attributeChangedCallback(e,t,i){var a,s,r,n,o;[i6.MEDIA_PREVIEW_IMAGE,i6.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===i7.MEDIA_CONTROLLER&&(t&&(null==(s=null==(a=nZ(this,eF))?void 0:a.unassociateElement)||s.call(a,this),nj(this,eF,null)),i&&this.isConnected&&(nj(this,eF,null==(r=this.getRootNode())?void 0:r.getElementById(i)),null==(o=null==(n=nZ(this,eF))?void 0:n.associateElement)||o.call(n,this)))}get mediaPreviewImage(){return aJ(this,i6.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){a0(this,i6.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){let e=this.getAttribute(i6.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(e=>+e)}set mediaPreviewCoords(e){e?this.setAttribute(i6.MEDIA_PREVIEW_COORDS,e.join(" ")):this.removeAttribute(i6.MEDIA_PREVIEW_COORDS)}update(){let e=this.mediaPreviewCoords,t=this.mediaPreviewImage;if(!(e&&t))return;let[i,a,s,r]=e,n=t.split("#")[0],{maxWidth:o,maxHeight:l,minWidth:d,minHeight:u}=getComputedStyle(this),h=Math.min(parseInt(o)/s,parseInt(l)/r),c=Math.max(parseInt(d)/s,parseInt(u)/r),m=h<1,p=m?h:c>1?c:1,{style:v}=aZ(this.shadowRoot,":host"),b=aZ(this.shadowRoot,"img").style,g=this.shadowRoot.querySelector("img"),E=m?"min":"max";v.setProperty(`${E}-width`,"initial","important"),v.setProperty(`${E}-height`,"initial","important"),v.width=`${s*p}px`,v.height=`${r*p}px`;let f=()=>{b.width=`${this.imgWidth*p}px`,b.height=`${this.imgHeight*p}px`,b.display="block"};g.src!==n&&(g.onload=()=>{this.imgWidth=g.naturalWidth,this.imgHeight=g.naturalHeight,f()},g.src=n,f()),f(),b.transform=`translate(-${i*p}px, -${a*p}px)`}}eF=new WeakMap,nK.shadowRootOptions={mode:"open"},nK.getTemplateHTML=function(e){return`
    <style>
      :host {
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
        overflow: hidden;
      }

      img {
        display: none;
        position: relative;
      }
    </style>
    <img crossorigin loading="eager" decoding="async">
  `},aL.customElements.get("media-preview-thumbnail")||aL.customElements.define("media-preview-thumbnail",nK);var nz=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nY=(e,t,i)=>(nz(e,t,"read from private field"),i?i.call(e):t.get(e));class nX extends r8{constructor(){super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,eQ,void 0),((e,t,i,a)=>(nz(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,eQ,this.shadowRoot.querySelector("slot")),nY(this,eQ).textContent=aE(0)}static get observedAttributes(){return[...super.observedAttributes,i6.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i6.MEDIA_PREVIEW_TIME&&null!=i&&(nY(this,eQ).textContent=aE(parseFloat(i)))}get mediaPreviewTime(){return aK(this,i6.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){az(this,i6.MEDIA_PREVIEW_TIME,e)}}eQ=new WeakMap,aL.customElements.get("media-preview-time-display")||aL.customElements.define("media-preview-time-display",nX);let nJ="seekoffset";class n0 extends rC{static get observedAttributes(){return[...super.observedAttributes,i6.MEDIA_CURRENT_TIME,nJ]}connectedCallback(){super.connectedCallback(),this.seekOffset=aK(this,nJ,30)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===nJ&&(this.seekOffset=aK(this,nJ,30))}get seekOffset(){return aK(this,nJ,30)}set seekOffset(e){az(this,nJ,e),this.setAttribute("aria-label",aA("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),a$(aB(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return aK(this,i6.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){az(this,i6.MEDIA_CURRENT_TIME,e)}handleClick(){let e=Math.max(this.mediaCurrentTime-this.seekOffset,0),t=new aL.CustomEvent(i4.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}n0.getSlotTemplateHTML=function(e,t){let i;return`
    <slot name="icon">${i=t.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${i}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`}</slot>
  `},n0.getTooltipContentHTML=function(){return aA("Seek backward")},aL.customElements.get("media-seek-backward-button")||aL.customElements.define("media-seek-backward-button",n0);let n1="seekoffset";class n2 extends rC{static get observedAttributes(){return[...super.observedAttributes,i6.MEDIA_CURRENT_TIME,n1]}connectedCallback(){super.connectedCallback(),this.seekOffset=aK(this,n1,30)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===n1&&(this.seekOffset=aK(this,n1,30))}get seekOffset(){return aK(this,n1,30)}set seekOffset(e){az(this,n1,e),this.setAttribute("aria-label",aA("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),a$(aB(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return aK(this,i6.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){az(this,i6.MEDIA_CURRENT_TIME,e)}handleClick(){let e=this.mediaCurrentTime+this.seekOffset,t=new aL.CustomEvent(i4.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}n2.getSlotTemplateHTML=function(e,t){let i;return`
    <slot name="icon">${i=t.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${i}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`}</slot>
  `},n2.getTooltipContentHTML=function(){return aA("Seek forward")},aL.customElements.get("media-seek-forward-button")||aL.customElements.define("media-seek-forward-button",n2);var n3=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},n5=(e,t,i)=>(n3(e,t,"read from private field"),i?i.call(e):t.get(e));let n4={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},n7=[...Object.values(n4),i6.MEDIA_CURRENT_TIME,i6.MEDIA_DURATION,i6.MEDIA_SEEKABLE],n8=["Enter"," "],n9="&nbsp;/&nbsp;",n6=(e,{timesSep:t=n9}={})=>{var i,a;let s=null!=(i=e.mediaCurrentTime)?i:0,[,r]=null!=(a=e.mediaSeekable)?a:[],n=0;Number.isFinite(e.mediaDuration)?n=e.mediaDuration:Number.isFinite(r)&&(n=r);let o=e.remaining?aE(0-(n-s)):aE(s);return e.showDuration?`${o}${t}${aE(n)}`:o};class oe extends r8{constructor(){super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,eZ,void 0),((e,t,i,a)=>(n3(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,eZ,this.shadowRoot.querySelector("slot")),n5(this,eZ).innerHTML=`${n6(this)}`}static get observedAttributes(){return[...super.observedAttributes,...n7,"disabled"]}connectedCallback(){let{style:e}=aZ(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","var(--media-cursor, pointer)"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","progressbar"),this.setAttribute("aria-label",aA("playback time"));let t=e=>{let{key:i}=e;n8.includes(i)?this.toggleTimeDisplay():this.removeEventListener("keyup",t)};this.addEventListener("keydown",e=>{let{metaKey:i,altKey:a,key:s}=e;i||a||!n8.includes(s)?this.removeEventListener("keyup",t):this.addEventListener("keyup",t)}),this.addEventListener("click",this.toggleTimeDisplay),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),super.disconnectedCallback()}attributeChangedCallback(e,t,i){n7.includes(e)?this.update():"disabled"===e&&i!==t&&(null==i?this.enable():this.disable()),super.attributeChangedCallback(e,t,i)}enable(){this.tabIndex=0}disable(){this.tabIndex=-1}get remaining(){return aY(this,n4.REMAINING)}set remaining(e){aX(this,n4.REMAINING,e)}get showDuration(){return aY(this,n4.SHOW_DURATION)}set showDuration(e){aX(this,n4.SHOW_DURATION,e)}get noToggle(){return aY(this,n4.NO_TOGGLE)}set noToggle(e){aX(this,n4.NO_TOGGLE,e)}get mediaDuration(){return aK(this,i6.MEDIA_DURATION)}set mediaDuration(e){az(this,i6.MEDIA_DURATION,e)}get mediaCurrentTime(){return aK(this,i6.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){az(this,i6.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){let e=this.getAttribute(i6.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){null==e?this.removeAttribute(i6.MEDIA_SEEKABLE):this.setAttribute(i6.MEDIA_SEEKABLE,e.join(":"))}update(){let e=n6(this);(e=>{var t;let i=e.mediaCurrentTime,[,a]=null!=(t=e.mediaSeekable)?t:[],s=null;if(Number.isFinite(e.mediaDuration)?s=e.mediaDuration:Number.isFinite(a)&&(s=a),null==i||null===s)return e.setAttribute("aria-valuetext","video not loaded, unknown time.");let r=e.remaining?ag(0-(s-i)):ag(i);if(!e.showDuration)return e.setAttribute("aria-valuetext",r);let n=ag(s),o=`${r} of ${n}`;e.setAttribute("aria-valuetext",o)})(this),e!==n5(this,eZ).innerHTML&&(n5(this,eZ).innerHTML=e)}}eZ=new WeakMap,oe.getSlotTemplateHTML=function(e,t){return`
    <slot>${n6(t)}</slot>
  `},aL.customElements.get("media-time-display")||aL.customElements.define("media-time-display",oe);var ot=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},oi=(e,t,i)=>(ot(e,t,"read from private field"),i?i.call(e):t.get(e)),oa=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},os=(e,t,i,a)=>(ot(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class or{constructor(e,t,i){oa(this,ej,void 0),oa(this,eK,void 0),oa(this,ez,void 0),oa(this,eY,void 0),oa(this,eX,void 0),oa(this,eJ,void 0),oa(this,e0,void 0),oa(this,e1,void 0),oa(this,e2,0),oa(this,e3,(e=performance.now())=>{os(this,e2,requestAnimationFrame(oi(this,e3))),os(this,eY,performance.now()-oi(this,ez));let t=1e3/this.fps;if(oi(this,eY)>t){let i,a,s,r;os(this,ez,e-oi(this,eY)%t);let n=1e3/((e-oi(this,eK))/++(i=this,a=eX,{set _(value){os(i,a,value,s)},get _(){return oi(i,a,r)}})._),o=(e-oi(this,eJ))/1e3/this.duration,l=oi(this,e0)+o*this.playbackRate;l-oi(this,ej).valueAsNumber>0?os(this,e1,this.playbackRate/this.duration/n):(os(this,e1,.995*oi(this,e1)),l=oi(this,ej).valueAsNumber+oi(this,e1)),this.callback(l)}}),os(this,ej,e),this.callback=t,this.fps=i}start(){0===oi(this,e2)&&(os(this,ez,performance.now()),os(this,eK,oi(this,ez)),os(this,eX,0),oi(this,e3).call(this))}stop(){0!==oi(this,e2)&&(cancelAnimationFrame(oi(this,e2)),os(this,e2,0))}update({start:e,duration:t,playbackRate:i}){let a=e-oi(this,ej).valueAsNumber,s=Math.abs(t-this.duration);(a>0||a<-.03||s>=.5)&&this.callback(e),os(this,e0,e),os(this,eJ,performance.now()),this.duration=t,this.playbackRate=i}}ej=new WeakMap,eK=new WeakMap,ez=new WeakMap,eY=new WeakMap,eX=new WeakMap,eJ=new WeakMap,e0=new WeakMap,e1=new WeakMap,e2=new WeakMap,e3=new WeakMap;var on=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},oo=(e,t,i)=>(on(e,t,"read from private field"),i?i.call(e):t.get(e)),ol=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},od=(e,t,i,a)=>(on(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),ou=(e,t,i)=>(on(e,t,"access private method"),i);let oh=(e,t=e.mediaCurrentTime)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:Math.max(0,Math.min((t-i)/(a-i),1))},oc=(e,t=e.range.valueAsNumber)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:t*(a-i)+i};class om extends rJ{constructor(){super(),ol(this,ta),ol(this,tr),ol(this,tl),ol(this,tu),ol(this,tc),ol(this,tp),ol(this,tb),ol(this,tE),ol(this,e5,void 0),ol(this,e4,void 0),ol(this,e7,void 0),ol(this,e8,void 0),ol(this,e9,void 0),ol(this,e6,void 0),ol(this,te,void 0),ol(this,tt,void 0),ol(this,ti,void 0),ol(this,to,e=>{this.dragging||(am(e)&&(this.range.valueAsNumber=e),this.updateBar())}),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),od(this,e7,this.shadowRoot.querySelectorAll('[part~="box"]')),od(this,e9,this.shadowRoot.querySelector('[part~="preview-box"]')),od(this,e6,this.shadowRoot.querySelector('[part~="current-box"]'));const e=getComputedStyle(this);od(this,te,parseInt(e.getPropertyValue("--media-box-padding-left"))),od(this,tt,parseInt(e.getPropertyValue("--media-box-padding-right"))),od(this,e4,new or(this.range,oo(this,to),60))}static get observedAttributes(){return[...super.observedAttributes,i6.MEDIA_PAUSED,i6.MEDIA_DURATION,i6.MEDIA_SEEKABLE,i6.MEDIA_CURRENT_TIME,i6.MEDIA_PREVIEW_IMAGE,i6.MEDIA_PREVIEW_TIME,i6.MEDIA_PREVIEW_CHAPTER,i6.MEDIA_BUFFERED,i6.MEDIA_PLAYBACK_RATE,i6.MEDIA_LOADING,i6.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",aA("seek")),ou(this,ta,ts).call(this),od(this,e5,this.getRootNode()),null==(e=oo(this,e5))||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),ou(this,ta,ts).call(this),null==(e=oo(this,e5))||e.removeEventListener("transitionstart",this),od(this,e5,null)}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),t!=i){if(e===i6.MEDIA_CURRENT_TIME||e===i6.MEDIA_PAUSED||e===i6.MEDIA_ENDED||e===i6.MEDIA_LOADING||e===i6.MEDIA_DURATION||e===i6.MEDIA_SEEKABLE){let e,t,i,a;oo(this,e4).update({start:oh(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),ou(this,ta,ts).call(this),e=this.range,t=ag(+oc(this)),i=ag(+this.mediaSeekableEnd),a=t&&i?`${t} of ${i}`:"video not loaded, unknown time.",e.setAttribute("aria-valuetext",a)}else e===i6.MEDIA_BUFFERED&&this.updateBufferedBar();(e===i6.MEDIA_DURATION||e===i6.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=oo(this,ti),this.updateBar())}}get mediaChaptersCues(){return oo(this,ti)}set mediaChaptersCues(e){var t;od(this,ti,e),this.updateSegments(null==(t=oo(this,ti))?void 0:t.map(e=>({start:oh(this,e.startTime),end:oh(this,e.endTime)})))}get mediaPaused(){return aY(this,i6.MEDIA_PAUSED)}set mediaPaused(e){aX(this,i6.MEDIA_PAUSED,e)}get mediaLoading(){return aY(this,i6.MEDIA_LOADING)}set mediaLoading(e){aX(this,i6.MEDIA_LOADING,e)}get mediaDuration(){return aK(this,i6.MEDIA_DURATION)}set mediaDuration(e){az(this,i6.MEDIA_DURATION,e)}get mediaCurrentTime(){return aK(this,i6.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){az(this,i6.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return aK(this,i6.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){az(this,i6.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){let e=this.getAttribute(i6.MEDIA_BUFFERED);return e?e.split(" ").map(e=>e.split(":").map(e=>+e)):[]}set mediaBuffered(e){if(!e)return void this.removeAttribute(i6.MEDIA_BUFFERED);let t=e.map(e=>e.join(":")).join(" ");this.setAttribute(i6.MEDIA_BUFFERED,t)}get mediaSeekable(){let e=this.getAttribute(i6.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){null==e?this.removeAttribute(i6.MEDIA_SEEKABLE):this.setAttribute(i6.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;let[,t=this.mediaDuration]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaSeekableStart(){var e;let[t=0]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaPreviewImage(){return aJ(this,i6.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){a0(this,i6.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return aK(this,i6.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){az(this,i6.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return aY(this,i6.MEDIA_ENDED)}set mediaEnded(e){aX(this,i6.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;let t,i=this.mediaBuffered;if(!i.length)return;if(this.mediaEnded)t=1;else{let a=this.mediaCurrentTime,[,s=this.mediaSeekableStart]=null!=(e=i.find(([e,t])=>e<=a&&a<=t))?e:[];t=oh(this,s)}let{style:a}=aZ(this.shadowRoot,"#buffered");a.setProperty("width",`${100*t}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;let e=aZ(this.shadowRoot,"#current-rail"),t=aZ(this.shadowRoot,'[part~="current-box"]'),i=ou(this,tl,td).call(this,oo(this,e6)),a=ou(this,tu,th).call(this,i,this.range.valueAsNumber),s=ou(this,tc,tm).call(this,i,this.range.valueAsNumber);e.style.transform=`translateX(${a})`,e.style.setProperty("--_range-width",`${i.range.width}`),t.style.setProperty("--_box-shift",`${s}`),t.style.setProperty("--_box-width",`${i.box.width}px`),t.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":ou(this,tE,tf).call(this);break;case"pointermove":ou(this,tp,tv).call(this,e);break;case"pointerup":case"pointerleave":ou(this,tb,tg).call(this,null);break;case"transitionstart":aV(e.target,this)&&setTimeout(()=>ou(this,ta,ts).call(this),0)}}}e5=new WeakMap,e4=new WeakMap,e7=new WeakMap,e8=new WeakMap,e9=new WeakMap,e6=new WeakMap,te=new WeakMap,tt=new WeakMap,ti=new WeakMap,ta=new WeakSet,ts=function(){ou(this,tr,tn).call(this)?oo(this,e4).start():oo(this,e4).stop()},tr=new WeakSet,tn=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&aQ(this)},to=new WeakMap,tl=new WeakSet,td=function(e){var t;let i=(null!=(t=this.getAttribute("bounds")?aq(this,`#${this.getAttribute("bounds")}`):this.parentElement)?t:this).getBoundingClientRect(),a=this.range.getBoundingClientRect(),s=e.offsetWidth,r=-(a.left-i.left-s/2),n=i.right-a.left-s/2;return{box:{width:s,min:r,max:n},bounds:i,range:a}},tu=new WeakSet,th=function(e,t){let i=`${100*t}%`,{width:a,min:s,max:r}=e.box;if(!a)return i;if(!Number.isNaN(s)){let e=`calc(1 / var(--_range-width) * 100 * ${s}% + var(--media-box-padding-left))`;i=`max(${e}, ${i})`}if(!Number.isNaN(r)){let e=`calc(1 / var(--_range-width) * 100 * ${r}% - var(--media-box-padding-right))`;i=`min(${i}, ${e})`}return i},tc=new WeakSet,tm=function(e,t){let{width:i,min:a,max:s}=e.box,r=t*e.range.width;if(r<a+oo(this,te)){let t=e.range.left-e.bounds.left-oo(this,te);return`${r-i/2+t}px`}if(r>s-oo(this,tt)){let t=e.bounds.right-e.range.right-oo(this,tt);return`${r+i/2-t-e.range.width}px`}return 0},tp=new WeakSet,tv=function(e){let t=[...oo(this,e7)].some(t=>e.composedPath().includes(t));if(!this.dragging&&(t||!e.composedPath().includes(this)))return void ou(this,tb,tg).call(this,null);let i=this.mediaSeekableEnd;if(!i)return;let a=aZ(this.shadowRoot,"#preview-rail"),s=aZ(this.shadowRoot,'[part~="preview-box"]'),r=ou(this,tl,td).call(this,oo(this,e9)),n=(e.clientX-r.range.left)/r.range.width;n=Math.max(0,Math.min(1,n));let o=ou(this,tu,th).call(this,r,n),l=ou(this,tc,tm).call(this,r,n);a.style.transform=`translateX(${o})`,a.style.setProperty("--_range-width",`${r.range.width}`),s.style.setProperty("--_box-shift",`${l}`),s.style.setProperty("--_box-width",`${r.box.width}px`),1>Math.abs(Math.round(oo(this,e8))-Math.round(n*i))&&n>.01&&n<.99||(od(this,e8,n*i),ou(this,tb,tg).call(this,oo(this,e8)))},tb=new WeakSet,tg=function(e){this.dispatchEvent(new aL.CustomEvent(i4.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:e}))},tE=new WeakSet,tf=function(){oo(this,e4).stop();let e=oc(this);this.dispatchEvent(new aL.CustomEvent(i4.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e}))},om.shadowRootOptions={mode:"open"},om.getTemplateHTML=function(e){return`
    ${rJ.getTemplateHTML(e)}
    <style>
      :host {
        --media-box-border-radius: 4px;
        --media-box-padding-left: 10px;
        --media-box-padding-right: 10px;
        --media-preview-border-radius: var(--media-box-border-radius);
        --media-box-arrow-offset: var(--media-box-border-radius);
        --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        --_preview-background: var(--media-preview-background, var(--_control-background));

        
        contain: layout;
      }

      #buffered {
        background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #preview-rail,
      #current-rail {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 100%;
        pointer-events: none;
        will-change: transform;
      }

      [part~="box"] {
        width: min-content;
        
        position: absolute;
        bottom: 100%;
        flex-direction: column;
        align-items: center;
        transform: translateX(-50%);
      }

      [part~="current-box"] {
        display: var(--media-current-box-display, var(--media-box-display, flex));
        margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
        visibility: hidden;
      }

      [part~="preview-box"] {
        display: var(--media-preview-box-display, var(--media-box-display, flex));
        margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
        transition-property: var(--media-preview-transition-property, visibility, opacity);
        transition-duration: var(--media-preview-transition-duration-out, .25s);
        transition-delay: var(--media-preview-transition-delay-out, 0s);
        visibility: hidden;
        opacity: 0;
      }

      :host(:is([${i6.MEDIA_PREVIEW_IMAGE}], [${i6.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${i6.MEDIA_PREVIEW_IMAGE}], [${i6.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
          transition-duration: var(--media-preview-transition-duration-in, .5s);
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
          opacity: 1;
        }
      }

      media-preview-thumbnail,
      ::slotted(media-preview-thumbnail) {
        visibility: hidden;
        
        transition: visibility 0s .25s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-thumbnail-background, var(--_preview-background));
        box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
        max-width: var(--media-preview-thumbnail-max-width, 180px);
        max-height: var(--media-preview-thumbnail-max-height, 160px);
        min-width: var(--media-preview-thumbnail-min-width, 120px);
        min-height: var(--media-preview-thumbnail-min-height, 80px);
        border: var(--media-preview-thumbnail-border);
        border-radius: var(--media-preview-thumbnail-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
      }

      :host([${i6.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${i6.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${i6.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${i6.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${i6.MEDIA_PREVIEW_TIME}]:hover) {
          --media-time-range-hover-display: block;
        }
      }

      media-preview-chapter-display,
      ::slotted(media-preview-chapter-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        visibility: hidden;
        
        transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-chapter-background, var(--_preview-background));
        border-radius: var(--media-preview-chapter-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-chapter-padding, 3.5px 9px);
        margin: var(--media-preview-chapter-margin, 0 0 5px);
        text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      }

      :host([${i6.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${i6.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${i6.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${i6.MEDIA_PREVIEW_CHAPTER}]) {
        visibility: visible;
      }

      media-preview-chapter-display:not([aria-valuetext]),
      ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
        display: none;
      }

      media-preview-time-display,
      ::slotted(media-preview-time-display),
      media-time-display,
      ::slotted(media-time-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        
        transition: min-width 0s, border-radius 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-time-background, var(--_preview-background));
        border-radius: var(--media-preview-time-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-time-padding, 3.5px 9px);
        margin: var(--media-preview-time-margin, 0);
        text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50%)
        ));
      }

      :host([${i6.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${i6.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${i6.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }

      [part~="arrow"],
      ::slotted([part~="arrow"]) {
        display: var(--media-box-arrow-display, inline-block);
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
        ));
        
        border-color: transparent;
        border-top-color: var(--media-box-arrow-background, var(--_control-background));
        border-width: var(--media-box-arrow-border-width,
          var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
        border-style: solid;
        justify-content: center;
        height: 0;
      }
    </style>
    <div id="preview-rail">
      <slot name="preview" part="box preview-box">
        <media-preview-thumbnail>
          <template shadowrootmode="${nK.shadowRootOptions.mode}">
            ${nK.getTemplateHTML({})}
          </template>
        </media-preview-thumbnail>
        <media-preview-chapter-display></media-preview-chapter-display>
        <media-preview-time-display></media-preview-time-display>
        <slot name="preview-arrow"><div part="arrow"></div></slot>
      </slot>
    </div>
    <div id="current-rail">
      <slot name="current" part="box current-box">
        
      </slot>
    </div>
  `},aL.customElements.get("media-time-range")||aL.customElements.define("media-time-range",om);class op extends rJ{static get observedAttributes(){return[...super.observedAttributes,i6.MEDIA_VOLUME,i6.MEDIA_MUTED,i6.MEDIA_VOLUME_UNAVAILABLE]}constructor(){super(),this.range.addEventListener("input",()=>{let e=this.range.value,t=new aL.CustomEvent(i4.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)})}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",aA("volume"))}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===i6.MEDIA_VOLUME||e===i6.MEDIA_MUTED){let e;this.range.valueAsNumber=this.mediaMuted?0:this.mediaVolume,this.range.setAttribute("aria-valuetext",(e=this.range.valueAsNumber,`${Math.round(100*e)}%`)),this.updateBar()}}get mediaVolume(){return aK(this,i6.MEDIA_VOLUME,1)}set mediaVolume(e){az(this,i6.MEDIA_VOLUME,e)}get mediaMuted(){return aY(this,i6.MEDIA_MUTED)}set mediaMuted(e){aX(this,i6.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return aJ(this,i6.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){a0(this,i6.MEDIA_VOLUME_UNAVAILABLE,e)}}aL.customElements.get("media-volume-range")||aL.customElements.define("media-volume-range",op);var ov=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ob=(e,t,i)=>(ov(e,t,"read from private field"),i?i.call(e):t.get(e)),og=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},oE=(e,t,i,a)=>(ov(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let of={processCallback(e,t,i){if(i){for(let[e,a]of t)if(e in i){let t=i[e];"boolean"==typeof t&&a instanceof oM&&"boolean"==typeof a.element[a.attributeName]?a.booleanValue=t:"function"==typeof t&&a instanceof oM?a.element[a.attributeName]=t:a.value=t}}}};class oy extends aL.DocumentFragment{constructor(e,t,i=of){var a;super(),og(this,ty,void 0),og(this,tA,void 0),this.append(e.content.cloneNode(!0)),oE(this,ty,oA(this)),oE(this,tA,i),null==(a=i.createCallback)||a.call(i,this,ob(this,ty),t),i.processCallback(this,ob(this,ty),t)}update(e){ob(this,tA).processCallback(this,ob(this,ty),e)}}ty=new WeakMap,tA=new WeakMap;let oA=(e,t=[])=>{let i,a;for(let s of e.attributes||[])if(s.value.includes("{{")){let r=new o_;for([i,a]of ow(s.value))if(i){let i=new oM(e,s.name,s.namespaceURI);r.append(i),t.push([a,i])}else r.append(a);s.value=r.toString()}for(let s of e.childNodes)if(1!==s.nodeType||s instanceof HTMLTemplateElement){let r=s.data;if(1===s.nodeType||r.includes("{{")){let n=[];if(r)for([i,a]of ow(r))if(i){let i=new oS(e);n.push(i),t.push([a,i])}else n.push(new Text(a));else if(s instanceof HTMLTemplateElement){let i=new oC(e,s);n.push(i),t.push([i.expression,i])}s.replaceWith(...n.flatMap(e=>e.replacementNodes||[e]))}}else oA(s,t);return t},ok={},ow=e=>{let t="",i=0,a=ok[e],s=0,r;if(a)return a;for(a=[];r=e[s];s++)"{"===r&&"{"===e[s+1]&&"\\"!==e[s-1]&&e[s+2]&&1==++i?(t&&a.push([0,t]),t="",s++):"}"!==r||"}"!==e[s+1]||"\\"===e[s-1]||--i?t+=r||"":(a.push([1,t.trim()]),t="",s++);return t&&a.push([0,(i>0?"{{":"")+t]),ok[e]=a};class oI{get value(){return""}set value(e){}toString(){return this.value}}let oT=new WeakMap;class o_{constructor(){og(this,tk,[])}[Symbol.iterator](){return ob(this,tk).values()}get length(){return ob(this,tk).length}item(e){return ob(this,tk)[e]}append(...e){for(let t of e)t instanceof oM&&oT.set(t,this),ob(this,tk).push(t)}toString(){return ob(this,tk).join("")}}tk=new WeakMap;class oM extends oI{constructor(e,t,i){super(),og(this,tM),og(this,tw,""),og(this,tI,void 0),og(this,tT,void 0),og(this,t_,void 0),oE(this,tI,e),oE(this,tT,t),oE(this,t_,i)}get attributeName(){return ob(this,tT)}get attributeNamespace(){return ob(this,t_)}get element(){return ob(this,tI)}get value(){return ob(this,tw)}set value(e){ob(this,tw)!==e&&(oE(this,tw,e),ob(this,tM,tS)&&1!==ob(this,tM,tS).length?ob(this,tI).setAttributeNS(ob(this,t_),ob(this,tT),ob(this,tM,tS).toString()):null==e?ob(this,tI).removeAttributeNS(ob(this,t_),ob(this,tT)):ob(this,tI).setAttributeNS(ob(this,t_),ob(this,tT),e))}get booleanValue(){return ob(this,tI).hasAttributeNS(ob(this,t_),ob(this,tT))}set booleanValue(e){if(ob(this,tM,tS)&&1!==ob(this,tM,tS).length)throw new DOMException("Value is not fully templatized");this.value=e?"":null}}tw=new WeakMap,tI=new WeakMap,tT=new WeakMap,t_=new WeakMap,tM=new WeakSet,tS=function(){return oT.get(this)};class oS extends oI{constructor(e,t){super(),og(this,tC,void 0),og(this,tL,void 0),oE(this,tC,e),oE(this,tL,t?[...t]:[new Text])}get replacementNodes(){return ob(this,tL)}get parentNode(){return ob(this,tC)}get nextSibling(){return ob(this,tL)[ob(this,tL).length-1].nextSibling}get previousSibling(){return ob(this,tL)[0].previousSibling}get value(){return ob(this,tL).map(e=>e.textContent).join("")}set value(e){this.replace(e)}replace(...e){let t=e.flat().flatMap(e=>null==e?[new Text]:e.forEach?[...e]:11===e.nodeType?[...e.childNodes]:e.nodeType?[e]:[new Text(e)]);t.length||t.push(new Text),oE(this,tL,function(e,t,i,a=null){let s=0,r,n,o,l=i.length,d=t.length;for(;s<l&&s<d&&t[s]==i[s];)s++;for(;s<l&&s<d&&i[l-1]==t[d-1];)a=i[--d,--l];if(s==d)for(;s<l;)e.insertBefore(i[s++],a);if(s==l)for(;s<d;)e.removeChild(t[s++]);else{for(r=t[s];s<l;)o=i[s++],n=r?r.nextSibling:a,r==o?r=n:s<l&&i[s]==n?(e.replaceChild(o,r),r=n):e.insertBefore(o,r);for(;r!=a;)n=r.nextSibling,e.removeChild(r),r=n}return i}(ob(this,tL)[0].parentNode,ob(this,tL),t,this.nextSibling))}}tC=new WeakMap,tL=new WeakMap;class oC extends oS{constructor(e,t){const i=t.getAttribute("directive")||t.getAttribute("type");let a=t.getAttribute("expression")||t.getAttribute(i)||"";a.startsWith("{{")&&(a=a.trim().slice(2,-2).trim()),super(e),this.expression=a,this.template=t,this.directive=i}}let oL={string:e=>String(e)};class ox{constructor(e){this.template=e,this.state=void 0}}let oR=new WeakMap,oD=new WeakMap,oN={partial:(e,t)=>{t[e.expression]=new ox(e.template)},if:(e,t)=>{var i;if(oW(e.expression,t))if(oR.get(e)!==e.template){oR.set(e,e.template);let i=new oy(e.template,t,oU);e.replace(i),oD.set(e,i)}else null==(i=oD.get(e))||i.update(t);else e.replace(""),oR.delete(e),oD.delete(e)}},oP=Object.keys(oN),oU={processCallback(e,t,i){var a,s;if(i)for(let[e,r]of t){if(r instanceof oC){if(!r.directive){let e=oP.find(e=>r.template.hasAttribute(e));e&&(r.directive=e,r.expression=r.template.getAttribute(e))}null==(a=oN[r.directive])||a.call(oN,r,i);continue}let t=oW(e,i);if(t instanceof ox){oR.get(r)!==t.template?(oR.set(r,t.template),r.value=t=new oy(t.template,t.state,oU),oD.set(r,t)):null==(s=oD.get(r))||s.update(t.state);continue}t?(r instanceof oM&&r.attributeName.startsWith("aria-")&&(t=String(t)),r instanceof oM?"boolean"==typeof t?r.booleanValue=t:"function"==typeof t?r.element[r.attributeName]=t:r.value=t:(r.value=t,oR.delete(r),oD.delete(r))):r instanceof oM?r.value=void 0:(r.value=void 0,oR.delete(r),oD.delete(r))}}},oO={"!":e=>!e,"!!":e=>!!e,"==":(e,t)=>e==t,"!=":(e,t)=>e!=t,">":(e,t)=>e>t,">=":(e,t)=>e>=t,"<":(e,t)=>e<t,"<=":(e,t)=>e<=t,"??":(e,t)=>null!=e?e:t,"|":(e,t)=>{var i;return null==(i=oL[t])?void 0:i.call(oL,e)}};function oW(e,t={}){var i,a,s,r,n,o,l;let d=(function(e,t){let i,a,s,r=[];for(;e;){for(let r in s=null,i=e.length,t)(a=t[r].exec(e))&&a.index<i&&(s={token:a[0],type:r,matches:a.slice(1)},i=a.index);i&&r.push({token:e.substr(0,i),type:void 0}),s&&r.push(s),e=e.substr(i+(s?s.token.length:0))}return r})(e,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:e})=>"ws"!==e);if(0===d.length||d.some(({type:e})=>!e))return oH(e);if((null==(i=d[0])?void 0:i.token)===">"){let i=t[null==(a=d[1])?void 0:a.token];if(!i)return oH(e);let o={...t};i.state=o;let l=d.slice(2);for(let e=0;e<l.length;e+=3){let i=null==(s=l[e])?void 0:s.token,a=null==(r=l[e+1])?void 0:r.token,d=null==(n=l[e+2])?void 0:n.token;i&&"="===a&&(o[i]=oB(d,t))}return i}if(1===d.length)return o$(d[0])?oB(d[0].token,t):oH(e);if(2===d.length){let i=oO[null==(o=d[0])?void 0:o.token];return i&&o$(d[1])?i(oB(d[1].token,t)):oH(e)}if(3===d.length){let i=null==(l=d[1])?void 0:l.token,a=oO[i];if(!a||!o$(d[0])||!o$(d[2]))return oH(e);let s=oB(d[0].token,t);return a(s,"|"===i?d[2].token:oB(d[2].token,t))}}function oH(e){return console.warn(`Warning: invalid expression \`${e}\``),!1}function o$({type:e}){return["number","boolean","string","param"].includes(e)}function oB(e,t){let i=e[0],a=e.slice(-1);return"true"===e||"false"===e?"true"===e:i===a&&["'",'"'].includes(i)?e.slice(1,-1):ap(e)?parseFloat(e):t[e]}var oV=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},oq=(e,t,i)=>(oV(e,t,"read from private field"),i?i.call(e):t.get(e)),oG=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},oF=(e,t,i,a)=>(oV(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),oQ=(e,t,i)=>(oV(e,t,"access private method"),i);let oZ={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},oj=ax.createElement("template");oj.innerHTML=`
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-captions-button:not([mediasubtitleslist]),
    media-captions-menu:not([mediasubtitleslist]),
    media-captions-menu-button:not([mediasubtitleslist]),
    media-audio-track-menu[mediaaudiotrackunavailable],
    media-audio-track-menu-button[mediaaudiotrackunavailable],
    media-rendition-menu[mediarenditionunavailable],
    media-rendition-menu-button[mediarenditionunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;class oK extends aL.HTMLElement{constructor(){super(),oG(this,tN),oG(this,tU),oG(this,tx,void 0),oG(this,tR,void 0),oG(this,tD,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer());const e=new MutationObserver(e=>{var t;(!this.mediaController||(null==(t=this.mediaController)?void 0:t.breakpointsComputed))&&e.some(e=>{let t=e.target;return t===this||"media-controller"===t.localName&&!!(oZ[e.attributeName]||e.attributeName.startsWith("breakpoint"))})&&this.render()});e.observe(this,{attributes:!0}),e.observe(this.renderRoot,{attributes:!0,subtree:!0}),this.addEventListener(ae.BREAKPOINTS_COMPUTED,this.render),oQ(this,tN,tP).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var e;return null!=(e=oq(this,tx))?e:this.constructor.template}set template(e){oF(this,tD,null),oF(this,tx,e),this.createRenderer()}get props(){var e,t,i;let a=[...Array.from(null!=(t=null==(e=this.mediaController)?void 0:e.attributes)?t:[]).filter(({name:e})=>oZ[e]||e.startsWith("breakpoint")),...Array.from(this.attributes)],s={};for(let e of a){let t=null!=(i=oZ[e.name])?i:e.name.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase()),{value:a}=e;null!=a?(ap(a)&&(a=parseFloat(a)),s[t]=""===a||a):s[t]=!1}return s}attributeChangedCallback(e,t,i){"template"===e&&t!=i&&oQ(this,tU,tO).call(this)}connectedCallback(){oQ(this,tU,tO).call(this)}createRenderer(){this.template&&this.template!==oq(this,tR)&&(oF(this,tR,this.template),this.renderer=new oy(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(oj.content.cloneNode(!0),this.renderer))}render(){var e;null==(e=this.renderer)||e.update(this.props)}}async function oz(e){let t=await fetch(e);if(200!==t.status)throw Error(`Failed to load resource: the server responded with a status of ${t.status}`);return t.text()}function oY(e){return e.split("-")[0]}tx=new WeakMap,tR=new WeakMap,tD=new WeakMap,tN=new WeakSet,tP=function(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}},tU=new WeakSet,tO=function(){var e;let t=this.getAttribute("template");if(!t||t===oq(this,tD))return;let i=this.getRootNode(),a=null==(e=null==i?void 0:i.getElementById)?void 0:e.call(i,t);if(a){oF(this,tD,t),oF(this,tx,a),this.createRenderer();return}(function(e){if(!/^(\/|\.\/|https?:\/\/)/.test(e))return!1;let t=/^https?:\/\//.test(e)?void 0:location.origin;try{new URL(e,t)}catch(e){return!1}return!0})(t)&&(oF(this,tD,t),oz(t).then(e=>{let t=ax.createElement("template");t.innerHTML=e,oF(this,tx,t),this.createRenderer()}).catch(console.error))},oK.observedAttributes=["template"],oK.processor=oU,aL.customElements.get("media-theme")||aL.customElements.define("media-theme",oK);class oX extends Event{constructor({action:e="auto",relatedTarget:t,...i}){super("invoke",i),this.action=e,this.relatedTarget=t}}class oJ extends Event{constructor({newState:e,oldState:t,...i}){super("toggle",i),this.newState=e,this.oldState=t}}var o0=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},o1=(e,t,i)=>(o0(e,t,"read from private field"),i?i.call(e):t.get(e)),o2=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},o3=(e,t,i,a)=>(o0(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),o5=(e,t,i)=>(o0(e,t,"access private method"),i);function o4({type:e,text:t,value:i,checked:a}){let s=ax.createElement("media-chrome-menu-item");s.type=null!=e?e:"",s.part.add("menu-item"),e&&s.part.add(e),s.value=i,s.checked=a;let r=ax.createElement("span");return r.textContent=t,s.append(r),s}function o7(e,t){let i=e.querySelector(`:scope > [slot="${t}"]`);if((null==i?void 0:i.nodeName)=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)return i.cloneNode(!0);let a=e.shadowRoot.querySelector(`[name="${t}"] > svg`);return a?a.cloneNode(!0):""}let o8="style",o9="hidden",o6="disabled";class le extends aL.HTMLElement{constructor(){if(super(),o2(this,tF),o2(this,tj),o2(this,tz),o2(this,tX),o2(this,t0),o2(this,t5),o2(this,t7),o2(this,t9),o2(this,ie),o2(this,ii),o2(this,is),o2(this,io),o2(this,id),o2(this,ih),o2(this,im),o2(this,iv),o2(this,ig),o2(this,tW,null),o2(this,tH,null),o2(this,t$,null),o2(this,tB,new Set),o2(this,tV,void 0),o2(this,tq,!1),o2(this,tG,null),o2(this,tZ,()=>{let e=o1(this,tB),t=new Set(this.items);for(let i of e)t.has(i)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:i}));for(let i of t)e.has(i)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:i}));o3(this,tB,t)}),o2(this,t2,()=>{o5(this,t5,t4).call(this),o5(this,t7,t8).call(this,!1)}),o2(this,t3,()=>{o5(this,t5,t4).call(this)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=aO(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),this.shadowRoot.addEventListener("slotchange",this),o3(this,tV,new MutationObserver(o1(this,tZ))),o1(this,tV).observe(this.defaultSlot,{childList:!0})}static get observedAttributes(){return[o6,o9,o8,"anchor",i7.MEDIA_CONTROLLER]}static formatMenuItemText(e,t){return e}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(e){switch(e.type){case"slotchange":o5(this,tF,tQ).call(this,e);break;case"invoke":o5(this,tz,tY).call(this,e);break;case"click":o5(this,t9,t6).call(this,e);break;case"toggle":o5(this,ii,ia).call(this,e);break;case"focusout":o5(this,io,il).call(this,e);break;case"keydown":o5(this,id,iu).call(this,e)}}connectedCallback(){var e,t;o3(this,tG,aj(this.shadowRoot,":host")),o5(this,tj,tK).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),o3(this,tW,aH(this)),null==(t=null==(e=o1(this,tW))?void 0:e.associateElement)||t.call(e,this),this.hidden||(aP(li(this),o1(this,t2)),aP(this,o1(this,t3)))}disconnectedCallback(){var e,t;aU(li(this),o1(this,t2)),aU(this,o1(this,t3)),this.disable(),null==(t=null==(e=o1(this,tW))?void 0:e.unassociateElement)||t.call(e,this),o3(this,tW,null)}attributeChangedCallback(e,t,i){var a,s,r,n;e===o9&&i!==t?(o1(this,tq)||o3(this,tq,!0),this.hidden?o5(this,t0,t1).call(this):o5(this,tX,tJ).call(this),this.dispatchEvent(new oJ({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):e===i7.MEDIA_CONTROLLER?(t&&(null==(s=null==(a=o1(this,tW))?void 0:a.unassociateElement)||s.call(a,this),o3(this,tW,null)),i&&this.isConnected&&(o3(this,tW,aH(this)),null==(n=null==(r=o1(this,tW))?void 0:r.associateElement)||n.call(r,this))):e===o6&&i!==t?null==i?this.enable():this.disable():e===o8&&i!==t&&o5(this,tj,tK).call(this)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}get anchor(){return this.getAttribute("anchor")}set anchor(e){this.setAttribute("anchor",`${e}`)}get anchorElement(){var e;return this.anchor?null==(e=aF(this))?void 0:e.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(lt)}get radioGroupItems(){return this.items.filter(e=>"menuitemradio"===e.role)}get checkedItems(){return this.items.filter(e=>e.checked)}get value(){var e,t;return null!=(t=null==(e=this.checkedItems[0])?void 0:e.value)?t:""}set value(e){let t=this.items.find(t=>t.value===e);t&&o5(this,ig,iE).call(this,t)}focus(){if(o3(this,tH,aG()),this.items.length){o5(this,iv,ib).call(this,this.items[0]),this.items[0].focus();return}let e=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==e||e.focus()}handleSelect(e){var t;let i=o5(this,ih,ic).call(this,e);i&&(o5(this,ig,iE).call(this,i,"checkbox"===i.type),o1(this,t$)&&!this.hidden&&(null==(t=o1(this,tH))||t.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(e){var t,i;let{key:a}=e,s=this.items,r=null!=(i=null!=(t=o5(this,ih,ic).call(this,e))?t:o5(this,im,ip).call(this))?i:s[0],n=Math.max(0,s.indexOf(r));"ArrowDown"===a?n++:"ArrowUp"===a?n--:"Home"===e.key?n=0:"End"===e.key&&(n=s.length-1),n<0&&(n=s.length-1),n>s.length-1&&(n=0),o5(this,iv,ib).call(this,s[n]),s[n].focus()}}function lt(e){return["menuitem","menuitemradio","menuitemcheckbox"].includes(null==e?void 0:e.role)}function li(e){var t;return null!=(t=e.getAttribute("bounds")?aq(e,`#${e.getAttribute("bounds")}`):aW(e)||e.parentElement)?t:e}tW=new WeakMap,tH=new WeakMap,t$=new WeakMap,tB=new WeakMap,tV=new WeakMap,tq=new WeakMap,tG=new WeakMap,tF=new WeakSet,tQ=function(e){let t=e.target;for(let e of t.assignedNodes({flatten:!0}))3===e.nodeType&&""===e.textContent.trim()&&e.remove();["header","title"].includes(t.name)&&(this.shadowRoot.querySelector('slot[name="header"]').hidden=0===t.assignedNodes().length),t.name||o1(this,tZ).call(this)},tZ=new WeakMap,tj=new WeakSet,tK=function(){var e;let t=this.shadowRoot.querySelector("#layout-row"),i=null==(e=getComputedStyle(this).getPropertyValue("--media-menu-layout"))?void 0:e.trim();t.setAttribute("media","row"===i?"":"width:0")},tz=new WeakSet,tY=function(e){o3(this,t$,e.relatedTarget),aV(this,e.relatedTarget)||(this.hidden=!this.hidden)},tX=new WeakSet,tJ=function(){var e;null==(e=o1(this,t$))||e.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),aP(li(this),o1(this,t2)),aP(this,o1(this,t3))},t0=new WeakSet,t1=function(){var e;null==(e=o1(this,t$))||e.setAttribute("aria-expanded","false"),aU(li(this),o1(this,t2)),aU(this,o1(this,t3))},t2=new WeakMap,t3=new WeakMap,t5=new WeakSet,t4=function(e){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;let{x:t,y:i}=function({anchor:e,floating:t,placement:i}){let{x:a,y:s}=function({anchor:e,floating:t},i){let a,s="x"==(["top","bottom"].includes(oY(i))?"y":"x")?"y":"x",r="y"===s?"height":"width",n=oY(i),o=e.x+e.width/2-t.width/2,l=e.y+e.height/2-t.height/2,d=e[r]/2-t[r]/2;switch(n){case"top":a={x:o,y:e.y-t.height};break;case"bottom":a={x:o,y:e.y+e.height};break;case"right":a={x:e.x+e.width,y:l};break;case"left":a={x:e.x-t.width,y:l};break;default:a={x:e.x,y:e.y}}switch(i.split("-")[1]){case"start":a[s]-=d;break;case"end":a[s]+=d}return a}(function({anchor:e,floating:t}){var i,a,s;let r,n;return{anchor:(i=e,a=t.offsetParent,r=i.getBoundingClientRect(),n=null!=(s=null==a?void 0:a.getBoundingClientRect())?s:{x:0,y:0},{x:r.x-n.x,y:r.y-n.y,width:r.width,height:r.height}),floating:{x:0,y:0,width:t.offsetWidth,height:t.offsetHeight}}}({anchor:e,floating:t}),i);return{x:a,y:s}}({anchor:this.anchorElement,floating:this,placement:"top-start"});null!=e||(e=this.offsetWidth);let a=li(this).getBoundingClientRect(),s=a.width-t-e,r=a.height-i-this.offsetHeight,{style:n}=o1(this,tG);n.setProperty("position","absolute"),n.setProperty("right",`${Math.max(0,s)}px`),n.setProperty("--_menu-bottom",`${r}px`);let o=getComputedStyle(this),l=n.getPropertyValue("--_menu-bottom")===o.bottom?r:parseFloat(o.bottom),d=a.height-l-parseFloat(o.marginBottom);this.style.setProperty("--_menu-max-height",`${d}px`)},t7=new WeakSet,t8=function(e){let t=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),i=null==t?void 0:t.querySelector('[role="menu"]'),{style:a}=o1(this,tG);if(e||a.setProperty("--media-menu-transition-in","none"),i){let e=i.offsetHeight,a=Math.max(i.offsetWidth,t.offsetWidth);this.style.setProperty("min-width",`${a}px`),this.style.setProperty("min-height",`${e}px`),o5(this,t5,t4).call(this,a)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),o5(this,t5,t4).call(this);a.removeProperty("--media-menu-transition-in")},t9=new WeakSet,t6=function(e){var t;if(e.stopPropagation(),e.composedPath().includes(o1(this,ie,it))){null==(t=o1(this,tH))||t.focus(),this.hidden=!0;return}let i=o5(this,ih,ic).call(this,e);!i||i.hasAttribute("disabled")||(o5(this,iv,ib).call(this,i),this.handleSelect(e))},ie=new WeakSet,it=function(){var e;return null==(e=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))?void 0:e.find(e=>e.matches('button[part~="back"]'))},ii=new WeakSet,ia=function(e){if(e.target===this)return;o5(this,is,ir).call(this);let t=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(let i of t)i.invokeTargetElement!=e.target&&("open"!=e.newState||"true"!=i.getAttribute("aria-expanded")||i.invokeTargetElement.hidden||i.invokeTargetElement.dispatchEvent(new oX({relatedTarget:i})));for(let e of t)e.setAttribute("aria-expanded",`${!e.submenuElement.hidden}`);o5(this,t7,t8).call(this,!0)},is=new WeakSet,ir=function(){let e=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!e)},io=new WeakSet,il=function(e){var t;aV(this,e.relatedTarget)||(o1(this,tq)&&(null==(t=o1(this,tH))||t.focus()),o1(this,t$)&&o1(this,t$)!==e.relatedTarget&&!this.hidden&&(this.hidden=!0))},id=new WeakSet,iu=function(e){var t,i,a,s,r;let{key:n,ctrlKey:o,altKey:l,metaKey:d}=e;if(!o&&!l&&!d&&this.keysUsed.includes(n))if(e.preventDefault(),e.stopPropagation(),"Tab"===n){if(o1(this,tq)){this.hidden=!0;return}e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(s=null==(a=this.nextElementSibling)?void 0:a.focus)||s.call(a),this.blur()}else"Escape"===n?(null==(r=o1(this,tH))||r.focus(),o1(this,tq)&&(this.hidden=!0)):"Enter"===n||" "===n?this.handleSelect(e):this.handleMove(e)},ih=new WeakSet,ic=function(e){return e.composedPath().find(e=>["menuitemradio","menuitemcheckbox"].includes(e.role))},im=new WeakSet,ip=function(){return this.items.find(e=>0===e.tabIndex)},iv=new WeakSet,ib=function(e){for(let t of this.items)t.tabIndex=t===e?0:-1},ig=new WeakSet,iE=function(e,t){let i=[...this.checkedItems];"radio"===e.type&&this.radioGroupItems.forEach(e=>e.checked=!1),t?e.checked=!e.checked:e.checked=!0,this.checkedItems.some((e,t)=>e!=i[t])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},le.shadowRootOptions={mode:"open"},le.getTemplateHTML=function(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, var(--_menu-bg))));
        border-radius: var(--media-menu-border-radius);
        border: var(--media-menu-border, none);
        display: var(--media-menu-display, inline-flex);
        transition: var(--media-menu-transition-in,
          visibility 0s,
          opacity .2s ease-out,
          transform .15s ease-out,
          left .2s ease-in-out,
          min-width .2s ease-in-out,
          min-height .2s ease-in-out
        ) !important;
        
        visibility: var(--media-menu-visibility, visible);
        opacity: var(--media-menu-opacity, 1);
        max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
        transform: var(--media-menu-transform-in, translateY(0) scale(1));
        flex-direction: column;
        
        min-height: 0;
        position: relative;
        bottom: var(--_menu-bottom);
        box-sizing: border-box;
      } 

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([hidden]) {
        transition: var(--media-menu-transition-out,
          visibility .15s ease-in,
          opacity .15s ease-in,
          transform .15s ease-in
        ) !important;
        visibility: var(--media-menu-hidden-visibility, hidden);
        opacity: var(--media-menu-hidden-opacity, 0);
        max-height: var(--media-menu-hidden-max-height,
          var(--media-menu-max-height, var(--_menu-max-height, 300px)));
        transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
        pointer-events: none;
      }

      :host([slot="submenu"]) {
        background: none;
        width: 100%;
        min-height: 100%;
        position: absolute;
        bottom: 0;
        right: -100%;
      }

      #container {
        display: flex;
        flex-direction: column;
        min-height: 0;
        transition: transform .2s ease-out;
        transform: translate(0, 0);
      }

      #container.has-expanded {
        transition: transform .2s ease-in;
        transform: translate(-100%, 0);
      }

      button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        outline: inherit;
        display: inline-flex;
        align-items: center;
      }

      slot[name="header"][hidden] {
        display: none;
      }

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .7em;
        border-bottom: 1px solid rgb(255 255 255 / .25);
        cursor: var(--media-cursor, default);
      }

      slot[name="header"] > button[part~="back"],
      slot[name="header"]::slotted(button[part~="back"]) {
        cursor: var(--media-cursor, pointer);
      }

      svg[part~="back"] {
        height: var(--media-menu-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
        margin-right: .5ch;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap);
        flex-direction: var(--media-menu-flex-direction, column);
        overflow: var(--media-menu-overflow, hidden auto);
        display: flex;
        min-height: 0;
      }

      :host([role="menu"]) slot:not([name]) {
        padding-block: .4em;
      }

      slot:not([name])::slotted([role="menu"]) {
        background: none;
      }

      media-chrome-menu-item > span {
        margin-right: .5ch;
        max-width: var(--media-menu-item-max-width);
        text-overflow: ellipsis;
        overflow: hidden;
      }
    </style>
    <style id="layout-row" media="width:0">

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .5em;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap, .25em);
        flex-direction: var(--media-menu-flex-direction, row);
        padding-inline: .5em;
      }

      media-chrome-menu-item {
        padding: .3em .5em;
      }

      media-chrome-menu-item[aria-checked="true"] {
        background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
      }

      
      media-chrome-menu-item::part(checked-indicator) {
        display: var(--media-menu-item-checked-indicator-display, none);
      }
    </style>
    <div id="container">
      <slot name="header" hidden>
        <button part="back button" aria-label="Back to previous menu">
          <slot name="back-icon">
            <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
              <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
            </svg>
          </slot>
          <slot name="title"></slot>
        </button>
      </slot>
      <slot></slot>
    </div>
    <slot name="checked-indicator" hidden></slot>
  `},aL.customElements.get("media-chrome-menu")||aL.customElements.define("media-chrome-menu",le);var la=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ls=(e,t,i)=>(la(e,t,"read from private field"),i?i.call(e):t.get(e)),lr=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ln=(e,t,i,a)=>(la(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),lo=(e,t,i)=>(la(e,t,"access private method"),i);let ll="type",ld="value",lu="checked",lh="disabled";class lc extends aL.HTMLElement{constructor(){if(super(),lr(this,ik),lr(this,iI),lr(this,i_),lr(this,iC),lr(this,ix),lr(this,iD),lr(this,iy,!1),lr(this,iA,void 0),lr(this,iS,()=>{var e,t;this.setAttribute("submenusize",`${this.submenuElement.items.length}`);let i=this.shadowRoot.querySelector('slot[name="description"]'),a=null==(e=this.submenuElement.checkedItems)?void 0:e[0],s=null!=(t=null==a?void 0:a.dataset.description)?t:null==a?void 0:a.text,r=ax.createElement("span");r.textContent=null!=s?s:"",i.replaceChildren(r)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=aO(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.shadowRoot.addEventListener("slotchange",this)}static get observedAttributes(){return[ll,lh,lu,ld]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),lm(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(e){switch(e.type){case"slotchange":lo(this,ik,iw).call(this,e);break;case"click":this.handleClick(e);break;case"keydown":lo(this,ix,iR).call(this,e);break;case"keyup":lo(this,iC,iL).call(this,e)}}attributeChangedCallback(e,t,i){e===lu&&lm(this)&&!ls(this,iy)?this.setAttribute("aria-checked",null!=i?"true":"false"):e===ll&&i!==t?this.role="menuitem"+i:e===lh&&i!==t&&(null==i?this.enable():this.disable())}connectedCallback(){this.hasAttribute(lh)||this.enable(),this.role="menuitem"+this.type,ln(this,iA,function e(t,i){if(!t)return null;let{host:a}=t.getRootNode();return!i&&a?e(t,a):(null==i?void 0:i.items)?i:e(i,null==i?void 0:i.parentNode)}(this,this.parentNode)),lo(this,iD,iN).call(this)}disconnectedCallback(){this.disable(),lo(this,iD,iN).call(this),ln(this,iA,null)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=aF(this))?void 0:e.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var e;return null!=(e=this.getAttribute(ll))?e:""}set type(e){this.setAttribute(ll,`${e}`)}get value(){var e;return null!=(e=this.getAttribute(ld))?e:this.text}set value(e){this.setAttribute(ld,e)}get text(){var e;return(null!=(e=this.textContent)?e:"").trim()}get checked(){if(lm(this))return"true"===this.getAttribute("aria-checked")}set checked(e){lm(this)&&(ln(this,iy,!0),this.setAttribute("aria-checked",e?"true":"false"),e?this.part.add("checked"):this.part.remove("checked"))}handleClick(e){!lm(this)&&this.invokeTargetElement&&aV(this,e.target)&&this.invokeTargetElement.dispatchEvent(new oX({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}}function lm(e){return"radio"===e.type||"checkbox"===e.type}iy=new WeakMap,iA=new WeakMap,ik=new WeakSet,iw=function(e){let t=e.target;if(!(null==t?void 0:t.name))for(let e of t.assignedNodes({flatten:!0}))e instanceof Text&&""===e.textContent.trim()&&e.remove();"submenu"===t.name&&(this.submenuElement?lo(this,iI,iT).call(this):lo(this,i_,iM).call(this))},iI=new WeakSet,iT=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",ls(this,iS)),this.submenuElement.addEventListener("addmenuitem",ls(this,iS)),this.submenuElement.addEventListener("removemenuitem",ls(this,iS)),ls(this,iS).call(this)},i_=new WeakSet,iM=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",ls(this,iS)),this.submenuElement.removeEventListener("addmenuitem",ls(this,iS)),this.submenuElement.removeEventListener("removemenuitem",ls(this,iS)),ls(this,iS).call(this)},iS=new WeakMap,iC=new WeakSet,iL=function(e){let{key:t}=e;this.keysUsed.includes(t)?this.handleClick(e):this.removeEventListener("keyup",lo(this,iC,iL))},ix=new WeakSet,iR=function(e){let{metaKey:t,altKey:i,key:a}=e;t||i||!this.keysUsed.includes(a)?this.removeEventListener("keyup",lo(this,iC,iL)):this.addEventListener("keyup",lo(this,iC,iL),{once:!0})},iD=new WeakSet,iN=function(){var e;let t=null==(e=ls(this,iA))?void 0:e.radioGroupItems;if(!t)return;let i=t.filter(e=>"true"===e.getAttribute("aria-checked")).pop();for(let e of(i||(i=t[0]),t))e.setAttribute("aria-checked","false");null==i||i.setAttribute("aria-checked","true")},lc.shadowRootOptions={mode:"open"},lc.getTemplateHTML=function(e){return`
    <style>
      :host {
        transition: var(--media-menu-item-transition,
          background .15s linear,
          opacity .2s ease-in-out
        );
        outline: var(--media-menu-item-outline, 0);
        outline-offset: var(--media-menu-item-outline-offset, -1px);
        cursor: var(--media-cursor, pointer);
        display: flex;
        align-items: center;
        align-self: stretch;
        justify-self: stretch;
        white-space: nowrap;
        white-space-collapse: collapse;
        text-wrap: nowrap;
        padding: .4em .8em .4em 1em;
      }

      :host(:focus-visible) {
        box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: var(--media-menu-item-hover-outline, 0);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host(:hover) {
        cursor: var(--media-cursor, pointer);
        background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
        outline: var(--media-menu-item-hover-outline);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host([aria-checked="true"]) {
        background: var(--media-menu-item-checked-background);
      }

      :host([hidden]) {
        display: none;
      }

      :host([disabled]) {
        pointer-events: none;
        color: rgba(255, 255, 255, .3);
      }

      slot:not([name]) {
        width: 100%;
      }

      slot:not([name="submenu"]) {
        display: inline-flex;
        align-items: center;
        transition: inherit;
        opacity: var(--media-menu-item-opacity, 1);
      }

      slot[name="description"] {
        justify-content: end;
      }

      slot[name="description"] > span {
        display: inline-block;
        margin-inline: 1em .2em;
        max-width: var(--media-menu-item-description-max-width, 100px);
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: .8em;
        font-weight: 400;
        text-align: right;
        position: relative;
        top: .04em;
      }

      slot[name="checked-indicator"] {
        display: none;
      }

      :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
        display: var(--media-menu-item-checked-indicator-display, inline-block);
      }

      
      svg, img, ::slotted(svg), ::slotted(img) {
        height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
      }

      
      [part~="indicator"],
      ::slotted([part~="indicator"]) {
        fill: var(--media-menu-item-indicator-fill,
          var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
        height: var(--media-menu-item-indicator-height, 1.25em);
        margin-right: .5ch;
      }

      [part~="checked-indicator"] {
        visibility: hidden;
      }

      :host([aria-checked="true"]) [part~="checked-indicator"] {
        visibility: visible;
      }
    </style>
    <slot name="checked-indicator">
      <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
        <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
      </svg>
    </slot>
    <slot name="prefix"></slot>
    <slot></slot>
    <slot name="description"></slot>
    <slot name="suffix">
      ${this.getSuffixSlotInnerHTML(e)}
    </slot>
    <slot name="submenu"></slot>
  `},lc.getSuffixSlotInnerHTML=function(e){return""},aL.customElements.get("media-chrome-menu-item")||aL.customElements.define("media-chrome-menu-item",lc);class lp extends le{get anchorElement(){return"auto"!==this.anchor?super.anchorElement:aW(this).querySelector("media-settings-menu-button")}}lp.getTemplateHTML=function(e){return`
    ${le.getTemplateHTML(e)}
    <style>
      :host {
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
        min-width: var(--media-settings-menu-min-width, 170px);
        border-radius: 2px 2px 0 0;
        overflow: hidden;
      }

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([role="menu"]) {
        
        justify-content: end;
      }

      slot:not([name]) {
        justify-content: var(--media-settings-menu-justify-content);
        flex-direction: var(--media-settings-menu-flex-direction, column);
        overflow: visible;
      }

      #container.has-expanded {
        --media-settings-menu-item-opacity: 0;
      }
    </style>
  `},aL.customElements.get("media-settings-menu")||aL.customElements.define("media-settings-menu",lp);class lv extends lc{}lv.shadowRootOptions={mode:"open"},lv.getTemplateHTML=function(e){return`
    ${lc.getTemplateHTML.call(this,e)}
    <style>
      slot:not([name="submenu"]) {
        opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
      }

      :host([aria-expanded="true"]:hover) {
        background: transparent;
      }
    </style>
  `},lv.getSuffixSlotInnerHTML=function(e){return`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `},aL.customElements.get("media-settings-menu-item")||aL.customElements.define("media-settings-menu-item",lv);class lb extends rC{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=aF(this))?void 0:e.querySelector(`#${this.invokeTarget}`):null}handleClick(){var e;null==(e=this.invokeTargetElement)||e.dispatchEvent(new oX({relatedTarget:this}))}}aL.customElements.get("media-chrome-menu-button")||aL.customElements.define("media-chrome-menu-button",lb);class lg extends lb{static get observedAttributes(){return[...super.observedAttributes,"target"]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",aA("settings"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:aW(this).querySelector("media-settings-menu")}}lg.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
      </svg>
    </slot>
  `},lg.getTooltipContentHTML=function(){return aA("Settings")},aL.customElements.get("media-settings-menu-button")||aL.customElements.define("media-settings-menu-button",lg);var lE=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lf=(e,t,i)=>(lE(e,t,"read from private field"),i?i.call(e):t.get(e)),ly=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},lA=(e,t,i,a)=>(lE(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),lk=(e,t,i)=>(lE(e,t,"access private method"),i);class lw extends le{constructor(){super(...arguments),ly(this,iO),ly(this,iH),ly(this,iP,[]),ly(this,iU,void 0)}static get observedAttributes(){return[...super.observedAttributes,i6.MEDIA_AUDIO_TRACK_LIST,i6.MEDIA_AUDIO_TRACK_ENABLED,i6.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===i6.MEDIA_AUDIO_TRACK_ENABLED&&t!==i)this.value=i;else if(e===i6.MEDIA_AUDIO_TRACK_LIST&&t!==i){var a;lA(this,iP,null==(a=null!=i?i:"")?void 0:a.split(/\s+/).map(ac)),lk(this,iO,iW).call(this)}}connectedCallback(){super.connectedCallback(),this.addEventListener("change",lk(this,iH,i$))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",lk(this,iH,i$))}get anchorElement(){var e;return"auto"!==this.anchor?super.anchorElement:null==(e=aW(this))?void 0:e.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return lf(this,iP)}set mediaAudioTrackList(e){lA(this,iP,e),lk(this,iO,iW).call(this)}get mediaAudioTrackEnabled(){var e;return null!=(e=aJ(this,i6.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){a0(this,i6.MEDIA_AUDIO_TRACK_ENABLED,e)}}iP=new WeakMap,iU=new WeakMap,iO=new WeakSet,iW=function(){if(lf(this,iU)===JSON.stringify(this.mediaAudioTrackList))return;lA(this,iU,JSON.stringify(this.mediaAudioTrackList));let e=this.mediaAudioTrackList;for(let t of(this.defaultSlot.textContent="",e)){let e=o4({type:"radio",text:this.formatMenuItemText(t.label,t),value:`${t.id}`,checked:t.enabled});e.prepend(o7(this,"checked-indicator")),this.defaultSlot.append(e)}},iH=new WeakSet,i$=function(){if(null==this.value)return;let e=new aL.CustomEvent(i4.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},aL.customElements.get("media-audio-track-menu")||aL.customElements.define("media-audio-track-menu",lw);let lI=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`;class lT extends lb{static get observedAttributes(){return[...super.observedAttributes,i6.MEDIA_AUDIO_TRACK_ENABLED,i6.MEDIA_AUDIO_TRACK_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",aA("Audio"))}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=aW(this))?void 0:e.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var e;return null!=(e=aJ(this,i6.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){a0(this,i6.MEDIA_AUDIO_TRACK_ENABLED,e)}}lT.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${lI}</slot>
  `},lT.getTooltipContentHTML=function(){return aA("Audio")},aL.customElements.get("media-audio-track-menu-button")||aL.customElements.define("media-audio-track-menu-button",lT);var l_=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lM=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},lS=(e,t,i)=>(l_(e,t,"access private method"),i);let lC=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`;class lL extends le{constructor(){super(...arguments),lM(this,iV),lM(this,iG),lM(this,iB,void 0)}static get observedAttributes(){return[...super.observedAttributes,i6.MEDIA_SUBTITLES_LIST,i6.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i6.MEDIA_SUBTITLES_LIST&&t!==i?lS(this,iV,iq).call(this):e===i6.MEDIA_SUBTITLES_SHOWING&&t!==i&&(this.value=i)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",lS(this,iG,iF))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",lS(this,iG,iF))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:aW(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return lx(this,i6.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){lR(this,i6.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return lx(this,i6.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){lR(this,i6.MEDIA_SUBTITLES_SHOWING,e)}}iB=new WeakMap,iV=new WeakSet,iq=function(){var e,t,i,a,s,r;if(l_(this,t=iB,"read from private field"),(i?i.call(this):t.get(this))===JSON.stringify(this.mediaSubtitlesList))return;a=iB,s=JSON.stringify(this.mediaSubtitlesList),l_(this,a,"write to private field"),r?r.call(this,s):a.set(this,s),this.defaultSlot.textContent="";let n=!this.value,o=o4({type:"radio",text:this.formatMenuItemText(aA("Off")),value:"off",checked:n});for(let t of(o.prepend(o7(this,"checked-indicator")),this.defaultSlot.append(o),this.mediaSubtitlesList)){let i=o4({type:"radio",text:this.formatMenuItemText(t.label,t),value:sf(t),checked:this.value==sf(t)});i.prepend(o7(this,"checked-indicator")),"captions"===(null!=(e=t.kind)?e:"subs")&&i.append(o7(this,"captions-indicator")),this.defaultSlot.append(i)}},iG=new WeakSet,iF=function(){let e=this.mediaSubtitlesShowing,t=this.getAttribute(i6.MEDIA_SUBTITLES_SHOWING),i=this.value!==t;if((null==e?void 0:e.length)&&i&&this.dispatchEvent(new aL.CustomEvent(i4.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:e})),!this.value||!i)return;let a=new aL.CustomEvent(i4.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)},lL.getTemplateHTML=function(e){return`
    ${le.getTemplateHTML(e)}
    <slot name="captions-indicator" hidden>${lC}</slot>
  `};let lx=(e,t)=>{let i=e.getAttribute(t);return i?sg(i):[]},lR=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=sy(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};aL.customElements.get("media-captions-menu")||aL.customElements.define("media-captions-menu",lL);let lD=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,lN=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,lP=e=>{e.setAttribute("aria-checked",sI(e).toString())};class lU extends lb{static get observedAttributes(){return[...super.observedAttributes,i6.MEDIA_SUBTITLES_LIST,i6.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",aA("closed captions")),lP(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i6.MEDIA_SUBTITLES_SHOWING&&lP(this)}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=aW(this))?void 0:e.querySelector("media-captions-menu")}get mediaSubtitlesList(){return lO(this,i6.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){lW(this,i6.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return lO(this,i6.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){lW(this,i6.MEDIA_SUBTITLES_SHOWING,e)}}lU.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${lD}</slot>
      <slot name="off">${lN}</slot>
    </slot>
  `},lU.getTooltipContentHTML=function(){return aA("Captions")};let lO=(e,t)=>{let i=e.getAttribute(t);return i?sg(i):[]},lW=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=sy(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};aL.customElements.get("media-captions-menu-button")||aL.customElements.define("media-captions-menu-button",lU);var lH=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},l$=(e,t,i)=>(lH(e,t,"read from private field"),i?i.call(e):t.get(e)),lB=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},lV=(e,t,i)=>(lH(e,t,"access private method"),i);let lq="rates";class lG extends le{constructor(){super(),lB(this,iZ),lB(this,iK),lB(this,iQ,new sv(this,lq,{defaultValue:nU})),lV(this,iZ,ij).call(this)}static get observedAttributes(){return[...super.observedAttributes,i6.MEDIA_PLAYBACK_RATE,lq]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i6.MEDIA_PLAYBACK_RATE&&t!=i?this.value=i:e===lq&&t!=i&&(l$(this,iQ).value=i,lV(this,iZ,ij).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",lV(this,iK,iz))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",lV(this,iK,iz))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:aW(this).querySelector("media-playback-rate-menu-button")}get rates(){return l$(this,iQ)}set rates(e){e?Array.isArray(e)?l$(this,iQ).value=e.join(" "):"string"==typeof e&&(l$(this,iQ).value=e):l$(this,iQ).value="",lV(this,iZ,ij).call(this)}get mediaPlaybackRate(){return aK(this,i6.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){az(this,i6.MEDIA_PLAYBACK_RATE,e)}}iQ=new WeakMap,iZ=new WeakSet,ij=function(){for(let e of(this.defaultSlot.textContent="",l$(this,iQ))){let t=o4({type:"radio",text:this.formatMenuItemText(`${e}x`,e),value:e,checked:this.mediaPlaybackRate===Number(e)});t.prepend(o7(this,"checked-indicator")),this.defaultSlot.append(t)}},iK=new WeakSet,iz=function(){if(!this.value)return;let e=new aL.CustomEvent(i4.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},aL.customElements.get("media-playback-rate-menu")||aL.customElements.define("media-playback-rate-menu",lG);class lF extends lb{static get observedAttributes(){return[...super.observedAttributes,i6.MEDIA_PLAYBACK_RATE]}constructor(){var e;super(),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${null!=(e=this.mediaPlaybackRate)?e:1}x`}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===i6.MEDIA_PLAYBACK_RATE){let e=i?+i:NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",aA("Playback rate {playbackRate}",{playbackRate:t}))}}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:aW(this).querySelector("media-playback-rate-menu")}get mediaPlaybackRate(){return aK(this,i6.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){az(this,i6.MEDIA_PLAYBACK_RATE,e)}}lF.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
      
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${e.mediaplaybackrate||1}x</slot>
  `},lF.getTooltipContentHTML=function(){return aA("Playback rate")},aL.customElements.get("media-playback-rate-menu-button")||aL.customElements.define("media-playback-rate-menu-button",lF);var lQ=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lZ=(e,t,i)=>(lQ(e,t,"read from private field"),i?i.call(e):t.get(e)),lj=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},lK=(e,t,i,a)=>(lQ(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),lz=(e,t,i)=>(lQ(e,t,"access private method"),i);class lY extends le{constructor(){super(...arguments),lj(this,iJ),lj(this,i1),lj(this,iY,[]),lj(this,iX,{})}static get observedAttributes(){return[...super.observedAttributes,i6.MEDIA_RENDITION_LIST,i6.MEDIA_RENDITION_SELECTED,i6.MEDIA_RENDITION_UNAVAILABLE,i6.MEDIA_HEIGHT]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===i6.MEDIA_RENDITION_SELECTED&&t!==i)this.value=null!=i?i:"auto",lz(this,iJ,i0).call(this);else if(e===i6.MEDIA_RENDITION_LIST&&t!==i)lK(this,iY,null==i?void 0:i.split(/\s+/).map(au)),lz(this,iJ,i0).call(this);else e===i6.MEDIA_HEIGHT&&t!==i&&lz(this,iJ,i0).call(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",lz(this,i1,i2))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",lz(this,i1,i2))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:aW(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return lZ(this,iY)}set mediaRenditionList(e){lK(this,iY,e),lz(this,iJ,i0).call(this)}get mediaRenditionSelected(){return aJ(this,i6.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){a0(this,i6.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return aK(this,i6.MEDIA_HEIGHT)}set mediaHeight(e){az(this,i6.MEDIA_HEIGHT,e)}}iY=new WeakMap,iX=new WeakMap,iJ=new WeakSet,i0=function(){if(lZ(this,iX).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&lZ(this,iX).mediaHeight===this.mediaHeight)return;lZ(this,iX).mediaRenditionList=JSON.stringify(this.mediaRenditionList),lZ(this,iX).mediaHeight=this.mediaHeight;let e=this.mediaRenditionList.sort((e,t)=>t.height-e.height);for(let t of e)t.selected=t.id===this.mediaRenditionSelected;this.defaultSlot.textContent="";let t=!this.mediaRenditionSelected;for(let i of e){let e=o4({type:"radio",text:this.formatMenuItemText(`${Math.min(i.width,i.height)}p`,i),value:`${i.id}`,checked:i.selected&&!t});e.prepend(o7(this,"checked-indicator")),this.defaultSlot.append(e)}let i=o4({type:"radio",text:t?this.formatMenuItemText(`${aA("Auto")} (${this.mediaHeight}p)`):this.formatMenuItemText(aA("Auto")),value:"auto",checked:t}),a=this.mediaHeight>0?`${aA("Auto")} (${this.mediaHeight}p)`:aA("Auto");i.dataset.description=a,i.prepend(o7(this,"checked-indicator")),this.defaultSlot.append(i)},i1=new WeakSet,i2=function(){if(null==this.value)return;let e=new aL.CustomEvent(i4.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},aL.customElements.get("media-rendition-menu")||aL.customElements.define("media-rendition-menu",lY);let lX=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`;class lJ extends lb{static get observedAttributes(){return[...super.observedAttributes,i6.MEDIA_RENDITION_SELECTED,i6.MEDIA_RENDITION_UNAVAILABLE,i6.MEDIA_HEIGHT]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",aA("quality"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:aW(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return aJ(this,i6.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){a0(this,i6.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return aK(this,i6.MEDIA_HEIGHT)}set mediaHeight(e){az(this,i6.MEDIA_HEIGHT,e)}}lJ.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${lX}</slot>
  `},lJ.getTooltipContentHTML=function(){return aA("Quality")},aL.customElements.get("media-rendition-menu-button")||aL.customElements.define("media-rendition-menu-button",lJ);let l0=aL.document?.createElement?.("template");l0&&(l0.innerHTML=`
    <!-- Sutro -->
    <style>
      :host {
        --_primary-color: var(--media-primary-color, #fff);
        --_secondary-color: var(--media-secondary-color, transparent);
        --_accent-color: var(--media-accent-color, #fff);
      }

      media-controller {
        --base: 18px;

        font-size: calc(0.75 * var(--base));
        font-family: Roboto, Arial, sans-serif;
        --media-font-family: Roboto, helvetica neue, segoe ui, arial, sans-serif;
        -webkit-font-smoothing: antialiased;

        --media-primary-color: #fff;
        --media-secondary-color: transparent;
        --media-menu-background: rgba(28, 28, 28, 0.6);
        --media-text-color: var(--_primary-color);
        --media-control-hover-background: var(--media-secondary-color);

        --media-range-track-height: calc(0.125 * var(--base));
        --media-range-thumb-height: var(--base);
        --media-range-thumb-width: var(--base);
        --media-range-thumb-border-radius: var(--base);

        --media-control-height: calc(2 * var(--base));
      }

      media-controller[breakpointmd] {
        --base: 20px;
      }

      /* The biggest size controller is tied to going fullscreen
          instead of a player width */
      media-controller[mediaisfullscreen] {
        --base: 24px;
      }

      .media-button {
        --media-control-hover-background: var(--_secondary-color);
        --media-tooltip-background: rgb(28 28 28 / .24);
        --media-text-content-height: 1.2;
        --media-tooltip-padding: .7em 1em;
        --media-tooltip-distance: 8px;
        --media-tooltip-container-margin: 18px;
        position: relative;
        padding: 0;
        opacity: 0.9;
        transition: opacity 0.1s cubic-bezier(0.4, 0, 1, 1);
      }

      .media-button svg {
        fill: none;
        stroke: var(--_primary-color);
        stroke-width: 1;
        stroke-linecap: 'round';
        stroke-linejoin: 'round';
      }

      svg .svg-shadow {
        stroke: #000;
        stroke-opacity: 0.15;
        stroke-width: 2px;
        fill: none;
      }
    </style>

    <media-controller
      breakpoints="md:480"
      defaultsubtitles="{{defaultsubtitles}}"
      defaultduration="{{defaultduration}}"
      gesturesdisabled="{{disabled}}"
      hotkeys="{{hotkeys}}"
      nohotkeys="{{nohotkeys}}"
      defaultstreamtype="on-demand"
    >
      <slot name="media" slot="media"></slot>
      <slot name="poster" slot="poster"></slot>
      <slot name="centered-chrome" slot="centered-chrome"></slot>
      <media-error-dialog slot="dialog"></media-error-dialog>

      <!-- Controls Gradient -->
      <style>
        .media-gradient-bottom {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: calc(8 * var(--base));
          pointer-events: none;
        }

        .media-gradient-bottom::before {
          content: '';
          --gradient-steps: hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%,
            hsl(0 0% 0% / 0.104) 22.5%, hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%,
            hsl(0 0% 0% / 0.45) 47.1%, hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%,
            hsl(0 0% 0% / 0.825) 71%, hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%,
            hsl(0 0% 0%) 100%;

          position: absolute;
          inset: 0;
          opacity: 0.7;
          background: linear-gradient(to bottom, var(--gradient-steps));
        }
      </style>
      <div class="media-gradient-bottom"></div>

      <!-- Settings Menu -->
      <style>
        media-settings-menu {
          --media-menu-icon-height: 20px;
          --media-menu-item-icon-height: 20px;
          --media-settings-menu-min-width: calc(10 * var(--base));
          --media-menu-transform-in: translateY(0) scale(1);
          --media-menu-transform-out: translateY(20px) rotate(3deg) scale(1);
          padding-block: calc(0.15 * var(--base));
          margin-right: 10px;
          margin-bottom: 17px;
          border-radius: 8px;
          z-index: 2;
          user-select: none;
        }

        media-settings-menu-item,
        [role='menu']::part(menu-item) {
          --media-icon-color: var(--_primary-color);
          margin-inline: calc(0.45 * var(--base));
          height: calc(1.6 * var(--base));
          font-size: calc(0.7 * var(--base));
          font-weight: 400;
          padding: 0;
          padding-left: calc(0.4 * var(--base));
          padding-right: calc(0.1 * var(--base));
          border-radius: 6px;
          text-shadow: none;
        }

        [slot='submenu']::part(back button) {
          font-size: calc(0.7 * var(--base));
        }

        media-settings-menu-item:hover {
          --media-icon-color: #000;
          color: #000;
          background-color: #fff;
        }

        media-settings-menu-item:hover [slot='submenu']::part(menu-item),
        [slot='submenu']::part(back indicator) {
          --media-icon-color: var(--_primary-color);
        }

        media-settings-menu-item:hover [slot='submenu']::part(menu-item):hover {
          --media-icon-color: #000;
          color: #000;
          background-color: #fff;
        }

        media-settings-menu-item[submenusize='0'] {
          display: none;
        }

        /* Also hide if only 'Auto' is added. */
        .quality-settings[submenusize='1'] {
          display: none;
        }
      </style>
      <media-settings-menu hidden anchor="auto">
        <media-settings-menu-item>
          Playback Speed
          <media-playback-rate-menu slot="submenu" hidden>
            <div slot="title">Playback Speed</div>
          </media-playback-rate-menu>
        </media-settings-menu-item>
        <media-settings-menu-item class="quality-settings">
          Quality
          <media-rendition-menu slot="submenu" hidden>
            <div slot="title">Quality</div>
          </media-rendition-menu>
        </media-settings-menu-item>
        <media-settings-menu-item>
          Subtitles/CC
          <media-captions-menu slot="submenu" hidden>
            <div slot="title">Subtitles/CC</div>
          </media-captions-menu>
        </media-settings-menu-item>
      </media-settings-menu>

      <!-- Control Bar -->
      <style>
        media-control-bar {
          position: absolute;
          height: calc(2 * var(--base));
          line-height: calc(2 * var(--base));
          bottom: var(--base);
          left: var(--base);
          right: var(--base);
        }
      </style>
      <media-control-bar>
        <!-- Play/Pause -->
        <style>
          @keyframes bounce-scale-play {
            0% {
              transform: scale(0.75, 0.75);
            }
            50% {
              transform: scale(115%, 115%);
            }
            100% {
              transform: scale(1, 1);
            }
          }

          .media-button {
            border-radius: 25%;
            backdrop-filter: blur(10px) invert(15%) brightness(80%) opacity(0);
            -webkit-backdrop-filter: blur(10px) invert(15%) brightness(80%) opacity(0);
            transition: backdrop-filter 0.3s, -webkit-backdrop-filter 0.3s, box-shadow 0.3s;
          }

          .media-button:hover {
            /* background-color: rgba(0, 0, 0, 0.05); */
            box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 5px;
            /* hue-rotate(120deg) */
            backdrop-filter: blur(10px) invert(15%) brightness(80%) opacity(1);
            -webkit-backdrop-filter: blur(10px) invert(15%) brightness(80%) opacity(1);
            transition: backdrop-filter 0.3s, -webkit-backdrop-filter 0.3s;
          }

          media-play-button #icon-play {
            opacity: 0;
            transform-box: view-box;
            transform-origin: center center;
            transform: scale(0.5, 0.5);
            transition: all 0.5s;
          }

          media-play-button[mediapaused] #icon-play {
            opacity: 1;
            transform: scale(1, 1);
            animation: 0.35s bounce-scale-play ease-in-out;
          }

          @keyframes bounce-pause-left {
            0% {
              font-size: 10px;
            }
            50% {
              font-size: 3px;
            }
            100% {
              font-size: 4px;
            }
          }

          @keyframes bounce-pause-right {
            0% {
              font-size: 10px;
              transform: translateX(-8px);
            }
            50% {
              font-size: 3px;
              transform: translateX(1px);
            }
            100% {
              font-size: 4px;
              transform: translateX(0);
            }
          }

          media-play-button #pause-left,
          media-play-button #pause-right {
            /* Using font-size to animate height because using scale was resulting in unexpected positioning */
            font-size: 4px;
            opacity: 1;
            transform: translateX(0);
            transform-box: view-box;
          }

          media-play-button:not([mediapaused]) #pause-left {
            animation: 0.3s bounce-pause-left ease-out;
          }

          media-play-button:not([mediapaused]) #pause-right {
            animation: 0.3s bounce-pause-right ease-out;
          }

          media-play-button[mediapaused] #pause-left,
          media-play-button[mediapaused] #pause-right {
            opacity: 0;
            font-size: 10px;
          }

          media-play-button[mediapaused] #pause-right {
            transform-origin: right center;
            transform: translateX(-8px);
          }
        </style>
        <media-play-button mediapaused class="media-button">
          <svg slot="icon" viewBox="0 0 32 32">
            <!-- <use class="svg-shadow" xlink:href="#icon-play"></use> -->
            <g>
              <path
                id="icon-play"
                d="M20.7131 14.6976C21.7208 15.2735 21.7208 16.7265 20.7131 17.3024L12.7442 21.856C11.7442 22.4274 10.5 21.7054 10.5 20.5536L10.5 11.4464C10.5 10.2946 11.7442 9.57257 12.7442 10.144L20.7131 14.6976Z"
              />
            </g>
            <!-- <use class="svg-shadow" xlink:href="#icon-pause"></use> -->
            <g id="icon-pause">
              <rect id="pause-left" x="10.5" width="1em" y="10.5" height="11" rx="0.5" />
              <rect id="pause-right" x="17.5" width="1em" y="10.5" height="11" rx="0.5" />
            </g>
          </svg>
        </media-play-button>

        <!-- Volume/Mute -->
        <style>
          media-mute-button {
            position: relative;
          }

          media-mute-button .muted-path {
            transition: clip-path 0.2s ease-out;
          }

          media-mute-button #muted-path-2 {
            transition-delay: 0.2s;
          }

          media-mute-button .muted-path {
            clip-path: inset(0);
          }

          media-mute-button:not([mediavolumelevel='off']) #muted-path-1 {
            clip-path: inset(0 0 100% 0);
          }

          media-mute-button:not([mediavolumelevel='off']) #muted-path-2 {
            clip-path: inset(0 0 100% 0);
          }

          media-mute-button .muted-path {
            opacity: 0;
          }

          media-mute-button[mediavolumelevel='off'] .muted-path {
            opacity: 1;
          }

          media-mute-button .vol-path {
            opacity: 1;
            transition: opacity 0.4s;
          }

          media-mute-button[mediavolumelevel='off'] .vol-path {
            opacity: 0;
          }

          media-mute-button[mediavolumelevel='low'] #vol-high-path,
          media-mute-button[mediavolumelevel='medium'] #vol-high-path {
            opacity: 0;
          }

          media-volume-range {
            --media-range-track-background: rgba(255, 255, 255, 0.2);
            --media-range-thumb-opacity: 0;
          }

          @keyframes volume-in {
            0% {
              visibility: hidden;
              opacity: 0;
              transform: translateY(50%) rotate(1deg);
            }
            50% {
              visibility: visible;
              opacity: 1;
              transform: rotate(-2deg);
            }
            100% {
              visibility: visible;
              opacity: 1;
              transform: translateY(0) rotate(0deg);
            }
          }

          @keyframes volume-out {
            0% {
              visibility: visible;
              opacity: 1;
              transform: translateY(0) rotate(0deg);
            }
            50% {
              opacity: 1;
              transform: rotate(0deg);
            }
            100% {
              visibility: hidden;
              opacity: 0;
              transform: translateY(50%) rotate(1deg);
            }
          }

          .media-volume-range-wrapper {
            opacity: 0;
            visibility: hidden;

            position: absolute;
            top: -100%;
            left: calc(2 * var(--base));

            width: calc(10 * var(--base));
            height: calc(2.5 * var(--base));
            transform-origin: center left;
          }

          media-volume-range {
            /*
              Hide range and animation until mediavolume attribute is set.
              'visibility' didn't work, hovering over media-volume-range-wrapper
              caused it to show. Should require mute-button:hover.
            */
            opacity: 0;
            transition: opacity 0s 1s;

            width: calc(10 * var(--base));
            height: var(--base);
            padding: 0;
            border-radius: calc(0.25 * var(--base));
            overflow: hidden;
            background: rgba(0, 0, 0, 0.2);

            --media-range-bar-color: var(--media-accent-color);

            --media-range-padding-left: 0;
            --media-range-padding-right: 0;

            --media-range-track-width: calc(10 * var(--base));
            --media-range-track-height: var(--base);
            --media-range-track-border-radius: calc(0.25 * var(--base));
            --media-range-track-backdrop-filter: blur(10px) brightness(80%);

            /* This makes zero volume still show some of the bar.
               I can't make the bar have curved corners otherwise though. */
            --media-range-thumb-width: var(--base);
            --media-range-thumb-border-radius: calc(0.25 * var(--base));

            /* The Sutro design has a gradient like this, but not sure I like it */
            /* --media-range-thumb-box-shadow: 10px 0px 20px rgba(255, 255, 255, 0.5); */
          }

          media-volume-range[mediavolume] {
            opacity: 1;
          }

          [keyboardcontrol] media-volume-range:focus {
            /* TODO: This appears to be creating a think outline */
            outline: 1px solid rgba(27, 127, 204, 0.9);
          }

          media-mute-button:hover + .media-volume-range-wrapper,
          media-mute-button:focus + .media-volume-range-wrapper,
          media-mute-button:focus-within + .media-volume-range-wrapper,
          .media-volume-range-wrapper:hover,
          .media-volume-range-wrapper:focus,
          .media-volume-range-wrapper:focus-within {
            animation: 0.3s volume-in forwards ease-out;
          }

          .media-volume-range-wrapper:not(:hover, :focus-within) {
            animation: 0.3s volume-out ease-out;
          }

          /* When keyboard navigating the volume range and wrapper need to always be visible
            otherwise focus state can't land on it. This is ok when keyboard navigating because
            the hovering issues aren't a concern, unless you happen to be keyboard AND mouse navigating.
          */
          [keyboardcontrol] .media-volume-range-wrapper,
          [keyboardcontrol] .media-volume-range-wrapper:focus-within,
          [keyboardcontrol] .media-volume-range-wrapper:focus-within media-volume-range {
            visibility: visible;
          }
        </style>
        <media-mute-button class="media-button" notooltip>
          <use class="svg-shadow" xlink:href="#vol-paths"></use>
          <svg slot="icon" viewBox="0 0 32 32">
            <g id="vol-paths">
              <path
                id="speaker-path"
                d="M16.5 20.486v-8.972c0-1.537-2.037-2.08-2.802-.745l-1.026 1.79a2.5 2.5 0 0 1-.8.85l-1.194.78A1.5 1.5 0 0 0 10 15.446v1.11c0 .506.255.978.678 1.255l1.194.782a2.5 2.5 0 0 1 .8.849l1.026 1.79c.765 1.334 2.802.792 2.802-.745Z"
              />
              <path
                id="vol-low-path"
                class="vol-path"
                d="M18.5 18C19.6046 18 20.5 17.1046 20.5 16C20.5 14.8954 19.6046 14 18.5 14"
              />
              <path
                id="vol-high-path"
                class="vol-path"
                d="M18 21C20.7614 21 23 18.7614 23 16C23 13.2386 20.7614 11 18 11"
              />
              <path id="muted-path-1" class="muted-path" d="M23 18L19 14" />
              <path id="muted-path-2" class="muted-path" d="M23 14L19 18" />
            </g>
          </svg>
        </media-mute-button>
        <div class="media-volume-range-wrapper">
          <media-volume-range></media-volume-range>
        </div>

        <!-- Time Display -->
        <style>
          media-time-display {
            position: relative;
            padding: calc(0.5 * var(--base));
            font-size: calc(0.7 * var(--base));
            border-radius: calc(0.5 * var(--base));
          }

          media-controller[breakpointmd] media-time-display:not([showduration]) {
            display: none;
          }

          media-controller:not([breakpointmd]) media-time-display[showduration] {
            display: none;
          }
        </style>
        <media-time-display></media-time-display>
        <media-time-display showduration></media-time-display>

        <!-- Time Range / Progress Bar -->
        <style>
          media-time-range {
            height: calc(2 * var(--base));
            border-radius: calc(0.25 * var(--base));

            --media-range-track-backdrop-filter: invert(10%) blur(5px) brightness(110%);
            --media-range-track-background: rgba(255, 255, 255, 0.2);
            --media-range-track-pointer-background: rgba(255, 255, 255, 0.5);
            --media-range-track-border-radius: calc(0.25 * var(--base));

            --media-time-range-buffered-color: rgba(255, 255, 255, 0.4);
            --media-range-bar-color: var(--media-accent-color);

            --media-range-thumb-background: var(--media-accent-color);
            --media-range-thumb-transition: opacity 0.1s linear;
            --media-range-thumb-opacity: 0;

            --media-preview-thumbnail-border: calc(0.125 * var(--base)) solid #fff;
            --media-preview-thumbnail-border-radius: calc(0.5 * var(--base));
            --media-preview-thumbnail-min-width: calc(8 * var(--base));
            --media-preview-thumbnail-max-width: calc(10 * var(--base));
            --media-preview-thumbnail-min-height: calc(5 * var(--base));
            --media-preview-thumbnail-max-height: calc(7 * var(--base));
            --media-preview-box-margin: 0 0 -10px;
          }
          media-time-range:hover {
            --media-range-thumb-opacity: 1;
            --media-range-track-height: calc(0.25 * var(--base));
          }

          media-preview-thumbnail {
            margin-bottom: 5px;
          }

          media-preview-chapter-display {
            font-size: calc(0.6 * var(--base));
            padding-block: 0;
          }

          media-preview-time-display {
            font-size: calc(0.65 * var(--base));
            padding-top: 0;
          }
        </style>
        <media-time-range>
          <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
          <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
          <media-preview-time-display slot="preview"></media-preview-time-display>
        </media-time-range>

        <!-- Subtitles/CC Button -->
        <style>
          media-captions-button {
            position: relative;
          }

          media-controller:not([breakpointmd]) media-captions-button {
            display: none;
          }

          media-captions-button svg :is(path, rect) {
            stroke: none;
            fill: var(--_primary-color);
          }

          /* Disble the captions button when no subtitles are available */
          media-captions-button:not([mediasubtitleslist]) svg {
            opacity: 0.3;
          }

          media-captions-button #cc-underline {
            opacity: 1;
          }

          media-captions-button[mediasubtitleslist][aria-checked='true'] #cc-underline {
            opacity: 1;
          }

          media-captions-button #cc-underline {
            transition: clip-path 0.15s ease-out;
          }

          media-captions-button #cc-underline {
            clip-path: inset(0 100% 0 0);
          }

          media-captions-button[aria-checked='true'] #cc-underline {
            clip-path: inset(0 0 0 0);
          }
        </style>
        <media-captions-button class="media-button">
          <svg slot="icon" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#cc-icon"></use>
            <g id="cc-icon">
              <path
                class="cc-c"
                d="M15.6634 14.3574H14.5636C14.4985 14.0523 14.3847 13.7842 14.2221 13.5532C14.0624 13.3222 13.8673 13.1283 13.6367 12.9715C13.409 12.8118 13.1562 12.692 12.8783 12.6122C12.6004 12.5323 12.3107 12.4924 12.0091 12.4924C11.4592 12.4924 10.961 12.6264 10.5146 12.8945C10.0711 13.1625 9.71776 13.5575 9.45463 14.0794C9.19445 14.6012 9.06436 15.2414 9.06436 16C9.06436 16.7586 9.19445 17.3988 9.45463 17.9206C9.71776 18.4425 10.0711 18.8375 10.5146 19.1055C10.961 19.3736 11.4592 19.5076 12.0091 19.5076C12.3107 19.5076 12.6004 19.4677 12.8783 19.3878C13.1562 19.308 13.409 19.1896 13.6367 19.0328C13.8673 18.8731 14.0624 18.6778 14.2221 18.4468C14.3847 18.2129 14.4985 17.9449 14.5636 17.6426H15.6634C15.5806 18.0903 15.4298 18.491 15.2111 18.8446C14.9923 19.1982 14.7203 19.499 14.3951 19.7471C14.0698 19.9924 13.7047 20.1792 13.2996 20.3075C12.8976 20.4358 12.4674 20.5 12.0091 20.5C11.2345 20.5 10.5456 20.3175 9.94246 19.9525C9.33932 19.5875 8.8648 19.0684 8.51888 18.3954C8.17296 17.7224 8 16.924 8 16C8 15.076 8.17296 14.2776 8.51888 13.6046C8.8648 12.9316 9.33932 12.4125 9.94246 12.0475C10.5456 11.6825 11.2345 11.5 12.0091 11.5C12.4674 11.5 12.8976 11.5642 13.2996 11.6925C13.7047 11.8208 14.0698 12.009 14.3951 12.2571C14.7203 12.5024 14.9923 12.8018 15.2111 13.1554C15.4298 13.5062 15.5806 13.9068 15.6634 14.3574Z"
              />
              <path
                class="cc-c"
                d="M24 14.3574H22.9002C22.8351 14.0523 22.7213 13.7842 22.5587 13.5532C22.399 13.3222 22.2039 13.1283 21.9733 12.9715C21.7456 12.8118 21.4928 12.692 21.2149 12.6122C20.937 12.5323 20.6473 12.4924 20.3457 12.4924C19.7958 12.4924 19.2976 12.6264 18.8511 12.8945C18.4077 13.1625 18.0543 13.5575 17.7912 14.0794C17.531 14.6012 17.4009 15.2414 17.4009 16C17.4009 16.7586 17.531 17.3988 17.7912 17.9206C18.0543 18.4425 18.4077 18.8375 18.8511 19.1055C19.2976 19.3736 19.7958 19.5076 20.3457 19.5076C20.6473 19.5076 20.937 19.4677 21.2149 19.3878C21.4928 19.308 21.7456 19.1896 21.9733 19.0328C22.2039 18.8731 22.399 18.6778 22.5587 18.4468C22.7213 18.2129 22.8351 17.9449 22.9002 17.6426H24C23.9172 18.0903 23.7664 18.491 23.5476 18.8446C23.3289 19.1982 23.0569 19.499 22.7316 19.7471C22.4064 19.9924 22.0413 20.1792 21.6362 20.3075C21.2341 20.4358 20.804 20.5 20.3457 20.5C19.5711 20.5 18.8822 20.3175 18.279 19.9525C17.6759 19.5875 17.2014 19.0684 16.8555 18.3954C16.5095 17.7224 16.3366 16.924 16.3366 16C16.3366 15.076 16.5095 14.2776 16.8555 13.6046C17.2014 12.9316 17.6759 12.4125 18.279 12.0475C18.8822 11.6825 19.5711 11.5 20.3457 11.5C20.804 11.5 21.2341 11.5642 21.6362 11.6925C22.0413 11.8208 22.4064 12.009 22.7316 12.2571C23.0569 12.5024 23.3289 12.8018 23.5476 13.1554C23.7664 13.5062 23.9172 13.9068 24 14.3574Z"
              />
              <rect id="cc-underline" x="8" y="23" width="16" height="1" rx="0.5" />
            </g>
          </svg>
        </media-captions-button>

        <!-- Settings Menu Button -->
        <style>
          media-settings-menu-button svg {
            transition: transform 0.1s cubic-bezier(0.4, 0, 1, 1);
            transform: rotateZ(0deg);
          }
          media-settings-menu-button[aria-expanded='true'] svg {
            transform: rotateZ(30deg);
          }
        </style>
        <media-settings-menu-button class="media-button">
          <svg slot="icon" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#settings-icon"></use>
            <g id="settings-icon">
              <path
                d="M16 18C17.1046 18 18 17.1046 18 16C18 14.8954 17.1046 14 16 14C14.8954 14 14 14.8954 14 16C14 17.1046 14.8954 18 16 18Z"
              />
              <path
                d="M21.0176 13.0362L20.9715 12.9531C20.8445 12.7239 20.7797 12.4629 20.784 12.1982L20.8049 10.8997C20.8092 10.6343 20.675 10.3874 20.4545 10.2549L18.5385 9.10362C18.3186 8.97143 18.0472 8.9738 17.8293 9.10981L16.7658 9.77382C16.5485 9.90953 16.2999 9.98121 16.0465 9.98121H15.9543C15.7004 9.98121 15.4513 9.90922 15.2336 9.77295L14.1652 9.10413C13.9467 8.96728 13.674 8.96518 13.4535 9.09864L11.5436 10.2545C11.3242 10.3873 11.1908 10.6336 11.1951 10.8981L11.216 12.1982C11.2203 12.4629 11.1555 12.7239 11.0285 12.9531L10.9831 13.0351C10.856 13.2645 10.6715 13.4535 10.4493 13.5819L9.36075 14.2109C9.13763 14.3398 8.99942 14.5851 9 14.8511L9.00501 17.152C9.00559 17.4163 9.1432 17.6597 9.36476 17.7883L10.4481 18.4167C10.671 18.546 10.8559 18.7364 10.9826 18.9673L11.0313 19.0559C11.1565 19.284 11.2203 19.5431 11.2161 19.8059L11.1951 21.1003C11.1908 21.3657 11.325 21.6126 11.5456 21.7452L13.4615 22.8964C13.6814 23.0286 13.9528 23.0262 14.1707 22.8902L15.2342 22.2262C15.4515 22.0905 15.7001 22.0188 15.9535 22.0188H16.0457C16.2996 22.0188 16.5487 22.0908 16.7664 22.227L17.8348 22.8959C18.0534 23.0327 18.326 23.0348 18.5465 22.9014L20.4564 21.7455C20.6758 21.6127 20.8092 21.3664 20.8049 21.1019L20.784 19.8018C20.7797 19.5371 20.8445 19.2761 20.9715 19.0469L21.0169 18.9649C21.144 18.7355 21.3285 18.5465 21.5507 18.4181L22.6393 17.7891C22.8624 17.6602 23.0006 17.4149 23 17.1489L22.995 14.848C22.9944 14.5837 22.8568 14.3403 22.6352 14.2117L21.5493 13.5818C21.328 13.4534 21.1442 13.2649 21.0176 13.0362Z"
              />
            </g>
          </svg>
        </media-settings-menu-button>

        <!-- PIP/Mini Player Button -->
        <style>
          media-controller:not([breakpointmd]) media-pip-button {
            display: none;
          }
        </style>
        <media-pip-button class="media-button">
          <svg slot="icon" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#pip-icon"></use>
            <g id="pip-icon">
              <path
                d="M12 22H9.77778C9.34822 22 9 21.6162 9 21.1429V10.8571C9 10.3838 9.34822 10 9.77778 10L22.2222 10C22.6518 10 23 10.3838 23 10.8571V12.5714"
              />
              <path
                d="M15 21.5714V16.4286C15 16.1919 15.199 16 15.4444 16H22.5556C22.801 16 23 16.1919 23 16.4286V17V21.5714C23 21.8081 22.801 22 22.5556 22H20.3333H17.6667H15.4444C15.199 22 15 21.8081 15 21.5714Z"
              />
            </g>
          </svg>
        </media-pip-button>

        <!-- Airplay Button -->
        <media-airplay-button class="media-button">
          <svg viewBox="0 0 32 32" aria-hidden="true" slot="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.5 20h1.722c.43 0 .778-.32.778-.714v-8.572c0-.394-.348-.714-.778-.714H9.778c-.43 0-.778.32-.778.714v1.429"/>
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.5 20H9.778c-.43 0-.778-.32-.778-.714v-8.572c0-.394.348-.714.778-.714h12.444c.43 0 .778.32.778.714v1.429"/>
            <path stroke-linejoin="round" d="m16 19 3.464 3.75h-6.928L16 19Z"/>
          </svg>
        </media-airplay-button>

        <!-- Cast Button -->
        <media-cast-button class="media-button">
          <svg slot="icon" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#cast-icon"></use>
            <g id="cast-icon">
              <path
                d="M18.5 21.833h4.167c.46 0 .833-.373.833-.833V11a.833.833 0 0 0-.833-.833H9.333A.833.833 0 0 0 8.5 11v1.111m0 8.056c.92 0 1.667.746 1.667 1.666M8.5 17.667a4.167 4.167 0 0 1 4.167 4.166"
              />
              <path d="M8.5 15.167a6.667 6.667 0 0 1 6.667 6.666" />
            </g>
          </svg>
        </media-cast-button>

        <!-- Fullscreen Button -->
        <style>
          /* Having trouble getting @property to work in the shadow dom
             to clean this up. Like https://codepen.io/luwes/pen/oNRyZyx */

          media-fullscreen-button .fs-arrow {
            translate: 0% 0%;
          }
          media-fullscreen-button:hover .fs-arrow {
            animation: 0.35s up-left-bounce cubic-bezier(0.34, 1.56, 0.64, 1);
          }
          media-fullscreen-button:hover #fs-enter-top,
          media-fullscreen-button:hover #fs-exit-bottom {
            animation-name: up-right-bounce;
          }

          media-fullscreen-button:hover #fs-enter-bottom,
          media-fullscreen-button:hover #fs-exit-top {
            animation-name: down-left-bounce;
          }

          @keyframes up-left-bounce {
            0% {
              translate: 0 0;
            }
            50% {
              translate: -4% -4%;
            }
          }
          @keyframes up-right-bounce {
            0% {
              translate: 0 0;
            }
            50% {
              translate: 4% -4%;
            }
          }
          @keyframes down-left-bounce {
            0% {
              translate: 0 0;
            }
            50% {
              translate: -4% 4%;
            }
          }
          @keyframes down-right-bounce {
            0% {
              translate: 0 0;
            }
            50% {
              translate: 4% 4%;
            }
          }
        </style>
        <media-fullscreen-button class="media-button">
          <svg slot="enter" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#fs-enter-paths"></use>
            <g id="fs-enter-paths">
              <g id="fs-enter-top" class="fs-arrow">
                <path d="M18 10H22V14" />
                <path d="M22 10L18 14" />
              </g>
              <g id="fs-enter-bottom" class="fs-arrow">
                <path d="M14 22L10 22V18" />
                <path d="M10 22L14 18" />
              </g>
            </g>
          </svg>
          <svg slot="exit" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#fs-exit-paths"></use>
            <g id="fs-exit-paths">
              <g id="fs-exit-top" class="fs-arrow">
                <path d="M22 14H18V10" />
                <path d="M22 10L18 14" />
              </g>
              <g id="fs-exit-bottom" class="fs-arrow">
                <path d="M10 18L14 18V22" />
                <path d="M14 18L10 22" />
              </g>
            </g>
          </svg>
        </media-fullscreen-button>
      </media-control-bar>
    </media-controller>

  `);class l1 extends oK{static template=l0}aL.customElements&&!aL.customElements.get("media-theme-sutro")&&aL.customElements.define("media-theme-sutro",l1);var l2=i(7620),l3=i(76338);i(55551);var l5=parseInt(l2.version)>=19,l4={className:"class",classname:"class",htmlFor:"for",crossOrigin:"crossorigin",viewBox:"viewBox",playsInline:"playsinline",autoPlay:"autoplay",playbackRate:"playbackrate"};function l7(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}var l8=Object.prototype.hasOwnProperty,l9=(e,t,i)=>!((e,t)=>{if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;if(Array.isArray(e))return!!Array.isArray(t)&&e.length===t.length&&e.some((e,i)=>t[i]===e);let i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(let a=0;a<i.length;a++)if(!l8.call(t,i[a])||!Object.is(e[i[a]],t[i[a]]))return!1;return!0})(t,e[i]),l6=(e,t,i)=>{e[i]=t},de=(e,t,i,a=l6,s=l9)=>(0,l2.useEffect)(()=>{let r=null==i?void 0:i.current;r&&s(r,t,e)&&a(r,t,e)},[null==i?void 0:i.current,t]),dt=(()=>{try{return"3.12.0"}catch{}return"UNKNOWN"})(),di=(e,t,i)=>(0,l2.useEffect)(()=>{let a=null==t?void 0:t.current;if(a&&i)return a.addEventListener(e,i),()=>{a.removeEventListener(e,i)}},[null==t?void 0:t.current,i,e]),da=l2.forwardRef(({children:e,...t},i)=>l2.createElement("mux-player",{suppressHydrationWarning:!0,...((e={})=>{let{ref:t,...i}=e;return Object.entries(i).reduce((e,[t,i])=>{let a=((e,t)=>{if(!(!l5&&"boolean"==typeof t&&!t)){let i,a;if(i=e,null!=(a=l4)&&i in a)return l4[e];if(void 0!==t)return/[A-Z]/.test(e)?e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`):e}})(t,i);if(!a)return e;let s=l5||"boolean"!=typeof i?i:"";return e[a]=s,e},{})})(t),ref:i},e)),ds=l2.forwardRef((e,t)=>{var i;let a=(0,l2.useRef)(null),s=function(...e){return l2.useCallback(function(...e){return t=>{let i=!1,a=e.map(e=>{let a=l7(e,t);return i||"function"!=typeof a||(i=!0),a});if(i)return()=>{for(let t=0;t<a.length;t++){let i=a[t];"function"==typeof i?i():l7(e[t],null)}}}}(...e),e)}(a,t),[r]=((e,t)=>{let{onAbort:i,onCanPlay:a,onCanPlayThrough:s,onEmptied:r,onLoadStart:n,onLoadedData:o,onLoadedMetadata:l,onProgress:d,onDurationChange:u,onVolumeChange:h,onRateChange:c,onResize:m,onWaiting:p,onPlay:v,onPlaying:b,onTimeUpdate:g,onPause:E,onSeeking:f,onSeeked:y,onStalled:A,onSuspend:k,onEnded:w,onError:I,onCuePointChange:T,onChapterChange:_,metadata:M,tokens:S,paused:C,playbackId:L,playbackRates:x,currentTime:R,themeProps:D,extraSourceParams:N,castCustomData:P,_hlsConfig:U,...O}=t;return de("tokens",S,e),de("playbackId",L,e),de("playbackRates",x,e),de("metadata",M,e),de("extraSourceParams",N,e),de("_hlsConfig",U,e),de("themeProps",D,e),de("castCustomData",P,e),de("paused",C,e,(e,t)=>{null!=t&&(t?e.pause():e.play())},(e,t,i)=>(!e.hasAttribute("autoplay")||!!e.hasPlayed)&&l9(e,t,i)),de("currentTime",R,e,(e,t)=>{null!=t&&(e.currentTime=t)}),di("abort",e,i),di("canplay",e,a),di("canplaythrough",e,s),di("emptied",e,r),di("loadstart",e,n),di("loadeddata",e,o),di("loadedmetadata",e,l),di("progress",e,d),di("durationchange",e,u),di("volumechange",e,h),di("ratechange",e,c),di("resize",e,m),di("waiting",e,p),di("play",e,v),di("playing",e,b),di("timeupdate",e,g),di("pause",e,E),di("seeking",e,f),di("seeked",e,y),di("stalled",e,A),di("suspend",e,k),di("ended",e,w),di("error",e,I),di("cuepointchange",e,T),di("chapterchange",e,_),[O]})(a,e),[n]=(0,l2.useState)(null!=(i=e.playerInitTime)?i:(0,l3.GI)());return l2.createElement(da,{ref:s,defaultHiddenCaptions:e.defaultHiddenCaptions,playerSoftwareName:"mux-player-react",playerSoftwareVersion:dt,playerInitTime:n,...r})});function dr(e){let t,i,a=(0,i5.c)(5),{customDomain:s,playbackId:r,tokens:n}=e;return a[0]===Symbol.for("react.memo_cache_sentinel")?(t={position:"absolute",inset:0},a[0]=t):t=a[0],a[1]!==s||a[2]!==r||a[3]!==n?(i=(0,i3.jsx)(ds,{customDomain:s,theme:"sutro",playbackId:r,tokens:n,autoPlay:!1,loop:!1,style:t}),a[1]=s,a[2]=r,a[3]=n,a[4]=i):i=a[4],i}}}]);