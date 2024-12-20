import { FormStorageList, FormStorage } from "src/form/form-storage";
import form_html from "./fixtures/form";
import { storedInfo } from "./fixtures/stored_form";

/**
 * Triggers a custom input event on a form.
 */
function triggerInputEventOnForm(formElement: HTMLFormElement): void {
  const event = new CustomEvent("input");
  formElement.dispatchEvent(event);
}

/**
 * Gets the value of a form item from the storage.
 *
 * @param {string} formId The id of the form that was stored.
 * @param {string} inputName The name of the input item to search for.
 * @return {string|boolean|null} null if the item is not on storage. If the item was found, it will return
 *                               a string or a boolean, depending on the type of the input.
 */
function getItemValueFromStorage(
  formId: string,
  inputName: string,
): string | boolean | null {
  const storedString = sessionStorage.getItem(formId) as string;
  const storeInfo = { list: [] } as FormStorageList;
  storeInfo.list = JSON.parse(storedString);

  let found: boolean = false;
  for (let i = 0; i < storeInfo.list.length && !found; ++i) {
    if (storeInfo.list[i].name === inputName) {
      return storeInfo.list[i].value;
    }
  }

  return null;
}

describe("Retrieve form from storage", () => {
  let formElement: HTMLFormElement;
  beforeEach(() => {
    const container = document.createElement("div");
    container.innerHTML = form_html;
    document.body.appendChild(container);
    formElement = document.querySelector("form") as HTMLFormElement;
    formElement.reset();
    sessionStorage.setItem(formElement.id, JSON.stringify(storedInfo));
    new FormStorage(formElement);
  });

  it("The form element is filled with the values from storage", () => {
    let inputElement = formElement.querySelector(
      '[name="firstName"]',
    ) as HTMLInputElement;
    expect(inputElement.value).toBe("Hannibal");
  });
});

describe("Save form to storage", () => {
  let formElement: HTMLFormElement;
  beforeEach(() => {
    const container = document.createElement("div");
    container.innerHTML = form_html;
    document.body.replaceChildren(container);
    formElement = document.querySelector("form") as HTMLFormElement;

    //Clean storage before each test
    sessionStorage.removeItem(formElement.id);

    new FormStorage(formElement);

    //Check there are no items related to the form on storage
    let storedString = sessionStorage.getItem(formElement.id) as string;
    expect(storedString).toBe(null);
  });

  it("After typing some input to the form, the information is saved on storage", () => {
    //Generate some input on the form and check the storage has an item with the form id.
    const firstNameInputElement = formElement.querySelector(
      '[name="firstName"]',
    ) as HTMLInputElement;
    firstNameInputElement.value = "Hannibal";

    triggerInputEventOnForm(formElement);

    //Now, check the saved information on storage related to the form is correct.
    expect(getItemValueFromStorage(formElement.id, "firstName")).toBe(
      "Hannibal",
    );
  });

  it("passwords input should never be stored", () => {
    const passwordInputElement = formElement.querySelector(
      '[name="user_password"]',
    ) as HTMLInputElement;
    passwordInputElement.value = "alongpassword";

    triggerInputEventOnForm(formElement);
    expect(getItemValueFromStorage(formElement.id, "user_password")).toBe(null);
  });

  it("input elements with no names names are not stored", () => {
    const firstNameInputElement = document.querySelector(
      '[name="firstName"]',
    ) as HTMLInputElement;
    firstNameInputElement.removeAttribute("name");
    firstNameInputElement.value = "Hannibal";

    triggerInputEventOnForm(formElement);
    expect(getItemValueFromStorage(formElement.id, "firstName")).toBe(null);
  });

  it("After generating some input on the form, radio buttons that are not checked are not stored", () => {
    const firstNameInputElement = formElement.querySelector(
      '[name="firstName"]',
    ) as HTMLInputElement;

    firstNameInputElement.value = "Hannibal";

    triggerInputEventOnForm(formElement);
    expect(getItemValueFromStorage(formElement.id, "gender")).toBe(null);
  });

  it("From a group or radio buttons, only the checked one is saved to storage, if any", () => {
    const femaleRadioButton = document.querySelector(
      '[value="female"]',
    ) as HTMLInputElement;

    femaleRadioButton.checked = true;

    triggerInputEventOnForm(formElement);
    expect(getItemValueFromStorage(formElement.id, "gender")).toBe("female");
  });

  it("input elements with empty names are not stored", () => {
    const firstNameInputElement = document.querySelector(
      '[name="firstName"]',
    ) as HTMLInputElement;
    firstNameInputElement.setAttribute("name", "");
    firstNameInputElement.value = "Hannibal";

    triggerInputEventOnForm(formElement);
    expect(getItemValueFromStorage(formElement.id, "firstName")).toBe(null);
  });
});
