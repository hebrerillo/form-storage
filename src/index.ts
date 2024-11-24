import "../styles/sass/main.scss";
import { FormStorage } from "src/form/form-storage";

document.addEventListener("DOMContentLoaded", () => {
  new FormStorage(document.querySelector("#form_contact"));
});
