(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["rsui"] = factory();
	else
		root["rsui"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 679:
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ 891:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".dropdown .menu.drop-active{display:inline-block}.no-wrap{white-space:nowrap}.avatar.icon:before{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.icon{font-family:rsui-icons!important}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/***/ (function(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 81:
/***/ (function(module) {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 612:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(891);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(402)/* ["default"] */ .Z)
var update = add("0f87826a", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 402:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ addStylesClient; }
});

;// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

;// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  components: function() { return /* reexport */ components; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__(679)
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/BrandedNavbarMenu.vue?vue&type=template&id=762c1ae2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"navbar-section"},[(_vm.isLoaded)?_c('span',{staticClass:"dropdown dropdown-right"},[_c('button',{staticClass:"link toggle-dropdown",on:{"click":function($event){_vm.dropdownActive = !_vm.dropdownActive}}},[_vm._v(" "+_vm._s(_vm.userOrg.OrganizationName)+" "),(_vm.userTheme)?_c('i',{staticClass:"icon icon-caret-down"}):_vm._e()]),_c('ul',{staticClass:"menu",class:{ 'drop-active': _vm.dropdownActive },attrs:{"id":"accountDropdown"}},[_c('li',{staticClass:"menu-item"},[_c('div',{staticClass:"tile tile-centered no-wrap"},[_c('div',{staticClass:"tile-icon"},[(_vm.userTheme && _vm.userTheme.CompanyLogoLight)?_c('img',{staticClass:"avatar",attrs:{"src":_vm.userTheme.CompanyLogoLight,"alt":_vm.username + ' Avatar'}}):_c('i',{staticClass:"avatar icon icon-user"})]),_c('div',{staticClass:"tile-content"},[_vm._v(_vm._s(_vm.username))])])]),_c('li',{staticClass:"divider"}),_vm._t("menu-item"),_c('li',{staticClass:"menu-item"},[_c('a',{attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.accountClick()}}},[_vm._v("My Account")])]),_c('li',{staticClass:"menu-item"},[_c('a',{attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.logoutClick()}}},[_vm._v("Logout")])])],2)]):_c('span',{staticClass:"loading d-block px-3"})])}
var staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/BrandedNavbarMenu.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var BrandedNavbarMenuvue_type_script_lang_js_ = ({
    name: "BrandedNavbarMenu",
    data() {
        return {
            isLoaded: false,
            userTheme: undefined,
            userOrg: undefined,
            userInfo: undefined,
            dropdownActive: false
        };
    },
    props: {
        demo: Object
    },
    methods: {
        accountClick: function() {
            if(!this.demo) window.location.href = "https://account.ridestyler.com/";
        },
        logoutClick: function() {
            if(!this.demo){
                window.ridestyler.auth.signOut().then(() => {
                    window.location.reload();
                });
            }
        }
    },
    created() {
        let processes = [],
            theme = null,
            settings = null,
            self = this;

        if(!this.demo){
            ridestyler.events.on('auth-changed', function(){
                theme = new Promise((resolve, reject) => {
                    window.ridestyler.ajax.send({
                        action: "Client/GetTheme",
                        callback: (response) => {
                            self.userTheme = response.Theme;
                            response.Success ? resolve(response) : reject(response);
                        }
                    });
                });
                processes.push(theme);

                settings = new Promise((resolve, reject) => {
                    window.ridestyler.ajax.send({
                        action: 'auth/status',
                        callback: function(response) {
                            if (typeof response.User !== 'undefined') {
                                self.userInfo = response.User;
                                self.userOrg = response.ActiveOrganization;
                            }
                            response.Success ? resolve(response) : reject(response);
                        }
                    })
                });
                processes.push(settings);

                Promise.all(processes).then(() => {
                    self.isLoaded = true;
                }).catch(() => {
                    self.isLoaded = false;
                    console.error('There was an issue loading your settings');
                });
            });
        } else {
            self.userInfo = self.demo.user;
            self.userTheme = self.demo.theme;
            self.userOrg = self.demo.organization;
            self.isLoaded = true;
        }

        document.body.addEventListener('click', (e) => {
            if(!e.target.classList.contains('toggle-dropdown')) this.dropdownActive = false;
        });
    },
    computed: {
        username() {
            let username = this.userOrg.OrganizationName;
            if (this.userInfo) username = this.userInfo.UserName;
            return username;
        }
    }
});

