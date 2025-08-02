"use client";

import { deleteProduct } from "@/utils/service";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { toast } from "react-toastify";

interface Props {
  id: string;
}

const DeleteButton: FC<Props> = ({ id }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  // butona tıklanınca
  const handleDelete = async () => {
    // kullanıcnın onayını al
    if (!confirm("Bu ürünü silmek istediğinizden emin misiniz?")) return;

    try {
      setIsLoading(true);
      await deleteProduct(id);
      router.refresh();
      toast.success("Ürün kaldırıldı");
    } catch {
      toast.error("Kaldırma işlemi başarısız");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      disabled={isLoading}
      onClick={handleDelete}
      className="flex-1 bg-red-50 text-red-600 px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-red-100 transition text-center border border-red-200 hover:border-red-300 cursor-pointer"
    >
      {isLoading ? "Siliniyor..." : "Sil"}
    </button>
  );
};

export default DeleteButton;
