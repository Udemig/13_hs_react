import { render, screen } from "@testing-library/react";
import ProductsList from "../features/products/ProductsList";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { thunk } from "redux-thunk";
import { mockProducts } from "../utils/constants";
import { fetchProducts } from "../features/products/productsSlice";

// fetcchProducts aksiyonu mocklayalım
jest.mock("../features/products/productsSlice", () => ({
  fetchProducts: jest.fn(() => ({
    type: "products/fetchProducts/fulfilled",
    payload: mockProducts,
  })),
}));

// sahte store'lar oluşturmak için kurulum
const middlewares = [thunk];
const createMockStore = configureStore(middlewares);

describe("ProductList Component Testleri", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Idle durumunda fetch products action'ı dispatch edilir", async () => {
    // test seneryosuna uygun sahte store oluştur
    const store = createMockStore({
      products: {
        items: [],
        status: "idle",
        error: null,
      },
    });

    // ProductsList component'i render et
    render(
      <Provider store={store}>
        <ProductsList />
      </Provider>
    );

    // fetchProducts action'ının dispatch edildiğini kontrol et
    expect(fetchProducts).toHaveBeenCalled();
  });

  test("Loading durumunda yükleniyor mesajı görüntülenir", () => {
    const store = createMockStore({
      products: {
        items: [],
        status: "loading",
        error: null,
      },
    });

    render(
      <Provider store={store}>
        <ProductsList />
      </Provider>
    );

    expect(screen.getByTestId("loading-message")).toBeInTheDocument();
  });

  test("Hata durumunda hata mesajı görüntülenir", () => {
    const errorMessage = "Network Error";
    const store = createMockStore({
      products: {
        items: [],
        status: "failed",
        error: errorMessage,
      },
    });

    render(
      <Provider store={store}>
        <ProductsList />
      </Provider>
    );

    expect(screen.getByTestId("error-message")).toBeInTheDocument();
  });

  test("Başarılı durumda ürünler görüntülenir", () => {
    const store = createMockStore({
      products: {
        items: mockProducts,
        status: "succeeded",
        error: null,
      },
    });

    render(
      <Provider store={store}>
        <ProductsList />
      </Provider>
    );

    mockProducts.forEach((product) => {
      expect(screen.getByText(product.name)).toBeInTheDocument();
    });
  });
});
