# Thunk

- Aksiyonlar'ın asenkron işlelmer yapmasını sağlayan bir redux middleware'i (arayazılımı)
- Aksiyonlar'on içerisinde api isteği atıp gelen cevaba göre reducer'a haber göndeririz.
- Klasik redux'ta thunk aksiyonunu 2 fonksiyonu iç içe yazarak oluştururuz.

# Toolkit Thunk

- Thunk kullanımı ttolki ile birlikte daha sade bir hale geldi
- Toolkit store'u içerisinde entre olarak thunk gelir yani ekstra olarak kurulum gerekmez.
- createAsyncThunk fonksiyonu aracılığı ile asenkron thunk aksiyonları oluşturabiliyoruz
