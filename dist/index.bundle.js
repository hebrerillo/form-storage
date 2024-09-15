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
    function FormStorage(formId) {
        this.form = document.querySelector("#".concat(formId));
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
    new _form_form_storage__WEBPACK_IMPORTED_MODULE_0__["default"]("form_contact");
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7OztBQ044QztBQUU5QyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUU7SUFDNUMsSUFBSSwwREFBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ2xDLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC8uL3NyYy9mb3JtL2Zvcm0tc3RvcmFnZS50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3R5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3R5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL0EgaXRlbSB0aGF0IGlzIHN1aXRhYmxlIHRvIGJlIHNhdmVkIGluIHN0b3JhZ2VcbmludGVyZmFjZSBGb3JtU3RvcmFnZUl0ZW0ge1xuICB2YWx1ZTogc3RyaW5nIHwgYm9vbGVhbjsgLy9DaGVja2JveGVzIGFuZCByYWRpbyBidXR0b25zIGhhdmUgYm9vbGVhbiB2YWx1ZXNcbiAgbmFtZTogc3RyaW5nO1xuICBpc0Jvb2xlYW46IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBGb3JtSXRlbXMge1xuICBlbGVtZW50czogQXJyYXk8Rm9ybVN0b3JhZ2VJdGVtPjtcbn1cblxuLyoqXG4gKiBBIGZvcm0gdGhhdCB3aWxsIGJlIHNhdmVkIGFuZCByZWNvdmVyZWQgZnJvbSBzdG9yYWdlLlxuICogVGhlIG9ubHkgcmVxdWlyZW1lbnQgaXMgdGhhdCB0aGUgZm9ybSBlbGVtZW50IHNob3VsZCBoYXZlIGEgdmFsaWQgaWQgYXR0cmlidXRlLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtU3RvcmFnZSB7XG4gIGZvcm0hOiBIVE1MRm9ybUVsZW1lbnQgfCBudWxsO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZm9ybUlkIFRoZSBpZCBvZiB0aGUgZm9ybSB0byBiZSBzdG9yZWQuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihmb3JtSWQ6IHN0cmluZykge1xuICAgIHRoaXMuZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2Zvcm1JZH1gKTtcbiAgICB0aGlzLmluaXRFdmVudExpc3RlbmVycygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpc2VzIGV2ZW50cy5cbiAgICovXG4gIGluaXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLmZvcm0/LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCB0aGlzLm9uRm9ybUlucHV0LmJpbmQodGhpcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGV4ZWN1dGVkIHdoZW4gaW5wdXQgaXMgcGVyZm9ybWVkIG9uIHRoZSBmb3JtXG4gICAqL1xuICBwcml2YXRlIG9uRm9ybUlucHV0KCk6IHZvaWQge1xuICAgIHRoaXMuc2F2ZUZvcm1Ub1N0b3JhZ2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZHMgYSBmb3JtIGl0ZW0gdGhhdCBjYW4gYmUgc2F2ZWQgaW4gc3RvcmFnZSBmcm9tIGEgcmF3IGZvcm0gaXRlbS5cbiAgICpcbiAgICogQHBhcmFtIHtGb3JtSXRlbX0gZm9ybUl0ZW0gVGhlIHNvdXJjZSBIVE1MIGZvcm0gaXRlbVxuICAgKiBAcmV0dXJuIHtGb3JtU3RvcmFnZUl0ZW19IEEgcmVwcmVzZW50YXRpb24gb2YgdGhlICdmb3JtSXRlbScgdGhhdCBpcyBzdWl0YWJsZSB0byBiZSBzYXZlZCBpbiBzZXNzaW9uXG4gICAqL1xuICBwcml2YXRlIGJ1aWxkRm9ybVN0b3JhZ2VJdGVtKGZvcm1JdGVtOiBIVE1MSW5wdXRFbGVtZW50KTogRm9ybVN0b3JhZ2VJdGVtIHwgbnVsbCB7XG4gICAgY29uc3QgbmFtZSA9IGZvcm1JdGVtLmdldEF0dHJpYnV0ZShcIm5hbWVcIik7XG4gICAgaWYgKCFuYW1lIHx8IG5hbWUubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBmb3JtSXRlbVR5cGUgPSBmb3JtSXRlbS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpO1xuICAgIGNvbnN0IGlzQm9vbGVhbiA9IGZvcm1JdGVtVHlwZSA9PT0gXCJjaGVja2JveFwiIHx8IGZvcm1JdGVtVHlwZSA9PT0gXCJyYWRpb1wiO1xuICAgIGxldCBmaW5hbFZhbHVlID0gbnVsbDtcblxuICAgIGlmIChpc0Jvb2xlYW4pIHtcbiAgICAgIGZpbmFsVmFsdWUgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+Zm9ybUl0ZW0pLmNoZWNrZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpbmFsVmFsdWUgPSBmb3JtSXRlbS52YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIHZhbHVlOiBmaW5hbFZhbHVlLFxuICAgICAgaXNCb29sZWFuOiBpc0Jvb2xlYW4sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTYXZlcyB0aGUgZW50aXJlIGZvcm0gb24gc3RvcmFnZS5cbiAgICpcbiAgICovXG4gIHByaXZhdGUgc2F2ZUZvcm1Ub1N0b3JhZ2UoKTogdm9pZCB7XG4gICAgY29uc3QgZm9ybUlkID0gdGhpcy5mb3JtPy5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcbiAgICBpZiAoIWZvcm1JZCB8fCBmb3JtSWQubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZm9ybUl0ZW1zID0ge30gYXMgRm9ybUl0ZW1zO1xuICAgIGZvcm1JdGVtcy5lbGVtZW50cyA9IFtdO1xuICAgIGNvbnN0IGZvcm1FbGVtZW50cyA9IEFycmF5LmZyb20odGhpcy5mb3JtPy5lbGVtZW50cyA/PyBbXSk7XG4gICAgZm9ybUVsZW1lbnRzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGZvcm1JdGVtID0gaXRlbSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgY29uc3Qgc3RvcmFnZUl0ZW0gPSB0aGlzLmJ1aWxkRm9ybVN0b3JhZ2VJdGVtKGZvcm1JdGVtKTtcbiAgICAgIGlmIChzdG9yYWdlSXRlbSkge1xuICAgICAgICBmb3JtSXRlbXMuZWxlbWVudHMucHVzaChzdG9yYWdlSXRlbSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGZvcm1JZCwgSlNPTi5zdHJpbmdpZnkoZm9ybUl0ZW1zLmVsZW1lbnRzKSk7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEZvcm1TdG9yYWdlIGZyb20gXCIuL2Zvcm0vZm9ybS1zdG9yYWdlXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgbmV3IEZvcm1TdG9yYWdlKFwiZm9ybV9jb250YWN0XCIpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=