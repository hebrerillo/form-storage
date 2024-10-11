/**
 * Represents a form item suitable to be stored. An input element, select, textarea...
 * Only text and boolean input types are saved. Inputs of type file, image are not saved.
 */
export interface FormStorageItem {
  value: string;
  name: string;
  checked: boolean;
  isBoolean: boolean;
}

export interface FormStorageList {
  list: Array<FormStorageItem>;
}

/**
 * This class stores and retrieves the form control elements of an HTML form element in storage.
 * The only requirement is that the form element should have a valid id attribute.
 */
export class FormStorage {
  private form!: HTMLFormElement | null;
  private storage!: Storage;

  /**
   * @param {HTMLFormElement} form The source form element from which to store information on storage.
   * @param {Storage} storage An object implementing the Storage interface.
   */
  constructor(form: HTMLFormElement | null, storage: Storage = sessionStorage) {
    this.form = form;
    this.storage = storage;
    this.retrieveFormFromStorage();
    this.initEventListeners();
  }

  /**
   * Initialises events.
   */
  initEventListeners() {
    this.form?.addEventListener("input", this.saveFormToStorage.bind(this));
  }

  /**
   * @return {boolean} true if the input element can be saved on storage, false otherwise.
   */
  private canBeStored(inputElement: HTMLInputElement | null): boolean {
    const name = inputElement?.getAttribute("name");
    if (!name || name.length === 0 || !inputElement) {
      return false;
    }

    const type = inputElement?.type ?? "";

    //Only save radio buttons that are checked
    if (type === "radio" && !inputElement.checked) {
      return false;
    }

    switch (type) {
      case "text":
      case "email":
      case "checkbox":
      case "radio":
      case "hidden":
      case "date":
      case "color":
      case "datetime-local":
      case "month":
      case "number":
      case "range":
      case "search":
      case "tel":
      case "time":
      case "url":
      case "week":
      case "textarea":
      case "select-one":
        return true;
    }

    return false;
  }

  /**
   * From an HTMLInputelement, builds an object that is suitable to saved on storage.
   *
   * @param {HTMLInputElement} formItem The HTML input element that is to be stored/retrieved to/from storage.
   * @return {FormStorageItem} An object representation of the 'formItem' that can be stored/retrieved to/from storage. Returns null if the
   * form item element is not suitable to be stored, for example, a password input element.
   */
  private buildFormStorageItem(
    formItem: HTMLInputElement,
  ): FormStorageItem | null {
    if (!this.canBeStored(formItem)) {
      return null;
    }

    const formItemType = formItem.getAttribute("type");
    const isBoolean = formItemType === "checkbox" || formItemType === "radio";
    const name = formItem.getAttribute("name") as string;

    return {
      name: name,
      checked: formItem.checked,
      value: formItem.value,
      isBoolean: isBoolean,
    };
  }

  /**
   * Sets the value of an input element from an item that was saved on storage.
   *
   * @param {HTMLInputElement} inputElement The HTML input element to set value to.
   * @param {FormStorageItem} storageItem The item with the value retrieved from storage
   */
  private setInputValueFromStorageItem(
    inputElement: HTMLInputElement | null,
    storageItem: FormStorageItem | null,
  ): void {
    if (!inputElement || !storageItem) {
      return;
    }

    if (storageItem.isBoolean) {
      inputElement.checked = storageItem.checked;
    } else {
      inputElement.value = storageItem.value;
    }
  }

  /**
   * Search in the storage from an entry with key 'this.form.id'. If such an entry exists, the
   * form 'this.form' will fill its input elements with values from the storage.
   */
  private retrieveFormFromStorage(): void {
    const formId = this.form?.getAttribute("id") ?? ("" as string);
    const formStorageItems = { list: [] } as FormStorageList;
    try {
      formStorageItems.list = JSON.parse(this.storage.getItem(formId) ?? "");
    } catch (e) {}

    for (const item of formStorageItems.list) {
      const inputElement = this.form?.querySelector(
        `[name="${item.name}"]`,
      ) as HTMLInputElement | null;
      this.setInputValueFromStorageItem(inputElement, item);
    }
    const customEvent = new CustomEvent("input", { bubbles: true });
    this.form?.dispatchEvent(customEvent);
  }

  /**
   * Saves the entire form 'this.form' on storage as an array of FormStorageItem.
   *
   */
  private saveFormToStorage(): void {
    const formId = this.form?.getAttribute("id");
    if (!formId || formId.length === 0) {
      return;
    }

    const formStorageItems = { list: [] } as FormStorageList;
    const formElements = Array.from(this.form?.elements ?? []);
    formElements.forEach((item) => {
      const formItem = item as HTMLInputElement;
      const storageItem = this.buildFormStorageItem(formItem);
      if (storageItem) {
        formStorageItems.list.push(storageItem);
      }
    });

    this.storage.setItem(formId, JSON.stringify(formStorageItems.list));
  }
}
