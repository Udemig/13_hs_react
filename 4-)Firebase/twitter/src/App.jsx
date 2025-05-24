import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Feed from "./pages/feed";
import Protected from "./components/protected";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        {/* Bu route grubuna sadece oturumu açıklar girebilir */}
        <Route element={<Protected />}>
          <Route path="/feed" element={<Feed />} />
          <Route path="/feed1" element={<Feed />} />
          <Route path="/feed2" element={<Feed />} />
          <Route path="/feed3" element={<Feed />} />
          <Route path="/feed4" element={<Feed />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
