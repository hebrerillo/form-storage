"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StepsManager_1 = require("./StepsManager");
(function () {
    var App = (function () {
        function App() {
            this.stepsManager = new StepsManager_1.StepsManager();
            console.log(StepsManager_1.StepsManager.DataStep);
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
        App.prototype.test = function () { };
        App.prototype.handleClick = function (age, options, event) {
            if (!this.formElement) {
                return;
            }
            event.preventDefault();
        };
        App.AGE = 19;
        return App;
    }());
    new App();
})();
//# sourceMappingURL=index.js.map