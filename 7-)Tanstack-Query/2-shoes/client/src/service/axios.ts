import axios from "axios";
import { authService } from "./auth";

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

// axios interceptor
// api'a atılan her istekte veya api'dan gelen her cevapta bir fonksiyon çalıştırmaya yarar
api.interceptors.response.use(
  // api'dan olumlu cevap gelirse çalışır:
  (response) => response,
  // api'dan olumsuz cevap gelirse çalışır:
  async (error) => {
    // hata aldığımız api isteğini değişkene aktar
    const originalRequest = error.config;

    // hata access token'ının süresi dolmasından kaynaklanıyorsa:
    if (
      error.response.status === 401 &&
      error.response.data.message === "Access token expired"
    ) {
      try {
        // refreh token ile yeni access token al
        await authService.refresh();

        // access token'ın süresinn dolmasından kaynaklı hata aldığımız api isteğini tekrar at
        return api.request(originalRequest);
      } catch (err) {
        // refresh token'ın süresi dolduysa çıkış yap:
        await authService.logout();

        // login sayfasına yönlendir
        window.location.href = "/login";

        // hatayı fırlat
        return Promise.reject(err);
      }
    }
  }
);

export default api;
