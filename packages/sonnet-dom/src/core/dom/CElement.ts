import { isServer, SonnetGet } from '@sonnetjs/shared';

import CNode from './CNode';
import { serverParse } from '../parser';

export default class CElement<T> extends CNode {
  public declare el?: Element;

  constructor() {
    super();
  }

  public setAttribute(name: string, value: string) {
    if (this.el) {
      if (isServer()) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.el[name] = value;
      } else {
        this.el.setAttribute(name, value);
      }
    }
    return this;
  }

  public className(value: string) {
    if (this.el) {
      this.el.className = value;
    }
    return this;
  }

  public id(value: string) {
    if (this.el) {
      this.el.id = value;
    }
    return this;
  }

  public innerHtml(value: string) {
    if (this.el) {
      this.el.innerHTML = value;
    }
    return this;
  }

  public outerHtml(value: string) {
    if (this.el) {
      this.el.outerHTML = value;
    }
    return this;
  }

  public scrollLeft(value: number) {
    if (this.el) {
      this.el.scrollLeft = value;
    }
    return this;
  }

  public scrollTop(value: number) {
    if (this.el) {
      this.el.scrollTop = value;
    }
    return this;
  }

  public slot(value: string) {
    if (this.el) {
      this.el.slot = value;
    }
    return this;
  }

  public children(...value: SonnetGet[]) {
    if (this.el) {
      if (isServer()) {
        this.el.innerHTML = value.join('');
      } else {
        this.el.append(...(value as Node[]));
      }
    }
    return this;
  }

  public get() {
    if (isServer()) {
      return serverParse<T>(this.el as HTMLElement);
    }
    return this.el as T;
  }
}
