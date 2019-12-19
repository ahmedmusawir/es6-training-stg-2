import 'bootstrap-scss/bootstrap.scss';
import './Main.scss';
import AppBase from './components/framework/AppBase';

class Main extends AppBase {
  constructor() {
    super();
    this.body = document.querySelector('body');
    this.app = document.getElementById('app');
    this.show();
  }

  init() {
    console.log('Main Initialized!');
  }
}

const main = new Main();
