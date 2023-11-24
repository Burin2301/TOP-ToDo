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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: 'Nunito', sans-serif;\r\n    font-size: 16px;\r\n}\r\nhtml{\r\n    height: 100vh;\r\n    width: 100%;\r\n}\r\nbody{\r\n    --main: hsla(287, 65%, 40%, 1);\r\n    --white: hsla(0, 0%, 100%, 1);\r\n    --text-black: hsla(341, 39%, 14%, 1);\r\n    --secondary: hsla(199, 100%, 29%, 1);\r\n    --text-light: rgb(27, 58, 71);\r\n\r\n    height: 100vh;\r\n    width: 100%;\r\n}\r\n.content{\r\n    height: 100vh;\r\n    width: 100%;\r\n}\r\nli{\r\n    list-style-type: none;\r\n}\r\n.inactive{\r\n    display: none;\r\n}\r\n\r\n/* HEADER------------------------------------------- */\r\n\r\nheader{\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 10px 30px;\r\n    justify-content: space-between;\r\n    border-radius: 0 0 1.5rem 1.5rem ;\r\n    box-shadow: 0 5px ;\r\n    margin-bottom: 5px;\r\n}\r\n.header-brand,\r\n.header-btns{\r\n    display: flex;\r\n    align-items: center;\r\n}\r\nheader img{\r\n    width: 60px;\r\n    height: 60px;\r\n}\r\nheader h1{\r\n    font-size: 2rem;\r\n}\r\n.navbar-button{\r\n    font-size: 1.6rem;\r\n    font-weight: 700;\r\n    padding-top: 3px;\r\n    margin-right: 2rem;\r\n    cursor: pointer;\r\n}.navbar-button:hover{\r\n    transform: translateY(4px);\r\n    transition: .4s;\r\n}\r\n.burgerBtn{\r\n    display: none;\r\n}\r\n\r\n/* MAIN--------------------------------------------- */\r\n\r\nmain{\r\n    display: flex;\r\n    height: 100vh;\r\n    width: 100%;\r\n    padding: 0 1.5rem;\r\n    align-items: center;\r\n}\r\n/* ASIDE ------------------------------------------- */\r\n\r\naside{\r\n    width: 260px;\r\n    height: 100vh;\r\n    background-color: var(--main);\r\n    padding: 20px 10px;\r\n    color: white;\r\n}\r\n.project-list{\r\n    font-size: 1.4rem;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    margin-top: 1.2rem;\r\n}\r\n.project-list::after{\r\n    content: '';\r\n    display: block;\r\n    width: 100%;\r\n    height: .05rem;\r\n    background-color: white;\r\n}\r\n.project-div{\r\n    display: flex;\r\n}\r\n.project-x-btn{\r\n    width: 20px;\r\n    height: 20px;\r\n    border-radius: 5px;\r\n    color: var(--text-light);\r\n    font-weight: bold;\r\n    font-size: 1rem;\r\n    border: none;\r\n    background-color: var(--white);\r\n    margin-left: auto;\r\n    cursor: pointer;\r\n}\r\n\r\n/* TASKS ------------------------------------------- */\r\n\r\n.taskcontainer{\r\n    width: 100%;\r\n    height: 100vh;\r\n}\r\n\r\n/* TASK-CONTAINER ---------------------------------- */\r\n.task-container{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: stretch;\r\n    width: 100%;\r\n    height: 100vh;\r\n    padding: 20px 10px;\r\n}\r\n.task-Li{\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin-top: .5rem;\r\n}\r\n.full-task{\r\n    width: 80%;\r\n    height: auto;\r\n    display: flex;\r\n    flex-direction: row;\r\n    padding: 10px 20px;\r\n    align-items: center;\r\n    border: 0.05rem solid var(--main);\r\n    border-radius: 10px;\r\n    cursor: pointer;\r\n}\r\n.task-info{\r\n    width: 100%;\r\n}\r\n.task-x-btn{\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 15px;\r\n    color: var(--white);\r\n    font-weight: bold;\r\n    font-size: 1.5rem;\r\n    border: none;\r\n    background-color: var(--secondary);\r\n    margin: 20px 20px 20px 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n/* POP UPS------------------------------------- */\r\n.pop-up-project,\r\n.pop-up-task{\r\n    position: absolute;\r\n    right: 20px;\r\n    top: 100px;\r\n    width: 350px;\r\n    padding: 20px;\r\n    color: white;\r\n    border-radius: 10px;\r\n    background: var(--secondary);\r\n}\r\n.pop-up-task{\r\n    flex-direction: column;\r\n}\r\n.task-pop{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.project-pop{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.add-btn{\r\n    padding: 6px 10px;\r\n    width: 60%;\r\n    border-radius: 10px;\r\n    align-self: center;\r\n    background: var(--white);\r\n    color: var(--text-black);\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    margin-top: 0.4rem;\r\n}\r\n\r\n\r\n/* MEDIA QUERY ------------------------------------ */\r\n\r\n@media (max-width: 600px){\r\n    .burgerBtn{\r\n        display: block;\r\n    }\r\n}\r\n\r\n/* ----------- */`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://top-todo/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://top-todo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://top-todo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://top-todo/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://top-todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://top-todo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://top-todo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://top-todo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://top-todo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://top-todo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/UI/body.js":
/*!************************!*\
  !*** ./src/UI/body.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   main: () => (/* binding */ main),\n/* harmony export */   updateProjectsList: () => (/* binding */ updateProjectsList),\n/* harmony export */   updateTasksLIst: () => (/* binding */ updateTasksLIst)\n/* harmony export */ });\n/* harmony import */ var _logic_newTry_newProjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic_newTry/newProjects */ \"./src/logic_newTry/newProjects.js\");\n/* harmony import */ var _logic_newTry_newTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logic_newTry/newTasks */ \"./src/logic_newTry/newTasks.js\");\n/* harmony import */ var _pop_ups__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pop-ups */ \"./src/UI/pop-ups.js\");\n// IMPORTS----------------\r\n\r\n\r\n\r\n\r\n\r\n// -----------------------\r\n\r\nconst main = document.createElement('main')\r\nconst aside = document.createElement('aside')\r\nconst taskContainer = document.createElement('div')\r\ntaskContainer.classList.add('task-container')\r\n\r\n// ASIDE ----------------\r\n\r\nconst projectListContainer = document.createElement('div')\r\nprojectListContainer.classList.add('project-list-container')\r\n\r\nconst projectListUL = document.createElement('ul')\r\n\r\nfunction updateProjectsList(){\r\n    projectListUL.innerHTML = ''\r\n    _logic_newTry_newProjects__WEBPACK_IMPORTED_MODULE_0__.projects.forEach((project)=>{\r\n        const projectTitle = project.getProjectName()\r\n        const newLi = document.createElement('li')\r\n        newLi.id = projectTitle\r\n        newLi.classList.add('project-list')\r\n        const liContent =`\r\n            <div class=\"project-div\">\r\n                <p>${projectTitle}</p>\r\n                <button id=\"${projectTitle}+Delete\" class=\"project-x-btn\">X</button>\r\n            </div>\r\n            `\r\n        newLi.innerHTML = liContent\r\n        projectListUL.appendChild(newLi)\r\n    })\r\n}\r\n\r\n\r\nupdateProjectsList()\r\nprojectListContainer.appendChild(projectListUL)\r\naside.appendChild(projectListContainer)\r\n// ----------------------\r\n\r\n// MAIN -----------------\r\n\r\nconst tasksList = document.createElement('div')\r\ntasksList.classList.add('task-list')\r\n\r\nconst taskListUL = document.createElement('ul')\r\nfunction updateTasksLIst(){\r\n    taskListUL.innerHTML = ''\r\n    _logic_newTry_newTasks__WEBPACK_IMPORTED_MODULE_1__.tasks.forEach((task)=>{\r\n        const taskName = task.getName()\r\n        const taskDueDate = task.dueDate\r\n        const taskLi = document.createElement('li')\r\n        taskLi.classList.add('task-Li')\r\n        taskLi.innerHTML = `\r\n        <div class=\"full-task\">\r\n            <div class=\"task-info\">\r\n                <h3>${taskName}</h3>\r\n                <p>Due Date: ${taskDueDate}</p>\r\n            </div>\r\n            <button class=\"task-x-btn\">X</button>\r\n        </div>`\r\n        taskListUL.appendChild(taskLi)\r\n\r\n        console.table(_logic_newTry_newProjects__WEBPACK_IMPORTED_MODULE_0__.projects)\r\n        console.table(_logic_newTry_newTasks__WEBPACK_IMPORTED_MODULE_1__.tasks)\r\n    })\r\n}\r\nupdateTasksLIst()\r\ntasksList.appendChild(taskListUL)\r\ntaskContainer.appendChild(tasksList)\r\n// ----------------------\r\n\r\nmain.appendChild(aside)\r\nmain.appendChild(taskContainer)\r\nmain.appendChild(_pop_ups__WEBPACK_IMPORTED_MODULE_2__.popUpProject)\r\nmain.appendChild(_pop_ups__WEBPACK_IMPORTED_MODULE_2__.popUpTask)\r\n\r\n\r\n\n\n//# sourceURL=webpack://top-todo/./src/UI/body.js?");

/***/ }),

