"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/CardModel.tsx":
/*!**************************************!*\
  !*** ./src/components/CardModel.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst CardModel = (param)=>{\n    let { name, description, image_url, path } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card card-side bg-base-100 shadow-xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {\n                className: \" ml-5 md:ml-5 w-[120px] md:w-[200px] h-[150px] md:h-[200px] object-cover\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: image_url,\n                    alt: name\n                }, void 0, false, {\n                    fileName: \"D:\\\\Work\\\\2024\\\\Github\\\\Generate-Unit-Test\\\\src\\\\components\\\\CardModel.tsx\",\n                    lineNumber: 10,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Work\\\\2024\\\\Github\\\\Generate-Unit-Test\\\\src\\\\components\\\\CardModel.tsx\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card-body\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"card-title\",\n                        children: name\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Work\\\\2024\\\\Github\\\\Generate-Unit-Test\\\\src\\\\components\\\\CardModel.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"hidden md:block\",\n                        children: description\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Work\\\\2024\\\\Github\\\\Generate-Unit-Test\\\\src\\\\components\\\\CardModel.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-actions justify-end\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"btn btn-primary\",\n                            onClick: ()=>router.push(path),\n                            children: \"Chat\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Work\\\\2024\\\\Github\\\\Generate-Unit-Test\\\\src\\\\components\\\\CardModel.tsx\",\n                            lineNumber: 16,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Work\\\\2024\\\\Github\\\\Generate-Unit-Test\\\\src\\\\components\\\\CardModel.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Work\\\\2024\\\\Github\\\\Generate-Unit-Test\\\\src\\\\components\\\\CardModel.tsx\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Work\\\\2024\\\\Github\\\\Generate-Unit-Test\\\\src\\\\components\\\\CardModel.tsx\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CardModel, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = CardModel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardModel);\nvar _c;\n$RefreshReg$(_c, \"CardModel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJkTW9kZWwudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUN3QztBQUNkO0FBRTFCLE1BQU1FLFlBQVk7UUFBQyxFQUFFQyxJQUFJLEVBQUVDLFdBQVcsRUFBRUMsU0FBUyxFQUFFQyxJQUFJLEVBQWlCOztJQUNwRSxNQUFNQyxTQUFTUCxzREFBU0E7SUFDeEIscUJBQ0ksOERBQUNRO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDQztnQkFBT0QsV0FBVTswQkFDZCw0RUFBQ0U7b0JBQUlDLEtBQUtQO29CQUFXUSxLQUFLVjs7Ozs7Ozs7Ozs7MEJBRTlCLDhEQUFDSztnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNLO3dCQUFHTCxXQUFVO2tDQUFjTjs7Ozs7O2tDQUM1Qiw4REFBQ1k7d0JBQUVOLFdBQVU7a0NBQW1CTDs7Ozs7O2tDQUNoQyw4REFBQ0k7d0JBQUlDLFdBQVU7a0NBQ1gsNEVBQUNPOzRCQUFPUCxXQUFVOzRCQUFrQlEsU0FBUyxJQUFNVixPQUFPVyxJQUFJLENBQUNaO3NDQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU8xRjtHQWxCTUo7O1FBQ2FGLGtEQUFTQTs7O0tBRHRCRTtBQW9CTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DYXJkTW9kZWwudHN4P2M0ZTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YU1vZGVsVHlwZSB9IGZyb20gJ0AvdHlwZXMvYXNzaXN0YW50LnR5cGUnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBDYXJkTW9kZWwgPSAoeyBuYW1lLCBkZXNjcmlwdGlvbiwgaW1hZ2VfdXJsLCBwYXRoIH06IERhdGFNb2RlbFR5cGUpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1zaWRlIGJnLWJhc2UtMTAwIHNoYWRvdy14bFwiPlxyXG4gICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cIiBtbC01IG1kOm1sLTUgdy1bMTIwcHhdIG1kOnctWzIwMHB4XSBoLVsxNTBweF0gbWQ6aC1bMjAwcHhdIG9iamVjdC1jb3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlX3VybH0gYWx0PXtuYW1lfSAvPlxyXG4gICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e25hbWV9PC9oMT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImhpZGRlbiBtZDpibG9ja1wiPntkZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYWN0aW9ucyBqdXN0aWZ5LWVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2gocGF0aCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDaGF0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZE1vZGVsO1xyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiUmVhY3QiLCJDYXJkTW9kZWwiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJpbWFnZV91cmwiLCJwYXRoIiwicm91dGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiZmlndXJlIiwiaW1nIiwic3JjIiwiYWx0IiwiaDEiLCJwIiwiYnV0dG9uIiwib25DbGljayIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/CardModel.tsx\n"));

/***/ })

});