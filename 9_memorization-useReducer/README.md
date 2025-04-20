# React Memorization

- React memorization uygulamaların performasını arttırmak için belirli işlemleri cache (ön bellek)'e alma işlemidir.

# useMemo

- useMemo: useMemo bir işlem sonucunu cache'e kayıt ederek bileşenin her render olması durumunda kayıt edilen verinin tekrar tekrar oluşturulmasının önüne geçer.
  Bu hook gennelikle kapsamlı hesaplama işlemleri için kullanılır.Ve bu sayede uygulamanın performansını arttırır.

# React.memo

- React.memo: Bir parent component içerisinde yer alan bir child component olduğunu düşünelim.Bu yapıda parent elemanda bir state değişimi olursa child eleman'dan render olacaktır.Bu durum child bileşenin gereksiz yere render edilmesi demektir.Bu durum özellikle render edilen parent elemanının sayısının fazlalaşması durumunda [twitter örneği] önemli performans kaybı oluşturur.Bu durumun önüne geçmek için ise React.memo() kullanılır.React.memo() ile child eleman sarmalanır.Bu sayede child eleman sadece kendisine geçilen bir prop değişimi veya kendi içerisindeki bir state değişimi durumunda yeniden render edilir.

# useCallBack

- cache uygulamaya ait verilerin depolandığı geçici bir depolama alanıdır.Bu alanda uygulama içerisinde sıkça kullanılan veriler depolanır.Bu sayede verilere hızlı bir şekilde erişmemizi sağlar.

- React.memo() ile bir bileşenin kapsam bileşeninde olan renderlanmalar sırasında bunun child bileşenindeki gereksiz renderlamaları engellemiş ve sadece child elemana verilen bir prop veya child içerisindeki bir state değişimi sonucunda child elemanın render edilmesini sağlamıştık.Fakat eğerki parent elemandan statik bir fonksiyon geçilmesi durumunda bile child eleman yeniden render edilir.Bunun sebebi javascript'in fonksiyonların aynı olup olmamasına bellekde tutulan konumuna göre karar vermesidir.Bu bellekde konumlama işlemi sayfa her yenilendiğinde tekrarlanır.Yani fonksiyonlar her seferinde başka bir konumda konumlandırılır.Bu durumda ise fonksiyon değişmese bile değişti kabul edilir.Ve bileşen tekrardan render edilir.Bunun önüne geçmek içinse useCallBack hook'u kullanılır.Bu hook sayesinde fonksiyonların bellekdeki konumu sabit kabul edilir.Ve gereksiz render'in önüne geçilir.

# useReducer

- Bir react hook'u olan useReducer sayesinde birden fazla state'i daha kolay bir şekilde yönetebiliriz.Bu metot state sayısının fazla olduğu ve state yönetiminin zorlaştığı durumlarda kullanılabilir.

- useReducer ile işlem yapılırken bilinmesi gereken temel yapılar:

1. Action: State'in nasıl değişeceğini belirten string ifade.Ör:Ekle,Güncelle,Sil,...

2. Dispatch: Action'ları reducer'a ileten haberci.

3. Reducer: State'in nasıl değişeceğine karar veren fonksiyonlardır.

useReducer ile state yönetimi yapılırken useReducer react içerisinden import edilir.useReducer bizden bir reducer adında fonksiyon bir de initialState değeri ister.Bunun neticesinde ise bize bir state bir de dispatch değeri döndürür.State bildiğimiz state'dir.Dispatch ise reducer'a state'i nasıl değişeceğini aktaran habercidir.

Ör: dispatch ile reducer'a "ARTTIR" action'ı iletilir.Reducer kendisine verilen action karşılığında state'i 1 arttırıcağını anlar ve state'i buna göre günceller.

- Dispatch ile gönderilecek aksiyon eğer state'in değerini bir değerle güncellemek istiyorsa bunu action içerisine verilecek payload ile yaparız.Bu payload ve state'i güncelleyecek action adı bir arada gönderilmesi gerektiğinde action bir obje şeklinde oluşturulur.type değeri ile state'in nasıl güncelleneceğine karar verilir.payloadla ise güncellencek değer reducer a iletilir.
