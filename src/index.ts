import "../styles/sass/main.scss";
import { FormStorage } from "./form/form-storage";

document.addEventListener("DOMContentLoaded", () => {
  new FormStorage(document.querySelector("#form_contact"));
});
