import axios from "axios";

const api = axios.create({
  // api url
  baseURL: "http://localhost:5005/api",
  // cookie ile saklanan verileri her istekte api'a gönder
  withCredentials: true,
  // api'a gönderilen verilerin tipi
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
