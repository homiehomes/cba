/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_cba.js":
/*!************************!*\
  !*** ./src/js/_cba.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cba: () => (/* binding */ cba)
/* harmony export */ });
/*!
 * cba.js – Checkbox All Utility
 * Version: 1.0.0
 * Author: Homero Cavazos
 * GitHub: https://github.com/homiehomes
 *
 * Description:
 * A lightweight JavaScript helper for managing checkbox groups. 
 * Allows a single "All" checkbox to toggle the state of all other 
 * checkboxes within a specified fieldset.
 *
 * Usage:
 *   // Explicit per fieldset
 *   new cba('type');
 *   new cba('labor-type');
 *   
 *   // Auto-detect all groups
 *   cba.initAll();
 *
 *   // Initialize with custom options
 *   new cba('type', { debug: true });
 *
 * Notes:
 * - Expects a checkbox with value="All" in each group.
 * - Other checkboxes must share the same name with [] notation.
 */



function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var cba = /*#__PURE__*/function () {
  function cba(fieldset) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, cba);
    if (!fieldset) {
      throw new Error("cba: You must provide a fieldset name.");
    }

    // Settings
    this.settings = Object.assign({
      debug: false,
      fieldset: fieldset,
      select: 'all'
    }, opts);

    // Select checkboxes
    this.masterCheckbox = document.querySelector("input[name=\"".concat(this.settings.fieldset, "[]\"][value=\"").concat(this.settings.select, "\"]"));
    this.allCheckboxes = document.querySelectorAll("input[name=\"".concat(this.settings.fieldset, "[]\"]:not([value=\"").concat(this.settings.select, "\"])"));
    if (!this.masterCheckbox) {
      if (this.settings.debug) {
        console.warn("cba: No \"All\" checkbox found for fieldset \"".concat(fieldset, "\"."));
      }
      return;
    }

    // Auto-init
    this.init();
  }
  return _createClass(cba, [{
    key: "setOpts",
    value: function setOpts() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      Object.assign(this.settings, opts);
    }
  }, {
    key: "toggleAllCheckboxes",
    value: function toggleAllCheckboxes(checked) {
      this.allCheckboxes.forEach(function (cb) {
        return cb.checked = checked;
      });
    }
  }, {
    key: "updateAllCheckboxes",
    value: function updateAllCheckboxes() {
      var checkedCount = _toConsumableArray(this.allCheckboxes).filter(function (cb) {
        return cb.checked;
      }).length;
      var totalCount = this.allCheckboxes.length;
      if (checkedCount === 0) {
        this.masterCheckbox.checked = false;
        this.masterCheckbox.indeterminate = false;
        this.masterCheckbox.classList.remove("indeterminate");
      } else if (checkedCount === totalCount) {
        this.masterCheckbox.checked = true;
        this.masterCheckbox.indeterminate = false;
        this.masterCheckbox.classList.remove("indeterminate");
      } else {
        this.masterCheckbox.checked = false;
        this.masterCheckbox.indeterminate = true;
        this.masterCheckbox.classList.add("indeterminate");
      }
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;
      if (this.settings.debug) {
        console.log("cba: Initialized for fieldset \"".concat(this.settings.fieldset, "\"."));
      }
      // Master checkbox toggles group
      this.masterCheckbox.addEventListener("change", function () {
        _this.toggleAllCheckboxes(_this.masterCheckbox.checked);
      });

      // Group checkboxes update master state
      this.allCheckboxes.forEach(function (cb) {
        cb.addEventListener("change", function () {
          return _this.updateAllCheckboxes();
        });
      });

      // Initialize correct state
      this.updateAllCheckboxes();
    }

    // 🔹 Auto-detect method
  }], [{
    key: "initAll",
    value: function initAll() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      document.querySelectorAll("input[value=\"".concat(opts.select || 'All', "\"]")).forEach(function (master) {
        var fieldsetName = master.getAttribute("name").replace("[]", "");
        new cba(fieldsetName, opts);
      });
    }
  }]);
}();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cba__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cba */ "./src/js/_cba.js");

document.addEventListener('DOMContentLoaded', function () {
  _cba__WEBPACK_IMPORTED_MODULE_0__.cba.initAll({
    select: 'All'
  });
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map