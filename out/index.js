"use strict";
(function () {
  class App {
    constructor() {
      this.formElement = document.querySelector("form");
      const boundFunction = this.handleClick.bind(this, App.AGE);
      this.formElement.addEventListener("click", boundFunction);
    }
    handleClick(age, event) {
      if (!this.formElement) {
        return;
      }
      event.preventDefault();
    }
  }
  App.AGE = 19;
  new App();
})();
