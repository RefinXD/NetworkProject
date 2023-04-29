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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.module.css */ \"./components/home/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ \"socket.io-client\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io_client__WEBPACK_IMPORTED_MODULE_4__]);\nsocket_io_client__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n// import { useNavigate } from 'react-router-dom';\n\n // Add this\n// import logo from './logo.svg';\n\n\nconst socket = socket_io_client__WEBPACK_IMPORTED_MODULE_4__[\"default\"].connect(\"http://localhost:4000\"); // Add this -- our server will run on port 4000, so we connect to it from here\nconst Home = ()=>{\n    //   const navigate = useNavigate();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"); // Add this\n    const [room, setRoom] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const joinRoom = ()=>{\n        if (room !== \"\" && username !== \"\") {\n            socket.emit(\"join_room\", {\n                username,\n                room\n            });\n            //   navigate('/chat', { replace: true }); // Add this\n            router.push(\"/chat\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().formContainer),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: `<>DevRooms</>`\n                }, void 0, false, {\n                    fileName: \"/Users/earthakkharawat/Documents/Junior/Comp-network/Project/NetworkProject/client/components/home/home.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().input),\n                    placeholder: \"Username...\",\n                    onChange: (e)=>setUsername(e.target.value)\n                }, void 0, false, {\n                    fileName: \"/Users/earthakkharawat/Documents/Junior/Comp-network/Project/NetworkProject/client/components/home/home.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().input),\n                    onChange: (e)=>setRoom(e.target.value),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            children: \"-- Select Room --\"\n                        }, void 0, false, {\n                            fileName: \"/Users/earthakkharawat/Documents/Junior/Comp-network/Project/NetworkProject/client/components/home/home.js\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"javascript\",\n                            children: \"JavaScript\"\n                        }, void 0, false, {\n                            fileName: \"/Users/earthakkharawat/Documents/Junior/Comp-network/Project/NetworkProject/client/components/home/home.js\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"node\",\n                            children: \"Node\"\n                        }, void 0, false, {\n                            fileName: \"/Users/earthakkharawat/Documents/Junior/Comp-network/Project/NetworkProject/client/components/home/home.js\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"express\",\n                            children: \"Express\"\n                        }, void 0, false, {\n                            fileName: \"/Users/earthakkharawat/Documents/Junior/Comp-network/Project/NetworkProject/client/components/home/home.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"react\",\n                            children: \"React\"\n                        }, void 0, false, {\n                            fileName: \"/Users/earthakkharawat/Documents/Junior/Comp-network/Project/NetworkProject/client/components/home/home.js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/earthakkharawat/Documents/Junior/Comp-network/Project/NetworkProject/client/components/home/home.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"btn btn-secondary\",\n                    style: {\n                        width: \"100%\"\n                    },\n                    onClick: joinRoom,\n                    children: \"Join Room\"\n                }, void 0, false, {\n                    fileName: \"/Users/earthakkharawat/Documents/Junior/Comp-network/Project/NetworkProject/client/components/home/home.js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/earthakkharawat/Documents/Junior/Comp-network/Project/NetworkProject/client/components/home/home.js\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/earthakkharawat/Documents/Junior/Comp-network/Project/NetworkProject/client/components/home/home.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hvbWUvaG9tZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ3pDLGtEQUFrRDtBQUNYO0FBQ04sQ0FBQyxXQUFXO0FBQzdDLGlDQUFpQztBQUN5QztBQUN4QztBQUVsQyxNQUFNUSxTQUFTRCxnRUFBVSxDQUFDLDBCQUEwQiw4RUFBOEU7QUFFbEksTUFBTUcsT0FBTyxJQUFNO0lBQ25CLG9DQUFvQztJQUVsQyxNQUFNQyxTQUFTVixzREFBU0E7SUFDeEIsTUFBTSxDQUFDVyxVQUFVQyxZQUFZLEdBQUdYLCtDQUFRQSxDQUFDLEtBQUssV0FBVztJQUN6RCxNQUFNLENBQUNZLE1BQU1DLFFBQVEsR0FBR2IsK0NBQVFBLENBQUM7SUFFakMsTUFBTWMsV0FBVyxJQUFNO1FBQ3JCLElBQUlGLFNBQVMsTUFBTUYsYUFBYSxJQUFJO1lBQ2xDSixPQUFPUyxJQUFJLENBQUMsYUFBYTtnQkFBRUw7Z0JBQVVFO1lBQUs7WUFDNUMsc0RBQXNEO1lBQ3BESCxPQUFPTyxJQUFJLENBQUM7UUFDZCxDQUFDO0lBQ0g7SUFDQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBV3BCLHFFQUFnQjtrQkFDOUIsNEVBQUNtQjtZQUFJQyxXQUFXcEIseUVBQW9COzs4QkFDbEMsOERBQUN1Qjs4QkFBSSxDQUFDLGFBQWEsQ0FBQzs7Ozs7OzhCQUVwQiw4REFBQ0M7b0JBQ0NKLFdBQVdwQixpRUFBWTtvQkFDdkJ5QixhQUFZO29CQUNaQyxVQUFVLENBQUNDLElBQU1kLFlBQVljLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7OzhCQUc3Qyw4REFBQ0M7b0JBQ0NWLFdBQVdwQixpRUFBWTtvQkFDdkIwQixVQUFVLENBQUNDLElBQU1aLFFBQVFZLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSzs7c0NBRXZDLDhEQUFDRTtzQ0FBTzs7Ozs7O3NDQUNSLDhEQUFDQTs0QkFBT0YsT0FBTTtzQ0FBYTs7Ozs7O3NDQUMzQiw4REFBQ0U7NEJBQU9GLE9BQU07c0NBQU87Ozs7OztzQ0FDckIsOERBQUNFOzRCQUFPRixPQUFNO3NDQUFVOzs7Ozs7c0NBQ3hCLDhEQUFDRTs0QkFBT0YsT0FBTTtzQ0FBUTs7Ozs7Ozs7Ozs7OzhCQUd4Qiw4REFBQ0c7b0JBQ0NaLFdBQVU7b0JBQ1ZhLE9BQU87d0JBQUVDLE9BQU87b0JBQU87b0JBQ3ZCQyxTQUFTbkI7OEJBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVQ7QUFFQSxpRUFBZU4sSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL2NvbXBvbmVudHMvaG9tZS9ob21lLmpzPzI4YmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMubW9kdWxlLmNzc1wiO1xuLy8gaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7IC8vIEFkZCB0aGlzXG4vLyBpbXBvcnQgbG9nbyBmcm9tICcuL2xvZ28uc3ZnJztcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBSb3V0ZXMsIFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XG5cbmNvbnN0IHNvY2tldCA9IGlvLmNvbm5lY3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMCcpOyAvLyBBZGQgdGhpcyAtLSBvdXIgc2VydmVyIHdpbGwgcnVuIG9uIHBvcnQgNDAwMCwgc28gd2UgY29ubmVjdCB0byBpdCBmcm9tIGhlcmVcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbi8vICAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTsgLy8gQWRkIHRoaXNcbiAgY29uc3QgW3Jvb20sIHNldFJvb21dID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IGpvaW5Sb29tID0gKCkgPT4ge1xuICAgIGlmIChyb29tICE9PSBcIlwiICYmIHVzZXJuYW1lICE9PSBcIlwiKSB7XG4gICAgICBzb2NrZXQuZW1pdChcImpvaW5fcm9vbVwiLCB7IHVzZXJuYW1lLCByb29tIH0pO1xuICAgIC8vICAgbmF2aWdhdGUoJy9jaGF0JywgeyByZXBsYWNlOiB0cnVlIH0pOyAvLyBBZGQgdGhpc1xuICAgICAgcm91dGVyLnB1c2goJy9jaGF0JylcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtQ29udGFpbmVyfT5cbiAgICAgICAgPGgxPntgPD5EZXZSb29tczwvPmB9PC9oMT5cblxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lLi4uXCJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cblxuICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSb29tKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxvcHRpb24+LS0gU2VsZWN0IFJvb20gLS08L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiamF2YXNjcmlwdFwiPkphdmFTY3JpcHQ8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibm9kZVwiPk5vZGU8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZXhwcmVzc1wiPkV4cHJlc3M8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicmVhY3RcIj5SZWFjdDwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cblxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgICAgIG9uQ2xpY2s9e2pvaW5Sb29tfSAvLyBBZGQgdGhpc1xuICAgICAgICA+XG4gICAgICAgICAgSm9pbiBSb29tXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbInN0eWxlcyIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwiQnJvd3NlclJvdXRlciIsIlJvdXRlciIsIlJvdXRlcyIsIlJvdXRlIiwiaW8iLCJzb2NrZXQiLCJjb25uZWN0IiwiSG9tZSIsInJvdXRlciIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJyb29tIiwic2V0Um9vbSIsImpvaW5Sb29tIiwiZW1pdCIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJmb3JtQ29udGFpbmVyIiwiaDEiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzZWxlY3QiLCJvcHRpb24iLCJidXR0b24iLCJzdHlsZSIsIndpZHRoIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/home/home.js\n");

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

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");

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