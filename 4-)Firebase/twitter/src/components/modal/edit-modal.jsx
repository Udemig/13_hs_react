import { toast } from "react-toastify";
import Modal from ".";
import { db } from "../../firebase/index";
import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import upload from "../../firebase/upload";
import Loader from "../loader/index";

const EditModal = ({ isOpen, close, tweet }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isPicDeleting, setIsPicDeleting] = useState(false);

  // modalı kapat
  const handleClose = () => {
    close();
    setIsPicDeleting(false);
  };

  // form gönderilince
  const handleSubmit = async (e) => {
    e.preventDefault();

    // inputlardaki verileri al
    const text = e.target.text.value.trim();
    const file = e.target.image?.files[0];

    // verileri kontrol et
    if (!text && !file && !tweet.content.image) {
      return toast.info("Lütfen içeriği belirleyin");
    }

    try {
      setIsLoading(true);
      // güncellenicek dökümanın referansını al
      const docRef = doc(db, "tweets", tweet.id);

      // belgenin güncellenicek değerlerini belirle
      let updateData = {
        "content.text": text,
        isEdited: true,
      };

      // eğer fotoğraf silinecekse güncellenicek veriyi değiştir
      if (isPicDeleting) {
        updateData["content.image"] = null;
      }

      // yeni resim seçildiyse yükle
      if (file) {
        const imageUrl = await upload(file);
        updateData["content.image"] = imageUrl;
      }

      // belgeyi güncelle
      await updateDoc(docRef, updateData);

      // modal'ı kapat
      handleClose();
    } catch (error) {
      console.log(error);
      toast.error("Bir sorun oluştu");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} close={handleClose}>
      <h1 className="text-2xl">Tweet'i Düzenle</h1>

      <form onSubmit={handleSubmit} className="flex flex-col mt-10 min-w-[90%]">
        <label className="text-sm mb-3">Metni Değiştir</label>
        <textarea
          name="text"
          defaultValue={tweet.content.text}
          className="resize-y min-h-20 max-h-[250px] bg-black text-secondary border border-zinc-700 rounded-md p-3 outline-none"
        />

        <label className="text-sm mt-8 mb-3">Fotoğrafı Değiştir</label>

        {tweet.content.image && !isPicDeleting ? (
          <button type="button" className="button" onClick={() => setIsPicDeleting(true)}>
            Resmi Kaldır
          </button>
        ) : (
          <input name="image" type="file" className="button" />
        )}

        <div className="flex justify-end gap-5 mt-10">
          <button onClick={handleClose} type="button" className="cursor-pointer">
            Vazgeç
          </button>
          <button
            disabled={isLoading}
            type="submit"
            className="bg-secondary text-black px-3 py-1 rounded-md cursor-pointer hover:bg-secondary/70 transition min-w-[80px] h-8"
          >
            {isLoading ? <Loader /> : "Kaydet"}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default EditModal;
