(function() {
  const template = document.createElement('template');

  template.innerHTML = `
    <style>
      :host {
        display: block;
        contain: content;
        text-align: center;
        max-width: 500px;
        margin: 0 auto;
        box-shadow: 0 0 10px rgba(128, 100, 38, 0.34);
        border-radius: 8px;
        border: 2px dashed #ccc049;
        color: orange;
      }
    </style>

    <slot></slot>
  `;

  class MyInfoBox extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }

  window.customElements.define('my-info-box', MyInfoBox);
})();
