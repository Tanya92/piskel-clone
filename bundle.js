/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/gif.js/dist/gif.js":
/*!*****************************************!*\
  !*** ./node_modules/gif.js/dist/gif.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;// gif.js 0.2.0 - https://github.com/jnordberg/gif.js
(function(f){if(true){module.exports=f()}else { var g; }})(function(){var define,module,exports;return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){function EventEmitter(){this._events=this._events||{};this._maxListeners=this._maxListeners||undefined}module.exports=EventEmitter;EventEmitter.EventEmitter=EventEmitter;EventEmitter.prototype._events=undefined;EventEmitter.prototype._maxListeners=undefined;EventEmitter.defaultMaxListeners=10;EventEmitter.prototype.setMaxListeners=function(n){if(!isNumber(n)||n<0||isNaN(n))throw TypeError("n must be a positive number");this._maxListeners=n;return this};EventEmitter.prototype.emit=function(type){var er,handler,len,args,i,listeners;if(!this._events)this._events={};if(type==="error"){if(!this._events.error||isObject(this._events.error)&&!this._events.error.length){er=arguments[1];if(er instanceof Error){throw er}else{var err=new Error('Uncaught, unspecified "error" event. ('+er+")");err.context=er;throw err}}}handler=this._events[type];if(isUndefined(handler))return false;if(isFunction(handler)){switch(arguments.length){case 1:handler.call(this);break;case 2:handler.call(this,arguments[1]);break;case 3:handler.call(this,arguments[1],arguments[2]);break;default:args=Array.prototype.slice.call(arguments,1);handler.apply(this,args)}}else if(isObject(handler)){args=Array.prototype.slice.call(arguments,1);listeners=handler.slice();len=listeners.length;for(i=0;i<len;i++)listeners[i].apply(this,args)}return true};EventEmitter.prototype.addListener=function(type,listener){var m;if(!isFunction(listener))throw TypeError("listener must be a function");if(!this._events)this._events={};if(this._events.newListener)this.emit("newListener",type,isFunction(listener.listener)?listener.listener:listener);if(!this._events[type])this._events[type]=listener;else if(isObject(this._events[type]))this._events[type].push(listener);else this._events[type]=[this._events[type],listener];if(isObject(this._events[type])&&!this._events[type].warned){if(!isUndefined(this._maxListeners)){m=this._maxListeners}else{m=EventEmitter.defaultMaxListeners}if(m&&m>0&&this._events[type].length>m){this._events[type].warned=true;console.error("(node) warning: possible EventEmitter memory "+"leak detected. %d listeners added. "+"Use emitter.setMaxListeners() to increase limit.",this._events[type].length);if(typeof console.trace==="function"){console.trace()}}}return this};EventEmitter.prototype.on=EventEmitter.prototype.addListener;EventEmitter.prototype.once=function(type,listener){if(!isFunction(listener))throw TypeError("listener must be a function");var fired=false;function g(){this.removeListener(type,g);if(!fired){fired=true;listener.apply(this,arguments)}}g.listener=listener;this.on(type,g);return this};EventEmitter.prototype.removeListener=function(type,listener){var list,position,length,i;if(!isFunction(listener))throw TypeError("listener must be a function");if(!this._events||!this._events[type])return this;list=this._events[type];length=list.length;position=-1;if(list===listener||isFunction(list.listener)&&list.listener===listener){delete this._events[type];if(this._events.removeListener)this.emit("removeListener",type,listener)}else if(isObject(list)){for(i=length;i-- >0;){if(list[i]===listener||list[i].listener&&list[i].listener===listener){position=i;break}}if(position<0)return this;if(list.length===1){list.length=0;delete this._events[type]}else{list.splice(position,1)}if(this._events.removeListener)this.emit("removeListener",type,listener)}return this};EventEmitter.prototype.removeAllListeners=function(type){var key,listeners;if(!this._events)return this;if(!this._events.removeListener){if(arguments.length===0)this._events={};else if(this._events[type])delete this._events[type];return this}if(arguments.length===0){for(key in this._events){if(key==="removeListener")continue;this.removeAllListeners(key)}this.removeAllListeners("removeListener");this._events={};return this}listeners=this._events[type];if(isFunction(listeners)){this.removeListener(type,listeners)}else if(listeners){while(listeners.length)this.removeListener(type,listeners[listeners.length-1])}delete this._events[type];return this};EventEmitter.prototype.listeners=function(type){var ret;if(!this._events||!this._events[type])ret=[];else if(isFunction(this._events[type]))ret=[this._events[type]];else ret=this._events[type].slice();return ret};EventEmitter.prototype.listenerCount=function(type){if(this._events){var evlistener=this._events[type];if(isFunction(evlistener))return 1;else if(evlistener)return evlistener.length}return 0};EventEmitter.listenerCount=function(emitter,type){return emitter.listenerCount(type)};function isFunction(arg){return typeof arg==="function"}function isNumber(arg){return typeof arg==="number"}function isObject(arg){return typeof arg==="object"&&arg!==null}function isUndefined(arg){return arg===void 0}},{}],2:[function(require,module,exports){var UA,browser,mode,platform,ua;ua=navigator.userAgent.toLowerCase();platform=navigator.platform.toLowerCase();UA=ua.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/)||[null,"unknown",0];mode=UA[1]==="ie"&&document.documentMode;browser={name:UA[1]==="version"?UA[3]:UA[1],version:mode||parseFloat(UA[1]==="opera"&&UA[4]?UA[4]:UA[2]),platform:{name:ua.match(/ip(?:ad|od|hone)/)?"ios":(ua.match(/(?:webos|android)/)||platform.match(/mac|win|linux/)||["other"])[0]}};browser[browser.name]=true;browser[browser.name+parseInt(browser.version,10)]=true;browser.platform[browser.platform.name]=true;module.exports=browser},{}],3:[function(require,module,exports){var EventEmitter,GIF,browser,extend=function(child,parent){for(var key in parent){if(hasProp.call(parent,key))child[key]=parent[key]}function ctor(){this.constructor=child}ctor.prototype=parent.prototype;child.prototype=new ctor;child.__super__=parent.prototype;return child},hasProp={}.hasOwnProperty,indexOf=[].indexOf||function(item){for(var i=0,l=this.length;i<l;i++){if(i in this&&this[i]===item)return i}return-1},slice=[].slice;EventEmitter=require("events").EventEmitter;browser=require("./browser.coffee");GIF=function(superClass){var defaults,frameDefaults;extend(GIF,superClass);defaults={workerScript:"gif.worker.js",workers:2,repeat:0,background:"#fff",quality:10,width:null,height:null,transparent:null,debug:false,dither:false};frameDefaults={delay:500,copy:false};function GIF(options){var base,key,value;this.running=false;this.options={};this.frames=[];this.freeWorkers=[];this.activeWorkers=[];this.setOptions(options);for(key in defaults){value=defaults[key];if((base=this.options)[key]==null){base[key]=value}}}GIF.prototype.setOption=function(key,value){this.options[key]=value;if(this._canvas!=null&&(key==="width"||key==="height")){return this._canvas[key]=value}};GIF.prototype.setOptions=function(options){var key,results,value;results=[];for(key in options){if(!hasProp.call(options,key))continue;value=options[key];results.push(this.setOption(key,value))}return results};GIF.prototype.addFrame=function(image,options){var frame,key;if(options==null){options={}}frame={};frame.transparent=this.options.transparent;for(key in frameDefaults){frame[key]=options[key]||frameDefaults[key]}if(this.options.width==null){this.setOption("width",image.width)}if(this.options.height==null){this.setOption("height",image.height)}if(typeof ImageData!=="undefined"&&ImageData!==null&&image instanceof ImageData){frame.data=image.data}else if(typeof CanvasRenderingContext2D!=="undefined"&&CanvasRenderingContext2D!==null&&image instanceof CanvasRenderingContext2D||typeof WebGLRenderingContext!=="undefined"&&WebGLRenderingContext!==null&&image instanceof WebGLRenderingContext){if(options.copy){frame.data=this.getContextData(image)}else{frame.context=image}}else if(image.childNodes!=null){if(options.copy){frame.data=this.getImageData(image)}else{frame.image=image}}else{throw new Error("Invalid image")}return this.frames.push(frame)};GIF.prototype.render=function(){var i,j,numWorkers,ref;if(this.running){throw new Error("Already running")}if(this.options.width==null||this.options.height==null){throw new Error("Width and height must be set prior to rendering")}this.running=true;this.nextFrame=0;this.finishedFrames=0;this.imageParts=function(){var j,ref,results;results=[];for(i=j=0,ref=this.frames.length;0<=ref?j<ref:j>ref;i=0<=ref?++j:--j){results.push(null)}return results}.call(this);numWorkers=this.spawnWorkers();if(this.options.globalPalette===true){this.renderNextFrame()}else{for(i=j=0,ref=numWorkers;0<=ref?j<ref:j>ref;i=0<=ref?++j:--j){this.renderNextFrame()}}this.emit("start");return this.emit("progress",0)};GIF.prototype.abort=function(){var worker;while(true){worker=this.activeWorkers.shift();if(worker==null){break}this.log("killing active worker");worker.terminate()}this.running=false;return this.emit("abort")};GIF.prototype.spawnWorkers=function(){var j,numWorkers,ref,results;numWorkers=Math.min(this.options.workers,this.frames.length);(function(){results=[];for(var j=ref=this.freeWorkers.length;ref<=numWorkers?j<numWorkers:j>numWorkers;ref<=numWorkers?j++:j--){results.push(j)}return results}).apply(this).forEach(function(_this){return function(i){var worker;_this.log("spawning worker "+i);worker=new Worker(_this.options.workerScript);worker.onmessage=function(event){_this.activeWorkers.splice(_this.activeWorkers.indexOf(worker),1);_this.freeWorkers.push(worker);return _this.frameFinished(event.data)};return _this.freeWorkers.push(worker)}}(this));return numWorkers};GIF.prototype.frameFinished=function(frame){var i,j,ref;this.log("frame "+frame.index+" finished - "+this.activeWorkers.length+" active");this.finishedFrames++;this.emit("progress",this.finishedFrames/this.frames.length);this.imageParts[frame.index]=frame;if(this.options.globalPalette===true){this.options.globalPalette=frame.globalPalette;this.log("global palette analyzed");if(this.frames.length>2){for(i=j=1,ref=this.freeWorkers.length;1<=ref?j<ref:j>ref;i=1<=ref?++j:--j){this.renderNextFrame()}}}if(indexOf.call(this.imageParts,null)>=0){return this.renderNextFrame()}else{return this.finishRendering()}};GIF.prototype.finishRendering=function(){var data,frame,i,image,j,k,l,len,len1,len2,len3,offset,page,ref,ref1,ref2;len=0;ref=this.imageParts;for(j=0,len1=ref.length;j<len1;j++){frame=ref[j];len+=(frame.data.length-1)*frame.pageSize+frame.cursor}len+=frame.pageSize-frame.cursor;this.log("rendering finished - filesize "+Math.round(len/1e3)+"kb");data=new Uint8Array(len);offset=0;ref1=this.imageParts;for(k=0,len2=ref1.length;k<len2;k++){frame=ref1[k];ref2=frame.data;for(i=l=0,len3=ref2.length;l<len3;i=++l){page=ref2[i];data.set(page,offset);if(i===frame.data.length-1){offset+=frame.cursor}else{offset+=frame.pageSize}}}image=new Blob([data],{type:"image/gif"});return this.emit("finished",image,data)};GIF.prototype.renderNextFrame=function(){var frame,task,worker;if(this.freeWorkers.length===0){throw new Error("No free workers")}if(this.nextFrame>=this.frames.length){return}frame=this.frames[this.nextFrame++];worker=this.freeWorkers.shift();task=this.getTask(frame);this.log("starting frame "+(task.index+1)+" of "+this.frames.length);this.activeWorkers.push(worker);return worker.postMessage(task)};GIF.prototype.getContextData=function(ctx){return ctx.getImageData(0,0,this.options.width,this.options.height).data};GIF.prototype.getImageData=function(image){var ctx;if(this._canvas==null){this._canvas=document.createElement("canvas");this._canvas.width=this.options.width;this._canvas.height=this.options.height}ctx=this._canvas.getContext("2d");ctx.setFill=this.options.background;ctx.fillRect(0,0,this.options.width,this.options.height);ctx.drawImage(image,0,0);return this.getContextData(ctx)};GIF.prototype.getTask=function(frame){var index,task;index=this.frames.indexOf(frame);task={index:index,last:index===this.frames.length-1,delay:frame.delay,transparent:frame.transparent,width:this.options.width,height:this.options.height,quality:this.options.quality,dither:this.options.dither,globalPalette:this.options.globalPalette,repeat:this.options.repeat,canTransfer:browser.name==="chrome"};if(frame.data!=null){task.data=frame.data}else if(frame.context!=null){task.data=this.getContextData(frame.context)}else if(frame.image!=null){task.data=this.getImageData(frame.image)}else{throw new Error("Invalid frame")}return task};GIF.prototype.log=function(){var args;args=1<=arguments.length?slice.call(arguments,0):[];if(!this.options.debug){return}return console.log.apply(console,args)};return GIF}(EventEmitter);module.exports=GIF},{"./browser.coffee":2,events:1}]},{},[3])(3)});
//# sourceMappingURL=gif.js.map


/***/ }),

/***/ "./src/components/animation.ts":
/*!*************************************!*\
  !*** ./src/components/animation.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(/*! ../utils */ "./src/utils.ts");
var Animation = /** @class */ (function () {
    function Animation(animationContainer) {
        var _this = this;
        this.changeLabel = function () {
            var inputValue = _this.getInputRangeValue();
            var currentRange = _this.animationContainer.querySelector('.current_range');
            currentRange.textContent = String(inputValue);
        };
        this.animationContainer = animationContainer;
        this.animationCanvas = this.animationContainer.querySelector('#animation_canvas');
        var rect = this.getCanvasRect();
        this.animationCanvas.setAttribute('width', String(rect.width));
        this.animationCanvas.setAttribute('height', String(rect.height));
        this.changeLabel();
        this.setRangeListener();
        this.addFullScreenListener();
    }
    Animation.prototype.getInputRange = function () {
        return this.animationContainer.querySelector('.input_range');
    };
    Animation.prototype.getInputRangeValue = function () {
        var inputRange = this.getInputRange();
        return Number(inputRange.value);
    };
    Animation.prototype.setRangeListener = function () {
        var _this = this;
        var inputRange = this.getInputRange();
        inputRange.addEventListener('mousemove', this.changeLabel);
        inputRange.addEventListener('change', function () {
            _this.stopAnimation();
            _this.animateFrames(_this.imagesArray);
        });
        document.addEventListener('keydown', function (event) {
            if (event.code == 'ArrowRight') {
                inputRange.value = String(Number(inputRange.value) + 1);
                _this.changeLabel();
                _this.stopAnimation();
                _this.animateFrames(_this.imagesArray);
            }
            if (event.code == "ArrowLeft") {
                inputRange.value = String(Number(inputRange.value) - 1);
                _this.changeLabel();
                _this.stopAnimation();
                _this.animateFrames(_this.imagesArray);
            }
        });
    };
    Animation.prototype.getCanvasRect = function () {
        return this.animationCanvas.getBoundingClientRect();
    };
    Animation.prototype.animateFrames = function (array) {
        var rect = this.getCanvasRect();
        var animationContext = this.animationCanvas.getContext('2d');
        var inputRangeValue = this.getInputRangeValue();
        var frameIndex = 0;
        this.imagesArray = array;
        this.stopAnimation = utils_1.animate(function () {
            if (array[frameIndex]) {
                var image = new Image();
                image.src = array[frameIndex];
                animationContext.clearRect(0, 0, rect.width, rect.height);
                animationContext.drawImage(image, 0, 0, rect.width, rect.height);
                frameIndex++;
            }
            if (frameIndex >= array.length) {
                frameIndex = 0;
            }
        }, inputRangeValue);
    };
    Animation.prototype.addFullScreenListener = function () {
        var _this = this;
        var button = this.animationContainer.querySelector('#full_screen_button');
        button.addEventListener('click', function () {
            _this.animationCanvas.requestFullscreen();
        });
        document.addEventListener('keydown', function (event) {
            if (event.code == 'NumpadEnter') {
                _this.animationCanvas.requestFullscreen();
            }
        });
    };
    return Animation;
}());
exports.default = Animation;


/***/ }),

/***/ "./src/components/canvasSize.ts":
/*!**************************************!*\
  !*** ./src/components/canvasSize.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var activeClass = 'active_button';
var CanvasSize = /** @class */ (function () {
    function CanvasSize() {
        var _this = this;
        this.canvasSize = 32;
        this.currentSize = 32;
        this.onCanvasSizeSelected = function (elem, prevElem) {
            var scale = _this.currentSize / _this.canvasSize;
            _this.resize(scale);
            _this.callback();
            _this.currentSize = _this.canvasSize;
            _this.setCanvasInformation();
            if (prevElem) {
                prevElem.classList.remove(activeClass);
            }
            elem.classList.add(activeClass);
        };
        this.setCanvasInformation = function () {
            var informationContainer = document.getElementById('information_container');
            var canvasSize = _this.getCanvasSize();
            informationContainer.innerHTML = "\n        <table>\n            <tr class=\"canvas_size_info\"><td>[" + canvasSize + "/" + canvasSize + "]</td></tr>\n            <tr class=\"cursor_coordinates\"></tr>\n        </table>\n         \n        ";
        };
        this.onUpdate = function (callback) {
            _this.callback = callback;
        };
        this.canvas = document.getElementById('draw_canvas');
        this.addCanvasSizeListener();
        this.setCanvasInformation();
    }
    CanvasSize.prototype.getCanvasContext = function () {
        return this.canvas.getContext('2d');
    };
    CanvasSize.prototype.addCanvasSizeListener = function () {
        var _this = this;
        var ctx = this.getCanvasContext();
        ctx.scale(4, 4);
        var container = document.getElementById('scale_canvas_container');
        container.addEventListener('click', function (event) {
            var elem = event.target;
            var prevElem = document.querySelector("." + activeClass);
            if (elem.classList.contains('scale_canvas_button')) {
                _this.canvasSize = Number(elem.getAttribute('data-canvassize'));
                _this.onCanvasSizeSelected(elem, prevElem);
            }
        });
        document.addEventListener('keydown', function (event) {
            var sizeCollection = document.getElementsByClassName('scale_canvas_button');
            var prevElem = document.querySelector("." + activeClass);
            var elemIndex = Array.from(sizeCollection).indexOf(prevElem);
            var nextIndex;
            if (event.code == 'ArrowDown') {
                nextIndex = (elemIndex + 1) % sizeCollection.length;
            }
            if (event.code == 'ArrowUp') {
                nextIndex = elemIndex - 1 % sizeCollection.length;
                if (nextIndex < 0) {
                    nextIndex = sizeCollection.length - 1;
                }
            }
            if (event.code == 'ArrowUp' || event.code == 'ArrowDown') {
                _this.canvasSize = Number(sizeCollection[nextIndex].getAttribute('data-canvassize'));
                _this.onCanvasSizeSelected(sizeCollection[nextIndex], prevElem);
            }
        });
    };
    CanvasSize.prototype.getSquareLength = function () {
        var canvasWidth = this.canvas.width;
        return canvasWidth / this.canvasSize;
    };
    CanvasSize.prototype.getCanvasSize = function () {
        return this.canvasSize;
    };
    CanvasSize.prototype.resize = function (scale) {
        var tmp = document.createElement('canvas');
        var tmpCtx = tmp.getContext('2d');
        var ctx = this.getCanvasContext();
        var canvasWidth = parseInt(getComputedStyle(this.canvas).width);
        var canvasHeight = parseInt(getComputedStyle(this.canvas).height);
        tmp.width = this.canvas.width;
        tmp.height = this.canvas.height;
        tmpCtx.drawImage(this.canvas, 0, 0);
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        var drawWidth = canvasWidth * scale;
        var drawHeight = canvasHeight * scale;
        var leftDraw = (canvasWidth - drawWidth) / 2;
        var topDraw = (canvasHeight - drawHeight) / 2;
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(tmp, leftDraw, topDraw, drawWidth, drawHeight);
    };
    return CanvasSize;
}());
exports.default = CanvasSize;


/***/ }),

/***/ "./src/components/colorPicker.ts":
/*!***************************************!*\
  !*** ./src/components/colorPicker.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(/*! ../utils */ "./src/utils.ts");
var ColorPicker = /** @class */ (function () {
    function ColorPicker(canvas) {
        var _this = this;
        this.selectColor = function (event) {
            var pos = utils_1.relativePos(event, _this.canvas);
            var color = _this.pixelColor(pos);
            _this.context.fillStyle = color;
            _this.context.strokeStyle = color;
            _this.callback();
        };
        this.onUpdate = function (callback) {
            _this.callback = callback;
        };
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
    }
    ColorPicker.prototype.pixelColor = function (point) {
        var pixel = this.context.getImageData(point.x, point.y, 1, 1).data;
        return "rgb(" + pixel[0] + ", " + pixel[1] + ", " + pixel[2] + ")";
    };
    ColorPicker.prototype.selected = function () {
        this.canvas.addEventListener('click', this.selectColor);
    };
    ColorPicker.prototype.unSelected = function () {
        this.canvas.removeEventListener('click', this.selectColor);
    };
    return ColorPicker;
}());
exports.default = ColorPicker;


/***/ }),

/***/ "./src/components/cursorCoordinates.ts":
/*!*********************************************!*\
  !*** ./src/components/cursorCoordinates.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(/*! ../utils */ "./src/utils.ts");
var CursorCoordinates = /** @class */ (function () {
    function CursorCoordinates(canvas, canvasSize) {
        this.canvas = canvas;
        this.canvasSize = canvasSize;
        this.cursorListener();
    }
    CursorCoordinates.prototype.cursorListener = function () {
        var _this = this;
        this.canvas.addEventListener('mousemove', function (event) {
            var pos = utils_1.relativePos(event, _this.canvas);
            var squareLength = _this.canvasSize.getSquareLength();
            var xPos = Math.floor(pos.x / squareLength);
            var yPos = Math.floor(pos.y / squareLength);
            var cursorContainer = document.querySelector('.cursor_coordinates');
            cursorContainer.innerHTML = "\n                <td>[[" + xPos + ":" + yPos + "]]</td>\n            ";
        });
    };
    return CursorCoordinates;
}());
exports.default = CursorCoordinates;


/***/ }),

/***/ "./src/components/eraser.ts":
/*!**********************************!*\
  !*** ./src/components/eraser.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var lineDrawer_1 = __webpack_require__(/*! ./lineDrawer */ "./src/components/lineDrawer.ts");
var utils_1 = __webpack_require__(/*! ../utils */ "./src/utils.ts");
var Eraser = /** @class */ (function (_super) {
    __extends(Eraser, _super);
    function Eraser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.drawRect = function (pos) {
            var squareCoordinates = utils_1.getSquareCoordinates(pos.x, pos.y, _this.penSize.getPenSize(), _this.canvasSize.getSquareLength());
            _this.context.clearRect(squareCoordinates.x, squareCoordinates.y, squareCoordinates.width, squareCoordinates.height);
        };
        return _this;
    }
    return Eraser;
}(lineDrawer_1.default));
exports.default = Eraser;


/***/ }),

/***/ "./src/components/fillRectangle.ts":
/*!*****************************************!*\
  !*** ./src/components/fillRectangle.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var strokeRectangle_1 = __webpack_require__(/*! ./strokeRectangle */ "./src/components/strokeRectangle.ts");
