import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import Content from "../pages/detail/content";
import { mockDetailData } from "../utils/constants";

const createMockStore = configureStore([thunk]);

// TDD - Test Driven Development
test("store yüklenme durumundayken ekrana loader gelir", () => {
  const mockStore = createMockStore({ isLoading: true, error: null, data: null });

  render(
    <Provider store={mockStore}>
      <Content />
    </Provider>
  );

  screen.getAllByTestId("loader");
});

test("store hata durumundayken ekrana error gelir", () => {
  const mockStore = createMockStore({ isLoading: false, error: "İnternetiniz çok yavaş", data: null });

  render(
    <Provider store={mockStore}>
      <Content />
    </Provider>
  );

  screen.getByTestId("error");
});

test("store'a veri geldiğinde nesnedeki her bir değer ekrana basılır", () => {
  const mockStore = createMockStore({ isLoading: false, error: null, data: mockDetailData });

  render(
    <Provider store={mockStore}>
      <Content />
    </Provider>
  );

  // data nesnesini diziye çevir
  const arr = Object.entries(mockDetailData).filter(([key]) => key !== "flag");

  // dizideki her bir değeri için kart içerisinde bilgiler ekrana basılır
  arr.forEach((item) => {
    // ekrana item'ın key değeri basılıyorumu
    screen.getByText(item[0]);

    // ekrana item'ın value değeri basılır
    screen.getByText(item[1]);
  });
});
