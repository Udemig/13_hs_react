import Link from "next/link";
import { data } from "../../../utils/constants";
import Image from "next/image";
import delay from "../../../utils/delay";

// Normal şarlarda dianmik olarak hazırlanan sayfaları statik hale geitmrk için:
// bu fonksiyondan return edilen id'lere sahip sayfalar statik olarak hazırlanır.
// return [{id: "1"}, {id: "2"}, {id: "3"}]
export async function generateStaticParams() {
  // api'dan statik olarak hazırlanacak verileri alınır..

  // verileri map ile id'ye göre dönüştürürüz.
  return data.map((item) => ({ id: item.id }));
}

const Page = async ({ params }) => {
  await delay(2000);

  // url'deki parametreye eriş
  const { id } = await params;

  // data'dan id'ye göre ilgili veriyi bul
  const wonder = data.find((item) => item.id === id);

  return (
    <div className="min-h-screen p-10  text-3xl -m-10">
      <div className="w-3/4 lg:w-1/2 mx-auto">
        <Link href="." className="text-lg border p-2 px-4 rounded-md">
          Geri
        </Link>

        <h1 className="text-center text-5xl font-bold mt-10 mb-5">
          {wonder.name}
        </h1>

        <Image
          src={wonder.src}
          alt={wonder.name}
          className="w-full aspect-square object-cover rounded-md"
        />

        <div className="my-10">
          <h3 className="text-lg">Fotoğraf Sahibi</h3>
          <p>{wonder.photographer}</p>
        </div>

        <div>
          <h3 className="text-lg">Konum</h3>
          <p>{wonder.location}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
