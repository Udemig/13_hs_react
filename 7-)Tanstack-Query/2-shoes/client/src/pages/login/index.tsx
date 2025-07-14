import { Formik, Form } from "formik";
import type { FC } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/form/input";
import { LOGIN_INITIAL_VALUES } from "../../utils/constants";
import { useLogin } from "../../service/auth";
import type { LoginValues } from "../../types";
import { loginSchema } from "../../utils/schema";

const Login: FC = () => {
  const { mutate } = useLogin();

  const handleSubmit = (values: LoginValues) => {
    mutate(values);
  };

  return (
    <div className="min-h-screen flex-1 flex flex-col justify-center">
      <div className="sm:mx-auto w-full sm:max-w-sm">
        <img src="/logo.svg" alt="logo" className="mx-auto h-10 w-auto" />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Hesabına Giriş Yap
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Formik
          initialValues={LOGIN_INITIAL_VALUES}
          onSubmit={handleSubmit}
          validationSchema={loginSchema}
        >
          <Form className="space-y-8">
            <Input label="E-posta" name="email" type="email" required />
            <Input label="Şifre" name="password" type="text" required />

            <div>
              <button
                type="submit"
                className="disabled:opacity-50 w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 textsm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 cursor-pointer"
              >
                Giriş Yap
              </button>
            </div>
          </Form>
        </Formik>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
          Hesabınız yok mu?{" "}
          <Link
            to="/register"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Kayıt Ol
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
