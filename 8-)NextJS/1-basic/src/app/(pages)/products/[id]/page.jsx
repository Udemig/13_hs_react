import React from "react";
import Link from "next/link";

//! statik metadata tanımı
// export const metadata = {
//   title: "Ürün Detay",
//   description: "Products Sayfası",
// };

//! dinamik metadata tanımı
export const generateMetadata = async ({ params }) => {
  const { id } = await params;

  // api'dan ürün verilierini çekebiliriz.

  return {
    title: `Ürün Detay - ${id}`,
    description: `Products Sayfası`,
  };
};

// Next.js dinamik sayfalarında url'deki parametrelere componenta otomatik bir şekilde prop olarak gelir
const Page = async ({ params }) => {
  const { id } = await params;

  return (
    <div className="p-20">
      <Link href="." className="text-2xl">
        Geri Dön
      </Link>

      <h1 className="text-4xl font-bold my-10">Detay Sayfası</h1>
      <h1 className="text-2xl font-bold">ID: {id}</h1>
    </div>
  );
};

export default Page;
