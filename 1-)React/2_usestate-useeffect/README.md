# State:

- React proje içerisinde bir değişkenin değerine bağlı olarak arayüzü dinamik şekilde renderlayabilmek için bizden state kullanmamızı ister.State ile birlikte arayüzü dinamik şekilde renderlayabiliriz.

- State react içerisinde bulunan useState adında bir hook sayesinde oluşturulur.State oluşturulurken:

1. useState hooku react içerisinden import edilir.
2. useState boş bir diziye atanır.
3. Bu boş diziye iki eleman verilir.Birincisi bu state'in adı ikincisi ise bu state'i güncelleyecek fonksiyon
4. Bu state'in başlangıç değeri ise useState hookunun içerisinde yazılır.

Oluşturulan bu state bileşen içerisinde gerekli noktada kullanılır.

# Koşullu Renderlama:

- React'da bir elemanı bir koşula göre renderlamak için koşullu renderlama kullanılır.Koşullu renderlama yaparken iki yöntem bulunur.

1. Ternary Operatör (? : )

- Ternary Operatör bir koşulun sağlanması durumunda bir yapıyı sağlanmaması durumunda ise başka bir yapıyı renderlamak için kulllanılır.

2. And Operatörü (&&):

- And Operatörü bir koşul sağlanıyorsa bir elemanı renderlamayı sağlar.Koşul sağlanmazsa herhangi bir renderlama yapmaz.

* Koşullu renderlama yapılacakken ternary veya and operatöründen hangisini seçeceğimize karar verirken kendimize şunu sormalıyız.Koşulun sağlanmaması durumunda bir renderlama işlemi yapılacak mı ? Eğer yapılcaksa bur durumda ternary opearatör kullanılmalı yapılmayacaksa and operatörü kullanılmalı

# Props:

- Bir react bileşeninin dinamik hale gelmesini sağlamak için props kullanılır.Bir bileşende props kullanırken:

1. Bileşene props geçilir.
2. Geçilen props bileşende karşılanır ve kullanılır.

# Çoklu Renderlama:

- Birden çok elemanı ekranda renderlamak bizim için renderlanacak eleman sayısı arttığı noktada zahmetli olacaktır.Bunun yerine ise çoklu renderlama kullanılır.Çoklu renderlama bir dizinin dönülerek bu dizinin tüm elemanları için bir bileşen renderlanması olayıdır.

# React Component Türleri

- İki tür react bileşeni bulunur:

1. Class Component (Function Component'in atası)
2. Function Component (Modern Component Tanımlama Yöntemi)

- Class componentleri react'ın ilk sürümlerinde kullanılan component türüdür.Güncel projelerde class componentleri yerini function component'e bırakmıştır.Bunun sebebi class component oluşturması ve içerisindeki yapıların kullanılması noktasında çok fazla kod yazmamıza sebep olmasıdır.

- Functional Component'ler ise modern component tanımlama yöntemidir.Sektördeki aktif projelerde çoğunlukla function component kullanılır.

# React Componentlerinin Lifecycle'ı

- İnsanlar doğar,gelişir ve ölür.Bu insanların lifecyle'ıdır..Tıpkı insanlar gibi react bileşenlerinde bir lifecyle'ı vardır.Bu döngüyü class componentlerde 3 metot ile kontrol ederiz.

1. componentDidMount ==> Bir class component'in ekrana gelme anını yakalamak için kullanılır.
2. componentDidUpdate ==> Bir bileşenin güncellenme anını yakalamak için kullanılır.
3. componentWillUnmount ==> Bir bileşenin ekrandan gitme anını yakalamak için kullanılır.

- Bir function component'de lifecycle useEffect metodu ile kontrol edilir.UseEffect'i kullanabilmek için react içerisinden useEffect hook'u import edilir.Sonrasında bu hook bizden bir function birde boş bağımlılık dizisi ister.

- useEffect 3 farklı şekilde kullanılır.Bu 3 durum sayesinde class component'deki 3 metodun görevini tek başına yapar.

1. ()=>{} içerisinde yazılan kod bileşenin ekrana geldiği anda çalışır.
2. ()=>{},[bağımlılık] içerisinde yazılan kod bağımlılık değeri değişince çalışır
3. ()=>{ return },[] return satırında yazılan kod bileşen ekrandan gittiğinde çalışır.
