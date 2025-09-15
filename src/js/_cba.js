/*!
 * cba.js – Checkbox All Utility
 * Version: 1.0.5
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
 *       .addEventListener('cba:countChecked', (e) => {
 *           console.log('Count checked for:', e.detail.checkedCount);
 *       });
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
        selectAllValue: 'all'
      },
      opts
    );

    // Select checkboxes
    this.masterCheckbox = document.querySelector(
      `input[name="${this.settings.fieldset}[]"][value="${this.settings.selectAllValue}"]`
    );
    this.allCheckboxes = document.querySelectorAll(
      `input[name="${this.settings.fieldset}[]"]:not([value="${this.settings.selectAllValue}"])`
    );

    if (!this.masterCheckbox) {
      if (this.settings.debug) {
        console.warn(`cba: No "All" checkbox found for fieldset "${fieldset}".`);
      }
      return;
    }

    // Event Listeners
    this.allCheckedEvent = new CustomEvent('cba:allChecked', {
      detail: {
        fieldset: this.settings.fieldset,
        checkboxes: this.allCheckboxes
      }
    });
    // Note: countCheckedEvent is now created dynamically in updateAllCheckboxes with the current count

    // Auto-init
    this.init();
  }

  setOpts(opts = {}) {
    Object.assign(this.settings, opts);
  }


  areAllCheckboxesChecked() {
    return [...this.allCheckboxes].every(cb => cb.checked);
  }

  toggleAllCheckboxes(checked) {
    this.allCheckboxes.forEach(cb => (cb.checked = checked));

    if (this.areAllCheckboxesChecked()) {
      this.masterCheckbox.dispatchEvent(this.allCheckedEvent);
    }
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
      // Dispatch custom event when all are checked
      this.masterCheckbox.dispatchEvent(this.allCheckedEvent);
    } else {
      this.masterCheckbox.checked = false;
      this.masterCheckbox.indeterminate = true;
      this.masterCheckbox.classList.add("indeterminate");
      // Dispatch custom event with current checked count
      this.masterCheckbox.dispatchEvent(
        new CustomEvent('cba:countChecked', {
          detail: {
            fieldset: this.settings.fieldset,
            checkedCount: checkedCount
          }
        })
      );
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
