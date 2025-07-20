import delay from "../../../utils/delay";

const Page = async () => {
  // örn: api isteği attık
  await delay(2000);
  throw new Error("İnternet bağlantısı kesildi");

  // beklenen süre boyunca loading component'ı görünür
  // hata fırlatıldığında error component'ı görünür

  return (
    <div className="p-20">
      <h1 className="text-4xl font-bold my-20">Login Sayfası</h1>
    </div>
  );
};

export default Page;
