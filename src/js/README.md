# CBA | JavaScript Checkbox Select-All Utility

A lightweight, dependency-free **Vanilla JavaScript helper** for managing checkbox groups.
CBA makes it easy to wire up a **“Select All” checkbox** that toggles the state of every other checkbox within a fieldset.

Perfect for forms, surveys, settings panels, or anywhere bulk checkbox selection is needed.

<br>


## 🚀 Installation

```
npm i @homiehomes/cba
```

<br>

## 📖 Usage

Instantiate CBA by assigning it to a group of checkboxes.

#### Explicit per fieldset
```
 new cba('group1');
 new cba('group2');
```

#### Auto-detect all groups

```
 cba.initAll();
```

#### With custom options

```
new cba('group1', { 
    debug: true, 
    selectAllValue: 'selectall' 
});
```

#### Options:
1. `debug` → Logs basic load messages to the console.
2. `selectAllValue` → The checkbox with `value="{selectAllValue}"` acts as the “Select All” trigger. 

<br>
<br>

## 📝 Example Markup

```
<!-- "All" checkbox -->
<input type="checkbox" name="group1[]" value="all"> Select All  

<!-- Individual options -->
<input type="checkbox" name="group1[]" value="Option 1"> Option 1  
<input type="checkbox" name="group1[]" value="Option 2"> Option 2  
```
<br>
<br>

## 🎯 Events
CBA dispatches custom events you can hook into for more control.

#### `cba:allChecked` 
Triggered when the “All” checkbox is selected, or when all checkboxes in the group are checked individually.

```
document
  .querySelector('input[name="group1[]"][value="all"]')
  .addEventListener('cba:allChecked', (e) => {
    console.log('All checked for:', e.detail.fieldset);
    // Your custom logic here
  });
```
<br>
<br>

## 🧑‍💻 Why Use CBA?

→ **Lightweight** — No dependencies, pure Vanilla JS.

→ **Flexible** — Works with multiple groups.

→ **Extensible** — Easy event hooks for custom logic.

→ **Developer-friendly** — Debug mode for quick setup.

<br>
<br>

## 📦 Roadmap / Ideas

 → Support nested groups.

 → Allow partial "indeterminate" state styling.

 → Add TypeScript definitions.

<br>
<br>

## 📄 License

MIT © Homero Cavazos