/***/ "./src/UI/header.js":
/*!**************************!*\
  !*** ./src/UI/header.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   header: () => (/* binding */ header)\n/* harmony export */ });\n/* harmony import */ var _asset_agenda_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../asset/agenda.png */ \"./src/asset/agenda.png\");\n/* harmony import */ var _asset_barramenu_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../asset/barramenu.png */ \"./src/asset/barramenu.png\");\n// IMPORTS-------\r\n\r\n\r\n//---------------\r\n\r\nconst header = document.createElement('header')\r\nheader.classList.add('header')\r\nheader.setAttribute('id','header')\r\n\r\nconst headerBrand = document.createElement('div')\r\nheaderBrand.classList.add('header-brand')\r\n\r\nconst headerLogo = document.createElement('img')\r\nheaderLogo.src = _asset_agenda_png__WEBPACK_IMPORTED_MODULE_0__\r\n\r\nconst headerTitle = document.createElement('h1')\r\nheaderTitle.classList.add('header-title')\r\nheaderTitle.innerText = 'Focus-Forge'\r\n\r\nconst headerBtns = document.createElement('div')\r\nheaderBtns.classList.add('header-btns')\r\n\r\nconst burgerMenuButton = document.createElement('img')\r\nburgerMenuButton.classList.add('burgerBtn')\r\nburgerMenuButton.src = _asset_barramenu_png__WEBPACK_IMPORTED_MODULE_1__\r\n\r\nconst createProject = document.createElement('p')\r\ncreateProject.id = 'ctProjectBtn'\r\ncreateProject.innerText = 'Create Project'\r\ncreateProject.classList.add('ct-project-button')\r\ncreateProject.classList.add('navbar-button')\r\n\r\nconst createTask = document.createElement('p')\r\ncreateTask.id = 'ctTaskBtn'\r\ncreateTask.innerText = 'Create Task'\r\ncreateTask.classList.add('ct-task-button')\r\ncreateTask.classList.add('navbar-button')\r\n\r\nheaderBrand.appendChild(headerLogo)\r\nheaderBrand.appendChild(headerTitle)\r\nheader.appendChild(headerBrand)\r\n\r\nheaderBtns.appendChild(createProject)\r\nheaderBtns.appendChild(createTask)\r\nheaderBtns.appendChild(burgerMenuButton)\r\nheader.appendChild(headerBtns)\r\n\r\n\n\n//# sourceURL=webpack://top-todo/./src/UI/header.js?");

