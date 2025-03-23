# Vite Nedir ?

- Vite klasik react uygulaması oluşturma yerine kullanılan bir react oluşturma yöntemidir.Bu yöntem klasik react uygulamalarına göre bazı avantajlara sahiptir:

1. Daha az bağımlılık ile uygulama oluşturur.
2. HMR (Hot Module Replacement) ile klasik react uygulamasına göre yapılan değişiklikleri tarayıcıya daha hızlı aktarır.
3. Klasik react uygulamalarına göre daha hızlı build alınır.Build oluşturulan dosyaların dönüştürülerek temelde 3 dosyaya indirgenmesi sürecidir.

# ES7+ React/Redux/React-Native snippets ==> Hızlı şekilde react bileşeni oluşturmak için kullanacağız.

# Auto Import ==> Dosyalardaki import işlemlerini otamatik şekilde yapar.

# useRef:

- useRef hook'u javascript'de bir elemana erişmek için kullanılan document.getElementsByTagName, document.getElementsByClassName, document.getElementsById ve document.querySelector metotlarının react'daki karşılığıdır.Bu hook sayesinde istenilen elemana erişebiliriz.

* useRef kullanılarak bir elemana erişmek için ilk olarak useRef hook'u react içerisinde import edilir.Sonrasında bu hook kullanılarak bir referans oluşturulur.Elde edilen referans erişilimek istenen elemanın ref attribute'üne verilir.Verilen referans içerisindeki current ile ilgili elemana erişilmiş olur.

# Json Server

- Bir proje temelde iki ana kısımdan oluşur.

1. Frontend (Ön yüz)
2. Backend (Arka yüz)

- Bu iki kısıma'da bir projede muhakkak ihtiyaç duyarız.Elimizde bir backend hali hazırda yoksa ve bu backend'in hazır olmasını beklemek istemiyorsak json-server kütüphanesi kullanılarak localimizde sahte bir api oluşturup bu backend'e api istekleri atarak proje geliştiririz.Backend hazır olduğudan ise api isteklerini sahte backend yerine real backend'e atarız.

* json-server ile bir backend oluşturulurken ilk olarak `npm json-server` komutu ile kütüphane projeye indirilir.Sonrasında proje dizininde package.json ile aynı konumda bir `db.json` dosyası oluşturulur.Bu dosya içerisinde istenilen yapıda veriler yazılır.Sonrasında `npm  run json-server --watch db.json` komutu çalıştırılır.Her seferinde `json-server --watch db.json` komutunu uzun uzun yazmak zor olacağından bunun yerine bu komut script kısmında oluşturularak kullanılır.

* Bu kütüphane ile biz tüm HTTP metotlarını kullanabiliriz.

# HTTP Metotları

- Server ve client arasında iletişim kurmak için kullanılan metotlara http metotları denir.

1. GET:

- Server'dan client'a veri çekmek için kullanılır.

2. POST:

- Client'dan server'a veri göndermek için kullanılır.Serve'a gönderilecek veri isteğin body'sine iliştirilmelidir.

3. PUT:

- Client'dan serverdaki bir veriyi güncellemek için kullanılır.Bu metotla veri güncellenirken güncellenecek verinin tamamı server'a gönderilmelidir.

4. PATCH:

- Client'dan serverdaki bir veriyi güncellemek için kullanılır.Bu metotla veri güncellenirken güncellenecek verinin sadece gerekli kısmı server'a gönderilmelidir.

5. DELETE:

- Client'dan serverdaki bir veriyi silmek için kullanılır.
