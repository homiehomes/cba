(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["cba"] = factory();
	else
		root["cba"] = root["cba"] || {}, root["cba"]["cba"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!************************!*\
  !*** ./src/js/_cba.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cba: () => (/* binding */ cba)
/* harmony export */ });
/*!
 * cba.js – Checkbox All Utility
 * Version: 1.0.9
 * Author: Homero Cavazos
 * GitHub: https://github.com/homiehomes
 * License: MIT
 * Website: https://homiehomes.dev
 *
 * Description:
 * A lightweight JavaScript helper for managing checkbox groups.
 * Allows a single "All" checkbox to toggle the state of all other
 * checkboxes within a specified fieldset.
 *
 * Usage:
 *
 *   // HTML
 *
 *   <input name="group1[]" value="All" type="checkbox"> All
 *   <input name="group1[]" value="Option 1" type="checkbox"> Option 1
 *   <input name="group1[]" value="Option 2" type="checkbox"> Option 2
 *
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
 *   // Event Listeners
 *.  // When all are checked
 *   document.querySelector('input[name="group1[]"][value="all"]')
 *       .addEventListener('cba:allChecked', (e) => {
 *           console.log('All checked for:', e.detail.fieldset);
 *       });
 *
 *   // When count of checked changes
 *   document.querySelector('input[name="group1[]"]')
 *       .addEventListener('cba:checkedDetails', (e) => {
 *           console.log('Count checked for:', e.detail.checkedCount);
 *       });
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
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
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
      selectAllValue: "all",
      associatedLabels: false
    }, opts);

    // Select checkboxes
    this.masterCheckbox = document.querySelector("input[name=\"".concat(this.settings.fieldset, "[]\"][value=\"").concat(this.settings.selectAllValue, "\"]"));
    this.allCheckboxes = document.querySelectorAll("input[name=\"".concat(this.settings.fieldset, "[]\"]:not([value=\"").concat(this.settings.selectAllValue, "\"])"));
    var allLabels = this.settings.associatedLabels === true ? this.getLabels() : undefined;
    if (!this.masterCheckbox) {
      if (this.settings.debug) {
        console.warn("cba: No \"All\" checkbox found for fieldset \"".concat(fieldset, "\"."));
      }
      return;
    }

    // Event Listeners
    this.allCheckedEvent = new CustomEvent("cba:allChecked", {
      detail: _objectSpread({
        fieldset: this.settings.fieldset,
        checkboxes: this.allCheckboxes,
        count: this.allCheckboxes.length,
        values: _toConsumableArray(this.allCheckboxes).map(function (cb) {
          return cb.value;
        }) || []
      }, this.settings.associatedLabels === true ? {
        labels: allLabels
      } : {})
    });
    // Note: countCheckedEvent is now created dynamically in updateAllCheckboxes with the current count

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
    key: "getLabels",
    value: function getLabels() {
      return Array.from(this.allCheckboxes).map(function (cb) {
        var parent = cb.parentElement;
        if (parent.tagName.toLowerCase() === "label") {
          return parent.textContent.trim();
        } else {
          var label = document.querySelector("label[for=\"".concat(cb.id, "\"]"));
          return label ? label.textContent.trim() : "";
        }
      });
    }
  }, {
    key: "areAllCheckboxesChecked",
    value: function areAllCheckboxesChecked() {
      return _toConsumableArray(this.allCheckboxes).every(function (cb) {
        return cb.checked;
      });
    }
  }, {
    key: "toggleAllCheckboxes",
    value: function toggleAllCheckboxes(checked) {
      this.allCheckboxes.forEach(function (cb) {
        return cb.checked = checked;
      });
      if (this.areAllCheckboxesChecked()) {
        this.masterCheckbox.dispatchEvent(this.allCheckedEvent);
      } else {
        this.masterCheckbox.dispatchEvent(new CustomEvent("cba:checkedDetails", {
          detail: {
            fieldset: this.settings.fieldset,
            count: 0,
            values: [],
            labels: []
          }
        }));
      }
    }
  }, {
    key: "updateAllCheckboxes",
    value: function updateAllCheckboxes() {
      var checked = Array.from(this.allCheckboxes).filter(function (cb) {
        return cb.checked;
      });
      var checkedCount = checked.length;
      var checkedValues = checked.map(function (cb) {
        return cb.value;
      });
      var totalCount = this.allCheckboxes.length;
      var checkedLabels;
      if (this.settings.associatedLabels === true) {
        checkedLabels = checked.map(function (cb) {
          var parent = cb.parentElement;
          if (parent.tagName.toLowerCase() === "label") {
            return parent.textContent.trim();
          } else {
            var label = document.querySelector("label[for=\"".concat(cb.id, "\"]"));
            return label ? label.textContent.trim() : "";
          }
        });
      }
      if (checkedCount === 0) {
        this.masterCheckbox.checked = false;
        this.masterCheckbox.indeterminate = false;
        this.masterCheckbox.classList.remove("indeterminate");
        this.masterCheckbox.dispatchEvent(new CustomEvent("cba:checkedDetails", {
          detail: _objectSpread({
            fieldset: this.settings.fieldset,
            count: 0,
            values: []
          }, this.settings.associatedLabels === true ? {
            labels: []
          } : {})
        }));
      } else if (checkedCount === totalCount) {
        this.masterCheckbox.checked = true;
        this.masterCheckbox.indeterminate = false;
        this.masterCheckbox.classList.remove("indeterminate");
        // Dispatch custom event when all are checked
        this.masterCheckbox.dispatchEvent(this.allCheckedEvent);
      } else {
        this.masterCheckbox.checked = false;
        this.masterCheckbox.indeterminate = true;
        this.masterCheckbox.classList.add("indeterminate");
        // Dispatch custom event with current checked count
        this.masterCheckbox.dispatchEvent(new CustomEvent("cba:checkedDetails", {
          detail: _objectSpread({
            fieldset: this.settings.fieldset,
            count: checkedCount,
            values: checkedValues
          }, this.settings.associatedLabels === true ? {
            labels: checkedLabels
          } : {})
        }));
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
      document.querySelectorAll("input[value=\"".concat(opts.select || "All", "\"]")).forEach(function (master) {
        var fieldsetName = master.getAttribute("name").replace("[]", "");
        new cba(fieldsetName, opts);
      });
    }
  }]);
}(); // Attach to window for UMD/global usage
if (typeof window !== "undefined") {
  window.cba = cba;
}

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=cba.umd.js.map