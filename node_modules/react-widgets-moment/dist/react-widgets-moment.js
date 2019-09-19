/*! (c) 2014 - present: Jason Quense | https://github.com/jquense/react-widgets/blob/master/LICENSE.md */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var module = __webpack_require__(1);

if (typeof module === 'function') {
  module();
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = momentLocalizer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_widgets_lib_configure__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_widgets_lib_configure___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_widgets_lib_configure__);


if (typeof __WEBPACK_IMPORTED_MODULE_0_moment___default.a !== 'function') throw new TypeError('You must provide a valid moment object');
var localField = typeof __WEBPACK_IMPORTED_MODULE_0_moment___default()().locale === 'function' ? 'locale' : 'lang',
    hasLocaleData = !!__WEBPACK_IMPORTED_MODULE_0_moment___default.a.localeData;
if (!hasLocaleData) throw new TypeError('The Moment localizer depends on the `localeData` api, please provide a moment object v2.2.0 or higher');

function getMoment(culture, value, format) {
  return culture ? __WEBPACK_IMPORTED_MODULE_0_moment___default()(value, format, true)[localField](culture) : __WEBPACK_IMPORTED_MODULE_0_moment___default()(value, format, true);
}

function endOfDecade(date) {
  return __WEBPACK_IMPORTED_MODULE_0_moment___default()(date).add(10, 'year').add(-1, 'millisecond').toDate();
}

function endOfCentury(date) {
  return __WEBPACK_IMPORTED_MODULE_0_moment___default()(date).add(100, 'year').add(-1, 'millisecond').toDate();
}

function momentLocalizer() {
  var localizer = {
    formats: {
      date: 'L',
      time: 'LT',
      default: 'lll',
      header: 'MMMM YYYY',
      footer: 'LL',
      weekday: 'dd',
      dayOfMonth: 'DD',
      month: 'MMM',
      year: 'YYYY',
      decade: function decade(date, culture, localizer) {
        return localizer.format(date, 'YYYY', culture) + ' - ' + localizer.format(endOfDecade(date), 'YYYY', culture);
      },
      century: function century(date, culture, localizer) {
        return localizer.format(date, 'YYYY', culture) + ' - ' + localizer.format(endOfCentury(date), 'YYYY', culture);
      }
    },
    firstOfWeek: function firstOfWeek(culture) {
      return __WEBPACK_IMPORTED_MODULE_0_moment___default.a.localeData(culture).firstDayOfWeek();
    },
    parse: function parse(value, format, culture) {
      if (!value) return null;
      var m = getMoment(culture, value, format);
      if (m.isValid()) return m.toDate();
      return null;
    },
    format: function format(value, _format, culture) {
      return getMoment(culture, value).format(_format);
    }
  };
  __WEBPACK_IMPORTED_MODULE_1_react_widgets_lib_configure___default.a.setDateLocalizer(localizer);
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = window.moment;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = window.ReactWidgets;

/***/ })
/******/ ]);