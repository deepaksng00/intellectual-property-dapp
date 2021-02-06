module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/intellectualproperty/register.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Layout.module.css */ \"./styles/Layout.module.css\");\n/* harmony import */ var _styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/deepaksng00/Documents/intellectual-property-dapp/components/Layout.js\";\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (props => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main_container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n      className: _styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.header,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_routes__WEBPACK_IMPORTED_MODULE_3__[\"Link\"], {\n        route: \"/\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          className: _styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,\n          children: \"\\xA9 INTELLECTUAL PROPERTY\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 9,\n          columnNumber: 25\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, undefined), props.children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n      className: _styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.footer,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n        children: \"Powered by Ethereum\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, undefined);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcz9lNThhIl0sIm5hbWVzIjpbInByb3BzIiwic3R5bGUiLCJtYWluX2NvbnRhaW5lciIsImhlYWRlciIsInRpdGxlIiwiY2hpbGRyZW4iLCJmb290ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWdCQSxvRUFBRCxJQUFXO0FBQ3hCLHNCQUNFO0FBQUssYUFBUyxFQUFFQyxnRUFBSyxDQUFDQyxjQUF0QjtBQUFBLDRCQUNFO0FBQVEsZUFBUyxFQUFFRCxnRUFBSyxDQUFDRSxNQUF6QjtBQUFBLDZCQUNFLHFFQUFDLDRDQUFEO0FBQU0sYUFBSyxFQUFDLEdBQVo7QUFBQSwrQkFBZ0I7QUFBSSxtQkFBUyxFQUFFRixnRUFBSyxDQUFDRyxLQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUlJSixLQUFLLENBQUNLLFFBSlYsZUFLRTtBQUFRLGVBQVMsRUFBRUosZ0VBQUssQ0FBQ0ssTUFBekI7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFXRCxDQVpEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9MYXlvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlIGZyb20gXCIuLi9zdHlsZXMvTGF5b3V0Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi9yb3V0ZXMnO1xuXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubWFpbl9jb250YWluZXJ9PlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlLmhlYWRlcn0+XG4gICAgICAgIDxMaW5rIHJvdXRlPVwiL1wiPjxoMSBjbGFzc05hbWU9e3N0eWxlLnRpdGxlfT4mY29weTsgSU5URUxMRUNUVUFMIFBST1BFUlRZPC9oMT48L0xpbms+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIHsgcHJvcHMuY2hpbGRyZW4gfVxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlLmZvb3Rlcn0+XG4gICAgICAgIDxoMj5Qb3dlcmVkIGJ5IEV0aGVyZXVtPC9oMj5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ }),

/***/ "./ethereum/web3.js":
/*!**************************!*\
  !*** ./ethereum/web3.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ \"web3\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);\n\nlet web3;\n/* --- Check if metamask is being used / JS is client-side --- */\n\nif (false) {} else {\n  // running server-side or without metamask\n  const provider = new web3__WEBPACK_IMPORTED_MODULE_0___default.a.providers.HttpProvider(\"https://rinkeby.infura.io/v3/b73cfce8d0f14c9580a6f63f5175157d\");\n  web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(provider);\n}\n/* --- Exporting the generated web3 instance for use --- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (web3);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ldGhlcmV1bS93ZWIzLmpzP2ExOTAiXSwibmFtZXMiOlsid2ViMyIsInByb3ZpZGVyIiwiV2ViMyIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxJQUFJQSxJQUFKO0FBRUE7O0FBQ0EsSUFBSSxLQUFKLEVBQXlFLEVBQXpFLE1BSU87QUFDTjtBQUNBLFFBQU1DLFFBQVEsR0FBRyxJQUFJQywyQ0FBSSxDQUFDQyxTQUFMLENBQWVDLFlBQW5CLENBQWdDLCtEQUFoQyxDQUFqQjtBQUNBSixNQUFJLEdBQUcsSUFBSUUsMkNBQUosQ0FBU0QsUUFBVCxDQUFQO0FBQ0E7QUFFRDs7O0FBQ2VELG1FQUFmIiwiZmlsZSI6Ii4vZXRoZXJldW0vd2ViMy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXZWIzIGZyb20gXCJ3ZWIzXCI7XG5cbmxldCB3ZWIzO1xuXG4vKiAtLS0gQ2hlY2sgaWYgbWV0YW1hc2sgaXMgYmVpbmcgdXNlZCAvIEpTIGlzIGNsaWVudC1zaWRlIC0tLSAqL1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cud2ViMyAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0Ly8gcnVubmluZyBjbGllbnQtc2lkZSB3aXRoIG1ldGFtYXNrXG5cdHdlYjMgPSBuZXcgV2ViMyh3aW5kb3cuZXRoZXJldW0pO1xuXHR3aW5kb3cuZXRoZXJldW0uZW5hYmxlKCk7XG59IGVsc2Uge1xuXHQvLyBydW5uaW5nIHNlcnZlci1zaWRlIG9yIHdpdGhvdXQgbWV0YW1hc2tcblx0Y29uc3QgcHJvdmlkZXIgPSBuZXcgV2ViMy5wcm92aWRlcnMuSHR0cFByb3ZpZGVyKFwiaHR0cHM6Ly9yaW5rZWJ5LmluZnVyYS5pby92My9iNzNjZmNlOGQwZjE0Yzk1ODBhNmY2M2Y1MTc1MTU3ZFwiKTtcblx0d2ViMyA9IG5ldyBXZWIzKHByb3ZpZGVyKTtcbn1cblxuLyogLS0tIEV4cG9ydGluZyB0aGUgZ2VuZXJhdGVkIHdlYjMgaW5zdGFuY2UgZm9yIHVzZSAtLS0gKi9cbmV4cG9ydCBkZWZhdWx0IHdlYjM7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./ethereum/web3.js\n");

/***/ }),