/***/ }),

/***/ "./src/UI/pop-ups.js":
/*!***************************!*\
  !*** ./src/UI/pop-ups.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   popUpProject: () => (/* binding */ popUpProject),\n/* harmony export */   popUpTask: () => (/* binding */ popUpTask),\n/* harmony export */   updateProjectForTasks: () => (/* binding */ updateProjectForTasks)\n/* harmony export */ });\n/* harmony import */ var _logic_newTry_newProjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic_newTry/newProjects */ \"./src/logic_newTry/newProjects.js\");\n// IMPORTS-----------------------\r\n\r\n// ------------------------------\r\n\r\n// PROJECT POP UP ---------------\r\nconst popUpProject = document.createElement('div')\r\npopUpProject.classList.add('inactive')\r\npopUpProject.classList.add('pop-up-project')\r\nconst projectContent = `\r\n<div class=\"project-pop\">\r\n    <h3>Create a Project</h3>\r\n    <br>\r\n    <label for=\"projectNameInput\">Project Name</label>\r\n    <input id=\"projectNameInput\" type=\"text\" placeholder=\"Name\">\r\n    <br>\r\n    <button class=\"add-btn\" id=\"addProject\">Add Project</button>\r\n</div>\r\n`\r\npopUpProject.innerHTML = projectContent\r\n\r\n\r\n// TASK POP UP ------------------\r\n\r\nconst popUpTask = document.createElement('div')\r\npopUpTask.classList.add('inactive')\r\npopUpTask.classList.add('pop-up-task')\r\n\r\nconst taskPop = document.createElement('div')\r\ntaskPop.classList.add(\"task-pop\")\r\nconst taskContent = `\r\n    <h3>Create a task</h3>\r\n    <br>\r\n    <label for=\"taskNameInput\">Task Name</label>\r\n    <input id=\"taskNameInput\" type=\"text\" placeholder=\"Name\">\r\n    <br>\r\n    <label for=\"taskDateInput\">Due Date</label>\r\n    <input id=\"taskDateInput\" type=\"date\" placeholder=\"Due Date\">\r\n    <br>`\r\n\r\ntaskPop.innerHTML = taskContent\r\nconst taskProjectLabel = document.createElement('label')\r\ntaskProjectLabel.setAttribute(\"for\", \"taskProjectChoice\")\r\ntaskProjectLabel.innerText = \"Priority\"\r\n\r\n\r\nconst taskProjectSelectLabel = document.createElement('label')\r\ntaskProjectSelectLabel.setAttribute(\"for\",'taskProjectChoice')\r\ntaskProjectSelectLabel.innerText = \"Choose a Project\"\r\n\r\nconst taskProjectSelect = document.createElement('select')\r\ntaskProjectSelect.setAttribute(\"name\", \"taskProjectChoice\")\r\ntaskProjectSelect.id = \"taskProjectChoice\"\r\n\r\nfunction updateProjectForTasks(){\r\n    taskProjectSelect.innerHTML = \"\"\r\n    _logic_newTry_newProjects__WEBPACK_IMPORTED_MODULE_0__.projects.forEach((project)=>{\r\n        const projectTitle = project.getProjectName()\r\n        const optionProject = document.createElement('option')\r\n        optionProject.value = projectTitle\r\n        optionProject.innerText = projectTitle\r\n        optionProject.id = projectTitle\r\n        taskProjectSelect.appendChild(optionProject)\r\n    })\r\n}\r\n\r\nconst br = document.createElement('br')\r\n\r\nconst addTaskBtn = document.createElement('button')\r\naddTaskBtn.innerText = \"Add Task\"\r\naddTaskBtn.id = 'addTask'\r\naddTaskBtn.classList.add('add-btn')\r\n\r\ntaskPop.appendChild(taskProjectSelectLabel)\r\ntaskPop.appendChild(taskProjectSelect)\r\ntaskPop.appendChild(br)\r\ntaskPop.appendChild(addTaskBtn)\r\n\r\npopUpTask.appendChild(taskPop)\r\n\r\n\r\n\n\n//# sourceURL=webpack://top-todo/./src/UI/pop-ups.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _logic_newTry_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic_newTry/logic */ \"./src/logic_newTry/logic.js\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n// IMPORTS=========\r\n\r\n\r\n\r\nconst screenContent = document.querySelector('.content')\r\ndocument.addEventListener('DOMContentLoaded', _logic_newTry_logic__WEBPACK_IMPORTED_MODULE_0__.renderScreen)\n\n//# sourceURL=webpack://top-todo/./src/index.js?");

