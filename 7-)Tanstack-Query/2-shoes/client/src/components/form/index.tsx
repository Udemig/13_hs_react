import type { FC } from "react";
import type { Shoe, ShoeFormData } from "../../types";
import { Field, Formik, Form as FormikForm } from "formik";
import { INPUT_ARRAY } from "../../utils/constants";
import Input from "./input";

interface Props {
  onSubmit: (data: ShoeFormData) => void;
  isPending: boolean;
  data?: Shoe;
}

const Form: FC<Props> = ({ onSubmit, isPending, data }) => {
  // form gönderilince çalışır
  const handleSubmit = (values: ShoeFormData) => {
    onSubmit(values);
  };

  // düzenlenicek eleman varsa onun değerlerini al yoksa boş değerler ata
  const initialValues: ShoeFormData = {
    name: data?.name || "",
    price: data?.price || 0,
    discount: data?.discount || 0,
    color: data?.color || "",
    size: data?.size || "",
    description: data?.description || "",
    isNew: data?.isNew || false,
    gender: data?.gender || "men",
  };

  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues}>
      <FormikForm className="flex flex-col gap-5">
        {INPUT_ARRAY.map((input) => (
          <Input key={input.name} {...input} />
        ))}

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <Field type="radio" name="gender" value="men" id="men" />
            <label htmlFor="men">Erkek</label>
          </div>
          <div className="flex items-center gap-2">
            <Field type="radio" name="gender" value="women" id="women" />
            <label htmlFor="women">Kadın</label>
          </div>
        </div>

        <button
          disabled={isPending}
          className="bg-my-blue py-1 px-4 rounded-md text-white transition hover:bg-my-blue/80 cursor-pointer"
        >
          Gönder
        </button>
      </FormikForm>
    </Formik>
  );
};

export default Form;
