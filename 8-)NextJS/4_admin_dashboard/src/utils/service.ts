import { Order, Product, User } from "@/types";

const API_URL = "http://localhost:3030";

// kullanıcıyı sil
const deleteUser = async (id: string): Promise<void> => {
  const res = await fetch(`${API_URL}/users/${id}`, {
    method: "DELETE",
  });

  return res.json();
};

// kullanıcıları getir
const getUsers = async (): Promise<User[]> => {
  const res = await fetch(`${API_URL}/users`);

  return res.json();
};

// bir kullanıcıyı getir
const getUser = async (id: string): Promise<User> => {
  const res = await fetch(`${API_URL}/users/${id}`);

  return res.json();
};

// bütün siparişleri getir
const getOrders = async (): Promise<Order[]> => {
  const res = await fetch(`${API_URL}/orders`);

  return res.json();
};

// bütün ürünleri getir
const getProducts = async (): Promise<Product[]> => {
  const res = await fetch(`${API_URL}/products`);

  return res.json();
};

// bir ürünü geyir
const getProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`${API_URL}/products/${id}`);

  return res.json();
};

// ürünü sil
const deleteProduct = async (id: string): Promise<void> => {
  const res = await fetch(`${API_URL}/products/${id}`, {
    method: "DELETE",
  });

  return res.json();
};

// ürün oluştur
const createProduct = async (product: Omit<Product, "id">): Promise<Product> => {
  const res = await fetch(`${API_URL}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  return res.json();
};

// ürünü güncelle
const updateProduct = async (id: string, product: Omit<Product, "id">): Promise<Product> => {
  const res = await fetch(`${API_URL}/products/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  return res.json();
};

export {
  getOrders,
  getProducts,
  getProduct,
  deleteProduct,
  createProduct,
  updateProduct,
  getUsers,
  getUser,
  deleteUser,
};
