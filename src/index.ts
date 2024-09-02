/* eslint-disable func-names */

import { StepsManager } from "./StepsManager";
import './style.css';
import printMe from './print';

(function() {
  interface myint {
    (this: HTMLElement, ev: MouseEvent): void;
  }

  class App {
    /* eslint-disable no-magic-numbers */
    static readonly AGE: number = 19;
    formElement!: HTMLFormElement;
    boundFunction!: myint;
    stepsManager!: StepsManager;

    constructor() {
      this.stepsManager = new StepsManager();
      this.stepsManager.print();
      this.formElement = document.querySelector("form") as HTMLFormElement;
      const options = {
        age: 34,
        city: "Toledo",
        address: {
          street: "alegria",
          number: 45,
        },
      } as Object;
      const boundFunction = this.handleClick.bind(this, App.AGE, options);
      this.formElement?.addEventListener("click", boundFunction);
    }

    handleClick(age: number, options: Object, event: Event): void {
      if (!this.formElement) {
        return;
      }
      event.preventDefault();
    }
  }

  /* eslint-disable no-new */
  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console capullo!';
  btn.onclick = printMe;

  document.body.appendChild(btn);
    new App();
  });

})();
