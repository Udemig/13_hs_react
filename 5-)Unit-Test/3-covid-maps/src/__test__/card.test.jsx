import { render, screen } from "@testing-library/react";
import Card from "../pages/detail/card";

test("Aldığı propa göre veriler ekrana basılır", () => {
  // bileşeni renderla
  render(<Card item={["Ülke", "Türkiye"]} />);

  // ülke yazısı ekranda var mı
  screen.getByText("Ülke");

  // ülke ismi  ekranda var mı
  screen.getByText("Türkiye");
});
