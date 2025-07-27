import { GetAllProductsResponse, GetProductByIdResponse } from "@/types";

// api adresi
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// tüm ürünleri getir
const getAllProducts = async (): GetAllProductsResponse => {
  const res = await fetch(`${BASE_URL}/api/groceries`);
  return res.json();
};

// tek ürün detayı
const getProductById = async (id: string): GetProductByIdResponse => {
  const res = await fetch(`${BASE_URL}/api/groceries/${id}`);
  return res.json();
};

export { getAllProducts, getProductById };
