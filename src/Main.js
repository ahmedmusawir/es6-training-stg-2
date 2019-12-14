import 'bootstrap-scss/bootstrap.scss';
import './Main.scss';
import Button from './components/ui/Button';

class Main {
  constructor() {
    this.init();
    this.app = document.getElementById('app');
    // console.log(this.app);
    const btn = new Button();
    //btn.createElement('ELEMENT', 'CLASS');
    btn.createElement('DIV', 'my-box');
    btn.appendToElement(this.app);

    const btn2 = new Button();
    btn.createElement('DIV', 'btn2-box');
    btn.appendToElement(this.app);
  }

  init() {
    console.log('Main Initialized!');
  }
}

const main = new Main();
