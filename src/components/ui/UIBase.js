import './UIBase.scss';

class UIBase {
  constructor() {
    this.init();
    this.element = null;
    this.newElement = null;
  }

  init() {
    console.log('UI Base Initialize!');
  }

  createElement(el = 'SPAN', cls = 'box') {
    let s = this.getElementString();
    this.newElement = document.createElement(el);
    this.newElement.classList.add(cls);
    this.newElement.innerHTML = s;
  }

  appendToElement(mainElement) {
    this.element = mainElement;
    this.element.appendChild(this.newElement);
  }

  getElementString() {
    throw 'Please override getElementString ...';
  }
}

export default UIBase;
