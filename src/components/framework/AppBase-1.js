import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Home from '../pages/Home';
import Admin from '../pages/Admin';
import Register from '../pages/Register';

class AppBase {
  constructor() {
    this.init();
  }

  init() {
    console.log('App Base Initialized!');
  }

  show = () => {
    // ADDING LAYOUT ELEMENTS TO APP
    this.addLayoutElements();
    // ADDING HOME PAGE
    this.addPages('Home');
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

  addPages = (page) => {
    switch (page) {
      case 'Home':
        this.app.innerHTML = '';
        const home = new Home();
        home.createElement('DIV', 'home-page');
        home.appendToElement(this.app);

        const homePageContent = document.querySelector(
          '.home-page .page-content'
        );

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

        admin.addUIElements(adminPageContent);
        break;
      case 'Register':
        this.app.innerHTML = '';
        const register = new Register();
        register.createElement('DIV', 'register-page');
        register.appendToElement(this.app);

        const registerPageContent = document.querySelector(
          '.register-page .page-content'
        );

        register.addUIElements(registerPageContent);
        break;
    }
  };
}

export default AppBase;
