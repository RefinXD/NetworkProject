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
exports.id = "pages/home";
exports.ids = ["pages/home"];
exports.modules = {

/***/ "./components/home/styles.module.css":
/*!*******************************************!*\
  !*** ./components/home/styles.module.css ***!
  \*******************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"styles_container__0Jry3\",\n\t\"formContainer\": \"styles_formContainer__KtBv4\",\n\t\"input\": \"styles_input__msW7u\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hvbWUvc3R5bGVzLm1vZHVsZS5jc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29tcG9uZW50cy9ob21lL3N0eWxlcy5tb2R1bGUuY3NzP2Q4NmMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwic3R5bGVzX2NvbnRhaW5lcl9fMEpyeTNcIixcblx0XCJmb3JtQ29udGFpbmVyXCI6IFwic3R5bGVzX2Zvcm1Db250YWluZXJfX0t0QnY0XCIsXG5cdFwiaW5wdXRcIjogXCJzdHlsZXNfaW5wdXRfX21zVzd1XCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/home/styles.module.css\n");

/***/ }),

/***/ "./components/home/home.js":
/*!*********************************!*\
  !*** ./components/home/home.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.css */ \"./components/home/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ \"socket.io-client\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io_client__WEBPACK_IMPORTED_MODULE_3__]);\nsocket_io_client__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst Home = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [userDetail, setUserDetail] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    const [room, setRoom] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const userDetail = localStorage.getItem(\"user\");\n        if (userDetail) {\n            setUserDetail(JSON.parse(userDetail));\n        }\n    }, []);\n    const joinRoom = ()=>{\n        if (room !== \"\" && userDetail.nickname !== \"\") {\n            console.log(\"test2\", room);\n            setRoom(room); // set the value of the room state variable\n            router.push({\n                pathname: `/chat`,\n                query: {\n                    username: userDetail.nickname,\n                    room: room\n                }\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().formContainer),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: `<>DevRooms</>`\n                }, void 0, false, {\n                    fileName: \"/Users/earthakkharawat/Documents/Junior/Comp-network/Project/NetworkProject/client/components/home/home.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: userDetail.nickname\n                }, void 0, false, {\n                    fileName: \"/Users/earthakkharawat/Documents/Junior/Comp-network/Project/NetworkProject/client/components/home/home.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().input),\n                    onChange: (e)=>setRoom(e.target.value),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            children: \"-- Select Room --\"\n                        }, void 0, false, {\n                            fileName: \"/Users/earthakkharawat/Documents/Junior/Comp-network/Project/NetworkProject/client/components/home/home.js\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"javascript\",\n                            children: \"JavaScript\"\n                        }, void 0, false, {\n                            fileName: \"/Users/earthakkharawat/Documents/Junior/Comp-network/Project/NetworkProject/client/components/home/home.js\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"node\",\n                            children: \"Node\"\n                        }, void 0, false, {\n                            fileName: \"/Users/earthakkharawat/Documents/Junior/Comp-network/Project/NetworkProject/client/components/home/home.js\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"express\",\n                            children: \"Express\"\n                        }, void 0, false, {\n                            fileName: \"/Users/earthakkharawat/Documents/Junior/Comp-network/Project/NetworkProject/client/components/home/home.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"react\",\n                            children: \"React\"\n                        }, void 0, false, {\n                            fileName: \"/Users/earthakkharawat/Documents/Junior/Comp-network/Project/NetworkProject/client/components/home/home.js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/earthakkharawat/Documents/Junior/Comp-network/Project/NetworkProject/client/components/home/home.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"btn btn-secondary\",\n                    style: {\n                        width: \"100%\"\n                    },\n                    onClick: joinRoom,\n                    children: \"Join Room\"\n                }, void 0, false, {\n                    fileName: \"/Users/earthakkharawat/Documents/Junior/Comp-network/Project/NetworkProject/client/components/home/home.js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/earthakkharawat/Documents/Junior/Comp-network/Project/NetworkProject/client/components/home/home.js\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/earthakkharawat/Documents/Junior/Comp-network/Project/NetworkProject/client/components/home/home.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hvbWUvaG9tZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNGO0FBQ0k7QUFDVDtBQUdsQyxNQUFNSyxPQUFPLElBQU07SUFDakIsTUFBTUMsU0FBU0wsc0RBQVNBO0lBQ3hCLE1BQU0sQ0FBQ00sVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNPLFlBQVdDLGNBQWMsR0FBR1IsK0NBQVFBLENBQUMsQ0FBQztJQUM3QyxNQUFNLENBQUNTLE1BQU1DLFFBQVEsR0FBR1YsK0NBQVFBLENBQUM7SUFFakNDLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNTSxhQUFhSSxhQUFhQyxPQUFPLENBQUM7UUFDeEMsSUFBSUwsWUFBWTtZQUNkQyxjQUFjSyxLQUFLQyxLQUFLLENBQUNQO1FBQzNCLENBQUM7SUFDSCxHQUFHLEVBQUU7SUFFTCxNQUFNUSxXQUFXLElBQU07UUFDckIsSUFBSU4sU0FBUyxNQUFNRixXQUFXUyxRQUFRLEtBQUssSUFBSTtZQUM3Q0MsUUFBUUMsR0FBRyxDQUFDLFNBQVFUO1lBQ3BCQyxRQUFRRCxPQUFPLDJDQUEyQztZQUMxREwsT0FBT2UsSUFBSSxDQUFDO2dCQUNWQyxVQUFVLENBQUMsS0FBSyxDQUFDO2dCQUNqQkMsT0FBTztvQkFBRWhCLFVBQVVFLFdBQVdTLFFBQVE7b0JBQUVQLE1BQU1BO2dCQUFJO1lBQ3BEO1FBQ0ksQ0FBQztJQUNUO0lBRUEscUJBQ0UsOERBQUNhO1FBQUlDLFdBQVd6QixxRUFBZ0I7a0JBQzlCLDRFQUFDd0I7WUFBSUMsV0FBV3pCLHlFQUFvQjs7OEJBQ2xDLDhEQUFDNEI7OEJBQUksQ0FBQyxhQUFhLENBQUM7Ozs7Ozs4QkFDcEIsOERBQUNDOzhCQUFJcEIsV0FBV1MsUUFBUTs7Ozs7OzhCQUN4Qiw4REFBQ1k7b0JBQ0NMLFdBQVd6QixpRUFBWTtvQkFDdkJnQyxVQUFVLENBQUNDLElBQU1yQixRQUFRcUIsRUFBRUMsTUFBTSxDQUFDQyxLQUFLOztzQ0FFdkMsOERBQUNDO3NDQUFPOzs7Ozs7c0NBQ1IsOERBQUNBOzRCQUFPRCxPQUFNO3NDQUFhOzs7Ozs7c0NBQzNCLDhEQUFDQzs0QkFBT0QsT0FBTTtzQ0FBTzs7Ozs7O3NDQUNyQiw4REFBQ0M7NEJBQU9ELE9BQU07c0NBQVU7Ozs7OztzQ0FDeEIsOERBQUNDOzRCQUFPRCxPQUFNO3NDQUFROzs7Ozs7Ozs7Ozs7OEJBR3hCLDhEQUFDRTtvQkFDQ1osV0FBVTtvQkFDVmEsT0FBTzt3QkFBRUMsT0FBTztvQkFBTztvQkFDdkJDLFNBQVN2Qjs4QkFDVjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNVDtBQUVBLGlFQUFlWixJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29tcG9uZW50cy9ob21lL2hvbWUuanM/MjhiZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IHVzZVN0YXRlICx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcblxuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFt1c2VyRGV0YWlsLHNldFVzZXJEZXRhaWxdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbcm9vbSwgc2V0Um9vbV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB1c2VyRGV0YWlsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcbiAgICBpZiAodXNlckRldGFpbCkge1xuICAgICAgc2V0VXNlckRldGFpbChKU09OLnBhcnNlKHVzZXJEZXRhaWwpKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBqb2luUm9vbSA9ICgpID0+IHtcbiAgICBpZiAocm9vbSAhPT0gXCJcIiAmJiB1c2VyRGV0YWlsLm5pY2tuYW1lICE9PSBcIlwiKSB7XG4gICAgICBjb25zb2xlLmxvZygndGVzdDInLHJvb20pXG4gICAgICBzZXRSb29tKHJvb20pOyAvLyBzZXQgdGhlIHZhbHVlIG9mIHRoZSByb29tIHN0YXRlIHZhcmlhYmxlXG4gICAgICByb3V0ZXIucHVzaCh7XG4gICAgICAgIHBhdGhuYW1lOiBgL2NoYXRgLFxuICAgICAgICBxdWVyeTogeyB1c2VybmFtZTogdXNlckRldGFpbC5uaWNrbmFtZSwgcm9vbTogcm9vbX0sXG4gICAgICB9KTtcbiAgICAgICAgICB9XG4gIH07XG4gIFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUNvbnRhaW5lcn0+XG4gICAgICAgIDxoMT57YDw+RGV2Um9vbXM8Lz5gfTwvaDE+XG4gICAgICAgIDxoMj57dXNlckRldGFpbC5uaWNrbmFtZX08L2gyPlxuICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSb29tKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxvcHRpb24+LS0gU2VsZWN0IFJvb20gLS08L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiamF2YXNjcmlwdFwiPkphdmFTY3JpcHQ8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibm9kZVwiPk5vZGU8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZXhwcmVzc1wiPkV4cHJlc3M8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicmVhY3RcIj5SZWFjdDwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cblxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgICAgIG9uQ2xpY2s9e2pvaW5Sb29tfVxuICAgICAgICA+XG4gICAgICAgICAgSm9pbiBSb29tXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbInN0eWxlcyIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiaW8iLCJIb21lIiwicm91dGVyIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInVzZXJEZXRhaWwiLCJzZXRVc2VyRGV0YWlsIiwicm9vbSIsInNldFJvb20iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiam9pblJvb20iLCJuaWNrbmFtZSIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwicGF0aG5hbWUiLCJxdWVyeSIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImZvcm1Db250YWluZXIiLCJoMSIsImgyIiwic2VsZWN0IiwiaW5wdXQiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9wdGlvbiIsImJ1dHRvbiIsInN0eWxlIiwid2lkdGgiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/home/home.js\n");

/***/ }),

/***/ "./pages/home/index.js":
/*!*****************************!*\
  !*** ./pages/home/index.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_home_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/home/home */ \"./components/home/home.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_home_home__WEBPACK_IMPORTED_MODULE_1__]);\n_components_home_home__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst Page = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/earthakkharawat/Documents/Junior/Comp-network/Project/NetworkProject/client/pages/home/index.js\",\n            lineNumber: 6,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ob21lL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQThDO0FBRTlDLE1BQU1DLE9BQVEsSUFBTTtJQUNsQixxQkFDQTtrQkFDRSw0RUFBQ0QsNkRBQUlBOzs7Ozs7QUFHVDtBQUVBLGlFQUFlQyxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvaG9tZS9pbmRleC5qcz83MWRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIb21lIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaG9tZS9ob21lJztcblxuY29uc3QgUGFnZSAgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gIDw+XG4gICAgPEhvbWUvPlxuICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZVxuIl0sIm5hbWVzIjpbIkhvbWUiLCJQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/home/index.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("socket.io-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/home/index.js"));
module.exports = __webpack_exports__;

})();