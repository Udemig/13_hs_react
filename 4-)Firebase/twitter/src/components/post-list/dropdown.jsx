import { MdDelete, MdEdit } from "react-icons/md";
import { auth, db } from "../../firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useRef, useState } from "react";
import EditModal from "../modal/edit-modal";

const Dropdown = ({ tweet }) => {
  const [isOpen, setIsOpen] = useState(false);
  const checkboxRef = useRef();

  // tweet'i gönderen kişi ile şuan oturumu açık olan kişi aynı mı?
  const isOwn = tweet.user.id === auth.currentUser.uid;

  // silme
  const handleDelete = () => {
    // kullanıcnın onayını al
    if (!confirm("Kaldırmak istediğinizden emin misiniz?")) return;

    // silinecek dökümanın referansını al
    const docRef = doc(db, "tweets", tweet.id);

    // dökümanı kaldır
    deleteDoc(docRef)
      .then(() => toast.success("Döküman kaldırıldı"))
      .catch(() => toast.error("Bir sorun oluştu"));

    // dropdown'ı kapat
    checkboxRef.current.checked = false;
  };

  return (
    isOwn && (
      <>
        <label className="popup z-[9]">
          <input ref={checkboxRef} type="checkbox" />
          <div className="burger" tabindex="0">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav className="popup-window">
            <legend>Eylemler</legend>
            <ul>
              <li>
                <button onClick={() => setIsOpen(true)} className="text-blue-500 text-base">
                  <MdEdit />
                  <span>Düzenle</span>
                </button>
              </li>
              <hr />
              <li>
                <button onClick={handleDelete}>
                  <MdDelete className="text-red-500 text-base" />
                  <span>Sil</span>
                </button>
              </li>
            </ul>
          </nav>
        </label>

        <EditModal
          isOpen={isOpen}
          close={() => {
            setIsOpen(false);
            checkboxRef.current.checked = false;
          }}
          tweet={tweet}
        />
      </>
    )
  );
};

export default Dropdown;
