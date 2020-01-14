module.exports =
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "d342");
/******/ })
/************************************************************************/
/******/ ({

/***/ "538c":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("c03f");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".dropdown .menu.drop-active{display:inline-block}.no-wrap{white-space:nowrap}.avatar.icon:before{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.icon{font-family:rsui-icons!important}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "67c7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: C:/Users/blake/AppData/Roaming/npm/node_modules/@vue/cli-service/node_modules/vue-style-loader/lib/listToStyles.js
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

// CONCATENATED MODULE: C:/Users/blake/AppData/Roaming/npm/node_modules/@vue/cli-service/node_modules/vue-style-loader/lib/addStylesClient.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
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


/***/ }),

/***/ "7a8d":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("538c");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("67c7").default
var update = add("be6ff090", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "7cd2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_AppData_Roaming_npm_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandedNavbarMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7a8d");
/* harmony import */ var _AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_AppData_Roaming_npm_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandedNavbarMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_AppData_Roaming_npm_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandedNavbarMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_AppData_Roaming_npm_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandedNavbarMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "bc4b":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "c03f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    for (var i = 0; i < modules.length; i++) {
      var item = [].concat(modules[i]);

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "d342":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: C:/Users/blake/AppData/Roaming/npm/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("bc4b")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: C:/Users/blake/AppData/Roaming/npm/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e70854c-vue-loader-template"}!C:/Users/blake/AppData/Roaming/npm/node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/blake/AppData/Roaming/npm/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/blake/AppData/Roaming/npm/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/BrandedNavbarMenu.vue?vue&type=template&id=046c5420&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"navbar-section"},[(_vm.isLoaded)?_c('span',{staticClass:"dropdown dropdown-right"},[_c('button',{staticClass:"link toggle-dropdown",on:{"click":function($event){_vm.dropdownActive = !_vm.dropdownActive}}},[_vm._v(" "+_vm._s(_vm.userOrg.OrganizationName)+" "),(_vm.userTheme)?_c('i',{staticClass:"icon icon-caret-down"}):_vm._e()]),_c('ul',{staticClass:"menu",class:{ 'drop-active': _vm.dropdownActive },attrs:{"id":"accountDropdown"}},[_c('li',{staticClass:"menu-item"},[_c('div',{staticClass:"tile tile-centered no-wrap"},[_c('div',{staticClass:"tile-icon"},[(_vm.userTheme && _vm.userTheme.CompanyLogoLight)?_c('img',{staticClass:"avatar",attrs:{"src":_vm.userTheme.CompanyLogoLight,"alt":_vm.username + ' Avatar'}}):_c('i',{staticClass:"avatar icon icon-user"})]),_c('div',{staticClass:"tile-content"},[_vm._v(_vm._s(_vm.username))])])]),_c('li',{staticClass:"divider"}),_vm._t("menu-item"),_c('li',{staticClass:"menu-item"},[_c('a',{attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.accountClick()}}},[_vm._v("My Account")])]),_c('li',{staticClass:"menu-item"},[_c('a',{attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.logoutClick()}}},[_vm._v("Logout")])])],2)]):_c('span',{staticClass:"loading d-block px-3"})])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/BrandedNavbarMenu.vue?vue&type=template&id=046c5420&

// CONCATENATED MODULE: C:/Users/blake/AppData/Roaming/npm/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/blake/AppData/Roaming/npm/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/BrandedNavbarMenu.vue?vue&type=script&lang=js&
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
        demo: Boolean
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

            if(processes.length){
                Promise.all(processes).then((response) => {
                    if (response) this.isLoaded = true;
                }).catch((response) => {
                    this.isLoaded = false;
                    console.error('There was an issue loading your settings');
                });
            } else {
                this.isLoaded = true;
            }
        } else {
            this.userInfo = this.demo.user;
            this.userTheme = this.demo.theme;
            this.userOrg = this.demo.organization;
            this.isLoaded = true;
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

// CONCATENATED MODULE: ./src/components/BrandedNavbarMenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BrandedNavbarMenuvue_type_script_lang_js_ = (BrandedNavbarMenuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/BrandedNavbarMenu.vue?vue&type=style&index=0&lang=scss&
var BrandedNavbarMenuvue_type_style_index_0_lang_scss_ = __webpack_require__("7cd2");

// CONCATENATED MODULE: C:/Users/blake/AppData/Roaming/npm/node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js
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
      // register for functioal component in vue file
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

// CONCATENATED MODULE: ./src/components/BrandedNavbarMenu.vue






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
// CONCATENATED MODULE: ./src/components/rsui-components.js


const components = { BrandedNavbarMenu : BrandedNavbarMenu };
// CONCATENATED MODULE: C:/Users/blake/AppData/Roaming/npm/node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js
/* concated harmony reexport components */__webpack_require__.d(__webpack_exports__, "components", function() { return components; });




/***/ })

/******/ });
//# sourceMappingURL=rsui.common.js.map