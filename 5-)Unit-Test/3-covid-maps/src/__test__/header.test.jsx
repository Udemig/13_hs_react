import { getByTestId, render, screen } from "@testing-library/react";
import Header from "../pages/detail/header";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import { mockDetailData } from "../utils/constants";

// sahte store kurulumu
const createMockStore = configureStore([thunk]);

it("store yüklenme durumundayken ekrana loader gelir", () => {
  // bu teste özel loading durumunda sahte bir store oluştur
  const mockStore = createMockStore({
    isLoading: true,
    error: null,
    data: null,
  });

  // component içerisinde react-router-dom ve redux elementleri kullanıldığı için renderlaken gerekli sağlıyıcalarla sarmaladık  ve gerçekten api isteği atmaması için store yerine sahte store verdik
  render(
    <Provider store={mockStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  // ekrana loader geldi mi kontrol et
  screen.getByTestId("loader");
});

it("store'a veri gelediğinde ekrana ülke ismi ve bayrağı basılır", () => {
  // bu test seneryosuna uygun sahte store oluştur
  const mockStore = createMockStore({
    isLoading: false,
    error: null,
    data: mockDetailData,
  });

  // component'ı renderla
  render(
    <Provider store={mockStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  // ekranda loader yoktur
  const loader = screen.queryByTestId("loader");
  expect(loader).toBeNull();

  // ülke ismi ekranda mı
  screen.getByRole("heading", { name: mockDetailData.country });

  // ülke bayrağı ekranda mı
  const img = screen.getByAltText(mockDetailData.flag.alt);

  // ülke bayrağının kaynağı (src) doğru mu
  expect(img).toHaveAttribute("src", mockDetailData.flag.png);
});
