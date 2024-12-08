import { isServer } from '@sonnetjs/shared';
import CHTMLElement from './CHTMLElement';

class CHTMLPictureElement extends CHTMLElement<HTMLPictureElement> {
  public el: HTMLPictureElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'picture',
        dataset: {},
      } as HTMLPictureElement;
    } else {
      this.el = document.createElement('picture');
    }
  }
}

export function picture() {
  return new CHTMLPictureElement();
}
