!function(t){function e(a){if(i[a])return i[a].exports;var s=i[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var i={};e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,a){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:a})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="https://mil-tokyo.github.io/webdnn",e(e.s=9)}({0:function(t,e){!function(t,e,i,a,s,r,n){t.GoogleAnalyticsObject=s,t[s]=t[s]||function(){(t[s].q=t[s].q||[]).push(arguments)},t[s].l=1*new Date,r=e.createElement(i),n=e.getElementsByTagName(i)[0],r.async=1,r.src="https://www.google-analytics.com/analytics.js",n.parentNode.insertBefore(r,n)}(window,document,"script",0,"ga"),ga("create","UA-100057100-1","auto"),ga("send","pageview")},6:function(t,e){},9:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),__webpack_require__(6),__webpack_require__(0);var DENSITY=5e3,MIN_VX=.1,MIN_VY=.1,MAX_VX=.3,MAX_VY=.3,PROXIMITY=100,DOT_COLOR="rgba(214, 230, 255, 1)",LINE_COLOR="rgba(214, 230, 255, 0.4)",LINE_WIDTH=.5,RADIUS_HALF=2,PI2=2*Math.PI,ParticleGround=function(){function t(t){var e=this;this.particles=[],this.container=t,this.canvas=document.createElement("canvas"),this.canvas.width=this.container.offsetWidth,this.canvas.height=this.container.offsetHeight,this.canvas.style.display="block",this.container.insertBefore(this.canvas,this.container.firstChild);var i=this.canvas.getContext("2d");if(!i)throw Error("Canvas Initialization Failed.");this.ctx=i,this.ctx.fillStyle=DOT_COLOR,this.ctx.strokeStyle=LINE_COLOR,this.ctx.lineWidth=LINE_WIDTH;for(var a=Math.round(this.canvas.width*this.canvas.height/DENSITY),s=0;s<a;s++)this.particles.push({x:Math.ceil(Math.random()*this.canvas.width),y:Math.ceil(Math.random()*this.canvas.height),vx:((MAX_VX-MIN_VX)*Math.random()+MIN_VX)*(Math.random()>=.5?1:-1),vy:((MAX_VY-MIN_VY)*Math.random()+MIN_VY)*(Math.random()>=.5?1:-1)});window.addEventListener("resize",function(){return e.resizeHandler()}),this.update()}return t.prototype.update=function(){var t=this;this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);for(var e=this.container.offsetWidth,i=this.container.offsetHeight,a=0;a<this.particles.length;a++){var s=this.particles[a];(s.x+s.vx>e||s.x+s.vx<0)&&(s.vx=-s.vx),(s.y+s.vy>i||s.y+s.vy<0)&&(s.vy=-s.vy),s.x+=s.vx,s.y+=s.vy}for(var a=0;a<this.particles.length;a++){var r=this.particles[a];this.ctx.beginPath(),this.ctx.arc(r.x,r.y,2,0,PI2,!0),this.ctx.closePath(),this.ctx.fill(),this.ctx.beginPath();for(var n=a;n<this.particles.length;n++){var o=this.particles[n],c=r.x-o.x,h=o.y-o.y;Math.sqrt(c*c+h*h)<100&&(this.ctx.moveTo(r.x,r.y),this.ctx.lineTo(o.x,o.y))}this.ctx.stroke(),this.ctx.closePath()}requestAnimationFrame(function(){return t.update()})},t.prototype.resizeHandler=function(){var t=this.canvas.width=this.container.offsetWidth,e=this.canvas.height=this.container.offsetHeight;this.ctx.fillStyle=DOT_COLOR,this.ctx.strokeStyle=LINE_COLOR,this.ctx.lineWidth=LINE_WIDTH;for(var i=this.particles.length-1;i>=0;i--)(this.particles[i].x>t||this.particles[i].y>e)&&this.particles.splice(i,1);for(var a=Math.round(this.canvas.width*this.canvas.height/DENSITY);this.particles.length<a;)this.particles.push({x:Math.ceil(Math.random()*this.canvas.width),y:Math.ceil(Math.random()*this.canvas.height),vx:((MAX_VX-MIN_VX)*Math.random()+MIN_VX)*(Math.random()>=.5?1:-1),vy:((MAX_VY-MIN_VY)*Math.random()+MIN_VY)*(Math.random()>=.5?1:-1)});this.particles.length>a&&this.particles.splice(a)},t}();window.onload=function(){for(var availability=({webgpu:"WebGPUComputeCommandEncoder"in window,webassembly:"Worker"in window,fallback:!0}),_i=0,_a=["webgpu","webassembly","fallback"];_i<_a.length;_i++)for(var backend=_a[_i],nodes=document.querySelectorAll(".Compatibility-ThisBrowserTable .Compatibility-"+backend),i=0;i<nodes.length;i++){var node=nodes[i];node.classList.remove("Compatibility-checking");var statusNode=node.querySelector(".Compatibility-Status");availability[backend]?(node.classList.add("Compatibility-supported"),node.classList.remove("Compatibility-not_supported"),statusNode&&(statusNode.textContent="Supported")):(node.classList.remove("Compatibility-supported"),node.classList.add("Compatibility-not_supported"),statusNode&&(statusNode.textContent="Not supported"))}var IS_ES2017=!0;try{eval("(() => { async function test(){return Promise.resolve());} })();")}catch(t){IS_ES2017=!1}for(var iframes=document.querySelectorAll("iframe"),i=0;i<iframes.length;i++){var iframe=iframes[i],baseUrl=iframe.dataset.src;if(!baseUrl)throw Error("baseUrl is not found");iframe.src=IS_ES2017?baseUrl:baseUrl.replace(".html",".es5.html")}var splash=document.getElementById("splash");if(!splash)throw Error("#splash is not found.");new ParticleGround(splash),"serviceWorker"in navigator&&navigator.serviceWorker.register("/webdnn/sw.js")}}});