import { FormStorageList, FormStorage } from "form/form-storage";
import form_html from "./fixtures/form";

/**
 * Triggers a custom input event on a form.
 */
function triggerInputEventOnForm(formElement: HTMLFormElement): void {
  const event = new CustomEvent("input");
  formElement.dispatchEvent(event);
}

describe("FormStorage", () => {
  let formElement: HTMLFormElement;
  beforeEach(() => {
    const container = document.createElement("div");
    container.innerHTML = form_html;
    document.body.appendChild(container);
    formElement = document.querySelector("form") as HTMLFormElement;
    new FormStorage(formElement);

    //Clean storage before each test
    sessionStorage.removeItem(formElement.id);

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
    const storedString = sessionStorage.getItem(formElement.id) as string;
    expect(storedString).not.toBe(null);
    expect(storedString.length).toBeGreaterThan(0);

    //Now, check the saved information on storage related to the form is correct.
    const storeInfo = { list: [] } as FormStorageList;
    storeInfo.list = JSON.parse(storedString);
    expect(storeInfo.list.length).toBeGreaterThan(0);

    let found: boolean = false;

    for (let i = 0; i < storeInfo.list.length && !found; ++i) {
      if (storeInfo.list[i].name === "firstName") {
        found = true;
        expect(storeInfo.list[i].value).toBe("Hannibal");
      }
    }
    expect(found).toBe(true);
  });

  it("passwords input should never be stored", () => {
    const passwordInputElement = formElement.querySelector(
      '[name="user_password"]',
    ) as HTMLInputElement;
    passwordInputElement.value = "alongpassword";

    triggerInputEventOnForm(formElement);
    const storedString = sessionStorage.getItem(formElement.id) as string;
    const storeInfo = { list: [] } as FormStorageList;
    storeInfo.list = JSON.parse(storedString);
    expect(storeInfo.list.length).toBeGreaterThan(0);

    let found: boolean = false;
    for (let i = 0; i < storeInfo.list.length && !found; ++i) {
      if (storeInfo.list[i].name === "user_password") {
        found = true;
      }
    }

    expect(found).toBe(false);
  });

  it("input elements with no names names are not stored", () => {
    const firstNameInputElement = document.querySelector(
      '[name="firstName"]',
    ) as HTMLInputElement;
    firstNameInputElement.removeAttribute("name");
    firstNameInputElement.value = "Hannibal";

    triggerInputEventOnForm(formElement);
    const storedString = sessionStorage.getItem(formElement.id) as string;
    const storeInfo = { list: [] } as FormStorageList;
    storeInfo.list = JSON.parse(storedString);
    expect(storeInfo.list.length).toBeGreaterThan(0);

    let found: boolean = false;
    for (let i = 0; i < storeInfo.list.length && !found; ++i) {
      if (storeInfo.list[i].name === "user_password") {
        found = true;
      }
    }

    expect(found).toBe(false);
  });

  it("input elements with empty names are not stored", () => {
    const firstNameInputElement = document.querySelector(
      '[name="firstName"]',
    ) as HTMLInputElement;
    firstNameInputElement.setAttribute("name", "");
    firstNameInputElement.value = "Hannibal";

    triggerInputEventOnForm(formElement);
    const storedString = sessionStorage.getItem(formElement.id) as string;
    const storeInfo = { list: [] } as FormStorageList;
    storeInfo.list = JSON.parse(storedString);
    expect(storeInfo.list.length).toBeGreaterThan(0);

    let found: boolean = false;
    for (let i = 0; i < storeInfo.list.length && !found; ++i) {
      if (storeInfo.list[i].name === "user_password") {
        found = true;
      }
    }

    expect(found).toBe(false);
  });
});
