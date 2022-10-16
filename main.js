/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Oswald&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\r\\n    --header-footer-background-color: rgb(39, 39, 39);\\r\\n    --header-footer-text-color: rgb(255, 255, 255);\\r\\n}\\r\\nbody {\\r\\n    padding: 0;\\r\\n    margin: 0;\\r\\n    font-family: 'Oswald', sans-serif;\\r\\n\\r\\n}\\r\\n#container {\\r\\n    display: grid;\\r\\n    grid-template-rows: 1fr 10fr 1fr;\\r\\n    align-items: center;\\r\\n    height: 100vh;\\r\\n}\\r\\n.header,\\r\\n.footer {\\r\\n    display: flex;\\r\\n    background-color: var(--header-footer-background-color);\\r\\n    justify-content: center;\\r\\n    height: 10vh;\\r\\n    color: var(--header-footer-text-color);\\r\\n}\\r\\n.header{\\r\\n    align-items: flex-end;\\r\\n}\\r\\n\\r\\n\\r\\n.header >button {\\r\\n    border: none;\\r\\n    padding: 15px;\\r\\n    margin: 10px;\\r\\n    border-radius: 10px;\\r\\n    font: inherit;\\r\\n    transition-duration: .4s;\\r\\n}\\r\\n.header >button:hover {\\r\\n    transform: scale(1.1);\\r\\n    background-color: rgb(35, 0, 117);\\r\\n    color: white;\\r\\n    font-size: 1.1rem;\\r\\n\\r\\n}\\r\\n.header >button:active{\\r\\n    transform: scale(.9);\\r\\n    background-color: rgb(35, 0, 117);\\r\\n    color: white;\\r\\n    font-size: .9rem;\\r\\n\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n.home-page {\\r\\n    display: grid;\\r\\n    grid-template-columns: 1fr 1fr;\\r\\n    grid-template-rows: 1fr 1fr;\\r\\n    font-size: 1.25rem;\\r\\n    gap: 20px;\\r\\n    padding: 30px;\\r\\n    text-align: center;\\r\\n}\\r\\n.home-page1,\\r\\n.home-page2,\\r\\n.home-page3 {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n}\\r\\n.home-page1 {\\r\\n    font-size: 2rem;\\r\\n    font-weight: 800;\\r\\n    grid-column: 1/3;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n}\\r\\n.home-page1 > img {\\r\\n    max-height: 500px;\\r\\n    border-radius: 10px;\\r\\n}\\r\\n.home-page2 >img,\\r\\n.home-page3 >img{\\r\\n    max-height: 300px;\\r\\n    border-radius: 10px;\\r\\n}\\r\\n\\r\\n\\r\\n.menu {\\r\\n    display: grid;\\r\\n    grid-template-columns: 1fr 1fr 1fr;\\r\\n    grid-template-rows: 1fr 1fr;\\r\\n    gap: 10px;\\r\\n}\\r\\n.menu-item {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    font-weight: 800;\\r\\n    padding: 20px;\\r\\n    height: 300px;\\r\\n\\r\\n}\\r\\n\\r\\n.menu-item >img {\\r\\n    border-radius: 10px;\\r\\n    margin: 10px;\\r\\n    max-width: 250px;\\r\\n}\\r\\n.menu-item >div {\\r\\n    font-weight: 400;\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n.contact-page{\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n}\\r\\n.detailLeft {\\r\\n    max-height: 600px;\\r\\n    border-radius: 10px;\\r\\n}\\r\\n.detailRight {\\r\\n    margin: 30px;\\r\\n    font-size: 2.25rem\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n.footer {\\r\\n    align-items: center;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_man_serving_food_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/man-serving-food.jpg */ \"./src/images/man-serving-food.jpg\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContactPage);\r\n\r\n\r\nfunction createContactPage (container) {\r\n    const footer= document.querySelector(\".footer\");\r\n    const body = document.createElement(\"div\");\r\n    body.classList.add(\"main\");\r\n    container.insertBefore(body, footer);\r\n\r\n    const contactPage = document.createElement(\"div\");\r\n    contactPage.classList.add(\"contact-page\");\r\n    body.appendChild(contactPage);\r\n\r\n\r\n    const detailLeft = document.createElement(\"img\");\r\n    detailLeft.classList.add(\"detailLeft\");\r\n    detailLeft.src = _images_man_serving_food_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\n    contactPage.appendChild(detailLeft);\r\n\r\n\r\n    const detailRight = document.createElement(\"div\");\r\n    detailRight.classList.add(\"detailRight\");\r\n    contactPage.appendChild(detailRight);\r\n\r\n    const detailRightCopy = [\"Contact Us To Place An Order!\", \"Phone (555) 555-5555\", \"fakeEmail@reallyFakeEmail.com\"]\r\n    for (let i = 0; i <detailRightCopy.length; i++){\r\n        const copyDiv = document.createElement(\"div\");\r\n        copyDiv.textContent = detailRightCopy[i];\r\n        detailRight.appendChild(copyDiv);\r\n    }\r\n\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_resturant_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/resturant.jpg */ \"./src/images/resturant.jpg\");\n/* harmony import */ var _images_featured_plate_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/featured-plate.jpg */ \"./src/images/featured-plate.jpg\");\n/* harmony import */ var _images_more_food_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/more-food.jpg */ \"./src/images/more-food.jpg\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHomePage);\r\n\r\n\r\n\r\n\r\nfunction createHomePage (container) {\r\n    const footer= document.querySelector(\".footer\");\r\n    const copy = [\"Welcome to our Restaurant! Good food here for you to eat!\",\"Featured plate, good grubs\", \"Chow Down on this. I promise it wont kill you. \"]\r\n    const copyImages = [_images_resturant_jpg__WEBPACK_IMPORTED_MODULE_0__, _images_featured_plate_jpg__WEBPACK_IMPORTED_MODULE_1__, _images_more_food_jpg__WEBPACK_IMPORTED_MODULE_2__];\r\n    const body = document.createElement(\"div\");\r\n    body.classList.add(\"main\");\r\n    container.insertBefore(body, footer);\r\n\r\n    const homePage = document.createElement(\"div\");\r\n    homePage.classList.add(\"home-page\");\r\n    body.appendChild(homePage);\r\n\r\n    for (let i=0; i< copy.length; i++){\r\n        const text = document.createElement(\"div\");\r\n        text.textContent= copy[i];\r\n        text.classList.add(`home-page${i+1}`);\r\n        homePage.appendChild(text);\r\n        const image = document.createElement(\"img\");\r\n        image.src = copyImages[i];\r\n        text.appendChild(image);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage.js */ \"./src/homepage.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\ncacheDom();\r\ncreateHeader();\r\nloadHomePage();\r\ncreateFooter();\r\n\r\nfunction cacheDom () {\r\n    const container = document.getElementById(\"container\");\r\n};\r\n\r\nfunction createHeader () {\r\n    const header = document.createElement(\"div\");\r\n    header.classList.add(\"header\");\r\n    container.appendChild(header);\r\n    let buttons = [\"Home\", \"Menu\",\"Contact\"];\r\n    for (let i=0; i<3; i++){\r\n        const button = document.createElement(\"button\");\r\n        button.textContent =buttons[i];\r\n        button.classList.add(buttons[i]);\r\n        button.addEventListener (\"click\", () => {\r\n            loadPage(buttons[i]);\r\n        });\r\n        header.appendChild(button);\r\n    }\r\n};\r\n\r\nfunction createFooter () {\r\n    const footer= document.createElement(\"div\");\r\n    footer.classList.add(\"footer\");\r\n    container.appendChild(footer);\r\n};\r\nfunction loadHomePage(){\r\n    (0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) (container);\r\n}\r\n\r\n\r\nfunction loadPage(buttonIndex) {\r\n    clearPageContents()\r\n    if (buttonIndex ===\"Home\"){\r\n        (0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) (container);\r\n    }else if (buttonIndex === \"Menu\"){\r\n        (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) (container);\r\n    }else if (buttonIndex === \"Contact\"){\r\n        (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(container);\r\n    }\r\n}\r\n\r\nfunction clearPageContents() {\r\n    const main = document.querySelector(\".main\");\r\n    if(main != null){\r\n        main.remove();   \r\n    }\r\n    \r\n};\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_sushi_doughnuts_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/sushi-doughnuts.jpg */ \"./src/images/sushi-doughnuts.jpg\");\n/* harmony import */ var _images_grilled_cheese_doughnuts_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/grilled-cheese-doughnuts.jpg */ \"./src/images/grilled-cheese-doughnuts.jpg\");\n/* harmony import */ var _images_lobster_roll_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/lobster-roll.jpg */ \"./src/images/lobster-roll.jpg\");\n/* harmony import */ var _images_cupcake_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/cupcake.jpg */ \"./src/images/cupcake.jpg\");\n/* harmony import */ var _images_pizza_cake_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/pizza-cake.jpg */ \"./src/images/pizza-cake.jpg\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenuPage);\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction createMenuPage(container) {\r\n    const menuItems = [\"Sushi Doughnuts - $44ea\", \"Grilled Cheese Doughnuts - $15ea\", \"Black Charcoal Bun Lobster Rolls - $29ea\", \"Succulent Cupcakes - $Dont Ask\", \"Pizza Cake - $16\"];\r\n\r\n    const menuImages = [_images_sushi_doughnuts_jpg__WEBPACK_IMPORTED_MODULE_0__, _images_grilled_cheese_doughnuts_jpg__WEBPACK_IMPORTED_MODULE_1__, _images_lobster_roll_jpg__WEBPACK_IMPORTED_MODULE_2__, _images_cupcake_jpg__WEBPACK_IMPORTED_MODULE_3__, _images_pizza_cake_jpg__WEBPACK_IMPORTED_MODULE_4__];\r\n    const menuDescription = [\"A delectate dance for your tastebuds\",\"For 'those days'\", \"Order this to impress your friends\", \"A crowd favorite among plant lovers\", \"Pizza Cake, need I say more?\"]\r\n    const footer= document.querySelector(\".footer\");\r\n    const body = document.createElement(\"div\");\r\n    body.classList.add(\"main\");\r\n    container.insertBefore(body, footer);\r\n\r\n    const menu =document.createElement(\"div\");\r\n    menu.classList.add(\"menu\");\r\n    body.appendChild(menu);\r\n\r\n\r\n    for(let i=0; i< menuItems.length; i++){\r\n        const menuItem = document.createElement(\"div\");\r\n        menuItem.classList.add(\"menu-item\");\r\n        menuItem.textContent = menuItems[i];\r\n        menu.appendChild(menuItem);\r\n\r\n        const menuPictures = document.createElement(\"img\");\r\n        menuPictures.src = menuImages[i];\r\n        menuItem.appendChild(menuPictures);\r\n\r\n        const menuDescriptors = document.createElement (\"div\");\r\n        menuDescriptors.textContent = menuDescription[i];\r\n        menuItem.appendChild(menuDescriptors);\r\n\r\n\r\n    }\r\n\r\n\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/images/cupcake.jpg":
/*!********************************!*\
  !*** ./src/images/cupcake.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"134013dd504d290cde7f.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/cupcake.jpg?");

/***/ }),

