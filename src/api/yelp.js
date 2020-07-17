import axios from "axios";

export default axios.create({
  // baseURL: "https://pokeapi.co/api/v2/berry/1"
  baseURL: "https://sydiatech.com/api/user",
  headers: {
    Authorization:
      "Bearer 20|aSxzX1bRJsyzTJZFbFomsnrJOIGzDVLGH6plXKMH7uBj2PC4QqG5O0YL0IbByXsYunsvfH3RciO6vKQ4"
  }
});
