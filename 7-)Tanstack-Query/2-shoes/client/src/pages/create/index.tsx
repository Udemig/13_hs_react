import type { FC } from "react";
import Form from "../../components/form";
import { useCreateMutation } from "../../service/shoe";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "lucide-react";

const Create: FC = () => {
  const { mutate, isPending } = useCreateMutation();

  return (
    <div className="max-w-[1000px] mx-auto">
      <Link
        to="/dashboard"
        className="text-my-blue flex items-center gap-2 mb-2"
      >
        <ArrowLeftIcon className="size-5" />
        <span>Geri</span>
      </Link>

      <h1 className="text-2xl font-semibold mb-5">Ürün Ekle</h1>

      <Form onSubmit={mutate} isPending={isPending} />
    </div>
  );
};

export default Create;
