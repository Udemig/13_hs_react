import { Order } from "@/types";

const API_URL = "http://localhost:3030";

// bütün siparişleri getir
const getOrders = async (): Promise<Order[]> => {
  const res = await fetch(`${API_URL}/orders`);

  return res.json();
};

export { getOrders };