/***/ "./pages/intellectualproperty/register.js":
/*!************************************************!*\
  !*** ./pages/intellectualproperty/register.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/RegisterIP.module.css */ \"./styles/RegisterIP.module.css\");\n/* harmony import */ var _styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ethereum/web3 */ \"./ethereum/web3.js\");\n\nvar _jsxFileName = \"/Users/deepaksng00/Documents/intellectual-property-dapp/pages/intellectualproperty/register.js\";\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nclass RegisterIP extends react__WEBPACK_IMPORTED_MODULE_1__[\"Component\"] {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      addresses: '',\n      select: ''\n    });\n  }\n\n  async componentDidMount() {\n    const addresses = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__[\"default\"].eth.getAccounts();\n    this.setState({\n      addresses\n    });\n  }\n\n  render() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main_grid_container,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n          className: _styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.grid_item,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_routes__WEBPACK_IMPORTED_MODULE_4__[\"Link\"], {\n            route: \"/\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              href: \"#\",\n              children: \"Home\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 23,\n              columnNumber: 29\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 13\n          }, this), \" > \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_routes__WEBPACK_IMPORTED_MODULE_4__[\"Link\"], {\n            route: \"/intellectualproperty/register\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              href: \"#\",\n              children: \"Register\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 23,\n              columnNumber: 104\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 59\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n          className: [_styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.grid_item, _styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.section_form].join(\" \"),\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n            children: \"Intellectual Property Registration Form\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.label1,\n            children: \"Account: \"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            className: _styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.account,\n            type: \"text\",\n            placeholder: \"Text...\",\n            name: \"test\",\n            value: this.state.addresses,\n            readonly: true\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.label2,\n            children: \"Surname: \"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            className: _styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.surname,\n            type: \"text\",\n            placeholder: \"Text...\",\n            name: \"test\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.label3,\n            children: \"Type of IP: \"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.radioButtons,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n              type: \"radio\",\n              id: \"trademark\",\n              name: \"ip_type\",\n              value: \"trademark\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n              for: \"trademark\",\n              children: \"Trademark\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 34,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 34,\n              columnNumber: 55\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n              type: \"radio\",\n              id: \"patent\",\n              name: \"ip_type\",\n              value: \"patent\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 35,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n              for: \"patent\",\n              children: \"Patent\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 36,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 36,\n              columnNumber: 49\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n              type: \"radio\",\n              id: \"design\",\n              name: \"ip_type\",\n              value: \"design\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 37,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n              for: \"design\",\n              children: \"Design\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 38,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.label4,\n            children: \"File: \"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            className: _styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.file,\n            type: \"file\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            type: \"submit\",\n            children: \"Register\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RegisterIP);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbnRlbGxlY3R1YWxwcm9wZXJ0eS9yZWdpc3Rlci5qcz85NTRmIl0sIm5hbWVzIjpbIlJlZ2lzdGVySVAiLCJDb21wb25lbnQiLCJhZGRyZXNzZXMiLCJzZWxlY3QiLCJjb21wb25lbnREaWRNb3VudCIsIndlYjMiLCJldGgiLCJnZXRBY2NvdW50cyIsInNldFN0YXRlIiwicmVuZGVyIiwic3R5bGUiLCJtYWluX2dyaWRfY29udGFpbmVyIiwiZ3JpZF9pdGVtIiwic2VjdGlvbl9mb3JtIiwiam9pbiIsImxhYmVsMSIsImFjY291bnQiLCJzdGF0ZSIsImxhYmVsMiIsInN1cm5hbWUiLCJsYWJlbDMiLCJyYWRpb0J1dHRvbnMiLCJsYWJlbDQiLCJmaWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxVQUFOLFNBQXlCQywrQ0FBekIsQ0FBbUM7QUFBQTtBQUFBOztBQUFBLG1DQUN6QjtBQUNOQyxlQUFTLEVBQUUsRUFETDtBQUVOQyxZQUFNLEVBQUU7QUFGRixLQUR5QjtBQUFBOztBQU1qQyxRQUFNQyxpQkFBTixHQUEwQjtBQUN4QixVQUFNRixTQUFTLEdBQUcsTUFBTUcsc0RBQUksQ0FBQ0MsR0FBTCxDQUFTQyxXQUFULEVBQXhCO0FBQ0EsU0FBS0MsUUFBTCxDQUFjO0FBQUVOO0FBQUYsS0FBZDtBQUNEOztBQUVETyxRQUFNLEdBQUc7QUFDUCx3QkFDRSxxRUFBQywwREFBRDtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBRUMsb0VBQUssQ0FBQ0MsbUJBQXRCO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFFRCxvRUFBSyxDQUFDRSxTQUF0QjtBQUFBLGtDQUNFLHFFQUFDLDRDQUFEO0FBQU0saUJBQUssRUFBQyxHQUFaO0FBQUEsbUNBQWdCO0FBQUcsa0JBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWhCO0FB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O0FBQUE7QUFBQSxrQkFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQTRCRDs7QUF4Q2dDOztBQTJDcEJ2Qix5RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2ludGVsbGVjdHVhbHByb3BlcnR5L3JlZ2lzdGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uLy4uL3N0eWxlcy9SZWdpc3RlcklQLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiLi4vLi4vcm91dGVzXCI7XG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vLi4vZXRoZXJldW0vd2ViM1wiO1xuXG5jbGFzcyBSZWdpc3RlcklQIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgYWRkcmVzc2VzOiAnJyxcbiAgICBzZWxlY3Q6ICcnXG4gIH1cblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBhZGRyZXNzZXMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBhZGRyZXNzZXMgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5tYWluX2dyaWRfY29udGFpbmVyfT5cbiAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGUuZ3JpZF9pdGVtfT5cbiAgICAgICAgICAgIDxMaW5rIHJvdXRlPVwiL1wiPjxhIGhyZWY9XCIjXCI+SG9tZTwvYT48L0xpbms+ID4gPExpbmsgcm91dGU9XCIvaW50ZWxsZWN0dWFscHJvcGVydHkvcmVnaXN0ZXJcIj48YSBocmVmPVwiI1wiPlJlZ2lzdGVyPC9hPjwvTGluaz5cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e1tzdHlsZS5ncmlkX2l0ZW0sIHN0eWxlLnNlY3Rpb25fZm9ybV0uam9pbihcIiBcIil9PlxuICAgICAgICAgICAgPGgyPkludGVsbGVjdHVhbCBQcm9wZXJ0eSBSZWdpc3RyYXRpb24gRm9ybTwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlLmxhYmVsMX0+QWNjb3VudDogPC9wPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGUuYWNjb3VudH0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlRleHQuLi5cIiBuYW1lPVwidGVzdFwiIHZhbHVlPXt0aGlzLnN0YXRlLmFkZHJlc3Nlc30gcmVhZG9ubHkvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZS5sYWJlbDJ9PlN1cm5hbWU6IDwvcD5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlLnN1cm5hbWV9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJUZXh0Li4uXCIgbmFtZT1cInRlc3RcIi8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlLmxhYmVsM30+VHlwZSBvZiBJUDogPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnJhZGlvQnV0dG9uc30+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cInRyYWRlbWFya1wiIG5hbWU9XCJpcF90eXBlXCIgdmFsdWU9XCJ0cmFkZW1hcmtcIi8+XG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0cmFkZW1hcmtcIj5UcmFkZW1hcms8L2xhYmVsPjxici8+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cInBhdGVudFwiIG5hbWU9XCJpcF90eXBlXCIgdmFsdWU9XCJwYXRlbnRcIi8+XG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXRlbnRcIj5QYXRlbnQ8L2xhYmVsPjxici8+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cImRlc2lnblwiIG5hbWU9XCJpcF90eXBlXCIgdmFsdWU9XCJkZXNpZ25cIi8+XG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkZXNpZ25cIj5EZXNpZ248L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlLmxhYmVsNH0+RmlsZTogPC9wPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGUuZmlsZX0gdHlwZT1cImZpbGVcIi8+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5SZWdpc3RlcjwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVySVA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/intellectualproperty/register.js\n");

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const routes = __webpack_require__(/*! next-routes */ \"next-routes\")();\n\nmodule.exports = routes;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yb3V0ZXMuanM/ZjFjMSJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLGdDQUFELENBQVAsRUFBZjs7QUFFQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCSCxNQUFqQiIsImZpbGUiOiIuL3JvdXRlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJvdXRlcyA9IHJlcXVpcmUoXCJuZXh0LXJvdXRlc1wiKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./routes.js\n");

