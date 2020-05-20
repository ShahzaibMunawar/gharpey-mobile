import axios from "axios";

export default axios.create({
  // baseURL: "https://pokeapi.co/api/v2/berry/1"
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer eEPcF2WOvZzMQa2nulEauFRkPSzUVY2Fr2QJaVYevDvd-6Gse_gkj4tu80fF33l3kuhthDYHy1UNI85P_LG5hlQ9ceEd9-N8bky_SKxdfoMy1mTGoYI4eW9ERTW7XXYx"
  }
});
