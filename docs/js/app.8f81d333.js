(function(t){function i(i){for(var n,r,a=i[0],h=i[1],l=i[2],u=0,g=[];u<a.length;u++)r=a[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&g.push(o[r][0]),o[r]=0;for(n in h)Object.prototype.hasOwnProperty.call(h,n)&&(t[n]=h[n]);c&&c(i);while(g.length)g.shift()();return s.push.apply(s,l||[]),e()}function e(){for(var t,i=0;i<s.length;i++){for(var e=s[i],n=!0,a=1;a<e.length;a++){var h=e[a];0!==o[h]&&(n=!1)}n&&(s.splice(i--,1),t=r(r.s=e[0]))}return t}var n={},o={app:0},s=[];function r(i){if(n[i])return n[i].exports;var e=n[i]={i:i,l:!1,exports:{}};return t[i].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=n,r.d=function(t,i,e){r.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,i){if(1&i&&(t=r(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var n in t)r.d(e,n,function(i){return t[i]}.bind(null,n));return e},r.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(i,"a",i),i},r.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},r.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],h=a.push.bind(a);a.push=i,a=a.slice();for(var l=0;l<a.length;l++)i(a[l]);var c=h;s.push(["1430","chunk-vendors"]),e()})({"034f":function(t,i,e){"use strict";var n=e("3ebb"),o=e.n(n);o.a},1430:function(t,i,e){"use strict";e.r(i);e("cadf"),e("551c"),e("f751"),e("097d");var n,o,s,r,a=e("2b0e"),h=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{class:{"has-mouse":t.hasMouse},attrs:{id:"app"},on:{touchstart:function(i){t.hasMouse=!1}}},[e("Ribbon",{attrs:{text:"Fork me on GitHub",url:"https://github.com/ts1/flipbook-vue"}}),e("Flipbook",{ref:"flipbook",staticClass:"flipbook",attrs:{pages:t.pages,pagesHiRes:t.pagesHiRes,startPage:t.pageNum},on:{"flip-left-start":t.onFlipLeftStart,"flip-left-end":t.onFlipLeftEnd,"flip-right-start":t.onFlipRightStart,"flip-right-end":t.onFlipRightEnd,"zoom-start":t.onZoomStart,"zoom-end":t.onZoomEnd},scopedSlots:t._u([{key:"default",fn:function(i){return[e("div",{staticClass:"action-bar"},[e("left-icon",{staticClass:"btn left",class:{disabled:!i.canFlipLeft},on:{click:i.flipLeft}}),e("plus-icon",{staticClass:"btn plus",class:{disabled:!i.canZoomIn},on:{click:i.zoomIn}}),e("span",{staticClass:"page-num"},[t._v(" Page "+t._s(i.page)+" of "+t._s(i.numPages)+" ")]),e("minus-icon",{staticClass:"btn minus",class:{disabled:!i.canZoomOut},on:{click:i.zoomOut}}),e("right-icon",{staticClass:"btn right",class:{disabled:!i.canFlipRight},on:{click:i.flipRight}})],1)]}}])}),t._m(0)],1)},l=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("p",{staticClass:"credit"},[t._v(" Photos from "),e("a",{attrs:{href:"https://unsplash.com/",target:"_blank"}},[t._v("Unsplash")]),t._v(". ")])}],c=(e("d48d"),e("a5bc")),u=e("71f6"),g=e("ef7a"),f=e("cd27"),p=e("55fe"),d=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[t._t("default",null,null,{canFlipLeft:t.canFlipLeft,canFlipRight:t.canFlipRight,canZoomIn:t.canZoomIn,canZoomOut:t.canZoomOut,page:t.page,numPages:t.numPages,flipLeft:t.flipLeft,flipRight:t.flipRight,zoomIn:t.zoomIn,zoomOut:t.zoomOut}),e("div",{ref:"viewport",staticClass:"viewport",class:{zoom:t.zooming||t.zoom>1,"drag-to-scroll":t.dragToScroll},style:{cursor:"grabbing"==t.cursor?"grabbing":"auto"},on:{touchmove:t.onTouchMove,pointermove:t.onPointerMove,mousemove:t.onMouseMove,touchend:t.onTouchEnd,touchcancel:t.onTouchEnd,pointerup:t.onPointerUp,pointercancel:t.onPointerUp,mouseup:t.onMouseUp,wheel:t.onWheel}},[e("div",{staticClass:"container",style:{transform:"scale("+t.zoom+")"}},[e("div",{staticClass:"click-to-flip left",style:{cursor:t.canFlipLeft?"pointer":"auto"},on:{click:t.flipLeft}}),e("div",{staticClass:"click-to-flip right",style:{cursor:t.canFlipRight?"pointer":"auto"},on:{click:t.flipRight}}),e("div",{style:{transform:"translateX("+t.centerOffsetSmoothed+"px)"}},[t.showLeftPage?e("img",{staticClass:"page fixed",style:{width:t.pageWidth+"px",height:t.pageHeight+"px",left:t.xMargin+"px",top:t.yMargin+"px"},attrs:{src:t.pageUrlLoading(t.leftPage,!0)},on:{load:function(i){return t.didLoadImage(i)}}}):t._e(),t.showRightPage?e("img",{staticClass:"page fixed",style:{width:t.pageWidth+"px",height:t.pageHeight+"px",left:t.viewWidth/2+"px",top:t.yMargin+"px"},attrs:{src:t.pageUrlLoading(t.rightPage,!0)},on:{load:function(i){return t.didLoadImage(i)}}}):t._e(),e("div",{style:{opacity:t.flip.opacity}},t._l(t.polygonArray,(function(i){var n=i[0],o=i[1],s=i[2],r=i[3],a=i[4],h=i[5];return e("div",{key:n,staticClass:"polygon",class:{blank:!o},style:{backgroundImage:o&&"url("+t.loadImage(o)+")",backgroundSize:t.polygonBgSize,backgroundPosition:r,width:t.polygonWidth,height:t.polygonHeight,transform:a,zIndex:h}},[e("div",{directives:[{name:"show",rawName:"v-show",value:s.length,expression:"lighting.length"}],staticClass:"lighting",style:{backgroundImage:s}})])})),0),e("div",{staticClass:"bounding-box",style:{left:t.boundingLeft+"px",top:t.yMargin+"px",width:t.boundingRight-t.boundingLeft+"px",height:t.pageHeight+"px",cursor:t.cursor},on:{touchstart:t.onTouchStart,pointerdown:t.onPointerDown,mousedown:t.onMouseDown}})])])])],2)},m=[],v=(e("6b54"),e("c5f6"),e("75fc")),b=e("d225"),w=e("b0b4"),y=e("6e37"),P=function(){function t(i){Object(b["a"])(this,t),i?i.m?this.m=Object(v["a"])(i.m):this.m=Object(v["a"])(i):this.m=Object(y["a"])()}return Object(w["a"])(t,[{key:"clone",value:function(){return new t(this)}},{key:"multiply",value:function(t){return this.m=Object(y["b"])(this.m,t)}},{key:"perspective",value:function(t){return this.multiply(Object(y["c"])(t))}},{key:"transformX",value:function(t){return(t*this.m[0]+this.m[12])/(t*this.m[3]+this.m[15])}},{key:"translate",value:function(t,i){return this.multiply(Object(y["f"])(t,i))}},{key:"translate3d",value:function(t,i,e){return this.multiply(Object(y["g"])(t,i,e))}},{key:"rotateY",value:function(t){return this.multiply(Object(y["d"])(t))}},{key:"toString",value:function(){return Object(y["e"])(this.m)}}]),t}(),M=function(){function t(i){Object(b["a"])(this,t),this.loading=i,this.images={}}return Object(w["a"])(t,[{key:"load",value:function(t){var i,e;return i=this.images[t],i?i.loaded?t:this.loading:(i={loaded:!1},e=new Image,e.onload=function(){return i.loaded=!0},e.src=t,a["a"].set(this.images,t,i),this.loading)}},{key:"isLoaded",value:function(t){var i;return null!=(i=this.images[t])?i.loaded:void 0}}]),t}(),I=e("b807"),x=e.n(I);o=function(t){return Math.pow(t,2)},r=function(t){return 1-o(1-t)},s=function(t){return t<.5?o(2*t)/2:.5+r(2*(t-.5))/2},n=/Trident/.test(navigator.userAgent);var z={props:{pages:{type:Array,required:!0},pagesHiRes:{type:Array,default:function(){return[]}},flipDuration:{type:Number,default:1e3},zoomDuration:{type:Number,default:500},zooms:{type:Array,default:function(){return[1,2,4]}},perspective:{type:Number,default:2400},nPolygons:{type:Number,default:10},ambient:{type:Number,default:.4},gloss:{type:Number,default:.6},swipeMin:{type:Number,default:3},singlePage:{type:Boolean,default:!1},forwardDirection:{validator:function(t){return"right"===t||"left"===t},default:"right"},centering:{type:Boolean,default:!0},startPage:{type:Number,default:null},loadingImage:{type:String,default:x.a}},data:function(){return{viewWidth:0,viewHeight:0,imageWidth:null,imageHeight:null,displayedPages:1,nImageLoad:0,nImageLoadTrigger:0,imageLoadCallback:null,currentPage:0,firstPage:0,secondPage:1,zoomIndex:0,zoom:1,zooming:!1,touchStartX:null,touchStartY:null,maxMove:0,activeCursor:null,hasTouchEvents:!1,hasPointerEvents:!1,minX:Infinity,maxX:-Infinity,preloadedImages:{},flip:{progress:0,direction:null,frontImage:null,backImage:null,auto:!1,opacity:1},currentCenterOffset:null,animatingCenter:!1,startScrollLeft:0,startScrollTop:0,scrollLeft:0,scrollTop:0,imageLoader:null}},computed:{canFlipLeft:function(){return"left"===this.forwardDirection?this.canGoForward:this.canGoBack},canFlipRight:function(){return"right"===this.forwardDirection?this.canGoForward:this.canGoBack},canZoomIn:function(){return!this.zooming&&this.zoomIndex<this.zooms_.length-1},canZoomOut:function(){return!this.zooming&&this.zoomIndex>0},numPages:function(){return null===this.pages[0]?this.pages.length-1:this.pages.length},page:function(){return null!==this.pages[0]?this.currentPage+1:Math.max(1,this.currentPage)},zooms_:function(){return this.zooms||[1]},canGoForward:function(){return!this.flip.direction&&this.currentPage<this.pages.length-this.displayedPages},canGoBack:function(){return!this.flip.direction&&this.currentPage>=this.displayedPages&&!(1===this.displayedPages&&!this.pageUrl(this.firstPage-1))},leftPage:function(){return"right"===this.forwardDirection||1===this.displayedPages?this.firstPage:this.secondPage},rightPage:function(){return"left"===this.forwardDirection?this.firstPage:this.secondPage},showLeftPage:function(){return this.pageUrl(this.leftPage)},showRightPage:function(){return this.pageUrl(this.rightPage)&&2===this.displayedPages},cursor:function(){return this.activeCursor?this.activeCursor:n?"auto":this.canZoomIn?"zoom-in":this.canZoomOut?"zoom-out":"grab"},pageScale:function(){var t,i,e,n;return i=this.viewWidth/this.displayedPages,e=i/this.imageWidth,n=this.viewHeight/this.imageHeight,t=e<n?e:n,t<1?t:1},pageWidth:function(){return Math.round(this.imageWidth*this.pageScale)},pageHeight:function(){return Math.round(this.imageHeight*this.pageScale)},xMargin:function(){return(this.viewWidth-this.pageWidth*this.displayedPages)/2},yMargin:function(){return(this.viewHeight-this.pageHeight)/2},polygonWidth:function(){var t;return t=this.pageWidth/this.nPolygons,t=Math.ceil(t+1/this.zoom),t+"px"},polygonHeight:function(){return this.pageHeight+"px"},polygonBgSize:function(){return"".concat(this.pageWidth,"px ").concat(this.pageHeight,"px")},polygonArray:function(){return this.makePolygonArray("front").concat(this.makePolygonArray("back"))},boundingLeft:function(){var t;return 1===this.displayedPages?this.xMargin:(t=this.pageUrl(this.leftPage)?this.xMargin:this.viewWidth/2,t<this.minX?t:this.minX)},boundingRight:function(){var t;return 1===this.displayedPages?this.viewWidth-this.xMargin:(t=this.pageUrl(this.rightPage)?this.viewWidth-this.xMargin:this.viewWidth/2,t>this.maxX?t:this.maxX)},centerOffset:function(){var t;return t=this.centering?Math.round(this.viewWidth/2-(this.boundingLeft+this.boundingRight)/2):0,null===this.currentCenterOffset&&null!==this.imageWidth&&(this.currentCenterOffset=t),t},centerOffsetSmoothed:function(){return Math.round(this.currentCenterOffset)},dragToScroll:function(){return!this.hasTouchEvents},scrollLeftMin:function(){var t;return t=(this.boundingRight-this.boundingLeft)*this.zoom,t<this.viewWidth?(this.boundingLeft+this.centerOffsetSmoothed)*this.zoom-(this.viewWidth-t)/2:(this.boundingLeft+this.centerOffsetSmoothed)*this.zoom},scrollLeftMax:function(){var t;return t=(this.boundingRight-this.boundingLeft)*this.zoom,t<this.viewWidth?(this.boundingLeft+this.centerOffsetSmoothed)*this.zoom-(this.viewWidth-t)/2:(this.boundingRight+this.centerOffsetSmoothed)*this.zoom-this.viewWidth},scrollTopMin:function(){var t;return t=this.pageHeight*this.zoom,t<this.viewHeight?this.yMargin*this.zoom-(this.viewHeight-t)/2:this.yMargin*this.zoom},scrollTopMax:function(){var t;return t=this.pageHeight*this.zoom,t<this.viewHeight?this.yMargin*this.zoom-(this.viewHeight-t)/2:(this.yMargin+this.pageHeight)*this.zoom-this.viewHeight},scrollLeftLimited:function(){return Math.min(this.scrollLeftMax,Math.max(this.scrollLeftMin,this.scrollLeft))},scrollTopLimited:function(){return Math.min(this.scrollTopMax,Math.max(this.scrollTopMin,this.scrollTop))}},mounted:function(){return this.imageLoader=new M(this.loadingImage),window.addEventListener("resize",this.onResize,{passive:!0}),this.onResize(),this.zoom=this.zooms_[0],this.goToPage(this.startPage)},beforeDestroy:function(){return window.removeEventListener("resize",this.onResize,{passive:!0})},methods:{onResize:function(){var t;if(t=this.$refs.viewport,t)return this.viewWidth=t.clientWidth,this.viewHeight=t.clientHeight,this.displayedPages=this.viewWidth>this.viewHeight&&!this.singlePage?2:1,2===this.displayedPages&&(this.currentPage&=-2),this.fixFirstPage(),this.minX=Infinity,this.maxX=-Infinity},fixFirstPage:function(){if(1===this.displayedPages&&0===this.currentPage&&this.pages.length&&!this.pageUrl(0))return this.currentPage++},pageUrl:function(t){var i,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e&&this.zoom>1&&!this.zooming&&(i=this.pagesHiRes[t],i)?i:this.pages[t]||null},pageUrlLoading:function(t){var i,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e?this.pageUrl(t,!0):(i=this.pages[t],i?this.loadImage(i):null)},flipLeft:function(){if(this.canFlipLeft)return this.flipStart("left",!0)},flipRight:function(){if(this.canFlipRight)return this.flipStart("right",!0)},makePolygonArray:function(t){var i,e,n,o,s,r,a,h,l,c,u,g,f,p,d,m,v,b,w,y,M,I,x,z,L,k;if(!this.flip.direction)return[];for(d=this.flip.progress,o=this.flip.direction,1===this.displayedPages&&o!==this.forwardDirection&&(d=1-d,o=this.forwardDirection),this.flip.opacity=1===this.displayedPages&&d>.7?1-(d-.7)/.3:1,r="front"===t?this.flip.frontImage:this.flip.backImage,p=this.pageWidth/this.nPolygons,f=this.xMargin,c=!1,1===this.displayedPages?"right"===this.forwardDirection?"back"===t&&(c=!0,f=this.xMargin-this.pageWidth):"left"===o?"back"===t?f=this.pageWidth-this.xMargin:c=!0:"front"===t?f=this.pageWidth-this.xMargin:c=!0:"left"===o?"back"===t?f=this.viewWidth/2:c=!0:"front"===t?f=this.viewWidth/2:c=!0,u=new P,u.translate(this.viewWidth/2),u.perspective(this.perspective),u.translate(-this.viewWidth/2),u.translate(f,this.yMargin),g=0,d>.5&&(g=2*-(d-.5)*180),"left"===o&&(g=-g),"back"===t&&(g+=180),g&&(c&&u.translate(this.pageWidth),u.rotateY(g),c&&u.translate(-this.pageWidth)),I=d<.5?2*d*Math.PI:(1-2*(d-.5))*Math.PI,0===I&&(I=1e-9),b=this.pageWidth/I,v=0,e=I/this.nPolygons,M=e/2/Math.PI*180,n=e/Math.PI*180,c&&(M=-I/Math.PI*180+n/2),"back"===t&&(M=-M,n=-n),this.minX=Infinity,this.maxX=-Infinity,y=[],s=a=0,w=this.nPolygons;0<=w?a<w:a>w;s=0<=w?++a:--a)i="".concat(s/(this.nPolygons-1)*100,"% 0px"),l=u.clone(),m=c?I-v:v,x=Math.sin(m)*b,c&&(x=this.pageWidth-x),k=(1-Math.cos(m))*b,"back"===t&&(k=-k),l.translate3d(x,0,k),l.rotateY(-M),z=l.transformX(0),L=l.transformX(p),this.maxX=Math.max(Math.max(z,L),this.maxX),this.minX=Math.min(Math.min(z,L),this.minX),h=this.computeLighting(g-M,n),v+=e,M+=n,y.push([t+s,r,h,i,l.toString(),Math.abs(Math.round(k))]);return y},computeLighting:function(t,i){var e,o,s,r,a,h,l;return a=[],h=[-.5,-.25,0,.25,.5],this.ambient<1&&(s=1-this.ambient,r=h.map((function(e){return(1-Math.cos((t-i*e)/180*Math.PI))*s})),a.push("linear-gradient(to right,\n  rgba(0, 0, 0, ".concat(r[0],"),\n  rgba(0, 0, 0, ").concat(r[1],") 25%,\n  rgba(0, 0, 0, ").concat(r[2],") 50%,\n  rgba(0, 0, 0, ").concat(r[3],") 75%,\n  rgba(0, 0, 0, ").concat(r[4],"))"))),this.gloss>0&&!n&&(e=30,o=200,l=h.map((function(n){return Math.max(Math.pow(Math.cos((t+e-i*n)/180*Math.PI),o),Math.pow(Math.cos((t-e-i*n)/180*Math.PI),o))})),a.push("linear-gradient(to right,\n  rgba(255, 255, 255, ".concat(l[0]*this.gloss,"),\n  rgba(255, 255, 255, ").concat(l[1]*this.gloss,") 25%,\n  rgba(255, 255, 255, ").concat(l[2]*this.gloss,") 50%,\n  rgba(255, 255, 255, ").concat(l[3]*this.gloss,") 75%,\n  rgba(255, 255, 255, ").concat(l[4]*this.gloss,"))"))),a.join(",")},flipStart:function(t,i){var e=this;return t!==this.forwardDirection?1===this.displayedPages?(this.flip.frontImage=this.pageUrl(this.currentPage-1),this.flip.backImage=null):(this.flip.frontImage=this.pageUrl(this.firstPage),this.flip.backImage=this.pageUrl(this.currentPage-this.displayedPages+1)):1===this.displayedPages?(this.flip.frontImage=this.pageUrl(this.currentPage),this.flip.backImage=null):(this.flip.frontImage=this.pageUrl(this.secondPage),this.flip.backImage=this.pageUrl(this.currentPage+this.displayedPages)),this.flip.direction=t,this.flip.progress=0,requestAnimationFrame((function(){return requestAnimationFrame((function(){if(e.flip.direction!==e.forwardDirection?2===e.displayedPages&&(e.firstPage=e.currentPage-e.displayedPages):1===e.displayedPages?e.firstPage=e.currentPage+e.displayedPages:e.secondPage=e.currentPage+1+e.displayedPages,i)return e.flipAuto(!0)}))}))},flipAuto:function(t){var i,e,n,o,r=this;return o=Date.now(),e=this.flipDuration*(1-this.flip.progress),n=this.flip.progress,this.flip.auto=!0,this.$emit("flip-".concat(this.flip.direction,"-start"),this.page),i=function(){return requestAnimationFrame((function(){var a,h;return h=Date.now()-o,a=n+h/e,a>1&&(a=1),r.flip.progress=t?s(a):a,a<1?i():(r.flip.direction!==r.forwardDirection?r.currentPage-=r.displayedPages:r.currentPage+=r.displayedPages,r.$emit("flip-".concat(r.flip.direction,"-end"),r.page),1===r.displayedPages&&r.flip.direction===r.forwardDirection?r.flip.direction=null:r.onImageLoad(1,(function(){return r.flip.direction=null})),r.flip.auto=!1)}))},i()},flipRevert:function(){var t,i,e,n,o=this;return n=Date.now(),i=this.flipDuration*this.flip.progress,e=this.flip.progress,this.flip.auto=!0,t=function(){return requestAnimationFrame((function(){var s,r;return r=Date.now()-n,s=e-e*r/i,s<0&&(s=0),o.flip.progress=s,s>0?t():(o.firstPage=o.currentPage,o.secondPage=o.currentPage+1,1===o.displayedPages&&o.flip.direction!==o.forwardDirection?o.flip.direction=null:o.onImageLoad(1,(function(){return o.flip.direction=null})),o.flip.auto=!1)}))},t()},onImageLoad:function(t,i){return this.nImageLoad=0,this.nImageLoadTrigger=t,this.imageLoadCallback=i},didLoadImage:function(t){if(null===this.imageWidth&&(this.imageWidth=(t.target||t.path[0]).naturalWidth,this.imageHeight=(t.target||t.path[0]).naturalHeight,this.preloadImages()),this.imageLoadCallback)return++this.nImageLoad>=this.nImageLoadTrigger?(this.imageLoadCallback(),this.imageLoadCallback=null):void 0},zoomIn:function(){if(this.canZoomIn)return this.zoomIndex+=1,this.zoomTo(this.zooms_[this.zoomIndex])},zoomOut:function(){if(this.canZoomOut)return this.zoomIndex-=1,this.zoomTo(this.zooms_[this.zoomIndex])},zoomTo:function(t,i,e){var o,r,a,h,l,c,u,g,f,p,d,m=this;if(u=this.zoom,h=t,d=this.$refs.viewport,g=d.scrollLeft,f=d.scrollTop,i||(i=d.clientWidth/2),e||(e=d.clientHeight/2),r=i+g,a=e+f,l=r/u*h-i,c=a/u*h-e,p=Date.now(),this.zooming=!0,this.$emit("zoom-start",t),o=function(){return requestAnimationFrame((function(){var i,e;return e=Date.now()-p,i=e/m.zoomDuration,(i>1||n)&&(i=1),i=s(i),m.zoom=u+(h-u)*i,m.scrollLeft=g+(l-g)*i,m.scrollTop=f+(c-f)*i,e<m.zoomDuration?o():(m.$emit("zoom-end",t),m.zooming=!1,m.zoom=t,m.scrollLeft=l,m.scrollTop=c)}))},o(),h>1)return this.preloadImages(!0)},zoomAt:function(t){var i,e,n;return i=this.$refs.viewport.getBoundingClientRect(),e=t.pageX-i.left,n=t.pageY-i.top,this.zoomIndex=(this.zoomIndex+1)%this.zooms_.length,this.zoomTo(this.zooms_[this.zoomIndex],e,n)},swipeStart:function(t){return this.touchStartX=t.pageX,this.touchStartY=t.pageY,this.maxMove=0,this.zoom<=1?this.activeCursor="grab":(this.startScrollLeft=this.$refs.viewport.scrollLeft,this.startScrollTop=this.$refs.viewport.scrollTop,this.activeCursor="all-scroll")},swipeMove:function(t){var i,e;if(null!=this.touchStartX)if(i=t.pageX-this.touchStartX,e=t.pageY-this.touchStartY,this.maxMove=Math.max(this.maxMove,Math.abs(i)),this.maxMove=Math.max(this.maxMove,Math.abs(e)),this.zoom>1)this.dragToScroll&&this.dragScroll(i,e);else if(!(Math.abs(e)>Math.abs(i)))return this.activeCursor="grabbing",i>0?(null===this.flip.direction&&this.canFlipLeft&&i>=this.swipeMin&&this.flipStart("left",!1),"left"===this.flip.direction&&(this.flip.progress=i/this.pageWidth,this.flip.progress>1&&(this.flip.progress=1))):(null===this.flip.direction&&this.canFlipRight&&i<=-this.swipeMin&&this.flipStart("right",!1),"right"===this.flip.direction&&(this.flip.progress=-i/this.pageWidth,this.flip.progress>1&&(this.flip.progress=1))),!0},swipeEnd:function(t){if(null!=this.touchStartX)return this.maxMove<this.swipeMin&&this.zoomAt(t),null===this.flip.direction||this.flip.auto||(this.flip.progress>1/4?this.flipAuto(!1):this.flipRevert()),this.touchStartX=null,this.activeCursor=null},onTouchStart:function(t){return this.hasTouchEvents=!0,this.swipeStart(t.changedTouches[0])},onTouchMove:function(t){if(this.swipeMove(t.changedTouches[0])&&t.cancelable)return t.preventDefault()},onTouchEnd:function(t){return this.swipeEnd(t.changedTouches[0])},onPointerDown:function(t){if(this.hasPointerEvents=!0,!this.hasTouchEvents&&(!t.which||1===t.which)){this.swipeStart(t);try{return t.target.setPointerCapture(t.pointerId)}catch(i){}}},onPointerMove:function(t){if(!this.hasTouchEvents)return this.swipeMove(t)},onPointerUp:function(t){if(!this.hasTouchEvents){this.swipeEnd(t);try{return t.target.releasePointerCapture(t.pointerId)}catch(i){}}},onMouseDown:function(t){if(!this.hasTouchEvents&&!this.hasPointerEvents&&(!t.which||1===t.which))return this.swipeStart(t)},onMouseMove:function(t){if(!this.hasTouchEvents&&!this.hasPointerEvents)return this.swipeMove(t)},onMouseUp:function(t){if(!this.hasTouchEvents&&!this.hasPointerEvents)return this.swipeEnd(t)},dragScroll:function(t,i){return this.scrollLeft=this.startScrollLeft-t,this.scrollTop=this.startScrollTop-i},onWheel:function(t){if(this.zoom>1&&this.dragToScroll&&(this.scrollLeft=this.$refs.viewport.scrollLeft+t.deltaX,this.scrollTop=this.$refs.viewport.scrollTop+t.deltaY,t.cancelable))return t.preventDefault()},preloadImages:function(){},goToPage:function(t){if(null!==t&&t!==this.page)return null===this.pages[0]?2===this.displayedPages&&1===t?this.currentPage=0:this.currentPage=t:this.currentPage=t-1,this.minX=Infinity,this.maxX=-Infinity,this.currentCenterOffset=this.centerOffset},loadImage:function(t){return null===this.imageWidth?t:this.imageLoader.load(t)}},watch:{currentPage:function(){return this.firstPage=this.currentPage,this.secondPage=this.currentPage+1,this.preloadImages()},centerOffset:function(){var t,i=this;if(!this.animatingCenter)return t=function(){return requestAnimationFrame((function(){var e,n;return n=.1,e=i.centerOffset-i.currentCenterOffset,Math.abs(e)<.5?(i.currentCenterOffset=i.centerOffset,i.animatingCenter=!1):(i.currentCenterOffset+=e*n,t())}))},this.animatingCenter=!0,t()},scrollLeftLimited:function(t){var i=this;return n?requestAnimationFrame((function(){return i.$refs.viewport.scrollLeft=t})):this.$refs.viewport.scrollLeft=t},scrollTopLimited:function(t){var i=this;return n?requestAnimationFrame((function(){return i.$refs.viewport.scrollTop=t})):this.$refs.viewport.scrollTop=t},pages:function(t,i){if(this.fixFirstPage(),!(null!=i?i.length:void 0)&&(null!=t?t.length:void 0)&&this.startPage>1&&null===t[0])return this.currentPage++},startPage:function(t){return this.goToPage(t)}}},L=z,k=(e("735b"),e("2877")),S=Object(k["a"])(L,d,m,!1,null,"559bcd31",null),T=S.exports,W={name:"app",components:{Flipbook:T,LeftIcon:u["a"],RightIcon:g["a"],PlusIcon:f["a"],MinusIcon:p["a"],Ribbon:c["a"]},data:function(){return{pages:[],pagesHiRes:[],hasMouse:!0,pageNum:null}},methods:{onFlipLeftStart:function(t){return console.log("flip-left-start",t)},onFlipLeftEnd:function(t){return console.log("flip-left-end",t),window.location.hash="#"+t},onFlipRightStart:function(t){return console.log("flip-right-start",t)},onFlipRightEnd:function(t){return console.log("flip-right-end",t),window.location.hash="#"+t},onZoomStart:function(t){return console.log("zoom-start",t)},onZoomEnd:function(t){return console.log("zoom-end",t)},setPageFromHash:function(){var t;if(t=parseInt(window.location.hash.slice(1),10),isFinite(t))return this.pageNum=t}},mounted:function(){var t=this;return window.addEventListener("keydown",(function(i){var e;if(e=t.$refs.flipbook,e)return 37===i.keyCode&&e.canFlipLeft&&e.flipLeft(),39===i.keyCode&&e.canFlipRight?e.flipRight():void 0})),setTimeout((function(){return t.pages=[null,"images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg","images/6.jpg"],t.pagesHiRes=[null,"images-large/1.jpg","images-large/2.jpg","images-large/3.jpg","images-large/4.jpg","images-large/5.jpg","images-large/6.jpg"]}),1),window.addEventListener("hashchange",this.setPageFromHash),this.setPageFromHash()}},O=W,j=(e("034f"),Object(k["a"])(O,h,l,!1,null,null,null)),C=j.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(C)}}).$mount("#app")},"3ebb":function(t,i,e){var n=e("e31a");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("499e").default;o("517436b3",n,!0,{sourceMap:!1,shadowMode:!1})},"735b":function(t,i,e){"use strict";var n=e("83e2"),o=e.n(n);o.a},"83e2":function(t,i,e){var n=e("fc4c");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("499e").default;o("3e5863c0",n,!0,{sourceMap:!1,shadowMode:!1})},b807:function(t,i){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiB2aWV3Qm94PSIwIDAgNTAwIDUwMCIgZmlsbD0idHJhbnNwYXJlbnQiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZmYiPjxjaXJjbGUgY3g9IjI1MCIgY3k9IjI1MCIgcj0iNDgiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtZGFzaGFycmF5PSIyNzEgMzAiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgYXR0cmlidXRlVHlwZT0iWE1MIiB0eXBlPSJyb3RhdGUiIGZyb209IjAgMjUwIDI1MCIgdG89IjM2MCAyNTAgMjUwIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPjwvY2lyY2xlPjwvc3ZnPg=="},e31a:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,"body,html{margin:0;padding:0}#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;height:100vh;display:flex;flex-direction:column;align-items:center;background-color:#333;color:#ccc;overflow:hidden}a{color:inherit}.action-bar{width:100%;height:30px;padding:10px 0;display:flex;justify-content:center;align-items:center}.action-bar .btn{font-size:30px;color:#999}.action-bar .btn svg{bottom:0}.action-bar .btn:not(:first-child){margin-left:10px}.has-mouse .action-bar .btn:hover{color:#ccc;-webkit-filter:drop-shadow(1px 1px 5px #000);filter:drop-shadow(1px 1px 5px #000);cursor:pointer}.action-bar .btn:active{-webkit-filter:none!important;filter:none!important}.action-bar .btn.disabled{color:#666;pointer-events:none}.action-bar .page-num{font-size:12px;margin-left:10px}.flipbook .viewport{width:90vw;height:calc(100vh - 90px)}.flipbook .bounding-box{box-shadow:0 0 20px #000}.credit{font-size:12px;line-height:20px;margin:10px}",""]),t.exports=i},fc4c:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,".viewport[data-v-559bcd31]{-webkit-overflow-scrolling:touch;width:100%;height:100%}.viewport.zoom[data-v-559bcd31]{overflow:scroll}.viewport.zoom.drag-to-scroll[data-v-559bcd31]{overflow:hidden}.container[data-v-559bcd31]{position:relative;width:100%;transform-origin:top left}.click-to-flip[data-v-559bcd31],.container[data-v-559bcd31]{height:100%;-webkit-user-select:none;-ms-user-select:none;user-select:none}.click-to-flip[data-v-559bcd31]{position:absolute;width:50%;top:0}.click-to-flip.left[data-v-559bcd31]{left:0}.click-to-flip.right[data-v-559bcd31]{right:0}.bounding-box[data-v-559bcd31]{position:absolute;-webkit-user-select:none;-ms-user-select:none;user-select:none}.page[data-v-559bcd31],.polygon[data-v-559bcd31]{position:absolute;-webkit-backface-visibility:hidden;backface-visibility:hidden}.polygon[data-v-559bcd31]{top:0;left:0;background-repeat:no-repeat;transform-origin:center left}.polygon.blank[data-v-559bcd31]{background-color:#ddd}.polygon .lighting[data-v-559bcd31]{width:100%;height:100%}",""]),t.exports=i}});
//# sourceMappingURL=app.8f81d333.js.map