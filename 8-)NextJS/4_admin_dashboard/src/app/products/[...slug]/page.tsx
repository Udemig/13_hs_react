import ProductForm from "@/components/products/product-form";
import { Product } from "@/types";
import { getProduct } from "@/utils/service";
import { notFound } from "next/navigation";
import { FC } from "react";

interface Props {
  params: Promise<{
    slug: string[];
  }>;
}

const Page: FC<Props> = async ({ params }) => {
  // urldeki parametreleri al
  const { slug } = await params;

  // düzenlenicek ürünün bilgilerinin tutulacağı değişken
  let product: Product | null = null;

  // düzenlem modundaysak düzenlenicek elemanın bilgilerini al
  if (slug[0] === "edit" && slug[1]) {
    try {
      // api isteği at
      product = await getProduct(slug[1]);

      // ürün bulunamadıysa: 404
      if (!product) return notFound();
    } catch (error) {
      // ürün bulunamadıysa: 404
      notFound();
    }
  }

  // sayfa başlığı
  const pageTitle = product ? "Ürünü Düzenle" : "Yeni Ürün Oluştur";

  return (
    <div className="page container mx-auto p-4 md:p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="title">{pageTitle}</h1>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <ProductForm product={product} />
      </div>
    </div>
  );
};

export default Page;
