import type { FC } from "react";
import Form from "../../components/form";
import { useCreateMutation } from "../../service/shoe";

const Create: FC = () => {
  const { mutate, isPending } = useCreateMutation();

  return (
    <div className="max-w-[1000px] mx-auto">
      <h1 className="text-2xl font-semibold mb-5">Ürün Ekle</h1>

      <Form onSubmit={mutate} isPending={isPending} />
    </div>
  );
};

export default Create;
