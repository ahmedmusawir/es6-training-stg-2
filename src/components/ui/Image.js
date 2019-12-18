import './Image.scss';
import UIBase from './UIBase';

class Image extends UIBase {
  constructor(imgLink) {
    super();
    this.imgLink = imgLink;
  }

  init() {
    console.log('Image Initialized!');
  }

  getElementString() {
    return `
    <!-- Simple Bootstrap Image -->
    <img
      class="img-fluid w-100"
      src="${this.imgLink}"
      alt=""
    />
    `;
  }
}

export default Image;
