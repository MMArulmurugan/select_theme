class CustomSlider extends HTMLElement {
    constructor() {
      super();
      this.splideEl = this.querySelector(".splide");
      this.mountSplider();
      this.options = this.querySelector('[data-options]')
      console.log(this.options);
    }
    mountSplider() {
      new Splide(this.splideEl).mount();
    }
  }
  customElements.define("custom-slider", CustomSlider);