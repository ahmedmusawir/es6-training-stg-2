import './Home.scss';
import Page from './Page';
import Image from '../ui/Image';

class Home extends Page {
  constructor() {
    super();

    document.addEventListener('DOMContentLoaded', () => {
      // Loading up the Page Content Target
      this.pageContent = document.querySelector('.home-page .page-content');
      // console.log(this.pageContent);
      // Adding the UI Elements like Image, Text etc.
      // this.addUIElements();
    });
  }

  init() {
    console.log('Home Initialized!');
  }

  addUIElements = (pageContent) => {
    const image = new Image('https://picsum.photos/id/1016/600/200');
    image.createElement('FIGURE', 'header-img');
    image.appendToElement(pageContent);
  };
}

export default Home;
