"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/home",{

/***/ "./components/home/home.js":
/*!*********************************!*\
  !*** ./components/home/home.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.css */ \"./components/home/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n// import { useNavigate } from 'react-router-dom';\n\n // Add this\nvar Home = function() {\n    _s();\n    //   const navigate = useNavigate();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), 2), username = _useState[0], setUsername = _useState[1]; // Add this\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), 2), room = _useState1[0], setRoom = _useState1[1];\n    var joinRoom = function() {\n        if (room !== \"\" && username !== \"\") {\n            socket.emit(\"join_room\", {\n                username: username,\n                room: room\n            });\n            //   navigate('/chat', { replace: true }); // Add this\n            router.push(\"/chat\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().formContainer),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"<>DevRooms</>\"\n                }, void 0, false, {\n                    fileName: \"/Users/earthakkharawat/Documents/Junior/Comp-network/Project/NetworkProject/client/components/home/home.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().input),\n                    placeholder: \"Username...\",\n                    onChange: function(e) {\n                        return setUsername(e.target.value);\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/earthakkharawat/Documents/Junior/Comp-network/Project/NetworkProject/client/components/home/home.js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().input),\n                    onChange: function(e) {\n                        return setRoom(e.target.value);\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            children: \"-- Select Room --\"\n                        }, void 0, false, {\n                            fileName: \"/Users/earthakkharawat/Documents/Junior/Comp-network/Project/NetworkProject/client/components/home/home.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"javascript\",\n                            children: \"JavaScript\"\n                        }, void 0, false, {\n                            fileName: \"/Users/earthakkharawat/Documents/Junior/Comp-network/Project/NetworkProject/client/components/home/home.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"node\",\n                            children: \"Node\"\n                        }, void 0, false, {\n                            fileName: \"/Users/earthakkharawat/Documents/Junior/Comp-network/Project/NetworkProject/client/components/home/home.js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"express\",\n                            children: \"Express\"\n                        }, void 0, false, {\n                            fileName: \"/Users/earthakkharawat/Documents/Junior/Comp-network/Project/NetworkProject/client/components/home/home.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"react\",\n                            children: \"React\"\n                        }, void 0, false, {\n                            fileName: \"/Users/earthakkharawat/Documents/Junior/Comp-network/Project/NetworkProject/client/components/home/home.js\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/earthakkharawat/Documents/Junior/Comp-network/Project/NetworkProject/client/components/home/home.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"btn btn-secondary\",\n                    style: {\n                        width: \"100%\"\n                    },\n                    onClick: joinRoom,\n                    children: \"Join Room\"\n                }, void 0, false, {\n                    fileName: \"/Users/earthakkharawat/Documents/Junior/Comp-network/Project/NetworkProject/client/components/home/home.js\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/earthakkharawat/Documents/Junior/Comp-network/Project/NetworkProject/client/components/home/home.js\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/earthakkharawat/Documents/Junior/Comp-network/Project/NetworkProject/client/components/home/home.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"awB5L4NvvlmtOVR9//t9AhyCciI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hvbWUvaG9tZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF5QztBQUN6QyxrREFBa0Q7QUFDWDtBQUNOLENBQUMsV0FBVztBQUU3QyxJQUFNRyxPQUFPLFdBQU07O0lBQ25CLG9DQUFvQztJQUVsQyxJQUFNQyxTQUFTSCxzREFBU0E7SUFDeEIsSUFBZ0NDLFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxTQUFsQ0csV0FBeUJILGNBQWZJLGNBQWVKLGNBQWMsV0FBVztJQUN6RCxJQUF3QkEsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLFNBQTFCSyxPQUFpQkwsZUFBWE0sVUFBV047SUFFeEIsSUFBTU8sV0FBVyxXQUFNO1FBQ3JCLElBQUlGLFNBQVMsTUFBTUYsYUFBYSxJQUFJO1lBQ2xDSyxPQUFPQyxJQUFJLENBQUMsYUFBYTtnQkFBRU4sVUFBQUE7Z0JBQVVFLE1BQUFBO1lBQUs7WUFDNUMsc0RBQXNEO1lBQ3BESCxPQUFPUSxJQUFJLENBQUM7UUFDZCxDQUFDO0lBQ0g7SUFDQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBV2QscUVBQWdCO2tCQUM5Qiw0RUFBQ2E7WUFBSUMsV0FBV2QseUVBQW9COzs4QkFDbEMsOERBQUNpQjs4QkFBSzs7Ozs7OzhCQUVOLDhEQUFDQztvQkFDQ0osV0FBV2QsaUVBQVk7b0JBQ3ZCbUIsYUFBWTtvQkFDWkMsVUFBVSxTQUFDQzsrQkFBTWYsWUFBWWUsRUFBRUMsTUFBTSxDQUFDQyxLQUFLOzs7Ozs7OzhCQUc3Qyw4REFBQ0M7b0JBQ0NWLFdBQVdkLGlFQUFZO29CQUN2Qm9CLFVBQVUsU0FBQ0M7K0JBQU1iLFFBQVFhLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSzs7O3NDQUV2Qyw4REFBQ0U7c0NBQU87Ozs7OztzQ0FDUiw4REFBQ0E7NEJBQU9GLE9BQU07c0NBQWE7Ozs7OztzQ0FDM0IsOERBQUNFOzRCQUFPRixPQUFNO3NDQUFPOzs7Ozs7c0NBQ3JCLDhEQUFDRTs0QkFBT0YsT0FBTTtzQ0FBVTs7Ozs7O3NDQUN4Qiw4REFBQ0U7NEJBQU9GLE9BQU07c0NBQVE7Ozs7Ozs7Ozs7Ozs4QkFHeEIsOERBQUNHO29CQUNDWixXQUFVO29CQUNWYSxPQUFPO3dCQUFFQyxPQUFPO29CQUFPO29CQUN2QkMsU0FBU3BCOzhCQUNWOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1UO0dBOUNNTjs7UUFHV0Ysa0RBQVNBOzs7S0FIcEJFO0FBZ0ROLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaG9tZS9ob21lLmpzPzI4YmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMubW9kdWxlLmNzc1wiO1xuLy8gaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7IC8vIEFkZCB0aGlzXG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4vLyAgIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7IC8vIEFkZCB0aGlzXG4gIGNvbnN0IFtyb29tLCBzZXRSb29tXSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBqb2luUm9vbSA9ICgpID0+IHtcbiAgICBpZiAocm9vbSAhPT0gXCJcIiAmJiB1c2VybmFtZSAhPT0gXCJcIikge1xuICAgICAgc29ja2V0LmVtaXQoXCJqb2luX3Jvb21cIiwgeyB1c2VybmFtZSwgcm9vbSB9KTtcbiAgICAvLyAgIG5hdmlnYXRlKCcvY2hhdCcsIHsgcmVwbGFjZTogdHJ1ZSB9KTsgLy8gQWRkIHRoaXNcbiAgICAgIHJvdXRlci5wdXNoKCcvY2hhdCcpXG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUNvbnRhaW5lcn0+XG4gICAgICAgIDxoMT57YDw+RGV2Um9vbXM8Lz5gfTwvaDE+XG5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZS4uLlwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG5cbiAgICAgICAgPHNlbGVjdFxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Um9vbShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgID5cbiAgICAgICAgICA8b3B0aW9uPi0tIFNlbGVjdCBSb29tIC0tPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImphdmFzY3JpcHRcIj5KYXZhU2NyaXB0PC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm5vZGVcIj5Ob2RlPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImV4cHJlc3NcIj5FeHByZXNzPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInJlYWN0XCI+UmVhY3Q8L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cbiAgICAgICAgICBvbkNsaWNrPXtqb2luUm9vbX0gLy8gQWRkIHRoaXNcbiAgICAgICAgPlxuICAgICAgICAgIEpvaW4gUm9vbVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJyb3V0ZXIiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwicm9vbSIsInNldFJvb20iLCJqb2luUm9vbSIsInNvY2tldCIsImVtaXQiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiZm9ybUNvbnRhaW5lciIsImgxIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwic2VsZWN0Iiwib3B0aW9uIiwiYnV0dG9uIiwic3R5bGUiLCJ3aWR0aCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/home/home.js\n"));

/***/ })

});