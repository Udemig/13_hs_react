import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <App />
    {/* react query devtools */}
    <ReactQueryDevtools initialIsOpen={false} />

    {/* toastify */}
    <ToastContainer autoClose={2000} />
  </QueryClientProvider>
);
