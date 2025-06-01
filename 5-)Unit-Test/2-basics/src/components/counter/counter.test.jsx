import { render, screen, fireEvent } from "@testing-library/react";
import Counter from ".";

test("sayaç doğru şekilde çalışır", () => {
  // 1) test edilecek bileşen render edilir
  render(<Counter />);

  // 2) gerekli elementler seçilir (buton,p)
  const decBtn = screen.getByRole("button", { name: "Azalt" });
  const incBtn = screen.getByRole("button", { name: "Arttır" });
  const countP = screen.getByText("0"); // 3) sayacın ilk değeri 0 mı kontrol et

  // 4) azalt butonu disabled mı kontrol et
  expect(decBtn).toBeDisabled();

  // 5) arttır butonuna tıkla
  fireEvent.click(incBtn);

  // 6) sayacın değeri 1 mi kontrol et
  expect(countP).toHaveTextContent("1");

  // 7) azalt butonu aktif mi kontrol et
  expect(decBtn).toBeEnabled();

  // 8) arttır butonuna tıkla
  fireEvent.click(incBtn);

  // 9) sayacın değeri 2 mi kontrol et
  expect(countP).toHaveTextContent("2");

  // 10) azalt butonuna tıkla
  fireEvent.click(decBtn);

  // 11) sayacın değeri 1 mi kontrol et
  expect(countP).toHaveTextContent("1");

  // 12) azalt butonuna tıkla
  fireEvent.click(decBtn);

  // 13) sayacın değeri 0 mi kontrol et
  expect(countP).toHaveTextContent("0");

  // 14) azalt butonu disabled mı kontrol et
  expect(decBtn).toBeDisabled();
});

test("seasdas", () => {});
