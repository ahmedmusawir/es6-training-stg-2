import 'bootstrap-scss/bootstrap.scss';
import './Main.scss';
import Button from './components/ui/Button';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

class Main {
  constructor() {
    this.init();
    this.body = document.querySelector('body');
    this.app = document.getElementById('app');
    // ADDING UI ELEMENTS TO APP
    // this.addUIElements();
    // ADDING LAYOUT ELEMENTS TO APP
    this.addLayoutElements();
  }

  init() {
    console.log('Main Initialized!');
  }

  addLayoutElements = () => {
    // ADDING HEADER
    const navbar = new Header();
    navbar.createElement('SECTION', 'navigation');
    navbar.appendToElement(this.body);
    // ADDING FOOTER
    const footer = new Footer();
    footer.createElement('SECTION', 'footer');
    footer.appendToElement(this.body);
  };

  addUIElements = () => {};
}

const main = new Main();
