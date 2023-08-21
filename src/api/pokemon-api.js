class PokenApi {
    constructor() {
      this.baseUrl = "https://pokeapi.co/api/v2/";
    }
  
    async getPokemonData(pokemonName) {
      try {
        const response = await fetch(`${this.baseUrl}pokemon/${pokemonName}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
        throw error;
      }
    }
  }
  
  export { PokenApi };
  