import Header from "./components/header";
import Counter from "./pages/counter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Crud from "./pages/crud";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Crud />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
