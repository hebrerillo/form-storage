export class Utils {
  /**
   * Scrolls to the element passed as a paremeter. Only if the element is not in the view port.
   *
   * @param {HTMLElement} element
   * @param {Number} top The margin top with the top of the document when scrolling to the first input error. If undefined or null,
   * the margin top is the height of the site header.
   */
  public static scrollToElement(
    input: HTMLElement | null,
    top: number | null = 0,
  ): void {
    const rect = input?.getBoundingClientRect();
    const marginTop = top ?? 0;
    const offset = 5;
    if (
      !rect ||
      (rect.top >= marginTop &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth))
    ) {
      return;
    }

    const finalTop = rect.top + window.pageYOffset - (marginTop + offset);
    window.scrollTo({ top: finalTop, behavior: "smooth" });
  }
}
