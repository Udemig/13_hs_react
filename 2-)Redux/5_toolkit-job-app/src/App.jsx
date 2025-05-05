import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./pages/form";
import Home from "./pages/home";
import Header from "./components/header";
import { useEffect } from "react";
import api from "./utils/api";
import { useDispatch } from "react-redux";
import { setError, setJobs, setLoading } from "./redux/slices/jobSlice";

const App = () => {
  const dispatch = useDispatch();

  // api'dan iş verilerini al ve reducer'daki state'e aktar
  useEffect(() => {
    dispatch(setLoading());

    api
      .get("/jobs")
      .then((res) => dispatch(setJobs(res.data)))
      .catch((err) => dispatch(setError(err)));
  }, []);

  return (
    <BrowserRouter>
      <div className="layout">
        <Header />

        <div className="page">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/job/:mode" element={<Form />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
