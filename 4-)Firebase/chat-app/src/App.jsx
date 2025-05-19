import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Room from "./pages/room";
import Chat from "./pages/chat";
import Protected from "./components/protected";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        {/*
         * Sadece oturumu açık olan kullanıcıların girebileceği sayfaları * Protected kapsayıcı route ile sarmalarız
         */}
        <Route element={<Protected />}>
          <Route path="/room" element={<Room />} />
          <Route path="/chat/:room" element={<Chat />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
