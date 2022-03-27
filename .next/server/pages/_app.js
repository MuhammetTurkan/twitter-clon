/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/app.css */ \"./styles/app.css\");\n/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_app_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ \"./store/index.js\");\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const { 0: theme1 , 1: themeSet  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const theme = localStorage.getItem('THEME') || 'light';\n        themeSet(theme);\n    }, []);\n    const changeTheme = (theme)=>{\n        themeSet(theme);\n        localStorage.setItem('THEME', theme);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!theme1) return;\n        const $html = document.querySelector('html');\n        $html.classList.remove('light');\n        $html.classList.remove('dark');\n        $html.classList.remove('dim');\n        $html.classList.add(theme1.toString());\n    }, [\n        theme1\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Provider, {\n        value: {\n            theme: theme1,\n            changeTheme\n        },\n        __source: {\n            fileName: \"C:\\\\Program Files\\\\React\\\\twitter-clon\\\\pages\\\\_app.js\",\n            lineNumber: 29,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n            ...pageProps,\n            __source: {\n                fileName: \"C:\\\\Program Files\\\\React\\\\twitter-clon\\\\pages\\\\_app.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            },\n            __self: this\n        })\n    }));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFrRDtBQUV4QjtBQUNTO0FBRXBCLFFBQVEsQ0FBQ0ksS0FBSyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUFFQyxTQUFTLEVBQUMsQ0FBQyxFQUFFLENBQUM7SUFDdkQsS0FBSyxNQUFFQyxNQUFLLE1BQUVDLFFBQVEsTUFBSU4sK0NBQVEsQ0FBQyxJQUFJO0lBRXZDRCxnREFBUyxLQUFPLENBQUM7UUFDZixLQUFLLENBQUNNLEtBQUssR0FBR0UsWUFBWSxDQUFDQyxPQUFPLENBQUMsQ0FBTyxXQUFLLENBQU87UUFDdERGLFFBQVEsQ0FBQ0QsS0FBSztJQUNoQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsS0FBSyxDQUFDSSxXQUFXLElBQUlKLEtBQUssR0FBSyxDQUFDO1FBQzlCQyxRQUFRLENBQUNELEtBQUs7UUFDZEUsWUFBWSxDQUFDRyxPQUFPLENBQUMsQ0FBTyxRQUFFTCxLQUFLO0lBQ3JDLENBQUM7SUFFRE4sZ0RBQVMsS0FBTyxDQUFDO1FBQ2YsRUFBRSxHQUFHTSxNQUFLLEVBQUUsTUFBTTtRQUNsQixLQUFLLENBQUNNLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsQ0FBTTtRQUMzQ0YsS0FBSyxDQUFDRyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxDQUFPO1FBQzlCSixLQUFLLENBQUNHLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLENBQU07UUFDN0JKLEtBQUssQ0FBQ0csU0FBUyxDQUFDQyxNQUFNLENBQUMsQ0FBSztRQUM1QkosS0FBSyxDQUFDRyxTQUFTLENBQUNFLEdBQUcsQ0FBQ1gsTUFBSyxDQUFDWSxRQUFRO0lBQ3BDLENBQUMsRUFBRSxDQUFDWjtRQUFBQSxNQUFLO0lBQUEsQ0FBQztJQUVWLE1BQU0sc0VBQ0hKLHVEQUFxQjtRQUFDa0IsS0FBSyxFQUFFLENBQUM7WUFBQ2QsS0FBSyxFQUFMQSxNQUFLO1lBQUVJLFdBQVc7UUFBQyxDQUFDOzs7Ozs7O3VGQUNqRE4sU0FBUztlQUFLQyxTQUFTOzs7Ozs7Ozs7QUFHOUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R3aXR0ZXItY2xvbi8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0ICcuLi9zdHlsZXMvYXBwLmNzcydcclxuaW1wb3J0IFN0b3JlQ29udGV4dCBmcm9tICcuLi9zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIGNvbnN0IFt0aGVtZSwgdGhlbWVTZXRdID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1RIRU1FJykgfHwgJ2xpZ2h0J1xyXG4gICAgdGhlbWVTZXQodGhlbWUpXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGNoYW5nZVRoZW1lID0gKHRoZW1lKSA9PiB7XHJcbiAgICB0aGVtZVNldCh0aGVtZSlcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdUSEVNRScsIHRoZW1lKVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghdGhlbWUpIHJldHVyblxyXG4gICAgY29uc3QgJGh0bWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJylcclxuICAgICRodG1sLmNsYXNzTGlzdC5yZW1vdmUoJ2xpZ2h0JylcclxuICAgICRodG1sLmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmsnKVxyXG4gICAgJGh0bWwuY2xhc3NMaXN0LnJlbW92ZSgnZGltJylcclxuICAgICRodG1sLmNsYXNzTGlzdC5hZGQodGhlbWUudG9TdHJpbmcoKSlcclxuICB9LCBbdGhlbWVdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFN0b3JlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB0aGVtZSwgY2hhbmdlVGhlbWUgfX0+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvU3RvcmVDb250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlN0b3JlQ29udGV4dCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidGhlbWUiLCJ0aGVtZVNldCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjaGFuZ2VUaGVtZSIsInNldEl0ZW0iLCIkaHRtbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsInRvU3RyaW5nIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst StoreContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StoreContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUM7QUFFckMsS0FBSyxDQUFDQyxZQUFZLGlCQUFHRCxvREFBYSxDQUFDLElBQUk7QUFFdkMsaUVBQWVDLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90d2l0dGVyLWNsb24vLi9zdG9yZS9pbmRleC5qcz81NmE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IFN0b3JlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0b3JlQ29udGV4dFxyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsIlN0b3JlQ29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/index.js\n");

/***/ }),

/***/ "./styles/app.css":
/*!************************!*\
  !*** ./styles/app.css ***!
  \************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();