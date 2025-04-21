// CreateBrowserRouter ile routes oluşturma
import React from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Products from "./pages/Products";
import Category from "./pages/Category";
import Story from "./pages/Story";
import Noval from "./pages/Noval";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/kitaplar", element: <Products /> },
      { path: "/detay/:id", element: <Detail /> },
      {
        path: "/kategori",
        element: <Category />,
        children: [
          { path: "hikaye", element: <Story /> },
          { path: "roman", element: <Noval /> },
        ],
      },
      { path: "/notfound", element: <NotFound /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
