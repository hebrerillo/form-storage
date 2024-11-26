import "../styles/sass/main.scss";
import { FormStorage } from "src/form/form-storage";

(function () {
  class App {
    private form: HTMLFormElement | null;

    constructor() {
      this.form = null;
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", this.init.bind(this));
      } else {
        this.init();
      }
    }

    private init() {
      this.form = document.querySelector("#form_contact");
      new FormStorage(this.form);
    }
  }

  new App();
})();
