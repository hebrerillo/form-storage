import FormStorage from "form/form-storage";
import form_html from "./fixtures/form";

describe("FormStorage", () => {
  const container = document.createElement("div");
  const formId = "form_contact";
  container.innerHTML = form_html;
  document.body.appendChild(container);
  const formStorage: FormStorage = new FormStorage(formId);

  it("Trying to access the form data before the timeout to store should return an empty result", () => {
    
  });
});
