const template = document.createElement('template');

template.innerHTML = /* html */ `
<style>

  :host {
    display: block;
    contain: content;
    background-color: #20417d;
    max-width: 500px;
    margin: 0 auto;
    text-align: center;
    border-radius: 5px;
  }

  :host(.second-only) {
    background-color: #401b6e;
  }

  /* does not work */
  .in-styles {
    background-color: white;
  }

  .inside-div {
    color: #2092b0;
  }

  /* applies only to slot content form within the component */
  .outside-to-slot-div {
    color: sienna;
  }

  ::slotted(.outside-to-slot-div) {
    color: green;
  }

  .container {
    display: flex;
    justify-content: space-around;
  }

</style>

<div class='inside-div'>Inside content</div>

<!-- default single slot with default content-->
<slot><div class="outside-to-slot-div">I am default slot content</div></slot>

<!--multiple named slots-->
<div class='container'>
<slot name='left'></slot><slot name='right'></slot>
</div>

`;

class MyComponent extends HTMLElement {
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({
      mode: 'open'
    });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    console.log('Loaded');
  }
}

window.customElements.define('my-component', MyComponent);