import { isServer } from '@sonnetjs/shared';
import CHTMLElement from './CHTMLElement';

class CHTMLFormElement extends CHTMLElement<HTMLFormElement> {
  public el: HTMLFormElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'form',
        dataset: {},
      } as HTMLFormElement;
    } else {
      this.el = document.createElement('form');
    }
  }

  public name(value: string) {
    this.el.name = value;
    return this;
  }

  public action(value: string) {
    this.el.action = value;
    return this;
  }

  public method(value: string) {
    this.el.method = value;
    return this;
  }

  public target(value: string) {
    this.el.target = value;
    return this;
  }

  public enctype(value: string) {
    this.el.enctype = value;
    return this;
  }

  public encoding(value: string) {
    this.el.encoding = value;
    return this;
  }

  public acceptCharset(value: string) {
    this.el.acceptCharset = value;
    return this;
  }

  public autocomplete(value: AutoFillBase) {
    this.el.autocomplete = value;
    return this;
  }

  public noValidate(value: boolean) {
    this.el.noValidate = value;
    return this;
  }
}

export function form() {
  return new CHTMLFormElement();
}
