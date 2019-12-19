import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Home from '../pages/Home';
import Admin from '../pages/Admin';

class AppBase {
  constructor() {
    this.init();
    // this.show();
  }

  init() {
    console.log('App Base Initialized!');
  }

  show = () => {
    this.addLayoutElements();
  };

  addLayoutElements = () => {
    // ADDING HEADER
    const navbar = new Header();
    navbar.createElement('SECTION', 'navigation');
    navbar.appendToElement(this.body);
    const navLinks = document.querySelectorAll('.nav-link');
    // Adding EventListeners to NavLinks
    navLinks.forEach((navLink) => {
      navLink.addEventListener('click', (e) => {
        this.addPages(e.target.innerHTML);
      });
    });
    // ADDING FOOTER
    const footer = new Footer();
    footer.createElement('SECTION', 'footer');
    footer.appendToElement(this.body);
  };
}

export default AppBase;
