import { render, screen, waitFor } from "@testing-library/react";
import Statistics from "../pages/home/statistics";
// mock'lamak istediğimiz fonksiyonu/değişkeni import ederiz
import { totalApi } from "../utils/api";
import { mockTotalData } from "../utils/constants";

/*
 * Yazdığımız testler kesinlikle api isteklerine bağlı olmamalı, yani api'dan gelicek olan cevap testin geçip geçmeme durumunu etkilememeli

 * yani backendden yanıt geliyor mu testi değil o yanıt gelirse arayüzü doğru şekilde güncelliyor mu testleri yapıcaz

 * api isteği atana fonksiyonu "mock'layıp" api'ın dörndürüceği cevapları biz belirliyeceğiz. Bu sayede component api isteklerinden gelen cevabı düzgün bir şekilde arayüze yansıtıyor mu kontrol edebilecez
 */

// api isteğini atan fonksiyonu mock'la
jest.mock("../utils/api", () => ({
  totalApi: { get: jest.fn() },
}));

describe("statics component testleri", () => {
  // her testin öncesinde mockları temizle
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("bileşen renderlandığında ekrana loader gelir", () => {
    // sahte get fonksiyonu çağrılınca promise döndürsün
    totalApi.get.mockReturnValue(new Promise(() => {}));

    // bileşeni renderla
    render(<Statistics />);

    // ekranda loader component'ı var mı kontrol et
    screen.getByTestId("loader");
  });

  test("api'dan hata gelirse ekrana hata mesajı gelir", async () => {
    // sahte get fonksiyonu çağrılınca hata döndürsün
    totalApi.get.mockRejectedValue(new Error("404 Hatası"));

    // bileşeni renderla
    render(<Statistics />);

    // belirli bir sürenin ardından ekrana hata mesajı gelir
    // waitFor: fonksiyonda veirlen ola gerçekleşene kadar bir süre bekler
    await waitFor(() => screen.getByText("Üzgünüz bir hata oluştu :("));
  });

  test("api'dan veri gelirse ekrana veriler gelir", async () => {
    // sahte get fonksiyonu çağrılınca verileri döndürsün
    totalApi.get.mockResolvedValue({ data: { data: mockTotalData } });

    // bileşeni renderla
    render(<Statistics />);

    // api isteğinin atılmasını bekle
    await waitFor(() => expect(totalApi.get).toHaveBeenCalled());

    // toplam vaka bilgileri ekrana basılır
    screen.getByText("Toplam Vaka");

    // toplam vefat bilgileri ekrana basılır
    screen.getByText("Toplam Vefat");

    // aktif vaka  bilgileri ekrana basılır
    screen.getByText("Aktif Vaka");
  });
});
