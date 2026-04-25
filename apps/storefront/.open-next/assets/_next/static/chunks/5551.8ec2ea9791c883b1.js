"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5551],{55551:(e,t,i)=>{let a,r,n;i.d(t,{FJ:()=>s.FJ});var s=i(76338);let o=["abort","canplay","canplaythrough","durationchange","emptied","encrypted","ended","error","loadeddata","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting","waitingforkey","resize","enterpictureinpicture","leavepictureinpicture","webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"],l=["autopictureinpicture","disablepictureinpicture","disableremoteplayback","autoplay","controls","controlslist","crossorigin","loop","muted","playsinline","poster","preload","src"];function d(e){return`
    <style>
      :host {
        display: inline-flex;
        line-height: 0;
        flex-direction: column;
        justify-content: end;
      }

      audio {
        width: 100%;
      }
    </style>
    <slot name="media">
      <audio${h(e)}></audio>
    </slot>
    <slot></slot>
  `}function u(e){return`
    <style>
      :host {
        display: inline-block;
        line-height: 0;
      }

      video {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, 50% 50%);
      }

      video::-webkit-media-text-track-container {
        transform: var(--media-webkit-text-track-transform);
        transition: var(--media-webkit-text-track-transition);
      }
    </style>
    <slot name="media">
      <video${h(e)}></video>
    </slot>
    <slot></slot>
  `}function c(e,{tag:t,is:i}){let a=globalThis.document?.createElement?.(t,{is:i}),r=a?function(e){let t=[];for(let i=Object.getPrototypeOf(e);i&&i!==HTMLElement.prototype;i=Object.getPrototypeOf(i)){let e=Object.getOwnPropertyNames(i);t.push(...e)}return t}(a):[];return class n extends e{static getTemplateHTML=t.endsWith("audio")?d:u;static shadowRootOptions={mode:"open"};static Events=o;static #e=!1;static get observedAttributes(){return n.#t(),[...a?.constructor?.observedAttributes??[],...l]}static #t(){if(this.#e)return;this.#e=!0;let e=new Set(this.observedAttributes);for(let t of(e.delete("muted"),r))if(!(t in this.prototype))if("function"==typeof a[t])this.prototype[t]=function(...e){return this.#i(),(()=>{if(this.call)return this.call(t,...e);let i=this.nativeEl?.[t];return i?.apply(this.nativeEl,e)})()};else{let i={get(){this.#i();let i=t.toLowerCase();if(e.has(i)){let e=this.getAttribute(i);return null!==e&&(""===e||e)}return this.get?.(t)??this.nativeEl?.[t]}};t!==t.toUpperCase()&&(i.set=function(i){this.#i();let a=t.toLowerCase();e.has(a)?!0===i||!1===i||null==i?this.toggleAttribute(a,!!i):this.setAttribute(a,i):this.set?this.set(t,i):this.nativeEl&&(this.nativeEl[t]=i)}),Object.defineProperty(this.prototype,t,i)}}#a=!1;#r=null;#n=new Map;#s;#o;get;set;call;get nativeEl(){return this.#i(),this.#r??this.querySelector(":scope > [slot=media]")??this.querySelector(t)??this.shadowRoot?.querySelector(t)??null}set nativeEl(e){this.#r=e}get defaultMuted(){return this.hasAttribute("muted")}set defaultMuted(e){this.toggleAttribute("muted",e)}get src(){return this.getAttribute("src")}set src(e){this.setAttribute("src",`${e}`)}get preload(){return this.getAttribute("preload")??this.nativeEl?.preload}set preload(e){this.setAttribute("preload",`${e}`)}#i(){this.#a||(this.#a=!0,this.init())}init(){if(!this.shadowRoot){this.attachShadow({mode:"open"});let e=function(e){let t={};for(let i of e)t[i.name]=i.value;return t}(this.attributes);i&&(e.is=i),t&&(e.part=t),this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}for(let e of(this.nativeEl.muted=this.hasAttribute("muted"),r))this.#l(e);this.#d()}#d(){for(let e of(this.#s=new MutationObserver(this.#u.bind(this)),this.#o=()=>this.#c(),this.shadowRoot?.addEventListener("slotchange",this.#o),this.#c(),this.constructor.Events))this.shadowRoot?.addEventListener(e,this,!0)}handleEvent(e){e.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(e.type,{detail:e.detail}))}#c(){let e=new Map(this.#n),t=this.shadowRoot?.querySelector("slot:not([name])");(t?.assignedElements({flatten:!0}).filter(e=>["track","source"].includes(e.localName))).forEach(t=>{e.delete(t);let i=this.#n.get(t);i||(i=t.cloneNode(),this.#n.set(t,i),this.#s?.observe(t,{attributes:!0})),this.nativeEl?.append(i),this.#h(i)}),e.forEach((e,t)=>{e.remove(),this.#n.delete(t)})}#u(e){for(let t of e)if("attributes"===t.type){let{target:e,attributeName:i}=t,a=this.#n.get(e);a&&i&&(a.setAttribute(i,e.getAttribute(i)??""),this.#h(a))}}#h(e){e&&"track"===e.localName&&e.default&&("chapters"===e.kind||"metadata"===e.kind)&&"disabled"===e.track.mode&&(e.track.mode="hidden")}#l(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}attributeChangedCallback(e,t,i){this.#i(),this.#m(e,t,i)}#m(e,t,i){["id","class"].includes(e)||!n.observedAttributes.includes(e)&&this.constructor.observedAttributes.includes(e)||(null===i?this.nativeEl?.removeAttribute(e):this.nativeEl?.getAttribute(e)!==i&&this.nativeEl?.setAttribute(e,i))}connectedCallback(){this.#i(),this.#o||this.#d()}disconnectedCallback(){for(let e of(this.#s?.disconnect(),this.#s=void 0,this.#o&&(this.shadowRoot?.removeEventListener("slotchange",this.#o),this.#o=void 0),this.constructor.Events))this.shadowRoot?.removeEventListener(e,this,!0);this.#n.forEach(e=>e.remove()),this.#n.clear(),this.#r=null}}}function h(e){let t="";for(let i in e){if(!l.includes(i))continue;let a=e[i];""===a?t+=` ${i}`:t+=` ${i}="${a}"`}return t}let m=c(globalThis.HTMLElement??class{},{tag:"video"});c(globalThis.HTMLElement??class{},{tag:"audio"});var p,v,b,g,E,f,y,T,k,A,w,R,I,S,C=e=>{throw TypeError(e)},L=(e,t,i)=>t.has(e)||C("Cannot "+i),M=(e,t,i)=>(L(e,t,"read from private field"),i?i.call(e):t.get(e)),D=(e,t,i)=>t.has(e)?C("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),x=(e,t,i,a)=>(L(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),N=(e,t,i)=>(L(e,t,"access private method"),i),O=(()=>{try{return"0.30.7"}catch{}return"UNKNOWN"})(),P=`
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" part="logo" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 1600 500"><g fill="#fff"><path d="M994.287 93.486c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m0-93.486c-34.509 0-62.484 27.976-62.484 62.486v187.511c0 68.943-56.09 125.033-125.032 125.033s-125.03-56.09-125.03-125.033V62.486C681.741 27.976 653.765 0 619.256 0s-62.484 27.976-62.484 62.486v187.511C556.772 387.85 668.921 500 806.771 500c137.851 0 250.001-112.15 250.001-250.003V62.486c0-34.51-27.976-62.486-62.485-62.486M1537.51 468.511c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m-275.883-218.509-143.33 143.329c-24.402 24.402-24.402 63.966 0 88.368 24.402 24.402 63.967 24.402 88.369 0l143.33-143.329 143.328 143.329c24.402 24.4 63.967 24.402 88.369 0 24.403-24.402 24.403-63.966.001-88.368l-143.33-143.329.001-.004 143.329-143.329c24.402-24.402 24.402-63.965 0-88.367s-63.967-24.402-88.369 0L1349.996 161.63 1206.667 18.302c-24.402-24.401-63.967-24.402-88.369 0s-24.402 63.965 0 88.367l143.329 143.329v.004ZM437.511 468.521c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31M461.426 4.759C438.078-4.913 411.2.432 393.33 18.303L249.999 161.632 106.669 18.303C88.798.432 61.922-4.913 38.573 4.759 15.224 14.43-.001 37.214-.001 62.488v375.026c0 34.51 27.977 62.486 62.487 62.486 34.51 0 62.486-27.976 62.486-62.486V213.341l80.843 80.844c24.404 24.402 63.965 24.402 88.369 0l80.843-80.844v224.173c0 34.51 27.976 62.486 62.486 62.486s62.486-27.976 62.486-62.486V62.488c0-25.274-15.224-48.058-38.573-57.729" style="fill-rule:nonzero"/></g></svg>`,U={BEACON_COLLECTION_DOMAIN:"beacon-collection-domain",CUSTOM_DOMAIN:"custom-domain",DEBUG:"debug",DISABLE_TRACKING:"disable-tracking",DISABLE_COOKIES:"disable-cookies",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended",DRM_TOKEN:"drm-token",PLAYBACK_TOKEN:"playback-token",ENV_KEY:"env-key",MAX_RESOLUTION:"max-resolution",MIN_RESOLUTION:"min-resolution",MAX_AUTO_RESOLUTION:"max-auto-resolution",RENDITION_ORDER:"rendition-order",PROGRAM_START_TIME:"program-start-time",PROGRAM_END_TIME:"program-end-time",ASSET_START_TIME:"asset-start-time",ASSET_END_TIME:"asset-end-time",METADATA_URL:"metadata-url",PLAYBACK_ID:"playback-id",PLAYER_SOFTWARE_NAME:"player-software-name",PLAYER_SOFTWARE_VERSION:"player-software-version",PLAYER_INIT_TIME:"player-init-time",PREFER_CMCD:"prefer-cmcd",PREFER_PLAYBACK:"prefer-playback",START_TIME:"start-time",STREAM_TYPE:"stream-type",TARGET_LIVE_WINDOW:"target-live-window",LIVE_EDGE_OFFSET:"live-edge-offset",TYPE:"type",LOGO:"logo",CAP_RENDITION_TO_PLAYER_SIZE:"cap-rendition-to-player-size"},W=Object.values(U),H="mux-video",B=class extends m{constructor(){super(),D(this,w),D(this,p),D(this,v),D(this,b,{}),D(this,g,{}),D(this,E),D(this,f),D(this,y),D(this,T),D(this,k,""),D(this,A,e=>{var t;let i=(0,s.yb)(this.nativeEl),a=null!=(t=this.metadata)?t:{};this.metadata={...i,...a},(null==i?void 0:i["com.mux.video.branding"])==="mux-free-plan"&&(x(this,k,"default"),this.updateLogo())}),D(this,I),x(this,v,(0,s.GI)())}static get NAME(){return H}static get VERSION(){return O}static get observedAttributes(){var e;return[...W,...null!=(e=m.observedAttributes)?e:[]]}static getLogoHTML(e){return e&&"false"!==e?"default"===e?P:`<img part="logo" src="${e}" />`:""}static getTemplateHTML(e={}){var t;return`
      ${m.getTemplateHTML(e)}
      <style>
        :host {
          position: relative;
        }
        slot[name="logo"] {
          display: flex;
          justify-content: end;
          position: absolute;
          top: 1rem;
          right: 1rem;
          opacity: 0;
          transition: opacity 0.25s ease-in-out;
          z-index: 1;
        }
        slot[name="logo"]:has([part="logo"]) {
          opacity: 1;
        }
        slot[name="logo"] [part="logo"] {
          width: 5rem;
          pointer-events: none;
          user-select: none;
        }
      </style>
      <slot name="logo">
        ${this.getLogoHTML(null!=(t=e[U.LOGO])?t:"")}
      </slot>
    `}get preferCmcd(){var e;return null!=(e=this.getAttribute(U.PREFER_CMCD))?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?s.WG.includes(e)?this.setAttribute(U.PREFER_CMCD,e):console.warn(`Invalid value for preferCmcd. Must be one of ${s.WG.join()}`):this.removeAttribute(U.PREFER_CMCD))}get playerInitTime(){return this.hasAttribute(U.PLAYER_INIT_TIME)?+this.getAttribute(U.PLAYER_INIT_TIME):M(this,v)}set playerInitTime(e){e!=this.playerInitTime&&(null==e?this.removeAttribute(U.PLAYER_INIT_TIME):this.setAttribute(U.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return null!=(e=M(this,y))?e:H}set playerSoftwareName(e){x(this,y,e)}get playerSoftwareVersion(){var e;return null!=(e=M(this,f))?e:O}set playerSoftwareVersion(e){x(this,f,e)}get _hls(){var e;return null==(e=M(this,w,R))?void 0:e.engine}get mux(){var e;return null==(e=this.nativeEl)?void 0:e.mux}get error(){var e;return null!=(e=(0,s.vG)(this.nativeEl))?e:null}get errorTranslator(){return M(this,T)}set errorTranslator(e){x(this,T,e)}get src(){return this.getAttribute("src")}set src(e){e!==this.src&&(null==e?this.removeAttribute("src"):this.setAttribute("src",e))}get type(){var e;return null!=(e=this.getAttribute(U.TYPE))?e:void 0}set type(e){e!==this.type&&(e?this.setAttribute(U.TYPE,e):this.removeAttribute(U.TYPE))}get preload(){let e=this.getAttribute("preload");return""===e?"auto":["none","metadata","auto"].includes(e)?e:super.preload}set preload(e){e!=this.getAttribute("preload")&&(["","none","metadata","auto"].includes(e)?this.setAttribute("preload",e):this.removeAttribute("preload"))}get debug(){return null!=this.getAttribute(U.DEBUG)}set debug(e){e!==this.debug&&(e?this.setAttribute(U.DEBUG,""):this.removeAttribute(U.DEBUG))}get disableTracking(){return this.hasAttribute(U.DISABLE_TRACKING)}set disableTracking(e){e!==this.disableTracking&&this.toggleAttribute(U.DISABLE_TRACKING,!!e)}get disableCookies(){return this.hasAttribute(U.DISABLE_COOKIES)}set disableCookies(e){e!==this.disableCookies&&(e?this.setAttribute(U.DISABLE_COOKIES,""):this.removeAttribute(U.DISABLE_COOKIES))}get disablePseudoEnded(){return this.hasAttribute(U.DISABLE_PSEUDO_ENDED)}set disablePseudoEnded(e){e!==this.disablePseudoEnded&&(e?this.setAttribute(U.DISABLE_PSEUDO_ENDED,""):this.removeAttribute(U.DISABLE_PSEUDO_ENDED))}get startTime(){let e=this.getAttribute(U.START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set startTime(e){e!==this.startTime&&(null==e?this.removeAttribute(U.START_TIME):this.setAttribute(U.START_TIME,`${e}`))}get playbackId(){var e;return this.hasAttribute(U.PLAYBACK_ID)?this.getAttribute(U.PLAYBACK_ID):null!=(e=(0,s.CL)(this.src))?e:void 0}set playbackId(e){e!==this.playbackId&&(e?this.setAttribute(U.PLAYBACK_ID,e):this.removeAttribute(U.PLAYBACK_ID))}get maxResolution(){var e;return null!=(e=this.getAttribute(U.MAX_RESOLUTION))?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(U.MAX_RESOLUTION,e):this.removeAttribute(U.MAX_RESOLUTION))}get minResolution(){var e;return null!=(e=this.getAttribute(U.MIN_RESOLUTION))?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(U.MIN_RESOLUTION,e):this.removeAttribute(U.MIN_RESOLUTION))}get maxAutoResolution(){var e;return null!=(e=this.getAttribute(U.MAX_AUTO_RESOLUTION))?e:void 0}set maxAutoResolution(e){null==e?this.removeAttribute(U.MAX_AUTO_RESOLUTION):this.setAttribute(U.MAX_AUTO_RESOLUTION,e)}get renditionOrder(){var e;return null!=(e=this.getAttribute(U.RENDITION_ORDER))?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(U.RENDITION_ORDER,e):this.removeAttribute(U.RENDITION_ORDER))}get programStartTime(){let e=this.getAttribute(U.PROGRAM_START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set programStartTime(e){null==e?this.removeAttribute(U.PROGRAM_START_TIME):this.setAttribute(U.PROGRAM_START_TIME,`${e}`)}get programEndTime(){let e=this.getAttribute(U.PROGRAM_END_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set programEndTime(e){null==e?this.removeAttribute(U.PROGRAM_END_TIME):this.setAttribute(U.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){let e=this.getAttribute(U.ASSET_START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set assetStartTime(e){null==e?this.removeAttribute(U.ASSET_START_TIME):this.setAttribute(U.ASSET_START_TIME,`${e}`)}get assetEndTime(){let e=this.getAttribute(U.ASSET_END_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set assetEndTime(e){null==e?this.removeAttribute(U.ASSET_END_TIME):this.setAttribute(U.ASSET_END_TIME,`${e}`)}get customDomain(){var e;return null!=(e=this.getAttribute(U.CUSTOM_DOMAIN))?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(U.CUSTOM_DOMAIN,e):this.removeAttribute(U.CUSTOM_DOMAIN))}get capRenditionToPlayerSize(){var e;return(null==(e=this._hlsConfig)?void 0:e.capLevelToPlayerSize)!=null?this._hlsConfig.capLevelToPlayerSize:M(this,I)}set capRenditionToPlayerSize(e){x(this,I,e)}get drmToken(){var e;return null!=(e=this.getAttribute(U.DRM_TOKEN))?e:void 0}set drmToken(e){e!==this.drmToken&&(e?this.setAttribute(U.DRM_TOKEN,e):this.removeAttribute(U.DRM_TOKEN))}get playbackToken(){var e,t,i,a;if(this.hasAttribute(U.PLAYBACK_TOKEN))return null!=(e=this.getAttribute(U.PLAYBACK_TOKEN))?e:void 0;if(this.hasAttribute(U.PLAYBACK_ID)){let[,e]=(0,s._$)(null!=(t=this.playbackId)?t:"");return null!=(i=new URLSearchParams(e).get("token"))?i:void 0}if(this.src)return null!=(a=new URLSearchParams(this.src).get("token"))?a:void 0}set playbackToken(e){e!==this.playbackToken&&(e?this.setAttribute(U.PLAYBACK_TOKEN,e):this.removeAttribute(U.PLAYBACK_TOKEN))}get tokens(){let e=this.getAttribute(U.PLAYBACK_TOKEN),t=this.getAttribute(U.DRM_TOKEN);return{...M(this,g),...null!=e?{playback:e}:{},...null!=t?{drm:t}:{}}}set tokens(e){x(this,g,null!=e?e:{})}get ended(){return(0,s.hu)(this.nativeEl,this._hls)}get envKey(){var e;return null!=(e=this.getAttribute(U.ENV_KEY))?e:void 0}set envKey(e){e!==this.envKey&&(e?this.setAttribute(U.ENV_KEY,e):this.removeAttribute(U.ENV_KEY))}get beaconCollectionDomain(){var e;return null!=(e=this.getAttribute(U.BEACON_COLLECTION_DOMAIN))?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(U.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(U.BEACON_COLLECTION_DOMAIN))}get streamType(){var e;return null!=(e=this.getAttribute(U.STREAM_TYPE))?e:(0,s.Zp)(this.nativeEl)}set streamType(e){e!==this.streamType&&(e?this.setAttribute(U.STREAM_TYPE,e):this.removeAttribute(U.STREAM_TYPE))}get targetLiveWindow(){return this.hasAttribute(U.TARGET_LIVE_WINDOW)?+this.getAttribute(U.TARGET_LIVE_WINDOW):(0,s.WE)(this.nativeEl)}set targetLiveWindow(e){e!=this.targetLiveWindow&&(null==e?this.removeAttribute(U.TARGET_LIVE_WINDOW):this.setAttribute(U.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e,t;if(this.hasAttribute(U.LIVE_EDGE_OFFSET)){let{liveEdgeOffset:i}=this,a=null!=(e=this.nativeEl.seekable.end(0))?e:0;return Math.max(null!=(t=this.nativeEl.seekable.start(0))?t:0,a-i)}return(0,s.Yz)(this.nativeEl)}get liveEdgeOffset(){if(this.hasAttribute(U.LIVE_EDGE_OFFSET))return+this.getAttribute(U.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){e!=this.liveEdgeOffset&&(null==e?this.removeAttribute(U.LIVE_EDGE_OFFSET):this.setAttribute(U.LIVE_EDGE_OFFSET,`${+e}`))}get seekable(){return(0,s.pD)(this.nativeEl)}async addCuePoints(e){return(0,s.st)(this.nativeEl,e)}get activeCuePoint(){return(0,s.C$)(this.nativeEl)}get cuePoints(){return(0,s.Pv)(this.nativeEl)}async addChapters(e){return(0,s.S5)(this.nativeEl,e)}get activeChapter(){return(0,s.IC)(this.nativeEl)}get chapters(){return(0,s.rN)(this.nativeEl)}getStartDate(){return(0,s.tq)(this.nativeEl,this._hls)}get currentPdt(){return(0,s.Ul)(this.nativeEl,this._hls)}get preferPlayback(){let e=this.getAttribute(U.PREFER_PLAYBACK);if(e===s.Vi.MSE||e===s.Vi.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===s.Vi.MSE||e===s.Vi.NATIVE?this.setAttribute(U.PREFER_PLAYBACK,e):this.removeAttribute(U.PREFER_PLAYBACK))}get metadata(){return{...this.getAttributeNames().filter(e=>e.startsWith("metadata-")&&![U.METADATA_URL].includes(e)).reduce((e,t)=>{let i=this.getAttribute(t);return null!=i&&(e[t.replace(/^metadata-/,"").replace(/-/g,"_")]=i),e},{}),...M(this,b)}}set metadata(e){x(this,b,null!=e?e:{}),this.mux&&this.mux.emit("hb",M(this,b))}get _hlsConfig(){return M(this,E)}set _hlsConfig(e){x(this,E,e)}get logo(){var e;return null!=(e=this.getAttribute(U.LOGO))?e:M(this,k)}set logo(e){e?this.setAttribute(U.LOGO,e):this.removeAttribute(U.LOGO)}load(){(0,s.n_)(this,this.nativeEl,M(this,w,R))}unload(){(0,s.zN)(this.nativeEl,M(this,w,R),this)}attributeChangedCallback(e,t,i){var a,r;switch(m.observedAttributes.includes(e)&&!["src","autoplay","preload"].includes(e)&&super.attributeChangedCallback(e,t,i),e){case U.PLAYER_SOFTWARE_NAME:this.playerSoftwareName=null!=i?i:void 0;break;case U.PLAYER_SOFTWARE_VERSION:this.playerSoftwareVersion=null!=i?i:void 0;break;case"src":{let e=!!t,a=!!i;!e&&a?N(this,w,S).call(this):e&&!a?this.unload():e&&a&&(this.unload(),N(this,w,S).call(this));break}case"autoplay":if(i===t)break;null==(a=M(this,w,R))||a.setAutoplay(this.autoplay);break;case"preload":if(i===t)break;null==(r=M(this,w,R))||r.setPreload(i);break;case U.PLAYBACK_ID:case U.CUSTOM_DOMAIN:case U.MAX_RESOLUTION:case U.MIN_RESOLUTION:case U.RENDITION_ORDER:case U.PROGRAM_START_TIME:case U.PROGRAM_END_TIME:case U.ASSET_START_TIME:case U.ASSET_END_TIME:case U.PLAYBACK_TOKEN:this.src=(0,s.OR)(this);break;case U.DEBUG:{let e=this.debug;this.mux&&console.info("Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src."),this._hls&&(this._hls.config.debug=e);break}case U.METADATA_URL:i&&fetch(i).then(e=>e.json()).then(e=>this.metadata=e).catch(()=>console.error(`Unable to load or parse metadata JSON from metadata-url ${i}!`));break;case U.STREAM_TYPE:(null==i||i!==t)&&this.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}));break;case U.TARGET_LIVE_WINDOW:(null==i||i!==t)&&this.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0,detail:this.targetLiveWindow}));break;case U.LOGO:(null==i||i!==t)&&this.updateLogo();break;case U.DISABLE_TRACKING:if(null==i||i!==t){let e=this.currentTime,t=this.paused;this.unload(),N(this,w,S).call(this).then(()=>{this.currentTime=e,t||this.play()})}break;case U.DISABLE_COOKIES:(null==i||i!==t)&&this.disableCookies&&document.cookie.split(";").forEach(e=>{e.trim().startsWith("muxData")&&(document.cookie=e.replace(/^ +/,"").replace(/=.*/,"=;expires="+new Date().toUTCString()+";path=/"))});break;case U.CAP_RENDITION_TO_PLAYER_SIZE:(null==i||i!==t)&&(this.capRenditionToPlayerSize=null!=i||void 0)}}updateLogo(){if(!this.shadowRoot)return;let e=this.shadowRoot.querySelector('slot[name="logo"]');e&&(e.innerHTML=this.constructor.getLogoHTML(M(this,k)||this.logo))}connectedCallback(){var e,t;null==(e=super.connectedCallback)||e.call(this),null==(t=this.nativeEl)||t.addEventListener("muxmetadata",M(this,A)),this.nativeEl&&this.src&&!M(this,w,R)&&N(this,w,S).call(this)}disconnectedCallback(){var e,t;null==(e=this.nativeEl)||e.removeEventListener("muxmetadata",M(this,A)),this.unload(),null==(t=super.disconnectedCallback)||t.call(this)}handleEvent(e){e.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(e.type,{composed:!0,detail:e.detail}))}};p=new WeakMap,v=new WeakMap,b=new WeakMap,g=new WeakMap,E=new WeakMap,f=new WeakMap,y=new WeakMap,T=new WeakMap,k=new WeakMap,A=new WeakMap,w=new WeakSet,R=function(){return(0,s.xc)(this.nativeEl)},I=new WeakMap,S=async function(){M(this,p)||(await x(this,p,Promise.resolve()),x(this,p,null),this.load())};let $=new WeakMap;class V extends Error{}class q extends Error{}let K=["application/x-mpegURL","application/vnd.apple.mpegurl","audio/mpegurl"];function F(){return globalThis.cast?.framework?.CastContext.getInstance()}function Y(){return F()?.getCurrentSession()}function G(){return Y()?.getSessionObj().media[0]}function j(e){return F().setOptions({...z(),...e})}function z(){return{receiverApplicationId:"CC1AD845",autoJoinPolicy:"origin_scoped",androidReceiverCompatible:!1,language:"en-US",resumeSavedSession:!0}}async function Q(e){if(!e)return!1;if(/\.m3u8?(\?.*)?$/i.test(e))return!0;if(e.startsWith("blob:"))return!1;try{let t=(await fetch(e,{method:"HEAD"})).headers.get("Content-Type");return K.some(e=>t===e)}catch(e){return console.error("Error while trying to get the Content-Type of the manifest",e),!1}}async function Z(e){if(!(!e||e.startsWith("blob:")))try{let i=await (await fetch(e)).text(),a=i,r=function(e){let t=e.split("\n"),i=[];for(let e=0;e<t.length;e++)if(t[e].trim().startsWith("#EXT-X-STREAM-INF")){let a=t[e+1]?t[e+1].trim():"";a&&!a.startsWith("#")&&i.push(a)}return i}(i);if(r.length>0){let t=new URL(r[0],e).toString();a=await (await fetch(t)).text()}var t=a.split("\n").find(e=>!e.trim().startsWith("#")&&""!==e.trim());if(!t)return;let n=t.match(/\.([a-zA-Z0-9]+)(?:\?.*)?$/);return n?n[1]:null}catch(e){console.error("Error while trying to parse the manifest playlist",e);return}}let X=new(globalThis.WeakRef?class extends Set{add(e){super.add(new WeakRef(e))}forEach(e){super.forEach(t=>{let i=t.deref();i&&e(i)})}}:Set),J=new WeakSet;eM=()=>{globalThis.chrome?.cast?.isAvailable?a||(a=cast.framework,F().addEventListener(a.CastContextEventType.CAST_STATE_CHANGED,e=>{X.forEach(t=>$.get(t).onCastStateChanged?.(e))}),F().addEventListener(a.CastContextEventType.SESSION_STATE_CHANGED,e=>{X.forEach(t=>$.get(t).onSessionStateChanged?.(e))}),X.forEach(e=>$.get(e).init?.())):console.debug("chrome.cast.isAvailable",globalThis.chrome?.cast?.isAvailable)},globalThis.chrome?.cast?.isAvailable?globalThis.cast?.framework?eM():customElements.whenDefined("google-cast-button").then(eM):globalThis.__onGCastApiAvailable=()=>{customElements.whenDefined("google-cast-button").then(eM)};let ee=0;class et extends EventTarget{#p;#a;#v;#b;#g="disconnected";#E=!1;#f=new Set;#y=new WeakMap;#_=()=>this.#T();constructor(e){super(),this.#p=e,X.add(this),$.set(this,{init:()=>this.#i(),onCastStateChanged:()=>this.#k(),onSessionStateChanged:()=>this.#A(),getCastPlayer:()=>this.#w}),this.#i()}destroy(){this.#p?.textTracks?.removeEventListener("change",this.#_),this.#b&&this.#v?.controller&&Object.entries(this.#b).forEach(([e,t])=>{this.#v.controller.removeEventListener(e,t)}),this.#p&&J.delete(this.#p),this.#a=!1}get #w(){if(J.has(this.#p))return this.#v}get state(){return this.#g}async watchAvailability(e){if(this.#p.disableRemotePlayback)throw new V("disableRemotePlayback attribute is present.");return this.#y.set(e,++ee),this.#f.add(e),queueMicrotask(()=>e(this.#R())),ee}async cancelWatchAvailability(e){if(this.#p.disableRemotePlayback)throw new V("disableRemotePlayback attribute is present.");e?this.#f.delete(e):this.#f.clear()}async prompt(){if(this.#p.disableRemotePlayback)throw new V("disableRemotePlayback attribute is present.");if(!globalThis.chrome?.cast?.isAvailable)throw new q("The RemotePlayback API is disabled on this platform.");let e=J.has(this.#p);J.add(this.#p),j(this.#p.castOptions),Object.entries(this.#b).forEach(([e,t])=>{this.#v.controller.addEventListener(e,t)});try{await F().requestSession()}catch(t){if(e||J.delete(this.#p),"cancel"===t)return;throw Error(t)}$.get(this.#p)?.loadOnPrompt?.()}#I(){J.has(this.#p)&&(Object.entries(this.#b).forEach(([e,t])=>{this.#v.controller.removeEventListener(e,t)}),J.delete(this.#p),this.#p.muted=this.#v.isMuted,this.#p.currentTime=this.#v.savedPlayerState.currentTime,!1===this.#v.savedPlayerState.isPaused&&this.#p.play())}#R(){let e=F()?.getCastState();return e&&"NO_DEVICES_AVAILABLE"!==e}#k(){let e=F().getCastState();if(J.has(this.#p)&&"CONNECTING"===e&&(this.#g="connecting",this.dispatchEvent(new Event("connecting"))),!this.#E&&e?.includes("CONNECT"))for(let e of(this.#E=!0,this.#f))e(!0);else if(this.#E&&(!e||"NO_DEVICES_AVAILABLE"===e))for(let e of(this.#E=!1,this.#f))e(!1)}async #A(){let{SESSION_RESUMED:e}=a.SessionState;if(F().getSessionState()===e&&this.#p.castSrc===G()?.media.contentId){J.add(this.#p),Object.entries(this.#b).forEach(([e,t])=>{this.#v.controller.addEventListener(e,t)});try{var t;await (t=new chrome.cast.media.GetStatusRequest,new Promise((e,i)=>{G().getStatus(t,e,i)}))}catch(e){console.error(e)}this.#b[a.RemotePlayerEventType.IS_PAUSED_CHANGED](),this.#b[a.RemotePlayerEventType.PLAYER_STATE_CHANGED]()}}#i(){a&&!this.#a&&(this.#a=!0,j(this.#p.castOptions),this.#p.textTracks.addEventListener("change",this.#_),this.#k(),this.#v=new a.RemotePlayer,new a.RemotePlayerController(this.#v),this.#b={[a.RemotePlayerEventType.IS_CONNECTED_CHANGED]:({value:e})=>{!0===e?(this.#g="connected",this.dispatchEvent(new Event("connect"))):(this.#I(),this.#g="disconnected",this.dispatchEvent(new Event("disconnect")))},[a.RemotePlayerEventType.DURATION_CHANGED]:()=>{this.#p.dispatchEvent(new Event("durationchange"))},[a.RemotePlayerEventType.VOLUME_LEVEL_CHANGED]:()=>{this.#p.dispatchEvent(new Event("volumechange"))},[a.RemotePlayerEventType.IS_MUTED_CHANGED]:()=>{this.#p.dispatchEvent(new Event("volumechange"))},[a.RemotePlayerEventType.CURRENT_TIME_CHANGED]:()=>{this.#w?.isMediaLoaded&&this.#p.dispatchEvent(new Event("timeupdate"))},[a.RemotePlayerEventType.VIDEO_INFO_CHANGED]:()=>{this.#p.dispatchEvent(new Event("resize"))},[a.RemotePlayerEventType.IS_PAUSED_CHANGED]:()=>{this.#p.dispatchEvent(new Event(this.paused?"pause":"play"))},[a.RemotePlayerEventType.PLAYER_STATE_CHANGED]:()=>{this.#w?.playerState!==chrome.cast.media.PlayerState.PAUSED&&this.#p.dispatchEvent(new Event({[chrome.cast.media.PlayerState.PLAYING]:"playing",[chrome.cast.media.PlayerState.BUFFERING]:"waiting",[chrome.cast.media.PlayerState.IDLE]:"emptied"}[this.#w?.playerState]))},[a.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED]:async()=>{this.#w?.isMediaLoaded&&(await Promise.resolve(),this.#S())}})}#S(){this.#T()}async #T(){let e;if(!this.#w)return;let t=(this.#v.mediaInfo?.tracks??[]).filter(({type:e})=>e===chrome.cast.media.TrackType.TEXT),i=[...this.#p.textTracks].filter(({kind:e})=>"subtitles"===e||"captions"===e),a=t.map(({language:e,name:t,trackId:a})=>{let{mode:r}=i.find(i=>i.language===e&&i.label===t)??{};return!!r&&{mode:r,trackId:a}}).filter(Boolean),r=a.filter(({mode:e})=>"showing"!==e).map(({trackId:e})=>e),n=a.find(({mode:e})=>"showing"===e),s=Y()?.getSessionObj().media[0]?.activeTrackIds??[],o=s;if(s.length&&(o=o.filter(e=>!r.includes(e))),n?.trackId&&(o=[...o,n.trackId]),e=o=[...new Set(o)],!(s.length===e.length&&s.every(t=>e.includes(t))))try{let e=new chrome.cast.media.EditTracksInfoRequest(o);await new Promise((t,i)=>{G().editTracksInfo(e,t,i)})}catch(e){console.error(e)}}}let ei=e=>class extends e{static observedAttributes=[...e.observedAttributes??[],"cast-src","cast-content-type","cast-stream-type","cast-receiver"];#C={paused:!1};#L=z();#M;#D;get remote(){if(this.#D)return this.#D;if(globalThis.chrome){if(!this.isConnected)return;return this.disableRemotePlayback||function(){let e="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1";if(globalThis.chrome?.cast||document.querySelector(`script[src="${e}"]`))return;let t=document.createElement("script");t.src=e,document.head.append(t)}(),$.set(this,{loadOnPrompt:()=>this.#x()}),this.#D=new et(this)}return super.remote}get #w(){return $.get(this.remote)?.getCastPlayer?.()}disconnectedCallback(){this.#D?.destroy(),this.#D=null,$.delete(this),super.disconnectedCallback?.()}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),"cast-receiver"===e&&i){this.#L.receiverApplicationId=i;return}if(this.#w)switch(e){case"cast-stream-type":case"cast-src":this.load()}}async #x(){this.#C.paused=super.paused,super.pause(),this.muted=super.muted;try{await this.load()}catch(e){console.error(e)}}async load(){if(!this.#w)return super.load();let e=new chrome.cast.media.MediaInfo(this.castSrc,this.castContentType);e.customData=this.castCustomData;let t=[...this.querySelectorAll("track")].filter(({kind:e,src:t})=>t&&("subtitles"===e||"captions"===e)),i=[],a=0;if(t.length&&(e.tracks=t.map(e=>{let t=++a;0===i.length&&"showing"===e.track.mode&&i.push(t);let r=new chrome.cast.media.Track(t,chrome.cast.media.TrackType.TEXT);return r.trackContentId=e.src,r.trackContentType="text/vtt",r.subtype="captions"===e.kind?chrome.cast.media.TextTrackType.CAPTIONS:chrome.cast.media.TextTrackType.SUBTITLES,r.name=e.label,r.language=e.srclang,r})),"live"===this.castStreamType?e.streamType=chrome.cast.media.StreamType.LIVE:e.streamType=chrome.cast.media.StreamType.BUFFERED,e.metadata=new chrome.cast.media.GenericMediaMetadata,e.metadata.title=this.title,e.metadata.images=[{url:this.poster}],await Q(this.castSrc)){e.contentType||(e.contentType="application/x-mpegURL");let t=await Z(this.castSrc);t?.includes("m4s")||t?.includes("mp4")?(e.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.FMP4,e.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.FMP4):t?.includes("ts")&&(e.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.TS,e.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.TS)}let r=new chrome.cast.media.LoadRequest(e);r.currentTime=super.currentTime??0,r.autoplay=!this.#C.paused,r.activeTrackIds=i,await Y()?.loadMedia(r),this.dispatchEvent(new Event("volumechange"))}play(){if(this.#w){this.#w.isPaused&&this.#w.controller?.playOrPause();return}return super.play()}pause(){if(this.#w){this.#w.isPaused||this.#w.controller?.playOrPause();return}super.pause()}get castOptions(){return this.#L}get castReceiver(){return this.getAttribute("cast-receiver")??void 0}set castReceiver(e){this.castReceiver!=e&&this.setAttribute("cast-receiver",`${e}`)}get castSrc(){let e=this.currentSrc,t=e?.startsWith("blob:")?void 0:e;return this.getAttribute("cast-src")??this.querySelector("source")?.src??t??this.getAttribute("src")??void 0}set castSrc(e){this.castSrc!=e&&this.setAttribute("cast-src",`${e}`)}get castContentType(){return this.getAttribute("cast-content-type")??void 0}set castContentType(e){this.setAttribute("cast-content-type",`${e}`)}get castStreamType(){return this.getAttribute("cast-stream-type")??this.streamType??void 0}set castStreamType(e){this.setAttribute("cast-stream-type",`${e}`)}get castCustomData(){return this.#M}set castCustomData(e){let t=typeof e;["object","undefined"].includes(t)?this.#M=e:console.error(`castCustomData must be nullish or an object but value was of type ${t}`)}get readyState(){if(this.#w)switch(this.#w.playerState){case chrome.cast.media.PlayerState.IDLE:return 0;case chrome.cast.media.PlayerState.BUFFERING:return 2;default:return 3}return super.readyState}get paused(){return this.#w?this.#w.isPaused:super.paused}get muted(){return this.#w?this.#w?.isMuted:super.muted}set muted(e){if(this.#w){(e&&!this.#w.isMuted||!e&&this.#w.isMuted)&&this.#w.controller?.muteOrUnmute();return}super.muted=e}get volume(){return this.#w?this.#w?.volumeLevel??1:super.volume}set volume(e){if(this.#w){this.#w.volumeLevel=+e,this.#w.controller?.setVolumeLevel();return}super.volume=e}get duration(){return this.#w&&this.#w?.isMediaLoaded?this.#w?.duration??NaN:super.duration}get currentTime(){return this.#w&&this.#w?.isMediaLoaded?this.#w?.currentTime??0:super.currentTime}set currentTime(e){if(this.#w){this.#w.currentTime=e,this.#w.controller?.seek();return}super.currentTime=e}};class ea extends Event{track;constructor(e,t){super(e),this.track=t.track}}let er=new WeakMap;function en(e){var t,i;let a;return er.get(e)??(t=e,i={},(a=er.get(t))||er.set(t,a={}),Object.assign(a,i))}function es(e,t){let i=e.videoTracks;en(t).media=new WeakRef(e),en(t).renditionSet||(en(t).renditionSet=new Set);let a=en(i).trackSet;a.add(t);let r=a.size-1;r in el.prototype||Object.defineProperty(el.prototype,r,{get(){return[...en(this).trackSet][r]}}),queueMicrotask(()=>{i.dispatchEvent(new ea("addtrack",{track:t}))})}function eo(e){let t=en(e).media?.deref()?.videoTracks;t&&(en(t).trackSet.delete(e),queueMicrotask(()=>{t.dispatchEvent(new ea("removetrack",{track:e}))}))}class el extends EventTarget{#N;#O;#P;constructor(){super(),en(this).trackSet=new Set}get #U(){return en(this).trackSet}[Symbol.iterator](){return this.#U.values()}get length(){return this.#U.size}getTrackById(e){return[...this.#U].find(t=>t.id===e)??null}get selectedIndex(){return[...this.#U].findIndex(e=>e.selected)}get onaddtrack(){return this.#N}set onaddtrack(e){this.#N&&(this.removeEventListener("addtrack",this.#N),this.#N=void 0),"function"==typeof e&&(this.#N=e,this.addEventListener("addtrack",e))}get onremovetrack(){return this.#O}set onremovetrack(e){this.#O&&(this.removeEventListener("removetrack",this.#O),this.#O=void 0),"function"==typeof e&&(this.#O=e,this.addEventListener("removetrack",e))}get onchange(){return this.#P}set onchange(e){this.#P&&(this.removeEventListener("change",this.#P),this.#P=void 0),"function"==typeof e&&(this.#P=e,this.addEventListener("change",e))}}class ed extends Event{rendition;constructor(e,t){super(e),this.rendition=t.rendition}}function eu(e){let t=en(e).media?.deref();return t?[...t.videoTracks].filter(e=>e.selected).flatMap(e=>[...en(e).renditionSet]):[]}class ec extends EventTarget{#W;#H;#P;[Symbol.iterator](){return eu(this).values()}get length(){return eu(this).length}getRenditionById(e){return eu(this).find(t=>`${t.id}`==`${e}`)??null}get selectedIndex(){return eu(this).findIndex(e=>e.selected)}set selectedIndex(e){for(let[t,i]of eu(this).entries())i.selected=t===e}get onaddrendition(){return this.#W}set onaddrendition(e){this.#W&&(this.removeEventListener("addrendition",this.#W),this.#W=void 0),"function"==typeof e&&(this.#W=e,this.addEventListener("addrendition",e))}get onremoverendition(){return this.#H}set onremoverendition(e){this.#H&&(this.removeEventListener("removerendition",this.#H),this.#H=void 0),"function"==typeof e&&(this.#H=e,this.addEventListener("removerendition",e))}get onchange(){return this.#P}set onchange(e){this.#P&&(this.removeEventListener("change",this.#P),this.#P=void 0),"function"==typeof e&&(this.#P=e,this.addEventListener("change",e))}}class eh{src;id;width;height;bitrate;frameRate;codec;#B=!1;get selected(){return this.#B}set selected(e){if(this.#B!==e){var t;let i;this.#B=e,t=this,(i=en(t).media?.deref()?.videoRenditions)&&!en(i).changeRequested&&(en(i).changeRequested=!0,queueMicrotask(()=>{delete en(i).changeRequested,en(t).track.selected&&i.dispatchEvent(new Event("change"))}))}}}class em{id;kind;label="";language="";sourceBuffer;#B=!1;addRendition(e,t,i,a,r,n){var s;let o,l,d,u=new eh;return u.src=e,u.width=t,u.height=i,u.frameRate=n,u.bitrate=r,u.codec=a,s=this,o=en(s).media?.deref()?.videoRenditions,en(u).media=en(s).media,en(u).track=s,(l=en(s).renditionSet).add(u),(d=l.size-1)in ec.prototype||Object.defineProperty(ec.prototype,d,{get(){return eu(this)[d]}}),queueMicrotask(()=>{o&&s.selected&&o.dispatchEvent(new ed("addrendition",{rendition:u}))}),u}removeRendition(e){let t,i;t=en(e).media?.deref()?.videoRenditions,i=en(e).track,en(i).renditionSet.delete(e),queueMicrotask(()=>{let i=en(e).track;t&&i.selected&&t.dispatchEvent(new ed("removerendition",{rendition:e}))})}get selected(){return this.#B}set selected(e){this.#B===e||(this.#B=e,!0===e&&function(e){let t=en(e).media?.deref()?.videoTracks??[],i=!1;for(let a of t)a!==e&&(a.selected=!1,i=!0);if(i){if(en(t).changeRequested)return;en(t).changeRequested=!0,queueMicrotask(()=>{delete en(t).changeRequested,t.dispatchEvent(new Event("change"))})}}(this))}}function ep(e){let t=en(e).media?.deref();return t?[...t.audioTracks].filter(e=>e.enabled).flatMap(e=>[...en(e).renditionSet]):[]}class ev extends EventTarget{#W;#H;#P;[Symbol.iterator](){return ep(this).values()}get length(){return ep(this).length}getRenditionById(e){return ep(this).find(t=>`${t.id}`==`${e}`)??null}get selectedIndex(){return ep(this).findIndex(e=>e.selected)}set selectedIndex(e){for(let[t,i]of ep(this).entries())i.selected=t===e}get onaddrendition(){return this.#W}set onaddrendition(e){this.#W&&(this.removeEventListener("addrendition",this.#W),this.#W=void 0),"function"==typeof e&&(this.#W=e,this.addEventListener("addrendition",e))}get onremoverendition(){return this.#H}set onremoverendition(e){this.#H&&(this.removeEventListener("removerendition",this.#H),this.#H=void 0),"function"==typeof e&&(this.#H=e,this.addEventListener("removerendition",e))}get onchange(){return this.#P}set onchange(e){this.#P&&(this.removeEventListener("change",this.#P),this.#P=void 0),"function"==typeof e&&(this.#P=e,this.addEventListener("change",e))}}class eb{src;id;bitrate;codec;#B=!1;get selected(){return this.#B}set selected(e){if(this.#B!==e){var t;let i;this.#B=e,t=this,(i=en(t).media?.deref()?.audioRenditions)&&!en(i).changeRequested&&(en(i).changeRequested=!0,queueMicrotask(()=>{delete en(i).changeRequested,en(t).track.enabled&&i.dispatchEvent(new Event("change"))}))}}}function eg(e,t){let i=e.audioTracks;en(t).media=new WeakRef(e),en(t).renditionSet||(en(t).renditionSet=new Set);let a=en(i).trackSet;a.add(t);let r=a.size-1;r in ef.prototype||Object.defineProperty(ef.prototype,r,{get(){return[...en(this).trackSet][r]}}),queueMicrotask(()=>{i.dispatchEvent(new ea("addtrack",{track:t}))})}function eE(e){let t=en(e).media?.deref()?.audioTracks;t&&(en(t).trackSet.delete(e),queueMicrotask(()=>{t.dispatchEvent(new ea("removetrack",{track:e}))}))}class ef extends EventTarget{#N;#O;#P;constructor(){super(),en(this).trackSet=new Set}get #U(){return en(this).trackSet}[Symbol.iterator](){return this.#U.values()}get length(){return this.#U.size}getTrackById(e){return[...this.#U].find(t=>t.id===e)??null}get onaddtrack(){return this.#N}set onaddtrack(e){this.#N&&(this.removeEventListener("addtrack",this.#N),this.#N=void 0),"function"==typeof e&&(this.#N=e,this.addEventListener("addtrack",e))}get onremovetrack(){return this.#O}set onremovetrack(e){this.#O&&(this.removeEventListener("removetrack",this.#O),this.#O=void 0),"function"==typeof e&&(this.#O=e,this.addEventListener("removetrack",e))}get onchange(){return this.#P}set onchange(e){this.#P&&(this.removeEventListener("change",this.#P),this.#P=void 0),"function"==typeof e&&(this.#P=e,this.addEventListener("change",e))}}class ey{id;kind;label="";language="";sourceBuffer;#$=!1;addRendition(e,t,i){var a;let r,n,s,o=new eb;return o.src=e,o.codec=t,o.bitrate=i,a=this,r=en(a).media?.deref()?.audioRenditions,en(o).media=en(a).media,en(o).track=a,(n=en(a).renditionSet).add(o),(s=n.size-1)in ev.prototype||Object.defineProperty(ev.prototype,s,{get(){return ep(this)[s]}}),queueMicrotask(()=>{r&&a.enabled&&r.dispatchEvent(new ed("addrendition",{rendition:o}))}),o}removeRendition(e){let t,i;t=en(e).media?.deref()?.audioRenditions,i=en(e).track,en(i).renditionSet.delete(e),queueMicrotask(()=>{let i=en(e).track;t&&i.enabled&&t.dispatchEvent(new ed("removerendition",{rendition:e}))})}get enabled(){return this.#$}set enabled(e){if(this.#$!==e){let t;this.#$=e,(t=en(this).media?.deref()?.audioTracks)&&!en(t).changeRequested&&(en(t).changeRequested=!0,queueMicrotask(()=>{delete en(t).changeRequested,t.dispatchEvent(new Event("change"))}))}}}let e_=eA(globalThis.HTMLMediaElement,"video"),eT=eA(globalThis.HTMLMediaElement,"audio");function ek(e){if(!e?.prototype)return e;let t=eA(e,"video");(!t||`${t}`.includes("[native code]"))&&Object.defineProperty(e.prototype,"videoTracks",{get(){var e=this;let t=en(e).videoTracks;if(!t&&(t=new el,en(e).videoTracks=t,e_)){let i=e_.call(e.nativeEl??e);for(let t of i)es(e,t);i.addEventListener("change",()=>{t.dispatchEvent(new Event("change"))}),i.addEventListener("addtrack",a=>{if([...t].some(e=>e instanceof em)){for(let e of i)eo(e);return}es(e,a.track)}),i.addEventListener("removetrack",e=>{eo(e.track)})}return t}});let i=eA(e,"audio");(!i||`${i}`.includes("[native code]"))&&Object.defineProperty(e.prototype,"audioTracks",{get(){var e=this;let t=en(e).audioTracks;if(!t&&(t=new ef,en(e).audioTracks=t,eT)){let i=eT.call(e.nativeEl??e);for(let t of i)eg(e,t);i.addEventListener("change",()=>{t.dispatchEvent(new Event("change"))}),i.addEventListener("addtrack",a=>{if([...t].some(e=>e instanceof ey)){for(let e of i)eE(e);return}eg(e,a.track)}),i.addEventListener("removetrack",e=>{eE(e.track)})}return t}}),"addVideoTrack"in e.prototype||(e.prototype.addVideoTrack=function(e,t="",i=""){let a=new em;return a.kind=e,a.label=t,a.language=i,es(this,a),a}),"removeVideoTrack"in e.prototype||(e.prototype.removeVideoTrack=eo),"addAudioTrack"in e.prototype||(e.prototype.addAudioTrack=function(e,t="",i=""){let a=new ey;return a.kind=e,a.label=t,a.language=i,eg(this,a),a}),"removeAudioTrack"in e.prototype||(e.prototype.removeAudioTrack=eE),"videoRenditions"in e.prototype||Object.defineProperty(e.prototype,"videoRenditions",{get(){return a(this)}});let a=e=>{let t=en(e).videoRenditions;return t||(en(t=new ec).media=new WeakRef(e),en(e).videoRenditions=t),t};"audioRenditions"in e.prototype||Object.defineProperty(e.prototype,"audioRenditions",{get(){return r(this)}});let r=e=>{let t=en(e).audioRenditions;return t||(en(t=new ev).media=new WeakRef(e),en(e).audioRenditions=t),t};return e}function eA(e,t){if(e?.prototype)return Object.getOwnPropertyDescriptor(e.prototype,`${t}Tracks`)?.get}var ew=e=>{throw TypeError(e)},eR=(e,t,i)=>t.has(e)||ew("Cannot "+i),eI=(e,t,i)=>(eR(e,t,"read from private field"),i?i.call(e):t.get(e)),eS=(e,t,i)=>t.has(e)?ew("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),eC=(e,t,i,a)=>(eR(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),eL=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if("u"<typeof DocumentFragment){class e extends eL{}globalThis.DocumentFragment=e}var eM,eD,ex=class extends eL{},eN=class{constructor(e,t={}){eS(this,eD),eC(this,eD,null==t?void 0:t.detail)}get detail(){return eI(this,eD)}initCustomEvent(){}};eD=new WeakMap;var eO={document:{createElement:function(e,t){return new ex}},DocumentFragment,customElements:{get(e){},define(e,t,i){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(ex)},CustomEvent:eN,EventTarget:eL,HTMLElement:ex,HTMLVideoElement:class extends eL{}},eP="u"<typeof window||void 0===globalThis.customElements,eU=eP?eO:globalThis;eP&&eO.document;var eW,eH=class extends ei(ek(B)){constructor(){super(...arguments),eS(this,eW)}get autoplay(){let e=this.getAttribute("autoplay");return null!==e&&(""===e||e)}set autoplay(e){e!==this.autoplay&&(e?this.setAttribute("autoplay","string"==typeof e?e:""):this.removeAttribute("autoplay"))}get muxCastCustomData(){return{mux:{playbackId:this.playbackId,minResolution:this.minResolution,maxResolution:this.maxResolution,renditionOrder:this.renditionOrder,customDomain:this.customDomain,tokens:{drm:this.drmToken},envKey:this.envKey,metadata:this.metadata,disableCookies:this.disableCookies,disableTracking:this.disableTracking,beaconCollectionDomain:this.beaconCollectionDomain,startTime:this.startTime,preferCmcd:this.preferCmcd}}}get castCustomData(){var e;return null!=(e=eI(this,eW))?e:this.muxCastCustomData}set castCustomData(e){eC(this,eW,e)}};eW=new WeakMap,eU.customElements.get("mux-video")||(eU.customElements.define("mux-video",eH),eU.MuxVideoElement=eH);let eB={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_LOOP_REQUEST:"medialooprequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},e$={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},eV={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_LOOP:"mediaLoop",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_LANG:"mediaLang",MEDIA_WIDTH:"mediaWidth"},eq=Object.entries(eV),eK=eq.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{}),eF=eq.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"});Object.entries(eF).reduce((e,[t,i])=>{let a=eK[t];return a&&(e[i]=a),e},{userinactivechange:"userinactive"});let eY=Object.entries(eK).reduce((e,[t,i])=>{let a=eF[t];return a&&(e[i]=a),e},{userinactive:"userinactivechange"}),eG="subtitles",ej="captions",ez="disabled",eQ="showing",eZ="unavailable",eX="unsupported",eJ={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"};function e0(e){if(e){let{id:t,width:i,height:a}=e;return[t,i,a].filter(e=>null!=e).join(":")}}function e1(e){if(e){let[t,i,a]=e.split(":");return{id:t,width:+i,height:+a}}}function e2(e){if(e){let{id:t,kind:i,language:a,label:r}=e;return[t,i,a,r].filter(e=>null!=e).join(":")}}function e3(e){if(e){let[t,i,a,r]=e.split(":");return{id:t,kind:i,language:a,label:r}}}function e4(e){return"number"==typeof e&&!Number.isNaN(e)&&Number.isFinite(e)}function e5(e){return"string"==typeof e&&!isNaN(e)&&!isNaN(parseFloat(e))}let e9=e=>new Promise(t=>setTimeout(t,e)),e8={en:{"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute",Loop:"Loop","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute","chapter: {chapterName}":"chapter: {chapterName}",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it.",hour:"hour",hours:"hours",minute:"minute",minutes:"minutes",second:"second",seconds:"seconds","{time} remaining":"{time} remaining","{currentTime} of {totalTime}":"{currentTime} of {totalTime}","video not loaded, unknown time.":"video not loaded, unknown time."}},e6=(null==(oi=globalThis.navigator)?void 0:oi.language)||"en",e7=(e,t={})=>(e=>{var t,i,a;let[r]=e6.split("-");return(null==(t=e8[e6])?void 0:t[e])||(null==(i=e8[r])?void 0:i[e])||(null==(a=e8.en)?void 0:a[e])||e})(e).replace(/\{(\w+)\}/g,(e,i)=>i in t?String(t[i]):`{${i}}`),te=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],tt=e=>{if(!e4(e))return"";let t=Math.abs(e),i=t!==e,a=new Date(0,0,0,0,0,t,0),r=[a.getHours(),a.getMinutes(),a.getSeconds()].map((e,t)=>{let i;return e&&(i=1===e?e7(te[t].singular):e7(te[t].plural),`${e} ${i}`)}).filter(e=>e).join(", ");return i?e7("{time} remaining",{time:r}):r};function ti(e,t){let i=!1;e<0&&(i=!0,e=0-e);let a=Math.floor((e=e<0?0:e)%60),r=Math.floor(e/60%60),n=Math.floor(e/3600),s=Math.floor(t/60%60),o=Math.floor(t/3600);return(isNaN(e)||e===1/0)&&(n=r=a="0"),r=(((n=n>0||o>0?n+":":"")||s>=10)&&r<10?"0"+r:r)+":",(i?"-":"")+n+r+(a=a<10?"0"+a:a)}Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});class ta{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}}class tr extends ta{}class tn extends tr{constructor(){super(...arguments),this.role=null}}class ts{observe(){}unobserve(){}disconnect(){}}let to={createElement:function(){return new tl.HTMLElement},createElementNS:function(){return new tl.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent:e=>!1},tl={ResizeObserver:ts,document:to,Node:tr,Element:tn,HTMLElement:class extends tn{constructor(){super(...arguments),this.innerHTML=""}get content(){return new tl.DocumentFragment}},DocumentFragment:class extends ta{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem:e=>null,setItem(e,t){},removeItem(e){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia:e=>({matches:!1,media:e}),DOMParser:class{parseFromString(e,t){return{body:{textContent:e}}}}},td="global"in globalThis&&(null==globalThis?void 0:globalThis.global)===globalThis||"u"<typeof window||void 0===window.customElements,tu=Object.keys(tl).every(e=>e in globalThis),tc=td&&!tu?tl:globalThis,th=td&&!tu?to:globalThis.document,tm=new WeakMap,tp=e=>{let t=tm.get(e);return t||tm.set(e,t=new Set),t},tv=new tc.ResizeObserver(e=>{for(let t of e)for(let e of tp(t.target))e(t)});function tb(e,t){tp(e).add(t),tv.observe(e)}function tg(e,t){let i=tp(e);i.delete(t),i.size||tv.unobserve(e)}function tE(e){let t={};for(let i of e)t[i.name]=i.value;return t}function tf(e){var t;return null!=(t=ty(e))?t:tA(e,"media-controller")}function ty(e){var t;let{MEDIA_CONTROLLER:i}=e$,a=e.getAttribute(i);if(a)return null==(t=tR(e))?void 0:t.getElementById(a)}let t_=(e,t,i=".value")=>{let a=e.querySelector(i);a&&(a.textContent=t)},tT=(e,t)=>{let i,a;return(i=`slot[name="${t}"]`,!(a=e.shadowRoot.querySelector(i))?[]:a.children)[0]},tk=(e,t)=>!!e&&!!t&&(null!=e&&!!e.contains(t)||tk(e,t.getRootNode().host)),tA=(e,t)=>{if(!e)return null;let i=e.closest(t);return i||tA(e.getRootNode().host,t)};function tw(e=document){var t;let i=null==e?void 0:e.activeElement;return i?null!=(t=tw(i.shadowRoot))?t:i:null}function tR(e){var t;let i=null==(t=null==e?void 0:e.getRootNode)?void 0:t.call(e);return i instanceof ShadowRoot||i instanceof Document?i:null}function tI(e,{depth:t=3,checkOpacity:i=!0,checkVisibilityCSS:a=!0}={}){if(e.checkVisibility)return e.checkVisibility({checkOpacity:i,checkVisibilityCSS:a});let r=e;for(;r&&t>0;){let e=getComputedStyle(r);if(i&&"0"===e.opacity||a&&"hidden"===e.visibility||"none"===e.display)return!1;r=r.parentElement,t--}return!0}function tS(e,t){let i=function(e,t){var i,a;let r;for(r of null!=(i=e.querySelectorAll("style:not([media])"))?i:[]){let e;try{e=null==(a=r.sheet)?void 0:a.cssRules}catch{continue}for(let i of null!=e?e:[])if(t(i.selectorText))return i}}(e,e=>e===t);return i||tC(e,t)}function tC(e,t){var i,a;let r=null!=(i=e.querySelectorAll("style:not([media])"))?i:[],n=null==r?void 0:r[r.length-1];if(!(null==n?void 0:n.sheet))return console.warn("Media Chrome: No style sheet found on style tag of",e),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}};let s=null==n?void 0:n.sheet.insertRule(`${t}{}`,n.sheet.cssRules.length);return null==(a=n.sheet.cssRules)?void 0:a[s]}function tL(e,t,i=NaN){let a=e.getAttribute(t);return null!=a?+a:i}function tM(e,t,i){let a=+i;if(null==i||Number.isNaN(a)){e.hasAttribute(t)&&e.removeAttribute(t);return}tL(e,t,void 0)!==a&&e.setAttribute(t,`${a}`)}function tD(e,t){return e.hasAttribute(t)}function tx(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}tD(e,t)!=i&&e.toggleAttribute(t,i)}function tN(e,t,i=null){var a;return null!=(a=e.getAttribute(t))?a:i}function tO(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}let a=`${i}`;tN(e,t,void 0)!==a&&e.setAttribute(t,a)}var tP=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},tU=(e,t,i)=>(tP(e,t,"read from private field"),i?i.call(e):t.get(e)),tW=(e,t,i,a)=>(tP(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class tH extends tc.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,oa,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=tE(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[e$.MEDIA_CONTROLLER,eK.MEDIA_PAUSED]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===e$.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=tU(this,oa))?void 0:a.unassociateElement)||r.call(a,this),tW(this,oa,null)),i&&this.isConnected&&(tW(this,oa,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=tU(this,oa))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i,a;let r;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),tW(this,oa,(i=this,(r=i.getAttribute(e$.MEDIA_CONTROLLER))?null==(a=i.getRootNode())?void 0:a.getElementById(r):tA(i,"media-controller"))),this.getAttribute(e$.MEDIA_CONTROLLER)&&(null==(t=null==(e=tU(this,oa))?void 0:e.associateElement)||t.call(e,this)),tU(this,oa)&&(tU(this,oa).addEventListener("pointerdown",this),tU(this,oa).addEventListener("click",this),tU(this,oa).hasAttribute("tabindex")||(tU(this,oa).tabIndex=0))}disconnectedCallback(){var e,t,i,a;this.getAttribute(e$.MEDIA_CONTROLLER)&&(null==(t=null==(e=tU(this,oa))?void 0:e.unassociateElement)||t.call(e,this)),null==(i=tU(this,oa))||i.removeEventListener("pointerdown",this),null==(a=tU(this,oa))||a.removeEventListener("click",this),tW(this,oa,null)}handleEvent(e){var t;let i=null==(t=e.composedPath())?void 0:t[0];if(["video","media-controller"].includes(null==i?void 0:i.localName)){if("pointerdown"===e.type)this._pointerType=e.pointerType;else if("click"===e.type){let{clientX:t,clientY:i}=e,{left:a,top:r,width:n,height:s}=this.getBoundingClientRect(),o=t-a,l=i-r;if(o<0||l<0||o>n||l>s||0===n&&0===s)return;let d=this._pointerType||"mouse";if(this._pointerType=void 0,"touch"===d)return void this.handleTap(e);if("mouse"===d||"pen"===d)return void this.handleMouseClick(e)}}}get mediaPaused(){return tD(this,eK.MEDIA_PAUSED)}set mediaPaused(e){tx(this,eK.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){let t=this.mediaPaused?eB.MEDIA_PLAY_REQUEST:eB.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new tc.CustomEvent(t,{composed:!0,bubbles:!0}))}}oa=new WeakMap,tH.shadowRootOptions={mode:"open"},tH.getTemplateHTML=function(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `},tc.customElements.get("media-gesture-receiver")||tc.customElements.define("media-gesture-receiver",tH);var tB=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},t$=(e,t,i)=>(tB(e,t,"read from private field"),i?i.call(e):t.get(e)),tV=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},tq=(e,t,i,a)=>(tB(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),tK=(e,t,i)=>(tB(e,t,"access private method"),i);let tF="audio",tY="autohide",tG="breakpoints",tj="gesturesdisabled",tz="keyboardcontrol",tQ="noautohide",tZ="userinactive",tX="autohideovercontrols",tJ=Object.values(eK);function t0(e,t){var i,a,r;if(!e.isConnected)return;let n=Object.fromEntries((null!=(i=e.getAttribute(tG))?i:"sm:384 md:576 lg:768 xl:960").split(/\s+/).map(e=>e.split(":"))),s=(a=n,r=t,Object.keys(a).filter(e=>r>=parseInt(a[e]))),o=!1;if(Object.keys(n).forEach(t=>{if(s.includes(t)){e.hasAttribute(`breakpoint${t}`)||(e.setAttribute(`breakpoint${t}`,""),o=!0);return}e.hasAttribute(`breakpoint${t}`)&&(e.removeAttribute(`breakpoint${t}`),o=!0)}),o){let t=new CustomEvent(eF.BREAKPOINTS_CHANGE,{detail:s});e.dispatchEvent(t)}e.breakpointsComputed||(e.breakpointsComputed=!0,e.dispatchEvent(new CustomEvent(eF.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}class t1 extends tc.HTMLElement{constructor(){if(super(),tV(this,oh),tV(this,op),tV(this,ob),tV(this,oE),tV(this,oy),tV(this,or,void 0),tV(this,on,0),tV(this,os,null),tV(this,oo,null),tV(this,ol,void 0),this.breakpointsComputed=!1,tV(this,od,e=>{let t=this.media;for(let i of e)if("childList"===i.type){for(let e of i.removedNodes){if("media"!=e.slot||i.target!=this)continue;let a=i.previousSibling&&i.previousSibling.previousElementSibling;if(a&&t){let t="media"!==a.slot;for(;null!==(a=a.previousSibling);)"media"==a.slot&&(t=!1);t&&this.mediaUnsetCallback(e)}else this.mediaUnsetCallback(e)}if(t)for(let e of i.addedNodes)e===t&&this.handleMediaUpdated(t)}}),tV(this,ou,!1),tV(this,oc,e=>{t$(this,ou)||(setTimeout(()=>{t0(e.target,e.contentRect.width),tq(this,ou,!1)},0),tq(this,ou,!0))}),tV(this,oT,void 0),tV(this,ok,()=>{if(!t$(this,oT).assignedElements({flatten:!0}).length){t$(this,os)&&this.mediaUnsetCallback(t$(this,os));return}this.handleMediaUpdated(this.media)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=tE(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}tq(this,or,new MutationObserver(t$(this,od)))}static get observedAttributes(){return[tY,tj].concat(tJ).filter(e=>![eK.MEDIA_RENDITION_LIST,eK.MEDIA_AUDIO_TRACK_LIST,eK.MEDIA_CHAPTERS_CUES,eK.MEDIA_WIDTH,eK.MEDIA_HEIGHT,eK.MEDIA_ERROR,eK.MEDIA_ERROR_MESSAGE].includes(e))}attributeChangedCallback(e,t,i){e.toLowerCase()==tY&&(this.autohide=i)}get media(){let e=this.querySelector(":scope > [slot=media]");return(null==e?void 0:e.nodeName)=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(tq(this,os,e),e.localName.includes("-")&&await tc.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;t$(this,or).observe(this,{childList:!0,subtree:!0}),tb(this,t$(this,oc));let t=null!=this.getAttribute(tF)?e7("audio player"):e7("video player");this.setAttribute("role","region"),this.setAttribute("aria-label",t),this.handleMediaUpdated(this.media),this.setAttribute(tZ,""),t0(this,this.getBoundingClientRect().width);let i=this.querySelector(":scope > slot[slot=media]");i&&(tq(this,oT,i),t$(this,oT).addEventListener("slotchange",t$(this,ok))),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),null==(e=tc.window)||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;tg(this,t$(this,oc)),clearTimeout(t$(this,oo)),t$(this,or).disconnect(),this.media&&this.mediaUnsetCallback(this.media),null==(e=tc.window)||e.removeEventListener("mouseup",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointermove",this),this.removeEventListener("pointerup",this),this.removeEventListener("mouseleave",this),this.removeEventListener("keyup",this),t$(this,oT)&&(t$(this,oT).removeEventListener("slotchange",t$(this,ok)),tq(this,oT,null)),tq(this,ou,!1)}mediaSetCallback(e){}mediaUnsetCallback(e){tq(this,os,null)}handleEvent(e){switch(e.type){case"pointerdown":tq(this,on,e.timeStamp);break;case"pointermove":tK(this,oh,om).call(this,e);break;case"pointerup":tK(this,op,ov).call(this,e);break;case"mouseleave":tK(this,ob,og).call(this);break;case"mouseup":this.removeAttribute(tz);break;case"keyup":tK(this,oy,o_).call(this),this.setAttribute(tz,"")}}set autohide(e){let t=Number(e);tq(this,ol,isNaN(t)?0:t)}get autohide(){return(void 0===t$(this,ol)?2:t$(this,ol)).toString()}get breakpoints(){return tN(this,tG)}set breakpoints(e){tO(this,tG,e)}get audio(){return tD(this,tF)}set audio(e){tx(this,tF,e)}get gesturesDisabled(){return tD(this,tj)}set gesturesDisabled(e){tx(this,tj,e)}get keyboardControl(){return tD(this,tz)}set keyboardControl(e){tx(this,tz,e)}get noAutohide(){return tD(this,tQ)}set noAutohide(e){tx(this,tQ,e)}get autohideOverControls(){return tD(this,tX)}set autohideOverControls(e){tx(this,tX,e)}get userInteractive(){return tD(this,tZ)}set userInteractive(e){tx(this,tZ,e)}}or=new WeakMap,on=new WeakMap,os=new WeakMap,oo=new WeakMap,ol=new WeakMap,od=new WeakMap,ou=new WeakMap,oc=new WeakMap,oh=new WeakSet,om=function(e){if("mouse"!==e.pointerType&&e.timeStamp-t$(this,on)<250)return;tK(this,oE,of).call(this),clearTimeout(t$(this,oo));let t=this.hasAttribute(tX);([this,this.media].includes(e.target)||t)&&tK(this,oy,o_).call(this)},op=new WeakSet,ov=function(e){if("touch"===e.pointerType){let t=!this.hasAttribute(tZ);[this,this.media].includes(e.target)&&t?tK(this,ob,og).call(this):tK(this,oy,o_).call(this)}else e.composedPath().some(e=>["media-play-button","media-fullscreen-button"].includes(null==e?void 0:e.localName))&&tK(this,oy,o_).call(this)},ob=new WeakSet,og=function(){if(0>t$(this,ol)||this.hasAttribute(tZ))return;this.setAttribute(tZ,"");let e=new tc.CustomEvent(eF.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(e)},oE=new WeakSet,of=function(){if(!this.hasAttribute(tZ))return;this.removeAttribute(tZ);let e=new tc.CustomEvent(eF.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(e)},oy=new WeakSet,o_=function(){tK(this,oE,of).call(this),clearTimeout(t$(this,oo));let e=parseInt(this.autohide);e<0||tq(this,oo,setTimeout(()=>{tK(this,ob,og).call(this)},1e3*e))},oT=new WeakMap,ok=new WeakMap,t1.shadowRootOptions={mode:"open"},t1.getTemplateHTML=function(e){return`
    <style>
      
      :host([${eK.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
        overflow: hidden;
      }

      :host(:not([${tF}])) [part~=layer]:not([part~=media-layer]) {
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

      
      :host([${tF}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${tF}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${tF}])[${tj}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${tF}])[${tj}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${tF}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${tF}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${tF}])) media-gesture-receiver[slot=gestures-chrome] {
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

      
      :host(:not([${tF}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${tQ}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${tZ}]:not([${eK.MEDIA_PAUSED}]):not([${eK.MEDIA_IS_AIRPLAYING}]):not([${eK.MEDIA_IS_CASTING}]):not([${tF}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${tQ}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${tZ}]:not([${tQ}]):not([${eK.MEDIA_PAUSED}]):not([${eK.MEDIA_IS_CASTING}]):not([${tF}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${tZ}][${tX}]:not([${tQ}]):not([${eK.MEDIA_PAUSED}]):not([${eK.MEDIA_IS_CASTING}]):not([${tF}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      :host(:not([${tF}])[${eK.MEDIA_HAS_PLAYED}]) slot[name=poster] {
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
        <template shadowrootmode="${tH.shadowRootOptions.mode}">
          ${tH.getTemplateHTML({})}
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
  `},tc.customElements.get("media-container")||tc.customElements.define("media-container",t1);var t2=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},t3=(e,t,i)=>(t2(e,t,"read from private field"),i?i.call(e):t.get(e)),t4=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},t5=(e,t,i,a)=>(t2(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class t9{constructor(e,t,{defaultValue:i}={defaultValue:void 0}){t4(this,oS),t4(this,oA,void 0),t4(this,ow,void 0),t4(this,oR,void 0),t4(this,oI,new Set),t5(this,oA,e),t5(this,ow,t),t5(this,oR,new Set(i))}[Symbol.iterator](){return t3(this,oS,oC).values()}get length(){return t3(this,oS,oC).size}get value(){var e;return null!=(e=[...t3(this,oS,oC)].join(" "))?e:""}set value(e){var t;e!==this.value&&(t5(this,oI,new Set),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return[...t3(this,oS,oC)][e]}values(){return t3(this,oS,oC).values()}forEach(e,t){t3(this,oS,oC).forEach(e,t)}add(...e){var t,i;e.forEach(e=>t3(this,oI).add(e)),(""!==this.value||(null==(t=t3(this,oA))?void 0:t.hasAttribute(`${t3(this,ow)}`)))&&(null==(i=t3(this,oA))||i.setAttribute(`${t3(this,ow)}`,`${this.value}`))}remove(...e){var t;e.forEach(e=>t3(this,oI).delete(e)),null==(t=t3(this,oA))||t.setAttribute(`${t3(this,ow)}`,`${this.value}`)}contains(e){return t3(this,oS,oC).has(e)}toggle(e,t){if(void 0!==t)if(t)return this.add(e),!0;else return this.remove(e),!1;return this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){return this.remove(e),this.add(t),e===t}}oA=new WeakMap,ow=new WeakMap,oR=new WeakMap,oI=new WeakMap,oS=new WeakSet,oC=function(){return t3(this,oI).size?t3(this,oI):t3(this,oR)};let t8=(e="")=>{let[t,i,a]=e.split(":");return{kind:"cc"===t?ej:eG,language:i,label:a?decodeURIComponent(a):void 0}},t6=(e="",t={})=>((e="")=>e.split(/\s+/))(e).map(e=>{let i=t8(e);return{...t,...i}}),t7=e=>e?Array.isArray(e)?e.map(e=>"string"==typeof e?t8(e):e):"string"==typeof e?t6(e):[e]:[],ie=({kind:e,label:t,language:i}={kind:"subtitles"})=>t?`${"captions"===e?"cc":"sb"}:${i}:${encodeURIComponent(t)}`:i,it=(e=[])=>Array.prototype.map.call(e,ie).join(" "),ii=e=>{let t=Object.entries(e).map(([e,t])=>i=>i[e]===t);return e=>t.every(t=>t(e))},ia=(e,t=[],i=[])=>{let a=t7(i).map(ii);Array.from(t).filter(e=>a.some(t=>t(e))).forEach(t=>{t.mode=e})},ir=(e,t=()=>!0)=>{if(!(null==e?void 0:e.textTracks))return[];let i="function"==typeof t?t:ii(t);return Array.from(e.textTracks).filter(i)},is=e=>{var t;return!!(null==(t=e.mediaSubtitlesShowing)?void 0:t.length)||e.hasAttribute(eK.MEDIA_SUBTITLES_SHOWING)},io="exitFullscreen"in th?"exitFullscreen":"webkitExitFullscreen"in th?"webkitExitFullscreen":"webkitCancelFullScreen"in th?"webkitCancelFullScreen":void 0,il="fullscreenElement"in th?"fullscreenElement":"webkitFullscreenElement"in th?"webkitFullscreenElement":void 0,id="fullscreenEnabled"in th?"fullscreenEnabled":"webkitFullscreenEnabled"in th?"webkitFullscreenEnabled":void 0,iu=()=>{var e;return r||(r=null==(e=null==th?void 0:th.createElement)?void 0:e.call(th,"video"))},ic=async(e=iu())=>{if(!e)return!1;let t=e.volume;e.volume=t/2+.1;let i=new AbortController,a=await Promise.race([ih(e,i.signal),im(e,t)]);return i.abort(),a},ih=(e,t)=>new Promise(i=>{e.addEventListener("volumechange",()=>i(!0),{signal:t})}),im=async(e,t)=>{for(let i=0;i<10;i++){if(e.volume===t)return!1;await e9(10)}return e.volume!==t},ip=/.*Version\/.*Safari\/.*/.test(tc.navigator.userAgent),iv=(e=iu())=>(!tc.matchMedia("(display-mode: standalone)").matches||!ip)&&"function"==typeof(null==e?void 0:e.requestPictureInPicture),ib=(e=iu())=>(e=>{let{documentElement:t,media:i}=e;return!!(null==t?void 0:t[id])||i&&"webkitSupportsFullscreen"in i})({documentElement:th,media:e}),ig=ib(),iE=iv(),iy=!!tc.WebKitPlaybackTargetAvailabilityEvent,i_=!!tc.chrome,iT=e=>ir(e.media,e=>[eG,ej].includes(e.kind)).sort((e,t)=>e.kind>=t.kind?1:-1),ik=e=>ir(e.media,e=>e.mode===eQ&&[eG,ej].includes(e.kind)),iA=(e,t)=>{let i=iT(e),a=ik(e),r=!!a.length;if(i.length){if(!1===t||r&&!0!==t)ia(ez,i,a);else if(!0===t||!r&&!1!==t){let t=i[0],{options:r}=e;if(!(null==r?void 0:r.noSubtitlesLangPref)){let e=tc.localStorage.getItem("media-chrome-pref-subtitles-lang"),a=e?[e,...tc.navigator.languages]:tc.navigator.languages,r=i.filter(e=>a.some(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))).sort((e,t)=>a.findIndex(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))-a.findIndex(e=>t.language.toLowerCase().startsWith(e.split("-")[0])));r[0]&&(t=r[0])}let{language:n,label:s,kind:o}=t;ia(ez,i,a),ia(eQ,i,[{language:n,label:s,kind:o}])}}},iw=(e,t)=>e===t||null!=e&&null!=t&&typeof e==typeof t&&(!!("number"==typeof e&&Number.isNaN(e)&&Number.isNaN(t))||"object"==typeof e&&(Array.isArray(e)?iR(e,t):Object.entries(e).every(([e,i])=>e in t&&iw(i,t[e])))),iR=(e,t)=>{let i=Array.isArray(e),a=Array.isArray(t);return i===a&&(!i&&!a||e.length===t.length&&e.every((e,i)=>iw(e,t[i])))},iI=Object.values(eJ),iS=ic().then(e=>n=e),iC=async(...e)=>{await Promise.all(e.filter(e=>e).map(async e=>{if(!("localName"in e&&e instanceof tc.HTMLElement))return;let t=e.localName;if(!t.includes("-"))return;let i=tc.customElements.get(t);i&&e instanceof i||(await tc.customElements.whenDefined(t),tc.customElements.upgrade(e))}))},iL=new tc.DOMParser,iM={mediaError:{get(e,t){let{media:i}=e;if((null==t?void 0:t.type)!=="playing")return null==i?void 0:i.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(e,t){var i;let{media:a}=e;if((null==t?void 0:t.type)!=="playing")return null==(i=null==a?void 0:a.error)?void 0:i.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(e,t){var i,a;let{media:r}=e;if((null==t?void 0:t.type)!=="playing")return null!=(a=null==(i=null==r?void 0:r.error)?void 0:i.message)?a:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoWidth)?t:0},mediaEvents:["resize"]},mediaHeight:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoHeight)?t:0},mediaEvents:["resize"]},mediaPaused:{get(e){var t;let{media:i}=e;return null==(t=null==i?void 0:i.paused)||t},set(e,t){var i;let{media:a}=t;a&&(e?a.pause():null==(i=a.play())||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(e,t){let{media:i}=e;return!!i&&(t?"playing"===t.type:!i.paused)},mediaEvents:["playing","emptied"]},mediaEnded:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.ended)&&t},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.playbackRate)?t:1},set(e,t){let{media:i}=t;!i||Number.isFinite(+e)&&(i.playbackRate=+e)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.muted)&&t},set(e,t){let{media:i,options:{noMutedPref:a}={}}=t;if(i){i.muted=e;try{let t=null!==tc.localStorage.getItem("media-chrome-pref-muted"),r=i.hasAttribute("muted");if(a){t&&tc.localStorage.removeItem("media-chrome-pref-muted");return}if(r&&!t)return;tc.localStorage.setItem("media-chrome-pref-muted",e?"true":"false")}catch(e){console.debug("Error setting muted pref",e)}}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noMutedPref:i}}=t,{media:a}=t;if(a&&!a.muted&&!i)try{let i="true"===tc.localStorage.getItem("media-chrome-pref-muted");iM.mediaMuted.set(i,t),e(i)}catch(e){console.debug("Error getting muted pref",e)}}]},mediaLoop:{get(e){let{media:t}=e;return null==t?void 0:t.loop},set(e,t){let{media:i}=t;i&&(i.loop=e)},mediaEvents:["medialooprequest"]},mediaVolume:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.volume)?t:1},set(e,t){let{media:i,options:{noVolumePref:a}={}}=t;if(i){try{null==e?tc.localStorage.removeItem("media-chrome-pref-volume"):i.hasAttribute("muted")||a||tc.localStorage.setItem("media-chrome-pref-volume",e.toString())}catch(e){console.debug("Error setting volume pref",e)}Number.isFinite(+e)&&(i.volume=+e)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noVolumePref:i}}=t;if(!i)try{let{media:i}=t;if(!i)return;let a=tc.localStorage.getItem("media-chrome-pref-volume");if(null==a)return;iM.mediaVolume.set(+a,t),e(+a)}catch(e){console.debug("Error getting volume pref",e)}}]},mediaVolumeLevel:{get(e){let{media:t}=e;return void 0===(null==t?void 0:t.volume)?"high":t.muted||0===t.volume?"off":t.volume<.5?"low":t.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.currentTime)?t:0},set(e,t){let{media:i}=t;i&&e4(e)&&(i.currentTime=e)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(e){let{media:t,options:{defaultDuration:i}={}}=e;return i&&(!t||!t.duration||Number.isNaN(t.duration)||!Number.isFinite(t.duration))?i:Number.isFinite(null==t?void 0:t.duration)?t.duration:NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(e){let{media:t}=e;return(null==t?void 0:t.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(e){var t;let{media:i}=e;if(!(null==(t=null==i?void 0:i.seekable)?void 0:t.length))return;let a=i.seekable.start(0),r=i.seekable.end(i.seekable.length-1);if(a||r)return[Number(a.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(e){var t;let{media:i}=e,a=null!=(t=null==i?void 0:i.buffered)?t:[];return Array.from(a).map((e,t)=>[Number(a.start(t).toFixed(3)),Number(a.end(t).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(e){let{media:t,options:{defaultStreamType:i}={}}=e,a=[eJ.LIVE,eJ.ON_DEMAND].includes(i)?i:void 0;if(!t)return a;let{streamType:r}=t;if(iI.includes(r))return r===eJ.UNKNOWN?a:r;let n=t.duration;return n===1/0?eJ.LIVE:Number.isFinite(n)?eJ.ON_DEMAND:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(e){let{media:t}=e;if(!t)return NaN;let{targetLiveWindow:i}=t,a=iM.mediaStreamType.get(e);return(null==i||Number.isNaN(i))&&a===eJ.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(e){let{media:t,options:{liveEdgeOffset:i=10}={}}=e;if(!t)return!1;if("number"==typeof t.liveEdgeStart)return!Number.isNaN(t.liveEdgeStart)&&t.currentTime>=t.liveEdgeStart;if(iM.mediaStreamType.get(e)!==eJ.LIVE)return!1;let a=t.seekable;if(!a)return!0;if(!a.length)return!1;let r=a.end(a.length-1)-i;return t.currentTime>=r},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get:e=>iT(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get:e=>ik(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i,a;let{media:r,options:n}=t;if(!r)return;let s=e=>{var i;n.defaultSubtitles&&(e&&![ej,eG].includes(null==(i=null==e?void 0:e.track)?void 0:i.kind)||iA(t,!0))};return r.addEventListener("loadstart",s),null==(i=r.textTracks)||i.addEventListener("addtrack",s),null==(a=r.textTracks)||a.addEventListener("removetrack",s),()=>{var e,t;r.removeEventListener("loadstart",s),null==(e=r.textTracks)||e.removeEventListener("addtrack",s),null==(t=r.textTracks)||t.removeEventListener("removetrack",s)}}]},mediaChaptersCues:{get(e){var t;let{media:i}=e;if(!i)return[];let[a]=ir(i,{kind:"chapters"});return Array.from(null!=(t=null==a?void 0:a.cues)?t:[]).map(({text:e,startTime:t,endTime:i})=>({text:e&&iL.parseFromString(e,"text/html").body.textContent||e,startTime:t,endTime:i}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(!a)return;let r=a.querySelector('track[kind="chapters"][default][src]'),n=null==(i=a.shadowRoot)?void 0:i.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return null==r||r.addEventListener("load",e),null==n||n.addEventListener("load",e),()=>{null==r||r.removeEventListener("load",e),null==n||n.removeEventListener("load",e)}}]},mediaIsPip:{get(e){var t,i;let{media:a,documentElement:r}=e;if(!a||!r||!r.pictureInPictureElement)return!1;if(r.pictureInPictureElement===a)return!0;if(r.pictureInPictureElement instanceof HTMLMediaElement)return!!(null==(t=a.localName)?void 0:t.includes("-"))&&tk(a,r.pictureInPictureElement);if(r.pictureInPictureElement.localName.includes("-")){let e=r.pictureInPictureElement.shadowRoot;for(;null==e?void 0:e.pictureInPictureElement;){if(e.pictureInPictureElement===a)return!0;e=null==(i=e.pictureInPictureElement)?void 0:i.shadowRoot}}return!1},set(e,t){let{media:i}=t;if(i)if(e){if(!th.pictureInPictureEnabled)return void console.warn("MediaChrome: Picture-in-picture is not enabled");if(!i.requestPictureInPicture)return void console.warn("MediaChrome: The current media does not support picture-in-picture");let e=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(t=>{if(11===t.code){if(!i.src)return void console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");if(0===i.readyState&&"none"===i.preload){let t=()=>{i.removeEventListener("loadedmetadata",a),i.preload="none"},a=()=>{i.requestPictureInPicture().catch(e),t()};i.addEventListener("loadedmetadata",a),i.preload="metadata",setTimeout(()=>{0===i.readyState&&e(),t()},1e3)}else throw t}else throw t})}else th.pictureInPictureElement&&th.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.videoRenditions)?t:[]].map(e=>({...e}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(e){var t,i,a;let{media:r}=e;return null==(a=null==(i=null==r?void 0:r.videoRenditions)?void 0:i[null==(t=r.videoRenditions)?void 0:t.selectedIndex])?void 0:a.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.videoRenditions))return void console.warn("MediaController: Rendition selection not supported by this media.");let a=Array.prototype.findIndex.call(i.videoRenditions,t=>t.id==e);i.videoRenditions.selectedIndex!=a&&(i.videoRenditions.selectedIndex=a)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.audioTracks)?t:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(e){var t,i;let{media:a}=e;return null==(i=[...null!=(t=null==a?void 0:a.audioTracks)?t:[]].find(e=>e.enabled))?void 0:i.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.audioTracks))return void console.warn("MediaChrome: Audio track selection not supported by this media.");for(let t of i.audioTracks)t.enabled=e==t.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get:e=>(e=>{var t;let{media:i,documentElement:a,fullscreenElement:r=i}=e;if(!i||!a)return!1;let n=(e=>{let{documentElement:t,media:i}=e,a=null==t?void 0:t[il];return!a&&"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i&&i.webkitDisplayingFullscreen&&"fullscreen"===i.webkitPresentationMode?i:a})(e);if(!n)return!1;if(n===r||n===i)return!0;if(n.localName.includes("-")){let e=n.shadowRoot;if(!(il in e))return tk(n,r);for(;null==e?void 0:e[il];){if(e[il]===r)return!0;e=null==(t=e[il])?void 0:t.shadowRoot}}return!1})(e),set(e,t,i){var a,r;e?((e=>{var t;let{media:i,fullscreenElement:a}=e;try{let e=a&&"requestFullscreen"in a?"requestFullscreen":a&&"webkitRequestFullScreen"in a?"webkitRequestFullScreen":void 0;if(e){let i=null==(t=a[e])?void 0:t.call(a);if(i instanceof Promise)return i.catch(()=>{})}else(null==i?void 0:i.webkitEnterFullscreen)?i.webkitEnterFullscreen():(null==i?void 0:i.requestFullscreen)&&i.requestFullscreen()}catch(e){console.error(e)}})(t),!i.detail||(null==(a=t.media)?void 0:a.inert)||null==(r=t.media)||r.focus()):(e=>{var t;let{documentElement:i}=e;if(io){let e=null==(t=null==i?void 0:i[io])?void 0:t.call(i);if(e instanceof Promise)return e.catch(()=>{})}})(t)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(e){var t;let{media:i}=e;return!!(null==i?void 0:i.remote)&&(null==(t=i.remote)?void 0:t.state)!=="disconnected"&&!!i.remote.state},set(e,t){var i,a;let{media:r}=t;if(r&&(!e||(null==(i=r.remote)?void 0:i.state)==="disconnected")&&(e||(null==(a=r.remote)?void 0:a.state)==="connected")){if("function"!=typeof r.remote.prompt)return void console.warn("MediaChrome: Casting is not supported in this environment");r.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get:()=>!1,set(e,t){let{media:i}=t;if(i){if(!(i.webkitShowPlaybackTargetPicker&&tc.WebKitPlaybackTargetAvailabilityEvent))return void console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(e){let{media:t}=e;if(!ig||!ib(t))return eX}},mediaPipUnavailable:{get(e){let{media:t}=e;return iE&&iv(t)?(null==t?void 0:t.disablePictureInPicture)?eZ:void 0:eX}},mediaVolumeUnavailable:{get(e){let{media:t}=e;if(!1===n||(null==t?void 0:t.volume)==void 0)return eX},stateOwnersUpdateHandlers:[e=>{null==n&&iS.then(t=>e(t?void 0:eX))}]},mediaCastUnavailable:{get(e,{availability:t="not-available"}={}){var i;let{media:a}=e;return i_&&(null==(i=null==a?void 0:a.remote)?void 0:i.state)?null!=t&&"available"!==t?eZ:void 0:eX},stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaAirplayUnavailable:{get:(e,t)=>iy?(null==t?void 0:t.availability)==="not-available"?eZ:void 0:eX,mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaRenditionUnavailable:{get(e){var t;let{media:i}=e;return(null==i?void 0:i.videoRenditions)?(null==(t=i.videoRenditions)?void 0:t.length)?void 0:eZ:eX},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(e){var t,i;let{media:a}=e;return(null==a?void 0:a.audioTracks)?(null!=(i=null==(t=a.audioTracks)?void 0:t.length)?i:0)<=1?eZ:void 0:eX},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaLang:{get(e){let{options:{mediaLang:t}={}}=e;return null!=t?t:"en"}}},iD={[eB.MEDIA_PREVIEW_REQUEST](e,t,{detail:i}){var a,r,n;let s,o,{media:l}=t,d=null!=i?i:void 0;if(l&&null!=d){let[e]=ir(l,{kind:"metadata",label:"thumbnails"}),t=Array.prototype.find.call(null!=(a=null==e?void 0:e.cues)?a:[],(e,t,i)=>0===t?e.endTime>d:t===i.length-1?e.startTime<=d:e.startTime<=d&&e.endTime>d);if(t){let e=/'^(?:[a-z]+:)?\/\//i.test(t.text)||null==(r=null==l?void 0:l.querySelector('track[label="thumbnails"]'))?void 0:r.src,i=new URL(t.text,e);o=new URLSearchParams(i.hash).get("#xywh").split(",").map(e=>+e),s=i.href}}let u=e.mediaDuration.get(t),c=null==(n=e.mediaChaptersCues.get(t).find((e,t,i)=>t===i.length-1&&u===e.endTime?e.startTime<=d&&e.endTime>=d:e.startTime<=d&&e.endTime>d))?void 0:n.text;return null!=i&&null==c&&(c=""),{mediaPreviewTime:d,mediaPreviewImage:s,mediaPreviewCoords:o,mediaPreviewChapter:c}},[eB.MEDIA_PAUSE_REQUEST](e,t){e.mediaPaused.set(!0,t)},[eB.MEDIA_PLAY_REQUEST](e,t){var i,a,r,n;let s=e.mediaStreamType.get(t)===eJ.LIVE,o=!(null==(i=t.options)?void 0:i.noAutoSeekToLive),l=e.mediaTargetLiveWindow.get(t)>0;if(s&&o&&!l){let i=null==(a=e.mediaSeekable.get(t))?void 0:a[1];if(i){let a=null!=(n=null==(r=t.options)?void 0:r.seekToLiveOffset)?n:0;e.mediaCurrentTime.set(i-a,t)}}e.mediaPaused.set(!1,t)},[eB.MEDIA_PLAYBACK_RATE_REQUEST](e,t,{detail:i}){e.mediaPlaybackRate.set(i,t)},[eB.MEDIA_MUTE_REQUEST](e,t){e.mediaMuted.set(!0,t)},[eB.MEDIA_UNMUTE_REQUEST](e,t){e.mediaVolume.get(t)||e.mediaVolume.set(.25,t),e.mediaMuted.set(!1,t)},[eB.MEDIA_LOOP_REQUEST](e,t,{detail:i}){let a=!!i;return e.mediaLoop.set(a,t),{mediaLoop:a}},[eB.MEDIA_VOLUME_REQUEST](e,t,{detail:i}){i&&e.mediaMuted.get(t)&&e.mediaMuted.set(!1,t),e.mediaVolume.set(i,t)},[eB.MEDIA_SEEK_REQUEST](e,t,{detail:i}){e.mediaCurrentTime.set(i,t)},[eB.MEDIA_SEEK_TO_LIVE_REQUEST](e,t){var i,a,r;let n=null==(i=e.mediaSeekable.get(t))?void 0:i[1];if(Number.isNaN(Number(n)))return;let s=null!=(r=null==(a=t.options)?void 0:a.seekToLiveOffset)?r:0;e.mediaCurrentTime.set(n-s,t)},[eB.MEDIA_SHOW_SUBTITLES_REQUEST](e,t,{detail:i}){var a;let{options:r}=t,n=iT(t),s=t7(i),o=null==(a=s[0])?void 0:a.language;o&&!r.noSubtitlesLangPref&&tc.localStorage.setItem("media-chrome-pref-subtitles-lang",o),ia(eQ,n,s)},[eB.MEDIA_DISABLE_SUBTITLES_REQUEST](e,t,{detail:i}){ia(ez,iT(t),null!=i?i:[])},[eB.MEDIA_TOGGLE_SUBTITLES_REQUEST](e,t,{detail:i}){iA(t,i)},[eB.MEDIA_RENDITION_REQUEST](e,t,{detail:i}){e.mediaRenditionSelected.set(i,t)},[eB.MEDIA_AUDIO_TRACK_REQUEST](e,t,{detail:i}){e.mediaAudioTrackEnabled.set(i,t)},[eB.MEDIA_ENTER_PIP_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsPip.set(!0,t)},[eB.MEDIA_EXIT_PIP_REQUEST](e,t){e.mediaIsPip.set(!1,t)},[eB.MEDIA_ENTER_FULLSCREEN_REQUEST](e,t,i){e.mediaIsPip.get(t)&&e.mediaIsPip.set(!1,t),e.mediaIsFullscreen.set(!0,t,i)},[eB.MEDIA_EXIT_FULLSCREEN_REQUEST](e,t){e.mediaIsFullscreen.set(!1,t)},[eB.MEDIA_ENTER_CAST_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsCasting.set(!0,t)},[eB.MEDIA_EXIT_CAST_REQUEST](e,t){e.mediaIsCasting.set(!1,t)},[eB.MEDIA_AIRPLAY_REQUEST](e,t){e.mediaIsAirplaying.set(!0,t)}};var ix=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},iN=(e,t,i)=>(ix(e,t,"read from private field"),i?i.call(e):t.get(e)),iO=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},iP=(e,t,i,a)=>(ix(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),iU=(e,t,i)=>(ix(e,t,"access private method"),i);let iW=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Enter"," ","f","m","k","c","l","j",">","<","p"],iH="defaultsubtitles",iB="defaultstreamtype",i$="defaultduration",iV="fullscreenelement",iq="hotkeys",iK="keyboardbackwardseekoffset",iF="keyboardforwardseekoffset",iY="keyboarddownvolumestep",iG="keyboardupvolumestep",ij="keysused",iz="lang",iQ="loop",iZ="liveedgeoffset",iX="noautoseektolive",iJ="nodefaultstore",i0="nohotkeys",i1="nomutedpref",i2="nosubtitleslangpref",i3="novolumepref",i4="seektoliveoffset";class i5 extends t1{constructor(){super(),iO(this,oW),iO(this,o$),iO(this,oq),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,iO(this,oL,new t9(this,iq)),iO(this,oM,void 0),iO(this,oD,void 0),iO(this,ox,null),iO(this,oN,void 0),iO(this,oO,void 0),iO(this,oP,e=>{var t;null==(t=iN(this,oD))||t.dispatch(e)}),iO(this,oU,void 0),iO(this,oB,e=>{let{key:t,shiftKey:i}=e;i&&("/"===t||"?"===t)||iW.includes(t)?this.keyboardShortcutHandler(e):this.removeEventListener("keyup",iN(this,oB))}),this.associateElement(this);let e={};iP(this,oN,t=>{Object.entries(t).forEach(([t,i])=>{if(t in e&&e[t]===i)return;this.propagateMediaState(t,i);let a=t.toLowerCase(),r=new tc.CustomEvent(eY[a],{composed:!0,detail:i});this.dispatchEvent(r)}),e=t})}static get observedAttributes(){return super.observedAttributes.concat(i0,iq,iB,iH,i$,i1,i3,iz,iQ,iZ,i4,iX)}get mediaStore(){return iN(this,oD)}set mediaStore(e){var t,i;(iN(this,oD)&&(null==(t=iN(this,oO))||t.call(this),iP(this,oO,void 0)),iP(this,oD,e),iN(this,oD)||this.hasAttribute(iJ))?iP(this,oO,null==(i=iN(this,oD))?void 0:i.subscribe(iN(this,oN))):iU(this,oW,oH).call(this)}get fullscreenElement(){var e;return null!=(e=iN(this,oM))?e:this}set fullscreenElement(e){var t;this.hasAttribute(iV)&&this.removeAttribute(iV),iP(this,oM,e),null==(t=iN(this,oD))||t.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return tD(this,iH)}set defaultSubtitles(e){tx(this,iH,e)}get defaultStreamType(){return tN(this,iB)}set defaultStreamType(e){tO(this,iB,e)}get defaultDuration(){return tL(this,i$)}set defaultDuration(e){tM(this,i$,e)}get noHotkeys(){return tD(this,i0)}set noHotkeys(e){tx(this,i0,e)}get keysUsed(){return tN(this,ij)}set keysUsed(e){tO(this,ij,e)}get liveEdgeOffset(){return tL(this,iZ)}set liveEdgeOffset(e){tM(this,iZ,e)}get noAutoSeekToLive(){return tD(this,iX)}set noAutoSeekToLive(e){tx(this,iX,e)}get noVolumePref(){return tD(this,i3)}set noVolumePref(e){tx(this,i3,e)}get noMutedPref(){return tD(this,i1)}set noMutedPref(e){tx(this,i1,e)}get noSubtitlesLangPref(){return tD(this,i2)}set noSubtitlesLangPref(e){tx(this,i2,e)}get noDefaultStore(){return tD(this,iJ)}set noDefaultStore(e){tx(this,iJ,e)}attributeChangedCallback(e,t,i){var a,r,n,s,o,l,d,u,c,h,m,p;if(super.attributeChangedCallback(e,t,i),e===i0)i!==t&&""===i?(this.hasAttribute(iq)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):i!==t&&null===i&&this.enableHotkeys();else if(e===iq)iN(this,oL).value=i;else if(e===iH&&i!==t)null==(a=iN(this,oD))||a.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(iH)}});else if(e===iB)null==(n=iN(this,oD))||n.dispatch({type:"optionschangerequest",detail:{defaultStreamType:null!=(r=this.getAttribute(iB))?r:void 0}});else if(e===iZ&&i!==t)null==(s=iN(this,oD))||s.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(iZ)?+this.getAttribute(iZ):void 0,seekToLiveOffset:this.hasAttribute(i4)?+this.getAttribute(i4):this.hasAttribute(iZ)?+this.getAttribute(iZ):void 0}});else if(e===i4&&i!==t)null==(o=iN(this,oD))||o.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(i4)?+this.getAttribute(i4):this.hasAttribute(iZ)?+this.getAttribute(iZ):void 0}});else if(e===iX)null==(l=iN(this,oD))||l.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(iX)}});else if(e===iV){let e=i?null==(d=this.getRootNode())?void 0:d.getElementById(i):void 0;iP(this,oM,e),null==(u=iN(this,oD))||u.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}else e===iz&&i!==t?(e6=i,null==(c=iN(this,oD))||c.dispatch({type:"optionschangerequest",detail:{mediaLang:i}})):e===iQ&&i!==t?null==(h=iN(this,oD))||h.dispatch({type:eB.MEDIA_LOOP_REQUEST,detail:null!=i}):e===i3&&i!==t?null==(m=iN(this,oD))||m.dispatch({type:"optionschangerequest",detail:{noVolumePref:this.hasAttribute(i3)}}):e===i1&&i!==t&&(null==(p=iN(this,oD))||p.dispatch({type:"optionschangerequest",detail:{noMutedPref:this.hasAttribute(i1)}}))}connectedCallback(){var e,t,i;this.associateElement(this),iN(this,oD)||this.hasAttribute(iJ)||iU(this,oW,oH).call(this),null==(e=iN(this,oD))||e.dispatch({type:"documentelementchangerequest",detail:th}),null==(t=iN(this,oD))||t.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement}),super.connectedCallback(),iN(this,oD)&&!iN(this,oO)&&iP(this,oO,null==(i=iN(this,oD))?void 0:i.subscribe(iN(this,oN))),void 0!==iN(this,oU)&&iN(this,oD)&&this.media&&setTimeout(()=>{var e,t,i;(null==(t=null==(e=this.media)?void 0:e.textTracks)?void 0:t.length)&&(null==(i=iN(this,oD))||i.dispatch({type:eB.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:iN(this,oU)}))},0),this.hasAttribute(i0)?this.disableHotkeys():this.enableHotkeys()}disconnectedCallback(){var e,t,i,a,r,n;if(null==(e=super.disconnectedCallback)||e.call(this),this.disableHotkeys(),iN(this,oD)){let e=iN(this,oD).getState();iP(this,oU,!!(null==(t=e.mediaSubtitlesShowing)?void 0:t.length)),null==(i=iN(this,oD))||i.dispatch({type:"fullscreenelementchangerequest",detail:void 0}),null==(a=iN(this,oD))||a.dispatch({type:"documentelementchangerequest",detail:void 0}),null==(r=iN(this,oD))||r.dispatch({type:eB.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})}iN(this,oO)&&(null==(n=iN(this,oO))||n.call(this),iP(this,oO,void 0)),this.unassociateElement(this),iN(this,ox)&&(iN(this,ox).remove(),iP(this,ox,null))}mediaSetCallback(e){var t;super.mediaSetCallback(e),null==(t=iN(this,oD))||t.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var t;super.mediaUnsetCallback(e),null==(t=iN(this,oD))||t.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,t){ar(this.mediaStateReceivers,e,t)}associateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;if(t.has(e))return;let i=an(e,this.registerMediaStateReceiver.bind(this),this.unregisterMediaStateReceiver.bind(this));Object.values(eB).forEach(t=>{e.addEventListener(t,iN(this,oP))}),t.set(e,i)}unassociateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;t.has(e)&&(t.get(e)(),t.delete(e),Object.values(eB).forEach(t=>{e.removeEventListener(t,iN(this,oP))}))}registerMediaStateReceiver(e){if(!e)return;let t=this.mediaStateReceivers;!(t.indexOf(e)>-1)&&(t.push(e),iN(this,oD)&&Object.entries(iN(this,oD).getState()).forEach(([t,i])=>{ar([e],t,i)}))}unregisterMediaStateReceiver(e){let t=this.mediaStateReceivers,i=t.indexOf(e);i<0||t.splice(i,1)}enableHotkeys(){this.addEventListener("keydown",iU(this,o$,oV))}disableHotkeys(){this.removeEventListener("keydown",iU(this,o$,oV)),this.removeEventListener("keyup",iN(this,oB))}get hotkeys(){return iN(this,oL)}set hotkeys(e){tO(this,iq,e)}keyboardShortcutHandler(e){var t,i,a,r,n,s,o,l,d;let u,c,h,m=e.target;if(!((null!=(a=null!=(i=null==(t=m.getAttribute(ij))?void 0:t.split(" "))?i:null==m?void 0:m.keysUsed)?a:[]).map(e=>"Space"===e?" ":e).filter(Boolean).includes(e.key)||iN(this,oL).contains(`no${e.key.toLowerCase()}`)||" "===e.key&&iN(this,oL).contains("nospace"))&&!(e.shiftKey&&("/"===e.key||"?"===e.key)&&iN(this,oL).contains("noshift+/")))switch(e.key){case" ":case"k":u=iN(this,oD).getState().mediaPaused?eB.MEDIA_PLAY_REQUEST:eB.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new tc.CustomEvent(u,{composed:!0,bubbles:!0}));break;case"m":u="off"===this.mediaStore.getState().mediaVolumeLevel?eB.MEDIA_UNMUTE_REQUEST:eB.MEDIA_MUTE_REQUEST,this.dispatchEvent(new tc.CustomEvent(u,{composed:!0,bubbles:!0}));break;case"f":u=this.mediaStore.getState().mediaIsFullscreen?eB.MEDIA_EXIT_FULLSCREEN_REQUEST:eB.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new tc.CustomEvent(u,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new tc.CustomEvent(eB.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":case"j":{let e=this.hasAttribute(iK)?+this.getAttribute(iK):10;c=Math.max((null!=(r=this.mediaStore.getState().mediaCurrentTime)?r:0)-e,0),h=new tc.CustomEvent(eB.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break}case"ArrowRight":case"l":{let e=this.hasAttribute(iF)?+this.getAttribute(iF):10;c=Math.max((null!=(n=this.mediaStore.getState().mediaCurrentTime)?n:0)+e,0),h=new tc.CustomEvent(eB.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break}case"ArrowUp":{let e=this.hasAttribute(iG)?+this.getAttribute(iG):.025;c=Math.min((null!=(s=this.mediaStore.getState().mediaVolume)?s:1)+e,1),h=new tc.CustomEvent(eB.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break}case"ArrowDown":{let e=this.hasAttribute(iY)?+this.getAttribute(iY):.025;c=Math.max((null!=(o=this.mediaStore.getState().mediaVolume)?o:1)-e,0),h=new tc.CustomEvent(eB.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break}case"<":c=Math.max((null!=(l=this.mediaStore.getState().mediaPlaybackRate)?l:1)-.25,.25).toFixed(2),h=new tc.CustomEvent(eB.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break;case">":c=Math.min((null!=(d=this.mediaStore.getState().mediaPlaybackRate)?d:1)+.25,2).toFixed(2),h=new tc.CustomEvent(eB.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break;case"/":case"?":e.shiftKey&&iU(this,oq,oK).call(this);break;case"p":u=this.mediaStore.getState().mediaIsPip?eB.MEDIA_EXIT_PIP_REQUEST:eB.MEDIA_ENTER_PIP_REQUEST,h=new tc.CustomEvent(u,{composed:!0,bubbles:!0}),this.dispatchEvent(h)}}}oL=new WeakMap,oM=new WeakMap,oD=new WeakMap,ox=new WeakMap,oN=new WeakMap,oO=new WeakMap,oP=new WeakMap,oU=new WeakMap,oW=new WeakSet,oH=function(){var e;this.mediaStore=(({media:e,fullscreenElement:t,documentElement:i,stateMediator:a=iM,requestMap:r=iD,options:n={},monitorStateOwnersOnlyWithSubscriptions:s=!0})=>{let o,l=[],d={options:{...n}},u=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0}),c=e=>{void 0==e||iw(e,u)||(u=Object.freeze({...u,...e}),l.forEach(e=>e(u)))},h=()=>{c(Object.entries(a).reduce((e,[t,{get:i}])=>(e[t]=i(d),e),{}))},m={},p=async(e,t)=>{var i,r,n,u,p,v,b,g,E,f,y,T,k,A,w,R;let I=!!o;if(o={...d,...null!=o?o:{},...e},I)return;await iC(...Object.values(e));let S=l.length>0&&0===t&&s,C=d.media!==o.media,L=(null==(i=d.media)?void 0:i.textTracks)!==(null==(r=o.media)?void 0:r.textTracks),M=(null==(n=d.media)?void 0:n.videoRenditions)!==(null==(u=o.media)?void 0:u.videoRenditions),D=(null==(p=d.media)?void 0:p.audioTracks)!==(null==(v=o.media)?void 0:v.audioTracks),x=(null==(b=d.media)?void 0:b.remote)!==(null==(g=o.media)?void 0:g.remote),N=d.documentElement!==o.documentElement,O=!!d.media&&(C||S),P=!!(null==(E=d.media)?void 0:E.textTracks)&&(L||S),U=!!(null==(f=d.media)?void 0:f.videoRenditions)&&(M||S),W=!!(null==(y=d.media)?void 0:y.audioTracks)&&(D||S),H=!!(null==(T=d.media)?void 0:T.remote)&&(x||S),B=!!d.documentElement&&(N||S),$=O||P||U||W||H||B,V=0===l.length&&1===t&&s,q=!!o.media&&(C||V),K=!!(null==(k=o.media)?void 0:k.textTracks)&&(L||V),F=!!(null==(A=o.media)?void 0:A.videoRenditions)&&(M||V),Y=!!(null==(w=o.media)?void 0:w.audioTracks)&&(D||V),G=!!(null==(R=o.media)?void 0:R.remote)&&(x||V),j=!!o.documentElement&&(N||V),z=q||K||F||Y||G||j;if(!($||z)){Object.entries(o).forEach(([e,t])=>{d[e]=t}),h(),o=void 0;return}Object.entries(a).forEach(([e,{get:t,mediaEvents:i=[],textTracksEvents:a=[],videoRenditionsEvents:r=[],audioTracksEvents:n=[],remoteEvents:s=[],rootEvents:l=[],stateOwnersUpdateHandlers:u=[]}])=>{let h;m[e]||(m[e]={});let p=i=>{c({[e]:t(d,i)})};h=m[e].mediaEvents,i.forEach(t=>{h&&O&&(d.media.removeEventListener(t,h),m[e].mediaEvents=void 0),q&&(o.media.addEventListener(t,p),m[e].mediaEvents=p)}),h=m[e].textTracksEvents,a.forEach(t=>{var i,a;h&&P&&(null==(i=d.media.textTracks)||i.removeEventListener(t,h),m[e].textTracksEvents=void 0),K&&(null==(a=o.media.textTracks)||a.addEventListener(t,p),m[e].textTracksEvents=p)}),h=m[e].videoRenditionsEvents,r.forEach(t=>{var i,a;h&&U&&(null==(i=d.media.videoRenditions)||i.removeEventListener(t,h),m[e].videoRenditionsEvents=void 0),F&&(null==(a=o.media.videoRenditions)||a.addEventListener(t,p),m[e].videoRenditionsEvents=p)}),h=m[e].audioTracksEvents,n.forEach(t=>{var i,a;h&&W&&(null==(i=d.media.audioTracks)||i.removeEventListener(t,h),m[e].audioTracksEvents=void 0),Y&&(null==(a=o.media.audioTracks)||a.addEventListener(t,p),m[e].audioTracksEvents=p)}),h=m[e].remoteEvents,s.forEach(t=>{var i,a;h&&H&&(null==(i=d.media.remote)||i.removeEventListener(t,h),m[e].remoteEvents=void 0),G&&(null==(a=o.media.remote)||a.addEventListener(t,p),m[e].remoteEvents=p)}),h=m[e].rootEvents,l.forEach(t=>{h&&B&&(d.documentElement.removeEventListener(t,h),m[e].rootEvents=void 0),j&&(o.documentElement.addEventListener(t,p),m[e].rootEvents=p)});let v=m[e].stateOwnersUpdateHandlers;if(v&&$&&(Array.isArray(v)?v:[v]).forEach(e=>{"function"==typeof e&&e()}),z){let t=u.map(e=>e(p,o)).filter(e=>"function"==typeof e);m[e].stateOwnersUpdateHandlers=1===t.length?t[0]:t}else $&&(m[e].stateOwnersUpdateHandlers=void 0)}),Object.entries(o).forEach(([e,t])=>{d[e]=t}),h(),o=void 0};return p({media:e,fullscreenElement:t,documentElement:i,options:n}),{dispatch(e){let{type:t,detail:i}=e;r[t]&&null==u.mediaErrorCode?c(r[t](a,d,e)):"mediaelementchangerequest"===t?p({media:i}):"fullscreenelementchangerequest"===t?p({fullscreenElement:i}):"documentelementchangerequest"===t?p({documentElement:i}):"optionschangerequest"===t&&(Object.entries(null!=i?i:{}).forEach(([e,t])=>{d.options[e]=t}),h())},getState:()=>u,subscribe:e=>(p({},l.length+1),l.push(e),e(u),()=>{let t=l.indexOf(e);t>=0&&(p({},l.length-1),l.splice(t,1))})}})({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(iH),defaultDuration:this.hasAttribute(i$)?+this.getAttribute(i$):void 0,defaultStreamType:null!=(e=this.getAttribute(iB))?e:void 0,liveEdgeOffset:this.hasAttribute(iZ)?+this.getAttribute(iZ):void 0,seekToLiveOffset:this.hasAttribute(i4)?+this.getAttribute(i4):this.hasAttribute(iZ)?+this.getAttribute(iZ):void 0,noAutoSeekToLive:this.hasAttribute(iX),noVolumePref:this.hasAttribute(i3),noMutedPref:this.hasAttribute(i1),noSubtitlesLangPref:this.hasAttribute(i2)}})},oB=new WeakMap,o$=new WeakSet,oV=function(e){var t;let{metaKey:i,altKey:a,key:r,shiftKey:n}=e,s=n&&("/"===r||"?"===r);if(s&&(null==(t=iN(this,ox))?void 0:t.open)||i||a||!s&&!iW.includes(r))return void this.removeEventListener("keyup",iN(this,oB));let o=e.target,l=o instanceof HTMLElement&&("media-volume-range"===o.tagName.toLowerCase()||"media-time-range"===o.tagName.toLowerCase());![" ","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(r)||iN(this,oL).contains(`no${r.toLowerCase()}`)||" "===r&&iN(this,oL).contains("nospace")||l||e.preventDefault(),this.addEventListener("keyup",iN(this,oB),{once:!0})},oq=new WeakSet,oK=function(){iN(this,ox)||(iP(this,ox,th.createElement("media-keyboard-shortcuts-dialog")),this.appendChild(iN(this,ox))),iN(this,ox).open=!0};let i9=Object.values(eK),i8=Object.values(eV),i6=e=>{var t,i,a,r;let{observedAttributes:n}=e.constructor;!n&&(null==(t=e.nodeName)?void 0:t.includes("-"))&&(tc.customElements.upgrade(e),{observedAttributes:n}=e.constructor);let s=null==(r=null==(a=null==(i=null==e?void 0:e.getAttribute)?void 0:i.call(e,e$.MEDIA_CHROME_ATTRIBUTES))?void 0:a.split)?void 0:r.call(a,/\s+/);return Array.isArray(n||s)?(n||s).filter(e=>i9.includes(e)):[]},i7=e=>{var t,i;return(null==(t=e.nodeName)?void 0:t.includes("-"))&&tc.customElements.get(null==(i=e.nodeName)?void 0:i.toLowerCase())&&!(e instanceof tc.customElements.get(e.nodeName.toLowerCase()))&&tc.customElements.upgrade(e),i8.some(t=>t in e)||!!i6(e).length},ae=e=>{var t;return null==(t=null==e?void 0:e.join)?void 0:t.call(e,":")},at={[eK.MEDIA_SUBTITLES_LIST]:it,[eK.MEDIA_SUBTITLES_SHOWING]:it,[eK.MEDIA_SEEKABLE]:ae,[eK.MEDIA_BUFFERED]:e=>null==e?void 0:e.map(ae).join(" "),[eK.MEDIA_PREVIEW_COORDS]:e=>null==e?void 0:e.join(" "),[eK.MEDIA_RENDITION_LIST]:function(e){return null==e?void 0:e.map(e0).join(" ")},[eK.MEDIA_AUDIO_TRACK_LIST]:function(e){return null==e?void 0:e.map(e2).join(" ")}},ai=async(e,t,i)=>{var a,r;if(e.isConnected||await e9(0),"boolean"==typeof i||null==i)return tx(e,t,i);if("number"==typeof i)return tM(e,t,i);if("string"==typeof i)return tO(e,t,i);if(Array.isArray(i)&&!i.length)return e.removeAttribute(t);let n=null!=(r=null==(a=at[t])?void 0:a.call(at,i))?r:i;return e.setAttribute(t,n)},aa=(e,t)=>{var i;if(null==(i=e.closest)?void 0:i.call(e,'*[slot="media"]'))return;let a=(e,t)=>{var i,a;i7(e)&&t(e);let{children:r=[]}=null!=e?e:{};[...r,...null!=(a=null==(i=null==e?void 0:e.shadowRoot)?void 0:i.children)?a:[]].forEach(e=>aa(e,t))},r=null==e?void 0:e.nodeName.toLowerCase();r.includes("-")&&!i7(e)?tc.customElements.whenDefined(r).then(()=>{a(e,t)}):a(e,t)},ar=(e,t,i)=>{e.forEach(e=>{if(t in e){e[t]=i;return}let a=i6(e),r=t.toLowerCase();a.includes(r)&&ai(e,r,i)})},an=(e,t,i)=>{aa(e,t);let a=e=>{var i;t(null!=(i=null==e?void 0:e.composedPath()[0])?i:e.target)},r=e=>{var t;i(null!=(t=null==e?void 0:e.composedPath()[0])?t:e.target)};e.addEventListener(eB.REGISTER_MEDIA_STATE_RECEIVER,a),e.addEventListener(eB.UNREGISTER_MEDIA_STATE_RECEIVER,r);let n=[],s=e=>{let a=e.target;"media"!==a.name&&(n.forEach(e=>aa(e,i)),(n=[...a.assignedElements({flatten:!0})]).forEach(e=>aa(e,t)))};e.addEventListener("slotchange",s);let o=new MutationObserver(e=>{e.forEach(e=>{let{addedNodes:a=[],removedNodes:r=[],type:n,target:s,attributeName:o}=e;"childList"===n?(Array.prototype.forEach.call(a,e=>aa(e,t)),Array.prototype.forEach.call(r,e=>aa(e,i))):"attributes"===n&&o===e$.MEDIA_CHROME_ATTRIBUTES&&(i7(s)?t(s):i(s))})});return o.observe(e,{childList:!0,attributes:!0,subtree:!0}),()=>{aa(e,i),e.removeEventListener("slotchange",s),o.disconnect(),e.removeEventListener(eB.REGISTER_MEDIA_STATE_RECEIVER,a),e.removeEventListener(eB.UNREGISTER_MEDIA_STATE_RECEIVER,r)}};tc.customElements.get("media-controller")||tc.customElements.define("media-controller",i5);let as="placement",ao="bounds";class al extends tc.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var e;if(!tI(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;let t=this.placement;if("left"===t||"right"===t)return void this.style.removeProperty("--media-tooltip-offset-x");let i=getComputedStyle(this),a=null!=(e=tA(this,"#"+this.bounds))?e:tf(this);if(!a)return;let{x:r,width:n}=a.getBoundingClientRect(),{x:s,width:o}=this.getBoundingClientRect(),l=i.getPropertyValue("--media-tooltip-offset-x"),d=l?parseFloat(l.replace("px","")):0,u=i.getPropertyValue("--media-tooltip-container-margin"),c=u?parseFloat(u.replace("px","")):0,h=s-r+d-c,m=s+o-(r+n)+d+c;h<0?this.style.setProperty("--media-tooltip-offset-x",`${h}px`):m>0?this.style.setProperty("--media-tooltip-offset-x",`${m}px`):this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=tE(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){const e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[as,ao]}get placement(){return tN(this,as)}set placement(e){tO(this,as,e)}get bounds(){return tN(this,ao)}set bounds(e){tO(this,ao,e)}}al.shadowRootOptions={mode:"open"},al.getTemplateHTML=function(e){return`
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
  `},tc.customElements.get("media-tooltip")||tc.customElements.define("media-tooltip",al);var ad=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},au=(e,t,i)=>(ad(e,t,"read from private field"),i?i.call(e):t.get(e)),ac=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ah=(e,t,i,a)=>(ad(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let am="tooltipplacement",ap="disabled",av="notooltip";class ab extends tc.HTMLElement{constructor(){if(super(),ac(this,oQ),ac(this,oF,void 0),this.preventClick=!1,this.tooltipEl=null,ac(this,oY,e=>{this.preventClick||this.handleClick(e),setTimeout(au(this,oG),0)}),ac(this,oG,()=>{var e,t;null==(t=null==(e=this.tooltipEl)?void 0:e.updateXOffset)||t.call(e)}),ac(this,oj,e=>{let{key:t}=e;this.keysUsed.includes(t)?this.preventClick||this.handleClick(e):this.removeEventListener("keyup",au(this,oj))}),ac(this,oz,e=>{let{metaKey:t,altKey:i,key:a}=e;t||i||!this.keysUsed.includes(a)?this.removeEventListener("keyup",au(this,oj)):this.addEventListener("keyup",au(this,oj),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=tE(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",am,e$.MEDIA_CONTROLLER,eK.MEDIA_LANG]}enable(){this.addEventListener("click",au(this,oY)),this.addEventListener("keydown",au(this,oz)),this.tabIndex=0}disable(){this.removeEventListener("click",au(this,oY)),this.removeEventListener("keydown",au(this,oz)),this.removeEventListener("keyup",au(this,oj)),this.tabIndex=-1}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===e$.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=au(this,oF))?void 0:a.unassociateElement)||r.call(a,this),ah(this,oF,null)),i&&this.isConnected&&(ah(this,oF,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=au(this,oF))?void 0:s.associateElement)||o.call(s,this))):"disabled"===e&&i!==t?null==i?this.enable():this.disable():e===am&&this.tooltipEl&&i!==t?this.tooltipEl.placement=i:e===eK.MEDIA_LANG&&(this.shadowRoot.querySelector('slot[name="tooltip-content"]').innerHTML=this.constructor.getTooltipContentHTML()),au(this,oG).call(this)}connectedCallback(){var e,t,i;let{style:a}=tS(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");let r=this.getAttribute(e$.MEDIA_CONTROLLER);r&&(ah(this,oF,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=au(this,oF))?void 0:t.associateElement)||i.call(t,this)),tc.customElements.whenDefined("media-tooltip").then(()=>{var e,t;return(e=oQ,t=oZ,ad(this,e,"access private method"),t).call(this)})}disconnectedCallback(){var e,t;this.disable(),null==(t=null==(e=au(this,oF))?void 0:e.unassociateElement)||t.call(e,this),ah(this,oF,null),this.removeEventListener("mouseenter",au(this,oG)),this.removeEventListener("focus",au(this,oG)),this.removeEventListener("click",au(this,oY))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return tN(this,am)}set tooltipPlacement(e){tO(this,am,e)}get mediaController(){return tN(this,e$.MEDIA_CONTROLLER)}set mediaController(e){tO(this,e$.MEDIA_CONTROLLER,e)}get disabled(){return tD(this,ap)}set disabled(e){tx(this,ap,e)}get noTooltip(){return tD(this,av)}set noTooltip(e){tx(this,av,e)}handleClick(e){}}oF=new WeakMap,oY=new WeakMap,oG=new WeakMap,oj=new WeakMap,oz=new WeakMap,oQ=new WeakSet,oZ=function(){this.addEventListener("mouseenter",au(this,oG)),this.addEventListener("focus",au(this,oG)),this.addEventListener("click",au(this,oY));let e=this.tooltipPlacement;e&&this.tooltipEl&&(this.tooltipEl.placement=e)},ab.shadowRootOptions={mode:"open"},ab.getTemplateHTML=function(e,t={}){return`
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
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
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
        <template shadowrootmode="${al.shadowRootOptions.mode}">
          ${al.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(e)}
        </slot>
      </media-tooltip>
    </slot>
  `},ab.getSlotTemplateHTML=function(e,t){return`
    <slot></slot>
  `},ab.getTooltipContentHTML=function(){return""},tc.customElements.get("media-chrome-button")||tc.customElements.define("media-chrome-button",ab);let ag=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`,aE=e=>{let t=e.mediaIsAirplaying?e7("stop airplay"):e7("start airplay");e.setAttribute("aria-label",t)};class af extends ab{static get observedAttributes(){return[...super.observedAttributes,eK.MEDIA_IS_AIRPLAYING,eK.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),aE(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===eK.MEDIA_IS_AIRPLAYING&&aE(this)}get mediaIsAirplaying(){return tD(this,eK.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){tx(this,eK.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return tN(this,eK.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){tO(this,eK.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){let e=new tc.CustomEvent(eB.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}}af.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${eK.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${eK.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${eK.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${eK.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${ag}</slot>
      <slot name="exit">${ag}</slot>
    </slot>
  `},af.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${e7("start airplay")}</slot>
    <slot name="tooltip-exit">${e7("stop airplay")}</slot>
  `},tc.customElements.get("media-airplay-button")||tc.customElements.define("media-airplay-button",af);let ay=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,a_=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,aT=e=>{e.setAttribute("aria-checked",is(e).toString())};class ak extends ab{static get observedAttributes(){return[...super.observedAttributes,eK.MEDIA_SUBTITLES_LIST,eK.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","button"),this.setAttribute("aria-label",e7("closed captions")),aT(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===eK.MEDIA_SUBTITLES_SHOWING&&aT(this)}get mediaSubtitlesList(){return aA(this,eK.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){aw(this,eK.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return aA(this,eK.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){aw(this,eK.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new tc.CustomEvent(eB.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}ak.getSlotTemplateHTML=function(e){return`
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
      <slot name="on">${ay}</slot>
      <slot name="off">${a_}</slot>
    </slot>
  `},ak.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enable">${e7("Enable captions")}</slot>
    <slot name="tooltip-disable">${e7("Disable captions")}</slot>
  `};let aA=(e,t)=>{let i=e.getAttribute(t);return i?t6(i):[]},aw=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=it(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};tc.customElements.get("media-captions-button")||tc.customElements.define("media-captions-button",ak);let aR=e=>{let t=e.mediaIsCasting?e7("stop casting"):e7("start casting");e.setAttribute("aria-label",t)};class aI extends ab{static get observedAttributes(){return[...super.observedAttributes,eK.MEDIA_IS_CASTING,eK.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),aR(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===eK.MEDIA_IS_CASTING&&aR(this)}get mediaIsCasting(){return tD(this,eK.MEDIA_IS_CASTING)}set mediaIsCasting(e){tx(this,eK.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return tN(this,eK.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){tO(this,eK.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){let e=this.mediaIsCasting?eB.MEDIA_EXIT_CAST_REQUEST:eB.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new tc.CustomEvent(e,{composed:!0,bubbles:!0}))}}aI.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${eK.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${eK.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${eK.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${eK.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg></slot>
      <slot name="exit"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg></slot>
    </slot>
  `},aI.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${e7("Start casting")}</slot>
    <slot name="tooltip-exit">${e7("Stop casting")}</slot>
  `},tc.customElements.get("media-cast-button")||tc.customElements.define("media-cast-button",aI);var aS=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},aC=(e,t,i)=>(aS(e,t,"read from private field"),i?i.call(e):t.get(e)),aL=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},aM=(e,t,i,a)=>(aS(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),aD=(e,t,i)=>(aS(e,t,"access private method"),i);let ax="open";class aN extends tc.HTMLElement{constructor(){super(),aL(this,o1),aL(this,o3),aL(this,o5),aL(this,o8),aL(this,o7),aL(this,lt),aL(this,oX,!1),aL(this,oJ,null),aL(this,o0,null)}static get observedAttributes(){return[ax,"anchor"]}get open(){return tD(this,ax)}set open(e){tx(this,ax,e)}handleEvent(e){switch(e.type){case"invoke":aD(this,o8,o6).call(this,e);break;case"focusout":aD(this,o7,le).call(this,e);break;case"keydown":aD(this,lt,li).call(this,e)}}connectedCallback(){aD(this,o1,o2).call(this),this.role||(this.role="dialog"),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}disconnectedCallback(){this.removeEventListener("invoke",this),this.removeEventListener("focusout",this),this.removeEventListener("keydown",this)}attributeChangedCallback(e,t,i){aD(this,o1,o2).call(this),e===ax&&i!==t&&(this.open?aD(this,o3,o4).call(this):aD(this,o5,o9).call(this))}focus(){aM(this,oJ,tw());let e=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),t=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(e||t)return;let i=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==i||i.focus()}get keysUsed(){return["Escape","Tab"]}}oX=new WeakMap,oJ=new WeakMap,o0=new WeakMap,o1=new WeakSet,o2=function(){if(!aC(this,oX)&&(aM(this,oX,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);let e=tE(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e),queueMicrotask(()=>{let{style:e}=tS(this.shadowRoot,":host");e.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}},o3=new WeakSet,o4=function(){var e;null==(e=aC(this,o0))||e.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})},o5=new WeakSet,o9=function(){var e;null==(e=aC(this,o0))||e.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))},o8=new WeakSet,o6=function(e){aM(this,o0,e.relatedTarget),tk(this,e.relatedTarget)||(this.open=!this.open)},o7=new WeakSet,le=function(e){var t;!tk(this,e.relatedTarget)&&(null==(t=aC(this,oJ))||t.focus(),aC(this,o0)&&aC(this,o0)!==e.relatedTarget&&this.open&&(this.open=!1))},lt=new WeakSet,li=function(e){var t,i,a,r,n;let{key:s,ctrlKey:o,altKey:l,metaKey:d}=e;o||l||d||this.keysUsed.includes(s)&&(e.preventDefault(),e.stopPropagation(),"Tab"===s?(e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(r=null==(a=this.nextElementSibling)?void 0:a.focus)||r.call(a),this.blur()):"Escape"===s&&(null==(n=aC(this,oJ))||n.focus(),this.open=!1))},aN.shadowRootOptions={mode:"open"},aN.getTemplateHTML=function(e){return`
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
  `},aN.getSlotTemplateHTML=function(e){return`
    <slot id="content"></slot>
  `},tc.customElements.get("media-chrome-dialog")||tc.customElements.define("media-chrome-dialog",aN);var aO=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},aP=(e,t,i)=>(aO(e,t,"read from private field"),i?i.call(e):t.get(e)),aU=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},aW=(e,t,i,a)=>(aO(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),aH=(e,t,i)=>(aO(e,t,"access private method"),i);class aB extends tc.HTMLElement{constructor(){if(super(),aU(this,lh),aU(this,lp),aU(this,lb),aU(this,lE),aU(this,ly),aU(this,lT),aU(this,lA),aU(this,lR),aU(this,la,void 0),aU(this,lr,void 0),aU(this,ln,void 0),aU(this,ls,void 0),aU(this,lo,{}),aU(this,ll,[]),aU(this,ld,()=>{if(this.range.matches(":focus-visible")){let{style:e}=tS(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),aU(this,lu,()=>{let{style:e}=tS(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),aU(this,lc,()=>{let e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=tE(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.container=this.shadowRoot.querySelector("#container"),aW(this,ln,this.shadowRoot.querySelector("#startpoint")),aW(this,ls,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",e$.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===e$.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=aP(this,la))?void 0:a.unassociateElement)||r.call(a,this),aW(this,la,null)),i&&this.isConnected&&(aW(this,la,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=aP(this,la))?void 0:s.associateElement)||o.call(s,this))):("disabled"===e||"aria-disabled"===e&&t!==i)&&(null==i?(this.range.removeAttribute(e),aH(this,lp,lv).call(this)):(this.range.setAttribute(e,i),aH(this,lb,lg).call(this)))}connectedCallback(){var e,t,i;let{style:a}=tS(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),aP(this,lo).pointer=tS(this.shadowRoot,"#pointer"),aP(this,lo).progress=tS(this.shadowRoot,"#progress"),aP(this,lo).thumb=tS(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),aP(this,lo).activeSegment=tS(this.shadowRoot,"#segments-clipping rect:nth-child(0)");let r=this.getAttribute(e$.MEDIA_CONTROLLER);r&&(aW(this,la,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=aP(this,la))?void 0:t.associateElement)||i.call(t,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",aP(this,ld)),this.shadowRoot.addEventListener("focusout",aP(this,lu)),aH(this,lp,lv).call(this),tb(this.container,aP(this,lc))}disconnectedCallback(){var e,t;aH(this,lb,lg).call(this),null==(t=null==(e=aP(this,la))?void 0:e.unassociateElement)||t.call(e,this),aW(this,la,null),this.shadowRoot.removeEventListener("focusin",aP(this,ld)),this.shadowRoot.removeEventListener("focusout",aP(this,lu)),tg(this.container,aP(this,lc))}updatePointerBar(e){var t;null==(t=aP(this,lo).pointer)||t.style.setProperty("width",`${100*this.getPointerRatio(e)}%`)}updateBar(){var e,t;let i=100*this.range.valueAsNumber;null==(e=aP(this,lo).progress)||e.style.setProperty("width",`${i}%`),null==(t=aP(this,lo).thumb)||t.style.setProperty("left",`${i}%`)}updateSegments(e){let t=this.shadowRoot.querySelector("#segments-clipping");if(t.textContent="",this.container.classList.toggle("segments",!!(null==e?void 0:e.length)),!(null==e?void 0:e.length))return;let i=[...new Set([+this.range.min,...e.flatMap(e=>[e.start,e.end]),+this.range.max])];aW(this,ll,[...i]);let a=i.pop();for(let[e,r]of i.entries()){let[n,s]=[0===e,e===i.length-1],o=n?"calc(var(--segments-gap) / -1)":`${100*r}%`,l=s?a:i[e+1],d=`calc(${(l-r)*100}%${n||s?"":" - var(--segments-gap)"})`,u=th.createElementNS("http://www.w3.org/2000/svg","rect"),c=tC(this.shadowRoot,`#segments-clipping rect:nth-child(${e+1})`);c.style.setProperty("x",o),c.style.setProperty("width",d),t.append(u)}}getPointerRatio(e){var t,i,a,r;let n,s,o;return t=e.clientX,i=e.clientY,a=aP(this,ln).getBoundingClientRect(),n=(r=aP(this,ls).getBoundingClientRect()).x-a.x,0==(o=n*n+(s=r.y-a.y)*s)?0:Math.max(0,Math.min(1,((t-a.x)*n+(i-a.y)*s)/o))}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":aH(this,lR,lI).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":aH(this,ly,l_).call(this,e);break;case"pointerdown":aH(this,lE,lf).call(this,e);break;case"pointerup":aH(this,lT,lk).call(this);break;case"pointerleave":aH(this,lA,lw).call(this)}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}la=new WeakMap,lr=new WeakMap,ln=new WeakMap,ls=new WeakMap,lo=new WeakMap,ll=new WeakMap,ld=new WeakMap,lu=new WeakMap,lc=new WeakMap,lh=new WeakSet,lm=function(e){let t=aP(this,lo).activeSegment;if(!t)return;let i=this.getPointerRatio(e),a=aP(this,ll).findIndex((e,t,a)=>{let r=a[t+1];return null!=r&&i>=e&&i<=r}),r=`#segments-clipping rect:nth-child(${a+1})`;t.selectorText==r&&t.style.transform||(t.selectorText=r,t.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))},lp=new WeakSet,lv=function(){!this.hasAttribute("disabled")&&this.isConnected&&(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))},lb=new WeakSet,lg=function(){var e,t;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),this.removeEventListener("pointerleave",this),null==(e=tc.window)||e.removeEventListener("pointerup",this),null==(t=tc.window)||t.removeEventListener("pointermove",this)},lE=new WeakSet,lf=function(e){var t;aW(this,lr,e.composedPath().includes(this.range)),null==(t=tc.window)||t.addEventListener("pointerup",this,{once:!0})},ly=new WeakSet,l_=function(e){var t;"mouse"!==e.pointerType&&aH(this,lE,lf).call(this,e),this.addEventListener("pointerleave",this,{once:!0}),null==(t=tc.window)||t.addEventListener("pointermove",this)},lT=new WeakSet,lk=function(){var e;null==(e=tc.window)||e.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")},lA=new WeakSet,lw=function(){var e,t;this.removeEventListener("pointerleave",this),null==(e=tc.window)||e.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),null==(t=aP(this,lo).activeSegment)||t.style.removeProperty("transform")},lR=new WeakSet,lI=function(e){("pen"!==e.pointerType||0!==e.buttons)&&(this.toggleAttribute("dragging",1===e.buttons||"mouse"!==e.pointerType),this.updatePointerBar(e),aH(this,lh,lm).call(this,e),this.dragging&&("mouse"!==e.pointerType||!aP(this,lr))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(e),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))))},aB.shadowRootOptions={mode:"open"},aB.getTemplateHTML=function(e){return`
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

      /* Visible label for accessibility - positioned off-screen but technically visible (Firefox requires visible labels) */
      #range-label {
        position: absolute;
        left: -10000px;
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        pointer-events: none;
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
        <svg id="segments" aria-hidden="true"><clipPath id="segments-clipping"></clipPath></svg>
      </div>
        <input id="range" type="range" min="0" max="1" step="any" value="0">
        <label for="range" id="range-label"></label>

      ${this.getContainerTemplateHTML(e)}
    </div>
    <div id="rightgap"></div>
  `},aB.getContainerTemplateHTML=function(e){return""},tc.customElements.get("media-chrome-range")||tc.customElements.define("media-chrome-range",aB);var a$=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},aV=(e,t,i)=>(a$(e,t,"read from private field"),i?i.call(e):t.get(e)),aq=(e,t,i,a)=>(a$(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class aK extends tc.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,lS,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=tE(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[e$.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===e$.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=aV(this,lS))?void 0:a.unassociateElement)||r.call(a,this),aq(this,lS,null)),i&&this.isConnected&&(aq(this,lS,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=aV(this,lS))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(e$.MEDIA_CONTROLLER);a&&(aq(this,lS,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=aV(this,lS))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=aV(this,lS))?void 0:e.unassociateElement)||t.call(e,this),aq(this,lS,null)}}lS=new WeakMap,aK.shadowRootOptions={mode:"open"},aK.getTemplateHTML=function(e){return`
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
  `},tc.customElements.get("media-control-bar")||tc.customElements.define("media-control-bar",aK);var aF=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},aY=(e,t,i)=>(aF(e,t,"read from private field"),i?i.call(e):t.get(e)),aG=(e,t,i,a)=>(aF(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class aj extends tc.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,lC,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=tE(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[e$.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===e$.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=aY(this,lC))?void 0:a.unassociateElement)||r.call(a,this),aG(this,lC,null)),i&&this.isConnected&&(aG(this,lC,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=aY(this,lC))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let{style:a}=tS(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);let r=this.getAttribute(e$.MEDIA_CONTROLLER);r&&(aG(this,lC,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=aY(this,lC))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=aY(this,lC))?void 0:e.unassociateElement)||t.call(e,this),aG(this,lC,null)}}lC=new WeakMap,aj.shadowRootOptions={mode:"open"},aj.getTemplateHTML=function(e,t={}){return`
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
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }

      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}
  `},aj.getSlotTemplateHTML=function(e,t){return`
    <slot></slot>
  `},tc.customElements.get("media-text-display")||tc.customElements.define("media-text-display",aj);var az=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},aQ=(e,t,i)=>(az(e,t,"read from private field"),i?i.call(e):t.get(e));class aZ extends aj{constructor(){var e;super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,lL,void 0),((e,t,i,a)=>(az(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,lL,this.shadowRoot.querySelector("slot")),aQ(this,lL).textContent=ti(null!=(e=this.mediaDuration)?e:0)}static get observedAttributes(){return[...super.observedAttributes,eK.MEDIA_DURATION]}attributeChangedCallback(e,t,i){e===eK.MEDIA_DURATION&&(aQ(this,lL).textContent=ti(+i)),super.attributeChangedCallback(e,t,i)}get mediaDuration(){return tL(this,eK.MEDIA_DURATION)}set mediaDuration(e){tM(this,eK.MEDIA_DURATION,e)}}lL=new WeakMap,aZ.getSlotTemplateHTML=function(e,t){return`
    <slot>${ti(t.mediaDuration)}</slot>
  `},tc.customElements.get("media-duration-display")||tc.customElements.define("media-duration-display",aZ);let aX={2:e7("Network Error"),3:e7("Decode Error"),4:e7("Source Not Supported"),5:e7("Encryption Error")},aJ={2:e7("A network error caused the media download to fail."),3:e7("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:e7("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:e7("The media is encrypted and there are no keys to decrypt it.")},a0=e=>{var t,i;return 1===e.code?null:{title:null!=(t=aX[e.code])?t:`Error ${e.code}`,message:null!=(i=aJ[e.code])?i:e.message}};var a1=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};function a2(e){var t;let{title:i,message:a}=null!=(t=a0(e))?t:{},r="";return i&&(r+=`<slot name="error-${e.code}-title"><h3>${i}</h3></slot>`),a&&(r+=`<slot name="error-${e.code}-message"><p>${a}</p></slot>`),r}let a3=[eK.MEDIA_ERROR_CODE,eK.MEDIA_ERROR_MESSAGE];class a4 extends aN{constructor(){super(...arguments),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,lM,null)}static get observedAttributes(){return[...super.observedAttributes,...a3]}formatErrorMessage(e){return this.constructor.formatErrorMessage(e)}attributeChangedCallback(e,t,i){var a;if(super.attributeChangedCallback(e,t,i),!a3.includes(e))return;let r=null!=(a=this.mediaError)?a:{code:this.mediaErrorCode,message:this.mediaErrorMessage};if(this.open=r.code&&null!==a0(r),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(r),!this.hasAttribute("aria-label"))){let{title:e}=a0(r);e&&this.setAttribute("aria-label",e)}}get mediaError(){var e,t;return a1(this,e=lM,"read from private field"),t?t.call(this):e.get(this)}set mediaError(e){var t,i;a1(this,t=lM,"write to private field"),i?i.call(this,e):t.set(this,e)}get mediaErrorCode(){return tL(this,"mediaerrorcode")}set mediaErrorCode(e){tM(this,"mediaerrorcode",e)}get mediaErrorMessage(){return tN(this,"mediaerrormessage")}set mediaErrorMessage(e){tO(this,"mediaerrormessage",e)}}lM=new WeakMap,a4.getSlotTemplateHTML=function(e){return`
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
      ${a2({code:+e.mediaerrorcode,message:e.mediaerrormessage})}
    </slot>
  `},a4.formatErrorMessage=a2,tc.customElements.get("media-error-dialog")||tc.customElements.define("media-error-dialog",a4);var a5=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot read from private field");return i?i.call(e):t.get(e)},a9=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)};class a8 extends aN{constructor(){super(...arguments),a9(this,lD,e=>{var t;if(!this.open)return;let i=null==(t=this.shadowRoot)?void 0:t.querySelector("#content");if(!i)return;let a=e.composedPath(),r=a[0]===this||a.includes(this),n=a.includes(i);r&&!n&&(this.open=!1)}),a9(this,lx,e=>{if(!this.open)return;let t=e.shiftKey&&("/"===e.key||"?"===e.key);"Escape"!==e.key&&!t||e.ctrlKey||e.altKey||e.metaKey||(this.open=!1,e.preventDefault(),e.stopPropagation())})}connectedCallback(){super.connectedCallback(),this.open&&(this.addEventListener("click",a5(this,lD)),document.addEventListener("keydown",a5(this,lx)))}disconnectedCallback(){this.removeEventListener("click",a5(this,lD)),document.removeEventListener("keydown",a5(this,lx))}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),"open"===e&&(this.open?(this.addEventListener("click",a5(this,lD)),document.addEventListener("keydown",a5(this,lx))):(this.removeEventListener("click",a5(this,lD)),document.removeEventListener("keydown",a5(this,lx))))}}lD=new WeakMap,lx=new WeakMap,a8.getSlotTemplateHTML=function(e){let t;return`
    <style>
      :host {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        background: rgb(20 20 30 / .8);
        backdrop-filter: blur(10px);
      }

      #content {
        display: block;
        width: clamp(400px, 40vw, 700px);
        max-width: 90vw;
        text-align: left;
      }

      h2 {
        margin: 0 0 1.5rem 0;
        font-size: 1.5rem;
        font-weight: 500;
        text-align: center;
      }

      .shortcuts-table {
        width: 100%;
        border-collapse: collapse;
      }

      .shortcuts-table tr {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      .shortcuts-table tr:last-child {
        border-bottom: none;
      }

      .shortcuts-table td {
        padding: 0.75rem 0.5rem;
      }

      .shortcuts-table td:first-child {
        text-align: right;
        padding-right: 1rem;
        width: 40%;
        min-width: 120px;
      }

      .shortcuts-table td:last-child {
        padding-left: 1rem;
      }

      .key {
        display: inline-block;
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        padding: 0.25rem 0.5rem;
        font-family: 'Courier New', monospace;
        font-size: 0.9rem;
        font-weight: 500;
        min-width: 1.5rem;
        text-align: center;
        margin: 0 0.2rem;
      }

      .description {
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.95rem;
      }

      .key-combo {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 0.3rem;
      }

      .key-separator {
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.9rem;
      }
    </style>
    <slot id="content">
      ${t=[{keys:["Space","k"],description:"Toggle Playback"},{keys:["m"],description:"Toggle mute"},{keys:["f"],description:"Toggle fullscreen"},{keys:["c"],description:"Toggle captions or subtitles, if available"},{keys:["p"],description:"Toggle Picture in Picture"},{keys:["←","j"],description:"Seek back 10s"},{keys:["→","l"],description:"Seek forward 10s"},{keys:["↑"],description:"Turn volume up"},{keys:["↓"],description:"Turn volume down"},{keys:["< (SHIFT+,)"],description:"Decrease playback rate"},{keys:["> (SHIFT+.)"],description:"Increase playback rate"}].map(({keys:e,description:t})=>{let i=e.map((e,t)=>t>0?`<span class="key-separator">or</span><span class="key">${e}</span>`:`<span class="key">${e}</span>`).join("");return`
      <tr>
        <td>
          <div class="key-combo">${i}</div>
        </td>
        <td class="description">${t}</td>
      </tr>
    `}).join(""),`
    <h2>Keyboard Shortcuts</h2>
    <table class="shortcuts-table">${t}</table>
  `}
    </slot>
  `},tc.customElements.get("media-keyboard-shortcuts-dialog")||tc.customElements.define("media-keyboard-shortcuts-dialog",a8);var a6=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};let a7=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,re=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`,rt=e=>{let t=e.mediaIsFullscreen?e7("exit fullscreen mode"):e7("enter fullscreen mode");e.setAttribute("aria-label",t)};class ri extends ab{constructor(){super(...arguments),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,lN,null)}static get observedAttributes(){return[...super.observedAttributes,eK.MEDIA_IS_FULLSCREEN,eK.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),rt(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===eK.MEDIA_IS_FULLSCREEN&&rt(this)}get mediaFullscreenUnavailable(){return tN(this,eK.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){tO(this,eK.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return tD(this,eK.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){tx(this,eK.MEDIA_IS_FULLSCREEN,e)}handleClick(e){var t,i,a,r;a6(this,t=lN,"write to private field"),i?i.call(this,e):t.set(this,e);let n=(a6(this,a=lN,"read from private field"),(r?r.call(this):a.get(this))instanceof PointerEvent),s=this.mediaIsFullscreen?new tc.CustomEvent(eB.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0}):new tc.CustomEvent(eB.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0,detail:n});this.dispatchEvent(s)}}lN=new WeakMap,ri.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${eK.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${eK.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${eK.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${eK.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${a7}</slot>
      <slot name="exit">${re}</slot>
    </slot>
  `},ri.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${e7("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${e7("Exit fullscreen mode")}</slot>
  `},tc.customElements.get("media-fullscreen-button")||tc.customElements.define("media-fullscreen-button",ri);let{MEDIA_TIME_IS_LIVE:ra,MEDIA_PAUSED:rr}=eK,{MEDIA_SEEK_TO_LIVE_REQUEST:rn,MEDIA_PLAY_REQUEST:rs}=eB,ro=e=>{var t;let i=e.mediaPaused||!e.mediaTimeIsLive,a=i?e7("seek to live"):e7("playing live");e.setAttribute("aria-label",a);let r=null==(t=e.shadowRoot)?void 0:t.querySelector('slot[name="text"]');r&&(r.textContent=e7("live")),i?e.removeAttribute("aria-disabled"):e.setAttribute("aria-disabled","true")};class rl extends ab{static get observedAttributes(){return[...super.observedAttributes,ra,rr]}connectedCallback(){super.connectedCallback(),ro(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),ro(this)}get mediaPaused(){return tD(this,eK.MEDIA_PAUSED)}set mediaPaused(e){tx(this,eK.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return tD(this,eK.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){tx(this,eK.MEDIA_TIME_IS_LIVE,e)}handleClick(){(this.mediaPaused||!this.mediaTimeIsLive)&&(this.dispatchEvent(new tc.CustomEvent(rn,{composed:!0,bubbles:!0})),this.hasAttribute(rr)&&this.dispatchEvent(new tc.CustomEvent(rs,{composed:!0,bubbles:!0})))}}rl.getSlotTemplateHTML=function(e){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${ra}]:not([${rr}])) slot[name=indicator] > *,
      :host([${ra}]:not([${rr}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${ra}]:not([${rr}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator"><svg viewBox="0 0 6 12" aria-hidden="true"><circle cx="3" cy="6" r="2"></circle></svg></slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${e7("live")}</slot>
  `},tc.customElements.get("media-live-button")||tc.customElements.define("media-live-button",rl);var rd=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ru=(e,t,i)=>(rd(e,t,"read from private field"),i?i.call(e):t.get(e)),rc=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},rh=(e,t,i,a)=>(rd(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let rm="loadingdelay",rp="noautohide",rv=`
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
`;class rb extends tc.HTMLElement{constructor(){if(super(),rc(this,lO,void 0),rc(this,lP,500),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=tE(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[e$.MEDIA_CONTROLLER,eK.MEDIA_PAUSED,eK.MEDIA_LOADING,rm]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===rm&&t!==i?this.loadingDelay=Number(i):e===e$.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=ru(this,lO))?void 0:a.unassociateElement)||r.call(a,this),rh(this,lO,null)),i&&this.isConnected&&(rh(this,lO,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=ru(this,lO))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(e$.MEDIA_CONTROLLER);a&&(rh(this,lO,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=ru(this,lO))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=ru(this,lO))?void 0:e.unassociateElement)||t.call(e,this),rh(this,lO,null)}get loadingDelay(){return ru(this,lP)}set loadingDelay(e){rh(this,lP,e);let{style:t}=tS(this.shadowRoot,":host");t.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return tD(this,eK.MEDIA_PAUSED)}set mediaPaused(e){tx(this,eK.MEDIA_PAUSED,e)}get mediaLoading(){return tD(this,eK.MEDIA_LOADING)}set mediaLoading(e){tx(this,eK.MEDIA_LOADING,e)}get mediaController(){return tN(this,e$.MEDIA_CONTROLLER)}set mediaController(e){tO(this,e$.MEDIA_CONTROLLER,e)}get noAutohide(){return tD(this,rp)}set noAutohide(e){tx(this,rp,e)}}lO=new WeakMap,lP=new WeakMap,rb.shadowRootOptions={mode:"open"},rb.getTemplateHTML=function(e){return`
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

      :host([${eK.MEDIA_LOADING}]:not([${eK.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${eK.MEDIA_LOADING}]:not([${eK.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${eK.MEDIA_LOADING}]:not([${eK.MEDIA_PAUSED}])) #status {
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

    <slot name="icon">${rv}</slot>
    <div id="status" role="status" aria-live="polite">${e7("media loading")}</div>
  `},tc.customElements.get("media-loading-indicator")||tc.customElements.define("media-loading-indicator",rb);let rg=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,rE=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,rf=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`,ry=e=>{let t="off"===e.mediaVolumeLevel?e7("unmute"):e7("mute");e.setAttribute("aria-label",t)};class r_ extends ab{static get observedAttributes(){return[...super.observedAttributes,eK.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),ry(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===eK.MEDIA_VOLUME_LEVEL&&ry(this)}get mediaVolumeLevel(){return tN(this,eK.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){tO(this,eK.MEDIA_VOLUME_LEVEL,e)}handleClick(){let e="off"===this.mediaVolumeLevel?eB.MEDIA_UNMUTE_REQUEST:eB.MEDIA_MUTE_REQUEST;this.dispatchEvent(new tc.CustomEvent(e,{composed:!0,bubbles:!0}))}}r_.getSlotTemplateHTML=function(e){return`
    <style>
      :host(:not([${eK.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${eK.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${eK.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${eK.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${eK.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${eK.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${eK.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${rg}</slot>
      <slot name="low">${rE}</slot>
      <slot name="medium">${rE}</slot>
      <slot name="high">${rf}</slot>
    </slot>
  `},r_.getTooltipContentHTML=function(){return`
    <slot name="tooltip-mute">${e7("Mute")}</slot>
    <slot name="tooltip-unmute">${e7("Unmute")}</slot>
  `},tc.customElements.get("media-mute-button")||tc.customElements.define("media-mute-button",r_);let rT=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,rk=e=>{let t=e.mediaIsPip?e7("exit picture in picture mode"):e7("enter picture in picture mode");e.setAttribute("aria-label",t)};class rA extends ab{static get observedAttributes(){return[...super.observedAttributes,eK.MEDIA_IS_PIP,eK.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),rk(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===eK.MEDIA_IS_PIP&&rk(this)}get mediaPipUnavailable(){return tN(this,eK.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){tO(this,eK.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return tD(this,eK.MEDIA_IS_PIP)}set mediaIsPip(e){tx(this,eK.MEDIA_IS_PIP,e)}handleClick(){let e=this.mediaIsPip?eB.MEDIA_EXIT_PIP_REQUEST:eB.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new tc.CustomEvent(e,{composed:!0,bubbles:!0}))}}rA.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${eK.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${eK.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${eK.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${eK.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${rT}</slot>
      <slot name="exit">${rT}</slot>
    </slot>
  `},rA.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${e7("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${e7("Exit picture in picture mode")}</slot>
  `},tc.customElements.get("media-pip-button")||tc.customElements.define("media-pip-button",rA);var rw=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot read from private field");return i?i.call(e):t.get(e)};let rR="rates",rI=[1,1.2,1.5,1.7,2];class rS extends ab{constructor(){var e;super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,lU,new t9(this,rR,{defaultValue:rI})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${null!=(e=this.mediaPlaybackRate)?e:1}x`}static get observedAttributes(){return[...super.observedAttributes,eK.MEDIA_PLAYBACK_RATE,rR]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===rR&&(rw(this,lU).value=i),e===eK.MEDIA_PLAYBACK_RATE){let e=i?+i:NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",e7("Playback rate {playbackRate}",{playbackRate:t}))}}get rates(){return rw(this,lU)}set rates(e){e?Array.isArray(e)?rw(this,lU).value=e.join(" "):"string"==typeof e&&(rw(this,lU).value=e):rw(this,lU).value=""}get mediaPlaybackRate(){return tL(this,eK.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){tM(this,eK.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,t;let i=Array.from(rw(this,lU).values(),e=>+e).sort((e,t)=>e-t),a=null!=(t=null!=(e=i.find(e=>e>this.mediaPlaybackRate))?e:i[0])?t:1,r=new tc.CustomEvent(eB.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(r)}}lU=new WeakMap,rS.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${e.mediaplaybackrate||1}x</slot>
  `},rS.getTooltipContentHTML=function(){return e7("Playback rate")},tc.customElements.get("media-playback-rate-button")||tc.customElements.define("media-playback-rate-button",rS);let rC=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,rL=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`,rM=e=>{let t=e.mediaPaused?e7("play"):e7("pause");e.setAttribute("aria-label",t)};class rD extends ab{static get observedAttributes(){return[...super.observedAttributes,eK.MEDIA_PAUSED,eK.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),rM(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),(e===eK.MEDIA_PAUSED||e===eK.MEDIA_LANG)&&rM(this)}get mediaPaused(){return tD(this,eK.MEDIA_PAUSED)}set mediaPaused(e){tx(this,eK.MEDIA_PAUSED,e)}handleClick(){let e=this.mediaPaused?eB.MEDIA_PLAY_REQUEST:eB.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new tc.CustomEvent(e,{composed:!0,bubbles:!0}))}}rD.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${eK.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${eK.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${eK.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${eK.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${rC}</slot>
      <slot name="pause">${rL}</slot>
    </slot>
  `},rD.getTooltipContentHTML=function(){return`
    <slot name="tooltip-play">${e7("Play")}</slot>
    <slot name="tooltip-pause">${e7("Pause")}</slot>
  `},tc.customElements.get("media-play-button")||tc.customElements.define("media-play-button",rD);let rx="placeholdersrc";class rN extends tc.HTMLElement{static get observedAttributes(){return[rx,"src"]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=tE(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,t,i){if("src"===e&&(null==i?this.image.removeAttribute("src"):this.image.setAttribute("src",i)),e===rx)if(null==i)this.image.style.removeProperty("background-image");else{var a;a=this.image,a.style["background-image"]=`url('${i}')`}}get placeholderSrc(){return tN(this,rx)}set placeholderSrc(e){tO(this,"src",e)}get src(){return tN(this,"src")}set src(e){tO(this,"src",e)}}rN.shadowRootOptions={mode:"open"},rN.getTemplateHTML=function(e){return`
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
  `},tc.customElements.get("media-poster-image")||tc.customElements.define("media-poster-image",rN);var rO=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};class rP extends aj{constructor(){super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,lW,void 0),((e,t,i,a)=>(rO(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,lW,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,eK.MEDIA_PREVIEW_CHAPTER,eK.MEDIA_LANG]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),(e===eK.MEDIA_PREVIEW_CHAPTER||e===eK.MEDIA_LANG)&&i!==t&&null!=i){var a,r;if((rO(this,a=lW,"read from private field"),r?r.call(this):a.get(this)).textContent=i,""!==i){let e=e7("chapter: {chapterName}",{chapterName:i});this.setAttribute("aria-valuetext",e)}else this.removeAttribute("aria-valuetext")}}get mediaPreviewChapter(){return tN(this,eK.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){tO(this,eK.MEDIA_PREVIEW_CHAPTER,e)}}lW=new WeakMap,tc.customElements.get("media-preview-chapter-display")||tc.customElements.define("media-preview-chapter-display",rP);var rU=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},rW=(e,t,i)=>(rU(e,t,"read from private field"),i?i.call(e):t.get(e)),rH=(e,t,i,a)=>(rU(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class rB extends tc.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,lH,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=tE(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[e$.MEDIA_CONTROLLER,eK.MEDIA_PREVIEW_IMAGE,eK.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,t,i;let a=this.getAttribute(e$.MEDIA_CONTROLLER);a&&(rH(this,lH,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=rW(this,lH))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=rW(this,lH))?void 0:e.unassociateElement)||t.call(e,this),rH(this,lH,null)}attributeChangedCallback(e,t,i){var a,r,n,s,o;[eK.MEDIA_PREVIEW_IMAGE,eK.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===e$.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=rW(this,lH))?void 0:a.unassociateElement)||r.call(a,this),rH(this,lH,null)),i&&this.isConnected&&(rH(this,lH,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=rW(this,lH))?void 0:s.associateElement)||o.call(s,this)))}get mediaPreviewImage(){return tN(this,eK.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){tO(this,eK.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){let e=this.getAttribute(eK.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(e=>+e)}set mediaPreviewCoords(e){e?this.setAttribute(eK.MEDIA_PREVIEW_COORDS,e.join(" ")):this.removeAttribute(eK.MEDIA_PREVIEW_COORDS)}update(){let e,t,i=this.mediaPreviewCoords,a=this.mediaPreviewImage;if(!(i&&a))return;let[r,n,s,o]=i,l=a.split("#")[0],d=getComputedStyle(this),{maxWidth:u,maxHeight:c,minWidth:h,minHeight:m}=d;if("fill"===(d.getPropertyValue("--media-preview-thumbnail-object-fit").trim()||"contain")){let i=parseInt(u)/s,a=parseInt(c)/o,r=parseInt(h)/s,n=parseInt(m)/o;e=i<1?i:Math.max(i,r),t=a<1?a:Math.max(a,n)}else{let i=Math.min(parseInt(u)/s,parseInt(c)/o),a=Math.max(parseInt(h)/s,parseInt(m)/o),r=i<1?i:a>1?a:1;e=r,t=r}let{style:p}=tS(this.shadowRoot,":host"),v=tS(this.shadowRoot,"img").style,b=this.shadowRoot.querySelector("img"),g=1>Math.min(e,t)?"min":"max";p.setProperty(`${g}-width`,"initial","important"),p.setProperty(`${g}-height`,"initial","important"),p.width=`${s*e}px`,p.height=`${o*t}px`;let E=()=>{v.width=`${this.imgWidth*e}px`,v.height=`${this.imgHeight*t}px`,v.display="block"};b.src!==l&&(b.onload=()=>{this.imgWidth=b.naturalWidth,this.imgHeight=b.naturalHeight,E(),b.onload=null},b.src=l,E()),E(),v.transform=`translate(-${r*e}px, -${n*t}px)`}}lH=new WeakMap,rB.shadowRootOptions={mode:"open"},rB.getTemplateHTML=function(e){return`
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
  `},tc.customElements.get("media-preview-thumbnail")||tc.customElements.define("media-preview-thumbnail",rB);var r$=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},rV=(e,t,i)=>(r$(e,t,"read from private field"),i?i.call(e):t.get(e));class rq extends aj{constructor(){super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,lB,void 0),((e,t,i,a)=>(r$(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,lB,this.shadowRoot.querySelector("slot")),rV(this,lB).textContent=ti(0)}static get observedAttributes(){return[...super.observedAttributes,eK.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===eK.MEDIA_PREVIEW_TIME&&null!=i&&(rV(this,lB).textContent=ti(parseFloat(i)))}get mediaPreviewTime(){return tL(this,eK.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){tM(this,eK.MEDIA_PREVIEW_TIME,e)}}lB=new WeakMap,tc.customElements.get("media-preview-time-display")||tc.customElements.define("media-preview-time-display",rq);let rK="seekoffset";class rF extends ab{static get observedAttributes(){return[...super.observedAttributes,eK.MEDIA_CURRENT_TIME,rK]}connectedCallback(){super.connectedCallback(),this.seekOffset=tL(this,rK,30)}attributeChangedCallback(e,t,i){var a;super.attributeChangedCallback(e,t,i),a=this.seekOffset,this.setAttribute("aria-label",e7("seek back {seekOffset} seconds",{seekOffset:a})),e===rK&&(this.seekOffset=tL(this,rK,30))}get seekOffset(){return tL(this,rK,30)}set seekOffset(e){tM(this,rK,e),this.setAttribute("aria-label",e7("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),t_(tT(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return tL(this,eK.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){tM(this,eK.MEDIA_CURRENT_TIME,e)}handleClick(){let e=Math.max(this.mediaCurrentTime-this.seekOffset,0),t=new tc.CustomEvent(eB.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}rF.getSlotTemplateHTML=function(e,t){let i;return`
    <slot name="icon">${i=t.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${i}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`}</slot>
  `},rF.getTooltipContentHTML=function(){return e7("Seek backward")},tc.customElements.get("media-seek-backward-button")||tc.customElements.define("media-seek-backward-button",rF);let rY="seekoffset";class rG extends ab{static get observedAttributes(){return[...super.observedAttributes,eK.MEDIA_CURRENT_TIME,rY]}connectedCallback(){super.connectedCallback(),this.seekOffset=tL(this,rY,30)}attributeChangedCallback(e,t,i){var a;super.attributeChangedCallback(e,t,i),a=this.seekOffset,this.setAttribute("aria-label",e7("seek forward {seekOffset} seconds",{seekOffset:a})),e===rY&&(this.seekOffset=tL(this,rY,30))}get seekOffset(){return tL(this,rY,30)}set seekOffset(e){tM(this,rY,e),this.setAttribute("aria-label",e7("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),t_(tT(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return tL(this,eK.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){tM(this,eK.MEDIA_CURRENT_TIME,e)}handleClick(){let e=this.mediaCurrentTime+this.seekOffset,t=new tc.CustomEvent(eB.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}rG.getSlotTemplateHTML=function(e,t){let i;return`
    <slot name="icon">${i=t.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${i}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`}</slot>
  `},rG.getTooltipContentHTML=function(){return e7("Seek forward")},tc.customElements.get("media-seek-forward-button")||tc.customElements.define("media-seek-forward-button",rG);var rj=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},rz=(e,t,i)=>(rj(e,t,"read from private field"),i?i.call(e):t.get(e)),rQ=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},rZ=(e,t,i,a)=>(rj(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),rX=(e,t,i)=>(rj(e,t,"access private method"),i);let rJ={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},r0=[...Object.values(rJ),eK.MEDIA_CURRENT_TIME,eK.MEDIA_DURATION,eK.MEDIA_SEEKABLE],r1=["Enter"," "],r2="&nbsp;/&nbsp;",r3=(e,{timesSep:t=r2}={})=>{var i,a;let r=null!=(i=e.mediaCurrentTime)?i:0,[,n]=null!=(a=e.mediaSeekable)?a:[],s=0;Number.isFinite(e.mediaDuration)?s=e.mediaDuration:Number.isFinite(n)&&(s=n);let o=e.remaining?ti(0-(s-r)):ti(r);return e.showDuration?`${o}${t}${ti(s)}`:o};class r4 extends aj{constructor(){super(),rQ(this,lK),rQ(this,lY),rQ(this,lj),rQ(this,lQ),rQ(this,l$,void 0),rQ(this,lV,null),rQ(this,lq,e=>{let{metaKey:t,altKey:i,key:a}=e;t||i||!r1.includes(a)?this.removeEventListener("keyup",rz(this,lV)):this.addEventListener("keyup",rz(this,lV))}),rZ(this,l$,this.shadowRoot.querySelector("slot")),rz(this,l$).innerHTML=`${r3(this)}`}static get observedAttributes(){return[...super.observedAttributes,...r0,"disabled"]}connectedCallback(){let{style:e}=tS(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","var(--media-cursor, pointer)"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.setAttribute("aria-label",e7("playback time")),rX(this,lj,lz).call(this),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),rX(this,lY,lG).call(this),super.disconnectedCallback()}attributeChangedCallback(e,t,i){this.setAttribute("aria-label",e7("playback time")),r0.includes(e)?this.update():"disabled"===e&&i!==t?null==i?rX(this,lj,lz).call(this):rX(this,lQ,lZ).call(this):e===rJ.NO_TOGGLE&&i!==t&&(this.noToggle?rX(this,lQ,lZ).call(this):rX(this,lj,lz).call(this)),super.attributeChangedCallback(e,t,i)}enable(){this.noToggle||(this.tabIndex=0)}disable(){this.tabIndex=-1}get remaining(){return tD(this,rJ.REMAINING)}set remaining(e){tx(this,rJ.REMAINING,e)}get showDuration(){return tD(this,rJ.SHOW_DURATION)}set showDuration(e){tx(this,rJ.SHOW_DURATION,e)}get noToggle(){return tD(this,rJ.NO_TOGGLE)}set noToggle(e){tx(this,rJ.NO_TOGGLE,e)}get mediaDuration(){return tL(this,eK.MEDIA_DURATION)}set mediaDuration(e){tM(this,eK.MEDIA_DURATION,e)}get mediaCurrentTime(){return tL(this,eK.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){tM(this,eK.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){let e=this.getAttribute(eK.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){null==e?this.removeAttribute(eK.MEDIA_SEEKABLE):this.setAttribute(eK.MEDIA_SEEKABLE,e.join(":"))}update(){let e=r3(this);(e=>{var t;let i=e.mediaCurrentTime,[,a]=null!=(t=e.mediaSeekable)?t:[],r=null;if(Number.isFinite(e.mediaDuration)?r=e.mediaDuration:Number.isFinite(a)&&(r=a),null==i||null===r)return e.setAttribute("aria-description",e7("video not loaded, unknown time."));let n=e.remaining?tt(0-(r-i)):tt(i);if(!e.showDuration)return e.setAttribute("aria-description",n);let s=e7("{currentTime} of {totalTime}",{currentTime:n,totalTime:tt(r)});e.setAttribute("aria-description",s)})(this),e!==rz(this,l$).innerHTML&&(rz(this,l$).innerHTML=e)}}l$=new WeakMap,lV=new WeakMap,lq=new WeakMap,lK=new WeakSet,lF=function(){rz(this,lV)||(rZ(this,lV,e=>{let{key:t}=e;r1.includes(t)?this.toggleTimeDisplay():this.removeEventListener("keyup",rz(this,lV))}),this.addEventListener("keydown",rz(this,lq)),this.addEventListener("click",this.toggleTimeDisplay))},lY=new WeakSet,lG=function(){rz(this,lV)&&(this.removeEventListener("keyup",rz(this,lV)),this.removeEventListener("keydown",rz(this,lq)),this.removeEventListener("click",this.toggleTimeDisplay),rZ(this,lV,null))},lj=new WeakSet,lz=function(){this.noToggle||this.hasAttribute("disabled")||(this.setAttribute("role","button"),this.enable(),rX(this,lK,lF).call(this))},lQ=new WeakSet,lZ=function(){this.removeAttribute("role"),this.disable(),rX(this,lY,lG).call(this)},r4.getSlotTemplateHTML=function(e,t){return`
    <slot>${r3(t)}</slot>
  `},tc.customElements.get("media-time-display")||tc.customElements.define("media-time-display",r4);var r5=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},r9=(e,t,i)=>(r5(e,t,"read from private field"),i?i.call(e):t.get(e)),r8=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},r6=(e,t,i,a)=>(r5(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class r7{constructor(e,t,i){r8(this,lX,void 0),r8(this,lJ,void 0),r8(this,l0,void 0),r8(this,l1,void 0),r8(this,l2,void 0),r8(this,l3,void 0),r8(this,l4,void 0),r8(this,l5,void 0),r8(this,l9,0),r8(this,l8,(e=performance.now())=>{r6(this,l9,requestAnimationFrame(r9(this,l8))),r6(this,l1,performance.now()-r9(this,l0));let t=1e3/this.fps;if(r9(this,l1)>t){let i,a,r,n;r6(this,l0,e-r9(this,l1)%t);let s=1e3/((e-r9(this,lJ))/++(i=this,a=l2,{set _(value){r6(i,a,value,r)},get _(){return r9(i,a,n)}})._),o=(e-r9(this,l3))/1e3/this.duration,l=r9(this,l4)+o*this.playbackRate;l-r9(this,lX).valueAsNumber>0?r6(this,l5,this.playbackRate/this.duration/s):(r6(this,l5,.995*r9(this,l5)),l=r9(this,lX).valueAsNumber+r9(this,l5)),this.callback(l)}}),r6(this,lX,e),this.callback=t,this.fps=i}start(){0===r9(this,l9)&&(r6(this,l0,performance.now()),r6(this,lJ,r9(this,l0)),r6(this,l2,0),r9(this,l8).call(this))}stop(){0!==r9(this,l9)&&(cancelAnimationFrame(r9(this,l9)),r6(this,l9,0))}update({start:e,duration:t,playbackRate:i}){let a=e-r9(this,lX).valueAsNumber,r=Math.abs(t-this.duration);(a>0||a<-.03||r>=.5)&&this.callback(e),r6(this,l4,e),r6(this,l3,performance.now()),this.duration=t,this.playbackRate=i}}lX=new WeakMap,lJ=new WeakMap,l0=new WeakMap,l1=new WeakMap,l2=new WeakMap,l3=new WeakMap,l4=new WeakMap,l5=new WeakMap,l9=new WeakMap,l8=new WeakMap;var ne=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nt=(e,t,i)=>(ne(e,t,"read from private field"),i?i.call(e):t.get(e)),ni=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},na=(e,t,i,a)=>(ne(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),nr=(e,t,i)=>(ne(e,t,"access private method"),i);let nn=(e,t=e.mediaCurrentTime)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:Math.max(0,Math.min((t-i)/(a-i),1))},ns=(e,t=e.range.valueAsNumber)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:t*(a-i)+i};class no extends aB{constructor(){super(),ni(this,du),ni(this,dm),ni(this,dv),ni(this,dg),ni(this,df),ni(this,d_),ni(this,dk),ni(this,l6,null),ni(this,l7,void 0),ni(this,de,void 0),ni(this,dt,void 0),ni(this,di,void 0),ni(this,da,void 0),ni(this,dr,void 0),ni(this,dn,void 0),ni(this,ds,void 0),ni(this,dl,void 0),ni(this,dd,()=>{nr(this,du,dc).call(this)?nt(this,l7).start():nt(this,l7).stop()}),ni(this,dh,e=>{!this.dragging&&(e4(e)&&(this.range.valueAsNumber=e),nt(this,dl)||this.updateBar())}),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),na(this,de,this.shadowRoot.querySelectorAll('[part~="box"]')),na(this,di,this.shadowRoot.querySelector('[part~="preview-box"]')),na(this,da,this.shadowRoot.querySelector('[part~="current-box"]'));const e=getComputedStyle(this);na(this,dr,parseInt(e.getPropertyValue("--media-box-padding-left"))),na(this,dn,parseInt(e.getPropertyValue("--media-box-padding-right"))),na(this,l7,new r7(this.range,nt(this,dh),60))}static get observedAttributes(){return[...super.observedAttributes,eK.MEDIA_PAUSED,eK.MEDIA_DURATION,eK.MEDIA_SEEKABLE,eK.MEDIA_CURRENT_TIME,eK.MEDIA_PREVIEW_IMAGE,eK.MEDIA_PREVIEW_TIME,eK.MEDIA_PREVIEW_CHAPTER,eK.MEDIA_BUFFERED,eK.MEDIA_PLAYBACK_RATE,eK.MEDIA_LOADING,eK.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",e7("seek")),nt(this,dd).call(this),na(this,l6,this.getRootNode()),null==(e=nt(this,l6))||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),nt(this,l7).stop(),null==(e=nt(this,l6))||e.removeEventListener("transitionstart",this),na(this,l6,null)}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),t!=i){if(e===eK.MEDIA_CURRENT_TIME||e===eK.MEDIA_PAUSED||e===eK.MEDIA_ENDED||e===eK.MEDIA_LOADING||e===eK.MEDIA_DURATION||e===eK.MEDIA_SEEKABLE){let e,t,i,a;nt(this,l7).update({start:nn(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),nt(this,dd).call(this),e=this.range,t=tt(+ns(this)),i=tt(+this.mediaSeekableEnd),a=t&&i?e7("{currentTime} of {totalTime}",{currentTime:t,totalTime:i}):e7("video not loaded, unknown time."),e.setAttribute("aria-valuetext",a)}else e===eK.MEDIA_BUFFERED&&this.updateBufferedBar();(e===eK.MEDIA_DURATION||e===eK.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=nt(this,ds),this.updateBar())}}get mediaChaptersCues(){return nt(this,ds)}set mediaChaptersCues(e){var t;na(this,ds,e),this.updateSegments(null==(t=nt(this,ds))?void 0:t.map(e=>({start:nn(this,e.startTime),end:nn(this,e.endTime)})))}get mediaPaused(){return tD(this,eK.MEDIA_PAUSED)}set mediaPaused(e){tx(this,eK.MEDIA_PAUSED,e)}get mediaLoading(){return tD(this,eK.MEDIA_LOADING)}set mediaLoading(e){tx(this,eK.MEDIA_LOADING,e)}get mediaDuration(){return tL(this,eK.MEDIA_DURATION)}set mediaDuration(e){tM(this,eK.MEDIA_DURATION,e)}get mediaCurrentTime(){return tL(this,eK.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){tM(this,eK.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return tL(this,eK.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){tM(this,eK.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){let e=this.getAttribute(eK.MEDIA_BUFFERED);return e?e.split(" ").map(e=>e.split(":").map(e=>+e)):[]}set mediaBuffered(e){if(!e)return void this.removeAttribute(eK.MEDIA_BUFFERED);let t=e.map(e=>e.join(":")).join(" ");this.setAttribute(eK.MEDIA_BUFFERED,t)}get mediaSeekable(){let e=this.getAttribute(eK.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){null==e?this.removeAttribute(eK.MEDIA_SEEKABLE):this.setAttribute(eK.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;let[,t=this.mediaDuration]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaSeekableStart(){var e;let[t=0]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaPreviewImage(){return tN(this,eK.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){tO(this,eK.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return tL(this,eK.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){tM(this,eK.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return tD(this,eK.MEDIA_ENDED)}set mediaEnded(e){tx(this,eK.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;let t,i=this.mediaBuffered;if(!i.length)return;if(this.mediaEnded)t=1;else{let a=this.mediaCurrentTime,[,r=this.mediaSeekableStart]=null!=(e=i.find(([e,t])=>e<=a&&a<=t))?e:[];t=nn(this,r)}let{style:a}=tS(this.shadowRoot,"#buffered");a.setProperty("width",`${100*t}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;let e=tS(this.shadowRoot,"#current-rail"),t=tS(this.shadowRoot,'[part~="current-box"]'),i=nr(this,dm,dp).call(this,nt(this,da)),a=nr(this,dv,db).call(this,i,this.range.valueAsNumber),r=nr(this,dg,dE).call(this,i,this.range.valueAsNumber);e.style.transform=`translateX(${a})`,e.style.setProperty("--_range-width",`${i.range.width}`),t.style.setProperty("--_box-shift",`${r}`),t.style.setProperty("--_box-width",`${i.box.width}px`),t.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":nr(this,dk,dA).call(this);break;case"pointermove":nr(this,df,dy).call(this,e);break;case"pointerup":nt(this,dl)&&na(this,dl,!1);break;case"pointerdown":na(this,dl,!0);break;case"pointerleave":nr(this,d_,dT).call(this,null);break;case"transitionstart":tk(e.target,this)&&setTimeout(()=>nt(this,dd).call(this),0)}}}l6=new WeakMap,l7=new WeakMap,de=new WeakMap,dt=new WeakMap,di=new WeakMap,da=new WeakMap,dr=new WeakMap,dn=new WeakMap,ds=new WeakMap,dl=new WeakMap,dd=new WeakMap,du=new WeakSet,dc=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&tI(this)},dh=new WeakMap,dm=new WeakSet,dp=function(e){var t;let i=(null!=(t=this.getAttribute("bounds")?tA(this,`#${this.getAttribute("bounds")}`):this.parentElement)?t:this).getBoundingClientRect(),a=this.range.getBoundingClientRect(),r=e.offsetWidth,n=-(a.left-i.left-r/2),s=i.right-a.left-r/2;return{box:{width:r,min:n,max:s},bounds:i,range:a}},dv=new WeakSet,db=function(e,t){let i=`${100*t}%`,{width:a,min:r,max:n}=e.box;if(!a)return i;if(!Number.isNaN(r)){let e=`calc(1 / var(--_range-width) * 100 * ${r}% + var(--media-box-padding-left))`;i=`max(${e}, ${i})`}if(!Number.isNaN(n)){let e=`calc(1 / var(--_range-width) * 100 * ${n}% - var(--media-box-padding-right))`;i=`min(${i}, ${e})`}return i},dg=new WeakSet,dE=function(e,t){let{width:i,min:a,max:r}=e.box,n=t*e.range.width;if(n<a+nt(this,dr)){let t=e.range.left-e.bounds.left-nt(this,dr);return`${n-i/2+t}px`}if(n>r-nt(this,dn)){let t=e.bounds.right-e.range.right-nt(this,dn);return`${n+i/2-t-e.range.width}px`}return 0},df=new WeakSet,dy=function(e){let t=[...nt(this,de)].some(t=>e.composedPath().includes(t));if(!this.dragging&&(t||!e.composedPath().includes(this)))return void nr(this,d_,dT).call(this,null);let i=this.mediaSeekableEnd;if(!i)return;let a=tS(this.shadowRoot,"#preview-rail"),r=tS(this.shadowRoot,'[part~="preview-box"]'),n=nr(this,dm,dp).call(this,nt(this,di)),s=(e.clientX-n.range.left)/n.range.width;s=Math.max(0,Math.min(1,s));let o=nr(this,dv,db).call(this,n,s),l=nr(this,dg,dE).call(this,n,s);a.style.transform=`translateX(${o})`,a.style.setProperty("--_range-width",`${n.range.width}`),r.style.setProperty("--_box-shift",`${l}`),r.style.setProperty("--_box-width",`${n.box.width}px`),1>Math.abs(Math.round(nt(this,dt))-Math.round(s*i))&&s>.01&&s<.99||(na(this,dt,s*i),nr(this,d_,dT).call(this,nt(this,dt)))},d_=new WeakSet,dT=function(e){this.dispatchEvent(new tc.CustomEvent(eB.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:e}))},dk=new WeakSet,dA=function(){nt(this,l7).stop();let e=ns(this);this.dispatchEvent(new tc.CustomEvent(eB.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e}))},no.shadowRootOptions={mode:"open"},no.getContainerTemplateHTML=function(e){return`
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

      :host(:is([${eK.MEDIA_PREVIEW_IMAGE}], [${eK.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${eK.MEDIA_PREVIEW_IMAGE}], [${eK.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
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

      :host([${eK.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${eK.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${eK.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${eK.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${eK.MEDIA_PREVIEW_TIME}]:hover) {
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

      :host([${eK.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${eK.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${eK.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${eK.MEDIA_PREVIEW_CHAPTER}]) {
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

      :host([${eK.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${eK.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${eK.MEDIA_PREVIEW_TIME}]:hover) {
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
          <template shadowrootmode="${rB.shadowRootOptions.mode}">
            ${rB.getTemplateHTML({})}
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
  `},tc.customElements.get("media-time-range")||tc.customElements.define("media-time-range",no);var nl=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot read from private field");return i?i.call(e):t.get(e)};class nd extends aB{constructor(){super(...arguments),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,dw,()=>{let e=this.range.value,t=new tc.CustomEvent(eB.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)})}static get observedAttributes(){return[...super.observedAttributes,eK.MEDIA_VOLUME,eK.MEDIA_MUTED,eK.MEDIA_VOLUME_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",e7("volume")),this.range.addEventListener("input",nl(this,dw))}disconnectedCallback(){this.range.removeEventListener("input",nl(this,dw)),super.disconnectedCallback()}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===eK.MEDIA_VOLUME||e===eK.MEDIA_MUTED){let e;this.range.valueAsNumber=this.mediaMuted?0:this.mediaVolume,this.range.setAttribute("aria-valuetext",(e=this.range.valueAsNumber,`${Math.round(100*e)}%`)),this.updateBar()}}get mediaVolume(){return tL(this,eK.MEDIA_VOLUME,1)}set mediaVolume(e){tM(this,eK.MEDIA_VOLUME,e)}get mediaMuted(){return tD(this,eK.MEDIA_MUTED)}set mediaMuted(e){tx(this,eK.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return tN(this,eK.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){tO(this,eK.MEDIA_VOLUME_UNAVAILABLE,e)}}dw=new WeakMap,tc.customElements.get("media-volume-range")||tc.customElements.define("media-volume-range",nd);class nu extends ab{constructor(){super(...arguments),this.container=null}static get observedAttributes(){return[...super.observedAttributes,eK.MEDIA_LOOP]}connectedCallback(){var e;super.connectedCallback(),this.container=(null==(e=this.shadowRoot)?void 0:e.querySelector("#icon"))||null,this.container&&(this.container.textContent=e7("Loop"))}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===eK.MEDIA_LOOP&&this.container&&this.setAttribute("aria-checked",this.mediaLoop?"true":"false")}get mediaLoop(){return tD(this,eK.MEDIA_LOOP)}set mediaLoop(e){tx(this,eK.MEDIA_LOOP,e)}handleClick(){let e=!this.mediaLoop,t=new tc.CustomEvent(eB.MEDIA_LOOP_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}nu.getSlotTemplateHTML=function(e){return`
      <style>
        :host {
          min-width: 4ch;
          padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
          width: 100%;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 1rem;
          font-weight: var(--media-button-font-weight, normal);
        }

        #checked-indicator {
          display: none;
        }

        :host([${eK.MEDIA_LOOP}]) #checked-indicator {
          display: block;
        }
      </style>
      
      <span id="icon">
     </span>

      <div id="checked-indicator">
        <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
          <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
        </svg>
      </div>
    `},nu.getTooltipContentHTML=function(){return e7("Loop")},tc.customElements.get("media-loop-button")||tc.customElements.define("media-loop-button",nu);var nc=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nh=(e,t,i)=>(nc(e,t,"read from private field"),i?i.call(e):t.get(e)),nm=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},np=(e,t,i,a)=>(nc(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let nv={processCallback(e,t,i){if(i){for(let[e,a]of t)if(e in i){let t=i[e];"boolean"==typeof t&&a instanceof nk&&"boolean"==typeof a.element[a.attributeName]?a.booleanValue=t:"function"==typeof t&&a instanceof nk?a.element[a.attributeName]=t:a.value=t}}}};class nb extends tc.DocumentFragment{constructor(e,t,i=nv){var a;super(),nm(this,dR,void 0),nm(this,dI,void 0),this.append(e.content.cloneNode(!0)),np(this,dR,ng(this)),np(this,dI,i),null==(a=i.createCallback)||a.call(i,this,nh(this,dR),t),i.processCallback(this,nh(this,dR),t)}update(e){nh(this,dI).processCallback(this,nh(this,dR),e)}}dR=new WeakMap,dI=new WeakMap;let ng=(e,t=[])=>{let i,a;for(let r of e.attributes||[])if(r.value.includes("{{")){let n=new nT;for([i,a]of nf(r.value))if(i){let i=new nk(e,r.name,r.namespaceURI);n.append(i),t.push([a,i])}else n.append(a);r.value=n.toString()}for(let r of e.childNodes)if(1!==r.nodeType||r instanceof HTMLTemplateElement){let n=r.data;if(1===r.nodeType||n.includes("{{")){let s=[];if(n)for([i,a]of nf(n))if(i){let i=new nA(e);s.push(i),t.push([a,i])}else s.push(new Text(a));else if(r instanceof HTMLTemplateElement){let i=new nw(e,r);s.push(i),t.push([i.expression,i])}r.replaceWith(...s.flatMap(e=>e.replacementNodes||[e]))}}else ng(r,t);return t},nE={},nf=e=>{let t="",i=0,a=nE[e],r=0,n;if(a)return a;for(a=[];n=e[r];r++)"{"===n&&"{"===e[r+1]&&"\\"!==e[r-1]&&e[r+2]&&1==++i?(t&&a.push([0,t]),t="",r++):"}"!==n||"}"!==e[r+1]||"\\"===e[r-1]||--i?t+=n||"":(a.push([1,t.trim()]),t="",r++);return t&&a.push([0,(i>0?"{{":"")+t]),nE[e]=a};class ny{get value(){return""}set value(e){}toString(){return this.value}}let n_=new WeakMap;class nT{constructor(){nm(this,dS,[])}[Symbol.iterator](){return nh(this,dS).values()}get length(){return nh(this,dS).length}item(e){return nh(this,dS)[e]}append(...e){for(let t of e)t instanceof nk&&n_.set(t,this),nh(this,dS).push(t)}toString(){return nh(this,dS).join("")}}dS=new WeakMap;class nk extends ny{constructor(e,t,i){super(),nm(this,dx),nm(this,dC,""),nm(this,dL,void 0),nm(this,dM,void 0),nm(this,dD,void 0),np(this,dL,e),np(this,dM,t),np(this,dD,i)}get attributeName(){return nh(this,dM)}get attributeNamespace(){return nh(this,dD)}get element(){return nh(this,dL)}get value(){return nh(this,dC)}set value(e){nh(this,dC)!==e&&(np(this,dC,e),nh(this,dx,dN)&&1!==nh(this,dx,dN).length?nh(this,dL).setAttributeNS(nh(this,dD),nh(this,dM),nh(this,dx,dN).toString()):null==e?nh(this,dL).removeAttributeNS(nh(this,dD),nh(this,dM)):nh(this,dL).setAttributeNS(nh(this,dD),nh(this,dM),e))}get booleanValue(){return nh(this,dL).hasAttributeNS(nh(this,dD),nh(this,dM))}set booleanValue(e){if(nh(this,dx,dN)&&1!==nh(this,dx,dN).length)throw new DOMException("Value is not fully templatized");this.value=e?"":null}}dC=new WeakMap,dL=new WeakMap,dM=new WeakMap,dD=new WeakMap,dx=new WeakSet,dN=function(){return n_.get(this)};class nA extends ny{constructor(e,t){super(),nm(this,dO,void 0),nm(this,dP,void 0),np(this,dO,e),np(this,dP,t?[...t]:[new Text])}get replacementNodes(){return nh(this,dP)}get parentNode(){return nh(this,dO)}get nextSibling(){return nh(this,dP)[nh(this,dP).length-1].nextSibling}get previousSibling(){return nh(this,dP)[0].previousSibling}get value(){return nh(this,dP).map(e=>e.textContent).join("")}set value(e){this.replace(e)}replace(...e){let t=e.flat().flatMap(e=>null==e?[new Text]:e.forEach?[...e]:11===e.nodeType?[...e.childNodes]:e.nodeType?[e]:[new Text(e)]);t.length||t.push(new Text),np(this,dP,function(e,t,i,a=null){let r=0,n,s,o,l=i.length,d=t.length;for(;r<l&&r<d&&t[r]==i[r];)r++;for(;r<l&&r<d&&i[l-1]==t[d-1];)a=i[--d,--l];if(r==d)for(;r<l;)e.insertBefore(i[r++],a);if(r==l)for(;r<d;)e.removeChild(t[r++]);else{for(n=t[r];r<l;)o=i[r++],s=n?n.nextSibling:a,n==o?n=s:r<l&&i[r]==s?(e.replaceChild(o,n),n=s):e.insertBefore(o,n);for(;n!=a;)s=n.nextSibling,e.removeChild(n),n=s}return i}(nh(this,dP)[0].parentNode,nh(this,dP),t,this.nextSibling))}}dO=new WeakMap,dP=new WeakMap;class nw extends nA{constructor(e,t){const i=t.getAttribute("directive")||t.getAttribute("type");let a=t.getAttribute("expression")||t.getAttribute(i)||"";a.startsWith("{{")&&(a=a.trim().slice(2,-2).trim()),super(e),this.expression=a,this.template=t,this.directive=i}}let nR={string:e=>String(e)};class nI{constructor(e){this.template=e,this.state=void 0}}let nS=new WeakMap,nC=new WeakMap,nL={partial:(e,t)=>{t[e.expression]=new nI(e.template)},if:(e,t)=>{var i;if(nN(e.expression,t))if(nS.get(e)!==e.template){nS.set(e,e.template);let i=new nb(e.template,t,nD);e.replace(i),nC.set(e,i)}else null==(i=nC.get(e))||i.update(t);else e.replace(""),nS.delete(e),nC.delete(e)}},nM=Object.keys(nL),nD={processCallback(e,t,i){var a,r;if(i)for(let[e,n]of t){if(n instanceof nw){if(!n.directive){let e=nM.find(e=>n.template.hasAttribute(e));e&&(n.directive=e,n.expression=n.template.getAttribute(e))}null==(a=nL[n.directive])||a.call(nL,n,i);continue}let t=nN(e,i);if(t instanceof nI){nS.get(n)!==t.template?(nS.set(n,t.template),n.value=t=new nb(t.template,t.state,nD),nC.set(n,t)):null==(r=nC.get(n))||r.update(t.state);continue}t?(n instanceof nk&&n.attributeName.startsWith("aria-")&&(t=String(t)),n instanceof nk?"boolean"==typeof t?n.booleanValue=t:"function"==typeof t?n.element[n.attributeName]=t:n.value=t:(n.value=t,nS.delete(n),nC.delete(n))):n instanceof nk?n.value=void 0:(n.value=void 0,nS.delete(n),nC.delete(n))}}},nx={"!":e=>!e,"!!":e=>!!e,"==":(e,t)=>e==t,"!=":(e,t)=>e!=t,">":(e,t)=>e>t,">=":(e,t)=>e>=t,"<":(e,t)=>e<t,"<=":(e,t)=>e<=t,"??":(e,t)=>null!=e?e:t,"|":(e,t)=>{var i;return null==(i=nR[t])?void 0:i.call(nR,e)}};function nN(e,t={}){var i,a,r,n,s,o,l;let d=(function(e,t){let i,a,r,n=[];for(;e;){for(let n in r=null,i=e.length,t)(a=t[n].exec(e))&&a.index<i&&(r={token:a[0],type:n,matches:a.slice(1)},i=a.index);i&&n.push({token:e.substr(0,i),type:void 0}),r&&n.push(r),e=e.substr(i+(r?r.token.length:0))}return n})(e,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:e})=>"ws"!==e);if(0===d.length||d.some(({type:e})=>!e))return nO(e);if((null==(i=d[0])?void 0:i.token)===">"){let i=t[null==(a=d[1])?void 0:a.token];if(!i)return nO(e);let o={...t};i.state=o;let l=d.slice(2);for(let e=0;e<l.length;e+=3){let i=null==(r=l[e])?void 0:r.token,a=null==(n=l[e+1])?void 0:n.token,d=null==(s=l[e+2])?void 0:s.token;i&&"="===a&&(o[i]=nU(d,t))}return i}if(1===d.length)return nP(d[0])?nU(d[0].token,t):nO(e);if(2===d.length){let i=nx[null==(o=d[0])?void 0:o.token];return i&&nP(d[1])?i(nU(d[1].token,t)):nO(e)}if(3===d.length){let i=null==(l=d[1])?void 0:l.token,a=nx[i];if(!a||!nP(d[0])||!nP(d[2]))return nO(e);let r=nU(d[0].token,t);return a(r,"|"===i?d[2].token:nU(d[2].token,t))}}function nO(e){return console.warn(`Warning: invalid expression \`${e}\``),!1}function nP({type:e}){return["number","boolean","string","param"].includes(e)}function nU(e,t){let i=e[0],a=e.slice(-1);return"true"===e||"false"===e?"true"===e:i===a&&["'",'"'].includes(i)?e.slice(1,-1):e5(e)?parseFloat(e):t[e]}var nW=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nH=(e,t,i)=>(nW(e,t,"read from private field"),i?i.call(e):t.get(e)),nB=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},n$=(e,t,i,a)=>(nW(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),nV=(e,t,i)=>(nW(e,t,"access private method"),i);let nq={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},nK=th.createElement("template");nK.innerHTML=`
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
`;class nF extends tc.HTMLElement{constructor(){super(),nB(this,d$),nB(this,dq),nB(this,dU,void 0),nB(this,dW,void 0),nB(this,dH,void 0),nB(this,dB,void 0),nB(this,dF,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer()),n$(this,dB,new MutationObserver(e=>{var t;(!this.mediaController||(null==(t=this.mediaController)?void 0:t.breakpointsComputed))&&e.some(e=>{let t=e.target;return t===this||"media-controller"===t.localName&&!!(nq[e.attributeName]||e.attributeName.startsWith("breakpoint"))})&&this.render()})),n$(this,dF,this.render.bind(this)),nV(this,d$,dV).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var e;return null!=(e=nH(this,dU))?e:this.constructor.template}set template(e){null===e?this.removeAttribute("template"):"string"==typeof e?this.setAttribute("template",e):e instanceof HTMLTemplateElement&&(n$(this,dU,e),n$(this,dH,null),this.createRenderer())}get props(){var e,t,i;let a=[...Array.from(null!=(t=null==(e=this.mediaController)?void 0:e.attributes)?t:[]).filter(({name:e})=>nq[e]||e.startsWith("breakpoint")),...Array.from(this.attributes)],r={};for(let e of a){let t=null!=(i=nq[e.name])?i:e.name.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase()),{value:a}=e;null!=a?(e5(a)&&(a=parseFloat(a)),r[t]=""===a||a):r[t]=!1}return r}attributeChangedCallback(e,t,i){"template"===e&&t!=i&&nV(this,dq,dK).call(this)}connectedCallback(){this.addEventListener(eF.BREAKPOINTS_COMPUTED,nH(this,dF)),nH(this,dB).observe(this,{attributes:!0}),nH(this,dB).observe(this.renderRoot,{attributes:!0,subtree:!0}),nV(this,dq,dK).call(this)}disconnectedCallback(){this.removeEventListener(eF.BREAKPOINTS_COMPUTED,nH(this,dF)),nH(this,dB).disconnect()}createRenderer(){this.template instanceof HTMLTemplateElement&&this.template!==nH(this,dW)&&(n$(this,dW,this.template),this.renderer=new nb(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(nK.content.cloneNode(!0),this.renderer))}render(){var e;null==(e=this.renderer)||e.update(this.props)}}async function nY(e){let t=await fetch(e);if(200!==t.status)throw Error(`Failed to load resource: the server responded with a status of ${t.status}`);return t.text()}function nG(e){return e.split("-")[0]}dU=new WeakMap,dW=new WeakMap,dH=new WeakMap,dB=new WeakMap,d$=new WeakSet,dV=function(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}},dq=new WeakSet,dK=function(){var e;let t=this.getAttribute("template");if(!t||t===nH(this,dH))return;let i=this.getRootNode(),a=null==(e=null==i?void 0:i.getElementById)?void 0:e.call(i,t);if(a){n$(this,dH,t),n$(this,dU,a),this.createRenderer();return}(function(e){if(!/^(\/|\.\/|https?:\/\/)/.test(e))return!1;let t=/^https?:\/\//.test(e)?void 0:location.origin;try{new URL(e,t)}catch(e){return!1}return!0})(t)&&(n$(this,dH,t),nY(t).then(e=>{let t=th.createElement("template");t.innerHTML=e,n$(this,dU,t),this.createRenderer()}).catch(console.error))},dF=new WeakMap,nF.observedAttributes=["template"],nF.processor=nD,tc.customElements.get("media-theme")||tc.customElements.define("media-theme",nF);class nj extends Event{constructor({action:e="auto",relatedTarget:t,...i}){super("invoke",i),this.action=e,this.relatedTarget=t}}class nz extends Event{constructor({newState:e,oldState:t,...i}){super("toggle",i),this.newState=e,this.oldState=t}}var nQ=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nZ=(e,t,i)=>(nQ(e,t,"read from private field"),i?i.call(e):t.get(e)),nX=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},nJ=(e,t,i,a)=>(nQ(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),n0=(e,t,i)=>(nQ(e,t,"access private method"),i);function n1({type:e,text:t,value:i,checked:a}){let r=th.createElement("media-chrome-menu-item");r.type=null!=e?e:"",r.part.add("menu-item"),e&&r.part.add(e),r.value=i,r.checked=a;let n=th.createElement("span");return n.textContent=t,r.append(n),r}function n2(e,t){let i=e.querySelector(`:scope > [slot="${t}"]`);if((null==i?void 0:i.nodeName)=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)return i.cloneNode(!0);let a=e.shadowRoot.querySelector(`[name="${t}"] > svg`);return a?a.cloneNode(!0):""}let n3="style",n4="hidden",n5="disabled";class n9 extends tc.HTMLElement{constructor(){if(super(),nX(this,dJ),nX(this,d1),nX(this,d4),nX(this,d9),nX(this,d6),nX(this,ue),nX(this,ur),nX(this,us),nX(this,ul),nX(this,uu),nX(this,uh),nX(this,up),nX(this,ub),nX(this,uE),nX(this,uy),nX(this,uT),nX(this,uA),nX(this,uR),nX(this,dY,null),nX(this,dG,null),nX(this,dj,null),nX(this,dz,new Set),nX(this,dQ,void 0),nX(this,dZ,!1),nX(this,dX,null),nX(this,d3,()=>{let e=nZ(this,dz),t=new Set(this.items);for(let i of e)t.has(i)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:i}));for(let i of t)e.has(i)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:i}));nJ(this,dz,t)}),nX(this,ui,()=>{n0(this,ur,un).call(this),n0(this,us,uo).call(this,!1)}),nX(this,ua,()=>{n0(this,ur,un).call(this)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=tE(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),nJ(this,dQ,new MutationObserver(nZ(this,d3)))}static get observedAttributes(){return[n5,n4,n3,"anchor",e$.MEDIA_CONTROLLER]}static formatMenuItemText(e,t){return e}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(e){switch(e.type){case"slotchange":n0(this,dJ,d0).call(this,e);break;case"invoke":n0(this,d9,d8).call(this,e);break;case"click":n0(this,ul,ud).call(this,e);break;case"toggle":n0(this,uh,um).call(this,e);break;case"focusout":n0(this,ub,ug).call(this,e);break;case"keydown":n0(this,uE,uf).call(this,e)}}connectedCallback(){var e,t;nZ(this,dQ).observe(this.defaultSlot,{childList:!0}),nJ(this,dX,tC(this.shadowRoot,":host")),n0(this,d4,d5).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),nJ(this,dY,ty(this)),null==(t=null==(e=nZ(this,dY))?void 0:e.associateElement)||t.call(e,this),this.hidden||(tb(n6(this),nZ(this,ui)),tb(this,nZ(this,ua))),n0(this,d1,d2).call(this),this.shadowRoot.addEventListener("slotchange",this)}disconnectedCallback(){var e,t;nZ(this,dQ).disconnect(),tg(n6(this),nZ(this,ui)),tg(this,nZ(this,ua)),this.disable(),null==(t=null==(e=nZ(this,dY))?void 0:e.unassociateElement)||t.call(e,this),nJ(this,dY,null),nJ(this,dG,null),nJ(this,dj,null),this.shadowRoot.removeEventListener("slotchange",this)}attributeChangedCallback(e,t,i){var a,r,n,s;e===n4&&i!==t?(nZ(this,dZ)||nJ(this,dZ,!0),this.hidden?n0(this,ue,ut).call(this):n0(this,d6,d7).call(this),this.dispatchEvent(new nz({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):e===e$.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=nZ(this,dY))?void 0:a.unassociateElement)||r.call(a,this),nJ(this,dY,null)),i&&this.isConnected&&(nJ(this,dY,ty(this)),null==(s=null==(n=nZ(this,dY))?void 0:n.associateElement)||s.call(n,this))):e===n5&&i!==t?null==i?this.enable():this.disable():e===n3&&i!==t&&n0(this,d4,d5).call(this)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}get anchor(){return this.getAttribute("anchor")}set anchor(e){this.setAttribute("anchor",`${e}`)}get anchorElement(){var e;return this.anchor?null==(e=tR(this))?void 0:e.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(n8)}get radioGroupItems(){return this.items.filter(e=>"menuitemradio"===e.role)}get checkedItems(){return this.items.filter(e=>e.checked)}get value(){var e,t;return null!=(t=null==(e=this.checkedItems[0])?void 0:e.value)?t:""}set value(e){let t=this.items.find(t=>t.value===e);t&&n0(this,uR,uI).call(this,t)}focus(){if(nJ(this,dG,tw()),this.items.length){n0(this,uA,uw).call(this,this.items[0]),this.items[0].focus();return}let e=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==e||e.focus()}handleSelect(e){var t;let i=n0(this,uy,u_).call(this,e);i&&(n0(this,uR,uI).call(this,i,"checkbox"===i.type),nZ(this,dj)&&!this.hidden&&(null==(t=nZ(this,dG))||t.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(e){var t,i;let{key:a}=e,r=this.items,n=null!=(i=null!=(t=n0(this,uy,u_).call(this,e))?t:n0(this,uT,uk).call(this))?i:r[0],s=Math.max(0,r.indexOf(n));"ArrowDown"===a?s++:"ArrowUp"===a?s--:"Home"===e.key?s=0:"End"===e.key&&(s=r.length-1),s<0&&(s=r.length-1),s>r.length-1&&(s=0),n0(this,uA,uw).call(this,r[s]),r[s].focus()}}function n8(e){return["menuitem","menuitemradio","menuitemcheckbox"].includes(null==e?void 0:e.role)}function n6(e){var t;return null!=(t=e.getAttribute("bounds")?tA(e,`#${e.getAttribute("bounds")}`):tf(e)||e.parentElement)?t:e}dY=new WeakMap,dG=new WeakMap,dj=new WeakMap,dz=new WeakMap,dQ=new WeakMap,dZ=new WeakMap,dX=new WeakMap,dJ=new WeakSet,d0=function(e){let t=e.target;for(let e of t.assignedNodes({flatten:!0}))3===e.nodeType&&""===e.textContent.trim()&&e.remove();["header","title"].includes(t.name)&&n0(this,d1,d2).call(this),t.name||nZ(this,d3).call(this)},d1=new WeakSet,d2=function(){let e=this.shadowRoot.querySelector('slot[name="header"]');e.hidden=0===this.shadowRoot.querySelector('slot[name="title"]').assignedNodes().length&&0===e.assignedNodes().length},d3=new WeakMap,d4=new WeakSet,d5=function(){var e;let t=this.shadowRoot.querySelector("#layout-row"),i=null==(e=getComputedStyle(this).getPropertyValue("--media-menu-layout"))?void 0:e.trim();t.setAttribute("media","row"===i?"":"width:0")},d9=new WeakSet,d8=function(e){nJ(this,dj,e.relatedTarget),tk(this,e.relatedTarget)||(this.hidden=!this.hidden)},d6=new WeakSet,d7=function(){var e;null==(e=nZ(this,dj))||e.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),tb(n6(this),nZ(this,ui)),tb(this,nZ(this,ua))},ue=new WeakSet,ut=function(){var e;null==(e=nZ(this,dj))||e.setAttribute("aria-expanded","false"),tg(n6(this),nZ(this,ui)),tg(this,nZ(this,ua))},ui=new WeakMap,ua=new WeakMap,ur=new WeakSet,un=function(e){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;let{x:t,y:i}=function({anchor:e,floating:t,placement:i}){let{x:a,y:r}=function({anchor:e,floating:t},i){let a,r="x"==(["top","bottom"].includes(nG(i))?"y":"x")?"y":"x",n="y"===r?"height":"width",s=nG(i),o=e.x+e.width/2-t.width/2,l=e.y+e.height/2-t.height/2,d=e[n]/2-t[n]/2;switch(s){case"top":a={x:o,y:e.y-t.height};break;case"bottom":a={x:o,y:e.y+e.height};break;case"right":a={x:e.x+e.width,y:l};break;case"left":a={x:e.x-t.width,y:l};break;default:a={x:e.x,y:e.y}}switch(i.split("-")[1]){case"start":a[r]-=d;break;case"end":a[r]+=d}return a}(function({anchor:e,floating:t}){var i,a,r;let n,s;return{anchor:(i=e,a=t.offsetParent,n=i.getBoundingClientRect(),s=null!=(r=null==a?void 0:a.getBoundingClientRect())?r:{x:0,y:0},{x:n.x-s.x,y:n.y-s.y,width:n.width,height:n.height}),floating:{x:0,y:0,width:t.offsetWidth,height:t.offsetHeight}}}({anchor:e,floating:t}),i);return{x:a,y:r}}({anchor:this.anchorElement,floating:this,placement:"top-start"});null!=e||(e=this.offsetWidth);let a=n6(this).getBoundingClientRect(),r=a.width-t-e,n=a.height-i-this.offsetHeight,{style:s}=nZ(this,dX);s.setProperty("position","absolute"),s.setProperty("right",`${Math.max(0,r)}px`),s.setProperty("--_menu-bottom",`${n}px`);let o=getComputedStyle(this),l=s.getPropertyValue("--_menu-bottom")===o.bottom?n:parseFloat(o.bottom),d=a.height-l-parseFloat(o.marginBottom);this.style.setProperty("--_menu-max-height",`${d}px`)},us=new WeakSet,uo=function(e){let t=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),i=null==t?void 0:t.querySelector('[role="menu"]'),{style:a}=nZ(this,dX);if(e||a.setProperty("--media-menu-transition-in","none"),i){let e=i.offsetHeight,a=Math.max(i.offsetWidth,t.offsetWidth);this.style.setProperty("min-width",`${a}px`),this.style.setProperty("min-height",`${e}px`),n0(this,ur,un).call(this,a)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),n0(this,ur,un).call(this);a.removeProperty("--media-menu-transition-in")},ul=new WeakSet,ud=function(e){var t;if(e.stopPropagation(),e.composedPath().includes(nZ(this,uu,uc))){null==(t=nZ(this,dG))||t.focus(),this.hidden=!0;return}let i=n0(this,uy,u_).call(this,e);!i||i.hasAttribute("disabled")||(n0(this,uA,uw).call(this,i),this.handleSelect(e))},uu=new WeakSet,uc=function(){var e;return null==(e=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))?void 0:e.find(e=>e.matches('button[part~="back"]'))},uh=new WeakSet,um=function(e){if(e.target===this)return;n0(this,up,uv).call(this);let t=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(let i of t)i.invokeTargetElement!=e.target&&("open"!=e.newState||"true"!=i.getAttribute("aria-expanded")||i.invokeTargetElement.hidden||i.invokeTargetElement.dispatchEvent(new nj({relatedTarget:i})));for(let e of t)e.setAttribute("aria-expanded",`${!e.submenuElement.hidden}`);n0(this,us,uo).call(this,!0)},up=new WeakSet,uv=function(){let e=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!e)},ub=new WeakSet,ug=function(e){var t;tk(this,e.relatedTarget)||(nZ(this,dZ)&&(null==(t=nZ(this,dG))||t.focus()),nZ(this,dj)&&nZ(this,dj)!==e.relatedTarget&&!this.hidden&&(this.hidden=!0))},uE=new WeakSet,uf=function(e){var t,i,a,r,n;let{key:s,ctrlKey:o,altKey:l,metaKey:d}=e;if(!o&&!l&&!d&&this.keysUsed.includes(s))if(e.preventDefault(),e.stopPropagation(),"Tab"===s){if(nZ(this,dZ)){this.hidden=!0;return}e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(r=null==(a=this.nextElementSibling)?void 0:a.focus)||r.call(a),this.blur()}else"Escape"===s?(null==(n=nZ(this,dG))||n.focus(),nZ(this,dZ)&&(this.hidden=!0)):"Enter"===s||" "===s?this.handleSelect(e):this.handleMove(e)},uy=new WeakSet,u_=function(e){return e.composedPath().find(e=>["menuitemradio","menuitemcheckbox"].includes(e.role))},uT=new WeakSet,uk=function(){return this.items.find(e=>0===e.tabIndex)},uA=new WeakSet,uw=function(e){for(let t of this.items)t.tabIndex=t===e?0:-1},uR=new WeakSet,uI=function(e,t){let i=[...this.checkedItems];"radio"===e.type&&this.radioGroupItems.forEach(e=>e.checked=!1),t?e.checked=!e.checked:e.checked=!0,this.checkedItems.some((e,t)=>e!=i[t])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},n9.shadowRootOptions={mode:"open"},n9.getTemplateHTML=function(e){return`
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
        display: var(--media-menu-display, inline-flex) !important;
        
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
    <div id="container" part="container">
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
  `},tc.customElements.get("media-chrome-menu")||tc.customElements.define("media-chrome-menu",n9);var n7=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},se=(e,t,i)=>(n7(e,t,"read from private field"),i?i.call(e):t.get(e)),st=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},si=(e,t,i,a)=>(n7(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),sa=(e,t,i)=>(n7(e,t,"access private method"),i);let sr="type",sn="value",ss="checked",so="disabled";class sl extends tc.HTMLElement{constructor(){if(super(),st(this,uL),st(this,uD),st(this,uN),st(this,uH),st(this,uS,!1),st(this,uC,void 0),st(this,uP,()=>{var e,t;this.submenuElement.items&&this.setAttribute("submenusize",`${this.submenuElement.items.length}`);let i=this.shadowRoot.querySelector('slot[name="description"]'),a=null==(e=this.submenuElement.checkedItems)?void 0:e[0],r=null!=(t=null==a?void 0:a.dataset.description)?t:null==a?void 0:a.text,n=th.createElement("span");n.textContent=null!=r?r:"",i.replaceChildren(n)}),st(this,uU,e=>{let{key:t}=e;this.keysUsed.includes(t)?this.handleClick(e):this.removeEventListener("keyup",se(this,uU))}),st(this,uW,e=>{let{metaKey:t,altKey:i,key:a}=e;t||i||!this.keysUsed.includes(a)?this.removeEventListener("keyup",se(this,uU)):this.addEventListener("keyup",se(this,uU),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=tE(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[sr,so,ss,sn]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),sd(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(e){switch(e.type){case"slotchange":sa(this,uL,uM).call(this,e);break;case"click":this.handleClick(e);break;case"keydown":se(this,uW).call(this,e);break;case"keyup":se(this,uU).call(this,e)}}attributeChangedCallback(e,t,i){e===ss&&sd(this)&&!se(this,uS)?this.setAttribute("aria-checked",null!=i?"true":"false"):e===sr&&i!==t?this.role="menuitem"+i:e===so&&i!==t&&(null==i?this.enable():this.disable())}connectedCallback(){this.hasAttribute(so)||this.enable(),this.role="menuitem"+this.type,si(this,uC,function e(t,i){if(!t)return null;let{host:a}=t.getRootNode();return!i&&a?e(t,a):(null==i?void 0:i.items)?i:e(i,null==i?void 0:i.parentNode)}(this,this.parentNode)),sa(this,uH,uB).call(this),this.submenuElement&&sa(this,uD,ux).call(this),this.shadowRoot.addEventListener("slotchange",this)}disconnectedCallback(){this.disable(),sa(this,uH,uB).call(this),si(this,uC,null),this.shadowRoot.removeEventListener("slotchange",this)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=tR(this))?void 0:e.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var e;return null!=(e=this.getAttribute(sr))?e:""}set type(e){this.setAttribute(sr,`${e}`)}get value(){var e;return null!=(e=this.getAttribute(sn))?e:this.text}set value(e){this.setAttribute(sn,e)}get text(){var e;return(null!=(e=this.textContent)?e:"").trim()}get checked(){if(sd(this))return"true"===this.getAttribute("aria-checked")}set checked(e){sd(this)&&(si(this,uS,!0),this.setAttribute("aria-checked",e?"true":"false"),e?this.part.add("checked"):this.part.remove("checked"))}handleClick(e){!sd(this)&&this.invokeTargetElement&&tk(this,e.target)&&this.invokeTargetElement.dispatchEvent(new nj({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}}function sd(e){return"radio"===e.type||"checkbox"===e.type}uS=new WeakMap,uC=new WeakMap,uL=new WeakSet,uM=function(e){let t=e.target;if(!(null==t?void 0:t.name))for(let e of t.assignedNodes({flatten:!0}))e instanceof Text&&""===e.textContent.trim()&&e.remove();"submenu"===t.name&&(this.submenuElement?sa(this,uD,ux).call(this):sa(this,uN,uO).call(this))},uD=new WeakSet,ux=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",se(this,uP)),this.submenuElement.addEventListener("addmenuitem",se(this,uP)),this.submenuElement.addEventListener("removemenuitem",se(this,uP)),se(this,uP).call(this)},uN=new WeakSet,uO=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",se(this,uP)),this.submenuElement.removeEventListener("addmenuitem",se(this,uP)),this.submenuElement.removeEventListener("removemenuitem",se(this,uP)),se(this,uP).call(this)},uP=new WeakMap,uU=new WeakMap,uW=new WeakMap,uH=new WeakSet,uB=function(){var e;let t=null==(e=se(this,uC))?void 0:e.radioGroupItems;if(!t)return;let i=t.filter(e=>"true"===e.getAttribute("aria-checked")).pop();for(let e of(i||(i=t[0]),t))e.setAttribute("aria-checked","false");null==i||i.setAttribute("aria-checked","true")},sl.shadowRootOptions={mode:"open"},sl.getTemplateHTML=function(e){return`
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
  `},sl.getSuffixSlotInnerHTML=function(e){return""},tc.customElements.get("media-chrome-menu-item")||tc.customElements.define("media-chrome-menu-item",sl);class su extends n9{get anchorElement(){return"auto"!==this.anchor?super.anchorElement:tf(this).querySelector("media-settings-menu-button")}}su.getTemplateHTML=function(e){return`
    ${n9.getTemplateHTML(e)}
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
  `},tc.customElements.get("media-settings-menu")||tc.customElements.define("media-settings-menu",su);class sc extends sl{}sc.shadowRootOptions={mode:"open"},sc.getTemplateHTML=function(e){return`
    ${sl.getTemplateHTML.call(this,e)}
    <style>
      slot:not([name="submenu"]) {
        opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
      }

      :host([aria-expanded="true"]:hover) {
        background: transparent;
      }
    </style>
  `},sc.getSuffixSlotInnerHTML=function(e){return`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `},tc.customElements.get("media-settings-menu-item")||tc.customElements.define("media-settings-menu-item",sc);class sh extends ab{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=tR(this))?void 0:e.querySelector(`#${this.invokeTarget}`):null}handleClick(){var e;null==(e=this.invokeTargetElement)||e.dispatchEvent(new nj({relatedTarget:this}))}}tc.customElements.get("media-chrome-menu-button")||tc.customElements.define("media-chrome-menu-button",sh);class sm extends sh{static get observedAttributes(){return[...super.observedAttributes,"target"]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",e7("settings"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:tf(this).querySelector("media-settings-menu")}}sm.getSlotTemplateHTML=function(){return`
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
  `},sm.getTooltipContentHTML=function(){return e7("Settings")},tc.customElements.get("media-settings-menu-button")||tc.customElements.define("media-settings-menu-button",sm);var sp=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sv=(e,t,i)=>(sp(e,t,"read from private field"),i?i.call(e):t.get(e)),sb=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},sg=(e,t,i,a)=>(sp(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),sE=(e,t,i)=>(sp(e,t,"access private method"),i);class sf extends n9{constructor(){super(...arguments),sb(this,uq),sb(this,uF),sb(this,u$,[]),sb(this,uV,void 0)}static get observedAttributes(){return[...super.observedAttributes,eK.MEDIA_AUDIO_TRACK_LIST,eK.MEDIA_AUDIO_TRACK_ENABLED,eK.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===eK.MEDIA_AUDIO_TRACK_ENABLED&&t!==i)this.value=i;else if(e===eK.MEDIA_AUDIO_TRACK_LIST&&t!==i){var a;sg(this,u$,null==(a=null!=i?i:"")?void 0:a.split(/\s+/).map(e3)),sE(this,uq,uK).call(this)}}connectedCallback(){super.connectedCallback(),this.addEventListener("change",sE(this,uF,uY))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",sE(this,uF,uY))}get anchorElement(){var e;return"auto"!==this.anchor?super.anchorElement:null==(e=tf(this))?void 0:e.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return sv(this,u$)}set mediaAudioTrackList(e){sg(this,u$,e),sE(this,uq,uK).call(this)}get mediaAudioTrackEnabled(){var e;return null!=(e=tN(this,eK.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){tO(this,eK.MEDIA_AUDIO_TRACK_ENABLED,e)}}u$=new WeakMap,uV=new WeakMap,uq=new WeakSet,uK=function(){if(sv(this,uV)===JSON.stringify(this.mediaAudioTrackList))return;sg(this,uV,JSON.stringify(this.mediaAudioTrackList));let e=this.mediaAudioTrackList;for(let t of(this.defaultSlot.textContent="",e.sort((e,t)=>e.id.localeCompare(t.id,void 0,{numeric:!0})),e)){let e=n1({type:"radio",text:this.formatMenuItemText(t.label,t),value:`${t.id}`,checked:t.enabled});e.prepend(n2(this,"checked-indicator")),this.defaultSlot.append(e)}},uF=new WeakSet,uY=function(){if(null==this.value)return;let e=new tc.CustomEvent(eB.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},tc.customElements.get("media-audio-track-menu")||tc.customElements.define("media-audio-track-menu",sf);let sy=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`,s_=e=>{let t=e7("Audio");e.setAttribute("aria-label",t)};class sT extends sh{static get observedAttributes(){return[...super.observedAttributes,eK.MEDIA_AUDIO_TRACK_ENABLED,eK.MEDIA_AUDIO_TRACK_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),s_(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===eK.MEDIA_LANG&&s_(this)}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=tf(this))?void 0:e.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var e;return null!=(e=tN(this,eK.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){tO(this,eK.MEDIA_AUDIO_TRACK_ENABLED,e)}}sT.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${sy}</slot>
  `},sT.getTooltipContentHTML=function(){return e7("Audio")},tc.customElements.get("media-audio-track-menu-button")||tc.customElements.define("media-audio-track-menu-button",sT);var sk=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sA=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},sw=(e,t,i)=>(sk(e,t,"access private method"),i);let sR=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`;class sI extends n9{constructor(){super(...arguments),sA(this,uj),sA(this,uQ),sA(this,uG,void 0)}static get observedAttributes(){return[...super.observedAttributes,eK.MEDIA_SUBTITLES_LIST,eK.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===eK.MEDIA_SUBTITLES_LIST&&t!==i?sw(this,uj,uz).call(this):e===eK.MEDIA_SUBTITLES_SHOWING&&t!==i&&(this.value=i||"",sw(this,uj,uz).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",sw(this,uQ,uZ))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",sw(this,uQ,uZ))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:tf(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return sS(this,eK.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){sC(this,eK.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return sS(this,eK.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){sC(this,eK.MEDIA_SUBTITLES_SHOWING,e)}}uG=new WeakMap,uj=new WeakSet,uz=function(){var e,t,i,a,r,n;let s=(sk(this,t=uG,"read from private field"),(i?i.call(this):t.get(this))!==JSON.stringify(this.mediaSubtitlesList)),o=this.value!==this.getAttribute(eK.MEDIA_SUBTITLES_SHOWING);if(!s&&!o)return;a=uG,r=JSON.stringify(this.mediaSubtitlesList),sk(this,a,"write to private field"),n?n.call(this,r):a.set(this,r),this.defaultSlot.textContent="";let l=!this.value,d=n1({type:"radio",text:this.formatMenuItemText(e7("Off")),value:"off",checked:l});for(let t of(d.prepend(n2(this,"checked-indicator")),this.defaultSlot.append(d),this.mediaSubtitlesList)){let i=n1({type:"radio",text:this.formatMenuItemText(t.label,t),value:ie(t),checked:this.value==ie(t)});i.prepend(n2(this,"checked-indicator")),"captions"===(null!=(e=t.kind)?e:"subs")&&i.append(n2(this,"captions-indicator")),this.defaultSlot.append(i)}},uQ=new WeakSet,uZ=function(){let e=this.mediaSubtitlesShowing,t=this.getAttribute(eK.MEDIA_SUBTITLES_SHOWING),i=this.value!==t;if((null==e?void 0:e.length)&&i&&this.dispatchEvent(new tc.CustomEvent(eB.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:e})),!this.value||!i)return;let a=new tc.CustomEvent(eB.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)},sI.getTemplateHTML=function(e){return`
    ${n9.getTemplateHTML(e)}
    <slot name="captions-indicator" hidden>${sR}</slot>
  `};let sS=(e,t)=>{let i=e.getAttribute(t);return i?t6(i):[]},sC=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=it(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};tc.customElements.get("media-captions-menu")||tc.customElements.define("media-captions-menu",sI);let sL=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,sM=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,sD=e=>{e.setAttribute("data-captions-enabled",is(e).toString())},sx=e=>{e.setAttribute("aria-label",e7("closed captions"))};class sN extends sh{static get observedAttributes(){return[...super.observedAttributes,eK.MEDIA_SUBTITLES_LIST,eK.MEDIA_SUBTITLES_SHOWING,eK.MEDIA_LANG]}connectedCallback(){super.connectedCallback(),sx(this),sD(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===eK.MEDIA_SUBTITLES_SHOWING?sD(this):e===eK.MEDIA_LANG&&sx(this)}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=tf(this))?void 0:e.querySelector("media-captions-menu")}get mediaSubtitlesList(){return sO(this,eK.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){sP(this,eK.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return sO(this,eK.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){sP(this,eK.MEDIA_SUBTITLES_SHOWING,e)}}sN.getSlotTemplateHTML=function(){return`
    <style>
      :host([data-captions-enabled="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([data-captions-enabled="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${sL}</slot>
      <slot name="off">${sM}</slot>
    </slot>
  `},sN.getTooltipContentHTML=function(){return e7("Captions")};let sO=(e,t)=>{let i=e.getAttribute(t);return i?t6(i):[]},sP=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=it(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};tc.customElements.get("media-captions-menu-button")||tc.customElements.define("media-captions-menu-button",sN);var sU=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sW=(e,t,i)=>(sU(e,t,"read from private field"),i?i.call(e):t.get(e)),sH=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},sB=(e,t,i)=>(sU(e,t,"access private method"),i);let s$="rates";class sV extends n9{constructor(){super(),sH(this,uJ),sH(this,u1),sH(this,uX,new t9(this,s$,{defaultValue:rI})),sB(this,uJ,u0).call(this)}static get observedAttributes(){return[...super.observedAttributes,eK.MEDIA_PLAYBACK_RATE,s$]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===eK.MEDIA_PLAYBACK_RATE&&t!=i?(this.value=i,sB(this,uJ,u0).call(this)):e===s$&&t!=i&&(sW(this,uX).value=i,sB(this,uJ,u0).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",sB(this,u1,u2))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",sB(this,u1,u2))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:tf(this).querySelector("media-playback-rate-menu-button")}get rates(){return sW(this,uX)}set rates(e){e?Array.isArray(e)?sW(this,uX).value=e.join(" "):"string"==typeof e&&(sW(this,uX).value=e):sW(this,uX).value="",sB(this,uJ,u0).call(this)}get mediaPlaybackRate(){return tL(this,eK.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){tM(this,eK.MEDIA_PLAYBACK_RATE,e)}}uX=new WeakMap,uJ=new WeakSet,u0=function(){this.defaultSlot.textContent="";let e=this.mediaPlaybackRate,t=new Set(Array.from(sW(this,uX)).map(e=>Number(e)));for(let i of(e>0&&!t.has(e)&&t.add(e),Array.from(t).sort((e,t)=>e-t))){let t=n1({type:"radio",text:this.formatMenuItemText(`${i}x`,i),value:i.toString(),checked:e===i});t.prepend(n2(this,"checked-indicator")),this.defaultSlot.append(t)}},u1=new WeakSet,u2=function(){if(!this.value)return;let e=new tc.CustomEvent(eB.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},tc.customElements.get("media-playback-rate-menu")||tc.customElements.define("media-playback-rate-menu",sV);class sq extends sh{static get observedAttributes(){return[...super.observedAttributes,eK.MEDIA_PLAYBACK_RATE]}constructor(){var e;super(),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${null!=(e=this.mediaPlaybackRate)?e:1}x`}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===eK.MEDIA_PLAYBACK_RATE){let e=i?+i:NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",e7("Playback rate {playbackRate}",{playbackRate:t}))}}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:tf(this).querySelector("media-playback-rate-menu")}get mediaPlaybackRate(){return tL(this,eK.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){tM(this,eK.MEDIA_PLAYBACK_RATE,e)}}sq.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
      
      :host([aria-expanded="true"]) slot {
        display: block;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${e.mediaplaybackrate||1}x</slot>
  `},sq.getTooltipContentHTML=function(){return e7("Playback rate")},tc.customElements.get("media-playback-rate-menu-button")||tc.customElements.define("media-playback-rate-menu-button",sq);var sK=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sF=(e,t,i)=>(sK(e,t,"read from private field"),i?i.call(e):t.get(e)),sY=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},sG=(e,t,i,a)=>(sK(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),sj=(e,t,i)=>(sK(e,t,"access private method"),i);class sz extends n9{constructor(){super(...arguments),sY(this,u5),sY(this,u8),sY(this,u3,[]),sY(this,u4,{})}static get observedAttributes(){return[...super.observedAttributes,eK.MEDIA_RENDITION_LIST,eK.MEDIA_RENDITION_SELECTED,eK.MEDIA_RENDITION_UNAVAILABLE,eK.MEDIA_HEIGHT,eK.MEDIA_WIDTH]}static formatMenuItemText(e,t){return super.formatMenuItemText(e,t)}static formatRendition(e,{showBitrate:t=!1}={}){let i=`${Math.min(e.width,e.height)}p`;if(t&&e.bitrate){let t=e.bitrate/1e6,a=`${t.toFixed(+(t<1))} Mbps`;return`${i} (${a})`}return this.formatMenuItemText(i,e)}static compareRendition(e,t){var i,a;return t.height===e.height?(null!=(i=t.bitrate)?i:0)-(null!=(a=e.bitrate)?a:0):t.height-e.height}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),t!==i)switch(e){case eK.MEDIA_RENDITION_SELECTED:this.value=null!=i?i:"auto",sj(this,u5,u9).call(this);break;case eK.MEDIA_RENDITION_LIST:sG(this,u3,null==i?void 0:i.split(/\s+/).map(e1)),sj(this,u5,u9).call(this);break;case eK.MEDIA_HEIGHT:case eK.MEDIA_WIDTH:sj(this,u5,u9).call(this)}}connectedCallback(){super.connectedCallback(),this.addEventListener("change",sj(this,u8,u6))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",sj(this,u8,u6))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:tf(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return sF(this,u3)}set mediaRenditionList(e){sG(this,u3,e),sj(this,u5,u9).call(this)}get mediaRenditionSelected(){return tN(this,eK.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){tO(this,eK.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return tL(this,eK.MEDIA_HEIGHT)}set mediaHeight(e){tM(this,eK.MEDIA_HEIGHT,e)}get mediaWidth(){return tL(this,eK.MEDIA_WIDTH)}set mediaWidth(e){tM(this,eK.MEDIA_WIDTH,e)}compareRendition(e,t){return this.constructor.compareRendition(e,t)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}formatRendition(e,t){return this.constructor.formatRendition(e,t)}showRenditionBitrate(e){return this.mediaRenditionList.some(t=>t!==e&&t.height===e.height&&t.bitrate!==e.bitrate)}}u3=new WeakMap,u4=new WeakMap,u5=new WeakSet,u9=function(){let e,t=!this.mediaRenditionSelected;if(sF(this,u4).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&sF(this,u4).mediaHeight===this.mediaHeight&&sF(this,u4).mediaWidth===this.mediaWidth&&sF(this,u4).isAuto===t)return;sF(this,u4).mediaRenditionList=JSON.stringify(this.mediaRenditionList),sF(this,u4).mediaHeight=this.mediaHeight,sF(this,u4).mediaWidth=this.mediaWidth,sF(this,u4).isAuto=t;let i=this.mediaRenditionList.sort(this.compareRendition.bind(this)),a=i.find(e=>e.id===this.mediaRenditionSelected);for(let e of i)e.selected=e===a;for(let e of(this.defaultSlot.textContent="",i)){let i=n1({type:"radio",text:this.formatRendition(e,{showBitrate:this.showRenditionBitrate(e)}),value:`${e.id}`,checked:e.selected&&!t});i.prepend(n2(this,"checked-indicator")),this.defaultSlot.append(i)}let r=a&&this.showRenditionBitrate(a);t&&(a?e=this.formatMenuItemText(`${e7("Auto")} \u2022 ${this.formatRendition(a,{showBitrate:r})}`,a):this.mediaHeight>0&&this.mediaWidth>0&&(e=this.formatMenuItemText(`${e7("Auto")} (${Math.min(this.mediaWidth,this.mediaHeight)}p)`))),e||(e=this.formatMenuItemText(e7("Auto")));let n=n1({type:"radio",text:e,value:"auto",checked:t});n.dataset.description=e,n.prepend(n2(this,"checked-indicator")),this.defaultSlot.append(n)},u8=new WeakSet,u6=function(){if(null==this.value)return;let e=new tc.CustomEvent(eB.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},tc.customElements.get("media-rendition-menu")||tc.customElements.define("media-rendition-menu",sz);let sQ=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`;class sZ extends sh{static get observedAttributes(){return[...super.observedAttributes,eK.MEDIA_RENDITION_SELECTED,eK.MEDIA_RENDITION_UNAVAILABLE,eK.MEDIA_HEIGHT]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",e7("quality"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:tf(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return tN(this,eK.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){tO(this,eK.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return tL(this,eK.MEDIA_HEIGHT)}set mediaHeight(e){tM(this,eK.MEDIA_HEIGHT,e)}}sZ.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${sQ}</slot>
  `},sZ.getTooltipContentHTML=function(){return e7("Quality")},tc.customElements.get("media-rendition-menu-button")||tc.customElements.define("media-rendition-menu-button",sZ);var sX=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sJ=(e,t,i)=>(sX(e,t,"read from private field"),i?i.call(e):t.get(e)),s0=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},s1=(e,t,i,a)=>(sX(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),s2=(e,t,i)=>(sX(e,t,"access private method"),i);class s3 extends n9{constructor(){super(),s0(this,ce),s0(this,ci),s0(this,cr),s0(this,cs),s0(this,cd),s0(this,u7,!1),s0(this,cl,e=>{let t=e.target,i=(null==t?void 0:t.nodeName)==="VIDEO",a=s2(this,cs,co).call(this,t);(i||a)&&(sJ(this,u7)?s2(this,ci,ca).call(this):s2(this,cd,cu).call(this,e))}),s0(this,cc,e=>{let t=e.target,i=this.contains(t),a=2===e.button,r=(null==t?void 0:t.nodeName)==="VIDEO",n=s2(this,cs,co).call(this,t);i||a&&(r||n)||s2(this,ci,ca).call(this)}),s0(this,ch,e=>{"Escape"===e.key&&s2(this,ci,ca).call(this)}),s0(this,cm,e=>{var t,i;let a=e.target;if(null==(t=a.matches)?void 0:t.call(a,'button[invoke="copy"]')){let e=null==(i=a.closest("media-context-menu-item"))?void 0:i.querySelector('input[slot="copy"]');e&&navigator.clipboard.writeText(e.value)}s2(this,ci,ca).call(this)}),this.setAttribute("noautohide",""),s2(this,ce,ct).call(this)}connectedCallback(){super.connectedCallback(),tf(this).addEventListener("contextmenu",sJ(this,cl)),this.addEventListener("click",sJ(this,cm))}disconnectedCallback(){super.disconnectedCallback(),tf(this).removeEventListener("contextmenu",sJ(this,cl)),this.removeEventListener("click",sJ(this,cm)),document.removeEventListener("mousedown",sJ(this,cc)),document.removeEventListener("keydown",sJ(this,ch))}}u7=new WeakMap,ce=new WeakSet,ct=function(){this.hidden=!sJ(this,u7)},ci=new WeakSet,ca=function(){s1(this,u7,!1),s2(this,ce,ct).call(this)},cr=new WeakSet,cn=function(){document.querySelectorAll("media-context-menu").forEach(e=>{e!==this&&s2(e,ci,ca).call(e)})},cs=new WeakSet,co=function(e){return!!e&&(!!e.hasAttribute("slot")&&"media"===e.getAttribute("slot")||!!(e.nodeName.includes("-")&&e.tagName.includes("-"))&&(e.hasAttribute("src")||e.hasAttribute("poster")||e.hasAttribute("preload")||e.hasAttribute("playsinline")))},cl=new WeakMap,cd=new WeakSet,cu=function(e){e.preventDefault(),s2(this,cr,cn).call(this),s1(this,u7,!0),this.style.position="fixed",this.style.left=`${e.clientX}px`,this.style.top=`${e.clientY}px`,s2(this,ce,ct).call(this),document.addEventListener("mousedown",sJ(this,cc),{once:!0}),document.addEventListener("keydown",sJ(this,ch),{once:!0})},cc=new WeakMap,ch=new WeakMap,cm=new WeakMap,s3.getTemplateHTML=function(e){return`
      ${n9.getTemplateHTML(e)}
      <style>
        :host {
          --_menu-bg: rgb(20 20 30 / .8);
          background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
          min-width: var(--media-settings-menu-min-width, 170px);
          border-radius: 2px;
          overflow: hidden;
        }
      </style>
    `},tc.customElements.get("media-context-menu")||tc.customElements.define("media-context-menu",s3);class s4 extends sl{}s4.shadowRootOptions={mode:"open"},s4.getTemplateHTML=function(e){return`
    ${sl.getTemplateHTML.call(this,e)}
    <style>
        ::slotted(*) {
            color: var(--media-text-color, white);
            text-decoration: none;
            border: none;
            background: none;
            cursor: pointer;
            padding: 0;
            min-height: var(--media-control-height, 24px);
        }
    </style>
  `},tc.customElements.get("media-context-menu-item")||tc.customElements.define("media-context-menu-item",s4);var s5=e=>{throw TypeError(e)},s9=(e,t,i)=>t.has(e)||s5("Cannot "+i),s8=(e,t,i)=>(s9(e,t,"read from private field"),i?i.call(e):t.get(e)),s6=(e,t,i)=>t.has(e)?s5("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),s7=(e,t,i,a)=>(s9(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),oe=(e,t,i)=>(s9(e,t,"access private method"),i),ot=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if("u"<typeof DocumentFragment){class e extends ot{}globalThis.DocumentFragment=e}var oi,oa,or,on,os,oo,ol,od,ou,oc,oh,om,op,ov,ob,og,oE,of,oy,o_,oT,ok,oA,ow,oR,oI,oS,oC,oL,oM,oD,ox,oN,oO,oP,oU,oW,oH,oB,o$,oV,oq,oK,oF,oY,oG,oj,oz,oQ,oZ,oX,oJ,o0,o1,o2,o3,o4,o5,o9,o8,o6,o7,le,lt,li,la,lr,ln,ls,lo,ll,ld,lu,lc,lh,lm,lp,lv,lb,lg,lE,lf,ly,l_,lT,lk,lA,lw,lR,lI,lS,lC,lL,lM,lD,lx,lN,lO,lP,lU,lW,lH,lB,l$,lV,lq,lK,lF,lY,lG,lj,lz,lQ,lZ,lX,lJ,l0,l1,l2,l3,l4,l5,l9,l8,l6,l7,de,dt,di,da,dr,dn,ds,dl,dd,du,dc,dh,dm,dp,dv,db,dg,dE,df,dy,d_,dT,dk,dA,dw,dR,dI,dS,dC,dL,dM,dD,dx,dN,dO,dP,dU,dW,dH,dB,d$,dV,dq,dK,dF,dY,dG,dj,dz,dQ,dZ,dX,dJ,d0,d1,d2,d3,d4,d5,d9,d8,d6,d7,ue,ut,ui,ua,ur,un,us,uo,ul,ud,uu,uc,uh,um,up,uv,ub,ug,uE,uf,uy,u_,uT,uk,uA,uw,uR,uI,uS,uC,uL,uM,uD,ux,uN,uO,uP,uU,uW,uH,uB,u$,uV,uq,uK,uF,uY,uG,uj,uz,uQ,uZ,uX,uJ,u0,u1,u2,u3,u4,u5,u9,u8,u6,u7,ce,ct,ci,ca,cr,cn,cs,co,cl,cd,cu,cc,ch,cm,cp,cv=class extends ot{},cb=class{constructor(e,t={}){s6(this,cp),s7(this,cp,null==t?void 0:t.detail)}get detail(){return s8(this,cp)}initCustomEvent(){}};cp=new WeakMap;var cg={document:{createElement:function(e,t){return new cv}},DocumentFragment,customElements:{get(e){},define(e,t,i){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(cv)},CustomEvent:cb,EventTarget:ot,HTMLElement:cv,HTMLVideoElement:class extends ot{}},cE="u"<typeof window||void 0===globalThis.customElements,cf=cE?cg:globalThis,cy=cE?cg.document:globalThis.document;function c_(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function cT(e){return e.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase())}function ck(e){if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}function cA(e){let t=(function(e){let t={};for(let i in e)null!=e[i]&&(t[i]=e[i]);return new URLSearchParams(t)})(e).toString();return t?"?"+t:""}var cw,cR,cI,cS=(e,t)=>!!e&&!!t&&(!!e.contains(t)||cS(e,t.getRootNode().host)),cC="mux.com",cL=(()=>{try{return"3.12.0"}catch{}return"UNKNOWN"})(),cM=e=>{if(e){if([s.U4.LIVE,s.U4.ON_DEMAND].includes(e))return e;if(null!=e&&e.includes("live"))return s.U4.LIVE}},cD={crossorigin:"crossOrigin",playsinline:"playsInline"},cx=class{constructor(e,t){s6(this,cw),s6(this,cR),s6(this,cI,[]),s7(this,cw,e),s7(this,cR,t)}[Symbol.iterator](){return s8(this,cI).values()}get length(){return s8(this,cI).length}get value(){var e;return null!=(e=s8(this,cI).join(" "))?e:""}set value(e){var t;e!==this.value&&(s7(this,cI,[]),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return s8(this,cI)[e]}values(){return s8(this,cI).values()}keys(){return s8(this,cI).keys()}forEach(e){s8(this,cI).forEach(e)}add(...e){var t,i;e.forEach(e=>{this.contains(e)||s8(this,cI).push(e)}),(""!==this.value||null!=(t=s8(this,cw))&&t.hasAttribute(`${s8(this,cR)}`))&&null!=(i=s8(this,cw))&&i.setAttribute(`${s8(this,cR)}`,`${this.value}`)}remove(...e){var t;e.forEach(e=>{s8(this,cI).splice(s8(this,cI).indexOf(e),1)}),null==(t=s8(this,cw))||t.setAttribute(`${s8(this,cR)}`,`${this.value}`)}contains(e){return s8(this,cI).includes(e)}toggle(e,t){return void 0!==t?t?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){this.remove(e),this.add(t)}};cw=new WeakMap,cR=new WeakMap,cI=new WeakMap;var cN=`[mux-player ${cL}]`;function cO(...e){console.warn(cN,...e)}function cP(...e){console.error(cN,...e)}function cU(e){var t;let i=null!=(t=e.message)?t:"";e.context&&(i+=` ${e.context}`),e.file&&(i+=` ${(0,s.Ru)("Read more: ")}
https://github.com/muxinc/elements/blob/main/errors/${e.file}`),cO(i)}var cW={AUTOPLAY:"autoplay",CROSSORIGIN:"crossorigin",LOOP:"loop",MUTED:"muted",PLAYSINLINE:"playsinline",PRELOAD:"preload"},cH={VOLUME:"volume",PLAYBACKRATE:"playbackrate",MUTED:"muted"},cB=Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}}),c$=[...Object.values(cW).filter(e=>cW.PLAYSINLINE!==e),...Object.values(cH)];function cV(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}var cq=class extends cf.HTMLElement{static get observedAttributes(){return c$}constructor(){super()}attributeChangedCallback(e,t,i){var a,r;switch(e){case cH.MUTED:this.media&&(this.media.muted=null!=i,this.media.defaultMuted=null!=i);return;case cH.VOLUME:{let e=null!=(a=ck(i))?a:1;this.media&&(this.media.volume=e);return}case cH.PLAYBACKRATE:{let e=null!=(r=ck(i))?r:1;this.media&&(this.media.playbackRate=e,this.media.defaultPlaybackRate=e);return}}}play(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.play())?t:Promise.reject()}pause(){var e;null==(e=this.media)||e.pause()}load(){var e;null==(e=this.media)||e.load()}get media(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("mux-video")}get audioTracks(){return this.media.audioTracks}get videoTracks(){return this.media.videoTracks}get audioRenditions(){return this.media.audioRenditions}get videoRenditions(){return this.media.videoRenditions}get paused(){var e,t;return null==(t=null==(e=this.media)?void 0:e.paused)||t}get duration(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.duration)?t:NaN}get ended(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.ended)&&t}get buffered(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.buffered)?t:cB}get seekable(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.seekable)?t:cB}get readyState(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.readyState)?t:0}get videoWidth(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.videoWidth)?t:0}get videoHeight(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.videoHeight)?t:0}get currentSrc(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.currentSrc)?t:""}get currentTime(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.currentTime)?t:0}set currentTime(e){this.media&&(this.media.currentTime=Number(e))}get volume(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.volume)?t:1}set volume(e){this.media&&(this.media.volume=Number(e))}get playbackRate(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.playbackRate)?t:1}set playbackRate(e){this.media&&(this.media.playbackRate=Number(e))}get defaultPlaybackRate(){var e;return null!=(e=ck(this.getAttribute(cH.PLAYBACKRATE)))?e:1}set defaultPlaybackRate(e){null!=e?this.setAttribute(cH.PLAYBACKRATE,`${e}`):this.removeAttribute(cH.PLAYBACKRATE)}get crossOrigin(){return cV(this,cW.CROSSORIGIN)}set crossOrigin(e){this.setAttribute(cW.CROSSORIGIN,`${e}`)}get autoplay(){return null!=cV(this,cW.AUTOPLAY)}set autoplay(e){e?this.setAttribute(cW.AUTOPLAY,"string"==typeof e?e:""):this.removeAttribute(cW.AUTOPLAY)}get loop(){return null!=cV(this,cW.LOOP)}set loop(e){e?this.setAttribute(cW.LOOP,""):this.removeAttribute(cW.LOOP)}get muted(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.muted)&&t}set muted(e){this.media&&(this.media.muted=!!e)}get defaultMuted(){return null!=cV(this,cW.MUTED)}set defaultMuted(e){e?this.setAttribute(cW.MUTED,""):this.removeAttribute(cW.MUTED)}get playsInline(){return null!=cV(this,cW.PLAYSINLINE)}set playsInline(e){cP("playsInline is set to true by default and is not currently supported as a setter.")}get preload(){return this.media?this.media.preload:this.getAttribute("preload")}set preload(e){["","none","metadata","auto"].includes(e)?this.setAttribute(cW.PRELOAD,e):this.removeAttribute(cW.PRELOAD)}},cK=`:host {
  --media-control-display: var(--controls);
  --media-loading-indicator-display: var(--loading-indicator);
  --media-dialog-display: var(--dialog);
  --media-play-button-display: var(--play-button);
  --media-live-button-display: var(--live-button);
  --media-seek-backward-button-display: var(--seek-backward-button);
  --media-seek-forward-button-display: var(--seek-forward-button);
  --media-mute-button-display: var(--mute-button);
  --media-captions-button-display: var(--captions-button);
  --media-captions-menu-button-display: var(--captions-menu-button, var(--media-captions-button-display));
  --media-rendition-menu-button-display: var(--rendition-menu-button);
  --media-audio-track-menu-button-display: var(--audio-track-menu-button);
  --media-airplay-button-display: var(--airplay-button);
  --media-pip-button-display: var(--pip-button);
  --media-fullscreen-button-display: var(--fullscreen-button);
  --media-cast-button-display: var(--cast-button, var(--_cast-button-drm-display));
  --media-playback-rate-button-display: var(--playback-rate-button);
  --media-playback-rate-menu-button-display: var(--playback-rate-menu-button);
  --media-volume-range-display: var(--volume-range);
  --media-time-range-display: var(--time-range);
  --media-time-display-display: var(--time-display);
  --media-duration-display-display: var(--duration-display);
  --media-title-display-display: var(--title-display);

  display: inline-block;
  line-height: 0;
  width: 100%;
}

a {
  color: #fff;
  font-size: 0.9em;
  text-decoration: underline;
}

media-theme {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
  direction: ltr;
}

media-poster-image {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
}

media-poster-image:not([src]):not([placeholdersrc]) {
  display: none;
}

::part(top),
[part~='top'] {
  --media-control-display: var(--controls, var(--top-controls));
  --media-play-button-display: var(--play-button, var(--top-play-button));
  --media-live-button-display: var(--live-button, var(--top-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--top-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--top-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--top-mute-button));
  --media-captions-button-display: var(--captions-button, var(--top-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--top-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--top-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--top-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--top-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--top-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--top-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--top-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--top-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --captions-menu-button,
    var(--media-playback-rate-button-display, var(--top-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--top-volume-range));
  --media-time-range-display: var(--time-range, var(--top-time-range));
  --media-time-display-display: var(--time-display, var(--top-time-display));
  --media-duration-display-display: var(--duration-display, var(--top-duration-display));
  --media-title-display-display: var(--title-display, var(--top-title-display));
}

::part(center),
[part~='center'] {
  --media-control-display: var(--controls, var(--center-controls));
  --media-play-button-display: var(--play-button, var(--center-play-button));
  --media-live-button-display: var(--live-button, var(--center-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--center-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--center-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--center-mute-button));
  --media-captions-button-display: var(--captions-button, var(--center-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--center-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--center-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--center-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--center-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--center-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--center-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--center-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--center-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--center-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--center-volume-range));
  --media-time-range-display: var(--time-range, var(--center-time-range));
  --media-time-display-display: var(--time-display, var(--center-time-display));
  --media-duration-display-display: var(--duration-display, var(--center-duration-display));
}

::part(bottom),
[part~='bottom'] {
  --media-control-display: var(--controls, var(--bottom-controls));
  --media-play-button-display: var(--play-button, var(--bottom-play-button));
  --media-live-button-display: var(--live-button, var(--bottom-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--bottom-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--bottom-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--bottom-mute-button));
  --media-captions-button-display: var(--captions-button, var(--bottom-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--bottom-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--bottom-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--bottom-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--bottom-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--bottom-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--bottom-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--bottom-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--bottom-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--bottom-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--bottom-volume-range));
  --media-time-range-display: var(--time-range, var(--bottom-time-range));
  --media-time-display-display: var(--time-display, var(--bottom-time-display));
  --media-duration-display-display: var(--duration-display, var(--bottom-duration-display));
  --media-title-display-display: var(--title-display, var(--bottom-title-display));
}

:host([no-tooltips]) {
  --media-tooltip-display: none;
}
`,cF=new WeakMap,cY=class e{constructor(e,t){this.element=e,this.type=t,this.element.addEventListener(this.type,this);let i=cF.get(this.element);i&&i.set(this.type,this)}set(e){if("function"==typeof e)this.handleEvent=e.bind(this.element);else if("object"==typeof e&&"function"==typeof e.handleEvent)this.handleEvent=e.handleEvent.bind(e);else{this.element.removeEventListener(this.type,this);let e=cF.get(this.element);e&&e.delete(this.type)}}static for(t){cF.has(t.element)||cF.set(t.element,new Map);let i=t.attributeName.slice(2),a=cF.get(t.element);return a&&a.has(i)?a.get(i):new e(t.element,i)}},cG=new Map,cj=new WeakMap,cz=new WeakMap,cQ=class{constructor(e,t,i){this.strings=e,this.values=t,this.processor=i,this.stringsKey=this.strings.join("\x01")}get template(){if(cG.has(this.stringsKey))return cG.get(this.stringsKey);{let e=cy.createElement("template"),t=this.strings.length-1;return e.innerHTML=this.strings.reduce((e,i,a)=>e+i+(a<t?`{{ ${a} }}`:""),""),cG.set(this.stringsKey,e),e}}renderInto(e){var t;let i=this.template;if(cj.get(e)!==i){cj.set(e,i);let t=new nb(i,this.values,this.processor);cz.set(e,t),e instanceof nA?e.replace(...t.children):e.appendChild(t);return}let a=cz.get(e);null==(t=null==a?void 0:a.update)||t.call(a,this.values)}},cZ={processCallback(e,t,i){var a;if(i)for(let[e,r]of t)e in i&&function(e,t){(function(e,t){if(e instanceof nk&&t instanceof Element){let i=e.element;return i[e.attributeName]!==t&&(e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),i[e.attributeName]=t),!0}return!1})(e,t)||function(e,t){if("boolean"==typeof t&&e instanceof nk){let i=e.attributeNamespace;return t!==e.element.hasAttributeNS(i,e.attributeName)&&(e.booleanValue=t),!0}return!1}(e,t)||e instanceof nk&&e.attributeName.startsWith("on")&&(cY.for(e).set(t),e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),1)||!1===t&&e instanceof nA&&(e.replace(""),1)||t instanceof cQ&&e instanceof nA&&(t.renderInto(e),1)||t instanceof DocumentFragment&&e instanceof nA&&(t.childNodes.length&&e.replace(...t.childNodes),1)||function(e,t){if(e instanceof nk){let i=e.attributeNamespace,a=e.element.getAttributeNS(i,e.attributeName);return String(t)!==a&&(e.value=String(t))}e.value=String(t)}(e,t)}(r,null!=(a=i[e])?a:"")}};function cX(e,...t){return new cQ(e,t,cZ)}var cJ=Object.values({TOP:"top",CENTER:"center",BOTTOM:"bottom",LAYER:"layer",MEDIA_LAYER:"media-layer",POSTER_LAYER:"poster-layer",VERTICAL_LAYER:"vertical-layer",CENTERED_LAYER:"centered-layer",GESTURE_LAYER:"gesture-layer",CONTROLLER_LAYER:"controller",BUTTON:"button",RANGE:"range",THUMB:"thumb",DISPLAY:"display",CONTROL_BAR:"control-bar",MENU_BUTTON:"menu-button",MENU:"menu",MENU_ITEM:"menu-item",OPTION:"option",POSTER:"poster",LIVE:"live",PLAY:"play",PRE_PLAY:"pre-play",SEEK_BACKWARD:"seek-backward",SEEK_FORWARD:"seek-forward",MUTE:"mute",CAPTIONS:"captions",AIRPLAY:"airplay",PIP:"pip",FULLSCREEN:"fullscreen",CAST:"cast",PLAYBACK_RATE:"playback-rate",VOLUME:"volume",TIME:"time",TITLE:"title",AUDIO_TRACK:"audio-track",RENDITION:"rendition"}).join(", "),c0=e=>e.charAt(0).toUpperCase()+e.slice(1),c1=(e,t)=>{let i=(e=>{if(e.muxCode){if(e.muxCode===s.Ks.NETWORK_TOKEN_EXPIRED)return"403-expired-token.md";if(e.muxCode===s.Ks.NETWORK_TOKEN_MALFORMED)return"403-malformatted-token.md";if([s.Ks.NETWORK_TOKEN_AUD_MISMATCH,s.Ks.NETWORK_TOKEN_AUD_MISSING].includes(e.muxCode))return"403-incorrect-aud-value.md";if(e.muxCode===s.Ks.NETWORK_TOKEN_SUB_MISMATCH)return"403-playback-id-mismatch.md";if(e.muxCode===s.Ks.NETWORK_TOKEN_MISSING)return"missing-signed-tokens.md";if(e.muxCode===s.Ks.NETWORK_NOT_FOUND)return"404-not-found.md";if(e.muxCode===s.Ks.NETWORK_NOT_READY)return"412-not-playable.md"}if(e.code){if(e.code===s.FJ.MEDIA_ERR_NETWORK)return"";if(e.code===s.FJ.MEDIA_ERR_DECODE)return"media-decode-error.md";if(e.code===s.FJ.MEDIA_ERR_SRC_NOT_SUPPORTED)return"media-src-not-supported.md"}return""})(e);return{message:e.message,context:e.context,file:i}},c2=`<template id="media-theme-gerwig">
  <style>
    @keyframes pre-play-hide {
      0% {
        transform: scale(1);
        opacity: 1;
      }

      30% {
        transform: scale(0.7);
      }

      100% {
        transform: scale(1.5);
        opacity: 0;
      }
    }

    :host {
      --_primary-color: var(--media-primary-color, #fff);
      --_secondary-color: var(--media-secondary-color, transparent);
      --_accent-color: var(--media-accent-color, #fa50b5);
      --_text-color: var(--media-text-color, #000);

      --media-icon-color: var(--_primary-color);
      --media-control-background: var(--_secondary-color);
      --media-control-hover-background: var(--_accent-color);
      --media-time-buffered-color: rgba(255, 255, 255, 0.4);
      --media-preview-time-text-shadow: none;
      --media-control-height: 14px;
      --media-control-padding: 6px;
      --media-tooltip-container-margin: 6px;
      --media-tooltip-distance: 18px;

      color: var(--_primary-color);
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    :host([audio]) {
      --_secondary-color: var(--media-secondary-color, black);
      --media-preview-time-text-shadow: none;
    }

    :host([audio]) ::slotted([slot='media']) {
      height: 0px;
    }

    :host([audio]) media-loading-indicator {
      display: none;
    }

    :host([audio]) media-controller {
      background: transparent;
    }

    :host([audio]) media-controller::part(vertical-layer) {
      background: transparent;
    }

    :host([audio]) media-control-bar {
      width: 100%;
      background-color: var(--media-control-background);
    }

    /*
     * 0.433s is the transition duration for VTT Regions.
     * Borrowed here, so the captions don't move too fast.
     */
    media-controller {
      --media-webkit-text-track-transform: translateY(0) scale(0.98);
      --media-webkit-text-track-transition: transform 0.433s ease-out 0.3s;
    }
    media-controller:is([mediapaused], :not([userinactive])) {
      --media-webkit-text-track-transform: translateY(-50px) scale(0.98);
      --media-webkit-text-track-transition: transform 0.15s ease;
    }

    /*
     * CSS specific to iOS devices.
     * See: https://stackoverflow.com/questions/30102792/css-media-query-to-target-only-ios-devices/60220757#60220757
     */
    @supports (-webkit-touch-callout: none) {
      /* Disable subtitle adjusting for iOS Safari */
      media-controller[mediaisfullscreen] {
        --media-webkit-text-track-transform: unset;
        --media-webkit-text-track-transition: unset;
      }
    }

    media-time-range {
      --media-box-padding-left: 6px;
      --media-box-padding-right: 6px;
      --media-range-bar-color: var(--_accent-color);
      --media-time-range-buffered-color: var(--_primary-color);
      --media-range-track-color: transparent;
      --media-range-track-background: rgba(255, 255, 255, 0.4);
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_accent-color) 25%,
        var(--_accent-color)
      );
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-transform: scale(0);
      --media-range-thumb-transition: transform 0.3s;
      --media-range-thumb-opacity: 1;
      --media-preview-background: var(--_primary-color);
      --media-box-arrow-background: var(--_primary-color);
      --media-preview-thumbnail-border: 5px solid var(--_primary-color);
      --media-preview-border-radius: 5px;
      --media-text-color: var(--_text-color);
      --media-control-hover-background: transparent;
      --media-preview-chapter-text-shadow: none;
      color: var(--_accent-color);
      padding: 0 6px;
    }

    :host([audio]) media-time-range {
      --media-preview-time-padding: 1.5px 6px;
      --media-preview-box-margin: 0 0 -5px;
    }

    media-time-range:hover {
      --media-range-thumb-transform: scale(1);
    }

    media-preview-thumbnail {
      border-bottom-width: 0;
    }

    [part~='menu'] {
      border-radius: 2px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      bottom: 50px;
      padding: 2.5px 10px;
    }

    [part~='menu']::part(indicator) {
      fill: var(--_accent-color);
    }

    [part~='menu']::part(menu-item) {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding: 6px 10px;
      min-height: 34px;
    }

    [part~='menu']::part(checked) {
      font-weight: 700;
    }

    media-captions-menu,
    media-rendition-menu,
    media-audio-track-menu,
    media-playback-rate-menu {
      position: absolute; /* ensure they don't take up space in DOM on load */
      --media-menu-background: var(--_primary-color);
      --media-menu-item-checked-background: transparent;
      --media-text-color: var(--_text-color);
      --media-menu-item-hover-background: transparent;
      --media-menu-item-hover-outline: var(--_accent-color) solid 1px;
    }

    media-rendition-menu {
      min-width: 140px;
    }

    /* The icon is a circle so make it 16px high instead of 14px for more balance. */
    media-audio-track-menu-button {
      --media-control-padding: 5px;
      --media-control-height: 16px;
    }

    media-playback-rate-menu-button {
      --media-control-padding: 6px 3px;
      min-width: 4.4ch;
    }

    media-playback-rate-menu {
      --media-menu-flex-direction: row;
      --media-menu-item-checked-background: var(--_accent-color);
      --media-menu-item-checked-indicator-display: none;
      margin-right: 6px;
      padding: 0;
      --media-menu-gap: 0.25em;
    }

    media-playback-rate-menu[part~='menu']::part(menu-item) {
      padding: 6px 6px 6px 8px;
    }

    media-playback-rate-menu[part~='menu']::part(checked) {
      color: #fff;
    }

    :host(:not([audio])) media-time-range {
      /* Adding px is required here for calc() */
      --media-range-padding: 0px;
      background: transparent;
      z-index: 10;
      height: 10px;
      bottom: -3px;
      width: 100%;
    }

    media-control-bar :is([role='button'], [role='switch'], button) {
      line-height: 0;
    }

    media-control-bar :is([part*='button'], [part*='range'], [part*='display']) {
      border-radius: 3px;
    }

    .spacer {
      flex-grow: 1;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    media-control-bar[slot~='top-chrome'] {
      min-height: 42px;
      pointer-events: none;
    }

    media-control-bar {
      --gradient-steps:
        hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%, hsl(0 0% 0% / 0.104) 22.5%,
        hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%, hsl(0 0% 0% / 0.45) 47.1%,
        hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%, hsl(0 0% 0% / 0.825) 71%,
        hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%, hsl(0 0% 0%) 100%;
    }

    :host([title]) media-control-bar[slot='top-chrome']::before,
    :host([videotitle]) media-control-bar[slot='top-chrome']::before {
      content: '';
      position: absolute;
      width: 100%;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to top, var(--gradient-steps));
      opacity: 0.8;
      pointer-events: none;
    }

    :host(:not([audio])) media-control-bar[part~='bottom']::before {
      content: '';
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to bottom, var(--gradient-steps));
      opacity: 0.8;
      z-index: 1;
      pointer-events: none;
    }

    media-control-bar[part~='bottom'] > * {
      z-index: 20;
    }

    media-control-bar[part~='bottom'] {
      padding: 6px 6px;
    }

    media-control-bar[slot~='top-chrome'] > * {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      position: relative;
    }

    media-controller::part(vertical-layer) {
      transition: background-color 1s;
    }

    media-controller:is([mediapaused], :not([userinactive]))::part(vertical-layer) {
      background-color: var(--controls-backdrop-color, var(--controls, transparent));
      transition: background-color 0.25s;
    }

    .center-controls {
      --media-button-icon-width: 100%;
      --media-button-icon-height: auto;
      --media-tooltip-display: none;
      pointer-events: none;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      paint-order: stroke;
      stroke: rgba(102, 102, 102, 1);
      stroke-width: 0.3px;
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    .center-controls media-play-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      --media-control-padding: 0;
      width: 40px;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    [breakpointsm] .center-controls media-play-button {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      transition: background 0.4s;
      padding: 24px;
      --media-control-background: #000;
      --media-control-hover-background: var(--_accent-color);
    }

    .center-controls media-seek-backward-button,
    .center-controls media-seek-forward-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      margin: 0 20px;
      width: max(33px, min(8%, 40px));
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback {
      display: grid;
      align-items: initial;
      justify-content: initial;
      height: 100%;
      overflow: hidden;
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback media-play-button {
      place-self: var(--_pre-playback-place, center);
      grid-area: 1 / 1;
      margin: 16px;
    }

    /* Show and hide controls or pre-playback state */

    [breakpointsm]:is([mediahasplayed], :not([mediapaused])):not([audio])
      .center-controls.pre-playback
      media-play-button {
      /* Using \`forwards\` would lead to a laggy UI after the animation got in the end state */
      animation: 0.3s linear pre-play-hide;
      opacity: 0;
      pointer-events: none;
    }

    .autoplay-unmute {
      --media-control-hover-background: transparent;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .autoplay-unmute-btn {
      --media-control-height: 16px;
      border-radius: 8px;
      background: #000;
      color: var(--_primary-color);
      display: flex;
      align-items: center;
      padding: 8px 16px;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
    }

    .autoplay-unmute-btn:hover {
      background: var(--_accent-color);
    }

    [breakpointsm] .autoplay-unmute-btn {
      --media-control-height: 30px;
      padding: 14px 24px;
      font-size: 26px;
    }

    .autoplay-unmute-btn svg {
      margin: 0 6px 0 0;
    }

    [breakpointsm] .autoplay-unmute-btn svg {
      margin: 0 10px 0 0;
    }

    media-controller:not([audio]):not([mediahasplayed]) *:is(media-control-bar, media-time-range) {
      display: none;
    }

    media-error-dialog:not([mediaerrorcode]) {
      opacity: 0;
    }

    media-loading-indicator {
      --media-loading-icon-width: 100%;
      --media-button-icon-height: auto;
      display: var(--media-control-display, var(--media-loading-indicator-display, flex));
      pointer-events: none;
      position: absolute;
      width: min(15%, 150px);
      flex-flow: row;
      align-items: center;
      justify-content: center;
    }

    /* Intentionally don't target the div for transition but the children
     of the div. Prevents messing with media-chrome's autohide feature. */
    media-loading-indicator + div * {
      transition: opacity 0.15s;
      opacity: 1;
    }

    media-loading-indicator[medialoading]:not([mediapaused]) ~ div > * {
      opacity: 0;
      transition-delay: 400ms;
    }

    media-volume-range {
      width: min(100%, 100px);
      --media-range-padding-left: 10px;
      --media-range-padding-right: 10px;
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_primary-color) 25%,
        var(--_primary-color)
      );
      --media-control-hover-background: none;
    }

    media-time-display {
      white-space: nowrap;
    }

    /* Generic style for explicitly disabled controls */
    media-control-bar[part~='bottom'] [disabled],
    media-control-bar[part~='bottom'] [aria-disabled='true'] {
      opacity: 60%;
      cursor: not-allowed;
    }

    media-text-display {
      --media-font-size: 16px;
      --media-control-padding: 14px;
      font-weight: 500;
    }

    media-play-button.animated *:is(g, path) {
      transition: all 0.3s;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt1 {
      opacity: 0;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt2 {
      transform-origin: center center;
      transform: scaleY(0);
    }

    media-play-button.animated[mediapaused] .play-icon {
      clip-path: inset(0 0 0 0);
    }

    media-play-button.animated:not([mediapaused]) .play-icon {
      clip-path: inset(0 0 0 100%);
    }

    media-seek-forward-button,
    media-seek-backward-button {
      --media-font-weight: 400;
    }

    .mute-icon {
      display: inline-block;
    }

    .mute-icon :is(path, g) {
      transition: opacity 0.5s;
    }

    .muted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='low'] :is(.volume-medium, .volume-high),
    media-mute-button[mediavolumelevel='medium'] :is(.volume-high) {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .unmuted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .muted {
      opacity: 1;
    }

    /**
     * Our defaults for these buttons are to hide them at small sizes
     * users can override this with CSS
     */
    media-controller:not([breakpointsm]):not([audio]) {
      --bottom-play-button: none;
      --bottom-seek-backward-button: none;
      --bottom-seek-forward-button: none;
      --bottom-time-display: none;
      --bottom-playback-rate-menu-button: none;
      --bottom-pip-button: none;
    }

    [part='mux-badge'] {
      position: absolute;
      bottom: 10px;
      right: 10px;
      z-index: 2;
      opacity: 0.6;
      transition:
        opacity 0.2s ease-in-out,
        bottom 0.2s ease-in-out;
    }

    [part='mux-badge']:hover {
      opacity: 1;
    }

    [part='mux-badge'] a {
      font-size: 14px;
      font-family: var(--_font-family);
      color: var(--_primary-color);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    [part='mux-badge'] .mux-badge-text {
      transition: opacity 0.5s ease-in-out;
      opacity: 0;
    }

    [part='mux-badge'] .mux-badge-logo {
      width: 40px;
      height: auto;
      display: inline-block;
    }

    [part='mux-badge'] .mux-badge-logo svg {
      width: 100%;
      height: 100%;
      fill: white;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'],
    media-controller:not([userinactive]) [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      transition: bottom 0.1s ease-in-out;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      transition: bottom 0.2s ease-in-out 0.62s;
    }

    media-controller:not([userinactive]) [part='mux-badge'] .mux-badge-text,
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] .mux-badge-text {
      opacity: 1;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] .mux-badge-text {
      opacity: 0;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive])[mediahasplayed] [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      bottom: calc(28px + var(--media-control-height, 0px) + var(--media-control-padding, 0px) * 2);
    }
  </style>

  <template partial="TitleDisplay">
    <template if="videotitle">
      <template if="videotitle != true">
        <media-text-display part="top title display" class="title-display">{{videotitle}}</media-text-display>
      </template>
    </template>
    <template if="!videotitle">
      <template if="title">
        <media-text-display part="top title display" class="title-display">{{title}}</media-text-display>
      </template>
    </template>
  </template>

  <template partial="PlayButton">
    <media-play-button
      part="{{section ?? 'bottom'}} play button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      class="animated"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon">
        <g class="play-icon">
          <path
            d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
          />
        </g>
        <g class="pause-icon">
          <path
            class="pause-icon-pt1"
            d="M5.90709 0H2.96889C2.46857 0 2.06299 0.405585 2.06299 0.9059V13.0941C2.06299 13.5944 2.46857 14 2.96889 14H5.90709C6.4074 14 6.81299 13.5944 6.81299 13.0941V0.9059C6.81299 0.405585 6.4074 0 5.90709 0Z"
          />
          <path
            class="pause-icon-pt2"
            d="M15.1571 0H12.2189C11.7186 0 11.313 0.405585 11.313 0.9059V13.0941C11.313 13.5944 11.7186 14 12.2189 14H15.1571C15.6574 14 16.063 13.5944 16.063 13.0941V0.9059C16.063 0.405585 15.6574 0 15.1571 0Z"
          />
        </g>
      </svg>
    </media-play-button>
  </template>

  <template partial="PrePlayButton">
    <media-play-button
      part="{{section ?? 'center'}} play button pre-play"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon" style="transform: translate(3px, 0)">
        <path
          d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
        />
      </svg>
    </media-play-button>
  </template>

  <template partial="SeekBackwardButton">
    <media-seek-backward-button
      seekoffset="{{backwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-backward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <path
          d="M3.65 2.07888L0.0864 6.7279C-0.0288 6.87812 -0.0288 7.12188 0.0864 7.2721L3.65 11.9211C3.7792 12.0896 4 11.9703 4 11.7321V2.26787C4 2.02968 3.7792 1.9104 3.65 2.07888Z"
        />
        <text transform="translate(6 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
          {{backwardseekoffset}}
        </text>
      </svg>
    </media-seek-backward-button>
  </template>

  <template partial="SeekForwardButton">
    <media-seek-forward-button
      seekoffset="{{forwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-forward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <g>
          <text transform="translate(-1 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
            {{forwardseekoffset}}
          </text>
          <path
            d="M18.35 11.9211L21.9136 7.2721C22.0288 7.12188 22.0288 6.87812 21.9136 6.7279L18.35 2.07888C18.2208 1.91041 18 2.02968 18 2.26787V11.7321C18 11.9703 18.2208 12.0896 18.35 11.9211Z"
          />
        </g>
      </svg>
    </media-seek-forward-button>
  </template>

  <template partial="MuteButton">
    <media-mute-button part="bottom mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" slot="icon" class="mute-icon" aria-hidden="true">
        <g class="unmuted">
          <path
            d="M6.76786 1.21233L3.98606 3.98924H1.19937C0.593146 3.98924 0.101743 4.51375 0.101743 5.1607V6.96412L0 6.99998L0.101743 7.03583V8.83926C0.101743 9.48633 0.593146 10.0108 1.19937 10.0108H3.98606L6.76773 12.7877C7.23561 13.2547 8 12.9007 8 12.2171V1.78301C8 1.09925 7.23574 0.745258 6.76786 1.21233Z"
          />
          <path
            class="volume-low"
            d="M10 3.54781C10.7452 4.55141 11.1393 5.74511 11.1393 6.99991C11.1393 8.25471 10.7453 9.44791 10 10.4515L10.7988 11.0496C11.6734 9.87201 12.1356 8.47161 12.1356 6.99991C12.1356 5.52821 11.6735 4.12731 10.7988 2.94971L10 3.54781Z"
          />
          <path
            class="volume-medium"
            d="M12.3778 2.40086C13.2709 3.76756 13.7428 5.35806 13.7428 7.00026C13.7428 8.64246 13.2709 10.233 12.3778 11.5992L13.2106 12.1484C14.2107 10.6185 14.739 8.83796 14.739 7.00016C14.739 5.16236 14.2107 3.38236 13.2106 1.85156L12.3778 2.40086Z"
          />
          <path
            class="volume-high"
            d="M15.5981 0.75L14.7478 1.2719C15.7937 2.9919 16.3468 4.9723 16.3468 7C16.3468 9.0277 15.7937 11.0082 14.7478 12.7281L15.5981 13.25C16.7398 11.3722 17.343 9.211 17.343 7C17.343 4.789 16.7398 2.6268 15.5981 0.75Z"
          />
        </g>
        <g class="muted">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.39976 4.98924H1.19937C1.19429 4.98924 1.17777 4.98961 1.15296 5.01609C1.1271 5.04369 1.10174 5.09245 1.10174 5.1607V8.83926C1.10174 8.90761 1.12714 8.95641 1.15299 8.984C1.17779 9.01047 1.1943 9.01084 1.19937 9.01084H4.39977L7 11.6066V2.39357L4.39976 4.98924ZM7.47434 1.92006C7.4743 1.9201 7.47439 1.92002 7.47434 1.92006V1.92006ZM6.76773 12.7877L3.98606 10.0108H1.19937C0.593146 10.0108 0.101743 9.48633 0.101743 8.83926V7.03583L0 6.99998L0.101743 6.96412V5.1607C0.101743 4.51375 0.593146 3.98924 1.19937 3.98924H3.98606L6.76786 1.21233C7.23574 0.745258 8 1.09925 8 1.78301V12.2171C8 12.9007 7.23561 13.2547 6.76773 12.7877Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.2677 9.30323C15.463 9.49849 15.7796 9.49849 15.9749 9.30323C16.1701 9.10796 16.1701 8.79138 15.9749 8.59612L14.2071 6.82841L15.9749 5.06066C16.1702 4.8654 16.1702 4.54882 15.9749 4.35355C15.7796 4.15829 15.4631 4.15829 15.2678 4.35355L13.5 6.1213L11.7322 4.35348C11.537 4.15822 11.2204 4.15822 11.0251 4.35348C10.8298 4.54874 10.8298 4.86532 11.0251 5.06058L12.7929 6.82841L11.0251 8.59619C10.8299 8.79146 10.8299 9.10804 11.0251 9.3033C11.2204 9.49856 11.537 9.49856 11.7323 9.3033L13.5 7.53552L15.2677 9.30323Z"
          />
        </g>
      </svg>
    </media-mute-button>
  </template>

  <template partial="PipButton">
    <media-pip-button part="bottom pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M15.9891 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.989C0 13.0996 0.9004 14 2.011 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0ZM17 11.9891C17 12.5465 16.5465 13 15.9891 13H2.011C1.4536 13 1.0001 12.5465 1.0001 11.9891V2.0109C1.0001 1.4535 1.4536 0.9999 2.011 0.9999H15.9891C16.5465 0.9999 17 1.4535 17 2.0109V11.9891Z"
        />
        <path
          d="M15.356 5.67822H8.19523C8.03253 5.67822 7.90063 5.81012 7.90063 5.97282V11.3836C7.90063 11.5463 8.03253 11.6782 8.19523 11.6782H15.356C15.5187 11.6782 15.6506 11.5463 15.6506 11.3836V5.97282C15.6506 5.81012 15.5187 5.67822 15.356 5.67822Z"
        />
      </svg>
    </media-pip-button>
  </template>

  <template partial="CaptionsMenu">
    <media-captions-menu-button part="bottom captions button">
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="on">
        <path
          d="M15.989 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9004 14 2.011 14H15.989C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.989 0ZM4.2292 8.7639C4.5954 9.1902 5.0935 9.4031 5.7233 9.4031C6.1852 9.4031 6.5544 9.301 6.8302 9.0969C7.1061 8.8933 7.2863 8.614 7.3702 8.26H8.4322C8.3062 8.884 8.0093 9.3733 7.5411 9.7273C7.0733 10.0813 6.4703 10.2581 5.732 10.2581C5.108 10.2581 4.5699 10.1219 4.1168 9.8489C3.6637 9.5759 3.3141 9.1946 3.0685 8.7058C2.8224 8.2165 2.6994 7.6511 2.6994 7.009C2.6994 6.3611 2.8224 5.7927 3.0685 5.3034C3.3141 4.8146 3.6637 4.4323 4.1168 4.1559C4.5699 3.88 5.108 3.7418 5.732 3.7418C6.4703 3.7418 7.0733 3.922 7.5411 4.2818C8.0094 4.6422 8.3062 5.1461 8.4322 5.794H7.3702C7.2862 5.4283 7.106 5.1368 6.8302 4.921C6.5544 4.7052 6.1852 4.5968 5.7233 4.5968C5.0934 4.5968 4.5954 4.8116 4.2292 5.2404C3.8635 5.6696 3.6804 6.259 3.6804 7.009C3.6804 7.7531 3.8635 8.3381 4.2292 8.7639ZM11.0974 8.7639C11.4636 9.1902 11.9617 9.4031 12.5915 9.4031C13.0534 9.4031 13.4226 9.301 13.6984 9.0969C13.9743 8.8933 14.1545 8.614 14.2384 8.26H15.3004C15.1744 8.884 14.8775 9.3733 14.4093 9.7273C13.9415 10.0813 13.3385 10.2581 12.6002 10.2581C11.9762 10.2581 11.4381 10.1219 10.985 9.8489C10.5319 9.5759 10.1823 9.1946 9.9367 8.7058C9.6906 8.2165 9.5676 7.6511 9.5676 7.009C9.5676 6.3611 9.6906 5.7927 9.9367 5.3034C10.1823 4.8146 10.5319 4.4323 10.985 4.1559C11.4381 3.88 11.9762 3.7418 12.6002 3.7418C13.3385 3.7418 13.9415 3.922 14.4093 4.2818C14.8776 4.6422 15.1744 5.1461 15.3004 5.794H14.2384C14.1544 5.4283 13.9742 5.1368 13.6984 4.921C13.4226 4.7052 13.0534 4.5968 12.5915 4.5968C11.9616 4.5968 11.4636 4.8116 11.0974 5.2404C10.7317 5.6696 10.5486 6.259 10.5486 7.009C10.5486 7.7531 10.7317 8.3381 11.0974 8.7639Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="off">
        <path
          d="M5.73219 10.258C5.10819 10.258 4.57009 10.1218 4.11699 9.8488C3.66389 9.5758 3.31429 9.1945 3.06869 8.7057C2.82259 8.2164 2.69958 7.651 2.69958 7.0089C2.69958 6.361 2.82259 5.7926 3.06869 5.3033C3.31429 4.8145 3.66389 4.4322 4.11699 4.1558C4.57009 3.8799 5.10819 3.7417 5.73219 3.7417C6.47049 3.7417 7.07348 3.9219 7.54128 4.2817C8.00958 4.6421 8.30638 5.146 8.43238 5.7939H7.37039C7.28639 5.4282 7.10618 5.1367 6.83039 4.9209C6.55459 4.7051 6.18538 4.5967 5.72348 4.5967C5.09358 4.5967 4.59559 4.8115 4.22939 5.2403C3.86369 5.6695 3.68058 6.2589 3.68058 7.0089C3.68058 7.753 3.86369 8.338 4.22939 8.7638C4.59559 9.1901 5.09368 9.403 5.72348 9.403C6.18538 9.403 6.55459 9.3009 6.83039 9.0968C7.10629 8.8932 7.28649 8.6139 7.37039 8.2599H8.43238C8.30638 8.8839 8.00948 9.3732 7.54128 9.7272C7.07348 10.0812 6.47049 10.258 5.73219 10.258Z"
        />
        <path
          d="M12.6003 10.258C11.9763 10.258 11.4382 10.1218 10.9851 9.8488C10.532 9.5758 10.1824 9.1945 9.93685 8.7057C9.69075 8.2164 9.56775 7.651 9.56775 7.0089C9.56775 6.361 9.69075 5.7926 9.93685 5.3033C10.1824 4.8145 10.532 4.4322 10.9851 4.1558C11.4382 3.8799 11.9763 3.7417 12.6003 3.7417C13.3386 3.7417 13.9416 3.9219 14.4094 4.2817C14.8777 4.6421 15.1745 5.146 15.3005 5.7939H14.2385C14.1545 5.4282 13.9743 5.1367 13.6985 4.9209C13.4227 4.7051 13.0535 4.5967 12.5916 4.5967C11.9617 4.5967 11.4637 4.8115 11.0975 5.2403C10.7318 5.6695 10.5487 6.2589 10.5487 7.0089C10.5487 7.753 10.7318 8.338 11.0975 8.7638C11.4637 9.1901 11.9618 9.403 12.5916 9.403C13.0535 9.403 13.4227 9.3009 13.6985 9.0968C13.9744 8.8932 14.1546 8.6139 14.2385 8.2599H15.3005C15.1745 8.8839 14.8776 9.3732 14.4094 9.7272C13.9416 10.0812 13.3386 10.258 12.6003 10.258Z"
        />
        <path
          d="M15.9891 1C16.5465 1 17 1.4535 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H2.0109C1.4535 13 1 12.5465 1 11.9891V2.0109C1 1.4535 1.4535 0.9999 2.0109 0.9999L15.9891 1ZM15.9891 0H2.0109C0.9003 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9003 14 2.0109 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0Z"
        />
      </svg>
    </media-captions-menu-button>
    <media-captions-menu
      hidden
      anchor="auto"
      part="bottom captions menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg></div
    ></media-captions-menu>
  </template>

  <template partial="AirplayButton">
    <media-airplay-button part="bottom airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M16.1383 0H1.8618C0.8335 0 0 0.8335 0 1.8617V10.1382C0 11.1664 0.8335 12 1.8618 12H3.076C3.1204 11.9433 3.1503 11.8785 3.2012 11.826L4.004 11H1.8618C1.3866 11 1 10.6134 1 10.1382V1.8617C1 1.3865 1.3866 0.9999 1.8618 0.9999H16.1383C16.6135 0.9999 17.0001 1.3865 17.0001 1.8617V10.1382C17.0001 10.6134 16.6135 11 16.1383 11H13.9961L14.7989 11.826C14.8499 11.8785 14.8798 11.9432 14.9241 12H16.1383C17.1665 12 18.0001 11.1664 18.0001 10.1382V1.8617C18 0.8335 17.1665 0 16.1383 0Z"
        />
        <path
          d="M9.55061 8.21903C9.39981 8.06383 9.20001 7.98633 9.00011 7.98633C8.80021 7.98633 8.60031 8.06383 8.44951 8.21903L4.09771 12.697C3.62471 13.1838 3.96961 13.9998 4.64831 13.9998H13.3518C14.0304 13.9998 14.3754 13.1838 13.9023 12.697L9.55061 8.21903Z"
        />
      </svg>
    </media-airplay-button>
  </template>

  <template partial="FullscreenButton">
    <media-fullscreen-button part="bottom fullscreen button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M1.00745 4.39539L1.01445 1.98789C1.01605 1.43049 1.47085 0.978289 2.02835 0.979989L6.39375 0.992589L6.39665 -0.007411L2.03125 -0.020011C0.920646 -0.023211 0.0176463 0.874489 0.0144463 1.98509L0.00744629 4.39539H1.00745Z"
        />
        <path
          d="M17.0144 2.03431L17.0076 4.39541H18.0076L18.0144 2.03721C18.0176 0.926712 17.1199 0.0237125 16.0093 0.0205125L11.6439 0.0078125L11.641 1.00781L16.0064 1.02041C16.5638 1.02201 17.016 1.47681 17.0144 2.03431Z"
        />
        <path
          d="M16.9925 9.60498L16.9855 12.0124C16.9839 12.5698 16.5291 13.022 15.9717 13.0204L11.6063 13.0078L11.6034 14.0078L15.9688 14.0204C17.0794 14.0236 17.9823 13.1259 17.9855 12.0153L17.9925 9.60498H16.9925Z"
        />
        <path
          d="M0.985626 11.9661L0.992426 9.60498H-0.0074737L-0.0142737 11.9632C-0.0174737 13.0738 0.880226 13.9767 1.99083 13.98L6.35623 13.9926L6.35913 12.9926L1.99373 12.98C1.43633 12.9784 0.983926 12.5236 0.985626 11.9661Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M5.39655 -0.0200195L5.38955 2.38748C5.38795 2.94488 4.93315 3.39708 4.37565 3.39538L0.0103463 3.38278L0.00744629 4.38278L4.37285 4.39538C5.48345 4.39858 6.38635 3.50088 6.38965 2.39028L6.39665 -0.0200195H5.39655Z"
        />
        <path
          d="M12.6411 2.36891L12.6479 0.0078125H11.6479L11.6411 2.36601C11.6379 3.47651 12.5356 4.37951 13.6462 4.38271L18.0116 4.39531L18.0145 3.39531L13.6491 3.38271C13.0917 3.38111 12.6395 2.92641 12.6411 2.36891Z"
        />
        <path
          d="M12.6034 14.0204L12.6104 11.613C12.612 11.0556 13.0668 10.6034 13.6242 10.605L17.9896 10.6176L17.9925 9.61759L13.6271 9.60499C12.5165 9.60179 11.6136 10.4995 11.6104 11.6101L11.6034 14.0204H12.6034Z"
        />
        <path
          d="M5.359 11.6315L5.3522 13.9926H6.3522L6.359 11.6344C6.3622 10.5238 5.4645 9.62088 4.3539 9.61758L-0.0115043 9.60498L-0.0144043 10.605L4.351 10.6176C4.9084 10.6192 5.3607 11.074 5.359 11.6315Z"
        />
      </svg>
    </media-fullscreen-button>
  </template>

  <template partial="CastButton">
    <media-cast-button part="bottom cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M16.0072 0H2.0291C0.9185 0 0.0181 0.9003 0.0181 2.011V5.5009C0.357 5.5016 0.6895 5.5275 1.0181 5.5669V2.011C1.0181 1.4536 1.4716 1 2.029 1H16.0072C16.5646 1 17.0181 1.4536 17.0181 2.011V11.9891C17.0181 12.5465 16.5646 13 16.0072 13H8.4358C8.4746 13.3286 8.4999 13.6611 8.4999 13.9999H16.0071C17.1177 13.9999 18.018 13.0996 18.018 11.989V2.011C18.0181 0.9003 17.1178 0 16.0072 0ZM0 6.4999V7.4999C3.584 7.4999 6.5 10.4159 6.5 13.9999H7.5C7.5 9.8642 4.1357 6.4999 0 6.4999ZM0 8.7499V9.7499C2.3433 9.7499 4.25 11.6566 4.25 13.9999H5.25C5.25 11.1049 2.895 8.7499 0 8.7499ZM0.0181 11V14H3.0181C3.0181 12.3431 1.675 11 0.0181 11Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M15.9891 0H2.01103C0.900434 0 3.35947e-05 0.9003 3.35947e-05 2.011V5.5009C0.338934 5.5016 0.671434 5.5275 1.00003 5.5669V2.011C1.00003 1.4536 1.45353 1 2.01093 1H15.9891C16.5465 1 17 1.4536 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H8.41773C8.45653 13.3286 8.48183 13.6611 8.48183 13.9999H15.989C17.0996 13.9999 17.9999 13.0996 17.9999 11.989V2.011C18 0.9003 17.0997 0 15.9891 0ZM-0.0180664 6.4999V7.4999C3.56593 7.4999 6.48193 10.4159 6.48193 13.9999H7.48193C7.48193 9.8642 4.11763 6.4999 -0.0180664 6.4999ZM-0.0180664 8.7499V9.7499C2.32523 9.7499 4.23193 11.6566 4.23193 13.9999H5.23193C5.23193 11.1049 2.87693 8.7499 -0.0180664 8.7499ZM3.35947e-05 11V14H3.00003C3.00003 12.3431 1.65693 11 3.35947e-05 11Z"
        />
        <path d="M2.15002 5.634C5.18352 6.4207 7.57252 8.8151 8.35282 11.8499H15.8501V2.1499H2.15002V5.634Z" />
      </svg>
    </media-cast-button>
  </template>

  <template partial="LiveButton">
    <media-live-button part="{{section ?? 'top'}} live button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <span slot="text">Live</span>
    </media-live-button>
  </template>

  <template partial="PlaybackRateMenu">
    <media-playback-rate-menu-button part="bottom playback-rate button"></media-playback-rate-menu-button>
    <media-playback-rate-menu
      hidden
      anchor="auto"
      rates="{{playbackrates}}"
      exportparts="menu-item"
      part="bottom playback-rate menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-playback-rate-menu>
  </template>

  <template partial="VolumeRange">
    <media-volume-range
      part="bottom volume range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-volume-range>
  </template>

  <template partial="TimeDisplay">
    <media-time-display
      remaining="{{defaultshowremainingtime}}"
      showduration="{{!hideduration}}"
      part="bottom time display"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-display>
  </template>

  <template partial="TimeRange">
    <media-time-range part="bottom time range" disabled="{{disabled}}" aria-disabled="{{disabled}}" exportparts="thumb">
      <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
      <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
      <media-preview-time-display slot="preview"></media-preview-time-display>
      <div slot="preview" part="arrow"></div>
    </media-time-range>
  </template>

  <template partial="AudioTrackMenu">
    <media-audio-track-menu-button part="bottom audio-track button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 16">
        <path d="M9 15A7 7 0 1 1 9 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 9 0a8 8 0 0 0 0 16Z" />
        <path
          d="M5.2 6.3a.5.5 0 0 1 .5.5v2.4a.5.5 0 1 1-1 0V6.8a.5.5 0 0 1 .5-.5Zm2.4-2.4a.5.5 0 0 1 .5.5v7.2a.5.5 0 0 1-1 0V4.4a.5.5 0 0 1 .5-.5ZM10 5.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.4-.8a.5.5 0 0 1 .5.5v5.6a.5.5 0 0 1-1 0V5.2a.5.5 0 0 1 .5-.5Z"
        />
      </svg>
    </media-audio-track-menu-button>
    <media-audio-track-menu
      hidden
      anchor="auto"
      part="bottom audio-track menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-audio-track-menu>
  </template>

  <template partial="RenditionMenu">
    <media-rendition-menu-button part="bottom rendition button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 14">
        <path
          d="M2.25 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
      </svg>
    </media-rendition-menu-button>
    <media-rendition-menu
      hidden
      anchor="auto"
      part="bottom rendition menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            opacity: 0;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-rendition-menu>
  </template>

  <template partial="MuxBadge">
    <div part="mux-badge">
      <a href="https://www.mux.com/player" target="_blank">
        <span class="mux-badge-text">Powered by</span>
        <div class="mux-badge-logo">
          <svg
            viewBox="0 0 1600 500"
            style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2"
          >
            <g>
              <path
                d="M994.287,93.486c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m0,-93.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,68.943 -56.09,125.033 -125.032,125.033c-68.942,-0 -125.03,-56.09 -125.03,-125.033l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,137.853 112.149,250.003 249.999,250.003c137.851,-0 250.001,-112.15 250.001,-250.003l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M1537.51,468.511c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m-275.883,-218.509l-143.33,143.329c-24.402,24.402 -24.402,63.966 0,88.368c24.402,24.402 63.967,24.402 88.369,-0l143.33,-143.329l143.328,143.329c24.402,24.4 63.967,24.402 88.369,-0c24.403,-24.402 24.403,-63.966 0.001,-88.368l-143.33,-143.329l0.001,-0.004l143.329,-143.329c24.402,-24.402 24.402,-63.965 0,-88.367c-24.402,-24.402 -63.967,-24.402 -88.369,-0l-143.329,143.328l-143.329,-143.328c-24.402,-24.401 -63.967,-24.402 -88.369,-0c-24.402,24.402 -24.402,63.965 0,88.367l143.329,143.329l0,0.004Z"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M437.511,468.521c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m23.915,-463.762c-23.348,-9.672 -50.226,-4.327 -68.096,13.544l-143.331,143.329l-143.33,-143.329c-17.871,-17.871 -44.747,-23.216 -68.096,-13.544c-23.349,9.671 -38.574,32.455 -38.574,57.729l0,375.026c0,34.51 27.977,62.486 62.487,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-224.173l80.843,80.844c24.404,24.402 63.965,24.402 88.369,-0l80.843,-80.844l0,224.173c0,34.51 27.976,62.486 62.486,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-375.026c0,-25.274 -15.224,-48.058 -38.573,-57.729"
                style="fill-rule: nonzero"
              ></path>
            </g>
          </svg>
        </div>
      </a>
    </div>
  </template>

  <media-controller
    part="controller"
    defaultstreamtype="{{defaultstreamtype ?? 'on-demand'}}"
    breakpoints="sm:470"
    gesturesdisabled="{{disabled}}"
    hotkeys="{{hotkeys}}"
    nohotkeys="{{nohotkeys}}"
    novolumepref="{{novolumepref}}"
    audio="{{audio}}"
    noautoseektolive="{{noautoseektolive}}"
    defaultsubtitles="{{defaultsubtitles}}"
    defaultduration="{{defaultduration ?? false}}"
    keyboardforwardseekoffset="{{forwardseekoffset}}"
    keyboardbackwardseekoffset="{{backwardseekoffset}}"
    exportparts="layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer"
    style="--_pre-playback-place:{{preplaybackplace ?? 'center'}}"
  >
    <slot name="media" slot="media"></slot>
    <slot name="poster" slot="poster"></slot>

    <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>

    <template if="!audio">
      <media-error-dialog slot="dialog" noautohide></media-error-dialog>
      <!-- Pre-playback UI -->
      <!-- same for both on-demand and live -->
      <div slot="centered-chrome" class="center-controls pre-playback">
        <template if="!breakpointsm">{{>PlayButton section="center"}}</template>
        <template if="breakpointsm">{{>PrePlayButton section="center"}}</template>
      </div>

      <!-- Mux Badge -->
      <template if="proudlydisplaymuxbadge"> {{>MuxBadge}} </template>

      <!-- Autoplay centered unmute button -->
      <!--
        todo: figure out how show this with available state variables
        needs to show when:
        - autoplay is enabled
        - playback has been successful
        - audio is muted
        - in place / instead of the pre-plaback play button
        - not to show again after user has interacted with this button
          - OR user has interacted with the mute button in the control bar
      -->
      <!--
        There should be a >MuteButton to the left of the "Unmute" text, but a templating bug
        makes it appear even if commented out in the markup, add it back when code is un-commented
      -->
      <!-- <div slot="centered-chrome" class="autoplay-unmute">
        <div role="button" class="autoplay-unmute-btn">Unmute</div>
      </div> -->

      <template if="streamtype == 'on-demand'">
        <template if="breakpointsm">
          <media-control-bar part="control-bar top" slot="top-chrome">{{>TitleDisplay}} </media-control-bar>
        </template>
        {{>TimeRange}}
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>SeekBackwardButton}} {{>SeekForwardButton}} {{>TimeDisplay}} {{>MuteButton}}
          {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>PlaybackRateMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}}
          {{>CastButton}} {{>PipButton}} {{>FullscreenButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <media-control-bar part="control-bar top" slot="top-chrome">
          {{>LiveButton}}
          <template if="breakpointsm"> {{>TitleDisplay}} </template>
        </media-control-bar>
        <template if="targetlivewindow > 0">{{>TimeRange}}</template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="targetlivewindow > 0">{{>SeekBackwardButton}} {{>SeekForwardButton}}</template>
          {{>MuteButton}} {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}} {{>CastButton}} {{>PipButton}}
          {{>FullscreenButton}}
        </media-control-bar>
      </template>
    </template>

    <template if="audio">
      <template if="streamtype == 'on-demand'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="breakpointsm"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          {{>MuteButton}}
          <template if="breakpointsm">{{>VolumeRange}}</template>
          {{>TimeDisplay}} {{>TimeRange}}
          <template if="breakpointsm">{{>PlaybackRateMenu}}</template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>LiveButton section="bottom"}} {{>MuteButton}}
          <template if="breakpointsm">
            {{>VolumeRange}}
            <template if="targetlivewindow > 0"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          </template>
          <template if="targetlivewindow > 0"> {{>TimeDisplay}} {{>TimeRange}} </template>
          <template if="!targetlivewindow"><div class="spacer"></div></template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>
    </template>

    <slot></slot>
  </media-controller>
</template>
`,c3=cy.createElement("template");"innerHTML"in c3&&(c3.innerHTML=c2);var c4,c5,c9=class extends nF{};c9.template=null==(c5=null==(c4=c3.content)?void 0:c4.children)?void 0:c5[0],cf.customElements.get("media-theme-gerwig")||cf.customElements.define("media-theme-gerwig",c9);var c8={SRC:"src",POSTER:"poster"},c6={STYLE:"style",DEFAULT_HIDDEN_CAPTIONS:"default-hidden-captions",PRIMARY_COLOR:"primary-color",SECONDARY_COLOR:"secondary-color",ACCENT_COLOR:"accent-color",FORWARD_SEEK_OFFSET:"forward-seek-offset",BACKWARD_SEEK_OFFSET:"backward-seek-offset",PLAYBACK_TOKEN:"playback-token",THUMBNAIL_TOKEN:"thumbnail-token",STORYBOARD_TOKEN:"storyboard-token",FULLSCREEN_ELEMENT:"fullscreen-element",DRM_TOKEN:"drm-token",STORYBOARD_SRC:"storyboard-src",THUMBNAIL_TIME:"thumbnail-time",AUDIO:"audio",NOHOTKEYS:"nohotkeys",HOTKEYS:"hotkeys",PLAYBACK_RATES:"playbackrates",DEFAULT_SHOW_REMAINING_TIME:"default-show-remaining-time",DEFAULT_DURATION:"default-duration",TITLE:"title",VIDEO_TITLE:"video-title",PLACEHOLDER:"placeholder",THEME:"theme",DEFAULT_STREAM_TYPE:"default-stream-type",TARGET_LIVE_WINDOW:"target-live-window",EXTRA_SOURCE_PARAMS:"extra-source-params",NO_VOLUME_PREF:"no-volume-pref",NO_MUTED_PREF:"no-muted-pref",CAST_RECEIVER:"cast-receiver",NO_TOOLTIPS:"no-tooltips",PROUDLY_DISPLAY_MUX_BADGE:"proudly-display-mux-badge",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended"},c7=["audio","backwardseekoffset","defaultduration","defaultshowremainingtime","defaultsubtitles","noautoseektolive","disabled","exportparts","forwardseekoffset","hideduration","hotkeys","nohotkeys","playbackrates","defaultstreamtype","streamtype","style","targetlivewindow","template","title","videotitle","novolumepref","nomutedpref","proudlydisplaymuxbadge"],he=a4.formatErrorMessage;function ht(e){let t=e.videoTitle?{video_title:e.videoTitle}:{};return e.getAttributeNames().filter(e=>e.startsWith("metadata-")).reduce((t,i)=>{let a=e.getAttribute(i);return null!==a&&(t[i.replace(/^metadata-/,"").replace(/-/g,"_")]=a),t},t)}a4.formatErrorMessage=e=>{var t,i;if(e instanceof s.FJ){let a=((e,t=!1)=>({title:((e,t=!1)=>{var i,a;if(e.muxCode){let r=c0(null!=(i=e.errorCategory)?i:"video"),n=(0,s.LM)(null!=(a=e.errorCategory)?a:s.dc.VIDEO);if(e.muxCode===s.Ks.NETWORK_OFFLINE)return(0,s.Ru)("Your device appears to be offline",t);if(e.muxCode===s.Ks.NETWORK_TOKEN_EXPIRED)return(0,s.Ru)("{category} URL has expired",t).format({category:r});if([s.Ks.NETWORK_TOKEN_SUB_MISMATCH,s.Ks.NETWORK_TOKEN_AUD_MISMATCH,s.Ks.NETWORK_TOKEN_AUD_MISSING,s.Ks.NETWORK_TOKEN_MALFORMED].includes(e.muxCode))return(0,s.Ru)("{category} URL is formatted incorrectly",t).format({category:r});if(e.muxCode===s.Ks.NETWORK_TOKEN_MISSING)return(0,s.Ru)("Invalid {categoryName} URL",t).format({categoryName:n});if(e.muxCode===s.Ks.NETWORK_NOT_FOUND)return(0,s.Ru)("{category} does not exist",t).format({category:r});if(e.muxCode===s.Ks.NETWORK_NOT_READY){let i="live"===e.streamType?"Live stream":"Video";return(0,s.Ru)("{mediaType} is not currently available",t).format({mediaType:i})}}if(e.code){if(e.code===s.FJ.MEDIA_ERR_NETWORK)return(0,s.Ru)("Network Error",t);if(e.code===s.FJ.MEDIA_ERR_DECODE)return(0,s.Ru)("Media Error",t);if(e.code===s.FJ.MEDIA_ERR_SRC_NOT_SUPPORTED)return(0,s.Ru)("Source Not Supported",t)}return(0,s.Ru)("Error",t)})(e,t).toString(),message:((e,t=!1)=>{var i,a;if(e.muxCode){let r=c0(null!=(i=e.errorCategory)?i:"video"),n=(0,s.LM)(null!=(a=e.errorCategory)?a:s.dc.VIDEO);return e.muxCode===s.Ks.NETWORK_OFFLINE?(0,s.Ru)("Check your internet connection and try reloading this video.",t):e.muxCode===s.Ks.NETWORK_TOKEN_EXPIRED?(0,s.Ru)("The video’s secured {tokenNamePrefix}-token has expired.",t).format({tokenNamePrefix:n}):e.muxCode===s.Ks.NETWORK_TOKEN_SUB_MISMATCH?(0,s.Ru)("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",t).format({tokenNamePrefix:n}):e.muxCode===s.Ks.NETWORK_TOKEN_MALFORMED?(0,s.Ru)("{category} URL is formatted incorrectly",t).format({category:r}):[s.Ks.NETWORK_TOKEN_AUD_MISMATCH,s.Ks.NETWORK_TOKEN_AUD_MISSING].includes(e.muxCode)?(0,s.Ru)("The {tokenNamePrefix}-token is formatted with incorrect information.",t).format({tokenNamePrefix:n}):[s.Ks.NETWORK_TOKEN_MISSING,s.Ks.NETWORK_INVALID_URL].includes(e.muxCode)?(0,s.Ru)("The video URL or {tokenNamePrefix}-token are formatted with incorrect or incomplete information.",t).format({tokenNamePrefix:n}):e.muxCode===s.Ks.NETWORK_NOT_FOUND?"":e.message}return e.code&&(e.code===s.FJ.MEDIA_ERR_NETWORK||e.code===s.FJ.MEDIA_ERR_DECODE||e.code===s.FJ.MEDIA_ERR_SRC_NOT_SUPPORTED),e.message})(e,t).toString()}))(e,!1);return`
      ${null!=a&&a.title?`<h3>${a.title}</h3>`:""}
      ${null!=a&&a.message||null!=a&&a.linkUrl?`<p>
        ${null==a?void 0:a.message}
        ${null!=a&&a.linkUrl?`<a
              href="${a.linkUrl}"
              target="_blank"
              rel="external noopener"
              aria-label="${null!=(t=a.linkText)?t:""} ${(0,s.Ru)("(opens in a new window)")}"
              >${null!=(i=a.linkText)?i:a.linkUrl}</a
            >`:""}
      </p>`:""}
    `}return he(e)};var hi,ha,hr,hn,hs,ho,hl,hd,hu,hc,hh,hm,hp,hv,hb,hg,hE,hf,hy,h_,hT,hk=Object.values(U),hA=Object.values(c8),hw=Object.values(c6),hR="mux-player",hI={isDialogOpen:!1},hS={redundant_streams:!0},hC=class extends cq{constructor(){super(),s6(this,hp),s6(this,hi),s6(this,ha,!1),s6(this,hr,{}),s6(this,hn,!0),s6(this,hs,new cx(this,"hotkeys")),s6(this,ho),s6(this,hl,()=>oe(this,hp,hE).call(this)),s6(this,hd,()=>oe(this,hp,hE).call(this)),s6(this,hu,()=>oe(this,hp,hE).call(this)),s6(this,hc),s6(this,hh,{...hI,onCloseErrorDialog:e=>{var t;(null==(t=e.composedPath()[0])?void 0:t.localName)==="media-error-dialog"&&oe(this,hp,hg).call(this,{isDialogOpen:!1})},onFocusInErrorDialog:e=>{var t;(null==(t=e.composedPath()[0])?void 0:t.localName)==="media-error-dialog"&&(cS(this,cy.activeElement)||e.preventDefault())}}),s6(this,hm,e=>{var t;let i=null==(t=this.media)?void 0:t.error;if(!(i instanceof s.FJ)){let{message:e,code:t}=null!=i?i:{};i=new s.FJ(e,t)}if(!(null!=i&&i.fatal)){cO(i),i.data&&cO(`${i.name} data:`,i.data);return}let a=c1(i,!1);a.message&&cU(a),cP(i),i.data&&cP(`${i.name} data:`,i.data),oe(this,hp,hg).call(this,{isDialogOpen:!0})}),s7(this,hi,(0,s.GI)()),this.attachShadow({mode:"open"}),oe(this,hp,hb).call(this),this.isConnected&&oe(this,hp,hv).call(this)}static get NAME(){return hR}static get VERSION(){return cL}static get observedAttributes(){var e;return[...null!=(e=cq.observedAttributes)?e:[],...hA,...hk,...hw]}get mediaTheme(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("media-theme")}get mediaController(){var e,t;return null==(t=null==(e=this.mediaTheme)?void 0:e.shadowRoot)?void 0:t.querySelector("media-controller")}connectedCallback(){oe(this,hp,hv).call(this);let e=this.media;e&&(e.metadata=ht(this))}disconnectedCallback(){var e,t,i,a,r,n,s,o;null==(e=s8(this,ho))||e.disconnect(),null==(t=this.media)||t.removeEventListener("streamtypechange",s8(this,hl)),null==(i=this.media)||i.removeEventListener("loadstart",s8(this,hd)),this.removeEventListener("error",s8(this,hm)),this.media&&(this.media.errorTranslator=void 0),null==(r=null==(a=this.media)?void 0:a.textTracks)||r.removeEventListener("addtrack",s8(this,hu)),null==(s=null==(n=this.media)?void 0:n.textTracks)||s.removeEventListener("removetrack",s8(this,hu)),null==(o=s8(this,hc))||o.call(this),s7(this,hc,void 0),s7(this,ha,!1)}attributeChangedCallback(e,t,i){var a;switch(oe(this,hp,hv).call(this),super.attributeChangedCallback(e,t,i),e){case c6.HOTKEYS:s8(this,hs).value=i;break;case c6.THUMBNAIL_TIME:null!=i&&this.tokens.thumbnail&&cO((0,s.Ru)("Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time.").toString());break;case c6.THUMBNAIL_TOKEN:if(i){let e=(0,s.$n)(i);if(e){let{aud:t}=e,i=s._G.THUMBNAIL;t!==i&&cO((0,s.Ru)("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:i,tokenNamePrefix:"thumbnail"}))}}break;case c6.STORYBOARD_TOKEN:if(i){let e=(0,s.$n)(i);if(e){let{aud:t}=e,i=s._G.STORYBOARD;t!==i&&cO((0,s.Ru)("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:i,tokenNamePrefix:"storyboard"}))}}break;case c6.DRM_TOKEN:if(i){let e=(0,s.$n)(i);if(e){let{aud:t}=e,i=s._G.DRM;t!==i&&cO((0,s.Ru)("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:i,tokenNamePrefix:"drm"}))}}break;case U.PLAYBACK_ID:null!=i&&i.includes("?token")&&cP((0,s.Ru)("The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute.").format({playbackId:i}));break;case U.STREAM_TYPE:i&&![s.U4.LIVE,s.U4.ON_DEMAND,s.U4.UNKNOWN].includes(i)?["ll-live","live:dvr","ll-live:dvr"].includes(this.streamType)?this.targetLiveWindow=i.includes("dvr")?1/0:0:cU({file:"invalid-stream-type.md",message:(0,s.Ru)("Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand` or `live`").format({streamType:this.streamType})}):i===s.U4.LIVE?null==this.getAttribute(c6.TARGET_LIVE_WINDOW)&&(this.targetLiveWindow=0):this.targetLiveWindow=NaN;break;case c6.FULLSCREEN_ELEMENT:if(null!=i||i!==t){let e=cy.getElementById(i),t=null==e?void 0:e.querySelector("mux-player");this.mediaController&&e&&t&&(this.mediaController.fullscreenElement=e)}break;case U.CAP_RENDITION_TO_PLAYER_SIZE:(null==i||i!==t)&&(this.capRenditionToPlayerSize=null!=i||void 0)}[U.PLAYBACK_ID,c8.SRC,c6.PLAYBACK_TOKEN].includes(e)&&t!==i&&s7(this,hh,{...s8(this,hh),...hI}),oe(this,hp,hE).call(this,{[null!=(a=cD[e])?a:cT(e)]:i})}async requestFullscreen(e){var t;if(!(!this.mediaController||this.mediaController.hasAttribute(eK.MEDIA_IS_FULLSCREEN)))return null==(t=this.mediaController)||t.dispatchEvent(new cf.CustomEvent(eB.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((e,t)=>{var i;null==(i=this.mediaController)||i.addEventListener(eF.MEDIA_IS_FULLSCREEN,()=>e(),{once:!0})})}async exitFullscreen(){var e;if(!(!this.mediaController||!this.mediaController.hasAttribute(eK.MEDIA_IS_FULLSCREEN)))return null==(e=this.mediaController)||e.dispatchEvent(new cf.CustomEvent(eB.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((e,t)=>{var i;null==(i=this.mediaController)||i.addEventListener(eF.MEDIA_IS_FULLSCREEN,()=>e(),{once:!0})})}get preferCmcd(){var e;return null!=(e=this.getAttribute(U.PREFER_CMCD))?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?s.WG.includes(e)?this.setAttribute(U.PREFER_CMCD,e):cO(`Invalid value for preferCmcd. Must be one of ${s.WG.join()}`):this.removeAttribute(U.PREFER_CMCD))}get hasPlayed(){var e,t;return null!=(t=null==(e=this.mediaController)?void 0:e.hasAttribute(eK.MEDIA_HAS_PLAYED))&&t}get inLiveWindow(){var e;return null==(e=this.mediaController)?void 0:e.hasAttribute(eK.MEDIA_TIME_IS_LIVE)}get _hls(){var e;return null==(e=this.media)?void 0:e._hls}get mux(){var e;return null==(e=this.media)?void 0:e.mux}get theme(){var e;return null!=(e=this.getAttribute(c6.THEME))?e:"gerwig"}set theme(e){this.setAttribute(c6.THEME,`${e}`)}get themeProps(){let e=this.mediaTheme;if(!e)return;let t={};for(let i of e.getAttributeNames()){if(c7.includes(i))continue;let a=e.getAttribute(i);t[cT(i)]=""===a||a}return t}set themeProps(e){var t,i;oe(this,hp,hv).call(this);let a={...this.themeProps,...e};for(let r in a){if(c7.includes(r))continue;let a=null==e?void 0:e[r];"boolean"==typeof a||null==a?null==(t=this.mediaTheme)||t.toggleAttribute(c_(r),!!a):null==(i=this.mediaTheme)||i.setAttribute(c_(r),a)}}get playbackId(){var e;return null!=(e=this.getAttribute(U.PLAYBACK_ID))?e:void 0}set playbackId(e){e?this.setAttribute(U.PLAYBACK_ID,e):this.removeAttribute(U.PLAYBACK_ID)}get src(){var e,t;return this.playbackId?null!=(e=hL(this,c8.SRC))?e:void 0:null!=(t=this.getAttribute(c8.SRC))?t:void 0}set src(e){e?this.setAttribute(c8.SRC,e):this.removeAttribute(c8.SRC)}get poster(){var e;let t=this.getAttribute(c8.POSTER);if(null!=t)return t;let{tokens:i}=this;return i.playback&&!i.thumbnail?void cO("Missing expected thumbnail token. No poster image will be shown"):this.playbackId&&!this.audio?((e,{token:t,customDomain:i=cC,thumbnailTime:a,programTime:r}={})=>{var n;let o=null==t?a:void 0,{aud:l}=null!=(n=(0,s.$n)(t))?n:{};if(!(t&&"t"!==l))return`https://image.${i}/${e}/thumbnail.webp${cA({token:t,time:o,program_time:r})}`})(this.playbackId,{customDomain:this.customDomain,thumbnailTime:null!=(e=this.thumbnailTime)?e:this.startTime,programTime:this.programStartTime,token:i.thumbnail}):void 0}set poster(e){e||""===e?this.setAttribute(c8.POSTER,e):this.removeAttribute(c8.POSTER)}get storyboardSrc(){var e;return null!=(e=this.getAttribute(c6.STORYBOARD_SRC))?e:void 0}set storyboardSrc(e){e?this.setAttribute(c6.STORYBOARD_SRC,e):this.removeAttribute(c6.STORYBOARD_SRC)}get storyboard(){let{tokens:e}=this;return this.storyboardSrc&&!e.storyboard?this.storyboardSrc:this.audio||!this.playbackId||!this.streamType||[s.U4.LIVE,s.U4.UNKNOWN].includes(this.streamType)||e.playback&&!e.storyboard?void 0:((e,{token:t,customDomain:i=cC,programStartTime:a,programEndTime:r}={})=>{var n;let{aud:o}=null!=(n=(0,s.$n)(t))?n:{};if(!(t&&"s"!==o))return`https://image.${i}/${e}/storyboard.vtt${cA({token:t,format:"webp",program_start_time:a,program_end_time:r})}`})(this.playbackId,{customDomain:this.customDomain,token:e.storyboard,programStartTime:this.programStartTime,programEndTime:this.programEndTime})}get audio(){return this.hasAttribute(c6.AUDIO)}set audio(e){e?this.setAttribute(c6.AUDIO,""):this.removeAttribute(c6.AUDIO)}get hotkeys(){return s8(this,hs)}get nohotkeys(){return this.hasAttribute(c6.NOHOTKEYS)}set nohotkeys(e){e?this.setAttribute(c6.NOHOTKEYS,""):this.removeAttribute(c6.NOHOTKEYS)}get thumbnailTime(){return ck(this.getAttribute(c6.THUMBNAIL_TIME))}set thumbnailTime(e){this.setAttribute(c6.THUMBNAIL_TIME,`${e}`)}get videoTitle(){var e,t;return null!=(t=null!=(e=this.getAttribute(c6.VIDEO_TITLE))?e:this.getAttribute(c6.TITLE))?t:""}set videoTitle(e){e!==this.videoTitle&&(e?this.setAttribute(c6.VIDEO_TITLE,e):this.removeAttribute(c6.VIDEO_TITLE))}get placeholder(){var e;return null!=(e=hL(this,c6.PLACEHOLDER))?e:""}set placeholder(e){this.setAttribute(c6.PLACEHOLDER,`${e}`)}get primaryColor(){var e,t;let i=this.getAttribute(c6.PRIMARY_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=cf.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_primary-color"))?void 0:t.trim()))return i}set primaryColor(e){this.setAttribute(c6.PRIMARY_COLOR,`${e}`)}get secondaryColor(){var e,t;let i=this.getAttribute(c6.SECONDARY_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=cf.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_secondary-color"))?void 0:t.trim()))return i}set secondaryColor(e){this.setAttribute(c6.SECONDARY_COLOR,`${e}`)}get accentColor(){var e,t;let i=this.getAttribute(c6.ACCENT_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=cf.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_accent-color"))?void 0:t.trim()))return i}set accentColor(e){this.setAttribute(c6.ACCENT_COLOR,`${e}`)}get defaultShowRemainingTime(){return this.hasAttribute(c6.DEFAULT_SHOW_REMAINING_TIME)}set defaultShowRemainingTime(e){e?this.setAttribute(c6.DEFAULT_SHOW_REMAINING_TIME,""):this.removeAttribute(c6.DEFAULT_SHOW_REMAINING_TIME)}get playbackRates(){if(this.hasAttribute(c6.PLAYBACK_RATES))return this.getAttribute(c6.PLAYBACK_RATES).trim().split(/\s*,?\s+/).map(e=>Number(e)).filter(e=>!Number.isNaN(e)).sort((e,t)=>e-t)}set playbackRates(e){e?this.setAttribute(c6.PLAYBACK_RATES,e.join(" ")):this.removeAttribute(c6.PLAYBACK_RATES)}get forwardSeekOffset(){var e;return null!=(e=ck(this.getAttribute(c6.FORWARD_SEEK_OFFSET)))?e:10}set forwardSeekOffset(e){this.setAttribute(c6.FORWARD_SEEK_OFFSET,`${e}`)}get backwardSeekOffset(){var e;return null!=(e=ck(this.getAttribute(c6.BACKWARD_SEEK_OFFSET)))?e:10}set backwardSeekOffset(e){this.setAttribute(c6.BACKWARD_SEEK_OFFSET,`${e}`)}get defaultHiddenCaptions(){return this.hasAttribute(c6.DEFAULT_HIDDEN_CAPTIONS)}set defaultHiddenCaptions(e){e?this.setAttribute(c6.DEFAULT_HIDDEN_CAPTIONS,""):this.removeAttribute(c6.DEFAULT_HIDDEN_CAPTIONS)}get defaultDuration(){return ck(this.getAttribute(c6.DEFAULT_DURATION))}set defaultDuration(e){null==e?this.removeAttribute(c6.DEFAULT_DURATION):this.setAttribute(c6.DEFAULT_DURATION,`${e}`)}get playerInitTime(){return this.hasAttribute(U.PLAYER_INIT_TIME)?ck(this.getAttribute(U.PLAYER_INIT_TIME)):s8(this,hi)}set playerInitTime(e){e!=this.playerInitTime&&(null==e?this.removeAttribute(U.PLAYER_INIT_TIME):this.setAttribute(U.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return null!=(e=this.getAttribute(U.PLAYER_SOFTWARE_NAME))?e:hR}get playerSoftwareVersion(){var e;return null!=(e=this.getAttribute(U.PLAYER_SOFTWARE_VERSION))?e:cL}get beaconCollectionDomain(){var e;return null!=(e=this.getAttribute(U.BEACON_COLLECTION_DOMAIN))?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(U.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(U.BEACON_COLLECTION_DOMAIN))}get maxResolution(){var e;return null!=(e=this.getAttribute(U.MAX_RESOLUTION))?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(U.MAX_RESOLUTION,e):this.removeAttribute(U.MAX_RESOLUTION))}get minResolution(){var e;return null!=(e=this.getAttribute(U.MIN_RESOLUTION))?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(U.MIN_RESOLUTION,e):this.removeAttribute(U.MIN_RESOLUTION))}get maxAutoResolution(){var e;return null!=(e=this.getAttribute(U.MAX_AUTO_RESOLUTION))?e:void 0}set maxAutoResolution(e){null==e?this.removeAttribute(U.MAX_AUTO_RESOLUTION):this.setAttribute(U.MAX_AUTO_RESOLUTION,e)}get renditionOrder(){var e;return null!=(e=this.getAttribute(U.RENDITION_ORDER))?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(U.RENDITION_ORDER,e):this.removeAttribute(U.RENDITION_ORDER))}get programStartTime(){return ck(this.getAttribute(U.PROGRAM_START_TIME))}set programStartTime(e){null==e?this.removeAttribute(U.PROGRAM_START_TIME):this.setAttribute(U.PROGRAM_START_TIME,`${e}`)}get programEndTime(){return ck(this.getAttribute(U.PROGRAM_END_TIME))}set programEndTime(e){null==e?this.removeAttribute(U.PROGRAM_END_TIME):this.setAttribute(U.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){return ck(this.getAttribute(U.ASSET_START_TIME))}set assetStartTime(e){null==e?this.removeAttribute(U.ASSET_START_TIME):this.setAttribute(U.ASSET_START_TIME,`${e}`)}get assetEndTime(){return ck(this.getAttribute(U.ASSET_END_TIME))}set assetEndTime(e){null==e?this.removeAttribute(U.ASSET_END_TIME):this.setAttribute(U.ASSET_END_TIME,`${e}`)}get extraSourceParams(){return this.hasAttribute(c6.EXTRA_SOURCE_PARAMS)?[...new URLSearchParams(this.getAttribute(c6.EXTRA_SOURCE_PARAMS)).entries()].reduce((e,[t,i])=>(e[t]=i,e),{}):hS}set extraSourceParams(e){null==e?this.removeAttribute(c6.EXTRA_SOURCE_PARAMS):this.setAttribute(c6.EXTRA_SOURCE_PARAMS,new URLSearchParams(e).toString())}get customDomain(){var e;return null!=(e=this.getAttribute(U.CUSTOM_DOMAIN))?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(U.CUSTOM_DOMAIN,e):this.removeAttribute(U.CUSTOM_DOMAIN))}get envKey(){var e;return null!=(e=hL(this,U.ENV_KEY))?e:void 0}set envKey(e){this.setAttribute(U.ENV_KEY,`${e}`)}get noVolumePref(){return this.hasAttribute(c6.NO_VOLUME_PREF)}set noVolumePref(e){e?this.setAttribute(c6.NO_VOLUME_PREF,""):this.removeAttribute(c6.NO_VOLUME_PREF)}get noMutedPref(){return this.hasAttribute(c6.NO_MUTED_PREF)}set noMutedPref(e){e?this.setAttribute(c6.NO_MUTED_PREF,""):this.removeAttribute(c6.NO_MUTED_PREF)}get debug(){return null!=hL(this,U.DEBUG)}set debug(e){e?this.setAttribute(U.DEBUG,""):this.removeAttribute(U.DEBUG)}get disableTracking(){return null!=hL(this,U.DISABLE_TRACKING)}set disableTracking(e){this.toggleAttribute(U.DISABLE_TRACKING,!!e)}get disableCookies(){return null!=hL(this,U.DISABLE_COOKIES)}set disableCookies(e){e?this.setAttribute(U.DISABLE_COOKIES,""):this.removeAttribute(U.DISABLE_COOKIES)}get streamType(){var e,t,i;return null!=(i=null!=(t=this.getAttribute(U.STREAM_TYPE))?t:null==(e=this.media)?void 0:e.streamType)?i:s.U4.UNKNOWN}set streamType(e){this.setAttribute(U.STREAM_TYPE,`${e}`)}get defaultStreamType(){var e,t,i;return null!=(i=null!=(t=this.getAttribute(c6.DEFAULT_STREAM_TYPE))?t:null==(e=this.mediaController)?void 0:e.getAttribute(c6.DEFAULT_STREAM_TYPE))?i:s.U4.ON_DEMAND}set defaultStreamType(e){e?this.setAttribute(c6.DEFAULT_STREAM_TYPE,e):this.removeAttribute(c6.DEFAULT_STREAM_TYPE)}get targetLiveWindow(){var e,t;return this.hasAttribute(c6.TARGET_LIVE_WINDOW)?+this.getAttribute(c6.TARGET_LIVE_WINDOW):null!=(t=null==(e=this.media)?void 0:e.targetLiveWindow)?t:NaN}set targetLiveWindow(e){e==this.targetLiveWindow||Number.isNaN(e)&&Number.isNaN(this.targetLiveWindow)||(null==e?this.removeAttribute(c6.TARGET_LIVE_WINDOW):this.setAttribute(c6.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e;return null==(e=this.media)?void 0:e.liveEdgeStart}get startTime(){return ck(hL(this,U.START_TIME))}set startTime(e){this.setAttribute(U.START_TIME,`${e}`)}get preferPlayback(){let e=this.getAttribute(U.PREFER_PLAYBACK);if(e===s.Vi.MSE||e===s.Vi.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===s.Vi.MSE||e===s.Vi.NATIVE?this.setAttribute(U.PREFER_PLAYBACK,e):this.removeAttribute(U.PREFER_PLAYBACK))}get metadata(){var e;return null==(e=this.media)?void 0:e.metadata}set metadata(e){(oe(this,hp,hv).call(this),this.media)?this.media.metadata={...ht(this),...e}:cP("underlying media element missing when trying to set metadata. metadata will not be set.")}get _hlsConfig(){var e;return null==(e=this.media)?void 0:e._hlsConfig}set _hlsConfig(e){(oe(this,hp,hv).call(this),this.media)?this.media._hlsConfig=e:cP("underlying media element missing when trying to set _hlsConfig. _hlsConfig will not be set.")}async addCuePoints(e){var t;return(oe(this,hp,hv).call(this),this.media)?null==(t=this.media)?void 0:t.addCuePoints(e):void cP("underlying media element missing when trying to addCuePoints. cuePoints will not be added.")}get activeCuePoint(){var e;return null==(e=this.media)?void 0:e.activeCuePoint}get cuePoints(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.cuePoints)?t:[]}addChapters(e){var t;return(oe(this,hp,hv).call(this),this.media)?null==(t=this.media)?void 0:t.addChapters(e):void cP("underlying media element missing when trying to addChapters. chapters will not be added.")}get activeChapter(){var e;return null==(e=this.media)?void 0:e.activeChapter}get chapters(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.chapters)?t:[]}getStartDate(){var e;return null==(e=this.media)?void 0:e.getStartDate()}get currentPdt(){var e;return null==(e=this.media)?void 0:e.currentPdt}get tokens(){let e=this.getAttribute(c6.PLAYBACK_TOKEN),t=this.getAttribute(c6.DRM_TOKEN),i=this.getAttribute(c6.THUMBNAIL_TOKEN),a=this.getAttribute(c6.STORYBOARD_TOKEN);return{...s8(this,hr),...null!=e?{playback:e}:{},...null!=t?{drm:t}:{},...null!=i?{thumbnail:i}:{},...null!=a?{storyboard:a}:{}}}set tokens(e){s7(this,hr,null!=e?e:{})}get playbackToken(){var e;return null!=(e=this.getAttribute(c6.PLAYBACK_TOKEN))?e:void 0}set playbackToken(e){this.setAttribute(c6.PLAYBACK_TOKEN,`${e}`)}get drmToken(){var e;return null!=(e=this.getAttribute(c6.DRM_TOKEN))?e:void 0}set drmToken(e){this.setAttribute(c6.DRM_TOKEN,`${e}`)}get thumbnailToken(){var e;return null!=(e=this.getAttribute(c6.THUMBNAIL_TOKEN))?e:void 0}set thumbnailToken(e){this.setAttribute(c6.THUMBNAIL_TOKEN,`${e}`)}get storyboardToken(){var e;return null!=(e=this.getAttribute(c6.STORYBOARD_TOKEN))?e:void 0}set storyboardToken(e){this.setAttribute(c6.STORYBOARD_TOKEN,`${e}`)}addTextTrack(e,t,i,a){var r;let n=null==(r=this.media)?void 0:r.nativeEl;if(n)return(0,s.KR)(n,e,t,i,a)}removeTextTrack(e){var t;let i=null==(t=this.media)?void 0:t.nativeEl;if(i)return(0,s.$V)(i,e)}get textTracks(){var e;return null==(e=this.media)?void 0:e.textTracks}get castReceiver(){var e;return null!=(e=this.getAttribute(c6.CAST_RECEIVER))?e:void 0}set castReceiver(e){e!==this.castReceiver&&(e?this.setAttribute(c6.CAST_RECEIVER,e):this.removeAttribute(c6.CAST_RECEIVER))}get castCustomData(){var e;return null==(e=this.media)?void 0:e.castCustomData}set castCustomData(e){this.media?this.media.castCustomData=e:cP("underlying media element missing when trying to set castCustomData. castCustomData will not be set.")}get noTooltips(){return this.hasAttribute(c6.NO_TOOLTIPS)}set noTooltips(e){e?this.setAttribute(c6.NO_TOOLTIPS,""):this.removeAttribute(c6.NO_TOOLTIPS)}get proudlyDisplayMuxBadge(){return this.hasAttribute(c6.PROUDLY_DISPLAY_MUX_BADGE)}set proudlyDisplayMuxBadge(e){e?this.setAttribute(c6.PROUDLY_DISPLAY_MUX_BADGE,""):this.removeAttribute(c6.PROUDLY_DISPLAY_MUX_BADGE)}get capRenditionToPlayerSize(){var e;return null==(e=this.media)?void 0:e.capRenditionToPlayerSize}set capRenditionToPlayerSize(e){this.media?this.media.capRenditionToPlayerSize=e:cP("underlying media element missing when trying to set capRenditionToPlayerSize")}};function hL(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}hi=new WeakMap,ha=new WeakMap,hr=new WeakMap,hn=new WeakMap,hs=new WeakMap,ho=new WeakMap,hl=new WeakMap,hd=new WeakMap,hu=new WeakMap,hc=new WeakMap,hh=new WeakMap,hm=new WeakMap,hp=new WeakSet,hv=function(){var e,t,i,a;if(!s8(this,ha)){s7(this,ha,!0),oe(this,hp,hE).call(this);try{if(customElements.upgrade(this.mediaTheme),!(this.mediaTheme instanceof cf.HTMLElement))throw""}catch{cP("<media-theme> failed to upgrade!")}try{customElements.upgrade(this.media)}catch{cP("underlying media element failed to upgrade!")}try{if(customElements.upgrade(this.mediaController),!(this.mediaController instanceof i5))throw""}catch{cP("<media-controller> failed to upgrade!")}oe(this,hp,hf).call(this),oe(this,hp,hy).call(this),oe(this,hp,h_).call(this),s7(this,hn,null==(t=null==(e=this.mediaController)?void 0:e.hasAttribute(tZ))||t),oe(this,hp,hT).call(this),null==(i=this.media)||i.addEventListener("streamtypechange",s8(this,hl)),null==(a=this.media)||a.addEventListener("loadstart",s8(this,hd))}},hb=function(){var e,t;try{null==(e=null==window?void 0:window.CSS)||e.registerProperty({name:"--media-primary-color",syntax:"<color>",inherits:!0}),null==(t=null==window?void 0:window.CSS)||t.registerProperty({name:"--media-secondary-color",syntax:"<color>",inherits:!0})}catch{}},hg=function(e){Object.assign(s8(this,hh),e),oe(this,hp,hE).call(this)},hE=function(e={}){var t,i,a,r,n,o,l,d,u,c,h,m,p,v,b,g,E,f,y,T,k,A,w,R,I,S,C,L,M,D,x,N,O,P,W,H,B,$,V,q,K,F,Y,G,j,z,Q,Z,X,J;let ee,et,ei,ea;t={...s8(this,hh),...e},ee={src:!this.playbackId&&this.src,playbackId:this.playbackId,hasSrc:!!this.playbackId||!!this.src||!!this.currentSrc,poster:this.poster,storyboard:(null==(i=this.media)?void 0:i.currentSrc)&&this.storyboard,storyboardSrc:this.getAttribute(c6.STORYBOARD_SRC),fullscreenElement:this.getAttribute(c6.FULLSCREEN_ELEMENT),placeholder:this.getAttribute("placeholder"),themeTemplate:function(e){var t,i;let a=e.theme;if(a){let r=null==(i=null==(t=e.getRootNode())?void 0:t.getElementById)?void 0:i.call(t,a);if(r&&r instanceof HTMLTemplateElement)return r;a.startsWith("media-theme-")||(a=`media-theme-${a}`);let n=cf.customElements.get(a);if(null!=n&&n.template)return n.template}}(this),thumbnailTime:!this.tokens.thumbnail&&this.thumbnailTime,autoplay:this.autoplay,crossOrigin:this.crossOrigin,loop:this.loop,noHotKeys:this.hasAttribute(c6.NOHOTKEYS),hotKeys:this.getAttribute(c6.HOTKEYS),muted:this.muted,paused:this.paused,preload:this.preload,envKey:this.envKey,preferCmcd:this.preferCmcd,debug:this.debug,disableTracking:this.disableTracking,disableCookies:this.disableCookies,tokens:this.tokens,beaconCollectionDomain:this.beaconCollectionDomain,maxResolution:this.maxResolution,minResolution:this.minResolution,maxAutoResolution:this.maxAutoResolution,programStartTime:this.programStartTime,programEndTime:this.programEndTime,assetStartTime:this.assetStartTime,assetEndTime:this.assetEndTime,renditionOrder:this.renditionOrder,metadata:this.metadata,playerInitTime:this.playerInitTime,playerSoftwareName:this.playerSoftwareName,playerSoftwareVersion:this.playerSoftwareVersion,startTime:this.startTime,preferPlayback:this.preferPlayback,audio:this.audio,defaultStreamType:this.defaultStreamType,targetLiveWindow:this.getAttribute(U.TARGET_LIVE_WINDOW),streamType:cM(this.getAttribute(U.STREAM_TYPE)),primaryColor:this.getAttribute(c6.PRIMARY_COLOR),secondaryColor:this.getAttribute(c6.SECONDARY_COLOR),accentColor:this.getAttribute(c6.ACCENT_COLOR),forwardSeekOffset:this.forwardSeekOffset,backwardSeekOffset:this.backwardSeekOffset,defaultHiddenCaptions:this.defaultHiddenCaptions,defaultDuration:this.defaultDuration,defaultShowRemainingTime:this.defaultShowRemainingTime,hideDuration:(et=null==(n=this.mediaController)?void 0:n.querySelector("media-time-display"))&&"none"===getComputedStyle(et).getPropertyValue("--media-duration-display-display").trim(),playbackRates:this.getAttribute(c6.PLAYBACK_RATES),customDomain:null!=(a=this.getAttribute(U.CUSTOM_DOMAIN))?a:void 0,title:this.getAttribute(c6.TITLE),videoTitle:null!=(r=this.getAttribute(c6.VIDEO_TITLE))?r:this.getAttribute(c6.TITLE),novolumepref:this.hasAttribute(c6.NO_VOLUME_PREF),nomutedpref:this.hasAttribute(c6.NO_MUTED_PREF),proudlyDisplayMuxBadge:this.hasAttribute(c6.PROUDLY_DISPLAY_MUX_BADGE),castReceiver:this.castReceiver,disablePseudoEnded:this.hasAttribute(c6.DISABLE_PSEUDO_ENDED),capRenditionToPlayerSize:this.capRenditionToPlayerSize,...t,extraSourceParams:this.extraSourceParams},o=cX`
  <style>
    ${(e=>{let{tokens:t}=e;return t.drm?":host(:not([cast-receiver])) { --_cast-button-drm-display: none; }":""})(ee)}
    ${cK}
  </style>
  ${d=ee,cX`
  <media-theme
    template="${d.themeTemplate||!1}"
    defaultstreamtype="${null!=(u=d.defaultStreamType)&&u}"
    hotkeys="${ei=d.hotKeys?`${d.hotKeys}`:"","live"===cM(d.streamType)&&(ei+=" noarrowleft noarrowright"),ei||!1}"
    nohotkeys="${d.noHotKeys||!d.hasSrc||!1}"
    noautoseektolive="${!!(null!=(c=d.streamType)&&c.includes(s.U4.LIVE))&&0!==d.targetLiveWindow}"
    novolumepref="${d.novolumepref||!1}"
    nomutedpref="${d.nomutedpref||!1}"
    disabled="${!d.hasSrc||d.isDialogOpen}"
    audio="${null!=(h=d.audio)&&h}"
    style="${null!=(J={"--media-primary-color":d.primaryColor,"--media-secondary-color":d.secondaryColor,"--media-accent-color":d.accentColor},ea="",Object.entries(J).forEach(([e,t])=>{null!=t&&(ea+=`${c_(e)}: ${t}; `)}),m=ea?ea.trim():void 0)&&m}"
    defaultsubtitles="${!d.defaultHiddenCaptions}"
    forwardseekoffset="${null!=(p=d.forwardSeekOffset)&&p}"
    backwardseekoffset="${null!=(v=d.backwardSeekOffset)&&v}"
    playbackrates="${null!=(b=d.playbackRates)&&b}"
    defaultshowremainingtime="${null!=(g=d.defaultShowRemainingTime)&&g}"
    defaultduration="${null!=(E=d.defaultDuration)&&E}"
    hideduration="${null!=(f=d.hideDuration)&&f}"
    title="${null!=(y=d.title)&&y}"
    videotitle="${null!=(T=d.videoTitle)&&T}"
    proudlydisplaymuxbadge="${null!=(k=d.proudlyDisplayMuxBadge)&&k}"
    exportparts="${cJ}"
    onclose="${d.onCloseErrorDialog}"
    onfocusin="${d.onFocusInErrorDialog}"
  >
    <mux-video
      slot="media"
      inert="${null!=(A=d.noHotKeys)&&A}"
      target-live-window="${null!=(w=d.targetLiveWindow)&&w}"
      stream-type="${null!=(R=cM(d.streamType))&&R}"
      crossorigin="${null!=(I=d.crossOrigin)?I:""}"
      playsinline
      autoplay="${null!=(S=d.autoplay)&&S}"
      muted="${null!=(C=d.muted)&&C}"
      loop="${null!=(L=d.loop)&&L}"
      preload="${null!=(M=d.preload)&&M}"
      debug="${null!=(D=d.debug)&&D}"
      prefer-cmcd="${null!=(x=d.preferCmcd)&&x}"
      disable-tracking="${null!=(N=d.disableTracking)&&N}"
      disable-cookies="${null!=(O=d.disableCookies)&&O}"
      prefer-playback="${null!=(P=d.preferPlayback)&&P}"
      start-time="${null!=d.startTime&&d.startTime}"
      beacon-collection-domain="${null!=(W=d.beaconCollectionDomain)&&W}"
      player-init-time="${null!=(H=d.playerInitTime)&&H}"
      player-software-name="${null!=(B=d.playerSoftwareName)&&B}"
      player-software-version="${null!=($=d.playerSoftwareVersion)&&$}"
      env-key="${null!=(V=d.envKey)&&V}"
      custom-domain="${null!=(q=d.customDomain)&&q}"
      src="${d.src?d.src:!!d.playbackId&&(0,s.OR)(d)}"
      cast-src="${d.src?d.src:!!d.playbackId&&(0,s.OR)(d)}"
      cast-receiver="${null!=(K=d.castReceiver)&&K}"
      drm-token="${null!=(Y=null==(F=d.tokens)?void 0:F.drm)&&Y}"
      playback-token="${null!=(j=null==(G=d.tokens)?void 0:G.playback)&&j}"
      exportparts="video"
      disable-pseudo-ended="${null!=(z=d.disablePseudoEnded)&&z}"
      max-auto-resolution="${null!=(Q=d.maxAutoResolution)&&Q}"
      cap-rendition-to-player-size="${null!=(Z=d.capRenditionToPlayerSize)&&Z}"
    >
      ${d.storyboard?cX`<track label="thumbnails" default kind="metadata" src="${d.storyboard}" />`:cX``}
      <slot></slot>
    </mux-video>
    <slot name="poster" slot="poster">
      <media-poster-image
        part="poster"
        exportparts="poster, img"
        src="${!!d.poster&&d.poster}"
        placeholdersrc="${null!=(X=d.placeholder)&&X}"
      ></media-poster-image>
    </slot>
  </media-theme>
`}
`,l=this.shadowRoot,o.renderInto(l)},hf=function(){let e=e=>{var t,i;if(!(null!=e&&e.startsWith("theme-")))return;let a=e.replace(/^theme-/,"");if(c7.includes(a))return;let r=this.getAttribute(e);null!=r?null==(t=this.mediaTheme)||t.setAttribute(a,r):null==(i=this.mediaTheme)||i.removeAttribute(a)};s7(this,ho,new MutationObserver(t=>{for(let{attributeName:i}of t)e(i)})),s8(this,ho).observe(this,{attributes:!0}),this.getAttributeNames().forEach(e)},hy=function(){this.addEventListener("error",s8(this,hm)),this.media&&(this.media.errorTranslator=(e={})=>{var t,i,a;if(!((null==(t=this.media)?void 0:t.error)instanceof s.FJ))return e;let r=c1(null==(i=this.media)?void 0:i.error,!1);return{player_error_code:null==(a=this.media)?void 0:a.error.code,player_error_message:r.message?String(r.message):e.player_error_message,player_error_context:r.context?String(r.context):e.player_error_context}})},h_=function(){var e,t,i,a;null==(t=null==(e=this.media)?void 0:e.textTracks)||t.addEventListener("addtrack",s8(this,hu)),null==(a=null==(i=this.media)?void 0:i.textTracks)||a.addEventListener("removetrack",s8(this,hu))},hT=function(){var e,t;if(!/Firefox/i.test(navigator.userAgent))return;let i,a=new WeakMap,r=()=>this.streamType===s.U4.LIVE&&!this.secondaryColor&&this.offsetWidth>=800,n=(e,t,i=!1)=>{r()||Array.from(e&&e.activeCues||[]).forEach(e=>{if(!(!e.snapToLines||e.line<-5||e.line>=0&&e.line<10))if(!t||this.paused){let t=e.text.split(`
`).length,r=-3;this.streamType===s.U4.LIVE&&(r=-2);let n=r-t;if(e.line===n&&!i)return;a.has(e)||a.set(e,e.line),e.line=n}else setTimeout(()=>{e.line=a.get(e)||"auto"},500)})},o=()=>{var e,t;n(i,null!=(t=null==(e=this.mediaController)?void 0:e.hasAttribute(tZ))&&t)},l=()=>{var e,t;let a=Array.from((null==(t=null==(e=this.mediaController)?void 0:e.media)?void 0:t.textTracks)||[]).filter(e=>["subtitles","captions"].includes(e.kind)&&"showing"===e.mode)[0];a!==i&&(null==i||i.removeEventListener("cuechange",o)),null==(i=a)||i.addEventListener("cuechange",o),n(i,s8(this,hn))};l(),null==(e=this.textTracks)||e.addEventListener("change",l),null==(t=this.textTracks)||t.addEventListener("addtrack",l);let d=()=>{var e,t;let a=null==(t=null==(e=this.mediaController)?void 0:e.hasAttribute(tZ))||t;s8(this,hn)!==a&&(s7(this,hn,a),n(i,s8(this,hn)))};this.addEventListener("userinactivechange",d),s7(this,hc,()=>{var e,t;null==i||i.removeEventListener("cuechange",o),null==(e=this.textTracks)||e.removeEventListener("change",l),null==(t=this.textTracks)||t.removeEventListener("addtrack",l),this.removeEventListener("userinactivechange",d)})};var hM=e=>{throw TypeError(e)},hD=(e,t,i)=>t.has(e)||hM("Cannot "+i),hx=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if("u"<typeof DocumentFragment){class e extends hx{}globalThis.DocumentFragment=e}var hN,hO=class extends hx{},hP=class{constructor(e,t={}){((e,t,i)=>t.has(e)?hM("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i))(this,hN),((e,t,i,a)=>(hD(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,hN,null==t?void 0:t.detail)}get detail(){let e,t;return hD(this,e=hN,"read from private field"),t?t.call(this):e.get(this)}initCustomEvent(){}};hN=new WeakMap;var hU={document:{createElement:function(e,t){return new hO}},DocumentFragment,customElements:{get(e){},define(e,t,i){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(hO)},CustomEvent:hP,EventTarget:hx,HTMLElement:hO,HTMLVideoElement:class extends hx{}},hW="u"<typeof window||void 0===globalThis.customElements,hH=hW?hU:globalThis;hW&&hU.document,hH.customElements.get("mux-player")||(hH.customElements.define("mux-player",hC),hH.MuxPlayerElement=hC)},76338:(e,t,i)=>{i.d(t,{WG:()=>tG,D2:()=>tQ,FJ:()=>t$,Jk:()=>tZ,dc:()=>tU,Ks:()=>tW,_G:()=>iC,Vi:()=>tF,Hf:()=>tX,U4:()=>tK,S5:()=>ik,st:()=>ip,KR:()=>il,LM:()=>tH,GI:()=>iX,IC:()=>iw,C$:()=>ig,rN:()=>iA,xc:()=>i7,Pv:()=>ib,Ul:()=>iS,hu:()=>aa,vG:()=>i3,Yz:()=>i6,yb:()=>i4,pD:()=>i8,tq:()=>iI,Zp:()=>i5,WE:()=>i9,Ru:()=>it,n_:()=>ar,$n:()=>ie,$V:()=>id,zN:()=>an,OR:()=>i0,CL:()=>i2,_$:()=>t1});var a=Object.create,r=Object.defineProperty,n=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,o=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,d=function(e,t){return function(){return e&&(t=e(e=0)),t}},u=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}},c=function(e,t,i,a){if(t&&"object"==typeof t||"function"==typeof t)for(var o,d=s(t),u=0,c=d.length;u<c;u++)o=d[u],l.call(e,o)||o===i||r(e,o,{get:(function(e){return t[e]}).bind(null,o),enumerable:!(a=n(t,o))||a.enumerable});return e},h=function(e,t,i){return i=null!=e?a(o(e)):{},c(!t&&e&&e.__esModule?i:r(i,"default",{value:e,enumerable:!0}),e)},m=u(function(e,t){t.exports="u">typeof window?window:"u">typeof global?global:"u">typeof self?self:{}});function p(e,t){return null!=t&&"u">typeof Symbol&&t[Symbol.hasInstance]?!!t[Symbol.hasInstance](e):p(e,t)}var v=d(function(){v()});function b(e){return e&&"u">typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}var g=d(function(){}),E=u(function(e,t){var i=Array.prototype.slice;t.exports=function(e,t){for(("length"in e)||(e=[e]),e=i.call(e);e.length;){var a=e.shift(),r=t(a);if(r)return r;a.childNodes&&a.childNodes.length&&(e=i.call(a.childNodes).concat(e))}}}),f=u(function(e,t){function i(e,t){if(!p(this,i))return new i(e,t);this.data=e,this.nodeValue=e,this.length=e.length,this.ownerDocument=t||null}v(),t.exports=i,i.prototype.nodeType=8,i.prototype.nodeName="#comment",i.prototype.toString=function(){return"[object Comment]"}}),y=u(function(e,t){function i(e,t){if(!p(this,i))return new i(e);this.data=e||"",this.length=this.data.length,this.ownerDocument=t||null}v(),t.exports=i,i.prototype.type="DOMTextNode",i.prototype.nodeType=3,i.prototype.nodeName="#text",i.prototype.toString=function(){return this.data},i.prototype.replaceData=function(e,t,i){var a=this.data,r=a.substring(0,e),n=a.substring(e+t,a.length);this.data=r+i+n,this.length=this.data.length}}),T=u(function(e,t){t.exports=function(e){var t=this,i=e.type;e.target||(e.target=t),t.listeners||(t.listeners={});var a=t.listeners[i];if(a)return a.forEach(function(i){e.currentTarget=t,"function"==typeof i?i(e):i.handleEvent(e)});t.parentNode&&t.parentNode.dispatchEvent(e)}}),k=u(function(e,t){t.exports=function(e,t){this.listeners||(this.listeners={}),this.listeners[e]||(this.listeners[e]=[]),-1===this.listeners[e].indexOf(t)&&this.listeners[e].push(t)}}),A=u(function(e,t){t.exports=function(e,t){if(this.listeners&&this.listeners[e]){var i=this.listeners[e],a=i.indexOf(t);-1!==a&&i.splice(a,1)}}}),w=u(function(e,t){g(),t.exports=function e(t){switch(t.nodeType){case 3:return r(t.data);case 8:return"\x3c!--"+t.data+"--\x3e";default:var n,s,o;return s=[],o=(n=t).tagName,"http://www.w3.org/1999/xhtml"===n.namespaceURI&&(o=o.toLowerCase()),s.push("<"+o+function(e){var t=[];for(var i in e)(function(e,t){var i=b(e[t]);return"style"===t&&Object.keys(e.style).length>0||e.hasOwnProperty(t)&&("string"===i||"boolean"===i||"number"===i)&&"nodeName"!==t&&"className"!==t&&"tagName"!==t&&"textContent"!==t&&"innerText"!==t&&"namespaceURI"!==t&&"innerHTML"!==t})(e,i)&&t.push({name:i,value:e[i]});for(var r in e._attributes)for(var n in e._attributes[r]){var s=e._attributes[r][n],o=(s.prefix?s.prefix+":":"")+n;t.push({name:o,value:s.value})}return e.className&&t.push({name:"class",value:e.className}),t.length?a(t):""}(n)+function(e){var t=e.dataset,i=[];for(var r in t)i.push({name:"data-"+r,value:t[r]});return i.length?a(i):""}(n)),i.indexOf(o)>-1?s.push(" />"):(s.push(">"),n.childNodes.length?s.push.apply(s,n.childNodes.map(e)):n.textContent||n.innerText?s.push(r(n.textContent||n.innerText)):n.innerHTML&&s.push(n.innerHTML),s.push("</"+o+">")),s.join("")}};var i=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"];function a(e){var t=[];return e.forEach(function(e){var i=e.name,a=e.value;"style"===i&&(a=function(e){if("string"==typeof e)return e;var t="";return Object.keys(e).forEach(function(i){var a=e[i];i=i.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}),t+=i+":"+a+";"}),t}(a)),t.push(i+'="'+r(a).replace(/"/g,"&quot;")+'"')}),t.length?" "+t.join(" "):""}function r(e){var t="";return"string"==typeof e?t=e:e&&(t=e.toString()),t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}}),R=u(function(e,t){v();var i=E(),a=T(),r=k(),n=A(),s=w(),o="http://www.w3.org/1999/xhtml";function l(e,t,i){if(!p(this,l))return new l(e);var a=void 0===i?o:i||null;this.tagName=a===o?String(e).toUpperCase():e,this.nodeName=this.tagName,this.className="",this.dataset={},this.childNodes=[],this.parentNode=null,this.style={},this.ownerDocument=t||null,this.namespaceURI=a,this._attributes={},"INPUT"===this.tagName&&(this.type="text")}t.exports=l,l.prototype.type="DOMElement",l.prototype.nodeType=1,l.prototype.appendChild=function(e){return e.parentNode&&e.parentNode.removeChild(e),this.childNodes.push(e),e.parentNode=this,e},l.prototype.replaceChild=function(e,t){e.parentNode&&e.parentNode.removeChild(e);var i=this.childNodes.indexOf(t);return t.parentNode=null,this.childNodes[i]=e,e.parentNode=this,t},l.prototype.removeChild=function(e){var t=this.childNodes.indexOf(e);return this.childNodes.splice(t,1),e.parentNode=null,e},l.prototype.insertBefore=function(e,t){e.parentNode&&e.parentNode.removeChild(e);var i=null==t?-1:this.childNodes.indexOf(t);return i>-1?this.childNodes.splice(i,0,e):this.childNodes.push(e),e.parentNode=this,e},l.prototype.setAttributeNS=function(e,t,i){var a=null,r=t,n=t.indexOf(":");(n>-1&&(a=t.substr(0,n),r=t.substr(n+1)),"INPUT"===this.tagName&&"type"===t)?this.type=i:(this._attributes[e]||(this._attributes[e]={}))[r]={value:i,prefix:a}},l.prototype.getAttributeNS=function(e,t){var i=this._attributes[e],a=i&&i[t]&&i[t].value;return"INPUT"===this.tagName&&"type"===t?this.type:"string"!=typeof a?null:a},l.prototype.removeAttributeNS=function(e,t){var i=this._attributes[e];i&&delete i[t]},l.prototype.hasAttributeNS=function(e,t){var i=this._attributes[e];return!!i&&t in i},l.prototype.setAttribute=function(e,t){return this.setAttributeNS(null,e,t)},l.prototype.getAttribute=function(e){return this.getAttributeNS(null,e)},l.prototype.removeAttribute=function(e){return this.removeAttributeNS(null,e)},l.prototype.hasAttribute=function(e){return this.hasAttributeNS(null,e)},l.prototype.removeEventListener=n,l.prototype.addEventListener=r,l.prototype.dispatchEvent=a,l.prototype.focus=function(){},l.prototype.toString=function(){return s(this)},l.prototype.getElementsByClassName=function(e){var t=e.split(" "),a=[];return i(this,function(e){if(1===e.nodeType){var i=(e.className||"").split(" ");t.every(function(e){return -1!==i.indexOf(e)})&&a.push(e)}}),a},l.prototype.getElementsByTagName=function(e){e=e.toLowerCase();var t=[];return i(this.childNodes,function(i){1===i.nodeType&&("*"===e||i.tagName.toLowerCase()===e)&&t.push(i)}),t},l.prototype.contains=function(e){return i(this,function(t){return e===t})||!1}}),I=u(function(e,t){v();var i=R();function a(e){if(!p(this,a))return new a;this.childNodes=[],this.parentNode=null,this.ownerDocument=e||null}t.exports=a,a.prototype.type="DocumentFragment",a.prototype.nodeType=11,a.prototype.nodeName="#document-fragment",a.prototype.appendChild=i.prototype.appendChild,a.prototype.replaceChild=i.prototype.replaceChild,a.prototype.removeChild=i.prototype.removeChild,a.prototype.toString=function(){return this.childNodes.map(function(e){return String(e)}).join("")}}),S=u(function(e,t){function i(e){}t.exports=i,i.prototype.initEvent=function(e,t,i){this.type=e,this.bubbles=t,this.cancelable=i},i.prototype.preventDefault=function(){}}),C=u(function(e,t){v();var i=E(),a=f(),r=y(),n=R(),s=I(),o=S(),l=T(),d=k(),u=A();function c(){if(!p(this,c))return new c;this.head=this.createElement("head"),this.body=this.createElement("body"),this.documentElement=this.createElement("html"),this.documentElement.appendChild(this.head),this.documentElement.appendChild(this.body),this.childNodes=[this.documentElement],this.nodeType=9}t.exports=c;var h=c.prototype;h.createTextNode=function(e){return new r(e,this)},h.createElementNS=function(e,t){return new n(t,this,null===e?null:String(e))},h.createElement=function(e){return new n(e,this)},h.createDocumentFragment=function(){return new s(this)},h.createEvent=function(e){return new o(e)},h.createComment=function(e){return new a(e,this)},h.getElementById=function(e){return e=String(e),i(this.childNodes,function(t){if(String(t.id)===e)return t})||null},h.getElementsByClassName=n.prototype.getElementsByClassName,h.getElementsByTagName=n.prototype.getElementsByTagName,h.contains=n.prototype.contains,h.removeEventListener=u,h.addEventListener=d,h.dispatchEvent=l}),L=u(function(e,t){t.exports=new(C())}),M=u(function(e,t){var i,a="u">typeof global?global:"u">typeof window?window:{},r=L();"u">typeof document?i=document:(i=a["__GLOBAL_DOCUMENT_CACHE@4"])||(i=a["__GLOBAL_DOCUMENT_CACHE@4"]=r),t.exports=i});function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=Array(t);i<t;i++)a[i]=e[i];return a}function x(e,t){if(e){if("string"==typeof e)return D(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);if("Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return D(e,t)}}function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"u">typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var a,r,n=[],s=!0,o=!1;try{for(i=i.call(e);!(s=(a=i.next()).done)&&(n.push(a.value),!(t&&n.length===t));s=!0);}catch(e){o=!0,r=e}finally{try{s||null==i.return||i.return()}finally{if(o)throw r}}return n}}(e,t)||x(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var O=h(m()),P=h(m()),U=h(m()),W=function(){var e=U.default.performance,t=e&&e.timing,i=t&&t.navigationStart;return Math.round("number"==typeof i&&"function"==typeof e.now?i+e.now():Date.now())},H=function(){if("function"==typeof(null==(e=P.default.crypto)?void 0:e.getRandomValues)){i=new Uint8Array(32),P.default.crypto.getRandomValues(i);for(var e,t,i,a=0;a<32;a++)i[a]=i[a]%16}else{i=[];for(var r=0;r<32;r++)i[r]=16*Math.random()|0}var n=0;t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t="x"===e?i[n]:3&i[n]|8;return n++,t.toString(16)});var s=W(),o=null==s?void 0:s.toString(16).substring(3);return o?t.substring(0,28)+o:t},B=function(){return("000000"+(0x81bf1000*Math.random()|0).toString(36)).slice(-6)},$=function(e){var t;if(e&&void 0!==e.nodeName)return e.muxId||(e.muxId=B()),e.muxId;try{t=document.querySelector(e)}catch(e){}return t&&!t.muxId&&(t.muxId=e),(null==t?void 0:t.muxId)||e},V=function(e){e&&void 0!==e.nodeName?e=$(t=e):t=document.querySelector(e);var t,i=t&&t.nodeName?t.nodeName.toLowerCase():"";return[t,e,i]};function q(e){return function(e){if(Array.isArray(e))return D(e)}(e)||function(e){if("u">typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||x(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var K=function(e){var t,i,a,r,n,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,o=e?[console,e]:[console],l=(t=console.trace).bind.apply(t,q(o)),d=(i=console.info).bind.apply(i,q(o)),u=(a=console.debug).bind.apply(a,q(o)),c=(r=console.warn).bind.apply(r,q(o)),h=(n=console.error).bind.apply(n,q(o)),m=s;return{trace:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>0))return l.apply(void 0,q(t))},debug:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>1))return u.apply(void 0,q(t))},info:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>2))return d.apply(void 0,q(t))},warn:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>3))return c.apply(void 0,q(t))},error:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>4))return h.apply(void 0,q(t))},get level(){return m},set level(_){_!==this.level&&(m=null!=_?_:s)}}}("[mux]"),F=h(m());function Y(){return"1"===(F.default.doNotTrack||F.default.navigator&&F.default.navigator.doNotTrack)}function G(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e,t){if(!p(e,t))throw TypeError("Cannot call a class as a function")}function z(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function Q(e,t,i){return t&&z(e.prototype,t),i&&z(e,i),e}function Z(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function X(e){return(X=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function J(e,t,i){return(J="u">typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var a=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=X(e)););return e}(e,t);if(a){var r=Object.getOwnPropertyDescriptor(a,t);return r.get?r.get.call(i||e):r.value}})(e,t,i||e)}function ee(e,t){return(ee=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}v(),g();var et=function(e){return ei(e)[0]},ei=function(e){if("string"!=typeof e||""===e)return["localhost"];var t,i=(e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/)||[])[4];return i&&(t=(i.match(/[^\.]+\.[^\.]+$/)||[])[0]),[i,t]},ea=h(m()),er=function(){var e=ea.default.performance;return void 0!==(e&&e.timing)},en=function(){var e=ea.default.performance,t=e&&e.timing;return t&&t.domContentLoadedEventEnd},es=function(){var e=ea.default.performance,t=e&&e.timing;return t&&t.navigationStart};function eo(e,t,i){i=void 0===i?1:i,e[t]=e[t]||0,e[t]+=i}function el(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},a=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),a.forEach(function(t){Z(e,t,i[t])})}return e}function ed(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t.push.apply(t,i)}return t})(Object(t)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}),e}var eu=["x-request-id","cf-ray","x-amz-cf-id","x-akamai-request-id"],ec=["x-cdn","content-type"].concat(eu);function eh(e){var t={};return(e=e||"").trim().split(/[\r\n]+/).forEach(function(e){if(e){var i=e.split(": "),a=i.shift();a&&(ec.indexOf(a.toLowerCase())>=0||0===a.toLowerCase().indexOf("x-litix-"))&&(t[a]=i.join(": "))}}),t}function em(e){if(e){var t=eu.find(function(t){return void 0!==e[t]});return t?e[t]:void 0}}var ep=function(e){var t={};for(var i in e){var a=e[i];-1!==a["DATA-ID"].search("io.litix.data.")&&(t[a["DATA-ID"].replace("io.litix.data.","")]=a.VALUE)}return t},ev=function(e){if(!e)return{};var t=es(),i=e.loading,a=i?i.start:e.trequest,r=i?i.first:e.tfirst,n=i?i.end:e.tload;return{bytesLoaded:e.total,requestStart:Math.round(t+a),responseStart:Math.round(t+r),responseEnd:Math.round(t+n)}},eb=function(e){if(!(!e||"function"!=typeof e.getAllResponseHeaders))return eh(e.getAllResponseHeaders())},eg=function(e,t,i){arguments.length>3&&void 0!==arguments[3]&&arguments[3];var a=arguments.length>4?arguments[4]:void 0,r=e.log,n=e.utils.secondsToMs,s=function(e){var t,i=parseInt(a.version);return 1===i&&null!==e.programDateTime&&(t=e.programDateTime),0===i&&null!==e.pdt&&(t=e.pdt),t};if(!er())return void r.warn("performance timing not supported. Not tracking HLS.js.");var o=function(i,a){return e.emit(t,i,a)},l=function(e,t){var i=t.levels,a=t.audioTracks,r=t.url,n=t.stats,s=t.networkDetails,l=t.sessionData,d={},u={};i.forEach(function(e,t){d[t]={width:e.width,height:e.height,bitrate:e.bitrate,attrs:e.attrs}}),a.forEach(function(e,t){u[t]={name:e.name,language:e.lang,bitrate:e.bitrate}});var c=ev(n),h=c.bytesLoaded,m=c.requestStart,p=c.responseStart,v=c.responseEnd;o("requestcompleted",ed(el({},ep(l)),{request_event_type:e,request_bytes_loaded:h,request_start:m,request_response_start:p,request_response_end:v,request_type:"manifest",request_hostname:et(r),request_response_headers:eb(s),request_rendition_lists:{media:d,audio:u,video:{}}}))};i.on(a.Events.MANIFEST_LOADED,l);var d=function(e,t){var i=t.details,a=t.level,r=t.networkDetails,l=ev(t.stats),d=l.bytesLoaded,u=l.requestStart,c=l.responseStart,h=l.responseEnd,m=i.fragments[i.fragments.length-1],p=s(m)+n(m.duration);o("requestcompleted",{request_event_type:e,request_bytes_loaded:d,request_start:u,request_response_start:c,request_response_end:h,request_current_level:a,request_type:"manifest",request_hostname:et(i.url),request_response_headers:eb(r),video_holdback:i.holdBack&&n(i.holdBack),video_part_holdback:i.partHoldBack&&n(i.partHoldBack),video_part_target_duration:i.partTarget&&n(i.partTarget),video_target_duration:i.targetduration&&n(i.targetduration),video_source_is_live:i.live,player_manifest_newest_program_time:isNaN(p)?void 0:p})};i.on(a.Events.LEVEL_LOADED,d);var u=function(e,t){var i=t.details,a=t.networkDetails,r=ev(t.stats);o("requestcompleted",{request_event_type:e,request_bytes_loaded:r.bytesLoaded,request_start:r.requestStart,request_response_start:r.responseStart,request_response_end:r.responseEnd,request_type:"manifest",request_hostname:et(i.url),request_response_headers:eb(a)})};i.on(a.Events.AUDIO_TRACK_LOADED,u);var c=function(e,t){var a=t.stats,r=t.networkDetails,n=t.frag,s=ev(a=a||n.stats),l=s.bytesLoaded,d=s.requestStart,u=s.responseStart,c=s.responseEnd,h=r?eb(r):void 0,m={request_event_type:e,request_bytes_loaded:l,request_start:d,request_response_start:u,request_response_end:c,request_hostname:r?et(r.responseURL):void 0,request_id:h?em(h):void 0,request_response_headers:h,request_media_duration:n.duration,request_url:null==r?void 0:r.responseURL};"main"===n.type?(m.request_type="media",m.request_current_level=n.level,m.request_video_width=(i.levels[n.level]||{}).width,m.request_video_height=(i.levels[n.level]||{}).height,m.request_labeled_bitrate=(i.levels[n.level]||{}).bitrate):m.request_type=n.type,o("requestcompleted",m)};i.on(a.Events.FRAG_LOADED,c);var h=function(e,t){var i=t.frag,a=i.start;o("fragmentchange",{currentFragmentPDT:s(i),currentFragmentStart:n(a)})};i.on(a.Events.FRAG_CHANGED,h);var m=function(e,t){var i,r=t.type,n=t.details,s=t.response,l=t.fatal,d=t.frag,u=t.networkDetails,c=(null==d?void 0:d.url)||t.url||"",h=u?eb(u):void 0;(n===a.ErrorDetails.MANIFEST_LOAD_ERROR||n===a.ErrorDetails.MANIFEST_LOAD_TIMEOUT||n===a.ErrorDetails.FRAG_LOAD_ERROR||n===a.ErrorDetails.FRAG_LOAD_TIMEOUT||n===a.ErrorDetails.LEVEL_LOAD_ERROR||n===a.ErrorDetails.LEVEL_LOAD_TIMEOUT||n===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||n===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT||n===a.ErrorDetails.SUBTITLE_LOAD_ERROR||n===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT||n===a.ErrorDetails.KEY_LOAD_ERROR||n===a.ErrorDetails.KEY_LOAD_TIMEOUT)&&o("requestfailed",{request_error:n,request_url:c,request_hostname:et(c),request_id:h?em(h):void 0,request_type:n===a.ErrorDetails.FRAG_LOAD_ERROR||n===a.ErrorDetails.FRAG_LOAD_TIMEOUT?"media":n===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||n===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT?"audio":n===a.ErrorDetails.SUBTITLE_LOAD_ERROR||n===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT?"subtitle":n===a.ErrorDetails.KEY_LOAD_ERROR||n===a.ErrorDetails.KEY_LOAD_TIMEOUT?"encryption":"manifest",request_error_code:null==s?void 0:s.code,request_error_text:null==s?void 0:s.text}),l&&o("error",{player_error_code:r,player_error_message:n,player_error_context:"".concat(c?"url: ".concat(c,"\n"):"")+"".concat(s&&(s.code||s.text)?"response: ".concat(s.code,", ").concat(s.text,"\n"):"")+"".concat(t.reason?"failure reason: ".concat(t.reason,"\n"):"")+"".concat(t.level?"level: ".concat(t.level,"\n"):"")+"".concat(t.parent?"parent stream controller: ".concat(t.parent,"\n"):"")+"".concat(t.buffer?"buffer length: ".concat(t.buffer,"\n"):"")+"".concat(t.error?"error: ".concat(t.error,"\n"):"")+"".concat(t.event?"event: ".concat(t.event,"\n"):"")+"".concat(t.err?"error message: ".concat(null==(i=t.err)?void 0:i.message,"\n"):"")})};i.on(a.Events.ERROR,m);var p=function(e,t){var i=t.frag,a=i&&i._url||"";o("requestcanceled",{request_event_type:e,request_url:a,request_type:"media",request_hostname:et(a)})};i.on(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,p);var v=function(e,t){var a=t.level,n=i.levels[a];if(n&&n.attrs&&n.attrs.BANDWIDTH){var s,l=n.attrs.BANDWIDTH,d=parseFloat(n.attrs["FRAME-RATE"]);isNaN(d)||(s=d),l?o("renditionchange",{video_source_fps:s,video_source_bitrate:l,video_source_width:n.width,video_source_height:n.height,video_source_rendition_name:n.name,video_source_codec:null==n?void 0:n.videoCodec}):r.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js")}};i.on(a.Events.LEVEL_SWITCHED,v),i._stopMuxMonitor=function(){i.off(a.Events.MANIFEST_LOADED,l),i.off(a.Events.LEVEL_LOADED,d),i.off(a.Events.AUDIO_TRACK_LOADED,u),i.off(a.Events.FRAG_LOADED,c),i.off(a.Events.FRAG_CHANGED,h),i.off(a.Events.ERROR,m),i.off(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,p),i.off(a.Events.LEVEL_SWITCHED,v),i.off(a.Events.DESTROYING,i._stopMuxMonitor),delete i._stopMuxMonitor},i.on(a.Events.DESTROYING,i._stopMuxMonitor)},eE=function(e){e&&"function"==typeof e._stopMuxMonitor&&e._stopMuxMonitor()},ef=function(e,t){if(!e||!e.requestEndDate)return{};var i,a=et(e.url),r=e.url,n=e.bytesLoaded,s=new Date(e.requestStartDate).getTime(),o=new Date(e.firstByteDate).getTime(),l=new Date(e.requestEndDate).getTime(),d=isNaN(e.duration)?0:e.duration,u="function"==typeof t.getMetricsFor?t.getMetricsFor(e.mediaType).HttpList:t.getDashMetrics().getHttpRequests(e.mediaType);u.length>0&&(i=eh(u[u.length-1]._responseHeaders||""));var c=i?em(i):void 0;return{requestStart:s,requestResponseStart:o,requestResponseEnd:l,requestBytesLoaded:n,requestResponseHeaders:i,requestMediaDuration:d,requestHostname:a,requestUrl:r,requestId:c}},ey=function(e,t){if("function"==typeof t.getCurrentRepresentationForType){var i=t.getCurrentRepresentationForType(e);return i?{currentLevel:i.absoluteIndex,renditionWidth:i.width||null,renditionHeight:i.height||null,renditionBitrate:i.bandwidth}:{}}var a=t.getQualityFor(e),r=t.getCurrentTrackFor(e).bitrateList;return r?{currentLevel:a,renditionWidth:r[a].width||null,renditionHeight:r[a].height||null,renditionBitrate:r[a].bandwidth}:{}},e_=function(e){var t;return null==(t=e.match(/.*codecs\*?="(.*)"/))?void 0:t[1]},eT=function(e){try{var t,i;return null==(i=e.getVersion)||null==(t=i.call(e))?void 0:t.split(".").map(function(e){return parseInt(e)})[0]}catch(e){return!1}},ek=function(e,t,i){arguments.length>3&&void 0!==arguments[3]&&arguments[3];var a=e.log;if(!i||!i.on)return void a.warn("Invalid dash.js player reference. Monitoring blocked.");var r=eT(i),n=function(i,a){return e.emit(t,i,a)},s=function(e){var t=e.type,i=(e.data||{}).url;n("requestcompleted",{request_event_type:t,request_start:0,request_response_start:0,request_response_end:0,request_bytes_loaded:-1,request_type:"manifest",request_hostname:et(i),request_url:i})};i.on("manifestLoaded",s);var o={},l=function(e){if("function"!=typeof e.getRequests)return null;var t=e.getRequests({state:"executed"});return 0===t.length?null:t[t.length-1]},d=function(e){var t=e.type,a=e.chunk,r=e.request,s=(a||{}).mediaInfo||{},l=s.type,d=s.bitrateList,u={};(d=d||[]).forEach(function(e,t){u[t]={},u[t].width=e.width,u[t].height=e.height,u[t].bitrate=e.bandwidth,u[t].attrs={}}),"video"===l?o.video=u:"audio"===l?o.audio=u:o.media=u;var c=ef(r,i),h=c.requestStart,m=c.requestResponseStart,p=c.requestResponseEnd,v=c.requestResponseHeaders,b=c.requestMediaDuration,g=c.requestHostname,E=c.requestUrl;n("requestcompleted",{request_event_type:t,request_start:h,request_response_start:m,request_response_end:p,request_bytes_loaded:-1,request_type:l+"_init",request_response_headers:v,request_hostname:g,request_id:c.requestId,request_url:E,request_media_duration:b,request_rendition_lists:o})};r>=4?i.on("initFragmentLoaded",d):i.on("initFragmentLoaded",function(e){var t=e.type,i=e.fragmentModel,a=e.chunk;d({type:t,request:l(i),chunk:a})});var u=function(e){var t=e.type,a=e.chunk,r=e.request,s=a||{},o=s.mediaInfo,l=s.start,d=(o||{}).type,u=ef(r,i),c=u.requestStart,h=u.requestResponseStart,m=u.requestResponseEnd,p=u.requestBytesLoaded,v=u.requestResponseHeaders,b=u.requestMediaDuration,g=u.requestHostname,E=u.requestUrl,f=u.requestId,y=ey(d,i),T=y.currentLevel,k=y.renditionWidth,A=y.renditionHeight;n("requestcompleted",{request_event_type:t,request_start:c,request_response_start:h,request_response_end:m,request_bytes_loaded:p,request_type:d,request_response_headers:v,request_hostname:g,request_id:f,request_url:E,request_media_start_time:l,request_media_duration:b,request_current_level:T,request_labeled_bitrate:y.renditionBitrate,request_video_width:k,request_video_height:A})};r>=4?i.on("mediaFragmentLoaded",u):i.on("mediaFragmentLoaded",function(e){var t=e.type,i=e.fragmentModel,a=e.chunk;u({type:t,request:l(i),chunk:a})});var c={video:void 0,audio:void 0,totalBitrate:void 0},h=function(){if(c.video&&"number"==typeof c.video.bitrate){if(!(c.video.width&&c.video.height))return void a.warn("have bitrate info for video but missing width/height");var e=c.video.bitrate;if(c.audio&&"number"==typeof c.audio.bitrate&&(e+=c.audio.bitrate),e!==c.totalBitrate)return c.totalBitrate=e,{video_source_bitrate:e,video_source_height:c.video.height,video_source_width:c.video.width,video_source_codec:e_(c.video.codec)}}},m=function(e,t,r){var s=e.mediaType;if("audio"===s||"video"===s){if("function"==typeof i.getRepresentationsByType)if(e.newRepresentation)o={bitrate:e.newRepresentation.bandwidth,width:e.newRepresentation.width,height:e.newRepresentation.height,qualityIndex:e.newRepresentation.absoluteIndex};else{var o,l=i.getRepresentationsByType(s);if(l&&"number"==typeof e.newQuality){var d=l.find(function(t){return t.absoluteIndex===e.newQuality||t.index===e.newQuality});d&&(o={bitrate:d.bandwidth,width:d.width,height:d.height,qualityIndex:e.newQuality})}}else{if("number"!=typeof e.newQuality)return void a.warn("missing evt.newQuality in qualityChangeRendered event",e);o=i.getBitrateInfoListFor(s).find(function(t){return t.qualityIndex===e.newQuality})}if(!(o&&"number"==typeof o.bitrate))return void a.warn("missing bitrate info for ".concat(s));c[s]=ed(el({},o),{codec:i.getCurrentTrackFor(s).codec});var u=h();u&&n("renditionchange",u)}};i.on("qualityChangeRendered",m);var p=function(e){var t=e.request,i=e.mediaType;n("requestcanceled",{request_event_type:(t=t||{}).type+"_"+t.action,request_url:t.url,request_type:i,request_hostname:et(t.url)})};i.on("fragmentLoadingAbandoned",p);var v=function(e){var t,i,a=e.error,r=(null==a||null==(t=a.data)?void 0:t.request)||{},s=(null==a||null==(i=a.data)?void 0:i.response)||{};(null==a?void 0:a.code)===27&&n("requestfailed",{request_error:r.type+"_"+r.action,request_url:r.url,request_hostname:et(r.url),request_type:r.mediaType,request_error_code:s.status,request_error_text:s.statusText});var o="".concat(null!=r&&r.url?"url: ".concat(r.url,"\n"):"")+"".concat(null!=s&&s.status||null!=s&&s.statusText?"response: ".concat(null==s?void 0:s.status,", ").concat(null==s?void 0:s.statusText,"\n"):"");n("error",{player_error_code:null==a?void 0:a.code,player_error_message:null==a?void 0:a.message,player_error_context:o})};i.on("error",v),i._stopMuxMonitor=function(){i.off("manifestLoaded",s),i.off("initFragmentLoaded",d),i.off("mediaFragmentLoaded",u),i.off("qualityChangeRendered",m),i.off("error",v),i.off("fragmentLoadingAbandoned",p),delete i._stopMuxMonitor}},eA=function(e){e&&"function"==typeof e._stopMuxMonitor&&e._stopMuxMonitor()},ew=0,eR=function(){function e(){j(this,e),Z(this,"_listeners",void 0)}return Q(e,[{key:"on",value:function(e,t,i){return t._eventEmitterGuid=t._eventEmitterGuid||++ew,this._listeners=this._listeners||{},this._listeners[e]=this._listeners[e]||[],i&&(t=t.bind(i)),this._listeners[e].push(t),t}},{key:"off",value:function(e,t){var i=this._listeners&&this._listeners[e];i&&i.forEach(function(e,a){e._eventEmitterGuid===t._eventEmitterGuid&&i.splice(a,1)})}},{key:"one",value:function(e,t,i){var a=this;t._eventEmitterGuid=t._eventEmitterGuid||++ew;var r=function(){a.off(e,r),t.apply(i||this,arguments)};r._eventEmitterGuid=t._eventEmitterGuid,this.on(e,r)}},{key:"emit",value:function(e,t){var i=this;if(this._listeners){t=t||{};var a=this._listeners["before"+e]||[],r=this._listeners["before*"]||[],n=this._listeners[e]||[],s=this._listeners["after"+e]||[],o=function(t,a){(t=t.slice()).forEach(function(t){t.call(i,{type:e},a)})};o(a,t),o(r,t),o(n,t),o(s,t)}}}]),e}(),eI=h(m()),eS=function(){function e(t){var i=this;j(this,e),Z(this,"_playbackHeartbeatInterval",void 0),Z(this,"_playheadShouldBeProgressing",void 0),Z(this,"pm",void 0),this.pm=t,this._playbackHeartbeatInterval=null,this._playheadShouldBeProgressing=!1,t.on("playing",function(){i._playheadShouldBeProgressing=!0}),t.on("play",this._startPlaybackHeartbeatInterval.bind(this)),t.on("playing",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adbreakstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adplay",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adplaying",this._startPlaybackHeartbeatInterval.bind(this)),t.on("devicewake",this._startPlaybackHeartbeatInterval.bind(this)),t.on("viewstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("rebufferstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("pause",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("ended",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("viewend",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("error",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("aderror",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adpause",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adended",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adbreakend",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("seeked",function(){t.data.player_is_paused?i._stopPlaybackHeartbeatInterval():i._startPlaybackHeartbeatInterval()}),t.on("timeupdate",function(){null!==i._playbackHeartbeatInterval&&t.emit("playbackheartbeat")}),t.on("devicesleep",function(e,a){null!==i._playbackHeartbeatInterval&&(eI.default.clearInterval(i._playbackHeartbeatInterval),t.emit("playbackheartbeatend",{viewer_time:a.viewer_time}),i._playbackHeartbeatInterval=null)})}return Q(e,[{key:"_startPlaybackHeartbeatInterval",value:function(){var e=this;null===this._playbackHeartbeatInterval&&(this.pm.emit("playbackheartbeat"),this._playbackHeartbeatInterval=eI.default.setInterval(function(){e.pm.emit("playbackheartbeat")},this.pm.playbackHeartbeatTime))}},{key:"_stopPlaybackHeartbeatInterval",value:function(){this._playheadShouldBeProgressing=!1,null!==this._playbackHeartbeatInterval&&(eI.default.clearInterval(this._playbackHeartbeatInterval),this.pm.emit("playbackheartbeatend"),this._playbackHeartbeatInterval=null)}}]),e}(),eC=function e(t){var i=this;j(this,e),Z(this,"viewErrored",void 0),t.on("viewinit",function(){i.viewErrored=!1}),t.on("error",function(e,a){try{var r=t.errorTranslator({player_error_code:a.player_error_code,player_error_message:a.player_error_message,player_error_context:a.player_error_context,player_error_severity:a.player_error_severity,player_error_business_exception:a.player_error_business_exception});r&&(t.data.player_error_code=r.player_error_code||a.player_error_code,t.data.player_error_message=r.player_error_message||a.player_error_message,t.data.player_error_context=r.player_error_context||a.player_error_context,t.data.player_error_severity=r.player_error_severity||a.player_error_severity,t.data.player_error_business_exception=r.player_error_business_exception||a.player_error_business_exception,i.viewErrored=!0)}catch(e){t.mux.log.warn("Exception in error translator callback.",e),i.viewErrored=!0}}),t.on("aftererror",function(){var e,i,a,r,n;null==(e=t.data)||delete e.player_error_code,null==(i=t.data)||delete i.player_error_message,null==(a=t.data)||delete a.player_error_context,null==(r=t.data)||delete r.player_error_severity,null==(n=t.data)||delete n.player_error_business_exception})},eL=function(){function e(t){j(this,e),Z(this,"_watchTimeTrackerLastCheckedTime",void 0),Z(this,"pm",void 0),this.pm=t,this._watchTimeTrackerLastCheckedTime=null,t.on("playbackheartbeat",this._updateWatchTime.bind(this)),t.on("playbackheartbeatend",this._clearWatchTimeState.bind(this))}return Q(e,[{key:"_updateWatchTime",value:function(e,t){var i=t.viewer_time;null===this._watchTimeTrackerLastCheckedTime&&(this._watchTimeTrackerLastCheckedTime=i),eo(this.pm.data,"view_watch_time",i-this._watchTimeTrackerLastCheckedTime),this._watchTimeTrackerLastCheckedTime=i}},{key:"_clearWatchTimeState",value:function(e,t){this._updateWatchTime(e,t),this._watchTimeTrackerLastCheckedTime=null}}]),e}(),eM=function(){function e(t){var i=this;j(this,e),Z(this,"_playbackTimeTrackerLastPlayheadPosition",void 0),Z(this,"_lastTime",void 0),Z(this,"_isAdPlaying",void 0),Z(this,"_callbackUpdatePlaybackTime",void 0),Z(this,"pm",void 0),this.pm=t,this._playbackTimeTrackerLastPlayheadPosition=-1,this._lastTime=W(),this._isAdPlaying=!1,this._callbackUpdatePlaybackTime=null,t.on("viewinit",function(){i.pm.data.view_playing_time_ms_cumulative=0});var a=this._startPlaybackTimeTracking.bind(this);t.on("playing",a),t.on("adplaying",a);var r=function(){i.pm.data.player_is_paused||a()};t.on("seeked",r),t.on("rebufferend",r);var n=this._stopPlaybackTimeTracking.bind(this);t.on("playbackheartbeatend",n),t.on("seeking",n),t.on("rebufferstart",n),t.on("adplaying",function(){i._isAdPlaying=!0}),t.on("adended",function(){i._isAdPlaying=!1}),t.on("adpause",function(){i._isAdPlaying=!1}),t.on("adbreakstart",function(){i._isAdPlaying=!1}),t.on("adbreakend",function(){i._isAdPlaying=!1}),t.on("adplay",function(){i._isAdPlaying=!1}),t.on("viewinit",function(){i._playbackTimeTrackerLastPlayheadPosition=-1,i._lastTime=W(),i._isAdPlaying=!1,i._callbackUpdatePlaybackTime=null})}return Q(e,[{key:"_startPlaybackTimeTracking",value:function(){null===this._callbackUpdatePlaybackTime&&(this._callbackUpdatePlaybackTime=this._updatePlaybackTime.bind(this),this._playbackTimeTrackerLastPlayheadPosition=this.pm.data.player_playhead_time,this._lastTime=W(),this.pm.on("playbackheartbeat",this._callbackUpdatePlaybackTime))}},{key:"_stopPlaybackTimeTracking",value:function(){this._callbackUpdatePlaybackTime&&(this._updatePlaybackTime(),this.pm.off("playbackheartbeat",this._callbackUpdatePlaybackTime),this._callbackUpdatePlaybackTime=null,this._playbackTimeTrackerLastPlayheadPosition=-1)}},{key:"_updatePlaybackTime",value:function(){var e=this.pm.data.player_playhead_time||0,t=W(),i=t-this._lastTime,a=-1;this._playbackTimeTrackerLastPlayheadPosition>=0&&e>this._playbackTimeTrackerLastPlayheadPosition?a=e-this._playbackTimeTrackerLastPlayheadPosition:this._isAdPlaying&&(a=i),a>0&&a<=1e3&&eo(this.pm.data,"view_content_playback_time",a),null!==this._callbackUpdatePlaybackTime&&i>0&&i<=1e3&&(this._isAdPlaying&&eo(this.pm.data,"ad_playing_time_ms_cumulative",i),eo(this.pm.data,"view_playing_time_ms_cumulative",i)),this._playbackTimeTrackerLastPlayheadPosition=e,this._lastTime=t}}]),e}(),eD=function(){function e(t){j(this,e),Z(this,"pm",void 0),this.pm=t;var i=this._updatePlayheadTime.bind(this);t.on("playbackheartbeat",i),t.on("playbackheartbeatend",i),t.on("timeupdate",i),t.on("destroy",function(){t.off("timeupdate",i)})}return Q(e,[{key:"_updateMaxPlayheadPosition",value:function(){this.pm.data.view_max_playhead_position=void 0===this.pm.data.view_max_playhead_position?this.pm.data.player_playhead_time:Math.max(this.pm.data.view_max_playhead_position,this.pm.data.player_playhead_time)}},{key:"_updatePlayheadTime",value:function(e,t){var i=this,a=function(){i.pm.currentFragmentPDT&&i.pm.currentFragmentStart&&(i.pm.data.player_program_time=i.pm.currentFragmentPDT+i.pm.data.player_playhead_time-i.pm.currentFragmentStart)};if(t&&t.player_playhead_time)this.pm.data.player_playhead_time=t.player_playhead_time,a(),this._updateMaxPlayheadPosition();else if(this.pm.getPlayheadTime){var r=this.pm.getPlayheadTime();void 0!==r&&(this.pm.data.player_playhead_time=r,a(),this._updateMaxPlayheadPosition())}}}]),e}(),ex=function e(t){if(j(this,e),!t.disableRebufferTracking){var i,a=function(e,t){r(t),i=void 0},r=function(e){if(i){var a=e.viewer_time-i;eo(t.data,"view_rebuffer_duration",a),i=e.viewer_time,t.data.view_rebuffer_duration>3e5&&(t.emit("viewend"),t.send("viewend"),t.mux.log.warn("Ending view after rebuffering for longer than ".concat(3e5,"ms, future events will be ignored unless a programchange or videochange occurs.")))}t.data.view_watch_time>=0&&t.data.view_rebuffer_count>0&&(t.data.view_rebuffer_frequency=t.data.view_rebuffer_count/t.data.view_watch_time,t.data.view_rebuffer_percentage=t.data.view_rebuffer_duration/t.data.view_watch_time)};t.on("playbackheartbeat",function(e,t){return r(t)}),t.on("rebufferstart",function(e,r){i||(eo(t.data,"view_rebuffer_count",1),i=r.viewer_time,t.one("rebufferend",a))}),t.on("viewinit",function(){i=void 0,t.off("rebufferend",a)})}},eN=function(){function e(t){var i=this;j(this,e),Z(this,"_lastCheckedTime",void 0),Z(this,"_lastPlayheadTime",void 0),Z(this,"_lastPlayheadTimeUpdatedTime",void 0),Z(this,"_rebuffering",void 0),Z(this,"pm",void 0),this.pm=t,t.disableRebufferTracking||t.disablePlayheadRebufferTracking||(this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null,t.on("playbackheartbeat",this._checkIfRebuffering.bind(this)),t.on("playbackheartbeatend",this._cleanupRebufferTracker.bind(this)),t.on("seeking",function(){i._cleanupRebufferTracker(null,{viewer_time:W()})}))}return Q(e,[{key:"_checkIfRebuffering",value:function(e,t){if(this.pm.seekingTracker.isSeeking||this.pm.adTracker.isAdBreak||!this.pm.playbackHeartbeat._playheadShouldBeProgressing)return void this._cleanupRebufferTracker(e,t);if(null===this._lastCheckedTime)return void this._prepareRebufferTrackerState(t.viewer_time);if(this._lastPlayheadTime!==this.pm.data.player_playhead_time)return void this._cleanupRebufferTracker(e,t,!0);var i=t.viewer_time-this._lastPlayheadTimeUpdatedTime;"number"==typeof this.pm.sustainedRebufferThreshold&&i>=this.pm.sustainedRebufferThreshold&&(this._rebuffering||(this._rebuffering=!0,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}))),this._lastCheckedTime=t.viewer_time}},{key:"_clearRebufferTrackerState",value:function(){this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null}},{key:"_prepareRebufferTrackerState",value:function(e){this._lastCheckedTime=e,this._lastPlayheadTime=this.pm.data.player_playhead_time,this._lastPlayheadTimeUpdatedTime=e}},{key:"_cleanupRebufferTracker",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(this._rebuffering)this._rebuffering=!1,this.pm.emit("rebufferend",{viewer_time:t.viewer_time});else{if(null===this._lastCheckedTime)return;var a=this.pm.data.player_playhead_time-this._lastPlayheadTime,r=t.viewer_time-this._lastPlayheadTimeUpdatedTime;"number"==typeof this.pm.minimumRebufferDuration&&a>0&&r-a>this.pm.minimumRebufferDuration&&(this._lastCheckedTime=null,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}),this.pm.emit("rebufferend",{viewer_time:this._lastPlayheadTimeUpdatedTime+r-a}))}i?this._prepareRebufferTrackerState(t.viewer_time):this._clearRebufferTrackerState()}}]),e}(),eO=function(){function e(t){var i=this;j(this,e),Z(this,"pm",void 0),this.pm=t,t.on("viewinit",function(){var e=t.data,a=e.view_id;if(!e.view_program_changed){var r=function(e,r){var n=r.viewer_time;"playing"===e.type&&void 0===t.data.view_time_to_first_frame?i.calculateTimeToFirstFrame(n||W(),a):"adplaying"===e.type&&(void 0===t.data.view_time_to_first_frame||i._inPrerollPosition())&&i.calculateTimeToFirstFrame(n||W(),a)};t.one("playing",r),t.one("adplaying",r),t.one("viewend",function(){t.off("playing",r),t.off("adplaying",r)})}})}return Q(e,[{key:"_inPrerollPosition",value:function(){return void 0===this.pm.data.view_content_playback_time||this.pm.data.view_content_playback_time<=1e3}},{key:"calculateTimeToFirstFrame",value:function(e,t){t===this.pm.data.view_id&&(this.pm.watchTimeTracker._updateWatchTime(null,{viewer_time:e}),this.pm.data.view_time_to_first_frame=this.pm.data.view_watch_time,(this.pm.data.player_autoplay_on||this.pm.data.video_is_autoplay)&&this.pm.pageLoadInitTime&&(this.pm.data.view_aggregate_startup_time=this.pm.data.view_start+this.pm.data.view_watch_time-this.pm.pageLoadInitTime))}}]),e}(),eP=function e(t){var i=this;j(this,e),Z(this,"_lastPlayerHeight",void 0),Z(this,"_lastPlayerWidth",void 0),Z(this,"_lastPlayheadPosition",void 0),Z(this,"_lastSourceHeight",void 0),Z(this,"_lastSourceWidth",void 0),t.on("viewinit",function(){i._lastPlayheadPosition=-1}),["pause","rebufferstart","seeking","error","adbreakstart","hb","renditionchange","orientationchange","viewend","playbackmodechange"].forEach(function(e){t.on(e,function(){if(i._lastPlayheadPosition>=0&&t.data.player_playhead_time>=0&&i._lastPlayerWidth>=0&&i._lastSourceWidth>0&&i._lastPlayerHeight>=0&&i._lastSourceHeight>0){var e=t.data.player_playhead_time-i._lastPlayheadPosition;if(e<0){i._lastPlayheadPosition=-1;return}var a=Math.min(i._lastPlayerWidth/i._lastSourceWidth,i._lastPlayerHeight/i._lastSourceHeight),r=Math.max(0,a-1),n=Math.max(0,1-a);t.data.view_max_upscale_percentage=Math.max(t.data.view_max_upscale_percentage||0,r),t.data.view_max_downscale_percentage=Math.max(t.data.view_max_downscale_percentage||0,n),eo(t.data,"view_total_content_playback_time",e),eo(t.data,"view_total_upscaling",r*e),eo(t.data,"view_total_downscaling",n*e)}i._lastPlayheadPosition=-1})}),["playing","hb","renditionchange","orientationchange","playbackmodechange"].forEach(function(e){t.on(e,function(){i._lastPlayheadPosition=t.data.player_playhead_time,i._lastPlayerWidth=t.data.player_width,i._lastPlayerHeight=t.data.player_height,i._lastSourceWidth=t.data.video_source_width,i._lastSourceHeight=t.data.video_source_height})})},eU=function e(t){var i=this;j(this,e),Z(this,"isSeeking",void 0),this.isSeeking=!1;var a=-1,r=function(){var e=W(),r=(t.data.viewer_time||e)-(a||e);eo(t.data,"view_seek_duration",r),t.data.view_max_seek_time=Math.max(t.data.view_max_seek_time||0,r),i.isSeeking=!1,a=-1};t.on("seeking",function(e,n){if(Object.assign(t.data,n),i.isSeeking&&n.viewer_time-a<=2e3){a=n.viewer_time;return}i.isSeeking&&r(),i.isSeeking=!0,a=n.viewer_time,eo(t.data,"view_seek_count",1),t.send("seeking")}),t.on("seeked",function(){r()}),t.on("viewend",function(){i.isSeeking&&(r(),t.send("seeked")),i.isSeeking=!1,a=-1})},eW=function(e,t){e.push(t),e.sort(function(e,t){return e.viewer_time-t.viewer_time})},eH=["adbreakstart","adrequest","adresponse","adplay","adplaying","adpause","adended","adbreakend","aderror","adclicked","adskipped"],eB=function(){function e(t){var i=this;j(this,e),Z(this,"_adHasPlayed",void 0),Z(this,"_adRequests",void 0),Z(this,"_adResponses",void 0),Z(this,"_currentAdRequestNumber",void 0),Z(this,"_currentAdResponseNumber",void 0),Z(this,"_prerollPlayTime",void 0),Z(this,"_wouldBeNewAdPlay",void 0),Z(this,"isAdBreak",void 0),Z(this,"pm",void 0),this.pm=t,t.on("viewinit",function(){i.isAdBreak=!1,i._currentAdRequestNumber=0,i._currentAdResponseNumber=0,i._adRequests=[],i._adResponses=[],i._adHasPlayed=!1,i._wouldBeNewAdPlay=!0,i._prerollPlayTime=void 0}),eH.forEach(function(e){return t.on(e,i._updateAdData.bind(i))});var a=function(){i.isAdBreak=!1};t.on("adbreakstart",function(){i.isAdBreak=!0}),t.on("play",a),t.on("playing",a),t.on("viewend",a),t.on("adrequest",function(e,a){a=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdRequestNumber++},a),eW(i._adRequests,a),eo(t.data,"view_ad_request_count"),i.inPrerollPosition()&&(t.data.view_preroll_requested=!0,i._adHasPlayed||eo(t.data,"view_preroll_request_count"))}),t.on("adresponse",function(e,a){a=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdResponseNumber++},a),eW(i._adResponses,a);var r=i.findAdRequest(a.ad_request_id);r&&eo(t.data,"view_ad_request_time",Math.max(0,a.viewer_time-r.viewer_time))}),t.on("adplay",function(e,a){i._adHasPlayed=!0,i._wouldBeNewAdPlay&&(i._wouldBeNewAdPlay=!1,eo(t.data,"view_ad_played_count")),i.inPrerollPosition()&&!t.data.view_preroll_played&&(t.data.view_preroll_played=!0,i._adRequests.length>0&&(t.data.view_preroll_request_time=Math.max(0,a.viewer_time-i._adRequests[0].viewer_time)),t.data.view_start&&(t.data.view_startup_preroll_request_time=Math.max(0,a.viewer_time-t.data.view_start)),i._prerollPlayTime=a.viewer_time)}),t.on("adplaying",function(e,a){i.inPrerollPosition()&&void 0===t.data.view_preroll_load_time&&void 0!==i._prerollPlayTime&&(t.data.view_preroll_load_time=a.viewer_time-i._prerollPlayTime,t.data.view_startup_preroll_load_time=a.viewer_time-i._prerollPlayTime)}),t.on("adclicked",function(e,a){i._wouldBeNewAdPlay||eo(t.data,"view_ad_clicked_count")}),t.on("adskipped",function(e,a){i._wouldBeNewAdPlay||eo(t.data,"view_ad_skipped_count")}),t.on("adended",function(){i._wouldBeNewAdPlay=!0}),t.on("aderror",function(){i._wouldBeNewAdPlay=!0})}return Q(e,[{key:"inPrerollPosition",value:function(){return void 0===this.pm.data.view_content_playback_time||this.pm.data.view_content_playback_time<=1e3}},{key:"findAdRequest",value:function(e){for(var t=0;t<this._adRequests.length;t++)if(this._adRequests[t].ad_request_id===e)return this._adRequests[t]}},{key:"_updateAdData",value:function(e,t){if(this.inPrerollPosition()){if(!this.pm.data.view_preroll_ad_tag_hostname&&t.ad_tag_url){var i=N(ei(t.ad_tag_url),2),a=i[0],r=i[1];this.pm.data.view_preroll_ad_tag_domain=r,this.pm.data.view_preroll_ad_tag_hostname=a}if(!this.pm.data.view_preroll_ad_asset_hostname&&t.ad_asset_url){var n=N(ei(t.ad_asset_url),2),s=n[0],o=n[1];this.pm.data.view_preroll_ad_asset_domain=o,this.pm.data.view_preroll_ad_asset_hostname=s}this.pm.data.ad_type="preroll"}this.pm.data.ad_asset_url=null==t?void 0:t.ad_asset_url,this.pm.data.ad_tag_url=null==t?void 0:t.ad_tag_url,this.pm.data.ad_creative_id=null==t?void 0:t.ad_creative_id,this.pm.data.ad_id=null==t?void 0:t.ad_id,this.pm.data.ad_universal_id=null==t?void 0:t.ad_universal_id,null!=t&&t.ad_type&&(this.pm.data.ad_type=null==t?void 0:t.ad_type)}}]),e}(),e$=function e(t){var i=this;j(this,e),Z(this,"lastWallClockTime",void 0);var a=function(){i.lastWallClockTime=W(),t.on("before*",r)},r=function(e){var a=W(),r=i.lastWallClockTime;i.lastWallClockTime=a,a-r>3e4&&(t.emit("devicesleep",{viewer_time:r}),Object.assign(t.data,{viewer_time:r}),t.send("devicesleep"),t.emit("devicewake",{viewer_time:a}),Object.assign(t.data,{viewer_time:a}),t.send("devicewake"))};t.one("playbackheartbeat",a),t.on("playbackheartbeatend",function(){t.off("before*",r),t.one("playbackheartbeat",a)})},eV=h(m()),eq=(tg=function(){for(var e=0,t={};e<arguments.length;e++){var i=arguments[e];for(var a in i)t[a]=i[a]}return t},function e(t){function i(e,a,r){var n;if("u">typeof document){if(arguments.length>1){if("number"==typeof(r=tg({path:"/"},i.defaults,r)).expires){var s=new Date;s.setMilliseconds(s.getMilliseconds()+864e5*r.expires),r.expires=s}try{n=JSON.stringify(a),/^[\{\[]/.test(n)&&(a=n)}catch(e){}return a=t.write?t.write(a,e):encodeURIComponent(String(a)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=(e=(e=encodeURIComponent(String(e))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape),document.cookie=e+"="+a+(r.expires?"; expires="+r.expires.toUTCString():"")+(r.path?"; path="+r.path:"")+(r.domain?"; domain="+r.domain:"")+(r.secure?"; secure":"")}e||(n={});for(var o=document.cookie?document.cookie.split("; "):[],l=/(%[0-9A-Z]{2})+/g,d=0;d<o.length;d++){var u=o[d].split("="),c=u.slice(1).join("=");'"'===c.charAt(0)&&(c=c.slice(1,-1));try{var h=u[0].replace(l,decodeURIComponent);if(c=t.read?t.read(c,h):t(c,h)||c.replace(l,decodeURIComponent),this.json)try{c=JSON.parse(c)}catch(e){}if(e===h){n=c;break}e||(n[h]=c)}catch(e){}}return n}}return i.set=i,i.get=function(e){return i.call(i,e)},i.getJSON=function(){return i.apply({json:!0},[].slice.call(arguments))},i.defaults={},i.remove=function(e,t){i(e,"",tg(t,{expires:-1}))},i.withConverter=e,i}(function(){})),eK="muxData",eF=function(){var e;try{e=(eq.get(eK)||"").split("&").reduce(function(e,t){var i=N(t.split("="),2),a=i[0],r=i[1],n=+r;return e[a]=r&&n==r?n:r,e},{})}catch(t){e={}}return e},eY=function(e){try{eq.set(eK,Object.entries(e).map(function(e){var t=N(e,2),i=t[0],a=t[1];return"".concat(i,"=").concat(a)}).join("&"),{expires:365})}catch(e){}},eG=function(){var e=eF();return e.mux_viewer_id=e.mux_viewer_id||H(),e.msn=e.msn||Math.random(),eY(e),{mux_viewer_id:e.mux_viewer_id,mux_sample_number:e.msn}},ej=function(){var e=eF(),t=W();return e.session_start&&(e.sst=e.session_start,delete e.session_start),e.session_id&&(e.sid=e.session_id,delete e.session_id),e.session_expires&&(e.sex=e.session_expires,delete e.session_expires),(!e.sex||e.sex<t)&&(e.sid=H(),e.sst=t),e.sex=t+15e5,eY(e),{session_id:e.sid,session_start:e.sst,session_expires:e.sex}},ez=eZ({a:"env",b:"beacon",c:"custom",d:"ad",e:"event",f:"experiment",i:"internal",m:"mux",n:"response",p:"player",q:"request",r:"retry",s:"session",t:"timestamp",u:"viewer",v:"video",w:"page",x:"view",y:"sub"}),eQ=eZ({ad:"ad",af:"affiliate",ag:"aggregate",ap:"api",al:"application",ao:"audio",ar:"architecture",as:"asset",au:"autoplay",av:"average",bi:"bitrate",bn:"brand",br:"break",bw:"browser",by:"bytes",bz:"business",ca:"cached",cb:"cancel",cc:"codec",cd:"code",cg:"category",ch:"changed",ci:"client",ck:"clicked",cl:"canceled",cm:"cmcd",cn:"config",co:"count",ce:"counter",cp:"complete",cq:"creator",cr:"creative",cs:"captions",ct:"content",cu:"current",cv:"cumulative",cx:"connection",cz:"context",da:"data",dg:"downscaling",dm:"domain",dn:"cdn",do:"downscale",dr:"drm",dp:"dropped",du:"duration",dv:"device",dy:"dynamic",eb:"enabled",ec:"encoding",ed:"edge",en:"end",eg:"engine",em:"embed",er:"error",ep:"experiments",es:"errorcode",et:"errortext",ee:"event",ev:"events",ex:"expires",ez:"exception",fa:"failed",fi:"first",fm:"family",ft:"format",fp:"fps",fq:"frequency",fr:"frame",fs:"fullscreen",ha:"has",hb:"holdback",he:"headers",ho:"host",hn:"hostname",ht:"height",id:"id",ii:"init",in:"instance",ip:"ip",is:"is",ke:"key",la:"language",lb:"labeled",le:"level",li:"live",ld:"loaded",lo:"load",lw:"low",ls:"lists",lt:"latency",ma:"max",md:"media",me:"message",mf:"manifest",mi:"mime",ml:"midroll",mm:"min",mn:"manufacturer",mo:"model",mp:"mode",ms:"ms",mx:"mux",ne:"newest",nm:"name",no:"number",on:"on",or:"origin",os:"os",pa:"paused",pb:"playback",pd:"producer",pe:"percentage",pf:"played",pg:"program",ph:"playhead",pi:"plugin",pl:"preroll",pn:"playing",po:"poster",pp:"pip",pr:"preload",ps:"position",pt:"part",pv:"previous",py:"property",px:"pop",pz:"plan",ra:"rate",rd:"requested",re:"rebuffer",rf:"rendition",rg:"range",rm:"remote",ro:"ratio",rp:"response",rq:"request",rs:"requests",sa:"sample",sd:"skipped",se:"session",sh:"shift",sk:"seek",sm:"stream",so:"source",sq:"sequence",sr:"series",ss:"status",st:"start",su:"startup",sv:"server",sw:"software",sy:"severity",ta:"tag",tc:"tech",te:"text",tg:"target",th:"throughput",ti:"time",tl:"total",to:"to",tt:"title",ty:"type",ug:"upscaling",un:"universal",up:"upscale",ur:"url",us:"user",va:"variant",vd:"viewed",vi:"video",ve:"version",vw:"view",vr:"viewer",wd:"width",wa:"watch",wt:"waiting"});function eZ(e){var t={};for(var i in e)e.hasOwnProperty(i)&&(t[e[i]]=i);return t}function eX(e){var t={},i={};return Object.keys(e).forEach(function(a){var r=!1;if(e.hasOwnProperty(a)&&void 0!==e[a]){var n=a.split("_"),s=n[0],o=ez[s];o||(K.info("Data key word `"+n[0]+"` not expected in "+a),o=s+"_"),n.splice(1).forEach(function(e){"url"===e&&(r=!0),eQ[e]?o+=eQ[e]:Number.isInteger(Number(e))?o+=e:(K.info("Data key word `"+e+"` not expected in "+a),o+="_"+e+"_")}),r?i[o]=e[a]:t[o]=e[a]}}),Object.assign(t,i)}var eJ=h(m()),e0=h(M()),e1={maxBeaconSize:300,maxQueueLength:3600,baseTimeBetweenBeacons:1e4,maxPayloadKBSize:500},e2=["hb","requestcompleted","requestfailed","requestcanceled"],e3=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._beaconUrl=e||"https://img.litix.io",this._eventQueue=[],this._postInFlight=!1,this._resendAfterPost=!1,this._failureCount=0,this._sendTimeout=!1,this._options=Object.assign({},e1,t)};e3.prototype.queueEvent=function(e,t){var i=Object.assign({},t);return(this._eventQueue.length<=this._options.maxQueueLength||"eventrateexceeded"===e)&&(this._eventQueue.push(i),this._sendTimeout||this._startBeaconSending(),this._eventQueue.length<=this._options.maxQueueLength)},e3.prototype.flushEvents=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&1===this._eventQueue.length?this._eventQueue.pop():(this._eventQueue.length&&this._sendBeaconQueue(),this._startBeaconSending())},e3.prototype.destroy=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.destroyed=!0,e?this._clearBeaconQueue():this.flushEvents(),eJ.default.clearTimeout(this._sendTimeout)},e3.prototype._clearBeaconQueue=function(){var e=this._eventQueue.length>this._options.maxBeaconSize?this._eventQueue.length-this._options.maxBeaconSize:0,t=this._eventQueue.slice(e);e>0&&Object.assign(t[t.length-1],eX({mux_view_message:"event queue truncated"}));var i=this._createPayload(t);e5(this._beaconUrl,i,!0,function(){})},e3.prototype._sendBeaconQueue=function(){var e=this;if(this._postInFlight){this._resendAfterPost=!0;return}var t=this._eventQueue.slice(0,this._options.maxBeaconSize);this._eventQueue=this._eventQueue.slice(this._options.maxBeaconSize),this._postInFlight=!0;var i=this._createPayload(t),a=W();e5(this._beaconUrl,i,!1,function(i,r){r?(e._eventQueue=t.concat(e._eventQueue),e._failureCount+=1,K.info("Error sending beacon: "+r)):e._failureCount=0,e._roundTripTime=W()-a,e._postInFlight=!1,e._resendAfterPost&&(e._resendAfterPost=!1,e._eventQueue.length>0&&e._sendBeaconQueue())})},e3.prototype._getNextBeaconTime=function(){if(!this._failureCount)return this._options.baseTimeBetweenBeacons;var e=Math.pow(2,this._failureCount-1);return(1+(e*=Math.random()))*this._options.baseTimeBetweenBeacons},e3.prototype._startBeaconSending=function(){var e=this;eJ.default.clearTimeout(this._sendTimeout),this.destroyed||(this._sendTimeout=eJ.default.setTimeout(function(){e._eventQueue.length&&e._sendBeaconQueue(),e._startBeaconSending()},this._getNextBeaconTime()))},e3.prototype._createPayload=function(e){var t=this,i={transmission_timestamp:Math.round(W())};this._roundTripTime&&(i.rtt_ms=Math.round(this._roundTripTime));var a,r,n,s=function(){n=(a=JSON.stringify({metadata:i,events:r||e})).length/1024},o=function(){return n<=t._options.maxPayloadKBSize};return s(),o()||(K.info("Payload size is too big ("+n+" kb). Removing unnecessary events."),r=e.filter(function(e){return -1===e2.indexOf(e.e)}),s()),o()||(K.info("Payload size still too big ("+n+" kb). Cropping fields.."),r.forEach(function(e){for(var t in e){var i=e[t];"string"==typeof i&&i.length>51200&&(e[t]=i.substring(0,51200))}}),s()),a};var e4="function"==typeof e0.default.exitPictureInPicture?function(e){return e.length<=57344}:function(e){return!1},e5=function(e,t,i,a){if(i&&navigator&&navigator.sendBeacon&&navigator.sendBeacon(e,t))return void a();if(eJ.default.fetch)return void eJ.default.fetch(e,{method:"POST",body:t,headers:{"Content-Type":"text/plain"},keepalive:e4(t)}).then(function(e){return a(null,e.ok?null:"Error")}).catch(function(e){return a(null,e)});if(eJ.default.XMLHttpRequest){var r=new eJ.default.XMLHttpRequest;r.onreadystatechange=function(){if(4===r.readyState)return a(null,200!==r.status?"error":void 0)},r.open("POST",e),r.setRequestHeader("Content-Type","text/plain"),r.send(t);return}a()},e9=["env_key","view_id","view_sequence_number","player_sequence_number","beacon_domain","player_playhead_time","viewer_time","mux_api_version","event","video_id","player_instance_id","player_error_code","player_error_message","player_error_context","player_error_severity","player_error_business_exception","view_playing_time_ms_cumulative","ad_playing_time_ms_cumulative"],e8=["adplay","adplaying","adpause","adfirstquartile","admidpoint","adthirdquartile","adended","adresponse","adrequest"],e6=["ad_id","ad_creative_id","ad_universal_id"],e7=["viewstart","error","ended","viewend"],te=function(){function e(t,i){var a,r,n,s,o,l,d,u,c,h,m,p,v,b,g,E,f,y,T,k=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};j(this,e),Z(this,"mux",void 0),Z(this,"envKey",void 0),Z(this,"options",void 0),Z(this,"eventQueue",void 0),Z(this,"sampleRate",void 0),Z(this,"disableCookies",void 0),Z(this,"respectDoNotTrack",void 0),Z(this,"previousBeaconData",void 0),Z(this,"lastEventTime",void 0),Z(this,"rateLimited",void 0),Z(this,"pageLevelData",void 0),Z(this,"viewerData",void 0),this.mux=t,this.envKey=i,this.options=k,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.eventQueue=new e3((a=this.envKey,n=(r=this.options).beaconCollectionDomain,s=r.beaconDomain,n?(/localhost(?::\d+)?$/.test(n)?"http://":"https://")+n:(a=a||"inferred").match(/^[a-z0-9]+$/)?"https://"+a+"."+(s||"litix.io"):"https://img.litix.io/a.gif")),this.sampleRate=null!=(f=this.options.sampleRate)?f:1,this.disableCookies=null!=(y=this.options.disableCookies)&&y,this.respectDoNotTrack=null!=(T=this.options.respectDoNotTrack)&&T,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.pageLevelData={mux_api_version:this.mux.API_VERSION,mux_embed:this.mux.NAME,mux_embed_version:this.mux.VERSION,viewer_application_name:null==(o=this.options.platform)?void 0:o.name,viewer_application_version:null==(l=this.options.platform)?void 0:l.version,viewer_application_engine:null==(d=this.options.platform)?void 0:d.layout,viewer_device_name:null==(u=this.options.platform)?void 0:u.product,viewer_device_category:"",viewer_device_manufacturer:null==(c=this.options.platform)?void 0:c.manufacturer,viewer_os_family:null==(m=this.options.platform)||null==(h=m.os)?void 0:h.family,viewer_os_architecture:null==(v=this.options.platform)||null==(p=v.os)?void 0:p.architecture,viewer_os_version:null==(g=this.options.platform)||null==(b=g.os)?void 0:b.version,page_url:null===eV.default||void 0===eV.default||null==(E=eV.default.location)?void 0:E.href},this.viewerData=this.disableCookies?{}:eG()}return Q(e,[{key:"send",value:function(e,t){if(!(!e||!(null!=t&&t.view_id))){if(this.respectDoNotTrack&&Y())return K.info("Not sending `"+e+"` because Do Not Track is enabled");if(!t||"object"!=typeof t)return K.error("A data object was expected in send() but was not provided");var i=this.disableCookies?{}:ej(),a=ed(el({},this.pageLevelData,t,i,this.viewerData),{event:e,env_key:this.envKey});a.user_id&&(a.viewer_user_id=a.user_id,delete a.user_id);var r,n=(null!=(r=a.mux_sample_number)?r:0)>=this.sampleRate,s=eX(this._deduplicateBeaconData(e,a));if(this.lastEventTime=this.mux.utils.now(),n)return K.info("Not sending event due to sample rate restriction",e,a,s);if(this.envKey||K.info("Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL",e,a,s),!this.rateLimited)if(K.info("Sending event",e,a,s),this.rateLimited=!this.eventQueue.queueEvent(e,s),this.mux.WINDOW_UNLOADING&&"viewend"===e)this.eventQueue.destroy(!0);else{if(this.mux.WINDOW_HIDDEN&&"hb"===e)this.eventQueue.flushEvents(!0);else if(e7.indexOf(e)>=0){if("error"===e&&"warning"===t.player_error_severity)return;this.eventQueue.flushEvents()}if(this.rateLimited)return a.event="eventrateexceeded",s=eX(a),this.eventQueue.queueEvent(a.event,s),K.error("Beaconing disabled due to rate limit.")}}}},{key:"destroy",value:function(){this.eventQueue.destroy(!1)}},{key:"_deduplicateBeaconData",value:function(e,t){var i=this,a={},r=t.view_id;if("-1"===r||"viewstart"===e||"viewend"===e||!this.previousBeaconData||this.mux.utils.now()-this.lastEventTime>=6e5)a=el({},t),r&&(this.previousBeaconData=a),r&&"viewend"===e&&(this.previousBeaconData=null);else{var n=0===e.indexOf("request");Object.entries(t).forEach(function(t){var r=N(t,2),s=r[0],o=r[1];i.previousBeaconData&&(o!==i.previousBeaconData[s]||e9.indexOf(s)>-1||i.objectHasChanged(n,s,o,i.previousBeaconData[s])||i.eventRequiresKey(e,s))&&(a[s]=o,i.previousBeaconData[s]=o)})}return a}},{key:"objectHasChanged",value:function(e,t,i,a){return!!e&&0===t.indexOf("request_")&&("request_response_headers"===t||"object"!=typeof i||"object"!=typeof a||Object.keys(i||{}).length!==Object.keys(a||{}).length)}},{key:"eventRequiresKey",value:function(e,t){return!!("renditionchange"===e&&0===t.indexOf("video_source_")||e6.includes(t)&&e8.includes(e)||"playbackmodechange"===e&&0===t.indexOf("player_playback_mode"))}}]),e}(),tt=function e(t){j(this,e);var i=0,a=0,r=0,n=0,s=0,o=0,l=0;t.on("requestcompleted",function(e,o){var l,d,u=o.request_start,c=o.request_response_start,h=o.request_response_end,m=o.request_bytes_loaded;if(n++,c?(l=c-(null!=u?u:0),d=(null!=h?h:0)-c):d=(null!=h?h:0)-(null!=u?u:0),d>0&&m&&m>0){var p=m/d*8e3;s++,a+=m,r+=d,t.data.view_min_request_throughput=Math.min(t.data.view_min_request_throughput||1/0,p),t.data.view_average_request_throughput=a/r*8e3,t.data.view_request_count=n,l>0&&(i+=l,t.data.view_max_request_latency=Math.max(t.data.view_max_request_latency||0,l),t.data.view_average_request_latency=i/s)}}),t.on("requestfailed",function(e,i){n++,o++,t.data.view_request_count=n,t.data.view_request_failed_count=o}),t.on("requestcanceled",function(e,i){n++,l++,t.data.view_request_count=n,t.data.view_request_canceled_count=l})},ti=function e(t){var i=this;j(this,e),Z(this,"_lastEventTime",void 0),t.on("before*",function(e,a){var r=a.viewer_time,n=W(),s=i._lastEventTime;if(i._lastEventTime=n,s&&n-s>36e5){var o=Object.keys(t.data).reduce(function(e,i){return 0===i.indexOf("video_")?Object.assign(e,Z({},i,t.data[i])):e},{});t.mux.log.info("Received event after at least an hour inactivity, creating a new view");var l=t.playbackHeartbeat._playheadShouldBeProgressing;t._resetView(Object.assign({viewer_time:r},o)),t.playbackHeartbeat._playheadShouldBeProgressing=l,t.playbackHeartbeat._playheadShouldBeProgressing&&"play"!==e.type&&"adbreakstart"!==e.type&&(t.emit("play",{viewer_time:r}),"playing"!==e.type&&t.emit("playing",{viewer_time:r}))}})};function ta(e,t){return(null==e?void 0:e.toLowerCase())===(null==t?void 0:t.toLowerCase())}var tr=function e(t){j(this,e);var i=function(e){var i,a,r,o=null!=(i=e)&&i.request_type&&("media"===i.request_type||"video"===i.request_type)&&null!=(a=i.request_response_headers)&&a["x-cdn"]?i.request_response_headers["x-cdn"]:null!=i&&i.video_cdn?i.video_cdn:null,l=null!=(r=e)&&r.request_start?r.request_start:null!=r&&r.viewer_time?r.viewer_time:Date.now();null!=o&&!ta(o,n)&&s<=l&&(n=o,s=l,t.emit("cdnchange",{video_cdn:o}))},a=null,r=null,n=null,s=0;t.on("viewinit",function(){a=null,r=null,n=null,s=0}),t.on("beforecdnchange",function(e,t){var i=null==t?void 0:t.video_cdn;i&&(void 0===t.video_previous_cdn||null===t.video_previous_cdn)&&(ta(i,r)?t.video_previous_cdn=null!=a?a:void 0:(t.video_previous_cdn=null!=r?r:void 0,a=r,r=i))}),t.on("requestcompleted",function(e,t){i(t)})},tn=function(e){try{return JSON.parse(e),!0}catch(e){return!1}},ts=function e(t){var i=this;j(this,e),Z(this,"_emittingAutomaticEvent",!1),Z(this,"_hasInitialized",!1),Z(this,"_currentMode","standard"),t.on("viewstart",function(){i._hasInitialized||(i._hasInitialized=!0,i._currentMode=t.data.player_playback_mode||"standard",i._emittingAutomaticEvent=!0,t.emit("playbackmodechange",{player_playback_mode:i._currentMode,player_playback_mode_data:"{}"}),i._emittingAutomaticEvent=!1)}),t.on("viewend",function(){i._hasInitialized=!1}),t.on("playbackmodechange",function(e,a){i._emittingAutomaticEvent||(a.player_playback_mode_data?tn(a.player_playback_mode_data)||(t.mux.log.warn("Invalid JSON string for player_playback_mode_data"),a.player_playback_mode_data="{}"):a.player_playback_mode_data="{}",t.data.player_playback_mode_data=a.player_playback_mode_data,t.data.player_playback_mode=a.player_playback_mode,i._currentMode=a.player_playback_mode)})},to=function(){function e(t){j(this,e),Z(this,"pm",void 0),Z(this,"_currentRangeStart",void 0),Z(this,"_lastPlayheadTime",void 0),this.pm=t,this._currentRangeStart=null,this._lastPlayheadTime=null,t.on("playbackheartbeat",this._updatePlaybackRange.bind(this)),t.on("playbackheartbeatend",this._endPlaybackRange.bind(this))}return Q(e,[{key:"_updateLastRangeEnd",value:function(){var e=this.pm.data.video_playback_ranges;if(e&&e.length>0){var t=this.pm.data.player_playhead_time||0;e[e.length-1][1]=t}}},{key:"_updatePlaybackRange",value:function(){var e,t=this.pm.data.player_playhead_time||0;if(!(!this.pm.disableAdPlaybackRangeFiltering&&null!=(e=this.pm.adTracker)&&e.isAdBreak&&null!==this._lastPlayheadTime&&t<this._lastPlayheadTime)){if(null!==this._lastPlayheadTime&&null!==this._currentRangeStart&&Math.abs(t-this._lastPlayheadTime)>1e3){var i=this.pm.data.video_playback_ranges;i&&i.length>0&&(i[i.length-1][1]=this._lastPlayheadTime),this._currentRangeStart=null}if(null===this._currentRangeStart){var a=this.pm.data.video_playback_ranges||[];a.length>0&&a[a.length-1][1]===t?this._currentRangeStart=a[a.length-1][0]:(this._currentRangeStart=t,a.push([t,t])),this.pm.data.video_playback_ranges=a}else this._updateLastRangeEnd();this._lastPlayheadTime=t}}},{key:"_endPlaybackRange",value:function(){null!==this._currentRangeStart&&(this._updateLastRangeEnd(),this._currentRangeStart=null,this._lastPlayheadTime=null)}}]),e}(),tl=Object.freeze({CELLULAR:"cellular",WIFI:"wifi",WIRED:"wired",OTHER:"other",NO_CONNECTION:"no_connection",UNKNOWN:"unknown"}),td=function(e){if(!e)return tl.UNKNOWN;switch(e){case"cellular":case"wimax":return tl.CELLULAR;case"wifi":return tl.WIFI;case"ethernet":return tl.WIRED;case"none":return tl.NO_CONNECTION;case"bluetooth":case"other":default:return tl.OTHER;case"unknown":return tl.UNKNOWN}},tu=h(m()),tc=function(){function e(t){var i=this;j(this,e),Z(this,"pm",void 0),Z(this,"lastType",void 0),Z(this,"lastLowDataMode",void 0),this.pm=t,this.pm.one("viewinit",function(){var t,a=i.emit.bind(i);a(),tu.default.addEventListener("online",a),tu.default.addEventListener("offline",a),null==(t=e.connection)||t.addEventListener("change",a),i.pm.on("destroy",function(){var t;null==(t=e.connection)||t.removeEventListener("change",a),tu.default.removeEventListener("online",a),tu.default.removeEventListener("offline",a)})})}return Q(e,[{key:"type",get:function(){var t,i;return(null==(t=tu.default.navigator)?void 0:t.onLine)===!1?tl.NO_CONNECTION:null!=(i=e.connection)&&i.type?td(e.connection.type):tl.UNKNOWN}},{key:"lowDataMode",get:function(){var t;return null==(t=e.connection)?void 0:t.saveData}},{key:"emit",value:function(){var e=this.type,t=this.lowDataMode;e===this.lastType&&t===this.lastLowDataMode||(this.lastType=e,this.lastLowDataMode=t,this.pm.emit("networkchange",el({viewer_connection_type:e},void 0!==t&&{viewer_connection_low_data_mode:t})))}}],[{key:"connection",get:function(){var e;return"object"==typeof(e=tu.default.navigator)&&"connection"in e&&"object"==typeof e.connection?tu.default.navigator.connection:null}}]),e}(),th=["viewstart","ended","loadstart","pause","play","playing","ratechange","waiting","adplay","adpause","adended","aderror","adplaying","adrequest","adresponse","adbreakstart","adbreakend","adfirstquartile","admidpoint","adthirdquartile","rebufferstart","rebufferend","seeked","error","hb","requestcompleted","requestfailed","requestcanceled","renditionchange","networkchange","cdnchange","playbackmodechange"],tm=new Set(["requestcompleted","requestfailed","requestcanceled"]),tp=function(e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");a.prototype=Object.create(e&&e.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),e&&ee(a,e);var t,i=(t=function(){if("u"<typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,i=X(a);return e=t?Reflect.construct(i,arguments,X(this).constructor):i.apply(this,arguments),e&&("object"===b(e)||"function"==typeof e)?e:G(this)});function a(e,t,r){j(this,a),Z(G(n=i.call(this)),"pageLoadEndTime",void 0),Z(G(n),"pageLoadInitTime",void 0),Z(G(n),"_destroyed",void 0),Z(G(n),"_heartBeatTimeout",void 0),Z(G(n),"adTracker",void 0),Z(G(n),"dashjs",void 0),Z(G(n),"data",void 0),Z(G(n),"disablePlayheadRebufferTracking",void 0),Z(G(n),"disableRebufferTracking",void 0),Z(G(n),"disableAdPlaybackRangeFiltering",void 0),Z(G(n),"errorTracker",void 0),Z(G(n),"errorTranslator",void 0),Z(G(n),"emitTranslator",void 0),Z(G(n),"getAdData",void 0),Z(G(n),"getPlayheadTime",void 0),Z(G(n),"getStateData",void 0),Z(G(n),"stateDataTranslator",void 0),Z(G(n),"hlsjs",void 0),Z(G(n),"id",void 0),Z(G(n),"longResumeTracker",void 0),Z(G(n),"minimumRebufferDuration",void 0),Z(G(n),"mux",void 0),Z(G(n),"playbackEventDispatcher",void 0),Z(G(n),"playbackHeartbeat",void 0),Z(G(n),"playbackHeartbeatTime",void 0),Z(G(n),"playheadTime",void 0),Z(G(n),"seekingTracker",void 0),Z(G(n),"sustainedRebufferThreshold",void 0),Z(G(n),"watchTimeTracker",void 0),Z(G(n),"currentFragmentPDT",void 0),Z(G(n),"currentFragmentStart",void 0),n.pageLoadInitTime=es(),n.pageLoadEndTime=en(),n.mux=e,n.id=t,null!=r&&r.beaconDomain&&n.mux.log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`."),(r=Object.assign({debug:!1,minimumRebufferDuration:250,sustainedRebufferThreshold:1e3,playbackHeartbeatTime:25,beaconDomain:"litix.io",sampleRate:1,disableCookies:!1,respectDoNotTrack:!1,disableRebufferTracking:!1,disablePlayheadRebufferTracking:!1,disableAdPlaybackRangeFiltering:!1,errorTranslator:function(e){return e},emitTranslator:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return t},stateDataTranslator:function(e){return e}},r)).data=r.data||{},r.data.property_key&&(r.data.env_key=r.data.property_key,delete r.data.property_key),K.level=r.debug?1:3,n.getPlayheadTime=r.getPlayheadTime,n.getStateData=r.getStateData||function(){return{}},n.getAdData=r.getAdData||function(){},n.minimumRebufferDuration=r.minimumRebufferDuration,n.sustainedRebufferThreshold=r.sustainedRebufferThreshold,n.playbackHeartbeatTime=r.playbackHeartbeatTime,n.disableRebufferTracking=r.disableRebufferTracking,n.disableRebufferTracking&&n.mux.log.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."),n.disablePlayheadRebufferTracking=r.disablePlayheadRebufferTracking,n.disableAdPlaybackRangeFiltering=r.disableAdPlaybackRangeFiltering,n.errorTranslator=r.errorTranslator,n.emitTranslator=r.emitTranslator,n.stateDataTranslator=r.stateDataTranslator,n.playbackEventDispatcher=new te(e,r.data.env_key,r),n.data={player_instance_id:H(),mux_sample_rate:r.sampleRate,beacon_domain:r.beaconCollectionDomain||r.beaconDomain},n.data.view_sequence_number=1,n.data.player_sequence_number=1;var n,s=(function(){void 0===this.data.view_start&&(this.data.view_start=this.mux.utils.now(),this.emit("viewstart"),this.emit("renditionchange"))}).bind(G(n));if(n.on("viewinit",function(e,t){this._resetVideoData(),this._resetViewData(),this._resetErrorData(),this._updateStateData(),Object.assign(this.data,t),this._initializeViewData(),this.one("play",s),this.one("adbreakstart",s)}),n.on("videochange",function(e,t){this._resetView(t)}),n.on("programchange",function(e,t){this.data.player_is_paused&&this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."),this._resetView(Object.assign(t,{view_program_changed:!0})),s(),this.emit("play"),this.emit("playing")}),n.on("fragmentchange",function(e,t){this.currentFragmentPDT=t.currentFragmentPDT,this.currentFragmentStart=t.currentFragmentStart}),n.on("destroy",n.destroy),"u">typeof window&&"function"==typeof window.addEventListener&&"function"==typeof window.removeEventListener){var o=function(){var e=void 0!==n.data.view_start;n.mux.WINDOW_HIDDEN="hidden"===document.visibilityState,e&&n.mux.WINDOW_HIDDEN&&(n.data.player_is_paused||n.emit("hb"))};window.addEventListener("visibilitychange",o,!1);var l=function(e){e.persisted||n.destroy()};window.addEventListener("pagehide",l,!1),n.on("destroy",function(){window.removeEventListener("visibilitychange",o),window.removeEventListener("pagehide",l)})}return n.on("playerready",function(e,t){Object.assign(this.data,t)}),th.forEach(function(e){n.on(e,function(t,i){0!==e.indexOf("ad")&&this._updateStateData(),Object.assign(this.data,i),this._sanitizeData()}),n.on("after"+e,function(){("error"!==e||this.errorTracker.viewErrored)&&this.send(e)})}),n.on("viewend",function(e,t){Object.assign(n.data,t)}),n.one("playerready",function(e){var t=this.mux.utils.now();this.data.player_init_time&&(this.data.player_startup_time=t-this.data.player_init_time),this.pageLoadInitTime=this.data.page_load_init_time||this.pageLoadInitTime,this.pageLoadEndTime=this.data.page_load_end_time||this.pageLoadEndTime,!this.mux.PLAYER_TRACKED&&this.pageLoadInitTime&&(this.mux.PLAYER_TRACKED=!0,(this.data.player_init_time||this.pageLoadEndTime)&&(this.data.page_load_time=Math.min(this.data.player_init_time||1/0,this.pageLoadEndTime||1/0)-this.pageLoadInitTime)),this.send("playerready"),delete this.data.player_startup_time,delete this.data.page_load_time}),n.longResumeTracker=new ti(G(n)),n.errorTracker=new eC(G(n)),new e$(G(n)),n.seekingTracker=new eU(G(n)),n.playheadTime=new eD(G(n)),n.playbackHeartbeat=new eS(G(n)),new eP(G(n)),n.watchTimeTracker=new eL(G(n)),new eM(G(n)),new to(G(n)),n.adTracker=new eB(G(n)),new eN(G(n)),new ex(G(n)),new eO(G(n)),new tt(G(n)),new tr(G(n)),new ts(G(n)),new tc(G(n)),r.hlsjs&&n.addHLSJS(r),r.dashjs&&n.addDashJS(r),n.emit("viewinit",r.data),n}return Q(a,[{key:"emit",value:function(e,t){var i,r=Object.assign({viewer_time:this.mux.utils.now()},t),n=[e,r];if(this.emitTranslator)try{n=this.emitTranslator(e,r)}catch(e){this.mux.log.warn("Exception in emit translator callback.",e)}null!=n&&n.length&&(i=J(X(a.prototype),"emit",this)).call.apply(i,[this].concat(q(n)))}},{key:"destroy",value:function(){this._destroyed||(this._destroyed=!0,void 0!==this.data.view_start&&(this.emit("viewend"),this.send("viewend")),this.playbackEventDispatcher.destroy(),this.removeHLSJS(),this.removeDashJS(),window.clearTimeout(this._heartBeatTimeout))}},{key:"send",value:function(e){if(this.data.view_id){var t=Object.assign({},this.data);if(void 0===t.video_source_is_live&&(t.player_source_duration===1/0||t.video_source_duration===1/0?t.video_source_is_live=!0:(t.player_source_duration>0||t.video_source_duration>0)&&(t.video_source_is_live=!1)),t.video_source_is_live||["player_program_time","player_manifest_newest_program_time","player_live_edge_program_time","player_program_time","video_holdback","video_part_holdback","video_target_duration","video_part_target_duration"].forEach(function(e){t[e]=void 0}),t.video_source_url=t.video_source_url||t.player_source_url,t.video_source_url){var i=N(ei(t.video_source_url),2),a=i[0];t.video_source_domain=i[1],t.video_source_hostname=a}delete t.ad_request_id,t.video_playback_ranges&&(t.video_playback_range=JSON.stringify(t.video_playback_ranges.filter(function(e){return e[0]!==e[1]}).map(function(e){return"".concat(e[0],":").concat(e[1])})),delete t.video_playback_ranges),this.playbackEventDispatcher.send(e,t),this.data.view_sequence_number++,this.data.player_sequence_number++,tm.has(e)||this._restartHeartBeat(),"viewend"===e&&delete this.data.view_id}}},{key:"_resetView",value:function(e){this.emit("viewend"),this.send("viewend"),this.emit("viewinit",e)}},{key:"_updateStateData",value:function(){var e,t=this.getStateData();if("function"==typeof this.stateDataTranslator)try{t=this.stateDataTranslator(t)}catch(e){this.mux.log.warn("Exception in stateDataTranslator translator callback.",e)}null!=(e=this.data)&&e.video_cdn&&null!=t&&t.video_cdn&&(t.video_cdn,t=function(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}(t,["video_cdn"])),Object.assign(this.data,t),this.playheadTime._updatePlayheadTime(),this._sanitizeData()}},{key:"_sanitizeData",value:function(){var e=this;["player_width","player_height","video_source_width","video_source_height","player_playhead_time","video_source_bitrate"].forEach(function(t){var i=parseInt(e.data[t],10);e.data[t]=isNaN(i)?void 0:i}),["player_source_url","video_source_url"].forEach(function(t){if(e.data[t]){var i=e.data[t].toLowerCase();(0===i.indexOf("data:")||0===i.indexOf("blob:"))&&(e.data[t]="MSE style URL")}})}},{key:"_resetVideoData",value:function(){var e=this;Object.keys(this.data).forEach(function(t){0===t.indexOf("video_")&&delete e.data[t]})}},{key:"_resetViewData",value:function(){var e=this;Object.keys(this.data).forEach(function(t){0===t.indexOf("view_")&&delete e.data[t]}),this.data.view_sequence_number=1}},{key:"_resetErrorData",value:function(){delete this.data.player_error_code,delete this.data.player_error_message,delete this.data.player_error_context,delete this.data.player_error_severity,delete this.data.player_error_business_exception}},{key:"_initializeViewData",value:function(){var e=this,t=this.data.view_id=H(),i=function(){t===e.data.view_id&&eo(e.data,"player_view_count",1)};this.data.player_is_paused?this.one("play",i):i()}},{key:"_restartHeartBeat",value:function(){var e=this;window.clearTimeout(this._heartBeatTimeout),this._heartBeatTimeout=window.setTimeout(function(){e.data.player_is_paused||e.emit("hb")},1e4)}},{key:"addHLSJS",value:function(e){e.hlsjs?this.hlsjs?this.mux.log.warn("An instance of HLS.js is already being monitored for this player."):(this.hlsjs=e.hlsjs,eg(this.mux,this.id,e.hlsjs,{},e.Hls||window.Hls)):this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.")}},{key:"removeHLSJS",value:function(){this.hlsjs&&(eE(this.hlsjs),this.hlsjs=void 0)}},{key:"addDashJS",value:function(e){e.dashjs?this.dashjs?this.mux.log.warn("An instance of Dash.js is already being monitored for this player."):(this.dashjs=e.dashjs,ek(this.mux,this.id,e.dashjs)):this.mux.log.warn("You must pass a valid dashjs instance in order to track it.")}},{key:"removeDashJS",value:function(){this.dashjs&&(eA(this.dashjs),this.dashjs=void 0)}}]),a}(eR),tv=h(M());function tb(){return tv.default&&!!(tv.default.fullscreenElement||tv.default.webkitFullscreenElement||tv.default.mozFullScreenElement||tv.default.msFullscreenElement)}var tg,tE,tf=["loadstart","pause","play","playing","seeking","seeked","timeupdate","ratechange","stalled","waiting","error","ended"],ty={1:"MEDIA_ERR_ABORTED",2:"MEDIA_ERR_NETWORK",3:"MEDIA_ERR_DECODE",4:"MEDIA_ERR_SRC_NOT_SUPPORTED"},t_=h(m());t_.default&&t_.default.WeakMap&&(tE=new WeakMap);var tT=function(e){return this.buffer="",this.manifest={segments:[],serverControl:{},sessionData:{}},this.currentUri={},this.process(e),this.manifest};tT.prototype.process=function(e){var t;for(this.buffer+=e,t=this.buffer.indexOf("\n");t>-1;t=this.buffer.indexOf("\n"))this.processLine(this.buffer.substring(0,t)),this.buffer=this.buffer.substring(t+1)},tT.prototype.processLine=function(e){var t=e.indexOf(":"),i=tC(e,t),a=i[0],r=2===i.length?tw(i[1]):void 0;if("#"!==a[0])this.currentUri.uri=a,this.manifest.segments.push(this.currentUri),!this.manifest.targetDuration||"duration"in this.currentUri||(this.currentUri.duration=this.manifest.targetDuration),this.currentUri={};else switch(a){case"#EXT-X-TARGETDURATION":if(!isFinite(r)||r<0)return;this.manifest.targetDuration=r,this.setHoldBack();break;case"#EXT-X-PART-INF":tk(this.manifest,i),this.manifest.partInf.partTarget&&(this.manifest.partTargetDuration=this.manifest.partInf.partTarget),this.setHoldBack();break;case"#EXT-X-SERVER-CONTROL":tk(this.manifest,i),this.setHoldBack();break;case"#EXTINF":0===r?this.currentUri.duration=.01:r>0&&(this.currentUri.duration=r);break;case"#EXT-X-PROGRAM-DATE-TIME":var n=new Date(r);this.manifest.dateTimeString||(this.manifest.dateTimeString=r,this.manifest.dateTimeObject=n),this.currentUri.dateTimeString=r,this.currentUri.dateTimeObject=n;break;case"#EXT-X-VERSION":tk(this.manifest,i);break;case"#EXT-X-SESSION-DATA":var s=ep(tL(i[1]));Object.assign(this.manifest.sessionData,s)}},tT.prototype.setHoldBack=function(){var e=this.manifest,t=e.serverControl,i=e.targetDuration,a=e.partTargetDuration;if(t){var r="holdBack",n="partHoldBack",s=i&&3*i,o=a&&2*a;i&&!t.hasOwnProperty(r)&&(t[r]=s),s&&t[r]<s&&(t[r]=s),a&&!t.hasOwnProperty(n)&&(t[n]=3*a),a&&t[n]<o&&(t[n]=o)}};var tk=function(e,t){var i,a=tA(t[0].replace("#EXT-X-",""));tS(t[1])?(i={},i=Object.assign(tI(t[1]),i)):i=tw(t[1]),e[a]=i},tA=function(e){return e.toLowerCase().replace(/-(\w)/g,function(e){return e[1].toUpperCase()})},tw=function(e){if("yes"===e.toLowerCase()||"no"===e.toLowerCase())return"yes"===e.toLowerCase();var t=-1!==e.indexOf(":")?e:parseFloat(e);return isNaN(t)?e:t},tR=function(e){var t={},i=e.split("=");return i.length>1&&(t[tA(i[0])]=tw(i[1])),t},tI=function(e){for(var t=e.split(","),i={},a=0;t.length>a;a++)i=Object.assign(tR(t[a]),i);return i},tS=function(e){return e.indexOf("=")>-1},tC=function(e,t){return -1===t?[e]:[e.substring(0,t),e.substring(t+1)]},tL=function(e){var t={};if(e){var i=e.search(",");return[e.slice(0,i),e.slice(i+1)].forEach(function(e,i){for(var a=e.replace(/['"]+/g,"").split("="),r=0;r<a.length;r++)"DATA-ID"===a[r]&&(t["DATA-ID"]=a[1-r]),"VALUE"===a[r]&&(t.VALUE=a[1-r])}),{data:t}}},tM={safeCall:function(e,t,i,a){var r=a;if(e&&"function"==typeof e[t])try{r=e[t].apply(e,i)}catch(e){K.info("safeCall error",e)}return r},safeIncrement:eo,getComputedStyle:function(e,t){var i;return e&&t&&t_.default&&"function"==typeof t_.default.getComputedStyle?(tE&&tE.has(e)&&(i=tE.get(e)),i||(i=t_.default.getComputedStyle(e,null),tE&&tE.set(e,i)),i.getPropertyValue(t)):""},secondsToMs:function(e){return Math.floor(1e3*e)},assign:Object.assign,headersStringToObject:eh,cdnHeadersToRequestId:em,extractHostnameAndDomain:ei,extractHostname:et,manifestParser:tT,generateShortID:B,generateUUID:H,now:W,findMediaElement:V},tD={},tx=function(e){var t=arguments;"string"==typeof e?tx.hasOwnProperty(e)?O.default.setTimeout(function(){t=Array.prototype.splice.call(t,1),tx[e].apply(null,t)},0):K.warn("`"+e+"` is an unknown task"):"function"==typeof e?O.default.setTimeout(function(){e(tx)},0):K.warn("`"+e+"` is invalid.")},tN={loaded:W(),NAME:"mux-embed",VERSION:"5.18.0",API_VERSION:"2.1",PLAYER_TRACKED:!1,monitor:function(e,t){return function(e,t,i){var a=N(V(t),3),r=a[0],n=a[1],s=a[2],o=e.log,l=e.utils.getComputedStyle,d=e.utils.secondsToMs;if(!r)return o.error("No element was found with the `"+n+"` query selector.");if("video"!==s&&"audio"!==s)return o.error("The element of `"+n+"` was not a media element.");r.mux&&(r.mux.destroy(),delete r.mux,o.warn("Already monitoring this video element, replacing existing event listeners")),(i=Object.assign({automaticErrorTracking:!0},i,{getPlayheadTime:function(){return d(r.currentTime)},getStateData:function(){var e,t,i=(null==(e=this.getPlayheadTime)?void 0:e.call(this))||d(r.currentTime),a=this.hlsjs&&this.hlsjs.url,n=this.dashjs&&"function"==typeof this.dashjs.getSource&&this.dashjs.getSource(),s={player_is_paused:r.paused,player_width:parseInt(l(r,"width")),player_height:parseInt(l(r,"height")),player_autoplay_on:r.autoplay,player_preload_on:r.preload,player_language_code:r.lang,player_is_fullscreen:tb(),video_poster_url:r.poster,video_source_url:a||n||r.currentSrc,video_source_duration:d(r.duration),video_source_height:r.videoHeight,video_source_width:r.videoWidth,view_dropped_frame_count:null==r||null==(t=r.getVideoPlaybackQuality)?void 0:t.call(r).droppedVideoFrames};if(r.getStartDate&&i>0){var o=r.getStartDate();if(o&&"function"==typeof o.getTime&&o.getTime()){var u=o.getTime();s.player_program_time=u+i,r.seekable.length>0&&(s.player_live_edge_program_time=u+r.seekable.end(r.seekable.length-1))}}return s}})).data=Object.assign({player_software:"HTML5 Video Element",player_mux_plugin_name:"VideoElementMonitor",player_mux_plugin_version:e.VERSION},i.data),r.mux=r.mux||{},r.mux.deleted=!1,r.mux.emit=function(t,i){e.emit(n,t,i)},r.mux.updateData=function(e){r.mux.emit("hb",e)};var u=function(){o.error("The monitor for this video element has already been destroyed.")};r.mux.destroy=function(){Object.keys(r.mux.listeners).forEach(function(e){r.removeEventListener(e,r.mux.listeners[e],!1)}),delete r.mux.listeners,r.mux.fullscreenChangeListener&&(document.removeEventListener("fullscreenchange",r.mux.fullscreenChangeListener,!1),delete r.mux.fullscreenChangeListener),r.mux.destroy=u,r.mux.swapElement=u,r.mux.emit=u,r.mux.addHLSJS=u,r.mux.addDashJS=u,r.mux.removeHLSJS=u,r.mux.removeDashJS=u,r.mux.updateData=u,r.mux.setEmitTranslator=u,r.mux.setStateDataTranslator=u,r.mux.setGetPlayheadTime=u,r.mux.deleted=!0,e.emit(n,"destroy")},r.mux.swapElement=function(t){var i=N(V(t),3),a=i[0],n=i[1],s=i[2];return a?"video"!==s&&"audio"!==s?e.log.error("The element of `"+n+"` was not a media element."):void(a.muxId=r.muxId,delete r.muxId,a.mux=a.mux||{},a.mux.listeners=Object.assign({},r.mux.listeners),delete r.mux.listeners,Object.keys(a.mux.listeners).forEach(function(e){r.removeEventListener(e,a.mux.listeners[e],!1),a.addEventListener(e,a.mux.listeners[e],!1)}),a.mux.fullscreenChangeListener=r.mux.fullscreenChangeListener,delete r.mux.fullscreenChangeListener,a.mux.swapElement=r.mux.swapElement,a.mux.destroy=r.mux.destroy,delete r.mux,r=a):e.log.error("No element was found with the `"+n+"` query selector.")},r.mux.addHLSJS=function(t){e.addHLSJS(n,t)},r.mux.addDashJS=function(t){e.addDashJS(n,t)},r.mux.removeHLSJS=function(){e.removeHLSJS(n)},r.mux.removeDashJS=function(){e.removeDashJS(n)},r.mux.setEmitTranslator=function(t){e.setEmitTranslator(n,t)},r.mux.setStateDataTranslator=function(t){e.setStateDataTranslator(n,t)},r.mux.setGetPlayheadTime=function(t){t||(t=i.getPlayheadTime),e.setGetPlayheadTime(n,t)},e.init(n,i),e.emit(n,"playerready"),r.paused||(e.emit(n,"play"),r.readyState>2&&e.emit(n,"playing")),r.mux.listeners={},tf.forEach(function(t){("error"!==t||i.automaticErrorTracking)&&(r.mux.listeners[t]=function(){var i={};if("error"===t){if(!r.error||1===r.error.code)return;i.player_error_code=r.error.code,i.player_error_message=ty[r.error.code]||r.error.message}e.emit(n,t,i)},r.addEventListener(t,r.mux.listeners[t],!1))}),r.mux.listeners.enterpictureinpicture=function(){e.emit(n,"playbackmodechange",{player_playback_mode:"pip",player_playback_mode_data:"{}"})},r.mux.listeners.leavepictureinpicture=function(){var t=tb()?"fullscreen":"standard";e.emit(n,"playbackmodechange",{player_playback_mode:t,player_playback_mode_data:"{}"})},r.addEventListener("enterpictureinpicture",r.mux.listeners.enterpictureinpicture,!1),r.addEventListener("leavepictureinpicture",r.mux.listeners.leavepictureinpicture,!1),r.mux.fullscreenChangeListener=function(){var t=tb(),i=document.fullscreenElement;if(t&&(i===r||null!=i&&i.contains(r)))e.emit(n,"playbackmodechange",{player_playback_mode:"fullscreen",player_playback_mode_data:"{}"});else if(!t){var a=document.pictureInPictureElement===r;e.emit(n,"playbackmodechange",{player_playback_mode:a?"pip":"standard",player_playback_mode_data:"{}"})}},document.addEventListener("fullscreenchange",r.mux.fullscreenChangeListener,!1)}(tx,e,t)},destroyMonitor:function(e){var t=N(V(e),1)[0];t&&t.mux&&"function"==typeof t.mux.destroy?t.mux.destroy():K.error("A video element monitor for `"+e+"` has not been initialized via `mux.monitor`.")},addHLSJS:function(e,t){var i=$(e);tD[i]?tD[i].addHLSJS(t):K.error("A monitor for `"+i+"` has not been initialized.")},addDashJS:function(e,t){var i=$(e);tD[i]?tD[i].addDashJS(t):K.error("A monitor for `"+i+"` has not been initialized.")},removeHLSJS:function(e){var t=$(e);tD[t]?tD[t].removeHLSJS():K.error("A monitor for `"+t+"` has not been initialized.")},removeDashJS:function(e){var t=$(e);tD[t]?tD[t].removeDashJS():K.error("A monitor for `"+t+"` has not been initialized.")},init:function(e,t){Y()&&t&&t.respectDoNotTrack&&K.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");var i=$(e);tD[i]=new tp(tx,i,t)},emit:function(e,t,i){var a=$(e);tD[a]?(tD[a].emit(t,i),"destroy"===t&&delete tD[a]):K.error("A monitor for `"+a+"` has not been initialized.")},updateData:function(e,t){var i=$(e);tD[i]?tD[i].emit("hb",t):K.error("A monitor for `"+i+"` has not been initialized.")},setEmitTranslator:function(e,t){var i=$(e);tD[i]?tD[i].emitTranslator=t:K.error("A monitor for `"+i+"` has not been initialized.")},setStateDataTranslator:function(e,t){var i=$(e);tD[i]?tD[i].stateDataTranslator=t:K.error("A monitor for `"+i+"` has not been initialized.")},setGetPlayheadTime:function(e,t){var i=$(e);tD[i]?tD[i].getPlayheadTime=t:K.error("A monitor for `"+i+"` has not been initialized.")},checkDoNotTrack:Y,log:K,utils:tM,events:{PLAYER_READY:"playerready",VIEW_INIT:"viewinit",VIDEO_CHANGE:"videochange",PLAY:"play",PAUSE:"pause",PLAYING:"playing",TIME_UPDATE:"timeupdate",SEEKING:"seeking",SEEKED:"seeked",REBUFFER_START:"rebufferstart",REBUFFER_END:"rebufferend",ERROR:"error",ENDED:"ended",RENDITION_CHANGE:"renditionchange",ORIENTATION_CHANGE:"orientationchange",PLAYBACK_MODE_CHANGE:"playbackmodechange",NETWORK_CHANGE:"networkchange",AD_REQUEST:"adrequest",AD_RESPONSE:"adresponse",AD_BREAK_START:"adbreakstart",AD_PLAY:"adplay",AD_PLAYING:"adplaying",AD_PAUSE:"adpause",AD_FIRST_QUARTILE:"adfirstquartile",AD_MID_POINT:"admidpoint",AD_THIRD_QUARTILE:"adthirdquartile",AD_ENDED:"adended",AD_BREAK_END:"adbreakend",AD_ERROR:"aderror",REQUEST_COMPLETED:"requestcompleted",REQUEST_FAILED:"requestfailed",REQUEST_CANCELLED:"requestcanceled",HEARTBEAT:"hb",DESTROY:"destroy"},WINDOW_HIDDEN:!1,WINDOW_UNLOADING:!1};Object.assign(tx,tN),void 0!==O.default&&"function"==typeof O.default.addEventListener&&O.default.addEventListener("pagehide",function(e){e.persisted||(tx.WINDOW_UNLOADING=!0)},!1);var tO=i(57384),tP=tO.Ay,tU={VIDEO:"video",THUMBNAIL:"thumbnail",STORYBOARD:"storyboard",DRM:"drm"},tW={NOT_AN_ERROR:0,NETWORK_OFFLINE:2000002,NETWORK_UNKNOWN_ERROR:2e6,NETWORK_NO_STATUS:2000001,NETWORK_INVALID_URL:24e5,NETWORK_NOT_FOUND:2404e3,NETWORK_NOT_READY:2412e3,NETWORK_GENERIC_SERVER_FAIL:25e5,NETWORK_TOKEN_MISSING:2403201,NETWORK_TOKEN_MALFORMED:2412202,NETWORK_TOKEN_EXPIRED:2403210,NETWORK_TOKEN_AUD_MISSING:2403221,NETWORK_TOKEN_AUD_MISMATCH:2403222,NETWORK_TOKEN_SUB_MISMATCH:2403232,ENCRYPTED_ERROR:5e6,ENCRYPTED_UNSUPPORTED_KEY_SYSTEM:5000001,ENCRYPTED_GENERATE_REQUEST_FAILED:5000002,ENCRYPTED_UPDATE_LICENSE_FAILED:5000003,ENCRYPTED_UPDATE_SERVER_CERT_FAILED:5000004,ENCRYPTED_CDM_ERROR:5000005,ENCRYPTED_OUTPUT_RESTRICTED:5000006,ENCRYPTED_MISSING_TOKEN:5000002},tH=e=>e===tU.VIDEO?"playback":e,tB=class e extends Error{constructor(t,i=e.MEDIA_ERR_CUSTOM,a,r){var n;super(t),this.name="MediaError",this.code=i,this.context=r,this.fatal=null!=a?a:i>=e.MEDIA_ERR_NETWORK&&i<=e.MEDIA_ERR_ENCRYPTED,this.message||(this.message=null!=(n=e.defaultMessages[this.code])?n:"")}};tB.MEDIA_ERR_ABORTED=1,tB.MEDIA_ERR_NETWORK=2,tB.MEDIA_ERR_DECODE=3,tB.MEDIA_ERR_SRC_NOT_SUPPORTED=4,tB.MEDIA_ERR_ENCRYPTED=5,tB.MEDIA_ERR_CUSTOM=100,tB.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail.",3:"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",4:"An unsupported error occurred. The server or network failed, or your browser does not support this format.",5:"The media is encrypted and there are no keys to decrypt it."};var t$=tB,tV=(e,t)=>null!=t&&e in t,tq={ANY:"any",MUTED:"muted"},tK={ON_DEMAND:"on-demand",LIVE:"live",UNKNOWN:"unknown"},tF={MSE:"mse",NATIVE:"native"},tY={HEADER:"header",QUERY:"query",NONE:"none"},tG=Object.values(tY),tj={M3U8:"application/vnd.apple.mpegurl",MP4:"video/mp4"},tz={HLS:tj.M3U8},tQ=(Object.keys(tz),[...Object.values(tj)],{upTo720p:"720p",upTo1080p:"1080p",upTo1440p:"1440p",upTo2160p:"2160p"}),tZ={noLessThan480p:"480p",noLessThan540p:"540p",noLessThan720p:"720p",noLessThan1080p:"1080p",noLessThan1440p:"1440p",noLessThan2160p:"2160p"},tX={DESCENDING:"desc"},tJ={code:"en"},t0=(e,t,i,a,r=e)=>{r.addEventListener(t,i,a),e.addEventListener("teardown",()=>{r.removeEventListener(t,i)},{once:!0})},t1=e=>{let t=e.indexOf("?");return t<0?[e]:[e.slice(0,t),e.slice(t)]},t2=e=>{let{type:t}=e;if(t){let e=t.toUpperCase();return tV(e,tz)?tz[e]:t}return t5(e)},t3=e=>"VOD"===e?tK.ON_DEMAND:tK.LIVE,t4=e=>"EVENT"===e?1/0:"VOD"===e?NaN:0,t5=e=>{let{src:t}=e;if(!t)return"";let i="";try{i=t8(t).pathname}catch{console.error("Invalid url when trying to infer mime type",t)}let a=i.lastIndexOf(".");if(a<0)return t7(e)?tj.M3U8:"";let r=i.slice(a+1).toUpperCase();return tV(r,tj)?tj[r]:""},t9=e=>{try{return new URL(e),!1}catch{return!0}},t8=(e,t)=>{var i;if(!t9(e))return new URL(e);let a=null==(i=null==window?void 0:window.location)?void 0:i.href,r=null!=t?t:a;return t&&t9(t.toString())&&(r=new URL(t,a)),new URL(e,r)},t6="mux.com",t7=({src:e,customDomain:t=t6})=>{let i;try{i=new URL(`${e}`)}catch{return!1}let a="https:"===i.protocol,r=i.hostname===`stream.${t}`.toLowerCase(),n=i.pathname.split("/"),s=2===n.length,o=!(null!=n&&n[1].includes("."));return a&&r&&s&&o},ie=e=>{let t=(null!=e?e:"").split(".")[1];if(t)try{let e=t.replace(/-/g,"+").replace(/_/g,"/"),i=decodeURIComponent(atob(e).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(i)}catch{return}};function it(e,t=!0){var i;return new ii(t&&null!=(i=null==tJ?void 0:tJ[e])?i:e,t?tJ.code:"en")}var ii=class{constructor(e,t=(e=>null!=(e=tJ)?e:"en")()){this.message=e,this.locale=t}format(e){return this.message.replace(/\{(\w+)\}/g,(t,i)=>{var a;return null!=(a=e[i])?a:""})}toString(){return this.message}},ia=Object.values(tq),ir=e=>"boolean"==typeof e||"string"==typeof e&&ia.includes(e),is=(e,t)=>{if(!t)return;let i=e.muted,a=()=>e.muted=i;switch(t){case tq.ANY:e.play().catch(()=>{e.muted=!0,e.play().catch(a)});break;case tq.MUTED:e.muted=!0,e.play().catch(a);break;default:e.play().catch(()=>{})}},io=e=>"time"in e?e.time:e.startTime;function il(e,t,i,a,r,n){let s=document.createElement("track");return s.kind=t,s.label=i,a&&(s.srclang=a),r&&(s.id=r),n&&(s.default=!0),s.track.mode=["subtitles","captions"].includes(t)?"disabled":"hidden",s.setAttribute("data-removeondestroy",""),e.append(s),s.track}function id(e,t){let i=Array.prototype.find.call(e.querySelectorAll("track"),e=>e.track===t);null==i||i.remove()}function iu(e,t,i){var a;return null==(a=Array.from(e.querySelectorAll("track")).find(e=>e.track.label===t&&e.track.kind===i))?void 0:a.track}async function ic(e,t,i,a){let r=iu(e,i,a);return r||((r=il(e,a,i)).mode="hidden",await new Promise(e=>setTimeout(()=>e(void 0),0))),"hidden"!==r.mode&&(r.mode="hidden"),[...t].sort((e,t)=>io(t)-io(e)).forEach(t=>{var i,n;let s=t.value,o=io(t);if("endTime"in t&&null!=t.endTime)null==r||r.addCue(new VTTCue(o,t.endTime,"chapters"===a?s:JSON.stringify(null!=s?s:null)));else{let t=Array.prototype.findIndex.call(null==r?void 0:r.cues,e=>e.startTime>=o),l=null==(i=null==r?void 0:r.cues)?void 0:i[t],d=l?l.startTime:Number.isFinite(e.duration)?e.duration:Number.MAX_SAFE_INTEGER,u=null==(n=null==r?void 0:r.cues)?void 0:n[t-1];u&&(u.endTime=o),null==r||r.addCue(new VTTCue(o,d,"chapters"===a?s:JSON.stringify(null!=s?s:null)))}}),e.textTracks.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),r}var ih="cuepoints",im=Object.freeze({label:ih});async function ip(e,t,i=im){return ic(e,t,i.label,"metadata")}var iv=e=>({time:e.startTime,value:JSON.parse(e.text)});function ib(e,t={label:ih}){let i=iu(e,t.label,"metadata");return null!=i&&i.cues?Array.from(i.cues,e=>iv(e)):[]}function ig(e,t={label:ih}){var i,a;let r=iu(e,t.label,"metadata");if(!(null!=(i=null==r?void 0:r.activeCues)&&i.length))return;if(1===r.activeCues.length)return iv(r.activeCues[0]);let{currentTime:n}=e;return iv(Array.prototype.find.call(null!=(a=r.activeCues)?a:[],({startTime:e,endTime:t})=>e<=n&&t>n)||r.activeCues[0])}async function iE(e,t=im){return new Promise(i=>{t0(e,"loadstart",async()=>{let a=await ip(e,[],t);t0(e,"cuechange",()=>{let t=ig(e);if(t){let i=new CustomEvent("cuepointchange",{composed:!0,bubbles:!0,detail:t});e.dispatchEvent(i)}},{},a),i(a)})})}var iy="chapters",i_=Object.freeze({label:iy}),iT=e=>({startTime:e.startTime,endTime:e.endTime,value:e.text});async function ik(e,t,i=i_){return ic(e,t,i.label,"chapters")}function iA(e,t={label:iy}){var i;let a=iu(e,t.label,"chapters");return null!=(i=null==a?void 0:a.cues)&&i.length?Array.from(a.cues,e=>iT(e)):[]}function iw(e,t={label:iy}){var i,a;let r=iu(e,t.label,"chapters");if(!(null!=(i=null==r?void 0:r.activeCues)&&i.length))return;if(1===r.activeCues.length)return iT(r.activeCues[0]);let{currentTime:n}=e;return iT(Array.prototype.find.call(null!=(a=r.activeCues)?a:[],({startTime:e,endTime:t})=>e<=n&&t>n)||r.activeCues[0])}async function iR(e,t=i_){return new Promise(i=>{t0(e,"loadstart",async()=>{let a=await ik(e,[],t);t0(e,"cuechange",()=>{let t=iw(e);if(t){let i=new CustomEvent("chapterchange",{composed:!0,bubbles:!0,detail:t});e.dispatchEvent(i)}},{},a),i(a)})})}function iI(e,t){if(t){let i=t.playingDate;if(null!=i)return new Date(i.getTime()-1e3*e.currentTime)}return"function"==typeof e.getStartDate?e.getStartDate():new Date(NaN)}function iS(e,t){return t&&t.playingDate?t.playingDate:new Date("function"==typeof e.getStartDate?e.getStartDate().getTime()+1e3*e.currentTime:NaN)}var iC={VIDEO:"v",THUMBNAIL:"t",STORYBOARD:"s",DRM:"d"},iL=(e,t,i,a,r=!1,n=!(e=>null==(e=globalThis.navigator)?void 0:e.onLine)())=>{var s,o,l,d;let u,c;if(n){let i=it("Your device appears to be offline",r),a=t$.MEDIA_ERR_NETWORK,n=new t$(i,a,!1,void 0);return n.errorCategory=t,n.muxCode=tW.NETWORK_OFFLINE,n.data=e,n}let h="status"in e?e.status:e.code,m=Date.now(),p=t$.MEDIA_ERR_NETWORK;if(200===h)return;let v=tH(t),b=(u=tH(t),c=`${u}Token`,null!=(l=i.tokens)&&l[u]?null==(d=i.tokens)?void 0:d[u]:tV(c,i)?i[c]:void 0),g=t===tU.VIDEO?iC.VIDEO:t===tU.DRM?iC.DRM:void 0,[E]=t1(null!=(s=i.playbackId)?s:"");if(!h||!E)return;let f=ie(b);if(b&&!f){let i=new t$(it("The {tokenNamePrefix}-token provided is invalid or malformed.",r).format({tokenNamePrefix:v}),p,!0,it("Compact JWT string: {token}",r).format({token:b}));return i.errorCategory=t,i.muxCode=tW.NETWORK_TOKEN_MALFORMED,i.data=e,i}if(h>=500){let e=new t$("",p,null==a||a);return e.errorCategory=t,e.muxCode=tW.NETWORK_UNKNOWN_ERROR,e}if(403===h)if(f){if((({exp:e},t=Date.now())=>!e||1e3*e<t)(f,m)){let i={timeStyle:"medium",dateStyle:"medium"},a=new t$(it("The video’s secured {tokenNamePrefix}-token has expired.",r).format({tokenNamePrefix:v}),p,!0,it("Expired at: {expiredDate}. Current time: {currentDate}.",r).format({expiredDate:new Intl.DateTimeFormat("en",i).format(null!=(o=f.exp)?o:0),currentDate:new Intl.DateTimeFormat("en",i).format(m)}));return a.errorCategory=t,a.muxCode=tW.NETWORK_TOKEN_EXPIRED,a.data=e,a}if((({sub:e},t)=>e!==t)(f,E)){let i=new t$(it("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",r).format({tokenNamePrefix:v}),p,!0,it("Specified playback ID: {playbackId} and the playback ID encoded in the {tokenNamePrefix}-token: {tokenPlaybackId}",r).format({tokenNamePrefix:v,playbackId:E,tokenPlaybackId:f.sub}));return i.errorCategory=t,i.muxCode=tW.NETWORK_TOKEN_SUB_MISMATCH,i.data=e,i}if((({aud:e},t)=>!e)(f,0)){let i=new t$(it("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:v}),p,!0,it("The {tokenNamePrefix}-token has no aud value. aud value should be {expectedAud}.",r).format({tokenNamePrefix:v,expectedAud:g}));return i.errorCategory=t,i.muxCode=tW.NETWORK_TOKEN_AUD_MISSING,i.data=e,i}if((({aud:e},t)=>e!==t)(f,g)){let i=new t$(it("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:v}),p,!0,it("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.",r).format({tokenNamePrefix:v,expectedAud:g,aud:f.aud}));return i.errorCategory=t,i.muxCode=tW.NETWORK_TOKEN_AUD_MISMATCH,i.data=e,i}}else{let i=new t$(it("Authorization error trying to access this {category} URL. If this is a signed URL, you might need to provide a {tokenNamePrefix}-token.",r).format({tokenNamePrefix:v,category:t}),p,null==a||a,it("Specified playback ID: {playbackId}",r).format({playbackId:E}));return i.errorCategory=t,i.muxCode=tW.NETWORK_TOKEN_MISSING,i.data=e,i}if(412===h){let n=new t$(it("This playback-id may belong to a live stream that is not currently active or an asset that is not ready.",r),p,null==a||a,it("Specified playback ID: {playbackId}",r).format({playbackId:E}));return n.errorCategory=t,n.muxCode=tW.NETWORK_NOT_READY,n.streamType=i.streamType===tK.LIVE?"live":i.streamType===tK.ON_DEMAND?"on-demand":"unknown",n.data=e,n}if(404===h){let i=new t$(it("This URL or playback-id does not exist. You may have used an Asset ID or an ID from a different resource.",r),p,null==a||a,it("Specified playback ID: {playbackId}",r).format({playbackId:E}));return i.errorCategory=t,i.muxCode=tW.NETWORK_NOT_FOUND,i.data=e,i}if(400===h){let i=new t$(it("The URL or playback-id was invalid. You may have used an invalid value as a playback-id."),p,null==a||a,it("Specified playback ID: {playbackId}",r).format({playbackId:E}));return i.errorCategory=t,i.muxCode=tW.NETWORK_INVALID_URL,i.data=e,i}let y=new t$("",p,null==a||a);return y.errorCategory=t,y.muxCode=tW.NETWORK_UNKNOWN_ERROR,y.data=e,y},iM=tP.DefaultConfig.capLevelController,iD={"720p":921600,"1080p":2073600,"1440p":4194304,"2160p":8294400},ix=class e extends iM{constructor(e){super(e)}static setMaxAutoResolution(t,i){i?e.maxAutoResolution.set(t,i):e.maxAutoResolution.delete(t)}getMaxAutoResolution(){var t;let i=this.hls;return null!=(t=e.maxAutoResolution.get(i))?t:void 0}get levels(){var e;return null!=(e=this.hls.levels)?e:[]}getValidLevels(e){return this.levels.filter((t,i)=>this.isLevelAllowed(t)&&i<=e)}getMaxLevelCapped(e){let t=this.getValidLevels(e),i=this.getMaxAutoResolution();if(!i)return super.getMaxLevel(e);let a=iD[i.toLowerCase().trim()];if(!a)return super.getMaxLevel(e);let r=t.filter(e=>e.width*e.height<=a),n=r.findIndex(e=>e.width*e.height===a);if(-1!==n){let e=r[n];return t.findIndex(t=>t===e)}if(0===r.length)return 0;let s=r[r.length-1];return t.findIndex(e=>e===s)}getMaxLevel(t){if(void 0!==this.getMaxAutoResolution())return this.getMaxLevelCapped(t);let i=super.getMaxLevel(t),a=this.getValidLevels(t);if(!a[i])return i;let r=Math.min(a[i].width,a[i].height),n=e.minMaxResolution;return r>=n?i:iM.getMaxLevelByMediaSize(a,16/9*n,n)}};ix.minMaxResolution=720,ix.maxAutoResolution=new WeakMap;var iN,iO,iP,iU,iW,iH,iB=e=>new TextDecoder("utf-16le").decode(e).replace("skd://","").slice(1),i$="fairplay",iV=/([A-Z0-9-]+)="?(.*?)"?(?:,|$)/g,iq=async(e,t)=>{if(t===tj.MP4)return{streamType:tK.ON_DEMAND,targetLiveWindow:NaN,liveEdgeStartOffset:void 0,sessionData:void 0};if(t===tj.M3U8){let t=await fetch(e);if(!t.ok)return Promise.reject(t);let i=await t.text(),a=await ((e,t)=>{let i,a=e.split(`
`).find((e,t,i)=>t>0&&i[t-1].startsWith("#EXT-X-STREAM-INF"));if(!a)return Promise.reject(Error("No media playlist URL found in multivariant playlist"));if(t9(a)&&!t)return Promise.reject(Error("masterPlaylistUrl is required to resolve relative media playlist URL"));try{i=t8(a,t)}catch(e){return Promise.reject(e)}return fetch(i).then(e=>200!==e.status?Promise.reject(e):e.text())})(i,t.url);return{...(e=>{let t=e.split(`
`).filter(e=>e.startsWith("#EXT-X-SESSION-DATA"));if(!t.length)return{};let i={};for(let e of t){let t=Object.fromEntries([...e.matchAll(iV)].map(([,e,t])=>[e,t])),a=t["DATA-ID"];a&&(i[a]={...t})}return{sessionData:i}})(i),...(e=>{var t,i,a;let r=e.split(`
`),n=null==(i=(null!=(t=r.find(e=>e.startsWith("#EXT-X-PLAYLIST-TYPE")))?t:"").split(":")[1])?void 0:i.trim(),s=t3(n),o=t4(n),l;if(s===tK.LIVE){let e=r.find(e=>e.startsWith("#EXT-X-PART-INF"));if(e)l=2*e.split(":")[1].split("=")[1];else{let e=r.find(e=>e.startsWith("#EXT-X-TARGETDURATION")),t=null==(a=null==e?void 0:e.split(":"))?void 0:a[1];l=(null!=t?t:6)*3}}return{streamType:s,targetLiveWindow:o,liveEdgeStartOffset:l}})(a)}}return console.error(`Media type ${t} is an unrecognized or unsupported type for src ${e}.`),{streamType:void 0,targetLiveWindow:void 0,liveEdgeStartOffset:void 0,sessionData:void 0}},iK=async(e,t,i=t2({src:e}))=>{var a,r,n,s;let{streamType:o,targetLiveWindow:l,liveEdgeStartOffset:d,sessionData:u}=await iq(e,i),c=null==u?void 0:u["com.apple.hls.chapters"];(null!=c&&c.URI||null!=c&&c.VALUE.toLocaleLowerCase().startsWith("http"))&&iF(null!=(a=c.URI)?a:c.VALUE,t),(null!=(r=iz.get(t))?r:{}).liveEdgeStartOffset=d,(null!=(n=iz.get(t))?n:{}).targetLiveWindow=l,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(s=iz.get(t))?s:{}).streamType=o,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},iF=async(e,t)=>{var i,a;try{let r=await fetch(e);if(!r.ok)throw Error(`Failed to fetch Mux metadata: ${r.status} ${r.statusText}`);let n=await r.json(),s={};if(!(null!=(i=null==n?void 0:n[0])&&i.metadata))return;for(let e of n[0].metadata)e.key&&e.value&&(s[e.key]=e.value);(null!=(a=iz.get(t))?a:{}).metadata=s;let o=new CustomEvent("muxmetadata");t.dispatchEvent(o)}catch(e){console.error(e)}},iY=null!=(iO=null==(iN=null==globalThis?void 0:globalThis.navigator)?void 0:iN.userAgent)?iO:"",iG=null!=(iW=null==(iU=null==(iP=null==globalThis?void 0:globalThis.navigator)?void 0:iP.userAgentData)?void 0:iU.platform)?iW:"",ij=iY.toLowerCase().includes("android")||["x11","android"].some(e=>iG.toLowerCase().includes(e)),iz=new WeakMap,iQ="mux.com",iZ=null==(iH=tP.isSupported)?void 0:iH.call(tP),iX=()=>{if("u">typeof window)return tx.utils.now()},iJ=tx.utils.generateUUID,i0=({playbackId:e,customDomain:t=iQ,maxResolution:i,minResolution:a,renditionOrder:r,programStartTime:n,programEndTime:s,assetStartTime:o,assetEndTime:l,playbackToken:d,tokens:{playback:u=d}={},extraSourceParams:c={}}={})=>{if(!e)return;let[h,m=""]=t1(e),p=new URL(`https://stream.${t}/${h}.m3u8${m}`);return u||p.searchParams.has("token")?(p.searchParams.forEach((e,t)=>{"token"!=t&&p.searchParams.delete(t)}),u&&p.searchParams.set("token",u)):(i&&p.searchParams.set("max_resolution",i),a&&(p.searchParams.set("min_resolution",a),i&&+i.slice(0,-1)<+a.slice(0,-1)&&console.error("minResolution must be <= maxResolution","minResolution",a,"maxResolution",i)),r&&p.searchParams.set("rendition_order",r),n&&p.searchParams.set("program_start_time",`${n}`),s&&p.searchParams.set("program_end_time",`${s}`),o&&p.searchParams.set("asset_start_time",`${o}`),l&&p.searchParams.set("asset_end_time",`${l}`),Object.entries(c).forEach(([e,t])=>{null!=t&&p.searchParams.set(e,t)})),p.toString()},i1=e=>{if(!e)return;let[t]=e.split("?");return t||void 0},i2=e=>{if(!e||!e.startsWith("https://stream."))return;let[t]=new URL(e).pathname.slice(1).split(/\.m3u8|\//);return t||void 0},i3=e=>{var t;return null==(t=iz.get(e))?void 0:t.error},i4=e=>{var t;return null==(t=iz.get(e))?void 0:t.metadata},i5=e=>{var t,i;return null!=(i=null==(t=iz.get(e))?void 0:t.streamType)?i:tK.UNKNOWN},i9=e=>{var t,i;return null!=(i=null==(t=iz.get(e))?void 0:t.targetLiveWindow)?i:NaN},i8=e=>{var t,i;return null!=(i=null==(t=iz.get(e))?void 0:t.seekable)?i:e.seekable},i6=e=>{var t;let i=null==(t=iz.get(e))?void 0:t.liveEdgeStartOffset;if("number"!=typeof i)return NaN;let a=i8(e);return a.length?a.end(a.length-1)-i:NaN},i7=e=>{var t;return null==(t=iz.get(e))?void 0:t.coreReference},ae=.034,at=(e,t,i=ae)=>e>t||((e,t,i=ae)=>Math.abs(e-t)<=i)(e,t,i),ai=(e,t)=>{var i,a,r;if(!t||!e.buffered.length)return;if(e.readyState>2)return!1;let n=t.currentLevel>=0?null==(a=null==(i=t.levels)?void 0:i[t.currentLevel])?void 0:a.details:null==(r=t.levels.find(e=>!!e.details))?void 0:r.details;if(!n||n.live)return;let{fragments:s}=n;if(!(null!=s&&s.length))return;if(e.currentTime<e.duration-(n.targetduration+.5))return!1;let o=s[s.length-1];if(e.currentTime<=o.start)return!1;let l=o.start+o.duration/2,d=e.buffered.start(e.buffered.length-1),u=e.buffered.end(e.buffered.length-1);return l>d&&l<u},aa=(e,t)=>e.ended||e.loop?e.ended:!!(t&&ai(e,t))||((e,t=ae)=>e.paused&&at(e.currentTime,e.duration,t))(e),ar=(e,t,i)=>{var a,r,n;an(t,i,e);let{metadata:s={}}=e,{view_session_id:o=iJ()}=s,l=null!=(a=null==e?void 0:e.metadata)&&a.video_id?e.metadata.video_id:ap(e)&&null!=(n=null!=(r=i1(e.playbackId))?r:i2(e.src))?n:e.src;s.view_session_id=o,s.video_id=l,e.metadata=s,e.drmTypeCb=e=>{var i;null==(i=t.mux)||i.emit("hb",{view_drm_type:e})},e.fallbackToWebkitFairplay=async()=>{var i;let a=!t.paused,r=t.currentTime;e.useWebkitFairplay=!0;let n=e.muxDataKeepSession;e.muxDataKeepSession=!0;let s=null==(i=iz.get(t))?void 0:i.coreReference;ar(e,t,s),e.muxDataKeepSession=n,e.useWebkitFairplay=!1,a&&await t.play().then(()=>{t.currentTime=r}).catch(()=>{}),t.currentTime=r},iz.set(t,{retryCount:0});let d=ao(e,t),u=(({preload:e,src:t},i,a)=>{let r=e=>{null!=e&&["","none","metadata","auto"].includes(e)?i.setAttribute("preload",e):i.removeAttribute("preload")};if(!a)return r(e),r;let n=!1,s=!1,o=a.config.maxBufferLength,l=a.config.maxBufferSize,d=e=>{r(e);let t=null!=e?e:i.preload;s||"none"===t||("metadata"===t?(a.config.maxBufferLength=1,a.config.maxBufferSize=1):(a.config.maxBufferLength=o,a.config.maxBufferSize=l),u())},u=()=>{!n&&t&&(n=!0,a.loadSource(t))};return t0(i,"play",()=>{s=!0,a.config.maxBufferLength=o,a.config.maxBufferSize=l,u()},{once:!0}),d(e),d})(e,t,d);null!=e&&e.muxDataKeepSession&&null!=t&&t.mux&&!t.mux.deleted?d&&t.mux.addHLSJS({hlsjs:d,Hls:d?tP:void 0}):ab(e,t,d),ag(e,t,d),iE(t),iR(t);let c=((e,t,i)=>{let{autoplay:a}=e,r=!1,n=!1,s=ir(a)?a:!!a,o=()=>{r||t0(t,"playing",()=>{r=!0},{once:!0})};if(o(),t0(t,"loadstart",()=>{r=!1,o(),is(t,s)},{once:!0}),t0(t,"loadstart",()=>{i||(n=e.streamType&&e.streamType!==tK.UNKNOWN?e.streamType===tK.LIVE:!Number.isFinite(t.duration)),is(t,s)},{once:!0}),i&&i.once(tP.Events.LEVEL_LOADED,(t,i)=>{var a;n=e.streamType&&e.streamType!==tK.UNKNOWN?e.streamType===tK.LIVE:null!=(a=i.details.live)&&a}),!s){let a=()=>{!n||Number.isFinite(e.startTime)||(null!=i&&i.liveSyncPosition?t.currentTime=i.liveSyncPosition:Number.isFinite(t.seekable.end(0))&&(t.currentTime=t.seekable.end(0)))};i&&t0(t,"play",()=>{"metadata"===t.preload?i.once(tP.Events.LEVEL_UPDATED,a):a()},{once:!0})}return e=>{r||is(t,s=ir(e)?e:!!e)}})(e,t,d),h={engine:d,setAutoplay:c,setPreload:u},m=iz.get(t);return m&&(m.coreReference=h),h},an=(e,t,i)=>{let a=null==t?void 0:t.engine;null!=e&&e.mux&&!e.mux.deleted&&(null!=i&&i.muxDataKeepSession?a&&e.mux.removeHLSJS():(e.mux.destroy(),delete e.mux)),a&&(a.detachMedia(),a.destroy()),e&&(e.hasAttribute("src")&&(e.removeAttribute("src"),e.load()),e.removeEventListener("error",af),e.removeEventListener("error",a_),e.removeEventListener("durationchange",aE),iz.delete(e),e.dispatchEvent(new Event("teardown")))};function as(e,t){var i;let a=t2(e);if(a!==tj.M3U8)return!0;let r=!a||null==(i=t.canPlayType(a))||i,{preferPlayback:n}=e,s=n===tF.MSE,o=n===tF.NATIVE,l=iZ&&(s||ij||!(/^((?!chrome|android).)*safari/i.test(iY)&&t.canPlayType("application/vnd.apple.mpegurl")));return r&&(o||!l)}var ao=(e,t)=>{let{debug:i,streamType:a,startTime:r=-1,metadata:n,preferCmcd:s,_hlsConfig:o={},maxAutoResolution:l}=e,d=t2(e)===tj.M3U8,u=as(e,t);if(d&&!u&&iZ){let d=al(a),u=ad(e),c=[tY.QUERY,tY.HEADER].includes(s)?{useHeaders:s===tY.HEADER,sessionId:null==n?void 0:n.view_session_id,contentId:null==n?void 0:n.video_id}:void 0,h=av(e,o),m=new tP({debug:i,startPosition:r,cmcd:c,xhrSetup:(e,t)=>{var i,a;if(s&&s!==tY.QUERY)return;let r=t8(t);if(!r.searchParams.has("CMCD"))return;let n=(null!=(a=null==(i=r.searchParams.get("CMCD"))?void 0:i.split(","))?a:[]).filter(e=>e.startsWith("sid")||e.startsWith("cid")).join(",");r.searchParams.set("CMCD",n),e.open("GET",r)},backBufferLength:30,renderTextTracksNatively:!1,liveDurationInfinity:!0,capLevelOnFPSDrop:!0,...h,...d,...u,...o});return h.capLevelController===ix&&void 0!==l&&ix.setMaxAutoResolution(m,l),m.on(tP.Events.MANIFEST_PARSED,async function(e,i){var a,r;let n=null==(a=i.sessionData)?void 0:a["com.apple.hls.chapters"];(null!=n&&n.URI||null!=n&&n.VALUE.toLocaleLowerCase().startsWith("http"))&&iF(null!=(r=null==n?void 0:n.URI)?r:null==n?void 0:n.VALUE,t)}),m}},al=e=>e===tK.LIVE?{backBufferLength:8}:{},ad=e=>{let{tokens:{drm:t}={},playbackId:i,drmTypeCb:a}=e,r=i1(i);return t&&r?{emeEnabled:!0,drmSystems:{"com.apple.fps":{licenseUrl:ah(e,"fairplay"),serverCertificateUrl:am(e,"fairplay")},"com.widevine.alpha":{licenseUrl:ah(e,"widevine")},"com.microsoft.playready":{licenseUrl:ah(e,"playready")}},requestMediaKeySystemAccessFunc:(e,t)=>("com.widevine.alpha"===e&&(t=[...t.map(e=>{var t;let i=null==(t=e.videoCapabilities)?void 0:t.map(e=>({...e,robustness:"HW_SECURE_ALL"}));return{...e,videoCapabilities:i}}),...t]),navigator.requestMediaKeySystemAccess(e,t).then(t=>{let i=e.includes("fps")?i$:e.includes("playready")?"playready":e.includes("widevine")?"widevine":void 0;return null==a||a(i),t}))}:{}},au=async e=>{let t=await fetch(e);return 200!==t.status?Promise.reject(t):await t.arrayBuffer()},ac=async(e,t)=>{let i=await fetch(t,{method:"POST",headers:{"Content-type":"application/octet-stream"},body:e});return 200!==i.status?Promise.reject(i):new Uint8Array(await i.arrayBuffer())},ah=({playbackId:e,tokens:{drm:t}={},customDomain:i=iQ},a)=>{let r=i1(e);return`https://license.${i.toLocaleLowerCase().endsWith(iQ)?i:iQ}/license/${a}/${r}?token=${t}`},am=({playbackId:e,tokens:{drm:t}={},customDomain:i=iQ},a)=>{let r=i1(e);return`https://license.${i.toLocaleLowerCase().endsWith(iQ)?i:iQ}/appcert/${a}/${r}?token=${t}`},ap=({playbackId:e,src:t,customDomain:i})=>{if(e)return!0;if("string"!=typeof t)return!1;let a=new URL(t,null==window?void 0:window.location.href).hostname.toLocaleLowerCase();return a.includes(iQ)||!!i&&a.includes(i.toLocaleLowerCase())},av=(e,t)=>{let i={};return i.capLevelToPlayerSize=e.capRenditionToPlayerSize,null==i.capLevelToPlayerSize?(i.capLevelController=ix,i.capLevelToPlayerSize=!0):i.capLevelController=tO.Rx,i},ab=(e,t,i)=>{var a;let{envKey:r,disableTracking:n,muxDataSDK:s=tx,muxDataSDKOptions:o={}}=e,l=ap(e);if(!n&&(r||l)){let{playerInitTime:n,playerSoftwareName:l,playerSoftwareVersion:d,beaconCollectionDomain:u,debug:c,disableCookies:h}=e,m={...e.metadata,video_title:(null==(a=null==e?void 0:e.metadata)?void 0:a.video_title)||void 0};s.monitor(t,{debug:c,beaconCollectionDomain:u,hlsjs:i,Hls:i?tP:void 0,automaticErrorTracking:!1,errorTranslator:t=>"string"!=typeof t.player_error_code&&("function"==typeof e.errorTranslator?e.errorTranslator(t):t),disableCookies:h,...o,data:{...r?{env_key:r}:{},player_software_name:l,player_software:l,player_software_version:d,player_init_time:n,...m}})}},ag=(e,t,i)=>{var a,r;let n=as(e,t),{src:s,customDomain:o=iQ}=e,l=()=>{t.ended||e.disablePseudoEnded||!aa(t,i)||(ai(t,i)?t.currentTime=t.buffered.end(t.buffered.length-1):t.dispatchEvent(new Event("ended")))},d,u,c=()=>{let e=i8(t),i,a;e.length>0&&(i=e.start(0),a=e.end(0)),(u!==a||d!==i)&&t.dispatchEvent(new CustomEvent("seekablechange",{composed:!0})),d=i,u=a};if(t0(t,"durationchange",c),t&&n){let i=t2(e);if("string"==typeof s){if(s.endsWith(".mp4")&&s.includes(o)){let e=i2(s);iF(new URL(`https://stream.${o}/${e}/metadata.json`).toString(),t)}let n=()=>{if(i5(t)!==tK.LIVE||Number.isFinite(t.duration))return;let e=setInterval(c,1e3);t.addEventListener("teardown",()=>{clearInterval(e)},{once:!0}),t0(t,"durationchange",()=>{Number.isFinite(t.duration)&&clearInterval(e)})},l=async()=>iK(s,t,i).then(n).catch(i=>{if(i instanceof Response){let a=iL(i,tU.VIDEO,e);if(a)return void ay(t,a)}});if("none"===t.preload){let e=()=>{l(),t.removeEventListener("loadedmetadata",i)},i=()=>{l(),t.removeEventListener("play",e)};t0(t,"play",e,{once:!0}),t0(t,"loadedmetadata",i,{once:!0})}else l();null!=(a=e.tokens)&&a.drm?((e,t)=>{let i={mediaEl:t,getAppCertificate:()=>au(am(e,"fairplay")).catch(t=>{if(t instanceof Response){let i=iL(t,tU.DRM,e);return console.error("mediaError",null==i?void 0:i.message,null==i?void 0:i.context),i?Promise.reject(i):Promise.reject(Error("Unexpected error in app cert request"))}return Promise.reject(t)}),getLicenseKey:t=>ac(t,ah(e,"fairplay")).catch(t=>{if(t instanceof Response){let i=iL(t,tU.DRM,e);return console.error("mediaError",null==i?void 0:i.message,null==i?void 0:i.context),i?Promise.reject(i):Promise.reject(Error("Unexpected error in license key request"))}return Promise.reject(t)}),saveAndDispatchError:ay,drmTypeCb:()=>{var t;null==(t=e.drmTypeCb)||t.call(e,i$)}};if(e.useWebkitFairplay)(({mediaEl:e,getAppCertificate:t,getLicenseKey:i,saveAndDispatchError:a,drmTypeCb:r})=>{if(!window.WebKitMediaKeys||!("onwebkitneedkey"in e)){console.error("No WebKitMediaKeys. FairPlay may not be supported");let t=new t$(it("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),t$.MEDIA_ERR_ENCRYPTED,!0);return t.errorCategory=tU.DRM,t.muxCode=tW.ENCRYPTED_CDM_ERROR,a(e,t),()=>{}}let n=t(),s=null,o=t=>{(async()=>{try{var i,r;let a,s,o,u,c,h,m,p;e.webkitKeys||l();let v=await n;if(null===t.initData||null==v)return;let b=(i=t.initData,r=v,a=function(e){let t=new ArrayBuffer(2*e.length),i=new DataView(t);for(let t=0;t<e.length;t++)i.setUint16(2*t,e.charCodeAt(t),!0);return t}(iB(i)),s=new Uint8Array(i),o=new Uint8Array(a),u=new Uint8Array(r),c=new Uint8Array(s.byteLength+4+u.byteLength+4+o.byteLength),h=0,m=e=>{c.set(e,h),h+=e.byteLength},p=e=>{let t=new DataView(c.buffer),i=e.byteLength;t.setUint32(h,i,!0),h+=4,m(e)},m(s),p(o),p(u),c);d(b)}catch(t){console.error("Could not start encrypted playback due to exception",t),a(e,t)}})()},l=()=>{try{let t=new WebKitMediaKeys("com.apple.fps.1_0");e.webkitSetMediaKeys(t),r()}catch{let e=new t$("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser.",t$.MEDIA_ERR_ENCRYPTED,!0);throw e.errorCategory=tU.DRM,e.muxCode=tW.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM,e}},d=t=>{let r=e.webkitKeys.createSession("application/vnd.apple.mpegurl",t),n=async t=>{try{let e=t.message,a=await i(e);r.update(a)}catch(t){console.error("Error on FairPlay session message",t),a(e,t)}},o=t=>{let i=t.target.error;if(!i)return;console.error(`Internal Webkit Key Session Error - sysCode: ${i.systemCode} code: ${i.code}`);let r=new t$(it("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser."),t$.MEDIA_ERR_ENCRYPTED,!0);r.errorCategory=tU.DRM,r.muxCode=tW.ENCRYPTED_CDM_ERROR,a(e,r)},l=()=>{r.removeEventListener("webkitkeymessage",n),r.removeEventListener("webkitkeyerror",o),e.removeEventListener("teardown",l),"webkitCurrentPlaybackTargetIsWireless"in e&&e.removeEventListener("webkitcurrentplaybacktargetiswirelesschanged",l),s=null;try{r.close()}catch{}};"webkitCurrentPlaybackTargetIsWireless"in e&&e.addEventListener("webkitcurrentplaybacktargetiswirelesschanged",l,{once:!0}),r.addEventListener("webkitkeymessage",n),r.addEventListener("webkitkeyerror",o),e.addEventListener("teardown",l),s=l},u=()=>{e.removeEventListener("webkitneedkey",o),e.removeEventListener("teardown",u),null==s||s();try{e.webkitSetMediaKeys(null)}catch{}};return e.addEventListener("webkitneedkey",o),e.addEventListener("teardown",u,{once:!0})})(i);else{let t=(({mediaEl:e,getAppCertificate:t,getLicenseKey:i,saveAndDispatchError:a,drmTypeCb:r,fallbackToWebkitFairplay:n})=>{let s=null,o=async t=>{try{let i=t.initDataType;if("skd"!==i)return void console.error(`Received unexpected initialization data type "${i}"`);e.mediaKeys||await l(i);let a=t.initData;if(null==a)return void console.error(`Could not start encrypted playback due to missing initData in ${t.type} event`);await d(i,a)}catch(t){a(e,t);return}},l=async i=>{let n=await navigator.requestMediaKeySystemAccess("com.apple.fps",[{initDataTypes:[i],videoCapabilities:[{contentType:"application/vnd.apple.mpegurl",robustness:""}],distinctiveIdentifier:"not-allowed",persistentState:"not-allowed",sessionTypes:["temporary"]}]).then(e=>(r(),e)).catch(()=>{let t=new t$(it("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),t$.MEDIA_ERR_ENCRYPTED,!0);t.errorCategory=tU.DRM,t.muxCode=tW.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM,a(e,t)});if(!n)return;let s=await n.createMediaKeys();try{let e=await t();await s.setServerCertificate(e).catch(()=>{let e=it("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),t=new t$(e,t$.MEDIA_ERR_ENCRYPTED,!0);return t.errorCategory=tU.DRM,t.muxCode=tW.ENCRYPTED_UPDATE_SERVER_CERT_FAILED,Promise.reject(t)})}catch(t){a(e,t);return}await e.setMediaKeys(s)},d=async(t,r)=>{let o=e.mediaKeys.createSession(),l=async t=>{let r=t.message,n=await i(r);try{await o.update(n)}catch{let t=new t$(it("Failed to update DRM license. This may be an issue with the player or your protected content."),t$.MEDIA_ERR_ENCRYPTED,!0);t.errorCategory=tU.DRM,t.muxCode=tW.ENCRYPTED_UPDATE_LICENSE_FAILED,a(e,t)}},d=()=>{o.keyStatuses.forEach(t=>{let i;"internal-error"===t?((i=new t$(it("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser."),t$.MEDIA_ERR_ENCRYPTED,!0)).errorCategory=tU.DRM,i.muxCode=tW.ENCRYPTED_CDM_ERROR):("output-restricted"===t||"output-downscaled"===t)&&((i=new t$(it("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen."),t$.MEDIA_ERR_ENCRYPTED,!1)).errorCategory=tU.DRM,i.muxCode=tW.ENCRYPTED_OUTPUT_RESTRICTED),i&&a(e,i)})};o.addEventListener("keystatuseschange",d),o.addEventListener("message",l);let u=async()=>{o.removeEventListener("keystatuseschange",d),o.removeEventListener("message",l),"webkitCurrentPlaybackTargetIsWireless"in e&&e.removeEventListener("webkitcurrentplaybacktargetiswirelesschanged",u),e.removeEventListener("teardown",u),await o.close().catch(e=>{console.warn("There was an error when closing EME session",e)}),s=null};"webkitCurrentPlaybackTargetIsWireless"in e&&e.addEventListener("webkitcurrentplaybacktargetiswirelesschanged",u,{once:!0}),e.addEventListener("teardown",u,{once:!0}),s=u,await o.generateRequest(t,r).catch(async t=>{if("NotSupportedError"===t.name&&"webkitCurrentPlaybackTargetIsWireless"in e&&e.webkitCurrentPlaybackTargetIsWireless)console.warn("Failed to generate a DRM license request. Attempting to fallback to Webkit DRM"),null==n||n();else{let e=new t$(it("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),t$.MEDIA_ERR_ENCRYPTED,!0);return e.errorCategory=tU.DRM,e.muxCode=tW.ENCRYPTED_GENERATE_REQUEST_FAILED,console.error("Failed to generate license request",t),Promise.reject(e)}})},u=async()=>{e.removeEventListener("encrypted",o),e.removeEventListener("teardown",u),s&&await s(),await e.setMediaKeys(null).catch(()=>{})};return e.addEventListener("encrypted",o),e.addEventListener("teardown",u,{once:!0}),u})({fallbackToWebkitFairplay:async()=>{var i;await t(),null==(i=e.fallbackToWebkitFairplay)||i.call(e)},...i})}})(e,t):t0(t,"encrypted",()=>{let e=new t$(it("Attempting to play DRM-protected content without providing a DRM token."),t$.MEDIA_ERR_ENCRYPTED,!0);e.errorCategory=tU.DRM,e.muxCode=tW.ENCRYPTED_MISSING_TOKEN,ay(t,e)},{once:!0}),t.setAttribute("src",s),e.startTime&&((null!=(r=iz.get(t))?r:{}).startTime=e.startTime,t.addEventListener("durationchange",aE,{once:!0}))}else t.removeAttribute("src");t.addEventListener("error",af),t.addEventListener("error",a_),t.addEventListener("emptied",()=>{t.querySelectorAll("track[data-removeondestroy]").forEach(e=>{e.remove()})},{once:!0}),t0(t,"pause",l),t0(t,"seeked",l),t0(t,"play",()=>{t.ended||at(t.currentTime,t.duration)&&(t.currentTime=t.seekable.length?t.seekable.start(0):0)})}else{let a,r;i&&s?(i.once(tP.Events.LEVEL_LOADED,(e,a)=>{((e,t,i)=>{var a,r,n,s,o,l,d,u,c;let h,m,p,v,b,{streamType:g,targetLiveWindow:E,liveEdgeStartOffset:f,lowLatency:y}=(m=t3(h=e.type),p=t4(h),b=!!(null!=(c=e.partList)&&c.length),m===tK.LIVE&&(v=b?2*e.partTarget:3*e.targetduration),{streamType:m,targetLiveWindow:p,liveEdgeStartOffset:v,lowLatency:b});if(g===tK.LIVE){y?(i.config.backBufferLength=null!=(a=i.userConfig.backBufferLength)?a:4,i.config.maxFragLookUpTolerance=null!=(r=i.userConfig.maxFragLookUpTolerance)?r:.001,i.config.abrBandWidthUpFactor=null!=(n=i.userConfig.abrBandWidthUpFactor)?n:i.config.abrBandWidthFactor):i.config.backBufferLength=null!=(s=i.userConfig.backBufferLength)?s:8;let e=Object.freeze({get length(){return t.seekable.length},start:e=>t.seekable.start(e),end(e){var a;return e>this.length||e<0||Number.isFinite(t.duration)?t.seekable.end(e):null!=(a=i.liveSyncPosition)?a:t.seekable.end(e)}});(null!=(o=iz.get(t))?o:{}).seekable=e}(null!=(l=iz.get(t))?l:{}).liveEdgeStartOffset=f,(null!=(d=iz.get(t))?d:{}).targetLiveWindow=E,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(u=iz.get(t))?u:{}).streamType=g,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))})(a.details,t,i),c(),i5(t)!==tK.LIVE||Number.isFinite(t.duration)||(i.on(tP.Events.LEVEL_UPDATED,c),t0(t,"durationchange",()=>{Number.isFinite(t.duration)&&i.off(tP.Events.LEVELS_UPDATED,c)}))}),i.on(tP.Events.ERROR,(a,r)=>{var n,s;let o=aT(r,e);if(o.muxCode===tW.NETWORK_NOT_READY){let e=null!=(n=iz.get(t))?n:{},a=null!=(s=e.retryCount)?s:0;if(a<6){let n=0===a?5e3:6e4,s=new t$(`Retrying in ${n/1e3} seconds...`,o.code,o.fatal);Object.assign(s,o),ay(t,s);let l=setTimeout(()=>{e.retryCount=a+1,"manifestLoadError"===r.details&&r.url&&i.loadSource(r.url)},n);t.addEventListener("teardown",()=>clearTimeout(l),{once:!0});return}{e.retryCount=0;let i=new t$('Try again later or <a href="#" onclick="window.location.reload(); return false;" style="color: #4a90e2;">click here to retry</a>',o.code,o.fatal);Object.assign(i,o),ay(t,i);return}}ay(t,o)}),i.on(tP.Events.MANIFEST_LOADED,()=>{let e=iz.get(t);e&&e.error&&(e.error=null,e.retryCount=0,t.dispatchEvent(new Event("emptied")),t.dispatchEvent(new Event("loadstart")))}),t.addEventListener("error",a_),t0(t,"waiting",l),function(e,t){var i;if(!("videoTracks"in e))return;let a=new WeakMap;t.on(tP.Events.MANIFEST_PARSED,function(t,i){o();let r=e.addVideoTrack("main");for(let[e,t]of(r.selected=!0,i.levels.entries())){let i=r.addRendition(t.url[0],t.width,t.height,t.videoCodec,t.bitrate);a.set(t,`${e}`),i.id=`${e}`}}),t.on(tP.Events.AUDIO_TRACKS_UPDATED,function(t,i){for(let t of(s(),i.audioTracks)){let i=t.default?"main":"alternative",a=e.addAudioTrack(i,t.name,t.lang);a.id=`${t.id}`,t.default&&(a.enabled=!0)}});let r=()=>{var i;let a=+(null==(i=[...e.audioTracks].find(e=>e.enabled))?void 0:i.id),r=t.audioTracks.map(e=>e.id);a!=t.audioTrack&&r.includes(a)&&(t.audioTrack=a)};e.audioTracks.addEventListener("change",r),t.on(tP.Events.LEVELS_UPDATED,function(t,i){var r;let n=e.videoTracks[null!=(r=e.videoTracks.selectedIndex)?r:0];if(!n)return;let s=i.levels.map(e=>a.get(e));for(let t of e.videoRenditions)t.id&&!s.includes(t.id)&&n.removeRendition(t)});let n=e=>{let i=e.target.selectedIndex;i!=t.nextLevel&&(t.nextLevel=i)};null==(i=e.videoRenditions)||i.addEventListener("change",n);let s=()=>{for(let t of e.audioTracks)e.removeAudioTrack(t)},o=()=>{(()=>{for(let t of e.videoTracks)e.removeVideoTrack(t)})(),s()};t.once(tP.Events.DESTROYING,()=>{var t,i;o(),null==(t=e.audioTracks)||t.removeEventListener("change",r),null==(i=e.videoRenditions)||i.removeEventListener("change",n)})}(e,i),i.on(tP.Events.NON_NATIVE_TEXT_TRACKS_FOUND,(e,{tracks:a})=>{a.forEach(e=>{var a,r;let n=null!=(a=e.subtitleTrack)?a:e.closedCaptions,s=i.subtitleTracks.findIndex(({lang:t,name:i,type:a})=>t==(null==n?void 0:n.lang)&&i===e.label&&a.toLowerCase()===e.kind),o=(null!=(r=e._id)?r:e.default)?"default":`${e.kind}${s}`;il(t,e.kind,e.label,null==n?void 0:n.lang,o,e.default)})}),a=()=>{if(!i.subtitleTracks.length)return;let e=Array.from(t.textTracks).find(e=>e.id&&"showing"===e.mode&&["subtitles","captions"].includes(e.kind));if(!e)return;let a=i.subtitleTracks[i.subtitleTrack],r=a?a.default?"default":`${i.subtitleTracks[i.subtitleTrack].type.toLowerCase()}${i.subtitleTrack}`:void 0;if(i.subtitleTrack<0||(null==e?void 0:e.id)!==r){let t=i.subtitleTracks.findIndex(({lang:t,name:i,type:a,default:r})=>"default"===e.id&&r||t==e.language&&i===e.label&&a.toLowerCase()===e.kind);i.subtitleTrack=t}(null==e?void 0:e.id)===r&&e.cues&&Array.from(e.cues).forEach(t=>{e.addCue(t)})},t.textTracks.addEventListener("change",a),i.on(tP.Events.CUES_PARSED,(e,{track:i,cues:a})=>{let r=t.textTracks.getTrackById(i);if(!r)return;let n="disabled"===r.mode;n&&(r.mode="hidden"),a.forEach(e=>{var t;null!=(t=r.cues)&&t.getCueById(e.id)||r.addCue(e)}),n&&(r.mode="disabled")}),i.once(tP.Events.DESTROYING,()=>{t.textTracks.removeEventListener("change",a),t.querySelectorAll("track[data-removeondestroy]").forEach(e=>{e.remove()})}),r=()=>{Array.from(t.textTracks).forEach(e=>{var i,a;if(!["subtitles","caption"].includes(e.kind)&&("thumbnails"===e.label||"chapters"===e.kind)){if(!(null!=(i=e.cues)&&i.length)){let i="track";e.kind&&(i+=`[kind="${e.kind}"]`),e.label&&(i+=`[label="${e.label}"]`);let r=t.querySelector(i),n=null!=(a=null==r?void 0:r.getAttribute("src"))?a:"";null==r||r.removeAttribute("src"),setTimeout(()=>{null==r||r.setAttribute("src",n)},0)}"hidden"!==e.mode&&(e.mode="hidden")}})},i.once(tP.Events.MANIFEST_LOADED,r),i.once(tP.Events.MEDIA_ATTACHED,r),i.attachMedia(t)):console.error("It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.")}};function aE(e){var t;let i=e.target,a=null==(t=iz.get(i))?void 0:t.startTime;if(a&&function(e,t,i){t&&i>t&&(i=t);for(let t=0;t<e.length;t++)if(e.start(t)<=i&&e.end(t)>=i)return!0;return!1}(i.seekable,i.duration,a)){let e="auto"===i.preload;e&&(i.preload="none"),i.currentTime=a,e&&(i.preload="auto")}}async function af(e){if(!e.isTrusted)return;e.stopImmediatePropagation();let t=e.target;if(!(null!=t&&t.error))return;let{message:i,code:a}=t.error,r=new t$(i,a);if(t.src&&a===t$.MEDIA_ERR_SRC_NOT_SUPPORTED&&t.readyState===HTMLMediaElement.HAVE_NOTHING)return void setTimeout(()=>{var e;let i=null!=(e=i3(t))?e:t.error;(null==i?void 0:i.code)===t$.MEDIA_ERR_SRC_NOT_SUPPORTED&&ay(t,r)},500);if(t.src&&(a!==t$.MEDIA_ERR_DECODE||void 0!==a))try{let{status:e}=await fetch(t.src);r.data={response:{code:e}}}catch{}ay(t,r)}function ay(e,t){var i;t.fatal&&((null!=(i=iz.get(e))?i:{}).error=t,e.dispatchEvent(new CustomEvent("error",{detail:t})))}function a_(e){var t,i;if(!(e instanceof CustomEvent)||!(e.detail instanceof t$))return;let a=e.target,r=e.detail;r&&r.fatal&&((null!=(t=iz.get(a))?t:{}).error=r,null==(i=a.mux)||i.emit("error",{player_error_code:r.code,player_error_message:r.message,player_error_context:r.context}))}var aT=(e,t)=>{var i,a,r;e.fatal?console.error("getErrorFromHlsErrorData()",e):t.debug&&console.warn("getErrorFromHlsErrorData() (non-fatal)",e);let n={[tP.ErrorTypes.NETWORK_ERROR]:t$.MEDIA_ERR_NETWORK,[tP.ErrorTypes.MEDIA_ERROR]:t$.MEDIA_ERR_DECODE,[tP.ErrorTypes.KEY_SYSTEM_ERROR]:t$.MEDIA_ERR_ENCRYPTED},s,o=[tP.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,tP.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED].includes(e.details)?t$.MEDIA_ERR_NETWORK:n[e.type];if(o===t$.MEDIA_ERR_NETWORK&&e.response){let r=null!=(i=e.type===tP.ErrorTypes.KEY_SYSTEM_ERROR?tU.DRM:e.type===tP.ErrorTypes.NETWORK_ERROR?tU.VIDEO:void 0)?i:tU.VIDEO;s=null!=(a=iL(e.response,r,t,e.fatal))?a:new t$("",o,e.fatal)}else o===t$.MEDIA_ERR_ENCRYPTED?e.details===tP.ErrorDetails.KEY_SYSTEM_NO_CONFIGURED_LICENSE?((s=new t$(it("Attempting to play DRM-protected content without providing a DRM token."),t$.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=tU.DRM,s.muxCode=tW.ENCRYPTED_MISSING_TOKEN):e.details===tP.ErrorDetails.KEY_SYSTEM_NO_ACCESS?((s=new t$(it("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),t$.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=tU.DRM,s.muxCode=tW.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM):e.details===tP.ErrorDetails.KEY_SYSTEM_NO_SESSION?((s=new t$(it("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),t$.MEDIA_ERR_ENCRYPTED,!0)).errorCategory=tU.DRM,s.muxCode=tW.ENCRYPTED_GENERATE_REQUEST_FAILED):e.details===tP.ErrorDetails.KEY_SYSTEM_SESSION_UPDATE_FAILED?((s=new t$(it("Failed to update DRM license. This may be an issue with the player or your protected content."),t$.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=tU.DRM,s.muxCode=tW.ENCRYPTED_UPDATE_LICENSE_FAILED):e.details===tP.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED?((s=new t$(it("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),t$.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=tU.DRM,s.muxCode=tW.ENCRYPTED_UPDATE_SERVER_CERT_FAILED):e.details===tP.ErrorDetails.KEY_SYSTEM_STATUS_INTERNAL_ERROR?((s=new t$(it("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser."),t$.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=tU.DRM,s.muxCode=tW.ENCRYPTED_CDM_ERROR):e.details===tP.ErrorDetails.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED?((s=new t$(it("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen."),t$.MEDIA_ERR_ENCRYPTED,!1)).errorCategory=tU.DRM,s.muxCode=tW.ENCRYPTED_OUTPUT_RESTRICTED):((s=new t$(e.error.message,t$.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=tU.DRM,s.muxCode=tW.ENCRYPTED_ERROR):s=new t$("",o,e.fatal);return s.context||(s.context=`${e.url?`url: ${e.url}
`:""}${e.response&&(e.response.code||e.response.text)?`response: ${e.response.code}, ${e.response.text}
`:""}${e.reason?`failure reason: ${e.reason}
`:""}${e.level?`level: ${e.level}
`:""}${e.parent?`parent stream controller: ${e.parent}
`:""}${e.buffer?`buffer length: ${e.buffer}
`:""}${e.error?`error: ${e.error}
`:""}${e.event?`event: ${e.event}
`:""}${e.err?`error message: ${null==(r=e.err)?void 0:r.message}
`:""}`),s.data=e,s}}}]);