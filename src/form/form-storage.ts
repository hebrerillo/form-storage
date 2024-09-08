/**
 * A form that will be saved and recovered from storage.
 */
export default class FormStorage {
  constructor(form: HTMLFormElement) {
    const id = form.getAttribute("id");
    if (!id || id.length === 0) {
      return;
    }
  }
}