/***/ "./src/images/featured-plate.jpg":
/*!***************************************!*\
  !*** ./src/images/featured-plate.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7a28ce88fe0ceb3e091b.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/featured-plate.jpg?");

/***/ }),

/***/ "./src/images/grilled-cheese-doughnuts.jpg":
/*!*************************************************!*\
  !*** ./src/images/grilled-cheese-doughnuts.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8902260dad0fc8b3519b.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/grilled-cheese-doughnuts.jpg?");

/***/ }),

/***/ "./src/images/lobster-roll.jpg":
/*!*************************************!*\
  !*** ./src/images/lobster-roll.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"be02ebb672201cf4c0e7.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/lobster-roll.jpg?");

/***/ }),

/***/ "./src/images/man-serving-food.jpg":
/*!*****************************************!*\
  !*** ./src/images/man-serving-food.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7c3a3efd04fa9ec69c1a.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/man-serving-food.jpg?");

/***/ }),

/***/ "./src/images/more-food.jpg":
/*!**********************************!*\
  !*** ./src/images/more-food.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c4a8d21ea658cfd072e9.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/more-food.jpg?");

/***/ }),

/***/ "./src/images/pizza-cake.jpg":
/*!***********************************!*\
  !*** ./src/images/pizza-cake.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"67f02ac853a6867b3039.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/pizza-cake.jpg?");

/***/ }),

/***/ "./src/images/resturant.jpg":
/*!**********************************!*\
  !*** ./src/images/resturant.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6d8bcd884530b37619a4.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/resturant.jpg?");

/***/ }),

/***/ "./src/images/sushi-doughnuts.jpg":
/*!****************************************!*\
  !*** ./src/images/sushi-doughnuts.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"78c906408d57cf2943df.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/sushi-doughnuts.jpg?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;