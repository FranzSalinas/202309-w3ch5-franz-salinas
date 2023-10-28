import { Pokemon } from '../models/pokemon';
import { Component } from './components';

export class Card extends Component {
  pokemon: Pokemon;

  constructor(selector: string, pokemon: Pokemon) {
    super(selector);
    this.pokemon = { ...pokemon };
    this.manageComponent();
  }

  manageComponent() {
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
   <li> ${this.pokemon.name} </li>
      `;
  }
}
