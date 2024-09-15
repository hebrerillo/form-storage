//Interface that represents a form item suitable to be stored. An input element, select, textarea...
interface FormStorageItem {
  value: string | boolean; //Checkboxes and radio buttons have boolean values
  name: string;
  isBoolean: boolean;
}

//A set of form items that will be stored.
interface FormItems {
  elements: Array<FormStorageItem>;
}

/**
 * This class that stores and retrieves the form elements of an HTML form element in storage. 
 * The only requirement is that the form element should have a valid id attribute.
 */
export default class FormStorage {
  form!: HTMLFormElement | null;

  /**
   * @param {string} formId The id of the form to be stored.
   */
  constructor(form: HTMLFormElement | null) {
    this.form = form;
    this.initEventListeners();
  }

  /**
   * Initialises events.
   */
  initEventListeners() {
    this.form?.addEventListener("input", this.onFormInput.bind(this));
  }

  /**
   * Callback executed when input is performed on the form
   */
  private onFormInput(): void {
    this.saveFormToStorage();
  }

  /**
   * Builds an FormStorageItem object from a form item (input, select, textarea...).
   *
   * @param {HTMLInputElement} formItem The form element that is to be stored/retrieved to/from storage.
   * @return {FormStorageItem} A representation of the 'formItem' that can be stored/retrieved to/from storage. Returns null if the
   * form item element does not have a valid name.
   */
  private buildFormStorageItem(
    formItem: HTMLInputElement,
  ): FormStorageItem | null {
    const name = formItem.getAttribute("name");
    if (!name || name.length === 0) {
      return null;
    }

    const formItemType = formItem.getAttribute("type");
    const isBoolean = formItemType === "checkbox" || formItemType === "radio";
    let finalValue = null;

    if (isBoolean) {
      finalValue = formItem.checked;
    } else {
      finalValue = formItem.value;
    }

    return {
      name: name,
      value: finalValue,
      isBoolean: isBoolean,
    };
  }

  /**
   * Saves the entire form on storage.
   *
   */
  private saveFormToStorage(): void {
    const formId = this.form?.getAttribute("id");
    if (!formId || formId.length === 0 || !this.form) {
      return;
    }

    const formItems = {} as FormItems;
    formItems.elements = [];
    const formElements = Array.from(this.form.elements ?? []);
    formElements.forEach((item) => {
      const formItem = item as HTMLInputElement;
      const storageItem = this.buildFormStorageItem(formItem);
      if (storageItem) {
        formItems.elements.push(storageItem);
      }
    });

    sessionStorage.setItem(formId, JSON.stringify(formItems.elements));
  }
}
