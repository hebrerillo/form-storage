/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/form/form-storage.ts":
/*!**********************************!*\
  !*** ./src/form/form-storage.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var FormStorage = (function () {
    function FormStorage(form) {
        this.form = form;
        this.initEventListeners();
    }
    FormStorage.prototype.initEventListeners = function () {
        var _a;
        (_a = this.form) === null || _a === void 0 ? void 0 : _a.addEventListener("input", this.onFormInput.bind(this));
    };
    FormStorage.prototype.onFormInput = function () {
        this.saveFormToStorage();
    };
    FormStorage.prototype.buildFormStorageItem = function (formItem) {
        var name = formItem.getAttribute("name");
        if (!name || name.length === 0) {
            return null;
        }
        var formItemType = formItem.getAttribute("type");
        var isBoolean = formItemType === "checkbox" || formItemType === "radio";
        var finalValue = null;
        if (isBoolean) {
            finalValue = formItem.checked;
        }
        else {
            finalValue = formItem.value;
        }
        return {
            name: name,
            value: finalValue,
            isBoolean: isBoolean,
        };
    };
    FormStorage.prototype.saveFormToStorage = function () {
        var _this = this;
        var _a, _b, _c;
        var formId = (_a = this.form) === null || _a === void 0 ? void 0 : _a.getAttribute("id");
        if (!formId || formId.length === 0) {
            return;
        }
        var formItems = {};
        formItems.elements = [];
        var formElements = Array.from((_c = (_b = this.form) === null || _b === void 0 ? void 0 : _b.elements) !== null && _c !== void 0 ? _c : []);
        formElements.forEach(function (item) {
            var formItem = item;
            var storageItem = _this.buildFormStorageItem(formItem);
            if (storageItem) {
                formItems.elements.push(storageItem);
            }
        });
        sessionStorage.setItem(formId, JSON.stringify(formItems.elements));
    };
    return FormStorage;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormStorage);


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
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_form_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form/form-storage */ "./src/form/form-storage.ts");

