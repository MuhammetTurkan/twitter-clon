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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ \"./store/index.js\");\n/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/app.css */ \"./styles/app.css\");\n/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_app_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const { 0: theme1 , 1: themeSet  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(()=>{\n        const theme = localStorage.getItem('THEME') || 'light';\n        themeSet(theme);\n    }, []);\n    const changeTheme = (theme)=>{\n        themeSet(theme);\n        localStorage.setItem('THEME', theme);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const $html = document.querySelector('html');\n        $html.classList.remove('light');\n        $html.classList.remove('dim');\n        $html.classList.remove('dark');\n        $html.classList.add(theme1);\n    }, [\n        theme1\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Provider, {\n        value: {\n            theme: theme1,\n            changeTheme\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Program Files\\\\React\\\\twitter-clon\\\\pages\\\\_app.js\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Program Files\\\\React\\\\twitter-clon\\\\pages\\\\_app.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFtRTtBQUNoQztBQUNUO0FBRVgsUUFBUSxDQUFDSyxLQUFLLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUVDLFNBQVMsRUFBQyxDQUFDLEVBQUUsQ0FBQztJQUN2RCxLQUFLLE1BQUVDLE1BQUssTUFBRUMsUUFBUSxNQUFJTiwrQ0FBUSxDQUFDLElBQUk7SUFFdkNELHNEQUFlLEtBQU8sQ0FBQztRQUNyQixLQUFLLENBQUNNLEtBQUssR0FBR0UsWUFBWSxDQUFDQyxPQUFPLENBQUMsQ0FBTyxXQUFLLENBQU87UUFDdERGLFFBQVEsQ0FBQ0QsS0FBSztJQUNoQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsS0FBSyxDQUFDSSxXQUFXLElBQUlKLEtBQUssR0FBSyxDQUFDO1FBQzlCQyxRQUFRLENBQUNELEtBQUs7UUFDZEUsWUFBWSxDQUFDRyxPQUFPLENBQUMsQ0FBTyxRQUFFTCxLQUFLO0lBQ3JDLENBQUM7SUFFRFAsZ0RBQVMsS0FBTyxDQUFDO1FBQ2YsS0FBSyxDQUFDYSxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLENBQU07UUFDM0NGLEtBQUssQ0FBQ0csU0FBUyxDQUFDQyxNQUFNLENBQUMsQ0FBTztRQUM5QkosS0FBSyxDQUFDRyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxDQUFLO1FBQzVCSixLQUFLLENBQUNHLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLENBQU07UUFDN0JKLEtBQUssQ0FBQ0csU0FBUyxDQUFDRSxHQUFHLENBQUNYLE1BQUs7SUFDM0IsQ0FBQyxFQUFFLENBQUNBO1FBQUFBLE1BQUs7SUFBQSxDQUFDO0lBRVYsTUFBTSw2RUFDSEosdURBQXFCO1FBQUNpQixLQUFLLEVBQUUsQ0FBQztZQUFDYixLQUFLLEVBQUxBLE1BQUs7WUFBRUksV0FBVztRQUFDLENBQUM7OEZBQ2pETixTQUFTO2VBQUtDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzlCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90d2l0dGVyLWNsb24vLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlTGF5b3V0RWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU3RvcmVDb250ZXh0IGZyb20gJy4uL3N0b3JlJ1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9hcHAuY3NzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgY29uc3QgW3RoZW1lLCB0aGVtZVNldF0gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVEhFTUUnKSB8fCAnbGlnaHQnXHJcbiAgICB0aGVtZVNldCh0aGVtZSlcclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3QgY2hhbmdlVGhlbWUgPSAodGhlbWUpID0+IHtcclxuICAgIHRoZW1lU2V0KHRoZW1lKVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1RIRU1FJywgdGhlbWUpXHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgJGh0bWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJylcclxuICAgICRodG1sLmNsYXNzTGlzdC5yZW1vdmUoJ2xpZ2h0JylcclxuICAgICRodG1sLmNsYXNzTGlzdC5yZW1vdmUoJ2RpbScpXHJcbiAgICAkaHRtbC5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrJylcclxuICAgICRodG1sLmNsYXNzTGlzdC5hZGQodGhlbWUpXHJcbiAgfSwgW3RoZW1lXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTdG9yZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdGhlbWUsIGNoYW5nZVRoZW1lIH19PlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICA8L1N0b3JlQ29udGV4dC5Qcm92aWRlcj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlTGF5b3V0RWZmZWN0IiwidXNlU3RhdGUiLCJTdG9yZUNvbnRleHQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInRoZW1lIiwidGhlbWVTZXQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY2hhbmdlVGhlbWUiLCJzZXRJdGVtIiwiJGh0bWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

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

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

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