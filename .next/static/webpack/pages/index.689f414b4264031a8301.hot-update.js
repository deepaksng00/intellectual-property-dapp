webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/deepaksng00/Documents/intellectual-property-dapp/pages/index.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\nvar Index = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Index, _Component);\n\n  var _super = _createSuper(Index);\n\n  function Index() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, Index);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_this), \"state\", {\n      address: ''\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Index, [{\n    key: \"componentDidMount\",\n    value: function () {\n      var _componentDidMount = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n        var address;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_12__[\"default\"].eth.getAccounts();\n\n              case 2:\n                address = _context.sent;\n                this.setState({\n                  address: address\n                });\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function componentDidMount() {\n        return _componentDidMount.apply(this, arguments);\n      }\n\n      return componentDidMount;\n    }()\n  }, {\n    key: \"renderStatus\",\n    value: function renderStatus() {\n      if (this.state.address == \"\") {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n          \"class\": \"grid-item ethereum-address\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n            style: {\n              color: \"red\"\n            },\n            children: \"Status: Disconnected\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 19,\n            columnNumber: 9\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: \"We were unable to connect to your Metamask account.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 20,\n            columnNumber: 10\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 11\n        }, this);\n      } else {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n          \"class\": \"grid-item ethereum-address\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n            style: {\n              color: \"green\"\n            },\n            children: \"Status: Connected\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 24,\n            columnNumber: 10\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: [\"Your address: \", this.state.address]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 9\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 11\n        }, this);\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n          \"class\": \"grid-item welcome\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n            children: \"What is intellectual property?\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 6\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: \"Intellectual property is something that has been created by the creator's mind, for example: algorithms, stories, paintings or music.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 6\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: \"To ensure that your intellectual property is protected from plagiarism to commercial use by a third-party, you must register this intellectual property.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 6\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: \"This web application allows you to register your intellectual property rights on the Ethereum blockchain, where it will be stored safely. This app also allows you to access, verify and manage your intellectual property.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 6\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 5\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"hr\", {\n          \"class\": \"divider-one\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 5\n        }, this), this.renderStatus(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n          \"class\": \"grid-item search-bar\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n            children: \"Search for intellectual property\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 6\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: \"To search for an intellectual property, please enter the ethereum address of the intellectual property contract:\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 6\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n              \"class\": \"flex-stretch\",\n              type: \"text\",\n              placeholder: \"Search by ethereum address\",\n              name: \"search\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 7\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n              \"class\": \"search-button\",\n              type: \"submit\",\n              children: \"Search\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 46,\n              columnNumber: 7\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 6\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            href: \"#\",\n            \"class\": \"advanced-search\",\n            children: \"Advanced Search\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 6\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 5\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"hr\", {\n          \"class\": \"divider-two\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 5\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n          \"class\": \"grid-item register\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n            children: \"Registering your intellectual property\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 6\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: \"To register your intellectual property, you must have the Metamask browser extension installed with an Ethereum wallet.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 6\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n            children: \"To register your intellectual property you will need:\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 6\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ol\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n              children: \"The type of intellectual property you are registering\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 56,\n              columnNumber: 7\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n              children: \"The Ethereum address of any co-owners of the intellectual property\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 57,\n              columnNumber: 7\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n              children: \"The original file containing the intellectual property\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 58,\n              columnNumber: 7\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n              children: \"The publication date for the intellectual property\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 59,\n              columnNumber: 7\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 6\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            \"class\": \"start-register button\",\n            children: \"Start registration\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 6\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 5\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n          \"class\": \"grid-item attention\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n            style: {\n              color: \"red\"\n            },\n            children: \"Attention!\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 6\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: [\"Registering your intellectual property will incur fees. \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 65,\n              columnNumber: 65\n            }, this), \"You will be prompted by Metamask informing you of the exact value.\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 6\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 5\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 4\n      }, this);\n    }\n  }]);\n\n  return Index;\n}(react__WEBPACK_IMPORTED_MODULE_10__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCIsImFkZHJlc3MiLCJ3ZWIzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJzZXRTdGF0ZSIsInN0YXRlIiwiY29sb3IiLCJyZW5kZXJTdGF0dXMiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsSzs7Ozs7Ozs7Ozs7Ozs7OztnTkFDRztBQUNQQyxhQUFPLEVBQUU7QUFERixLOzs7Ozs7Ozs7Ozs7Ozs7dUJBS2VDLHVEQUFJLENBQUNDLEdBQUwsQ0FBU0MsV0FBVCxFOzs7QUFBaEJILHVCO0FBQ0oscUJBQUtJLFFBQUwsQ0FBYztBQUFFSix5QkFBTyxFQUFQQTtBQUFGLGlCQUFkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBR1k7QUFDZCxVQUFJLEtBQUtLLEtBQUwsQ0FBV0wsT0FBWCxJQUFzQixFQUExQixFQUE4QjtBQUM3Qiw0QkFBTztBQUFTLG1CQUFNLDRCQUFmO0FBQUEsa0NBQ0Y7QUFBSSxpQkFBSyxFQUFFO0FBQUNNLG1CQUFLLEVBQUU7QUFBUixhQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURFLGVBRUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFQO0FBSUEsT0FMRCxNQUtPO0FBQ04sNEJBQU87QUFBUyxtQkFBTSw0QkFBZjtBQUFBLGtDQUNEO0FBQUksaUJBQUssRUFBRTtBQUFDQSxtQkFBSyxFQUFFO0FBQVIsYUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEQyxlQUVGO0FBQUEseUNBQW1CLEtBQUtELEtBQUwsQ0FBV0wsT0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBUDtBQUlBO0FBQ0Q7Ozs2QkFFUTtBQUNSLDBCQUNDLHFFQUFDLDJEQUFEO0FBQUEsZ0NBQ0M7QUFBUyxtQkFBTSxtQkFBZjtBQUFBLGtDQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURELGVBRUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkQsZUFHQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIRCxlQUlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxlQU9DO0FBQUksbUJBQU07QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBELEVBUUcsS0FBS08sWUFBTCxFQVJILGVBU0M7QUFBUyxtQkFBTSxzQkFBZjtBQUFBLGtDQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURELGVBRUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkQsZUFHQztBQUFBLG9DQUNDO0FBQU8sdUJBQU0sY0FBYjtBQUE0QixrQkFBSSxFQUFDLE1BQWpDO0FBQXdDLHlCQUFXLEVBQUMsNEJBQXBEO0FBQWlGLGtCQUFJLEVBQUM7QUFBdEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERCxlQUVDO0FBQVEsdUJBQU0sZUFBZDtBQUE4QixrQkFBSSxFQUFDLFFBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIRCxlQU9DO0FBQUcsZ0JBQUksRUFBQyxHQUFSO0FBQVkscUJBQU0saUJBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFURCxlQWtCQztBQUFJLG1CQUFNO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFsQkQsZUFtQkM7QUFBUyxtQkFBTSxvQkFBZjtBQUFBLGtDQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURELGVBRUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkQsZUFHQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIRCxlQUlDO0FBQUEsb0NBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREQsZUFFQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRCxlQUdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhELGVBSUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpELGVBVUM7QUFBUSxxQkFBTSx1QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFWRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbkJELGVBK0JDO0FBQVMsbUJBQU0scUJBQWY7QUFBQSxrQ0FDQztBQUFJLGlCQUFLLEVBQUU7QUFBRUQsbUJBQUssRUFBRTtBQUFULGFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsZUFFQztBQUFBLGdHQUEyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQS9CRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERDtBQXNDQTs7OztFQS9Ea0JFLGdEOztBQWtFTFQsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZmFjdG9yeSBmcm9tICcuLi9ldGhlcmV1bS9mYWN0b3J5JztcbmltcG9ydCB3ZWIzIGZyb20gJy4uL2V0aGVyZXVtL3dlYjMnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcblx0c3RhdGUgPSB7XG5cdFx0YWRkcmVzczogJydcblx0fVxuXG5cdGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGNvbnN0IGFkZHJlc3MgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBhZGRyZXNzIH0pO1xuXHR9XG5cblx0cmVuZGVyU3RhdHVzKCkge1xuXHRcdGlmICh0aGlzLnN0YXRlLmFkZHJlc3MgPT0gXCJcIikge1xuXHRcdFx0cmV0dXJuIDxzZWN0aW9uIGNsYXNzPVwiZ3JpZC1pdGVtIGV0aGVyZXVtLWFkZHJlc3NcIj5cblx0XHRcdFx0XHRcdFx0IDxoMyBzdHlsZT17e2NvbG9yOiBcInJlZFwifX0+U3RhdHVzOiBEaXNjb25uZWN0ZWQ8L2gzPlxuXHRcdFx0XHRcdFx0ICAgPHA+V2Ugd2VyZSB1bmFibGUgdG8gY29ubmVjdCB0byB5b3VyIE1ldGFtYXNrIGFjY291bnQuPC9wPlxuXHRcdFx0XHRcdCAgIDwvc2VjdGlvbj5cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIDxzZWN0aW9uIGNsYXNzPVwiZ3JpZC1pdGVtIGV0aGVyZXVtLWFkZHJlc3NcIj5cblx0XHRcdFx0XHRcdCAgIDxoMyBzdHlsZT17e2NvbG9yOiBcImdyZWVuXCJ9fT5TdGF0dXM6IENvbm5lY3RlZDwvaDM+XG5cdFx0XHRcdFx0XHRcdCA8cD5Zb3VyIGFkZHJlc3M6IHsgdGhpcy5zdGF0ZS5hZGRyZXNzIH08L3A+XG5cdFx0XHRcdFx0XHQgPC9zZWN0aW9uPlxuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PExheW91dD5cblx0XHRcdFx0PHNlY3Rpb24gY2xhc3M9XCJncmlkLWl0ZW0gd2VsY29tZVwiPlxuXHRcdFx0XHRcdDxoMj5XaGF0IGlzIGludGVsbGVjdHVhbCBwcm9wZXJ0eT88L2gyPlxuXHRcdFx0XHRcdDxwPkludGVsbGVjdHVhbCBwcm9wZXJ0eSBpcyBzb21ldGhpbmcgdGhhdCBoYXMgYmVlbiBjcmVhdGVkIGJ5IHRoZSBjcmVhdG9yJ3MgbWluZCwgZm9yIGV4YW1wbGU6IGFsZ29yaXRobXMsIHN0b3JpZXMsIHBhaW50aW5ncyBvciBtdXNpYy48L3A+XG5cdFx0XHRcdFx0PHA+VG8gZW5zdXJlIHRoYXQgeW91ciBpbnRlbGxlY3R1YWwgcHJvcGVydHkgaXMgcHJvdGVjdGVkIGZyb20gcGxhZ2lhcmlzbSB0byBjb21tZXJjaWFsIHVzZSBieSBhIHRoaXJkLXBhcnR5LCB5b3UgbXVzdCByZWdpc3RlciB0aGlzIGludGVsbGVjdHVhbCBwcm9wZXJ0eS48L3A+XG5cdFx0XHRcdFx0PHA+VGhpcyB3ZWIgYXBwbGljYXRpb24gYWxsb3dzIHlvdSB0byByZWdpc3RlciB5b3VyIGludGVsbGVjdHVhbCBwcm9wZXJ0eSByaWdodHMgb24gdGhlIEV0aGVyZXVtIGJsb2NrY2hhaW4sIHdoZXJlIGl0IHdpbGwgYmUgc3RvcmVkIHNhZmVseS4gVGhpcyBhcHAgYWxzbyBhbGxvd3MgeW91IHRvIGFjY2VzcywgdmVyaWZ5IGFuZCBtYW5hZ2UgeW91ciBpbnRlbGxlY3R1YWwgcHJvcGVydHkuPC9wPlxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0XHQ8aHIgY2xhc3M9XCJkaXZpZGVyLW9uZVwiIC8+XG5cdFx0XHRcdHsgdGhpcy5yZW5kZXJTdGF0dXMoKSB9XG5cdFx0XHRcdDxzZWN0aW9uIGNsYXNzPVwiZ3JpZC1pdGVtIHNlYXJjaC1iYXJcIj5cblx0XHRcdFx0XHQ8aDI+U2VhcmNoIGZvciBpbnRlbGxlY3R1YWwgcHJvcGVydHk8L2gyPlxuXHRcdFx0XHRcdDxwPlRvIHNlYXJjaCBmb3IgYW4gaW50ZWxsZWN0dWFsIHByb3BlcnR5LCBwbGVhc2UgZW50ZXIgdGhlIGV0aGVyZXVtIGFkZHJlc3Mgb2YgdGhlIGludGVsbGVjdHVhbCBwcm9wZXJ0eSBjb250cmFjdDo8L3A+XG5cdFx0XHRcdFx0PGZvcm0+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJmbGV4LXN0cmV0Y2hcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGJ5IGV0aGVyZXVtIGFkZHJlc3NcIiBuYW1lPVwic2VhcmNoXCIgLz5cblx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3M9XCJzZWFyY2gtYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiPlNlYXJjaDwvYnV0dG9uPlxuXHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0XHQ8YSBocmVmPVwiI1wiIGNsYXNzPVwiYWR2YW5jZWQtc2VhcmNoXCI+QWR2YW5jZWQgU2VhcmNoPC9hPlxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHRcdDxociBjbGFzcz1cImRpdmlkZXItdHdvXCIgLz5cblx0XHRcdFx0PHNlY3Rpb24gY2xhc3M9XCJncmlkLWl0ZW0gcmVnaXN0ZXJcIj5cblx0XHRcdFx0XHQ8aDI+UmVnaXN0ZXJpbmcgeW91ciBpbnRlbGxlY3R1YWwgcHJvcGVydHk8L2gyPlxuXHRcdFx0XHRcdDxwPlRvIHJlZ2lzdGVyIHlvdXIgaW50ZWxsZWN0dWFsIHByb3BlcnR5LCB5b3UgbXVzdCBoYXZlIHRoZSBNZXRhbWFzayBicm93c2VyIGV4dGVuc2lvbiBpbnN0YWxsZWQgd2l0aCBhbiBFdGhlcmV1bSB3YWxsZXQuPC9wPlxuXHRcdFx0XHRcdDxoMj5UbyByZWdpc3RlciB5b3VyIGludGVsbGVjdHVhbCBwcm9wZXJ0eSB5b3Ugd2lsbCBuZWVkOjwvaDI+XG5cdFx0XHRcdFx0PG9sPlxuXHRcdFx0XHRcdFx0PGxpPlRoZSB0eXBlIG9mIGludGVsbGVjdHVhbCBwcm9wZXJ0eSB5b3UgYXJlIHJlZ2lzdGVyaW5nPC9saT5cblx0XHRcdFx0XHRcdDxsaT5UaGUgRXRoZXJldW0gYWRkcmVzcyBvZiBhbnkgY28tb3duZXJzIG9mIHRoZSBpbnRlbGxlY3R1YWwgcHJvcGVydHk8L2xpPlxuXHRcdFx0XHRcdFx0PGxpPlRoZSBvcmlnaW5hbCBmaWxlIGNvbnRhaW5pbmcgdGhlIGludGVsbGVjdHVhbCBwcm9wZXJ0eTwvbGk+XG5cdFx0XHRcdFx0XHQ8bGk+VGhlIHB1YmxpY2F0aW9uIGRhdGUgZm9yIHRoZSBpbnRlbGxlY3R1YWwgcHJvcGVydHk8L2xpPlxuXHRcdFx0XHRcdDwvb2w+XG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cInN0YXJ0LXJlZ2lzdGVyIGJ1dHRvblwiPlN0YXJ0IHJlZ2lzdHJhdGlvbjwvYnV0dG9uPlxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHRcdDxzZWN0aW9uIGNsYXNzPVwiZ3JpZC1pdGVtIGF0dGVudGlvblwiPlxuXHRcdFx0XHRcdDxoMyBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT5BdHRlbnRpb24hPC9oMz5cblx0XHRcdFx0XHQ8cD5SZWdpc3RlcmluZyB5b3VyIGludGVsbGVjdHVhbCBwcm9wZXJ0eSB3aWxsIGluY3VyIGZlZXMuIDxiciAvPllvdSB3aWxsIGJlIHByb21wdGVkIGJ5IE1ldGFtYXNrIGluZm9ybWluZyB5b3Ugb2YgdGhlIGV4YWN0IHZhbHVlLjwvcD5cblx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0PC9MYXlvdXQ+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})