;// CONCATENATED MODULE: ./src/components/BrandedNavbarMenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BrandedNavbarMenuvue_type_script_lang_js_ = (BrandedNavbarMenuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js??clonedRuleSet-61.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-61.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-61.use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-61.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-61.use[4]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/BrandedNavbarMenu.vue?vue&type=style&index=0&id=762c1ae2&prod&lang=scss&
var BrandedNavbarMenuvue_type_style_index_0_id_762c1ae2_prod_lang_scss_ = __webpack_require__(612);
;// CONCATENATED MODULE: ./src/components/BrandedNavbarMenu.vue?vue&type=style&index=0&id=762c1ae2&prod&lang=scss&

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

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
  if (moduleIdentifier) {
    // server build
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
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./src/components/BrandedNavbarMenu.vue



;


/* normalize component */

var component = normalizeComponent(
  components_BrandedNavbarMenuvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BrandedNavbarMenu = (component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/BrandedNavColumn.vue?vue&type=template&id=54a33e95&
var BrandedNavColumnvue_type_template_id_54a33e95_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"column branded-nav-column",class:{ 'branded-nav-minimized' : !_vm.isNavVisible && _vm.isMobile }},[_c('div',{staticClass:"branded-top-item m-0"},[(_vm.$router)?_c('router-link',{staticClass:"light m-0 d-inline-block",class:[ _vm.isMobile ? 'ridestyler-logo-icon' : 'ridestyler-logo-full w-100' ],attrs:{"to":_vm.homeLink,"id":"ridestyler-home"},nativeOn:{"click":function($event){_vm.isNavVisible = false}}}):_c('a',{staticClass:"light m-0 d-inline-block",class:[ _vm.isMobile ? 'ridestyler-logo-icon' : 'ridestyler-logo-full w-100' ],attrs:{"href":_vm.homeLink,"id":"ridestyler-home"},nativeOn:{"click":function($event){_vm.isNavVisible = false}}}),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isMobile),expression:"isMobile"}],staticClass:"icon icon-bars branded-nav-burger",on:{"click":function($event){_vm.isNavVisible = !_vm.isNavVisible}}})],1),_c('ul',{directives:[{name:"show",rawName:"v-show",value:(_vm.isNavVisible || !_vm.isMobile),expression:"isNavVisible || !isMobile"}],staticClass:"nav m-0"},[_vm._t("default"),(_vm.helpLinksEnabled)?_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"help-toggle nav-toggle",attrs:{"href":"#","title":"Help","alt":"Help"}},[_vm._v("Help")]),_c('toggle-nav',{attrs:{"toggleSelector":".help-toggle"}},[_c('a',{attrs:{"href":"https://kb.ridestyler.com/","target":"_blank","alt":"Knowledge Base","title":"Knowledge Base"}},[_vm._v("Knowledge Base")]),_c('a',{attrs:{"href":"http://kb.ridestyler.com/submit-a-ticket/","target":"_blank","alt":"Support Request","title":"Support Request"}},[_vm._v("Support Request")])])],1):_vm._e(),(_vm.isMobile && this.$slots.inner)?_c('li',{staticClass:"inner"},[_vm._t("inner")],2):_vm._e(),(this.$slots.footer)?_c('li',{staticClass:"nav-item footer"},[_vm._t("footer")],2):_vm._e()],2)])}
var BrandedNavColumnvue_type_template_id_54a33e95_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/ToggleNav.vue?vue&type=template&id=4c83fbd6&
var ToggleNavvue_type_template_id_4c83fbd6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"nav toggle-nav",attrs:{"id":_vm.navSelector + '-nav'}},[_vm._t("default")],2)}
var ToggleNavvue_type_template_id_4c83fbd6_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/ToggleNav.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var ToggleNavvue_type_script_lang_js_ = ({
    name: "ToggleNav",
    data() {
        return {
            isVisible: false,
        };
    },
    mounted() {
        const self = this;

        if(this.toggleSwitch) {
            this.toggleSwitch.addEventListener('click', () => {
                const currentNav = document.querySelector('#' + self.navSelector + '-nav'),
                       activeNav = document.querySelector('.active-nav');
                
                // if the current toggle switch nav is active we want to de-activate it.
                if (currentNav.classList.contains('active-nav')) currentNav.classList.remove('active-nav');
                else {
                    // else we want to de-activate any other active navs and active our current nav.
                    if(activeNav) activeNav.classList.remove('active-nav');
                    currentNav.classList.add('active-nav');
                }
            });
        }
    },
    computed: {
        toggleSwitch(){
            return document.querySelector(this.toggleSelector);
        },
        navSelector() {
            let selector = null;

            if(this.toggleSelector) {
                selector = this.toggleSelector.replace('.', '');
                selector = selector.replace('-toggle', '');
            }

            return selector;
        }
    },
    props: {
        toggleSelector: String,
        currentPath: String
    },
});

