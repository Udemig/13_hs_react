import axios from "axios";

const api = axios.create({
  baseURL: "https://yt-api.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "9ad75f446bmsha2604d32cecbfe0p102248jsn3d376b63008b",
    "x-rapidapi-host": "yt-api.p.rapidapi.com",
  },
  params: {
    geo: "TR",
    lang: "tr",
  },
});

export default api;
