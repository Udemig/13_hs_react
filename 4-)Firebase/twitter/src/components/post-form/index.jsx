import { toast } from "react-toastify";
import FormActions from "./form-actions";
import TextArea from "./text-area";
import UserAvatar from "./user-avatar";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase/index";
import { useRef, useState } from "react";
import Preview from "./preview";
import upload from "../../firebase/upload";

const PostForm = ({ user }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [preview, setPreview] = useState(null);
  const fileRef = useRef();

  // resmin önizleme fotoğrafını oluşturan fonskiyon
  const onImageChange = () => {
    if (fileRef.current && fileRef.current.files[0]) {
      setPreview(URL.createObjectURL(fileRef.current.files[0]));
    }
  };

  // önizlemeyi kaldıran fonksiyon
  const clearImage = () => {
    // önizleme state'ini sıfırla
    setPreview(null);

    // file input'unun value'sunu temizlesin
    if (fileRef.current) {
      fileRef.current.value = null;
    }
  };

  // form göndeirilince
  const handleSubmit = async (e) => {
    e.preventDefault();

    // inputlardaki verileri al
    const text = e.target.text.value;
    const file = e.target.image.files[0];

    // girdi yoksa bildirim gönder
    if (!text.trim() && !file) return toast.warning("Lütfen içeriği belirleyiniz");

    // tweet'i kolleksiyona kaydet
    try {
      // yüklenme state'ini true'ya çek
      setIsLoading(true);

      // resmi firebase storage'a yükle
      const imageUrl = await upload(file);

      // kolleksiyonun referansını al
      const collectionRef = collection(db, "tweets");

      // yeni tweet belgesini kolleksiyona ekle
      await addDoc(collectionRef, {
        content: { text, image: imageUrl },
        isEdited: false,
        likes: [],
        createdAt: serverTimestamp(),
        user: {
          id: user.uid,
          name: user.displayName,
          photo: user.photoURL,
        },
      });

      // formu sıfırla
      e.target.reset();
      clearImage();
    } catch (err) {
      // hatayı bildir
      console.log(err);
      toast.error(err.code);
    } finally {
      // yüklenme state'ini false'a çek
      setIsLoading(false);
    }
  };

  return (
    <div className="border-b border-tw-gray p-4 flex gap-3">
      <UserAvatar photo={user?.photoURL} name={user?.displayName} />

      <form className="w-full pt-1" onSubmit={handleSubmit}>
        <TextArea />

        <Preview isLoading={isLoading} url={preview} close={clearImage} />

        <FormActions isLoading={isLoading} fileRef={fileRef} onImageChange={onImageChange} />
      </form>
    </div>
  );
};

export default PostForm;
