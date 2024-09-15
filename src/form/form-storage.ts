//A item that is suitable to be saved in storage
interface FormStorageItem {
  value: string | boolean; //Checkboxes and radio buttons have boolean values
  name: string;
  isBoolean: boolean;
}

interface FormItems {
  elements: Array<FormStorageItem>;
}

/**
 * A form that will be saved and recovered from storage.
 * The only requirement is that the form element should have a valid id attribute.
 */
export default class FormStorage {
  form!: HTMLFormElement | null;

  /**
   * @param {string} formId The id of the form to be stored.
   */
  constructor(formId: string) {
    this.form = document.querySelector(`#${formId}`);
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
   * Builds a form item that can be saved in storage from a raw form item.
   *
   * @param {FormItem} formItem The source HTML form item
   * @return {FormStorageItem} A representation of the 'formItem' that is suitable to be saved in session
   */
  private buildFormStorageItem(formItem: HTMLInputElement): FormStorageItem | null {
    const name = formItem.getAttribute("name");
    if (!name || name.length === 0) {
      return null;
    }

    const formItemType = formItem.getAttribute("type");
    const isBoolean = formItemType === "checkbox" || formItemType === "radio";
    let finalValue = null;

    if (isBoolean) {
      finalValue = (<HTMLInputElement>formItem).checked;
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
    if (!formId || formId.length === 0) {
      return;
    }

    const formItems = {} as FormItems;
    formItems.elements = [];
    const formElements = Array.from(this.form?.elements ?? []);
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
