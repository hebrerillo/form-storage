import {FormStorage, FormStorageItem} from "form/form-storage";
import form_html from "./fixtures/form";

describe("FormStorage", () => {
  const container = document.createElement("div");
  container.innerHTML = form_html;
  document.body.appendChild(container);
  const formId = "form_contact";
  const formElement = document.querySelector(
    `#${formId}`,
  ) as HTMLFormElement;
  new FormStorage(formElement);
  sessionStorage.setItem(formId, "");

  it("After typing some input to the form, the information is saved in storage", () => {
    (<HTMLInputElement>formElement.querySelector('[name="firstName"]')).value = "Hannibal";

    const event = new CustomEvent("input");
    formElement.dispatchEvent(event);
    const storedString = sessionStorage.getItem(formId)!;
    expect(storedString).not.toBe(null);
    expect(storedString.length).toBeGreaterThan(0);

    const storeInfo: Array<FormStorageItem> = JSON.parse(storedString);
    expect(storeInfo.length).toBeGreaterThan(0);
  });
});
