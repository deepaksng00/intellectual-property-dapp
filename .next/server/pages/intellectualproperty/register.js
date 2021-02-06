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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/RegisterIP.module.css */ \"./styles/RegisterIP.module.css\");\n/* harmony import */ var _styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ethereum/web3 */ \"./ethereum/web3.js\");\n\nvar _jsxFileName = \"/Users/deepaksng00/Documents/intellectual-property-dapp/pages/intellectualproperty/register.js\";\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nclass RegisterIP extends react__WEBPACK_IMPORTED_MODULE_1__[\"Component\"] {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      addresses: '',\n      timestamp: ''\n    });\n  }\n\n  async componentDidMount() {\n    const addresses = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__[\"default\"].eth.getAccounts();\n    this.setState({\n      addresses\n    });\n    const currentTime = new Date();\n    const timestamp = ('0' + currentTime.getDate()).slice(-2) + \"-\" + ('0' + (currentTime.getMonth() + 1)).slice(-2) + \"-\" + currentTime.getFullYear();\n    this.setState({\n      timestamp\n    });\n  }\n\n  render() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main_grid_container,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n          className: _styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.grid_item,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_routes__WEBPACK_IMPORTED_MODULE_4__[\"Link\"], {\n            route: \"/\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              href: \"#\",\n              children: \"Home\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 26,\n              columnNumber: 29\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 13\n          }, this), \" > \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_routes__WEBPACK_IMPORTED_MODULE_4__[\"Link\"], {\n            route: \"/intellectualproperty/register\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              href: \"#\",\n              children: \"Register\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 26,\n              columnNumber: 104\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 59\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n          className: [_styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.grid_item, _styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.section_form].join(\" \"),\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n            children: \"Intellectual Property Registration Form\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.label1,\n            children: \"Account: \"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            className: _styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.account,\n            type: \"text\",\n            placeholder: \"Text...\",\n            name: \"test\",\n            value: this.state.addresses,\n            readonly: true\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.label2,\n            children: \"Date: \"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            className: _styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.surname,\n            type: \"text\",\n            placeholder: \"Text...\",\n            name: \"test\",\n            value: this.state.timestamp,\n            readonly: true\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.label3,\n            children: \"Type of IP: \"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.radioButtons,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n              type: \"radio\",\n              id: \"trademark\",\n              name: \"ip_type\",\n              value: \"trademark\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 36,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n              for: \"trademark\",\n              children: \"Trademark\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 37,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 37,\n              columnNumber: 55\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n              type: \"radio\",\n              id: \"patent\",\n              name: \"ip_type\",\n              value: \"patent\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 38,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n              for: \"patent\",\n              children: \"Patent\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 49\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n              type: \"radio\",\n              id: \"design\",\n              name: \"ip_type\",\n              value: \"design\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 40,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n              for: \"design\",\n              children: \"Design\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 41,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.label4,\n            children: \"File: \"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            className: _styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.file,\n            type: \"file\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            type: \"submit\",\n            children: \"Register\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RegisterIP);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbnRlbGxlY3R1YWxwcm9wZXJ0eS9yZWdpc3Rlci5qcz85NTRmIl0sIm5hbWVzIjpbIlJlZ2lzdGVySVAiLCJDb21wb25lbnQiLCJhZGRyZXNzZXMiLCJ0aW1lc3RhbXAiLCJjb21wb25lbnREaWRNb3VudCIsIndlYjMiLCJldGgiLCJnZXRBY2NvdW50cyIsInNldFN0YXRlIiwiY3VycmVudFRpbWUiLCJEYXRlIiwiZ2V0RGF0ZSIsInNsaWNlIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsInJlbmRlciIsInN0eWxlIiwibWFpbl9ncmlkX2NvbnRhaW5lciIsImdyaWRfaXRlbSIsInNlY3Rpb25fZm9ybSIsImpvaW4iLCJsYWJlbDEiLCJhY2NvdW50Iiwic3RhdGUiLCJsYWJlbDIiLCJzdXJuYW1lIiwibGFiZWwzIiwicmFkaW9CdXR0b25zIiwibGFiZWw0IiwiZmlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsVUFBTixTQUF5QkMsK0NBQXpCLENBQW1DO0FBQUE7QUFBQTs7QUFBQSxtQ0FDekI7QUFDTkMsZUFBUyxFQUFFLEVBREw7QUFFTkMsZUFBUyxFQUFFO0FBRkwsS0FEeUI7QUFBQTs7QUFNakMsUUFBTUMsaUJBQU4sR0FBMEI7QUFDeEIsVUFBTUYsU0FBUyxHQUFHLE1BQU1HLHNEQUFJLENBQUNDLEdBQUwsQ0FBU0MsV0FBVCxFQUF4QjtBQUNBLFNBQUtDLFFBQUwsQ0FBYztBQUFFTjtBQUFGLEtBQWQ7QUFDQSxVQUFNTyxXQUFXLEdBQUcsSUFBSUMsSUFBSixFQUFwQjtBQUNBLFVBQU1QLFNBQVMsR0FBRyxDQUFDLE1BQU1NLFdBQVcsQ0FBQ0UsT0FBWixFQUFQLEVBQThCQyxLQUE5QixDQUFvQyxDQUFDLENBQXJDLElBQTBDLEdBQTFDLEdBQWdELENBQUMsT0FBT0gsV0FBVyxDQUFDSSxRQUFaLEtBQXlCLENBQWhDLENBQUQsRUFBcUNELEtBQXJDLENBQTJDLENBQUMsQ0FBNUMsQ0FBaEQsR0FBaUcsR0FBakcsR0FBdUdILFdBQVcsQ0FBQ0ssV0FBWixFQUF6SDtBQUNBLFNBQUtOLFFBQUwsQ0FBYztBQUFFTDtBQUFGLEtBQWQ7QUFDRDs7QUFFRFksUUFBTSxHQUFHO0FBQ1Asd0JBQ0UscUVBQUMsMERBQUQ7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUVDLG9FQUFLLENBQUNDLG1CQUF0QjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBRUQsb0VBQUssQ0FBQ0UsU0FBdEI7QUFBQSxrQ0FDRSxxRUFBQyw0Q0FBRDtBQUFNLGlCQUFLLEVBQUMsR0FBWjtBQUFBLG1DQUFnQjtBQUFHLGtCQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLHNCQUNnRCxxRUFBQyw0Q0FBRDtBQUFNLGlCQUFLLEVBQUMsZ0NBQVo7QUFBQSxtQ0FBNkM7QUFBRyxrQkFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBSUU7QUFBTSxtQkFBUyxFQUFFLENBQUNGLG9FQUFLLENBQUNFLFNBQVAsRUFBa0JGLG9FQUFLLENBQUNHLFlBQXhCLEVBQXNDQyxJQUF0QyxDQUEyQyxHQUEzQyxDQUFqQjtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBRyxxQkFBUyxFQUFFSixvRUFBSyxDQUFDSyxNQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRixlQUdFO0FBQU8scUJBQVMsRUFBRUwsb0VBQUssQ0FBQ00sT0FBeEI7QUFBaUMsZ0JBQUksRUFBQyxNQUF0QztBQUE2Qyx1QkFBVyxFQUFDLFNBQXpEO0FBQW1FLGdCQUFJLEVBQUMsTUFBeEU7QUFBK0UsaUJBQUssRUFBRSxLQUFLQyxLQUFMLENBQVdyQixTQUFqRztBQUE0RyxvQkFBUTtBQUFwSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhGLGVBSUU7QUFBRyxxQkFBUyxFQUFFYyxvRUFBSyxDQUFDUSxNQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKRixlQUtFO0FBQU8scUJBQVMsRUFBRVIsb0VBQUssQ0FBQ1MsT0FBeEI7QUFBaUMsZ0JBQUksRUFBQyxNQUF0QztBQUE2Qyx1QkFBVyxFQUFDLFNBQXpEO0FBQW1FLGdCQUFJLEVBQUMsTUFBeEU7QUFBK0UsaUJBQUssRUFBRSxLQUFLRixLQUFMLENBQVdwQixTQUFqRztBQUE0RyxvQkFBUTtBQUFwSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxGLGVBTUU7QUFBRyxxQkFBUyxFQUFFYSxvRUFBSyxDQUFDVSxNQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFORixlQU9FO0FBQUsscUJBQVMsRUFBRVYsb0VBQUssQ0FBQ1csWUFBdEI7QUFBQSxvQ0FDRTtBQUFPLGtCQUFJLEVBQUMsT0FBWjtBQUFvQixnQkFBRSxFQUFDLFdBQXZCO0FBQW1DLGtCQUFJLEVBQUMsU0FBeEM7QUFBa0QsbUJBQUssRUFBQztBQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBRUU7QUFBTyxpQkFBRyxFQUFDLFdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkYsZUFFMEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGMUMsZUFHRTtBQUFPLGtCQUFJLEVBQUMsT0FBWjtBQUFvQixnQkFBRSxFQUFDLFFBQXZCO0FBQWdDLGtCQUFJLEVBQUMsU0FBckM7QUFBK0MsbUJBQUssRUFBQztBQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhGLGVBSUU7QUFBTyxpQkFBRyxFQUFDLFFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSkYsZUFJb0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKcEMsZUFLRTtBQUFPLGtCQUFJLEVBQUMsT0FBWjtBQUFvQixnQkFBRSxFQUFDLFFBQXZCO0FBQWdDLGtCQUFJLEVBQUMsU0FBckM7QUFBK0MsbUJBQUssRUFBQztBQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUxGLGVBTUU7QUFBTyxpQkFBRyxFQUFDLFFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVBGLGVBZUU7QUFBRyxxQkFBUyxFQUFFWCxvRUFBSyxDQUFDWSxNQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFmRixlQWdCRTtBQUFPLHFCQUFTLEVBQUVaLG9FQUFLLENBQUNhLElBQXhCO0FBQThCLGdCQUFJLEVBQUM7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFoQkYsZUFpQkU7QUFBUSxnQkFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUE0QkQ7O0FBM0NnQzs7QUE4Q3BCN0IseUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbnRlbGxlY3R1YWxwcm9wZXJ0eS9yZWdpc3Rlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHN0eWxlIGZyb20gXCIuLi8uLi9zdHlsZXMvUmVnaXN0ZXJJUC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcIi4uLy4uL3JvdXRlc1wiO1xuaW1wb3J0IHdlYjMgZnJvbSBcIi4uLy4uL2V0aGVyZXVtL3dlYjNcIjtcblxuY2xhc3MgUmVnaXN0ZXJJUCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGFkZHJlc3NlczogJycsXG4gICAgdGltZXN0YW1wOiAnJ1xuICB9XG5cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgYWRkcmVzc2VzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgYWRkcmVzc2VzIH0pO1xuICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCB0aW1lc3RhbXAgPSAoJzAnICsgY3VycmVudFRpbWUuZ2V0RGF0ZSgpKS5zbGljZSgtMikgKyBcIi1cIiArICgnMCcgKyAoY3VycmVudFRpbWUuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMikgKyBcIi1cIiArIGN1cnJlbnRUaW1lLmdldEZ1bGxZZWFyKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRpbWVzdGFtcCB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLm1haW5fZ3JpZF9jb250YWluZXJ9PlxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZS5ncmlkX2l0ZW19PlxuICAgICAgICAgICAgPExpbmsgcm91dGU9XCIvXCI+PGEgaHJlZj1cIiNcIj5Ib21lPC9hPjwvTGluaz4gPiA8TGluayByb3V0ZT1cIi9pbnRlbGxlY3R1YWxwcm9wZXJ0eS9yZWdpc3RlclwiPjxhIGhyZWY9XCIjXCI+UmVnaXN0ZXI8L2E+PC9MaW5rPlxuICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17W3N0eWxlLmdyaWRfaXRlbSwgc3R5bGUuc2VjdGlvbl9mb3JtXS5qb2luKFwiIFwiKX0+XG4gICAgICAgICAgICA8aDI+SW50ZWxsZWN0dWFsIFByb3BlcnR5IFJlZ2lzdHJhdGlvbiBGb3JtPC9oMj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGUubGFiZWwxfT5BY2NvdW50OiA8L3A+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZS5hY2NvdW50fSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVGV4dC4uLlwiIG5hbWU9XCJ0ZXN0XCIgdmFsdWU9e3RoaXMuc3RhdGUuYWRkcmVzc2VzfSByZWFkb25seS8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlLmxhYmVsMn0+RGF0ZTogPC9wPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGUuc3VybmFtZX0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlRleHQuLi5cIiBuYW1lPVwidGVzdFwiIHZhbHVlPXt0aGlzLnN0YXRlLnRpbWVzdGFtcH0gcmVhZG9ubHkvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZS5sYWJlbDN9PlR5cGUgb2YgSVA6IDwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5yYWRpb0J1dHRvbnN9PlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJ0cmFkZW1hcmtcIiBuYW1lPVwiaXBfdHlwZVwiIHZhbHVlPVwidHJhZGVtYXJrXCIvPlxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidHJhZGVtYXJrXCI+VHJhZGVtYXJrPC9sYWJlbD48YnIvPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJwYXRlbnRcIiBuYW1lPVwiaXBfdHlwZVwiIHZhbHVlPVwicGF0ZW50XCIvPlxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicGF0ZW50XCI+UGF0ZW50PC9sYWJlbD48YnIvPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJkZXNpZ25cIiBuYW1lPVwiaXBfdHlwZVwiIHZhbHVlPVwiZGVzaWduXCIvPlxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGVzaWduXCI+RGVzaWduPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZS5sYWJlbDR9PkZpbGU6IDwvcD5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlLmZpbGV9IHR5cGU9XCJmaWxlXCIvPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+UmVnaXN0ZXI8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlcklQO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/intellectualproperty/register.js\n");

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