// parametre olarak aldığı dosyayı firebase storage'a yükledikten sonra resmin url'ini döndürücek

import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from ".";
import { v4 } from "uuid";

const upload = async (file) => {
  // 1) dosya yoksa veya resim değilse fonksiyonu durdur
  if (!file || !file.type.startsWith("image")) return null;

  // 2) dosya boyutu 3mb üstende ise yüklemeye izin verme
  if (file.size > 3000000) {
    throw new Error("Medya içeriği sınırı aşıyor");
  }

  // 3) resmin yüklenceği konumun referanısını al
  const imageRef = ref(storage, v4() + file.name);

  // 4) resmi storage'a yükle
  await uploadBytes(imageRef, file);

  // 5) storage'a yüklenen dosyanın url'ini al ve döndür
  const url = await getDownloadURL(imageRef);

  return url;
};

export default upload;
