# HOC

- High Order Componentler (HOC) React içerisinde kod tekrarı gerektiren yapıları kod tekrarına düşmeden daha hızlı bir şekilde oluşturmak için kullanılır.

- Bir HOC oluşturulurken klasik bir react component'i oluşturulur.Farklı kısım ise bu component'e dışarıdan gelen bir child prop'u yakalanıp bileşen içerisinde return edilir.Bu component çağırılırken ise self closing değil de bir html etiketi şeklinde çağırılır.İçerisine yazılan içerik ise HOC ne dışarıdan verilen children'a karşılık gelir.

# Context

- React bileşenleri arasında veri aktarımı için props kullanıldığını görmüştük.Bu yöntem bileşen sayısının arttığı durumda bizim için veri yönetimini zorlaştırırır.

- Bu durumda verileri daha kolay yönetmek için 'Context' yapıları kullanılır.Context yapıları ile App'dan bağımsız dosyalar oluşturulur.Bu dosyalarda gerekli veriler tutulur.Gereken elemana ise kolayca veriler aktarılabilir.

# Context Yapısı Nasıl Oluşturulur ?

1. `createContext` react içerisinden çağırılır.Sonrasında bu hook bir context değişkenine atanır.

2. Oluşturulan context kullanılarak bir HOC oluşturulur.Bu HOC'a context'in tutması gereken değerler value={} şeklinde verilir.

3. Context içerisindeki verilerin tüm uygulama tarafından erişilebilir olması için bu HOC ile App sarmalanır.

# Context İçerisindeki Değerlere Nasıl Erişilir ?

- React içerisinden çağırılan `useContext` hook'u sayesinde context içerisindeki değerlere erişilir.
