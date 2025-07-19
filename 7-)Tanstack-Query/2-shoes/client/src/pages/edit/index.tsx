import type { FC } from "react";
import Form from "../../components/form";
import { useParams } from "react-router-dom";
import { useShoe, useUpdateMutation } from "../../service/shoe";
import type { ShoeFormData } from "../../types";

const Edit: FC = () => {
  const { id } = useParams();
  const { data, isLoading } = useShoe(id as string);
  const { mutate, isPending } = useUpdateMutation();

  const handleSubmit = (values: ShoeFormData) => {
    mutate({ id: id as string, data: values });
  };

  return (
    <div className="max-w-[1000px] mx-auto">
      <h1 className="text-2xl font-semibold mb-5">Ürünü Düzenle</h1>

      <Form onSubmit={handleSubmit} isPending={isPending} data={data} />
    </div>
  );
};

export default Edit;
