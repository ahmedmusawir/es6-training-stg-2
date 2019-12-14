import './Footer.scss';
import UIBase from '../ui/UIBase';

class Footer extends UIBase {
  constructor() {
    super();
  }

  init() {
    console.log('Footer Initialized!');
  }

  getElementString() {
    return `
    <nav class="navbar fixed-bottom navbar-dark bg-primary">
      <a class="navbar-brand" href="#">Footer &copy; 2020</a>
    </nav>
    `;
  }
}

export default Footer;
