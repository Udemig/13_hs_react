import { ErrorMessage, Field } from "formik";
import type { FC } from "react";

interface Props {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}

const Input: FC<Props> = ({ label, name, type, required }) => {
  return (
    <div className="relative">
      <label htmlFor={name} className="text-sm/6 font-semibold text-gray-900">
        {label}
        {required && <span className="text-red-500 ms-1">*</span>}
      </label>

      <div>
        <Field
          name={name}
          type={type}
          autoComplete={name}
          className="w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-indigo-600 sm:text-sm/6"
        />
        <ErrorMessage
          name={name}
          component="div"
          className="text-red-500 text-sm absolute bottom-[-22px]"
        />
      </div>
    </div>
  );
};

export default Input;
