/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/public/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

throw new Error("Module build failed: ReferenceError: [BABEL] C:\\xampp\\htdocs\\repos\\timeliner\\js\\Timelineframe.js: Unknown option: C:\\xampp\\htdocs\\repos\\timeliner\\node_modules\\react\\react.js.Children. Check out http://babeljs.io/docs/usage/options/ for more information about options.\n\nA common cause of this error is the presence of a configuration options object without the corresponding preset name. Example:\n\nInvalid:\n  `{ presets: [{option: value}] }`\nValid:\n  `{ presets: [['presetName', {option: value}]] }`\n\nFor more detailed information on preset configuration, please see http://babeljs.io/docs/plugins/#pluginpresets-options. (While processing preset: \"C:\\\\xampp\\\\htdocs\\\\repos\\\\timeliner\\\\node_modules\\\\react\\\\react.js\")\n    at Logger.error (C:\\xampp\\htdocs\\repos\\timeliner\\node_modules\\babel-core\\lib\\transformation\\file\\logger.js:41:11)\n    at OptionManager.mergeOptions (C:\\xampp\\htdocs\\repos\\timeliner\\node_modules\\babel-core\\lib\\transformation\\file\\options\\option-manager.js:221:20)\n    at C:\\xampp\\htdocs\\repos\\timeliner\\node_modules\\babel-core\\lib\\transformation\\file\\options\\option-manager.js:260:14\n    at C:\\xampp\\htdocs\\repos\\timeliner\\node_modules\\babel-core\\lib\\transformation\\file\\options\\option-manager.js:329:22\n    at Array.map (native)\n    at OptionManager.resolvePresets (C:\\xampp\\htdocs\\repos\\timeliner\\node_modules\\babel-core\\lib\\transformation\\file\\options\\option-manager.js:270:20)\n    at OptionManager.mergePresets (C:\\xampp\\htdocs\\repos\\timeliner\\node_modules\\babel-core\\lib\\transformation\\file\\options\\option-manager.js:259:10)\n    at OptionManager.mergeOptions (C:\\xampp\\htdocs\\repos\\timeliner\\node_modules\\babel-core\\lib\\transformation\\file\\options\\option-manager.js:244:14)\n    at OptionManager.init (C:\\xampp\\htdocs\\repos\\timeliner\\node_modules\\babel-core\\lib\\transformation\\file\\options\\option-manager.js:374:12)\n    at File.initOptions (C:\\xampp\\htdocs\\repos\\timeliner\\node_modules\\babel-core\\lib\\transformation\\file\\index.js:216:65)\n    at new File (C:\\xampp\\htdocs\\repos\\timeliner\\node_modules\\babel-core\\lib\\transformation\\file\\index.js:139:24)\n    at Pipeline.transform (C:\\xampp\\htdocs\\repos\\timeliner\\node_modules\\babel-core\\lib\\transformation\\pipeline.js:46:16)\n    at transpile (C:\\xampp\\htdocs\\repos\\timeliner\\node_modules\\babel-loader\\lib\\index.js:38:20)\n    at Object.module.exports (C:\\xampp\\htdocs\\repos\\timeliner\\node_modules\\babel-loader\\lib\\index.js:133:12)");

/***/ },
/* 1 */
/***/ function(module, exports) {

throw new Error("Module build failed: ReferenceError: [BABEL] C:\\xampp\\htdocs\\repos\\timeliner\\public\\bundle.js: Unknown option: C:\\xampp\\htdocs\\repos\\timeliner\\node_modules\\react\\react.js.Children. Check out http://babeljs.io/docs/usage/options/ for more information about options.\n\nA common cause of this error is the presence of a configuration options object without the corresponding preset name. Example:\n\nInvalid:\n  `{ presets: [{option: value}] }`\nValid:\n  `{ presets: [['presetName', {option: value}]] }`\n\nFor more detailed information on preset configuration, please see http://babeljs.io/docs/plugins/#pluginpresets-options. (While processing preset: \"C:\\\\xampp\\\\htdocs\\\\repos\\\\timeliner\\\\node_modules\\\\react\\\\react.js\")\n    at Logger.error (C:\\xampp\\htdocs\\repos\\timeliner\\node_modules\\babel-core\\lib\\transformation\\file\\logger.js:41:11)\n    at OptionManager.mergeOptions (C:\\xampp\\htdocs\\repos\\timeliner\\node_modules\\babel-core\\lib\\transformation\\file\\options\\option-manager.js:221:20)\n    at C:\\xampp\\htdocs\\repos\\timeliner\\node_modules\\babel-core\\lib\\transformation\\file\\options\\option-manager.js:260:14\n    at C:\\xampp\\htdocs\\repos\\timeliner\\node_modules\\babel-core\\lib\\transformation\\file\\options\\option-manager.js:329:22\n    at Array.map (native)\n    at OptionManager.resolvePresets (C:\\xampp\\htdocs\\repos\\timeliner\\node_modules\\babel-core\\lib\\transformation\\file\\options\\option-manager.js:270:20)\n    at OptionManager.mergePresets (C:\\xampp\\htdocs\\repos\\timeliner\\node_modules\\babel-core\\lib\\transformation\\file\\options\\option-manager.js:259:10)\n    at OptionManager.mergeOptions (C:\\xampp\\htdocs\\repos\\timeliner\\node_modules\\babel-core\\lib\\transformation\\file\\options\\option-manager.js:244:14)\n    at OptionManager.init (C:\\xampp\\htdocs\\repos\\timeliner\\node_modules\\babel-core\\lib\\transformation\\file\\options\\option-manager.js:374:12)\n    at File.initOptions (C:\\xampp\\htdocs\\repos\\timeliner\\node_modules\\babel-core\\lib\\transformation\\file\\index.js:216:65)\n    at new File (C:\\xampp\\htdocs\\repos\\timeliner\\node_modules\\babel-core\\lib\\transformation\\file\\index.js:139:24)\n    at Pipeline.transform (C:\\xampp\\htdocs\\repos\\timeliner\\node_modules\\babel-core\\lib\\transformation\\pipeline.js:46:16)\n    at transpile (C:\\xampp\\htdocs\\repos\\timeliner\\node_modules\\babel-loader\\lib\\index.js:38:20)\n    at Object.module.exports (C:\\xampp\\htdocs\\repos\\timeliner\\node_modules\\babel-loader\\lib\\index.js:133:12)");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(0);
__webpack_require__(0);
module.exports = __webpack_require__(1);


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map