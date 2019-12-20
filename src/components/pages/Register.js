import './Register.scss';
import Page from './Page';
import Image from '../ui/Image';

class Register extends Page {
  constructor() {
    super();

    document.addEventListener('DOMContentLoaded', () => {
      // Loading up the Page Content Target
      this.pageContent = document.querySelector('.register-page .page-content');
    });
  }

  init() {
    console.log('Register Initialized!');
  }

  addUIElements = (pageContent) => {
    const image = new Image('https://picsum.photos/id/1018/600/200');
    image.createElement('FIGURE', 'header-img');
    image.appendToElement(pageContent);
  };
}

export default Register;
