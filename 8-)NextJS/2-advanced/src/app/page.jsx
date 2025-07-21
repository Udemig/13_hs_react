// Image Component
import Image from "next/image";

// Local Resim: İndirip projeye dahil edilen resimler
import LocalIamge from "../assets/nature.jpg";

const Page = () => {
  // Remote Resim: Url'i ile başka kaynaktan alınan resimler
  const RemoteImage =
    "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?_gl=1*9u16bn*_ga*MTczNjA5NzU2Mi4xNzQ0NDg2MDE1*_ga_8JE65Q40S6*czE3NTMxMjMwMjUkbzkkZzEkdDE3NTMxMjMxMzMkajU1JGwwJGgw";

  return (
    <div className="text-xl -m-10">
      <div>
        <h1 className="mb-5">Local Resim (Optimizasyon Yok)</h1>
        {/* 
        unoptimized: resmi optimize etmeyecek (hiçbir next özelliği kullanmayacak)
        */}
        <Image src={LocalIamge} alt="nature and house" unoptimized />
      </div>

      <div>
        <h1 className="mt-10 mb-5">Local Resim (Optimizasyon Var)</h1>
        {/* 
        quality: resmin kalitesini ayarlar (0-100) varsayılan: 75
        placeholder: resmin yüklenirken gösterilecek görüntüyü ayarlar (blur, empty, blurDataURL)
        priority: resmin yüklenme önceliğini ayarlar (true, false) varsayılan: false
        */}
        <Image
          src={LocalIamge}
          alt="nature and house"
          quality={99}
          placeholder="blur"
          priority
        />
      </div>

      <div>
        <h1 className="mt-10 mb-5">Remote Resim</h1>
        {/*
         * remote resimlerde width ve height zorunludur
         */}
        <Image
          src={RemoteImage}
          alt="nature and sea"
          width={1000}
          height={500}
        />
      </div>

      <div className="w-full">
        <h1 className="mt-10 mb-5">Remote Resim (Full Genişlik)</h1>
        {/*
         * fill: width ve height değeri yerine kullanılır ve tüm alanı kaplayacak şekilde resmi yükler
         */}

        <div className="relative h-[400px]">
          <Image src={RemoteImage} alt="nature and sea" fill />
        </div>
      </div>
    </div>
  );
};

export default Page;
