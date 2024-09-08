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
        this.form.addEventListener("input", this.onFormInput.bind(this));
    }
    FormStorage.prototype.onFormInput = function () {
        this.saveFormToStorage();
    };
    FormStorage.prototype.buildFormStorageItem = function (formItem) {
        var name = formItem.item.getAttribute("name");
        if (!name || name.length === 0) {
            return null;
        }
        var formItemType = formItem.item.getAttribute("type");
        var isBoolean = formItemType === "checkbox" || formItemType === "radio";
        var finalValue = null;
        if (isBoolean) {
            finalValue = formItem.item.checked;
        }
        else {
            finalValue = formItem.item.value;
        }
        return {
            name: name,
            value: finalValue,
            isBoolean: isBoolean,
        };
    };
    FormStorage.prototype.saveFormToStorage = function () {
        var _this = this;
        var formId = this.form.getAttribute("id");
        if (!formId || formId.length === 0) {
            return;
        }
        var formItems = {};
        formItems.elements = [];
        this.form.querySelectorAll("input, select, textarea").forEach(function (item) {
            var formItem = item;
            var storageItem = _this.buildFormStorageItem({ item: formItem });
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
    new _form_form_storage__WEBPACK_IMPORTED_MODULE_0__["default"](document.querySelector("form"));
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRTtJQUM1QyxJQUFJLDBEQUFXLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFDO0FBQ25ELENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC8uL3NyYy9mb3JtL2Zvcm0tc3RvcmFnZS50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3R5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3R5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL0EgZm9ybSBpdGVtIHdoaWNoIHZhbHVlIGNhbiBiZSBzYXZlZCBpbiBzdG9yYWdlXG5pbnRlcmZhY2UgRm9ybUl0ZW0ge1xuICBpdGVtOiBIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFNlbGVjdEVsZW1lbnQ7XG59XG5cbi8vQSBpdGVtIHRoYXQgaXMgc3VpdGFibGUgdG8gYmUgc2F2ZWQgaW4gc3RvcmFnZVxuaW50ZXJmYWNlIEZvcm1TdG9yYWdlSXRlbSB7XG4gIHZhbHVlOiBzdHJpbmcgfCBib29sZWFuOyAvL0NoZWNrYm94ZXMgYW5kIHJhZGlvIGJ1dHRvbnMgaGF2ZSBib29sZWFuIHZhbHVlc1xuICBuYW1lOiBzdHJpbmc7XG4gIGlzQm9vbGVhbjogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIEZvcm1JdGVtcyB7XG4gIGVsZW1lbnRzOiBBcnJheTxGb3JtU3RvcmFnZUl0ZW0+O1xufVxuXG4vKipcbiAqIEEgZm9ybSB0aGF0IHdpbGwgYmUgc2F2ZWQgYW5kIHJlY292ZXJlZCBmcm9tIHN0b3JhZ2UuXG4gKiBUaGUgb25seSByZXF1aXJlbWVudCBpcyB0aGF0IHRoZSBmb3JtIGVsZW1lbnQgc2hvdWxkIGhhdmUgYSB2YWxpZCBpZCBhdHRyaWJ1dGUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1TdG9yYWdlIHtcbiAgZm9ybSE6IEhUTUxGb3JtRWxlbWVudDtcblxuICBjb25zdHJ1Y3Rvcihmb3JtOiBIVE1MRm9ybUVsZW1lbnQpIHtcbiAgICB0aGlzLmZvcm0gPSBmb3JtO1xuICAgIHRoaXMuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgdGhpcy5vbkZvcm1JbnB1dC5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBleGVjdXRlZCB3aGVuIGlucHV0IGlzIHBlcmZvcm1lZCBvbiB0aGUgZm9ybVxuICAgKi9cbiAgcHJpdmF0ZSBvbkZvcm1JbnB1dCgpOiB2b2lkIHtcbiAgICB0aGlzLnNhdmVGb3JtVG9TdG9yYWdlKCk7XG4gIH1cblxuICAvKipcbiAgICogQnVpbGRzIGEgZm9ybSBpdGVtIHRoYXQgY2FuIGJlIHNhdmVkIGluIHN0b3JhZ2UgZnJvbSBhIHJhdyBmb3JtIGl0ZW0uXG4gICAqXG4gICAqIEBwYXJhbSB7Rm9ybUl0ZW19IGZvcm1JdGVtIFRoZSBzb3VyY2UgSFRNTCBmb3JtIGl0ZW1cbiAgICogQHJldHVybiB7Rm9ybVN0b3JhZ2VJdGVtfSBBIHJlcHJlc2VudGF0aW9uIG9mIHRoZSAnZm9ybUl0ZW0nIHRoYXQgaXMgc3VpdGFibGUgdG8gYmUgc2F2ZWQgaW4gc2Vzc2lvblxuICAgKi9cbiAgcHJpdmF0ZSBidWlsZEZvcm1TdG9yYWdlSXRlbShmb3JtSXRlbTogRm9ybUl0ZW0pOiBGb3JtU3RvcmFnZUl0ZW0gfCBudWxsIHtcbiAgICBjb25zdCBuYW1lID0gZm9ybUl0ZW0uaXRlbS5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpO1xuICAgIGlmICghbmFtZSB8fCBuYW1lLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZm9ybUl0ZW1UeXBlID0gZm9ybUl0ZW0uaXRlbS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpO1xuICAgIGNvbnN0IGlzQm9vbGVhbiA9IGZvcm1JdGVtVHlwZSA9PT0gXCJjaGVja2JveFwiIHx8IGZvcm1JdGVtVHlwZSA9PT0gXCJyYWRpb1wiO1xuICAgIGxldCBmaW5hbFZhbHVlID0gbnVsbDtcblxuICAgIGlmIChpc0Jvb2xlYW4pIHtcbiAgICAgIGZpbmFsVmFsdWUgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+Zm9ybUl0ZW0uaXRlbSkuY2hlY2tlZDtcbiAgICB9IGVsc2Uge1xuICAgICAgZmluYWxWYWx1ZSA9IGZvcm1JdGVtLml0ZW0udmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICB2YWx1ZTogZmluYWxWYWx1ZSxcbiAgICAgIGlzQm9vbGVhbjogaXNCb29sZWFuLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogU2F2ZXMgdGhlIGVudGlyZSBmb3JtIG9uIHN0b3JhZ2UuXG4gICAqXG4gICAqIEByZXR1cm4gdHJ1ZSBpZiB0aGUgZm9ybSB3YXMgc3VjY2Vzc2Z1bGx5IHNhdmVkIGluIHN0b3JhZ2UsIGZhbHNlIG90aGVyd2lzZVxuICAgKi9cbiAgcHJpdmF0ZSBzYXZlRm9ybVRvU3RvcmFnZSgpOiB2b2lkIHtcbiAgICBjb25zdCBmb3JtSWQgPSB0aGlzLmZvcm0uZ2V0QXR0cmlidXRlKFwiaWRcIik7XG4gICAgaWYgKCFmb3JtSWQgfHwgZm9ybUlkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGZvcm1JdGVtcyA9IHt9IGFzIEZvcm1JdGVtcztcbiAgICBmb3JtSXRlbXMuZWxlbWVudHMgPSBbXTtcblxuICAgIHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWFcIikuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgZm9ybUl0ZW0gPSBpdGVtIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICBjb25zdCBzdG9yYWdlSXRlbSA9IHRoaXMuYnVpbGRGb3JtU3RvcmFnZUl0ZW0oeyBpdGVtOiBmb3JtSXRlbSB9KTtcbiAgICAgIGlmIChzdG9yYWdlSXRlbSkge1xuICAgICAgICBmb3JtSXRlbXMuZWxlbWVudHMucHVzaChzdG9yYWdlSXRlbSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvL1RPRE86IFNhdmUgZm9ybSBpbiBhIHByb21pc2UgYXN5bmNocm9ub3VzbHlcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGZvcm1JZCwgSlNPTi5zdHJpbmdpZnkoZm9ybUl0ZW1zLmVsZW1lbnRzKSk7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEZvcm1TdG9yYWdlIGZyb20gXCIuL2Zvcm0vZm9ybS1zdG9yYWdlXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgbmV3IEZvcm1TdG9yYWdlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpISk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==