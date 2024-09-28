//Represents a form item suitable to be stored. An input element, select, textarea...
export interface FormStorageItem {
  value: string | boolean; //Checkboxes and radio buttons have boolean values
  name: string;
  isBoolean: boolean;
}

export interface FormStorageList {
  list: Array<FormStorageItem>;
}

/**
 * This class that stores and retrieves the form elements of an HTML form element in storage.
 * The only requirement is that the form element should have a valid id attribute.
 */
export class FormStorage {
  form!: HTMLFormElement | null;

  /**
   * @param {HTMLFormElement} form The source form element from which to store information on storage.
   */
  constructor(form: HTMLFormElement | null) {
    this.form = form;
    this.initEventListeners();
  }

  /**
   * Initialises events.
   */
  initEventListeners() {
    this.form?.addEventListener("input", this.saveFormToStorage.bind(this));
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
    const name = formItem.getAttribute("name");
    const type = formItem.getAttribute("type");
    if (!name || name.length === 0 || type === "password") {
      return null;
    }

    const formItemType = formItem.getAttribute("type");
    const isBoolean = formItemType === "checkbox" || formItemType === "radio";

    return {
      name: name,
      value: isBoolean ? formItem.checked : formItem.value,
      isBoolean: isBoolean,
    };
  }

  /**
   * Saves the entire form 'this.form' on storage as an array of FormStorageItem.
   *
   */
  private saveFormToStorage(): void {
    const formId = this.form?.getAttribute("id");
    if (!formId || formId.length === 0 || !this.form) {
      return;
    }

    const formStorageItems = { list: [] } as FormStorageList;
    const formElements = Array.from(this.form.elements ?? []);
    formElements.forEach((item) => {
      const formItem = item as HTMLInputElement;
      const storageItem = this.buildFormStorageItem(formItem);
      if (storageItem) {
        formStorageItems.list.push(storageItem);
      }
    });

    sessionStorage.setItem(formId, JSON.stringify(formStorageItems.list));
  }
}
