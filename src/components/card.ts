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
    const id = this.pokemon.url.split('/').filter(Boolean).pop();
    return `
  
    <li><p> ${id} </p> <a href="https://pokeapi.co/api/v2/pokemon/${this.pokemon.name}"> 
    <div class = image-container><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif" height="120" width="120"></div>
    <p class = "pokemon-name">${this.pokemon.name}</p> </a></li>
      `;
  }
}