var FillRectangle = /** @class */ (function (_super) {
    __extends(FillRectangle, _super);
    function FillRectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FillRectangle.prototype.createRect = function (rect) {
        this.context.fillRect(rect.left, rect.top, rect.width, rect.height);
    };
    FillRectangle.prototype.stylizeNode = function () {
        this.trackingNode.style.border = 'none';
        this.trackingNode.style.backgroundColor = String(this.context.fillStyle);
    };
    return FillRectangle;
}(strokeRectangle_1.default));
exports.default = FillRectangle;


/***/ }),

/***/ "./src/components/frames.ts":
/*!**********************************!*\
  !*** ./src/components/frames.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var emptyFrame = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAqAAAAGACAYAAAByeNBuAAAUuklEQVR4Xu3WMQ0AAAzDsJU/6bHI5RGoZO3IzhEgQIAAAQIECBAIBRZumSJAgAABAgQIECBwAtQTECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECAgQP0AAQIECBAgQIBAKiBAU25jBAgQIECAAAECAtQPECBAgAABAgQIpAICNOU2RoAAAQIECBAgIED9AAECBAgQIECAQCogQFNuYwQIECBAgAABAgLUDxAgQIAAAQIECKQCAjTlNkaAAAECBAgQICBA/QABAgQIECBAgEAqIEBTbmMECBAgQIAAAQIC1A8QIECAAAECBAikAgI05TZGgAABAgQIECDwdOcBgTGsrYIAAAAASUVORK5CYII=";
var Frames = /** @class */ (function () {
    function Frames(container, clearCanvas, drawImage) {
        var _this = this;
        this.activeFrame = -1;
        this.counterFrame = 1;
        this.imagesData = [];
        this.createFrame = function () {
            _this.deleteActiveClassName();
            var template = document.createElement('template');
            template.innerHTML = "\n            <div class=\"frame active\">\n                <div class=\"number_frame\">\n                    <span class=\"counter_frame\">" + _this.counterFrame + "</span>\n                </div>\n                <div class=\"delete_frame\">\n                    <img src=\"./assets/frame_icons/delete-icon.svg\" alt=\"delete_icon\" class=\"delete_icon icon_select\">\n                </div>\n                <div class=\"copy_frame\">\n                    <img src=\"./assets/frame_icons/copy-icon.svg\" alt=\"copy_icon\" class=\"copy_icon icon_select\">\n                </div>  \n                <div class=\"expand_frame\">\n                    <img src=\"./assets/frame_icons/expand-icon.svg\" alt=\"expand_icon\" class=\"expand_icon icon_select\">\n                </div>            \n            </div>\n        ";
            _this.container.insertBefore(template.content, _this.container.querySelector('#button_add_frame'));
            _this.activeFrame++;
            _this.imagesData[_this.activeFrame] = emptyFrame;
            _this.counterFrame++;
            var frames = _this.getFramesArray();
            var lastFrame = frames[frames.length - 1];
            _this.setFrameEventListeners(lastFrame);
        };
        this.container = container;
        this.drawImage = drawImage;
        this.container.querySelector('button').addEventListener('click', function () {
            _this.createFrame();
            clearCanvas();
        });
        document.addEventListener('keydown', function (event) {
            if (event.code == 'NumpadAdd') {
                _this.createFrame();
                clearCanvas();
            }
        });
        this.createFrame();
    }
    Frames.prototype.frameCounterValue = function (frame) {
        return parseInt(frame.querySelector('.counter_frame').textContent);
    };
    Frames.prototype.setFrameCounterValue = function (frame, index) {
        frame.querySelector('.counter_frame').textContent = String(index);
    };
    Frames.prototype.getFramesArray = function () {
        return this.container.getElementsByClassName('frame');
    };
    Frames.prototype.changeIndexes = function (frameIndex) {
        var framesArray = this.getFramesArray();
        var index = frameIndex;
        var length = framesArray.length;
        while (index < length) {
            this.setFrameCounterValue(framesArray[index], index + 1);
            index += 1;
        }
    };
    Frames.prototype.deleteFrame = function (icon) {
        var frame = icon.parentNode;
        var deleteIndex = Array.from(this.getFramesArray()).indexOf(frame);
        if (this.activeFrame < deleteIndex) {
            this.drawImage(this.imagesData[deleteIndex - 1]);
        }
        if (this.activeFrame >= deleteIndex) {
            this.activeFrame--;
            this.drawImage(this.imagesData[deleteIndex - 1]);
        }
        this.counterFrame--;
        this.container.removeChild(frame);
        this.changeIndexes(deleteIndex);
        if (this.imagesData[deleteIndex]) {
            this.imagesData.splice(deleteIndex, 1);
        }
        this.getFramesArray()[this.activeFrame].classList.add('active');
    };
    Frames.prototype.copyFrame = function (icon) {
        this.deleteActiveClassName();
        var frame = icon.parentNode;
        var copyCounter = this.frameCounterValue(frame);
        var copyIndex = copyCounter - 1;
        var elementCopy = frame.cloneNode(true);
        if (frame.nextSibling) {
            this.container.insertBefore(elementCopy, frame.nextSibling).classList.add('active');
        }
        this.setFrameEventListeners(elementCopy);
        this.changeIndexes(copyCounter);
        this.activeFrame = copyCounter;
        this.counterFrame++;
        if (this.imagesData[copyIndex]) {
            this.imagesData.splice(copyCounter, 0, this.imagesData[copyIndex]);
        }
    };
    Frames.prototype.updatePreview = function (imageData) {
        var frame = document.getElementsByClassName('frame')[this.activeFrame];
        if (frame) {
            frame.style.backgroundSize = '100%, auto';
            frame.style.backgroundImage =
                "url(" + imageData + "), url('assets/images/background.png')";
            frame.style.backgroundPosition = 'left top, left top';
            frame.style.backgroundRepeat = 'no-repeat, repeat';
        }
        this.imagesData[this.activeFrame] = imageData;
    };
    Frames.prototype.setFrameEventListeners = function (frame) {
        var _this = this;
        var deleteIcon = frame.querySelector('.delete_frame');
        deleteIcon.addEventListener('click', function (event) {
            event.stopImmediatePropagation();
            _this.deleteFrame(event.currentTarget);
        });
        var copyIcon = frame.querySelector('.copy_frame');
        copyIcon.addEventListener('click', function (event) {
            event.stopImmediatePropagation();
            _this.copyFrame(event.currentTarget);
        });
        frame.addEventListener('click', function () {
            _this.deleteActiveClassName();
            frame.classList.add('active');
            var activeIndex = Array.from(_this.getFramesArray()).indexOf(frame);
            _this.activeFrame = activeIndex;
            _this.drawImage(_this.imagesData[activeIndex]);
        });
    };
    Frames.prototype.deleteActiveClassName = function () {
        var prevFrame = this.container.querySelector('.frame.active');
        if (prevFrame) {
            prevFrame.classList.remove('active');
        }
    };
    Frames.prototype.getImagesData = function () {
        return this.imagesData;
    };
    return Frames;
}());
exports.default = Frames;


/***/ }),

/***/ "./src/components/lineDrawer.ts":
/*!**************************************!*\
  !*** ./src/components/lineDrawer.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(/*! ../utils */ "./src/utils.ts");
var LineDrawer = /** @class */ (function () {
    function LineDrawer(canvas, penSize, canvasSize) {
        var _this = this;
        this.drawing = false;
        this.startDraw = function (event) {
            _this.drawing = true;
            _this.draw(event);
        };
        this.draw = function (event) {
            if (_this.drawing) {
                var pos = utils_1.relativePos(event, _this.canvas);
                if (!_this.prevPos) {
                    _this.prevPos = pos;
                }
                utils_1.drawLine(_this.prevPos, pos, _this.drawRect);
                _this.prevPos = pos;
            }
        };
        this.stopDraw = function () {
            _this.drawing = false;
            _this.prevPos = undefined;
            _this.callback();
        };
        this.onUpdate = function (callback) {
            _this.callback = callback;
        };
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.penTool = document.getElementById('pen_tool');
        this.penSize = penSize;
        this.canvasSize = canvasSize;
    }
    LineDrawer.prototype.selected = function () {
        this.canvas.addEventListener('mousedown', this.startDraw);
        this.canvas.addEventListener('mousemove', this.draw);
        this.canvas.addEventListener('mouseup', this.stopDraw);
    };
    LineDrawer.prototype.unSelected = function () {
        this.canvas.removeEventListener('mousedown', this.startDraw);
        this.canvas.removeEventListener('mousemove', this.draw);
        this.canvas.removeEventListener('mouseup', this.stopDraw);
    };
    return LineDrawer;
}());
exports.default = LineDrawer;


/***/ }),

/***/ "./src/components/paint_bucket_tool.ts":
/*!*********************************************!*\
  !*** ./src/components/paint_bucket_tool.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(/*! ../utils */ "./src/utils.ts");
var PaintBucket = /** @class */ (function () {
    function PaintBucket(canvas) {
        var _this = this;
        this.paint = function (event) {
            var ctx = _this.canvas.getContext('2d');
            var startPos = utils_1.relativePos(event, ctx.canvas);
            var data = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
            var filledPoints = new Array(data.width * data.height);
            var activePoints = [startPos];
            while (activePoints.length) {
                var pos = activePoints.pop();
                var offset = pos.x + data.width * pos.y;
                if (filledPoints[offset]) {
                    continue;
                }
                ctx.fillRect(pos.x, pos.y, 1, 1);
                filledPoints[offset] = true;
                _this.forAllPointNeighbors(pos, function (neighbor) {
                    if (neighbor.x >= 0 && neighbor.x < data.width &&
                        neighbor.y >= 0 && neighbor.y < data.height &&
                        _this.isSameColor(data, startPos, neighbor)) {
                        activePoints.push(neighbor);
                    }
                });
            }
            _this.callback();
        };
        this.isSameColor = function (data, pos1, pos2) {
            var offset1 = (pos1.x + pos1.y * data.width) * 4;
            var offset2 = (pos2.x + pos2.y * data.width) * 4;
            for (var i = 0; i < 4; i++) {
                if (data.data[offset1 + i] != data.data[offset2 + i])
                    return false;
            }
            return true;
        };
        this.canvas = canvas;
    }
    PaintBucket.prototype.selected = function () {
        this.canvas.addEventListener('click', this.paint);
    };
    PaintBucket.prototype.unSelected = function () {
        this.canvas.removeEventListener('click', this.paint);
    };
    PaintBucket.prototype.onUpdate = function (callback) {
        this.callback = callback;
    };
    PaintBucket.prototype.forAllPointNeighbors = function (point, fn) {
        fn({ x: point.x, y: point.y + 1 });
        fn({ x: point.x, y: point.y - 1 });
        fn({ x: point.x + 1, y: point.y });
        fn({ x: point.x - 1, y: point.y });
    };
    return PaintBucket;
}());
exports.default = PaintBucket;


/***/ }),

/***/ "./src/components/penSize.ts":
/*!***********************************!*\
  !*** ./src/components/penSize.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var activeClass = 'active_size';
var PenSize = /** @class */ (function () {
    function PenSize() {
        this.penSize = 1;
        this.addPenSizeListener();
    }
    PenSize.prototype.addPenSizeListener = function () {
        var _this = this;
        var container = document.getElementById('select_pen_size');
        container.addEventListener('click', function (event) {
            var elem = event.target;
            var prevElem = document.querySelector("." + activeClass);
            if (elem.classList.contains('pen_size')) {
                _this.penSize = Number(elem.getAttribute('data-size'));
                if (prevElem) {
                    prevElem.classList.remove(activeClass);
                }
                elem.classList.add(activeClass);
            }
        });
        document.addEventListener('keydown', function (event) {
            var penSizes = document.getElementsByClassName('pen_size');
            var prevElem = document.querySelector("." + activeClass);
            if (event.code == 'Numpad1') {
                _this.setPenSize(1, prevElem, penSizes);
            }
            if (event.code == 'Numpad2') {
                _this.setPenSize(2, prevElem, penSizes);
            }
            if (event.code == 'Numpad3') {
                _this.setPenSize(3, prevElem, penSizes);
            }
            if (event.code == 'Numpad4') {
                _this.setPenSize(4, prevElem, penSizes);
            }
        });
    };
    PenSize.prototype.setPenSize = function (number, prevElem, collection) {
        this.penSize = number;
        if (prevElem) {
            prevElem.classList.remove(activeClass);
        }
        collection[number - 1].classList.add(activeClass);
    };
    PenSize.prototype.getPenSize = function () {
        return this.penSize;
    };
    return PenSize;
}());
exports.default = PenSize;


/***/ }),

/***/ "./src/components/pencil_tool.ts":
/*!***************************************!*\
  !*** ./src/components/pencil_tool.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(/*! ../utils */ "./src/utils.ts");
var lineDrawer_1 = __webpack_require__(/*! ./lineDrawer */ "./src/components/lineDrawer.ts");
var PencilTool = /** @class */ (function (_super) {
    __extends(PencilTool, _super);
    function PencilTool() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.drawRect = function (pos) {
            var squareCoordinates = utils_1.getSquareCoordinates(pos.x, pos.y, _this.penSize.getPenSize(), _this.canvasSize.getSquareLength());
            _this.context.fillRect(squareCoordinates.x, squareCoordinates.y, squareCoordinates.width, squareCoordinates.height);
        };
        return _this;
    }
    return PencilTool;
}(lineDrawer_1.default));
exports.default = PencilTool;


/***/ }),

/***/ "./src/components/strokeRectangle.ts":
/*!*******************************************!*\
  !*** ./src/components/strokeRectangle.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(/*! ../utils */ "./src/utils.ts");
