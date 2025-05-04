# Redux Toolkit

- Klasik redux'a göre daha az kod yazarak aynı sonucu elde etmemizi sağlar, yağtığımız bir çok manuel işlem için hazır merhodlara sahip bir state yönetim kütüphanesidir.
- İçerisinde redux-thunk ve redux-devtools kurulu olarak gelir.
- Klasik redux'ın yaptığını daha basit methodlarla yapar.

# Kurulum

- npm i @reduxjs/toolkit
- npm i react-redux
- store'u reducer'ları aksiyonlar'ları oluştur
- store'u projeye tanıt

# Klasik redux'ta oluşturduğumuz yapılar

- reducer - action - action types - store

# Toolkit oluşturduğumuz yapılar

- slice, store

# Slice

- klasik redux'ta aksiyonlar, aksiyon tiplerini, reducerları ayrı dosyada tanımlıyorduk.
- redux toolkit içerisinde yer alan slice yapısı sayesinde tek bir noktada hem reducer'ı hem aksiyonları hem de aksiyon tiplerini tanımlayabiliyoruz
