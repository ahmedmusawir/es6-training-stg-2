import 'bootstrap-scss/bootstrap.scss';
import './Main.scss';
import Module from './components/ModuleSample';

class Main {
  constructor() {
    this.init();
    const module = new Module();
  }

  init() {
    console.log('Main Initialized!');
  }
}

const main = new Main();
