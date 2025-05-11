import { BrowserRouter, Route, Routes } from "react-router-dom";
import Map from "./pages/map";
import List from "./pages/list/index";
import Header from "./components/header/index";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getFlights } from "./redux/actions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFlights());
  }, []);

  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Map />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
