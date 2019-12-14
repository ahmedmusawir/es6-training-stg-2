import './Button.scss';
import UIBase from './UIBase';

class Button extends UIBase {
  constructor() {
    super();
    // this.init();
  }

  init() {
    console.log('Button Initialized!');
  }

  getElementString() {
    return `
    <!-- Simple Bootstrap Button -->
    <button id="" type="button" class="btn btn-primary btn-component" style="">Sample Button</button>
    `;
  }
}

export default Button;
