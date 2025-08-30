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

"use strict";

class cba {
  constructor(fieldset, opts = {}) {
    if (!fieldset) {
      throw new Error("cba: You must provide a fieldset name.");
    }

    // Settings
    this.settings = Object.assign(
      {
        debug: false,
        fieldset: fieldset,
        select: 'all'
      },
      opts
    );

    // Select checkboxes
    this.masterCheckbox = document.querySelector(
      `input[name="${this.settings.fieldset}[]"][value="${this.settings.select}"]`
    );
    this.allCheckboxes = document.querySelectorAll(
      `input[name="${this.settings.fieldset}[]"]:not([value="${this.settings.select}"])`
    );

    if (!this.masterCheckbox) {
      if (this.settings.debug) {
        console.warn(`cba: No "All" checkbox found for fieldset "${fieldset}".`);
      }
      return;
    }

    // Auto-init
    this.init();
  }

  setOpts(opts = {}) {
    Object.assign(this.settings, opts);
  }

  toggleAllCheckboxes(checked) {
    this.allCheckboxes.forEach(cb => (cb.checked = checked));
  }

  updateAllCheckboxes() {
    const checkedCount = [...this.allCheckboxes].filter(cb => cb.checked).length;
    const totalCount = this.allCheckboxes.length;

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

  init() {
    if (this.settings.debug) {
        console.log(`cba: Initialized for fieldset "${this.settings.fieldset}".`);
      }
    // Master checkbox toggles group
    this.masterCheckbox.addEventListener("change", () => {
      this.toggleAllCheckboxes(this.masterCheckbox.checked);
    });

    // Group checkboxes update master state
    this.allCheckboxes.forEach(cb => {
      cb.addEventListener("change", () => this.updateAllCheckboxes());
    });

    // Initialize correct state
    this.updateAllCheckboxes();
  }

  // 🔹 Auto-detect method
  static initAll(opts = {}) {
    document.querySelectorAll(`input[value="${opts.select || 'All'}"]`).forEach(master => {
      const fieldsetName = master.getAttribute("name").replace("[]", "");      
      new cba(fieldsetName, opts);
    });
  }
}


// Attach to window for UMD/global usage
if (typeof window !== 'undefined') {
  window.cba = cba;
}

export { cba };
