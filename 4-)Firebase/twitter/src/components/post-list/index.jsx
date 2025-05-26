import { useEffect, useState } from "react";
import { db } from "../../firebase/index";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import Loader from "../loader/index";
import Post from "./post";

const PostList = () => {
  const [tweets, setTweets] = useState(null);

  useEffect(() => {
    // kolleksiyon referansını al
    const collectionRef = collection(db, "tweets");

    // sorgu ayarlarını yap
    const q = query(collectionRef, orderBy("createdAt", "desc"));

    // kolleksiyona abone ol
    const unsub = onSnapshot(q, (snapshot) => {
      // belgerin geçici olarak tutulduğu dizi
      const temp = [];

      // belgelerin verilerine erişip geçici diziye aktar
      snapshot.docs.forEach((doc) => temp.push({ id: doc.id, ...doc.data() }));

      // belgeler dizisini state'e aktar
      setTweets(temp);
    });

    // component ekrandan ayrılınca aboneliği durdur
    return () => unsub();
  }, []);

  return !tweets ? <Loader designs="my-40" /> : tweets.map((tweet, key) => <Post key={key} tweet={tweet} />);
};

export default PostList;
