import CartItem from "@/components/cart/cart-item";
import EmptyCart from "@/components/cart/empty-cart";
import { getCart } from "@/service/basket-service";
import { FC } from "react";

const CartPage: FC = async () => {
  const { cart } = await getCart();

  if (cart.items.length === 0) return <EmptyCart />;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        Alışveriş Sepeti
      </h1>

      <div className="lg:flex gap-6">
        <div className="lg:w-2/3">
          <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
            <div className="flex items-center justify-between p-4 border-b">
              <h2>Sepetiniz ({cart.items.length})</h2>

              <button>Temizle</button>
            </div>

            <ul>
              {cart.items.map((item) => (
                <CartItem key={item._id} item={item} />
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h1>Sipariş Özeti</h1>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