var StrokeRectangle = /** @class */ (function () {
    function StrokeRectangle(canvas, penSize, canvasSize) {
        var _this = this;
        this.isDrawing = false;
        this.getRectangleInfo = function (a, b) {
            return {
                left: Math.min(a.x, b.x),
                top: Math.min(a.y, b.y),
                width: Math.abs(a.x - b.x),
                height: Math.abs(a.y - b.y)
            };
        };
        this.startDraw = function (event) {
            event.preventDefault();
            _this.isDrawing = true;
            _this.relativeStart = utils_1.relativePos(event, _this.canvas);
            _this.pageStart = { x: event.pageX, y: event.pageY };
            var rect = _this.getRectangleInfo(_this.pageStart, { x: event.pageX, y: event.pageY });
            _this.trackingNode = document.createElement("div");
            _this.trackingNode.style.position = "absolute";
            _this.trackingNode.style.borderColor = String(_this.context.fillStyle);
            _this.trackingNode.style.borderWidth = String(_this.getLineWidth()) + 'px';
            _this.trackingNode.style.boxSizing = 'border-box';
            _this.trackingNode.style.borderStyle = "solid";
            _this.trackingNode.style.top = rect.top + "px";
            _this.trackingNode.style.left = rect.left + "px";
            _this.stylizeNode();
            document.body.appendChild(_this.trackingNode);
        };
        this.drawRectangle = function (event) {
            if (_this.isDrawing) {
                var rect = _this.getRectangleInfo(_this.pageStart, { x: event.pageX, y: event.pageY });
                if (rect.left != parseInt(_this.trackingNode.style.left)) {
                    _this.trackingNode.style.left = rect.left + "px";
                }
                if (rect.top != parseInt(_this.trackingNode.style.top)) {
                    _this.trackingNode.style.top = rect.top + "px";
                }
                _this.trackingNode.style.width = (rect.width) + "px";
                _this.trackingNode.style.height = (rect.height) + "px";
            }
        };
        this.stopDraw = function (event) {
            if (_this.isDrawing) {
                _this.isDrawing = false;
                var rect = _this.getRectangleInfo(_this.relativeStart, utils_1.relativePos(event, _this.context.canvas));
                _this.context.lineWidth = _this.getLineWidth();
                _this.createRect(rect);
                document.body.removeChild(_this.trackingNode);
                _this.relativeStart = undefined;
                _this.pageStart = undefined;
                _this.callback();
            }
        };
        this.canvas = canvas;
        this.penSize = penSize;
        this.canvasSize = canvasSize;
        this.context = this.canvas.getContext('2d');
    }
    StrokeRectangle.prototype.selected = function () {
        this.canvas.addEventListener('mousedown', this.startDraw);
        this.canvas.addEventListener('mousemove', this.drawRectangle);
        addEventListener('mouseup', this.stopDraw);
    };
    StrokeRectangle.prototype.unSelected = function () {
        this.canvas.removeEventListener('mousedown', this.startDraw);
        this.canvas.removeEventListener('mousemove', this.drawRectangle);
        removeEventListener('mouseup', this.stopDraw);
    };
    StrokeRectangle.prototype.getLineWidth = function () {
        return this.penSize.getPenSize() * this.canvasSize.getSquareLength();
    };
    StrokeRectangle.prototype.onUpdate = function (callback) {
        this.callback = callback;
    };
    StrokeRectangle.prototype.stylizeNode = function () {
    };
    StrokeRectangle.prototype.createRect = function (rect) {
        this.context.strokeRect(rect.left, rect.top, rect.width, rect.height);
    };
    return StrokeRectangle;
}());
exports.default = StrokeRectangle;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var pencil_tool_1 = __webpack_require__(/*! ./components/pencil_tool */ "./src/components/pencil_tool.ts");
var frames_1 = __webpack_require__(/*! ./components/frames */ "./src/components/frames.ts");
var animation_1 = __webpack_require__(/*! ./components/animation */ "./src/components/animation.ts");
var paint_bucket_tool_1 = __webpack_require__(/*! ./components/paint_bucket_tool */ "./src/components/paint_bucket_tool.ts");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
var penSize_1 = __webpack_require__(/*! ./components/penSize */ "./src/components/penSize.ts");
var eraser_1 = __webpack_require__(/*! ./components/eraser */ "./src/components/eraser.ts");
var canvasSize_1 = __webpack_require__(/*! ./components/canvasSize */ "./src/components/canvasSize.ts");
var strokeRectangle_1 = __webpack_require__(/*! ./components/strokeRectangle */ "./src/components/strokeRectangle.ts");
var cursorCoordinates_1 = __webpack_require__(/*! ./components/cursorCoordinates */ "./src/components/cursorCoordinates.ts");
var fillRectangle_1 = __webpack_require__(/*! ./components/fillRectangle */ "./src/components/fillRectangle.ts");
var colorPicker_1 = __webpack_require__(/*! ./components/colorPicker */ "./src/components/colorPicker.ts");
var GIF = __webpack_require__(/*! gif.js */ "./node_modules/gif.js/dist/gif.js");
var App = /** @class */ (function () {
    function App() {
        var _this = this;
        this.selectedTool = {
            selected: function () { },
            unSelected: function () { },
            onUpdate: function () { }
        };
        this.onCanvasUpdate = function () {
            _this.frames.updatePreview(_this.getState());
        };
        this.clearCanvas = function () {
            var rect = _this.canvas.getBoundingClientRect();
            _this.context.clearRect(0, 0, rect.width, rect.height);
        };
        this.drawImage = function (imageData) {
            var image = new Image();
            image.src = imageData;
            var rect = _this.canvas.getBoundingClientRect();
            _this.context.clearRect(0, 0, rect.width, rect.height);
            _this.context.drawImage(image, 0, 0, rect.width, rect.height);
        };
        this.onColorChange = function () {
            _this.context.strokeStyle = _this.normalizeColor(String(_this.primaryInput.value));
            _this.context.fillStyle = _this.normalizeColor(String(_this.primaryInput.value));
        };
        this.setInputColor = function () {
            _this.primaryInput.value = String(_this.context.fillStyle);
        };
        this.initTools = function () {
            _this.startPenTool();
            _this.startPaintBucketTool();
            _this.startEraserTool();
            _this.startStrokeRectangleTool();
            _this.startFillRectangleTool();
            _this.startColorPickerTool();
        };
    }
    App.prototype.getCanvasRect = function () {
        return this.canvas.getBoundingClientRect();
    };
    App.prototype.initCanvas = function () {
        this.canvas = document.getElementById('draw_canvas');
        var rect = this.getCanvasRect();
        this.canvas.setAttribute('width', String(rect.width));
        this.canvas.setAttribute('height', String(rect.height));
        var context = this.canvas.getContext('2d');
        this.context = context;
    };
    App.prototype.start = function () {
        this.penSize = new penSize_1.default();
        this.canvasSize = new canvasSize_1.default();
        this.canvasSize.setCanvasInformation();
        this.canvasSize.onUpdate(this.onCanvasUpdate);
        this.initCanvas();
        this.initTools();
        this.div = document.createElement('div');
        this.addChangeColorListener();
        this.frames = new frames_1.default(document.getElementById('frames'), this.clearCanvas, this.drawImage);
        this.animation = new animation_1.default(document.getElementById('animation_field'));
        var imagesArray = this.frames.getImagesData();
        this.animation.animateFrames(imagesArray);
        this.cursorCoordinates = new cursorCoordinates_1.default(this.canvas, this.canvasSize);
        this.openDialogWindow();
        this.closeDialogWindow();
        this.addExportImageListeners();
    };
    App.prototype.getState = function () {
        return this.canvas.toDataURL();
    };
    App.prototype.addChangeColorListener = function () {
        this.primaryInput = document.getElementById('primary_color_input');
        this.primaryInput.addEventListener('change', this.onColorChange);
        this.onColorChange();
    };
    App.prototype.normalizeColor = function (color) {
        if (color == "#000" || color == "#000000" || color == "rbg(0,0,0)") {
            return "#010000";
        }
        return color;
    };
    App.prototype.startTool = function (toolObj, tool, callback) {
        if (callback === void 0) { callback = this.onCanvasUpdate; }
        this.selectedTool.unSelected();
        utils_1.cancelBorder(this.div);
        this.selectedTool = toolObj;
        this.div = tool;
        utils_1.paintBorder(this.div);
        toolObj.selected();
        toolObj.onUpdate(callback);
    };
    App.prototype.startPenTool = function () {
        var _this = this;
        var penTool = document.getElementById('pen_tool');
        this.pencilTool = new pencil_tool_1.default(this.canvas, this.penSize, this.canvasSize);
        this.selectedTool = this.pencilTool;
        penTool.addEventListener('click', function () {
            _this.startTool(_this.pencilTool, penTool);
        });
        document.addEventListener('keydown', function (event) {
            if (event.code == 'KeyP') {
                _this.startTool(_this.pencilTool, penTool);
            }
        });
    };
    App.prototype.startPaintBucketTool = function () {
        var _this = this;
        var paintBucketTool = document.getElementById('paint_bucket_tool');
        this.paintBucketTool = new paint_bucket_tool_1.default(this.canvas);
        paintBucketTool.addEventListener('click', function () {
            _this.startTool(_this.paintBucketTool, paintBucketTool);
        });
        document.addEventListener('keydown', function (event) {
            if (event.code == 'KeyB') {
                _this.startTool(_this.paintBucketTool, paintBucketTool);
            }
        });
    };
    App.prototype.startEraserTool = function () {
        var _this = this;
        var eraserTool = document.getElementById('eraser_tool');
        this.eraserTool = new eraser_1.default(this.canvas, this.penSize, this.canvasSize);
        eraserTool.addEventListener('click', function () {
            _this.startTool(_this.eraserTool, eraserTool);
        });
        document.addEventListener('keydown', function (event) {
            if (event.code == 'KeyE') {
                _this.startTool(_this.eraserTool, eraserTool);
            }
        });
    };
    App.prototype.startStrokeRectangleTool = function () {
        var _this = this;
        var strokeRectangleTool = document.getElementById('stroke_rectangle_tool');
        this.strokeRectangleTool = new strokeRectangle_1.default(this.canvas, this.penSize, this.canvasSize);
        strokeRectangleTool.addEventListener('click', function () {
            _this.startTool(_this.strokeRectangleTool, strokeRectangleTool);
        });
        document.addEventListener('keydown', function (event) {
            if (event.code == 'KeyR') {
                _this.startTool(_this.strokeRectangleTool, strokeRectangleTool);
            }
        });
    };
    App.prototype.startFillRectangleTool = function () {
        var _this = this;
        var fillRectangleTool = document.getElementById('fill_rectangle_tool');
        this.fillRectangleTool = new fillRectangle_1.default(this.canvas, this.penSize, this.canvasSize);
        fillRectangleTool.addEventListener('click', function () {
            _this.startTool(_this.fillRectangleTool, fillRectangleTool);
        });
        document.addEventListener('keydown', function (event) {
            if (event.code == 'KeyF') {
                _this.startTool(_this.fillRectangleTool, fillRectangleTool);
            }
        });
    };
    App.prototype.startColorPickerTool = function () {
        var _this = this;
        var colorPickerTool = document.getElementById('color_picker_tool');
        this.colorPickerTool = new colorPicker_1.default(this.canvas);
        colorPickerTool.addEventListener('click', function () {
            _this.startTool(_this.colorPickerTool, colorPickerTool, _this.setInputColor);
        });
        document.addEventListener('keydown', function (event) {
            if (event.code == 'KeyC') {
                _this.startTool(_this.colorPickerTool, colorPickerTool, _this.setInputColor);
            }
        });
    };
    App.prototype.openDialogWindow = function () {
        var openDialogButton = document.getElementById('dialog_button');
        openDialogButton.addEventListener('click', function () {
            var dialogWindow = document.getElementById('dialog_window');
            dialogWindow.showModal();
        });
    };
    App.prototype.closeDialogWindow = function () {
        var closeDialogButton = document.getElementById('close_dialog_button');
        closeDialogButton.addEventListener('click', function () {
            var dialogWindow = document.getElementById('dialog_window');
            dialogWindow.close();
        });
    };
    App.prototype.createGif = function () {
        var imagesArray = this.frames.getImagesData();
        var gif = new GIF({
            workers: 2,
            quality: 13,
            transparent: "#000",
        });
        var promises = [];
        var _loop_1 = function (i) {
            var image = new Image();
            image.src = imagesArray[i];
            promises.push(new Promise(function (resolve) {
                image.onload = function () {
                    gif.addFrame(image);
                    resolve();
                };
            }));
        };
        for (var i = 0; i < imagesArray.length; i++) {
            _loop_1(i);
        }
        Promise.all(promises).then(function () {
            gif.render();
        });
        gif.on('finished', function (blob) {
            var link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "test.gif";
            link.click();
        });
    };
    App.prototype.addExportImageListeners = function () {
        var _this = this;
        var exportButton = document.getElementById('export_button');
        exportButton.addEventListener('click', function (event) {
            _this.createGif();
        });
        document.addEventListener('keydown', function (event) {
            if (event.code == 'Numpad0') {
                _this.createGif();
            }
        });
    };
    return App;
}());
var app = new App();
app.start();


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function relativePos(event, canvas) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: Math.floor(event.clientX - rect.left),
        y: Math.floor(event.clientY - rect.top)
    };
}
exports.relativePos = relativePos;
function animate(draw, rate) {
    var start = performance.now();
    var timeBetweenFrames = Math.floor(1000 / rate);
    var nextFrame = start + timeBetweenFrames;
    var id = requestAnimationFrame(function _animate(time) {
        if (time >= nextFrame) {
            nextFrame += timeBetweenFrames;
            draw();
        }
        id = requestAnimationFrame(_animate);
    });
    return function () {
        cancelAnimationFrame(id);
    };
}
exports.animate = animate;
function paintBorder(element) {
    element.classList.add('active');
}
exports.paintBorder = paintBorder;
function cancelBorder(element) {
    element.classList.remove('active');
}
exports.cancelBorder = cancelBorder;
function getSquareCoordinates(x, y, penSize, squareLength) {
    return {
        x: Math.floor(x / squareLength) * squareLength,
        y: Math.floor(y / squareLength) * squareLength,
        width: squareLength * penSize,
        height: squareLength * penSize
    };
}
exports.getSquareCoordinates = getSquareCoordinates;
function drawLine(prevPos, currentPos, callback) {
    var deltaX = Math.abs(currentPos.x - prevPos.x);
    var deltaY = Math.abs(currentPos.y - prevPos.y);
    var signX = prevPos.x < currentPos.x ? 1 : -1;
    var signY = prevPos.y < currentPos.y ? 1 : -1;
    var error = deltaX - deltaY;
    callback(currentPos);
    while (prevPos.x != currentPos.x || prevPos.y != currentPos.y) {
        callback(prevPos);
        var error2 = error * 2;
        //
        if (error2 > -deltaY) {
            error -= deltaY;
            prevPos.x += signX;
        }
        if (error2 < deltaX) {
            error += deltaX;
            prevPos.y += signY;
        }
    }
}
exports.drawLine = drawLine;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dpZi5qcy9kaXN0L2dpZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hbmltYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FudmFzU2l6ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb2xvclBpY2tlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jdXJzb3JDb29yZGluYXRlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9lcmFzZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZmlsbFJlY3RhbmdsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mcmFtZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGluZURyYXdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWludF9idWNrZXRfdG9vbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wZW5TaXplLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BlbmNpbF90b29sLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3N0cm9rZVJlY3RhbmdsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFD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QyxDQUFDLENBQUMsQ0FBQztJQUNsRCxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xELElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRCxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEQsSUFBSSxLQUFLLEdBQUcsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUM1QixRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDckIsT0FBTSxPQUFPLENBQUMsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsSUFBSSxVQUFVLENBQUMsQ0FBQyxFQUM1RDtRQUNJLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsQixJQUFJLE1BQU0sR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLEVBQUU7UUFDRixJQUFHLE1BQU0sR0FBRyxDQUFDLE1BQU0sRUFDbkI7WUFDSSxLQUFLLElBQUksTUFBTSxDQUFDO1lBQ2hCLE9BQU8sQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDO1NBQ3RCO1FBQ0QsSUFBRyxNQUFNLEdBQUcsTUFBTSxFQUNsQjtZQUNJLEtBQUssSUFBSSxNQUFNLENBQUM7WUFDaEIsT0FBTyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUM7U0FDdEI7S0FDSjtBQUNMLENBQUM7QUF2QkQsNEJBdUJDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIi8vIGdpZi5qcyAwLjIuMCAtIGh0dHBzOi8vZ2l0aHViLmNvbS9qbm9yZGJlcmcvZ2lmLmpzXG4oZnVuY3Rpb24oZil7aWYodHlwZW9mIGV4cG9ydHM9PT1cIm9iamVjdFwiJiZ0eXBlb2YgbW9kdWxlIT09XCJ1bmRlZmluZWRcIil7bW9kdWxlLmV4cG9ydHM9ZigpfWVsc2UgaWYodHlwZW9mIGRlZmluZT09PVwiZnVuY3Rpb25cIiYmZGVmaW5lLmFtZCl7ZGVmaW5lKFtdLGYpfWVsc2V7dmFyIGc7aWYodHlwZW9mIHdpbmRvdyE9PVwidW5kZWZpbmVkXCIpe2c9d2luZG93fWVsc2UgaWYodHlwZW9mIGdsb2JhbCE9PVwidW5kZWZpbmVkXCIpe2c9Z2xvYmFsfWVsc2UgaWYodHlwZW9mIHNlbGYhPT1cInVuZGVmaW5lZFwiKXtnPXNlbGZ9ZWxzZXtnPXRoaXN9Zy5HSUY9ZigpfX0pKGZ1bmN0aW9uKCl7dmFyIGRlZmluZSxtb2R1bGUsZXhwb3J0cztyZXR1cm4gZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KHsxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtmdW5jdGlvbiBFdmVudEVtaXR0ZXIoKXt0aGlzLl9ldmVudHM9dGhpcy5fZXZlbnRzfHx7fTt0aGlzLl9tYXhMaXN0ZW5lcnM9dGhpcy5fbWF4TGlzdGVuZXJzfHx1bmRlZmluZWR9bW9kdWxlLmV4cG9ydHM9RXZlbnRFbWl0dGVyO0V2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXI9RXZlbnRFbWl0dGVyO0V2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50cz11bmRlZmluZWQ7RXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fbWF4TGlzdGVuZXJzPXVuZGVmaW5lZDtFdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycz0xMDtFdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycz1mdW5jdGlvbihuKXtpZighaXNOdW1iZXIobil8fG48MHx8aXNOYU4obikpdGhyb3cgVHlwZUVycm9yKFwibiBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyXCIpO3RoaXMuX21heExpc3RlbmVycz1uO3JldHVybiB0aGlzfTtFdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQ9ZnVuY3Rpb24odHlwZSl7dmFyIGVyLGhhbmRsZXIsbGVuLGFyZ3MsaSxsaXN0ZW5lcnM7aWYoIXRoaXMuX2V2ZW50cyl0aGlzLl9ldmVudHM9e307aWYodHlwZT09PVwiZXJyb3JcIil7aWYoIXRoaXMuX2V2ZW50cy5lcnJvcnx8aXNPYmplY3QodGhpcy5fZXZlbnRzLmVycm9yKSYmIXRoaXMuX2V2ZW50cy5lcnJvci5sZW5ndGgpe2VyPWFyZ3VtZW50c1sxXTtpZihlciBpbnN0YW5jZW9mIEVycm9yKXt0aHJvdyBlcn1lbHNle3ZhciBlcnI9bmV3IEVycm9yKCdVbmNhdWdodCwgdW5zcGVjaWZpZWQgXCJlcnJvclwiIGV2ZW50LiAoJytlcitcIilcIik7ZXJyLmNvbnRleHQ9ZXI7dGhyb3cgZXJyfX19aGFuZGxlcj10aGlzLl9ldmVudHNbdHlwZV07aWYoaXNVbmRlZmluZWQoaGFuZGxlcikpcmV0dXJuIGZhbHNlO2lmKGlzRnVuY3Rpb24oaGFuZGxlcikpe3N3aXRjaChhcmd1bWVudHMubGVuZ3RoKXtjYXNlIDE6aGFuZGxlci5jYWxsKHRoaXMpO2JyZWFrO2Nhc2UgMjpoYW5kbGVyLmNhbGwodGhpcyxhcmd1bWVudHNbMV0pO2JyZWFrO2Nhc2UgMzpoYW5kbGVyLmNhbGwodGhpcyxhcmd1bWVudHNbMV0sYXJndW1lbnRzWzJdKTticmVhaztkZWZhdWx0OmFyZ3M9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpO2hhbmRsZXIuYXBwbHkodGhpcyxhcmdzKX19ZWxzZSBpZihpc09iamVjdChoYW5kbGVyKSl7YXJncz1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMSk7bGlzdGVuZXJzPWhhbmRsZXIuc2xpY2UoKTtsZW49bGlzdGVuZXJzLmxlbmd0aDtmb3IoaT0wO2k8bGVuO2krKylsaXN0ZW5lcnNbaV0uYXBwbHkodGhpcyxhcmdzKX1yZXR1cm4gdHJ1ZX07RXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcj1mdW5jdGlvbih0eXBlLGxpc3RlbmVyKXt2YXIgbTtpZighaXNGdW5jdGlvbihsaXN0ZW5lcikpdGhyb3cgVHlwZUVycm9yKFwibGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO2lmKCF0aGlzLl9ldmVudHMpdGhpcy5fZXZlbnRzPXt9O2lmKHRoaXMuX2V2ZW50cy5uZXdMaXN0ZW5lcil0aGlzLmVtaXQoXCJuZXdMaXN0ZW5lclwiLHR5cGUsaXNGdW5jdGlvbihsaXN0ZW5lci5saXN0ZW5lcik/bGlzdGVuZXIubGlzdGVuZXI6bGlzdGVuZXIpO2lmKCF0aGlzLl9ldmVudHNbdHlwZV0pdGhpcy5fZXZlbnRzW3R5cGVdPWxpc3RlbmVyO2Vsc2UgaWYoaXNPYmplY3QodGhpcy5fZXZlbnRzW3R5cGVdKSl0aGlzLl9ldmVudHNbdHlwZV0ucHVzaChsaXN0ZW5lcik7ZWxzZSB0aGlzLl9ldmVudHNbdHlwZV09W3RoaXMuX2V2ZW50c1t0eXBlXSxsaXN0ZW5lcl07aWYoaXNPYmplY3QodGhpcy5fZXZlbnRzW3R5cGVdKSYmIXRoaXMuX2V2ZW50c1t0eXBlXS53YXJuZWQpe2lmKCFpc1VuZGVmaW5lZCh0aGlzLl9tYXhMaXN0ZW5lcnMpKXttPXRoaXMuX21heExpc3RlbmVyc31lbHNle209RXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnN9aWYobSYmbT4wJiZ0aGlzLl9ldmVudHNbdHlwZV0ubGVuZ3RoPm0pe3RoaXMuX2V2ZW50c1t0eXBlXS53YXJuZWQ9dHJ1ZTtjb25zb2xlLmVycm9yKFwiKG5vZGUpIHdhcm5pbmc6IHBvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgXCIrXCJsZWFrIGRldGVjdGVkLiAlZCBsaXN0ZW5lcnMgYWRkZWQuIFwiK1wiVXNlIGVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKCkgdG8gaW5jcmVhc2UgbGltaXQuXCIsdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aCk7aWYodHlwZW9mIGNvbnNvbGUudHJhY2U9PT1cImZ1bmN0aW9uXCIpe2NvbnNvbGUudHJhY2UoKX19fXJldHVybiB0aGlzfTtFdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uPUV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXI7RXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlPWZ1bmN0aW9uKHR5cGUsbGlzdGVuZXIpe2lmKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSl0aHJvdyBUeXBlRXJyb3IoXCJsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb25cIik7dmFyIGZpcmVkPWZhbHNlO2Z1bmN0aW9uIGcoKXt0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsZyk7aWYoIWZpcmVkKXtmaXJlZD10cnVlO2xpc3RlbmVyLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19Zy5saXN0ZW5lcj1saXN0ZW5lcjt0aGlzLm9uKHR5cGUsZyk7cmV0dXJuIHRoaXN9O0V2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXI9ZnVuY3Rpb24odHlwZSxsaXN0ZW5lcil7dmFyIGxpc3QscG9zaXRpb24sbGVuZ3RoLGk7aWYoIWlzRnVuY3Rpb24obGlzdGVuZXIpKXRocm93IFR5cGVFcnJvcihcImxpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvblwiKTtpZighdGhpcy5fZXZlbnRzfHwhdGhpcy5fZXZlbnRzW3R5cGVdKXJldHVybiB0aGlzO2xpc3Q9dGhpcy5fZXZlbnRzW3R5cGVdO2xlbmd0aD1saXN0Lmxlbmd0aDtwb3NpdGlvbj0tMTtpZihsaXN0PT09bGlzdGVuZXJ8fGlzRnVuY3Rpb24obGlzdC5saXN0ZW5lcikmJmxpc3QubGlzdGVuZXI9PT1saXN0ZW5lcil7ZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtpZih0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpdGhpcy5lbWl0KFwicmVtb3ZlTGlzdGVuZXJcIix0eXBlLGxpc3RlbmVyKX1lbHNlIGlmKGlzT2JqZWN0KGxpc3QpKXtmb3IoaT1sZW5ndGg7aS0tID4wOyl7aWYobGlzdFtpXT09PWxpc3RlbmVyfHxsaXN0W2ldLmxpc3RlbmVyJiZsaXN0W2ldLmxpc3RlbmVyPT09bGlzdGVuZXIpe3Bvc2l0aW9uPWk7YnJlYWt9fWlmKHBvc2l0aW9uPDApcmV0dXJuIHRoaXM7aWYobGlzdC5sZW5ndGg9PT0xKXtsaXN0Lmxlbmd0aD0wO2RlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV19ZWxzZXtsaXN0LnNwbGljZShwb3NpdGlvbiwxKX1pZih0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpdGhpcy5lbWl0KFwicmVtb3ZlTGlzdGVuZXJcIix0eXBlLGxpc3RlbmVyKX1yZXR1cm4gdGhpc307RXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnM9ZnVuY3Rpb24odHlwZSl7dmFyIGtleSxsaXN0ZW5lcnM7aWYoIXRoaXMuX2V2ZW50cylyZXR1cm4gdGhpcztpZighdGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKXtpZihhcmd1bWVudHMubGVuZ3RoPT09MCl0aGlzLl9ldmVudHM9e307ZWxzZSBpZih0aGlzLl9ldmVudHNbdHlwZV0pZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtyZXR1cm4gdGhpc31pZihhcmd1bWVudHMubGVuZ3RoPT09MCl7Zm9yKGtleSBpbiB0aGlzLl9ldmVudHMpe2lmKGtleT09PVwicmVtb3ZlTGlzdGVuZXJcIiljb250aW51ZTt0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhrZXkpfXRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKFwicmVtb3ZlTGlzdGVuZXJcIik7dGhpcy5fZXZlbnRzPXt9O3JldHVybiB0aGlzfWxpc3RlbmVycz10aGlzLl9ldmVudHNbdHlwZV07aWYoaXNGdW5jdGlvbihsaXN0ZW5lcnMpKXt0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsbGlzdGVuZXJzKX1lbHNlIGlmKGxpc3RlbmVycyl7d2hpbGUobGlzdGVuZXJzLmxlbmd0aCl0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsbGlzdGVuZXJzW2xpc3RlbmVycy5sZW5ndGgtMV0pfWRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07cmV0dXJuIHRoaXN9O0V2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzPWZ1bmN0aW9uKHR5cGUpe3ZhciByZXQ7aWYoIXRoaXMuX2V2ZW50c3x8IXRoaXMuX2V2ZW50c1t0eXBlXSlyZXQ9W107ZWxzZSBpZihpc0Z1bmN0aW9uKHRoaXMuX2V2ZW50c1t0eXBlXSkpcmV0PVt0aGlzLl9ldmVudHNbdHlwZV1dO2Vsc2UgcmV0PXRoaXMuX2V2ZW50c1t0eXBlXS5zbGljZSgpO3JldHVybiByZXR9O0V2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJDb3VudD1mdW5jdGlvbih0eXBlKXtpZih0aGlzLl9ldmVudHMpe3ZhciBldmxpc3RlbmVyPXRoaXMuX2V2ZW50c1t0eXBlXTtpZihpc0Z1bmN0aW9uKGV2bGlzdGVuZXIpKXJldHVybiAxO2Vsc2UgaWYoZXZsaXN0ZW5lcilyZXR1cm4gZXZsaXN0ZW5lci5sZW5ndGh9cmV0dXJuIDB9O0V2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50PWZ1bmN0aW9uKGVtaXR0ZXIsdHlwZSl7cmV0dXJuIGVtaXR0ZXIubGlzdGVuZXJDb3VudCh0eXBlKX07ZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpe3JldHVybiB0eXBlb2YgYXJnPT09XCJmdW5jdGlvblwifWZ1bmN0aW9uIGlzTnVtYmVyKGFyZyl7cmV0dXJuIHR5cGVvZiBhcmc9PT1cIm51bWJlclwifWZ1bmN0aW9uIGlzT2JqZWN0KGFyZyl7cmV0dXJuIHR5cGVvZiBhcmc9PT1cIm9iamVjdFwiJiZhcmchPT1udWxsfWZ1bmN0aW9uIGlzVW5kZWZpbmVkKGFyZyl7cmV0dXJuIGFyZz09PXZvaWQgMH19LHt9XSwyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXt2YXIgVUEsYnJvd3Nlcixtb2RlLHBsYXRmb3JtLHVhO3VhPW5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtwbGF0Zm9ybT1uYXZpZ2F0b3IucGxhdGZvcm0udG9Mb3dlckNhc2UoKTtVQT11YS5tYXRjaCgvKG9wZXJhfGllfGZpcmVmb3h8Y2hyb21lfHZlcnNpb24pW1xcc1xcLzpdKFtcXHdcXGRcXC5dKyk/Lio/KHNhZmFyaXx2ZXJzaW9uW1xcc1xcLzpdKFtcXHdcXGRcXC5dKyl8JCkvKXx8W251bGwsXCJ1bmtub3duXCIsMF07bW9kZT1VQVsxXT09PVwiaWVcIiYmZG9jdW1lbnQuZG9jdW1lbnRNb2RlO2Jyb3dzZXI9e25hbWU6VUFbMV09PT1cInZlcnNpb25cIj9VQVszXTpVQVsxXSx2ZXJzaW9uOm1vZGV8fHBhcnNlRmxvYXQoVUFbMV09PT1cIm9wZXJhXCImJlVBWzRdP1VBWzRdOlVBWzJdKSxwbGF0Zm9ybTp7bmFtZTp1YS5tYXRjaCgvaXAoPzphZHxvZHxob25lKS8pP1wiaW9zXCI6KHVhLm1hdGNoKC8oPzp3ZWJvc3xhbmRyb2lkKS8pfHxwbGF0Zm9ybS5tYXRjaCgvbWFjfHdpbnxsaW51eC8pfHxbXCJvdGhlclwiXSlbMF19fTticm93c2VyW2Jyb3dzZXIubmFtZV09dHJ1ZTticm93c2VyW2Jyb3dzZXIubmFtZStwYXJzZUludChicm93c2VyLnZlcnNpb24sMTApXT10cnVlO2Jyb3dzZXIucGxhdGZvcm1bYnJvd3Nlci5wbGF0Zm9ybS5uYW1lXT10cnVlO21vZHVsZS5leHBvcnRzPWJyb3dzZXJ9LHt9XSwzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXt2YXIgRXZlbnRFbWl0dGVyLEdJRixicm93c2VyLGV4dGVuZD1mdW5jdGlvbihjaGlsZCxwYXJlbnQpe2Zvcih2YXIga2V5IGluIHBhcmVudCl7aWYoaGFzUHJvcC5jYWxsKHBhcmVudCxrZXkpKWNoaWxkW2tleV09cGFyZW50W2tleV19ZnVuY3Rpb24gY3Rvcigpe3RoaXMuY29uc3RydWN0b3I9Y2hpbGR9Y3Rvci5wcm90b3R5cGU9cGFyZW50LnByb3RvdHlwZTtjaGlsZC5wcm90b3R5cGU9bmV3IGN0b3I7Y2hpbGQuX19zdXBlcl9fPXBhcmVudC5wcm90b3R5cGU7cmV0dXJuIGNoaWxkfSxoYXNQcm9wPXt9Lmhhc093blByb3BlcnR5LGluZGV4T2Y9W10uaW5kZXhPZnx8ZnVuY3Rpb24oaXRlbSl7Zm9yKHZhciBpPTAsbD10aGlzLmxlbmd0aDtpPGw7aSsrKXtpZihpIGluIHRoaXMmJnRoaXNbaV09PT1pdGVtKXJldHVybiBpfXJldHVybi0xfSxzbGljZT1bXS5zbGljZTtFdmVudEVtaXR0ZXI9cmVxdWlyZShcImV2ZW50c1wiKS5FdmVudEVtaXR0ZXI7YnJvd3Nlcj1yZXF1aXJlKFwiLi9icm93c2VyLmNvZmZlZVwiKTtHSUY9ZnVuY3Rpb24oc3VwZXJDbGFzcyl7dmFyIGRlZmF1bHRzLGZyYW1lRGVmYXVsdHM7ZXh0ZW5kKEdJRixzdXBlckNsYXNzKTtkZWZhdWx0cz17d29ya2VyU2NyaXB0OlwiZ2lmLndvcmtlci5qc1wiLHdvcmtlcnM6MixyZXBlYXQ6MCxiYWNrZ3JvdW5kOlwiI2ZmZlwiLHF1YWxpdHk6MTAsd2lkdGg6bnVsbCxoZWlnaHQ6bnVsbCx0cmFuc3BhcmVudDpudWxsLGRlYnVnOmZhbHNlLGRpdGhlcjpmYWxzZX07ZnJhbWVEZWZhdWx0cz17ZGVsYXk6NTAwLGNvcHk6ZmFsc2V9O2Z1bmN0aW9uIEdJRihvcHRpb25zKXt2YXIgYmFzZSxrZXksdmFsdWU7dGhpcy5ydW5uaW5nPWZhbHNlO3RoaXMub3B0aW9ucz17fTt0aGlzLmZyYW1lcz1bXTt0aGlzLmZyZWVXb3JrZXJzPVtdO3RoaXMuYWN0aXZlV29ya2Vycz1bXTt0aGlzLnNldE9wdGlvbnMob3B0aW9ucyk7Zm9yKGtleSBpbiBkZWZhdWx0cyl7dmFsdWU9ZGVmYXVsdHNba2V5XTtpZigoYmFzZT10aGlzLm9wdGlvbnMpW2tleV09PW51bGwpe2Jhc2Vba2V5XT12YWx1ZX19fUdJRi5wcm90b3R5cGUuc2V0T3B0aW9uPWZ1bmN0aW9uKGtleSx2YWx1ZSl7dGhpcy5vcHRpb25zW2tleV09dmFsdWU7aWYodGhpcy5fY2FudmFzIT1udWxsJiYoa2V5PT09XCJ3aWR0aFwifHxrZXk9PT1cImhlaWdodFwiKSl7cmV0dXJuIHRoaXMuX2NhbnZhc1trZXldPXZhbHVlfX07R0lGLnByb3RvdHlwZS5zZXRPcHRpb25zPWZ1bmN0aW9uKG9wdGlvbnMpe3ZhciBrZXkscmVzdWx0cyx2YWx1ZTtyZXN1bHRzPVtdO2ZvcihrZXkgaW4gb3B0aW9ucyl7aWYoIWhhc1Byb3AuY2FsbChvcHRpb25zLGtleSkpY29udGludWU7dmFsdWU9b3B0aW9uc1trZXldO3Jlc3VsdHMucHVzaCh0aGlzLnNldE9wdGlvbihrZXksdmFsdWUpKX1yZXR1cm4gcmVzdWx0c307R0lGLnByb3RvdHlwZS5hZGRGcmFtZT1mdW5jdGlvbihpbWFnZSxvcHRpb25zKXt2YXIgZnJhbWUsa2V5O2lmKG9wdGlvbnM9PW51bGwpe29wdGlvbnM9e319ZnJhbWU9e307ZnJhbWUudHJhbnNwYXJlbnQ9dGhpcy5vcHRpb25zLnRyYW5zcGFyZW50O2ZvcihrZXkgaW4gZnJhbWVEZWZhdWx0cyl7ZnJhbWVba2V5XT1vcHRpb25zW2tleV18fGZyYW1lRGVmYXVsdHNba2V5XX1pZih0aGlzLm9wdGlvbnMud2lkdGg9PW51bGwpe3RoaXMuc2V0T3B0aW9uKFwid2lkdGhcIixpbWFnZS53aWR0aCl9aWYodGhpcy5vcHRpb25zLmhlaWdodD09bnVsbCl7dGhpcy5zZXRPcHRpb24oXCJoZWlnaHRcIixpbWFnZS5oZWlnaHQpfWlmKHR5cGVvZiBJbWFnZURhdGEhPT1cInVuZGVmaW5lZFwiJiZJbWFnZURhdGEhPT1udWxsJiZpbWFnZSBpbnN0YW5jZW9mIEltYWdlRGF0YSl7ZnJhbWUuZGF0YT1pbWFnZS5kYXRhfWVsc2UgaWYodHlwZW9mIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCE9PVwidW5kZWZpbmVkXCImJkNhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCE9PW51bGwmJmltYWdlIGluc3RhbmNlb2YgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfHx0eXBlb2YgV2ViR0xSZW5kZXJpbmdDb250ZXh0IT09XCJ1bmRlZmluZWRcIiYmV2ViR0xSZW5kZXJpbmdDb250ZXh0IT09bnVsbCYmaW1hZ2UgaW5zdGFuY2VvZiBXZWJHTFJlbmRlcmluZ0NvbnRleHQpe2lmKG9wdGlvbnMuY29weSl7ZnJhbWUuZGF0YT10aGlzLmdldENvbnRleHREYXRhKGltYWdlKX1lbHNle2ZyYW1lLmNvbnRleHQ9aW1hZ2V9fWVsc2UgaWYoaW1hZ2UuY2hpbGROb2RlcyE9bnVsbCl7aWYob3B0aW9ucy5jb3B5KXtmcmFtZS5kYXRhPXRoaXMuZ2V0SW1hZ2VEYXRhKGltYWdlKX1lbHNle2ZyYW1lLmltYWdlPWltYWdlfX1lbHNle3Rocm93IG5ldyBFcnJvcihcIkludmFsaWQgaW1hZ2VcIil9cmV0dXJuIHRoaXMuZnJhbWVzLnB1c2goZnJhbWUpfTtHSUYucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbigpe3ZhciBpLGosbnVtV29ya2VycyxyZWY7aWYodGhpcy5ydW5uaW5nKXt0aHJvdyBuZXcgRXJyb3IoXCJBbHJlYWR5IHJ1bm5pbmdcIil9aWYodGhpcy5vcHRpb25zLndpZHRoPT1udWxsfHx0aGlzLm9wdGlvbnMuaGVpZ2h0PT1udWxsKXt0aHJvdyBuZXcgRXJyb3IoXCJXaWR0aCBhbmQgaGVpZ2h0IG11c3QgYmUgc2V0IHByaW9yIHRvIHJlbmRlcmluZ1wiKX10aGlzLnJ1bm5pbmc9dHJ1ZTt0aGlzLm5leHRGcmFtZT0wO3RoaXMuZmluaXNoZWRGcmFtZXM9MDt0aGlzLmltYWdlUGFydHM9ZnVuY3Rpb24oKXt2YXIgaixyZWYscmVzdWx0cztyZXN1bHRzPVtdO2ZvcihpPWo9MCxyZWY9dGhpcy5mcmFtZXMubGVuZ3RoOzA8PXJlZj9qPHJlZjpqPnJlZjtpPTA8PXJlZj8rK2o6LS1qKXtyZXN1bHRzLnB1c2gobnVsbCl9cmV0dXJuIHJlc3VsdHN9LmNhbGwodGhpcyk7bnVtV29ya2Vycz10aGlzLnNwYXduV29ya2VycygpO2lmKHRoaXMub3B0aW9ucy5nbG9iYWxQYWxldHRlPT09dHJ1ZSl7dGhpcy5yZW5kZXJOZXh0RnJhbWUoKX1lbHNle2ZvcihpPWo9MCxyZWY9bnVtV29ya2VyczswPD1yZWY/ajxyZWY6aj5yZWY7aT0wPD1yZWY/KytqOi0tail7dGhpcy5yZW5kZXJOZXh0RnJhbWUoKX19dGhpcy5lbWl0KFwic3RhcnRcIik7cmV0dXJuIHRoaXMuZW1pdChcInByb2dyZXNzXCIsMCl9O0dJRi5wcm90b3R5cGUuYWJvcnQ9ZnVuY3Rpb24oKXt2YXIgd29ya2VyO3doaWxlKHRydWUpe3dvcmtlcj10aGlzLmFjdGl2ZVdvcmtlcnMuc2hpZnQoKTtpZih3b3JrZXI9PW51bGwpe2JyZWFrfXRoaXMubG9nKFwia2lsbGluZyBhY3RpdmUgd29ya2VyXCIpO3dvcmtlci50ZXJtaW5hdGUoKX10aGlzLnJ1bm5pbmc9ZmFsc2U7cmV0dXJuIHRoaXMuZW1pdChcImFib3J0XCIpfTtHSUYucHJvdG90eXBlLnNwYXduV29ya2Vycz1mdW5jdGlvbigpe3ZhciBqLG51bVdvcmtlcnMscmVmLHJlc3VsdHM7bnVtV29ya2Vycz1NYXRoLm1pbih0aGlzLm9wdGlvbnMud29ya2Vycyx0aGlzLmZyYW1lcy5sZW5ndGgpOyhmdW5jdGlvbigpe3Jlc3VsdHM9W107Zm9yKHZhciBqPXJlZj10aGlzLmZyZWVXb3JrZXJzLmxlbmd0aDtyZWY8PW51bVdvcmtlcnM/ajxudW1Xb3JrZXJzOmo+bnVtV29ya2VycztyZWY8PW51bVdvcmtlcnM/aisrOmotLSl7cmVzdWx0cy5wdXNoKGopfXJldHVybiByZXN1bHRzfSkuYXBwbHkodGhpcykuZm9yRWFjaChmdW5jdGlvbihfdGhpcyl7cmV0dXJuIGZ1bmN0aW9uKGkpe3ZhciB3b3JrZXI7X3RoaXMubG9nKFwic3Bhd25pbmcgd29ya2VyIFwiK2kpO3dvcmtlcj1uZXcgV29ya2VyKF90aGlzLm9wdGlvbnMud29ya2VyU2NyaXB0KTt3b3JrZXIub25tZXNzYWdlPWZ1bmN0aW9uKGV2ZW50KXtfdGhpcy5hY3RpdmVXb3JrZXJzLnNwbGljZShfdGhpcy5hY3RpdmVXb3JrZXJzLmluZGV4T2Yod29ya2VyKSwxKTtfdGhpcy5mcmVlV29ya2Vycy5wdXNoKHdvcmtlcik7cmV0dXJuIF90aGlzLmZyYW1lRmluaXNoZWQoZXZlbnQuZGF0YSl9O3JldHVybiBfdGhpcy5mcmVlV29ya2Vycy5wdXNoKHdvcmtlcil9fSh0aGlzKSk7cmV0dXJuIG51bVdvcmtlcnN9O0dJRi5wcm90b3R5cGUuZnJhbWVGaW5pc2hlZD1mdW5jdGlvbihmcmFtZSl7dmFyIGksaixyZWY7dGhpcy5sb2coXCJmcmFtZSBcIitmcmFtZS5pbmRleCtcIiBmaW5pc2hlZCAtIFwiK3RoaXMuYWN0aXZlV29ya2Vycy5sZW5ndGgrXCIgYWN0aXZlXCIpO3RoaXMuZmluaXNoZWRGcmFtZXMrKzt0aGlzLmVtaXQoXCJwcm9ncmVzc1wiLHRoaXMuZmluaXNoZWRGcmFtZXMvdGhpcy5mcmFtZXMubGVuZ3RoKTt0aGlzLmltYWdlUGFydHNbZnJhbWUuaW5kZXhdPWZyYW1lO2lmKHRoaXMub3B0aW9ucy5nbG9iYWxQYWxldHRlPT09dHJ1ZSl7dGhpcy5vcHRpb25zLmdsb2JhbFBhbGV0dGU9ZnJhbWUuZ2xvYmFsUGFsZXR0ZTt0aGlzLmxvZyhcImdsb2JhbCBwYWxldHRlIGFuYWx5emVkXCIpO2lmKHRoaXMuZnJhbWVzLmxlbmd0aD4yKXtmb3IoaT1qPTEscmVmPXRoaXMuZnJlZVdvcmtlcnMubGVuZ3RoOzE8PXJlZj9qPHJlZjpqPnJlZjtpPTE8PXJlZj8rK2o6LS1qKXt0aGlzLnJlbmRlck5leHRGcmFtZSgpfX19aWYoaW5kZXhPZi5jYWxsKHRoaXMuaW1hZ2VQYXJ0cyxudWxsKT49MCl7cmV0dXJuIHRoaXMucmVuZGVyTmV4dEZyYW1lKCl9ZWxzZXtyZXR1cm4gdGhpcy5maW5pc2hSZW5kZXJpbmcoKX19O0dJRi5wcm90b3R5cGUuZmluaXNoUmVuZGVyaW5nPWZ1bmN0aW9uKCl7dmFyIGRhdGEsZnJhbWUsaSxpbWFnZSxqLGssbCxsZW4sbGVuMSxsZW4yLGxlbjMsb2Zmc2V0LHBhZ2UscmVmLHJlZjEscmVmMjtsZW49MDtyZWY9dGhpcy5pbWFnZVBhcnRzO2ZvcihqPTAsbGVuMT1yZWYubGVuZ3RoO2o8bGVuMTtqKyspe2ZyYW1lPXJlZltqXTtsZW4rPShmcmFtZS5kYXRhLmxlbmd0aC0xKSpmcmFtZS5wYWdlU2l6ZStmcmFtZS5jdXJzb3J9bGVuKz1mcmFtZS5wYWdlU2l6ZS1mcmFtZS5jdXJzb3I7dGhpcy5sb2coXCJyZW5kZXJpbmcgZmluaXNoZWQgLSBmaWxlc2l6ZSBcIitNYXRoLnJvdW5kKGxlbi8xZTMpK1wia2JcIik7ZGF0YT1uZXcgVWludDhBcnJheShsZW4pO29mZnNldD0wO3JlZjE9dGhpcy5pbWFnZVBhcnRzO2ZvcihrPTAsbGVuMj1yZWYxLmxlbmd0aDtrPGxlbjI7aysrKXtmcmFtZT1yZWYxW2tdO3JlZjI9ZnJhbWUuZGF0YTtmb3IoaT1sPTAsbGVuMz1yZWYyLmxlbmd0aDtsPGxlbjM7aT0rK2wpe3BhZ2U9cmVmMltpXTtkYXRhLnNldChwYWdlLG9mZnNldCk7aWYoaT09PWZyYW1lLmRhdGEubGVuZ3RoLTEpe29mZnNldCs9ZnJhbWUuY3Vyc29yfWVsc2V7b2Zmc2V0Kz1mcmFtZS5wYWdlU2l6ZX19fWltYWdlPW5ldyBCbG9iKFtkYXRhXSx7dHlwZTpcImltYWdlL2dpZlwifSk7cmV0dXJuIHRoaXMuZW1pdChcImZpbmlzaGVkXCIsaW1hZ2UsZGF0YSl9O0dJRi5wcm90b3R5cGUucmVuZGVyTmV4dEZyYW1lPWZ1bmN0aW9uKCl7dmFyIGZyYW1lLHRhc2ssd29ya2VyO2lmKHRoaXMuZnJlZVdvcmtlcnMubGVuZ3RoPT09MCl7dGhyb3cgbmV3IEVycm9yKFwiTm8gZnJlZSB3b3JrZXJzXCIpfWlmKHRoaXMubmV4dEZyYW1lPj10aGlzLmZyYW1lcy5sZW5ndGgpe3JldHVybn1mcmFtZT10aGlzLmZyYW1lc1t0aGlzLm5leHRGcmFtZSsrXTt3b3JrZXI9dGhpcy5mcmVlV29ya2Vycy5zaGlmdCgpO3Rhc2s9dGhpcy5nZXRUYXNrKGZyYW1lKTt0aGlzLmxvZyhcInN0YXJ0aW5nIGZyYW1lIFwiKyh0YXNrLmluZGV4KzEpK1wiIG9mIFwiK3RoaXMuZnJhbWVzLmxlbmd0aCk7dGhpcy5hY3RpdmVXb3JrZXJzLnB1c2god29ya2VyKTtyZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHRhc2spfTtHSUYucHJvdG90eXBlLmdldENvbnRleHREYXRhPWZ1bmN0aW9uKGN0eCl7cmV0dXJuIGN0eC5nZXRJbWFnZURhdGEoMCwwLHRoaXMub3B0aW9ucy53aWR0aCx0aGlzLm9wdGlvbnMuaGVpZ2h0KS5kYXRhfTtHSUYucHJvdG90eXBlLmdldEltYWdlRGF0YT1mdW5jdGlvbihpbWFnZSl7dmFyIGN0eDtpZih0aGlzLl9jYW52YXM9PW51bGwpe3RoaXMuX2NhbnZhcz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO3RoaXMuX2NhbnZhcy53aWR0aD10aGlzLm9wdGlvbnMud2lkdGg7dGhpcy5fY2FudmFzLmhlaWdodD10aGlzLm9wdGlvbnMuaGVpZ2h0fWN0eD10aGlzLl9jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO2N0eC5zZXRGaWxsPXRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kO2N0eC5maWxsUmVjdCgwLDAsdGhpcy5vcHRpb25zLndpZHRoLHRoaXMub3B0aW9ucy5oZWlnaHQpO2N0eC5kcmF3SW1hZ2UoaW1hZ2UsMCwwKTtyZXR1cm4gdGhpcy5nZXRDb250ZXh0RGF0YShjdHgpfTtHSUYucHJvdG90eXBlLmdldFRhc2s9ZnVuY3Rpb24oZnJhbWUpe3ZhciBpbmRleCx0YXNrO2luZGV4PXRoaXMuZnJhbWVzLmluZGV4T2YoZnJhbWUpO3Rhc2s9e2luZGV4OmluZGV4LGxhc3Q6aW5kZXg9PT10aGlzLmZyYW1lcy5sZW5ndGgtMSxkZWxheTpmcmFtZS5kZWxheSx0cmFuc3BhcmVudDpmcmFtZS50cmFuc3BhcmVudCx3aWR0aDp0aGlzLm9wdGlvbnMud2lkdGgsaGVpZ2h0OnRoaXMub3B0aW9ucy5oZWlnaHQscXVhbGl0eTp0aGlzLm9wdGlvbnMucXVhbGl0eSxkaXRoZXI6dGhpcy5vcHRpb25zLmRpdGhlcixnbG9iYWxQYWxldHRlOnRoaXMub3B0aW9ucy5nbG9iYWxQYWxldHRlLHJlcGVhdDp0aGlzLm9wdGlvbnMucmVwZWF0LGNhblRyYW5zZmVyOmJyb3dzZXIubmFtZT09PVwiY2hyb21lXCJ9O2lmKGZyYW1lLmRhdGEhPW51bGwpe3Rhc2suZGF0YT1mcmFtZS5kYXRhfWVsc2UgaWYoZnJhbWUuY29udGV4dCE9bnVsbCl7dGFzay5kYXRhPXRoaXMuZ2V0Q29udGV4dERhdGEoZnJhbWUuY29udGV4dCl9ZWxzZSBpZihmcmFtZS5pbWFnZSE9bnVsbCl7dGFzay5kYXRhPXRoaXMuZ2V0SW1hZ2VEYXRhKGZyYW1lLmltYWdlKX1lbHNle3Rocm93IG5ldyBFcnJvcihcIkludmFsaWQgZnJhbWVcIil9cmV0dXJuIHRhc2t9O0dJRi5wcm90b3R5cGUubG9nPWZ1bmN0aW9uKCl7dmFyIGFyZ3M7YXJncz0xPD1hcmd1bWVudHMubGVuZ3RoP3NsaWNlLmNhbGwoYXJndW1lbnRzLDApOltdO2lmKCF0aGlzLm9wdGlvbnMuZGVidWcpe3JldHVybn1yZXR1cm4gY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSxhcmdzKX07cmV0dXJuIEdJRn0oRXZlbnRFbWl0dGVyKTttb2R1bGUuZXhwb3J0cz1HSUZ9LHtcIi4vYnJvd3Nlci5jb2ZmZWVcIjoyLGV2ZW50czoxfV19LHt9LFszXSkoMyl9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdpZi5qcy5tYXBcbiIsImltcG9ydCB7YW5pbWF0ZX0gZnJvbSBcIi4uL3V0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuaW1hdGlvbiB7XG4gICAgcHJpdmF0ZSBhbmltYXRpb25Db250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgc3RvcEFuaW1hdGlvbjogRnVuY3Rpb247XG4gICAgcHJpdmF0ZSBpbWFnZXNBcnJheTogc3RyaW5nW107XG4gICAgcHJpdmF0ZSBhbmltYXRpb25DYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGFuaW1hdGlvbkNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db250YWluZXIgPSBhbmltYXRpb25Db250YWluZXI7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ2FudmFzID0gdGhpcy5hbmltYXRpb25Db250YWluZXIucXVlcnlTZWxlY3RvcignI2FuaW1hdGlvbl9jYW52YXMnKTtcbiAgICAgICAgY29uc3QgcmVjdCA9IHRoaXMuZ2V0Q2FudmFzUmVjdCgpO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkNhbnZhcy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgU3RyaW5nKHJlY3Qud2lkdGgpKTtcbiAgICAgICAgdGhpcy5hbmltYXRpb25DYW52YXMuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBTdHJpbmcocmVjdC5oZWlnaHQpKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VMYWJlbCgpO1xuICAgICAgICB0aGlzLnNldFJhbmdlTGlzdGVuZXIoKTtcbiAgICAgICAgdGhpcy5hZGRGdWxsU2NyZWVuTGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldElucHV0UmFuZ2UoKTogSFRNTElucHV0RWxlbWVudCB7XG4gICAgICAgIHJldHVybiB0aGlzLmFuaW1hdGlvbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuaW5wdXRfcmFuZ2UnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRJbnB1dFJhbmdlVmFsdWUoKTogbnVtYmVyIHtcbiAgICAgICAgY29uc3QgaW5wdXRSYW5nZSA9IHRoaXMuZ2V0SW5wdXRSYW5nZSgpO1xuICAgICAgICByZXR1cm4gTnVtYmVyKGlucHV0UmFuZ2UudmFsdWUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2hhbmdlTGFiZWwgPSAoKTogdm9pZCA9PiB7XG4gICAgICAgIGNvbnN0IGlucHV0VmFsdWUgPSB0aGlzLmdldElucHV0UmFuZ2VWYWx1ZSgpO1xuICAgICAgICBjb25zdCBjdXJyZW50UmFuZ2UgPSB0aGlzLmFuaW1hdGlvbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY3VycmVudF9yYW5nZScpIGFzIEhUTUxTcGFuRWxlbWVudDtcbiAgICAgICAgY3VycmVudFJhbmdlLnRleHRDb250ZW50ID0gU3RyaW5nKGlucHV0VmFsdWUpO1xuICAgIH07XG5cbiAgICBwcml2YXRlIHNldFJhbmdlTGlzdGVuZXIoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGlucHV0UmFuZ2UgPSB0aGlzLmdldElucHV0UmFuZ2UoKTtcbiAgICAgICAgaW5wdXRSYW5nZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmNoYW5nZUxhYmVsKTtcbiAgICAgICAgaW5wdXRSYW5nZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0b3BBbmltYXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZUZyYW1lcyh0aGlzLmltYWdlc0FycmF5KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5jb2RlID09ICdBcnJvd1JpZ2h0Jykge1xuICAgICAgICAgICAgICAgIGlucHV0UmFuZ2UudmFsdWUgPSBTdHJpbmcoTnVtYmVyKGlucHV0UmFuZ2UudmFsdWUpICsgMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VMYWJlbCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcEFuaW1hdGlvbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0ZUZyYW1lcyh0aGlzLmltYWdlc0FycmF5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChldmVudC5jb2RlID09IFwiQXJyb3dMZWZ0XCIpIHtcbiAgICAgICAgICAgICAgICBpbnB1dFJhbmdlLnZhbHVlID0gU3RyaW5nKE51bWJlcihpbnB1dFJhbmdlLnZhbHVlKSAtIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlTGFiZWwoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BBbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGVGcmFtZXModGhpcy5pbWFnZXNBcnJheSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRDYW52YXNSZWN0KCk6IENsaWVudFJlY3Qge1xuICAgICAgICByZXR1cm4gdGhpcy5hbmltYXRpb25DYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFuaW1hdGVGcmFtZXMoYXJyYXk6IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLmdldENhbnZhc1JlY3QoKTtcbiAgICAgICAgY29uc3QgYW5pbWF0aW9uQ29udGV4dCA9IHRoaXMuYW5pbWF0aW9uQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIGNvbnN0IGlucHV0UmFuZ2VWYWx1ZSA9IHRoaXMuZ2V0SW5wdXRSYW5nZVZhbHVlKCk7XG4gICAgICAgIGxldCBmcmFtZUluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5pbWFnZXNBcnJheSA9IGFycmF5O1xuICAgICAgICB0aGlzLnN0b3BBbmltYXRpb24gPSBhbmltYXRlKCgpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGlmIChhcnJheVtmcmFtZUluZGV4XSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3JjID0gYXJyYXlbZnJhbWVJbmRleF07XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uQ29udGV4dC5jbGVhclJlY3QoMCwwLCByZWN0LndpZHRoLCByZWN0LmhlaWdodCk7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uQ29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDAsIHJlY3Qud2lkdGgsIHJlY3QuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBmcmFtZUluZGV4Kys7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmcmFtZUluZGV4ID49IGFycmF5Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGZyYW1lSW5kZXggPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0sIGlucHV0UmFuZ2VWYWx1ZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRGdWxsU2NyZWVuTGlzdGVuZXIoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMuYW5pbWF0aW9uQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJyNmdWxsX3NjcmVlbl9idXR0b24nKTtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25DYW52YXMucmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5jb2RlID09ICdOdW1wYWRFbnRlcicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvbkNhbnZhcy5yZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxufVxuIiwiY29uc3QgYWN0aXZlQ2xhc3MgPSAnYWN0aXZlX2J1dHRvbic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXNTaXplIHtcbiAgICBwcml2YXRlIGNhbnZhc1NpemU6IG51bWJlciA9IDMyO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBwcml2YXRlIGN1cnJlbnRTaXplOiBudW1iZXIgPSAzMjtcbiAgICBwcml2YXRlIGNhbGxiYWNrOiBGdW5jdGlvbjtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJhd19jYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICAgICAgdGhpcy5hZGRDYW52YXNTaXplTGlzdGVuZXIoKTtcbiAgICAgICAgdGhpcy5zZXRDYW52YXNJbmZvcm1hdGlvbigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0Q2FudmFzQ29udGV4dCgpOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQge1xuICAgICAgICByZXR1cm4gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZENhbnZhc1NpemVMaXN0ZW5lcigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5nZXRDYW52YXNDb250ZXh0KCk7XG4gICAgICAgIGN0eC5zY2FsZSg0LDQpO1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NhbGVfY2FudmFzX2NvbnRhaW5lcicpO1xuICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQ6IEV2ZW50KTogdm9pZCA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbGVtID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxEaXZFbGVtZW50O1xuICAgICAgICAgICAgbGV0IHByZXZFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7YWN0aXZlQ2xhc3N9YCkgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgICAgICAgICBpZiAoZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoJ3NjYWxlX2NhbnZhc19idXR0b24nKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzU2l6ZSA9IE51bWJlcihlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1jYW52YXNzaXplJykpO1xuICAgICAgICAgICAgICAgIHRoaXMub25DYW52YXNTaXplU2VsZWN0ZWQoZWxlbSwgcHJldkVsZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2l6ZUNvbGxlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzY2FsZV9jYW52YXNfYnV0dG9uJykgYXMgSFRNTENvbGxlY3Rpb247XG4gICAgICAgICAgICBsZXQgcHJldkVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHthY3RpdmVDbGFzc31gKSBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1JbmRleCA9IEFycmF5LmZyb20oc2l6ZUNvbGxlY3Rpb24pLmluZGV4T2YocHJldkVsZW0pO1xuXG4gICAgICAgICAgICBsZXQgbmV4dEluZGV4O1xuICAgICAgICAgICAgaWYgKGV2ZW50LmNvZGUgPT0gJ0Fycm93RG93bicpIHtcbiAgICAgICAgICAgICAgICBuZXh0SW5kZXggPSAoZWxlbUluZGV4ICsgMSkgJSBzaXplQ29sbGVjdGlvbi5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXZlbnQuY29kZSA9PSAnQXJyb3dVcCcpIHtcbiAgICAgICAgICAgICAgICBuZXh0SW5kZXggPSBlbGVtSW5kZXggLSAxICUgc2l6ZUNvbGxlY3Rpb24ubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGlmIChuZXh0SW5kZXggPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRJbmRleCA9IHNpemVDb2xsZWN0aW9uLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV2ZW50LmNvZGUgPT0gJ0Fycm93VXAnIHx8IGV2ZW50LmNvZGUgPT0gJ0Fycm93RG93bicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhc1NpemUgPSBOdW1iZXIoc2l6ZUNvbGxlY3Rpb25bbmV4dEluZGV4XS5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2FudmFzc2l6ZScpKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ2FudmFzU2l6ZVNlbGVjdGVkKHNpemVDb2xsZWN0aW9uW25leHRJbmRleF0gYXMgSFRNTERpdkVsZW1lbnQsIHByZXZFbGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQ2FudmFzU2l6ZVNlbGVjdGVkID0gKGVsZW06IEhUTUxEaXZFbGVtZW50LCBwcmV2RWxlbTogSFRNTERpdkVsZW1lbnQpOiB2b2lkID0+IHtcblxuICAgICAgICBsZXQgc2NhbGUgPSB0aGlzLmN1cnJlbnRTaXplIC8gdGhpcy5jYW52YXNTaXplO1xuICAgICAgICB0aGlzLnJlc2l6ZShzY2FsZSk7XG4gICAgICAgIHRoaXMuY2FsbGJhY2soKTtcbiAgICAgICAgdGhpcy5jdXJyZW50U2l6ZSA9IHRoaXMuY2FudmFzU2l6ZTtcbiAgICAgICAgdGhpcy5zZXRDYW52YXNJbmZvcm1hdGlvbigpO1xuICAgICAgICBpZiAocHJldkVsZW0pIHtcbiAgICAgICAgICAgIHByZXZFbGVtLmNsYXNzTGlzdC5yZW1vdmUoYWN0aXZlQ2xhc3MpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChhY3RpdmVDbGFzcyk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBnZXRTcXVhcmVMZW5ndGgoKTogbnVtYmVyIHtcbiAgICAgICAgY29uc3QgY2FudmFzV2lkdGggPSB0aGlzLmNhbnZhcy53aWR0aDtcbiAgICAgICAgcmV0dXJuIGNhbnZhc1dpZHRoIC8gdGhpcy5jYW52YXNTaXplO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDYW52YXNTaXplKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhbnZhc1NpemU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldENhbnZhc0luZm9ybWF0aW9uID0gKCk6IHZvaWQgPT4ge1xuICAgICAgICBjb25zdCBpbmZvcm1hdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmZvcm1hdGlvbl9jb250YWluZXInKSBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICAgICAgY29uc3QgY2FudmFzU2l6ZSA9IHRoaXMuZ2V0Q2FudmFzU2l6ZSgpO1xuICAgICAgICBpbmZvcm1hdGlvbkNvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgIDx0ciBjbGFzcz1cImNhbnZhc19zaXplX2luZm9cIj48dGQ+WyR7Y2FudmFzU2l6ZX0vJHtjYW52YXNTaXplfV08L3RkPjwvdHI+XG4gICAgICAgICAgICA8dHIgY2xhc3M9XCJjdXJzb3JfY29vcmRpbmF0ZXNcIj48L3RyPlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgXG4gICAgICAgIGA7XG4gICAgfTtcblxuICAgIHByaXZhdGUgcmVzaXplKHNjYWxlKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICBjb25zdCB0bXBDdHggPSB0bXAuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5nZXRDYW52YXNDb250ZXh0KCk7XG4gICAgICAgIGNvbnN0IGNhbnZhc1dpZHRoID0gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmNhbnZhcykud2lkdGgpO1xuICAgICAgICBjb25zdCBjYW52YXNIZWlnaHQgPSBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKHRoaXMuY2FudmFzKS5oZWlnaHQpO1xuICAgICAgICB0bXAud2lkdGggPSB0aGlzLmNhbnZhcy53aWR0aDtcbiAgICAgICAgdG1wLmhlaWdodCA9IHRoaXMuY2FudmFzLmhlaWdodDtcbiAgICAgICAgdG1wQ3R4LmRyYXdJbWFnZSh0aGlzLmNhbnZhcywgMCwgMCk7XG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwwLGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQpO1xuICAgICAgICBjb25zdCBkcmF3V2lkdGggPSBjYW52YXNXaWR0aCAqIHNjYWxlO1xuICAgICAgICBjb25zdCBkcmF3SGVpZ2h0ID0gY2FudmFzSGVpZ2h0ICogc2NhbGU7XG4gICAgICAgIGNvbnN0IGxlZnREcmF3ID0gKGNhbnZhc1dpZHRoIC0gZHJhd1dpZHRoKSAvIDI7XG4gICAgICAgIGNvbnN0IHRvcERyYXcgPSAoY2FudmFzSGVpZ2h0IC0gZHJhd0hlaWdodCkgLyAyO1xuICAgICAgICBjdHguaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodG1wLCBsZWZ0RHJhdywgdG9wRHJhdywgZHJhd1dpZHRoLCBkcmF3SGVpZ2h0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25VcGRhdGUgPSAoY2FsbGJhY2spOiB2b2lkID0+IHtcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIH07XG5cblxufVxuIiwiaW1wb3J0IHtQb2ludH0gZnJvbSBcIi4vcG9pbnRcIjtcbmltcG9ydCB7cmVsYXRpdmVQb3N9IGZyb20gXCIuLi91dGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvclBpY2tlciB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICAgIHByaXZhdGUgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgIHByaXZhdGUgY2FsbGJhY2s6IEZ1bmN0aW9uO1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwaXhlbENvbG9yKHBvaW50OiBQb2ludCk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHBpeGVsID0gdGhpcy5jb250ZXh0LmdldEltYWdlRGF0YShwb2ludC54LCBwb2ludC55LCAxLDEpLmRhdGEgYXMgVWludDhDbGFtcGVkQXJyYXk7XG4gICAgICAgIHJldHVybiBcInJnYihcIiArIHBpeGVsWzBdICsgXCIsIFwiICsgcGl4ZWxbMV0gKyBcIiwgXCIgKyBwaXhlbFsyXSArIFwiKVwiO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZWxlY3RlZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNlbGVjdENvbG9yKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdW5TZWxlY3RlZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNlbGVjdENvbG9yKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNlbGVjdENvbG9yID0gKGV2ZW50KTogdm9pZCA9PiB7XG4gICAgICAgIGNvbnN0IHBvcyA9IHJlbGF0aXZlUG9zKGV2ZW50LCB0aGlzLmNhbnZhcyk7XG4gICAgICAgIGxldCBjb2xvciA9IHRoaXMucGl4ZWxDb2xvcihwb3MpO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9IGNvbG9yO1xuICAgICAgICB0aGlzLmNhbGxiYWNrKCk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBvblVwZGF0ZSA9IChjYWxsYmFjayk6IHZvaWQgPT4ge1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgfTtcbn1cbiIsImltcG9ydCB7cmVsYXRpdmVQb3N9IGZyb20gXCIuLi91dGlsc1wiO1xuaW1wb3J0IENhbnZhc1NpemUgZnJvbSBcIi4vY2FudmFzU2l6ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXJzb3JDb29yZGluYXRlcyB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICAgIHByaXZhdGUgY2FudmFzU2l6ZTogQ2FudmFzU2l6ZTtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBjYW52YXNTaXplOiBDYW52YXNTaXplKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmNhbnZhc1NpemUgPSBjYW52YXNTaXplO1xuICAgICAgICB0aGlzLmN1cnNvckxpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGN1cnNvckxpc3RlbmVyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZXZlbnQpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBvcyA9IHJlbGF0aXZlUG9zKGV2ZW50LCB0aGlzLmNhbnZhcyk7XG4gICAgICAgICAgICBjb25zdCBzcXVhcmVMZW5ndGggPSB0aGlzLmNhbnZhc1NpemUuZ2V0U3F1YXJlTGVuZ3RoKCk7XG4gICAgICAgICAgICBjb25zdCB4UG9zID0gTWF0aC5mbG9vcihwb3MueCAvIHNxdWFyZUxlbmd0aCk7XG4gICAgICAgICAgICBjb25zdCB5UG9zID0gTWF0aC5mbG9vcihwb3MueSAvIHNxdWFyZUxlbmd0aCk7XG4gICAgICAgICAgICBjb25zdCBjdXJzb3JDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3Vyc29yX2Nvb3JkaW5hdGVzJykgYXMgSFRNTFRhYmxlUm93RWxlbWVudDtcbiAgICAgICAgICAgIGN1cnNvckNvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgPHRkPltbJHt4UG9zfToke3lQb3N9XV08L3RkPlxuICAgICAgICAgICAgYDtcbiAgICAgICAgfSlcbiAgICB9XG59XG4iLCJpbXBvcnQgTGluZURyYXdlciBmcm9tIFwiLi9saW5lRHJhd2VyXCI7XG5pbXBvcnQge1Rvb2x9IGZyb20gXCIuL3Rvb2xcIjtcbmltcG9ydCB7Z2V0U3F1YXJlQ29vcmRpbmF0ZXN9IGZyb20gXCIuLi91dGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcmFzZXIgZXh0ZW5kcyBMaW5lRHJhd2VyIGltcGxlbWVudHMgVG9vbCB7XG4gICAgcHJvdGVjdGVkIGRyYXdSZWN0ID0gKHBvcyk6IHZvaWQgPT4ge1xuICAgICAgICBsZXQgc3F1YXJlQ29vcmRpbmF0ZXMgPSBnZXRTcXVhcmVDb29yZGluYXRlcyhwb3MueCwgcG9zLnksIHRoaXMucGVuU2l6ZS5nZXRQZW5TaXplKCksIHRoaXMuY2FudmFzU2l6ZS5nZXRTcXVhcmVMZW5ndGgoKSk7XG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3Qoc3F1YXJlQ29vcmRpbmF0ZXMueCwgc3F1YXJlQ29vcmRpbmF0ZXMueSwgc3F1YXJlQ29vcmRpbmF0ZXMud2lkdGgsIHNxdWFyZUNvb3JkaW5hdGVzLmhlaWdodCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFN0cm9rZVJlY3RhbmdsZSBmcm9tIFwiLi9zdHJva2VSZWN0YW5nbGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsbFJlY3RhbmdsZSBleHRlbmRzIFN0cm9rZVJlY3RhbmdsZSB7XG4gICAgcHJvdGVjdGVkICBjcmVhdGVSZWN0KHJlY3Q6IHtcbiAgICAgICAgbGVmdDogbnVtYmVyO1xuICAgICAgICB0b3A6IG51bWJlcjtcbiAgICAgICAgd2lkdGg6IG51bWJlcjtcbiAgICAgICAgaGVpZ2h0OiBudW1iZXI7XG4gICAgfSk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QocmVjdC5sZWZ0LCByZWN0LnRvcCwgcmVjdC53aWR0aCwgcmVjdC5oZWlnaHQpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzdHlsaXplTm9kZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50cmFja2luZ05vZGUuc3R5bGUuYm9yZGVyID0gJ25vbmUnO1xuICAgICAgICB0aGlzLnRyYWNraW5nTm9kZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBTdHJpbmcodGhpcy5jb250ZXh0LmZpbGxTdHlsZSk7XG4gICAgfVxufVxuIiwiY29uc3QgZW1wdHlGcmFtZSA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFxQUFBQUdBQ0FZQUFBQnllTkJ1QUFBVXVrbEVRVlI0WHUzV01RMEFBQXpEc0pVLzZiSEk1UkdvWk8zSXpoRWdRSUFBQVFJRUNCQUlCUlp1bVNKQWdBQUJBZ1FJRUNCd0F0UVRFQ0JBZ0FBQkFnUUlwQUlDTk9VMlJvQUFBUUlFQ0JBZ0lFRDlBQUVDQkFnUUlFQ0FRQ29nUUZOdVl3UUlFQ0JBZ0FBQkFnTFVEeEFnUUlBQUFRSUVDS1FDQWpUbE5rYUFBQUVDQkFnUUlDQkEvUUFCQWdRSUVDQkFnRUFxSUVCVGJtTUVDQkFnUUlBQUFRSUMxQThRSUVDQUFBRUNCQWlrQWdJMDVUWkdnQUFCQWdRSUVDQWdRUDBBQVFJRUNCQWdRSUJBS2lCQVUyNWpCQWdRSUVDQUFBRUNBdFFQRUNCQWdBQUJBZ1FJcEFJQ05PVTJSb0FBQVFJRUNCQWdJRUQ5QUFFQ0JBZ1FJRUNBUUNvZ1FGTnVZd1FJRUNCQWdBQUJBZ0xVRHhBZ1FJQUFBUUlFQ0tRQ0FqVGxOa2FBQUFFQ0JBZ1FJQ0JBL1FBQkFnUUlFQ0JBZ0VBcUlFQlRibU1FQ0JBZ1FJQUFBUUlDMUE4UUlFQ0FBQUVDQkFpa0FnSTA1VFpHZ0FBQkFnUUlFQ0FnUVAwQUFRSUVDQkFnUUlCQUtpQkFVMjVqQkFnUUlFQ0FBQUVDQXRRUEVDQkFnQUFCQWdRSXBBSUNOT1UyUm9BQUFRSUVDQkFnSUVEOUFBRUNCQWdRSUVDQVFDb2dRRk51WXdRSUVDQkFnQUFCQWdMVUR4QWdRSUFBQVFJRUNLUUNBalRsTmthQUFBRUNCQWdRSUNCQS9RQUJBZ1FJRUNCQWdFQXFJRUJUYm1NRUNCQWdRSUFBQVFJQzFBOFFJRUNBQUFFQ0JBaWtBZ0kwNVRaR2dBQUJBZ1FJRUNBZ1FQMEFBUUlFQ0JBZ1FJQkFLaUJBVTI1akJBZ1FJRUNBQUFFQ0F0UVBFQ0JBZ0FBQkFnUUlwQUlDTk9VMlJvQUFBUUlFQ0JBZ0lFRDlBQUVDQkFnUUlFQ0FRQ29nUUZOdVl3UUlFQ0JBZ0FBQkFnTFVEeEFnUUlBQUFRSUVDS1FDQWpUbE5rYUFBQUVDQkFnUUlDQkEvUUFCQWdRSUVDQkFnRUFxSUVCVGJtTUVDQkFnUUlBQUFRSUMxQThRSUVDQUFBRUNCQWlrQWdJMDVUWkdnQUFCQWdRSUVDQWdRUDBBQVFJRUNCQWdRSUJBS2lCQVUyNWpCQWdRSUVDQUFBRUNBdFFQRUNCQWdBQUJBZ1FJcEFJQ05PVTJSb0FBQVFJRUNCQWdJRUQ5QUFFQ0JBZ1FJRUNBUUNvZ1FGTnVZd1FJRUNCQWdBQUJBZ0xVRHhBZ1FJQUFBUUlFQ0tRQ0FqVGxOa2FBQUFFQ0JBZ1FJQ0JBL1FBQkFnUUlFQ0JBZ0VBcUlFQlRibU1FQ0JBZ1FJQUFBUUlDMUE4UUlFQ0FBQUVDQkFpa0FnSTA1VFpHZ0FBQkFnUUlFQ0FnUVAwQUFRSUVDQkFnUUlCQUtpQkFVMjVqQkFnUUlFQ0FBQUVDQXRRUEVDQkFnQUFCQWdRSXBBSUNOT1UyUm9BQUFRSUVDQkFnSUVEOUFBRUNCQWdRSUVDQVFDb2dRRk51WXdRSUVDQkFnQUFCQWdMVUR4QWdRSUFBQVFJRUNLUUNBalRsTmthQUFBRUNCQWdRSUNCQS9RQUJBZ1FJRUNCQWdFQXFJRUJUYm1NRUNCQWdRSUFBQVFJQzFBOFFJRUNBQUFFQ0JBaWtBZ0kwNVRaR2dBQUJBZ1FJRUNBZ1FQMEFBUUlFQ0JBZ1FJQkFLaUJBVTI1akJBZ1FJRUNBQUFFQ0F0UVBFQ0JBZ0FBQkFnUUlwQUlDTk9VMlJvQUFBUUlFQ0JBZ0lFRDlBQUVDQkFnUUlFQ0FRQ29nUUZOdVl3UUlFQ0JBZ0FBQkFnTFVEeEFnUUlBQUFRSUVDS1FDQWpUbE5rYUFBQUVDQkFnUUlDQkEvUUFCQWdRSUVDQkFnRUFxSUVCVGJtTUVDQkFnUUlBQUFRSUMxQThRSUVDQUFBRUNCQWlrQWdJMDVUWkdnQUFCQWdRSUVDQWdRUDBBQVFJRUNCQWdRSUJBS2lCQVUyNWpCQWdRSUVDQUFBRUNBdFFQRUNCQWdBQUJBZ1FJcEFJQ05PVTJSb0FBQVFJRUNCQWdJRUQ5QUFFQ0JBZ1FJRUNBUUNvZ1FGTnVZd1FJRUNCQWdBQUJBZ0xVRHhBZ1FJQUFBUUlFQ0tRQ0FqVGxOa2FBQUFFQ0JBZ1FJQ0JBL1FBQkFnUUlFQ0JBZ0VBcUlFQlRibU1FQ0JBZ1FJQUFBUUlDMUE4UUlFQ0FBQUVDQkFpa0FnSTA1VFpHZ0FBQkFnUUlFQ0FnUVAwQUFRSUVDQkFnUUlCQUtpQkFVMjVqQkFnUUlFQ0FBQUVDQXRRUEVDQkFnQUFCQWdRSXBBSUNOT1UyUm9BQUFRSUVDQkFnSUVEOUFBRUNCQWdRSUVDQVFDb2dRRk51WXdRSUVDQkFnQUFCQWdMVUR4QWdRSUFBQVFJRUNLUUNBalRsTmthQUFBRUNCQWdRSUNCQS9RQUJBZ1FJRUNCQWdFQXFJRUJUYm1NRUNCQWdRSUFBQVFJQzFBOFFJRUNBQUFFQ0JBaWtBZ0kwNVRaR2dBQUJBZ1FJRUNBZ1FQMEFBUUlFQ0JBZ1FJQkFLaUJBVTI1akJBZ1FJRUNBQUFFQ0F0UVBFQ0JBZ0FBQkFnUUlwQUlDTk9VMlJvQUFBUUlFQ0JBZ0lFRDlBQUVDQkFnUUlFQ0FRQ29nUUZOdVl3UUlFQ0JBZ0FBQkFnTFVEeEFnUUlBQUFRSUVDS1FDQWpUbE5rYUFBQUVDQkFnUUlDQkEvUUFCQWdRSUVDQkFnRUFxSUVCVGJtTUVDQkFnUUlBQUFRSUMxQThRSUVDQUFBRUNCQWlrQWdJMDVUWkdnQUFCQWdRSUVDQWdRUDBBQVFJRUNCQWdRSUJBS2lCQVUyNWpCQWdRSUVDQUFBRUNBdFFQRUNCQWdBQUJBZ1FJcEFJQ05PVTJSb0FBQVFJRUNCQWdJRUQ5QUFFQ0JBZ1FJRUNBUUNvZ1FGTnVZd1FJRUNCQWdBQUJBZ0xVRHhBZ1FJQUFBUUlFQ0tRQ0FqVGxOa2FBQUFFQ0JBZ1FJQ0JBL1FBQkFnUUlFQ0JBZ0VBcUlFQlRibU1FQ0JBZ1FJQUFBUUlDMUE4UUlFQ0FBQUVDQkFpa0FnSTA1VFpHZ0FBQkFnUUlFQ0FnUVAwQUFRSUVDQkFnUUlCQUtpQkFVMjVqQkFnUUlFQ0FBQUVDQXRRUEVDQkFnQUFCQWdRSXBBSUNOT1UyUm9BQUFRSUVDQkFnSUVEOUFBRUNCQWdRSUVDQVFDb2dRRk51WXdRSUVDQkFnQUFCQWdMVUR4QWdRSUFBQVFJRUNLUUNBalRsTmthQUFBRUNCQWdRSUNCQS9RQUJBZ1FJRUNCQWdFQXFJRUJUYm1NRUNCQWdRSUFBQVFJQzFBOFFJRUNBQUFFQ0JBaWtBZ0kwNVRaR2dBQUJBZ1FJRUNBZ1FQMEFBUUlFQ0JBZ1FJQkFLaUJBVTI1akJBZ1FJRUNBQUFFQ0F0UVBFQ0JBZ0FBQkFnUUlwQUlDTk9VMlJvQUFBUUlFQ0JBZ0lFRDlBQUVDQkFnUUlFQ0FRQ29nUUZOdVl3UUlFQ0JBZ0FBQkFnTFVEeEFnUUlBQUFRSUVDS1FDQWpUbE5rYUFBQUVDQkFnUUlDQkEvUUFCQWdRSUVDQkFnRUFxSUVCVGJtTUVDQkFnUUlBQUFRSUMxQThRSUVDQUFBRUNCQWlrQWdJMDVUWkdnQUFCQWdRSUVDQWdRUDBBQVFJRUNCQWdRSUJBS2lCQVUyNWpCQWdRSUVDQUFBRUNBdFFQRUNCQWdBQUJBZ1FJcEFJQ05PVTJSb0FBQVFJRUNCQWdJRUQ5QUFFQ0JBZ1FJRUNBUUNvZ1FGTnVZd1FJRUNCQWdBQUJBZ0xVRHhBZ1FJQUFBUUlFQ0tRQ0FqVGxOa2FBQUFFQ0JBZ1FJQ0JBL1FBQkFnUUlFQ0JBZ0VBcUlFQlRibU1FQ0JBZ1FJQUFBUUlDMUE4UUlFQ0FBQUVDQkFpa0FnSTA1VFpHZ0FBQkFnUUlFQ0FnUVAwQUFRSUVDQkFnUUlCQUtpQkFVMjVqQkFnUUlFQ0FBQUVDQXRRUEVDQkFnQUFCQWdRSXBBSUNOT1UyUm9BQUFRSUVDQkFnSUVEOUFBRUNCQWdRSUVDQVFDb2dRRk51WXdRSUVDQkFnQUFCQWdMVUR4QWdRSUFBQVFJRUNLUUNBalRsTmthQUFBRUNCQWdRSUNCQS9RQUJBZ1FJRUNCQWdFQXFJRUJUYm1NRUNCQWdRSUFBQVFJQzFBOFFJRUNBQUFFQ0JBaWtBZ0kwNVRaR2dBQUJBZ1FJRUNBZ1FQMEFBUUlFQ0JBZ1FJQkFLaUJBVTI1akJBZ1FJRUNBQUFFQ0F0UVBFQ0JBZ0FBQkFnUUlwQUlDTk9VMlJvQUFBUUlFQ0JBZ0lFRDlBQUVDQkFnUUlFQ0FRQ29nUUZOdVl3UUlFQ0JBZ0FBQkFnTFVEeEFnUUlBQUFRSUVDS1FDQWpUbE5rYUFBQUVDQkFnUUlDQkEvUUFCQWdRSUVDQkFnRUFxSUVCVGJtTUVDQkFnUUlBQUFRSUMxQThRSUVDQUFBRUNCQWlrQWdJMDVUWkdnQUFCQWdRSUVDQWdRUDBBQVFJRUNCQWdRSUJBS2lCQVUyNWpCQWdRSUVDQUFBRUNBdFFQRUNCQWdBQUJBZ1FJcEFJQ05PVTJSb0FBQVFJRUNCQWdJRUQ5QUFFQ0JBZ1FJRUNBUUNvZ1FGTnVZd1FJRUNCQWdBQUJBZ0xVRHhBZ1FJQUFBUUlFQ0tRQ0FqVGxOa2FBQUFFQ0JBZ1FJQ0JBL1FBQkFnUUlFQ0JBZ0VBcUlFQlRibU1FQ0JBZ1FJQUFBUUlDMUE4UUlFQ0FBQUVDQkFpa0FnSTA1VFpHZ0FBQkFnUUlFQ0FnUVAwQUFRSUVDQkFnUUlCQUtpQkFVMjVqQkFnUUlFQ0FBQUVDQXRRUEVDQkFnQUFCQWdRSXBBSUNOT1UyUm9BQUFRSUVDQkFnSUVEOUFBRUNCQWdRSUVDQVFDb2dRRk51WXdRSUVDQkFnQUFCQWdMVUR4QWdRSUFBQVFJRUNLUUNBalRsTmthQUFBRUNCQWdRSUNCQS9RQUJBZ1FJRUNCQWdFQXFJRUJUYm1NRUNCQWdRSUFBQVFJQzFBOFFJRUNBQUFFQ0JBaWtBZ0kwNVRaR2dBQUJBZ1FJRUNBZ1FQMEFBUUlFQ0JBZ1FJQkFLaUJBVTI1akJBZ1FJRUNBQUFFQ0F0UVBFQ0JBZ0FBQkFnUUlwQUlDTk9VMlJvQUFBUUlFQ0JBZ0lFRDlBQUVDQkFnUUlFQ0FRQ29nUUZOdVl3UUlFQ0JBZ0FBQkFnTFVEeEFnUUlBQUFRSUVDS1FDQWpUbE5rYUFBQUVDQkFnUUlDQkEvUUFCQWdRSUVDQkFnRUFxSUVCVGJtTUVDQkFnUUlBQUFRSUMxQThRSUVDQUFBRUNCQWlrQWdJMDVUWkdnQUFCQWdRSUVDQWdRUDBBQVFJRUNCQWdRSUJBS2lCQVUyNWpCQWdRSUVDQUFBRUNBdFFQRUNCQWdBQUJBZ1FJcEFJQ05PVTJSb0FBQVFJRUNCQWdJRUQ5QUFFQ0JBZ1FJRUNBUUNvZ1FGTnVZd1FJRUNCQWdBQUJBZ0xVRHhBZ1FJQUFBUUlFQ0tRQ0FqVGxOa2FBQUFFQ0JBZ1FJQ0JBL1FBQkFnUUlFQ0JBZ0VBcUlFQlRibU1FQ0JBZ1FJQUFBUUlDMUE4UUlFQ0FBQUVDQkFpa0FnSTA1VFpHZ0FBQkFnUUlFQ0FnUVAwQUFRSUVDQkFnUUlCQUtpQkFVMjVqQkFnUUlFQ0FBQUVDQXRRUEVDQkFnQUFCQWdRSXBBSUNOT1UyUm9BQUFRSUVDQkFnSUVEOUFBRUNCQWdRSUVDQVFDb2dRRk51WXdRSUVDQkFnQUFCQWdMVUR4QWdRSUFBQVFJRUNLUUNBalRsTmthQUFBRUNCQWdRSUNCQS9RQUJBZ1FJRUNCQWdFQXFJRUJUYm1NRUNCQWdRSUFBQVFJQzFBOFFJRUNBQUFFQ0JBaWtBZ0kwNVRaR2dBQUJBZ1FJRUNBZ1FQMEFBUUlFQ0JBZ1FJQkFLaUJBVTI1akJBZ1FJRUNBQUFFQ0F0UVBFQ0JBZ0FBQkFnUUlwQUlDTk9VMlJvQUFBUUlFQ0JBZ0lFRDlBQUVDQkFnUUlFQ0FRQ29nUUZOdVl3UUlFQ0JBZ0FBQkFnTFVEeEFnUUlBQUFRSUVDS1FDQWpUbE5rYUFBQUVDQkFnUUlDQkEvUUFCQWdRSUVDQkFnRUFxSUVCVGJtTUVDQkFnUUlBQUFRSUMxQThRSUVDQUFBRUNCQWlrQWdJMDVUWkdnQUFCQWdRSUVDQWdRUDBBQVFJRUNCQWdRSUJBS2lCQVUyNWpCQWdRSUVDQUFBRUNBdFFQRUNCQWdBQUJBZ1FJcEFJQ05PVTJSb0FBQVFJRUNCQWdJRUQ5QUFFQ0JBZ1FJRUNBUUNvZ1FGTnVZd1FJRUNCQWdBQUJBZ0xVRHhBZ1FJQUFBUUlFQ0tRQ0FqVGxOa2FBQUFFQ0JBZ1FJQ0JBL1FBQkFnUUlFQ0JBZ0VBcUlFQlRibU1FQ0JBZ1FJQUFBUUlDMUE4UUlFQ0FBQUVDQkFpa0FnSTA1VFpHZ0FBQkFnUUlFQ0FnUVAwQUFRSUVDQkFnUUlCQUtpQkFVMjVqQkFnUUlFQ0FBQUVDQXRRUEVDQkFnQUFCQWdRSXBBSUNOT1UyUm9BQUFRSUVDQkFnSUVEOUFBRUNCQWdRSUVDQVFDb2dRRk51WXdRSUVDQkFnQUFCQWdMVUR4QWdRSUFBQVFJRUNLUUNBalRsTmthQUFBRUNCQWdRSUNCQS9RQUJBZ1FJRUNCQWdFQXFJRUJUYm1NRUNCQWdRSUFBQVFJQzFBOFFJRUNBQUFFQ0JBaWtBZ0kwNVRaR2dBQUJBZ1FJRUNBZ1FQMEFBUUlFQ0JBZ1FJQkFLaUJBVTI1akJBZ1FJRUNBQUFFQ0F0UVBFQ0JBZ0FBQkFnUUlwQUlDTk9VMlJvQUFBUUlFQ0JBZ0lFRDlBQUVDQkFnUUlFQ0FRQ29nUUZOdVl3UUlFQ0JBZ0FBQkFnTFVEeEFnUUlBQUFRSUVDS1FDQWpUbE5rYUFBQUVDQkFnUUlDQkEvUUFCQWdRSUVDQkFnRUFxSUVCVGJtTUVDQkFnUUlBQUFRSUMxQThRSUVDQUFBRUNCQWlrQWdJMDVUWkdnQUFCQWdRSUVDQWdRUDBBQVFJRUNCQWdRSUJBS2lCQVUyNWpCQWdRSUVDQUFBRUNBdFFQRUNCQWdBQUJBZ1FJcEFJQ05PVTJSb0FBQVFJRUNCQWdJRUQ5QUFFQ0JBZ1FJRUNBUUNvZ1FGTnVZd1FJRUNCQWdBQUJBZ0xVRHhBZ1FJQUFBUUlFQ0tRQ0FqVGxOa2FBQUFFQ0JBZ1FJQ0JBL1FBQkFnUUlFQ0JBZ0VBcUlFQlRibU1FQ0JBZ1FJQUFBUUlDMUE4UUlFQ0FBQUVDQkFpa0FnSTA1VFpHZ0FBQkFnUUlFQ0FnUVAwQUFRSUVDQkFnUUlCQUtpQkFVMjVqQkFnUUlFQ0FBQUVDQXRRUEVDQkFnQUFCQWdRSXBBSUNOT1UyUm9BQUFRSUVDQkFnSUVEOUFBRUNCQWdRSUVDQVFDb2dRRk51WXdRSUVDQkFnQUFCQWdMVUR4QWdRSUFBQVFJRUNLUUNBalRsTmthQUFBRUNCQWdRSUNCQS9RQUJBZ1FJRUNCQWdFQXFJRUJUYm1NRUNCQWdRSUFBQVFJQzFBOFFJRUNBQUFFQ0JBaWtBZ0kwNVRaR2dBQUJBZ1FJRUNBZ1FQMEFBUUlFQ0JBZ1FJQkFLaUJBVTI1akJBZ1FJRUNBQUFFQ0F0UVBFQ0JBZ0FBQkFnUUlwQUlDTk9VMlJvQUFBUUlFQ0JBZ0lFRDlBQUVDQkFnUUlFQ0FRQ29nUUZOdVl3UUlFQ0JBZ0FBQkFnTFVEeEFnUUlBQUFRSUVDS1FDQWpUbE5rYUFBQUVDQkFnUUlDQkEvUUFCQWdRSUVDQkFnRUFxSUVCVGJtTUVDQkFnUUlBQUFRSUMxQThRSUVDQUFBRUNCQWlrQWdJMDVUWkdnQUFCQWdRSUVDQWdRUDBBQVFJRUNCQWdRSUJBS2lCQVUyNWpCQWdRSUVDQUFBRUNBdFFQRUNCQWdBQUJBZ1FJcEFJQ05PVTJSb0FBQVFJRUNCQWdJRUQ5QUFFQ0JBZ1FJRUNBUUNvZ1FGTnVZd1FJRUNCQWdBQUJBZ0xVRHhBZ1FJQUFBUUlFQ0tRQ0FqVGxOa2FBQUFFQ0JBZ1FJQ0JBL1FBQkFnUUlFQ0JBZ0VBcUlFQlRibU1FQ0JBZ1FJQUFBUUlDMUE4UUlFQ0FBQUVDQkFpa0FnSTA1VFpHZ0FBQkFnUUlFQ0FnUVAwQUFRSUVDQkFnUUlCQUtpQkFVMjVqQkFnUUlFQ0FBQUVDQXRRUEVDQkFnQUFCQWdRSXBBSUNOT1UyUm9BQUFRSUVDQkFnSUVEOUFBRUNCQWdRSUVDQVFDb2dRRk51WXdRSUVDQkFnQUFCQWdMVUR4QWdRSUFBQVFJRUNLUUNBalRsTmthQUFBRUNCQWdRSUNCQS9RQUJBZ1FJRUNCQWdFQXFJRUJUYm1NRUNCQWdRSUFBQVFJQzFBOFFJRUNBQUFFQ0JBaWtBZ0kwNVRaR2dBQUJBZ1FJRUNBZ1FQMEFBUUlFQ0JBZ1FJQkFLaUJBVTI1akJBZ1FJRUNBQUFFQ0F0UVBFQ0JBZ0FBQkFnUUlwQUlDTk9VMlJvQUFBUUlFQ0JBZ0lFRDlBQUVDQkFnUUlFQ0FRQ29nUUZOdVl3UUlFQ0JBZ0FBQkFnTFVEeEFnUUlBQUFRSUVDS1FDQWpUbE5rYUFBQUVDQkFnUUlDQkEvUUFCQWdRSUVDQkFnRUFxSUVCVGJtTUVDQkFnUUlBQUFRSUMxQThRSUVDQUFBRUNCQWlrQWdJMDVUWkdnQUFCQWdRSUVDQWdRUDBBQVFJRUNCQWdRSUJBS2lCQVUyNWpCQWdRSUVDQUFBRUNBdFFQRUNCQWdBQUJBZ1FJcEFJQ05PVTJSb0FBQVFJRUNCQWdJRUQ5QUFFQ0JBZ1FJRUNBUUNvZ1FGTnVZd1FJRUNCQWdBQUJBZ0xVRHhBZ1FJQUFBUUlFQ0tRQ0FqVGxOa2FBQUFFQ0JBZ1FJQ0JBL1FBQkFnUUlFQ0JBZ0VBcUlFQlRibU1FQ0JBZ1FJQUFBUUlDMUE4UUlFQ0FBQUVDQkFpa0FnSTA1VFpHZ0FBQkFnUUlFQ0R3ZE9jQmdUR3NyWUlBQUFBQVNVVk9SSzVDWUlJPVwiO1xuXG50eXBlIERyYXdJbWFnZSA9IChkYXRhOiBzdHJpbmcpID0+IHZvaWQ7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyYW1lcyB7XG4gICAgcHJpdmF0ZSBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgYWN0aXZlRnJhbWU6IG51bWJlciA9IC0xO1xuICAgIHByaXZhdGUgY291bnRlckZyYW1lOiBudW1iZXIgPSAxO1xuICAgIHByaXZhdGUgaW1hZ2VzRGF0YTogc3RyaW5nW10gPSBbXTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGRyYXdJbWFnZTogRHJhd0ltYWdlO1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQsIGNsZWFyQ2FudmFzOiBGdW5jdGlvbiwgZHJhd0ltYWdlOiBEcmF3SW1hZ2UpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgICAgIHRoaXMuZHJhd0ltYWdlID0gZHJhd0ltYWdlO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdidXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRnJhbWUoKTtcbiAgICAgICAgICAgIGNsZWFyQ2FudmFzKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KTogdm9pZCA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuY29kZSA9PSAnTnVtcGFkQWRkJykge1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlRnJhbWUoKTtcbiAgICAgICAgICAgICAgICBjbGVhckNhbnZhcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jcmVhdGVGcmFtZSgpO1xuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBjcmVhdGVGcmFtZSA9ICgpOiB2b2lkID0+IHtcbiAgICAgICAgdGhpcy5kZWxldGVBY3RpdmVDbGFzc05hbWUoKTtcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgICAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZnJhbWUgYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm51bWJlcl9mcmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvdW50ZXJfZnJhbWVcIj4ke3RoaXMuY291bnRlckZyYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVsZXRlX2ZyYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvZnJhbWVfaWNvbnMvZGVsZXRlLWljb24uc3ZnXCIgYWx0PVwiZGVsZXRlX2ljb25cIiBjbGFzcz1cImRlbGV0ZV9pY29uIGljb25fc2VsZWN0XCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvcHlfZnJhbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9mcmFtZV9pY29ucy9jb3B5LWljb24uc3ZnXCIgYWx0PVwiY29weV9pY29uXCIgY2xhc3M9XCJjb3B5X2ljb24gaWNvbl9zZWxlY3RcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleHBhbmRfZnJhbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9mcmFtZV9pY29ucy9leHBhbmQtaWNvbi5zdmdcIiBhbHQ9XCJleHBhbmRfaWNvblwiIGNsYXNzPVwiZXhwYW5kX2ljb24gaWNvbl9zZWxlY3RcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5pbnNlcnRCZWZvcmUodGVtcGxhdGUuY29udGVudCwgdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignI2J1dHRvbl9hZGRfZnJhbWUnKSk7XG4gICAgICAgIHRoaXMuYWN0aXZlRnJhbWUrKztcbiAgICAgICAgdGhpcy5pbWFnZXNEYXRhW3RoaXMuYWN0aXZlRnJhbWVdID0gZW1wdHlGcmFtZTtcbiAgICAgICAgdGhpcy5jb3VudGVyRnJhbWUrKztcbiAgICAgICAgY29uc3QgZnJhbWVzID0gdGhpcy5nZXRGcmFtZXNBcnJheSgpO1xuICAgICAgICBjb25zdCBsYXN0RnJhbWUgPSBmcmFtZXNbZnJhbWVzLmxlbmd0aCAtIDFdO1xuICAgICAgICB0aGlzLnNldEZyYW1lRXZlbnRMaXN0ZW5lcnMobGFzdEZyYW1lKTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBmcmFtZUNvdW50ZXJWYWx1ZShmcmFtZTogSFRNTERpdkVsZW1lbnQpOiBudW1iZXIgIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KGZyYW1lLnF1ZXJ5U2VsZWN0b3IoJy5jb3VudGVyX2ZyYW1lJykudGV4dENvbnRlbnQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0RnJhbWVDb3VudGVyVmFsdWUoZnJhbWU6IEhUTUxEaXZFbGVtZW50LCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGZyYW1lLnF1ZXJ5U2VsZWN0b3IoJy5jb3VudGVyX2ZyYW1lJykudGV4dENvbnRlbnQgPSBTdHJpbmcoaW5kZXgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0RnJhbWVzQXJyYXkoKTogSFRNTENvbGxlY3Rpb24ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZnJhbWUnKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNoYW5nZUluZGV4ZXMoZnJhbWVJbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGZyYW1lc0FycmF5ID0gdGhpcy5nZXRGcmFtZXNBcnJheSgpO1xuICAgICAgICBsZXQgaW5kZXggPSBmcmFtZUluZGV4O1xuICAgICAgICBjb25zdCBsZW5ndGggPSBmcmFtZXNBcnJheS5sZW5ndGg7XG4gICAgICAgIHdoaWxlKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnNldEZyYW1lQ291bnRlclZhbHVlKGZyYW1lc0FycmF5W2luZGV4XSBhcyBIVE1MRGl2RWxlbWVudCwgaW5kZXggKyAxKTtcbiAgICAgICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGRlbGV0ZUZyYW1lKGljb24pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZnJhbWUgPSBpY29uLnBhcmVudE5vZGU7XG4gICAgICAgIGNvbnN0IGRlbGV0ZUluZGV4ID0gQXJyYXkuZnJvbSh0aGlzLmdldEZyYW1lc0FycmF5KCkpLmluZGV4T2YoZnJhbWUpO1xuXG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZUZyYW1lIDwgZGVsZXRlSW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd0ltYWdlKHRoaXMuaW1hZ2VzRGF0YVtkZWxldGVJbmRleCAtIDFdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZUZyYW1lID49IGRlbGV0ZUluZGV4KSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUZyYW1lLS07XG4gICAgICAgICAgICB0aGlzLmRyYXdJbWFnZSh0aGlzLmltYWdlc0RhdGFbZGVsZXRlSW5kZXggLSAxXSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb3VudGVyRnJhbWUtLTtcbiAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQoZnJhbWUpO1xuICAgICAgICB0aGlzLmNoYW5nZUluZGV4ZXMoZGVsZXRlSW5kZXgpO1xuICAgICAgICBpZiAodGhpcy5pbWFnZXNEYXRhW2RlbGV0ZUluZGV4XSkge1xuICAgICAgICAgICAgdGhpcy5pbWFnZXNEYXRhLnNwbGljZShkZWxldGVJbmRleCwxKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdldEZyYW1lc0FycmF5KClbdGhpcy5hY3RpdmVGcmFtZV0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICB9XG5cbiAgICBwcml2YXRlIGNvcHlGcmFtZShpY29uKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGVsZXRlQWN0aXZlQ2xhc3NOYW1lKCk7XG4gICAgICAgIGNvbnN0IGZyYW1lID0gaWNvbi5wYXJlbnROb2RlO1xuICAgICAgICBjb25zdCBjb3B5Q291bnRlciA9IHRoaXMuZnJhbWVDb3VudGVyVmFsdWUoZnJhbWUpO1xuICAgICAgICBjb25zdCBjb3B5SW5kZXggPSBjb3B5Q291bnRlciAtIDE7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRDb3B5ID0gZnJhbWUuY2xvbmVOb2RlKHRydWUpIGFzIEhUTUxEaXZFbGVtZW50O1xuXG4gICAgICAgIGlmKGZyYW1lLm5leHRTaWJsaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5pbnNlcnRCZWZvcmUoZWxlbWVudENvcHksIGZyYW1lLm5leHRTaWJsaW5nKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEZyYW1lRXZlbnRMaXN0ZW5lcnMoZWxlbWVudENvcHkpO1xuICAgICAgICB0aGlzLmNoYW5nZUluZGV4ZXMoY29weUNvdW50ZXIpO1xuICAgICAgICB0aGlzLmFjdGl2ZUZyYW1lID0gY29weUNvdW50ZXI7XG5cbiAgICAgICAgdGhpcy5jb3VudGVyRnJhbWUrKztcbiAgICAgICAgaWYodGhpcy5pbWFnZXNEYXRhW2NvcHlJbmRleF0pIHtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VzRGF0YS5zcGxpY2UoY29weUNvdW50ZXIsMCwgdGhpcy5pbWFnZXNEYXRhW2NvcHlJbmRleF0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlUHJldmlldyhpbWFnZURhdGE6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBjb25zdCBmcmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZyYW1lJylbdGhpcy5hY3RpdmVGcmFtZV0gYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgICAgIGlmIChmcmFtZSkge1xuICAgICAgICAgICAgZnJhbWUuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnMTAwJSwgYXV0byc7XG4gICAgICAgICAgICBmcmFtZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgICAgICAgICAgICAgIGB1cmwoJHtpbWFnZURhdGF9KSwgdXJsKCdhc3NldHMvaW1hZ2VzL2JhY2tncm91bmQucG5nJylgO1xuICAgICAgICAgICAgZnJhbWUuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gJ2xlZnQgdG9wLCBsZWZ0IHRvcCc7XG4gICAgICAgICAgICBmcmFtZS5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0ID0gJ25vLXJlcGVhdCwgcmVwZWF0JztcblxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW1hZ2VzRGF0YVt0aGlzLmFjdGl2ZUZyYW1lXSA9IGltYWdlRGF0YTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEZyYW1lRXZlbnRMaXN0ZW5lcnMoZnJhbWUpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZGVsZXRlSWNvbiA9IGZyYW1lLnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGVfZnJhbWUnKTtcbiAgICAgICAgZGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZUZyYW1lKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgY29weUljb24gPSBmcmFtZS5xdWVyeVNlbGVjdG9yKCcuY29weV9mcmFtZScpO1xuICAgICAgICBjb3B5SWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLmNvcHlGcmFtZShldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZyYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgdGhpcy5kZWxldGVBY3RpdmVDbGFzc05hbWUoKTtcbiAgICAgICAgICAgIGZyYW1lLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgY29uc3QgYWN0aXZlSW5kZXggPSBBcnJheS5mcm9tKHRoaXMuZ2V0RnJhbWVzQXJyYXkoKSkuaW5kZXhPZihmcmFtZSk7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUZyYW1lID0gYWN0aXZlSW5kZXg7XG4gICAgICAgICAgICB0aGlzLmRyYXdJbWFnZSh0aGlzLmltYWdlc0RhdGFbYWN0aXZlSW5kZXhdKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIGRlbGV0ZUFjdGl2ZUNsYXNzTmFtZSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcHJldkZyYW1lID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignLmZyYW1lLmFjdGl2ZScpO1xuICAgICAgICBpZiAocHJldkZyYW1lKSB7XG4gICAgICAgICAgICBwcmV2RnJhbWUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0SW1hZ2VzRGF0YSgpOiBzdHJpbmdbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmltYWdlc0RhdGE7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgUGVuU2l6ZSBmcm9tIFwiLi9wZW5TaXplXCI7XG5pbXBvcnQge1BvaW50fSBmcm9tIFwiLi9wb2ludFwiO1xuaW1wb3J0IHtkcmF3TGluZSwgcmVsYXRpdmVQb3N9IGZyb20gXCIuLi91dGlsc1wiO1xuaW1wb3J0IENhbnZhc1NpemUgZnJvbSBcIi4vY2FudmFzU2l6ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBMaW5lRHJhd2VyIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgcHJpdmF0ZSBkcmF3aW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJvdGVjdGVkIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICBwcml2YXRlIGNhbGxiYWNrOiBGdW5jdGlvbjtcbiAgICBwcml2YXRlIHBlblRvb2w6IEhUTUxEaXZFbGVtZW50O1xuICAgIHByb3RlY3RlZCBwZW5TaXplOiBQZW5TaXplO1xuICAgIHByb3RlY3RlZCBzcXVhcmVMZW5ndGg6IG51bWJlcjtcbiAgICBwcml2YXRlIHByZXZQb3M6IFBvaW50O1xuICAgIHByb3RlY3RlZCBjYW52YXNTaXplOiBDYW52YXNTaXplO1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIHBlblNpemU6IFBlblNpemUsIGNhbnZhc1NpemU6IENhbnZhc1NpemUpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB0aGlzLnBlblRvb2wgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGVuX3Rvb2wnKSBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICAgICAgdGhpcy5wZW5TaXplID0gcGVuU2l6ZTtcbiAgICAgICAgdGhpcy5jYW52YXNTaXplID0gY2FudmFzU2l6ZTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzZWxlY3RlZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5zdGFydERyYXcpO1xuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmRyYXcpO1xuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5zdG9wRHJhdyk7XG4gICAgfVxuXG4gICAgcHVibGljIHVuU2VsZWN0ZWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuc3RhcnREcmF3KTtcbiAgICAgICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5kcmF3KTtcbiAgICAgICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuc3RvcERyYXcpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhcnREcmF3ID0gKGV2ZW50KTogdm9pZCA9PiB7XG4gICAgICAgIHRoaXMuZHJhd2luZyA9IHRydWU7XG4gICAgICAgIHRoaXMuZHJhdyhldmVudCk7XG4gICAgfTtcblxuICAgIHByaXZhdGUgZHJhdyA9IChldmVudCk6IHZvaWQgPT4ge1xuICAgICAgICBpZiAodGhpcy5kcmF3aW5nKSB7XG4gICAgICAgICAgICBjb25zdCBwb3MgPSByZWxhdGl2ZVBvcyhldmVudCwgdGhpcy5jYW52YXMpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnByZXZQb3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZQb3MgPSBwb3M7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRyYXdMaW5lKHRoaXMucHJldlBvcywgcG9zLCB0aGlzLmRyYXdSZWN0KTtcbiAgICAgICAgICAgIHRoaXMucHJldlBvcyA9IHBvcztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZHJhd1JlY3QocG9zOiBQb2ludCk6IHZvaWQ7XG5cbiAgICBwcml2YXRlIHN0b3BEcmF3ID0gKCk6IHZvaWQgPT4ge1xuICAgICAgICB0aGlzLmRyYXdpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wcmV2UG9zID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmNhbGxiYWNrKCk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBvblVwZGF0ZSA9IChjYWxsYmFjayk6IHZvaWQgPT4ge1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgfTtcbn1cbiIsImltcG9ydCB7VG9vbH0gZnJvbSBcIi4vdG9vbFwiO1xuaW1wb3J0IHtQb2ludH0gZnJvbSBcIi4vcG9pbnRcIjtcbmltcG9ydCB7cmVsYXRpdmVQb3N9IGZyb20gXCIuLi91dGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWludEJ1Y2tldCBpbXBsZW1lbnRzIFRvb2wge1xuICAgIHByaXZhdGUgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBwcml2YXRlIGNhbGxiYWNrOiBGdW5jdGlvbjtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgfVxuXG4gICAgcHVibGljIHNlbGVjdGVkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucGFpbnQpO1xuICAgIH1cblxuICAgIHB1YmxpYyB1blNlbGVjdGVkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucGFpbnQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcGFpbnQgPSAoZXZlbnQpOiB2b2lkID0+IHtcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgY29uc3Qgc3RhcnRQb3MgPSByZWxhdGl2ZVBvcyhldmVudCwgY3R4LmNhbnZhcyk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgY3R4LmNhbnZhcy53aWR0aCxcbiAgICAgICAgICAgIGN0eC5jYW52YXMuaGVpZ2h0XG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGZpbGxlZFBvaW50cyA9IG5ldyBBcnJheShkYXRhLndpZHRoICogZGF0YS5oZWlnaHQpO1xuICAgICAgICBjb25zdCBhY3RpdmVQb2ludHMgPSBbc3RhcnRQb3NdO1xuICAgICAgICB3aGlsZSAoYWN0aXZlUG9pbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgcG9zID0gYWN0aXZlUG9pbnRzLnBvcCgpO1xuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gcG9zLnggKyBkYXRhLndpZHRoICogcG9zLnk7XG4gICAgICAgICAgICBpZiAoZmlsbGVkUG9pbnRzW29mZnNldF0pIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN0eC5maWxsUmVjdChwb3MueCwgcG9zLnksIDEsIDEpO1xuICAgICAgICAgICAgZmlsbGVkUG9pbnRzW29mZnNldF0gPSB0cnVlO1xuXG4gICAgICAgICAgICB0aGlzLmZvckFsbFBvaW50TmVpZ2hib3JzKHBvcywgKG5laWdoYm9yKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG5laWdoYm9yLnggPj0gMCAmJiBuZWlnaGJvci54IDwgZGF0YS53aWR0aCAmJlxuICAgICAgICAgICAgICAgIG5laWdoYm9yLnkgPj0gMCAmJiBuZWlnaGJvci55IDwgZGF0YS5oZWlnaHQgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmlzU2FtZUNvbG9yKGRhdGEsIHN0YXJ0UG9zLCBuZWlnaGJvcikpIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlUG9pbnRzLnB1c2gobmVpZ2hib3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYWxsYmFjaygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblVwZGF0ZShjYWxsYmFjazogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIH1cblxuICAgIHByaXZhdGUgZm9yQWxsUG9pbnROZWlnaGJvcnMocG9pbnQ6IFBvaW50LCBmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgZm4oe3g6IHBvaW50LngsIHk6IHBvaW50LnkgKyAxfSk7XG4gICAgICAgIGZuKHt4OiBwb2ludC54LCB5OiBwb2ludC55IC0gMX0pO1xuICAgICAgICBmbih7eDogcG9pbnQueCArIDEsIHk6IHBvaW50Lnl9KTtcbiAgICAgICAgZm4oe3g6IHBvaW50LnggLSAxLCB5OiBwb2ludC55fSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc1NhbWVDb2xvciA9IChkYXRhOiBJbWFnZURhdGEsIHBvczE6IFBvaW50LCBwb3MyOiBQb2ludCk6IGJvb2xlYW4gPT4ge1xuICAgICAgICBjb25zdCBvZmZzZXQxID0gKHBvczEueCArIHBvczEueSAqIGRhdGEud2lkdGgpICogNDtcbiAgICAgICAgY29uc3Qgb2Zmc2V0MiA9IChwb3MyLnggKyBwb3MyLnkgKiBkYXRhLndpZHRoKSAqIDQ7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5kYXRhW29mZnNldDEgKyBpXSAhPSBkYXRhLmRhdGFbb2Zmc2V0MiArIGldKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cblxuXG5cblxufVxuIiwiY29uc3QgYWN0aXZlQ2xhc3MgPSAnYWN0aXZlX3NpemUnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVuU2l6ZSB7XG4gICAgcHJpdmF0ZSBwZW5TaXplOiBudW1iZXIgPSAxO1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmFkZFBlblNpemVMaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkUGVuU2l6ZUxpc3RlbmVyKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0X3Blbl9zaXplJyk7XG4gICAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogRXZlbnQpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW0gPSBldmVudC50YXJnZXQgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgICAgICAgICBsZXQgcHJldkVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHthY3RpdmVDbGFzc31gKTtcbiAgICAgICAgICAgIGlmIChlbGVtLmNsYXNzTGlzdC5jb250YWlucygncGVuX3NpemUnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGVuU2l6ZSA9IE51bWJlcihlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1zaXplJykpO1xuICAgICAgICAgICAgICAgIGlmIChwcmV2RWxlbSkge1xuICAgICAgICAgICAgICAgICAgICBwcmV2RWxlbS5jbGFzc0xpc3QucmVtb3ZlKGFjdGl2ZUNsYXNzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKGFjdGl2ZUNsYXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBlblNpemVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGVuX3NpemUnKSBhcyBIVE1MQ29sbGVjdGlvbjtcbiAgICAgICAgICAgIGxldCBwcmV2RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2FjdGl2ZUNsYXNzfWApIGFzIEhUTUxEaXZFbGVtZW50O1xuICAgICAgICAgICAgaWYgKGV2ZW50LmNvZGUgPT0gJ051bXBhZDEnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQZW5TaXplKDEsIHByZXZFbGVtLCBwZW5TaXplcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXZlbnQuY29kZSA9PSAnTnVtcGFkMicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBlblNpemUoMiwgcHJldkVsZW0sIHBlblNpemVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChldmVudC5jb2RlID09ICdOdW1wYWQzJykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0UGVuU2l6ZSgzLCBwcmV2RWxlbSwgcGVuU2l6ZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV2ZW50LmNvZGUgPT0gJ051bXBhZDQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQZW5TaXplKDQsIHByZXZFbGVtLCBwZW5TaXplcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRQZW5TaXplKG51bWJlcjogbnVtYmVyLCBwcmV2RWxlbTogSFRNTERpdkVsZW1lbnQsIGNvbGxlY3Rpb246IEhUTUxDb2xsZWN0aW9uKTogdm9pZCB7XG4gICAgICAgIHRoaXMucGVuU2l6ZSA9IG51bWJlcjtcbiAgICAgICAgaWYgKHByZXZFbGVtKSB7XG4gICAgICAgICAgICBwcmV2RWxlbS5jbGFzc0xpc3QucmVtb3ZlKGFjdGl2ZUNsYXNzKTtcbiAgICAgICAgfVxuICAgICAgICBjb2xsZWN0aW9uW251bWJlci0xXS5jbGFzc0xpc3QuYWRkKGFjdGl2ZUNsYXNzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UGVuU2l6ZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5wZW5TaXplO1xuICAgIH1cbn1cbiIsImltcG9ydCB7Z2V0U3F1YXJlQ29vcmRpbmF0ZXN9IGZyb20gXCIuLi91dGlsc1wiO1xuaW1wb3J0IHtUb29sfSBmcm9tIFwiLi90b29sXCI7XG5pbXBvcnQgTGluZURyYXdlciBmcm9tIFwiLi9saW5lRHJhd2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlbmNpbFRvb2wgZXh0ZW5kcyBMaW5lRHJhd2VyIGltcGxlbWVudHMgVG9vbCB7XG4gICAgcHJvdGVjdGVkIGRyYXdSZWN0ID0gKHBvcyk6IHZvaWQgPT4ge1xuICAgICAgICBsZXQgc3F1YXJlQ29vcmRpbmF0ZXMgPSBnZXRTcXVhcmVDb29yZGluYXRlcyhwb3MueCwgcG9zLnksIHRoaXMucGVuU2l6ZS5nZXRQZW5TaXplKCksIHRoaXMuY2FudmFzU2l6ZS5nZXRTcXVhcmVMZW5ndGgoKSk7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdChzcXVhcmVDb29yZGluYXRlcy54LCBzcXVhcmVDb29yZGluYXRlcy55LCBzcXVhcmVDb29yZGluYXRlcy53aWR0aCwgc3F1YXJlQ29vcmRpbmF0ZXMuaGVpZ2h0KTtcbiAgICB9XG59XG4iLCJpbXBvcnQge1BvaW50fSBmcm9tIFwiLi9wb2ludFwiO1xuaW1wb3J0IHtyZWxhdGl2ZVBvc30gZnJvbSBcIi4uL3V0aWxzXCI7XG5pbXBvcnQgUGVuU2l6ZSBmcm9tIFwiLi9wZW5TaXplXCI7XG5pbXBvcnQgQ2FudmFzU2l6ZSBmcm9tIFwiLi9jYW52YXNTaXplXCI7XG5pbXBvcnQge1Rvb2x9IGZyb20gXCIuL3Rvb2xcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3Ryb2tlUmVjdGFuZ2xlIGltcGxlbWVudHMgVG9vbCB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICAgIHByaXZhdGUgY2FsbGJhY2s6IEZ1bmN0aW9uO1xuICAgIHB1YmxpYyBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgcHJpdmF0ZSBwZW5TaXplOiBQZW5TaXplO1xuICAgIHByaXZhdGUgY2FudmFzU2l6ZTogQ2FudmFzU2l6ZTtcbiAgICBwcml2YXRlIGlzRHJhd2luZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgcmVsYXRpdmVTdGFydDogUG9pbnQ7XG4gICAgcHJpdmF0ZSBwYWdlU3RhcnQ6IFBvaW50O1xuICAgIHByb3RlY3RlZCB0cmFja2luZ05vZGU6IEhUTUxEaXZFbGVtZW50O1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIHBlblNpemU6IFBlblNpemUsIGNhbnZhc1NpemU6IENhbnZhc1NpemUpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMucGVuU2l6ZSA9IHBlblNpemU7XG4gICAgICAgIHRoaXMuY2FudmFzU2l6ZSA9IGNhbnZhc1NpemU7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHNlbGVjdGVkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLnN0YXJ0RHJhdyk7XG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuZHJhd1JlY3RhbmdsZSk7XG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLnN0b3BEcmF3KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdW5TZWxlY3RlZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5zdGFydERyYXcpO1xuICAgICAgICB0aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmRyYXdSZWN0YW5nbGUpO1xuICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5zdG9wRHJhdyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRSZWN0YW5nbGVJbmZvID0gKGE6IFBvaW50LCBiOiBQb2ludCk6IHtcbiAgICAgICAgbGVmdDogbnVtYmVyO1xuICAgICAgICB0b3A6IG51bWJlcjtcbiAgICAgICAgd2lkdGg6IG51bWJlcjtcbiAgICAgICAgaGVpZ2h0OiBudW1iZXI7XG4gICAgfSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsZWZ0OiBNYXRoLm1pbihhLngsIGIueCksXG4gICAgICAgICAgICB0b3A6IE1hdGgubWluKGEueSwgYi55KSxcbiAgICAgICAgICAgIHdpZHRoOiBNYXRoLmFicyhhLnggLSBiLngpLFxuICAgICAgICAgICAgaGVpZ2h0OiBNYXRoLmFicyhhLnkgLSBiLnkpfTtcbiAgICB9O1xuXG4gICAgcHVibGljIGdldExpbmVXaWR0aCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5wZW5TaXplLmdldFBlblNpemUoKSAqIHRoaXMuY2FudmFzU2l6ZS5nZXRTcXVhcmVMZW5ndGgoKVxuICAgIH1cblxuICAgIHByaXZhdGUgc3RhcnREcmF3ID0gKGV2ZW50KTogdm9pZCA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuaXNEcmF3aW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZWxhdGl2ZVN0YXJ0ID0gcmVsYXRpdmVQb3MoZXZlbnQsIHRoaXMuY2FudmFzKTtcbiAgICAgICAgdGhpcy5wYWdlU3RhcnQgPSB7eDogZXZlbnQucGFnZVgsIHk6IGV2ZW50LnBhZ2VZfTtcbiAgICAgICAgY29uc3QgcmVjdCA9IHRoaXMuZ2V0UmVjdGFuZ2xlSW5mbyhcbiAgICAgICAgICAgIHRoaXMucGFnZVN0YXJ0LFxuICAgICAgICAgICAge3g6IGV2ZW50LnBhZ2VYLCB5OiBldmVudC5wYWdlWX1cbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy50cmFja2luZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpIGFzIEhUTUxEaXZFbGVtZW50O1xuICAgICAgICB0aGlzLnRyYWNraW5nTm9kZS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgdGhpcy50cmFja2luZ05vZGUuc3R5bGUuYm9yZGVyQ29sb3IgPSBTdHJpbmcodGhpcy5jb250ZXh0LmZpbGxTdHlsZSk7XG4gICAgICAgIHRoaXMudHJhY2tpbmdOb2RlLnN0eWxlLmJvcmRlcldpZHRoID0gU3RyaW5nKHRoaXMuZ2V0TGluZVdpZHRoKCkpICsgJ3B4JztcbiAgICAgICAgdGhpcy50cmFja2luZ05vZGUuc3R5bGUuYm94U2l6aW5nID0gJ2JvcmRlci1ib3gnO1xuICAgICAgICB0aGlzLnRyYWNraW5nTm9kZS5zdHlsZS5ib3JkZXJTdHlsZSA9IFwic29saWRcIjtcbiAgICAgICAgdGhpcy50cmFja2luZ05vZGUuc3R5bGUudG9wID0gcmVjdC50b3AgKyBcInB4XCI7XG4gICAgICAgIHRoaXMudHJhY2tpbmdOb2RlLnN0eWxlLmxlZnQgPSByZWN0LmxlZnQgKyBcInB4XCI7XG4gICAgICAgIHRoaXMuc3R5bGl6ZU5vZGUoKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnRyYWNraW5nTm9kZSk7XG4gICAgfTtcblxuICAgIHByaXZhdGUgZHJhd1JlY3RhbmdsZSA9IChldmVudCk6IHZvaWQgPT4ge1xuICAgICAgICBpZih0aGlzLmlzRHJhd2luZykge1xuICAgICAgICAgICAgY29uc3QgcmVjdCA9IHRoaXMuZ2V0UmVjdGFuZ2xlSW5mbyhcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VTdGFydCxcbiAgICAgICAgICAgICAgICB7eDogZXZlbnQucGFnZVgsIHk6IGV2ZW50LnBhZ2VZfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChyZWN0LmxlZnQgIT0gcGFyc2VJbnQodGhpcy50cmFja2luZ05vZGUuc3R5bGUubGVmdCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyYWNraW5nTm9kZS5zdHlsZS5sZWZ0ID0gcmVjdC5sZWZ0ICsgXCJweFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlY3QudG9wICE9IHBhcnNlSW50KHRoaXMudHJhY2tpbmdOb2RlLnN0eWxlLnRvcCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyYWNraW5nTm9kZS5zdHlsZS50b3AgPSByZWN0LnRvcCArIFwicHhcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudHJhY2tpbmdOb2RlLnN0eWxlLndpZHRoID0gKHJlY3Qud2lkdGgpICsgXCJweFwiO1xuICAgICAgICAgICAgdGhpcy50cmFja2luZ05vZGUuc3R5bGUuaGVpZ2h0ID0gKHJlY3QuaGVpZ2h0KSArIFwicHhcIjtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBwcml2YXRlIHN0b3BEcmF3ID0gKGV2ZW50KTogdm9pZCA9PiB7XG4gICAgICAgIGlmICh0aGlzLmlzRHJhd2luZykge1xuICAgICAgICAgICAgdGhpcy5pc0RyYXdpbmcgID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zdCByZWN0ID0gdGhpcy5nZXRSZWN0YW5nbGVJbmZvKFxuICAgICAgICAgICAgICAgIHRoaXMucmVsYXRpdmVTdGFydCxcbiAgICAgICAgICAgICAgICByZWxhdGl2ZVBvcyhldmVudCwgdGhpcy5jb250ZXh0LmNhbnZhcyksXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmxpbmVXaWR0aCA9IHRoaXMuZ2V0TGluZVdpZHRoKCk7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVJlY3QocmVjdCk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMudHJhY2tpbmdOb2RlKTtcbiAgICAgICAgICAgIHRoaXMucmVsYXRpdmVTdGFydCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHRoaXMucGFnZVN0YXJ0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdGhpcy5jYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHB1YmxpYyBvblVwZGF0ZShjYWxsYmFjazogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzdHlsaXplTm9kZSgpOiB2b2lkIHtcblxuICAgIH1cblxuICAgIHByb3RlY3RlZCAgY3JlYXRlUmVjdChyZWN0OiB7XG4gICAgICAgIGxlZnQ6IG51bWJlcjtcbiAgICAgICAgdG9wOiBudW1iZXI7XG4gICAgICAgIHdpZHRoOiBudW1iZXI7XG4gICAgICAgIGhlaWdodDogbnVtYmVyO1xuICAgIH0pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVJlY3QoXG4gICAgICAgICAgICByZWN0LmxlZnQsXG4gICAgICAgICAgICByZWN0LnRvcCxcbiAgICAgICAgICAgIHJlY3Qud2lkdGgsXG4gICAgICAgICAgICByZWN0LmhlaWdodFxuICAgICAgICApO1xuICAgIH1cbn1cbiIsImltcG9ydCBQZW5jaWxUb29sIGZyb20gXCIuL2NvbXBvbmVudHMvcGVuY2lsX3Rvb2xcIjtcbmltcG9ydCBGcmFtZXMgZnJvbSBcIi4vY29tcG9uZW50cy9mcmFtZXNcIjtcbmltcG9ydCBBbmltYXRpb24gZnJvbSBcIi4vY29tcG9uZW50cy9hbmltYXRpb25cIjtcbmltcG9ydCBQYWludEJ1Y2tldCBmcm9tIFwiLi9jb21wb25lbnRzL3BhaW50X2J1Y2tldF90b29sXCI7XG5pbXBvcnQge1Rvb2x9IGZyb20gXCIuL2NvbXBvbmVudHMvdG9vbFwiO1xuaW1wb3J0IHtwYWludEJvcmRlciwgY2FuY2VsQm9yZGVyfSBmcm9tIFwiLi91dGlsc1wiO1xuaW1wb3J0IFBlblNpemUgZnJvbSAnLi9jb21wb25lbnRzL3BlblNpemUnO1xuaW1wb3J0IEVyYXNlciBmcm9tIFwiLi9jb21wb25lbnRzL2VyYXNlclwiO1xuaW1wb3J0IENhbnZhc1NpemUgZnJvbSBcIi4vY29tcG9uZW50cy9jYW52YXNTaXplXCI7XG5pbXBvcnQgU3Ryb2tlUmVjdGFuZ2xlIGZyb20gXCIuL2NvbXBvbmVudHMvc3Ryb2tlUmVjdGFuZ2xlXCI7XG5pbXBvcnQgQ3Vyc29yQ29vcmRpbmF0ZXMgZnJvbSBcIi4vY29tcG9uZW50cy9jdXJzb3JDb29yZGluYXRlc1wiO1xuaW1wb3J0IEZpbGxSZWN0YW5nbGUgZnJvbSBcIi4vY29tcG9uZW50cy9maWxsUmVjdGFuZ2xlXCI7XG5pbXBvcnQgQ29sb3JQaWNrZXIgZnJvbSBcIi4vY29tcG9uZW50cy9jb2xvclBpY2tlclwiO1xuaW1wb3J0ICogYXMgR0lGIGZyb20gJ2dpZi5qcyc7XG5cbmNsYXNzIEFwcCB7XG4gICAgcHJpdmF0ZSBwZW5jaWxUb29sOiBQZW5jaWxUb29sO1xuICAgIHByaXZhdGUgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBwcml2YXRlIGZyYW1lczogRnJhbWVzO1xuICAgIHByaXZhdGUgYW5pbWF0aW9uOiBBbmltYXRpb247XG4gICAgcHJpdmF0ZSBwcmltYXJ5SW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBwYWludEJ1Y2tldFRvb2w6IFBhaW50QnVja2V0O1xuICAgIHByaXZhdGUgc2VsZWN0ZWRUb29sOiBUb29sID0ge1xuICAgICAgICBzZWxlY3RlZCgpOiB2b2lkIHt9LFxuICAgICAgICB1blNlbGVjdGVkKCk6IHZvaWQge30sXG4gICAgICAgIG9uVXBkYXRlKCk6IHZvaWQge31cbiAgICB9O1xuICAgIHByaXZhdGUgZGl2OiBIVE1MRGl2RWxlbWVudDtcbiAgICBwcml2YXRlIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICBwcml2YXRlIHBlblNpemU6IFBlblNpemU7XG4gICAgcHJpdmF0ZSBlcmFzZXJUb29sOiBFcmFzZXI7XG4gICAgcHJpdmF0ZSBjYW52YXNTaXplOiBDYW52YXNTaXplO1xuICAgIHByaXZhdGUgc3Ryb2tlUmVjdGFuZ2xlVG9vbDogU3Ryb2tlUmVjdGFuZ2xlO1xuICAgIHByaXZhdGUgZmlsbFJlY3RhbmdsZVRvb2w6IEZpbGxSZWN0YW5nbGU7XG4gICAgcHJpdmF0ZSBjdXJzb3JDb29yZGluYXRlczogQ3Vyc29yQ29vcmRpbmF0ZXM7XG4gICAgcHJpdmF0ZSBjb2xvclBpY2tlclRvb2w6IENvbG9yUGlja2VyO1xuXG4gICAgcHJpdmF0ZSBnZXRDYW52YXNSZWN0KCk6IENsaWVudFJlY3Qge1xuICAgICAgICByZXR1cm4gdGhpcy5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIGluaXRDYW52YXMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RyYXdfY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLmdldENhbnZhc1JlY3QoKTtcbiAgICAgICAgdGhpcy5jYW52YXMuc2V0QXR0cmlidXRlKCd3aWR0aCcsIFN0cmluZyhyZWN0LndpZHRoKSk7XG4gICAgICAgIHRoaXMuY2FudmFzLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgU3RyaW5nKHJlY3QuaGVpZ2h0KSk7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGFydCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wZW5TaXplID0gbmV3IFBlblNpemUoKTtcbiAgICAgICAgdGhpcy5jYW52YXNTaXplID0gbmV3IENhbnZhc1NpemUoKTtcbiAgICAgICAgdGhpcy5jYW52YXNTaXplLnNldENhbnZhc0luZm9ybWF0aW9uKCk7XG4gICAgICAgIHRoaXMuY2FudmFzU2l6ZS5vblVwZGF0ZSh0aGlzLm9uQ2FudmFzVXBkYXRlKTtcbiAgICAgICAgdGhpcy5pbml0Q2FudmFzKCk7XG4gICAgICAgIHRoaXMuaW5pdFRvb2xzKCk7XG4gICAgICAgIHRoaXMuZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuYWRkQ2hhbmdlQ29sb3JMaXN0ZW5lcigpO1xuICAgICAgICB0aGlzLmZyYW1lcyA9IG5ldyBGcmFtZXMoXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnJhbWVzJykgYXMgSFRNTERpdkVsZW1lbnQsXG4gICAgICAgICAgICB0aGlzLmNsZWFyQ2FudmFzLFxuICAgICAgICAgICAgdGhpcy5kcmF3SW1hZ2VcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5hbmltYXRpb24gPSBuZXcgQW5pbWF0aW9uKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbmltYXRpb25fZmllbGQnKSBhcyBIVE1MRGl2RWxlbWVudCk7XG4gICAgICAgIGNvbnN0IGltYWdlc0FycmF5ID0gdGhpcy5mcmFtZXMuZ2V0SW1hZ2VzRGF0YSgpO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbi5hbmltYXRlRnJhbWVzKGltYWdlc0FycmF5KTtcbiAgICAgICAgdGhpcy5jdXJzb3JDb29yZGluYXRlcyA9IG5ldyBDdXJzb3JDb29yZGluYXRlcyh0aGlzLmNhbnZhcywgdGhpcy5jYW52YXNTaXplKTtcbiAgICAgICAgdGhpcy5vcGVuRGlhbG9nV2luZG93KCk7XG4gICAgICAgIHRoaXMuY2xvc2VEaWFsb2dXaW5kb3coKTtcbiAgICAgICAgdGhpcy5hZGRFeHBvcnRJbWFnZUxpc3RlbmVycygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0U3RhdGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FudmFzLnRvRGF0YVVSTCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25DYW52YXNVcGRhdGUgPSAoKTogdm9pZCA9PiB7XG4gICAgICAgIHRoaXMuZnJhbWVzLnVwZGF0ZVByZXZpZXcoXG4gICAgICAgICAgICB0aGlzLmdldFN0YXRlKClcbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBjbGVhckNhbnZhcyA9ICgpOiB2b2lkID0+IHtcbiAgICAgICAgY29uc3QgcmVjdCA9IHRoaXMuY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsMCwgcmVjdC53aWR0aCwgcmVjdC5oZWlnaHQpO1xuICAgIH07XG5cbiAgICBwcml2YXRlIGRyYXdJbWFnZSA9IChpbWFnZURhdGE6IHN0cmluZyk6IHZvaWQgPT4ge1xuICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWFnZS5zcmMgPSBpbWFnZURhdGE7XG4gICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLDAsIHJlY3Qud2lkdGgsIHJlY3QuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShpbWFnZSwgMCwgMCwgcmVjdC53aWR0aCwgcmVjdC5oZWlnaHQpO1xuICAgIH07XG5cbiAgICBwcml2YXRlIGFkZENoYW5nZUNvbG9yTGlzdGVuZXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucHJpbWFyeUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW1hcnlfY29sb3JfaW5wdXQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICB0aGlzLnByaW1hcnlJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLm9uQ29sb3JDaGFuZ2UpO1xuICAgICAgICB0aGlzLm9uQ29sb3JDaGFuZ2UoKVxuICAgIH1cblxuICAgIHByaXZhdGUgb25Db2xvckNoYW5nZSA9ICgpOiB2b2lkID0+IHtcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gdGhpcy5ub3JtYWxpemVDb2xvcihTdHJpbmcodGhpcy5wcmltYXJ5SW5wdXQudmFsdWUpKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMubm9ybWFsaXplQ29sb3IoU3RyaW5nKHRoaXMucHJpbWFyeUlucHV0LnZhbHVlKSk7XG4gICAgfTtcblxuICAgIHByaXZhdGUgbm9ybWFsaXplQ29sb3IoY29sb3I6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGlmIChjb2xvciA9PSBcIiMwMDBcIiB8fCBjb2xvciA9PSBcIiMwMDAwMDBcIiB8fCBjb2xvciA9PSBcInJiZygwLDAsMClcIikge1xuICAgICAgICAgICAgcmV0dXJuIFwiIzAxMDAwMFwiXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbG9yXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGFydFRvb2wodG9vbE9iajogVG9vbCwgdG9vbCwgY2FsbGJhY2sgPSB0aGlzLm9uQ2FudmFzVXBkYXRlKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUb29sLnVuU2VsZWN0ZWQoKTtcbiAgICAgICAgY2FuY2VsQm9yZGVyKHRoaXMuZGl2KTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRvb2wgPSB0b29sT2JqO1xuICAgICAgICB0aGlzLmRpdiA9IHRvb2wgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgICAgIHBhaW50Qm9yZGVyKHRoaXMuZGl2KTtcbiAgICAgICAgdG9vbE9iai5zZWxlY3RlZCgpO1xuICAgICAgICB0b29sT2JqLm9uVXBkYXRlKGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXJ0UGVuVG9vbCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcGVuVG9vbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwZW5fdG9vbCcpO1xuICAgICAgICB0aGlzLnBlbmNpbFRvb2wgPSBuZXcgUGVuY2lsVG9vbCh0aGlzLmNhbnZhcywgdGhpcy5wZW5TaXplLCB0aGlzLmNhbnZhc1NpemUpO1xuICAgICAgICB0aGlzLnNlbGVjdGVkVG9vbCA9IHRoaXMucGVuY2lsVG9vbDtcbiAgICAgICAgcGVuVG9vbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRUb29sKHRoaXMucGVuY2lsVG9vbCwgcGVuVG9vbCk7XG4gICAgICAgIH0pO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KTogdm9pZCA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuY29kZSA9PSAnS2V5UCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0VG9vbCh0aGlzLnBlbmNpbFRvb2wsIHBlblRvb2wpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHByaXZhdGUgc3RhcnRQYWludEJ1Y2tldFRvb2woKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHBhaW50QnVja2V0VG9vbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWludF9idWNrZXRfdG9vbCcpIGFzIEhUTUxEaXZFbGVtZW50O1xuICAgICAgICB0aGlzLnBhaW50QnVja2V0VG9vbCA9IG5ldyBQYWludEJ1Y2tldCh0aGlzLmNhbnZhcyk7XG4gICAgICAgIHBhaW50QnVja2V0VG9vbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRUb29sKHRoaXMucGFpbnRCdWNrZXRUb29sLCBwYWludEJ1Y2tldFRvb2wpO1xuICAgICAgICB9KVxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KTogdm9pZCA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuY29kZSA9PSAnS2V5QicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0VG9vbCh0aGlzLnBhaW50QnVja2V0VG9vbCwgcGFpbnRCdWNrZXRUb29sKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXJ0RXJhc2VyVG9vbCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZXJhc2VyVG9vbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcmFzZXJfdG9vbCcpIGFzIEhUTUxEaXZFbGVtZW50O1xuICAgICAgICB0aGlzLmVyYXNlclRvb2wgPSBuZXcgRXJhc2VyKHRoaXMuY2FudmFzLCB0aGlzLnBlblNpemUsIHRoaXMuY2FudmFzU2l6ZSk7XG4gICAgICAgIGVyYXNlclRvb2wuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0VG9vbCh0aGlzLmVyYXNlclRvb2wsIGVyYXNlclRvb2wpO1xuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmNvZGUgPT0gJ0tleUUnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFRvb2wodGhpcy5lcmFzZXJUb29sLCBlcmFzZXJUb29sKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXJ0U3Ryb2tlUmVjdGFuZ2xlVG9vbCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc3Ryb2tlUmVjdGFuZ2xlVG9vbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdHJva2VfcmVjdGFuZ2xlX3Rvb2wnKSBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICAgICAgdGhpcy5zdHJva2VSZWN0YW5nbGVUb29sID0gbmV3IFN0cm9rZVJlY3RhbmdsZSh0aGlzLmNhbnZhcywgdGhpcy5wZW5TaXplLCB0aGlzLmNhbnZhc1NpemUpO1xuICAgICAgICBzdHJva2VSZWN0YW5nbGVUb29sLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdGFydFRvb2wodGhpcy5zdHJva2VSZWN0YW5nbGVUb29sLCBzdHJva2VSZWN0YW5nbGVUb29sKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5jb2RlID09ICdLZXlSJykge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRUb29sKHRoaXMuc3Ryb2tlUmVjdGFuZ2xlVG9vbCwgc3Ryb2tlUmVjdGFuZ2xlVG9vbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGFydEZpbGxSZWN0YW5nbGVUb29sKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBmaWxsUmVjdGFuZ2xlVG9vbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWxsX3JlY3RhbmdsZV90b29sJykgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgICAgIHRoaXMuZmlsbFJlY3RhbmdsZVRvb2wgPSBuZXcgRmlsbFJlY3RhbmdsZSh0aGlzLmNhbnZhcywgdGhpcy5wZW5TaXplLCB0aGlzLmNhbnZhc1NpemUpO1xuICAgICAgICBmaWxsUmVjdGFuZ2xlVG9vbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRUb29sKHRoaXMuZmlsbFJlY3RhbmdsZVRvb2wsIGZpbGxSZWN0YW5nbGVUb29sKTtcbiAgICAgICAgfSlcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmNvZGUgPT0gJ0tleUYnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFRvb2wodGhpcy5maWxsUmVjdGFuZ2xlVG9vbCwgZmlsbFJlY3RhbmdsZVRvb2wpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHByaXZhdGUgc3RhcnRDb2xvclBpY2tlclRvb2woKTp2b2lkIHtcbiAgICAgICAgY29uc3QgY29sb3JQaWNrZXJUb29sID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbG9yX3BpY2tlcl90b29sJykgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgICAgIHRoaXMuY29sb3JQaWNrZXJUb29sID0gbmV3IENvbG9yUGlja2VyKHRoaXMuY2FudmFzKTtcbiAgICAgICAgY29sb3JQaWNrZXJUb29sLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk6dm9pZCA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0VG9vbCh0aGlzLmNvbG9yUGlja2VyVG9vbCwgY29sb3JQaWNrZXJUb29sLCB0aGlzLnNldElucHV0Q29sb3IpO1xuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmNvZGUgPT0gJ0tleUMnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFRvb2wodGhpcy5jb2xvclBpY2tlclRvb2wsIGNvbG9yUGlja2VyVG9vbCwgdGhpcy5zZXRJbnB1dENvbG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldElucHV0Q29sb3IgPSAoKTogdm9pZCA9PiB7XG4gICAgICAgIHRoaXMucHJpbWFyeUlucHV0LnZhbHVlID0gU3RyaW5nKHRoaXMuY29udGV4dC5maWxsU3R5bGUpO1xuICAgIH07XG5cbiAgICBwcml2YXRlIG9wZW5EaWFsb2dXaW5kb3coKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG9wZW5EaWFsb2dCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlhbG9nX2J1dHRvbicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgICAgICBvcGVuRGlhbG9nQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGlhbG9nV2luZG93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpYWxvZ193aW5kb3cnKSBhcyBIVE1MRGlhbG9nRWxlbWVudDtcbiAgICAgICAgICAgIGRpYWxvZ1dpbmRvdy5zaG93TW9kYWwoKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIGNsb3NlRGlhbG9nV2luZG93KCk6IHZvaWQge1xuICAgICAgICBjb25zdCBjbG9zZURpYWxvZ0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZV9kaWFsb2dfYnV0dG9uJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgICAgIGNsb3NlRGlhbG9nQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGlhbG9nV2luZG93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpYWxvZ193aW5kb3cnKSBhcyBIVE1MRGlhbG9nRWxlbWVudDtcbiAgICAgICAgICAgIGRpYWxvZ1dpbmRvdy5jbG9zZSgpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlR2lmKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBpbWFnZXNBcnJheSA9IHRoaXMuZnJhbWVzLmdldEltYWdlc0RhdGEoKTtcbiAgICAgICAgY29uc3QgZ2lmID0gbmV3IEdJRih7XG4gICAgICAgICAgd29ya2VyczogMixcbiAgICAgICAgICBxdWFsaXR5OiAxMyxcbiAgICAgICAgICB0cmFuc3BhcmVudDogXCIjMDAwXCIsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBwcm9taXNlcyA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBpbWFnZS5zcmMgPSBpbWFnZXNBcnJheVtpXTtcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2goXG4gICAgICAgICAgICAgICAgbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdpZi5hZGRGcmFtZShpbWFnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgZ2lmLnJlbmRlcigpO1xuICAgICAgICB9KTtcbiAgICAgICAgZ2lmLm9uKCdmaW5pc2hlZCcsIGZ1bmN0aW9uKGJsb2IpIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgICAgIGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICAgICAgICBsaW5rLmRvd25sb2FkID0gXCJ0ZXN0LmdpZlwiO1xuICAgICAgICAgICAgbGluay5jbGljaygpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkRXhwb3J0SW1hZ2VMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGNvbnN0IGV4cG9ydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleHBvcnRfYnV0dG9uJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgICAgIGV4cG9ydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVHaWYoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5jb2RlID09ICdOdW1wYWQwJykge1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlR2lmKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdFRvb2xzID0gKCk6IHZvaWQgPT4ge1xuICAgICAgICB0aGlzLnN0YXJ0UGVuVG9vbCgpO1xuICAgICAgICB0aGlzLnN0YXJ0UGFpbnRCdWNrZXRUb29sKCk7XG4gICAgICAgIHRoaXMuc3RhcnRFcmFzZXJUb29sKCk7XG4gICAgICAgIHRoaXMuc3RhcnRTdHJva2VSZWN0YW5nbGVUb29sKCk7XG4gICAgICAgIHRoaXMuc3RhcnRGaWxsUmVjdGFuZ2xlVG9vbCgpO1xuICAgICAgICB0aGlzLnN0YXJ0Q29sb3JQaWNrZXJUb29sKCk7XG4gICAgfVxuXG5cblxuXG5cbn1cblxuY29uc3QgYXBwID0gbmV3IEFwcCgpO1xuYXBwLnN0YXJ0KCk7XG4iLCJpbXBvcnQge1BvaW50fSBmcm9tIFwiLi9jb21wb25lbnRzL3BvaW50XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWxhdGl2ZVBvcyhldmVudDogTW91c2VFdmVudCwgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCk6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB7XG4gICAgY29uc3QgcmVjdCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB4OiBNYXRoLmZsb29yKGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQpLFxuICAgICAgICB5OiBNYXRoLmZsb29yKGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcClcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYW5pbWF0ZShkcmF3OiBGdW5jdGlvbiwgcmF0ZTogbnVtYmVyKTogRnVuY3Rpb24ge1xuICAgIGNvbnN0IHN0YXJ0ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgY29uc3QgdGltZUJldHdlZW5GcmFtZXMgPSBNYXRoLmZsb29yKDEwMDAgLyByYXRlKTtcbiAgICBsZXQgbmV4dEZyYW1lID0gc3RhcnQgKyB0aW1lQmV0d2VlbkZyYW1lcztcbiAgICBsZXQgaWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gX2FuaW1hdGUodGltZSk6IHZvaWQge1xuICAgICAgICBpZiAodGltZSA+PSBuZXh0RnJhbWUpIHtcbiAgICAgICAgICAgIG5leHRGcmFtZSArPSB0aW1lQmV0d2VlbkZyYW1lcztcbiAgICAgICAgICAgIGRyYXcoKTtcbiAgICAgICAgfVxuICAgICAgICBpZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShfYW5pbWF0ZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuICgpOiB2b2lkID0+IHtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoaWQpXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFpbnRCb3JkZXIoZWxlbWVudDogSFRNTERpdkVsZW1lbnQpOiB2b2lkIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FuY2VsQm9yZGVyKGVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50KTogdm9pZCB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNxdWFyZUNvb3JkaW5hdGVzKHg6IG51bWJlcix5OiBudW1iZXIsIHBlblNpemU6IG51bWJlciwgc3F1YXJlTGVuZ3RoOiBudW1iZXIpOiB7XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xufSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogTWF0aC5mbG9vcih4IC8gc3F1YXJlTGVuZ3RoKSAqIHNxdWFyZUxlbmd0aCxcbiAgICAgICAgeTogTWF0aC5mbG9vcih5IC8gc3F1YXJlTGVuZ3RoKSAqIHNxdWFyZUxlbmd0aCxcbiAgICAgICAgd2lkdGg6IHNxdWFyZUxlbmd0aCAqIHBlblNpemUsXG4gICAgICAgIGhlaWdodDogc3F1YXJlTGVuZ3RoICogcGVuU2l6ZVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdMaW5lKHByZXZQb3M6IFBvaW50LCBjdXJyZW50UG9zOiBQb2ludCwgY2FsbGJhY2s6IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgY29uc3QgZGVsdGFYID0gTWF0aC5hYnMoY3VycmVudFBvcy54IC0gcHJldlBvcy54KTtcbiAgICBjb25zdCBkZWx0YVkgPSBNYXRoLmFicyhjdXJyZW50UG9zLnkgLSBwcmV2UG9zLnkpO1xuICAgIGNvbnN0IHNpZ25YID0gcHJldlBvcy54IDwgY3VycmVudFBvcy54ID8gMSA6IC0xO1xuICAgIGNvbnN0IHNpZ25ZID0gcHJldlBvcy55IDwgY3VycmVudFBvcy55ID8gMSA6IC0xO1xuICAgIGxldCBlcnJvciA9IGRlbHRhWCAtIGRlbHRhWTtcbiAgICBjYWxsYmFjayhjdXJyZW50UG9zKTtcbiAgICB3aGlsZShwcmV2UG9zLnggIT0gY3VycmVudFBvcy54IHx8IHByZXZQb3MueSAhPSBjdXJyZW50UG9zLnkpXG4gICAge1xuICAgICAgICBjYWxsYmFjayhwcmV2UG9zKTtcbiAgICAgICAgbGV0IGVycm9yMiA9IGVycm9yICogMjtcbiAgICAgICAgLy9cbiAgICAgICAgaWYoZXJyb3IyID4gLWRlbHRhWSlcbiAgICAgICAge1xuICAgICAgICAgICAgZXJyb3IgLT0gZGVsdGFZO1xuICAgICAgICAgICAgcHJldlBvcy54ICs9IHNpZ25YO1xuICAgICAgICB9XG4gICAgICAgIGlmKGVycm9yMiA8IGRlbHRhWClcbiAgICAgICAge1xuICAgICAgICAgICAgZXJyb3IgKz0gZGVsdGFYO1xuICAgICAgICAgICAgcHJldlBvcy55ICs9IHNpZ25ZO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9