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
/******/ 	return __webpack_require__(__webpack_require__.s = "./back/src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./back/config/config.js":
/*!*******************************!*\
  !*** ./back/config/config.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.json */ \"./back/config/config.json\");\nvar _config_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./config.json */ \"./back/config/config.json\", 1);\n\n\nif (typeof _config_json__WEBPACK_IMPORTED_MODULE_0__.SERVER_PORT !== 'number') {\n  console.error('Config Loader - \"PORT\" should be a valid number.');\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_config_json__WEBPACK_IMPORTED_MODULE_0__);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9iYWNrL2NvbmZpZy9jb25maWcuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9iYWNrL2NvbmZpZy9jb25maWcuanM/ZDU0NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnLmpzb24nO1xuXG5pZiAodHlwZW9mIGNvbmZpZy5TRVJWRVJfUE9SVCAhPT0gJ251bWJlcicpIHtcbiAgY29uc29sZS5lcnJvcignQ29uZmlnIExvYWRlciAtIFwiUE9SVFwiIHNob3VsZCBiZSBhIHZhbGlkIG51bWJlci4nKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29uZmlnOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./back/config/config.js\n");

/***/ }),

/***/ "./back/config/config.json":
/*!*********************************!*\
  !*** ./back/config/config.json ***!
  \*********************************/
/*! exports provided: SERVER_PORT, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"SERVER_PORT\\\":3000}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9iYWNrL2NvbmZpZy9jb25maWcuanNvbi5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./back/config/config.json\n");

/***/ }),

/***/ "./back/src/app.js":
/*!*************************!*\
  !*** ./back/src/app.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/config */ \"./back/config/config.js\");\n/* harmony import */ var _services_match__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/match */ \"./back/src/services/match.js\");\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_1___default()();\napp.set('view engine', 'ejs');\napp.set('views', path__WEBPACK_IMPORTED_MODULE_0___default.a.join(process.cwd(), 'back/views'));\napp.get('/', async (req, res) => {\n  res.render('home', {\n    matchList: JSON.stringify((await Object(_services_match__WEBPACK_IMPORTED_MODULE_3__[\"getMatchListByPuuid\"])()))\n  });\n});\napp.listen(_config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].SERVER_PORT, () => {\n  console.log('Example app listening on port 3000!');\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9iYWNrL3NyYy9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9iYWNrL3NyYy9hcHAuanM/MzExMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcvY29uZmlnJztcbmltcG9ydCB7IGdldE1hdGNoTGlzdEJ5UHV1aWQgfSBmcm9tICcuL3NlcnZpY2VzL21hdGNoJztcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcbmFwcC5zZXQoJ3ZpZXcgZW5naW5lJywgJ2VqcycpO1xuYXBwLnNldCgndmlld3MnLCBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2JhY2svdmlld3MnKSk7XG5hcHAuZ2V0KCcvJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIHJlcy5yZW5kZXIoJ2hvbWUnLCB7XG4gICAgbWF0Y2hMaXN0OiBKU09OLnN0cmluZ2lmeSgoYXdhaXQgZ2V0TWF0Y2hMaXN0QnlQdXVpZCgpKSlcbiAgfSk7XG59KTtcbmFwcC5saXN0ZW4oY29uZmlnLlNFUlZFUl9QT1JULCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdFeGFtcGxlIGFwcCBsaXN0ZW5pbmcgb24gcG9ydCAzMDAwIScpO1xufSk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./back/src/app.js\n");

/***/ }),

/***/ "./back/src/services/match.js":
/*!************************************!*\
  !*** ./back/src/services/match.js ***!
  \************************************/
