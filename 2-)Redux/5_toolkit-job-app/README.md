# Kütüphaneler

- sass
- @reduxjs/toolkit
- react-redux
- react-toastify
- json-server
- axios
- react-icons
- react-router-dom

# nesnelerde [] kullanımı

- object["key"]

const kisi = {
isim: "ahmet",
soyad: "yıldız",
yas: 65,
};

const alan = "isim";

// alan değişkenin değerinin kişi nesnesi içerisindeki karşılığına eriş
kisi["isim"]; // ahmet
kisi["yas"]; // 65
kisi["soyad"]; // "yıldız"

kisi[alan]; // ahmet
