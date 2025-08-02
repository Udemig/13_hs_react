import Card from "@/components/products/card";
import { getProducts } from "@/utils/service";
import { Plus } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

const Products: FC = async () => {
  const products = await getProducts();

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Ürünler</h1>
            <p className="text-gray-600">Tüm ürünlerinizi yönetin</p>
          </div>

          <Link
            href="/products/create"
            className="rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 roundex-xl font-semibold hover:from-blue-700 hover:indigo-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2"
          >
            <Plus />
            Yeni Ürün Ekle
          </Link>
        </div>

        {/* Ürün Listesi */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
