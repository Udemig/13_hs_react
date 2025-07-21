"use client";

import Image from "next/image";
import { data } from "../../../../utils/constants";
import { useParams, useRouter } from "next/navigation";

const Page = () => {
  const { id } = useParams();
  const router = useRouter();

  const wonder = data.find((item) => item.id === id);

  const handleClose = () => {
    router.back(); // geri git
    // router.forward(); // ileri git
    // router.push("/wonders"); // yeni sayfaya git
    // router.replace("/wonders"); // yeni sayfaya git ve eski sayfayı sil
    // router.refresh(); // componenti yeniden render et
  };

  return (
    <div className="fixed inset-0 grid place-items-center bg-black/50 backdrop-blur-xs p-5 md:p-10">
      <div className="bg-white p-10 rounded-md text-black md:w-[70%] max-w-[500px]">
        <button onClick={handleClose}>X</button>

        <h1 className="text-center text-4xl font-bold my-5">{wonder.name}</h1>

        <Image
          src={wonder.src}
          alt={wonder.name}
          className="aspect-square max-h-[300px] object-cover rounded-md"
        />

        <div className="my-5">
          <p className="text-base font-semibold">Fotoğraf Sahibi</p>
          <p className="text-lg">{wonder.photographer}</p>
        </div>

        <div className="my-5">
          <p className="text-base font-semibold">Konum</p>
          <p className="text-lg">{wonder.location}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
