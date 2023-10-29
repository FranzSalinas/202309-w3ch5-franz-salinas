import { ApiRepo } from '../data/api.repo';
import { Pokemon } from '../models/pokemon';
import { Card } from './card';
import { Component } from './components';

export class List extends Component {
  pokemon: Pokemon[];
  repo: ApiRepo;
  firtsPage: number;

  constructor(selector: string) {
    super(selector);
    this.firtsPage = 1;
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

  handlePreviousPage() {
    if (this.firtsPage === 1) {
      this.firtsPage = 1;
    } else {
      this.firtsPage -= 1;
    }

    this.clear();
    this.render();
  }

  handleNextPage() {
    if (this.firtsPage === 300) {
      this.firtsPage = 300;
    } else {
      this.firtsPage += 1;
    }

    this.clear();
    this.render();
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
