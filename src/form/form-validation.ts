import { Utils } from "./utils";

export class FormValidation {
  /**
   * Performs a form validation. If the form is invalid, the document will scroll to the first input with error.
   *
   * @param {form} HTMLFormElement The form to be validated.
   * @param {number} scrollTopMargin A top offset when scrolling to the first input with error.
   * @return boolean True if the form is valid, false otherwise.
   */
  public static validateFormAndScrollToError(
    form: HTMLFormElement | null,
    scrollTopMargin: number | null = null,
  ): boolean {
    if (!form) {
      return false;
    }

    const inputError = FormValidation.validateForm(form);
    if (inputError) {
      Utils.scrollToElement(inputError, scrollTopMargin);
      return false;
    }

    return true;
  }

  /**
   * Performs a generic form validation.
   *
   * @param {HTMLFormElement} form
   * @param {Object} options Extra options
   *                 options.top The margin top with the top of the document when scrolling to the first input error
   * @returns {HTMLInputElement} The first input element with an error, null if all form input elements are valid.
   */
  public static validateForm(
    form: HTMLFormElement | null,
  ): HTMLInputElement | null {
    if (!form) {
      return null;
    }
    let firstInputWithError: HTMLInputElement | null = null;
    const formElements = Array.from(form.elements);
    formElements.forEach((input) => {
      const inputElement = input as HTMLInputElement;
      if (!inputElement.checkValidity()) {
        firstInputWithError = firstInputWithError ?? inputElement;
      }
    });

    return firstInputWithError;
  }
}
