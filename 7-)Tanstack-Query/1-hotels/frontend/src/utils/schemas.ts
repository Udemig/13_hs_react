import * as yup from "yup";

// form alanı için validasyon kuralları
// formdan alınan verilerin geçerli olması için gerekli koşulları belirleme
export const PLACE_SCHEMA = yup.object().shape({
  name: yup
    .string()
    .required("Ad alanı zorunludur")
    .min(3, "Ad alanı en az 3 karakter olmalıdır")
    .max(40, "Ad alanı en fazla 40 karakter olmalıdır")
    .matches(/^[\p{L}\s]+$/u, {
      message: "Ad alanı sadece harfler ve boşluk içerebilir",
    }),
  location: yup
    .string()
    .required("Konum alanı zorunludur")
    .min(3, "Konum alanı en az 3 karakter olmalıdır")
    .max(40, "Konum alanı en fazla 40 karakter olmalıdır")
    .matches(/^[\p{L}\s]+$/u, {
      message: "Konum alanı sadece harfler ve boşluk içerebilir",
    }),
  address: yup
    .string()
    .required("Adres alanı zorunludur")
    .min(3, "Adres alanı en az 3 karakter olmalıdır")
    .max(40, "Adres alanı en fazla 40 karakter olmalıdır"),
  description: yup
    .string()
    .required("Açıklama alanı zorunludur")
    .min(10, "Açıklama alanı en az 10 karakter olmalıdır")
    .max(200, "Açıklama alanı en fazla 200 karakter olmalıdır"),
  amenities: yup
    .string()
    .required("Hizmetler alanı zorunludur")
    .min(3, "Hizmetler alanı en az 3 karakter olmalıdır")
    .max(80, "Hizmetler alanı en fazla 80 karakter olmalıdır"),
  rating: yup
    .number()
    .required("Puan alanı zorunludur")
    .min(1, "Puan alanı en az 1 olmalıdır")
    .max(5, "Puan alanı en fazla 5 olmalıdır"),
  price_per_night: yup
    .number()
    .required("Fiyat alanı zorunludur")
    .min(1, "Fiyat alanı en az 1 olmalıdır")
    .max(99999, "Fiyat alanı en fazla 99999 olmalıdır"),

  availability: yup.boolean().required("Müsaitlik alanı zorunludur"),
});
