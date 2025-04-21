# React Nedir ?

- React Facebook tarafından geliştirilmiş bir javascript kütüphanesidir.Daha performanslı uygulamalar oluşturması,component mimarisi ve geniş bir kütüphane desteğine sahip olması sebebiyle çok popülerdir.

# Bir React Uygulaması Nasıl Oluşturulur ?

- Terminalde projenim oluşturlması istenen konuma konumlandıktan sonra `npx create-react-app [proje adı]` komutu ile bir react uygulaması oluşturulur.Bu komut sayesinde bir react projesinin çalışması için gerekli olan dosyalar bizim locale'imize gelecektir.

# React Uygulaması Nasıl Ayağa Kaldırılır ?

- Bir react uygulaması ayağa kaldırılırken ilk olarak package.json 'ın bulunduğu konumda bulunan bir terminal açılır.Sonrasında bu terminalde `npm start` komutu yazılır.

# React Dosya Yapısı

1. `node-modules`: Projenin bağımlılıklarını bir arada tutan dosyadır.Proje'ye bir paket indirildiğinde gerekli bağımlılıklar bu dosya içerisinde tutulur.Bu dosyaya kesinlikle elle müdahele yapmıyoruz.Paket indirme,silme ve güncelleme için komutlar mevcut.Bu işlemleri komutlarla yapacağız.

2. `public`: Projenin herkes tarafından erişilmesi istenen dosyaları bu klasör içerisinde tutulur.Bu dosyada yer alan resim vs gibi dosyalara url aracılığı ile ulaşılabilir.

3. `src`: src yani source (kaynak) dosyası proje geliştirilmesi noktasında kullanılan klasördür.Bu klasör içerisinde projemizi geliştiririz.

- App.css && index.css ==> Stillendirme

- App.js ==> Arayüzde renderlanacak içeriği belirtir.Yani ekranda gözükmesi istenen yapı App.js içerisinde yazılır.

- index.js ==> React uygulamasının ana bileşenidir.Bu dosya index.html içerisinde yer alan id'si root olan div'i yakalar.Ve bunun içerisine App.js 'de yazılan contenti render eder.

1. `.gitignore`: Proje githuba gönderildiğinde githuba pushlanmayacak dosyaların isimleri tutan dosyadır.Bu dosya içerisinde ismi yazılan dosyalar githuba gönderilmez.

2. `package.json`: Projede kullanılan kütüphanelerin,proje bağımlılıklarının ve projenin çalışması için gerekli olan script'lerin yazılı olduğu bir dosyadır.

3. `package-lock.json`: Proje bağımlılıklarını daha detaylı şekilde (verison bilgisi gibi) tutan dosyadır.

# Jsx Nedir ?

- Jsx bir dosyada hem js hem html kodlaması yapmamızı sağlayan bir react yapısıdır.Arayüzde renderlama yapacak tüm dosyaların uzantısını js yerine jsx yaparız.

# Html Vs Jsx

- class yerine className kullanılır. (Tek dosyada hem html hem js yazacağımızdan js'deki class yapısı ve html'deki class karışmasın diye class yerine className kullanılır.)

- label etiketinin for attribute'ü react'da HtmlFor olarak kullanılır.

- img,input,br,... gibi self-closing etiketlerin kapanışı olan '/' kullanılmazsa Html'de bir sıkıntı oluşturmazken react'da bu şekil bir kullanımda hata verecektir.

- React'da birden fazla etiket ile çalışıldığında tüm elemanları sarmalayan bir parent element olmalıdır.Bu noktada boş bir div (herhangi bir still özelliği verilmeyen) kullanılabilir.Fakat bunun yerine react'ın bize sunmuş olduğu boş bir fragment mevcuttur.Bu etiket parent element ihtiyacı olduğu noktada kullanılabilir.

# React Component Yapısı

- React component (bileşen) temelli bir framework'dür.Bir projeyi farklı farklı componentlere böler ve bu şekilde yönetiriz. (Header componenti,footer componenti,sidebar componenti,...)

- Bir react componenti oluştururken ilk olarak bir javascript fonksiyonu yazarız.Sonrasında bu fonksiyon içerisinde bir return satırı açar ve bunu return satırı içerisinde arayüzde renderlanması istenen contenti kodlarız.

# Bir Component İçerisinde Nasıl Dinamik İşlemler Yapılır ?

- Bir bileşende return içerisinde ekranda render edilmesi istenen contentin yazılacağını öğrendik.Eğer bu bileşen içerisinde dinamik bir yapı oluşturulacak yani bir js kodu yazılacaksa bu return dışarısında ve bileşen içerisinde yapılır.

# React Projesine Nasıl Paket İndirilir ?

- React projesine paket indirebilmemiz için ilk olarak `npm` e sahip olmamız gerekir.npm bizim için projedeki paketleri indiren bir yöneticidir.Node.js kurulumu yapıldığında npm'de indirilmiş olur.Ama küçük bir ihtimalde olsa bazen indirilmeyebilir.Bu sebeple npm'i indirememiz gerekebilir.

- Windows'larda npm kurulumu noktasında bazı sistem izinlerinden ötürü hata verir.Bu hatanın çözümü için powershell yönetici olarak çalıştırılıp şu komut çalıştırılır(Komut yazılıp enter'a basılır) .`Set-ExecutionPolicy Unrestricted -Scope CurrentUser
` sonrasında A harfine tıklanır ve enterlanır.Bu şekilde gerekli izin sorunu çözülür.

- İzin sorunu çözüldükten sonra ise `npm install -g npm ` komutu çalıştırılır.Bu şekilde npm kurulmuş olur.Kontrol edebilmek için npm -v komutu çalıştırılır.Bu komut çalıştırıldıktan sonra bir version numarası çıkıyorsa npm kurulmuştur.

- npm kurulduktan sonra ise projemize istenilen kütüphaneler `npm install [paket adı]` komutu ile indirilir.Buradaki paket adı indirilmek istenen kütüphanenin adı olmalıdır.(Bootstrap,uuid,toastify,react icons,react-router-dom,axios,...)

- Paket indirilirken `npm install [paket adı]` yerine `npm i [paket adı]` da kullanılabilir.Her ikisi aynı işlemi yapar.Sadece npm i daha az kod yazamamızı sağlar.

- Kütüphanelerin geliştirilmesi noktasında sürüm adında bir kavram mevcuttur.Bu sürümler kütüphanelerin geliştirilmesi noktasında farklı farklı özellikleri içerisinde bulundurur.Bazen paket indirirken bu paketin sürümünü ayarlamamız gerekebilir.Bunu istenen spesifik sürüm numarasını belirterek indiririz.İstenile sürüm indirilirken `npm i [paket adı]@[istenilen sürüm adı]` yazılır.

- Bir paket indirilirken sürüm belirtilmediğinde en son çıkarılan sürüm indirilir.

# React Projesinden Bir Paket Kaldırma

- Projeye indirilen bir paket `npm uninstall [paket adı]` komutu ile projeden kaldırılır.
