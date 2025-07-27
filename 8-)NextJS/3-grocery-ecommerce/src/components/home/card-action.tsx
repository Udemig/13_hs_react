"use client";

import { addToBasket } from "@/service/basket-service";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { FaPlus, FaSpinner } from "react-icons/fa";
import { toast } from "react-toastify";

interface Props {
  groceryId: string;
}

const CardAction: FC<Props> = ({ groceryId }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleBasket = async () => {
    setLoading(true);

    addToBasket(groceryId, 1)
      .then(() => {
        toast.success("Ürün sepete eklendi");
        router.refresh();
      })
      .catch((error) => toast.error(error.message))
      .finally(() => setLoading(false));
  };

  return (
    <button
      onClick={handleBasket}
      className="bg-green-500 text-white shadow-md rounded-full p-2 cursor-pointer transition-all hover:bg-green-600 hover:shadow-md disabled:brightness-75"
    >
      {loading ? <FaSpinner className="animate-spin" /> : <FaPlus />}
    </button>
  );
};

export default CardAction;
