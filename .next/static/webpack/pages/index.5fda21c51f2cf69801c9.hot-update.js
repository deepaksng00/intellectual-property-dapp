webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/deepaksng00/Google Drive/University/Files/Manchester Metropolitan University/Level 6 - BSc Computer Science/Project/intellectual-property-dapp/pages/index.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n/* --- Semantic-UI --- */\n\n\n\nvar Index = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Index, _Component);\n\n  var _super = _createSuper(Index);\n\n  function Index() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, Index);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_this), \"state\", {\n      address: ''\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Index, [{\n    key: \"componentDidMount\",\n    value: function () {\n      var _componentDidMount = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function componentDidMount() {\n        return _componentDidMount.apply(this, arguments);\n      }\n\n      return componentDidMount;\n    }()\n  }, {\n    key: \"render\",\n    value: function render() {\n      var options = [{\n        key: 'Trademark',\n        text: 'Trademark',\n        value: 'trademark'\n      }, {\n        key: 'Patent',\n        text: 'Patent',\n        value: 'patent'\n      }, {\n        key: 'Design',\n        text: 'Design',\n        value: 'design'\n      }];\n      var segment;\n      var top_container;\n      var middle_container;\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"one column row\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            \"class\": \"column\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: \"Welcome to the intellectual property website.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 34,\n              columnNumber: 8\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 7\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 6\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"one column row\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            \"class\": \"column\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__[\"Input\"], {\n              iconPosition: \"left\",\n              type: \"text\",\n              placeholder: \"Search by Address\",\n              action: true,\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 41,\n                columnNumber: 9\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__[\"Icon\"], {\n                name: \"search\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 42,\n                columnNumber: 9\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__[\"Select\"], {\n                compact: true,\n                options: options,\n                defaultValue: \"trademark\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 43,\n                columnNumber: 9\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__[\"Button\"], {\n                type: \"submit\",\n                children: \"Search\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 44,\n                columnNumber: 9\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 40,\n              columnNumber: 8\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            \"class\": \"one column row\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n              \"class\": \"ui left floated button\",\n              children: \"Advanced Search\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 49,\n              columnNumber: 8\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 6\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"two column row\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            \"class\": \"nine wide column\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              \"class\": \"ui segment\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__[\"Header\"], {\n                as: \"h2\",\n                children: \"Registering your intellectual property\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 56,\n                columnNumber: 9\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                children: \"To register your intellectual property, you must have the MetaMask browser extension install with an Ethereum wallet.\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 57,\n                columnNumber: 9\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 55,\n              columnNumber: 8\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              \"class\": \"ui segment\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__[\"Header\"], {\n                as: \"h3\",\n                children: \"To register your intellectual property, you will need:\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 60,\n                columnNumber: 9\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ol\", {\n                \"class\": \"ui list\",\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                  children: \"The type of intellectual property you are registering\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 62,\n                  columnNumber: 12\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                  children: \"The ethereum address of any co-owners of the intellectual property\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 63,\n                  columnNumber: 12\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                  children: \"The original file containing the intellectual property\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 64,\n                  columnNumber: 11\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                  children: \"The publication date for the intellectual property\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 65,\n                  columnNumber: 11\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 61,\n                columnNumber: 10\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 59,\n              columnNumber: 8\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            \"class\": \"four wide column\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              \"class\": \"ui icon message\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"i\", {\n                \"class\": \"exclamation triangle icon\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 71,\n                columnNumber: 10\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                \"class\": \"content\",\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  \"class\": \"header\",\n                  children: \"Attention!\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 73,\n                  columnNumber: 12\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                  children: \"Registering your intellectual property will incur fees. You will be prompted by Metamask informing you of the exact value.\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 76,\n                  columnNumber: 12\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 72,\n                columnNumber: 10\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 70,\n              columnNumber: 8\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 69,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            \"class\": \"two wide column\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 81,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 4\n      }, this);\n    }\n  }]);\n\n  return Index;\n}(react__WEBPACK_IMPORTED_MODULE_10__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCIsImFkZHJlc3MiLCJvcHRpb25zIiwia2V5IiwidGV4dCIsInZhbHVlIiwic2VnbWVudCIsInRvcF9jb250YWluZXIiLCJtaWRkbGVfY29udGFpbmVyIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7O0lBRU1BLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0c7QUFDUEMsYUFBTyxFQUFFO0FBREYsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFRQztBQUNSLFVBQU1DLE9BQU8sR0FBRyxDQUNWO0FBQUVDLFdBQUcsRUFBRSxXQUFQO0FBQW9CQyxZQUFJLEVBQUUsV0FBMUI7QUFBdUNDLGFBQUssRUFBRTtBQUE5QyxPQURVLEVBRVY7QUFBRUYsV0FBRyxFQUFFLFFBQVA7QUFBaUJDLFlBQUksRUFBRSxRQUF2QjtBQUFpQ0MsYUFBSyxFQUFFO0FBQXhDLE9BRlUsRUFHVjtBQUFFRixXQUFHLEVBQUUsUUFBUDtBQUFpQkMsWUFBSSxFQUFFLFFBQXZCO0FBQWlDQyxhQUFLLEVBQUU7QUFBeEMsT0FIVSxDQUFoQjtBQU1BLFVBQUlDLE9BQUo7QUFDQSxVQUFJQyxhQUFKO0FBQ0EsVUFBSUMsZ0JBQUo7QUFFQSwwQkFDQyxxRUFBQywyREFBRDtBQUFBLGdDQUVFO0FBQUssbUJBQVEsZ0JBQWI7QUFBQSxpQ0FDQztBQUFLLHFCQUFRLFFBQWI7QUFBQSxtQ0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBUUU7QUFBSyxtQkFBUSxnQkFBYjtBQUFBLGtDQUNDO0FBQUsscUJBQVEsUUFBYjtBQUFBLG1DQUNDLHFFQUFDLHdEQUFEO0FBQU8sMEJBQVksRUFBQyxNQUFwQjtBQUEyQixrQkFBSSxFQUFDLE1BQWhDO0FBQXVDLHlCQUFXLEVBQUMsbUJBQW5EO0FBQXVFLG9CQUFNLE1BQTdFO0FBQUEsc0NBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERCxlQUVDLHFFQUFDLHVEQUFEO0FBQU0sb0JBQUksRUFBQztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkQsZUFHQyxxRUFBQyx5REFBRDtBQUFRLHVCQUFPLE1BQWY7QUFBZ0IsdUJBQU8sRUFBRU4sT0FBekI7QUFBa0MsNEJBQVksRUFBQztBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUhELGVBSUMscUVBQUMseURBQUQ7QUFBUSxvQkFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERCxlQVVDO0FBQUsscUJBQVEsZ0JBQWI7QUFBQSxtQ0FDQztBQUFRLHVCQUFNLHdCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFWRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkYsZUF1QkU7QUFBSyxtQkFBUSxnQkFBYjtBQUFBLGtDQUNDO0FBQUsscUJBQVEsa0JBQWI7QUFBQSxvQ0FDQztBQUFLLHVCQUFRLFlBQWI7QUFBQSxzQ0FDQyxxRUFBQyx5REFBRDtBQUFRLGtCQUFFLEVBQUcsSUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERCxlQUVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERCxlQUtDO0FBQUssdUJBQVEsWUFBYjtBQUFBLHNDQUNDLHFFQUFDLHlEQUFEO0FBQVEsa0JBQUUsRUFBRyxJQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURELGVBRUU7QUFBSSx5QkFBTSxTQUFWO0FBQUEsd0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGRixlQUdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUhELGVBSUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFMRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsZUFnQkM7QUFBSyxxQkFBUSxrQkFBYjtBQUFBLG1DQUNDO0FBQUssdUJBQU0saUJBQVg7QUFBQSxzQ0FDRTtBQUFHLHlCQUFNO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixlQUVFO0FBQUsseUJBQU0sU0FBWDtBQUFBLHdDQUNFO0FBQUssMkJBQU0sUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixlQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWhCRCxlQTRCQztBQUFLLHFCQUFRO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkE1QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXZCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERDtBQTBEQTs7OztFQTlFa0JPLGdEOztBQWlGTFQsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZmFjdG9yeSBmcm9tICcuLi9ldGhlcmV1bS9mYWN0b3J5JztcbmltcG9ydCB3ZWIzIGZyb20gJy4uL2V0aGVyZXVtL3dlYjMnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5cbi8qIC0tLSBTZW1hbnRpYy1VSSAtLS0gKi9cbmltcG9ydCB7IEhlYWRlciwgSW5wdXQsIEJ1dHRvbiwgU2VsZWN0LCBJY29uLCBTZWdtZW50LCBMYWJlbCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcblxuY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuXHRzdGF0ZSA9IHtcblx0XHRhZGRyZXNzOiAnJ1xuXHR9XG5cblx0YXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCBvcHRpb25zID0gW1xuICBcdFx0ICAgIHsga2V5OiAnVHJhZGVtYXJrJywgdGV4dDogJ1RyYWRlbWFyaycsIHZhbHVlOiAndHJhZGVtYXJrJyB9LFxuICBcdFx0ICAgIHsga2V5OiAnUGF0ZW50JywgdGV4dDogJ1BhdGVudCcsIHZhbHVlOiAncGF0ZW50JyB9LFxuICBcdFx0ICAgIHsga2V5OiAnRGVzaWduJywgdGV4dDogJ0Rlc2lnbicsIHZhbHVlOiAnZGVzaWduJyB9LFxuXHRcdF07XG5cblx0XHRsZXQgc2VnbWVudDtcblx0XHRsZXQgdG9wX2NvbnRhaW5lcjtcblx0XHRsZXQgbWlkZGxlX2NvbnRhaW5lcjtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8TGF5b3V0PlxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzcyA9IFwib25lIGNvbHVtbiByb3dcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3MgPSBcImNvbHVtblwiPlxuXHRcdFx0XHRcdFx0XHQ8cD5XZWxjb21lIHRvIHRoZSBpbnRlbGxlY3R1YWwgcHJvcGVydHkgd2Vic2l0ZS48L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxkaXYgY2xhc3MgPSBcIm9uZSBjb2x1bW4gcm93XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzID0gXCJjb2x1bW5cIj5cblx0XHRcdFx0XHRcdFx0PElucHV0IGljb25Qb3NpdGlvbj0nbGVmdCcgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J1NlYXJjaCBieSBBZGRyZXNzJyBhY3Rpb24+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IC8+XG5cdFx0XHRcdFx0XHRcdFx0PEljb24gbmFtZT0nc2VhcmNoJyAvPlxuXHRcdFx0XHRcdFx0XHRcdDxTZWxlY3QgY29tcGFjdCBvcHRpb25zPXtvcHRpb25zfSBkZWZhdWx0VmFsdWU9J3RyYWRlbWFyaycgLz5cblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIHR5cGU9J3N1Ym1pdCc+U2VhcmNoPC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdDwvSW5wdXQ+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcyA9IFwib25lIGNvbHVtbiByb3dcIj5cblx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cInVpIGxlZnQgZmxvYXRlZCBidXR0b25cIj5BZHZhbmNlZCBTZWFyY2g8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzcyA9IFwidHdvIGNvbHVtbiByb3dcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3MgPSBcIm5pbmUgd2lkZSBjb2x1bW5cIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcyA9IFwidWkgc2VnbWVudFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxIZWFkZXIgYXMgPSBcImgyXCI+UmVnaXN0ZXJpbmcgeW91ciBpbnRlbGxlY3R1YWwgcHJvcGVydHk8L0hlYWRlcj5cblx0XHRcdFx0XHRcdFx0XHQ8cD5UbyByZWdpc3RlciB5b3VyIGludGVsbGVjdHVhbCBwcm9wZXJ0eSwgeW91IG11c3QgaGF2ZSB0aGUgTWV0YU1hc2sgYnJvd3NlciBleHRlbnNpb24gaW5zdGFsbCB3aXRoIGFuIEV0aGVyZXVtIHdhbGxldC48L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzID0gXCJ1aSBzZWdtZW50XCI+XG5cdFx0XHRcdFx0XHRcdFx0PEhlYWRlciBhcyA9IFwiaDNcIj5UbyByZWdpc3RlciB5b3VyIGludGVsbGVjdHVhbCBwcm9wZXJ0eSwgeW91IHdpbGwgbmVlZDo8L0hlYWRlcj5cblx0XHRcdFx0XHRcdFx0XHRcdDxvbCBjbGFzcz1cInVpIGxpc3RcIj5cblx0XHRcdFx0XHRcdFx0XHRcdCAgPGxpPlRoZSB0eXBlIG9mIGludGVsbGVjdHVhbCBwcm9wZXJ0eSB5b3UgYXJlIHJlZ2lzdGVyaW5nPC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdCAgPGxpPlRoZSBldGhlcmV1bSBhZGRyZXNzIG9mIGFueSBjby1vd25lcnMgb2YgdGhlIGludGVsbGVjdHVhbCBwcm9wZXJ0eTwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT5UaGUgb3JpZ2luYWwgZmlsZSBjb250YWluaW5nIHRoZSBpbnRlbGxlY3R1YWwgcHJvcGVydHk8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+VGhlIHB1YmxpY2F0aW9uIGRhdGUgZm9yIHRoZSBpbnRlbGxlY3R1YWwgcHJvcGVydHk8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9vbD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3MgPSBcImZvdXIgd2lkZSBjb2x1bW5cIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInVpIGljb24gbWVzc2FnZVwiPlxuXHRcdFx0XHRcdFx0XHQgIDxpIGNsYXNzPVwiZXhjbGFtYXRpb24gdHJpYW5nbGUgaWNvblwiPjwvaT5cblx0XHRcdFx0XHRcdFx0ICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuXHRcdFx0XHRcdFx0XHQgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxuXHRcdFx0XHRcdFx0XHQgICAgICBBdHRlbnRpb24hXG5cdFx0XHRcdFx0XHRcdCAgICA8L2Rpdj5cblx0XHRcdFx0XHRcdFx0ICAgIDxwPlJlZ2lzdGVyaW5nIHlvdXIgaW50ZWxsZWN0dWFsIHByb3BlcnR5IHdpbGwgaW5jdXIgZmVlcy4gWW91IHdpbGwgYmUgcHJvbXB0ZWQgYnkgTWV0YW1hc2sgaW5mb3JtaW5nIHlvdSBvZiB0aGUgZXhhY3QgdmFsdWUuPC9wPlxuXHRcdFx0XHRcdFx0XHQgIDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzID0gXCJ0d28gd2lkZSBjb2x1bW5cIj5cblxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L0xheW91dD5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})