/***/ }),

/***/ "./src/logic_newTry/logic.js":
/*!***********************************!*\
  !*** ./src/logic_newTry/logic.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderScreen: () => (/* binding */ renderScreen)\n/* harmony export */ });\n/* harmony import */ var _UI_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../UI/header */ \"./src/UI/header.js\");\n/* harmony import */ var _UI_body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/body */ \"./src/UI/body.js\");\n/* harmony import */ var _UI_pop_ups__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UI/pop-ups */ \"./src/UI/pop-ups.js\");\n/* harmony import */ var _newProjects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newProjects */ \"./src/logic_newTry/newProjects.js\");\n/* harmony import */ var _newTasks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./newTasks */ \"./src/logic_newTry/newTasks.js\");\n// IMPORTS====\r\n\r\n\r\n\r\n\r\n\r\n// SET UI\r\n\r\nconst screenContent = document.querySelector('.content')\r\nfunction renderScreen(){\r\n    screenContent.appendChild(_UI_header__WEBPACK_IMPORTED_MODULE_0__.header)\r\n    screenContent.appendChild(_UI_body__WEBPACK_IMPORTED_MODULE_1__.main)\r\n}\r\nrenderScreen()\r\n\r\n\r\n// FUNCTION TO CREATE POPUP\r\nfunction createProjectPopUp(){\r\n    const taskIsOpen = !_UI_pop_ups__WEBPACK_IMPORTED_MODULE_2__.popUpTask.classList.contains('inactive')\r\n    if(taskIsOpen){\r\n        _UI_pop_ups__WEBPACK_IMPORTED_MODULE_2__.popUpTask.classList.add('inactive')\r\n    }\r\n    _UI_pop_ups__WEBPACK_IMPORTED_MODULE_2__.popUpProject.classList.toggle('inactive')\r\n}\r\nfunction createTaskPopUp(){\r\n    const projectIsOpen = !_UI_pop_ups__WEBPACK_IMPORTED_MODULE_2__.popUpProject.classList.contains('inactive')\r\n    if(projectIsOpen){\r\n        _UI_pop_ups__WEBPACK_IMPORTED_MODULE_2__.popUpProject.classList.add('inactive')\r\n    }\r\n    _UI_pop_ups__WEBPACK_IMPORTED_MODULE_2__.popUpTask.classList.toggle('inactive')\r\n}\r\n\r\n// CREATE POPUP BUTTONS\r\nconst popupProjectBtn = document.querySelector('#ctProjectBtn')\r\npopupProjectBtn.addEventListener('click', createProjectPopUp)\r\nconst popupTaskBtn = document.querySelector('#ctTaskBtn')\r\npopupTaskBtn.addEventListener('click',()=>{\r\n    createTaskPopUp()\r\n    ;(0,_UI_pop_ups__WEBPACK_IMPORTED_MODULE_2__.updateProjectForTasks)()\r\n} )\r\n\r\n// BUTTONS FROM POPUPS TO CREATE STUFF\r\nconst createProjectBtn = document.querySelector('#addProject')\r\ncreateProjectBtn.addEventListener('click', ()=>{\r\n    let projectNameInput = document.querySelector('#projectNameInput').value\r\n    ;(0,_newProjects__WEBPACK_IMPORTED_MODULE_3__.newProject)(projectNameInput)\r\n    document.querySelector('#projectNameInput').value = \"\"\r\n})\r\n\r\nconst createTaskBtn = document.querySelector('#addTask')\r\ncreateTaskBtn.addEventListener('click', ()=>{\r\n    let nameOfTask = document.querySelector('#taskNameInput').value\r\n    let taskDueDate = document.querySelector('#taskDateInput').value\r\n    let taskProject = document.querySelector('#taskProjectChoice').value\r\n    ;(0,_newTasks__WEBPACK_IMPORTED_MODULE_4__.newTask)(nameOfTask, taskDueDate, taskProject)\r\n    ;(0,_UI_body__WEBPACK_IMPORTED_MODULE_1__.updateTasksLIst)()\r\n})\r\n\r\n\r\n\n\n//# sourceURL=webpack://top-todo/./src/logic_newTry/logic.js?");

