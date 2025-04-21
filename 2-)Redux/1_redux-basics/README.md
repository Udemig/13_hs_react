# State Nedir ?

- React uygulamasındaki componentlerde verilerimizi yönetmek için kullanılan yapıdır.

# Props Drilling Nedir ?

- Bir react uygulamasında birden fazla component olduğu durumda bu componentler arasında veri aktarımı yapılması gerekir.Bu veri aktarımına ise Props Drilling denir.

- Props Drilling ile componentler arasında veri aktarımı yapılabilir.Fakat özellikle kapsam projelerde component sayısının artması ile componentler arasındaki bu veri aktarımı çok zor olabilir.Bu durumu şimdiye kadar useContext ile çözebileceğimi görmüştük.

- useContext ile app'den bağımsız bir depo alanı oluşturup burada verilerimizi yönetip ihtiyaç duyulan component'de bu depoya abone olarak verilere daha kolay bir şekilde ulaştık.Fakat proje boyutunun artması durumunda useContext hem bize performans kaybı yaşatır hem verileri farklı dosyalarda yönettimiğizden tek noktada kontrol etmekte zorlanırız hemde sürekli app'i sarmalamamız gerekir.İşte bu noktada merkezi bir state yönetimine ihtiyaç duyarız.

# Redux'un artıları:

- Kod tekrarını engeller
- Daha performanslı uygulamalar oluştur
- Bileşenlerdeki karışıklıkları azaltır
- Merkezi bir şekilde veri yönetimi sağlar
- Hata ayıklama noktasında daha gelişmiştir

# Redux Yapısı

1. Store: Uygulamadaki tüm reducer'ları bir arada tutarak merkezi bir şekilde veri yönetmemizi sağlayan state deposudur.

2. Reducer: Kendisine verilen action'lara göre state'in nasıl güncelleneceğine karar veren fonksiyondur.

3. Action: State'in nasıl değişeceğini belirten yapıdır.Action'ın iki temel bileşeni vardır.

- type: Action'ın görevini tanımlayan string ifade.
- payload: Action'ın yükü.State'in güncellenmesi sağlayacak değer.

4. Dispatch: Action'ları reducer'a ileten haberci.

5. Subscribe: Bileşende store'daki verilere erişmek için abone olma işlemi.Abone olma işlemi useSelector ile yapılır.

6. Provider: Store'da tutulan tüm değerleri uygulamaya sağlayan sağlayıcıdır.

# Redux Kurulumu:

Redux kurulumu yapılırken:

1. Reducer oluşturulur.Reducer gelen aksiyona göre state'i güncelleyen fonksiyondur.Bizden state ve action değerleri ister.Buradaki state'in başlangıç değeri tanımlanmalıdır.Yani bir reducer birde initialState oluşturmamız gerekir.

2. Bir tane store.js dosyası oluşturulur.Bu dosya içerisinde ilk olarak projede birden fazla reducer olacağından bunları birleştirerek bir rootReducer elde etmeliyiz.Sonrasında elde edilen rootReducer ile bir store oluşturmalıyız.Reducer'ları birleştirmek için combineReducer store oluşturmak içinse createStore metodları redux içerisinden çağırılır.

3. Elde edilen store export edilir.Store'daki verilerin tüm bileşenlerden erişilebilir olması için Provider ile app sarmalanmalıdır.Sarmalama işlemi main.jsx de yapılır.react-redux içerisinden Provider çağırılır.Çağırılan bu bileşen ile app sarmalanır.Sarmalandıktan sonra bu bileşene oluşturulan store store propu olarak verilir.
