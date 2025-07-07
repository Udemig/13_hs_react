import { useState, useEffect, type FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";
import Form from "./pages/form";
import PageLoader from "./components/loader/page-loader";
import Layout from "./components/layout";

const App: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Sistem seçeneklerinin değişim olayını izle (arkaplan için)

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) return <PageLoader />;

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/detail/:id" element={<Detail />} />

          <Route path="/create" element={<Form />} />
          <Route path="/edit/:id" element={<Form />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
