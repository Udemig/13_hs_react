"use client";
import { deleteUser } from "@/utils/service";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { toast } from "react-toastify";

interface Props {
  id: string;
}

const BanButton: FC<Props> = ({ id }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  // butona tıklanınca
  const handleDelete = async () => {
    if (!confirm("Bu kullanıcıyı silmek istediğinizden emin misiniz?")) return;

    setIsLoading(true);
    deleteUser(id)
      .then(() => {
        toast.success("Kullanıcı engellendi");
        router.refresh();
      })
      .catch(() => toast.error("İşlem başarısız"))
      .finally(() => setIsLoading(false));
  };

  return (
    <button
      disabled={isLoading}
      onClick={handleDelete}
      className="button hover:bg-red-200 text-red-500 cursor-pointer disabled:cursor-not-allowed"
    >
      <Trash className="size-5" />
    </button>
  );
};

export default BanButton;
