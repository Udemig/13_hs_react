import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Header from "./components/Header";
import Products from "./pages/Products";
import Category from "./pages/Category";
import Story from "./components/Story";
import Noval from "./components/Noval";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ürünler" element={<Products />} />
        <Route path="/detay/:id" element={<Detail />} />

        <Route path="/kategori" element={<Category />}>
          <Route path="hikaye" element={<Story />} />
          <Route path="roman" element={<Noval />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