;// CONCATENATED MODULE: ./src/components/ToggleNav.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ToggleNavvue_type_script_lang_js_ = (ToggleNavvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/ToggleNav.vue





/* normalize component */
;
var ToggleNav_component = normalizeComponent(
  components_ToggleNavvue_type_script_lang_js_,
  ToggleNavvue_type_template_id_4c83fbd6_render,
  ToggleNavvue_type_template_id_4c83fbd6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ToggleNav = (ToggleNav_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/BrandedNavColumn.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var BrandedNavColumnvue_type_script_lang_js_ = ({
    name: "BrandedNavColumn",
    data() {
        return {
            isNavVisible: false,
            breakPointTwoColumn: 960,
            isMobile: false
        }
    },
    mounted(){
        const self = this;
        
        self.isMobile = window.innerWidth < self.breakPointTwoColumn;

        window.addEventListener('resize', function(e){
            const innerWidth = e.target.innerWidth;
            if(innerWidth < self.breakPointTwoColumn) self.isMobile = true;
            else self.isMobile = false;
        });
    },
    props: {
        currentRoute: String,
        helpLinksEnabled: Boolean,
        homeLink: String
    },
    watch: {
        currentRoute(){
            this.isNavVisible = false
        }
    },
    components: {
        ToggleNav: ToggleNav,
    },
});

;// CONCATENATED MODULE: ./src/components/BrandedNavColumn.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BrandedNavColumnvue_type_script_lang_js_ = (BrandedNavColumnvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/BrandedNavColumn.vue





/* normalize component */
;
var BrandedNavColumn_component = normalizeComponent(
  components_BrandedNavColumnvue_type_script_lang_js_,
  BrandedNavColumnvue_type_template_id_54a33e95_render,
  BrandedNavColumnvue_type_template_id_54a33e95_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BrandedNavColumn = (BrandedNavColumn_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Accordion.vue?vue&type=template&id=313d4d93&
var Accordionvue_type_template_id_313d4d93_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"accordion"},[(_vm.exclusive)?_c('input',{ref:"accordionRadio",attrs:{"id":_vm.localId,"type":"radio","name":_vm.localName,"hidden":""}}):_c('input',{ref:"accordionCheckbox",attrs:{"id":_vm.localId,"type":"checkbox","name":_vm.localName,"hidden":""}}),_c('label',{staticClass:"accordion-header c-hand justify-space-between",attrs:{"for":_vm.localId}},[_c('div',{staticClass:"accordion-header-content"},[_vm._t("header")],2),_c('i',{staticClass:"icon icon-accordion ml-2"})]),_c('div',{ref:"accordionBody",staticClass:"accordion-body"},[_vm._t("body")],2)])}
var Accordionvue_type_template_id_313d4d93_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Accordion.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Accordionvue_type_script_lang_js_ = ({
    name: "Accordion",
    props: {
        exclusive: {
            type: Boolean,
            default: false
        },
        name: {
            type: String
        },
        id: {
            type: String
        },
        scrollIntoView: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            localId: '',
            localName: ''
        };
    },
    computed: {
    },
    created() {
        this.localId = this.id;
        this.localName = this.name;
        if (typeof this.localName === 'undefined' || this.localName == '') this.localName = 'rsui_accordion_name_' + this._uid;
        if (typeof this.localId === 'undefined' || this.localId == '') this.localId = 'rsui_accordion_id_' + this._uid;
    },
    mounted() {
        let self = this;
        const eventArray = ['webkitTransitionEnd', 'otransitionend', 'oTransitionEnd', 'msTransitionEnd', 'transitionend'];
        eventArray.forEach(eve => {
            self.$refs.accordionBody.addEventListener(eve, (e) => {
                if (e.target !== self.$refs.accordionBody) return;
                const ele = self.$refs.accordionRadio ? self.$refs.accordionRadio : self.$refs.accordionCheckbox;
                if (ele.checked) {
                    self.$emit('expanded', self.$el);
                    if (self.scrollIntoView)
                        self.$el.scrollIntoView({ 
                            behavior: 'smooth' 
                        });
                }
                else {
                    self.$emit('collapsed', self.$el);
                }
            }, false);
        });
    },
    methods: {
    }
});

