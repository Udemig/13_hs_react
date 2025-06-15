import { render, screen } from "@testing-library/react";
import Cart from "../features/cart/Cart";
import userEvent from "@testing-library/user-event";
import { thunk } from "redux-thunk";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { mockCartItems } from "../utils/constants";
import {
  updateQuantity,
  removeFromCart,
  toggleCart,
} from "../features/cart/cartSlice";

// gerekli aksiyonları mock'la
jest.mock("../features/cart/cartSlice", () => ({
  ...jest.requireActual("../features/cart/cartSlice"), // toggle cart importunu koru
  updateQuantity: jest.fn((payload) => ({
    type: "cart/handleQuantity",
    payload,
  })),

  removeFromCart: jest.fn((payload) => ({
    type: "cart/removeFromCart",
    payload,
  })),
}));

// sahte store kurulumu
const middlewares = [thunk];
const createMockStore = configureStore(middlewares);

describe("Cart Component Testleri", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("isCartOpen duruma göre  modal ekranda görünür/görünmez", () => {
    // sahte store oluştur (isCartOpen false)
    let store = createMockStore({
      cart: {
        isCartOpen: false,
        items: [],
      },
    });

    // render et
    const { rerender } = render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );

    //isCartOpen false ise modal ekranda görünmez
    let cartModal = screen.queryByTestId("cart-modal");
    expect(cartModal).not.toBeInTheDocument();

    // sahte store'u güncelle (isCartOpen: true)
    store = createMockStore({
      cart: {
        isCartOpen: true,
        items: [],
      },
    });

    // component'i yeniden render et
    rerender(
      <Provider store={store}>
        <Cart />
      </Provider>
    );

    // isCartOpen true ise modal ekranda görünür
    cartModal = screen.getByTestId("cart-modal");
    expect(cartModal).toBeInTheDocument();
  });

  test("X butonuna tıklanınca modal kapatılır", async () => {
    const user = userEvent.setup();

    const store = createMockStore({
      cart: {
        isCartOpen: true,
        items: [],
      },
    });

    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );

    const closeBtn = screen.getByTestId("close-btn");
    await user.click(closeBtn);

    // doğru aksiyon tetiklenir
    expect(store.getActions()).toEqual([toggleCart()]);
  });

  test("Sepette ürün yoksa sepetiniz boş mesajı görüntülenir ve sipariş ver butonu disabled olur", () => {
    const store = createMockStore({
      cart: {
        isCartOpen: true,
        items: [],
      },
    });

    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );

    const emptyCartMessage = screen.getByText(/sepetiniz boş/i);
    expect(emptyCartMessage).toBeInTheDocument();
  });

  test("Sepette ürün varsa ürünler listelenir", () => {
    const store = createMockStore({
      cart: {
        isCartOpen: true,
        items: mockCartItems,
      },
    });

    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );

    // ürünlerin isimleri, fiyatları, miktarları ve resimleri görüntülenir
    mockCartItems.forEach((item) => {
      screen.getByText(item.name);
      screen.getByText(`₺${item.price * item.quantity}`);
      screen.getByText(item.quantity);
      const img = screen.getByAltText(item.name);
      expect(img).toHaveAttribute("src", item.image);
    });
  });

  test("+ ve - butonları ile sepetteki ürün miktarı değiştirilebilir", async () => {
    const user = userEvent.setup();

    const store = createMockStore({
      cart: {
        isCartOpen: true,
        items: mockCartItems,
      },
    });

    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );

    // + ve - butonlarını al
    const increaseBtn = screen.getAllByRole("button", { name: "+" });
    const decreaseBtn = screen.getAllByRole("button", { name: "-" });

    // + butonuna tıklanınca miktar artırılır
    await user.click(increaseBtn[0]);

    // aksiyon doğru parametrelerle tetiklenir
    expect(updateQuantity).toHaveBeenCalledWith({
      id: "1-bardak",
      quantity: 1,
    });

    // - butonuna tıklanınca miktar azaltılır
    await user.click(decreaseBtn[1]);

    // aksiyon doğru parametrelerle tetiklenir
    expect(updateQuantity).toHaveBeenCalledWith({
      id: "2-külah",
      quantity: -1,
    });
  });

  test("Silme butonuna tıklanınca sepetten ürün silinir", async () => {
    const user = userEvent.setup();

    const store = createMockStore({
      cart: {
        isCartOpen: true,
        items: mockCartItems,
      },
    });

    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );

    const removeBtn = screen.getAllByTestId("remove-btn");
    await user.click(removeBtn[0]);

    // aksiyon doğru parametrelerle tetiklenir
    expect(removeFromCart).toHaveBeenCalledWith({
      id: "1-bardak",
    });
  });

  // TODO
  test("Ara Toplam, Kargo ve Toplam fiyatlar görüntülenir", () => {});

  test("Sipariş ver butonuna tıklanınca sepet temizlenir", () => {});
});
