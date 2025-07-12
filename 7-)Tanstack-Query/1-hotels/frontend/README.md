# Tanstack Query

- Asenkron fonksiyonların state'ini yönetmenin en modern ve pratik yolu

# Neden Kullanalım

- Klasik yöntemlere göre (useState,useContext,Redux Thunk) daha az kod yazarak daha iyi sonuç almamızı sağlar
- Hata durumda direkt error state'ini güncellemez varsayılan olarak 3 kez daha api isteği atar 3'ününde olumsuz cevap gelirse error state'ini günceller
- API'dan gelen cevabı cache'de saklar
- - Bu sayede aynı api isteğini birden fazla attığımız seneryoda sadece ilk istek api gider ve gelen cevap cache'e aktarılır
- - İlk isteğin ardından atılan hiçbir istek api'a gitmez hepsi cache'deki veriyi kullanır.
- - Gereksiz istekleri önlyereke +performans
- - Birden fazla component'ı aynı isteği atabilmemiz sayesinde redux / context gibi merkezi state yönetim araçlarına gerek kalmaz

# Projedeki Kütüphaneler

- react-router-dom
- @tanstack/react-query
- formik
- yup
- axios
- lucide-react
- react-toastify
- tailwindcss
