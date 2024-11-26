import "../styles/sass/main.scss";
import { FormStorage } from "src/form/form-storage";
import { FormValidation } from "src/form/form-validation";

(function () {
  class App {
    private form: HTMLFormElement | null;
    private submitButton: HTMLButtonElement | null;

    constructor() {
      this.form = null;
      this.submitButton = null;
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", this.init.bind(this));
      } else {
        this.init();
      }
    }

    private init() {
      this.form = document.querySelector("[data-form-contact]");
      this.submitButton = document.querySelector("[data-send]");
      this.submitButton?.addEventListener("click", this.submitForm.bind(this));
      new FormStorage(this.form);
    }

    private submitForm(event: Event): void {
      event.preventDefault();
      if (!FormValidation.validateFormAndScrollToError(this.form)) {
        this.form?.classList.add("invalid");
      } else {
        this.form?.classList.remove("invalid");
      }
    }
  }

  new App();
})();