document.addEventListener("DOMContentLoaded", function () {
    new _form_form_storage__WEBPACK_IMPORTED_MODULE_0__["default"](document.querySelector("#form_contact"));
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7QUNOOEM7QUFFOUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFO0lBQzVDLElBQUksMERBQVcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7QUFDM0QsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0Ly4vc3JjL2Zvcm0vZm9ybS1zdG9yYWdlLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3R5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0Ly4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vQSBpdGVtIHRoYXQgaXMgc3VpdGFibGUgdG8gYmUgc2F2ZWQgaW4gc3RvcmFnZVxuaW50ZXJmYWNlIEZvcm1TdG9yYWdlSXRlbSB7XG4gIHZhbHVlOiBzdHJpbmcgfCBib29sZWFuOyAvL0NoZWNrYm94ZXMgYW5kIHJhZGlvIGJ1dHRvbnMgaGF2ZSBib29sZWFuIHZhbHVlc1xuICBuYW1lOiBzdHJpbmc7XG4gIGlzQm9vbGVhbjogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIEZvcm1JdGVtcyB7XG4gIGVsZW1lbnRzOiBBcnJheTxGb3JtU3RvcmFnZUl0ZW0+O1xufVxuXG4vKipcbiAqIEEgZm9ybSB0aGF0IHdpbGwgYmUgc2F2ZWQgYW5kIHJlY292ZXJlZCBmcm9tIHN0b3JhZ2UuXG4gKiBUaGUgb25seSByZXF1aXJlbWVudCBpcyB0aGF0IHRoZSBmb3JtIGVsZW1lbnQgc2hvdWxkIGhhdmUgYSB2YWxpZCBpZCBhdHRyaWJ1dGUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1TdG9yYWdlIHtcbiAgZm9ybSE6IEhUTUxGb3JtRWxlbWVudCB8IG51bGw7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtSWQgVGhlIGlkIG9mIHRoZSBmb3JtIHRvIGJlIHN0b3JlZC5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGZvcm06IEhUTUxGb3JtRWxlbWVudCB8IG51bGwpIHtcbiAgICB0aGlzLmZvcm0gPSBmb3JtO1xuICAgIHRoaXMuaW5pdEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGlzZXMgZXZlbnRzLlxuICAgKi9cbiAgaW5pdEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuZm9ybT8uYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIHRoaXMub25Gb3JtSW5wdXQuYmluZCh0aGlzKSk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgZXhlY3V0ZWQgd2hlbiBpbnB1dCBpcyBwZXJmb3JtZWQgb24gdGhlIGZvcm1cbiAgICovXG4gIHByaXZhdGUgb25Gb3JtSW5wdXQoKTogdm9pZCB7XG4gICAgdGhpcy5zYXZlRm9ybVRvU3RvcmFnZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkcyBhIGZvcm0gaXRlbSB0aGF0IGNhbiBiZSBzYXZlZCBpbiBzdG9yYWdlIGZyb20gYSByYXcgZm9ybSBpdGVtLlxuICAgKlxuICAgKiBAcGFyYW0ge0Zvcm1JdGVtfSBmb3JtSXRlbSBUaGUgc291cmNlIEhUTUwgZm9ybSBpdGVtXG4gICAqIEByZXR1cm4ge0Zvcm1TdG9yYWdlSXRlbX0gQSByZXByZXNlbnRhdGlvbiBvZiB0aGUgJ2Zvcm1JdGVtJyB0aGF0IGlzIHN1aXRhYmxlIHRvIGJlIHNhdmVkIGluIHNlc3Npb25cbiAgICovXG4gIHByaXZhdGUgYnVpbGRGb3JtU3RvcmFnZUl0ZW0oXG4gICAgZm9ybUl0ZW06IEhUTUxJbnB1dEVsZW1lbnQsXG4gICk6IEZvcm1TdG9yYWdlSXRlbSB8IG51bGwge1xuICAgIGNvbnN0IG5hbWUgPSBmb3JtSXRlbS5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpO1xuICAgIGlmICghbmFtZSB8fCBuYW1lLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZm9ybUl0ZW1UeXBlID0gZm9ybUl0ZW0uZ2V0QXR0cmlidXRlKFwidHlwZVwiKTtcbiAgICBjb25zdCBpc0Jvb2xlYW4gPSBmb3JtSXRlbVR5cGUgPT09IFwiY2hlY2tib3hcIiB8fCBmb3JtSXRlbVR5cGUgPT09IFwicmFkaW9cIjtcbiAgICBsZXQgZmluYWxWYWx1ZSA9IG51bGw7XG5cbiAgICBpZiAoaXNCb29sZWFuKSB7XG4gICAgICBmaW5hbFZhbHVlID0gKDxIVE1MSW5wdXRFbGVtZW50PmZvcm1JdGVtKS5jaGVja2VkO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaW5hbFZhbHVlID0gZm9ybUl0ZW0udmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICB2YWx1ZTogZmluYWxWYWx1ZSxcbiAgICAgIGlzQm9vbGVhbjogaXNCb29sZWFuLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogU2F2ZXMgdGhlIGVudGlyZSBmb3JtIG9uIHN0b3JhZ2UuXG4gICAqXG4gICAqL1xuICBwcml2YXRlIHNhdmVGb3JtVG9TdG9yYWdlKCk6IHZvaWQge1xuICAgIGNvbnN0IGZvcm1JZCA9IHRoaXMuZm9ybT8uZ2V0QXR0cmlidXRlKFwiaWRcIik7XG4gICAgaWYgKCFmb3JtSWQgfHwgZm9ybUlkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGZvcm1JdGVtcyA9IHt9IGFzIEZvcm1JdGVtcztcbiAgICBmb3JtSXRlbXMuZWxlbWVudHMgPSBbXTtcbiAgICBjb25zdCBmb3JtRWxlbWVudHMgPSBBcnJheS5mcm9tKHRoaXMuZm9ybT8uZWxlbWVudHMgPz8gW10pO1xuICAgIGZvcm1FbGVtZW50cy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBmb3JtSXRlbSA9IGl0ZW0gYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgIGNvbnN0IHN0b3JhZ2VJdGVtID0gdGhpcy5idWlsZEZvcm1TdG9yYWdlSXRlbShmb3JtSXRlbSk7XG4gICAgICBpZiAoc3RvcmFnZUl0ZW0pIHtcbiAgICAgICAgZm9ybUl0ZW1zLmVsZW1lbnRzLnB1c2goc3RvcmFnZUl0ZW0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShmb3JtSWQsIEpTT04uc3RyaW5naWZ5KGZvcm1JdGVtcy5lbGVtZW50cykpO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBGb3JtU3RvcmFnZSBmcm9tIFwiLi9mb3JtL2Zvcm0tc3RvcmFnZVwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIG5ldyBGb3JtU3RvcmFnZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1fY29udGFjdFwiKSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==