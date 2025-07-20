import Link from "next/link";

export const metadata = {
  title: "Products",
  description: "Products Sayfası",
  keywords: ["products", "sayfa", "ürün", "ürünler", "ürünler sayfası"],
};

const Page = () => {
  return (
    <div className="p-20">
      <h1 className="text-4xl font-bold">Products Sayfası</h1>

      <div className="flex flex-col gap-4 text-2xl mt-10">
        <Link href="/products/10">Product 10</Link>
        <Link href="/products/20">Product 20</Link>
        <Link href="/products/30">Product 30</Link>
        <Link href="/products/40">Product 40</Link>
      </div>
    </div>
  );
};

export default Page;
