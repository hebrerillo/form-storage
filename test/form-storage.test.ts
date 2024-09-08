import FormStorage from "../src/form/form-storage";
import form_html from "./fixtures/form";

describe("FormStorage", () => {
  const container = document.createElement("div");
  container.innerHTML = form_html;
  document.body.appendChild(container);
  const formElement = document.querySelector(
    "#form_contact",
  ) as HTMLFormElement;
  const formStorage: FormStorage = new FormStorage(formElement);

  it("typing on a form saves data to storage", () => {
    console.log(formStorage);
  });
});
