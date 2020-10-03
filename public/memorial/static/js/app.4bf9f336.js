/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		"app": 0
/******/ 	}
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "static/js/" + ({}[chunkId]||chunkId) + "." + {"chunk-18ff9fbe":"25a6d36d","chunk-417565a0":"44804df9","chunk-2d230a62":"d55e30a6","chunk-148553ec":"67783b54","chunk-2d2105d2":"80b20151","chunk-a7cc2be2":"c1918520","chunk-75f8456f":"6fc77369","chunk-c66162fe":"2e9f594a","chunk-f2e80490":"efc8aee9","chunk-760d8ca5":"6692ec6b","chunk-df5af61c":"d55830e7","chunk-ff6d7d58":"cd47fc59"}[chunkId] + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// mini-css-extract-plugin CSS loading
/******/ 		var cssChunks = {"chunk-417565a0":1,"chunk-148553ec":1,"chunk-a7cc2be2":1,"chunk-75f8456f":1,"chunk-c66162fe":1,"chunk-f2e80490":1,"chunk-760d8ca5":1,"chunk-df5af61c":1,"chunk-ff6d7d58":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "static/css/" + ({}[chunkId]||chunkId) + "." + {"chunk-18ff9fbe":"31d6cfe0","chunk-417565a0":"7c63bf1f","chunk-2d230a62":"31d6cfe0","chunk-148553ec":"8e4e6242","chunk-2d2105d2":"31d6cfe0","chunk-a7cc2be2":"1e3fcc08","chunk-75f8456f":"25c0215d","chunk-c66162fe":"b64ea53c","chunk-f2e80490":"8f71fccc","chunk-760d8ca5":"3c5fc2b0","chunk-df5af61c":"49a6f341","chunk-ff6d7d58":"ae4d6553"}[chunkId] + ".css";
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");
/******/ 				for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
/******/ 				}
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if(dataHref === href || dataHref === fullhref) return resolve();
/******/ 				}
/******/ 				var linkTag = document.createElement("link");
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				linkTag.onload = resolve;
/******/ 				linkTag.onerror = function(event) {
/******/ 					var request = event && event.target && event.target.src || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.request = request;
/******/ 					delete installedCssChunks[chunkId]
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				};
/******/ 				linkTag.href = fullhref;
/******/
/******/ 				var head = document.getElementsByTagName("head")[0];
/******/ 				head.appendChild(linkTag);
/******/ 			}).then(function() {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}));
/******/ 		}
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("56d7");


/***/ }),

/***/ "03d1":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "0520":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "083c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addUnit; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ea6e");
/* harmony import */ var _validate_number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("aaf9");


function addUnit(value) {
  if (!Object(___WEBPACK_IMPORTED_MODULE_0__[/* isDef */ "b"])(value)) {
    return undefined;
  }

  value = String(value);
  return Object(_validate_number__WEBPACK_IMPORTED_MODULE_1__[/* isNumeric */ "b"])(value) ? value + "px" : value;
}

/***/ }),

/***/ "0869":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "0a79":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "0b2a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TouchMixin; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8bbf");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_dom_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("24b9");


var MIN_DISTANCE = 10;

function getDirection(x, y) {
  if (x > y && x > MIN_DISTANCE) {
    return 'horizontal';
  }

  if (y > x && y > MIN_DISTANCE) {
    return 'vertical';
  }

  return '';
}

var TouchMixin = vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  data: function data() {
    return {
      direction: ''
    };
  },
  methods: {
    touchStart: function touchStart(event) {
      this.resetTouchStatus();
      this.startX = event.touches[0].clientX;
      this.startY = event.touches[0].clientY;
    },
    touchMove: function touchMove(event) {
      var touch = event.touches[0];
      this.deltaX = touch.clientX - this.startX;
      this.deltaY = touch.clientY - this.startY;
      this.offsetX = Math.abs(this.deltaX);
      this.offsetY = Math.abs(this.deltaY);
      this.direction = this.direction || getDirection(this.offsetX, this.offsetY);
    },
    resetTouchStatus: function resetTouchStatus() {
      this.direction = '';
      this.deltaX = 0;
      this.deltaY = 0;
      this.offsetX = 0;
      this.offsetY = 0;
    },
    // avoid Vue 2.6 event bubble issues by manually binding events
    // https://github.com/youzan/vant/issues/3015
    bindTouchEvent: function bindTouchEvent(el) {
      var _ref = this,
          onTouchStart = _ref.onTouchStart,
          onTouchMove = _ref.onTouchMove,
          onTouchEnd = _ref.onTouchEnd;

      Object(_utils_dom_event__WEBPACK_IMPORTED_MODULE_1__[/* on */ "b"])(el, 'touchstart', onTouchStart);
      Object(_utils_dom_event__WEBPACK_IMPORTED_MODULE_1__[/* on */ "b"])(el, 'touchmove', onTouchMove);

      if (onTouchEnd) {
        Object(_utils_dom_event__WEBPACK_IMPORTED_MODULE_1__[/* on */ "b"])(el, 'touchend', onTouchEnd);
        Object(_utils_dom_event__WEBPACK_IMPORTED_MODULE_1__[/* on */ "b"])(el, 'touchcancel', onTouchEnd);
      }
    }
  }
});

/***/ }),

/***/ "0e28":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "12f8":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "187b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1c37":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1ed3":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "20d0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("7b05");
var formats = __webpack_require__("aaf3");
var has = Object.prototype.hasOwnProperty;

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) { // eslint-disable-line func-name-matching
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) { // eslint-disable-line func-name-matching
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) { // eslint-disable-line func-name-matching
        return prefix;
    }
};

var isArray = Array.isArray;
var push = Array.prototype.push;
var pushToArray = function (arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;

var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    formatter: formats.formatters[formats['default']],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) { // eslint-disable-line func-name-matching
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var stringify = function stringify( // eslint-disable-line func-name-matching
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    formatter,
    encodeValuesOnly,
    charset
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray(obj)) {
        obj = obj.join(',');
    }

    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset) : prefix;
        }

        obj = '';
    }

    if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset);
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        if (isArray(obj)) {
            pushToArray(values, stringify(
                obj[key],
                typeof generateArrayPrefix === 'function' ? generateArrayPrefix(prefix, key) : prefix,
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly,
                charset
            ));
        } else {
            pushToArray(values, stringify(
                obj[key],
                prefix + (allowDots ? '.' + key : '[' + key + ']'),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly,
                charset
            ));
        }
    }

    return values;
};

var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.encoder !== null && opts.encoder !== undefined && typeof opts.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }

    var format = formats['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has.call(formats.formatters, opts.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        format = opts.format;
    }
    var formatter = formats.formatters[format];

    var filter = defaults.filter;
    if (typeof opts.filter === 'function' || isArray(opts.filter)) {
        filter = opts.filter;
    }

    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);

    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if (opts && 'indices' in opts) {
        arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (options.sort) {
        objKeys.sort(options.sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (options.skipNulls && obj[key] === null) {
            continue;
        }
        pushToArray(keys, stringify(
            obj[key],
            key,
            generateArrayPrefix,
            options.strictNullHandling,
            options.skipNulls,
            options.encode ? options.encoder : null,
            options.filter,
            options.sort,
            options.allowDots,
            options.serializeDate,
            options.formatter,
            options.encodeValuesOnly,
            options.charset
        ));
    }

    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            // encodeURIComponent('✓')
            prefix += 'utf8=%E2%9C%93&';
        }
    }

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),

/***/ "223d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/router/index.js
var router = __webpack_require__("a18c");

// EXTERNAL MODULE: ./src/store/index.js + 5 modules
var store = __webpack_require__("4360");

// CONCATENATED MODULE: ./src/utils/get-page-title.js
var title = '云祭祀';
function getPageTitle(pageTitle) {
  if (pageTitle) {
    return "".concat(pageTitle, " - ").concat(title);
  }

  return "".concat(title);
}
// EXTERNAL MODULE: ./src/plugins/wechatAuth.js
var wechatAuth = __webpack_require__("549a");

// CONCATENATED MODULE: ./src/permission.js



 // 微信登录插件

var qs = __webpack_require__("fed1");

router["a" /* default */].beforeEach(function (to, from, next) {
  var loginStatus = Number(store["a" /* default */].getters.loginStatus); // console.log('loginStatus=' + loginStatus)
  // console.log('token=' + store.getters.token)
  // 页面标题
  //  store.dispatch('user/fedLogOut')

  document.title = getPageTitle(to.meta.title);

  if (loginStatus === 0) {
    // 微信未授权登录跳转到授权登录页面
    var url = window.location.href; // 解决重复登录url添加重复的code与state问题

    var parseUrl = qs.parse(url.split('?')[1]);
    var loginUrl;

    if (parseUrl.code && parseUrl.state) {
      delete parseUrl.code;
      delete parseUrl.state;
      loginUrl = "".concat(url.split('?')[0], "?").concat(qs.stringify(parseUrl));
    } else {
      loginUrl = url;
    } // 设置微信授权回调地址


    wechatAuth["a" /* default */].redirect_uri = loginUrl; // 无论拒绝还是授权都设置成1

    store["a" /* default */].dispatch('user/setLoginStatus', 1); // 跳转到微信授权页面

    window.location.href = wechatAuth["a" /* default */].authUrl;
  } else if (loginStatus === 1) {
    // 用户已授权，获取code
    try {
      // 通过回调链接设置code status
      wechatAuth["a" /* default */].returnFromWechat(to.fullPath);
    } catch (err) {
      // 失败，设置状态未登录，刷新页面
      store["a" /* default */].dispatch('user/setLoginStatus', 0);
      location.reload();
    } // 同意授权 to.fullPath 携带code参数，拒绝授权没有code参数


    var code = wechatAuth["a" /* default */].code;
    console.log(code);

    if (code) {
      // 拿到code 访问服务端的登录接口
      store["a" /* default */].dispatch('user/loginWechatAuth', code).then(function (res) {
        // 成功设置已登录状态
        store["a" /* default */].dispatch('user/setLoginStatus', 2);
        next();
      }).catch(function () {
        // 失败，设置状态未登录，刷新页面
        store["a" /* default */].dispatch('user/setLoginStatus', 0);
        location.reload();
      });
    } else {
      store["a" /* default */].dispatch('user/setLoginStatus', 0);
      location.reload();
    }
  } else {
    // 已登录直接进入
    next();
  }
});

/***/ }),

/***/ "23c4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}var normalMerge=["attrs","props","domProps"],toArrayMerge=["class","style","directives"],functionalMerge=["on","nativeOn"],mergeJsxProps=function(a){return a.reduce(function(c,a){for(var b in a)if(!c[b])c[b]=a[b];else if(-1!==normalMerge.indexOf(b))c[b]=_extends({},c[b],a[b]);else if(-1!==toArrayMerge.indexOf(b)){var d=c[b]instanceof Array?c[b]:[c[b]],e=a[b]instanceof Array?a[b]:[a[b]];c[b]=d.concat(e)}else if(-1!==functionalMerge.indexOf(b)){for(var f in a[b])if(c[b][f]){var g=c[b][f]instanceof Array?c[b][f]:[c[b][f]],h=a[b][f]instanceof Array?a[b][f]:[a[b][f]];c[b][f]=g.concat(h)}else c[b][f]=a[b][f];}else if("hook"==b)for(var i in a[b])c[b][i]=c[b][i]?mergeFn(c[b][i],a[b][i]):a[b][i];else c[b]=a[b];return c},{})},mergeFn=function(a,b){return function(){a&&a.apply(this,arguments),b&&b.apply(this,arguments)}};module.exports=mergeJsxProps;


/***/ }),

/***/ "24b9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export supportsPassive */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return off; });
/* unused harmony export stopPropagation */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return preventDefault; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ea6e");

// eslint-disable-next-line import/no-mutable-exports
var supportsPassive = false;

if (!___WEBPACK_IMPORTED_MODULE_0__[/* isServer */ "f"]) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', {
      // eslint-disable-next-line getter-return
      get: function get() {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    });
    window.addEventListener('test-passive', null, opts); // eslint-disable-next-line no-empty
  } catch (e) {}
}

function on(target, event, handler, passive) {
  if (passive === void 0) {
    passive = false;
  }

  if (!___WEBPACK_IMPORTED_MODULE_0__[/* isServer */ "f"]) {
    target.addEventListener(event, handler, supportsPassive ? {
      capture: false,
      passive: passive
    } : false);
  }
}
function off(target, event, handler) {
  if (!___WEBPACK_IMPORTED_MODULE_0__[/* isServer */ "f"]) {
    target.removeEventListener(event, handler);
  }
}
function stopPropagation(event) {
  event.stopPropagation();
}
function preventDefault(event, isStopPropagation) {
  /* istanbul ignore else */
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault();
  }

  if (isStopPropagation) {
    stopPropagation(event);
  }
}

/***/ }),

/***/ "2698":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "28bd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return inherit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return emit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return mount; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("caa2");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("8bbf");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);


var inheritKey = ['ref', 'style', 'class', 'attrs', 'nativeOn', 'directives', 'staticClass', 'staticStyle'];
var mapInheritKey = {
  nativeOn: 'on'
}; // inherit partial context, map nativeOn to on

function inherit(context, inheritListeners) {
  var result = inheritKey.reduce(function (obj, key) {
    if (context.data[key]) {
      obj[mapInheritKey[key] || key] = context.data[key];
    }

    return obj;
  }, {});

  if (inheritListeners) {
    result.on = result.on || {};

    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(result.on, context.data.on);
  }

  return result;
} // emit event

function emit(context, eventName) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var listeners = context.listeners[eventName];

  if (listeners) {
    if (Array.isArray(listeners)) {
      listeners.forEach(function (listener) {
        listener.apply(void 0, args);
      });
    } else {
      listeners.apply(void 0, args);
    }
  }
} // mount functional component

function mount(Component, data) {
  var instance = new vue__WEBPACK_IMPORTED_MODULE_1___default.a({
    el: document.createElement('div'),
    props: Component.props,
    render: function render(h) {
      return h(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
        props: this.$props
      }, data));
    }
  });
  document.body.appendChild(instance.$el);
  return instance;
}

/***/ }),

/***/ "2947":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2c3e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2cf7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/mixins/popup/context.js
var context = {
  zIndex: 2000,
  lockCount: 0,
  stack: [],

  get top() {
    return this.stack[this.stack.length - 1];
  }

};
// EXTERNAL MODULE: ./node_modules/_@babel_runtime@7.8.7@@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("caa2");

// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/overlay/index.js
var overlay = __webpack_require__("9586");

// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/utils/functional.js
var functional = __webpack_require__("28bd");

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/mixins/popup/overlay.js




var defaultConfig = {
  className: '',
  customStyle: {}
};
var overlay_overlay; // close popup when click overlay && closeOnClickOverlay is true

function onClickOverlay() {
  if (context.top) {
    var vm = context.top.vm;
    vm.$emit('click-overlay');

    if (vm.closeOnClickOverlay) {
      if (vm.onClickOverlay) {
        vm.onClickOverlay();
      } else {
        vm.close();
      }
    }
  }
}

function mountOverlay() {
  overlay_overlay = Object(functional["c" /* mount */])(overlay["a" /* default */], {
    on: {
      click: onClickOverlay
    }
  });
}

function updateOverlay() {
  if (!overlay_overlay) {
    mountOverlay();
  }

  if (context.top) {
    var _context$top = context.top,
        vm = _context$top.vm,
        config = _context$top.config;
    var el = vm.$el;

    if (el && el.parentNode) {
      el.parentNode.insertBefore(overlay_overlay.$el, el);
    } else {
      document.body.appendChild(overlay_overlay.$el);
    }

    Object(esm_extends["a" /* default */])(overlay_overlay, defaultConfig, config, {
      show: true
    });
  } else {
    overlay_overlay.show = false;
  }
}
function openOverlay(vm, config) {
  if (!context.stack.some(function (item) {
    return item.vm === vm;
  })) {
    context.stack.push({
      vm: vm,
      config: config
    });
    updateOverlay();
  }
}
function closeOverlay(vm) {
  var stack = context.stack;

  if (stack.length) {
    if (context.top.vm === vm) {
      stack.pop();
      updateOverlay();
    } else {
      context.stack = stack.filter(function (item) {
        return item.vm !== vm;
      });
    }
  }
}
// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/utils/dom/event.js
var dom_event = __webpack_require__("24b9");

// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/utils/dom/node.js
var node = __webpack_require__("383f");

// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/utils/dom/scroll.js
var dom_scroll = __webpack_require__("4b1f");

// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/mixins/touch.js
var touch = __webpack_require__("0b2a");

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__("8bbf");
var external_Vue_default = /*#__PURE__*/__webpack_require__.n(external_Vue_);

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/mixins/portal.js


function getElement(selector) {
  if (typeof selector === 'string') {
    return document.querySelector(selector);
  }

  return selector();
}

function PortalMixin(_ref) {
  var ref = _ref.ref,
      afterPortal = _ref.afterPortal;
  return external_Vue_default.a.extend({
    props: {
      getContainer: [String, Function]
    },
    watch: {
      getContainer: 'portal'
    },
    mounted: function mounted() {
      if (this.getContainer) {
        this.portal();
      }
    },
    methods: {
      portal: function portal() {
        var getContainer = this.getContainer;
        var el = ref ? this.$refs[ref] : this.$el;
        var container;

        if (getContainer) {
          container = getElement(getContainer);
        } else if (this.$parent) {
          container = this.$parent.$el;
        }

        if (container && container !== el.parentNode) {
          container.appendChild(el);
        }

        if (afterPortal) {
          afterPortal.call(this);
        }
      }
    }
  });
}
// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/mixins/bind-event.js
var bind_event = __webpack_require__("5f9d");

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/mixins/close-on-popstate.js


var CloseOnPopstateMixin = {
  mixins: [Object(bind_event["a" /* BindEventMixin */])(function (bind, isBind) {
    this.handlePopstate(isBind && this.closeOnPopstate);
  })],
  props: {
    closeOnPopstate: Boolean
  },
  data: function data() {
    return {
      bindStatus: false
    };
  },
  watch: {
    closeOnPopstate: function closeOnPopstate(val) {
      this.handlePopstate(val);
    }
  },
  methods: {
    handlePopstate: function handlePopstate(bind) {
      var _this = this;

      /* istanbul ignore if */
      if (this.$isServer) {
        return;
      }

      if (this.bindStatus !== bind) {
        this.bindStatus = bind;
        var action = bind ? dom_event["b" /* on */] : dom_event["a" /* off */];
        action(window, 'popstate', function () {
          _this.close();

          _this.shouldReopen = false;
        });
      }
    }
  }
};
// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/mixins/popup/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return popupMixinProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupMixin; });
// Context

 // Utils



 // Mixins




var popupMixinProps = {
  // whether to show popup
  value: Boolean,
  // whether to show overlay
  overlay: Boolean,
  // overlay custom style
  overlayStyle: Object,
  // overlay custom class name
  overlayClass: String,
  // whether to close popup when click overlay
  closeOnClickOverlay: Boolean,
  // z-index
  zIndex: [Number, String],
  // prevent body scroll
  lockScroll: {
    type: Boolean,
    default: true
  },
  // whether to lazy render
  lazyRender: {
    type: Boolean,
    default: true
  }
};
function PopupMixin(options) {
  if (options === void 0) {
    options = {};
  }

  return {
    mixins: [touch["a" /* TouchMixin */], CloseOnPopstateMixin, PortalMixin({
      afterPortal: function afterPortal() {
        if (this.overlay) {
          updateOverlay();
        }
      }
    })],
    props: popupMixinProps,
    data: function data() {
      return {
        inited: this.value
      };
    },
    computed: {
      shouldRender: function shouldRender() {
        return this.inited || !this.lazyRender;
      }
    },
    watch: {
      value: function value(val) {
        var type = val ? 'open' : 'close';
        this.inited = this.inited || this.value;
        this[type]();

        if (!options.skipToggleEvent) {
          this.$emit(type);
        }
      },
      overlay: 'renderOverlay'
    },
    mounted: function mounted() {
      if (this.value) {
        this.open();
      }
    },

    /* istanbul ignore next */
    activated: function activated() {
      if (this.shouldReopen) {
        this.$emit('input', true);
        this.shouldReopen = false;
      }
    },
    beforeDestroy: function beforeDestroy() {
      this.close();

      if (this.getContainer) {
        Object(node["a" /* removeNode */])(this.$el);
      }
    },

    /* istanbul ignore next */
    deactivated: function deactivated() {
      if (this.value) {
        this.close();
        this.shouldReopen = true;
      }
    },
    methods: {
      open: function open() {
        /* istanbul ignore next */
        if (this.$isServer || this.opened) {
          return;
        } // cover default zIndex


        if (this.zIndex !== undefined) {
          context.zIndex = this.zIndex;
        }

        this.opened = true;
        this.renderOverlay();

        if (this.lockScroll) {
          Object(dom_event["b" /* on */])(document, 'touchstart', this.touchStart);
          Object(dom_event["b" /* on */])(document, 'touchmove', this.onTouchMove);

          if (!context.lockCount) {
            document.body.classList.add('van-overflow-hidden');
          }

          context.lockCount++;
        }
      },
      close: function close() {
        if (!this.opened) {
          return;
        }

        if (this.lockScroll) {
          context.lockCount--;
          Object(dom_event["a" /* off */])(document, 'touchstart', this.touchStart);
          Object(dom_event["a" /* off */])(document, 'touchmove', this.onTouchMove);

          if (!context.lockCount) {
            document.body.classList.remove('van-overflow-hidden');
          }
        }

        this.opened = false;
        closeOverlay(this);
        this.$emit('input', false);
      },
      onTouchMove: function onTouchMove(event) {
        this.touchMove(event);
        var direction = this.deltaY > 0 ? '10' : '01';
        var el = Object(dom_scroll["d" /* getScroller */])(event.target, this.$el);
        var scrollHeight = el.scrollHeight,
            offsetHeight = el.offsetHeight,
            scrollTop = el.scrollTop;
        var status = '11';
        /* istanbul ignore next */

        if (scrollTop === 0) {
          status = offsetHeight >= scrollHeight ? '00' : '01';
        } else if (scrollTop + offsetHeight >= scrollHeight) {
          status = '10';
        }
        /* istanbul ignore next */


        if (status !== '11' && this.direction === 'vertical' && !(parseInt(status, 2) & parseInt(direction, 2))) {
          Object(dom_event["c" /* preventDefault */])(event, true);
        }
      },
      renderOverlay: function renderOverlay() {
        var _this = this;

        if (this.$isServer || !this.value) {
          return;
        }

        this.$nextTick(function () {
          _this.updateZIndex(_this.overlay ? 1 : 0);

          if (_this.overlay) {
            openOverlay(_this, {
              zIndex: context.zIndex++,
              duration: _this.duration,
              className: _this.overlayClass,
              customStyle: _this.overlayStyle
            });
          } else {
            closeOverlay(_this);
          }
        });
      },
      updateZIndex: function updateZIndex(value) {
        if (value === void 0) {
          value = 0;
        }

        this.$el.style.zIndex = ++context.zIndex + value;
      }
    }
  };
}

/***/ }),

/***/ "2f2a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/_@babel_runtime@7.8.7@@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("caa2");

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__("8bbf");
var external_Vue_default = /*#__PURE__*/__webpack_require__.n(external_Vue_);

// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/utils/create/index.js + 6 modules
var create = __webpack_require__("f25d");

// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/utils/index.js
var utils = __webpack_require__("ea6e");

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/toast/lock-click.js
var lockCount = 0;
function lockClick(lock) {
  if (lock) {
    if (!lockCount) {
      document.body.classList.add('van-toast--unclickable');
    }

    lockCount++;
  } else {
    lockCount--;

    if (!lockCount) {
      document.body.classList.remove('van-toast--unclickable');
    }
  }
}
// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/mixins/popup/index.js + 4 modules
var popup = __webpack_require__("2cf7");

// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/icon/index.js
var es_icon = __webpack_require__("a9f0");

// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/loading/index.js
var loading = __webpack_require__("4614");

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/toast/Toast.js
// Utils

 // Mixins

 // Components




var _createNamespace = Object(create["a" /* createNamespace */])('toast'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ var Toast = (createComponent({
  mixins: [Object(popup["a" /* PopupMixin */])()],
  props: {
    icon: String,
    className: null,
    iconPrefix: String,
    loadingType: String,
    forbidClick: Boolean,
    closeOnClick: Boolean,
    message: [Number, String],
    type: {
      type: String,
      default: 'text'
    },
    position: {
      type: String,
      default: 'middle'
    },
    transition: {
      type: String,
      default: 'van-fade'
    },
    lockScroll: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      clickable: false
    };
  },
  mounted: function mounted() {
    this.toggleClickable();
  },
  destroyed: function destroyed() {
    this.toggleClickable();
  },
  watch: {
    value: 'toggleClickable',
    forbidClick: 'toggleClickable'
  },
  methods: {
    onClick: function onClick() {
      if (this.closeOnClick) {
        this.close();
      }
    },
    toggleClickable: function toggleClickable() {
      var clickable = this.value && this.forbidClick;

      if (this.clickable !== clickable) {
        this.clickable = clickable;
        lockClick(clickable);
      }
    },

    /* istanbul ignore next */
    onAfterEnter: function onAfterEnter() {
      this.$emit('opened');

      if (this.onOpened) {
        this.onOpened();
      }
    },
    onAfterLeave: function onAfterLeave() {
      this.$emit('closed');
    },
    genIcon: function genIcon() {
      var h = this.$createElement;
      var icon = this.icon,
          type = this.type,
          iconPrefix = this.iconPrefix,
          loadingType = this.loadingType;
      var hasIcon = icon || type === 'success' || type === 'fail';

      if (hasIcon) {
        return h(es_icon["a" /* default */], {
          "class": bem('icon'),
          "attrs": {
            "classPrefix": iconPrefix,
            "name": icon || type
          }
        });
      }

      if (type === 'loading') {
        return h(loading["a" /* default */], {
          "class": bem('loading'),
          "attrs": {
            "type": loadingType
          }
        });
      }
    },
    genMessage: function genMessage() {
      var h = this.$createElement;
      var type = this.type,
          message = this.message;

      if (!Object(utils["b" /* isDef */])(message) || message === '') {
        return;
      }

      if (type === 'html') {
        return h("div", {
          "class": bem('text'),
          "domProps": {
            "innerHTML": message
          }
        });
      }

      return h("div", {
        "class": bem('text')
      }, [message]);
    }
  },
  render: function render() {
    var _ref;

    var h = arguments[0];
    return h("transition", {
      "attrs": {
        "name": this.transition
      },
      "on": {
        "afterEnter": this.onAfterEnter,
        "afterLeave": this.onAfterLeave
      }
    }, [h("div", {
      "directives": [{
        name: "show",
        value: this.value
      }],
      "class": [bem([this.position, (_ref = {}, _ref[this.type] = !this.icon, _ref)]), this.className],
      "on": {
        "click": this.onClick
      }
    }, [this.genIcon(), this.genMessage()])]);
  }
}));
// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/utils/dom/node.js
var node = __webpack_require__("383f");

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/toast/index.js





var defaultOptions = {
  icon: '',
  type: 'text',
  // @deprecated
  mask: false,
  value: true,
  message: '',
  className: '',
  overlay: false,
  onClose: null,
  onOpened: null,
  duration: 2000,
  iconPrefix: undefined,
  position: 'middle',
  transition: 'van-fade',
  forbidClick: false,
  loadingType: undefined,
  getContainer: 'body',
  overlayStyle: null,
  closeOnClick: false,
  closeOnClickOverlay: false
}; // default options of specific type

var defaultOptionsMap = {};
var queue = [];
var multiple = false;

var currentOptions = Object(esm_extends["a" /* default */])({}, defaultOptions);

function parseOptions(message) {
  if (Object(utils["d" /* isObject */])(message)) {
    return message;
  }

  return {
    message: message
  };
}

function createInstance() {
  /* istanbul ignore if */
  if (utils["f" /* isServer */]) {
    return {};
  }

  if (!queue.length || multiple) {
    var toast = new (external_Vue_default.a.extend(Toast))({
      el: document.createElement('div')
    });
    toast.$on('input', function (value) {
      toast.value = value;
    });
    queue.push(toast);
  }

  return queue[queue.length - 1];
} // transform toast options to popup props


function transformOptions(options) {
  return Object(esm_extends["a" /* default */])({}, options, {
    overlay: options.mask || options.overlay,
    mask: undefined,
    duration: undefined
  });
}

function toast_Toast(options) {
  if (options === void 0) {
    options = {};
  }

  var toast = createInstance(); // should add z-index if previous toast has not disappeared

  if (toast.value) {
    toast.updateZIndex();
  }

  options = parseOptions(options);
  options = Object(esm_extends["a" /* default */])({}, currentOptions, {}, defaultOptionsMap[options.type || currentOptions.type], {}, options);

  options.clear = function () {
    toast.value = false;

    if (options.onClose) {
      options.onClose();
    }

    if (multiple && !utils["f" /* isServer */]) {
      toast.$on('closed', function () {
        clearTimeout(toast.timer);
        queue = queue.filter(function (item) {
          return item !== toast;
        });
        Object(node["a" /* removeNode */])(toast.$el);
        toast.$destroy();
      });
    }
  };

  Object(esm_extends["a" /* default */])(toast, transformOptions(options));

  clearTimeout(toast.timer);

  if (options.duration > 0) {
    toast.timer = setTimeout(function () {
      toast.clear();
    }, options.duration);
  }

  return toast;
}

var toast_createMethod = function createMethod(type) {
  return function (options) {
    return toast_Toast(Object(esm_extends["a" /* default */])({
      type: type
    }, parseOptions(options)));
  };
};

['loading', 'success', 'fail'].forEach(function (method) {
  toast_Toast[method] = toast_createMethod(method);
});

toast_Toast.clear = function (all) {
  if (queue.length) {
    if (all) {
      queue.forEach(function (toast) {
        toast.clear();
      });
      queue = [];
    } else if (!multiple) {
      queue[0].clear();
    } else {
      queue.shift().clear();
    }
  }
};

toast_Toast.setDefaultOptions = function (type, options) {
  if (typeof type === 'string') {
    defaultOptionsMap[type] = options;
  } else {
    Object(esm_extends["a" /* default */])(currentOptions, type);
  }
};

toast_Toast.resetDefaultOptions = function (type) {
  if (typeof type === 'string') {
    defaultOptionsMap[type] = null;
  } else {
    currentOptions = Object(esm_extends["a" /* default */])({}, defaultOptions);
    defaultOptionsMap = {};
  }
};

toast_Toast.allowMultiple = function (value) {
  if (value === void 0) {
    value = true;
  }

  multiple = value;
};

toast_Toast.install = function () {
  external_Vue_default.a.use(Toast);
};

external_Vue_default.a.prototype.$toast = toast_Toast;
/* harmony default export */ var es_toast = __webpack_exports__["a"] = (toast_Toast);

/***/ }),

/***/ "2f50":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3360":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return RED; });
/* unused harmony export BLUE */
/* unused harmony export GREEN */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return WHITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BORDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return BORDER_TOP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return BORDER_LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BORDER_BOTTOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return BORDER_SURROUND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return BORDER_TOP_BOTTOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return BORDER_UNSET_TOP_BOTTOM; });
// color
var RED = '#ee0a24';
var BLUE = '#1989fa';
var GREEN = '#07c160';
var WHITE = '#fff'; // border

var BORDER = 'van-hairline';
var BORDER_TOP = BORDER + "--top";
var BORDER_LEFT = BORDER + "--left";
var BORDER_BOTTOM = BORDER + "--bottom";
var BORDER_SURROUND = BORDER + "--surround";
var BORDER_TOP_BOTTOM = BORDER + "--top-bottom";
var BORDER_UNSET_TOP_BOTTOM = BORDER + "-unset--top-bottom";

/***/ }),

/***/ "365c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/toast/style/index.js
var style = __webpack_require__("5661");

// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/toast/index.js + 2 modules
var toast = __webpack_require__("2f2a");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("cebe");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./src/store/index.js + 5 modules
var store = __webpack_require__("4360");

// EXTERNAL MODULE: ./src/config/index.js
var src_config = __webpack_require__("f121");

// CONCATENATED MODULE: ./src/utils/request.js





var service = external_axios_default.a.create({
  baseURL: src_config["api"].base_api,
  withCredentials: true,
  timeout: 50000
}); // request拦截器 request interceptor

service.interceptors.request.use(function (config) {
  // 不传递默认开启loading
  if (!config.hideloading) {
    // loading
    toast["a" /* default */].loading({
      message: '加载中...',
      forbidClick: true,
      duration: 0,
      loadingType: 'spinner'
    });
  }

  if (store["a" /* default */].getters.token) {
    config.headers['token'] = store["a" /* default */].getters.token;
  }

  return config;
}, function (error) {
  // do something with request error
  console.log(error); // for debug

  return Promise.reject(error);
}); // respone拦截器

service.interceptors.response.use(function (response) {
  toast["a" /* default */].clear();

  var res = response.data; // 这里注意修改成你访问的服务端接口规则

  if (res.status && res.status !== 200) {
    Object(toast["a" /* default */])({
      message: res.info
    }); // 登录超时,重新登录


    if (res.status === 401) {
      store["a" /* default */].dispatch('user/fedLogOut').then(function () {
        location.reload();
      });
    }

    return Promise.reject(res || 'error');
  } else {
    return Promise.resolve(res);
  }
}, function (error) {
  toast["a" /* default */].clear();

  console.log('err' + error); // for debug

  return Promise.reject(error);
});
/* harmony default export */ var request = (service);
// CONCATENATED MODULE: ./src/api/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return loginByCode; });
/* unused harmony export onlineServiceslist */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Memorialadd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return Memorialmylist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Memorialmyinfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return Memorialredact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Memoriallist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Leavewordadd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Leavewordlist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return collect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return pelieve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return memorialdel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return typelist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Memberedit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return upload; });

function loginByCode(params) {
  return request({
    url: '/accesstoken/baseauth',
    method: 'get',
    params: params
  });
} // 纪念馆

function onlineServiceslist(query) {
  return request({
    url: '/onlineServices/list',
    method: 'get',
    params: query
  });
}
function Memorialadd(data) {
  return request({
    url: '/onlineMemorial/add',
    method: 'post',
    data: data
  });
}
function Memorialmylist(params) {
  return request({
    url: '/onlineMemorial/mylist',
    method: 'get',
    params: params
  });
}
function Memorialmyinfo(params) {
  return request({
    url: '/onlineMemorial/info',
    method: 'get',
    params: params
  });
}
function Memorialredact(data) {
  return request({
    url: '/onlineMemorial/redact',
    method: 'post',
    data: data
  });
}
function Memoriallist(params) {
  return request({
    url: '/onlineMemorial/list',
    method: 'get',
    params: params
  });
}
function Leavewordadd(data) {
  return request({
    url: '/onlineLeaveword/add',
    method: 'post',
    data: data
  });
}
function Leavewordlist(params) {
  return request({
    url: '/onlineLeaveword/list',
    method: 'get',
    params: params
  });
}
function collect(data) {
  return request({
    url: '/onlineMemorial/collect',
    method: 'post',
    data: data
  });
}
function pelieve(params) {
  return request({
    url: '/onlineMemorial/pelieve',
    method: 'get',
    params: params
  });
}
function memorialdel(params) {
  return request({
    url: '/onlineMemorial/del',
    method: 'get',
    params: params
  });
}
function typelist(params) {
  return request({
    url: '/onlineDeploy/typelist',
    method: 'get',
    params: params
  });
}
function Memberedit(data) {
  return request({
    url: '/onlineMember/edit',
    method: 'post',
    data: data
  });
}
function upload(data) {
  return request({
    url: '/upload/upload',
    method: 'post',
    data: data
  });
}

/***/ }),

/***/ "3715":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "37d4":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "383f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return removeNode; });
function removeNode(el) {
  var parent = el.parentNode;

  if (parent) {
    parent.removeChild(el);
  }
}

/***/ }),

/***/ "38d8":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "390a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4360":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__("8bbf");
var external_Vue_default = /*#__PURE__*/__webpack_require__.n(external_Vue_);

// EXTERNAL MODULE: external "Vuex"
var external_Vuex_ = __webpack_require__("5880");
var external_Vuex_default = /*#__PURE__*/__webpack_require__.n(external_Vuex_);

// CONCATENATED MODULE: ./src/store/getters.js
var getters = {
  // user
  token: function token(state) {
    return state.user.token;
  },
  userInfo: function userInfo(state) {
    return state.user.userInfo;
  },
  user: function user(state) {
    return state.user.user;
  },
  loginStatus: function loginStatus(state) {
    return state.user.loginStatus;
  }
};
/* harmony default export */ var store_getters = (getters);
// CONCATENATED MODULE: ./src/store/modules/app.js
var state = {};
var mutations = {};
var actions = {};
/* harmony default export */ var app = ({
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions
});
// EXTERNAL MODULE: ./src/api/index.js + 1 modules
var api = __webpack_require__("365c");

// EXTERNAL MODULE: ./node_modules/_js-cookie@2.2.1@js-cookie/src/js.cookie.js
var js_cookie = __webpack_require__("e04f");
var js_cookie_default = /*#__PURE__*/__webpack_require__.n(js_cookie);

// CONCATENATED MODULE: ./node_modules/_good-storage@1.1.1@good-storage/dist/storage.esm.js
/**
 * good-storage v1.1.1
 * (c) 2020 ustbhuangyi
 */
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * 本地存储实现,封装localStorage和sessionStorage
 */
var isServer = typeof window === 'undefined';

var store = {
  /* eslint-disable no-undef */
  version: '1.1.1',
  storage: !isServer ? window.localStorage : null,
  session: {
    storage: !isServer ? window.sessionStorage : null
  }
};

var storage_esm_api = {
  set: function set(key, val) {
    if (this.disabled) {
      return;
    }
    if (val === undefined) {
      return this.remove(key);
    }
    this.storage.setItem(key, serialize(val));
    return val;
  },
  get: function get(key, def) {
    if (this.disabled) {
      return def;
    }
    var val = deserialize(this.storage.getItem(key));
    return val === undefined ? def : val;
  },
  has: function has(key) {
    return this.get(key) !== undefined;
  },
  remove: function remove(key) {
    if (this.disabled) {
      return;
    }
    this.storage.removeItem(key);
  },
  clear: function clear() {
    if (this.disabled) {
      return;
    }
    this.storage.clear();
  },
  getAll: function getAll() {
    if (this.disabled) {
      return null;
    }
    var ret = {};
    this.forEach(function (key, val) {
      ret[key] = val;
    });
    return ret;
  },
  forEach: function forEach(callback) {
    if (this.disabled) {
      return;
    }
    for (var i = 0; i < this.storage.length; i++) {
      var key = this.storage.key(i);
      callback(key, this.get(key));
    }
  }
};

_extends(store, storage_esm_api);

_extends(store.session, storage_esm_api);

function serialize(val) {
  return JSON.stringify(val);
}

function deserialize(val) {
  if (typeof val !== 'string') {
    return undefined;
  }
  try {
    return JSON.parse(val);
  } catch (e) {
    return val || undefined;
  }
}

try {
  var testKey = '__storejs__';
  store.set(testKey, testKey);
  if (store.get(testKey) !== testKey) {
    store.disabled = true;
  }
  store.remove(testKey);
} catch (e) {
  store.disabled = true;
}

/* harmony default export */ var storage_esm = (store);

// CONCATENATED MODULE: ./src/utils/cache.js


var LoginStatusKey = 'Login-Status'; // 登录态 0未授权未登录 1授权未登录 2 登陆成功

var TokenKey = 'Access-Token'; // token

var UserInfoKey = 'User-Info'; // 用户信息 {} {...}

var UserKey = 'User'; // 获取登录状态

function loadLoginStatus() {
  return js_cookie_default.a.get(LoginStatusKey) || 0;
} // 保持登录状态

function saveLoginStatus(status) {
  js_cookie_default.a.set(LoginStatusKey, status, {
    expires: 7
  });
  return status;
} // 删除登录状态

function removeLoginStatus() {
  js_cookie_default.a.remove(LoginStatusKey);
  return '';
} // 获取token

function loadToken() {
  return storage_esm.get(TokenKey, '');
} // 保存token

function saveToken(token) {
  storage_esm.set(TokenKey, token);
  return token;
} // 删除token

function removeToken() {
  storage_esm.remove(TokenKey);
  return '';
} // 获取用户信息

function loadUserInfo() {
  return storage_esm.get(UserInfoKey, {});
}
function loadUser() {
  return storage_esm.get(UserKey, {});
} // 保存用户信息

function saveUserInfo(userInfo) {
  storage_esm.set(UserInfoKey, userInfo);
  return userInfo;
}
function saveUser(userInfo) {
  storage_esm.set(UserKey, userInfo);
  return userInfo;
} // 删除用户信息

function removeUserInfo() {
  storage_esm.remove(UserInfoKey);
  return {};
}
function removeUser() {
  storage_esm.remove(UserKey);
  return {};
}
// CONCATENATED MODULE: ./src/store/modules/user.js


var user_state = {
  loginStatus: loadLoginStatus(),
  // 登录状态
  token: loadToken(),
  // token
  userInfo: loadUserInfo(),
  // 用户登录信息
  user: loadUser()
};
var user_mutations = {
  SET_USERINFO: function SET_USERINFO(state, userInfo) {
    state.userInfo = userInfo;
  },
  SET_LOGIN_STATUS: function SET_LOGIN_STATUS(state, loginStatus) {
    state.loginStatus = loginStatus;
  },
  SET_TOKEN: function SET_TOKEN(state, token) {
    state.token = token;
  },
  SET_USER: function SET_USER(state, user) {
    state.user = user;
  }
};
var user_actions = {
  // 登录相关，通过code获取token和用户信息
  loginWechatAuth: function loginWechatAuth(_ref, code) {
    var commit = _ref.commit;
    var data = {
      code: code
    };
    return new Promise(function (resolve, reject) {
      Object(api["j" /* loginByCode */])(data).then(function (res) {
        // console.log(res.data)
        var token = res.data.token;
        var user = res.data.user;
        var userinfo = res.data.userinfo;
        commit('SET_USER', saveUser(user));
        commit('SET_USERINFO', saveUserInfo(userinfo));
        commit('SET_TOKEN', saveToken(token.access_token));
        resolve(res);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  // 设置状态
  setLoginStatus: function setLoginStatus(_ref2, query) {
    var commit = _ref2.commit;

    if (query === 0 || query === 1) {
      // 上线打开注释，本地调试注释掉，保持信息最新
      removeToken();
      removeUserInfo();
    } // 设置不同的登录状态


    commit('SET_LOGIN_STATUS', saveLoginStatus(query));
  },
  setUser: function setUser(_ref3, query) {
    var commit = _ref3.commit;
    commit('SET_USERINFO', saveUserInfo(query));
  },
  // 登出
  fedLogOut: function fedLogOut(_ref4) {
    var commit = _ref4.commit;
    // 删除token，用户信息，登陆状态
    removeToken();
    removeUserInfo();
    removeUser();
    removeLoginStatus();
    commit('SET_TOKEN', '');
    commit('SET_USER', {});
    commit('SET_USERINFO', {});
  }
};
/* harmony default export */ var modules_user = ({
  namespaced: true,
  state: user_state,
  mutations: user_mutations,
  actions: user_actions
});
// CONCATENATED MODULE: ./src/store/index.js





external_Vue_default.a.use(external_Vuex_default.a);
var store_store = new external_Vuex_default.a.Store({
  modules: {
    app: app,
    user: modules_user
  },
  getters: store_getters
});
/* harmony default export */ var src_store = __webpack_exports__["a"] = (store_store);

/***/ }),

/***/ "44ce":
/***/ (function(module, exports) {


;(function(win, lib) {
    var doc = win.document;
    var docEl = doc.documentElement;
    var metaEl = doc.querySelector('meta[name="viewport"]');
    var flexibleEl = doc.querySelector('meta[name="flexible"]');
    var dpr = 0;
    var scale = 0;
    var tid;
    var flexible = lib.flexible || (lib.flexible = {});

    if (metaEl) {
        console.warn('将根据已有的meta标签来设置缩放比例');
        var match = metaEl.getAttribute('content').match(/initial\-scale=([\d\.]+)/);
        if (match) {
            scale = parseFloat(match[1]);
            dpr = parseInt(1 / scale);
        }
    } else if (flexibleEl) {
        var content = flexibleEl.getAttribute('content');
        if (content) {
            var initialDpr = content.match(/initial\-dpr=([\d\.]+)/);
            var maximumDpr = content.match(/maximum\-dpr=([\d\.]+)/);
            if (initialDpr) {
                dpr = parseFloat(initialDpr[1]);
                scale = parseFloat((1 / dpr).toFixed(2));
            }
            if (maximumDpr) {
                dpr = parseFloat(maximumDpr[1]);
                scale = parseFloat((1 / dpr).toFixed(2));
            }
        }
    }

    if (!dpr && !scale) {
        var isAndroid = win.navigator.appVersion.match(/android/gi);
        var isIPhone = win.navigator.appVersion.match(/iphone/gi);
        var devicePixelRatio = win.devicePixelRatio;
        if (isIPhone) {
            // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
            if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
                dpr = 3;
            } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)){
                dpr = 2;
            } else {
                dpr = 1;
            }
        } else {
            // 其他设备下，仍旧使用1倍的方案
            dpr = 1;
        }
        scale = 1 / dpr;
    }

    docEl.setAttribute('data-dpr', dpr);
    if (!metaEl) {
        metaEl = doc.createElement('meta');
        metaEl.setAttribute('name', 'viewport');
        metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
        if (docEl.firstElementChild) {
            docEl.firstElementChild.appendChild(metaEl);
        } else {
            var wrap = doc.createElement('div');
            wrap.appendChild(metaEl);
            doc.write(wrap.innerHTML);
        }
    }

    function refreshRem(){
        var width = docEl.getBoundingClientRect().width;
        if (width / dpr > 540) {
            width = 540 * dpr;
        }
        var rem = width / 10;
        docEl.style.fontSize = rem + 'px';
        flexible.rem = win.rem = rem;
    }

    win.addEventListener('resize', function() {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
    }, false);
    win.addEventListener('pageshow', function(e) {
        if (e.persisted) {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300);
        }
    }, false);

    if (doc.readyState === 'complete') {
        doc.body.style.fontSize = 12 * dpr + 'px';
    } else {
        doc.addEventListener('DOMContentLoaded', function(e) {
            doc.body.style.fontSize = 12 * dpr + 'px';
        }, false);
    }


    refreshRem();

    flexible.dpr = win.dpr = dpr;
    flexible.refreshRem = refreshRem;
    flexible.rem2px = function(d) {
        var val = parseFloat(d) * this.rem;
        if (typeof d === 'string' && d.match(/rem$/)) {
            val += 'px';
        }
        return val;
    }
    flexible.px2rem = function(d) {
        var val = parseFloat(d) / this.rem;
        if (typeof d === 'string' && d.match(/px$/)) {
            val += 'rem';
        }
        return val;
    }

})(window, window['lib'] || (window['lib'] = {}));


/***/ }),

/***/ "4614":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("23c4");
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("f25d");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("083c");
/* harmony import */ var _utils_functional__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("28bd");

// Utils

 // Types

var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* createNamespace */ "a"])('loading'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function LoadingIcon(h, props) {
  if (props.type === 'spinner') {
    var Spin = [];

    for (var i = 0; i < 12; i++) {
      Spin.push(h("i"));
    }

    return Spin;
  }

  return h("svg", {
    "class": bem('circular'),
    "attrs": {
      "viewBox": "25 25 50 50"
    }
  }, [h("circle", {
    "attrs": {
      "cx": "50",
      "cy": "50",
      "r": "20",
      "fill": "none"
    }
  })]);
}

function LoadingText(h, props, slots) {
  if (slots.default) {
    var style = props.textSize && {
      fontSize: Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* addUnit */ "a"])(props.textSize)
    };
    return h("span", {
      "class": bem('text'),
      "style": style
    }, [slots.default()]);
  }
}

function Loading(h, props, slots, ctx) {
  var color = props.color,
      size = props.size,
      type = props.type;
  var style = {
    color: color
  };

  if (size) {
    var iconSize = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* addUnit */ "a"])(size);
    style.width = iconSize;
    style.height = iconSize;
  }

  return h("div", _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
    "class": bem([type, {
      vertical: props.vertical
    }])
  }, Object(_utils_functional__WEBPACK_IMPORTED_MODULE_3__[/* inherit */ "b"])(ctx, true)]), [h("span", {
    "class": bem('spinner', type),
    "style": style
  }, [LoadingIcon(h, props)]), LoadingText(h, props, slots)]);
}

Loading.props = {
  color: String,
  size: [Number, String],
  vertical: Boolean,
  textSize: [Number, String],
  type: {
    type: String,
    default: 'circular'
  }
};
/* harmony default export */ __webpack_exports__["a"] = (createComponent(Loading));

/***/ }),

/***/ "4637":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "466e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "48d4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("23c4");
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("f25d");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ea6e");
/* harmony import */ var _utils_functional__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("28bd");

// Utils

 // Types

var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* createNamespace */ "a"])('info'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function Info(h, props, slots, ctx) {
  var dot = props.dot,
      info = props.info;
  var showInfo = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* isDef */ "b"])(info) && info !== '';

  if (!dot && !showInfo) {
    return;
  }

  return h("div", _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
    "class": bem({
      dot: dot
    })
  }, Object(_utils_functional__WEBPACK_IMPORTED_MODULE_3__[/* inherit */ "b"])(ctx, true)]), [dot ? '' : props.info]);
}

Info.props = {
  dot: Boolean,
  info: [Number, String]
};
/* harmony default export */ __webpack_exports__["a"] = (createComponent(Info));

/***/ }),

/***/ "4991":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4b1f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getScroller; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getScrollTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return setScrollTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getRootScrollTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return setRootScrollTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getElementTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getVisibleHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getVisibleTop; });
function isWindow(val) {
  return val === window;
} // get nearest scroll element
// http://w3help.org/zh-cn/causes/SD9013
// http://stackoverflow.com/questions/17016740/onscroll-function-is-not-working-for-chrome


var overflowScrollReg = /scroll|auto/i;
function getScroller(el, root) {
  if (root === void 0) {
    root = window;
  }

  var node = el;

  while (node && node.tagName !== 'HTML' && node.nodeType === 1 && node !== root) {
    var _window$getComputedSt = window.getComputedStyle(node),
        overflowY = _window$getComputedSt.overflowY;

    if (overflowScrollReg.test(overflowY)) {
      if (node.tagName !== 'BODY') {
        return node;
      } // see: https://github.com/youzan/vant/issues/3823


      var _window$getComputedSt2 = window.getComputedStyle(node.parentNode),
          htmlOverflowY = _window$getComputedSt2.overflowY;

      if (overflowScrollReg.test(htmlOverflowY)) {
        return node;
      }
    }

    node = node.parentNode;
  }

  return root;
}
function getScrollTop(el) {
  return 'scrollTop' in el ? el.scrollTop : el.pageYOffset;
}
function setScrollTop(el, value) {
  if ('scrollTop' in el) {
    el.scrollTop = value;
  } else {
    el.scrollTo(el.scrollX, value);
  }
}
function getRootScrollTop() {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}
function setRootScrollTop(value) {
  setScrollTop(window, value);
  setScrollTop(document.body, value);
} // get distance from element top to page top or scroller top

function getElementTop(el, scroller) {
  if (isWindow(el)) {
    return 0;
  }

  var scrollTop = scroller ? getScrollTop(scroller) : getRootScrollTop();
  return el.getBoundingClientRect().top + scrollTop;
}
function getVisibleHeight(el) {
  if (isWindow(el)) {
    return el.innerHeight;
  }

  return el.getBoundingClientRect().height;
}
function getVisibleTop(el) {
  if (isWindow(el)) {
    return 0;
  }

  return el.getBoundingClientRect().top;
}

/***/ }),

/***/ "50e1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deepAssign; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ea6e");

var hasOwnProperty = Object.prototype.hasOwnProperty;

function assignKey(to, from, key) {
  var val = from[key];

  if (!Object(___WEBPACK_IMPORTED_MODULE_0__[/* isDef */ "b"])(val)) {
    return;
  }

  if (!hasOwnProperty.call(to, key) || !Object(___WEBPACK_IMPORTED_MODULE_0__[/* isObject */ "d"])(val)) {
    to[key] = val;
  } else {
    // eslint-disable-next-line no-use-before-define
    to[key] = deepAssign(Object(to[key]), from[key]);
  }
}

function deepAssign(to, from) {
  Object.keys(from).forEach(function (key) {
    assignKey(to, from, key);
  });
  return to;
}

/***/ }),

/***/ "549a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var qs = __webpack_require__("fed1"); // 应用授权作用域，snsapi_base （不弹出授权页面，直接跳转，只能获取用户openid），snsapi_userinfo （弹出授权页面，可通过openid拿到昵称、性别、所在地。并且，即使在未关注的情况下，只要用户授权，也能获取其信息）


var SCOPES = ['snsapi_base', 'snsapi_userinfo'];

var VueWechatAuthPlugin = /*#__PURE__*/function () {
  function VueWechatAuthPlugin() {
    _classCallCheck(this, VueWechatAuthPlugin);

    this.appid = null;
    this.redirect_uri = null;
    this.scope = SCOPES[1];
    this._code = null;
    this._redirect_uri = null;
  }

  _createClass(VueWechatAuthPlugin, [{
    key: "install",
    value: function install(Vue, options) {
      var wechatAuth = this;
      this.setAppId(options.appid);
      Vue.mixin({
        created: function created() {
          this.$wechatAuth = wechatAuth;
        }
      });
    }
  }, {
    key: "setAppId",
    value: function setAppId(appid) {
      this.appid = appid;
    }
  }, {
    key: "returnFromWechat",
    value: function returnFromWechat(redirect_uri) {
      var parsedUrl = qs.parse(redirect_uri.split('?')[1]);

      if (false) {} else {
        if (this.state === null) {
          throw new Error("You did't set state");
        }

        if (parsedUrl.state === this.state) {
          this.state = null;
          this._code = parsedUrl.code;
        } else {
          this.state = null;
          throw new Error("Wrong state: ".concat(parsedUrl.state));
        }
      }
    }
  }, {
    key: "redirect_uri",
    set: function set(redirect_uri) {
      this._redirect_uri = encodeURIComponent(redirect_uri);
    },
    get: function get() {
      return this._redirect_uri;
    }
  }, {
    key: "state",
    get: function get() {
      return localStorage.getItem('wechat_auth:state');
    },
    set: function set(state) {
      localStorage.setItem('wechat_auth:state', state);
    }
  }, {
    key: "authUrl",
    get: function get() {
      if (this.appid === null) {
        throw new Error('appid must not be null');
      }

      if (this.redirect_uri === null) {
        throw new Error('redirect uri must not be null');
      }

      this.state = VueWechatAuthPlugin.makeState();
      return "https://open.weixin.qq.com/connect/oauth2/authorize?appid=".concat(this.appid, "&redirect_uri=").concat(this.redirect_uri, "&response_type=code&scope=").concat(this.scope, "&state=").concat(this.state, "#wechat_redirect");
    }
  }, {
    key: "code",
    get: function get() {
      if (this._code === null) {
        throw new Error('Not get the code from wechat server!');
      } // console.log(this)
      // console.log('this._code: ' + this._code)


      var code = this._code;
      this._code = null; // console.log('code: ' + code)

      return code;
    }
  }], [{
    key: "makeState",
    value: function makeState() {
      return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
  }]);

  return VueWechatAuthPlugin;
}();

var vueWechatAuthPlugin = new VueWechatAuthPlugin(); // if (typeof window !== 'undefined' && window.Vue) {
//   window.Vue.use(VueWechatAuthPlugin)
// }

/* harmony default export */ __webpack_exports__["a"] = (vueWechatAuthPlugin);

/***/ }),

/***/ "5661":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _style_base_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2698");
/* harmony import */ var _style_base_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_base_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _overlay_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("a7d0");
/* harmony import */ var _overlay_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_overlay_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _info_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("72e1");
/* harmony import */ var _info_index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_info_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icon_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("2947");
/* harmony import */ var _icon_index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_icon_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _popup_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4637");
/* harmony import */ var _popup_index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_popup_index_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _loading_index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("a166");
/* harmony import */ var _loading_index_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_loading_index_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("2f50");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_6__);








/***/ }),

/***/ "56d7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var filter_namespaceObject = {};
__webpack_require__.r(filter_namespaceObject);
__webpack_require__.d(filter_namespaceObject, "formatDate", function() { return formatDate; });
__webpack_require__.d(filter_namespaceObject, "encodeUnicode", function() { return encodeUnicode; });

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__("8bbf");
var external_Vue_default = /*#__PURE__*/__webpack_require__.n(external_Vue_);

// EXTERNAL MODULE: ./node_modules/_normalize.css@7.0.0@normalize.css/normalize.css
var normalize = __webpack_require__("aa93");

// EXTERNAL MODULE: ./src/assets/css/index.scss
var css = __webpack_require__("9536");

// EXTERNAL MODULE: ./node_modules/_lib-flexible@0.3.2@lib-flexible/flexible.js
var flexible = __webpack_require__("44ce");

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2626cc8a-vue-loader-template"}!./node_modules/_vue-loader@15.9.0@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.0@vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=f2ef14aa&
var Appvue_type_template_id_f2ef14aa_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('keep-alive',[(_vm.$route.meta.keepAlive)?_c('router-view'):_vm._e()],1),_vm._v(" "),(!_vm.$route.meta.keepAlive)?_c('router-view'):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=f2ef14aa&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.0@vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
/* harmony default export */ var Appvue_type_script_lang_js_ = ({
  name: 'App'
});
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.0@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("623f");

// CONCATENATED MODULE: ./src/App.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_Appvue_type_script_lang_js_,
  Appvue_type_template_id_f2ef14aa_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var App = (component.exports);
// EXTERNAL MODULE: ./src/store/index.js + 5 modules
var store = __webpack_require__("4360");

// EXTERNAL MODULE: ./node_modules/_fastclick@1.0.6@fastclick/lib/fastclick.js
var fastclick = __webpack_require__("816c");
var fastclick_default = /*#__PURE__*/__webpack_require__.n(fastclick);

// EXTERNAL MODULE: ./src/router/index.js
var router = __webpack_require__("a18c");

// CONCATENATED MODULE: ./src/filters/filter.js
/**
 *格式化时间
 *yyyy-MM-dd hh:mm:ss
 */
function formatDate(time, fmt) {
  if (time === undefined || '') {
    return;
  }

  var date = new Date(time);

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }

  var o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };

  for (var k in o) {
    if (new RegExp("(".concat(k, ")")).test(fmt)) {
      var str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str));
    }
  }

  return fmt;
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length);
} // 转为unicode 编码


function encodeUnicode(str) {
  var res = [];

  for (var i = 0; i < str.length; i++) {
    res[i] = ('00' + str.charCodeAt(i).toString(16)).slice(-4);
  }

  return "\\u" + res.join("\\u");
}
// CONCATENATED MODULE: ./src/filters/index.js


Object.keys(filter_namespaceObject).forEach(function (k) {
  return external_Vue_default.a.filter(k, filter_namespaceObject[k]);
});
external_Vue_default.a.prototype.$formatDate = external_Vue_default.a.filter('formatDate');
// CONCATENATED MODULE: ./src/utils/directives.js

external_Vue_default.a.directive('focus', {
  inserted: function inserted(el) {
    // 获取焦点
    el.focus();
  }
});
external_Vue_default.a.directive('numberOnly', {
  inserted: function inserted(el) {
    // 获取焦点
    el.handler = function () {
      el.value = el.value.replace(/[^\d]/g, '');
    };

    el.addEventListener('input', el.handler);
  }
});
external_Vue_default.a.directive('resetPage', {
  inserted: function inserted(el) {
    // 监听键盘收起事件
    document.body.addEventListener('focusout', function () {
      if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        // 软键盘收起的事件处理
        setTimeout(function () {
          var scrollHeight = document.documentElement.scrollTop || document.body.scrollTop || 0;
          window.scrollTo(0, Math.max(scrollHeight - 1, 0));
        }, 100);
      }
    });
  }
});
// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/style/base.css
var base = __webpack_require__("2698");

// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/swipe-item/index.css
var swipe_item = __webpack_require__("e5b9");

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/swipe-item/style/index.js


// EXTERNAL MODULE: ./node_modules/_@babel_runtime@7.8.7@@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("caa2");

// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/utils/create/index.js + 6 modules
var create = __webpack_require__("f25d");

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/swipe-item/index.js



var _createNamespace = Object(create["a" /* createNamespace */])('swipe-item'),
    createComponent = _createNamespace[0],
    swipe_item_bem = _createNamespace[1];

/* harmony default export */ var es_swipe_item = (createComponent({
  data: function data() {
    return {
      offset: 0
    };
  },
  beforeCreate: function beforeCreate() {
    this.$parent.swipes.push(this);
  },
  destroyed: function destroyed() {
    this.$parent.swipes.splice(this.$parent.swipes.indexOf(this), 1);
  },
  render: function render() {
    var h = arguments[0];
    var _this$$parent = this.$parent,
        vertical = _this$$parent.vertical,
        computedWidth = _this$$parent.computedWidth,
        computedHeight = _this$$parent.computedHeight;
    var style = {
      width: computedWidth + 'px',
      height: vertical ? computedHeight + 'px' : '100%',
      transform: "translate" + (vertical ? 'Y' : 'X') + "(" + this.offset + "px)"
    };
    return h("div", {
      "class": swipe_item_bem(),
      "style": style,
      "on": Object(esm_extends["a" /* default */])({}, this.$listeners)
    }, [this.slots()]);
  }
}));
// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/swipe/index.css
var es_swipe = __webpack_require__("0e28");

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/swipe/style/index.js


// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/utils/dom/style.js
function isHidden(el) {
  var style = window.getComputedStyle(el);
  var hidden = style.display === 'none'; // offsetParent returns null in the following situations:
  // 1. The element or its parent element has the display property set to none.
  // 2. The element has the position property set to fixed

  var parentHidden = el.offsetParent === null && style.position !== 'fixed';
  return hidden || parentHidden;
}
// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/utils/dom/event.js
var dom_event = __webpack_require__("24b9");

// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/utils/dom/raf.js
var raf = __webpack_require__("e195");

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/utils/format/number.js
function range(num, min, max) {
  return Math.min(Math.max(num, min), max);
}
// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/mixins/touch.js
var touch = __webpack_require__("0b2a");

// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/mixins/bind-event.js
var bind_event = __webpack_require__("5f9d");

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/swipe/index.js
// Utils




 // Mixins




var swipe_createNamespace = Object(create["a" /* createNamespace */])('swipe'),
    swipe_createComponent = swipe_createNamespace[0],
    swipe_bem = swipe_createNamespace[1];

/* harmony default export */ var _vant_2_5_4_vant_es_swipe = (swipe_createComponent({
  mixins: [touch["a" /* TouchMixin */], Object(bind_event["a" /* BindEventMixin */])(function (bind, isBind) {
    bind(window, 'resize', this.resize, true);
    bind(window, 'visibilitychange', this.onVisibilityChange);

    if (isBind) {
      this.initialize();
    } else {
      this.clear();
    }
  })],
  props: {
    width: [Number, String],
    height: [Number, String],
    autoplay: [Number, String],
    vertical: Boolean,
    indicatorColor: String,
    loop: {
      type: Boolean,
      default: true
    },
    duration: {
      type: [Number, String],
      default: 500
    },
    touchable: {
      type: Boolean,
      default: true
    },
    initialSwipe: {
      type: [Number, String],
      default: 0
    },
    showIndicators: {
      type: Boolean,
      default: true
    },
    stopPropagation: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      computedWidth: 0,
      computedHeight: 0,
      offset: 0,
      active: 0,
      deltaX: 0,
      deltaY: 0,
      swipes: [],
      swiping: false
    };
  },
  watch: {
    swipes: function swipes() {
      this.initialize();
    },
    initialSwipe: function initialSwipe() {
      this.initialize();
    },
    autoplay: function autoplay(_autoplay) {
      if (_autoplay > 0) {
        this.autoPlay();
      } else {
        this.clear();
      }
    }
  },
  computed: {
    count: function count() {
      return this.swipes.length;
    },
    delta: function delta() {
      return this.vertical ? this.deltaY : this.deltaX;
    },
    size: function size() {
      return this[this.vertical ? 'computedHeight' : 'computedWidth'];
    },
    trackSize: function trackSize() {
      return this.count * this.size;
    },
    activeIndicator: function activeIndicator() {
      return (this.active + this.count) % this.count;
    },
    isCorrectDirection: function isCorrectDirection() {
      var expect = this.vertical ? 'vertical' : 'horizontal';
      return this.direction === expect;
    },
    trackStyle: function trackStyle() {
      var _ref;

      var mainAxis = this.vertical ? 'height' : 'width';
      var crossAxis = this.vertical ? 'width' : 'height';
      return _ref = {}, _ref[mainAxis] = this.trackSize + "px", _ref[crossAxis] = this[crossAxis] ? this[crossAxis] + "px" : '', _ref.transitionDuration = (this.swiping ? 0 : this.duration) + "ms", _ref.transform = "translate" + (this.vertical ? 'Y' : 'X') + "(" + this.offset + "px)", _ref;
    },
    indicatorStyle: function indicatorStyle() {
      return {
        backgroundColor: this.indicatorColor
      };
    },
    minOffset: function minOffset() {
      var rect = this.$el.getBoundingClientRect();
      return (this.vertical ? rect.height : rect.width) - this.size * this.count;
    }
  },
  mounted: function mounted() {
    this.bindTouchEvent(this.$refs.track);
  },
  methods: {
    // initialize swipe position
    initialize: function initialize(active) {
      if (active === void 0) {
        active = +this.initialSwipe;
      }

      clearTimeout(this.timer);

      if (this.$el && !isHidden(this.$el)) {
        var rect = this.$el.getBoundingClientRect();
        this.computedWidth = Math.round(+this.width || rect.width);
        this.computedHeight = Math.round(+this.height || rect.height);
      }

      this.swiping = true;
      this.active = active;
      this.offset = this.count > 1 ? -this.size * this.active : 0;
      this.swipes.forEach(function (swipe) {
        swipe.offset = 0;
      });
      this.autoPlay();
    },
    // @exposed-api
    resize: function resize() {
      this.initialize(this.activeIndicator);
    },
    onVisibilityChange: function onVisibilityChange() {
      if (document.hidden) {
        this.clear();
      } else {
        this.autoPlay();
      }
    },
    onTouchStart: function onTouchStart(event) {
      if (!this.touchable) return;
      this.clear();
      this.touchStart(event);
      this.correctPosition();
    },
    onTouchMove: function onTouchMove(event) {
      if (!this.touchable || !this.swiping) return;
      this.touchMove(event);

      if (this.isCorrectDirection) {
        Object(dom_event["c" /* preventDefault */])(event, this.stopPropagation);
        this.move({
          offset: this.delta
        });
      }
    },
    onTouchEnd: function onTouchEnd() {
      if (!this.touchable || !this.swiping) return;

      if (this.delta && this.isCorrectDirection) {
        var offset = this.vertical ? this.offsetY : this.offsetX;
        this.move({
          pace: offset > 0 ? this.delta > 0 ? -1 : 1 : 0,
          emitChange: true
        });
      }

      this.swiping = false;
      this.autoPlay();
    },
    getTargetActive: function getTargetActive(pace) {
      var active = this.active,
          count = this.count;

      if (pace) {
        if (this.loop) {
          return range(active + pace, -1, count);
        }

        return range(active + pace, 0, count - 1);
      }

      return active;
    },
    getTargetOffset: function getTargetOffset(targetActive, offset) {
      var currentPosition = targetActive * this.size;

      if (!this.loop) {
        currentPosition = Math.min(currentPosition, -this.minOffset);
      }

      var targetOffset = Math.round(offset - currentPosition);

      if (!this.loop) {
        targetOffset = range(targetOffset, this.minOffset, 0);
      }

      return targetOffset;
    },
    move: function move(_ref2) {
      var _ref2$pace = _ref2.pace,
          pace = _ref2$pace === void 0 ? 0 : _ref2$pace,
          _ref2$offset = _ref2.offset,
          offset = _ref2$offset === void 0 ? 0 : _ref2$offset,
          emitChange = _ref2.emitChange;
      var loop = this.loop,
          count = this.count,
          active = this.active,
          swipes = this.swipes,
          trackSize = this.trackSize,
          minOffset = this.minOffset;

      if (count <= 1) {
        return;
      }

      var targetActive = this.getTargetActive(pace);
      var targetOffset = this.getTargetOffset(targetActive, offset); // auto move first and last swipe in loop mode

      if (loop) {
        if (swipes[0]) {
          var outRightBound = targetOffset < minOffset;
          swipes[0].offset = outRightBound ? trackSize : 0;
        }

        if (swipes[count - 1]) {
          var outLeftBound = targetOffset > 0;
          swipes[count - 1].offset = outLeftBound ? -trackSize : 0;
        }
      }

      this.active = targetActive;
      this.offset = targetOffset;

      if (emitChange && targetActive !== active) {
        this.$emit('change', this.activeIndicator);
      }
    },
    // @exposed-api
    prev: function prev() {
      var _this = this;

      this.correctPosition();
      this.resetTouchStatus();
      Object(raf["b" /* doubleRaf */])(function () {
        _this.swiping = false;

        _this.move({
          pace: -1,
          emitChange: true
        });
      });
    },
    // @exposed-api
    next: function next() {
      var _this2 = this;

      this.correctPosition();
      this.resetTouchStatus();
      Object(raf["b" /* doubleRaf */])(function () {
        _this2.swiping = false;

        _this2.move({
          pace: 1,
          emitChange: true
        });
      });
    },
    // @exposed-api
    swipeTo: function swipeTo(index, options) {
      var _this3 = this;

      if (options === void 0) {
        options = {};
      }

      this.correctPosition();
      this.resetTouchStatus();
      Object(raf["b" /* doubleRaf */])(function () {
        var targetIndex;

        if (_this3.loop && index === _this3.count) {
          targetIndex = _this3.active === 0 ? 0 : index;
        } else {
          targetIndex = index % _this3.count;
        }

        if (options.immediate) {
          Object(raf["b" /* doubleRaf */])(function () {
            _this3.swiping = false;
          });
        } else {
          _this3.swiping = false;
        }

        _this3.move({
          pace: targetIndex - _this3.active,
          emitChange: true
        });
      });
    },
    correctPosition: function correctPosition() {
      this.swiping = true;

      if (this.active <= -1) {
        this.move({
          pace: this.count
        });
      }

      if (this.active >= this.count) {
        this.move({
          pace: -this.count
        });
      }
    },
    clear: function clear() {
      clearTimeout(this.timer);
    },
    autoPlay: function autoPlay() {
      var _this4 = this;

      var autoplay = this.autoplay;

      if (autoplay > 0 && this.count > 1) {
        this.clear();
        this.timer = setTimeout(function () {
          _this4.next();

          _this4.autoPlay();
        }, autoplay);
      }
    },
    genIndicator: function genIndicator() {
      var _this5 = this;

      var h = this.$createElement;
      var count = this.count,
          activeIndicator = this.activeIndicator;
      var slot = this.slots('indicator');

      if (slot) {
        return slot;
      }

      if (this.showIndicators && count > 1) {
        return h("div", {
          "class": swipe_bem('indicators', {
            vertical: this.vertical
          })
        }, [Array.apply(void 0, Array(count)).map(function (empty, index) {
          return h("i", {
            "class": swipe_bem('indicator', {
              active: index === activeIndicator
            }),
            "style": index === activeIndicator ? _this5.indicatorStyle : null
          });
        })]);
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": swipe_bem()
    }, [h("div", {
      "ref": "track",
      "style": this.trackStyle,
      "class": swipe_bem('track')
    }, [this.slots()]), this.genIndicator()]);
  }
}));
// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/loading/index.css
var es_loading = __webpack_require__("a166");

// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/picker/index.css
var picker = __webpack_require__("e727");

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/picker/style/index.js



// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/utils/constant.js
var constant = __webpack_require__("3360");

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/picker/shared.js
var pickerProps = {
  title: String,
  loading: Boolean,
  showToolbar: Boolean,
  cancelButtonText: String,
  confirmButtonText: String,
  allowHtml: {
    type: Boolean,
    default: true
  },
  visibleItemCount: {
    type: [Number, String],
    default: 5
  },
  itemHeight: {
    type: [Number, String],
    default: 44
  },
  swipeDuration: {
    type: [Number, String],
    default: 1000
  }
};
// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/loading/index.js
var _vant_2_5_4_vant_es_loading = __webpack_require__("4614");

// EXTERNAL MODULE: ./node_modules/_@vue_babel-helper-vue-jsx-merge-props@1.0.0@@vue/babel-helper-vue-jsx-merge-props/dist/helper.js
var helper = __webpack_require__("23c4");
var helper_default = /*#__PURE__*/__webpack_require__.n(helper);

// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/utils/deep-assign.js
var deep_assign = __webpack_require__("50e1");

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/utils/deep-clone.js

function deepClone(obj) {
  if (Array.isArray(obj)) {
    return obj.map(function (item) {
      return deepClone(item);
    });
  }

  if (typeof obj === 'object') {
    return Object(deep_assign["a" /* deepAssign */])({}, obj);
  }

  return obj;
}
// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/utils/index.js
var utils = __webpack_require__("ea6e");

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/picker/PickerColumn.js






var DEFAULT_DURATION = 200; // 惯性滑动思路:
// 在手指离开屏幕时，如果和上一次 move 时的间隔小于 `MOMENTUM_LIMIT_TIME` 且 move
// 距离大于 `MOMENTUM_LIMIT_DISTANCE` 时，执行惯性滑动

var MOMENTUM_LIMIT_TIME = 300;
var MOMENTUM_LIMIT_DISTANCE = 15;

var PickerColumn_createNamespace = Object(create["a" /* createNamespace */])('picker-column'),
    PickerColumn_createComponent = PickerColumn_createNamespace[0],
    PickerColumn_bem = PickerColumn_createNamespace[1];

function getElementTranslateY(element) {
  var style = window.getComputedStyle(element);
  var transform = style.transform || style.webkitTransform;
  var translateY = transform.slice(7, transform.length - 1).split(', ')[5];
  return Number(translateY);
}

function isOptionDisabled(option) {
  return Object(utils["d" /* isObject */])(option) && option.disabled;
}

/* harmony default export */ var PickerColumn = (PickerColumn_createComponent({
  mixins: [touch["a" /* TouchMixin */]],
  props: {
    valueKey: String,
    allowHtml: Boolean,
    className: String,
    itemHeight: [Number, String],
    defaultIndex: Number,
    swipeDuration: [Number, String],
    visibleItemCount: [Number, String],
    initialOptions: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      offset: 0,
      duration: 0,
      options: deepClone(this.initialOptions),
      currentIndex: this.defaultIndex
    };
  },
  created: function created() {
    if (this.$parent.children) {
      this.$parent.children.push(this);
    }

    this.setIndex(this.currentIndex);
  },
  mounted: function mounted() {
    this.bindTouchEvent(this.$el);
  },
  destroyed: function destroyed() {
    var children = this.$parent.children;

    if (children) {
      children.splice(children.indexOf(this), 1);
    }
  },
  watch: {
    initialOptions: 'setOptions',
    defaultIndex: function defaultIndex(val) {
      this.setIndex(val);
    }
  },
  computed: {
    count: function count() {
      return this.options.length;
    },
    baseOffset: function baseOffset() {
      return this.itemHeight * (this.visibleItemCount - 1) / 2;
    }
  },
  methods: {
    setOptions: function setOptions(options) {
      if (JSON.stringify(options) !== JSON.stringify(this.options)) {
        this.options = deepClone(options);
        this.setIndex(this.defaultIndex);
      }
    },
    onTouchStart: function onTouchStart(event) {
      this.touchStart(event);

      if (this.moving) {
        var translateY = getElementTranslateY(this.$refs.wrapper);
        this.offset = Math.min(0, translateY - this.baseOffset);
        this.startOffset = this.offset;
      } else {
        this.startOffset = this.offset;
      }

      this.duration = 0;
      this.transitionEndTrigger = null;
      this.touchStartTime = Date.now();
      this.momentumOffset = this.startOffset;
    },
    onTouchMove: function onTouchMove(event) {
      this.touchMove(event);

      if (this.direction === 'vertical') {
        this.moving = true;
        Object(dom_event["c" /* preventDefault */])(event, true);
      }

      this.offset = range(this.startOffset + this.deltaY, -(this.count * this.itemHeight), this.itemHeight);
      var now = Date.now();

      if (now - this.touchStartTime > MOMENTUM_LIMIT_TIME) {
        this.touchStartTime = now;
        this.momentumOffset = this.offset;
      }
    },
    onTouchEnd: function onTouchEnd() {
      var _this = this;

      var distance = this.offset - this.momentumOffset;
      var duration = Date.now() - this.touchStartTime;
      var allowMomentum = duration < MOMENTUM_LIMIT_TIME && Math.abs(distance) > MOMENTUM_LIMIT_DISTANCE;

      if (allowMomentum) {
        this.momentum(distance, duration);
        return;
      }

      var index = this.getIndexByOffset(this.offset);
      this.duration = DEFAULT_DURATION;
      this.setIndex(index, true); // compatible with desktop scenario
      // use setTimeout to skip the click event triggered after touchstart

      setTimeout(function () {
        _this.moving = false;
      }, 0);
    },
    onTransitionEnd: function onTransitionEnd() {
      this.stopMomentum();
    },
    onClickItem: function onClickItem(index) {
      if (this.moving) {
        return;
      }

      this.duration = DEFAULT_DURATION;
      this.setIndex(index, true);
    },
    adjustIndex: function adjustIndex(index) {
      index = range(index, 0, this.count);

      for (var i = index; i < this.count; i++) {
        if (!isOptionDisabled(this.options[i])) return i;
      }

      for (var _i = index - 1; _i >= 0; _i--) {
        if (!isOptionDisabled(this.options[_i])) return _i;
      }
    },
    getOptionText: function getOptionText(option) {
      if (Object(utils["d" /* isObject */])(option) && this.valueKey in option) {
        return option[this.valueKey];
      }

      return option;
    },
    setIndex: function setIndex(index, emitChange) {
      var _this2 = this;

      index = this.adjustIndex(index) || 0;
      var offset = -index * this.itemHeight;

      var trigger = function trigger() {
        if (index !== _this2.currentIndex) {
          _this2.currentIndex = index;

          if (emitChange) {
            _this2.$emit('change', index);
          }
        }
      }; // trigger the change event after transitionend when moving


      if (this.moving && offset !== this.offset) {
        this.transitionEndTrigger = trigger;
      } else {
        trigger();
      }

      this.offset = offset;
    },
    setValue: function setValue(value) {
      var options = this.options;

      for (var i = 0; i < options.length; i++) {
        if (this.getOptionText(options[i]) === value) {
          return this.setIndex(i);
        }
      }
    },
    getValue: function getValue() {
      return this.options[this.currentIndex];
    },
    getIndexByOffset: function getIndexByOffset(offset) {
      return range(Math.round(-offset / this.itemHeight), 0, this.count - 1);
    },
    momentum: function momentum(distance, duration) {
      var speed = Math.abs(distance / duration);
      distance = this.offset + speed / 0.002 * (distance < 0 ? -1 : 1);
      var index = this.getIndexByOffset(distance);
      this.duration = +this.swipeDuration;
      this.setIndex(index, true);
    },
    stopMomentum: function stopMomentum() {
      this.moving = false;
      this.duration = 0;

      if (this.transitionEndTrigger) {
        this.transitionEndTrigger();
        this.transitionEndTrigger = null;
      }
    },
    genOptions: function genOptions() {
      var _this3 = this;

      var h = this.$createElement;
      var optionStyle = {
        height: this.itemHeight + "px"
      };
      return this.options.map(function (option, index) {
        var text = _this3.getOptionText(option);

        var disabled = isOptionDisabled(option);
        var data = {
          style: optionStyle,
          attrs: {
            role: 'button',
            tabindex: disabled ? -1 : 0
          },
          class: ['van-ellipsis', PickerColumn_bem('item', {
            disabled: disabled,
            selected: index === _this3.currentIndex
          })],
          on: {
            click: function click() {
              _this3.onClickItem(index);
            }
          }
        };

        if (_this3.allowHtml) {
          data.domProps = {
            innerHTML: text
          };
        }

        return h("li", helper_default()([{}, data]), [_this3.allowHtml ? '' : text]);
      });
    }
  },
  render: function render() {
    var h = arguments[0];
    var wrapperStyle = {
      transform: "translate3d(0, " + (this.offset + this.baseOffset) + "px, 0)",
      transitionDuration: this.duration + "ms",
      transitionProperty: this.duration ? 'all' : 'none',
      lineHeight: this.itemHeight + "px"
    };
    return h("div", {
      "class": [PickerColumn_bem(), this.className]
    }, [h("ul", {
      "ref": "wrapper",
      "style": wrapperStyle,
      "class": PickerColumn_bem('wrapper'),
      "on": {
        "transitionend": this.onTransitionEnd
      }
    }, [this.genOptions()])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/picker/index.js

// Utils



 // Components




var picker_createNamespace = Object(create["a" /* createNamespace */])('picker'),
    picker_createComponent = picker_createNamespace[0],
    picker_bem = picker_createNamespace[1],
    t = picker_createNamespace[2];

/* harmony default export */ var es_picker = (picker_createComponent({
  props: Object(esm_extends["a" /* default */])({}, pickerProps, {
    defaultIndex: {
      type: [Number, String],
      default: 0
    },
    columns: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    toolbarPosition: {
      type: String,
      default: 'top'
    },
    valueKey: {
      type: String,
      default: 'text'
    }
  }),
  data: function data() {
    return {
      children: [],
      formattedColumns: []
    };
  },
  computed: {
    dataType: function dataType() {
      var columns = this.columns;
      var firstColumn = columns[0] || {};

      if (firstColumn.children) {
        return 'cascade';
      }

      if (firstColumn.values) {
        return 'object';
      }

      return 'text';
    }
  },
  watch: {
    columns: {
      handler: 'format',
      immediate: true
    }
  },
  methods: {
    format: function format() {
      var columns = this.columns,
          dataType = this.dataType;

      if (dataType === 'text') {
        this.formattedColumns = [{
          values: columns
        }];
      } else if (dataType === 'cascade') {
        this.formatCascade();
      } else {
        this.formattedColumns = columns;
      }
    },
    formatCascade: function formatCascade() {
      var _this = this;

      var formatted = [];
      var cursor = {
        children: this.columns
      };

      while (cursor && cursor.children) {
        var defaultIndex = cursor.defaultIndex || +this.defaultIndex;
        formatted.push({
          values: cursor.children.map(function (item) {
            return item[_this.valueKey];
          }),
          className: cursor.className,
          defaultIndex: defaultIndex
        });
        cursor = cursor.children[defaultIndex];
      }

      this.formattedColumns = formatted;
    },
    emit: function emit(event) {
      if (this.dataType === 'text') {
        this.$emit(event, this.getColumnValue(0), this.getColumnIndex(0));
      } else {
        this.$emit(event, this.getValues(), this.getIndexes());
      }
    },
    onCascadeChange: function onCascadeChange(columnIndex) {
      var _this2 = this;

      var cursor = {
        children: this.columns
      };
      var indexes = this.getIndexes();

      for (var i = 0; i <= columnIndex; i++) {
        cursor = cursor.children[indexes[i]];
      }

      while (cursor.children) {
        columnIndex++;
        this.setColumnValues(columnIndex, cursor.children.map(function (item) {
          return item[_this2.valueKey];
        }));
        cursor = cursor.children[cursor.defaultIndex || 0];
      }
    },
    onChange: function onChange(columnIndex) {
      if (this.dataType === 'cascade') {
        this.onCascadeChange(columnIndex);
      }

      if (this.dataType === 'text') {
        this.$emit('change', this, this.getColumnValue(0), this.getColumnIndex(0));
      } else {
        this.$emit('change', this, this.getValues(), columnIndex);
      }
    },
    // get column instance by index
    getColumn: function getColumn(index) {
      return this.children[index];
    },
    // @exposed-api
    // get column value by index
    getColumnValue: function getColumnValue(index) {
      var column = this.getColumn(index);
      return column && column.getValue();
    },
    // @exposed-api
    // set column value by index
    setColumnValue: function setColumnValue(index, value) {
      var column = this.getColumn(index);
      column && column.setValue(value);
    },
    // @exposed-api
    // get column option index by column index
    getColumnIndex: function getColumnIndex(columnIndex) {
      return (this.getColumn(columnIndex) || {}).currentIndex;
    },
    // @exposed-api
    // set column option index by column index
    setColumnIndex: function setColumnIndex(columnIndex, optionIndex) {
      var column = this.getColumn(columnIndex);
      column && column.setIndex(optionIndex);
    },
    // @exposed-api
    // get options of column by index
    getColumnValues: function getColumnValues(index) {
      return (this.children[index] || {}).options;
    },
    // @exposed-api
    // set options of column by index
    setColumnValues: function setColumnValues(index, options) {
      var column = this.children[index];

      if (column) {
        column.setOptions(options);
      }
    },
    // @exposed-api
    // get values of all columns
    getValues: function getValues() {
      return this.children.map(function (child) {
        return child.getValue();
      });
    },
    // @exposed-api
    // set values of all columns
    setValues: function setValues(values) {
      var _this3 = this;

      values.forEach(function (value, index) {
        _this3.setColumnValue(index, value);
      });
    },
    // @exposed-api
    // get indexes of all columns
    getIndexes: function getIndexes() {
      return this.children.map(function (child) {
        return child.currentIndex;
      });
    },
    // @exposed-api
    // set indexes of all columns
    setIndexes: function setIndexes(indexes) {
      var _this4 = this;

      indexes.forEach(function (optionIndex, columnIndex) {
        _this4.setColumnIndex(columnIndex, optionIndex);
      });
    },
    // @exposed-api
    confirm: function confirm() {
      this.children.forEach(function (child) {
        return child.stopMomentum();
      });
      this.emit('confirm');
    },
    cancel: function cancel() {
      this.emit('cancel');
    },
    genTitle: function genTitle() {
      var h = this.$createElement;
      var titleSlot = this.slots('title');

      if (titleSlot) {
        return titleSlot;
      }

      if (this.title) {
        return h("div", {
          "class": ['van-ellipsis', picker_bem('title')]
        }, [this.title]);
      }
    },
    genToolbar: function genToolbar() {
      var h = this.$createElement;

      if (this.showToolbar) {
        return h("div", {
          "class": [constant["f" /* BORDER_TOP_BOTTOM */], picker_bem('toolbar')]
        }, [this.slots() || [h("button", {
          "attrs": {
            "type": "button"
          },
          "class": picker_bem('cancel'),
          "on": {
            "click": this.cancel
          }
        }, [this.cancelButtonText || t('cancel')]), this.genTitle(), h("button", {
          "attrs": {
            "type": "button"
          },
          "class": picker_bem('confirm'),
          "on": {
            "click": this.confirm
          }
        }, [this.confirmButtonText || t('confirm')])]]);
      }
    },
    genColumns: function genColumns() {
      var _this5 = this;

      var h = this.$createElement;
      return this.formattedColumns.map(function (item, columnIndex) {
        return h(PickerColumn, {
          "attrs": {
            "valueKey": _this5.valueKey,
            "allowHtml": _this5.allowHtml,
            "className": item.className,
            "itemHeight": _this5.itemHeight,
            "defaultIndex": item.defaultIndex || +_this5.defaultIndex,
            "swipeDuration": _this5.swipeDuration,
            "visibleItemCount": _this5.visibleItemCount,
            "initialOptions": item.values
          },
          "on": {
            "change": function change() {
              _this5.onChange(columnIndex);
            }
          }
        });
      });
    }
  },
  render: function render(h) {
    var itemHeight = +this.itemHeight;
    var wrapHeight = itemHeight * this.visibleItemCount;
    var frameStyle = {
      height: itemHeight + "px"
    };
    var columnsStyle = {
      height: wrapHeight + "px"
    };
    var maskStyle = {
      backgroundSize: "100% " + (wrapHeight - itemHeight) / 2 + "px"
    };
    return h("div", {
      "class": picker_bem()
    }, [this.toolbarPosition === 'top' ? this.genToolbar() : h(), this.loading ? h(_vant_2_5_4_vant_es_loading["a" /* default */], {
      "class": picker_bem('loading')
    }) : h(), this.slots('columns-top'), h("div", {
      "class": picker_bem('columns'),
      "style": columnsStyle,
      "on": {
        "touchmove": dom_event["c" /* preventDefault */]
      }
    }, [this.genColumns(), h("div", {
      "class": picker_bem('mask'),
      "style": maskStyle
    }), h("div", {
      "class": [constant["g" /* BORDER_UNSET_TOP_BOTTOM */], picker_bem('frame')],
      "style": frameStyle
    })]), this.slots('columns-bottom'), this.toolbarPosition === 'bottom' ? this.genToolbar() : h()]);
  }
}));
// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/overlay/index.css
var overlay = __webpack_require__("a7d0");

// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/info/index.css
var info = __webpack_require__("72e1");

// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/icon/index.css
var es_icon = __webpack_require__("2947");

// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/image/index.css
var es_image = __webpack_require__("0869");

// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/popup/index.css
var popup = __webpack_require__("4637");

// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/image-preview/index.css
var image_preview = __webpack_require__("4991");

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/image-preview/style/index.js










// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/mixins/popup/index.js + 4 modules
var mixins_popup = __webpack_require__("2cf7");

// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/utils/format/unit.js
var unit = __webpack_require__("083c");

// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/icon/index.js
var _vant_2_5_4_vant_es_icon = __webpack_require__("a9f0");

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/image/index.js





var image_createNamespace = Object(create["a" /* createNamespace */])('image'),
    image_createComponent = image_createNamespace[0],
    image_bem = image_createNamespace[1];

/* harmony default export */ var _vant_2_5_4_vant_es_image = (image_createComponent({
  props: {
    src: String,
    fit: String,
    alt: String,
    round: Boolean,
    width: [Number, String],
    height: [Number, String],
    radius: [Number, String],
    lazyLoad: Boolean,
    showError: {
      type: Boolean,
      default: true
    },
    showLoading: {
      type: Boolean,
      default: true
    },
    errorIcon: {
      type: String,
      default: 'warning-o'
    },
    loadingIcon: {
      type: String,
      default: 'photo-o'
    }
  },
  data: function data() {
    return {
      loading: true,
      error: false
    };
  },
  watch: {
    src: function src() {
      this.loading = true;
      this.error = false;
    }
  },
  computed: {
    style: function style() {
      var style = {};

      if (Object(utils["b" /* isDef */])(this.width)) {
        style.width = Object(unit["a" /* addUnit */])(this.width);
      }

      if (Object(utils["b" /* isDef */])(this.height)) {
        style.height = Object(unit["a" /* addUnit */])(this.height);
      }

      if (Object(utils["b" /* isDef */])(this.radius)) {
        style.overflow = 'hidden';
        style.borderRadius = Object(unit["a" /* addUnit */])(this.radius);
      }

      return style;
    }
  },
  created: function created() {
    var $Lazyload = this.$Lazyload;

    if ($Lazyload) {
      $Lazyload.$on('loaded', this.onLazyLoaded);
      $Lazyload.$on('error', this.onLazyLoadError);
    }
  },
  beforeDestroy: function beforeDestroy() {
    var $Lazyload = this.$Lazyload;

    if ($Lazyload) {
      $Lazyload.$off('loaded', this.onLazyLoaded);
      $Lazyload.$off('error', this.onLazyLoadError);
    }
  },
  methods: {
    onLoad: function onLoad(event) {
      this.loading = false;
      this.$emit('load', event);
    },
    onLazyLoaded: function onLazyLoaded(_ref) {
      var el = _ref.el;

      if (el === this.$refs.image && this.loading) {
        this.onLoad();
      }
    },
    onLazyLoadError: function onLazyLoadError(_ref2) {
      var el = _ref2.el;

      if (el === this.$refs.image && !this.error) {
        this.onError();
      }
    },
    onError: function onError(event) {
      this.error = true;
      this.loading = false;
      this.$emit('error', event);
    },
    onClick: function onClick(event) {
      this.$emit('click', event);
    },
    genPlaceholder: function genPlaceholder() {
      var h = this.$createElement;

      if (this.loading && this.showLoading) {
        return h("div", {
          "class": image_bem('loading')
        }, [this.slots('loading') || h(_vant_2_5_4_vant_es_icon["a" /* default */], {
          "attrs": {
            "name": this.loadingIcon
          },
          "class": image_bem('loading-icon')
        })]);
      }

      if (this.error && this.showError) {
        return h("div", {
          "class": image_bem('error')
        }, [this.slots('error') || h(_vant_2_5_4_vant_es_icon["a" /* default */], {
          "attrs": {
            "name": this.errorIcon
          },
          "class": image_bem('error-icon')
        })]);
      }
    },
    genImage: function genImage() {
      var h = this.$createElement;
      var imgData = {
        class: image_bem('img'),
        attrs: {
          alt: this.alt
        },
        style: {
          objectFit: this.fit
        }
      };

      if (this.error) {
        return;
      }

      if (this.lazyLoad) {
        return h("img", helper_default()([{
          "ref": "image",
          "directives": [{
            name: "lazy",
            value: this.src
          }]
        }, imgData]));
      }

      return h("img", helper_default()([{
        "attrs": {
          "src": this.src
        },
        "on": {
          "load": this.onLoad,
          "error": this.onError
        }
      }, imgData]));
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": image_bem({
        round: this.round
      }),
      "style": this.style,
      "on": {
        "click": this.onClick
      }
    }, [this.genImage(), this.genPlaceholder()]);
  }
}));
// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/image-preview/ImagePreview.js
// Utils


 // Mixins


 // Components







var ImagePreview_createNamespace = Object(create["a" /* createNamespace */])('image-preview'),
    ImagePreview_createComponent = ImagePreview_createNamespace[0],
    ImagePreview_bem = ImagePreview_createNamespace[1];

function getDistance(touches) {
  return Math.sqrt(Math.pow(touches[0].clientX - touches[1].clientX, 2) + Math.pow(touches[0].clientY - touches[1].clientY, 2));
}

/* harmony default export */ var image_preview_ImagePreview = (ImagePreview_createComponent({
  mixins: [Object(mixins_popup["a" /* PopupMixin */])({
    skipToggleEvent: true
  }), touch["a" /* TouchMixin */]],
  props: {
    className: null,
    lazyLoad: Boolean,
    asyncClose: Boolean,
    showIndicators: Boolean,
    images: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    loop: {
      type: Boolean,
      default: true
    },
    swipeDuration: {
      type: [Number, String],
      default: 500
    },
    overlay: {
      type: Boolean,
      default: true
    },
    showIndex: {
      type: Boolean,
      default: true
    },
    startPosition: {
      type: [Number, String],
      default: 0
    },
    minZoom: {
      type: [Number, String],
      default: 1 / 3
    },
    maxZoom: {
      type: [Number, String],
      default: 3
    },
    overlayClass: {
      type: String,
      default: ImagePreview_bem('overlay')
    },
    closeable: Boolean,
    closeIcon: {
      type: String,
      default: 'clear'
    },
    closeIconPosition: {
      type: String,
      default: 'top-right'
    }
  },
  data: function data() {
    return {
      scale: 1,
      moveX: 0,
      moveY: 0,
      active: 0,
      moving: false,
      zooming: false,
      doubleClickTimer: null
    };
  },
  computed: {
    imageStyle: function imageStyle() {
      var scale = this.scale;
      var style = {
        transitionDuration: this.zooming || this.moving ? '0s' : '.3s'
      };

      if (scale !== 1) {
        style.transform = "scale3d(" + scale + ", " + scale + ", 1) translate(" + this.moveX / scale + "px, " + this.moveY / scale + "px)";
      }

      return style;
    }
  },
  watch: {
    value: function value(val) {
      var _this = this;

      if (val) {
        this.setActive(+this.startPosition);
        this.$nextTick(function () {
          _this.$refs.swipe.swipeTo(+_this.startPosition, {
            immediate: true
          });
        });
      } else {
        this.$emit('close', {
          index: this.active,
          url: this.images[this.active]
        });
      }
    },
    startPosition: function startPosition(val) {
      this.setActive(val);
    },
    shouldRender: {
      handler: function handler(val) {
        var _this2 = this;

        if (val) {
          this.$nextTick(function () {
            var swipe = _this2.$refs.swipe.$el;
            Object(dom_event["b" /* on */])(swipe, 'touchstart', _this2.onWrapperTouchStart);
            Object(dom_event["b" /* on */])(swipe, 'touchmove', dom_event["c" /* preventDefault */]);
            Object(dom_event["b" /* on */])(swipe, 'touchend', _this2.onWrapperTouchEnd);
            Object(dom_event["b" /* on */])(swipe, 'touchcancel', _this2.onWrapperTouchEnd);
          });
        }
      },
      immediate: true
    }
  },
  methods: {
    emitClose: function emitClose() {
      if (!this.asyncClose) {
        this.$emit('input', false);
      }
    },
    onWrapperTouchStart: function onWrapperTouchStart() {
      this.touchStartTime = new Date();
    },
    onWrapperTouchEnd: function onWrapperTouchEnd(event) {
      var _this3 = this;

      Object(dom_event["c" /* preventDefault */])(event);
      var deltaTime = new Date() - this.touchStartTime;

      var _ref = this.$refs.swipe || {},
          _ref$offsetX = _ref.offsetX,
          offsetX = _ref$offsetX === void 0 ? 0 : _ref$offsetX,
          _ref$offsetY = _ref.offsetY,
          offsetY = _ref$offsetY === void 0 ? 0 : _ref$offsetY; // prevent long tap to close component


      if (deltaTime < 300 && offsetX < 10 && offsetY < 10) {
        if (!this.doubleClickTimer) {
          this.doubleClickTimer = setTimeout(function () {
            _this3.emitClose();

            _this3.doubleClickTimer = null;
          }, 300);
        } else {
          clearTimeout(this.doubleClickTimer);
          this.doubleClickTimer = null;
          this.toggleScale();
        }
      }
    },
    startMove: function startMove(event) {
      var image = event.currentTarget;
      var rect = image.getBoundingClientRect();
      var winWidth = window.innerWidth;
      var winHeight = window.innerHeight;
      this.touchStart(event);
      this.moving = true;
      this.startMoveX = this.moveX;
      this.startMoveY = this.moveY;
      this.maxMoveX = Math.max(0, (rect.width - winWidth) / 2);
      this.maxMoveY = Math.max(0, (rect.height - winHeight) / 2);
    },
    startZoom: function startZoom(event) {
      this.moving = false;
      this.zooming = true;
      this.startScale = this.scale;
      this.startDistance = getDistance(event.touches);
    },
    onImageTouchStart: function onImageTouchStart(event) {
      var touches = event.touches;

      var _ref2 = this.$refs.swipe || {},
          _ref2$offsetX = _ref2.offsetX,
          offsetX = _ref2$offsetX === void 0 ? 0 : _ref2$offsetX;

      if (touches.length === 1 && this.scale !== 1) {
        this.startMove(event);
      }
      /* istanbul ignore else */
      else if (touches.length === 2 && !offsetX) {
          this.startZoom(event);
        }
    },
    onImageTouchMove: function onImageTouchMove(event) {
      var touches = event.touches;

      if (this.moving || this.zooming) {
        Object(dom_event["c" /* preventDefault */])(event, true);
      }

      if (this.moving) {
        this.touchMove(event);
        var moveX = this.deltaX + this.startMoveX;
        var moveY = this.deltaY + this.startMoveY;
        this.moveX = range(moveX, -this.maxMoveX, this.maxMoveX);
        this.moveY = range(moveY, -this.maxMoveY, this.maxMoveY);
      }

      if (this.zooming && touches.length === 2) {
        var distance = getDistance(touches);
        var scale = this.startScale * distance / this.startDistance;
        this.setScale(scale);
      }
    },
    onImageTouchEnd: function onImageTouchEnd(event) {
      /* istanbul ignore else */
      if (this.moving || this.zooming) {
        var stopPropagation = true;

        if (this.moving && this.startMoveX === this.moveX && this.startMoveY === this.moveY) {
          stopPropagation = false;
        }

        if (!event.touches.length) {
          this.moving = false;
          this.zooming = false;
          this.startMoveX = 0;
          this.startMoveY = 0;
          this.startScale = 1;

          if (this.scale < 1) {
            this.resetScale();
          }
        }

        if (stopPropagation) {
          Object(dom_event["c" /* preventDefault */])(event, true);
        }
      }
    },
    setActive: function setActive(active) {
      this.resetScale();

      if (active !== this.active) {
        this.active = active;
        this.$emit('change', active);
      }
    },
    setScale: function setScale(scale) {
      var value = range(scale, +this.minZoom, +this.maxZoom);
      this.scale = value;
      this.$emit('scale', {
        index: this.active,
        scale: value
      });
    },
    resetScale: function resetScale() {
      this.setScale(1);
      this.moveX = 0;
      this.moveY = 0;
    },
    toggleScale: function toggleScale() {
      var scale = this.scale > 1 ? 1 : 2;
      this.setScale(scale);
      this.moveX = 0;
      this.moveY = 0;
    },
    genIndex: function genIndex() {
      var h = this.$createElement;

      if (this.showIndex) {
        return h("div", {
          "class": ImagePreview_bem('index')
        }, [this.slots('index') || this.active + 1 + " / " + this.images.length]);
      }
    },
    genCover: function genCover() {
      var h = this.$createElement;
      var cover = this.slots('cover');

      if (cover) {
        return h("div", {
          "class": ImagePreview_bem('cover')
        }, [cover]);
      }
    },
    genImages: function genImages() {
      var _this4 = this;

      var h = this.$createElement;
      var imageSlots = {
        loading: function loading() {
          return h(_vant_2_5_4_vant_es_loading["a" /* default */], {
            "attrs": {
              "type": "spinner"
            }
          });
        }
      };
      return h(_vant_2_5_4_vant_es_swipe, {
        "ref": "swipe",
        "attrs": {
          "loop": this.loop,
          "indicatorColor": "white",
          "duration": this.swipeDuration,
          "initialSwipe": this.startPosition,
          "showIndicators": this.showIndicators
        },
        "class": ImagePreview_bem('swipe'),
        "on": {
          "change": this.setActive
        }
      }, [this.images.map(function (image, index) {
        return h(es_swipe_item, [h(_vant_2_5_4_vant_es_image, {
          "attrs": {
            "src": image,
            "fit": "contain",
            "lazyLoad": _this4.lazyLoad
          },
          "class": ImagePreview_bem('image'),
          "scopedSlots": imageSlots,
          "style": index === _this4.active ? _this4.imageStyle : null,
          "nativeOn": {
            "touchstart": _this4.onImageTouchStart,
            "touchmove": _this4.onImageTouchMove,
            "touchend": _this4.onImageTouchEnd,
            "touchcancel": _this4.onImageTouchEnd
          }
        })]);
      })]);
    },
    genClose: function genClose() {
      var h = this.$createElement;

      if (this.closeable) {
        return h(_vant_2_5_4_vant_es_icon["a" /* default */], {
          "attrs": {
            "role": "button",
            "name": this.closeIcon
          },
          "class": ImagePreview_bem('close-icon', this.closeIconPosition),
          "on": {
            "click": this.emitClose
          }
        });
      }
    }
  },
  render: function render() {
    var h = arguments[0];

    if (!this.shouldRender) {
      return;
    }

    return h("transition", {
      "attrs": {
        "name": "van-fade"
      }
    }, [h("div", {
      "directives": [{
        name: "show",
        value: this.value
      }],
      "class": [ImagePreview_bem(), this.className]
    }, [this.genClose(), this.genImages(), this.genIndex(), this.genCover()])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/image-preview/index.js




var instance;
var defaultConfig = {
  loop: true,
  images: [],
  value: true,
  minZoom: 1 / 3,
  maxZoom: 3,
  className: '',
  onClose: null,
  onChange: null,
  lazyLoad: false,
  showIndex: true,
  closeable: false,
  closeIcon: 'clear',
  asyncClose: false,
  startPosition: 0,
  swipeDuration: 500,
  showIndicators: false,
  closeOnPopstate: false,
  closeIconPosition: 'top-right'
};

var image_preview_initInstance = function initInstance() {
  instance = new (external_Vue_default.a.extend(image_preview_ImagePreview))({
    el: document.createElement('div')
  });
  document.body.appendChild(instance.$el);
  instance.$on('change', function (index) {
    if (instance.onChange) {
      instance.onChange(index);
    }
  });
  instance.$on('scale', function (data) {
    if (instance.onScale) {
      instance.onScale(data);
    }
  });
};

var es_image_preview_ImagePreview = function ImagePreview(images, startPosition) {
  if (startPosition === void 0) {
    startPosition = 0;
  }

  /* istanbul ignore if */
  if (utils["f" /* isServer */]) {
    return;
  }

  if (!instance) {
    image_preview_initInstance();
  }

  var options = Array.isArray(images) ? {
    images: images,
    startPosition: startPosition
  } : images;

  Object(esm_extends["a" /* default */])(instance, defaultConfig, options);

  instance.$once('input', function (show) {
    instance.value = show;
  });

  if (options.onClose) {
    instance.$off('close');
    instance.$once('close', options.onClose);
  }

  return instance;
};

es_image_preview_ImagePreview.install = function () {
  external_Vue_default.a.use(image_preview_ImagePreview);
};

/* harmony default export */ var es_image_preview = (es_image_preview_ImagePreview);
// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/row/index.css
var row = __webpack_require__("37d4");

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/row/style/index.js


// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/row/index.js


var row_createNamespace = Object(create["a" /* createNamespace */])('row'),
    row_createComponent = row_createNamespace[0],
    row_bem = row_createNamespace[1];

/* harmony default export */ var es_row = (row_createComponent({
  props: {
    type: String,
    align: String,
    justify: String,
    tag: {
      type: String,
      default: 'div'
    },
    gutter: {
      type: [Number, String],
      default: 0
    }
  },
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
    }
  },
  render: function render() {
    var _bem;

    var h = arguments[0];
    var align = this.align,
        justify = this.justify;
    var flex = this.type === 'flex';
    var margin = "-" + Number(this.gutter) / 2 + "px";
    var style = this.gutter ? {
      marginLeft: margin,
      marginRight: margin
    } : {};
    return h(this.tag, {
      "style": style,
      "class": row_bem((_bem = {
        flex: flex
      }, _bem["align-" + align] = flex && align, _bem["justify-" + justify] = flex && justify, _bem)),
      "on": {
        "click": this.onClick
      }
    }, [this.slots()]);
  }
}));
// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/col/index.css
var col = __webpack_require__("fe3a");

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/col/style/index.js


// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/col/index.js


var col_createNamespace = Object(create["a" /* createNamespace */])('col'),
    col_createComponent = col_createNamespace[0],
    col_bem = col_createNamespace[1];

/* harmony default export */ var es_col = (col_createComponent({
  props: {
    span: [Number, String],
    offset: [Number, String],
    tag: {
      type: String,
      default: 'div'
    }
  },
  computed: {
    gutter: function gutter() {
      return this.$parent && Number(this.$parent.gutter) || 0;
    },
    style: function style() {
      var padding = this.gutter / 2 + "px";
      return this.gutter ? {
        paddingLeft: padding,
        paddingRight: padding
      } : {};
    }
  },
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
    }
  },
  render: function render() {
    var _bem;

    var h = arguments[0];
    var span = this.span,
        offset = this.offset;
    return h(this.tag, {
      "style": this.style,
      "class": col_bem((_bem = {}, _bem[span] = span, _bem["offset-" + offset] = offset, _bem)),
      "on": {
        "click": this.onClick
      }
    }, [this.slots()]);
  }
}));
// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/cell/index.css
var cell = __webpack_require__("38d8");

// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/field/index.css
var field = __webpack_require__("0520");

// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/search/index.css
var search = __webpack_require__("82b1");

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/search/style/index.js






// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/utils/functional.js
var functional = __webpack_require__("28bd");

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/field/utils.js
function formatNumber(value, allowDot) {
  if (allowDot) {
    var dotIndex = value.indexOf('.');

    if (dotIndex > -1) {
      value = value.slice(0, dotIndex + 1) + value.slice(dotIndex).replace(/\./g, '');
    }
  }

  var regExp = allowDot ? /[^0-9.]/g : /\D/g;
  return value.replace(regExp, '');
}
// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/utils/validate/system.js

function isAndroid() {
  /* istanbul ignore next */
  return utils["f" /* isServer */] ? false : /android/.test(navigator.userAgent.toLowerCase());
}
function isIOS() {
  /* istanbul ignore next */
  return utils["f" /* isServer */] ? false : /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());
}
// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/utils/dom/scroll.js
var dom_scroll = __webpack_require__("4b1f");

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/utils/dom/reset-scroll.js
/**
 * Hack for iOS12 page scroll
 * https://developers.weixin.qq.com/community/develop/doc/00044ae90742f8c82fb78fcae56800
 */


var reset_scroll_isIOS = isIOS();
/* istanbul ignore next */

function resetScroll() {
  if (reset_scroll_isIOS) {
    Object(dom_scroll["g" /* setRootScrollTop */])(Object(dom_scroll["b" /* getRootScrollTop */])());
  }
}
// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/utils/router.js
var utils_router = __webpack_require__("f20f");

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/cell/shared.js
var cellProps = {
  icon: String,
  size: String,
  center: Boolean,
  isLink: Boolean,
  required: Boolean,
  clickable: Boolean,
  iconPrefix: String,
  titleStyle: null,
  titleClass: null,
  valueClass: null,
  labelClass: null,
  title: [Number, String],
  value: [Number, String],
  label: [Number, String],
  arrowDirection: String,
  border: {
    type: Boolean,
    default: true
  }
};
// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/cell/index.js


// Utils



 // Components

 // Types

var cell_createNamespace = Object(create["a" /* createNamespace */])('cell'),
    cell_createComponent = cell_createNamespace[0],
    cell_bem = cell_createNamespace[1];

function Cell(h, props, slots, ctx) {
  var icon = props.icon,
      size = props.size,
      title = props.title,
      label = props.label,
      value = props.value,
      isLink = props.isLink;
  var showTitle = slots.title || Object(utils["b" /* isDef */])(title);

  function Label() {
    var showLabel = slots.label || Object(utils["b" /* isDef */])(label);

    if (showLabel) {
      return h("div", {
        "class": [cell_bem('label'), props.labelClass]
      }, [slots.label ? slots.label() : label]);
    }
  }

  function Title() {
    if (showTitle) {
      return h("div", {
        "class": [cell_bem('title'), props.titleClass],
        "style": props.titleStyle
      }, [slots.title ? slots.title() : h("span", [title]), Label()]);
    }
  }

  function Value() {
    var showValue = slots.default || Object(utils["b" /* isDef */])(value);

    if (showValue) {
      return h("div", {
        "class": [cell_bem('value', {
          alone: !showTitle
        }), props.valueClass]
      }, [slots.default ? slots.default() : h("span", [value])]);
    }
  }

  function LeftIcon() {
    if (slots.icon) {
      return slots.icon();
    }

    if (icon) {
      return h(_vant_2_5_4_vant_es_icon["a" /* default */], {
        "class": cell_bem('left-icon'),
        "attrs": {
          "name": icon,
          "classPrefix": props.iconPrefix
        }
      });
    }
  }

  function RightIcon() {
    var rightIconSlot = slots['right-icon'];

    if (rightIconSlot) {
      return rightIconSlot();
    }

    if (isLink) {
      var arrowDirection = props.arrowDirection;
      return h(_vant_2_5_4_vant_es_icon["a" /* default */], {
        "class": cell_bem('right-icon'),
        "attrs": {
          "name": arrowDirection ? "arrow-" + arrowDirection : 'arrow'
        }
      });
    }
  }

  function onClick(event) {
    Object(functional["a" /* emit */])(ctx, 'click', event);
    Object(utils_router["a" /* functionalRoute */])(ctx);
  }

  var clickable = isLink || props.clickable;
  var classes = {
    clickable: clickable,
    center: props.center,
    required: props.required,
    borderless: !props.border
  };

  if (size) {
    classes[size] = size;
  }

  return h("div", helper_default()([{
    "class": cell_bem(classes),
    "attrs": {
      "role": clickable ? 'button' : null,
      "tabindex": clickable ? 0 : null
    },
    "on": {
      "click": onClick
    }
  }, Object(functional["b" /* inherit */])(ctx)]), [LeftIcon(), Title(), Value(), RightIcon(), slots.extra == null ? void 0 : slots.extra()]);
}

Cell.props = Object(esm_extends["a" /* default */])({}, cellProps, {}, utils_router["c" /* routeProps */]);
/* harmony default export */ var es_cell = (cell_createComponent(Cell));
// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/field/index.js



// Utils




 // Components





var field_createNamespace = Object(create["a" /* createNamespace */])('field'),
    field_createComponent = field_createNamespace[0],
    field_bem = field_createNamespace[1];

/* harmony default export */ var es_field = (field_createComponent({
  inheritAttrs: false,
  provide: function provide() {
    return {
      vanField: this
    };
  },
  inject: {
    vanForm: {
      default: null
    }
  },
  props: Object(esm_extends["a" /* default */])({}, cellProps, {
    name: String,
    rules: Array,
    error: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    autosize: [Boolean, Object],
    leftIcon: String,
    rightIcon: String,
    clearable: Boolean,
    formatter: Function,
    maxlength: [Number, String],
    labelWidth: [Number, String],
    labelClass: null,
    labelAlign: String,
    inputAlign: String,
    placeholder: String,
    errorMessage: String,
    errorMessageAlign: String,
    showWordLimit: Boolean,
    type: {
      type: String,
      default: 'text'
    }
  }),
  data: function data() {
    return {
      focused: false,
      validateMessage: ''
    };
  },
  watch: {
    value: function value() {
      this.resetValidation();
      this.validateWithTrigger('onChange');
      this.$nextTick(this.adjustSize);
    }
  },
  mounted: function mounted() {
    this.format();
    this.$nextTick(this.adjustSize);

    if (this.vanForm) {
      this.vanForm.fields.push(this);
    }
  },
  beforeDestroy: function beforeDestroy() {
    var _this = this;

    if (this.vanForm) {
      this.vanForm.fields = this.vanForm.fields.filter(function (item) {
        return item !== _this;
      });
    }
  },
  computed: {
    showClear: function showClear() {
      return this.clearable && this.focused && this.value !== '' && Object(utils["b" /* isDef */])(this.value) && !this.readonly;
    },
    listeners: function listeners() {
      var listeners = Object(esm_extends["a" /* default */])({}, this.$listeners, {
        input: this.onInput,
        keypress: this.onKeypress,
        focus: this.onFocus,
        blur: this.onBlur
      });

      delete listeners.click;
      return listeners;
    },
    labelStyle: function labelStyle() {
      var labelWidth = this.getProp('labelWidth');

      if (labelWidth) {
        return {
          width: Object(unit["a" /* addUnit */])(labelWidth)
        };
      }
    },
    formValue: function formValue() {
      return this.children ? this.children.value : this.value;
    }
  },
  methods: {
    // @exposed-api
    focus: function focus() {
      if (this.$refs.input) {
        this.$refs.input.focus();
      }
    },
    // @exposed-api
    blur: function blur() {
      if (this.$refs.input) {
        this.$refs.input.blur();
      }
    },
    runValidator: function runValidator(value, rule) {
      return new Promise(function (resolve) {
        var returnVal = rule.validator(value, rule);

        if (Object(utils["e" /* isPromise */])(returnVal)) {
          return returnVal.then(resolve);
        }

        resolve(returnVal);
      });
    },
    isEmptyValue: function isEmptyValue(value) {
      if (Array.isArray(value)) {
        return !value.length;
      }

      return !value;
    },
    runSyncRule: function runSyncRule(value, rule) {
      if (rule.required && this.isEmptyValue(value)) {
        return false;
      }

      if (rule.pattern && !rule.pattern.test(value)) {
        return false;
      }

      return true;
    },
    getRuleMessage: function getRuleMessage(value, rule) {
      var message = rule.message;

      if (Object(utils["c" /* isFunction */])(message)) {
        return message(value, rule);
      }

      return message;
    },
    runRules: function runRules(rules) {
      var _this2 = this;

      return rules.reduce(function (promise, rule) {
        return promise.then(function () {
          if (_this2.validateMessage) {
            return;
          }

          var value = _this2.formValue;

          if (rule.formatter) {
            value = rule.formatter(value, rule);
          }

          if (!_this2.runSyncRule(value, rule)) {
            _this2.validateMessage = _this2.getRuleMessage(value, rule);
            return;
          }

          if (rule.validator) {
            return _this2.runValidator(value, rule).then(function (result) {
              if (result === false) {
                _this2.validateMessage = _this2.getRuleMessage(value, rule);
              }
            });
          }
        });
      }, Promise.resolve());
    },
    validate: function validate(rules) {
      var _this3 = this;

      if (rules === void 0) {
        rules = this.rules;
      }

      return new Promise(function (resolve) {
        if (!rules) {
          resolve();
        }

        _this3.runRules(rules).then(function () {
          if (_this3.validateMessage) {
            resolve({
              name: _this3.name,
              message: _this3.validateMessage
            });
          } else {
            resolve();
          }
        });
      });
    },
    validateWithTrigger: function validateWithTrigger(trigger) {
      if (this.vanForm && this.rules) {
        var defaultTrigger = this.vanForm.validateTrigger === trigger;
        var rules = this.rules.filter(function (rule) {
          if (rule.trigger) {
            return rule.trigger === trigger;
          }

          return defaultTrigger;
        });
        this.validate(rules);
      }
    },
    resetValidation: function resetValidation() {
      if (this.validateMessage) {
        this.validateMessage = '';
      }
    },
    format: function format(target) {
      if (target === void 0) {
        target = this.$refs.input;
      }

      if (!target) {
        return;
      }

      var _target = target,
          value = _target.value;
      var maxlength = this.maxlength; // native maxlength not work when type is number

      if (Object(utils["b" /* isDef */])(maxlength) && value.length > maxlength) {
        value = value.slice(0, maxlength);
        target.value = value;
      }

      if (this.type === 'number' || this.type === 'digit') {
        var originValue = value;
        var allowDot = this.type === 'number';
        value = formatNumber(value, allowDot);

        if (value !== originValue) {
          target.value = value;
        }
      }

      if (this.formatter) {
        var _originValue = value;
        value = this.formatter(value);

        if (value !== _originValue) {
          target.value = value;
        }
      }

      return value;
    },
    onInput: function onInput(event) {
      // not update v-model when composing
      if (event.target.composing) {
        return;
      }

      this.$emit('input', this.format(event.target));
    },
    onFocus: function onFocus(event) {
      this.focused = true;
      this.$emit('focus', event); // hack for safari

      /* istanbul ignore if */

      if (this.readonly) {
        this.blur();
      }
    },
    onBlur: function onBlur(event) {
      this.focused = false;
      this.$emit('blur', event);
      this.validateWithTrigger('onBlur');
      resetScroll();
    },
    onClick: function onClick(event) {
      this.$emit('click', event);
    },
    onClickLeftIcon: function onClickLeftIcon(event) {
      this.$emit('click-left-icon', event);
    },
    onClickRightIcon: function onClickRightIcon(event) {
      this.$emit('click-right-icon', event);
    },
    onClear: function onClear(event) {
      Object(dom_event["c" /* preventDefault */])(event);
      this.$emit('input', '');
      this.$emit('clear', event);
    },
    onKeypress: function onKeypress(event) {
      // trigger blur after click keyboard search button

      /* istanbul ignore next */
      if (this.type === 'search' && event.keyCode === 13) {
        this.blur();
      }

      this.$emit('keypress', event);
    },
    adjustSize: function adjustSize() {
      var input = this.$refs.input;

      if (!(this.type === 'textarea' && this.autosize) || !input) {
        return;
      }

      input.style.height = 'auto';
      var height = input.scrollHeight;

      if (Object(utils["d" /* isObject */])(this.autosize)) {
        var _this$autosize = this.autosize,
            maxHeight = _this$autosize.maxHeight,
            minHeight = _this$autosize.minHeight;

        if (maxHeight) {
          height = Math.min(height, maxHeight);
        }

        if (minHeight) {
          height = Math.max(height, minHeight);
        }
      }

      if (height) {
        input.style.height = height + 'px';
      }
    },
    genInput: function genInput() {
      var h = this.$createElement;
      var type = this.type;
      var inputSlot = this.slots('input');
      var inputAlign = this.getProp('inputAlign');

      if (inputSlot) {
        return h("div", {
          "class": field_bem('control', [inputAlign, 'custom'])
        }, [inputSlot]);
      }

      var inputProps = {
        ref: 'input',
        class: field_bem('control', inputAlign),
        domProps: {
          value: this.value
        },
        attrs: Object(esm_extends["a" /* default */])({}, this.$attrs, {
          name: this.name,
          disabled: this.disabled,
          readonly: this.readonly,
          placeholder: this.placeholder
        }),
        on: this.listeners,
        // add model directive to skip IME composition
        directives: [{
          name: 'model',
          value: this.value
        }]
      };

      if (type === 'textarea') {
        return h("textarea", helper_default()([{}, inputProps]));
      }

      var inputType = type; // type="number" is weired in iOS

      if (type === 'number') {
        inputType = 'text';
      }

      if (type === 'digit') {
        // set pattern to show number keyboard in iOS
        if (isIOS()) {
          inputType = 'number';
          inputProps.attrs.pattern = '\\d*'; // cannot prevent dot when type is number in Android, so use tel
        } else {
          inputType = 'tel';
        }
      }

      return h("input", helper_default()([{
        "attrs": {
          "type": inputType
        }
      }, inputProps]));
    },
    genLeftIcon: function genLeftIcon() {
      var h = this.$createElement;
      var showLeftIcon = this.slots('left-icon') || this.leftIcon;

      if (showLeftIcon) {
        return h("div", {
          "class": field_bem('left-icon'),
          "on": {
            "click": this.onClickLeftIcon
          }
        }, [this.slots('left-icon') || h(_vant_2_5_4_vant_es_icon["a" /* default */], {
          "attrs": {
            "name": this.leftIcon,
            "classPrefix": this.iconPrefix
          }
        })]);
      }
    },
    genRightIcon: function genRightIcon() {
      var h = this.$createElement;
      var slots = this.slots;
      var showRightIcon = slots('right-icon') || this.rightIcon;

      if (showRightIcon) {
        return h("div", {
          "class": field_bem('right-icon'),
          "on": {
            "click": this.onClickRightIcon
          }
        }, [slots('right-icon') || h(_vant_2_5_4_vant_es_icon["a" /* default */], {
          "attrs": {
            "name": this.rightIcon,
            "classPrefix": this.iconPrefix
          }
        })]);
      }
    },
    genWordLimit: function genWordLimit() {
      var h = this.$createElement;

      if (this.showWordLimit && this.maxlength) {
        var count = this.value.length;
        var full = count >= this.maxlength;
        return h("div", {
          "class": field_bem('word-limit')
        }, [h("span", {
          "class": field_bem('word-num', {
            full: full
          })
        }, [count]), "/", this.maxlength]);
      }
    },
    genMessage: function genMessage() {
      var h = this.$createElement;
      var message = this.errorMessage || this.validateMessage;

      if (message) {
        var errorMessageAlign = this.getProp('errorMessageAlign');
        return h("div", {
          "class": field_bem('error-message', errorMessageAlign)
        }, [message]);
      }
    },
    getProp: function getProp(key) {
      if (Object(utils["b" /* isDef */])(this[key])) {
        return this[key];
      }

      if (this.vanForm && Object(utils["b" /* isDef */])(this.vanForm[key])) {
        return this.vanForm[key];
      }
    },
    genLabel: function genLabel() {
      var h = this.$createElement;
      var colon = this.getProp('colon') ? ':' : '';

      if (this.slots('label')) {
        return [this.slots('label'), colon];
      }

      if (this.label) {
        return h("span", [this.label + colon]);
      }
    }
  },
  render: function render() {
    var _bem;

    var h = arguments[0];
    var slots = this.slots;
    var labelAlign = this.getProp('labelAlign');
    var scopedSlots = {
      icon: this.genLeftIcon
    };
    var Label = this.genLabel();

    if (Label) {
      scopedSlots.title = function () {
        return Label;
      };
    }

    return h(es_cell, {
      "attrs": {
        "icon": this.leftIcon,
        "size": this.size,
        "center": this.center,
        "border": this.border,
        "isLink": this.isLink,
        "required": this.required,
        "clickable": this.clickable,
        "titleStyle": this.labelStyle,
        "valueClass": field_bem('value'),
        "titleClass": [field_bem('label', labelAlign), this.labelClass],
        "arrowDirection": this.arrowDirection
      },
      "scopedSlots": scopedSlots,
      "class": field_bem((_bem = {
        error: this.error || this.validateMessage
      }, _bem["label-" + labelAlign] = labelAlign, _bem['min-height'] = this.type === 'textarea' && !this.autosize, _bem)),
      "on": {
        "click": this.onClick
      }
    }, [h("div", {
      "class": field_bem('body')
    }, [this.genInput(), this.showClear && h(_vant_2_5_4_vant_es_icon["a" /* default */], {
      "attrs": {
        "name": "clear"
      },
      "class": field_bem('clear'),
      "on": {
        "touchstart": this.onClear
      }
    }), this.genRightIcon(), slots('button') && h("div", {
      "class": field_bem('button')
    }, [slots('button')])]), this.genWordLimit(), this.genMessage()]);
  }
}));
// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/search/index.js



// Utils


 // Components

 // Types

var search_createNamespace = Object(create["a" /* createNamespace */])('search'),
    search_createComponent = search_createNamespace[0],
    search_bem = search_createNamespace[1],
    search_t = search_createNamespace[2];

function Search(h, props, slots, ctx) {
  function Label() {
    if (slots.label || props.label) {
      return h("div", {
        "class": search_bem('label')
      }, [slots.label ? slots.label() : props.label]);
    }
  }

  function Action() {
    if (!props.showAction) {
      return;
    }

    function onCancel() {
      if (slots.action) {
        return;
      }

      Object(functional["a" /* emit */])(ctx, 'input', '');
      Object(functional["a" /* emit */])(ctx, 'cancel');
    }

    return h("div", {
      "class": search_bem('action'),
      "attrs": {
        "role": "button",
        "tabindex": "0"
      },
      "on": {
        "click": onCancel
      }
    }, [slots.action ? slots.action() : props.actionText || search_t('cancel')]);
  }

  var fieldData = {
    attrs: ctx.data.attrs,
    on: Object(esm_extends["a" /* default */])({}, ctx.listeners, {
      keypress: function keypress(event) {
        // press enter
        if (event.keyCode === 13) {
          Object(dom_event["c" /* preventDefault */])(event);
          Object(functional["a" /* emit */])(ctx, 'search', props.value);
        }

        Object(functional["a" /* emit */])(ctx, 'keypress', event);
      }
    })
  };
  var inheritData = Object(functional["b" /* inherit */])(ctx);
  inheritData.attrs = undefined;
  return h("div", helper_default()([{
    "class": search_bem({
      'show-action': props.showAction
    }),
    "style": {
      background: props.background
    }
  }, inheritData]), [slots.left == null ? void 0 : slots.left(), h("div", {
    "class": search_bem('content', props.shape)
  }, [Label(), h(es_field, helper_default()([{
    "attrs": {
      "type": "search",
      "border": false,
      "value": props.value,
      "leftIcon": props.leftIcon,
      "rightIcon": props.rightIcon,
      "clearable": props.clearable
    },
    "scopedSlots": {
      'left-icon': slots['left-icon'],
      'right-icon': slots['right-icon']
    }
  }, fieldData]))]), Action()]);
}

Search.props = {
  value: String,
  label: String,
  rightIcon: String,
  actionText: String,
  showAction: Boolean,
  background: String,
  shape: {
    type: String,
    default: 'square'
  },
  clearable: {
    type: Boolean,
    default: true
  },
  leftIcon: {
    type: String,
    default: 'search'
  }
};
/* harmony default export */ var es_search = (search_createComponent(Search));
// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/pagination/index.css
var pagination = __webpack_require__("756e");

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/pagination/style/index.js


// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/pagination/index.js



var pagination_createNamespace = Object(create["a" /* createNamespace */])('pagination'),
    pagination_createComponent = pagination_createNamespace[0],
    pagination_bem = pagination_createNamespace[1],
    pagination_t = pagination_createNamespace[2];

function makePage(number, text, active) {
  return {
    number: number,
    text: text,
    active: active
  };
}

/* harmony default export */ var es_pagination = (pagination_createComponent({
  props: {
    prevText: String,
    nextText: String,
    forceEllipses: Boolean,
    mode: {
      type: String,
      default: 'multi'
    },
    value: {
      type: Number,
      default: 0
    },
    pageCount: {
      type: [Number, String],
      default: 0
    },
    totalItems: {
      type: [Number, String],
      default: 0
    },
    itemsPerPage: {
      type: [Number, String],
      default: 10
    },
    showPageSize: {
      type: [Number, String],
      default: 5
    }
  },
  computed: {
    count: function count() {
      var count = this.pageCount || Math.ceil(this.totalItems / this.itemsPerPage);
      return Math.max(1, count);
    },
    pages: function pages() {
      var pages = [];
      var pageCount = this.count;
      var showPageSize = +this.showPageSize;

      if (this.mode !== 'multi') {
        return pages;
      } // Default page limits


      var startPage = 1;
      var endPage = pageCount;
      var isMaxSized = showPageSize < pageCount; // recompute if showPageSize

      if (isMaxSized) {
        // Current page is displayed in the middle of the visible ones
        startPage = Math.max(this.value - Math.floor(showPageSize / 2), 1);
        endPage = startPage + showPageSize - 1; // Adjust if limit is exceeded

        if (endPage > pageCount) {
          endPage = pageCount;
          startPage = endPage - showPageSize + 1;
        }
      } // Add page number links


      for (var number = startPage; number <= endPage; number++) {
        var page = makePage(number, number, number === this.value);
        pages.push(page);
      } // Add links to move between page sets


      if (isMaxSized && showPageSize > 0 && this.forceEllipses) {
        if (startPage > 1) {
          var previousPageSet = makePage(startPage - 1, '...', false);
          pages.unshift(previousPageSet);
        }

        if (endPage < pageCount) {
          var nextPageSet = makePage(endPage + 1, '...', false);
          pages.push(nextPageSet);
        }
      }

      return pages;
    }
  },
  watch: {
    value: {
      handler: function handler(page) {
        this.select(page || this.value);
      },
      immediate: true
    }
  },
  methods: {
    select: function select(page, emitChange) {
      page = Math.min(this.count, Math.max(1, page));

      if (this.value !== page) {
        this.$emit('input', page);

        if (emitChange) {
          this.$emit('change', page);
        }
      }
    }
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];
    var value = this.value;
    var simple = this.mode !== 'multi';

    var onSelect = function onSelect(value) {
      return function () {
        _this.select(value, true);
      };
    };

    return h("ul", {
      "class": pagination_bem({
        simple: simple
      })
    }, [h("li", {
      "class": [pagination_bem('item', {
        disabled: value === 1
      }), pagination_bem('prev'), constant["a" /* BORDER */]],
      "on": {
        "click": onSelect(value - 1)
      }
    }, [this.prevText || pagination_t('prev')]), this.pages.map(function (page) {
      return h("li", {
        "class": [pagination_bem('item', {
          active: page.active
        }), pagination_bem('page'), constant["a" /* BORDER */]],
        "on": {
          "click": onSelect(page.number)
        }
      }, [page.text]);
    }), simple && h("li", {
      "class": pagination_bem('page-desc')
    }, [this.slots('pageDesc') || value + "/" + this.count]), h("li", {
      "class": [pagination_bem('item', {
        disabled: value === this.count
      }), pagination_bem('next'), constant["a" /* BORDER */]],
      "on": {
        "click": onSelect(value + 1)
      }
    }, [this.nextText || pagination_t('next')])]);
  }
}));
// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/action-sheet/index.css
var action_sheet = __webpack_require__("7f1d");

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/action-sheet/style/index.js







// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/popup/index.js




var popup_createNamespace = Object(create["a" /* createNamespace */])('popup'),
    popup_createComponent = popup_createNamespace[0],
    popup_bem = popup_createNamespace[1];

/* harmony default export */ var es_popup = (popup_createComponent({
  mixins: [Object(mixins_popup["a" /* PopupMixin */])()],
  props: {
    round: Boolean,
    duration: [Number, String],
    closeable: Boolean,
    transition: String,
    safeAreaInsetBottom: Boolean,
    closeIcon: {
      type: String,
      default: 'cross'
    },
    closeIconPosition: {
      type: String,
      default: 'top-right'
    },
    position: {
      type: String,
      default: 'center'
    },
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },
  beforeCreate: function beforeCreate() {
    var _this = this;

    var createEmitter = function createEmitter(eventName) {
      return function (event) {
        return _this.$emit(eventName, event);
      };
    };

    this.onClick = createEmitter('click');
    this.onOpened = createEmitter('opened');
    this.onClosed = createEmitter('closed');
  },
  render: function render() {
    var _bem;

    var h = arguments[0];

    if (!this.shouldRender) {
      return;
    }

    var round = this.round,
        position = this.position,
        duration = this.duration;
    var isCenter = position === 'center';
    var transitionName = this.transition || (isCenter ? 'van-fade' : "van-popup-slide-" + position);
    var style = {};

    if (Object(utils["b" /* isDef */])(duration)) {
      var key = isCenter ? 'animationDuration' : 'transitionDuration';
      style[key] = duration + "s";
    }

    return h("transition", {
      "attrs": {
        "name": transitionName
      },
      "on": {
        "afterEnter": this.onOpened,
        "afterLeave": this.onClosed
      }
    }, [h("div", {
      "directives": [{
        name: "show",
        value: this.value
      }],
      "style": style,
      "class": popup_bem((_bem = {
        round: round
      }, _bem[position] = position, _bem['safe-area-inset-bottom'] = this.safeAreaInsetBottom, _bem)),
      "on": {
        "click": this.onClick
      }
    }, [this.slots(), this.closeable && h(_vant_2_5_4_vant_es_icon["a" /* default */], {
      "attrs": {
        "role": "button",
        "tabindex": "0",
        "name": this.closeIcon
      },
      "class": popup_bem('close-icon', this.closeIconPosition),
      "on": {
        "click": this.close
      }
    })])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/action-sheet/index.js


// Utils


 // Mixins

 // Components



 // Types

var action_sheet_createNamespace = Object(create["a" /* createNamespace */])('action-sheet'),
    action_sheet_createComponent = action_sheet_createNamespace[0],
    action_sheet_bem = action_sheet_createNamespace[1];

function ActionSheet(h, props, slots, ctx) {
  var title = props.title,
      cancelText = props.cancelText;

  function onCancel() {
    Object(functional["a" /* emit */])(ctx, 'input', false);
    Object(functional["a" /* emit */])(ctx, 'cancel');
  }

  function Header() {
    if (title) {
      return h("div", {
        "class": action_sheet_bem('header')
      }, [title, h(_vant_2_5_4_vant_es_icon["a" /* default */], {
        "attrs": {
          "name": props.closeIcon
        },
        "class": action_sheet_bem('close'),
        "on": {
          "click": onCancel
        }
      })]);
    }
  }

  function Content() {
    if (slots.default) {
      return h("div", {
        "class": action_sheet_bem('content')
      }, [slots.default()]);
    }
  }

  function Option(item, index) {
    var disabled = item.disabled,
        loading = item.loading,
        callback = item.callback;

    function onClickOption(event) {
      event.stopPropagation();

      if (disabled || loading) {
        return;
      }

      if (callback) {
        callback(item);
      }

      Object(functional["a" /* emit */])(ctx, 'select', item, index);

      if (props.closeOnClickAction) {
        Object(functional["a" /* emit */])(ctx, 'input', false);
      }
    }

    function OptionContent() {
      if (loading) {
        return h(_vant_2_5_4_vant_es_loading["a" /* default */], {
          "attrs": {
            "size": "20px"
          }
        });
      }

      return [h("span", {
        "class": action_sheet_bem('name')
      }, [item.name]), item.subname && h("span", {
        "class": action_sheet_bem('subname')
      }, [item.subname])];
    }

    return h("button", {
      "attrs": {
        "type": "button"
      },
      "class": [action_sheet_bem('item', {
        disabled: disabled,
        loading: loading
      }), item.className, constant["e" /* BORDER_TOP */]],
      "style": {
        color: item.color
      },
      "on": {
        "click": onClickOption
      }
    }, [OptionContent()]);
  }

  function CancelText() {
    if (cancelText) {
      return h("button", {
        "attrs": {
          "type": "button"
        },
        "class": action_sheet_bem('cancel'),
        "on": {
          "click": onCancel
        }
      }, [cancelText]);
    }
  }

  var Description = props.description && h("div", {
    "class": action_sheet_bem('description')
  }, [props.description]);
  return h(es_popup, helper_default()([{
    "class": action_sheet_bem(),
    "attrs": {
      "position": "bottom",
      "round": props.round,
      "value": props.value,
      "overlay": props.overlay,
      "duration": props.duration,
      "lazyRender": props.lazyRender,
      "lockScroll": props.lockScroll,
      "getContainer": props.getContainer,
      "closeOnPopstate": props.closeOnPopstate,
      "closeOnClickOverlay": props.closeOnClickOverlay,
      "safeAreaInsetBottom": props.safeAreaInsetBottom
    }
  }, Object(functional["b" /* inherit */])(ctx, true)]), [Header(), Description, props.actions && props.actions.map(Option), Content(), CancelText()]);
}

ActionSheet.props = Object(esm_extends["a" /* default */])({}, mixins_popup["b" /* popupMixinProps */], {
  title: String,
  actions: Array,
  duration: [Number, String],
  cancelText: String,
  description: String,
  getContainer: [String, Function],
  closeOnPopstate: Boolean,
  closeOnClickAction: Boolean,
  round: {
    type: Boolean,
    default: true
  },
  closeIcon: {
    type: String,
    default: 'cross'
  },
  safeAreaInsetBottom: {
    type: Boolean,
    default: true
  },
  overlay: {
    type: Boolean,
    default: true
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: true
  }
});
/* harmony default export */ var es_action_sheet = (action_sheet_createComponent(ActionSheet));
// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/image/style/index.js




// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/uploader/index.css
var uploader = __webpack_require__("fd00");

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/uploader/style/index.js











// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/uploader/utils.js
function toArray(item) {
  if (Array.isArray(item)) {
    return item;
  }

  return [item];
}
function utils_readFile(file, resultType) {
  return new Promise(function (resolve) {
    if (resultType === 'file') {
      resolve();
      return;
    }

    var reader = new FileReader();

    reader.onload = function (event) {
      resolve(event.target.result);
    };

    if (resultType === 'dataUrl') {
      reader.readAsDataURL(file);
    } else if (resultType === 'text') {
      reader.readAsText(file);
    }
  });
}
function isOversize(files, maxSize) {
  return toArray(files).some(function (file) {
    return file.size > maxSize;
  });
}
var IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;
function isImageUrl(url) {
  return IMAGE_REGEXP.test(url);
}
function isImageFile(item) {
  // some special urls cannot be recognized
  // user can add `isImage` flag to mark it as an image url
  if (item.isImage) {
    return true;
  }

  if (item.file && item.file.type) {
    return item.file.type.indexOf('image') === 0;
  }

  if (item.url) {
    return isImageUrl(item.url);
  }

  if (item.content) {
    return item.content.indexOf('data:image') === 0;
  }

  return false;
}
// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/mixins/field.js
var FieldMixin = {
  inject: {
    vanField: {
      default: null
    }
  },
  watch: {
    value: function value() {
      var field = this.vanField;

      if (field) {
        field.resetValidation();
        field.validateWithTrigger('onChange');
      }
    }
  },
  created: function created() {
    var field = this.vanField;

    if (field && !field.children) {
      field.children = this;
    }
  }
};
// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/uploader/index.js

// Utils

 // Mixins

 // Components






var uploader_createNamespace = Object(create["a" /* createNamespace */])('uploader'),
    uploader_createComponent = uploader_createNamespace[0],
    uploader_bem = uploader_createNamespace[1];

/* harmony default export */ var es_uploader = (uploader_createComponent({
  inheritAttrs: false,
  mixins: [FieldMixin],
  model: {
    prop: 'fileList'
  },
  props: {
    disabled: Boolean,
    uploadText: String,
    afterRead: Function,
    beforeRead: Function,
    beforeDelete: Function,
    previewSize: [Number, String],
    name: {
      type: [Number, String],
      default: ''
    },
    accept: {
      type: String,
      default: 'image/*'
    },
    fileList: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    maxSize: {
      type: [Number, String],
      default: Number.MAX_VALUE
    },
    maxCount: {
      type: [Number, String],
      default: Number.MAX_VALUE
    },
    deletable: {
      type: Boolean,
      default: true
    },
    previewImage: {
      type: Boolean,
      default: true
    },
    previewFullImage: {
      type: Boolean,
      default: true
    },
    imageFit: {
      type: String,
      default: 'cover'
    },
    resultType: {
      type: String,
      default: 'dataUrl'
    },
    uploadIcon: {
      type: String,
      default: 'photograph'
    }
  },
  computed: {
    previewSizeWithUnit: function previewSizeWithUnit() {
      return Object(unit["a" /* addUnit */])(this.previewSize);
    },
    // for form
    value: function value() {
      return this.fileList;
    }
  },
  methods: {
    getDetail: function getDetail(index) {
      if (index === void 0) {
        index = this.fileList.length;
      }

      return {
        name: this.name,
        index: index
      };
    },
    onChange: function onChange(event) {
      var _this = this;

      var files = event.target.files;

      if (this.disabled || !files.length) {
        return;
      }

      files = files.length === 1 ? files[0] : [].slice.call(files);

      if (this.beforeRead) {
        var response = this.beforeRead(files, this.getDetail());

        if (!response) {
          this.resetInput();
          return;
        }

        if (Object(utils["e" /* isPromise */])(response)) {
          response.then(function () {
            _this.readFile(files);
          }).catch(this.resetInput);
          return;
        }
      }

      this.readFile(files);
    },
    readFile: function readFile(files) {
      var _this2 = this;

      var oversize = isOversize(files, this.maxSize);

      if (Array.isArray(files)) {
        var maxCount = this.maxCount - this.fileList.length;

        if (files.length > maxCount) {
          files = files.slice(0, maxCount);
        }

        Promise.all(files.map(function (file) {
          return utils_readFile(file, _this2.resultType);
        })).then(function (contents) {
          var fileList = files.map(function (file, index) {
            var result = {
              file: file,
              status: ''
            };

            if (contents[index]) {
              result.content = contents[index];
            }

            return result;
          });

          _this2.onAfterRead(fileList, oversize);
        });
      } else {
        utils_readFile(files, this.resultType).then(function (content) {
          var result = {
            file: files,
            status: ''
          };

          if (content) {
            result.content = content;
          }

          _this2.onAfterRead(result, oversize);
        });
      }
    },
    onAfterRead: function onAfterRead(files, oversize) {
      this.resetInput();

      if (oversize) {
        this.$emit('oversize', files, this.getDetail());
        return;
      }

      this.$emit('input', [].concat(this.fileList, toArray(files)));

      if (this.afterRead) {
        this.afterRead(files, this.getDetail());
      }
    },
    onDelete: function onDelete(file, index) {
      var _this3 = this;

      if (this.beforeDelete) {
        var response = this.beforeDelete(file, this.getDetail(index));

        if (!response) {
          return;
        }

        if (Object(utils["e" /* isPromise */])(response)) {
          response.then(function () {
            _this3.deleteFile(file, index);
          }).catch(utils["g" /* noop */]);
          return;
        }
      }

      this.deleteFile(file, index);
    },
    deleteFile: function deleteFile(file, index) {
      var fileList = this.fileList.slice(0);
      fileList.splice(index, 1);
      this.$emit('input', fileList);
      this.$emit('delete', file, this.getDetail(index));
    },
    resetInput: function resetInput() {
      /* istanbul ignore else */
      if (this.$refs.input) {
        this.$refs.input.value = '';
      }
    },
    onPreviewImage: function onPreviewImage(item) {
      var _this4 = this;

      if (!this.previewFullImage) {
        return;
      }

      var imageFiles = this.fileList.filter(function (item) {
        return isImageFile(item);
      });
      var imageContents = imageFiles.map(function (item) {
        return item.content || item.url;
      });
      this.imagePreview = es_image_preview({
        images: imageContents,
        closeOnPopstate: true,
        startPosition: imageFiles.indexOf(item),
        onClose: function onClose() {
          _this4.$emit('close-preview');
        }
      });
    },
    // @exposed-api
    closeImagePreview: function closeImagePreview() {
      if (this.imagePreview) {
        this.imagePreview.close();
      }
    },
    genPreviewMask: function genPreviewMask(item) {
      var h = this.$createElement;
      var status = item.status;

      if (status === 'uploading' || status === 'failed') {
        var MaskIcon = status === 'failed' ? h(_vant_2_5_4_vant_es_icon["a" /* default */], {
          "attrs": {
            "name": "warning-o"
          },
          "class": uploader_bem('mask-icon')
        }) : h(_vant_2_5_4_vant_es_loading["a" /* default */], {
          "class": uploader_bem('loading')
        });
        return h("div", {
          "class": uploader_bem('mask')
        }, [MaskIcon, item.message && h("div", {
          "class": uploader_bem('mask-message')
        }, [item.message])]);
      }
    },
    genPreviewItem: function genPreviewItem(item, index) {
      var _this5 = this;

      var h = this.$createElement;
      var showDelete = item.status !== 'uploading' && this.deletable;
      var DeleteIcon = showDelete && h(_vant_2_5_4_vant_es_icon["a" /* default */], {
        "attrs": {
          "name": "clear"
        },
        "class": uploader_bem('preview-delete'),
        "on": {
          "click": function click(event) {
            event.stopPropagation();

            _this5.onDelete(item, index);
          }
        }
      });
      var Preview = isImageFile(item) ? h(_vant_2_5_4_vant_es_image, {
        "attrs": {
          "fit": this.imageFit,
          "src": item.content || item.url,
          "width": this.previewSize,
          "height": this.previewSize
        },
        "class": uploader_bem('preview-image'),
        "on": {
          "click": function click() {
            _this5.onPreviewImage(item);
          }
        }
      }) : h("div", {
        "class": uploader_bem('file'),
        "style": {
          width: this.previewSizeWithUnit,
          height: this.previewSizeWithUnit
        }
      }, [h(_vant_2_5_4_vant_es_icon["a" /* default */], {
        "class": uploader_bem('file-icon'),
        "attrs": {
          "name": "description"
        }
      }), h("div", {
        "class": [uploader_bem('file-name'), 'van-ellipsis']
      }, [item.file ? item.file.name : item.url])]);
      return h("div", {
        "class": uploader_bem('preview'),
        "on": {
          "click": function click() {
            _this5.$emit('click-preview', item, _this5.getDetail(index));
          }
        }
      }, [Preview, this.genPreviewMask(item), DeleteIcon]);
    },
    genPreviewList: function genPreviewList() {
      if (this.previewImage) {
        return this.fileList.map(this.genPreviewItem);
      }
    },
    genUpload: function genUpload() {
      var h = this.$createElement;

      if (this.fileList.length >= this.maxCount) {
        return;
      }

      var slot = this.slots();
      var Input = h("input", {
        "attrs": Object(esm_extends["a" /* default */])({}, this.$attrs, {
          "type": "file",
          "accept": this.accept,
          "disabled": this.disabled
        }),
        "ref": "input",
        "class": uploader_bem('input'),
        "on": {
          "change": this.onChange
        }
      });

      if (slot) {
        return h("div", {
          "class": uploader_bem('input-wrapper')
        }, [slot, Input]);
      }

      var style;

      if (this.previewSize) {
        var size = this.previewSizeWithUnit;
        style = {
          width: size,
          height: size
        };
      }

      return h("div", {
        "class": uploader_bem('upload'),
        "style": style
      }, [h(_vant_2_5_4_vant_es_icon["a" /* default */], {
        "attrs": {
          "name": this.uploadIcon
        },
        "class": uploader_bem('upload-icon')
      }), this.uploadText && h("span", {
        "class": uploader_bem('upload-text')
      }, [this.uploadText]), Input]);
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": uploader_bem()
    }, [h("div", {
      "class": uploader_bem('wrapper', {
        disabled: this.disabled
      })
    }, [this.genPreviewList(), this.genUpload()])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/form/style/index.js


// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/form/index.js


var form_createNamespace = Object(create["a" /* createNamespace */])('form'),
    form_createComponent = form_createNamespace[0],
    form_bem = form_createNamespace[1];

/* harmony default export */ var es_form = (form_createComponent({
  props: {
    colon: Boolean,
    labelWidth: [Number, String],
    labelAlign: String,
    inputAlign: String,
    scrollToError: Boolean,
    validateFirst: Boolean,
    errorMessageAlign: String,
    validateTrigger: {
      type: String,
      default: 'onBlur'
    }
  },
  provide: function provide() {
    return {
      vanForm: this
    };
  },
  data: function data() {
    return {
      fields: []
    };
  },
  methods: {
    validateSeq: function validateSeq() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        var errors = [];

        _this.fields.reduce(function (promise, field) {
          return promise.then(function () {
            if (!errors.length) {
              return field.validate().then(function (error) {
                if (error) {
                  errors.push(error);
                }
              });
            }
          });
        }, Promise.resolve()).then(function () {
          if (errors.length) {
            reject(errors);
          } else {
            resolve();
          }
        });
      });
    },
    validateAll: function validateAll() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        Promise.all(_this2.fields.map(function (item) {
          return item.validate();
        })).then(function (errors) {
          errors = errors.filter(function (item) {
            return item;
          });

          if (errors.length) {
            reject(errors);
          } else {
            resolve();
          }
        });
      });
    },
    // @exposed-api
    validate: function validate(name) {
      if (name) {
        return this.validateField(name);
      }

      return this.validateFirst ? this.validateSeq() : this.validateAll();
    },
    validateField: function validateField(name) {
      var matched = this.fields.filter(function (item) {
        return item.name === name;
      });

      if (matched.length) {
        return new Promise(function (resolve, reject) {
          matched[0].validate().then(function (error) {
            if (error) {
              reject(error);
            } else {
              resolve();
            }
          });
        });
      }

      return Promise.reject();
    },
    // @exposed-api
    resetValidation: function resetValidation(name) {
      this.fields.forEach(function (item) {
        if (!name || item.name === name) {
          item.resetValidation();
        }
      });
    },
    // @exposed-api
    scrollToField: function scrollToField(name) {
      this.fields.forEach(function (item) {
        if (item.name === name) {
          item.$el.scrollIntoView();
        }
      });
    },
    getValues: function getValues() {
      return this.fields.reduce(function (form, field) {
        form[field.name] = field.formValue;
        return form;
      }, {});
    },
    onSubmit: function onSubmit(event) {
      event.preventDefault();
      this.submit();
    },
    // @exposed-api
    submit: function submit() {
      var _this3 = this;

      var values = this.getValues();
      this.validate().then(function () {
        _this3.$emit('submit', values);
      }).catch(function (errors) {
        _this3.$emit('failed', {
          values: values,
          errors: errors
        });

        if (_this3.scrollToError) {
          _this3.scrollToField(errors[0].name);
        }
      });
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("form", {
      "class": form_bem(),
      "on": {
        "submit": this.onSubmit
      }
    }, [this.slots()]);
  }
}));
// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/button/index.css
var es_button = __webpack_require__("cd53");

// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/toast/index.css
var toast = __webpack_require__("2f50");

// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/calendar/index.css
var calendar = __webpack_require__("9b69");

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/calendar/style/index.js









// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/utils/validate/number.js
var number = __webpack_require__("aaf9");

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/utils/validate/date.js

function isDate(val) {
  return Object.prototype.toString.call(val) === '[object Date]' && !Object(number["a" /* isNaN */])(val.getTime());
}
// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/calendar/utils.js


var utils_createNamespace = Object(create["a" /* createNamespace */])('calendar'),
    utils_createComponent = utils_createNamespace[0],
    utils_bem = utils_createNamespace[1],
    utils_t = utils_createNamespace[2];


var ROW_HEIGHT = 64;
function formatMonthTitle(date) {
  return utils_t('monthTitle', date.getFullYear(), date.getMonth() + 1);
}
function compareMonth(date1, date2) {
  var year1 = date1.getFullYear();
  var year2 = date2.getFullYear();
  var month1 = date1.getMonth();
  var month2 = date2.getMonth();

  if (year1 === year2) {
    return month1 === month2 ? 0 : month1 > month2 ? 1 : -1;
  }

  return year1 > year2 ? 1 : -1;
}
function compareDay(day1, day2) {
  var compareMonthResult = compareMonth(day1, day2);

  if (compareMonthResult === 0) {
    var date1 = day1.getDate();
    var date2 = day2.getDate();
    return date1 === date2 ? 0 : date1 > date2 ? 1 : -1;
  }

  return compareMonthResult;
}

function getDayByOffset(date, offset) {
  date = new Date(date);
  date.setDate(date.getDate() + offset);
  return date;
}

function getPrevDay(date) {
  return getDayByOffset(date, -1);
}
function getNextDay(date) {
  return getDayByOffset(date, 1);
}
function calcDateNum(date) {
  var day1 = date[0].getTime();
  var day2 = date[1].getTime();
  return (day2 - day1) / (1000 * 60 * 60 * 24) + 1;
}
function copyDates(dates) {
  if (Array.isArray(dates)) {
    return dates.map(function (date) {
      if (date === null) {
        return date;
      }

      return new Date(date);
    });
  }

  return new Date(dates);
}
// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/button/index.js
var _vant_2_5_4_vant_es_button = __webpack_require__("bb63");

// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/toast/index.js + 2 modules
var es_toast = __webpack_require__("2f2a");

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/datetime-picker/utils.js

function times(n, iteratee) {
  var index = -1;
  var result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }

  return result;
}
function getTrueValue(value) {
  if (!value) {
    return 0;
  }

  while (Object(number["a" /* isNaN */])(parseInt(value, 10))) {
    if (value.length > 1) {
      value = value.slice(1);
    } else {
      return 0;
    }
  }

  return parseInt(value, 10);
}
function getMonthEndDay(year, month) {
  return 32 - new Date(year, month - 1, 32).getDate();
}
// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/calendar/components/Month.js




var Month_createNamespace = Object(create["a" /* createNamespace */])('calendar-month'),
    Month_createComponent = Month_createNamespace[0];

/* harmony default export */ var Month = (Month_createComponent({
  props: {
    date: Date,
    type: String,
    color: String,
    minDate: Date,
    maxDate: Date,
    showMark: Boolean,
    showTitle: Boolean,
    rowHeight: [Number, String],
    formatter: Function,
    currentDate: [Date, Array]
  },
  data: function data() {
    return {
      visible: false
    };
  },
  computed: {
    title: function title() {
      return formatMonthTitle(this.date);
    },
    offset: function offset() {
      return this.date.getDay();
    },
    totalDay: function totalDay() {
      return getMonthEndDay(this.date.getFullYear(), this.date.getMonth() + 1);
    },
    monthStyle: function monthStyle() {
      if (!this.visible) {
        var padding = Math.ceil((this.totalDay + this.offset) / 7) * this.rowHeight;
        return {
          paddingBottom: padding + "px"
        };
      }
    },
    days: function days() {
      var days = [];
      var year = this.date.getFullYear();
      var month = this.date.getMonth();

      for (var day = 1; day <= this.totalDay; day++) {
        var date = new Date(year, month, day);
        var type = this.getDayType(date);
        var config = {
          date: date,
          type: type,
          text: day,
          bottomInfo: this.getBottomInfo(type)
        };

        if (this.formatter) {
          config = this.formatter(config);
        }

        days.push(config);
      }

      return days;
    }
  },
  mounted: function mounted() {
    this.height = this.$el.getBoundingClientRect().height;
  },
  methods: {
    scrollIntoView: function scrollIntoView() {
      this.$refs.days.scrollIntoView();
    },
    getMultipleDayType: function getMultipleDayType(day) {
      var _this = this;

      var isSelected = function isSelected(date) {
        return _this.currentDate.some(function (item) {
          return compareDay(item, date) === 0;
        });
      };

      if (isSelected(day)) {
        var prevDay = getPrevDay(day);
        var nextDay = getNextDay(day);
        var prevSelected = isSelected(prevDay);
        var nextSelected = isSelected(nextDay);

        if (prevSelected && nextSelected) {
          return 'multiple-middle';
        }

        if (prevSelected) {
          return 'end';
        }

        return nextSelected ? 'start' : 'multiple-selected';
      }

      return '';
    },
    getRangeDayType: function getRangeDayType(day) {
      var _this$currentDate = this.currentDate,
          startDay = _this$currentDate[0],
          endDay = _this$currentDate[1];

      if (!startDay) {
        return;
      }

      var compareToStart = compareDay(day, startDay);

      if (compareToStart === 0) {
        return 'start';
      }

      if (!endDay) {
        return;
      }

      var compareToEnd = compareDay(day, endDay);

      if (compareToEnd === 0) {
        return 'end';
      }

      if (compareToStart > 0 && compareToEnd < 0) {
        return 'middle';
      }
    },
    getDayType: function getDayType(day) {
      var type = this.type,
          minDate = this.minDate,
          maxDate = this.maxDate,
          currentDate = this.currentDate;

      if (compareDay(day, minDate) < 0 || compareDay(day, maxDate) > 0) {
        return 'disabled';
      }

      if (type === 'single') {
        return compareDay(day, currentDate) === 0 ? 'selected' : '';
      }

      if (type === 'multiple') {
        return this.getMultipleDayType(day);
      }
      /* istanbul ignore else */


      if (type === 'range') {
        return this.getRangeDayType(day);
      }
    },
    getBottomInfo: function getBottomInfo(type) {
      if (this.type === 'range') {
        if (type === 'start') {
          return utils_t('start');
        }

        if (type === 'end') {
          return utils_t('end');
        }
      }
    },
    getDayStyle: function getDayStyle(type, index) {
      var style = {};

      if (index === 0) {
        style.marginLeft = 100 * this.offset / 7 + "%";
      }

      if (this.rowHeight !== ROW_HEIGHT) {
        style.height = this.rowHeight + "px";
      }

      if (this.color) {
        if (type === 'start' || type === 'end') {
          style.background = this.color;
        } else if (type === 'middle') {
          style.color = this.color;
        }
      }

      return style;
    },
    genTitle: function genTitle() {
      var h = this.$createElement;

      if (this.showTitle) {
        return h("div", {
          "class": utils_bem('month-title')
        }, [this.title]);
      }
    },
    genMark: function genMark() {
      var h = this.$createElement;

      if (this.showMark) {
        return h("div", {
          "class": utils_bem('month-mark')
        }, [this.date.getMonth() + 1]);
      }
    },
    genDays: function genDays() {
      var h = this.$createElement;

      if (this.visible) {
        return h("div", {
          "ref": "days",
          "attrs": {
            "role": "grid"
          },
          "class": utils_bem('days')
        }, [this.genMark(), this.days.map(this.genDay)]);
      }

      return h("div", {
        "ref": "days"
      });
    },
    genDay: function genDay(item, index) {
      var _this2 = this;

      var h = this.$createElement;
      var type = item.type,
          topInfo = item.topInfo,
          bottomInfo = item.bottomInfo;
      var style = this.getDayStyle(type, index);
      var disabled = type === 'disabled';

      var onClick = function onClick() {
        if (!disabled) {
          _this2.$emit('click', item);
        }
      };

      var TopInfo = topInfo && h("div", {
        "class": utils_bem('top-info')
      }, [topInfo]);
      var BottomInfo = bottomInfo && h("div", {
        "class": utils_bem('bottom-info')
      }, [bottomInfo]);

      if (type === 'selected') {
        return h("div", {
          "attrs": {
            "role": "gridcell",
            "tabindex": disabled ? null : -1
          },
          "style": style,
          "class": [utils_bem('day'), item.className],
          "on": {
            "click": onClick
          }
        }, [h("div", {
          "class": utils_bem('selected-day'),
          "style": {
            background: this.color
          }
        }, [TopInfo, item.text, BottomInfo])]);
      }

      return h("div", {
        "attrs": {
          "role": "gridcell",
          "tabindex": disabled ? null : -1
        },
        "style": style,
        "class": [utils_bem('day', type), item.className],
        "on": {
          "click": onClick
        }
      }, [TopInfo, item.text, BottomInfo]);
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": utils_bem('month'),
      "style": this.monthStyle
    }, [this.genTitle(), this.genDays()]);
  }
}));
// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/calendar/components/Header.js



var Header_createNamespace = Object(create["a" /* createNamespace */])('calendar-header'),
    Header_createComponent = Header_createNamespace[0];

/* harmony default export */ var components_Header = (Header_createComponent({
  props: {
    title: String,
    monthTitle: String
  },
  methods: {
    genTitle: function genTitle() {
      var h = this.$createElement;
      var title = this.slots('title') || this.title || utils_t('title');
      return h("div", {
        "class": utils_bem('header-title')
      }, [title]);
    },
    genMonth: function genMonth() {
      var h = this.$createElement;
      return h("div", {
        "class": utils_bem('month-title')
      }, [this.monthTitle]);
    },
    genWeekDays: function genWeekDays() {
      var h = this.$createElement;
      var weekdays = utils_t('weekdays');
      return h("div", {
        "class": utils_bem('weekdays')
      }, [weekdays.map(function (item) {
        return h("span", {
          "class": utils_bem('weekday')
        }, [item]);
      })]);
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": utils_bem('header')
    }, [this.genTitle(), this.genMonth(), this.genWeekDays()]);
  }
}));
// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/calendar/index.js
// Utils


 // Components






/* harmony default export */ var es_calendar = (utils_createComponent({
  props: {
    title: String,
    color: String,
    value: Boolean,
    formatter: Function,
    confirmText: String,
    rangePrompt: String,
    defaultDate: [Date, Array],
    getContainer: [String, Function],
    closeOnPopstate: Boolean,
    confirmDisabledText: String,
    type: {
      type: String,
      default: 'single'
    },
    minDate: {
      type: Date,
      validator: isDate,
      default: function _default() {
        return new Date();
      }
    },
    maxDate: {
      type: Date,
      validator: isDate,
      default: function _default() {
        var now = new Date();
        return new Date(now.getFullYear(), now.getMonth() + 6, now.getDate());
      }
    },
    position: {
      type: String,
      default: 'bottom'
    },
    rowHeight: {
      type: [Number, String],
      default: ROW_HEIGHT
    },
    round: {
      type: Boolean,
      default: true
    },
    poppable: {
      type: Boolean,
      default: true
    },
    showMark: {
      type: Boolean,
      default: true
    },
    showConfirm: {
      type: Boolean,
      default: true
    },
    safeAreaInsetBottom: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    maxRange: {
      type: [Number, String],
      default: null
    }
  },
  data: function data() {
    return {
      monthTitle: '',
      currentDate: this.getInitialDate()
    };
  },
  computed: {
    months: function months() {
      var months = [];
      var cursor = new Date(this.minDate);
      cursor.setDate(1);

      do {
        months.push(new Date(cursor));
        cursor.setMonth(cursor.getMonth() + 1);
      } while (compareMonth(cursor, this.maxDate) !== 1);

      return months;
    },
    buttonDisabled: function buttonDisabled() {
      var type = this.type,
          currentDate = this.currentDate;

      if (type === 'range') {
        return !currentDate[0] || !currentDate[1];
      }

      if (type === 'multiple') {
        return !currentDate.length;
      }

      return !currentDate;
    }
  },
  watch: {
    type: 'reset',
    value: function value(val) {
      if (val) {
        this.initRect();
        this.scrollIntoView();
      }
    },
    defaultDate: function defaultDate(val) {
      this.currentDate = val;
      this.scrollIntoView();
    }
  },
  mounted: function mounted() {
    if (this.value || !this.poppable) {
      this.initRect();
      this.scrollIntoView();
    }
  },
  methods: {
    // @exposed-api
    reset: function reset() {
      this.currentDate = this.getInitialDate();
      this.scrollIntoView();
    },
    initRect: function initRect() {
      var _this = this;

      this.$nextTick(function () {
        // add Math.floor to avoid decimal height issues
        // https://github.com/youzan/vant/issues/5640
        _this.bodyHeight = Math.floor(_this.$refs.body.getBoundingClientRect().height);

        _this.onScroll();
      });
    },
    // scroll to current month
    scrollIntoView: function scrollIntoView() {
      var _this2 = this;

      this.$nextTick(function () {
        var currentDate = _this2.currentDate;
        var targetDate = _this2.type === 'single' ? currentDate : currentDate[0];
        var displayed = _this2.value || !_this2.poppable;
        /* istanbul ignore if */

        if (!targetDate || !displayed) {
          return;
        }

        _this2.months.some(function (month, index) {
          if (compareMonth(month, targetDate) === 0) {
            _this2.$refs.months[index].scrollIntoView();

            return true;
          }

          return false;
        });
      });
    },
    getInitialDate: function getInitialDate() {
      var type = this.type,
          defaultDate = this.defaultDate,
          minDate = this.minDate;

      if (type === 'range') {
        var _ref = defaultDate || [],
            startDay = _ref[0],
            endDay = _ref[1];

        return [startDay || minDate, endDay || getNextDay(minDate)];
      }

      if (type === 'multiple') {
        return [defaultDate || minDate];
      }

      return defaultDate || minDate;
    },
    // calculate the position of the elements
    // and find the elements that needs to be rendered
    onScroll: function onScroll() {
      var _this$$refs = this.$refs,
          body = _this$$refs.body,
          months = _this$$refs.months;
      var top = Object(dom_scroll["c" /* getScrollTop */])(body);
      var bottom = top + this.bodyHeight;
      var heights = months.map(function (item) {
        return item.height;
      });
      var heightSum = heights.reduce(function (a, b) {
        return a + b;
      }, 0); // iOS scroll bounce may exceed the range

      /* istanbul ignore next */

      if (top < 0 || bottom > heightSum && top > 0) {
        return;
      }

      var height = 0;
      var currentMonth;

      for (var i = 0; i < months.length; i++) {
        var visible = height <= bottom && height + heights[i] >= top;

        if (visible && !currentMonth) {
          currentMonth = months[i];
        }

        months[i].visible = visible;
        height += heights[i];
      }
      /* istanbul ignore else */


      if (currentMonth) {
        this.monthTitle = currentMonth.title;
      }
    },
    onClickDay: function onClickDay(item) {
      var date = item.date;
      var type = this.type,
          currentDate = this.currentDate;

      if (type === 'range') {
        var startDay = currentDate[0],
            endDay = currentDate[1];

        if (startDay && !endDay) {
          var compareToStart = compareDay(date, startDay);

          if (compareToStart === 1) {
            this.select([startDay, date], true);
          } else if (compareToStart === -1) {
            this.select([date, null]);
          }
        } else {
          this.select([date, null]);
        }
      } else if (type === 'multiple') {
        var selectedIndex;
        var selected = this.currentDate.some(function (dateItem, index) {
          var equal = compareDay(dateItem, date) === 0;

          if (equal) {
            selectedIndex = index;
          }

          return equal;
        });

        if (selected) {
          currentDate.splice(selectedIndex, 1);
        } else {
          this.select([].concat(currentDate, [date]));
        }
      } else {
        this.select(date, true);
      }
    },
    togglePopup: function togglePopup(val) {
      this.$emit('input', val);
    },
    select: function select(date, complete) {
      this.currentDate = date;
      this.$emit('select', copyDates(this.currentDate));

      if (complete && this.type === 'range') {
        var valid = this.checkRange();

        if (!valid) {
          return;
        }
      }

      if (complete && !this.showConfirm) {
        this.onConfirm();
      }
    },
    checkRange: function checkRange() {
      var maxRange = this.maxRange,
          currentDate = this.currentDate,
          rangePrompt = this.rangePrompt;

      if (maxRange && calcDateNum(currentDate) > maxRange) {
        Object(es_toast["a" /* default */])(rangePrompt || utils_t('rangePrompt', maxRange));
        return false;
      }

      return true;
    },
    onConfirm: function onConfirm() {
      if (this.type === 'range' && !this.checkRange()) {
        return;
      }

      this.$emit('confirm', copyDates(this.currentDate));
    },
    genMonth: function genMonth(date, index) {
      var h = this.$createElement;
      return h(Month, {
        "ref": "months",
        "refInFor": true,
        "attrs": {
          "date": date,
          "type": this.type,
          "color": this.color,
          "minDate": this.minDate,
          "maxDate": this.maxDate,
          "showMark": this.showMark,
          "formatter": this.formatter,
          "rowHeight": this.rowHeight,
          "showTitle": index !== 0,
          "currentDate": this.currentDate
        },
        "on": {
          "click": this.onClickDay
        }
      });
    },
    genFooterContent: function genFooterContent() {
      var h = this.$createElement;
      var slot = this.slots('footer');

      if (slot) {
        return slot;
      }

      if (this.showConfirm) {
        var text = this.buttonDisabled ? this.confirmDisabledText : this.confirmText;
        return h(_vant_2_5_4_vant_es_button["a" /* default */], {
          "attrs": {
            "round": true,
            "block": true,
            "type": "danger",
            "color": this.color,
            "disabled": this.buttonDisabled,
            "nativeType": "text"
          },
          "class": utils_bem('confirm'),
          "on": {
            "click": this.onConfirm
          }
        }, [text || utils_t('confirm')]);
      }
    },
    genFooter: function genFooter() {
      var h = this.$createElement;
      return h("div", {
        "class": utils_bem('footer', {
          'safe-area-inset-bottom': this.safeAreaInsetBottom
        })
      }, [this.genFooterContent()]);
    },
    genCalendar: function genCalendar() {
      var _this3 = this;

      var h = this.$createElement;
      return h("div", {
        "class": utils_bem()
      }, [h(components_Header, {
        "attrs": {
          "title": this.title,
          "monthTitle": this.monthTitle
        },
        "scopedSlots": {
          title: function title() {
            return _this3.slots('title');
          }
        }
      }), h("div", {
        "ref": "body",
        "class": utils_bem('body'),
        "on": {
          "scroll": this.onScroll
        }
      }, [this.months.map(this.genMonth)]), this.genFooter()]);
    }
  },
  render: function render() {
    var _this4 = this;

    var h = arguments[0];

    if (this.poppable) {
      var _attrs;

      var createListener = function createListener(name) {
        return function () {
          return _this4.$emit(name);
        };
      };

      return h(es_popup, {
        "attrs": (_attrs = {
          "round": true,
          "closeable": true,
          "value": this.value
        }, _attrs["round"] = this.round, _attrs["position"] = this.position, _attrs["getContainer"] = this.getContainer, _attrs["closeOnPopstate"] = this.closeOnPopstate, _attrs["closeOnClickOverlay"] = this.closeOnClickOverlay, _attrs),
        "class": utils_bem('popup'),
        "on": {
          "input": this.togglePopup,
          "open": createListener('open'),
          "opened": createListener('opened'),
          "close": createListener('close'),
          "closed": createListener('closed')
        }
      }, [this.genCalendar()]);
    }

    return this.genCalendar();
  }
}));
// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/overlay/style/index.js


// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/overlay/index.js
var es_overlay = __webpack_require__("9586");

// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/goods-action/index.css
var goods_action = __webpack_require__("c3a0");

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/goods-action/style/index.js


// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/mixins/relation.js


function flattenVNodes(vnodes) {
  var result = [];

  function traverse(vnodes) {
    vnodes.forEach(function (vnode) {
      result.push(vnode);

      if (vnode.children) {
        traverse(vnode.children);
      }
    });
  }

  traverse(vnodes);
  return result;
}

function ChildrenMixin(_parent, options) {
  var _inject, _computed;

  if (options === void 0) {
    options = {};
  }

  var indexKey = options.indexKey || 'index';
  return external_Vue_default.a.extend({
    inject: (_inject = {}, _inject[_parent] = {
      default: null
    }, _inject),
    computed: (_computed = {
      parent: function parent() {
        if (this.disableBindRelation) {
          return null;
        }

        return this[_parent];
      }
    }, _computed[indexKey] = function () {
      this.bindRelation();
      return this.parent.children.indexOf(this);
    }, _computed),
    mounted: function mounted() {
      this.bindRelation();
    },
    beforeDestroy: function beforeDestroy() {
      var _this = this;

      if (this.parent) {
        this.parent.children = this.parent.children.filter(function (item) {
          return item !== _this;
        });
      }
    },
    methods: {
      bindRelation: function bindRelation() {
        if (!this.parent || this.parent.children.indexOf(this) !== -1) {
          return;
        }

        var children = [].concat(this.parent.children, [this]);
        var vnodes = flattenVNodes(this.parent.slots());
        children.sort(function (a, b) {
          return vnodes.indexOf(a.$vnode) - vnodes.indexOf(b.$vnode);
        });
        this.parent.children = children;
      }
    }
  });
}
function ParentMixin(parent) {
  return {
    provide: function provide() {
      var _ref;

      return _ref = {}, _ref[parent] = this, _ref;
    },
    data: function data() {
      return {
        children: []
      };
    }
  };
}
// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/goods-action/index.js



var goods_action_createNamespace = Object(create["a" /* createNamespace */])('goods-action'),
    goods_action_createComponent = goods_action_createNamespace[0],
    goods_action_bem = goods_action_createNamespace[1];

/* harmony default export */ var es_goods_action = (goods_action_createComponent({
  mixins: [ParentMixin('vanGoodsAction')],
  props: {
    safeAreaInsetBottom: Boolean
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": goods_action_bem({
        'safe-area-inset-bottom': this.safeAreaInsetBottom
      })
    }, [this.slots()]);
  }
}));
// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/goods-action-icon/index.css
var goods_action_icon = __webpack_require__("466e");

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/goods-action-icon/style/index.js




// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/goods-action-icon/index.js






var goods_action_icon_createNamespace = Object(create["a" /* createNamespace */])('goods-action-icon'),
    goods_action_icon_createComponent = goods_action_icon_createNamespace[0],
    goods_action_icon_bem = goods_action_icon_createNamespace[1];

/* harmony default export */ var es_goods_action_icon = (goods_action_icon_createComponent({
  mixins: [ChildrenMixin('vanGoodsAction')],
  props: Object(esm_extends["a" /* default */])({}, utils_router["c" /* routeProps */], {
    text: String,
    icon: String,
    color: String,
    info: [Number, String],
    iconClass: null
  }),
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
      Object(utils_router["b" /* route */])(this.$router, this);
    },
    genIcon: function genIcon() {
      var h = this.$createElement;
      var slot = this.slots('icon');

      if (slot) {
        return h("div", {
          "class": goods_action_icon_bem('icon')
        }, [slot]);
      }

      return h(_vant_2_5_4_vant_es_icon["a" /* default */], {
        "class": [goods_action_icon_bem('icon'), this.iconClass],
        "attrs": {
          "tag": "div",
          "info": this.info,
          "name": this.icon,
          "color": this.color
        }
      });
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "attrs": {
        "role": "button",
        "tabindex": "0"
      },
      "class": goods_action_icon_bem(),
      "on": {
        "click": this.onClick
      }
    }, [this.genIcon(), this.slots() || this.text]);
  }
}));
// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/goods-action-button/index.css
var goods_action_button = __webpack_require__("e940");

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/goods-action-button/style/index.js






// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/goods-action-button/index.js






var goods_action_button_createNamespace = Object(create["a" /* createNamespace */])('goods-action-button'),
    goods_action_button_createComponent = goods_action_button_createNamespace[0],
    goods_action_button_bem = goods_action_button_createNamespace[1];

/* harmony default export */ var es_goods_action_button = (goods_action_button_createComponent({
  mixins: [ChildrenMixin('vanGoodsAction')],
  props: Object(esm_extends["a" /* default */])({}, utils_router["c" /* routeProps */], {
    type: String,
    text: String,
    icon: String,
    color: String,
    loading: Boolean,
    disabled: Boolean
  }),
  computed: {
    isFirst: function isFirst() {
      var prev = this.parent && this.parent.children[this.index - 1];
      return !prev || prev.$options.name !== this.$options.name;
    },
    isLast: function isLast() {
      var next = this.parent && this.parent.children[this.index + 1];
      return !next || next.$options.name !== this.$options.name;
    }
  },
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
      Object(utils_router["b" /* route */])(this.$router, this);
    }
  },
  render: function render() {
    var h = arguments[0];
    return h(_vant_2_5_4_vant_es_button["a" /* default */], {
      "class": goods_action_button_bem([{
        first: this.isFirst,
        last: this.isLast
      }, this.type]),
      "attrs": {
        "square": true,
        "size": "large",
        "type": this.type,
        "icon": this.icon,
        "color": this.color,
        "loading": this.loading,
        "disabled": this.disabled
      },
      "on": {
        "click": this.onClick
      }
    }, [this.slots() || this.text]);
  }
}));
// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/sidebar-item/index.css
var sidebar_item = __webpack_require__("59ba");

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/sidebar-item/style/index.js



// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/info/index.js
var es_info = __webpack_require__("48d4");

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/sidebar-item/index.js






var sidebar_item_createNamespace = Object(create["a" /* createNamespace */])('sidebar-item'),
    sidebar_item_createComponent = sidebar_item_createNamespace[0],
    sidebar_item_bem = sidebar_item_createNamespace[1];

/* harmony default export */ var es_sidebar_item = (sidebar_item_createComponent({
  mixins: [ChildrenMixin('vanSidebar')],
  props: Object(esm_extends["a" /* default */])({}, utils_router["c" /* routeProps */], {
    dot: Boolean,
    info: [Number, String],
    title: String,
    disabled: Boolean
  }),
  computed: {
    select: function select() {
      return this.index === +this.parent.activeKey;
    }
  },
  methods: {
    onClick: function onClick() {
      if (this.disabled) {
        return;
      }

      this.$emit('click', this.index);
      this.parent.$emit('input', this.index);
      this.parent.$emit('change', this.index);
      Object(utils_router["b" /* route */])(this.$router, this);
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("a", {
      "class": sidebar_item_bem({
        select: this.select,
        disabled: this.disabled
      }),
      "on": {
        "click": this.onClick
      }
    }, [h("div", {
      "class": sidebar_item_bem('text')
    }, [this.title, h(es_info["a" /* default */], {
      "attrs": {
        "dot": this.dot,
        "info": this.info
      },
      "class": sidebar_item_bem('info')
    })])]);
  }
}));
// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/sidebar/index.css
var sidebar = __webpack_require__("dcfc");

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/sidebar/style/index.js


// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/sidebar/index.js



var sidebar_createNamespace = Object(create["a" /* createNamespace */])('sidebar'),
    sidebar_createComponent = sidebar_createNamespace[0],
    sidebar_bem = sidebar_createNamespace[1];

/* harmony default export */ var es_sidebar = (sidebar_createComponent({
  mixins: [ParentMixin('vanSidebar')],
  model: {
    prop: 'activeKey'
  },
  props: {
    activeKey: {
      type: [Number, String],
      default: 0
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": sidebar_bem()
    }, [this.slots()]);
  }
}));
// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/sticky/index.css
var sticky = __webpack_require__("ca00");

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/sticky/style/index.js


// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/sticky/index.js




var sticky_createNamespace = Object(create["a" /* createNamespace */])('sticky'),
    sticky_createComponent = sticky_createNamespace[0],
    sticky_bem = sticky_createNamespace[1];

/* harmony default export */ var es_sticky = (sticky_createComponent({
  mixins: [Object(bind_event["a" /* BindEventMixin */])(function (bind) {
    if (!this.scroller) {
      this.scroller = Object(dom_scroll["d" /* getScroller */])(this.$el);
    }

    bind(this.scroller, 'scroll', this.onScroll, true);
    this.onScroll();
  })],
  props: {
    zIndex: [Number, String],
    container: null,
    offsetTop: {
      type: [Number, String],
      default: 0
    }
  },
  data: function data() {
    return {
      fixed: false,
      height: 0,
      transform: 0
    };
  },
  computed: {
    style: function style() {
      if (!this.fixed) {
        return;
      }

      var style = {};

      if (Object(utils["b" /* isDef */])(this.zIndex)) {
        style.zIndex = this.zIndex;
      }

      if (this.offsetTop && this.fixed) {
        style.top = this.offsetTop + "px";
      }

      if (this.transform) {
        style.transform = "translate3d(0, " + this.transform + "px, 0)";
      }

      return style;
    }
  },
  methods: {
    onScroll: function onScroll() {
      var _this = this;

      this.height = this.$el.offsetHeight;
      var container = this.container;
      var offsetTop = +this.offsetTop;
      var scrollTop = Object(dom_scroll["c" /* getScrollTop */])(window);
      var topToPageTop = Object(dom_scroll["a" /* getElementTop */])(this.$el);

      var emitScrollEvent = function emitScrollEvent() {
        _this.$emit('scroll', {
          scrollTop: scrollTop,
          isFixed: _this.fixed
        });
      }; // The sticky component should be kept inside the container element


      if (container) {
        var bottomToPageTop = topToPageTop + container.offsetHeight;

        if (scrollTop + offsetTop + this.height > bottomToPageTop) {
          var distanceToBottom = this.height + scrollTop - bottomToPageTop;

          if (distanceToBottom < this.height) {
            this.fixed = true;
            this.transform = -(distanceToBottom + offsetTop);
          } else {
            this.fixed = false;
          }

          emitScrollEvent();
          return;
        }
      }

      if (scrollTop + offsetTop > topToPageTop) {
        this.fixed = true;
        this.transform = 0;
      } else {
        this.fixed = false;
      }

      emitScrollEvent();
    }
  },
  render: function render() {
    var h = arguments[0];
    var fixed = this.fixed;
    var style = {
      height: fixed ? this.height + "px" : null
    };
    return h("div", {
      "style": style
    }, [h("div", {
      "class": sticky_bem({
        fixed: fixed
      }),
      "style": this.style
    }, [this.slots()])]);
  }
}));
// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/coupon/index.css
var es_coupon = __webpack_require__("c7cb");

// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/coupon-cell/index.css
var coupon_cell = __webpack_require__("12f8");

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/coupon-cell/style/index.js






// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/coupon-cell/index.js

// Utils

 // Components

 // Types

var coupon_cell_createNamespace = Object(create["a" /* createNamespace */])('coupon-cell'),
    coupon_cell_createComponent = coupon_cell_createNamespace[0],
    coupon_cell_bem = coupon_cell_createNamespace[1],
    coupon_cell_t = coupon_cell_createNamespace[2];

function coupon_cell_formatValue(props) {
  var coupons = props.coupons,
      chosenCoupon = props.chosenCoupon,
      currency = props.currency;
  var coupon = coupons[+chosenCoupon];

  if (coupon) {
    var value = coupon.value || coupon.denominations || 0;
    return "-" + currency + (value / 100).toFixed(2);
  }

  return coupons.length === 0 ? coupon_cell_t('tips') : coupon_cell_t('count', coupons.length);
}

function CouponCell(h, props, slots, ctx) {
  var valueClass = props.coupons[+props.chosenCoupon] ? 'van-coupon-cell--selected' : '';
  var value = coupon_cell_formatValue(props);
  return h(es_cell, helper_default()([{
    "class": coupon_cell_bem(),
    "attrs": {
      "value": value,
      "title": props.title || coupon_cell_t('title'),
      "border": props.border,
      "isLink": props.editable,
      "valueClass": valueClass
    }
  }, Object(functional["b" /* inherit */])(ctx, true)]));
}

CouponCell.model = {
  prop: 'chosenCoupon'
};
CouponCell.props = {
  title: String,
  coupons: {
    type: Array,
    default: function _default() {
      return [];
    }
  },
  currency: {
    type: String,
    default: '¥'
  },
  border: {
    type: Boolean,
    default: true
  },
  editable: {
    type: Boolean,
    default: true
  },
  chosenCoupon: {
    type: [Number, String],
    default: -1
  }
};
/* harmony default export */ var es_coupon_cell = (coupon_cell_createComponent(CouponCell));
// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/checkbox/index.css
var es_checkbox = __webpack_require__("b207");

// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/tab/index.css
var tab = __webpack_require__("9e64");

// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/tabs/index.css
var tabs = __webpack_require__("94c8");

// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/coupon-list/index.css
var coupon_list = __webpack_require__("adc2");

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/coupon-list/style/index.js













// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/tab/index.js





var tab_createNamespace = Object(create["a" /* createNamespace */])('tab'),
    tab_createComponent = tab_createNamespace[0],
    tab_bem = tab_createNamespace[1];

/* harmony default export */ var es_tab = (tab_createComponent({
  mixins: [ChildrenMixin('vanTabs')],
  props: Object(esm_extends["a" /* default */])({}, utils_router["c" /* routeProps */], {
    dot: Boolean,
    info: [Number, String],
    name: [Number, String],
    title: String,
    titleStyle: null,
    disabled: Boolean
  }),
  data: function data() {
    return {
      inited: false
    };
  },
  computed: {
    computedName: function computedName() {
      return Object(utils["b" /* isDef */])(this.name) ? this.name : this.index;
    },
    isActive: function isActive() {
      return this.computedName === this.parent.currentName;
    }
  },
  watch: {
    // eslint-disable-next-line object-shorthand
    'parent.currentIndex': function parentCurrentIndex() {
      this.inited = this.inited || this.isActive;
    },
    title: function title() {
      this.parent.setLine();
    },
    inited: function inited(val) {
      var _this = this;

      if (this.parent.lazyRender && val) {
        this.$nextTick(function () {
          _this.parent.$emit('rendered', _this.computedName, _this.title);
        });
      }
    }
  },
  render: function render(h) {
    var slots = this.slots,
        parent = this.parent,
        isActive = this.isActive;
    var shouldRender = this.inited || parent.scrollspy || !parent.lazyRender;
    var show = parent.scrollspy || isActive;
    var Content = shouldRender ? slots() : h();

    if (parent.animated) {
      return h("div", {
        "attrs": {
          "role": "tabpanel",
          "aria-hidden": !isActive
        },
        "class": tab_bem('pane-wrapper', {
          inactive: !isActive
        })
      }, [h("div", {
        "class": tab_bem('pane')
      }, [Content])]);
    }

    return h("div", {
      "directives": [{
        name: "show",
        value: show
      }],
      "attrs": {
        "role": "tabpanel"
      },
      "class": tab_bem('pane')
    }, [Content]);
  }
}));
// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/tabs/utils.js


var scrollLeftRafId;
function scrollLeftTo(scroller, to, duration) {
  Object(raf["a" /* cancelRaf */])(scrollLeftRafId);
  var count = 0;
  var from = scroller.scrollLeft;
  var frames = duration === 0 ? 1 : Math.round(duration * 1000 / 16);

  function animate() {
    scroller.scrollLeft += (to - from) / frames;

    if (++count < frames) {
      scrollLeftRafId = Object(raf["c" /* raf */])(animate);
    }
  }

  animate();
}
function scrollTopTo(scroller, to, duration, callback) {
  var current = Object(dom_scroll["c" /* getScrollTop */])(scroller);
  var isDown = current < to;
  var frames = duration === 0 ? 1 : Math.round(duration * 1000 / 16);
  var step = (to - current) / frames;

  function animate() {
    current += step;

    if (isDown && current > to || !isDown && current < to) {
      current = to;
    }

    Object(dom_scroll["h" /* setScrollTop */])(scroller, current);

    if (isDown && current < to || !isDown && current > to) {
      Object(raf["c" /* raf */])(animate);
    } else if (callback) {
      Object(raf["c" /* raf */])(callback);
    }
  }

  animate();
}
// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/tabs/Title.js



var Title_createNamespace = Object(create["a" /* createNamespace */])('tab'),
    Title_createComponent = Title_createNamespace[0],
    Title_bem = Title_createNamespace[1];

/* harmony default export */ var tabs_Title = (Title_createComponent({
  props: {
    dot: Boolean,
    type: String,
    info: [Number, String],
    color: String,
    title: String,
    isActive: Boolean,
    ellipsis: Boolean,
    disabled: Boolean,
    scrollable: Boolean,
    activeColor: String,
    inactiveColor: String,
    swipeThreshold: [Number, String]
  },
  computed: {
    style: function style() {
      var style = {};
      var color = this.color,
          isActive = this.isActive;
      var isCard = this.type === 'card'; // card theme color

      if (color && isCard) {
        style.borderColor = color;

        if (!this.disabled) {
          if (isActive) {
            style.backgroundColor = color;
          } else {
            style.color = color;
          }
        }
      }

      var titleColor = isActive ? this.activeColor : this.inactiveColor;

      if (titleColor) {
        style.color = titleColor;
      }

      if (this.scrollable && this.ellipsis) {
        style.flexBasis = 88 / this.swipeThreshold + "%";
      }

      return style;
    }
  },
  methods: {
    onClick: function onClick() {
      this.$emit('click');
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "attrs": {
        "role": "tab",
        "aria-selected": this.isActive
      },
      "class": [Title_bem({
        active: this.isActive,
        disabled: this.disabled,
        complete: !this.ellipsis
      }), {
        'van-ellipsis': this.ellipsis
      }],
      "style": this.style,
      "on": {
        "click": this.onClick
      }
    }, [h("span", {
      "class": Title_bem('text')
    }, [this.slots() || this.title, h(es_info["a" /* default */], {
      "attrs": {
        "dot": this.dot,
        "info": this.info
      }
    })])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/tabs/Content.js




var Content_createNamespace = Object(create["a" /* createNamespace */])('tabs'),
    Content_createComponent = Content_createNamespace[0],
    Content_bem = Content_createNamespace[1];

var MIN_SWIPE_DISTANCE = 50;
/* harmony default export */ var tabs_Content = (Content_createComponent({
  mixins: [touch["a" /* TouchMixin */]],
  props: {
    count: Number,
    duration: [Number, String],
    animated: Boolean,
    swipeable: Boolean,
    currentIndex: Number
  },
  computed: {
    style: function style() {
      if (this.animated) {
        return {
          transform: "translate3d(" + -1 * this.currentIndex * 100 + "%, 0, 0)",
          transitionDuration: this.duration + "s"
        };
      }
    },
    listeners: function listeners() {
      if (this.swipeable) {
        return {
          touchstart: this.touchStart,
          touchmove: this.touchMove,
          touchend: this.onTouchEnd,
          touchcancel: this.onTouchEnd
        };
      }
    }
  },
  methods: {
    // watch swipe touch end
    onTouchEnd: function onTouchEnd() {
      var direction = this.direction,
          deltaX = this.deltaX,
          currentIndex = this.currentIndex;
      /* istanbul ignore else */

      if (direction === 'horizontal' && this.offsetX >= MIN_SWIPE_DISTANCE) {
        /* istanbul ignore else */
        if (deltaX > 0 && currentIndex !== 0) {
          this.$emit('change', currentIndex - 1);
        } else if (deltaX < 0 && currentIndex !== this.count - 1) {
          this.$emit('change', currentIndex + 1);
        }
      }
    },
    genChildren: function genChildren() {
      var h = this.$createElement;

      if (this.animated) {
        return h("div", {
          "class": Content_bem('track'),
          "style": this.style
        }, [this.slots()]);
      }

      return this.slots();
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": Content_bem('content', {
        animated: this.animated
      }),
      "on": Object(esm_extends["a" /* default */])({}, this.listeners)
    }, [this.genChildren()]);
  }
}));
// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/tabs/index.js
// Utils






 // Mixins


 // Components





var tabs_createNamespace = Object(create["a" /* createNamespace */])('tabs'),
    tabs_createComponent = tabs_createNamespace[0],
    tabs_bem = tabs_createNamespace[1];

/* harmony default export */ var es_tabs = (tabs_createComponent({
  mixins: [ParentMixin('vanTabs'), Object(bind_event["a" /* BindEventMixin */])(function (bind) {
    if (!this.scroller) {
      this.scroller = Object(dom_scroll["d" /* getScroller */])(this.$el);
    }

    bind(window, 'resize', this.resize, true);

    if (this.scrollspy) {
      bind(this.scroller, 'scroll', this.onScroll, true);
    }
  })],
  model: {
    prop: 'active'
  },
  props: {
    color: String,
    sticky: Boolean,
    animated: Boolean,
    swipeable: Boolean,
    scrollspy: Boolean,
    background: String,
    lineWidth: [Number, String],
    lineHeight: [Number, String],
    titleActiveColor: String,
    titleInactiveColor: String,
    type: {
      type: String,
      default: 'line'
    },
    active: {
      type: [Number, String],
      default: 0
    },
    border: {
      type: Boolean,
      default: true
    },
    ellipsis: {
      type: Boolean,
      default: true
    },
    duration: {
      type: [Number, String],
      default: 0.3
    },
    offsetTop: {
      type: [Number, String],
      default: 0
    },
    lazyRender: {
      type: Boolean,
      default: true
    },
    swipeThreshold: {
      type: [Number, String],
      default: 4
    }
  },
  data: function data() {
    return {
      position: '',
      currentIndex: null,
      lineStyle: {
        backgroundColor: this.color
      }
    };
  },
  computed: {
    // whether the nav is scrollable
    scrollable: function scrollable() {
      return this.children.length > this.swipeThreshold || !this.ellipsis;
    },
    navStyle: function navStyle() {
      return {
        borderColor: this.color,
        background: this.background
      };
    },
    currentName: function currentName() {
      var activeTab = this.children[this.currentIndex];

      if (activeTab) {
        return activeTab.computedName;
      }
    },
    scrollOffset: function scrollOffset() {
      if (this.sticky) {
        return +this.offsetTop + this.tabHeight;
      }

      return 0;
    }
  },
  watch: {
    color: 'setLine',
    active: function active(name) {
      if (name !== this.currentName) {
        this.setCurrentIndexByName(name);
      }
    },
    children: function children() {
      var _this = this;

      this.setCurrentIndexByName(this.currentName || this.active);
      this.setLine();
      this.$nextTick(function () {
        _this.scrollIntoView(true);
      });
    },
    currentIndex: function currentIndex() {
      this.scrollIntoView();
      this.setLine(); // scroll to correct position

      if (this.stickyFixed && !this.scrollspy) {
        Object(dom_scroll["g" /* setRootScrollTop */])(Math.ceil(Object(dom_scroll["a" /* getElementTop */])(this.$el) - this.offsetTop));
      }
    },
    scrollspy: function scrollspy(val) {
      if (val) {
        Object(dom_event["b" /* on */])(this.scroller, 'scroll', this.onScroll, true);
      } else {
        Object(dom_event["a" /* off */])(this.scroller, 'scroll', this.onScroll);
      }
    }
  },
  mounted: function mounted() {
    this.onShow();
  },
  activated: function activated() {
    this.onShow();
    this.setLine();
  },
  methods: {
    // @exposed-api
    resize: function resize() {
      this.setLine();
    },
    onShow: function onShow() {
      var _this2 = this;

      this.$nextTick(function () {
        _this2.inited = true;
        _this2.tabHeight = Object(dom_scroll["e" /* getVisibleHeight */])(_this2.$refs.wrap);

        _this2.scrollIntoView(true);
      });
    },
    // update nav bar style
    setLine: function setLine() {
      var _this3 = this;

      var shouldAnimate = this.inited;
      this.$nextTick(function () {
        var titles = _this3.$refs.titles;

        if (!titles || !titles[_this3.currentIndex] || _this3.type !== 'line' || isHidden(_this3.$el)) {
          return;
        }

        var title = titles[_this3.currentIndex].$el;
        var lineWidth = _this3.lineWidth,
            lineHeight = _this3.lineHeight;
        var width = Object(utils["b" /* isDef */])(lineWidth) ? lineWidth : title.offsetWidth / 2;
        var left = title.offsetLeft + title.offsetWidth / 2;
        var lineStyle = {
          width: Object(unit["a" /* addUnit */])(width),
          backgroundColor: _this3.color,
          transform: "translateX(" + left + "px) translateX(-50%)"
        };

        if (shouldAnimate) {
          lineStyle.transitionDuration = _this3.duration + "s";
        }

        if (Object(utils["b" /* isDef */])(lineHeight)) {
          var height = Object(unit["a" /* addUnit */])(lineHeight);
          lineStyle.height = height;
          lineStyle.borderRadius = height;
        }

        _this3.lineStyle = lineStyle;
      });
    },
    // correct the index of active tab
    setCurrentIndexByName: function setCurrentIndexByName(name) {
      var matched = this.children.filter(function (tab) {
        return tab.computedName === name;
      });
      var defaultIndex = (this.children[0] || {}).index || 0;
      this.setCurrentIndex(matched.length ? matched[0].index : defaultIndex);
    },
    setCurrentIndex: function setCurrentIndex(currentIndex) {
      currentIndex = this.findAvailableTab(currentIndex);

      if (Object(utils["b" /* isDef */])(currentIndex) && currentIndex !== this.currentIndex) {
        var shouldEmitChange = this.currentIndex !== null;
        this.currentIndex = currentIndex;
        this.$emit('input', this.currentName);

        if (shouldEmitChange) {
          this.$emit('change', this.currentName, this.children[currentIndex].title);
        }
      }
    },
    findAvailableTab: function findAvailableTab(index) {
      var diff = index < this.currentIndex ? -1 : 1;

      while (index >= 0 && index < this.children.length) {
        if (!this.children[index].disabled) {
          return index;
        }

        index += diff;
      }
    },
    // emit event when clicked
    onClick: function onClick(index) {
      var _this$children$index = this.children[index],
          title = _this$children$index.title,
          disabled = _this$children$index.disabled,
          computedName = _this$children$index.computedName;

      if (disabled) {
        this.$emit('disabled', computedName, title);
      } else {
        this.setCurrentIndex(index);
        this.scrollToCurrentContent();
        this.$emit('click', computedName, title);
      }
    },
    // scroll active tab into view
    scrollIntoView: function scrollIntoView(immediate) {
      var titles = this.$refs.titles;

      if (!this.scrollable || !titles || !titles[this.currentIndex]) {
        return;
      }

      var nav = this.$refs.nav;
      var title = titles[this.currentIndex].$el;
      var to = title.offsetLeft - (nav.offsetWidth - title.offsetWidth) / 2;
      scrollLeftTo(nav, to, immediate ? 0 : +this.duration);
    },
    onSticktScroll: function onSticktScroll(params) {
      this.stickyFixed = params.isFixed;
      this.$emit('scroll', params);
    },
    scrollToCurrentContent: function scrollToCurrentContent() {
      var _this4 = this;

      if (this.scrollspy) {
        var target = this.children[this.currentIndex];
        var el = target == null ? void 0 : target.$el;

        if (el) {
          var to = Object(dom_scroll["a" /* getElementTop */])(el, this.scroller) - this.scrollOffset;
          this.lockScroll = true;
          scrollTopTo(this.scroller, to, +this.duration, function () {
            _this4.lockScroll = false;
          });
        }
      }
    },
    onScroll: function onScroll() {
      if (this.scrollspy && !this.lockScroll) {
        var index = this.getCurrentIndexOnScroll();
        this.setCurrentIndex(index);
      }
    },
    getCurrentIndexOnScroll: function getCurrentIndexOnScroll() {
      var children = this.children;

      for (var index = 0; index < children.length; index++) {
        var top = Object(dom_scroll["f" /* getVisibleTop */])(children[index].$el);

        if (top > this.scrollOffset) {
          return index === 0 ? 0 : index - 1;
        }
      }

      return children.length - 1;
    }
  },
  render: function render() {
    var _this5 = this,
        _ref;

    var h = arguments[0];
    var type = this.type,
        ellipsis = this.ellipsis,
        animated = this.animated,
        scrollable = this.scrollable;
    var Nav = this.children.map(function (item, index) {
      return h(tabs_Title, {
        "ref": "titles",
        "refInFor": true,
        "attrs": {
          "type": type,
          "dot": item.dot,
          "info": item.info,
          "title": item.title,
          "color": _this5.color,
          "isActive": index === _this5.currentIndex,
          "ellipsis": ellipsis,
          "disabled": item.disabled,
          "scrollable": scrollable,
          "activeColor": _this5.titleActiveColor,
          "inactiveColor": _this5.titleInactiveColor,
          "swipeThreshold": _this5.swipeThreshold
        },
        "style": item.titleStyle,
        "scopedSlots": {
          default: function _default() {
            return item.slots('title');
          }
        },
        "on": {
          "click": function click() {
            _this5.onClick(index);

            Object(utils_router["b" /* route */])(item.$router, item);
          }
        }
      });
    });
    var Wrap = h("div", {
      "ref": "wrap",
      "class": [tabs_bem('wrap', {
        scrollable: scrollable
      }), (_ref = {}, _ref[constant["f" /* BORDER_TOP_BOTTOM */]] = type === 'line' && this.border, _ref)]
    }, [h("div", {
      "ref": "nav",
      "attrs": {
        "role": "tablist"
      },
      "class": tabs_bem('nav', [type]),
      "style": this.navStyle
    }, [this.slots('nav-left'), Nav, type === 'line' && h("div", {
      "class": tabs_bem('line'),
      "style": this.lineStyle
    }), this.slots('nav-right')])]);
    return h("div", {
      "class": tabs_bem([type])
    }, [this.sticky ? h(es_sticky, {
      "attrs": {
        "container": this.$el,
        "offsetTop": this.offsetTop
      },
      "on": {
        "scroll": this.onSticktScroll
      }
    }, [Wrap]) : Wrap, h(tabs_Content, {
      "attrs": {
        "count": this.children.length,
        "animated": animated,
        "duration": this.duration,
        "swipeable": this.swipeable,
        "currentIndex": this.currentIndex
      },
      "on": {
        "change": this.setCurrentIndex
      }
    }, [this.slots()])]);
  }
}));
// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/utils/format/string.js
var string = __webpack_require__("7813");

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/mixins/checkbox.js
/**
 * Common part of Checkbox & Radio
 */




var checkbox_CheckboxMixin = function CheckboxMixin(_ref) {
  var parent = _ref.parent,
      bem = _ref.bem,
      role = _ref.role;
  return {
    mixins: [ChildrenMixin(parent), FieldMixin],
    props: {
      name: null,
      value: null,
      disabled: Boolean,
      iconSize: [Number, String],
      checkedColor: String,
      labelPosition: String,
      labelDisabled: Boolean,
      shape: {
        type: String,
        default: 'round'
      },
      bindGroup: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      disableBindRelation: function disableBindRelation() {
        return !this.bindGroup;
      },
      isDisabled: function isDisabled() {
        return this.parent && this.parent.disabled || this.disabled;
      },
      direction: function direction() {
        return this.parent && this.parent.direction || null;
      },
      iconStyle: function iconStyle() {
        var checkedColor = this.checkedColor || this.parent && this.parent.checkedColor;

        if (checkedColor && this.checked && !this.isDisabled) {
          return {
            borderColor: checkedColor,
            backgroundColor: checkedColor
          };
        }
      },
      tabindex: function tabindex() {
        if (this.isDisabled || role === 'radio' && !this.checked) {
          return -1;
        }

        return 0;
      }
    },
    methods: {
      onClick: function onClick(event) {
        var target = event.target;
        var icon = this.$refs.icon;
        var iconClicked = icon === target || icon.contains(target);

        if (!this.isDisabled && (iconClicked || !this.labelDisabled)) {
          this.toggle();
        }

        this.$emit('click', event);
      },
      genIcon: function genIcon() {
        var h = this.$createElement;
        var checked = this.checked;
        var iconSize = this.iconSize || this.parent && this.parent.iconSize;
        return h("div", {
          "ref": "icon",
          "class": bem('icon', [this.shape, {
            disabled: this.isDisabled,
            checked: checked
          }]),
          "style": {
            fontSize: Object(unit["a" /* addUnit */])(iconSize)
          }
        }, [this.slots('icon', {
          checked: checked
        }) || h(_vant_2_5_4_vant_es_icon["a" /* default */], {
          "attrs": {
            "name": "success"
          },
          "style": this.iconStyle
        })]);
      },
      genLabel: function genLabel() {
        var h = this.$createElement;
        var slot = this.slots();

        if (slot) {
          return h("span", {
            "class": bem('label', [this.labelPosition, {
              disabled: this.isDisabled
            }])
          }, [slot]);
        }
      }
    },
    render: function render() {
      var h = arguments[0];
      var Children = [this.genIcon()];

      if (this.labelPosition === 'left') {
        Children.unshift(this.genLabel());
      } else {
        Children.push(this.genLabel());
      }

      return h("div", {
        "attrs": {
          "role": role,
          "tabindex": this.tabindex,
          "aria-checked": String(this.checked)
        },
        "class": bem([{
          disabled: this.isDisabled,
          'label-disabled': this.labelDisabled
        }, this.direction]),
        "on": {
          "click": this.onClick
        }
      }, [Children]);
    }
  };
};
// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/checkbox/index.js



var checkbox_createNamespace = Object(create["a" /* createNamespace */])('checkbox'),
    checkbox_createComponent = checkbox_createNamespace[0],
    checkbox_bem = checkbox_createNamespace[1];

/* harmony default export */ var _vant_2_5_4_vant_es_checkbox = (checkbox_createComponent({
  mixins: [checkbox_CheckboxMixin({
    bem: checkbox_bem,
    role: 'checkbox',
    parent: 'vanCheckbox'
  })],
  computed: {
    checked: {
      get: function get() {
        if (this.parent) {
          return this.parent.value.indexOf(this.name) !== -1;
        }

        return this.value;
      },
      set: function set(val) {
        if (this.parent) {
          this.setParentValue(val);
        } else {
          this.$emit('input', val);
        }
      }
    }
  },
  watch: {
    value: function value(val) {
      this.$emit('change', val);
    }
  },
  methods: {
    // @exposed-api
    toggle: function toggle(checked) {
      var _this = this;

      if (checked === void 0) {
        checked = !this.checked;
      }

      // When toggle method is called multiple times at the same time,
      // only the last call is valid.
      // This is a hack for usage inside Cell.
      clearTimeout(this.toggleTask);
      this.toggleTask = setTimeout(function () {
        _this.checked = checked;
      });
    },
    setParentValue: function setParentValue(val) {
      var parent = this.parent;
      var value = parent.value.slice();

      if (val) {
        if (parent.max && value.length >= parent.max) {
          return;
        }
        /* istanbul ignore else */


        if (value.indexOf(this.name) === -1) {
          value.push(this.name);
          parent.$emit('input', value);
        }
      } else {
        var index = value.indexOf(this.name);
        /* istanbul ignore else */

        if (index !== -1) {
          value.splice(index, 1);
          parent.$emit('input', value);
        }
      }
    }
  }
}));
// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/coupon/index.js





var coupon_createNamespace = Object(create["a" /* createNamespace */])('coupon'),
    coupon_createComponent = coupon_createNamespace[0],
    coupon_bem = coupon_createNamespace[1],
    coupon_t = coupon_createNamespace[2];

function getDate(timeStamp) {
  var date = new Date(timeStamp * 1000);
  return date.getFullYear() + "." + Object(string["b" /* padZero */])(date.getMonth() + 1) + "." + Object(string["b" /* padZero */])(date.getDate());
}

function formatDiscount(discount) {
  return (discount / 10).toFixed(discount % 10 === 0 ? 0 : 1);
}

function formatAmount(amount) {
  return (amount / 100).toFixed(amount % 100 === 0 ? 0 : amount % 10 === 0 ? 1 : 2);
}

/* harmony default export */ var _vant_2_5_4_vant_es_coupon = (coupon_createComponent({
  props: {
    coupon: Object,
    chosen: Boolean,
    disabled: Boolean,
    currency: {
      type: String,
      default: '¥'
    }
  },
  computed: {
    validPeriod: function validPeriod() {
      var _this$coupon = this.coupon,
          startAt = _this$coupon.startAt,
          endAt = _this$coupon.endAt;
      return getDate(startAt) + " - " + getDate(endAt);
    },
    faceAmount: function faceAmount() {
      var coupon = this.coupon;

      if (coupon.valueDesc) {
        return coupon.valueDesc + "<span>" + (coupon.unitDesc || '') + "</span>";
      }

      if (coupon.denominations) {
        var denominations = formatAmount(coupon.denominations);
        return "<span>" + this.currency + "</span> " + denominations;
      }

      if (coupon.discount) {
        return coupon_t('discount', formatDiscount(coupon.discount));
      }

      return '';
    },
    conditionMessage: function conditionMessage() {
      var condition = formatAmount(this.coupon.originCondition);
      return condition === '0' ? coupon_t('unlimited') : coupon_t('condition', condition);
    }
  },
  render: function render() {
    var h = arguments[0];
    var coupon = this.coupon,
        disabled = this.disabled;
    var description = disabled && coupon.reason || coupon.description;
    return h("div", {
      "class": coupon_bem({
        disabled: disabled
      })
    }, [h("div", {
      "class": coupon_bem('content')
    }, [h("div", {
      "class": coupon_bem('head')
    }, [h("h2", {
      "class": coupon_bem('amount'),
      "domProps": {
        "innerHTML": this.faceAmount
      }
    }), h("p", {
      "class": coupon_bem('condition')
    }, [this.coupon.condition || this.conditionMessage])]), h("div", {
      "class": coupon_bem('body')
    }, [h("p", {
      "class": coupon_bem('name')
    }, [coupon.name]), h("p", {
      "class": coupon_bem('valid')
    }, [this.validPeriod]), !this.disabled && h(_vant_2_5_4_vant_es_checkbox, {
      "attrs": {
        "size": 18,
        "value": this.chosen,
        "checkedColor": constant["h" /* RED */]
      },
      "class": coupon_bem('corner')
    })])]), description && h("p", {
      "class": coupon_bem('description')
    }, [description])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/coupon-list/index.js
// Utils
 // Components







var coupon_list_createNamespace = Object(create["a" /* createNamespace */])('coupon-list'),
    coupon_list_createComponent = coupon_list_createNamespace[0],
    coupon_list_bem = coupon_list_createNamespace[1],
    coupon_list_t = coupon_list_createNamespace[2];

var EMPTY_IMAGE = 'https://img.yzcdn.cn/vant/coupon-empty.png';
/* harmony default export */ var es_coupon_list = (coupon_list_createComponent({
  model: {
    prop: 'code'
  },
  props: {
    code: String,
    closeButtonText: String,
    inputPlaceholder: String,
    enabledTitle: String,
    disabledTitle: String,
    exchangeButtonText: String,
    exchangeButtonLoading: Boolean,
    exchangeButtonDisabled: Boolean,
    exchangeMinLength: {
      type: Number,
      default: 1
    },
    chosenCoupon: {
      type: Number,
      default: -1
    },
    coupons: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    disabledCoupons: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    displayedCouponIndex: {
      type: Number,
      default: -1
    },
    showExchangeBar: {
      type: Boolean,
      default: true
    },
    showCloseButton: {
      type: Boolean,
      default: true
    },
    showCount: {
      type: Boolean,
      default: true
    },
    currency: {
      type: String,
      default: '¥'
    },
    emptyImage: {
      type: String,
      default: EMPTY_IMAGE
    }
  },
  data: function data() {
    return {
      tab: 0,
      winHeight: window.innerHeight,
      currentCode: this.code || ''
    };
  },
  computed: {
    buttonDisabled: function buttonDisabled() {
      return !this.exchangeButtonLoading && (this.exchangeButtonDisabled || !this.currentCode || this.currentCode.length < this.exchangeMinLength);
    },
    listStyle: function listStyle() {
      return {
        height: this.winHeight - (this.showExchangeBar ? 140 : 94) + 'px'
      };
    }
  },
  watch: {
    code: function code(_code) {
      this.currentCode = _code;
    },
    currentCode: function currentCode(code) {
      this.$emit('input', code);
    },
    displayedCouponIndex: 'scrollToShowCoupon'
  },
  mounted: function mounted() {
    this.scrollToShowCoupon(this.displayedCouponIndex);
  },
  methods: {
    onClickExchangeButton: function onClickExchangeButton() {
      this.$emit('exchange', this.currentCode); // auto clear currentCode when not use vModel

      if (!this.code) {
        this.currentCode = '';
      }
    },
    // scroll to show specific coupon
    scrollToShowCoupon: function scrollToShowCoupon(index) {
      var _this = this;

      if (index === -1) {
        return;
      }

      this.$nextTick(function () {
        var _this$$refs = _this.$refs,
            card = _this$$refs.card,
            list = _this$$refs.list;
        /* istanbul ignore next */

        if (list && card && card[index]) {
          list.scrollTop = card[index].$el.offsetTop - 100;
        }
      });
    },
    genEmpty: function genEmpty() {
      var h = this.$createElement;
      return h("div", {
        "class": coupon_list_bem('empty')
      }, [h("img", {
        "attrs": {
          "src": this.emptyImage
        }
      }), h("p", [coupon_list_t('empty')])]);
    },
    genExchangeButton: function genExchangeButton() {
      var h = this.$createElement;
      return h(_vant_2_5_4_vant_es_button["a" /* default */], {
        "attrs": {
          "plain": true,
          "type": "danger",
          "text": this.exchangeButtonText || coupon_list_t('exchange'),
          "loading": this.exchangeButtonLoading,
          "disabled": this.buttonDisabled
        },
        "class": coupon_list_bem('exchange'),
        "on": {
          "click": this.onClickExchangeButton
        }
      });
    }
  },
  render: function render() {
    var _this2 = this;

    var h = arguments[0];
    var coupons = this.coupons,
        disabledCoupons = this.disabledCoupons;
    var count = this.showCount ? " (" + coupons.length + ")" : '';
    var title = (this.enabledTitle || coupon_list_t('enable')) + count;
    var disabledCount = this.showCount ? " (" + disabledCoupons.length + ")" : '';
    var disabledTitle = (this.disabledTitle || coupon_list_t('disabled')) + disabledCount;
    var ExchangeBar = this.showExchangeBar && h("div", {
      "class": coupon_list_bem('exchange-bar')
    }, [h(es_field, {
      "attrs": {
        "clearable": true,
        "border": false,
        "placeholder": this.inputPlaceholder || coupon_list_t('placeholder'),
        "maxlength": "20"
      },
      "class": coupon_list_bem('field'),
      "model": {
        value: _this2.currentCode,
        callback: function callback($$v) {
          _this2.currentCode = $$v;
        }
      }
    }), this.genExchangeButton()]);

    var onChange = function onChange(index) {
      return function () {
        return _this2.$emit('change', index);
      };
    };

    var CouponTab = h(es_tab, {
      "attrs": {
        "title": title
      }
    }, [h("div", {
      "class": coupon_list_bem('list', {
        'with-bottom': this.showCloseButton
      }),
      "style": this.listStyle
    }, [coupons.map(function (coupon, index) {
      return h(_vant_2_5_4_vant_es_coupon, {
        "ref": "card",
        "key": coupon.id,
        "attrs": {
          "coupon": coupon,
          "currency": _this2.currency,
          "chosen": index === _this2.chosenCoupon
        },
        "nativeOn": {
          "click": onChange(index)
        }
      });
    }), !coupons.length && this.genEmpty()])]);
    var DisabledCouponTab = h(es_tab, {
      "attrs": {
        "title": disabledTitle
      }
    }, [h("div", {
      "class": coupon_list_bem('list', {
        'with-bottom': this.showCloseButton
      }),
      "style": this.listStyle
    }, [disabledCoupons.map(function (coupon) {
      return h(_vant_2_5_4_vant_es_coupon, {
        "attrs": {
          "disabled": true,
          "coupon": coupon,
          "currency": _this2.currency
        },
        "key": coupon.id
      });
    }), !disabledCoupons.length && this.genEmpty()])]);
    return h("div", {
      "class": coupon_list_bem()
    }, [ExchangeBar, h(es_tabs, {
      "class": coupon_list_bem('tab'),
      "attrs": {
        "border": false
      },
      "model": {
        value: _this2.tab,
        callback: function callback($$v) {
          _this2.tab = $$v;
        }
      }
    }, [CouponTab, DisabledCouponTab]), h("div", {
      "class": coupon_list_bem('bottom')
    }, [h(_vant_2_5_4_vant_es_button["a" /* default */], {
      "directives": [{
        name: "show",
        value: this.showCloseButton
      }],
      "attrs": {
        "round": true,
        "type": "danger",
        "block": true,
        "text": this.closeButtonText || coupon_list_t('close')
      },
      "class": coupon_list_bem('close'),
      "on": {
        "click": onChange(-1)
      }
    })])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/datetime-picker/style/index.js



// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/datetime-picker/shared.js





var sharedProps = Object(esm_extends["a" /* default */])({}, pickerProps, {
  value: null,
  filter: Function,
  showToolbar: {
    type: Boolean,
    default: true
  },
  formatter: {
    type: Function,
    default: function _default(type, value) {
      return value;
    }
  }
});
var TimePickerMixin = {
  data: function data() {
    return {
      innerValue: this.formatValue(this.value)
    };
  },
  computed: {
    originColumns: function originColumns() {
      var _this = this;

      return this.ranges.map(function (_ref) {
        var type = _ref.type,
            rangeArr = _ref.range;
        var values = times(rangeArr[1] - rangeArr[0] + 1, function (index) {
          var value = Object(string["b" /* padZero */])(rangeArr[0] + index);
          return value;
        });

        if (_this.filter) {
          values = _this.filter(type, values);
        }

        return {
          type: type,
          values: values
        };
      });
    },
    columns: function columns() {
      var _this2 = this;

      return this.originColumns.map(function (column) {
        return {
          values: column.values.map(function (value) {
            return _this2.formatter(column.type, value);
          })
        };
      });
    }
  },
  watch: {
    columns: 'updateColumnValue',
    innerValue: function innerValue(val) {
      this.$emit('input', val);
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    this.updateColumnValue();
    this.$nextTick(function () {
      _this3.updateInnerValue();
    });
  },
  methods: {
    // @exposed-api
    getPicker: function getPicker() {
      return this.$refs.picker;
    },
    onConfirm: function onConfirm() {
      this.$emit('confirm', this.innerValue);
    },
    onCancel: function onCancel() {
      this.$emit('cancel');
    }
  },
  render: function render() {
    var _this4 = this;

    var h = arguments[0];
    var props = {};
    Object.keys(pickerProps).forEach(function (key) {
      props[key] = _this4[key];
    });
    return h(es_picker, {
      "ref": "picker",
      "attrs": {
        "columns": this.columns
      },
      "on": {
        "change": this.onChange,
        "confirm": this.onConfirm,
        "cancel": this.onCancel
      },
      "props": Object(esm_extends["a" /* default */])({}, props)
    });
  }
};
// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/datetime-picker/TimePicker.js






var TimePicker_createNamespace = Object(create["a" /* createNamespace */])('time-picker'),
    TimePicker_createComponent = TimePicker_createNamespace[0];

/* harmony default export */ var TimePicker = (TimePicker_createComponent({
  mixins: [TimePickerMixin],
  props: Object(esm_extends["a" /* default */])({}, sharedProps, {
    minHour: {
      type: [Number, String],
      default: 0
    },
    maxHour: {
      type: [Number, String],
      default: 23
    },
    minMinute: {
      type: [Number, String],
      default: 0
    },
    maxMinute: {
      type: [Number, String],
      default: 59
    }
  }),
  computed: {
    ranges: function ranges() {
      return [{
        type: 'hour',
        range: [+this.minHour, +this.maxHour]
      }, {
        type: 'minute',
        range: [+this.minMinute, +this.maxMinute]
      }];
    }
  },
  watch: {
    filter: 'updateInnerValue',
    minHour: 'updateInnerValue',
    maxHour: 'updateInnerValue',
    minMinute: 'updateInnerValue',
    maxMinute: 'updateInnerValue',
    value: function value(val) {
      val = this.formatValue(val);

      if (val !== this.innerValue) {
        this.innerValue = val;
        this.updateColumnValue();
      }
    }
  },
  methods: {
    formatValue: function formatValue(value) {
      if (!value) {
        value = Object(string["b" /* padZero */])(this.minHour) + ":" + Object(string["b" /* padZero */])(this.minMinute);
      }

      var _value$split = value.split(':'),
          hour = _value$split[0],
          minute = _value$split[1];

      hour = Object(string["b" /* padZero */])(range(hour, this.minHour, this.maxHour));
      minute = Object(string["b" /* padZero */])(range(minute, this.minMinute, this.maxMinute));
      return hour + ":" + minute;
    },
    updateInnerValue: function updateInnerValue() {
      var _this$getPicker$getIn = this.getPicker().getIndexes(),
          hourIndex = _this$getPicker$getIn[0],
          minuteIndex = _this$getPicker$getIn[1];

      var _this$originColumns = this.originColumns,
          hourColumn = _this$originColumns[0],
          minuteColumn = _this$originColumns[1];
      var hour = hourColumn.values[hourIndex] || hourColumn.values[0];
      var minute = minuteColumn.values[minuteIndex] || minuteColumn.values[0];
      this.innerValue = this.formatValue(hour + ":" + minute);
      this.updateColumnValue();
    },
    onChange: function onChange(picker) {
      var _this = this;

      this.updateInnerValue();
      this.$nextTick(function () {
        _this.$nextTick(function () {
          _this.$emit('change', picker);
        });
      });
    },
    updateColumnValue: function updateColumnValue() {
      var _this2 = this;

      var formatter = this.formatter;
      var pair = this.innerValue.split(':');
      var values = [formatter('hour', pair[0]), formatter('minute', pair[1])];
      this.$nextTick(function () {
        _this2.getPicker().setValues(values);
      });
    }
  }
}));
// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/datetime-picker/DatePicker.js






var currentYear = new Date().getFullYear();

var DatePicker_createNamespace = Object(create["a" /* createNamespace */])('date-picker'),
    DatePicker_createComponent = DatePicker_createNamespace[0];

/* harmony default export */ var DatePicker = (DatePicker_createComponent({
  mixins: [TimePickerMixin],
  props: Object(esm_extends["a" /* default */])({}, sharedProps, {
    type: {
      type: String,
      default: 'datetime'
    },
    minDate: {
      type: Date,
      default: function _default() {
        return new Date(currentYear - 10, 0, 1);
      },
      validator: isDate
    },
    maxDate: {
      type: Date,
      default: function _default() {
        return new Date(currentYear + 10, 11, 31);
      },
      validator: isDate
    }
  }),
  watch: {
    filter: 'updateInnerValue',
    minDate: 'updateInnerValue',
    maxDate: 'updateInnerValue',
    value: function value(val) {
      val = this.formatValue(val);

      if (val.valueOf() !== this.innerValue.valueOf()) {
        this.innerValue = val;
      }
    }
  },
  computed: {
    ranges: function ranges() {
      var _this$getBoundary = this.getBoundary('max', this.innerValue),
          maxYear = _this$getBoundary.maxYear,
          maxDate = _this$getBoundary.maxDate,
          maxMonth = _this$getBoundary.maxMonth,
          maxHour = _this$getBoundary.maxHour,
          maxMinute = _this$getBoundary.maxMinute;

      var _this$getBoundary2 = this.getBoundary('min', this.innerValue),
          minYear = _this$getBoundary2.minYear,
          minDate = _this$getBoundary2.minDate,
          minMonth = _this$getBoundary2.minMonth,
          minHour = _this$getBoundary2.minHour,
          minMinute = _this$getBoundary2.minMinute;

      var result = [{
        type: 'year',
        range: [minYear, maxYear]
      }, {
        type: 'month',
        range: [minMonth, maxMonth]
      }, {
        type: 'day',
        range: [minDate, maxDate]
      }, {
        type: 'hour',
        range: [minHour, maxHour]
      }, {
        type: 'minute',
        range: [minMinute, maxMinute]
      }];
      if (this.type === 'date') result.splice(3, 2);
      if (this.type === 'year-month') result.splice(2, 3);
      return result;
    }
  },
  methods: {
    formatValue: function formatValue(value) {
      if (!isDate(value)) {
        value = this.minDate;
      }

      value = Math.max(value, this.minDate.getTime());
      value = Math.min(value, this.maxDate.getTime());
      return new Date(value);
    },
    getBoundary: function getBoundary(type, value) {
      var _ref;

      var boundary = this[type + "Date"];
      var year = boundary.getFullYear();
      var month = 1;
      var date = 1;
      var hour = 0;
      var minute = 0;

      if (type === 'max') {
        month = 12;
        date = getMonthEndDay(value.getFullYear(), value.getMonth() + 1);
        hour = 23;
        minute = 59;
      }

      if (value.getFullYear() === year) {
        month = boundary.getMonth() + 1;

        if (value.getMonth() + 1 === month) {
          date = boundary.getDate();

          if (value.getDate() === date) {
            hour = boundary.getHours();

            if (value.getHours() === hour) {
              minute = boundary.getMinutes();
            }
          }
        }
      }

      return _ref = {}, _ref[type + "Year"] = year, _ref[type + "Month"] = month, _ref[type + "Date"] = date, _ref[type + "Hour"] = hour, _ref[type + "Minute"] = minute, _ref;
    },
    updateInnerValue: function updateInnerValue() {
      var _this = this;

      var indexes = this.getPicker().getIndexes();

      var getValue = function getValue(index) {
        var values = _this.originColumns[index].values;
        return getTrueValue(values[indexes[index]]);
      };

      var year = getValue(0);
      var month = getValue(1);
      var maxDate = getMonthEndDay(year, month);
      var date;

      if (this.type === 'year-month') {
        date = 1;
      } else {
        date = getValue(2);
      }

      date = date > maxDate ? maxDate : date;
      var hour = 0;
      var minute = 0;

      if (this.type === 'datetime') {
        hour = getValue(3);
        minute = getValue(4);
      }

      var value = new Date(year, month - 1, date, hour, minute);
      this.innerValue = this.formatValue(value);
    },
    onChange: function onChange(picker) {
      var _this2 = this;

      this.updateInnerValue();
      this.$nextTick(function () {
        _this2.$nextTick(function () {
          _this2.$emit('change', picker);
        });
      });
    },
    updateColumnValue: function updateColumnValue() {
      var _this3 = this;

      var value = this.innerValue;
      var formatter = this.formatter;
      var values = [formatter('year', "" + value.getFullYear()), formatter('month', Object(string["b" /* padZero */])(value.getMonth() + 1)), formatter('day', Object(string["b" /* padZero */])(value.getDate()))];

      if (this.type === 'datetime') {
        values.push(formatter('hour', Object(string["b" /* padZero */])(value.getHours())), formatter('minute', Object(string["b" /* padZero */])(value.getMinutes())));
      }

      if (this.type === 'year-month') {
        values = values.slice(0, 2);
      }

      this.$nextTick(function () {
        _this3.getPicker().setValues(values);
      });
    }
  }
}));
// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/datetime-picker/index.js





var datetime_picker_createNamespace = Object(create["a" /* createNamespace */])('datetime-picker'),
    datetime_picker_createComponent = datetime_picker_createNamespace[0],
    datetime_picker_bem = datetime_picker_createNamespace[1];

/* harmony default export */ var datetime_picker = (datetime_picker_createComponent({
  props: Object(esm_extends["a" /* default */])({}, TimePicker.props, {}, DatePicker.props),
  methods: {
    // @exposed-api
    getPicker: function getPicker() {
      return this.$refs.root.getPicker();
    }
  },
  render: function render() {
    var h = arguments[0];
    var Component = this.type === 'time' ? TimePicker : DatePicker;
    return h(Component, {
      "ref": "root",
      "class": datetime_picker_bem(),
      "props": Object(esm_extends["a" /* default */])({}, this.$props),
      "on": Object(esm_extends["a" /* default */])({}, this.$listeners)
    });
  }
}));
// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/button/style/index.js





// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/swipe-cell/index.css
var swipe_cell = __webpack_require__("9eab");

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/swipe-cell/style/index.js


// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/mixins/click-outside.js
/**
 * Listen to click outside event
 */


var click_outside_ClickOutsideMixin = function ClickOutsideMixin(config) {
  return external_Vue_default.a.extend({
    props: {
      closeOnClickOutside: {
        type: Boolean,
        default: true
      }
    },
    data: function data() {
      var _this = this;

      var clickOutsideHandler = function clickOutsideHandler(event) {
        if (_this.closeOnClickOutside && !_this.$el.contains(event.target)) {
          _this[config.method]();
        }
      };

      return {
        clickOutsideHandler: clickOutsideHandler
      };
    },
    mounted: function mounted() {
      Object(dom_event["b" /* on */])(document, config.event, this.clickOutsideHandler);
    },
    beforeDestroy: function beforeDestroy() {
      Object(dom_event["a" /* off */])(document, config.event, this.clickOutsideHandler);
    }
  });
};
// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/swipe-cell/index.js
// Utils


 // Mixins




var swipe_cell_createNamespace = Object(create["a" /* createNamespace */])('swipe-cell'),
    swipe_cell_createComponent = swipe_cell_createNamespace[0],
    swipe_cell_bem = swipe_cell_createNamespace[1];

var THRESHOLD = 0.15;
/* harmony default export */ var es_swipe_cell = (swipe_cell_createComponent({
  mixins: [touch["a" /* TouchMixin */], click_outside_ClickOutsideMixin({
    event: 'touchstart',
    method: 'onClick'
  })],
  props: {
    // @deprecated
    // should be removed in next major version, use beforeClose instead
    onClose: Function,
    disabled: Boolean,
    leftWidth: [Number, String],
    rightWidth: [Number, String],
    beforeClose: Function,
    stopPropagation: Boolean,
    name: {
      type: [Number, String],
      default: ''
    }
  },
  data: function data() {
    return {
      offset: 0,
      dragging: false
    };
  },
  computed: {
    computedLeftWidth: function computedLeftWidth() {
      return +this.leftWidth || this.getWidthByRef('left');
    },
    computedRightWidth: function computedRightWidth() {
      return +this.rightWidth || this.getWidthByRef('right');
    }
  },
  mounted: function mounted() {
    this.bindTouchEvent(this.$el);
  },
  methods: {
    getWidthByRef: function getWidthByRef(ref) {
      if (this.$refs[ref]) {
        var rect = this.$refs[ref].getBoundingClientRect();
        return rect.width;
      }

      return 0;
    },
    // @exposed-api
    open: function open(position) {
      var offset = position === 'left' ? this.computedLeftWidth : -this.computedRightWidth;
      this.opened = true;
      this.offset = offset;
      this.$emit('open', {
        position: position,
        name: this.name,
        // @deprecated
        // should be removed in next major version
        detail: this.name
      });
    },
    // @exposed-api
    close: function close(position) {
      this.offset = 0;

      if (this.opened) {
        this.opened = false;
        this.$emit('close', {
          position: position,
          name: this.name
        });
      }
    },
    onTouchStart: function onTouchStart(event) {
      if (this.disabled) {
        return;
      }

      this.startOffset = this.offset;
      this.touchStart(event);
    },
    onTouchMove: function onTouchMove(event) {
      if (this.disabled) {
        return;
      }

      this.touchMove(event);

      if (this.direction === 'horizontal') {
        this.dragging = true;
        this.lockClick = true;
        var isPrevent = !this.opened || this.deltaX * this.startOffset < 0;

        if (isPrevent) {
          Object(dom_event["c" /* preventDefault */])(event, this.stopPropagation);
        }

        this.offset = range(this.deltaX + this.startOffset, -this.computedRightWidth, this.computedLeftWidth);
      }
    },
    onTouchEnd: function onTouchEnd() {
      var _this = this;

      if (this.disabled) {
        return;
      }

      if (this.dragging) {
        this.toggle(this.offset > 0 ? 'left' : 'right');
        this.dragging = false; // compatible with desktop scenario

        setTimeout(function () {
          _this.lockClick = false;
        }, 0);
      }
    },
    toggle: function toggle(direction) {
      var offset = Math.abs(this.offset);
      var threshold = this.opened ? 1 - THRESHOLD : THRESHOLD;
      var computedLeftWidth = this.computedLeftWidth,
          computedRightWidth = this.computedRightWidth;

      if (computedRightWidth && direction === 'right' && offset > computedRightWidth * threshold) {
        this.open('right');
      } else if (computedLeftWidth && direction === 'left' && offset > computedLeftWidth * threshold) {
        this.open('left');
      } else {
        this.close();
      }
    },
    onClick: function onClick(position) {
      if (position === void 0) {
        position = 'outside';
      }

      this.$emit('click', position);

      if (this.opened && !this.lockClick) {
        if (this.beforeClose) {
          this.beforeClose({
            position: position,
            name: this.name,
            instance: this
          });
        } else if (this.onClose) {
          this.onClose(position, this, {
            name: this.name
          });
        } else {
          this.close(position);
        }
      }
    },
    getClickHandler: function getClickHandler(position, stop) {
      var _this2 = this;

      return function (event) {
        if (stop) {
          event.stopPropagation();
        }

        _this2.onClick(position);
      };
    },
    genLeftPart: function genLeftPart() {
      var h = this.$createElement;
      var content = this.slots('left');

      if (content) {
        return h("div", {
          "ref": "left",
          "class": swipe_cell_bem('left'),
          "on": {
            "click": this.getClickHandler('left', true)
          }
        }, [content]);
      }
    },
    genRightPart: function genRightPart() {
      var h = this.$createElement;
      var content = this.slots('right');

      if (content) {
        return h("div", {
          "ref": "right",
          "class": swipe_cell_bem('right'),
          "on": {
            "click": this.getClickHandler('right', true)
          }
        }, [content]);
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    var wrapperStyle = {
      transform: "translate3d(" + this.offset + "px, 0, 0)",
      transitionDuration: this.dragging ? '0s' : '.6s'
    };
    return h("div", {
      "class": swipe_cell_bem(),
      "on": {
        "click": this.getClickHandler('cell')
      }
    }, [h("div", {
      "class": swipe_cell_bem('wrapper'),
      "style": wrapperStyle
    }, [this.genLeftPart(), this.slots(), this.genRightPart()])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/popup/style/index.js





// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/area/style/index.js



// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/area/index.js





var area_createNamespace = Object(create["a" /* createNamespace */])('area'),
    area_createComponent = area_createNamespace[0],
    area_bem = area_createNamespace[1];

var PLACEHOLDER_CODE = '000000';

function isOverseaCode(code) {
  return code[0] === '9';
}

function pickSlots(instance, keys) {
  var $slots = instance.$slots,
      $scopedSlots = instance.$scopedSlots;
  var scopedSlots = {};
  keys.forEach(function (key) {
    if ($scopedSlots[key]) {
      scopedSlots[key] = $scopedSlots[key];
    } else if ($slots[key]) {
      scopedSlots[key] = function () {
        return $slots[key];
      };
    }
  });
  return scopedSlots;
}

/* harmony default export */ var es_area = (area_createComponent({
  props: Object(esm_extends["a" /* default */])({}, pickerProps, {
    value: String,
    areaList: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    columnsNum: {
      type: [Number, String],
      default: 3
    },
    isOverseaCode: {
      type: Function,
      default: isOverseaCode
    },
    columnsPlaceholder: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  }),
  data: function data() {
    return {
      code: this.value,
      columns: [{
        values: []
      }, {
        values: []
      }, {
        values: []
      }]
    };
  },
  computed: {
    province: function province() {
      return this.areaList.province_list || {};
    },
    city: function city() {
      return this.areaList.city_list || {};
    },
    county: function county() {
      return this.areaList.county_list || {};
    },
    displayColumns: function displayColumns() {
      return this.columns.slice(0, +this.columnsNum);
    },
    placeholderMap: function placeholderMap() {
      return {
        province: this.columnsPlaceholder[0] || '',
        city: this.columnsPlaceholder[1] || '',
        county: this.columnsPlaceholder[2] || ''
      };
    }
  },
  watch: {
    value: function value(val) {
      this.code = val;
      this.setValues();
    },
    areaList: {
      deep: true,
      handler: 'setValues'
    },
    columnsNum: function columnsNum() {
      var _this = this;

      this.$nextTick(function () {
        _this.setValues();
      });
    }
  },
  mounted: function mounted() {
    this.setValues();
  },
  methods: {
    // get list by code
    getList: function getList(type, code) {
      var result = [];

      if (type !== 'province' && !code) {
        return result;
      }

      var list = this[type];
      result = Object.keys(list).map(function (listCode) {
        return {
          code: listCode,
          name: list[listCode]
        };
      });

      if (code) {
        // oversea code
        if (this.isOverseaCode(code) && type === 'city') {
          code = '9';
        }

        result = result.filter(function (item) {
          return item.code.indexOf(code) === 0;
        });
      }

      if (this.placeholderMap[type] && result.length) {
        // set columns placeholder
        var codeFill = '';

        if (type === 'city') {
          codeFill = PLACEHOLDER_CODE.slice(2, 4);
        } else if (type === 'county') {
          codeFill = PLACEHOLDER_CODE.slice(4, 6);
        }

        result.unshift({
          code: "" + code + codeFill,
          name: this.placeholderMap[type]
        });
      }

      return result;
    },
    // get index by code
    getIndex: function getIndex(type, code) {
      var compareNum = type === 'province' ? 2 : type === 'city' ? 4 : 6;
      var list = this.getList(type, code.slice(0, compareNum - 2)); // oversea code

      if (this.isOverseaCode(code) && type === 'province') {
        compareNum = 1;
      }

      code = code.slice(0, compareNum);

      for (var i = 0; i < list.length; i++) {
        if (list[i].code.slice(0, compareNum) === code) {
          return i;
        }
      }

      return 0;
    },
    // parse output columns data
    parseOutputValues: function parseOutputValues(values) {
      var _this2 = this;

      return values.map(function (value, index) {
        // save undefined value
        if (!value) return value;
        value = JSON.parse(JSON.stringify(value));

        if (!value.code || value.name === _this2.columnsPlaceholder[index]) {
          value.code = '';
          value.name = '';
        }

        return value;
      });
    },
    onChange: function onChange(picker, values, index) {
      this.code = values[index].code;
      this.setValues();
      var getValues = picker.getValues();
      getValues = this.parseOutputValues(getValues);
      this.$emit('change', picker, getValues, index);
    },
    onConfirm: function onConfirm(values, index) {
      values = this.parseOutputValues(values);
      this.setValues();
      this.$emit('confirm', values, index);
    },
    setValues: function setValues() {
      var code = this.code;

      if (!code) {
        if (this.columnsPlaceholder.length) {
          code = PLACEHOLDER_CODE;
        } else if (Object.keys(this.county)[0]) {
          code = Object.keys(this.county)[0];
        } else {
          code = '';
        }
      }

      var picker = this.$refs.picker;
      var province = this.getList('province');
      var city = this.getList('city', code.slice(0, 2));

      if (!picker) {
        return;
      }

      picker.setColumnValues(0, province);
      picker.setColumnValues(1, city);

      if (city.length && code.slice(2, 4) === '00' && !this.isOverseaCode(code)) {
        code = city[0].code;
      }

      picker.setColumnValues(2, this.getList('county', code.slice(0, 4)));
      picker.setIndexes([this.getIndex('province', code), this.getIndex('city', code), this.getIndex('county', code)]);
    },
    getValues: function getValues() {
      var picker = this.$refs.picker;
      var getValues = picker ? picker.getValues().filter(function (value) {
        return !!value;
      }) : [];
      getValues = this.parseOutputValues(getValues);
      return getValues;
    },
    getArea: function getArea() {
      var values = this.getValues();
      var area = {
        code: '',
        country: '',
        province: '',
        city: '',
        county: ''
      };

      if (!values.length) {
        return area;
      }

      var names = values.map(function (item) {
        return item.name;
      });
      var validValues = values.filter(function (value) {
        return !!value.code;
      });
      area.code = validValues.length ? validValues[validValues.length - 1].code : '';

      if (this.isOverseaCode(area.code)) {
        area.country = names[1] || '';
        area.province = names[2] || '';
      } else {
        area.province = names[0] || '';
        area.city = names[1] || '';
        area.county = names[2] || '';
      }

      return area;
    },
    // @exposed-api
    reset: function reset(code) {
      this.code = code || '';
      this.setValues();
    }
  },
  render: function render() {
    var h = arguments[0];

    var on = Object(esm_extends["a" /* default */])({}, this.$listeners, {
      change: this.onChange,
      confirm: this.onConfirm
    });

    return h(es_picker, {
      "ref": "picker",
      "class": area_bem(),
      "attrs": {
        "showToolbar": true,
        "valueKey": "name",
        "title": this.title,
        "loading": this.loading,
        "columns": this.displayColumns,
        "itemHeight": this.itemHeight,
        "swipeDuration": this.swipeDuration,
        "visibleItemCount": this.visibleItemCount,
        "cancelButtonText": this.cancelButtonText,
        "confirmButtonText": this.confirmButtonText
      },
      "scopedSlots": pickSlots(this, ['title', 'columns-top', 'columns-bottom']),
      "on": Object(esm_extends["a" /* default */])({}, on)
    });
  }
}));
// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/switch/index.css
var es_switch = __webpack_require__("0a79");

// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/switch-cell/index.css
var switch_cell = __webpack_require__("f184");

// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/dialog/index.css
var dialog = __webpack_require__("d286");

// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/address-edit/index.css
var address_edit = __webpack_require__("390a");

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/address-edit/style/index.js















// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/utils/validate/mobile.js
function isMobile(value) {
  value = value.replace(/[^-|\d]/g, '');
  return /^((\+86)|(86))?(1)\d{10}$/.test(value) || /^0[0-9-]{10,13}$/.test(value);
}
// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/dialog/index.js + 1 modules
var es_dialog = __webpack_require__("df33");

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/address-edit/Detail.js

// Utils

 // Components




var Detail_createNamespace = Object(create["a" /* createNamespace */])('address-edit-detail'),
    Detail_createComponent = Detail_createNamespace[0],
    Detail_bem = Detail_createNamespace[1],
    Detail_t = Detail_createNamespace[2];

var android = isAndroid();
/* harmony default export */ var Detail = (Detail_createComponent({
  props: {
    value: String,
    errorMessage: String,
    focused: Boolean,
    detailRows: [Number, String],
    searchResult: Array,
    detailMaxlength: [Number, String],
    showSearchResult: Boolean
  },
  computed: {
    shouldShowSearchResult: function shouldShowSearchResult() {
      return this.focused && this.searchResult && this.showSearchResult;
    }
  },
  methods: {
    onSelect: function onSelect(express) {
      this.$emit('select-search', express);
      this.$emit('input', ((express.address || '') + " " + (express.name || '')).trim());
    },
    onFinish: function onFinish() {
      this.$refs.field.blur();
    },
    genFinish: function genFinish() {
      var h = this.$createElement;
      var show = this.value && this.focused && android;

      if (show) {
        return h("div", {
          "class": Detail_bem('finish'),
          "on": {
            "click": this.onFinish
          }
        }, [Detail_t('complete')]);
      }
    },
    genSearchResult: function genSearchResult() {
      var _this = this;

      var h = this.$createElement;
      var value = this.value,
          shouldShowSearchResult = this.shouldShowSearchResult,
          searchResult = this.searchResult;

      if (shouldShowSearchResult) {
        return searchResult.map(function (express) {
          return h(es_cell, {
            "key": express.name + express.address,
            "attrs": {
              "clickable": true,
              "border": false,
              "icon": "location-o",
              "label": express.address
            },
            "class": Detail_bem('search-item'),
            "on": {
              "click": function click() {
                _this.onSelect(express);
              }
            },
            "scopedSlots": {
              title: function title() {
                if (express.name) {
                  var text = express.name.replace(value, "<span class=" + Detail_bem('keyword') + ">" + value + "</span>");
                  return h("div", {
                    "domProps": {
                      "innerHTML": text
                    }
                  });
                }
              }
            }
          });
        });
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    return h(es_cell, {
      "class": Detail_bem()
    }, [h(es_field, {
      "attrs": {
        "autosize": true,
        "rows": this.detailRows,
        "clearable": !android,
        "type": "textarea",
        "value": this.value,
        "errorMessage": this.errorMessage,
        "border": !this.shouldShowSearchResult,
        "label": Detail_t('label'),
        "maxlength": this.detailMaxlength,
        "placeholder": Detail_t('placeholder')
      },
      "ref": "field",
      "scopedSlots": {
        icon: this.genFinish
      },
      "on": Object(esm_extends["a" /* default */])({}, this.$listeners)
    }), this.genSearchResult()]);
  }
}));
// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/switch/shared.js
/**
 * Common Switch Props
 */
var switchProps = {
  size: [Number, String],
  value: null,
  loading: Boolean,
  disabled: Boolean,
  activeColor: String,
  inactiveColor: String,
  activeValue: {
    type: null,
    default: true
  },
  inactiveValue: {
    type: null,
    default: false
  }
};
// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/switch/index.js
// Utils

 // Mixins

 // Components



var switch_createNamespace = Object(create["a" /* createNamespace */])('switch'),
    switch_createComponent = switch_createNamespace[0],
    switch_bem = switch_createNamespace[1];

/* harmony default export */ var _vant_2_5_4_vant_es_switch = (switch_createComponent({
  mixins: [FieldMixin],
  props: switchProps,
  computed: {
    checked: function checked() {
      return this.value === this.activeValue;
    },
    style: function style() {
      return {
        fontSize: Object(unit["a" /* addUnit */])(this.size),
        backgroundColor: this.checked ? this.activeColor : this.inactiveColor
      };
    }
  },
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);

      if (!this.disabled && !this.loading) {
        var newValue = this.checked ? this.inactiveValue : this.activeValue;
        this.$emit('input', newValue);
        this.$emit('change', newValue);
      }
    },
    genLoading: function genLoading() {
      var h = this.$createElement;

      if (this.loading) {
        var color = this.checked ? this.activeColor : this.inactiveColor;
        return h(_vant_2_5_4_vant_es_loading["a" /* default */], {
          "class": switch_bem('loading'),
          "attrs": {
            "color": color
          }
        });
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    var checked = this.checked,
        loading = this.loading,
        disabled = this.disabled;
    return h("div", {
      "class": switch_bem({
        on: checked,
        loading: loading,
        disabled: disabled
      }),
      "attrs": {
        "role": "switch",
        "aria-checked": String(checked)
      },
      "style": this.style,
      "on": {
        "click": this.onClick
      }
    }, [h("div", {
      "class": switch_bem('node')
    }, [this.genLoading()])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/switch-cell/index.js


// Utils

 // Components



 // Types

var switch_cell_createNamespace = Object(create["a" /* createNamespace */])('switch-cell'),
    switch_cell_createComponent = switch_cell_createNamespace[0],
    switch_cell_bem = switch_cell_createNamespace[1];

function SwitchCell(h, props, slots, ctx) {
  return h(es_cell, helper_default()([{
    "attrs": {
      "center": true,
      "size": props.cellSize,
      "title": props.title,
      "border": props.border
    },
    "class": switch_cell_bem([props.cellSize])
  }, Object(functional["b" /* inherit */])(ctx)]), [h(_vant_2_5_4_vant_es_switch, {
    "props": Object(esm_extends["a" /* default */])({}, props),
    "on": Object(esm_extends["a" /* default */])({}, ctx.listeners)
  })]);
}

SwitchCell.props = Object(esm_extends["a" /* default */])({}, switchProps, {
  title: String,
  cellSize: String,
  border: {
    type: Boolean,
    default: true
  },
  size: {
    type: String,
    default: '24px'
  }
});
/* harmony default export */ var es_switch_cell = (switch_cell_createComponent(SwitchCell));
// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/address-edit/index.js

// Utils

 // Components










var address_edit_createNamespace = Object(create["a" /* createNamespace */])('address-edit'),
    address_edit_createComponent = address_edit_createNamespace[0],
    address_edit_bem = address_edit_createNamespace[1],
    address_edit_t = address_edit_createNamespace[2];

var defaultData = {
  name: '',
  tel: '',
  country: '',
  province: '',
  city: '',
  county: '',
  areaCode: '',
  postalCode: '',
  addressDetail: '',
  isDefault: false
};

function isPostal(value) {
  return /^\d{6}$/.test(value);
}

/* harmony default export */ var es_address_edit = (address_edit_createComponent({
  props: {
    areaList: Object,
    isSaving: Boolean,
    isDeleting: Boolean,
    validator: Function,
    showDelete: Boolean,
    showPostal: Boolean,
    searchResult: Array,
    showSetDefault: Boolean,
    showSearchResult: Boolean,
    saveButtonText: String,
    deleteButtonText: String,
    showArea: {
      type: Boolean,
      default: true
    },
    showDetail: {
      type: Boolean,
      default: true
    },
    disableArea: Boolean,
    detailRows: {
      type: [Number, String],
      default: 1
    },
    detailMaxlength: {
      type: [Number, String],
      default: 200
    },
    addressInfo: {
      type: Object,
      default: function _default() {
        return Object(esm_extends["a" /* default */])({}, defaultData);
      }
    },
    telValidator: {
      type: Function,
      default: isMobile
    },
    postalValidator: {
      type: Function,
      default: isPostal
    },
    areaColumnsPlaceholder: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      data: {},
      showAreaPopup: false,
      detailFocused: false,
      errorInfo: {
        tel: '',
        name: '',
        areaCode: '',
        postalCode: '',
        addressDetail: ''
      }
    };
  },
  computed: {
    areaListLoaded: function areaListLoaded() {
      return Object(utils["d" /* isObject */])(this.areaList) && Object.keys(this.areaList).length;
    },
    areaText: function areaText() {
      var _this$data = this.data,
          country = _this$data.country,
          province = _this$data.province,
          city = _this$data.city,
          county = _this$data.county,
          areaCode = _this$data.areaCode;

      if (areaCode) {
        var arr = [country, province, city, county];

        if (province && province === city) {
          arr.splice(1, 1);
        }

        return arr.filter(function (text) {
          return text;
        }).join('/');
      }

      return '';
    }
  },
  watch: {
    addressInfo: {
      handler: function handler(val) {
        this.data = Object(esm_extends["a" /* default */])({}, defaultData, {}, val);
        this.setAreaCode(val.areaCode);
      },
      deep: true,
      immediate: true
    },
    areaList: function areaList() {
      this.setAreaCode(this.data.areaCode);
    }
  },
  methods: {
    onFocus: function onFocus(key) {
      this.errorInfo[key] = '';
      this.detailFocused = key === 'addressDetail';
      this.$emit('focus', key);
    },
    onChangeDetail: function onChangeDetail(val) {
      this.data.addressDetail = val;
      this.$emit('change-detail', val);
    },
    onAreaConfirm: function onAreaConfirm(values) {
      values = values.filter(function (value) {
        return !!value;
      });

      if (values.some(function (value) {
        return !value.code;
      })) {
        Object(es_toast["a" /* default */])(address_edit_t('areaEmpty'));
        return;
      }

      this.showAreaPopup = false;
      this.assignAreaValues();
      this.$emit('change-area', values);
    },
    assignAreaValues: function assignAreaValues() {
      var area = this.$refs.area;

      if (area) {
        var detail = area.getArea();
        detail.areaCode = detail.code;
        delete detail.code;

        Object(esm_extends["a" /* default */])(this.data, detail);
      }
    },
    onSave: function onSave() {
      var _this = this;

      var items = ['name', 'tel', 'areaCode', 'addressDetail'];

      if (this.showPostal) {
        items.push('postalCode');
      }

      var isValid = items.every(function (item) {
        var msg = _this.getErrorMessage(item);

        if (msg) {
          _this.errorInfo[item] = msg;
        }

        return !msg;
      });

      if (isValid && !this.isSaving) {
        this.$emit('save', this.data);
      }
    },
    getErrorMessage: function getErrorMessage(key) {
      var value = String(this.data[key] || '').trim();

      if (this.validator) {
        var message = this.validator(key, value);

        if (message) {
          return message;
        }
      }

      switch (key) {
        case 'name':
          return value ? '' : address_edit_t('nameEmpty');

        case 'tel':
          return this.telValidator(value) ? '' : address_edit_t('telInvalid');

        case 'areaCode':
          return value ? '' : address_edit_t('areaEmpty');

        case 'addressDetail':
          return value ? '' : address_edit_t('addressEmpty');

        case 'postalCode':
          return value && !this.postalValidator(value) ? address_edit_t('postalEmpty') : '';
      }
    },
    onDelete: function onDelete() {
      var _this2 = this;

      es_dialog["a" /* default */].confirm({
        title: address_edit_t('confirmDelete')
      }).then(function () {
        _this2.$emit('delete', _this2.data);
      }).catch(function () {
        _this2.$emit('cancel-delete', _this2.data);
      });
    },
    // get values of area component
    getArea: function getArea() {
      return this.$refs.area ? this.$refs.area.getValues() : [];
    },
    // set area code to area component
    setAreaCode: function setAreaCode(code) {
      this.data.areaCode = code || '';

      if (code) {
        this.$nextTick(this.assignAreaValues);
      }
    },
    // @exposed-api
    setAddressDetail: function setAddressDetail(value) {
      this.data.addressDetail = value;
    },
    onDetailBlur: function onDetailBlur() {
      var _this3 = this;

      // await for click search event
      setTimeout(function () {
        _this3.detailFocused = false;
      });
    }
  },
  render: function render() {
    var _this4 = this;

    var h = arguments[0];
    var data = this.data,
        errorInfo = this.errorInfo,
        searchResult = this.searchResult,
        disableArea = this.disableArea;

    var onFocus = function onFocus(name) {
      return function () {
        return _this4.onFocus(name);
      };
    }; // hide bottom field when use search && detail get focused


    var hideBottomFields = searchResult && searchResult.length && this.detailFocused;
    return h("div", {
      "class": address_edit_bem()
    }, [h("div", {
      "class": address_edit_bem('fields')
    }, [h(es_field, {
      "attrs": {
        "clearable": true,
        "label": address_edit_t('name'),
        "placeholder": address_edit_t('namePlaceholder'),
        "errorMessage": errorInfo.name
      },
      "on": {
        "focus": onFocus('name')
      },
      "model": {
        value: data.name,
        callback: function callback($$v) {
          _this4.$set(data, "name", $$v);
        }
      }
    }), h(es_field, {
      "attrs": {
        "clearable": true,
        "type": "tel",
        "label": address_edit_t('tel'),
        "placeholder": address_edit_t('telPlaceholder'),
        "errorMessage": errorInfo.tel
      },
      "on": {
        "focus": onFocus('tel')
      },
      "model": {
        value: data.tel,
        callback: function callback($$v) {
          _this4.$set(data, "tel", $$v);
        }
      }
    }), h(es_field, {
      "directives": [{
        name: "show",
        value: this.showArea
      }],
      "attrs": {
        "readonly": true,
        "clickable": !disableArea,
        "label": address_edit_t('area'),
        "placeholder": address_edit_t('areaPlaceholder'),
        "errorMessage": errorInfo.areaCode,
        "rightIcon": !disableArea ? 'arrow' : null,
        "value": this.areaText
      },
      "on": {
        "focus": onFocus('areaCode'),
        "click": function click() {
          _this4.showAreaPopup = !disableArea;
        }
      }
    }), h(Detail, {
      "directives": [{
        name: "show",
        value: this.showDetail
      }],
      "attrs": {
        "focused": this.detailFocused,
        "value": data.addressDetail,
        "errorMessage": errorInfo.addressDetail,
        "detailRows": this.detailRows,
        "detailMaxlength": this.detailMaxlength,
        "searchResult": this.searchResult,
        "showSearchResult": this.showSearchResult
      },
      "on": {
        "focus": onFocus('addressDetail'),
        "blur": this.onDetailBlur,
        "input": this.onChangeDetail,
        "select-search": function selectSearch(event) {
          _this4.$emit('select-search', event);
        }
      }
    }), this.showPostal && h(es_field, {
      "directives": [{
        name: "show",
        value: !hideBottomFields
      }],
      "attrs": {
        "type": "tel",
        "maxlength": "6",
        "label": address_edit_t('postal'),
        "placeholder": address_edit_t('postal'),
        "errorMessage": errorInfo.postalCode
      },
      "on": {
        "focus": onFocus('postalCode')
      },
      "model": {
        value: data.postalCode,
        callback: function callback($$v) {
          _this4.$set(data, "postalCode", $$v);
        }
      }
    }), this.slots()]), this.showSetDefault && h(es_switch_cell, {
      "class": address_edit_bem('default'),
      "directives": [{
        name: "show",
        value: !hideBottomFields
      }],
      "attrs": {
        "title": address_edit_t('defaultAddress')
      },
      "on": {
        "change": function change(event) {
          _this4.$emit('change-default', event);
        }
      },
      "model": {
        value: data.isDefault,
        callback: function callback($$v) {
          _this4.$set(data, "isDefault", $$v);
        }
      }
    }), h("div", {
      "directives": [{
        name: "show",
        value: !hideBottomFields
      }],
      "class": address_edit_bem('buttons')
    }, [h(_vant_2_5_4_vant_es_button["a" /* default */], {
      "attrs": {
        "block": true,
        "round": true,
        "loading": this.isSaving,
        "type": "danger",
        "text": this.saveButtonText || address_edit_t('save')
      },
      "on": {
        "click": this.onSave
      }
    }), this.showDelete && h(_vant_2_5_4_vant_es_button["a" /* default */], {
      "attrs": {
        "block": true,
        "round": true,
        "loading": this.isDeleting,
        "text": this.deleteButtonText || address_edit_t('delete')
      },
      "on": {
        "click": this.onDelete
      }
    })]), h(es_popup, {
      "attrs": {
        "position": "bottom",
        "lazyRender": false,
        "getContainer": "body"
      },
      "model": {
        value: _this4.showAreaPopup,
        callback: function callback($$v) {
          _this4.showAreaPopup = $$v;
        }
      }
    }, [h(es_area, {
      "ref": "area",
      "attrs": {
        "loading": !this.areaListLoaded,
        "value": data.areaCode,
        "areaList": this.areaList,
        "columnsPlaceholder": this.areaColumnsPlaceholder
      },
      "on": {
        "confirm": this.onAreaConfirm,
        "cancel": function cancel() {
          _this4.showAreaPopup = false;
        }
      }
    })])]);
  }
}));
// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/radio/index.css
var es_radio = __webpack_require__("3715");

// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/tag/index.css
var tag = __webpack_require__("03d1");

// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/radio-group/index.css
var radio_group = __webpack_require__("9c06");

// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/address-list/index.css
var address_list = __webpack_require__("5be3");

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/address-list/style/index.js










// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/radio-group/index.js




var radio_group_createNamespace = Object(create["a" /* createNamespace */])('radio-group'),
    radio_group_createComponent = radio_group_createNamespace[0],
    radio_group_bem = radio_group_createNamespace[1];

/* harmony default export */ var es_radio_group = (radio_group_createComponent({
  mixins: [ParentMixin('vanRadio'), FieldMixin],
  props: {
    value: null,
    disabled: Boolean,
    direction: String,
    checkedColor: String,
    iconSize: [Number, String]
  },
  watch: {
    value: function value(_value) {
      this.$emit('change', _value);
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": radio_group_bem([this.direction]),
      "attrs": {
        "role": "radiogroup"
      }
    }, [this.slots()]);
  }
}));
// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/tag/index.js

// Utils


 // Components

 // Types

var tag_createNamespace = Object(create["a" /* createNamespace */])('tag'),
    tag_createComponent = tag_createNamespace[0],
    tag_bem = tag_createNamespace[1];

function Tag(h, props, slots, ctx) {
  var _style, _ref;

  var type = props.type,
      mark = props.mark,
      plain = props.plain,
      color = props.color,
      round = props.round,
      size = props.size;
  var key = plain ? 'color' : 'backgroundColor';
  var style = (_style = {}, _style[key] = color, _style);

  if (props.textColor) {
    style.color = props.textColor;
  }

  var classes = {
    mark: mark,
    plain: plain,
    round: round
  };

  if (size) {
    classes[size] = size;
  }

  var CloseIcon = props.closeable && h(_vant_2_5_4_vant_es_icon["a" /* default */], {
    "attrs": {
      "name": "cross"
    },
    "class": tag_bem('close'),
    "on": {
      "click": function click(event) {
        event.stopPropagation();
        Object(functional["a" /* emit */])(ctx, 'close');
      }
    }
  });
  return h("transition", {
    "attrs": {
      "name": props.closeable ? 'van-fade' : null
    }
  }, [h("span", helper_default()([{
    "key": "content",
    "style": style,
    "class": [tag_bem([classes, type]), (_ref = {}, _ref[constant["d" /* BORDER_SURROUND */]] = plain, _ref)]
  }, Object(functional["b" /* inherit */])(ctx, true)]), [slots.default == null ? void 0 : slots.default(), CloseIcon])]);
}

Tag.props = {
  size: String,
  mark: Boolean,
  color: String,
  plain: Boolean,
  round: Boolean,
  textColor: String,
  closeable: Boolean,
  type: {
    type: String,
    default: 'default'
  }
};
/* harmony default export */ var es_tag = (tag_createComponent(Tag));
// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/radio/index.js



var radio_createNamespace = Object(create["a" /* createNamespace */])('radio'),
    radio_createComponent = radio_createNamespace[0],
    radio_bem = radio_createNamespace[1];

/* harmony default export */ var _vant_2_5_4_vant_es_radio = (radio_createComponent({
  mixins: [checkbox_CheckboxMixin({
    bem: radio_bem,
    role: 'radio',
    parent: 'vanRadio'
  })],
  computed: {
    currentValue: {
      get: function get() {
        return this.parent ? this.parent.value : this.value;
      },
      set: function set(val) {
        (this.parent || this).$emit('input', val);
      }
    },
    checked: function checked() {
      return this.currentValue === this.name;
    }
  },
  methods: {
    toggle: function toggle() {
      this.currentValue = this.name;
    }
  }
}));
// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/address-list/Item.js


// Utils

 // Components




 // Types

var Item_createNamespace = Object(create["a" /* createNamespace */])('address-item'),
    Item_createComponent = Item_createNamespace[0],
    Item_bem = Item_createNamespace[1];

function AddressItem(h, props, slots, ctx) {
  var disabled = props.disabled,
      switchable = props.switchable;

  function onClick() {
    if (switchable) {
      Object(functional["a" /* emit */])(ctx, 'select');
    }

    Object(functional["a" /* emit */])(ctx, 'click');
  }

  var genRightIcon = function genRightIcon() {
    return h(_vant_2_5_4_vant_es_icon["a" /* default */], {
      "attrs": {
        "name": "edit"
      },
      "class": Item_bem('edit'),
      "on": {
        "click": function click(event) {
          event.stopPropagation();
          Object(functional["a" /* emit */])(ctx, 'edit');
          Object(functional["a" /* emit */])(ctx, 'click');
        }
      }
    });
  };

  function genTag() {
    if (props.data.isDefault && props.defaultTagText) {
      return h(es_tag, {
        "attrs": {
          "type": "danger",
          "round": true
        },
        "class": Item_bem('tag')
      }, [props.defaultTagText]);
    }
  }

  function genContent() {
    var data = props.data;
    var Info = [h("div", {
      "class": Item_bem('name')
    }, [data.name + " " + data.tel, genTag()]), h("div", {
      "class": Item_bem('address')
    }, [data.address])];

    if (switchable && !disabled) {
      return h(_vant_2_5_4_vant_es_radio, {
        "attrs": {
          "name": data.id,
          "iconSize": 18
        }
      }, [Info]);
    }

    return Info;
  }

  return h("div", {
    "class": Item_bem({
      disabled: disabled
    }),
    "on": {
      "click": onClick
    }
  }, [h(es_cell, helper_default()([{
    "attrs": {
      "border": false,
      "valueClass": Item_bem('value')
    },
    "scopedSlots": {
      default: genContent,
      'right-icon': genRightIcon
    }
  }, Object(functional["b" /* inherit */])(ctx)])), slots.bottom == null ? void 0 : slots.bottom(Object(esm_extends["a" /* default */])({}, props.data, {
    disabled: disabled
  }))]);
}

AddressItem.props = {
  data: Object,
  disabled: Boolean,
  switchable: Boolean,
  defaultTagText: String
};
/* harmony default export */ var Item = (Item_createComponent(AddressItem));
// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/address-list/index.js

// Utils

 // Components



 // Types

var address_list_createNamespace = Object(create["a" /* createNamespace */])('address-list'),
    address_list_createComponent = address_list_createNamespace[0],
    address_list_bem = address_list_createNamespace[1],
    address_list_t = address_list_createNamespace[2];

function AddressList(h, props, slots, ctx) {
  function genList(list, disabled) {
    if (!list) {
      return;
    }

    return list.map(function (item, index) {
      return h(Item, {
        "attrs": {
          "data": item,
          "disabled": disabled,
          "switchable": props.switchable,
          "defaultTagText": props.defaultTagText
        },
        "key": item.id,
        "scopedSlots": {
          bottom: slots['item-bottom']
        },
        "on": {
          "select": function select() {
            Object(functional["a" /* emit */])(ctx, disabled ? 'select-disabled' : 'select', item, index);

            if (!disabled) {
              Object(functional["a" /* emit */])(ctx, 'input', item.id);
            }
          },
          "edit": function edit() {
            Object(functional["a" /* emit */])(ctx, disabled ? 'edit-disabled' : 'edit', item, index);
          },
          "click": function click() {
            Object(functional["a" /* emit */])(ctx, 'click-item', item, index);
          }
        }
      });
    });
  }

  var List = genList(props.list);
  var DisabledList = genList(props.disabledList, true);
  return h("div", helper_default()([{
    "class": address_list_bem()
  }, Object(functional["b" /* inherit */])(ctx)]), [slots.top == null ? void 0 : slots.top(), h(es_radio_group, {
    "attrs": {
      "value": props.value
    }
  }, [List]), props.disabledText && h("div", {
    "class": address_list_bem('disabled-text')
  }, [props.disabledText]), DisabledList, slots.default == null ? void 0 : slots.default(), h("div", {
    "class": address_list_bem('bottom')
  }, [h(_vant_2_5_4_vant_es_button["a" /* default */], {
    "attrs": {
      "round": true,
      "block": true,
      "type": "danger",
      "text": props.addButtonText || address_list_t('add')
    },
    "class": address_list_bem('add'),
    "on": {
      "click": function click() {
        Object(functional["a" /* emit */])(ctx, 'add');
      }
    }
  })])]);
}

AddressList.props = {
  list: Array,
  value: [Number, String],
  disabledList: Array,
  disabledText: String,
  addButtonText: String,
  defaultTagText: String,
  switchable: {
    type: Boolean,
    default: true
  }
};
/* harmony default export */ var es_address_list = (address_list_createComponent(AddressList));
// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/field/style/index.js





// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/switch/style/index.js



// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/radio/style/index.js




// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/radio-group/style/index.js


// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/icon/style/index.js



// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/contact-card/index.css
var contact_card = __webpack_require__("9712");

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/contact-card/style/index.js





// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/contact-card/index.js

// Utils

 // Components

 // Types

var contact_card_createNamespace = Object(create["a" /* createNamespace */])('contact-card'),
    contact_card_createComponent = contact_card_createNamespace[0],
    contact_card_bem = contact_card_createNamespace[1],
    contact_card_t = contact_card_createNamespace[2];

function ContactCard(h, props, slots, ctx) {
  var type = props.type,
      editable = props.editable;

  function onClick(event) {
    if (editable) {
      Object(functional["a" /* emit */])(ctx, 'click', event);
    }
  }

  function Content() {
    if (type === 'add') {
      return props.addText || contact_card_t('addText');
    }

    return [h("div", [contact_card_t('name') + "\uFF1A" + props.name]), h("div", [contact_card_t('tel') + "\uFF1A" + props.tel])];
  }

  return h(es_cell, helper_default()([{
    "attrs": {
      "center": true,
      "border": false,
      "isLink": editable,
      "valueClass": contact_card_bem('value'),
      "icon": type === 'edit' ? 'contact' : 'add-square'
    },
    "class": contact_card_bem([type]),
    "on": {
      "click": onClick
    }
  }, Object(functional["b" /* inherit */])(ctx)]), [Content()]);
}

ContactCard.props = {
  tel: String,
  name: String,
  addText: String,
  editable: {
    type: Boolean,
    default: true
  },
  type: {
    type: String,
    default: 'add'
  }
};
/* harmony default export */ var es_contact_card = (contact_card_createComponent(ContactCard));
// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/contact-list/index.css
var contact_list = __webpack_require__("1c37");

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/contact-list/style/index.js










// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/contact-list/index.js

// Utils


 // Components






 // Types

var contact_list_createNamespace = Object(create["a" /* createNamespace */])('contact-list'),
    contact_list_createComponent = contact_list_createNamespace[0],
    contact_list_bem = contact_list_createNamespace[1],
    contact_list_t = contact_list_createNamespace[2];

function ContactList(h, props, slots, ctx) {
  var List = props.list && props.list.map(function (item, index) {
    function onClick() {
      Object(functional["a" /* emit */])(ctx, 'input', item.id);
      Object(functional["a" /* emit */])(ctx, 'select', item, index);
    }

    function RightIcon() {
      return h(_vant_2_5_4_vant_es_radio, {
        "attrs": {
          "name": item.id,
          "iconSize": 16,
          "checkedColor": constant["h" /* RED */]
        },
        "on": {
          "click": onClick
        }
      });
    }

    function LeftIcon() {
      return h(_vant_2_5_4_vant_es_icon["a" /* default */], {
        "attrs": {
          "name": "edit"
        },
        "class": contact_list_bem('edit'),
        "on": {
          "click": function click(event) {
            event.stopPropagation();
            Object(functional["a" /* emit */])(ctx, 'edit', item, index);
          }
        }
      });
    }

    function Content() {
      var nodes = [item.name + "\uFF0C" + item.tel];

      if (item.isDefault && props.defaultTagText) {
        nodes.push(h(es_tag, {
          "attrs": {
            "type": "danger",
            "round": true
          },
          "class": contact_list_bem('item-tag')
        }, [props.defaultTagText]));
      }

      return nodes;
    }

    return h(es_cell, {
      "key": item.id,
      "attrs": {
        "isLink": true,
        "center": true,
        "valueClass": contact_list_bem('item-value')
      },
      "class": contact_list_bem('item'),
      "scopedSlots": {
        icon: LeftIcon,
        default: Content,
        'right-icon': RightIcon
      },
      "on": {
        "click": onClick
      }
    });
  });
  return h("div", helper_default()([{
    "class": contact_list_bem()
  }, Object(functional["b" /* inherit */])(ctx)]), [h(es_radio_group, {
    "attrs": {
      "value": props.value
    },
    "class": contact_list_bem('group')
  }, [List]), h("div", {
    "class": contact_list_bem('bottom')
  }, [h(_vant_2_5_4_vant_es_button["a" /* default */], {
    "attrs": {
      "round": true,
      "block": true,
      "type": "danger",
      "text": props.addText || contact_list_t('addText')
    },
    "class": contact_list_bem('add'),
    "on": {
      "click": function click() {
        Object(functional["a" /* emit */])(ctx, 'add');
      }
    }
  })])]);
}

ContactList.props = {
  value: null,
  list: Array,
  addText: String,
  defaultTagText: String
};
/* harmony default export */ var es_contact_list = (contact_list_createComponent(ContactList));
// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/contact-edit/index.css
var contact_edit = __webpack_require__("ce9f");

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/contact-edit/style/index.js












// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/contact-edit/index.js

// Utils

 // Components







var contact_edit_createNamespace = Object(create["a" /* createNamespace */])('contact-edit'),
    contact_edit_createComponent = contact_edit_createNamespace[0],
    contact_edit_bem = contact_edit_createNamespace[1],
    contact_edit_t = contact_edit_createNamespace[2];

var defaultContact = {
  tel: '',
  name: ''
};
/* harmony default export */ var es_contact_edit = (contact_edit_createComponent({
  props: {
    isEdit: Boolean,
    isSaving: Boolean,
    isDeleting: Boolean,
    showSetDefault: Boolean,
    setDefaultLabel: String,
    contactInfo: {
      type: Object,
      default: function _default() {
        return Object(esm_extends["a" /* default */])({}, defaultContact);
      }
    },
    telValidator: {
      type: Function,
      default: isMobile
    }
  },
  data: function data() {
    return {
      data: Object(esm_extends["a" /* default */])({}, defaultContact, {}, this.contactInfo),
      errorInfo: {
        name: '',
        tel: ''
      }
    };
  },
  watch: {
    contactInfo: function contactInfo(val) {
      this.data = Object(esm_extends["a" /* default */])({}, defaultContact, {}, val);
    }
  },
  methods: {
    onFocus: function onFocus(key) {
      this.errorInfo[key] = '';
    },
    getErrorMessageByKey: function getErrorMessageByKey(key) {
      var value = this.data[key].trim();

      switch (key) {
        case 'name':
          return value ? '' : contact_edit_t('nameInvalid');

        case 'tel':
          return this.telValidator(value) ? '' : contact_edit_t('telInvalid');
      }
    },
    onSave: function onSave() {
      var _this = this;

      var isValid = ['name', 'tel'].every(function (item) {
        var msg = _this.getErrorMessageByKey(item);

        if (msg) {
          _this.errorInfo[item] = msg;
        }

        return !msg;
      });

      if (isValid && !this.isSaving) {
        this.$emit('save', this.data);
      }
    },
    onDelete: function onDelete() {
      var _this2 = this;

      es_dialog["a" /* default */].confirm({
        message: contact_edit_t('confirmDelete')
      }).then(function () {
        _this2.$emit('delete', _this2.data);
      });
    }
  },
  render: function render() {
    var _this3 = this;

    var h = arguments[0];
    var data = this.data,
        errorInfo = this.errorInfo;

    var onFocus = function onFocus(name) {
      return function () {
        return _this3.onFocus(name);
      };
    };

    return h("div", {
      "class": contact_edit_bem()
    }, [h("div", {
      "class": contact_edit_bem('fields')
    }, [h(es_field, {
      "attrs": {
        "clearable": true,
        "maxlength": "30",
        "label": contact_edit_t('name'),
        "placeholder": contact_edit_t('nameEmpty'),
        "errorMessage": errorInfo.name
      },
      "on": {
        "focus": onFocus('name')
      },
      "model": {
        value: data.name,
        callback: function callback($$v) {
          _this3.$set(data, "name", $$v);
        }
      }
    }), h(es_field, {
      "attrs": {
        "clearable": true,
        "type": "tel",
        "label": contact_edit_t('tel'),
        "placeholder": contact_edit_t('telEmpty'),
        "errorMessage": errorInfo.tel
      },
      "on": {
        "focus": onFocus('tel')
      },
      "model": {
        value: data.tel,
        callback: function callback($$v) {
          _this3.$set(data, "tel", $$v);
        }
      }
    })]), this.showSetDefault && h(es_cell, {
      "attrs": {
        "title": this.setDefaultLabel,
        "border": false
      },
      "class": contact_edit_bem('switch-cell')
    }, [h(_vant_2_5_4_vant_es_switch, {
      "attrs": {
        "size": 24
      },
      "on": {
        "change": function change(event) {
          _this3.$emit('change-default', event);
        }
      },
      "model": {
        value: data.isDefault,
        callback: function callback($$v) {
          _this3.$set(data, "isDefault", $$v);
        }
      }
    })]), h("div", {
      "class": contact_edit_bem('buttons')
    }, [h(_vant_2_5_4_vant_es_button["a" /* default */], {
      "attrs": {
        "block": true,
        "round": true,
        "type": "danger",
        "text": contact_edit_t('save'),
        "loading": this.isSaving
      },
      "on": {
        "click": this.onSave
      }
    }), this.isEdit && h(_vant_2_5_4_vant_es_button["a" /* default */], {
      "attrs": {
        "block": true,
        "round": true,
        "text": contact_edit_t('delete'),
        "loading": this.isDeleting
      },
      "on": {
        "click": this.onDelete
      }
    })])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/tag/style/index.js




// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/cell/style/index.js




// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/cell-group/index.css
var cell_group = __webpack_require__("bb03");

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/cell-group/style/index.js


// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/cell-group/index.js

// Utils


 // Types

var cell_group_createNamespace = Object(create["a" /* createNamespace */])('cell-group'),
    cell_group_createComponent = cell_group_createNamespace[0],
    cell_group_bem = cell_group_createNamespace[1];

function CellGroup(h, props, slots, ctx) {
  var _ref;

  var Group = h("div", helper_default()([{
    "class": [cell_group_bem(), (_ref = {}, _ref[constant["f" /* BORDER_TOP_BOTTOM */]] = props.border, _ref)]
  }, Object(functional["b" /* inherit */])(ctx, true)]), [slots.default == null ? void 0 : slots.default()]);

  if (props.title || slots.title) {
    return h("div", [h("div", {
      "class": cell_group_bem('title')
    }, [slots.title ? slots.title() : props.title]), Group]);
  }

  return Group;
}

CellGroup.props = {
  title: String,
  border: {
    type: Boolean,
    default: true
  }
};
/* harmony default export */ var es_cell_group = (cell_group_createComponent(CellGroup));
// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/dialog/style/index.js
var dialog_style = __webpack_require__("ca55");

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/checkbox/style/index.js




// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/checkbox-group/index.css
var checkbox_group = __webpack_require__("b4df");

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/checkbox-group/style/index.js


// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/checkbox-group/index.js




var checkbox_group_createNamespace = Object(create["a" /* createNamespace */])('checkbox-group'),
    checkbox_group_createComponent = checkbox_group_createNamespace[0],
    checkbox_group_bem = checkbox_group_createNamespace[1];

/* harmony default export */ var es_checkbox_group = (checkbox_group_createComponent({
  mixins: [ParentMixin('vanCheckbox'), FieldMixin],
  props: {
    max: [Number, String],
    disabled: Boolean,
    direction: String,
    iconSize: [Number, String],
    checkedColor: String,
    value: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  watch: {
    value: function value(val) {
      this.$emit('change', val);
    }
  },
  methods: {
    // @exposed-api
    toggleAll: function toggleAll(checked) {
      if (checked === false) {
        this.$emit('input', []);
        return;
      }

      var children = this.children;

      if (!checked) {
        children = children.filter(function (item) {
          return !item.checked;
        });
      }

      var names = children.map(function (item) {
        return item.name;
      });
      this.$emit('input', names);
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": checkbox_group_bem([this.direction])
    }, [this.slots()]);
  }
}));
// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/submit-bar/index.css
var submit_bar = __webpack_require__("5ae6");

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/submit-bar/style/index.js






// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/submit-bar/index.js

// Utils

 // Components


 // Types

var submit_bar_createNamespace = Object(create["a" /* createNamespace */])('submit-bar'),
    submit_bar_createComponent = submit_bar_createNamespace[0],
    submit_bar_bem = submit_bar_createNamespace[1],
    submit_bar_t = submit_bar_createNamespace[2];

function SubmitBar(h, props, slots, ctx) {
  var tip = props.tip,
      price = props.price,
      tipIcon = props.tipIcon;

  function Text() {
    if (typeof price === 'number') {
      var priceArr = (price / 100).toFixed(props.decimalLength).split('.');
      var decimalStr = props.decimalLength ? "." + priceArr[1] : '';
      return h("div", {
        "style": {
          textAlign: props.textAlign ? props.textAlign : ''
        },
        "class": submit_bar_bem('text')
      }, [h("span", [props.label || submit_bar_t('label')]), h("span", {
        "class": submit_bar_bem('price')
      }, [props.currency, h("span", {
        "class": submit_bar_bem('price', 'integer')
      }, [priceArr[0]]), decimalStr]), props.suffixLabel && h("span", {
        "class": submit_bar_bem('suffix-label')
      }, [props.suffixLabel])]);
    }
  }

  function Tip() {
    if (slots.tip || tip) {
      return h("div", {
        "class": submit_bar_bem('tip')
      }, [tipIcon && h(_vant_2_5_4_vant_es_icon["a" /* default */], {
        "class": submit_bar_bem('tip-icon'),
        "attrs": {
          "name": tipIcon
        }
      }), tip && h("span", {
        "class": submit_bar_bem('tip-text')
      }, [tip]), slots.tip && slots.tip()]);
    }
  }

  return h("div", helper_default()([{
    "class": submit_bar_bem({
      'safe-area-inset-bottom': props.safeAreaInsetBottom
    })
  }, Object(functional["b" /* inherit */])(ctx)]), [slots.top && slots.top(), Tip(), h("div", {
    "class": submit_bar_bem('bar')
  }, [slots.default && slots.default(), Text(), h(_vant_2_5_4_vant_es_button["a" /* default */], {
    "attrs": {
      "round": true,
      "type": props.buttonType,
      "loading": props.loading,
      "disabled": props.disabled,
      "text": props.loading ? '' : props.buttonText
    },
    "class": submit_bar_bem('button', props.buttonType),
    "on": {
      "click": function click() {
        Object(functional["a" /* emit */])(ctx, 'submit');
      }
    }
  })])]);
}

SubmitBar.props = {
  tip: String,
  label: String,
  price: Number,
  tipIcon: String,
  loading: Boolean,
  disabled: Boolean,
  textAlign: String,
  buttonText: String,
  suffixLabel: String,
  safeAreaInsetBottom: Boolean,
  decimalLength: {
    type: [Number, String],
    default: 2
  },
  currency: {
    type: String,
    default: '¥'
  },
  buttonType: {
    type: String,
    default: 'danger'
  }
};
/* harmony default export */ var es_submit_bar = (submit_bar_createComponent(SubmitBar));
// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/nav-bar/index.css
var nav_bar = __webpack_require__("d20f");

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/nav-bar/style/index.js




// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/nav-bar/index.js

// Utils


 // Components

 // Types

var nav_bar_createNamespace = Object(create["a" /* createNamespace */])('nav-bar'),
    nav_bar_createComponent = nav_bar_createNamespace[0],
    nav_bar_bem = nav_bar_createNamespace[1];

function NavBar(h, props, slots, ctx) {
  var _ref;

  function LeftPart() {
    if (slots.left) {
      return slots.left();
    }

    return [props.leftArrow && h(_vant_2_5_4_vant_es_icon["a" /* default */], {
      "class": nav_bar_bem('arrow'),
      "attrs": {
        "name": "arrow-left"
      }
    }), props.leftText && h("span", {
      "class": nav_bar_bem('text')
    }, [props.leftText])];
  }

  function RightPart() {
    if (slots.right) {
      return slots.right();
    }

    if (props.rightText) {
      return h("span", {
        "class": nav_bar_bem('text')
      }, [props.rightText]);
    }
  }

  return h("div", helper_default()([{
    "style": {
      zIndex: props.zIndex
    },
    "class": [nav_bar_bem({
      fixed: props.fixed
    }), (_ref = {}, _ref[constant["b" /* BORDER_BOTTOM */]] = props.border, _ref)]
  }, Object(functional["b" /* inherit */])(ctx)]), [h("div", {
    "class": nav_bar_bem('left'),
    "on": {
      "click": ctx.listeners['click-left'] || utils["g" /* noop */]
    }
  }, [LeftPart()]), h("div", {
    "class": [nav_bar_bem('title'), 'van-ellipsis']
  }, [slots.title ? slots.title() : props.title]), h("div", {
    "class": nav_bar_bem('right'),
    "on": {
      "click": ctx.listeners['click-right'] || utils["g" /* noop */]
    }
  }, [RightPart()])]);
}

NavBar.props = {
  title: String,
  fixed: Boolean,
  zIndex: [Number, String],
  leftText: String,
  rightText: String,
  leftArrow: Boolean,
  border: {
    type: Boolean,
    default: true
  }
};
/* harmony default export */ var es_nav_bar = (nav_bar_createComponent(NavBar));
// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/toast/style/index.js
var toast_style = __webpack_require__("5661");

// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/divider/index.css
var divider = __webpack_require__("187b");

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/divider/style/index.js


// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/divider/index.js

// Utils

 // Types

var divider_createNamespace = Object(create["a" /* createNamespace */])('divider'),
    divider_createComponent = divider_createNamespace[0],
    divider_bem = divider_createNamespace[1];

function Divider(h, props, slots, ctx) {
  var _bem;

  return h("div", helper_default()([{
    "attrs": {
      "role": "separator"
    },
    "style": {
      borderColor: props.borderColor
    },
    "class": divider_bem((_bem = {
      dashed: props.dashed,
      hairline: props.hairline
    }, _bem["content-" + props.contentPosition] = slots.default, _bem))
  }, Object(functional["b" /* inherit */])(ctx, true)]), [slots.default && slots.default()]);
}

Divider.props = {
  dashed: Boolean,
  hairline: {
    type: Boolean,
    default: true
  },
  contentPosition: {
    type: String,
    default: 'center'
  }
};
/* harmony default export */ var es_divider = (divider_createComponent(Divider));
// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/tab/style/index.js


// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/tabs/style/index.js




// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/lazyload/style/index.js


// EXTERNAL MODULE: ./node_modules/_vue-lazyload@1.2.3@vue-lazyload/vue-lazyload.js
var vue_lazyload = __webpack_require__("5a2a");
var vue_lazyload_default = /*#__PURE__*/__webpack_require__.n(vue_lazyload);

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/lazyload/index.js

/* harmony default export */ var lazyload = (vue_lazyload_default.a);
// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/count-down/index.css
var count_down = __webpack_require__("2c3e");

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/count-down/style/index.js


// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/count-down/utils.js

var SECOND = 1000;
var MINUTE = 60 * SECOND;
var HOUR = 60 * MINUTE;
var DAY = 24 * HOUR;
function parseTimeData(time) {
  var days = Math.floor(time / DAY);
  var hours = Math.floor(time % DAY / HOUR);
  var minutes = Math.floor(time % HOUR / MINUTE);
  var seconds = Math.floor(time % MINUTE / SECOND);
  var milliseconds = Math.floor(time % SECOND);
  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    milliseconds: milliseconds
  };
}
function parseFormat(format, timeData) {
  var days = timeData.days;
  var hours = timeData.hours,
      minutes = timeData.minutes,
      seconds = timeData.seconds,
      milliseconds = timeData.milliseconds;

  if (format.indexOf('DD') === -1) {
    hours += days * 24;
  } else {
    format = format.replace('DD', Object(string["b" /* padZero */])(days));
  }

  if (format.indexOf('HH') === -1) {
    minutes += hours * 60;
  } else {
    format = format.replace('HH', Object(string["b" /* padZero */])(hours));
  }

  if (format.indexOf('mm') === -1) {
    seconds += minutes * 60;
  } else {
    format = format.replace('mm', Object(string["b" /* padZero */])(minutes));
  }

  if (format.indexOf('ss') === -1) {
    milliseconds += seconds * 1000;
  } else {
    format = format.replace('ss', Object(string["b" /* padZero */])(seconds));
  }

  if (format.indexOf('S') !== -1) {
    var ms = Object(string["b" /* padZero */])(milliseconds, 3);

    if (format.indexOf('SSS') !== -1) {
      format = format.replace('SSS', ms);
    } else if (format.indexOf('SS') !== -1) {
      format = format.replace('SS', ms.slice(0, 2));
    } else {
      format = format.replace('S', ms.charAt(0));
    }
  }

  return format;
}
function isSameSecond(time1, time2) {
  return Math.floor(time1 / 1000) === Math.floor(time2 / 1000);
}
// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/count-down/index.js




var count_down_createNamespace = Object(create["a" /* createNamespace */])('count-down'),
    count_down_createComponent = count_down_createNamespace[0],
    count_down_bem = count_down_createNamespace[1];

/* harmony default export */ var es_count_down = (count_down_createComponent({
  props: {
    millisecond: Boolean,
    time: {
      type: [Number, String],
      default: 0
    },
    format: {
      type: String,
      default: 'HH:mm:ss'
    },
    autoStart: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      remain: 0
    };
  },
  computed: {
    timeData: function timeData() {
      return parseTimeData(this.remain);
    },
    formattedTime: function formattedTime() {
      return parseFormat(this.format, this.timeData);
    }
  },
  watch: {
    time: {
      immediate: true,
      handler: 'reset'
    }
  },
  activated: function activated() {
    if (this.keepAlivePaused) {
      this.counting = true;
      this.keepAlivePaused = false;
      this.tick();
    }
  },
  deactivated: function deactivated() {
    if (this.counting) {
      this.pause();
      this.keepAlivePaused = true;
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.pause();
  },
  methods: {
    // @exposed-api
    start: function start() {
      if (this.counting) {
        return;
      }

      this.counting = true;
      this.endTime = Date.now() + this.remain;
      this.tick();
    },
    // @exposed-api
    pause: function pause() {
      this.counting = false;
      Object(raf["a" /* cancelRaf */])(this.rafId);
    },
    // @exposed-api
    reset: function reset() {
      this.pause();
      this.remain = +this.time;

      if (this.autoStart) {
        this.start();
      }
    },
    tick: function tick() {
      if (this.millisecond) {
        this.microTick();
      } else {
        this.macroTick();
      }
    },
    microTick: function microTick() {
      var _this = this;

      this.rafId = Object(raf["c" /* raf */])(function () {
        /* istanbul ignore if */
        // in case of call reset immediately after finish
        if (!_this.counting) {
          return;
        }

        _this.setRemain(_this.getRemain());

        if (_this.remain > 0) {
          _this.microTick();
        }
      });
    },
    macroTick: function macroTick() {
      var _this2 = this;

      this.rafId = Object(raf["c" /* raf */])(function () {
        /* istanbul ignore if */
        // in case of call reset immediately after finish
        if (!_this2.counting) {
          return;
        }

        var remain = _this2.getRemain();

        if (!isSameSecond(remain, _this2.remain) || remain === 0) {
          _this2.setRemain(remain);
        }

        if (_this2.remain > 0) {
          _this2.macroTick();
        }
      });
    },
    getRemain: function getRemain() {
      return Math.max(this.endTime - Date.now(), 0);
    },
    setRemain: function setRemain(remain) {
      this.remain = remain;
      this.$emit('change', this.timeData);

      if (remain === 0) {
        this.pause();
        this.$emit('finish');
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": count_down_bem()
    }, [this.slots('default', this.timeData) || this.formattedTime]);
  }
}));
// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/grid/index.css
var grid = __webpack_require__("f973");

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/grid/style/index.js


// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/grid/index.js




var grid_createNamespace = Object(create["a" /* createNamespace */])('grid'),
    grid_createComponent = grid_createNamespace[0],
    grid_bem = grid_createNamespace[1];

/* harmony default export */ var es_grid = (grid_createComponent({
  mixins: [ParentMixin('vanGrid')],
  props: {
    square: Boolean,
    gutter: [Number, String],
    iconSize: [Number, String],
    clickable: Boolean,
    columnNum: {
      type: [Number, String],
      default: 4
    },
    center: {
      type: Boolean,
      default: true
    },
    border: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    style: function style() {
      var gutter = this.gutter;

      if (gutter) {
        return {
          paddingLeft: Object(unit["a" /* addUnit */])(gutter)
        };
      }
    }
  },
  render: function render() {
    var _ref;

    var h = arguments[0];
    return h("div", {
      "style": this.style,
      "class": [grid_bem(), (_ref = {}, _ref[constant["e" /* BORDER_TOP */]] = this.border && !this.gutter, _ref)]
    }, [this.slots()]);
  }
}));
// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/grid-item/index.css
var grid_item = __webpack_require__("1ed3");

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/grid-item/style/index.js




// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/grid-item/index.js

// Utils


 // Mixins

 // Components




var grid_item_createNamespace = Object(create["a" /* createNamespace */])('grid-item'),
    grid_item_createComponent = grid_item_createNamespace[0],
    grid_item_bem = grid_item_createNamespace[1];

/* harmony default export */ var es_grid_item = (grid_item_createComponent({
  mixins: [ChildrenMixin('vanGrid')],
  props: Object(esm_extends["a" /* default */])({}, utils_router["c" /* routeProps */], {
    dot: Boolean,
    text: String,
    icon: String,
    iconPrefix: String,
    info: [Number, String]
  }),
  computed: {
    style: function style() {
      var _this$parent = this.parent,
          square = _this$parent.square,
          gutter = _this$parent.gutter,
          columnNum = _this$parent.columnNum;
      var percent = 100 / columnNum + "%";
      var style = {
        flexBasis: percent
      };

      if (square) {
        style.paddingTop = percent;
      } else if (gutter) {
        var gutterValue = Object(unit["a" /* addUnit */])(gutter);
        style.paddingRight = gutterValue;

        if (this.index >= columnNum) {
          style.marginTop = gutterValue;
        }
      }

      return style;
    },
    contentStyle: function contentStyle() {
      var _this$parent2 = this.parent,
          square = _this$parent2.square,
          gutter = _this$parent2.gutter;

      if (square && gutter) {
        var gutterValue = Object(unit["a" /* addUnit */])(gutter);
        return {
          right: gutterValue,
          bottom: gutterValue,
          height: 'auto'
        };
      }
    }
  },
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
      Object(utils_router["b" /* route */])(this.$router, this);
    },
    genIcon: function genIcon() {
      var h = this.$createElement;
      var iconSlot = this.slots('icon');

      if (iconSlot) {
        return h("div", {
          "class": grid_item_bem('icon-wrapper')
        }, [iconSlot, h(es_info["a" /* default */], {
          "attrs": {
            "dot": this.dot,
            "info": this.info
          }
        })]);
      }

      if (this.icon) {
        return h(_vant_2_5_4_vant_es_icon["a" /* default */], {
          "attrs": {
            "name": this.icon,
            "dot": this.dot,
            "info": this.info,
            "size": this.parent.iconSize,
            "classPrefix": this.iconPrefix
          },
          "class": grid_item_bem('icon')
        });
      }
    },
    getText: function getText() {
      var h = this.$createElement;
      var textSlot = this.slots('text');

      if (textSlot) {
        return textSlot;
      }

      if (this.text) {
        return h("span", {
          "class": grid_item_bem('text')
        }, [this.text]);
      }
    },
    genContent: function genContent() {
      var slot = this.slots();

      if (slot) {
        return slot;
      }

      return [this.genIcon(), this.getText()];
    }
  },
  render: function render() {
    var _ref;

    var h = arguments[0];
    var _this$parent3 = this.parent,
        center = _this$parent3.center,
        border = _this$parent3.border,
        square = _this$parent3.square,
        gutter = _this$parent3.gutter,
        clickable = _this$parent3.clickable;
    return h("div", {
      "class": [grid_item_bem({
        square: square
      })],
      "style": this.style
    }, [h("div", {
      "style": this.contentStyle,
      "attrs": {
        "role": clickable ? 'button' : null,
        "tabindex": clickable ? 0 : null
      },
      "class": [grid_item_bem('content', {
        center: center,
        square: square,
        clickable: clickable,
        surround: border && gutter
      }), (_ref = {}, _ref[constant["a" /* BORDER */]] = border, _ref)],
      "on": {
        "click": this.onClick
      }
    }, [this.genContent()])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/loading/style/index.js


// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/tabbar/index.css
var tabbar = __webpack_require__("f19c");

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/tabbar/style/index.js


// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/tabbar/index.js




var tabbar_createNamespace = Object(create["a" /* createNamespace */])('tabbar'),
    tabbar_createComponent = tabbar_createNamespace[0],
    tabbar_bem = tabbar_createNamespace[1];

/* harmony default export */ var es_tabbar = (tabbar_createComponent({
  mixins: [ParentMixin('vanTabbar')],
  props: {
    route: Boolean,
    zIndex: [Number, String],
    activeColor: String,
    inactiveColor: String,
    safeAreaInsetBottom: Boolean,
    value: {
      type: [Number, String],
      default: 0
    },
    border: {
      type: Boolean,
      default: true
    },
    fixed: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    value: 'setActiveItem',
    children: 'setActiveItem'
  },
  methods: {
    setActiveItem: function setActiveItem() {
      var _this = this;

      this.children.forEach(function (item, index) {
        item.active = (item.name || index) === _this.value;
      });
    },
    onChange: function onChange(active) {
      if (active !== this.value) {
        this.$emit('input', active);
        this.$emit('change', active);
      }
    }
  },
  render: function render() {
    var _ref;

    var h = arguments[0];
    return h("div", {
      "style": {
        zIndex: this.zIndex
      },
      "class": [(_ref = {}, _ref[constant["f" /* BORDER_TOP_BOTTOM */]] = this.border, _ref), tabbar_bem({
        fixed: this.fixed,
        'safe-area-inset-bottom': this.safeAreaInsetBottom
      })]
    }, [this.slots()]);
  }
}));
// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/tabbar-item/index.css
var tabbar_item = __webpack_require__("867f");

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/tabbar-item/style/index.js




// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/tabbar-item/index.js

// Utils

 // Mixins

 // Components




var tabbar_item_createNamespace = Object(create["a" /* createNamespace */])('tabbar-item'),
    tabbar_item_createComponent = tabbar_item_createNamespace[0],
    tabbar_item_bem = tabbar_item_createNamespace[1];

/* harmony default export */ var es_tabbar_item = (tabbar_item_createComponent({
  mixins: [ChildrenMixin('vanTabbar')],
  props: Object(esm_extends["a" /* default */])({}, utils_router["c" /* routeProps */], {
    dot: Boolean,
    icon: String,
    name: [Number, String],
    info: [Number, String],
    iconPrefix: String
  }),
  data: function data() {
    return {
      active: false
    };
  },
  computed: {
    routeActive: function routeActive() {
      var to = this.to,
          $route = this.$route;

      if (to && $route) {
        var config = Object(utils["d" /* isObject */])(to) ? to : {
          path: to
        };
        var pathMatched = config.path === $route.path;
        var nameMatched = Object(utils["b" /* isDef */])(config.name) && config.name === $route.name;
        return pathMatched || nameMatched;
      }
    }
  },
  methods: {
    onClick: function onClick(event) {
      this.parent.onChange(this.name || this.index);
      this.$emit('click', event);
      Object(utils_router["b" /* route */])(this.$router, this);
    },
    genIcon: function genIcon(active) {
      var h = this.$createElement;
      var slot = this.slots('icon', {
        active: active
      });

      if (slot) {
        return slot;
      }

      if (this.icon) {
        return h(_vant_2_5_4_vant_es_icon["a" /* default */], {
          "attrs": {
            "name": this.icon,
            "classPrefix": this.iconPrefix
          }
        });
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    var active = this.parent.route ? this.routeActive : this.active;
    var color = this.parent[active ? 'activeColor' : 'inactiveColor'];
    return h("div", {
      "class": tabbar_item_bem({
        active: active
      }),
      "style": {
        color: color
      },
      "on": {
        "click": this.onClick
      }
    }, [h("div", {
      "class": tabbar_item_bem('icon')
    }, [this.genIcon(active), h(es_info["a" /* default */], {
      "attrs": {
        "dot": this.dot,
        "info": this.info
      }
    })]), h("div", {
      "class": tabbar_item_bem('text')
    }, [this.slots('default', {
      active: active
    })])]);
  }
}));
// CONCATENATED MODULE: ./src/plugins/vant.js
















































































































 // 1.Tabbar

external_Vue_default.a.use(es_tabbar).use(es_tabbar_item); // 2.loading组件

external_Vue_default.a.use(_vant_2_5_4_vant_es_loading["a" /* default */]); // 3.栅栏格子

external_Vue_default.a.use(es_grid).use(es_grid_item); // 4.倒计时

external_Vue_default.a.use(es_count_down); // 5.图片懒加载

// options 为可选参数，无则不传
external_Vue_default.a.use(lazyload); // 6.Tabbar 标签栏

external_Vue_default.a.use(es_tab).use(es_tabs); // 7.分割线

external_Vue_default.a.use(es_divider); // 8.轻弹窗

external_Vue_default.a.use(es_toast["a" /* default */]); // 9.导航栏

external_Vue_default.a.use(es_nav_bar); // 10.提交订单

external_Vue_default.a.use(es_submit_bar); // 11.复选框

external_Vue_default.a.use(_vant_2_5_4_vant_es_checkbox).use(es_checkbox_group); // 12.提示框

external_Vue_default.a.use(es_dialog["a" /* default */]); // 13.单元格

external_Vue_default.a.use(es_cell).use(es_cell_group); // 14.tag标记

external_Vue_default.a.use(es_tag); // 15.填写订单

external_Vue_default.a.use(es_contact_card).use(es_contact_list).use(es_contact_edit); // 16.icon图标

external_Vue_default.a.use(_vant_2_5_4_vant_es_icon["a" /* default */]); // 17.单选框及单选框组

external_Vue_default.a.use(es_radio_group);
external_Vue_default.a.use(_vant_2_5_4_vant_es_radio); // 18.switch 开关

external_Vue_default.a.use(_vant_2_5_4_vant_es_switch); // 19.field输入框

external_Vue_default.a.use(es_field); // 20.联系地址

external_Vue_default.a.use(es_address_list); // 21.地址编辑

external_Vue_default.a.use(es_address_edit); // 22.省市区选择器

external_Vue_default.a.use(es_area); // 23.弹出层

external_Vue_default.a.use(es_popup); // 24.滑动单元格

external_Vue_default.a.use(es_swipe_cell); // 25.van Button

external_Vue_default.a.use(_vant_2_5_4_vant_es_button["a" /* default */]); // 26.时间选择

external_Vue_default.a.use(datetime_picker); // 27.优惠券

external_Vue_default.a.use(es_coupon_cell).use(es_coupon_list); // 28.粘性布局

external_Vue_default.a.use(es_sticky); // 29.侧边导航

external_Vue_default.a.use(es_sidebar);
external_Vue_default.a.use(es_sidebar_item); // 30.商品导航

external_Vue_default.a.use(es_goods_action).use(es_goods_action_icon).use(es_goods_action_button); // 遮罩

external_Vue_default.a.use(es_overlay["a" /* default */]); // 日历

external_Vue_default.a.use(es_calendar);
external_Vue_default.a.use(es_form);
external_Vue_default.a.use(es_uploader);
external_Vue_default.a.use(_vant_2_5_4_vant_es_image);
external_Vue_default.a.use(es_action_sheet);
external_Vue_default.a.use(es_pagination);
external_Vue_default.a.use(es_search);
external_Vue_default.a.use(es_col);
external_Vue_default.a.use(es_row);
external_Vue_default.a.use(es_image_preview);
external_Vue_default.a.use(es_picker);
external_Vue_default.a.use(_vant_2_5_4_vant_es_swipe);
external_Vue_default.a.use(es_swipe_item);
// EXTERNAL MODULE: ./src/plugins/wechatAuth.js
var wechatAuth = __webpack_require__("549a");

// CONCATENATED MODULE: ./src/main.js

 // A modern alternative to CSS resets

 // global css
// 移动端适配






 // filters

 // directives


 // 微信登录插件
// 设置appid

external_Vue_default.a.use(wechatAuth["a" /* default */], {
  appid: "wx6c803c1d9c4157df"
});

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    fastclick_default.a.attach(document.body);
  }, false);
}

if (true) __webpack_require__("223d"); // 手机端调试工具
// import Vconsole from 'vconsole'
// const vConsole = new Vconsole()
// Vue.use(vConsole)

external_Vue_default.a.config.productionTip = false;
new external_Vue_default.a({
  el: '#app',
  router: router["a" /* default */],
  store: store["a" /* default */],
  render: function render(h) {
    return h(App);
  }
});

/***/ }),

/***/ "5880":
/***/ (function(module, exports) {

module.exports = Vuex;

/***/ }),

/***/ "59ba":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5a2a":
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Vue-Lazyload.js v1.2.3
 * (c) 2018 Awe <hilongjw@gmail.com>
 * Released under the MIT License.
 */
!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";function e(e){return e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function t(e){e=e||{};var t=arguments.length,i=0;if(1===t)return e;for(;++i<t;){var o=arguments[i];g(e)&&(e=o),r(o)&&n(e,o)}return e}function n(e,n){m(e,n);for(var o in n)if("__proto__"!==o&&i(n,o)){var a=n[o];r(a)?("undefined"===L(e[o])&&"function"===L(a)&&(e[o]=a),e[o]=t(e[o]||{},a)):e[o]=a}return e}function r(e){return"object"===L(e)||"function"===L(e)}function i(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function o(e,t){if(e.length){var n=e.indexOf(t);return n>-1?e.splice(n,1):void 0}}function a(e,t){for(var n=!1,r=0,i=e.length;r<i;r++)if(t(e[r])){n=!0;break}return n}function s(e,t){if("IMG"===e.tagName&&e.getAttribute("data-srcset")){var n=e.getAttribute("data-srcset"),r=[],i=e.parentNode,o=i.offsetWidth*t,a=void 0,s=void 0,u=void 0;n=n.trim().split(","),n.map(function(e){e=e.trim(),a=e.lastIndexOf(" "),-1===a?(s=e,u=999998):(s=e.substr(0,a),u=parseInt(e.substr(a+1,e.length-a-2),10)),r.push([u,s])}),r.sort(function(e,t){if(e[0]<t[0])return-1;if(e[0]>t[0])return 1;if(e[0]===t[0]){if(-1!==t[1].indexOf(".webp",t[1].length-5))return 1;if(-1!==e[1].indexOf(".webp",e[1].length-5))return-1}return 0});for(var l="",d=void 0,c=r.length,h=0;h<c;h++)if(d=r[h],d[0]>=o){l=d[1];break}return l}}function u(e,t){for(var n=void 0,r=0,i=e.length;r<i;r++)if(t(e[r])){n=e[r];break}return n}function l(){if(!k)return!1;var e=!0,t=document;try{var n=t.createElement("object");n.type="image/webp",n.style.visibility="hidden",n.innerHTML="!",t.body.appendChild(n),e=!n.offsetWidth,t.body.removeChild(n)}catch(t){e=!1}return e}function d(e,t){var n=null,r=0;return function(){if(!n){var i=Date.now()-r,o=this,a=arguments,s=function(){r=Date.now(),n=!1,e.apply(o,a)};i>=t?s():n=setTimeout(s,t)}}}function c(e){return null!==e&&"object"===(void 0===e?"undefined":p(e))}function h(e){if(!(e instanceof Object))return[];if(Object.keys)return Object.keys(e);var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t}function f(e){for(var t=e.length,n=[],r=0;r<t;r++)n.push(e[r]);return n}function v(){}var p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),g=function(e){return null==e||"function"!=typeof e&&"object"!==(void 0===e?"undefined":p(e))},m=function(e,t){if(null===e||void 0===e)throw new TypeError("expected first argument to be an object.");if(void 0===t||"undefined"==typeof Symbol)return e;if("function"!=typeof Object.getOwnPropertySymbols)return e;for(var n=Object.prototype.propertyIsEnumerable,r=Object(e),i=arguments.length,o=0;++o<i;)for(var a=Object(arguments[o]),s=Object.getOwnPropertySymbols(a),u=0;u<s.length;u++){var l=s[u];n.call(a,l)&&(r[l]=a[l])}return r},w=Object.prototype.toString,L=function(t){var n=void 0===t?"undefined":p(t);return"undefined"===n?"undefined":null===t?"null":!0===t||!1===t||t instanceof Boolean?"boolean":"string"===n||t instanceof String?"string":"number"===n||t instanceof Number?"number":"function"===n||t instanceof Function?void 0!==t.constructor.name&&"Generator"===t.constructor.name.slice(0,9)?"generatorfunction":"function":void 0!==Array.isArray&&Array.isArray(t)?"array":t instanceof RegExp?"regexp":t instanceof Date?"date":(n=w.call(t),"[object RegExp]"===n?"regexp":"[object Date]"===n?"date":"[object Arguments]"===n?"arguments":"[object Error]"===n?"error":"[object Promise]"===n?"promise":e(t)?"buffer":"[object Set]"===n?"set":"[object WeakSet]"===n?"weakset":"[object Map]"===n?"map":"[object WeakMap]"===n?"weakmap":"[object Symbol]"===n?"symbol":"[object Map Iterator]"===n?"mapiterator":"[object Set Iterator]"===n?"setiterator":"[object String Iterator]"===n?"stringiterator":"[object Array Iterator]"===n?"arrayiterator":"[object Int8Array]"===n?"int8array":"[object Uint8Array]"===n?"uint8array":"[object Uint8ClampedArray]"===n?"uint8clampedarray":"[object Int16Array]"===n?"int16array":"[object Uint16Array]"===n?"uint16array":"[object Int32Array]"===n?"int32array":"[object Uint32Array]"===n?"uint32array":"[object Float32Array]"===n?"float32array":"[object Float64Array]"===n?"float64array":"object")},_=t,k="undefined"!=typeof window,E=k&&"IntersectionObserver"in window,A={event:"event",observer:"observer"},j=function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}if(k)return"function"==typeof window.CustomEvent?window.CustomEvent:(e.prototype=window.Event.prototype,e)}(),z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return k?window.devicePixelRatio||e:e},T=function(){if(k){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch(e){}return e}}(),O={on:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];T?e.addEventListener(t,n,{capture:r,passive:!0}):e.addEventListener(t,n,r)},off:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];e.removeEventListener(t,n,r)}},I=function(e,t,n){var r=new Image;r.src=e.src,r.onload=function(){t({naturalHeight:r.naturalHeight,naturalWidth:r.naturalWidth,src:r.src})},r.onerror=function(e){n(e)}},x=function(e,t){return"undefined"!=typeof getComputedStyle?getComputedStyle(e,null).getPropertyValue(t):e.style[t]},S=function(e){return x(e,"overflow")+x(e,"overflow-y")+x(e,"overflow-x")},$=function(e){if(k){if(!(e instanceof HTMLElement))return window;for(var t=e;t&&t!==document.body&&t!==document.documentElement&&t.parentNode;){if(/(scroll|auto)/.test(S(t)))return t;t=t.parentNode}return window}},H={},Q=function(){function e(t){var n=t.el,r=t.src,i=t.error,o=t.loading,a=t.bindType,s=t.$parent,u=t.options,l=t.elRenderer;b(this,e),this.el=n,this.src=r,this.error=i,this.loading=o,this.bindType=a,this.attempt=0,this.naturalHeight=0,this.naturalWidth=0,this.options=u,this.rect=null,this.$parent=s,this.elRenderer=l,this.performanceData={init:Date.now(),loadStart:0,loadEnd:0},this.filter(),this.initState(),this.render("loading",!1)}return y(e,[{key:"initState",value:function(){this.el.dataset.src=this.src,this.state={error:!1,loaded:!1,rendered:!1}}},{key:"record",value:function(e){this.performanceData[e]=Date.now()}},{key:"update",value:function(e){var t=e.src,n=e.loading,r=e.error,i=this.src;this.src=t,this.loading=n,this.error=r,this.filter(),i!==this.src&&(this.attempt=0,this.initState())}},{key:"getRect",value:function(){this.rect=this.el.getBoundingClientRect()}},{key:"checkInView",value:function(){return this.getRect(),this.rect.top<window.innerHeight*this.options.preLoad&&this.rect.bottom>this.options.preLoadTop&&this.rect.left<window.innerWidth*this.options.preLoad&&this.rect.right>0}},{key:"filter",value:function(){var e=this;h(this.options.filter).map(function(t){e.options.filter[t](e,e.options)})}},{key:"renderLoading",value:function(e){var t=this;I({src:this.loading},function(n){t.render("loading",!1),e()},function(){e(),t.options.silent||console.warn("VueLazyload log: load failed with loading image("+t.loading+")")})}},{key:"load",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v;return this.attempt>this.options.attempt-1&&this.state.error?(this.options.silent||console.log("VueLazyload log: "+this.src+" tried too more than "+this.options.attempt+" times"),void t()):this.state.loaded||H[this.src]?(this.state.loaded=!0,t(),this.render("loaded",!0)):void this.renderLoading(function(){e.attempt++,e.record("loadStart"),I({src:e.src},function(n){e.naturalHeight=n.naturalHeight,e.naturalWidth=n.naturalWidth,e.state.loaded=!0,e.state.error=!1,e.record("loadEnd"),e.render("loaded",!1),H[e.src]=1,t()},function(t){!e.options.silent&&console.error(t),e.state.error=!0,e.state.loaded=!1,e.render("error",!1)})})}},{key:"render",value:function(e,t){this.elRenderer(this,e,t)}},{key:"performance",value:function(){var e="loading",t=0;return this.state.loaded&&(e="loaded",t=(this.performanceData.loadEnd-this.performanceData.loadStart)/1e3),this.state.error&&(e="error"),{src:this.src,state:e,time:t}}},{key:"destroy",value:function(){this.el=null,this.src=null,this.error=null,this.loading=null,this.bindType=null,this.attempt=0}}]),e}(),C="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",R=["scroll","wheel","mousewheel","resize","animationend","transitionend","touchmove"],W={rootMargin:"0px",threshold:0},D=function(e){return function(){function t(e){var n=e.preLoad,r=e.error,i=e.throttleWait,o=e.preLoadTop,a=e.dispatchEvent,s=e.loading,u=e.attempt,c=e.silent,h=void 0===c||c,f=e.scale,v=e.listenEvents,p=(e.hasbind,e.filter),y=e.adapter,g=e.observer,m=e.observerOptions;b(this,t),this.version="1.2.3",this.mode=A.event,this.ListenerQueue=[],this.TargetIndex=0,this.TargetQueue=[],this.options={silent:h,dispatchEvent:!!a,throttleWait:i||200,preLoad:n||1.3,preLoadTop:o||0,error:r||C,loading:s||C,attempt:u||3,scale:f||z(f),ListenEvents:v||R,hasbind:!1,supportWebp:l(),filter:p||{},adapter:y||{},observer:!!g,observerOptions:m||W},this._initEvent(),this.lazyLoadHandler=d(this._lazyLoadHandler.bind(this),this.options.throttleWait),this.setMode(this.options.observer?A.observer:A.event)}return y(t,[{key:"config",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};_(this.options,e)}},{key:"performance",value:function(){var e=[];return this.ListenerQueue.map(function(t){e.push(t.performance())}),e}},{key:"addLazyBox",value:function(e){this.ListenerQueue.push(e),k&&(this._addListenerTarget(window),this._observer&&this._observer.observe(e.el),e.$el&&e.$el.parentNode&&this._addListenerTarget(e.$el.parentNode))}},{key:"add",value:function(t,n,r){var i=this;if(a(this.ListenerQueue,function(e){return e.el===t}))return this.update(t,n),e.nextTick(this.lazyLoadHandler);var o=this._valueFormatter(n.value),u=o.src,l=o.loading,d=o.error;e.nextTick(function(){u=s(t,i.options.scale)||u,i._observer&&i._observer.observe(t);var o=Object.keys(n.modifiers)[0],a=void 0;o&&(a=r.context.$refs[o],a=a?a.$el||a:document.getElementById(o)),a||(a=$(t));var c=new Q({bindType:n.arg,$parent:a,el:t,loading:l,error:d,src:u,elRenderer:i._elRenderer.bind(i),options:i.options});i.ListenerQueue.push(c),k&&(i._addListenerTarget(window),i._addListenerTarget(a)),i.lazyLoadHandler(),e.nextTick(function(){return i.lazyLoadHandler()})})}},{key:"update",value:function(t,n){var r=this,i=this._valueFormatter(n.value),o=i.src,a=i.loading,l=i.error;o=s(t,this.options.scale)||o;var d=u(this.ListenerQueue,function(e){return e.el===t});d&&d.update({src:o,loading:a,error:l}),this._observer&&(this._observer.unobserve(t),this._observer.observe(t)),this.lazyLoadHandler(),e.nextTick(function(){return r.lazyLoadHandler()})}},{key:"remove",value:function(e){if(e){this._observer&&this._observer.unobserve(e);var t=u(this.ListenerQueue,function(t){return t.el===e});t&&(this._removeListenerTarget(t.$parent),this._removeListenerTarget(window),o(this.ListenerQueue,t)&&t.destroy())}}},{key:"removeComponent",value:function(e){e&&(o(this.ListenerQueue,e),this._observer&&this._observer.unobserve(e.el),e.$parent&&e.$el.parentNode&&this._removeListenerTarget(e.$el.parentNode),this._removeListenerTarget(window))}},{key:"setMode",value:function(e){var t=this;E||e!==A.observer||(e=A.event),this.mode=e,e===A.event?(this._observer&&(this.ListenerQueue.forEach(function(e){t._observer.unobserve(e.el)}),this._observer=null),this.TargetQueue.forEach(function(e){t._initListen(e.el,!0)})):(this.TargetQueue.forEach(function(e){t._initListen(e.el,!1)}),this._initIntersectionObserver())}},{key:"_addListenerTarget",value:function(e){if(e){var t=u(this.TargetQueue,function(t){return t.el===e});return t?t.childrenCount++:(t={el:e,id:++this.TargetIndex,childrenCount:1,listened:!0},this.mode===A.event&&this._initListen(t.el,!0),this.TargetQueue.push(t)),this.TargetIndex}}},{key:"_removeListenerTarget",value:function(e){var t=this;this.TargetQueue.forEach(function(n,r){n.el===e&&(--n.childrenCount||(t._initListen(n.el,!1),t.TargetQueue.splice(r,1),n=null))})}},{key:"_initListen",value:function(e,t){var n=this;this.options.ListenEvents.forEach(function(r){return O[t?"on":"off"](e,r,n.lazyLoadHandler)})}},{key:"_initEvent",value:function(){var e=this;this.Event={listeners:{loading:[],loaded:[],error:[]}},this.$on=function(t,n){e.Event.listeners[t].push(n)},this.$once=function(t,n){function r(){i.$off(t,r),n.apply(i,arguments)}var i=e;e.$on(t,r)},this.$off=function(t,n){if(!n)return void(e.Event.listeners[t]=[]);o(e.Event.listeners[t],n)},this.$emit=function(t,n,r){e.Event.listeners[t].forEach(function(e){return e(n,r)})}}},{key:"_lazyLoadHandler",value:function(){var e=this,t=!1;this.ListenerQueue.forEach(function(n,r){n.state.loaded||(t=n.checkInView())&&n.load(function(){!n.error&&n.loaded&&e.ListenerQueue.splice(r,1)})})}},{key:"_initIntersectionObserver",value:function(){var e=this;E&&(this._observer=new IntersectionObserver(this._observerHandler.bind(this),this.options.observerOptions),this.ListenerQueue.length&&this.ListenerQueue.forEach(function(t){e._observer.observe(t.el)}))}},{key:"_observerHandler",value:function(e,t){var n=this;e.forEach(function(e){e.isIntersecting&&n.ListenerQueue.forEach(function(t){if(t.el===e.target){if(t.state.loaded)return n._observer.unobserve(t.el);t.load()}})})}},{key:"_elRenderer",value:function(e,t,n){if(e.el){var r=e.el,i=e.bindType,o=void 0;switch(t){case"loading":o=e.loading;break;case"error":o=e.error;break;default:o=e.src}if(i?r.style[i]='url("'+o+'")':r.getAttribute("src")!==o&&r.setAttribute("src",o),r.setAttribute("lazy",t),this.$emit(t,e,n),this.options.adapter[t]&&this.options.adapter[t](e,this.options),this.options.dispatchEvent){var a=new j(t,{detail:e});r.dispatchEvent(a)}}}},{key:"_valueFormatter",value:function(e){var t=e,n=this.options.loading,r=this.options.error;return c(e)&&(e.src||this.options.silent||console.error("Vue Lazyload warning: miss src with "+e),t=e.src,n=e.loading||this.options.loading,r=e.error||this.options.error),{src:t,loading:n,error:r}}}]),t}()},B=function(e){return{props:{tag:{type:String,default:"div"}},render:function(e){return!1===this.show?e(this.tag):e(this.tag,null,this.$slots.default)},data:function(){return{el:null,state:{loaded:!1},rect:{},show:!1}},mounted:function(){this.el=this.$el,e.addLazyBox(this),e.lazyLoadHandler()},beforeDestroy:function(){e.removeComponent(this)},methods:{getRect:function(){this.rect=this.$el.getBoundingClientRect()},checkInView:function(){return this.getRect(),k&&this.rect.top<window.innerHeight*e.options.preLoad&&this.rect.bottom>0&&this.rect.left<window.innerWidth*e.options.preLoad&&this.rect.right>0},load:function(){this.show=!0,this.state.loaded=!0,this.$emit("show",this)}}}},V=function(){function e(t){var n=t.lazy;b(this,e),this.lazy=n,n.lazyContainerMananger=this,this._queue=[]}return y(e,[{key:"bind",value:function(e,t,n){var r=new N({el:e,binding:t,vnode:n,lazy:this.lazy});this._queue.push(r)}},{key:"update",value:function(e,t,n){var r=u(this._queue,function(t){return t.el===e});r&&r.update({el:e,binding:t,vnode:n})}},{key:"unbind",value:function(e,t,n){var r=u(this._queue,function(t){return t.el===e});r&&(r.clear(),o(this._queue,r))}}]),e}(),M={selector:"img"},N=function(){function e(t){var n=t.el,r=t.binding,i=t.vnode,o=t.lazy;b(this,e),this.el=null,this.vnode=i,this.binding=r,this.options={},this.lazy=o,this._queue=[],this.update({el:n,binding:r})}return y(e,[{key:"update",value:function(e){var t=this,n=e.el,r=e.binding;this.el=n,this.options=_({},M,r.value),this.getImgs().forEach(function(e){t.lazy.add(e,_({},t.binding,{value:{src:e.dataset.src,error:e.dataset.error,loading:e.dataset.loading}}),t.vnode)})}},{key:"getImgs",value:function(){return f(this.el.querySelectorAll(this.options.selector))}},{key:"clear",value:function(){var e=this;this.getImgs().forEach(function(t){return e.lazy.remove(t)}),this.vnode=null,this.binding=null,this.lazy=null}}]),e}();return{install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=D(e),r=new n(t),i=new V({lazy:r}),o="2"===e.version.split(".")[0];e.prototype.$Lazyload=r,t.lazyComponent&&e.component("lazy-component",B(r)),o?(e.directive("lazy",{bind:r.add.bind(r),update:r.update.bind(r),componentUpdated:r.lazyLoadHandler.bind(r),unbind:r.remove.bind(r)}),e.directive("lazy-container",{bind:i.bind.bind(i),update:i.update.bind(i),unbind:i.unbind.bind(i)})):(e.directive("lazy",{bind:r.lazyLoadHandler.bind(r),update:function(e,t){_(this.vm.$refs,this.vm.$els),r.add(this.el,{modifiers:this.modifiers||{},arg:this.arg,value:e,oldValue:t},{context:this.vm})},unbind:function(){r.remove(this.el)}}),e.directive("lazy-container",{update:function(e,t){i.update(this.el,{modifiers:this.modifiers||{},arg:this.arg,value:e,oldValue:t},{context:this.vm})},unbind:function(){i.unbind(this.el)}}))}}});


/***/ }),

/***/ "5ae6":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5be3":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5f9d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BindEventMixin; });
/* harmony import */ var _utils_dom_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("24b9");
/**
 * Bind event when mounted or activated
 */

function BindEventMixin(handler) {
  function bind() {
    if (!this.binded) {
      handler.call(this, _utils_dom_event__WEBPACK_IMPORTED_MODULE_0__[/* on */ "b"], true);
      this.binded = true;
    }
  }

  function unbind() {
    if (this.binded) {
      handler.call(this, _utils_dom_event__WEBPACK_IMPORTED_MODULE_0__[/* off */ "a"], false);
      this.binded = false;
    }
  }

  return {
    mounted: bind,
    activated: bind,
    deactivated: unbind,
    beforeDestroy: unbind
  };
}

/***/ }),

/***/ "623f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "6389":
/***/ (function(module, exports) {

module.exports = VueRouter;

/***/ }),

/***/ "66fa":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "72e1":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "756e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7813":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return camelize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return padZero; });
var camelizeRE = /-(\w)/g;
function camelize(str) {
  return str.replace(camelizeRE, function (_, c) {
    return c.toUpperCase();
  });
}
function padZero(num, targetLength) {
  if (targetLength === void 0) {
    targetLength = 2;
  }

  var str = num + '';

  while (str.length < targetLength) {
    str = '0' + str;
  }

  return str;
}

/***/ }),

/***/ "7b05":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];

        if (isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (isArray(target)) {
            target.push(source);
        } else if (target && typeof target === 'object') {
            if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (!target || typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (isArray(target) && isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                    target[i] = merge(targetItem, item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};

var encode = function encode(str, defaultEncoder, charset) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = typeof str === 'string' ? str : String(str);

    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    compactQueue(queue);

    return value;
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

var combine = function combine(a, b) {
    return [].concat(a, b);
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    merge: merge
};


/***/ }),

/***/ "7f1d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "816c":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;;(function () {
	'use strict';

	/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */

	/*jslint browser:true, node:true*/
	/*global define, Event, Node*/


	/**
	 * Instantiate fast-clicking listeners on the specified layer.
	 *
	 * @constructor
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	function FastClick(layer, options) {
		var oldOnClick;

		options = options || {};

		/**
		 * Whether a click is currently being tracked.
		 *
		 * @type boolean
		 */
		this.trackingClick = false;


		/**
		 * Timestamp for when click tracking started.
		 *
		 * @type number
		 */
		this.trackingClickStart = 0;


		/**
		 * The element being tracked for a click.
		 *
		 * @type EventTarget
		 */
		this.targetElement = null;


		/**
		 * X-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartX = 0;


		/**
		 * Y-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartY = 0;


		/**
		 * ID of the last touch, retrieved from Touch.identifier.
		 *
		 * @type number
		 */
		this.lastTouchIdentifier = 0;


		/**
		 * Touchmove boundary, beyond which a click will be cancelled.
		 *
		 * @type number
		 */
		this.touchBoundary = options.touchBoundary || 10;


		/**
		 * The FastClick layer.
		 *
		 * @type Element
		 */
		this.layer = layer;

		/**
		 * The minimum time between tap(touchstart and touchend) events
		 *
		 * @type number
		 */
		this.tapDelay = options.tapDelay || 200;

		/**
		 * The maximum time for a tap
		 *
		 * @type number
		 */
		this.tapTimeout = options.tapTimeout || 700;

		if (FastClick.notNeeded(layer)) {
			return;
		}

		// Some old versions of Android don't have Function.prototype.bind
		function bind(method, context) {
			return function() { return method.apply(context, arguments); };
		}


		var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
		var context = this;
		for (var i = 0, l = methods.length; i < l; i++) {
			context[methods[i]] = bind(context[methods[i]], context);
		}

		// Set up event handlers as required
		if (deviceIsAndroid) {
			layer.addEventListener('mouseover', this.onMouse, true);
			layer.addEventListener('mousedown', this.onMouse, true);
			layer.addEventListener('mouseup', this.onMouse, true);
		}

		layer.addEventListener('click', this.onClick, true);
		layer.addEventListener('touchstart', this.onTouchStart, false);
		layer.addEventListener('touchmove', this.onTouchMove, false);
		layer.addEventListener('touchend', this.onTouchEnd, false);
		layer.addEventListener('touchcancel', this.onTouchCancel, false);

		// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
		// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
		// layer when they are cancelled.
		if (!Event.prototype.stopImmediatePropagation) {
			layer.removeEventListener = function(type, callback, capture) {
				var rmv = Node.prototype.removeEventListener;
				if (type === 'click') {
					rmv.call(layer, type, callback.hijacked || callback, capture);
				} else {
					rmv.call(layer, type, callback, capture);
				}
			};

			layer.addEventListener = function(type, callback, capture) {
				var adv = Node.prototype.addEventListener;
				if (type === 'click') {
					adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
						if (!event.propagationStopped) {
							callback(event);
						}
					}), capture);
				} else {
					adv.call(layer, type, callback, capture);
				}
			};
		}

		// If a handler is already declared in the element's onclick attribute, it will be fired before
		// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
		// adding it as listener.
		if (typeof layer.onclick === 'function') {

			// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
			// - the old one won't work if passed to addEventListener directly.
			oldOnClick = layer.onclick;
			layer.addEventListener('click', function(event) {
				oldOnClick(event);
			}, false);
			layer.onclick = null;
		}
	}

	/**
	* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
	*
	* @type boolean
	*/
	var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

	/**
	 * Android requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


	/**
	 * iOS requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


	/**
	 * iOS 4 requires an exception for select elements.
	 *
	 * @type boolean
	 */
	var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


	/**
	 * iOS 6.0-7.* requires the target element to be manually derived
	 *
	 * @type boolean
	 */
	var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

	/**
	 * BlackBerry requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

	/**
	 * Determine whether a given element requires a native click.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element needs a native click
	 */
	FastClick.prototype.needsClick = function(target) {
		switch (target.nodeName.toLowerCase()) {

		// Don't send a synthetic click to disabled inputs (issue #62)
		case 'button':
		case 'select':
		case 'textarea':
			if (target.disabled) {
				return true;
			}

			break;
		case 'input':

			// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
			if ((deviceIsIOS && target.type === 'file') || target.disabled) {
				return true;
			}

			break;
		case 'label':
		case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
		case 'video':
			return true;
		}

		return (/\bneedsclick\b/).test(target.className);
	};


	/**
	 * Determine whether a given element requires a call to focus to simulate click into element.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
	 */
	FastClick.prototype.needsFocus = function(target) {
		switch (target.nodeName.toLowerCase()) {
		case 'textarea':
			return true;
		case 'select':
			return !deviceIsAndroid;
		case 'input':
			switch (target.type) {
			case 'button':
			case 'checkbox':
			case 'file':
			case 'image':
			case 'radio':
			case 'submit':
				return false;
			}

			// No point in attempting to focus disabled inputs
			return !target.disabled && !target.readOnly;
		default:
			return (/\bneedsfocus\b/).test(target.className);
		}
	};


	/**
	 * Send a click event to the specified element.
	 *
	 * @param {EventTarget|Element} targetElement
	 * @param {Event} event
	 */
	FastClick.prototype.sendClick = function(targetElement, event) {
		var clickEvent, touch;

		// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
		if (document.activeElement && document.activeElement !== targetElement) {
			document.activeElement.blur();
		}

		touch = event.changedTouches[0];

		// Synthesise a click event, with an extra attribute so it can be tracked
		clickEvent = document.createEvent('MouseEvents');
		clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
		clickEvent.forwardedTouchEvent = true;
		targetElement.dispatchEvent(clickEvent);
	};

	FastClick.prototype.determineEventType = function(targetElement) {

		//Issue #159: Android Chrome Select Box does not open with a synthetic click event
		if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
			return 'mousedown';
		}

		return 'click';
	};


	/**
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.focus = function(targetElement) {
		var length;

		// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
		if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
			length = targetElement.value.length;
			targetElement.setSelectionRange(length, length);
		} else {
			targetElement.focus();
		}
	};


	/**
	 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
	 *
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.updateScrollParent = function(targetElement) {
		var scrollParent, parentElement;

		scrollParent = targetElement.fastClickScrollParent;

		// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
		// target element was moved to another parent.
		if (!scrollParent || !scrollParent.contains(targetElement)) {
			parentElement = targetElement;
			do {
				if (parentElement.scrollHeight > parentElement.offsetHeight) {
					scrollParent = parentElement;
					targetElement.fastClickScrollParent = parentElement;
					break;
				}

				parentElement = parentElement.parentElement;
			} while (parentElement);
		}

		// Always update the scroll top tracker if possible.
		if (scrollParent) {
			scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
		}
	};


	/**
	 * @param {EventTarget} targetElement
	 * @returns {Element|EventTarget}
	 */
	FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {

		// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
		if (eventTarget.nodeType === Node.TEXT_NODE) {
			return eventTarget.parentNode;
		}

		return eventTarget;
	};


	/**
	 * On touch start, record the position and scroll offset.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchStart = function(event) {
		var targetElement, touch, selection;

		// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
		if (event.targetTouches.length > 1) {
			return true;
		}

		targetElement = this.getTargetElementFromEventTarget(event.target);
		touch = event.targetTouches[0];

		if (deviceIsIOS) {

			// Only trusted events will deselect text on iOS (issue #49)
			selection = window.getSelection();
			if (selection.rangeCount && !selection.isCollapsed) {
				return true;
			}

			if (!deviceIsIOS4) {

				// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
				// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
				// with the same identifier as the touch event that previously triggered the click that triggered the alert.
				// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
				// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
				// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
				// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
				// random integers, it's safe to to continue if the identifier is 0 here.
				if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
					event.preventDefault();
					return false;
				}

				this.lastTouchIdentifier = touch.identifier;

				// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
				// 1) the user does a fling scroll on the scrollable layer
				// 2) the user stops the fling scroll with another tap
				// then the event.target of the last 'touchend' event will be the element that was under the user's finger
				// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
				// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
				this.updateScrollParent(targetElement);
			}
		}

		this.trackingClick = true;
		this.trackingClickStart = event.timeStamp;
		this.targetElement = targetElement;

		this.touchStartX = touch.pageX;
		this.touchStartY = touch.pageY;

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			event.preventDefault();
		}

		return true;
	};


	/**
	 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.touchHasMoved = function(event) {
		var touch = event.changedTouches[0], boundary = this.touchBoundary;

		if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
			return true;
		}

		return false;
	};


	/**
	 * Update the last position.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchMove = function(event) {
		if (!this.trackingClick) {
			return true;
		}

		// If the touch has moved, cancel the click tracking
		if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
			this.trackingClick = false;
			this.targetElement = null;
		}

		return true;
	};


	/**
	 * Attempt to find the labelled control for the given label element.
	 *
	 * @param {EventTarget|HTMLLabelElement} labelElement
	 * @returns {Element|null}
	 */
	FastClick.prototype.findControl = function(labelElement) {

		// Fast path for newer browsers supporting the HTML5 control attribute
		if (labelElement.control !== undefined) {
			return labelElement.control;
		}

		// All browsers under test that support touch events also support the HTML5 htmlFor attribute
		if (labelElement.htmlFor) {
			return document.getElementById(labelElement.htmlFor);
		}

		// If no for attribute exists, attempt to retrieve the first labellable descendant element
		// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
		return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
	};


	/**
	 * On touch end, determine whether to send a click event at once.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchEnd = function(event) {
		var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

		if (!this.trackingClick) {
			return true;
		}

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			this.cancelNextClick = true;
			return true;
		}

		if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
			return true;
		}

		// Reset to prevent wrong click cancel on input (issue #156).
		this.cancelNextClick = false;

		this.lastClickTime = event.timeStamp;

		trackingClickStart = this.trackingClickStart;
		this.trackingClick = false;
		this.trackingClickStart = 0;

		// On some iOS devices, the targetElement supplied with the event is invalid if the layer
		// is performing a transition or scroll, and has to be re-detected manually. Note that
		// for this to function correctly, it must be called *after* the event target is checked!
		// See issue #57; also filed as rdar://13048589 .
		if (deviceIsIOSWithBadTarget) {
			touch = event.changedTouches[0];

			// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
			targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
			targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
		}

		targetTagName = targetElement.tagName.toLowerCase();
		if (targetTagName === 'label') {
			forElement = this.findControl(targetElement);
			if (forElement) {
				this.focus(targetElement);
				if (deviceIsAndroid) {
					return false;
				}

				targetElement = forElement;
			}
		} else if (this.needsFocus(targetElement)) {

			// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
			// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
			if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
				this.targetElement = null;
				return false;
			}

			this.focus(targetElement);
			this.sendClick(targetElement, event);

			// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
			// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
			if (!deviceIsIOS || targetTagName !== 'select') {
				this.targetElement = null;
				event.preventDefault();
			}

			return false;
		}

		if (deviceIsIOS && !deviceIsIOS4) {

			// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
			// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
			scrollParent = targetElement.fastClickScrollParent;
			if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
				return true;
			}
		}

		// Prevent the actual click from going though - unless the target node is marked as requiring
		// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
		if (!this.needsClick(targetElement)) {
			event.preventDefault();
			this.sendClick(targetElement, event);
		}

		return false;
	};


	/**
	 * On touch cancel, stop tracking the click.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.onTouchCancel = function() {
		this.trackingClick = false;
		this.targetElement = null;
	};


	/**
	 * Determine mouse events which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onMouse = function(event) {

		// If a target element was never set (because a touch event was never fired) allow the event
		if (!this.targetElement) {
			return true;
		}

		if (event.forwardedTouchEvent) {
			return true;
		}

		// Programmatically generated events targeting a specific element should be permitted
		if (!event.cancelable) {
			return true;
		}

		// Derive and check the target element to see whether the mouse event needs to be permitted;
		// unless explicitly enabled, prevent non-touch click events from triggering actions,
		// to prevent ghost/doubleclicks.
		if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

			// Prevent any user-added listeners declared on FastClick element from being fired.
			if (event.stopImmediatePropagation) {
				event.stopImmediatePropagation();
			} else {

				// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
				event.propagationStopped = true;
			}

			// Cancel the event
			event.stopPropagation();
			event.preventDefault();

			return false;
		}

		// If the mouse event is permitted, return true for the action to go through.
		return true;
	};


	/**
	 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
	 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
	 * an actual click which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onClick = function(event) {
		var permitted;

		// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
		if (this.trackingClick) {
			this.targetElement = null;
			this.trackingClick = false;
			return true;
		}

		// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
		if (event.target.type === 'submit' && event.detail === 0) {
			return true;
		}

		permitted = this.onMouse(event);

		// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
		if (!permitted) {
			this.targetElement = null;
		}

		// If clicks are permitted, return true for the action to go through.
		return permitted;
	};


	/**
	 * Remove all FastClick's event listeners.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.destroy = function() {
		var layer = this.layer;

		if (deviceIsAndroid) {
			layer.removeEventListener('mouseover', this.onMouse, true);
			layer.removeEventListener('mousedown', this.onMouse, true);
			layer.removeEventListener('mouseup', this.onMouse, true);
		}

		layer.removeEventListener('click', this.onClick, true);
		layer.removeEventListener('touchstart', this.onTouchStart, false);
		layer.removeEventListener('touchmove', this.onTouchMove, false);
		layer.removeEventListener('touchend', this.onTouchEnd, false);
		layer.removeEventListener('touchcancel', this.onTouchCancel, false);
	};


	/**
	 * Check whether FastClick is needed.
	 *
	 * @param {Element} layer The layer to listen on
	 */
	FastClick.notNeeded = function(layer) {
		var metaViewport;
		var chromeVersion;
		var blackberryVersion;
		var firefoxVersion;

		// Devices that don't support touch don't need FastClick
		if (typeof window.ontouchstart === 'undefined') {
			return true;
		}

		// Chrome version - zero for other browsers
		chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (chromeVersion) {

			if (deviceIsAndroid) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// Chrome 32 and above with width=device-width or less don't need FastClick
					if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}

			// Chrome desktop doesn't need FastClick (issue #15)
			} else {
				return true;
			}
		}

		if (deviceIsBlackBerry10) {
			blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

			// BlackBerry 10.3+ does not require Fastclick library.
			// https://github.com/ftlabs/fastclick/issues/251
			if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// user-scalable=no eliminates click delay.
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// width=device-width (or less than device-width) eliminates click delay.
					if (document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}
			}
		}

		// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
		if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		// Firefox version - zero for other browsers
		firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (firefoxVersion >= 27) {
			// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

			metaViewport = document.querySelector('meta[name=viewport]');
			if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
				return true;
			}
		}

		// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
		// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
		if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		return false;
	};


	/**
	 * Factory method for creating a FastClick object
	 *
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	FastClick.attach = function(layer, options) {
		return new FastClick(layer, options);
	};


	if (true) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return FastClick;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "82b1":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "867f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ "94c8":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9536":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"menuText":"#bfcbd9","menuActiveText":"#409EFF","subMenuActiveText":"#f4f4f5","menuBg":"#304156","menuHover":"#263445","subMenuBg":"#1f2d3d","subMenuHover":"#001528","sideBarWidth":"5.6rem"};

/***/ }),

/***/ "9586":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("23c4");
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("caa2");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("f25d");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ea6e");
/* harmony import */ var _utils_functional__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("28bd");
/* harmony import */ var _utils_dom_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("24b9");


// Utils


 // Types

var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* createNamespace */ "a"])('overlay'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function preventTouchMove(event) {
  Object(_utils_dom_event__WEBPACK_IMPORTED_MODULE_5__[/* preventDefault */ "c"])(event, true);
}

function Overlay(h, props, slots, ctx) {
  var style = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
    zIndex: props.zIndex
  }, props.customStyle);

  if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* isDef */ "b"])(props.duration)) {
    style.animationDuration = props.duration + "s";
  }

  return h("transition", {
    "attrs": {
      "name": "van-fade"
    }
  }, [h("div", _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
    "directives": [{
      name: "show",
      value: props.show
    }],
    "style": style,
    "class": [bem(), props.className],
    "on": {
      "touchmove": preventTouchMove
    }
  }, Object(_utils_functional__WEBPACK_IMPORTED_MODULE_4__[/* inherit */ "b"])(ctx, true)]), [slots.default && slots.default()])]);
}

Overlay.props = {
  show: Boolean,
  zIndex: [Number, String],
  duration: [Number, String],
  className: null,
  customStyle: Object
};
/* harmony default export */ __webpack_exports__["a"] = (createComponent(Overlay));

/***/ }),

/***/ "9712":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9b69":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9c06":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9e64":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9eab":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a166":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a18c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export constantRoutes */
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8bbf");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("6389");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("f121");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_2__);



vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_router__WEBPACK_IMPORTED_MODULE_1___default.a);
var constantRoutes = [{
  path: '/',
  redirect: '/dashboard'
}, {
  path: '/home',
  name: 'home',
  component: function component() {
    return Promise.all(/* import() */[__webpack_require__.e("chunk-2d230a62"), __webpack_require__.e("chunk-f2e80490")]).then(__webpack_require__.bind(null, "6511"));
  }
}, {
  path: '/mymemorial',
  name: 'mymemorial',
  component: function component() {
    return Promise.all(/* import() */[__webpack_require__.e("chunk-18ff9fbe"), __webpack_require__.e("chunk-417565a0")]).then(__webpack_require__.bind(null, "6587"));
  }
}, {
  path: '/comments',
  name: 'comments',
  component: function component() {
    return Promise.all(/* import() */[__webpack_require__.e("chunk-2d230a62"), __webpack_require__.e("chunk-75f8456f")]).then(__webpack_require__.bind(null, "e9dc"));
  }
}, {
  path: '/page',
  name: 'page',
  component: function component() {
    return Promise.all(/* import() */[__webpack_require__.e("chunk-2d230a62"), __webpack_require__.e("chunk-2d2105d2"), __webpack_require__.e("chunk-a7cc2be2")]).then(__webpack_require__.bind(null, "e348"));
  }
}, {
  path: '/memorialPage',
  name: 'memorialPage',
  component: function component() {
    return __webpack_require__.e(/* import() */ "chunk-df5af61c").then(__webpack_require__.bind(null, "b5d0"));
  }
}, {
  path: '/memorial',
  name: 'memorial',
  component: function component() {
    return Promise.all(/* import() */[__webpack_require__.e("chunk-2d230a62"), __webpack_require__.e("chunk-148553ec")]).then(__webpack_require__.bind(null, "f0c9"));
  }
}, {
  path: '/mine',
  name: 'mine',
  component: function component() {
    return __webpack_require__.e(/* import() */ "chunk-760d8ca5").then(__webpack_require__.bind(null, "3cc8"));
  }
}, {
  path: '/user',
  name: 'user',
  component: function component() {
    return __webpack_require__.e(/* import() */ "chunk-ff6d7d58").then(__webpack_require__.bind(null, "a547"));
  }
}, {
  path: '/dashboard',
  name: 'dashboard',
  component: function component() {
    return Promise.all(/* import() */[__webpack_require__.e("chunk-2d230a62"), __webpack_require__.e("chunk-c66162fe")]).then(__webpack_require__.bind(null, "4601"));
  }
}];

var createRouter = function createRouter() {
  return new vue_router__WEBPACK_IMPORTED_MODULE_1___default.a({
    mode: _config__WEBPACK_IMPORTED_MODULE_2__["api"].mode,
    base: _config__WEBPACK_IMPORTED_MODULE_2__["api"].base,
    scrollBehavior: function scrollBehavior() {
      return {
        y: 0
      };
    },
    routes: constantRoutes
  });
};

/* harmony default export */ __webpack_exports__["a"] = (createRouter());

/***/ }),

/***/ "a7d0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a9f0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("23c4");
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("f25d");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("083c");
/* harmony import */ var _utils_functional__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("28bd");
/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("48d4");

// Utils

 // Components

 // Types

var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* createNamespace */ "a"])('icon'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function isImage(name) {
  return name ? name.indexOf('/') !== -1 : false;
} // compatible with legacy usage, should be removed in next major version


var LEGACY_MAP = {
  medel: 'medal',
  'medel-o': 'medal-o'
};

function correctName(name) {
  return name && LEGACY_MAP[name] || name;
}

function Icon(h, props, slots, ctx) {
  var name = correctName(props.name);
  var imageIcon = isImage(name);
  return h(props.tag, _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
    "class": [props.classPrefix, imageIcon ? '' : props.classPrefix + "-" + name],
    "style": {
      color: props.color,
      fontSize: Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* addUnit */ "a"])(props.size)
    }
  }, Object(_utils_functional__WEBPACK_IMPORTED_MODULE_3__[/* inherit */ "b"])(ctx, true)]), [slots.default && slots.default(), imageIcon && h("img", {
    "class": bem('image'),
    "attrs": {
      "src": name
    }
  }), h(_info__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    "attrs": {
      "dot": props.dot,
      "info": props.info
    }
  })]);
}

Icon.props = {
  dot: Boolean,
  name: String,
  size: [Number, String],
  info: [Number, String],
  color: String,
  tag: {
    type: String,
    default: 'i'
  },
  classPrefix: {
    type: String,
    default: bem()
  }
};
/* harmony default export */ __webpack_exports__["a"] = (createComponent(Icon));

/***/ }),

/***/ "aa93":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "aaf3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

module.exports = {
    'default': 'RFC3986',
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return value;
        }
    },
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};


/***/ }),

/***/ "aaf9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isNumeric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isNaN; });
function isNumeric(val) {
  return /^\d+(\.\d+)?$/.test(val);
}
function isNaN(val) {
  if (Number.isNaN) {
    return Number.isNaN(val);
  } // eslint-disable-next-line no-self-compare


  return val !== val;
}

/***/ }),

/***/ "adc2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b207":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b4df":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "bb03":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "bb63":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("caa2");
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("23c4");
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("f25d");
/* harmony import */ var _utils_functional__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("28bd");
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("3360");
/* harmony import */ var _utils_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("f20f");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("a9f0");
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("4614");


// Utils



 // Components


 // Types

var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* createNamespace */ "a"])('button'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function Button(h, props, slots, ctx) {
  var _ref;

  var tag = props.tag,
      icon = props.icon,
      type = props.type,
      color = props.color,
      plain = props.plain,
      disabled = props.disabled,
      loading = props.loading,
      hairline = props.hairline,
      loadingText = props.loadingText;
  var style = {};

  if (color) {
    style.color = plain ? color : _utils_constant__WEBPACK_IMPORTED_MODULE_4__[/* WHITE */ "i"];

    if (!plain) {
      // Use background instead of backgroundColor to make linear-gradient work
      style.background = color;
    } // hide border when color is linear-gradient


    if (color.indexOf('gradient') !== -1) {
      style.border = 0;
    } else {
      style.borderColor = color;
    }
  }

  function onClick(event) {
    if (!loading && !disabled) {
      Object(_utils_functional__WEBPACK_IMPORTED_MODULE_3__[/* emit */ "a"])(ctx, 'click', event);
      Object(_utils_router__WEBPACK_IMPORTED_MODULE_5__[/* functionalRoute */ "a"])(ctx);
    }
  }

  function onTouchstart(event) {
    Object(_utils_functional__WEBPACK_IMPORTED_MODULE_3__[/* emit */ "a"])(ctx, 'touchstart', event);
  }

  var classes = [bem([type, props.size, {
    plain: plain,
    loading: loading,
    disabled: disabled,
    hairline: hairline,
    block: props.block,
    round: props.round,
    square: props.square
  }]), (_ref = {}, _ref[_utils_constant__WEBPACK_IMPORTED_MODULE_4__[/* BORDER_SURROUND */ "d"]] = hairline, _ref)];

  function Content() {
    var content = [];

    if (loading) {
      content.push(h(_loading__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
        "class": bem('loading'),
        "attrs": {
          "size": props.loadingSize,
          "type": props.loadingType,
          "color": "currentColor"
        }
      }));
    } else if (icon) {
      content.push(h(_icon__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
        "attrs": {
          "name": icon,
          "classPrefix": props.iconPrefix
        },
        "class": bem('icon')
      }));
    }

    var text;

    if (loading) {
      text = loadingText;
    } else {
      text = slots.default ? slots.default() : props.text;
    }

    if (text) {
      content.push(h("span", {
        "class": bem('text')
      }, [text]));
    }

    return content;
  }

  return h(tag, _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_1___default()([{
    "style": style,
    "class": classes,
    "attrs": {
      "type": props.nativeType,
      "disabled": disabled
    },
    "on": {
      "click": onClick,
      "touchstart": onTouchstart
    }
  }, Object(_utils_functional__WEBPACK_IMPORTED_MODULE_3__[/* inherit */ "b"])(ctx)]), [Content()]);
}

Button.props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, _utils_router__WEBPACK_IMPORTED_MODULE_5__[/* routeProps */ "c"], {
  text: String,
  icon: String,
  color: String,
  block: Boolean,
  plain: Boolean,
  round: Boolean,
  square: Boolean,
  loading: Boolean,
  hairline: Boolean,
  disabled: Boolean,
  nativeType: String,
  loadingText: String,
  loadingType: String,
  tag: {
    type: String,
    default: 'button'
  },
  type: {
    type: String,
    default: 'default'
  },
  size: {
    type: String,
    default: 'normal'
  },
  loadingSize: {
    type: String,
    default: '20px'
  }
});
/* harmony default export */ __webpack_exports__["a"] = (createComponent(Button));

/***/ }),

/***/ "c3a0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c7cb":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ca00":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ca55":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _style_base_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2698");
/* harmony import */ var _style_base_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_base_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _overlay_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("a7d0");
/* harmony import */ var _overlay_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_overlay_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _info_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("72e1");
/* harmony import */ var _info_index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_info_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icon_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("2947");
/* harmony import */ var _icon_index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_icon_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _popup_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4637");
/* harmony import */ var _popup_index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_popup_index_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _loading_index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("a166");
/* harmony import */ var _loading_index_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_loading_index_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _button_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("cd53");
/* harmony import */ var _button_index_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_button_index_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("d286");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_7__);









/***/ }),

/***/ "caa2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "cd53":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ce9f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "cebe":
/***/ (function(module, exports) {

module.exports = axios;

/***/ }),

/***/ "d20f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d286":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "dcfc":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "df17":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("7b05");

var has = Object.prototype.hasOwnProperty;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};

var interpretNumericEntities = function (str) {
    return str.replace(/&#(\d+);/g, function ($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};

// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;

    var charset = options.charset;
    if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
            if (parts[i].indexOf('utf8=') === 0) {
                if (parts[i] === charsetSentinel) {
                    charset = 'utf-8';
                } else if (parts[i] === isoSentinel) {
                    charset = 'iso-8859-1';
                }
                skipIndex = i;
                i = parts.length; // The eslint settings do not allow break;
            }
        }
    }

    for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
            continue;
        }
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset);
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset);
            val = options.decoder(part.slice(pos + 1), defaults.decoder, charset);
        }

        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
            val = interpretNumericEntities(val);
        }

        if (val && options.comma && val.indexOf(',') > -1) {
            val = val.split(',');
        }

        if (has.call(obj, key)) {
            obj[key] = utils.combine(obj[key], val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options) {
    var leaf = val;

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]' && options.parseArrays) {
            obj = [].concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === '') {
                obj = { 0: leaf };
            } else if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while ((segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options);
};

var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new Error('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;

    return {
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        depth: typeof opts.depth === 'number' ? opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (str, opts) {
    var options = normalizeParseOptions(opts);

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options);
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};


/***/ }),

/***/ "df33":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/_@babel_runtime@7.8.7@@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("caa2");

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__("8bbf");
var external_Vue_default = /*#__PURE__*/__webpack_require__.n(external_Vue_);

// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/utils/create/index.js + 6 modules
var create = __webpack_require__("f25d");

// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/utils/format/unit.js
var unit = __webpack_require__("083c");

// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/utils/constant.js
var constant = __webpack_require__("3360");

// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/mixins/popup/index.js + 4 modules
var popup = __webpack_require__("2cf7");

// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/button/index.js
var es_button = __webpack_require__("bb63");

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/dialog/Dialog.js





var _createNamespace = Object(create["a" /* createNamespace */])('dialog'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

/* harmony default export */ var Dialog = (createComponent({
  mixins: [Object(popup["a" /* PopupMixin */])()],
  props: {
    title: String,
    width: [Number, String],
    message: String,
    className: null,
    callback: Function,
    beforeClose: Function,
    messageAlign: String,
    cancelButtonText: String,
    cancelButtonColor: String,
    confirmButtonText: String,
    confirmButtonColor: String,
    showCancelButton: Boolean,
    transition: {
      type: String,
      default: 'van-dialog-bounce'
    },
    showConfirmButton: {
      type: Boolean,
      default: true
    },
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      loading: {
        confirm: false,
        cancel: false
      }
    };
  },
  methods: {
    onClickOverlay: function onClickOverlay() {
      this.handleAction('overlay');
    },
    handleAction: function handleAction(action) {
      var _this = this;

      this.$emit(action); // show not trigger close event when hidden

      if (!this.value) {
        return;
      }

      if (this.beforeClose) {
        this.loading[action] = true;
        this.beforeClose(action, function (state) {
          if (state !== false && _this.loading[action]) {
            _this.onClose(action);
          }

          _this.loading.confirm = false;
          _this.loading.cancel = false;
        });
      } else {
        this.onClose(action);
      }
    },
    onClose: function onClose(action) {
      this.close();

      if (this.callback) {
        this.callback(action);
      }
    },
    onOpened: function onOpened() {
      this.$emit('opened');
    },
    onClosed: function onClosed() {
      this.$emit('closed');
    },
    genButtons: function genButtons() {
      var _this2 = this,
          _ref;

      var h = this.$createElement;
      var multiple = this.showCancelButton && this.showConfirmButton;
      return h("div", {
        "class": [constant["e" /* BORDER_TOP */], bem('footer', {
          buttons: multiple
        })]
      }, [this.showCancelButton && h(es_button["a" /* default */], {
        "attrs": {
          "size": "large",
          "loading": this.loading.cancel,
          "text": this.cancelButtonText || t('cancel')
        },
        "class": bem('cancel'),
        "style": {
          color: this.cancelButtonColor
        },
        "on": {
          "click": function click() {
            _this2.handleAction('cancel');
          }
        }
      }), this.showConfirmButton && h(es_button["a" /* default */], {
        "attrs": {
          "size": "large",
          "loading": this.loading.confirm,
          "text": this.confirmButtonText || t('confirm')
        },
        "class": [bem('confirm'), (_ref = {}, _ref[constant["c" /* BORDER_LEFT */]] = multiple, _ref)],
        "style": {
          color: this.confirmButtonColor
        },
        "on": {
          "click": function click() {
            _this2.handleAction('confirm');
          }
        }
      })]);
    }
  },
  render: function render() {
    var _bem;

    var h = arguments[0];

    if (!this.shouldRender) {
      return;
    }

    var message = this.message,
        messageAlign = this.messageAlign;
    var messageSlot = this.slots();
    var title = this.slots('title') || this.title;
    var Title = title && h("div", {
      "class": bem('header', {
        isolated: !message && !messageSlot
      })
    }, [title]);
    var Content = (messageSlot || message) && h("div", {
      "class": bem('content')
    }, [messageSlot || h("div", {
      "domProps": {
        "innerHTML": message
      },
      "class": bem('message', (_bem = {
        'has-title': title
      }, _bem[messageAlign] = messageAlign, _bem))
    })]);
    return h("transition", {
      "attrs": {
        "name": this.transition
      },
      "on": {
        "afterEnter": this.onOpened,
        "afterLeave": this.onClosed
      }
    }, [h("div", {
      "directives": [{
        name: "show",
        value: this.value
      }],
      "attrs": {
        "role": "dialog",
        "aria-labelledby": this.title || message
      },
      "class": [bem(), this.className],
      "style": {
        width: Object(unit["a" /* addUnit */])(this.width)
      }
    }, [Title, Content, this.genButtons()])]);
  }
}));
// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/utils/index.js
var utils = __webpack_require__("ea6e");

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/dialog/index.js




var instance;

function isInDocument(element) {
  return document.body.contains(element);
}

function initInstance() {
  if (instance) {
    instance.$destroy();
  }

  instance = new (external_Vue_default.a.extend(Dialog))({
    el: document.createElement('div'),
    // avoid missing animation when first rendered
    propsData: {
      lazyRender: false
    }
  });
  instance.$on('input', function (value) {
    instance.value = value;
  });
}

function dialog_Dialog(options) {
  /* istanbul ignore if */
  if (utils["f" /* isServer */]) {
    return Promise.resolve();
  }

  return new Promise(function (resolve, reject) {
    if (!instance || !isInDocument(instance.$el)) {
      initInstance();
    }

    Object(esm_extends["a" /* default */])(instance, dialog_Dialog.currentOptions, options, {
      resolve: resolve,
      reject: reject
    });
  });
}

dialog_Dialog.defaultOptions = {
  value: true,
  title: '',
  width: '',
  message: '',
  overlay: true,
  className: '',
  lockScroll: true,
  transition: 'van-dialog-bounce',
  beforeClose: null,
  overlayClass: '',
  overlayStyle: null,
  messageAlign: '',
  getContainer: 'body',
  cancelButtonText: '',
  cancelButtonColor: null,
  confirmButtonText: '',
  confirmButtonColor: null,
  showConfirmButton: true,
  showCancelButton: false,
  closeOnPopstate: false,
  closeOnClickOverlay: false,
  callback: function callback(action) {
    instance[action === 'confirm' ? 'resolve' : 'reject'](action);
  }
};
dialog_Dialog.alert = dialog_Dialog;

dialog_Dialog.confirm = function (options) {
  return dialog_Dialog(Object(esm_extends["a" /* default */])({
    showCancelButton: true
  }, options));
};

dialog_Dialog.close = function () {
  if (instance) {
    instance.value = false;
  }
};

dialog_Dialog.setDefaultOptions = function (options) {
  Object(esm_extends["a" /* default */])(dialog_Dialog.currentOptions, options);
};

dialog_Dialog.resetDefaultOptions = function () {
  dialog_Dialog.currentOptions = Object(esm_extends["a" /* default */])({}, dialog_Dialog.defaultOptions);
};

dialog_Dialog.resetDefaultOptions();

dialog_Dialog.install = function () {
  external_Vue_default.a.use(Dialog);
};

dialog_Dialog.Component = Dialog;
external_Vue_default.a.prototype.$dialog = dialog_Dialog;
/* harmony default export */ var dialog = __webpack_exports__["a"] = (dialog_Dialog);

/***/ }),

/***/ "e04f":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init (converter) {
		function api() {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}

			// We're using "expires" because "max-age" is not supported by IE
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ?
				converter.write(value, key) :
				encodeURIComponent(String(value))
					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}

				// Considers RFC 6265 section 5.2:
				// ...
				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
				//     character:
				// Consume the characters of the unparsed-attributes up to,
				// not including, the first %x3B (";") character.
				// ...
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */);
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),

/***/ "e195":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return raf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return doubleRaf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cancelRaf; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ea6e");
/**
 * requestAnimationFrame polyfill
 */

var prev = Date.now();
/* istanbul ignore next */

function fallback(fn) {
  var curr = Date.now();
  var ms = Math.max(0, 16 - (curr - prev));
  var id = setTimeout(fn, ms);
  prev = curr + ms;
  return id;
}
/* istanbul ignore next */


var root = ___WEBPACK_IMPORTED_MODULE_0__[/* isServer */ "f"] ? global : window;
/* istanbul ignore next */

var iRaf = root.requestAnimationFrame || fallback;
/* istanbul ignore next */

var iCancel = root.cancelAnimationFrame || root.clearTimeout;
function raf(fn) {
  return iRaf.call(root, fn);
} // double raf for animation

function doubleRaf(fn) {
  raf(function () {
    raf(fn);
  });
}
function cancelRaf(id) {
  iCancel.call(root, id);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("66fa")))

/***/ }),

/***/ "e5b9":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e727":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e940":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ea6e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return isServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return get; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8bbf");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);



var isServer = vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.$isServer;
function noop() {}
function isDef(val) {
  return val !== undefined && val !== null;
}
function isFunction(val) {
  return typeof val === 'function';
}
function isObject(val) {
  return val !== null && typeof val === 'object';
}
function isPromise(val) {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
}
function get(object, path) {
  var keys = path.split('.');
  var result = object;
  keys.forEach(function (key) {
    result = isDef(result[key]) ? result[key] : '';
  });
  return result;
}

/***/ }),

/***/ "f121":
/***/ (function(module, exports, __webpack_require__) {

// 根据环境引入不同配置 process.env.NODE_ENV
var config = __webpack_require__("f1e0");

module.exports = config;

/***/ }),

/***/ "f184":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f19c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f1e0":
/***/ (function(module, exports) {

module.exports = {
  title: '云祭祀',
  api: {
    base_api: 'http://kykjgm.hbkykj.cn/wx/v1/',
    mode: 'history',
    base: '/memorial'
  }
};

/***/ }),

/***/ "f20f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return route; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return functionalRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return routeProps; });
/**
 * Vue Router support
 */
function route(router, config) {
  var to = config.to,
      url = config.url,
      replace = config.replace;

  if (to && router) {
    var promise = router[replace ? 'replace' : 'push'](to);
    /* istanbul ignore else */

    if (promise && promise.catch) {
      promise.catch(function (err) {
        /* istanbul ignore if */
        if (err && err.name !== 'NavigationDuplicated') {
          throw err;
        }
      });
    }
  } else if (url) {
    replace ? location.replace(url) : location.href = url;
  }
}
function functionalRoute(context) {
  route(context.parent && context.parent.$router, context.props);
}
var routeProps = {
  url: String,
  replace: Boolean,
  to: [String, Object]
};

/***/ }),

/***/ "f25d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/utils/create/bem.js
/**
 * bem helper
 * b() // 'button'
 * b('text') // 'button__text'
 * b({ disabled }) // 'button button--disabled'
 * b('text', { disabled }) // 'button__text button__text--disabled'
 * b(['disabled', 'primary']) // 'button button--disabled button--primary'
 */
var ELEMENT = '__';
var MODS = '--';

function join(name, el, symbol) {
  return el ? name + symbol + el : name;
}

function bem_prefix(name, mods) {
  if (typeof mods === 'string') {
    return join(name, mods, MODS);
  }

  if (Array.isArray(mods)) {
    return mods.map(function (item) {
      return bem_prefix(name, item);
    });
  }

  var ret = {};

  if (mods) {
    Object.keys(mods).forEach(function (key) {
      ret[name + MODS + key] = mods[key];
    });
  }

  return ret;
}

function createBEM(name) {
  return function (el, mods) {
    if (el && typeof el !== 'string') {
      mods = el;
      el = '';
    }

    el = join(name, el, ELEMENT);
    return mods ? [el, bem_prefix(el, mods)] : el;
  };
}
// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/utils/index.js
var utils = __webpack_require__("ea6e");

// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/utils/format/string.js
var string = __webpack_require__("7813");

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__("8bbf");
var external_Vue_default = /*#__PURE__*/__webpack_require__.n(external_Vue_);

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/mixins/slots.js
/**
 * Use scopedSlots in Vue 2.6+
 * downgrade to slots in lower version
 */

var SlotsMixin = external_Vue_default.a.extend({
  methods: {
    slots: function slots(name, props) {
      if (name === void 0) {
        name = 'default';
      }

      var $slots = this.$slots,
          $scopedSlots = this.$scopedSlots;
      var scopedSlot = $scopedSlots[name];

      if (scopedSlot) {
        return scopedSlot(props);
      }

      return $slots[name];
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/utils/create/component.js
/**
 * Create a basic component with common options
 */






function install(Vue) {
  var name = this.name;
  Vue.component(name, this);
  Vue.component(Object(string["a" /* camelize */])("-" + name), this);
} // unify slots & scopedSlots


function unifySlots(context) {
  // use data.scopedSlots in lower Vue version
  var scopedSlots = context.scopedSlots || context.data.scopedSlots || {};
  var slots = context.slots();
  Object.keys(slots).forEach(function (key) {
    if (!scopedSlots[key]) {
      scopedSlots[key] = function () {
        return slots[key];
      };
    }
  });
  return scopedSlots;
} // should be removed after Vue 3

function transformFunctionComponent(pure) {
  return {
    functional: true,
    props: pure.props,
    model: pure.model,
    render: function render(h, context) {
      return pure(h, context.props, unifySlots(context), context);
    }
  };
}

function createComponent(name) {
  return function (sfc) {
    if (Object(utils["c" /* isFunction */])(sfc)) {
      sfc = transformFunctionComponent(sfc);
    }

    if (!sfc.functional) {
      sfc.mixins = sfc.mixins || [];
      sfc.mixins.push(SlotsMixin);
    }

    sfc.name = name;
    sfc.install = install;
    return sfc;
  };
}
// EXTERNAL MODULE: ./node_modules/_vant@2.5.4@vant/es/utils/deep-assign.js
var deep_assign = __webpack_require__("50e1");

// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/locale/lang/zh-CN.js
/* harmony default export */ var zh_CN = ({
  name: '姓名',
  tel: '电话',
  save: '保存',
  confirm: '确认',
  cancel: '取消',
  delete: '删除',
  complete: '完成',
  loading: '加载中...',
  telEmpty: '请填写电话',
  nameEmpty: '请填写姓名',
  nameInvalid: '请输入正确的姓名',
  confirmDelete: '确定要删除吗',
  telInvalid: '请输入正确的手机号',
  vanCalendar: {
    end: '结束',
    start: '开始',
    title: '日期选择',
    confirm: '确定',
    weekdays: ['日', '一', '二', '三', '四', '五', '六'],
    monthTitle: function monthTitle(year, month) {
      return year + "\u5E74" + month + "\u6708";
    },
    rangePrompt: function rangePrompt(maxRange) {
      return "\u9009\u62E9\u5929\u6570\u4E0D\u80FD\u8D85\u8FC7 " + maxRange + " \u5929";
    }
  },
  vanContactCard: {
    addText: '添加联系人'
  },
  vanContactList: {
    addText: '新建联系人'
  },
  vanPagination: {
    prev: '上一页',
    next: '下一页'
  },
  vanPullRefresh: {
    pulling: '下拉即可刷新...',
    loosing: '释放即可刷新...'
  },
  vanSubmitBar: {
    label: '合计：'
  },
  vanCoupon: {
    unlimited: '无使用门槛',
    discount: function discount(_discount) {
      return _discount + "\u6298";
    },
    condition: function condition(_condition) {
      return "\u6EE1" + _condition + "\u5143\u53EF\u7528";
    }
  },
  vanCouponCell: {
    title: '优惠券',
    tips: '暂无可用',
    count: function count(_count) {
      return _count + "\u5F20\u53EF\u7528";
    }
  },
  vanCouponList: {
    empty: '暂无优惠券',
    exchange: '兑换',
    close: '不使用优惠券',
    enable: '可用',
    disabled: '不可用',
    placeholder: '请输入优惠码'
  },
  vanAddressEdit: {
    area: '地区',
    postal: '邮政编码',
    areaEmpty: '请选择地区',
    addressEmpty: '请填写详细地址',
    postalEmpty: '邮政编码格式不正确',
    defaultAddress: '设为默认收货地址',
    telPlaceholder: '收货人手机号',
    namePlaceholder: '收货人姓名',
    areaPlaceholder: '选择省 / 市 / 区'
  },
  vanAddressEditDetail: {
    label: '详细地址',
    placeholder: '街道门牌、楼层房间号等信息'
  },
  vanAddressList: {
    add: '新增地址'
  }
});
// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/locale/index.js



var proto = external_Vue_default.a.prototype;
var defineReactive = external_Vue_default.a.util.defineReactive;
defineReactive(proto, '$vantLang', 'zh-CN');
defineReactive(proto, '$vantMessages', {
  'zh-CN': zh_CN
});
/* harmony default export */ var locale = ({
  messages: function messages() {
    return proto.$vantMessages[proto.$vantLang];
  },
  use: function use(lang, messages) {
    var _this$add;

    proto.$vantLang = lang;
    this.add((_this$add = {}, _this$add[lang] = messages, _this$add));
  },
  add: function add(messages) {
    if (messages === void 0) {
      messages = {};
    }

    Object(deep_assign["a" /* deepAssign */])(proto.$vantMessages, messages);
  }
});
// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/utils/create/i18n.js



function createI18N(name) {
  var prefix = Object(string["a" /* camelize */])(name) + '.';
  return function (path) {
    var messages = locale.messages();
    var message = Object(utils["a" /* get */])(messages, prefix + path) || Object(utils["a" /* get */])(messages, path);

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return Object(utils["c" /* isFunction */])(message) ? message.apply(void 0, args) : message;
  };
}
// CONCATENATED MODULE: ./node_modules/_vant@2.5.4@vant/es/utils/create/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createNamespace; });



function createNamespace(name) {
  name = 'van-' + name;
  return [createComponent(name), createBEM(name), createI18N(name)];
}

/***/ }),

/***/ "f973":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fd00":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fe3a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fed1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__("20d0");
var parse = __webpack_require__("df17");
var formats = __webpack_require__("aaf3");

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ })

/******/ });