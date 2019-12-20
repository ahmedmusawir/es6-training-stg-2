import 'bootstrap-scss/bootstrap.scss';
import './Main.scss';
import AppBase from './components/framework/AppBase';
import Home from './components/pages/Home';
import Admin from './components/pages/Admin';
import Register from './components/pages/Register';

class Main extends AppBase {
  constructor() {
    super();
    // Collecting target elements in the DOM
    this.body = document.querySelector('body');
    this.app = document.getElementById('app');
    // Adding routes for pages
    this.addRoute('Home', new Home(), true);
    this.addRoute('Admin', new Admin(), false);
    this.addRoute('Register', new Register(), false);
    // Making the App visible
    this.show();
  }

  init() {
    console.log('Main Initialized!');
  }
}

const main = new Main();
