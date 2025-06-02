import { fireEvent, render, screen } from "@testing-library/react";
import Error from "../components/error";

test("prop olarak alınan hata mesajı ekrana basılır", () => {
  render(<Error message="İnternetiniz çok yavaş" refetch={() => {}} />);

  screen.getByText(/yavaş/i); // insensetive
  // regex ile cümlenin sadece bir kelimesini yazarak elementi seçebiliriz
});

test("prop olarak alınan fonksiyon butona tıklanınca çalışır", () => {
  // jest ile sahte bir fonksiyon oluştur
  const mockFn = jest.fn();

  // bileşeni renderla
  render(<Error message="İnternetiniz çok yavaş" refetch={mockFn} />);

  // refetch fonksiyon çağrılmadı mı kontrol et
  // not: matcher'ın kontol ettiği durumu tersine çevirir
  expect(mockFn).not.toHaveBeenCalled();

  // tekrar dene butonunu al
  const button = screen.getByRole("button");

  // butona tıkla
  fireEvent.click(button);

  // refetch fonksiyon çağrıldı mı kontrol et
  expect(mockFn).toHaveBeenCalled();
});
