import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { FaHeart, FaRegComment, FaRegHeart, FaRetweet } from "react-icons/fa";
import { FaShareNodes } from "react-icons/fa6";
import { db, auth } from "../../firebase";

const Buttons = ({ tweet }) => {
  // aktif kullanıcı tweet'i likeladı mı?
  const isLiked = tweet.likes.includes(auth.currentUser.uid);

  // like butonuna tıklanınca
  const toggleLike = async () => {
    // güncellenicek olan dökümanın referansını al
    const docRef = doc(db, "tweets", tweet.id);

    // likelandıysa: kullanıcının id'sini likes dizisinden kaldır
    // likelanmadıysa: kullanıcının id'sini likes dizisine ekle
    await updateDoc(docRef, {
      likes: isLiked
        ? arrayRemove(auth.currentUser.uid) //
        : arrayUnion(auth.currentUser.uid),
    });
  };

  return (
    <div className="flex justify-between items-center pink-zinc-500">
      <button className="post-icon hover:text-blue-400 hover:bg-blue-400/20">
        <FaRegComment />
      </button>

      <button className="post-icon hover:text-green-400 hover:bg-green-400/20">
        <FaRetweet />
      </button>

      <button
        onClick={toggleLike}
        className={`post-icon hover:pink-blue-400 hover:bg-pink-400/20 flex items-center relative ${
          isLiked && "text-pink-500"
        }`}
      >
        {isLiked ? <FaHeart /> : <FaRegHeart />}

        <span className="absolute -end-1">{tweet.likes.length}</span>
      </button>

      <button className="post-icon hover:pink-blue-400 hover:bg-blue-400/20">
        <FaShareNodes />
      </button>
    </div>
  );
};

export default Buttons;