;// CONCATENATED MODULE: ./src/components/Accordion.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Accordionvue_type_script_lang_js_ = (Accordionvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/Accordion.vue





/* normalize component */
;
var Accordion_component = normalizeComponent(
  components_Accordionvue_type_script_lang_js_,
  Accordionvue_type_template_id_313d4d93_render,
  Accordionvue_type_template_id_313d4d93_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Accordion = (Accordion_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/TypeaheadSelect.vue?vue&type=template&id=5e8879e4&
var TypeaheadSelectvue_type_template_id_5e8879e4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dropdown typeahead-select",class:{ 'active': _vm.menuVisible && _vm.filteredKeyValues.length > 0, 'd-hide': !_vm.loaded }},[_c('input',{attrs:{"type":"hidden","name":_vm.name},domProps:{"value":_vm.selectedKey}}),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.inputValue),expression:"inputValue"}],staticClass:"form-select",attrs:{"type":"text","size":_vm.size,"placeholder":_vm.selectedValue},domProps:{"value":(_vm.inputValue)},on:{"focus":_vm.onFocus,"blur":_vm.onBlur,"input":function($event){if($event.target.composing){ return; }_vm.inputValue=$event.target.value}}}),_c('ul',{staticClass:"menu",on:{"mousedown":_vm.onMouseDown,"mouseup":_vm.onMouseUp}},_vm._l((_vm.filteredKeyValues),function(keyValue){return _c('li',{key:keyValue.key,staticClass:"menu-item"},[_c('a',{class:{ active: keyValue.key === _vm.selectedKey },attrs:{"href":"#"},on:{"focus":_vm.onItemFocus,"blur":_vm.onItemBlur,"click":function($event){$event.preventDefault();return _vm.onItemClick(keyValue.key, keyValue.value)}}},[_vm._v(" "+_vm._s(keyValue.value)+" ")])])}),0)])}
var TypeaheadSelectvue_type_template_id_5e8879e4_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/TypeaheadSelect.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var TypeaheadSelectvue_type_script_lang_js_ = ({
    name: 'TypeaheadSelect',
    props: {
        keyValues: { type: Array },
        name: { type: String } // Name attribute for input
    },
    data: function() {
        return {
            loaded: false, // Flag set when loaded
            size: 10, // Initial width on characters of the input.
            filteredKeyValues: [], // Used to populate the dropdown.
            inputValue: "", // Text in the input box.
            selectedValue: "", // Currently selected value.
            selectedKey: "", // Currently selected key.
            menuVisible: false, // Flag to show/hide menu.
            inputFocused: false, // Keep track of when the input has focus.
            itemFocused: false, // Keep track when a menu item has focus.
            menuMouseDown: false // Needed for IE because dragging scrollbar makes input lose focus.
        }
    },
    mounted: function(){
        this.init();
        document.body.addEventListener('keydown', this.onKeyDown, true);
    },
    methods: {
        // Scrolls to the selected item in the menu.
        _scrollToSelected(){
            var el = this.$el.querySelector(" a.active").parentElement;
            var parent = el.parentElement;
            var top = 0;
            if(el != parent.firstElementChild) {
                var style = window.getComputedStyle ? getComputedStyle(el, null) : el.currentStyle;
                top = el.offsetTop - parseInt(style.marginTop);
            }
            parent.scrollTop = top;
        },

        // Hides menu.
        _hideMenu(force) {
            var self = this;
            // Timeout is used to protect against strange event edge cases
            setTimeout(function(){ 
                if((!self.inputFocused && !self.itemFocused && !self.mouseDown) || force) {
                    self.inputValue = self.selectedValue;
                    self.menuVisible = false;
                    self.itemFocused = false;
                }
            }, force ? 1 : 100);
        },
        onKeyDown(e) {
            if(this.inputFocused || this.itemFocused) {

                var keyCode = e.keyCode;

                if((keyCode === 40 || keyCode === 38) && this.filteredKeyValues.length > 0) {

                    var menu = this.$el.querySelector("ul"),
                        scrollTop = menu.scrollTop,
                        menuHeight = menu.scrollHeight,
                        items = menu.children;

                    // Index of the item that is in the users view.
                    var scrolledIndex = this.filteredKeyValues.length - Math.round((menuHeight - scrollTop) / (menuHeight / this.filteredKeyValues.length));

                    var focusItem = null;

                    if(this.inputFocused) {
                        focusItem = items[scrolledIndex].firstChild;
                    } else if(this.itemFocused) {
                        
                        // Get currently focused item.
                        var currentlyFocusedItem = document.activeElement;
                        var parent = currentlyFocusedItem.parentElement;

                        // Get next item based on up or down arrow pressed.
                        var nextItem = keyCode == 40 ? parent.nextSibling : parent.previousSibling;

                        if(nextItem != null) {
                            focusItem = nextItem.firstChild;
                        } else {
                            focusItem = keyCode == 40 ? items[0].firstChild : items[items.length - 1].firstChild;
                        }
                    }

                    focusItem.focus();
                    
                    e.preventDefault();

                } else if(keyCode === 13 && this.inputFocused) {
                    this.$el.querySelector(".form-select").blur();
                    e.preventDefault();
                }
            }
        },
        onMouseUp() {
            this.mouseDown = false;
        },
        onMouseDown() {
            this.mouseDown = true;
        },
        onFocus() {
            this.inputValue = ""; 
            this.inputFocused = true;
            this.menuVisible = true;

            // Timeout is used to make sure the menu is displayed before scrollTo is called.
            setTimeout(this._scrollToSelected, 10);
        },
        onItemBlur() {
            this.itemFocused = false;
            this._hideMenu();
        },
        onItemFocus() {
            this.itemFocused = true;
            this.menuVisible = true;
        },
        onItemClick(key, value) {
            if(this.selectedKey !== key) {
                this.selectedValue = value;
                this.selectedKey = key;
                this.inputValue = value;
                this.$emit("itemSelected", this.selectedKey);
            }
            this._hideMenu(true);
        },
        onBlur() {
            this.inputFocused = false;
            this._hideMenu();
        },
        init() {
            if(this.keyValues.length > 0) {
                // Find the max length item to resize the input accordingly
                var maxSize = this.size;
                for(var n = 0; n < this.keyValues.length; n++) {
                    if(this.keyValues[n].value.length > maxSize) {
                        maxSize = this.keyValues[n].value.length;
                    }
                }
                this.size = maxSize;

                var emit = this.selectedKey !== this.keyValues[0].key;
                
                // Select the first item
                this.selectedKey = this.keyValues[0].key;
                this.selectedValue = this.keyValues[0].value;
                this.inputValue = this.keyValues[0].value;

                if(emit){
                    // Tell the parent to load the first item
                    this.$emit("itemSelected", this.selectedKey);
                }

                this.loaded = true;
            }
        }
    },
    watch: {
        filteredKeyValues() {
            // If filtered values changed, make sure it's scrolled to the top...
            if(this.filteredKeyValues.length !== this.keyValues.length) {
                this.$el.querySelector("ul").scrollTop = 0;
            }
        },
        inputValue() {
            // Filter out the menu every time the user types something
            this.filteredKeyValues.length = 0;
            for(var n = 0; n < this.keyValues.length; n++) {
                if(this.keyValues[n].value.toLowerCase().indexOf(this.inputValue.toLowerCase()) !== -1) {
                    this.filteredKeyValues.push({ key: this.keyValues[n].key, value: this.keyValues[n].value });
                }
            }
        },
        keyValues() {
            this.init();
        }
    }
});

;// CONCATENATED MODULE: ./src/components/TypeaheadSelect.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TypeaheadSelectvue_type_script_lang_js_ = (TypeaheadSelectvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/TypeaheadSelect.vue





/* normalize component */
;
var TypeaheadSelect_component = normalizeComponent(
  components_TypeaheadSelectvue_type_script_lang_js_,
  TypeaheadSelectvue_type_template_id_5e8879e4_render,
  TypeaheadSelectvue_type_template_id_5e8879e4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TypeaheadSelect = (TypeaheadSelect_component.exports);
;// CONCATENATED MODULE: ./src/components/rsui-components.js






const components = { 
	BrandedNavbarMenu : BrandedNavbarMenu, 
	BrandedNavColumn : BrandedNavColumn, 
	ToggleNav : ToggleNav, 
	Accordion : Accordion, 
	TypeaheadSelect : TypeaheadSelect 
};
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js



}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=rsui.umd.js.map