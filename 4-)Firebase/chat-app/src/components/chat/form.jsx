import { useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react";
import { db } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Form = ({ user, room }) => {
  const [text, setText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  // useRef: input elementinin referansını alıyor ve elementin js kodu içerisinde erişilebilir olmasını sağlıyor
  const inputRef = useRef();

  // seçili emojiyi inputa aktar
  const handleEmojiClick = (e) => {
    if (inputRef.current) {
      // inputta imleç seçiminin başladığı konum
      const start = inputRef.current.selectionStart;

      // inputta imleç seçiminin bittiği konum
      const end = inputRef.current.selectionEnd;

      // seçili konuma emojiyi ekle state'i güncelle
      setText((curr) => curr.substring(0, start) + e.emoji + curr.substring(end));
    }
  };

  // form gönderilince
  const handleSubmit = async (e) => {
    e.preventDefault();

    // belgenin kaydedileceği kolleksiyonun referansını al
    const collectionRef = collection(db, "messages");

    // inputu sıfırla / modal'ı kapat
    setText("");
    setIsOpen(false);

    // mesaj belgesini messages kolleksiyonuna kaydet
    await addDoc(collectionRef, {
      text,
      room,
      author: {
        id: user.uid,
        name: user.displayName,
        photo: user.photoURL,
      },
      createdAt: serverTimestamp(),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-5 border border-gray-200 shadow-lg flex justify-center gap-3">
      <input
        // inputReferanını belirlerik
        ref={inputRef}
        value={text}
        type="text"
        onChange={(e) => setText(e.target.value)}
        className="border border-gray-200 shadow-sm p-2 px-4 rounded-md w-1/2"
      />

      <div className="relative">
        <div className="absolute top-[-470px] right-[-140px]">
          <EmojiPicker open={isOpen} onEmojiClick={handleEmojiClick} />
        </div>

        <button type="button" className="btn text-base" onClick={() => setIsOpen(!isOpen)}>
          😂
        </button>
      </div>

      <button
        type="submit"
        disabled={text.trim().length < 1}
        className="btn bg-black text-white disabled:brightness-75"
      >
        Gönder
      </button>
    </form>
  );
};

export default Form;
