import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App.jsx";
import { UserProvider } from "./context/userContext.jsx";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { ProductProvider } from "./context/productContext.jsx";

createRoot(document.getElementById("root")).render(
  <ProductProvider>
    <StrictMode>
      <ToastContainer />
      <App />
    </StrictMode>
  </ProductProvider>
);
