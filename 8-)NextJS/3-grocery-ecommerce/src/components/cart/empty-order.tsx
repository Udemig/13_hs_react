import Link from "next/link";
import { FC } from "react";
import { MdRemoveShoppingCart } from "react-icons/md";

const EmptyOrder: FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-center min-h-[60vh] flex flex-col items-center justify-center">
      <MdRemoveShoppingCart className="text-6xl text-gray-400 mb-4" />

      <h1 className="text-gray-600 mb-6 font-semibold text-lg">
        Daha önce verdiğiniz sipariş bulunamaktadır
      </h1>

      <Link
        href="/"
        className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
      >
        Alışverişe Başla
      </Link>
    </div>
  );
};

export default EmptyOrder;
