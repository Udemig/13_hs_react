import ProductCard from "../components/ProductCard";
import { queryByRole, render, screen } from "@testing-library/react";
import { mockProducts } from "../utils/constants";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import userEvent from "@testing-library/user-event";
import { addToCart } from "../features/cart/cartSlice";

// addToCart action'ını mock et
jest.mock("../features/cart/cartSlice", () => ({
  addToCart: jest.fn((payload) => ({
    type: "cart/addToCart",
    payload,
  })),
}));

const middlewares = [thunk];
const createMockStore = configureStore(middlewares);

describe("ProductCard Component Testleri", () => {
  // sahte store oluştur
  const store = createMockStore({});

  // her testten önce mock'lar temizlenir
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Prop olarak aldığı ürün bilgileri görüntülenir", () => {
    // ProductCard component'i render et
    render(
      <Provider store={store}>
        <ProductCard product={mockProducts[0]} />
      </Provider>
    );

    // ürün adı ve fiyat görüntüleniyor mu
    expect(screen.getByText("Bal Badem")).toBeInTheDocument();
    expect(screen.getByText(/25/i)).toBeInTheDocument();

    // resim doğru kaynağa sahip mi
    const img = screen.getByAltText("Bal Badem");
    expect(img).toHaveAttribute("src", "/images/ice-2.png");
  });

  test("Format butonları aracılığıyla seçilen format değiştirebilir ", async () => {
    // user event kurulum
    const user = userEvent.setup();

    // ProductCard component'i render et
    render(
      <Provider store={store}>
        <ProductCard product={mockProducts[0]} />
      </Provider>
    );

    // format butonlarını al
    const cornetBtn = screen.getByRole("button", { name: /külah/i });
    const cupBtn = screen.getByRole("button", { name: /bardak/i });

    // butonların arkaplan rengi gri mi kontrol et
    expect(cornetBtn).toHaveClass("bg-gray-100");
    expect(cupBtn).toHaveClass("bg-gray-100");

    // sepete ekle butonu ekranda yoktur
    let basketBtn = screen.queryByRole("button", { name: /sepete ekle/i });
    expect(basketBtn).not.toBeInTheDocument();

    // bardakta butonuna tıkla
    await user.click(cupBtn);

    // bardakta butonun arkplan rengi kırmızı mı kontrol et
    expect(cupBtn).toHaveClass("bg-red-500");

    // külahta butonun arkaplan rengi gri mi kontrol et
    expect(cornetBtn).toHaveClass("bg-gray-100");

    // sepete ekle butonu ekranda görünür
    basketBtn = screen.queryByRole("button", { name: /sepete ekle/i });
    expect(basketBtn).toBeInTheDocument();

    // külahta butonuna tıkla
    await user.click(cornetBtn);

    // külahta butonun arkaplan rengi kırmızı mı kontrol et
    expect(cornetBtn).toHaveClass("bg-red-500");

    // bardakta butonun arkaplan rengi gri mi kontrol et
    expect(cupBtn).toHaveClass("bg-gray-100");

    // külahta butonuna tıkla
    await user.click(cornetBtn);

    // her iki butonun arkaplan rengi gri mı kontrol et
    expect(cornetBtn).toHaveClass("bg-gray-100");
    expect(cupBtn).toHaveClass("bg-gray-100");

    // sepete ekle butonu ekranda yok mu kontrol et
    basketBtn = screen.queryByRole("button", { name: /sepete ekle/i });
    expect(basketBtn).not.toBeInTheDocument();
  });

  test("Sepete ekle butonuna tıklanınca seçilen format sepete eklenir", async () => {
    // user event kurulum
    const user = userEvent.setup();

    // ProductCard component'i render et
    render(
      <Provider store={store}>
        <ProductCard product={mockProducts[0]} />
      </Provider>
    );

    // bardakta butonuna tıkla
    const cupBtn = screen.getByRole("button", { name: /bardak/i });
    await user.click(cupBtn);

    // sepete ekle butonuna tıkla
    const basketBtn = screen.getByRole("button", { name: /sepete ekle/i });
    await user.click(basketBtn);

    // aksiyon fonksiyonu doğru parametreler çağrıldı mı kontrol et
    expect(addToCart).toHaveBeenCalledWith({
      ...mockProducts[0],
      format: "bardak",
    });

    // sepet ekle butonu ekrandan gider
    expect(basketBtn).not.toBeInTheDocument();
  });
});
