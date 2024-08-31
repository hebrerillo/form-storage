/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/StepsManager.ts":
/*!*****************************!*\
  !*** ./src/StepsManager.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StepsManager: () => (/* binding */ StepsManager)
/* harmony export */ });
var StepsManager = (function () {
    function StepsManager() {
        this.currentStep = StepsManager.DataStep;
        this.steps = [
            StepsManager.DataStep,
            StepsManager.ShippmentStep,
            StepsManager.PaymentStep,
        ];
    }
    StepsManager.prototype.print = function () {
        console.log("Entraaaaa");
    };
    StepsManager.DataStep = {
        index: 0,
        description: "DATA",
    };
    StepsManager.ShippmentStep = {
        index: 1,
        description: "SHIPPMENT",
    };
    StepsManager.PaymentStep = {
        index: 2,
        description: "PAYMENT",
    };
    return StepsManager;
}());



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
/* harmony import */ var _StepsManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StepsManager */ "./src/StepsManager.ts");

(function () {
    var App = (function () {
        function App() {
            this.stepsManager = new _StepsManager__WEBPACK_IMPORTED_MODULE_0__.StepsManager();
            this.stepsManager.print();
            this.formElement = document.querySelector("form");
            var options = {
                age: 34,
                city: "Toledo",
                address: {
                    street: "alegria",
                    number: 4,
                },
            };
            var boundFunction = this.handleClick.bind(this, App.AGE, options);
            this.formElement.addEventListener("click", boundFunction);
        }
        App.prototype.handleClick = function (age, options, event) {
            if (!this.formElement) {
                return;
            }
            event.preventDefault();
        };
        App.AGE = 19;
        return App;
    }());
    document.addEventListener("DOMContentLoaded", function () {
        new App();
    });
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBS0E7SUFxQkU7UUFQQSxnQkFBVyxHQUFTLFlBQVksQ0FBQyxRQUFRLENBQUM7UUFDMUMsVUFBSyxHQUFnQjtZQUNuQixZQUFZLENBQUMsUUFBUTtZQUNyQixZQUFZLENBQUMsYUFBYTtZQUMxQixZQUFZLENBQUMsV0FBVztTQUN6QixDQUFDO0lBRWMsQ0FBQztJQUVqQiw0QkFBSyxHQUFMO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBeEJzQixxQkFBUSxHQUFTO1FBQ3RDLEtBQUssRUFBRSxDQUFDO1FBQ1IsV0FBVyxFQUFFLE1BQU07S0FDcEIsQ0FBQztJQUNxQiwwQkFBYSxHQUFTO1FBQzNDLEtBQUssRUFBRSxDQUFDO1FBQ1IsV0FBVyxFQUFFLFdBQVc7S0FDekIsQ0FBQztJQUNxQix3QkFBVyxHQUFTO1FBQ3pDLEtBQUssRUFBRSxDQUFDO1FBQ1IsV0FBVyxFQUFFLFNBQVM7S0FDdkIsQ0FBQztJQWVKLG1CQUFDO0NBQUE7QUEzQndCOzs7Ozs7O1VDTHpCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7O0FDSjhDO0FBRTlDLENBQUM7SUFLQztRQU9FO1lBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLHVEQUFZLEVBQUUsQ0FBQztZQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQW9CLENBQUM7WUFDckUsSUFBTSxPQUFPLEdBQUc7Z0JBQ2QsR0FBRyxFQUFFLEVBQUU7Z0JBQ1AsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsT0FBTyxFQUFFO29CQUNQLE1BQU0sRUFBRSxTQUFTO29CQUNqQixNQUFNLEVBQUUsQ0FBQztpQkFDVjthQUNRLENBQUM7WUFDWixJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUNwRSxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQztRQUM1RCxDQUFDO1FBRUQseUJBQVcsR0FBWCxVQUFZLEdBQVcsRUFBRSxPQUFlLEVBQUUsS0FBWTtZQUNwRCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUN0QixPQUFPO1lBQ1QsQ0FBQztZQUNELEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN6QixDQUFDO1FBMUJlLE9BQUcsR0FBVyxFQUFFLENBQUM7UUEyQm5DLFVBQUM7S0FBQTtJQUdELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRTtRQUM1QyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ1osQ0FBQyxDQUFDLENBQUM7QUFFTCxDQUFDLENBQUMsRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC8uL3NyYy9TdGVwc01hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3R5cGVzY3JpcHQvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBTdGVwIHtcbiAgcmVhZG9ubHkgaW5kZXg6IG51bWJlcjtcbiAgcmVhZG9ubHkgZGVzY3JpcHRpb246IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIFN0ZXBzTWFuYWdlciB7XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRGF0YVN0ZXA6IFN0ZXAgPSB7XG4gICAgaW5kZXg6IDAsXG4gICAgZGVzY3JpcHRpb246IFwiREFUQVwiLFxuICB9O1xuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNoaXBwbWVudFN0ZXA6IFN0ZXAgPSB7XG4gICAgaW5kZXg6IDEsXG4gICAgZGVzY3JpcHRpb246IFwiU0hJUFBNRU5UXCIsXG4gIH07XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUGF5bWVudFN0ZXA6IFN0ZXAgPSB7XG4gICAgaW5kZXg6IDIsXG4gICAgZGVzY3JpcHRpb246IFwiUEFZTUVOVFwiLFxuICB9O1xuXG4gIGN1cnJlbnRTdGVwOiBTdGVwID0gU3RlcHNNYW5hZ2VyLkRhdGFTdGVwO1xuICBzdGVwczogQXJyYXk8U3RlcD4gPSBbXG4gICAgU3RlcHNNYW5hZ2VyLkRhdGFTdGVwLFxuICAgIFN0ZXBzTWFuYWdlci5TaGlwcG1lbnRTdGVwLFxuICAgIFN0ZXBzTWFuYWdlci5QYXltZW50U3RlcCxcbiAgXTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIHByaW50KCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKFwiRW50cmFhYWFhXCIpO1xuICB9XG5cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyogZXNsaW50LWRpc2FibGUgZnVuYy1uYW1lcyAqL1xuXG5pbXBvcnQgeyBTdGVwc01hbmFnZXIgfSBmcm9tIFwiLi9TdGVwc01hbmFnZXJcIjtcblxuKGZ1bmN0aW9uKCkge1xuICBpbnRlcmZhY2UgbXlpbnQge1xuICAgICh0aGlzOiBIVE1MRWxlbWVudCwgZXY6IE1vdXNlRXZlbnQpOiB2b2lkO1xuICB9XG5cbiAgY2xhc3MgQXBwIHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1tYWdpYy1udW1iZXJzICovXG4gICAgc3RhdGljIHJlYWRvbmx5IEFHRTogbnVtYmVyID0gMTk7XG4gICAgZm9ybUVsZW1lbnQhOiBIVE1MRm9ybUVsZW1lbnQ7XG4gICAgYm91bmRGdW5jdGlvbiE6IG15aW50O1xuICAgIHN0ZXBzTWFuYWdlciE6IFN0ZXBzTWFuYWdlcjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgdGhpcy5zdGVwc01hbmFnZXIgPSBuZXcgU3RlcHNNYW5hZ2VyKCk7XG4gICAgICB0aGlzLnN0ZXBzTWFuYWdlci5wcmludCgpO1xuICAgICAgdGhpcy5mb3JtRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpIGFzIEhUTUxGb3JtRWxlbWVudDtcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIGFnZTogMzQsXG4gICAgICAgIGNpdHk6IFwiVG9sZWRvXCIsXG4gICAgICAgIGFkZHJlc3M6IHtcbiAgICAgICAgICBzdHJlZXQ6IFwiYWxlZ3JpYVwiLFxuICAgICAgICAgIG51bWJlcjogNCxcbiAgICAgICAgfSxcbiAgICAgIH0gYXMgT2JqZWN0O1xuICAgICAgY29uc3QgYm91bmRGdW5jdGlvbiA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzLCBBcHAuQUdFLCBvcHRpb25zKTtcbiAgICAgIHRoaXMuZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJvdW5kRnVuY3Rpb24pO1xuICAgIH1cblxuICAgIGhhbmRsZUNsaWNrKGFnZTogbnVtYmVyLCBvcHRpb25zOiBPYmplY3QsIGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgICAgaWYgKCF0aGlzLmZvcm1FbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgLyogZXNsaW50LWRpc2FibGUgbm8tbmV3ICovXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBuZXcgQXBwKCk7XG4gIH0pO1xuXG59KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9