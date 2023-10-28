import { Pokemon } from '../models/pokemon';

export class ApiRepo {
  apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  async getPokemon(): Promise<Pokemon[]> {
    const response = await fetch(this.apiUrl);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }
}
