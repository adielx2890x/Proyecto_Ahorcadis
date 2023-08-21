class PokenApi {
  constructor() {
    this._baseUrl = "https://pokeapi.co/api/v2/pokemon/"; //url
  }
  async getData(id) {
    //asycn, inidica que sera una funcion asincrona(se realiza una consula a la api de pkemon)
    const response = await fetch(this._baseUrl + (id - 1)); //realiza el proceso de consulta y guarda
    // los datos en response
    const data = await response.json(); //espera que el proceso de la linea 7(const response = await fetch(this.baseUrl);) 
    //termine, .json convierte los datos obtenidos a un array de objetos [{}]
    console.log(data);
    return data;
  }
}
export { PokenApi };
