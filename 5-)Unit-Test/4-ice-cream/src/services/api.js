import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000", // Assuming json-server runs on port 3000
});

export const getProducts = () => api.get("/products");
