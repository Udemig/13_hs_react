import * as yup from "yup";

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{6,}$/;

const nameRegex = /^[a-zA-Z\s]+$/;

export const registerSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("Adınızı giriniz")
    .matches(nameRegex, "Ad sadece harfler ve boşluk içermelidir"),
  lastName: yup
    .string()
    .required("Soyadınızı giriniz")
    .matches(nameRegex, "Soyad sadece harfler ve boşluk içermelidir"),
  email: yup
    .string()
    .email("Geçersiz e-posta adresi")
    .required("E-posta adresinizi giriniz"),
  password: yup
    .string()
    .required("Şifrenizi giriniz")
    .matches(passwordRegex, "Şifreniz yeterince güçlü değil"),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Geçersiz e-posta adresi")
    .required("E-posta adresinizi giriniz"),
  password: yup.string().required("Şifrenizi giriniz"),
});
