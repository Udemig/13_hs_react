import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import Detail from "./pages/detail";

const App = () => {
  return (
    <BrowserRouter>
      <div className="h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:country" element={<Detail />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
