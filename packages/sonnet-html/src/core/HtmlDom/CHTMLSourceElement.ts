import { isServer } from '@sonnetjs/shared';
import CHTMLElement from './CHTMLElement';

class CHTMLSourceElement extends CHTMLElement<HTMLSourceElement> {
  public el: HTMLSourceElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'source',
        dataset: {},
      } as HTMLSourceElement;
    } else {
      this.el = document.createElement('source');
    }
  }

  public height(value: number) {
    this.el.height = value;
    return this;
  }

  public media(value: string) {
    this.el.media = value;
    return this;
  }

  public sizes(value: string) {
    this.el.sizes = value;
    return this;
  }

  public src(value: string) {
    this.el.src = value;
    return this;
  }

  public srcset(value: string) {
    this.el.srcset = value;
    return this;
  }

  public type(value: string) {
    this.el.type = value;
    return this;
  }

  public width(value: number) {
    this.el.width = value;
    return this;
  }
}

export function source() {
  return new CHTMLSourceElement();
}
