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
          <Route path="/profile" element={<h1>Profil Sayfası</h1>} />
          <Route path="/setting" element={<h1>Ayarlar Sayfası</h1>} />
          <Route path="/messages" element={<h1>Mesalar Sayfası</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
