//A form item which value can be saved in storage
interface FormItem {
  item: HTMLInputElement | HTMLSelectElement;
}

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
  form!: HTMLFormElement;

  constructor(form: HTMLFormElement) {
    this.form = form;
    this.form.addEventListener("input", this.onFormInput.bind(this));
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
  private buildFormStorageItem(formItem: FormItem): FormStorageItem | null {
    const name = formItem.item.getAttribute("name");
    if (!name || name.length === 0) {
      return null;
    }

    const formItemType = formItem.item.getAttribute("type");
    const isBoolean = formItemType === "checkbox" || formItemType === "radio";
    let finalValue = null;

    if (isBoolean) {
      finalValue = (<HTMLInputElement>formItem.item).checked;
    } else {
      finalValue = formItem.item.value;
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
   * @return true if the form was successfully saved in storage, false otherwise
   */
  private saveFormToStorage(): void {
    const formId = this.form.getAttribute("id");
    if (!formId || formId.length === 0) {
      return;
    }

    const formItems = {} as FormItems;
    formItems.elements = [];

    this.form.querySelectorAll("input, select, textarea").forEach((item) => {
      const formItem = item as HTMLInputElement;
      const storageItem = this.buildFormStorageItem({ item: formItem });
      if (storageItem) {
        formItems.elements.push(storageItem);
      }
    });

    sessionStorage.setItem(formId, JSON.stringify(formItems.elements));
  }
}
