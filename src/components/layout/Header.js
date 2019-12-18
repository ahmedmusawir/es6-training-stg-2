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
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a class="nav-link active mr-1" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active mr-1" href="#">Admin</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#">Login</a>
          </li>
        </ul>
      </div>
    </nav>
    `;
  }
}

export default Header;