/***/ }),

/***/ "./styles/Layout.module.css":
/*!**********************************!*\
  !*** ./styles/Layout.module.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"main_container\": \"Layout_main_container__3IGjV\",\n\t\"header\": \"Layout_header__BNCMR\",\n\t\"title\": \"Layout_title__9r3ai\",\n\t\"footer\": \"Layout_footer__3-iLi\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvTGF5b3V0Lm1vZHVsZS5jc3M/YTUxNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3N0eWxlcy9MYXlvdXQubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1haW5fY29udGFpbmVyXCI6IFwiTGF5b3V0X21haW5fY29udGFpbmVyX18zSUdqVlwiLFxuXHRcImhlYWRlclwiOiBcIkxheW91dF9oZWFkZXJfX0JOQ01SXCIsXG5cdFwidGl0bGVcIjogXCJMYXlvdXRfdGl0bGVfXzlyM2FpXCIsXG5cdFwiZm9vdGVyXCI6IFwiTGF5b3V0X2Zvb3Rlcl9fMy1pTGlcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/Layout.module.css\n");

/***/ }),

/***/ "./styles/RegisterIP.module.css":
/*!**************************************!*\
  !*** ./styles/RegisterIP.module.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"main_grid_container\": \"RegisterIP_main_grid_container__1u7yp\",\n\t\"grid_item\": \"RegisterIP_grid_item__1cea_\",\n\t\"section_form\": \"RegisterIP_section_form__2hPBJ\",\n\t\"label1\": \"RegisterIP_label1__1rBVW\",\n\t\"account\": \"RegisterIP_account__1xhY7\",\n\t\"label2\": \"RegisterIP_label2__8VDcJ\",\n\t\"surname\": \"RegisterIP_surname__255Ev\",\n\t\"radioButtons\": \"RegisterIP_radioButtons__jjrfh\",\n\t\"label3\": \"RegisterIP_label3__2hJQk\",\n\t\"file\": \"RegisterIP_file__2vGht\",\n\t\"label4\": \"RegisterIP_label4__3dheJ\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvUmVnaXN0ZXJJUC5tb2R1bGUuY3NzPzU2M2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3N0eWxlcy9SZWdpc3RlcklQLm1vZHVsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtYWluX2dyaWRfY29udGFpbmVyXCI6IFwiUmVnaXN0ZXJJUF9tYWluX2dyaWRfY29udGFpbmVyX18xdTd5cFwiLFxuXHRcImdyaWRfaXRlbVwiOiBcIlJlZ2lzdGVySVBfZ3JpZF9pdGVtX18xY2VhX1wiLFxuXHRcInNlY3Rpb25fZm9ybVwiOiBcIlJlZ2lzdGVySVBfc2VjdGlvbl9mb3JtX18yaFBCSlwiLFxuXHRcImxhYmVsMVwiOiBcIlJlZ2lzdGVySVBfbGFiZWwxX18xckJWV1wiLFxuXHRcImFjY291bnRcIjogXCJSZWdpc3RlcklQX2FjY291bnRfXzF4aFk3XCIsXG5cdFwibGFiZWwyXCI6IFwiUmVnaXN0ZXJJUF9sYWJlbDJfXzhWRGNKXCIsXG5cdFwic3VybmFtZVwiOiBcIlJlZ2lzdGVySVBfc3VybmFtZV9fMjU1RXZcIixcblx0XCJyYWRpb0J1dHRvbnNcIjogXCJSZWdpc3RlcklQX3JhZGlvQnV0dG9uc19fampyZmhcIixcblx0XCJsYWJlbDNcIjogXCJSZWdpc3RlcklQX2xhYmVsM19fMmhKUWtcIixcblx0XCJmaWxlXCI6IFwiUmVnaXN0ZXJJUF9maWxlX18ydkdodFwiLFxuXHRcImxhYmVsNFwiOiBcIlJlZ2lzdGVySVBfbGFiZWw0X18zZGhlSlwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/RegisterIP.module.css\n");

/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-routes\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJvdXRlc1wiPzBkNGYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC1yb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJvdXRlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-routes\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"web3\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3ZWIzXCI/NjFiNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2ViM1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///web3\n");

/***/ })

/******/ });