(()=>{var t={11:()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,n(o.key),o)}}function n(e){var n=function(e,n){if("object"!=t(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!=t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==t(n)?n:n+""}function r(t){var e="function"==typeof Map?new Map:void 0;return r=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(e){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return function(t,e,n){if(o())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,e);var c=new(t.bind.apply(t,r));return n&&i(c,n.prototype),c}(t,arguments,c(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),i(n,t)},r(t)}function o(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(o=function(){return!!t})()}function i(t,e){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},i(t,e)}function c(t){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},c(t)}var a=function(n){function r(){var e,n,i,a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),(n=this,i=r,i=c(i),e=function(e,n){if(n&&("object"===t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e)}(n,o()?Reflect.construct(i,a||[],c(n).constructor):i.apply(n,a))).render(),e}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&i(t,e)}(r,n),a=r,(u=[{key:"render",value:function(){this.innerHTML='\n        <div class="container bg-white shadow" id="add-notes">\n        <h2 class="container-header-add">Tambah Catatan</h2>\n        <form class="form" action="#" id="noteForm">\n          <div class="form-group form-title">\n            <label for="title">Judul:</label>\n            <input type="text" id="noteTitle" name="noteTitle" required />\n          </div>\n          <div class="form-group form-title">\n            <label for="body">Isi Catatan:</label>\n            <textarea id="noteBody" name="noteBody" rows="5" required></textarea>\n          </div>\n          <input type="submit" value="Submit" name="submit" class="btn-submit" id="submit"/>\n        </form>\n      </div>\n      '}}])&&e(a.prototype,u),Object.defineProperty(a,"prototype",{writable:!1}),a;var a,u}(r(HTMLElement));customElements.define("notes-add-form",a)},46:()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,n(o.key),o)}}function n(e){var n=function(e,n){if("object"!=t(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!=t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==t(n)?n:n+""}function r(t){var e="function"==typeof Map?new Map:void 0;return r=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(e){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return function(t,e,n){if(o())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,e);var c=new(t.bind.apply(t,r));return n&&i(c,n.prototype),c}(t,arguments,c(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),i(n,t)},r(t)}function o(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(o=function(){return!!t})()}function i(t,e){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},i(t,e)}function c(t){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},c(t)}var a=function(n){function r(){var e,n,i,a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),(n=this,i=r,i=c(i),e=function(e,n){if(n&&("object"===t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e)}(n,o()?Reflect.construct(i,a||[],c(n).constructor):i.apply(n,a))).render(),e}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&i(t,e)}(r,n),a=r,(u=[{key:"render",value:function(){this.innerHTML='\n        <div class="container-list">\n        <h2 class="container-header-list">Catatan Diarsipkan</h2>\n        <div class="list-item" id="Archived-notes"></div>\n      </div>\n      '}}])&&e(a.prototype,u),Object.defineProperty(a,"prototype",{writable:!1}),a;var a,u}(r(HTMLElement));customElements.define("notes-archived-list",a)},776:()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,n(o.key),o)}}function n(e){var n=function(e,n){if("object"!=t(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!=t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==t(n)?n:n+""}function r(t){var e="function"==typeof Map?new Map:void 0;return r=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(e){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return function(t,e,n){if(o())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,e);var c=new(t.bind.apply(t,r));return n&&i(c,n.prototype),c}(t,arguments,c(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),i(n,t)},r(t)}function o(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(o=function(){return!!t})()}function i(t,e){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},i(t,e)}function c(t){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},c(t)}var a=function(n){function r(){var e,n,i,a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),(n=this,i=r,i=c(i),e=function(e,n){if(n&&("object"===t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e)}(n,o()?Reflect.construct(i,a||[],c(n).constructor):i.apply(n,a))).render(),e}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&i(t,e)}(r,n),a=r,(u=[{key:"render",value:function(){this.innerHTML="\n        <footer>\n        <h3>Submission: Membangun Notes App - 2024</h3>\n         </footer>\n      "}}])&&e(a.prototype,u),Object.defineProperty(a,"prototype",{writable:!1}),a;var a,u}(r(HTMLElement));customElements.define("notes-footer",a)},190:()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,n(o.key),o)}}function n(e){var n=function(e,n){if("object"!=t(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!=t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==t(n)?n:n+""}function r(t){var e="function"==typeof Map?new Map:void 0;return r=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(e){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return function(t,e,n){if(o())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,e);var c=new(t.bind.apply(t,r));return n&&i(c,n.prototype),c}(t,arguments,c(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),i(n,t)},r(t)}function o(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(o=function(){return!!t})()}function i(t,e){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},i(t,e)}function c(t){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},c(t)}var a=function(n){function r(){var e,n,i,a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),(n=this,i=r,i=c(i),e=function(e,n){if(n&&("object"===t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e)}(n,o()?Reflect.construct(i,a||[],c(n).constructor):i.apply(n,a))).render(),e}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&i(t,e)}(r,n),a=r,(u=[{key:"render",value:function(){this.innerHTML="\n         <header>\n         <h1>Notes Apps</h1>\n        </header>\n      "}}])&&e(a.prototype,u),Object.defineProperty(a,"prototype",{writable:!1}),a;var a,u}(r(HTMLElement));customElements.define("notes-header",a)},126:()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,n(o.key),o)}}function n(e){var n=function(e,n){if("object"!=t(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!=t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==t(n)?n:n+""}function r(t){var e="function"==typeof Map?new Map:void 0;return r=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(e){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return function(t,e,n){if(o())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,e);var c=new(t.bind.apply(t,r));return n&&i(c,n.prototype),c}(t,arguments,c(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),i(n,t)},r(t)}function o(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(o=function(){return!!t})()}function i(t,e){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},i(t,e)}function c(t){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},c(t)}var a=function(n){function r(){var e,n,i,a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),(n=this,i=r,i=c(i),e=function(e,n){if(n&&("object"===t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e)}(n,o()?Reflect.construct(i,a||[],c(n).constructor):i.apply(n,a))).render(),e}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&i(t,e)}(r,n),a=r,(u=[{key:"render",value:function(){this.innerHTML='\n        <img src="Notes-amico.svg" \n        alt="Notes" \n        id="logo">\n      '}}])&&e(a.prototype,u),Object.defineProperty(a,"prototype",{writable:!1}),a;var a,u}(r(HTMLElement));customElements.define("notes-image",a)},535:()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,n(o.key),o)}}function n(e){var n=function(e,n){if("object"!=t(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!=t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==t(n)?n:n+""}function r(t){var e="function"==typeof Map?new Map:void 0;return r=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(e){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return function(t,e,n){if(o())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,e);var c=new(t.bind.apply(t,r));return n&&i(c,n.prototype),c}(t,arguments,c(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),i(n,t)},r(t)}function o(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(o=function(){return!!t})()}function i(t,e){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},i(t,e)}function c(t){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},c(t)}var a=function(n){function r(){var e,n,i,a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),(n=this,i=r,i=c(i),e=function(e,n){if(n&&("object"===t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e)}(n,o()?Reflect.construct(i,a||[],c(n).constructor):i.apply(n,a))).render(),e}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&i(t,e)}(r,n),a=r,(u=[{key:"render",value:function(){this.innerHTML='\n        <div class="container-list">\n        <h2 class="container-header-list">Catatan Aktif</h2>\n        <div class="list-item" id="notes"></div>\n      </div>\n      '}}])&&e(a.prototype,u),Object.defineProperty(a,"prototype",{writable:!1}),a;var a,u}(r(HTMLElement));customElements.define("notes-unarchived-list",a)},919:(t,e,n)=>{"use strict";n.d(e,{A:()=>h});var r=n(601),o=n.n(r),i=n(314),c=n.n(i),a=n(417),u=n.n(a),f=new URL(n(512),n.b),l=new URL(n(921),n.b),s=new URL(n(394),n.b),p=new URL(n(189),n.b),d=c()(o());d.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Raleway&display=swap);"]);var y=u()(f),b=u()(l),v=u()(s),m=u()(p);d.push([t.id,`*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  font-family: Raleway, sans-serif;\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nheader {\n  background-color: rgb(109 40 217);\n  padding: 16px;\n  color: white;\n}\n\nfooter {\n    background-color: rgb(109 40 217);\n    padding: 8px;\n    color: white;\n    text-align: center;\n    font-style: italic;\n    margin-top: 16px;\n  }\n\n.wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.wrapper .container {\n  width: 1016px;\n  border-radius: 8px;\n  margin: 16px;\n  background: #f8f9fa;\n  padding: 16px;\n  flex-grow: 1;\n  height: fit-content;\n}\n\n.new-notes{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n  }\n\n#logo{\n    height: 500px;\n    width: 450px;\n    margin: 16px;\n    margin-right: -8px;\n}\n\n.form {\n  min-height: 390px;\n}\n\n.container-header-add{\n    padding-left: 16px;\n    color: #8A2BE2;\n}\n\n.container-header-list{\n    padding-left: 2px;\n    color:#8A2BE2;\n}\n\n.wrapper .container-list {\n    width: 1340px;\n    border-radius: 8px;\n    margin: 16px;\n    background: #f8f9fa;\n    padding: 16px;\n    flex-grow: 1;\n    height: fit-content;\n  }\n\n.list-item {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n\n.item {\n  border-radius: 16px;\n  margin-top: 16px;\n  padding: 12px 24px 12px 24px;\n  background: white;\n  display: grid;\n  grid-template-columns: 450px 1fr 1fr;\n  align-items: center;\n}\n\n.item > .inner h2 {\n  margin-bottom: unset;\n}\n\n.item > .inner p {\n  margin-top: 5px;\n}\n\n.form {\n  display: flex;\n  padding: 16px;\n  flex-direction: column;\n  height: 300px;\n  border-radius: 16px;\n}\n\n.form-group {\n  display: flex;\n  flex-direction: column;\n}\n\n.form-group label {\n  margin-bottom: 4px;\n  font-size: 18px;\n  font-weight: lighter;\n}\n\n.shadow {\n  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05), 0 15px 40px rgba(166, 173, 201, 0.2);\n}\n\ninput[type="text"],\ntextarea {\n  font-family: Raleway, sans-serif;\n  background: #f5f1ff;\n  border: 2px solid rgb(109 40 217);\n  border-radius: 8px;\n  padding: 16px;\n  box-sizing: border-box;\n  margin-bottom: 8px;\n  font-size: 20px;\n  max-height: 180px;\n}\n\n.btn-submit {\n  width: fit-content;\n  font-family: Raleway, sans-serif;\n  border-radius: 16px;\n  padding: 12px 24px;\n  border: 2px solid rgb(109 40 217);\n  color: black;\n  font-size: 20px;\n  margin-top: 16px;\n  align-self: flex-end;\n  cursor: pointer;\n}\n\n.btn-submit:hover {\n  background: #5f30e2;\n  color: white;\n}\n\ninput[type="text"],\ntextarea,\n.btn-submit:focus {\n  outline: none;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.form-title {\n  margin: auto 0;\n}\n\n.archived-button {\n  background: url(${y});\n\n  width: 40px;\n  height: 40px;\n  margin-left: auto;\n  cursor: pointer;\n  border: none;\n}\n\n\n\n.trash-button {\n  background: url(${b});\n  background-size: contain;\n  width: 40px;\n  height: 40px;\n  margin-left: 16px;\n  cursor: pointer;\n  border: none;\n}\n\n.trash-button:hover {\n  background: url(${v});\n  background-size: contain;\n}\n\n.unarchived-button {\n  background: url(${m});\n  background-size: contain;\n  width: 40px;\n  height: 40px;\n  margin-left: auto;\n  cursor: pointer;\n  border: none;\n}\n\n\n@media only screen and (max-width: 1024px) {\n  .wrapper {\n    margin: 0;\n  }\n\n  .wrapper .container {\n    width: 100%;\n  }\n\n  .list-item {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 10px;\n  }\n\n  .form {\n    width: 100%;\n  }\n}\n`,""]);const h=d},314:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var c={};if(r)for(var a=0;a<this.length;a++){var u=this[a][0];null!=u&&(c[u]=!0)}for(var f=0;f<t.length;f++){var l=[].concat(t[f]);r&&c[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},417:t=>{"use strict";t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},601:t=>{"use strict";t.exports=function(t){return t[1]}},72:t=>{"use strict";var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var i={},c=[],a=0;a<t.length;a++){var u=t[a],f=r.base?u[0]+r.base:u[0],l=i[f]||0,s="".concat(f," ").concat(l);i[f]=l+1;var p=n(s),d={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==p)e[p].references++,e[p].updater(d);else{var y=o(d,r);r.byIndex=a,e.splice(a,0,{identifier:s,updater:y,references:1})}c.push(s)}return c}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var c=0;c<i.length;c++){var a=n(i[c]);e[a].references--}for(var u=r(t,o),f=0;f<i.length;f++){var l=n(i[f]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=u}}},659:t=>{"use strict";var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},512:(t,e,n)=>{"use strict";t.exports=n.p+"cde0a16203b0369f0543.svg"},394:(t,e,n)=>{"use strict";t.exports=n.p+"fbe2c1f9aab4c5bf84c1.svg"},921:(t,e,n)=>{"use strict";t.exports=n.p+"12eca17390b9388bda7f.svg"},189:(t,e,n)=>{"use strict";t.exports=n.p+"3cbc2a5b30f0bc363a7c.svg"}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return t[r](i,i.exports,n),i.exports}n.m=t,n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!t||!/^http(s?):/.test(t));)t=r[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{"use strict";var t=n(72),e=n.n(t),r=n(825),o=n.n(r),i=n(659),c=n.n(i),a=n(56),u=n.n(a),f=n(540),l=n.n(f),s=n(113),p=n.n(s),d=n(919),y={};y.styleTagTransform=p(),y.setAttributes=u(),y.insert=c().bind(null,"head"),y.domAPI=o(),y.insertStyleElement=l(),e()(d.A,y),d.A&&d.A.locals&&d.A.locals,n(190),n(776),n(126),n(11),n(535),n(46);function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}console.log([{id:"notes-jT-jjsyz61J8XKiI",title:"Welcome to Notes, Dimas!",body:"Welcome to Notes! This is your first note. You can archive it, delete it, or create new ones.",createdAt:"2022-07-28T10:03:12.594Z",archived:!1},{id:"notes-aB-cdefg12345",title:"Meeting Agenda",body:"Discuss project updates and assign tasks for the upcoming week.",createdAt:"2022-08-05T15:30:00.000Z",archived:!1},{id:"notes-XyZ-789012345",title:"Shopping List",body:"Milk, eggs, bread, fruits, and vegetables.",createdAt:"2022-08-10T08:45:23.120Z",archived:!1},{id:"notes-1a-2b3c4d5e6f",title:"Personal Goals",body:"Read two books per month, exercise three times a week, learn a new language.",createdAt:"2022-08-15T18:12:55.789Z",archived:!1},{id:"notes-LMN-456789",title:"Recipe: Spaghetti Bolognese",body:"Ingredients: ground beef, tomatoes, onions, garlic, pasta. Steps:...",createdAt:"2022-08-20T12:30:40.200Z",archived:!1},{id:"notes-QwErTyUiOp",title:"Workout Routine",body:"Monday: Cardio, Tuesday: Upper body, Wednesday: Rest, Thursday: Lower body, Friday: Cardio.",createdAt:"2022-08-25T09:15:17.890Z",archived:!1},{id:"notes-abcdef-987654",title:"Book Recommendations",body:"1. 'The Alchemist' by Paulo Coelho\n2. '1984' by George Orwell\n3. 'To Kill a Mockingbird' by Harper Lee",createdAt:"2022-09-01T14:20:05.321Z",archived:!1},{id:"notes-zyxwv-54321",title:"Daily Reflections",body:"Write down three positive things that happened today and one thing to improve tomorrow.",createdAt:"2022-09-07T20:40:30.150Z",archived:!1},{id:"notes-poiuyt-987654",title:"Travel Bucket List",body:"1. Paris, France\n2. Kyoto, Japan\n3. Santorini, Greece\n4. New York City, USA",createdAt:"2022-09-15T11:55:44.678Z",archived:!1},{id:"notes-asdfgh-123456",title:"Coding Projects",body:"1. Build a personal website\n2. Create a mobile app\n3. Contribute to an open-source project",createdAt:"2022-09-20T17:10:12.987Z",archived:!1},{id:"notes-5678-abcd-efgh",title:"Project Deadline",body:"Complete project tasks by the deadline on October 1st.",createdAt:"2022-09-28T14:00:00.000Z",archived:!1},{id:"notes-9876-wxyz-1234",title:"Health Checkup",body:"Schedule a routine health checkup with the doctor.",createdAt:"2022-10-05T09:30:45.600Z",archived:!1},{id:"notes-qwerty-8765-4321",title:"Financial Goals",body:"1. Create a monthly budget\n2. Save 20% of income\n3. Invest in a retirement fund.",createdAt:"2022-10-12T12:15:30.890Z",archived:!1},{id:"notes-98765-54321-12345",title:"Holiday Plans",body:"Research and plan for the upcoming holiday destination.",createdAt:"2022-10-20T16:45:00.000Z",archived:!1},{id:"notes-1234-abcd-5678",title:"Language Learning",body:"Practice Spanish vocabulary for 30 minutes every day.",createdAt:"2022-10-28T08:00:20.120Z",archived:!1}]);const v=function(){var t="https://notes-api.dicoding.dev/v2",e=function(){fetch("".concat(t,"/notes")).then((function(t){return t.json()})).then((function(t){t.error?r(t.message):function(t){var e=document.getElementById("notes");e.innerHTML="",t.forEach((function(t){var r=n(t);e.appendChild(r)}))}(t.data)})).catch((function(t){r(t)}))};function n(t){var e=t.id,n=t.title,r=t.body,o=t.createdAt,i=t.archived,c=document.createElement("h2");c.innerText=n;var a=document.createElement("p");a.innerText=r;var u=document.createElement("p");u.innerText="Created At: ".concat(new Date(o).toLocaleString());var f=document.createElement("div");f.classList.add("inner"),f.append(c,a,u);var l=document.createElement("div");if(l.classList.add("item","shadow"),l.append(f),l.setAttribute("id","note-".concat(e)),i){var s=document.createElement("button");s.classList.add("unarchived-button"),s.addEventListener("click",(function(){undoNoteFromArchived(e)}));var p=document.createElement("button");p.classList.add("trash-button"),p.addEventListener("click",(function(){removeNoteFromArchived(e)})),l.append(s,p)}else{var d=document.createElement("button");d.classList.add("archived-button"),d.addEventListener("click",(function(){addNoteToArchived(e)}));var y=document.createElement("button");y.classList.add("trash-button"),y.addEventListener("click",(function(){removeNoteFromArchived(e)})),l.append(d,y)}return l}var r=function(){alert(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Check your internet connection")};document.addEventListener("DOMContentLoaded",(function(){var n=document.getElementById("noteForm"),o=n.elements.noteTitle,i=n.elements.noteBody;n.addEventListener("submit",(function(n){var c;n.preventDefault(),c={title:o.value,body:i.value},fetch("".concat(t,"/notes"),{method:"POST",body:JSON.stringify(c)}).then((function(t){return t.json()})).then((function(t){r(t.message),e()})).catch((function(t){r(t)}))})),e()})),document.addEventListener("render-notes",(function(){var t=document.getElementById("notes"),e=document.getElementById("Archived-notes");t.innerHTML="",e.innerHTML="",notes.sort((function(t,e){return new Date(e.createdAt)-new Date(t.createdAt)}));var r,o=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return b(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,a=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){a=!0,i=t},f:function(){try{c||null==n.return||n.return()}finally{if(a)throw i}}}}(notes);try{for(o.s();!(r=o.n()).done;){var i=r.value,c=n(i);i.archived?e.append(c):t.append(c)}}catch(t){o.e(t)}finally{o.f()}})),e()};document.addEventListener("DOMContentLoaded",(function(){v()}))})()})();