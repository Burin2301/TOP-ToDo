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

/***/ "./src/custom_modules/printMessages.js":
/*!*********************************************!*\
  !*** ./src/custom_modules/printMessages.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   printMessage: () => (/* binding */ printMessage)\n/* harmony export */ });\nconst printMessage = (function(){\r\n    const alert = (a) => alert(a);\r\n    const log = (a) => console.log(a)\r\n\r\n    return {\r\n        alert,\r\n        log,\r\n    }\r\n})();\r\n\r\n\n\n//# sourceURL=webpack://top-todo/./src/custom_modules/printMessages.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _custom_modules_printMessages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom_modules/printMessages */ \"./src/custom_modules/printMessages.js\");\n// IMPORTS------------------------------------------------------------------------------\r\n\r\n\r\n// -------------------------------------------------------------------------------------\r\n\r\n\r\n// CLASS CONSTRUCTORS------------------------------------------------------------------\r\n\r\nclass Project {\r\n    constructor( nameProject, descriptionProject ){\r\n        this.nameProject = nameProject;\r\n        this.descriptionProject = descriptionProject;\r\n    }\r\n};\r\n\r\nclass Task {\r\n    constructor( titleTask, descriptionTask, dueDate, priority) {\r\n        this.titleTask = titleTask;\r\n        this.descriptionTask = descriptionTask;\r\n        this.dueDate = dueDate;\r\n        this.priority = priority\r\n    }\r\n};\r\n\r\n// DEFAULT OBJECTS FOR TESTING -----------------------------------------------------------\r\nconst projectDefault = new Project(\"Default\", \"This project has been created automatically\");\r\nconst defaultTask = new Task( \"Default Task\", \"This task has been created automatically\", \"10/11/2023\", \"low\" );\r\n\r\nconst projects = [];\r\nprojects.push(projectDefault);\r\n\r\nconst tasks = []\r\ntasks.push(defaultTask)\r\n\r\nfunction newProject( ) {\r\n\r\n    let projectName = prompt(\"Please, type a name for the project.\");\r\n    let projectDescr = prompt(\"Please, type a description for the project, this is optional.\");\r\n\r\n    if( projectName === '' ) {\r\n        projectName = prompt(\"Please, type a name for the project.\")\r\n    }\r\n    const projectCreated = new Project(projectName,projectDescr);\r\n    projects.push(projectCreated);\r\n\r\n    _custom_modules_printMessages__WEBPACK_IMPORTED_MODULE_0__.printMessage.log(projects);\r\n\r\n    newTask()\r\n    \r\n    return projects;\r\n}\r\n\r\nfunction newTask( ) {\r\n    let taskTitle = prompt( \"Type a title for the new task\" );\r\n    let taskDescr = prompt( \"Type a description for the task\" );\r\n    let taskDate = prompt( \"Give a due date for the task\" );\r\n    let taskPrio = prompt( \"Give a priority order for this task\" );\r\n\r\n    if ( taskTitle === \"\" ) {\r\n        taskTitle = prompt( \"Type a title for the new task\" );\r\n    }else if ( taskDate === \"\" ) {\r\n        taskDate = prompt( \"Give a due date for the task\" );\r\n    }\r\n\r\n    const taskCreated = new Task( taskTitle, taskDescr, taskDate, taskPrio )\r\n    tasks.push(taskCreated)\r\n    _custom_modules_printMessages__WEBPACK_IMPORTED_MODULE_0__.printMessage.log(tasks)\r\n    return tasks;\r\n\r\n}\r\n\r\nnewProject();\n\n//# sourceURL=webpack://top-todo/./src/index.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;