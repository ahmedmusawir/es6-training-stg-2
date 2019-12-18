import 'bootstrap-scss/bootstrap.scss';
import './Main.scss';
import Button from './components/ui/Button';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import Admin from './components/pages/Admin';

class Main {
  constructor() {
    this.init();
    this.body = document.querySelector('body');
    this.app = document.getElementById('app');
    // ADDING LAYOUT ELEMENTS TO APP
    this.addLayoutElements();
    // ADDING HOME PAGE
    this.addPages('Home');
  }

  init() {
    console.log('Main Initialized!');
  }

  addLayoutElements = () => {
    // ADDING HEADER
    const navbar = new Header();
    navbar.createElement('SECTION', 'navigation');
    navbar.appendToElement(this.body);
    // console.log(navbar);
    const navLinks = document.querySelectorAll('.nav-link');
    // console.log(navLinks);
    // Adding EventListeners to NavLinks
    navLinks.forEach((navLink) => {
      navLink.addEventListener('click', (e) => {
        this.addPages(e.target.innerHTML);
        // console.log(e.target.innerHTML);
      });
    });
    // ADDING FOOTER
    const footer = new Footer();
    footer.createElement('SECTION', 'footer');
    footer.appendToElement(this.body);
  };

  addPages = (page) => {
    // console.log(page);
    switch (page) {
      case 'Home':
        this.app.innerHTML = '';
        const home = new Home();
        home.createElement('DIV', 'home-page');
        home.appendToElement(this.app);

        const homePageContent = document.querySelector(
          '.home-page .page-content'
        );
        // homePageContent.innerHTML = '';
        home.addUIElements(homePageContent);
        break;
      case 'Admin':
        this.app.innerHTML = '';
        const admin = new Admin();
        admin.createElement('DIV', 'admin-page');
        admin.appendToElement(this.app);

        const adminPageContent = document.querySelector(
          '.admin-page .page-content'
        );
        // adminPageContent.innerHTML = '';
        admin.addUIElements(adminPageContent);
        break;
    }
  };
}

const main = new Main();
