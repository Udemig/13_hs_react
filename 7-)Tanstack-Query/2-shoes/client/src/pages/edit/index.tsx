import type { FC } from "react";
import Form from "../../components/form";
import { Link, useParams } from "react-router-dom";
import { useShoe, useUpdateMutation } from "../../service/shoe";
import type { ShoeFormData } from "../../types";
import Loader from "../../components/loader";
import { ArrowLeftIcon } from "lucide-react";

const Edit: FC = () => {
  const { id } = useParams();
  console.log("id", id);

  const { data, isLoading } = useShoe(id as string, 0);
  const { mutate, isPending } = useUpdateMutation();

  const handleSubmit = (values: ShoeFormData) => {
    mutate({ id: id as string, data: values });
  };

  console.log("data", data?.name);

  if (isLoading) return <Loader />;

  return (
    <div className="max-w-[1000px] mx-auto">
      <Link
        to="/dashboard"
        className="text-my-blue flex items-center gap-2 mb-2"
      >
        <ArrowLeftIcon className="size-5" />
        <span>Geri</span>
      </Link>

      <h1 className="text-2xl font-semibold mb-5">Ürünü Düzenle</h1>

      <Form onSubmit={handleSubmit} isPending={isPending} data={data} />
    </div>
  );
};

export default Edit;
