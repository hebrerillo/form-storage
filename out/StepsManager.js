"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepsManager = void 0;
var StepsManager = (function () {
    function StepsManager() {
        this.currentStep = StepsManager.DataStep;
        this.steps = [
            StepsManager.DataStep,
            StepsManager.ShippmentStep,
            StepsManager.PaymentStep,
        ];
    }
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
exports.StepsManager = StepsManager;
//# sourceMappingURL=StepsManager.js.map