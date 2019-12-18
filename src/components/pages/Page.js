import './Page.scss';
import UIBase from '../ui/UIBase';

class Page extends UIBase {
  constructor() {
    super();
  }

  init() {
    console.log('Page Initialized!');
  }

  getElementString() {
    return `
    <section class="page-content"></section>
    `;
  }
}

export default Page;
