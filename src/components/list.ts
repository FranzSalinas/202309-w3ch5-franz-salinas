import { ApiRepo } from '../data/api.repo';
import { Pokemon } from '../models/pokemon';
import { Card } from './card';
import { Component } from './components';

export class List extends Component {
  pokemons: Pokemon[];
  repo: ApiRepo;

  constructor(selector: string) {
    super(selector);
    this.repo = new ApiRepo();
    this.pokemons = [];
    this.loadPokemon();
    console.log('Firts Load');
    console.log(this.pokemons);
    this.render();
  }

  async loadPokemon() {
    try {
      this.pokemons = await this.repo.getPokemon();
      console.log('Load from Api');
      console.log(this.pokemons);
      this.clear();
      this.render();
    } catch (error) {
      console.log((error as Error).message);
    }
  }

  render() {
    this.template = this.createTemplate();
    super.render();
    return this.pokemons.results.map((item) => new Card('ul', item));
  }

  createTemplate() {
    return `
    <ul></ul>   
    `;
  }
}
