import FormStorage from "form/form-storage";
import form_html from "./fixtures/form";

describe("FormStorage", () => {
  const container = document.createElement("div");
  container.innerHTML = form_html;
  document.body.appendChild(container);
  const formStorage: FormStorage = new FormStorage("#form_contact");

  it("typing on a form saves data to storage", () => {
    console.log(formStorage);
  });
});
