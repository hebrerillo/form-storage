/* eslint-disable func-names */
(function () {
  class App {
    /* eslint-disable no-magic-numbers */
    static readonly AGE: number = 19;
    formElement!: HTMLFormElement;
    boundFunction!: (this: HTMLElement, ev: MouseEvent) => void;

    constructor() {
      this.formElement = document.querySelector("form") as HTMLFormElement;
      const boundFunction = this.handleClick.bind(this, App.AGE);
      this.formElement.addEventListener("click", boundFunction);
    }

    handleClick(age: number, event: Event): void {
      if (!this.formElement) {
        return;
      }
      event.preventDefault();
    }
  }

  /* eslint-disable no-new */
  new App();
})();
