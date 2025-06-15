import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleCart,
  removeFromCart,
  updateQuantity,
  clearCart,
} from "./cartSlice";
import { IoMdClose } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

const Cart = () => {
  const dispatch = useDispatch();
  const { isCartOpen, items } = useSelector((store) => store.cart);

  if (!isCartOpen) return null;

  const handleCloseCart = () => dispatch(toggleCart());
  const handleRemoveFromCart = (id) => dispatch(removeFromCart({ id }));
  const handleUpdateQuantity = (id, quantity) =>
    dispatch(updateQuantity({ id, quantity }));
  const handleCheckout = () => {
    dispatch(clearCart());
    dispatch(toggleCart());
    // In a real app, you'd show a success message (e.g., toast)
    alert("Siparişiniz başarıyla alındı!");
  };

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = 20; // Fixed shipping cost
  const total = subtotal + shipping;

  return (
    <div
      data-testid="cart-modal"
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end"
    >
      <div className="bg-white h-full w-full max-w-lg p-6 flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Sipariş</h2>
          <button
            data-testid="close-btn"
            onClick={handleCloseCart}
            className="text-2xl"
          >
            <IoMdClose />
          </button>
        </div>
        {items.length === 0 ? (
          <div className="flex-grow flex items-center justify-center">
            <p className="text-gray-500">Sepetiniz boş.</p>
          </div>
        ) : (
          <div className="flex-grow overflow-y-auto">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between py-4 border-b"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-contain"
                  />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500 capitalize">
                      {item.format}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border rounded-full">
                    <button
                      onClick={() => handleUpdateQuantity(item.id, -1)}
                      className="px-3 py-1"
                    >
                      -
                    </button>
                    <span className="px-3">{item.quantity}</span>
                    <button
                      onClick={() => handleUpdateQuantity(item.id, 1)}
                      className="px-3 py-1"
                    >
                      +
                    </button>
                  </div>
                  <p className="font-bold w-16 text-right">
                    ₺{item.price * item.quantity}
                  </p>
                  <button
                    data-testid="remove-btn"
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 text-xl"
                  >
                    <FiTrash2 />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="mt-6 border-t pt-6">
          <div className="flex justify-between mb-2">
            <span>Ara Toplam</span>
            <span>₺{subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span>Kargo</span>
            <span>₺{shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Toplam</span>
            <span>₺{total.toFixed(2)}</span>
          </div>
          <button
            onClick={handleCheckout}
            disabled={items.length === 0}
            className="w-full bg-red-600 text-white py-3 rounded-lg mt-6 font-bold hover:bg-red-700 disabled:bg-gray-400"
          >
            Sipariş Ver
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
