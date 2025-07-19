import type { FC } from "react";
import type { Shoe, ShoeFormData } from "../../types";

interface Props {
  onSubmit: (data: ShoeFormData) => void;
  isPending: boolean;
  data?: Shoe;
}

const Form: FC<Props> = ({ onSubmit, isPending, data }) => {
  return <div>Form</div>;
};

export default Form;