/*! exports provided: getMatchListByPuuid, getMatchById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMatchListByPuuid\", function() { return getMatchListByPuuid; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMatchById\", function() { return getMatchById; });\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ \"node-fetch\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/constants */ \"./back/src/utils/constants.js\");\n\n\nconst getMatchListByPuuid = async () => {\n  const matchNumberLimit = 1;\n  const matchIdList = await node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_utils_constants__WEBPACK_IMPORTED_MODULE_1__[\"TFT_API_BASE_URL\"]}/matches/by-puuid/${_utils_constants__WEBPACK_IMPORTED_MODULE_1__[\"PUUID_ID\"]}/ids?count=${matchNumberLimit}`, {\n    headers: {\n      'X-Riot-Token': _utils_constants__WEBPACK_IMPORTED_MODULE_1__[\"TEMP_API_TOKEN\"]\n    }\n  }).then(response => response.json());\n  const matchRequestList = matchIdList.map(matchId => getMatchById(matchId));\n  return Promise.all(matchRequestList);\n};\nconst getMatchById = async matchId => {\n  return node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_utils_constants__WEBPACK_IMPORTED_MODULE_1__[\"TFT_API_BASE_URL\"]}/matches/${matchId}`, {\n    headers: {\n      'X-Riot-Token': _utils_constants__WEBPACK_IMPORTED_MODULE_1__[\"TEMP_API_TOKEN\"]\n    }\n  }).then(response => response.json());\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9iYWNrL3NyYy9zZXJ2aWNlcy9tYXRjaC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2JhY2svc3JjL3NlcnZpY2VzL21hdGNoLmpzPzNlMmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ25vZGUtZmV0Y2gnO1xuaW1wb3J0IHsgUFVVSURfSUQsIFRFTVBfQVBJX1RPS0VOLCBURlRfQVBJX0JBU0VfVVJMIH0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzJztcbmV4cG9ydCBjb25zdCBnZXRNYXRjaExpc3RCeVB1dWlkID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBtYXRjaE51bWJlckxpbWl0ID0gMTtcbiAgY29uc3QgbWF0Y2hJZExpc3QgPSBhd2FpdCBmZXRjaChgJHtURlRfQVBJX0JBU0VfVVJMfS9tYXRjaGVzL2J5LXB1dWlkLyR7UFVVSURfSUR9L2lkcz9jb3VudD0ke21hdGNoTnVtYmVyTGltaXR9YCwge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgICdYLVJpb3QtVG9rZW4nOiBURU1QX0FQSV9UT0tFTlxuICAgIH1cbiAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xuICBjb25zdCBtYXRjaFJlcXVlc3RMaXN0ID0gbWF0Y2hJZExpc3QubWFwKG1hdGNoSWQgPT4gZ2V0TWF0Y2hCeUlkKG1hdGNoSWQpKTtcbiAgcmV0dXJuIFByb21pc2UuYWxsKG1hdGNoUmVxdWVzdExpc3QpO1xufTtcbmV4cG9ydCBjb25zdCBnZXRNYXRjaEJ5SWQgPSBhc3luYyBtYXRjaElkID0+IHtcbiAgcmV0dXJuIGZldGNoKGAke1RGVF9BUElfQkFTRV9VUkx9L21hdGNoZXMvJHttYXRjaElkfWAsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnWC1SaW90LVRva2VuJzogVEVNUF9BUElfVE9LRU5cbiAgICB9XG4gIH0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcbn07Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./back/src/services/match.js\n");

/***/ }),

/***/ "./back/src/utils/constants.js":
/*!*************************************!*\
  !*** ./back/src/utils/constants.js ***!
  \*************************************/
/*! exports provided: TFT_API_BASE_URL, PUUID_ID, TEMP_API_TOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TFT_API_BASE_URL\", function() { return TFT_API_BASE_URL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PUUID_ID\", function() { return PUUID_ID; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TEMP_API_TOKEN\", function() { return TEMP_API_TOKEN; });\nconst TFT_API_BASE_URL = 'https://europe.api.riotgames.com/tft/match/v1';\nconst PUUID_ID = 'k63C7wI2DRBePNMwt5TOpO6xcMDBrcnHJzmtaNDUUWaoNx5uGZL7OikCFzmFQ0JiKjmqt7mDz6RGlA';\nconst TEMP_API_TOKEN = 'RGAPI-b652e2de-10bc-4304-b9b5-715248c1d121';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9iYWNrL3NyYy91dGlscy9jb25zdGFudHMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9iYWNrL3NyYy91dGlscy9jb25zdGFudHMuanM/NDg1MiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgVEZUX0FQSV9CQVNFX1VSTCA9ICdodHRwczovL2V1cm9wZS5hcGkucmlvdGdhbWVzLmNvbS90ZnQvbWF0Y2gvdjEnO1xuZXhwb3J0IGNvbnN0IFBVVUlEX0lEID0gJ2s2M0M3d0kyRFJCZVBOTXd0NVRPcE82eGNNREJyY25ISnptdGFORFVVV2FvTng1dUdaTDdPaWtDRnptRlEwSmlLam1xdDdtRHo2UkdsQSc7XG5leHBvcnQgY29uc3QgVEVNUF9BUElfVE9LRU4gPSAnUkdBUEktYjY1MmUyZGUtMTBiYy00MzA0LWI5YjUtNzE1MjQ4YzFkMTIxJzsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./back/src/utils/constants.js\n");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })

/******/ });