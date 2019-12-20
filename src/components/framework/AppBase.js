import Header from '../layout/Header';
import Footer from '../layout/Footer';

class AppBase {
  constructor() {
    this.init();
    this.routeMap = {};
    this.defaultRoute = null;
  }

  init() {
    // console.log('App Base Initialized!');
  }

  addRoute = (pageName, pageObj, defaultRoute = false) => {
    // this.navbar.addLink(pageName);
    this.routeMap[pageName] = pageObj;

    if (defaultRoute) {
      this.defaultRoute = pageName;
    }
  };

  activateRoute = (pageName) => {
    this.app.innerHTML = '';
    const page = this.routeMap[pageName];
    page.createElement('DIV', pageName);
    page.appendToElement(this.app);

    const pageContent = document.querySelector(`.${pageName} .page-content`);

    page.addUIElements(pageContent);
  };

  show = () => {
    // ADDING LAYOUT ELEMENTS TO APP
    this.addLayoutElements();
    // ADDING HOME PAGE
    if (this.defaultRoute) {
      this.activateRoute(this.defaultRoute);
    }
  };

  addLayoutElements = () => {
    // ADDING HEADER
    this.navbar = new Header();
    this.navbar.createElement('SECTION', 'navigation');
    this.navbar.appendToElement(this.body);

    // console.log(this.routeMap);
    const navItems = document.getElementById('nav-items');
    // console.log(navItems);

    for (let key in this.routeMap) {
      // let value = this.routeMap[key];
      navItems.innerHTML += `
      <li class="nav-item">
        <a class="nav-link active mr-1" href="#"> ${key} </a>
      </li>`;
    }

    // let items = Object.keys(this.routeMap);

    // items.map((key) => {
    //   let value = this.routeMap[key];
    //   console.log(key, value);
    // });

    const navLinks = document.querySelectorAll('.nav-link');
    // Adding EventListeners to NavLinks
    navLinks.forEach((navLink) => {
      // console.log(navLink);
      navLink.addEventListener('click', (e) => {
        const route = e.target.innerText;
        // let route = e.target.innerHTML;
        this.activateRoute(route);
        // this.activateRoute(route.trim());
      });
    });
    // ADDING FOOTER
    const footer = new Footer();
    footer.createElement('SECTION', 'footer');
    footer.appendToElement(this.body);
  };
}

export default AppBase;
