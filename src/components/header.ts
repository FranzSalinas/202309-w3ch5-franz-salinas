import { Component } from './components';

export class Header extends Component {
  constructor(selector: string) {
    super(selector);

    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
      <header role='heading' class="main-header">
      <<img class= "main-logo" src="International_Pokémon_logo.svg.png" alt="Logo de Pokemon">
      <h1>Poke Api</h1>
      </header>
    <div class="main-container">
    </div>
    `;
  }
}