/***/ }),

/***/ "./src/logic_newTry/newProjects.js":
/*!*****************************************!*\
  !*** ./src/logic_newTry/newProjects.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project),\n/* harmony export */   newProject: () => (/* binding */ newProject),\n/* harmony export */   projects: () => (/* binding */ projects)\n/* harmony export */ });\n/* harmony import */ var _logic_newTry_newTasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic_newTry/newTasks */ \"./src/logic_newTry/newTasks.js\");\n/* harmony import */ var _UI_body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/body */ \"./src/UI/body.js\");\n// IMPORTS==================\r\n\r\n\r\n\r\n\r\n// NEW PROJECT\r\nconst projects = []\r\n\r\nclass Project{\r\n    constructor(projectName, tasks){\r\n        this.projectName = projectName;\r\n        this.tasks = []\r\n    }\r\n    // SETTER METHODS\r\n    setProjectName(projectName){\r\n        this.projectName = projectName\r\n    }\r\n    setTasks(tasks){\r\n        this.tasks = tasks\r\n    }\r\n    // GETTER METHODS\r\n    getProjectName(){\r\n        return this.projectName\r\n    }\r\n    getTasks(){\r\n        return this.tasks\r\n    }\r\n    addTask(newTask){\r\n        if(!this.tasks.find((task)=>task.taskName === newTask)){\r\n            this.tasks.push(newTask)\r\n        }\r\n    }\r\n}\r\n\r\nconst projectTest1 = new Project('Default', 'For testing')\r\nconst projectTest2 = new Project('Testing', 'For testing')\r\nprojects.push(projectTest1)\r\nprojects.push(projectTest2)\r\n\r\nfunction doesProjectExists(name) {\r\n    let exists = projects.some((project) => project.projectName === name);\r\n    return exists;\r\n}\r\n\r\nfunction newProject(name){\r\n    let projectName = name\r\n    let projectExists = doesProjectExists(name)\r\n    console.log(projectExists)\r\n    switch(true){\r\n        case projectName===\"\":\r\n            alert('Please, type a name for the project')\r\n            console.table(projects)\r\n            break;\r\n        case projectExists:\r\n            alert('This project already exists')\r\n            console.table(projects)\r\n            break;\r\n        case !projectExists:\r\n        case projectName != \"\":\r\n            const newProjectCreated = new Project(projectName)\r\n            projects.push(newProjectCreated)\r\n            ;(0,_UI_body__WEBPACK_IMPORTED_MODULE_1__.updateProjectsList)()\r\n            break\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://top-todo/./src/logic_newTry/newProjects.js?");

