webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/deepaksng00/Documents/intellectual-property-dapp/pages/index.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\nvar Index = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Index, _Component);\n\n  var _super = _createSuper(Index);\n\n  function Index() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, Index);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_this), \"state\", {\n      address: ''\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Index, [{\n    key: \"componentDidMount\",\n    value: function () {\n      var _componentDidMount = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n        var address;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_12__[\"default\"].eth.getAccounts();\n\n              case 2:\n                address = _context.sent;\n                this.setState({\n                  address: address\n                });\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function componentDidMount() {\n        return _componentDidMount.apply(this, arguments);\n      }\n\n      return componentDidMount;\n    }()\n  }, {\n    key: \"renderStatus\",\n    value: function renderStatus() {\n      if (this.state.address == \"\") {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n          \"class\": \"grid-item ethereum-address\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n            style: {\n              color: \"red\"\n            },\n            children: \"Status: Disconnected\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 20,\n            columnNumber: 9\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: \"We were unable to connect to your Metamask account. If Metamask seems to be working correctly, please refresh the page.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 10\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 11\n        }, this);\n      } else {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n          \"class\": \"grid-item ethereum-address\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n            style: {\n              color: \"green\"\n            },\n            children: \"Status: Connected\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 10\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: [\"Your address: \", this.state.address]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 9\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 11\n        }, this);\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            href: \"#\",\n            children: \"Home\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 10\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 5\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n          \"class\": \"grid-item welcome\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n            children: \"What is intellectual property?\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 6\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: \"Intellectual property is something that has been created by the creator's mind, for example: algorithms, stories, paintings or music.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 6\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: \"To ensure that your intellectual property is protected from plagiarism to commercial use by a third-party, you must register this intellectual property.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 6\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: \"This web application allows you to register your intellectual property rights on the Ethereum blockchain, where it will be stored safely. This app also allows you to access, verify and manage your intellectual property using your Ethereum wallet.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 6\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 5\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"hr\", {\n          \"class\": \"divider-one\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 5\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n          \"class\": \"grid-item search-bar\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n            children: \"Search for intellectual property\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 6\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: \"To search for an intellectual property, please enter the ethereum address of the intellectual property contract:\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 6\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n              \"class\": \"flex-stretch\",\n              type: \"text\",\n              placeholder: \"Search by ethereum address\",\n              name: \"search\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 46,\n              columnNumber: 7\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n              \"class\": \"search-button\",\n              type: \"submit\",\n              children: \"Search\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 47,\n              columnNumber: 7\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 6\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            href: \"#\",\n            \"class\": \"advanced-search\",\n            children: \"Advanced Search\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 6\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 5\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"hr\", {\n          \"class\": \"divider-two\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 5\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n          \"class\": \"grid-item register\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n            children: \"Registering your intellectual property\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 6\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: \"To register your intellectual property, you must have the Metamask browser extension installed with an Ethereum wallet.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 6\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n            children: \"To register your intellectual property you will need:\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 6\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ol\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n              children: \"The type of intellectual property you are registering\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 57,\n              columnNumber: 7\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n              children: \"The Ethereum address of any co-owners of the intellectual property\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 58,\n              columnNumber: 7\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n              children: \"The original file containing the intellectual property\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 59,\n              columnNumber: 7\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n              children: \"The publication date for the intellectual property\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 60,\n              columnNumber: 7\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 6\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 5\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          \"class\": \"start-register button\",\n          children: \"Start registration\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 5\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n          \"class\": \"grid-item attention\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n            style: {\n              color: \"#cc3300\"\n            },\n            children: \"Attention!\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 6\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: \"Registering your intellectual property will incur fees. You will be prompted by Metamask informing you of the exact value.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 6\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 5\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 4\n      }, this);\n    }\n  }]);\n\n  return Index;\n}(react__WEBPACK_IMPORTED_MODULE_10__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCIsImFkZHJlc3MiLCJ3ZWIzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJzZXRTdGF0ZSIsInN0YXRlIiwiY29sb3IiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7SUFHTUEsSzs7Ozs7Ozs7Ozs7Ozs7OztnTkFDRztBQUNQQyxhQUFPLEVBQUU7QUFERixLOzs7Ozs7Ozs7Ozs7Ozs7dUJBS2VDLHVEQUFJLENBQUNDLEdBQUwsQ0FBU0MsV0FBVCxFOzs7QUFBaEJILHVCO0FBQ0oscUJBQUtJLFFBQUwsQ0FBYztBQUFFSix5QkFBTyxFQUFQQTtBQUFGLGlCQUFkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBR1k7QUFDZCxVQUFJLEtBQUtLLEtBQUwsQ0FBV0wsT0FBWCxJQUFzQixFQUExQixFQUE4QjtBQUM3Qiw0QkFBTztBQUFTLG1CQUFNLDRCQUFmO0FBQUEsa0NBQ0Y7QUFBSSxpQkFBSyxFQUFFO0FBQUNNLG1CQUFLLEVBQUU7QUFBUixhQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURFLGVBRUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFQO0FBSUEsT0FMRCxNQUtPO0FBQ04sNEJBQU87QUFBUyxtQkFBTSw0QkFBZjtBQUFBLGtDQUNEO0FBQUksaUJBQUssRUFBRTtBQUFDQSxtQkFBSyxFQUFFO0FBQVIsYUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEQyxlQUVGO0FBQUEseUNBQW1CLEtBQUtELEtBQUwsQ0FBV0wsT0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBUDtBQUlBO0FBQ0Q7Ozs2QkFFUTtBQUNSLDBCQUNDLHFFQUFDLDJEQUFEO0FBQUEsZ0NBQ0M7QUFBQSxpQ0FBSztBQUFHLGdCQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQsZUFFQztBQUFTLG1CQUFNLG1CQUFmO0FBQUEsa0NBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsZUFFQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRCxlQUdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhELGVBSUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZELGVBUUM7QUFBSSxtQkFBTTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkQsZUFTQztBQUFTLG1CQUFNLHNCQUFmO0FBQUEsa0NBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsZUFFQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRCxlQUdDO0FBQUEsb0NBQ0M7QUFBTyx1QkFBTSxjQUFiO0FBQTRCLGtCQUFJLEVBQUMsTUFBakM7QUFBd0MseUJBQVcsRUFBQyw0QkFBcEQ7QUFBaUYsa0JBQUksRUFBQztBQUF0RjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURELGVBRUM7QUFBUSx1QkFBTSxlQUFkO0FBQThCLGtCQUFJLEVBQUMsUUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhELGVBT0M7QUFBRyxnQkFBSSxFQUFDLEdBQVI7QUFBWSxxQkFBTSxpQkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRELGVBa0JDO0FBQUksbUJBQU07QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWxCRCxlQW1CQztBQUFTLG1CQUFNLG9CQUFmO0FBQUEsa0NBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsZUFFQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRCxlQUdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhELGVBSUM7QUFBQSxvQ0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERCxlQUVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZELGVBR0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEQsZUFJQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQW5CRCxlQThCQztBQUFRLG1CQUFNLHVCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTlCRCxlQStCQztBQUFTLG1CQUFNLHFCQUFmO0FBQUEsa0NBQ0M7QUFBSSxpQkFBSyxFQUFFO0FBQUVNLG1CQUFLLEVBQUU7QUFBVCxhQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURELGVBRUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQS9CRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERDtBQXNDQTs7OztFQS9Ea0JDLGdEOztBQWtFTFIsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZmFjdG9yeSBmcm9tICcuLi9ldGhlcmV1bS9mYWN0b3J5JztcbmltcG9ydCB3ZWIzIGZyb20gJy4uL2V0aGVyZXVtL3dlYjMnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5cblxuY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuXHRzdGF0ZSA9IHtcblx0XHRhZGRyZXNzOiAnJ1xuXHR9XG5cblx0YXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0Y29uc3QgYWRkcmVzcyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFkZHJlc3MgfSk7XG5cdH1cblxuXHRyZW5kZXJTdGF0dXMoKSB7XG5cdFx0aWYgKHRoaXMuc3RhdGUuYWRkcmVzcyA9PSBcIlwiKSB7XG5cdFx0XHRyZXR1cm4gPHNlY3Rpb24gY2xhc3M9XCJncmlkLWl0ZW0gZXRoZXJldW0tYWRkcmVzc1wiPlxuXHRcdFx0XHRcdFx0XHQgPGgzIHN0eWxlPXt7Y29sb3I6IFwicmVkXCJ9fT5TdGF0dXM6IERpc2Nvbm5lY3RlZDwvaDM+XG5cdFx0XHRcdFx0XHQgICA8cD5XZSB3ZXJlIHVuYWJsZSB0byBjb25uZWN0IHRvIHlvdXIgTWV0YW1hc2sgYWNjb3VudC4gSWYgTWV0YW1hc2sgc2VlbXMgdG8gYmUgd29ya2luZyBjb3JyZWN0bHksIHBsZWFzZSByZWZyZXNoIHRoZSBwYWdlLjwvcD5cblx0XHRcdFx0XHQgICA8L3NlY3Rpb24+XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiA8c2VjdGlvbiBjbGFzcz1cImdyaWQtaXRlbSBldGhlcmV1bS1hZGRyZXNzXCI+XG5cdFx0XHRcdFx0XHQgICA8aDMgc3R5bGU9e3tjb2xvcjogXCJncmVlblwifX0+U3RhdHVzOiBDb25uZWN0ZWQ8L2gzPlxuXHRcdFx0XHRcdFx0XHQgPHA+WW91ciBhZGRyZXNzOiB7IHRoaXMuc3RhdGUuYWRkcmVzcyB9PC9wPlxuXHRcdFx0XHRcdFx0IDwvc2VjdGlvbj5cblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxMYXlvdXQ+XG5cdFx0XHRcdDxuYXY+PGEgaHJlZj1cIiNcIj5Ib21lPC9hPjwvbmF2PlxuXHRcdFx0XHQ8c2VjdGlvbiBjbGFzcz1cImdyaWQtaXRlbSB3ZWxjb21lXCI+XG5cdFx0XHRcdFx0PGgyPldoYXQgaXMgaW50ZWxsZWN0dWFsIHByb3BlcnR5PzwvaDI+XG5cdFx0XHRcdFx0PHA+SW50ZWxsZWN0dWFsIHByb3BlcnR5IGlzIHNvbWV0aGluZyB0aGF0IGhhcyBiZWVuIGNyZWF0ZWQgYnkgdGhlIGNyZWF0b3IncyBtaW5kLCBmb3IgZXhhbXBsZTogYWxnb3JpdGhtcywgc3RvcmllcywgcGFpbnRpbmdzIG9yIG11c2ljLjwvcD5cblx0XHRcdFx0XHQ8cD5UbyBlbnN1cmUgdGhhdCB5b3VyIGludGVsbGVjdHVhbCBwcm9wZXJ0eSBpcyBwcm90ZWN0ZWQgZnJvbSBwbGFnaWFyaXNtIHRvIGNvbW1lcmNpYWwgdXNlIGJ5IGEgdGhpcmQtcGFydHksIHlvdSBtdXN0IHJlZ2lzdGVyIHRoaXMgaW50ZWxsZWN0dWFsIHByb3BlcnR5LjwvcD5cblx0XHRcdFx0XHQ8cD5UaGlzIHdlYiBhcHBsaWNhdGlvbiBhbGxvd3MgeW91IHRvIHJlZ2lzdGVyIHlvdXIgaW50ZWxsZWN0dWFsIHByb3BlcnR5IHJpZ2h0cyBvbiB0aGUgRXRoZXJldW0gYmxvY2tjaGFpbiwgd2hlcmUgaXQgd2lsbCBiZSBzdG9yZWQgc2FmZWx5LiBUaGlzIGFwcCBhbHNvIGFsbG93cyB5b3UgdG8gYWNjZXNzLCB2ZXJpZnkgYW5kIG1hbmFnZSB5b3VyIGludGVsbGVjdHVhbCBwcm9wZXJ0eSB1c2luZyB5b3VyIEV0aGVyZXVtIHdhbGxldC48L3A+XG5cdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdFx0PGhyIGNsYXNzPVwiZGl2aWRlci1vbmVcIiAvPlxuXHRcdFx0XHQ8c2VjdGlvbiBjbGFzcz1cImdyaWQtaXRlbSBzZWFyY2gtYmFyXCI+XG5cdFx0XHRcdFx0PGgyPlNlYXJjaCBmb3IgaW50ZWxsZWN0dWFsIHByb3BlcnR5PC9oMj5cblx0XHRcdFx0XHQ8cD5UbyBzZWFyY2ggZm9yIGFuIGludGVsbGVjdHVhbCBwcm9wZXJ0eSwgcGxlYXNlIGVudGVyIHRoZSBldGhlcmV1bSBhZGRyZXNzIG9mIHRoZSBpbnRlbGxlY3R1YWwgcHJvcGVydHkgY29udHJhY3Q6PC9wPlxuXHRcdFx0XHRcdDxmb3JtPlxuXHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzPVwiZmxleC1zdHJldGNoXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCBieSBldGhlcmV1bSBhZGRyZXNzXCIgbmFtZT1cInNlYXJjaFwiIC8+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwic2VhcmNoLWJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIj5TZWFyY2g8L2J1dHRvbj5cblx0XHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdFx0PGEgaHJlZj1cIiNcIiBjbGFzcz1cImFkdmFuY2VkLXNlYXJjaFwiPkFkdmFuY2VkIFNlYXJjaDwvYT5cblx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0XHQ8aHIgY2xhc3M9XCJkaXZpZGVyLXR3b1wiIC8+XG5cdFx0XHRcdDxzZWN0aW9uIGNsYXNzPVwiZ3JpZC1pdGVtIHJlZ2lzdGVyXCI+XG5cdFx0XHRcdFx0PGgyPlJlZ2lzdGVyaW5nIHlvdXIgaW50ZWxsZWN0dWFsIHByb3BlcnR5PC9oMj5cblx0XHRcdFx0XHQ8cD5UbyByZWdpc3RlciB5b3VyIGludGVsbGVjdHVhbCBwcm9wZXJ0eSwgeW91IG11c3QgaGF2ZSB0aGUgTWV0YW1hc2sgYnJvd3NlciBleHRlbnNpb24gaW5zdGFsbGVkIHdpdGggYW4gRXRoZXJldW0gd2FsbGV0LjwvcD5cblx0XHRcdFx0XHQ8aDI+VG8gcmVnaXN0ZXIgeW91ciBpbnRlbGxlY3R1YWwgcHJvcGVydHkgeW91IHdpbGwgbmVlZDo8L2gyPlxuXHRcdFx0XHRcdDxvbD5cblx0XHRcdFx0XHRcdDxsaT5UaGUgdHlwZSBvZiBpbnRlbGxlY3R1YWwgcHJvcGVydHkgeW91IGFyZSByZWdpc3RlcmluZzwvbGk+XG5cdFx0XHRcdFx0XHQ8bGk+VGhlIEV0aGVyZXVtIGFkZHJlc3Mgb2YgYW55IGNvLW93bmVycyBvZiB0aGUgaW50ZWxsZWN0dWFsIHByb3BlcnR5PC9saT5cblx0XHRcdFx0XHRcdDxsaT5UaGUgb3JpZ2luYWwgZmlsZSBjb250YWluaW5nIHRoZSBpbnRlbGxlY3R1YWwgcHJvcGVydHk8L2xpPlxuXHRcdFx0XHRcdFx0PGxpPlRoZSBwdWJsaWNhdGlvbiBkYXRlIGZvciB0aGUgaW50ZWxsZWN0dWFsIHByb3BlcnR5PC9saT5cblx0XHRcdFx0XHQ8L29sPlxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHRcdDxidXR0b24gY2xhc3M9XCJzdGFydC1yZWdpc3RlciBidXR0b25cIj5TdGFydCByZWdpc3RyYXRpb248L2J1dHRvbj5cblx0XHRcdFx0PHNlY3Rpb24gY2xhc3M9XCJncmlkLWl0ZW0gYXR0ZW50aW9uXCI+XG5cdFx0XHRcdFx0PGgzIHN0eWxlPXt7IGNvbG9yOiBcIiNjYzMzMDBcIiB9fT5BdHRlbnRpb24hPC9oMz5cblx0XHRcdFx0XHQ8cD5SZWdpc3RlcmluZyB5b3VyIGludGVsbGVjdHVhbCBwcm9wZXJ0eSB3aWxsIGluY3VyIGZlZXMuIFlvdSB3aWxsIGJlIHByb21wdGVkIGJ5IE1ldGFtYXNrIGluZm9ybWluZyB5b3Ugb2YgdGhlIGV4YWN0IHZhbHVlLjwvcD5cblx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0PC9MYXlvdXQ+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})