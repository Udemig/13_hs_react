import { Product } from "@/types";
import { categories, inputs } from "@/utils/constants";
import { FC } from "react";
import Field from "./field";
import ImagePreview from "./image-preview";
import { createProduct, updateProduct } from "@/utils/service";
import { redirect } from "next/navigation";
import { isRedirectError } from "next/dist/client/components/redirect-error";

// action anında kullanılacak fonksiyon
// bu yöntem sayesinde client component yapmdan formu yönetebiliyoruz
const handleSubmit = async (formData: FormData) => {
  "use server"; // server action

  // form verilerini al
  const id = formData.get("id") as string;
  const name = formData.get("name") as string;
  const brand = formData.get("brand") as string;
  const price = formData.get("price") as string;
  const stock = formData.get("stock") as string;
  const rating = formData.get("rating") as string;
  const reviews_count = formData.get("reviews_count") as string;
  const category = formData.get("category") as string;
  const image_url = formData.get("image_url") as string;
  const description = formData.get("description") as string;

  // ürün bilgelerini nesne haline getir
  const productData = {
    name,
    brand,
    price: Number(price),
    stock: Number(stock),
    rating: Number(rating),
    reviews_count: Number(reviews_count),
    category,
    image_url,
    description,
  };

  try {
    if (id) {
      // güncelleme modundaysak
      await updateProduct(id, productData);
    } else {
      // ekleme modundaysak
      await createProduct(productData);
    }

    // kullanıcıyı yönlendir
    redirect("/products");
  } catch (error) {
    console.log(error);
    // fırlatılan hata redirect kaynaklıysa  hatayı tekrar fırlatıyoruz (redirectin çalışması için)
    if (isRedirectError(error)) {
      throw error;
    }

    throw new Error("Ürün oluşturma hatası");
  }
};

// tip
interface Props {
  product: Product | null;
}

// component
const ProductForm: FC<Props> = ({ product }) => {
  return (
    <form action={handleSubmit} className="space-y-6">
      {/* Düzenleme moduna özel handleSubmit methoduna id'yi aktarabilmek için gizli input */}
      {product && <input type="hidden" name="id" value={product.id} />}

      <div className="grid md:grid-cols-2 gap-6">
        {/* Sol Sütun */}
        <div className="space-y-6">
          {/* inputlar */}
          {inputs.map((input, key) => (
            <Field key={key} htmlFor={input.name} label={input.label}>
              <input
                id={input.name}
                name={input.name}
                type={input.type}
                className="input"
                required
                defaultValue={product?.[input.name as keyof Product]}
              />
            </Field>
          ))}

          {/* Kategori Select */}
          <Field htmlFor="category" label="Kategori">
            <select name="category" id="category" className="input" required defaultValue={product?.category}>
              {categories.map((cat, key) => (
                <option key={key} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </Field>
        </div>

        {/* Sağ Sütun */}
        <div className="space-y-6">
          {/* Resim Inputu */}
          <Field htmlFor="image_url" label="Resim URL">
            <input type="text" name="image_url" id="image_url" className="input" defaultValue={product?.image_url} />
          </Field>

          {/* Resim Önizleme */}
          <ImagePreview imageInputId="image_url" />

          {/* Ürün Açıklaması */}
          <Field htmlFor="description" label="Açıklama">
            <textarea
              name="description"
              id="description"
              className="input sm:text-sm md:min-h-[220px]"
              required
              rows={5}
              defaultValue={product?.description}
            ></textarea>
          </Field>
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <button className="px-6 py-2 rounded-md text-white transition bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 cursor-pointer disabled:cursor-not-allowed">
          {product ? "Güncelle" : "Oluştur"}
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
