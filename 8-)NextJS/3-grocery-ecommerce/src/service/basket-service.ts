import { CheckoutSingleItemResponse, GetCartResponse, Product } from "@/types";

// temel api adresi
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const userId = process.env.NEXT_PUBLIC_USER_ID;

// sepetteki ürünleri getir
const getCart = async (): GetCartResponse => {
  const res = await fetch(`${BASE_URL}/api/cart?userId=${userId}`);
  return res.json();
};

// sepete ürün ekle
const addToBasket = async (groceryId: string, quantity: number) => {
  const response = await fetch(`${BASE_URL}/api/cart`, {
    method: "POST",
    body: JSON.stringify({ userId, groceryId, quantity }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
};

// bir ürün için satın alma url'i oluştur
const checkoutSingleItem = async (
  grocery: Product,
  quantity: number
): CheckoutSingleItemResponse => {
  const body = {
    grocery: {
      _id: grocery._id,
      name: grocery.name,
      price: grocery.price,
      description: grocery.description,
    },
    quantity,
    customerInfo: {
      userId,
      name: "Furkan Evin",
      phone: "555 666 77 88",
      deliveryAddress: "istanbul 123 sok. 456 apt. 789",
      isDelivery: true,
    },
  };

  const res = await fetch(`${BASE_URL}/api/checkout`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
};

export { getCart, addToBasket, checkoutSingleItem };
