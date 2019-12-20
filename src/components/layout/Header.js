import './Header.scss';
import UIBase from '../ui/UIBase';

class Header extends UIBase {
  constructor() {
    super();
  }

  init() {
    console.log('Header Initialized!');
  }

  getElementString() {
    return `
    <nav class="navbar navbar-expand navbar-dark bg-dark fixed-top">
      <a class="navbar-brand" href="#">The Quiz</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul id="nav-items" class="nav nav-pills">
         <!-- DYNAMIC NAV ITEM CONTENT -->
        </ul>
      </div>
    </nav>
    `;
  }
}

export default Header;
