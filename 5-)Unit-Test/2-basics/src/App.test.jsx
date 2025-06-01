import { render, screen } from "@testing-library/react";
import App from "./App";

/*
 ! Unit Test
 * Yazdığımız dinamik olan bütün bileşenlerin testini yazarız.
 * Unit test yazmamız sayesinde kod değişikliği yapıldığında, yaptığımız değişiklikleri githuba göndermeden önce testleri çalıştırarak hata olup olmadığını kontrol ederiz.
 * Projelerde her işlevi el ile kontrol etmek çok fazla zaman alıağından ve bir şeyin gözden kaçma ihtimali yüksek olduğundan test yazmak önemlidir.
 * Bu yüzden unit test ile bileşenlerin doğru çalışıp çalışmadığını kontrol eden testler yaparız 
*/

// app.test.js: app component'ının testlerinin yazıldığı dosya
// bir dosyanın test dosyası olup olmadığını .test.js/.test.jsx uzantsının anlarsınız

// test yazarken `test`veya `it` methdolarını kullanırız
// test fonksiyonları 2 parametre alır
// 1) string: testin adı
// 2) function: testin yapıldığı yer
test("Ekranda selamlar yazar", () => {
  // test edilecek component render edilir (virtual - sanal ortam - ramde)
  render(<App />);

  // renderlanan component içerisinden test edilecek elementi çağırır
  // eğer component trayıcıda ekrana basılsaydı document.querySelector() / getElementById()
  // ram'de render edildiğinden `document` yerine `screen` ve querySelector() methodları yerine faklı methodlar kullanılır
  const h1 = screen.getByText("Selamlar");

  // çağrılan elementten beklentimizi söyleriz
  // beklentimiz: ekranda içinde Selamlar yazan element vardır
  expect(h1).toBeInTheDocument();
});
