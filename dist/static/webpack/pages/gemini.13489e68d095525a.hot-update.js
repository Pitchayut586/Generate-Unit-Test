"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/gemini",{

/***/ "./src/components/Gemini/Messages.tsx":
/*!********************************************!*\
  !*** ./src/components/Gemini/Messages.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _MarkdownDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MarkdownDisplay */ \"./src/components/Gemini/MarkdownDisplay.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst MessagesGemini = (param)=>{\n    let { data, lastMessageRef } = param;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (lastMessageRef.current) {\n            lastMessageRef.current.scrollIntoView({\n                behavior: \"smooth\"\n            });\n        }\n    }, [\n        data\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full container mx-auto\",\n        children: (data === null || data === void 0 ? void 0 : data.length) > 0 && data && (data === null || data === void 0 ? void 0 : data.map((value, index)=>{\n            if (value.role === \"model\") {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    ref: index === data.length - 1 ? lastMessageRef : null,\n                    className: \"chat chat-start chat-assistant-pre\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"chat-image avatar\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-10 rounded-full\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    alt: \"Tailwind CSS chat bubble component\",\n                                    src: \"https://img5.pic.in.th/file/secure-sv1/DALLE-2023-12-19-18.13.18---A-stylish-cartoon-style-profile-picture-of-a-white-AI-robot-showing-just-the-head-and-shoulders.-The-robot-features-a-sleek-minimalist-design-with.th.png\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Work\\\\2024\\\\Github\\\\Generate-Unit-Test\\\\src\\\\components\\\\Gemini\\\\Messages.tsx\",\n                                    lineNumber: 27,\n                                    columnNumber: 41\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Work\\\\2024\\\\Github\\\\Generate-Unit-Test\\\\src\\\\components\\\\Gemini\\\\Messages.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 37\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Work\\\\2024\\\\Github\\\\Generate-Unit-Test\\\\src\\\\components\\\\Gemini\\\\Messages.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 33\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"chat-header\",\n                            children: [\n                                value === null || value === void 0 ? void 0 : value.role,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"time\", {\n                                    className: \"text-xs opacity-50\",\n                                    children: \" \" + dayjs__WEBPACK_IMPORTED_MODULE_1___default()(value === null || value === void 0 ? void 0 : value.created_at).format(\"HH:mm:ss\")\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Work\\\\2024\\\\Github\\\\Generate-Unit-Test\\\\src\\\\components\\\\Gemini\\\\Messages.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 37\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Work\\\\2024\\\\Github\\\\Generate-Unit-Test\\\\src\\\\components\\\\Gemini\\\\Messages.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 33\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"chat-bubble max-w-lg lg:max-w-3xl\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MarkdownDisplay__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                content: value === null || value === void 0 ? void 0 : value.content\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Work\\\\2024\\\\Github\\\\Generate-Unit-Test\\\\src\\\\components\\\\Gemini\\\\Messages.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 37\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Work\\\\2024\\\\Github\\\\Generate-Unit-Test\\\\src\\\\components\\\\Gemini\\\\Messages.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 33\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"chat-footer opacity-50\",\n                            children: \"Delivered\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Work\\\\2024\\\\Github\\\\Generate-Unit-Test\\\\src\\\\components\\\\Gemini\\\\Messages.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 33\n                        }, undefined)\n                    ]\n                }, value === null || value === void 0 ? void 0 : value.id, true, {\n                    fileName: \"D:\\\\Work\\\\2024\\\\Github\\\\Generate-Unit-Test\\\\src\\\\components\\\\Gemini\\\\Messages.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 29\n                }, undefined);\n            } else {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"chat chat-end chat-assistant-pre\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"chat-image avatar\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-10 rounded-full\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    alt: \"Tailwind CSS chat bubble component\",\n                                    src: \"https://img5.pic.in.th/file/secure-sv1/DALLE-2023-12-19-18.10.28---A-cool-cartoon-style-profile-picture-showing-the-head-and-shoulders-of-a-character.-The-character-is-depicted-with-striking-memorable-features-incl.th.png\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Work\\\\2024\\\\Github\\\\Generate-Unit-Test\\\\src\\\\components\\\\Gemini\\\\Messages.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 41\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Work\\\\2024\\\\Github\\\\Generate-Unit-Test\\\\src\\\\components\\\\Gemini\\\\Messages.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 37\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Work\\\\2024\\\\Github\\\\Generate-Unit-Test\\\\src\\\\components\\\\Gemini\\\\Messages.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 33\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"chat-header\",\n                            children: [\n                                value === null || value === void 0 ? void 0 : value.role,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"time\", {\n                                    className: \"text-xs opacity-50\",\n                                    children: \" \" + dayjs__WEBPACK_IMPORTED_MODULE_1___default()(value === null || value === void 0 ? void 0 : value.created_at).format(\"HH:mm:ss\")\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Work\\\\2024\\\\Github\\\\Generate-Unit-Test\\\\src\\\\components\\\\Gemini\\\\Messages.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 37\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Work\\\\2024\\\\Github\\\\Generate-Unit-Test\\\\src\\\\components\\\\Gemini\\\\Messages.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 33\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"chat-bubble max-w-lg lg:max-w-3xl chat-assistant-pre\",\n                            children: value === null || value === void 0 ? void 0 : value.content\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Work\\\\2024\\\\Github\\\\Generate-Unit-Test\\\\src\\\\components\\\\Gemini\\\\Messages.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 33\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"chat-footer opacity-50\",\n                            children: \"Seen at 12:46\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Work\\\\2024\\\\Github\\\\Generate-Unit-Test\\\\src\\\\components\\\\Gemini\\\\Messages.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 33\n                        }, undefined)\n                    ]\n                }, value === null || value === void 0 ? void 0 : value.id, true, {\n                    fileName: \"D:\\\\Work\\\\2024\\\\Github\\\\Generate-Unit-Test\\\\src\\\\components\\\\Gemini\\\\Messages.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 29\n                }, undefined);\n            }\n        }))\n    }, void 0, false, {\n        fileName: \"D:\\\\Work\\\\2024\\\\Github\\\\Generate-Unit-Test\\\\src\\\\components\\\\Gemini\\\\Messages.tsx\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, undefined);\n};\n_s(MessagesGemini, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = MessagesGemini;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MessagesGemini);\nvar _c;\n$RefreshReg$(_c, \"MessagesGemini\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9HZW1pbmkvTWVzc2FnZXMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDMEI7QUFDZTtBQUNPO0FBRWhELE1BQU1JLGlCQUFpQjtRQUFDLEVBQUVDLElBQUksRUFBRUMsY0FBYyxFQUFlOztJQUN6REosZ0RBQVNBLENBQUM7UUFDTixJQUFJSSxlQUFlQyxPQUFPLEVBQUU7WUFDeEJELGVBQWVDLE9BQU8sQ0FBQ0MsY0FBYyxDQUFDO2dCQUFFQyxVQUFVO1lBQVM7UUFDL0Q7SUFDSixHQUFHO1FBQUNKO0tBQUs7SUFFVCxxQkFDSSw4REFBQ0s7UUFBSUMsV0FBVTtrQkFDVk4sQ0FBQUEsaUJBQUFBLDJCQUFBQSxLQUFNTyxNQUFNLElBQUcsS0FDWlAsU0FDQUEsaUJBQUFBLDJCQUFBQSxLQUFNUSxHQUFHLENBQUMsQ0FBQ0MsT0FBWUM7WUFDbkIsSUFBSUQsTUFBTUUsSUFBSSxLQUFLLFNBQVM7Z0JBQ3hCLHFCQUNJLDhEQUFDTjtvQkFFR08sS0FBS0YsVUFBVVYsS0FBS08sTUFBTSxHQUFHLElBQUlOLGlCQUFpQjtvQkFDbERLLFdBQVU7O3NDQUVWLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FDWCw0RUFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ1gsNEVBQUNPO29DQUNHQyxLQUFJO29DQUNKQyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7O3NDQUloQiw4REFBQ1Y7NEJBQUlDLFdBQVU7O2dDQUNWRyxrQkFBQUEsNEJBQUFBLE1BQU9FLElBQUk7OENBQ1osOERBQUNLO29DQUFLVixXQUFVOzhDQUNYLE1BQU1YLDRDQUFLQSxDQUFDYyxrQkFBQUEsNEJBQUFBLE1BQU9RLFVBQVUsRUFBRUMsTUFBTSxDQUFDOzs7Ozs7Ozs7Ozs7c0NBRy9DLDhEQUFDYjs0QkFBSUMsV0FBVTtzQ0FDWCw0RUFBQ1Isd0RBQWVBO2dDQUFDcUIsT0FBTyxFQUFFVixrQkFBQUEsNEJBQUFBLE1BQU9VLE9BQU87Ozs7Ozs7Ozs7O3NDQUU1Qyw4REFBQ2Q7NEJBQUlDLFdBQVU7c0NBQXlCOzs7Ozs7O21CQXJCbkNHLGtCQUFBQSw0QkFBQUEsTUFBT1csRUFBRTs7Ozs7WUF3QjFCLE9BQU87Z0JBQ0gscUJBQ0ksOERBQUNmO29CQUFvQkMsV0FBVTs7c0NBQzNCLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FDWCw0RUFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ1gsNEVBQUNPO29DQUNHQyxLQUFJO29DQUNKQyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7O3NDQUloQiw4REFBQ1Y7NEJBQUlDLFdBQVU7O2dDQUNWRyxrQkFBQUEsNEJBQUFBLE1BQU9FLElBQUk7OENBQ1osOERBQUNLO29DQUFLVixXQUFVOzhDQUNYLE1BQU1YLDRDQUFLQSxDQUFDYyxrQkFBQUEsNEJBQUFBLE1BQU9RLFVBQVUsRUFBRUMsTUFBTSxDQUFDOzs7Ozs7Ozs7Ozs7c0NBRy9DLDhEQUFDYjs0QkFBSUMsV0FBVTtzQ0FBd0RHLGtCQUFBQSw0QkFBQUEsTUFBT1UsT0FBTzs7Ozs7O3NDQUNyRiw4REFBQ2Q7NEJBQUlDLFdBQVU7c0NBQXlCOzs7Ozs7O21CQWhCbENHLGtCQUFBQSw0QkFBQUEsTUFBT1csRUFBRTs7Ozs7WUFtQjNCO1FBQ0o7Ozs7OztBQUdoQjtHQWhFTXJCO0tBQUFBO0FBa0VOLCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0dlbWluaS9NZXNzYWdlcy50c3g/ZGQ2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZXNzYWdlVHlwZSB9IGZyb20gJ0AvdHlwZXMvYXNzaXN0YW50LnR5cGUnO1xyXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTWFya2Rvd25EaXNwbGF5IGZyb20gJy4vTWFya2Rvd25EaXNwbGF5JztcclxuXHJcbmNvbnN0IE1lc3NhZ2VzR2VtaW5pID0gKHsgZGF0YSwgbGFzdE1lc3NhZ2VSZWYgfTogTWVzc2FnZVR5cGUpID0+IHtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGxhc3RNZXNzYWdlUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgbGFzdE1lc3NhZ2VSZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbZGF0YV0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgY29udGFpbmVyIG14LWF1dG9cIj5cclxuICAgICAgICAgICAge2RhdGE/Lmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgIGRhdGEgJiZcclxuICAgICAgICAgICAgICAgIGRhdGE/Lm1hcCgodmFsdWU6IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5yb2xlID09PSAnbW9kZWwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt2YWx1ZT8uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtpbmRleCA9PT0gZGF0YS5sZW5ndGggLSAxID8gbGFzdE1lc3NhZ2VSZWYgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNoYXQgY2hhdC1zdGFydCBjaGF0LWFzc2lzdGFudC1wcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1pbWFnZSBhdmF0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwIHJvdW5kZWQtZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlRhaWx3aW5kIENTUyBjaGF0IGJ1YmJsZSBjb21wb25lbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaW1nNS5waWMuaW4udGgvZmlsZS9zZWN1cmUtc3YxL0RBTExFLTIwMjMtMTItMTktMTguMTMuMTgtLS1BLXN0eWxpc2gtY2FydG9vbi1zdHlsZS1wcm9maWxlLXBpY3R1cmUtb2YtYS13aGl0ZS1BSS1yb2JvdC1zaG93aW5nLWp1c3QtdGhlLWhlYWQtYW5kLXNob3VsZGVycy4tVGhlLXJvYm90LWZlYXR1cmVzLWEtc2xlZWstbWluaW1hbGlzdC1kZXNpZ24td2l0aC50aC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWU/LnJvbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aW1lIGNsYXNzTmFtZT1cInRleHQteHMgb3BhY2l0eS01MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeycgJyArIGRheWpzKHZhbHVlPy5jcmVhdGVkX2F0KS5mb3JtYXQoJ0hIOm1tOnNzJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGltZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtYnViYmxlIG1heC13LWxnIGxnOm1heC13LTN4bFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWFya2Rvd25EaXNwbGF5IGNvbnRlbnQ9e3ZhbHVlPy5jb250ZW50fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1mb290ZXIgb3BhY2l0eS01MFwiPkRlbGl2ZXJlZDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXt2YWx1ZT8uaWR9IGNsYXNzTmFtZT1cImNoYXQgY2hhdC1lbmQgY2hhdC1hc3Npc3RhbnQtcHJlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LWltYWdlIGF2YXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAgcm91bmRlZC1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiVGFpbHdpbmQgQ1NTIGNoYXQgYnViYmxlIGNvbXBvbmVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pbWc1LnBpYy5pbi50aC9maWxlL3NlY3VyZS1zdjEvREFMTEUtMjAyMy0xMi0xOS0xOC4xMC4yOC0tLUEtY29vbC1jYXJ0b29uLXN0eWxlLXByb2ZpbGUtcGljdHVyZS1zaG93aW5nLXRoZS1oZWFkLWFuZC1zaG91bGRlcnMtb2YtYS1jaGFyYWN0ZXIuLVRoZS1jaGFyYWN0ZXItaXMtZGVwaWN0ZWQtd2l0aC1zdHJpa2luZy1tZW1vcmFibGUtZmVhdHVyZXMtaW5jbC50aC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWU/LnJvbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aW1lIGNsYXNzTmFtZT1cInRleHQteHMgb3BhY2l0eS01MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeycgJyArIGRheWpzKHZhbHVlPy5jcmVhdGVkX2F0KS5mb3JtYXQoJ0hIOm1tOnNzJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGltZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtYnViYmxlIG1heC13LWxnIGxnOm1heC13LTN4bCBjaGF0LWFzc2lzdGFudC1wcmVcIj57dmFsdWU/LmNvbnRlbnR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LWZvb3RlciBvcGFjaXR5LTUwXCI+U2VlbiBhdCAxMjo0NjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZXNHZW1pbmk7XHJcbiJdLCJuYW1lcyI6WyJkYXlqcyIsIlJlYWN0IiwidXNlRWZmZWN0IiwiTWFya2Rvd25EaXNwbGF5IiwiTWVzc2FnZXNHZW1pbmkiLCJkYXRhIiwibGFzdE1lc3NhZ2VSZWYiLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImRpdiIsImNsYXNzTmFtZSIsImxlbmd0aCIsIm1hcCIsInZhbHVlIiwiaW5kZXgiLCJyb2xlIiwicmVmIiwiaW1nIiwiYWx0Iiwic3JjIiwidGltZSIsImNyZWF0ZWRfYXQiLCJmb3JtYXQiLCJjb250ZW50IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Gemini/Messages.tsx\n"));

/***/ })

});