webpackHotUpdate_N_E("pages/intellectualproperty/register",{

/***/ "./components/FormRegisterLogin.js":
/*!*****************************************!*\
  !*** ./components/FormRegisterLogin.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Layout */ \"./components/Layout.js\");\n/* harmony import */ var _styles_FormRegisterLogin_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/FormRegisterLogin.module.css */ \"./styles/FormRegisterLogin.module.css\");\n/* harmony import */ var _styles_FormRegisterLogin_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_FormRegisterLogin_module_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/deepaksng00/Documents/intellectual-property-dapp/components/FormRegisterLogin.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\nvar FormRegisterLogin = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(FormRegisterLogin, _Component);\n\n  var _super = _createSuper(FormRegisterLogin);\n\n  function FormRegisterLogin() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, FormRegisterLogin);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"continueRegistration\", function (e) {\n      e.preventDefault();\n      _this.props.nextStep;\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(FormRegisterLogin, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {}\n  }, {\n    key: \"render\",\n    value: function render() {\n      var values = this.props.values;\n      var nextStep = this.props.nextStep;\n      console.log(values.address);\n\n      if (values.address == \"\") {\n        alert(\"Metamask is not setup correctly, please load Metamask and try again!\");\n        _routes__WEBPACK_IMPORTED_MODULE_11__[\"Router\"].pushRoute('/');\n      }\n\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Layout__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n          className: _styles_FormRegisterLogin_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.form,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n            children: \"Login\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 11\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            type: \"input\",\n            value: values.address,\n            readOnly: true\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 11\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            type: \"button\",\n            onClick: this.continueRegistration,\n            children: \"Login\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 11\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 7\n      }, this);\n    }\n  }]);\n\n  return FormRegisterLogin;\n}(react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormRegisterLogin);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtUmVnaXN0ZXJMb2dpbi5qcz8yNGQ0Il0sIm5hbWVzIjpbIkZvcm1SZWdpc3RlckxvZ2luIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHJvcHMiLCJuZXh0U3RlcCIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJhZGRyZXNzIiwiYWxlcnQiLCJSb3V0ZXIiLCJwdXNoUm91dGUiLCJzdHlsZSIsImZvcm0iLCJjb250aW51ZVJlZ2lzdHJhdGlvbiIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxpQjs7Ozs7Ozs7Ozs7Ozs7OzsrTkFDbUIsVUFBQUMsQ0FBQyxFQUFJO0FBQzFCQSxPQUFDLENBQUNDLGNBQUY7QUFDQSxZQUFLQyxLQUFMLENBQVdDLFFBQVg7QUFDRCxLOzs7Ozs7O3dDQUVtQixDQUVuQjs7OzZCQUVRO0FBQUEsVUFDQ0MsTUFERCxHQUNZLEtBQUtGLEtBRGpCLENBQ0NFLE1BREQ7QUFBQSxVQUVDRCxRQUZELEdBRWMsS0FBS0QsS0FGbkIsQ0FFQ0MsUUFGRDtBQUlQRSxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBTSxDQUFDRyxPQUFuQjs7QUFDQSxVQUFJSCxNQUFNLENBQUNHLE9BQVAsSUFBa0IsRUFBdEIsRUFBMEI7QUFDeEJDLGFBQUssQ0FBQyxzRUFBRCxDQUFMO0FBQ0FDLHVEQUFNLENBQUNDLFNBQVAsQ0FBaUIsR0FBakI7QUFDRDs7QUFFRCwwQkFDRSxxRUFBQywrQ0FBRDtBQUFBLCtCQUNFO0FBQU0sbUJBQVMsRUFBRUMsNEVBQUssQ0FBQ0MsSUFBdkI7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQU8sZ0JBQUksRUFBQyxPQUFaO0FBQW9CLGlCQUFLLEVBQUdSLE1BQU0sQ0FBQ0csT0FBbkM7QUFBNkMsb0JBQVE7QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRixlQUdFO0FBQVEsZ0JBQUksRUFBQyxRQUFiO0FBQXNCLG1CQUFPLEVBQUcsS0FBS00sb0JBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQVNEOzs7O0VBN0I2QkMsK0M7O0FBZ0NqQmYsZ0ZBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvcm1SZWdpc3RlckxvZ2luLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi9MYXlvdXQnO1xuaW1wb3J0IHN0eWxlIGZyb20gJy4uL3N0eWxlcy9Gb3JtUmVnaXN0ZXJMb2dpbi5tb2R1bGUuY3NzJztcbmltcG9ydCB7IExpbmssIFJvdXRlciB9IGZyb20gJy4uL3JvdXRlcyc7XG5cbmNsYXNzIEZvcm1SZWdpc3RlckxvZ2luIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29udGludWVSZWdpc3RyYXRpb24gPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5uZXh0U3RlcDtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB2YWx1ZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBuZXh0U3RlcCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnNvbGUubG9nKHZhbHVlcy5hZGRyZXNzKTtcbiAgICBpZiAodmFsdWVzLmFkZHJlc3MgPT0gXCJcIikge1xuICAgICAgYWxlcnQoXCJNZXRhbWFzayBpcyBub3Qgc2V0dXAgY29ycmVjdGx5LCBwbGVhc2UgbG9hZCBNZXRhbWFzayBhbmQgdHJ5IGFnYWluIVwiKTtcbiAgICAgIFJvdXRlci5wdXNoUm91dGUoJy8nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZS5mb3JtfT5cbiAgICAgICAgICA8aDI+TG9naW48L2gyPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPSdpbnB1dCcgdmFsdWU9eyB2YWx1ZXMuYWRkcmVzcyB9IHJlYWRPbmx5IC8+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIG9uQ2xpY2s9eyB0aGlzLmNvbnRpbnVlUmVnaXN0cmF0aW9uIH0+TG9naW48L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtUmVnaXN0ZXJMb2dpbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/FormRegisterLogin.js\n");

/***/ })

})