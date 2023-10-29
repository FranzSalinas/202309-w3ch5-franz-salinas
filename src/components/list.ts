import { ApiRepo } from '../data/api.repo';
import { Pokemon } from '../models/pokemon';
import { Card } from './card';
import { Component } from './components';

export class List extends Component {
  pokemon: Pokemon[];
  repo: ApiRepo;

  constructor(selector: string) {
    super(selector);
    this.repo = new ApiRepo();
    this.pokemon = [];
    this.loadPokemon();
    console.log('Firts Load');
    console.log(this.pokemon);
    this.render();
  }

  async loadPokemon() {
    try {
      this.pokemon = await this.repo.getPokemon();
      console.log('Load from Api');
      console.log(this.pokemon);
      this.clear();
      this.render();
    } catch (error) {
      console.log((error as Error).message);
    }
  }

  render() {
    this.template = this.createTemplate();
    super.render();
    return this.pokemon.results.map((item: Pokemon) => new Card('ul', item));
  }

  createTemplate() {
    return `
    <ul class= ul-list></ul>
    <footer> Pueblo paleta </footer>   
    `;
  }
}
