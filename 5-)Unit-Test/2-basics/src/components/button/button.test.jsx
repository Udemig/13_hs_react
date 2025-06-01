import { render, screen, fireEvent } from "@testing-library/react";
import Button from ".";

// Unit test yazmak yazdığımız kodun algoritmik olarak doğru çalışığ çalışmadığını kontrol etmek için kullanır
test("Butona tıklama olayında renk ve yazısı değişir", () => {
  // test edilecek bileşeni render edilir
  render(<Button />);

  // test edilecek buton elementini çağır
  const button = screen.getByRole("button");

  //------ tıklamadan önce değişecek değerlerin kontrolünü yapalım ---------
  // butonun arkaplan rengi "kırmızı" mı kontrol et
  expect(button).toHaveStyle({ background: "red" });

  // yazı "maviye çevir" mi kontrol et
  expect(button).toHaveTextContent("Maviye Çevir");

  //! butona tıkla
  fireEvent.click(button);

  //------ tıkladıktan sonra değişen değerlerin kontrolünü yapalım ---------
  // butonun arkaplan rengi "aqua" mı kontrol et
  expect(button).toHaveStyle({ background: "aqua" });

  // yazı "kırmızıya çevir" mi kontrol et
  expect(button).toHaveTextContent("Kırmızıya Çevir");
});
