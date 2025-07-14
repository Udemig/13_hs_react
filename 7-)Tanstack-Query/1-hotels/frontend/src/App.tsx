import type { FC } from "react";
import Header from "./components/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import DetailPage from "./pages/detail";
import CreatePage from "./pages/create";

const App: FC = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-1 container my-5">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/places/:id" element={<DetailPage />} />
            <Route path="/admin/create" element={<CreatePage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
