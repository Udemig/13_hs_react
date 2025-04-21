// BrowserRouter ile routes oluşturma
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Header from "./components/Header";
import Products from "./pages/Products";
import Category from "./pages/Category";
import Story from "./pages/Story";
import Noval from "./pages/Noval";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kitaplar" element={<Products />} />
        <Route path="/detay/:id" element={<Detail />} />

        <Route path="/kategori" element={<Category />}>
          <Route path="hikaye" element={<Story />} />
          <Route path="roman" element={<Noval />} />
        </Route>
        {/* NotFound İçin Route */}
        <Route path="/notfound" element={<NotFound />} />
        {/* Belirtilen route'ların haricinde bir route'a yönlendirme yapılırsa Not Found sayfasına yönlendir */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
