import { Component } from './components';

export class Footer extends Component {
  constructor(selector: string) {
    super(selector);

    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
      <footer> Isdi Coders </footer>
    `;
  }
}
