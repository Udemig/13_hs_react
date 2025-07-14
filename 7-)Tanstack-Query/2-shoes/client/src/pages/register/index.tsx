import type { FC } from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import Input from "../../components/form/input";
import { REGISTER_INITIAL_VALUES } from "../../utils/constants";
import type { RegisterValues } from "../../types";
import { registerSchema } from "../../utils/schema";
import { useRegister } from "../../service/auth";

const Register: FC = () => {
  const { mutate, isPending } = useRegister();

  const handleSubmit = (values: RegisterValues) => {
    mutate(values);
  };

  return (
    <div className="min-h-screen flex-1 flex flex-col justify-center">
      <div className="sm:mx-auto w-full sm:max-w-sm">
        <img src="/logo.svg" alt="logo" className="mx-auto h-10 w-auto" />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Hesabını Oluştur
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Formik
          initialValues={REGISTER_INITIAL_VALUES}
          onSubmit={handleSubmit}
          validationSchema={registerSchema}
        >
          <Form className="space-y-8">
            <Input label="Adınız" name="firstName" type="text" required />
            <Input label="Soyadınız" name="lastName" type="text" required />
            <Input label="E-posta" name="email" type="email" required />
            <Input label="Şifre" name="password" type="text" required />

            <div>
              <button
                disabled={isPending}
                className="disabled:opacity-50 w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 textsm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 cursor-pointer"
              >
                Hesap Oluştur
              </button>
            </div>
          </Form>
        </Formik>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
          Hesabınız var mı?{" "}
          <Link
            to="/login"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Giriş Yap
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
