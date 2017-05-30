!function(t){function e(i){if(a[i])return a[i].exports;var n=a[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var a={};e.m=t,e.c=a,e.i=function(t){return t},e.d=function(t,a,i){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="https://mil-tokyo.github.io/webdnn",e(e.s=10)}([function(t,e){!function(t,e,a,i,n,r,s){t.GoogleAnalyticsObject=n,t[n]=t[n]||function(){(t[n].q=t[n].q||[]).push(arguments)},t[n].l=1*new Date,r=e.createElement(a),s=e.getElementsByTagName(a)[0],r.async=1,r.src="https://www.google-analytics.com/analytics.js",s.parentNode.insertBefore(r,s)}(window,document,"script",0,"ga"),ga("create","UA-100057100-1","auto"),ga("send","pageview")},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(2),n=function(){function t(t){this.base=t;var e=t.querySelector(".InitializingView-Message");if(!e)throw Error(".InitializingView-Message not found");this.message=e;var a=t.querySelector(".ProgressBar-Inner");if(!a)throw Error(".ProgressBar-Inner not found");this.progressBar=new i.default(a)}return t.prototype.updateProgress=function(t){this.progressBar.update(t)},t.prototype.updateMessage=function(t){this.message.textContent=t},t.prototype.remove=function(){this.base.parentNode&&this.base.parentNode.removeChild(this.base)},t}();e.default=n},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t){this.bar=t}return t.prototype.update=function(t){this.bar.style.width=100*Math.min(Math.max(t,0),1)+"%"},t}();e.default=i},,,function(t,e,a){"use strict";function i(){if(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia?o=function(t){return navigator.mediaDevices.getUserMedia(t)}:"mozGetUserMedia"in navigator?o=function(t){return navigator.mozGetUserMedia(t)}:"webkitGetUserMedia"in navigator&&(o=function(t){return navigator.webkitGetUserMedia(t)}),"URL"in window?h=window.URL:"webkitURL"in window?h=window.webkitURL:"mozURL"in window?h=window.mozURL:"msURL"in window&&(h=window.msURL),navigator.userAgent.match(/Firefox\D+(\d+)/)&&parseInt(RegExp.$1,10)<21&&(o=null),"object"==typeof navigator.plugins&&"object"==typeof navigator.plugins[l]&&navigator.plugins[l].description&&"object"==typeof navigator.mimeTypes&&navigator.mimeTypes[u]&&navigator.mimeTypes[u].enabledPlugin)g=!0;else if("ActiveXObject"in window)try{var t=new window.ActiveXObject(c);t&&t.GetVariable("$version")&&(g=!0)}catch(t){}v=!0}function n(t){var e=new DataView(t);if(255!=e.getUint8(0)||216!=e.getUint8(1))return console.log("Not a valid JPEG file"),0;for(var a=2;a<t.byteLength;){if(255!=e.getUint8(a))return console.log("Not a valid marker at offset "+a+", found: "+e.getUint8(a)),0;if(225==e.getUint8(a+1)){a+=4;for(var i="",n=0;n<4;n++)i+=String.fromCharCode(e.getUint8(a+n));if("Exif"!=i)return console.log("Not valid EXIF data found"),0;a+=6;var r=null;if(18761==e.getUint16(a))r=!1;else{if(19789!=e.getUint16(a))return console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)"),0;r=!0}if(42!=e.getUint16(a+2,!r))return console.log("Not valid TIFF data! (no 0x002A)"),0;var s=e.getUint32(a+4,!r);if(s<8)return console.log("Not valid TIFF data! (First offset less than 8)",e.getUint32(a+4,!r)),0;for(var o=a+s,h=e.getUint16(o,!r),l=0;l<h;l++){var c=o+12*l+2;if(274==e.getUint16(c,!r)){var u=e.getUint16(c+2,!r),d=e.getUint32(c+4,!r);if(3!=u&&1!=d)return console.log("Invalid EXIF orientation value type ("+u+") or count ("+d+")"),0;var p=e.getUint16(c+8,!r);return p<1||p>8?(console.log("Invalid EXIF orientation value ("+p+")"),0):p}}}else a+=2+e.getUint16(a+2)}return 0}function r(t,e,a){var i=new Image;i.addEventListener("load",function(){var t=document.createElement("canvas"),n=t.getContext("2d");if(!n)throw Error("null");switch(e<5?(t.width=i.width,t.height=i.height):(t.width=i.height,t.height=i.width),e){case 2:n.transform(-1,0,0,1,i.width,0);break;case 3:n.transform(-1,0,0,-1,i.width,i.height);break;case 4:n.transform(1,0,0,-1,0,i.height);break;case 5:n.transform(0,1,1,0,0,0);break;case 6:n.transform(0,1,-1,0,i.height,0);break;case 7:n.transform(0,-1,-1,0,i.height,i.width);break;case 8:n.transform(0,-1,1,0,0,i.width)}n.drawImage(i,0,0),a.src=t.toDataURL()},!1),i.src=t}var s=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var a in e)e.hasOwnProperty(a)&&(t[a]=e[a])};return function(e,a){function i(){this.constructor=e}t(e,a),e.prototype=null===a?Object.create(a):(i.prototype=a.prototype,new i)}}();Object.defineProperty(e,"__esModule",{value:!0});var o,h,l="Shockwave Flash",c="ShockwaveFlash.ShockwaveFlash",u="application/x-shockwave-flash",d=function(t){function e(e){return t.call(this,e)||this}return s(e,t),e}(Error),p=function(t){function e(e){return t.call(this,e)||this}return s(e,t),e}(Error),f=location.protocol.match(/https/i)?"https":"http",m=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),v=!1,g=!1,w={width:0,height:0,dest_width:0,dest_height:0,image_format:"png",jpeg_quality:90,enable_flash:!0,force_flash:!1,flagHorizontalFlip:!1,fps:30,upload_name:"webcam",constraints:null,swfURL:"",noInterfaceFoundText:"No supported webcam interface found.",unfreeze_snap:!0,iosPlaceholderText:"Click here to open camera."},b=function(){function t(t){var e=this;this.previewCanvas=null,this.previewContext=null,this.flagUseUserMedia=!1,this.flagNewUser=!1,this.flagFlashMovieLoaded=!1,this.flagFlashLive=!1,this.video=null,this.container=null,this.peg=null,v||i(),this.params=Object.assign({},w,t),this.hooks={},this.flagUserMedia=!this.params.force_flash&&!!o&&!!window.URL,this.flagUserMedia&&(this.onBeforeUnload=function(){return e.reset()},window.addEventListener("beforeunload",this.onBeforeUnload))}return t.prototype.attach=function(t){var e=this;if("string"==typeof t&&(t=document.querySelector(t)),!t)return this.dispatch("error",new p("Could not locate DOM element to attach to."));this.container=t,this.container.innerHTML="";var a=document.createElement("div");if(t.appendChild(a),this.peg=a,this.params.width||(this.params.width=t.offsetWidth),this.params.height||(this.params.height=t.offsetHeight),!this.params.width||!this.params.height)return this.dispatch("error",new p("No width and/or height for webcam.  Please call set() first, or attach to a visible element."));this.params.dest_width||(this.params.dest_width=this.params.width),this.params.dest_height||(this.params.dest_height=this.params.height),"number"!=typeof this.params.fps&&(this.params.fps=30);var i=this.params.width/this.params.dest_width,s=this.params.height/this.params.dest_height;if(this.flagUserMedia){var l=document.createElement("video");l.setAttribute("autoplay","autoplay"),l.style.width=this.params.dest_width+"px",l.style.height=this.params.dest_height+"px",1==i&&1==s||(this.container.style.overflow="hidden",l.style.transformOrigin="0px 0px",l.style.transform="scaleX("+i+") scaleY("+s+")"),this.container.appendChild(l),this.video=l,o({audio:!1,video:!0}).then(function(t){l.addEventListener("loadedmetadata",function(){e.flagFlashMovieLoaded=!0,e.flagFlashLive=!0,e.dispatch("load"),e.dispatch("live"),e.flip()}),l.src=h.createObjectURL(t)}).catch(function(a){e.params.enable_flash&&g?setTimeout(function(){e.params.force_flash=!0,e.attach(t)},1):e.dispatch("error",a)})}else if(m){var c=document.createElement("div");c.id=this.container.id+"-ios_div",c.className="webcamjs-ios-placeholder",c.style.width=this.params.width+"px",c.style.height=this.params.height+"px",c.style.textAlign="center",c.style.display="table-cell",c.style.verticalAlign="middle",c.style.backgroundRepeat="no-repeat",c.style.backgroundSize="contain",c.style.backgroundPosition="center";var u=document.createElement("span");u.className="webcamjs-ios-text",u.innerHTML=this.params.iosPlaceholderText,c.appendChild(u);var d=document.createElement("img");d.id=this.container.id+"-ios_img",d.style.width=this.params.dest_width+"px",d.style.height=this.params.dest_height+"px",d.style.display="none",c.appendChild(d);var f=document.createElement("input");f.id=this.container.id+"-ios_input",f.setAttribute("type","file"),f.setAttribute("accept","image/*"),f.setAttribute("capture","camera"),f.addEventListener("change",function(t){if(f&&f.files&&f.files.length>0&&0==f.files[0].type.indexOf("image/")){var a=h.createObjectURL(f.files[0]),i=new Image;i.addEventListener("load",function(){var t=document.createElement("canvas");t.width=e.params.dest_width,t.height=e.params.dest_height;var a=t.getContext("2d");if(!a)throw Error("null");var n=Math.min(i.width/e.params.dest_width,i.height/e.params.dest_height),r=e.params.dest_width*n,s=e.params.dest_height*n,o=(i.width-r)/2,h=(i.height-s)/2;a.drawImage(i,o,h,r,s,0,0,e.params.dest_width,e.params.dest_height);var l=t.toDataURL();d.src=l,c.style.backgroundImage="url('"+l+"')"},!1);var s=new FileReader;s.addEventListener("load",function(t){var e=n(s.result);e>1?r(a,e,i):i.src=a},!1);var o=new XMLHttpRequest;o.open("GET",a,!0),o.responseType="blob",o.onload=function(){200!=o.status&&0!==o.status||s.readAsArrayBuffer(o.response)},o.send()}},!1),f.style.display="none",t.appendChild(f),c.addEventListener("click",function(){f.style.display="block",f.focus(),f.click(),f.style.display="none"},!1),t.appendChild(c),this.flagFlashMovieLoaded=!0,this.flagFlashLive=!0}else if(this.params.enable_flash&&g){window.Webcam=this;var v=document.createElement("div");v.innerHTML=this.getSWFHTML(),t.appendChild(v)}else this.dispatch("error",new p(this.params.noInterfaceFoundText));t.style.width=this.params.width+"px",t.style.height=this.params.height+"px"},t.prototype.reset=function(){if(this.flagPreviewIsActive&&this.unfreeze(),this.unflip(),this.flagUseUserMedia&&(this.video=null),this.flagUseUserMedia&&this.flagFlashMovieLoaded&&!m){var t=this.getMovie();t&&"_releaseCamera"in t&&t._releaseCamera()}this.container&&(this.container.innerHTML="",this.container=null),this.flagFlashMovieLoaded=!1,this.flagFlashLive=!1},t.prototype.on=function(t,e){t in this.hooks||(this.hooks[t]=[]),this.hooks[t].push(e)},t.prototype.dispatch=function(t){for(var e=[],a=1;a<arguments.length;a++)e[a-1]=arguments[a];if(!(t in this.hooks)){if("error"!==t)return;throw e[0]}for(var i=this.hooks[t],n=0;n<i.length;n++)i[n].apply(this,e)},t.prototype.getSWFHTML=function(){var t=this,e="";if(!g)return this.dispatch("error",new d("Adobe Flash Player not found. Please install from get.adobe.com/flashplayer and try again.")),"";window.localStorage&&localStorage.getItem("visited")&&(this.flagNewUser=!0,localStorage.setItem("visited","1"));var a=Object.keys(this.params).map(function(e){return e+"="+encodeURIComponent(t.params[e])}).join("&");return e+='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" type="application/x-shockwave-flash" codebase="'+f+'://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="'+this.params.width+'" height="'+this.params.height+'" id="webcam_movie_obj" align="middle"><param name="wmode" value="opaque" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="'+this.params.swfURL+'" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="'+a+'" /><embed id="webcam_movie_embed" src="'+this.params.swfURL+'" wmode="opaque" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="'+this.params.width+'" height="'+this.params.height+'"name="webcam_movie_embed" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"flashvars="'+a+'"></embed></object>'},t.prototype.getMovie=function(){if(!this.flagFlashMovieLoaded)return this.dispatch("error",new d("Flash Movie is not loaded yet"));var t;return t=document.getElementById("webcam_movie_obj"),t&&t._snap||(t=document.getElementById("webcam_movie_embed")),t||this.dispatch("error",new d("Cannot locate Flash movie in DOM")),t},t.prototype.freeze=function(){var t=this;this.flagPreviewIsActive&&this.unfreeze(),this.unflip();var e=this.params.dest_width,a=this.params.dest_height;this.previewCanvas=document.createElement("canvas"),this.previewCanvas.width=e,this.previewCanvas.height=a,this.previewContext=this.previewCanvas.getContext("2d");var i=this.params.width/this.params.dest_width,n=this.params.height/this.params.dest_height;1==i&&1==n||(this.previewCanvas.style.transformOrigin="0px 0px",this.previewCanvas.style.transform="scaleX("+i+") scaleY("+n+")"),this.snap(function(){t.previewCanvas&&t.container&&(t.previewCanvas.style.position="relative",t.previewCanvas.style.left=t.container.scrollLeft+"px",t.previewCanvas.style.top=t.container.scrollTop+"px",t.container.insertBefore(t.previewCanvas,t.peg),t.container.style.overflow="hidden",t.flagPreviewIsActive=!0)},this.previewCanvas)},t.prototype.unfreeze=function(){this.flagPreviewIsActive&&(this.container&&this.previewCanvas&&this.container.removeChild(this.previewCanvas),this.previewContext=null,this.previewCanvas=null,this.flagPreviewIsActive=!1,this.flip())},t.prototype.flip=function(){this.params.flagHorizontalFlip&&this.container&&(this.container.style.transform="scaleX(-1)")},t.prototype.unflip=function(){this.params.flagHorizontalFlip&&this.container&&(this.container.style.transform="scaleX(1)")},t.prototype.savePreview=function(t,e){if(void 0===t&&(t=null),void 0===e&&(e=null),this.previewCanvas){if(!t)return this.dispatch("error",new p("Please provide a callback function or canvas to snap()"));if(e){var a=e.getContext("2d");a&&a.drawImage(this.previewCanvas,0,0)}t(e?null:this.previewCanvas.toDataURL("image/png",this.params.jpeg_quality/100),this.previewCanvas,this.previewContext),this.params.unfreeze_snap&&this.unfreeze()}},t.prototype.snap=function(t,e){var a=this;if(void 0===t&&(t=null),void 0===e&&(e=null),!this.flagFlashMovieLoaded)return this.dispatch("error",new p("Webcam is not loaded yet"));if(!t)return this.dispatch("error",new p("Please provide a callback function or canvas to snap()"));if(this.flagPreviewIsActive)return this.savePreview(t,e);var i=document.createElement("canvas");i.width=this.params.dest_width,i.height=this.params.dest_height;var n=i.getContext("2d");if(!n)throw Error("Context2D Initialization Failed.");this.params.flagHorizontalFlip&&(n.translate(this.params.dest_width,0),n.scale(-1,1));var r,s=function(){if(r&&r.src&&r.width&&r.height&&n&&n.drawImage(r,0,0,a.params.dest_width,a.params.dest_height),e){var s=e.getContext("2d");if(!s)throw Error("null");s.drawImage(i,0,0)}t(e?null:i.toDataURL("image/png",a.params.jpeg_quality/100),i,n)};if(o){if(!this.video)throw Error("video is null");n.drawImage(this.video,0,0,this.params.dest_width,this.params.dest_height),s()}else if(m){if(!this.container)return;var h=document.getElementById(this.container.id+"-ios_div"),l=document.getElementById(this.container.id+"-ios_input");if(r=document.getElementById(this.container.id+"-ios_img"),!h||!r||!l)throw Error("null");var c=function(){s.call(r),r.removeEventListener("load",c),h.style.backgroundImage="none",r.removeAttribute("src"),l.value=""};l.value?c():(r.addEventListener("load",c),l.style.display="block",l.focus(),l.click(),l.style.display="none")}else r=new Image,r.onload=s,r.src="data:image/png;base64,"+this.getMovie()._snap();return null},t.prototype.flashNotify=function(t,e){switch(t){case"flashLoadComplete":this.flagFlashMovieLoaded=!0,this.dispatch("load");break;case"cameraLive":this.flagFlashLive=!0,this.dispatch("live");break;case"error":this.dispatch("error",new d(e))}},t}();e.default=b},,function(t,e){},,,function(t,e,a){"use strict";var i=this&&this.__awaiter||function(t,e,a,i){return new(a||(a=Promise))(function(n,r){function s(t){try{h(i.next(t))}catch(t){r(t)}}function o(t){try{h(i.throw(t))}catch(t){r(t)}}function h(t){t.done?n(t.value):new a(function(e){e(t.value)}).then(s,o)}h((i=i.apply(t,e||[])).next())})},n=this&&this.__generator||function(t,e){function a(t){return function(e){return i([t,e])}}function i(a){if(n)throw new TypeError("Generator is already executing.");for(;h;)try{if(n=1,r&&(s=r[2&a[0]?"return":a[0]?"throw":"next"])&&!(s=s.call(r,a[1])).done)return s;switch(r=0,s&&(a=[0,s.value]),a[0]){case 0:case 1:s=a;break;case 4:return h.label++,{value:a[1],done:!1};case 5:h.label++,r=a[1],a=[0];continue;case 7:a=h.ops.pop(),h.trys.pop();continue;default:if(s=h.trys,!(s=s.length>0&&s[s.length-1])&&(6===a[0]||2===a[0])){h=0;continue}if(3===a[0]&&(!s||a[1]>s[0]&&a[1]<s[3])){h.label=a[1];break}if(6===a[0]&&h.label<s[1]){h.label=s[1],s=a;break}if(s&&h.label<s[2]){h.label=s[2],h.ops.push(a);break}s[2]&&h.ops.pop(),h.trys.pop();continue}a=e.call(t,h)}catch(t){a=[6,t],r=0}finally{n=s=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}var n,r,s,o,h={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o};Object.defineProperty(e,"__esModule",{value:!0}),a(7),a(0);var r,s=a(1),o=a(5);!function(t){t[t.INITIALIZING=0]="INITIALIZING",t[t.STAND_BY=1]="STAND_BY",t[t.RUNNING=2]="RUNNING",t[t.ERROR=3]="ERROR"}(r||(r={}));var h=new(function(){function t(){this.state=r.INITIALIZING,this.lastStatus=""}return t.prototype.initialize=function(){return i(this,void 0,void 0,function(){var t,e,a,a,i,r,o,l,c,u,d,p,f,m,v,g=this;return n(this,function(n){switch(n.label){case 0:if(!(t=document.getElementById("backend")))throw Error("#backend is not found.");if(this.backendSelect=t,e=WebDNN.getBackendAvailability(),e.status.webgpu)switch(this.lastStatus=localStorage.getItem("webgpu_last_status")||"none",this.lastStatus){case"none":break;case"running":case"crashed":e.status.webgpu=!1,localStorage.setItem("webgpu_last_status","crashed"),console.warn("This browser supports WebGPU. However, it was crashed at last execution with WebGPU. Therefore, WebDNN disabled WebGPU backend temporally."),localStorage.getItem("flag_webgpu_disabled_alert")||(alert("This browser supports WebGPU. However, it was crashed at last execution with WebGPU. \n\nTherefore, WebDNN disabled WebGPU backend temporally."),localStorage.setItem("flag_webgpu_disabled_alert","1"))}if(e.status.webgpu||(a=document.querySelector('option[value="webgpu"]'),a&&(a.disabled=!0),t.value="webassembly"),!e.status.webassembly)throw a=document.querySelector('option[value="webassembly"]'),a&&(a.disabled=!0),Error("This browser does not support either WebGPU nor WebAssembly/asm.js backends");if(t.addEventListener("change",function(){return g.onBackendSelectChange()}),!(i=document.getElementById("runButton")))throw Error("#runButton is not found.");if(this.runButton=i,this.runButton.addEventListener("click",function(){return h.onPlayButtonClick()}),r=document.getElementById("launchView"),r&&r.parentNode&&(r.parentNode.removeChild(r),r=null),!(o=document.getElementById("dataSource")))throw Error("#dataSource is not found");if(this.dataSourceSelect=o,o.addEventListener("change",function(){return g.onDataSourceSelectChange()}),!(l=document.getElementById("cameraContainer")))throw Error("#cameraContainer is not found");if(this.cameraContainer=l,!(c=document.getElementById("sampleContainer")))throw Error("#sampleContainer is not found");if(this.sampleContainer=c,!(u=document.getElementById("initializingView")))throw Error("#initializingView is not found");return d=new s.default(u),d.updateMessage("Load model data"),this.runners={},[4,this.initBackendAsync(this.backendSelect.value,function(t,e){return d.updateProgress(t/e)})];case 1:if(n.sent(),!(p=document.getElementById("inputCanvas")))throw Error("#inputCanvas is not found");if(this.inputCanvas=p,this.w=p.width,this.h=p.height,!(f=p.getContext("2d")))throw Error("Canvas initialization failed");if(this.inputCtx=f,!(m=document.getElementById("outputCanvas")))throw Error("#outputCanvas is not found");if(!(v=m.getContext("2d")))throw Error("Canvas initialization failed");return this.outputCtx=v,[4,this.updateDataSource()];case 2:return n.sent(),d.remove(),[2]}})})},t.prototype.onDataSourceSelectChange=function(){this.updateDataSource()},t.prototype.onBackendSelectChange=function(){this.initBackendAsync(this.backendSelect.value)},t.prototype.onPlayButtonClick=function(){return i(this,void 0,void 0,function(){var t;return n(this,function(e){switch(e.label){case 0:switch(t=this.state){case r.STAND_BY:return[3,1];case r.RUNNING:return[3,3]}return[3,5];case 1:return[4,this.setState(r.RUNNING)];case 2:return e.sent(),[3,6];case 3:return[4,this.setState(r.STAND_BY)];case 4:return e.sent(),[3,6];case 5:return[3,6];case 6:return[2]}})})},t.prototype.initBackendAsync=function(t,e){return i(this,void 0,void 0,function(){var a,i;return n(this,function(n){switch(n.label){case 0:return[4,this.setState(r.INITIALIZING)];case 1:return n.sent(),[4,WebDNN.init([t])];case 2:return n.sent(),t in this.runners?(this.runner=this.runners[t],[3,5]):[3,3];case 3:return this.runner=this.runners[t]=WebDNN.gpu.createDescriptorRunner(),[4,this.runner.load("./models/neural_style_transfer",e)];case 4:n.sent(),n.label=5;case 5:return a=this,[4,this.runner.getInputViews()];case 6:return a.inputView=n.sent()[0],i=this,[4,this.runner.getOutputViews()];case 7:return i.outputView=n.sent()[0],[4,this.setState(r.STAND_BY)];case 8:return n.sent(),[2]}})})},t.prototype.updateDataSource=function(){return i(this,void 0,void 0,function(){var t;return n(this,function(e){switch(e.label){case 0:switch(this.dataSource=this.dataSourceSelect.value,this.sampleContainer.style.display="sample"==this.dataSource?"block":"none",this.cameraContainer.style.display="video"==this.dataSource||"photo"==this.dataSource?"block":"none",t=this.dataSource){case"photo":case"video":return[3,1];case"sample":return[3,5]}return[3,9];case 1:return[4,this.setState(r.INITIALIZING)];case 2:return e.sent(),[4,this.initializeCamera()];case 3:return e.sent(),[4,this.setState(r.STAND_BY)];case 4:return e.sent(),[3,9];case 5:return[4,this.setState(r.INITIALIZING)];case 6:return e.sent(),this.finalizeCamera(),[4,this.loadSampleImageToPreview()];case 7:return e.sent(),[4,this.setState(r.STAND_BY)];case 8:return e.sent(),[3,9];case 9:return[2]}})})},t.prototype.initializeCamera=function(){var t=this;return new Promise(function(e){t.webcam=new o.default({width:192,height:144,fps:60,flip_horiz:!1,image_format:"png",force_flash:!1,swfURL:"/webdnn/webcam.swf",unfreeze_snap:"video"==t.dataSource}),t.webcam.on("live",e),t.webcam.on("error",function(e){console.error(e),t.setMessage(e),t.setState(r.ERROR)}),t.webcam.attach("#cameraContainer")})},t.prototype.finalizeCamera=function(){this.webcam&&this.webcam.reset()},t.prototype.loadSampleImageToPreview=function(){return i(this,void 0,void 0,function(){var t,e,a;return n(this,function(i){switch(i.label){case 0:return t=Math.floor(6*Math.random()),e="./assets/images/"+t+".png",a=new Image,[4,new Promise(function(t){a.onload=function(){return t(a)},a.src=e})];case 1:return i.sent(),this.inputCtx.drawImage(a,0,0,a.width,a.height,0,0,this.inputCtx.canvas.width,this.inputCtx.canvas.height),[2]}})})},t.prototype.setState=function(t){return i(this,void 0,void 0,function(){var e,a=this;return n(this,function(i){switch(i.label){case 0:switch(this.state=t,e=t){case r.INITIALIZING:return[3,1];case r.STAND_BY:return[3,2];case r.RUNNING:return[3,3];case r.ERROR:return[3,5]}return[3,6];case 1:return this.setMessage("Initializing..."),this.runButton.textContent="Initializing...",this.runButton.disabled=!0,[3,6];case 2:return this.setMessage("Ready(backend: "+this.runner.backend+")"),this.runButton.textContent="Run",this.runButton.disabled=!1,[3,6];case 3:return this.setMessage("Processing..."),this.runButton.disabled=!0,[4,this.transfer()];case 4:return i.sent(),"video"==this.dataSource?(this.setMessage("Running"),this.runButton.textContent="Stop",this.runButton.disabled=!1):setTimeout(function(){return a.setState(r.STAND_BY)}),[3,6];case 5:return this.runButton.textContent="Error",this.runButton.disabled=!0,[3,6];case 6:return[2]}})})},t.prototype.transfer=function(){return i(this,void 0,void 0,function(){var t=this;return n(this,function(e){switch(e.label){case 0:return this.state!==r.RUNNING?[2]:[4,this.getImageData()];case 1:return e.sent(),"webgpu"===this.runner.backend&&"none"===this.lastStatus&&(localStorage.setItem("webgpu_last_status","running"),this.lastStatus="running"),[4,this.runner.run()];case 2:return e.sent(),"webgpu"===this.runner.backend&&"running"===this.lastStatus&&(localStorage.setItem("webgpu_last_status","completed"),this.lastStatus="completed"),this.setImageData(),"video"==this.dataSource&&requestAnimationFrame(function(){return t.transfer()}),[2]}})})},t.prototype.getImageData=function(){return i(this,void 0,void 0,function(){var t,e,a,i,r,s=this;return n(this,function(n){switch(n.label){case 0:return t=this.w,e=this.h,"photo"!=this.dataSource?[3,2]:[4,new Promise(function(t){s.webcam.freeze(),s.webcam.snap(t,s.inputCanvas)})];case 1:return n.sent(),[3,4];case 2:return"video"!=this.dataSource?[3,4]:[4,new Promise(function(t){s.webcam.snap(t,s.inputCanvas)})];case 3:n.sent(),n.label=4;case 4:for(a=this.inputCtx.getImageData(0,0,t,e).data,i=0;i<e;i++)for(r=0;r<t;r++)this.inputView[3*(i*t+r)]=a[4*(i*t+r)],this.inputView[3*(i*t+r)+1]=a[4*(i*t+r)+1],this.inputView[3*(i*t+r)+2]=a[4*(i*t+r)+2];return[2]}})})},t.prototype.setImageData=function(){for(var t=this.w,e=this.h,a=new ImageData(t,e),i=0;i<e;i++)for(var n=0;n<t;n++)a.data[4*(i*t+n)]=this.outputView[3*(i*t+n)],a.data[4*(i*t+n)+1]=this.outputView[3*(i*t+n)+1],a.data[4*(i*t+n)+2]=this.outputView[3*(i*t+n)+2],a.data[4*(i*t+n)+3]=255;this.outputCtx.putImageData(a,0,0)},t.prototype.setMessage=function(t){var e=document.getElementById("message");e&&(e.textContent=t)},t}());window.onload=function(){WebDNN.registerTransformDelegate(function(t){var e=t.match(/([^\/]+)(?:\?.*)?$/);return e?"https://mil-tokyo.github.io/webdnn-data/models/neural_style_transfer/"+e[1]+"?raw=true":t});var t=document.getElementById("runAppButton");if(!t)throw Error("#runAppButton is not found");t.addEventListener("click",function(){return h.initialize()}),"?run=1"==location.search&&h.initialize()}}]);