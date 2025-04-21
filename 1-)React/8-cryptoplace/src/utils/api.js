import axios from "axios";

const api = axios.create({
  baseURL: "https://coinranking1.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "463cb6bdb3msh544272941ec8857p1bb2a9jsn24372257dfc0",
    "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  },
});

export default api;