/***/ }),

/***/ "./src/logic_newTry/newTasks.js":
/*!**************************************!*\
  !*** ./src/logic_newTry/newTasks.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task),\n/* harmony export */   newTask: () => (/* binding */ newTask),\n/* harmony export */   tasks: () => (/* binding */ tasks)\n/* harmony export */ });\n/* harmony import */ var _newProjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newProjects */ \"./src/logic_newTry/newProjects.js\");\n// IMPORTS==================\r\n\r\n\r\n\r\n// NEW TASK\r\nclass Task{\r\n    constructor(taskName, dueDate, project, status, prio, notes){\r\n        this.taskName = taskName;\r\n        this.dueDate = dueDate;\r\n        this.project = project;\r\n        this.status = status;\r\n        this.prio = prio\r\n        this.notes = []\r\n    }\r\n    // SETTER METHODS\r\n    setNotes(notes){\r\n        this.notes = notes\r\n    }\r\n    setProject(project){\r\n        this.project = project\r\n    }\r\n    setPrio(prio){\r\n        this.prio = prio\r\n    }\r\n    setStatus(status){\r\n        this.status = status\r\n    }\r\n    // GETTER METHODS\r\n    getName(){\r\n        return this.taskName\r\n    }\r\n    getPrio(){\r\n        return this.prio\r\n    }\r\n    getProject(){\r\n        return this.project\r\n    }\r\n    getNote(){\r\n        return this.notes\r\n    }\r\n    getStatus(){\r\n        return this.status\r\n    }\r\n\r\n    formatDate(){\r\n        const month = this.dueDate.split('/')[0]\r\n        const day = this.dueDate.split('/')[0]\r\n        const year = this.dueDate.split('/')[0]\r\n        return `${month}/${day}/${year}`\r\n    }\r\n}\r\n\r\nconst tasks = []\r\n\r\nconst task1 = new Task('testing', '12/11/2023','Testing','started','high')\r\nconst task2 = new Task('testing2', '01/23/2024','Default','started','low')\r\ntasks.push(task1)\r\ntasks.push(task2)\r\n\r\nfunction newTask(name, dueDate, project){\r\n    let taskName = name\r\n    let taskDueDate = dueDate\r\n    let taskProject = project\r\n    let taskExists = compareNewProjectInfo(taskName)\r\n    switch(true){\r\n        case taskExists:\r\n            alert('This task already exists')\r\n            console.table(tasks)\r\n            break\r\n        case !taskExists:\r\n            if(taskDueDate === ''){\r\n                let today = new Date()\r\n                let todayDays = today.getDate()\r\n                let todayMonth = today.getMonth()+1\r\n                let todayYear = today.getFullYear()\r\n                taskDueDate = `${todayMonth}/${todayDays}/${todayYear}`\r\n            }\r\n            if(taskProject === '')taskProject = 'Default'\r\n            const newTaskCreated = new Task(taskName, taskDueDate, taskProject)\r\n            tasks.push(newTaskCreated)\r\n            console.table(tasks)\r\n            console.table(_newProjects__WEBPACK_IMPORTED_MODULE_0__.projects)\r\n            break\r\n    }\r\n}\r\n\r\nfunction compareNewProjectInfo(a){\r\n    if(tasks.find((task)=>task.taskName===a))\r\n    return true\r\n}\r\n\r\n\n\n//# sourceURL=webpack://top-todo/./src/logic_newTry/newTasks.js?");

/***/ }),

/***/ "./src/asset/agenda.png":
/*!******************************!*\
  !*** ./src/asset/agenda.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5a1003a6c2db2486ac7d.png\";\n\n//# sourceURL=webpack://top-todo/./src/asset/agenda.png?");

/***/ }),

/***/ "./src/asset/barramenu.png":
/*!*********************************!*\
  !*** ./src/asset/barramenu.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9f064b142ba2c71c721d.png\";\n\n//# sourceURL=webpack://top-todo/./src/asset/barramenu.png?");

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
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