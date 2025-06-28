# Typescript İle React Yazarken

## Yeni Dosyalar

- js react projesinden farklı olarak ts ayarları için `ts.config.json` dosyası oluşur

## Dosya Uzantısı

- Javascript dosyalarında `js/jsx`
- Typescript dosyalarında `ts/tsx`

## Önemli

- Tipi tanımlanabilien her değişkenin / fonksiyonun / parametrenin / component'ın mutlaka ve mutlaka tipi tanımlanmalı
- Otomatik tip algılamaya güvenip bir değişken bile tip boş bırakılmamalı
- Otomatil tip algılama özelliği mümkünse hüç kullanılmamalı

## Hooks

- React hook'larını kullanırken bir veri tutuyorak tipi tanımlanmmı
- useState ike tuttuğumuz state'in tipini generic ile tanımları
- useRef ile referansını aldığımız elementin tipini generic ile tanımlanmalı

## Element Tipi

- Her jsx elementin kendine has bir type'ı bulunur.
- Çok fazla element olduğu için type'lar unutulmaması için hep aynı syntax ile yazılır
- `HTML[Etiket_Rolü]Element`
- button: HTMLButtonElement
- input: HTMLInputElement
- form: HTMLFormElement
- h1: HTMLHeadingElement

## Component Tipi

- React'ta en çok kullanduğumuz yapılar component'lardır
- Component'lar ise bir fonksiyondan oluşur
- Fonksiyonlarda tip tanımı yaparken her zaman 2 noktanın tipini tanımlarız:
- - parametre: fonksiyonların hangi tipte değer aldığını belirleriz
- - return: fonksiyonun hangi tipte değer döndürdüğünü belirleriz
- Component tanımlarkden prop olarak aldığı parametrenin ve return ettiği jsx elementlerinin tipini tanımlarız

## Event Tipi

- onClick / onChange / onSubmit gibi olayalarda çağırdığımız fonksiyonlara olay verisini içeren e parametresi gider
- e parametresinin değerlerine eirşebilmek için tipinin tanımlanması gerekir
- her olayın kendi tipi vardır:
- - `onClick: MouseEvent`
- - `onChange: ChangeEvent`
- - `onSubmit: FormEvent`
- Event tipleri olayın hangi elementte gerçekleştiğini generic olarak alır
- - `ChangeEvent<HTMLInputElement>`
- - `ClickEvent<HTMLButtonElement>`

## API İstekleri

- Api istekleri atan veya farklı asenkron işlemler yapan fonksiyonların return tipleri mutlaka Promise<T> şeklinde tanımlanmalı
- Yani `User` tipinde veri return eden bir fonksiyon varsa
- Fonksiyon asenkron olursa `Promise<User>` return edilmeli

- `export const getPosts = async (): Promise<PostResponse> => {}`
