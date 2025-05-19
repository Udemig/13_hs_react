import { useEffect, useRef, useState } from "react";
import { collection, onSnapshot, query, where, orderBy } from "firebase/firestore";
import { auth, db } from "../../firebase/index";
import Message from "./message";
import Arrow from "./arrow";

const List = ({ room }) => {
  const [messages, setMessages] = useState([]);
  const [isAtBottom, setIsAtBottom] = useState(true);
  const [unreadCount, setUnreadCount] = useState(0);
  const lastMessageRef = useRef(null);
  const containerRef = useRef(null);
  const prevMessagesLength = useRef(0);
  const audioRef = useRef(new Audio("/notify.mp3"));

  // veritbanında verileri al
  useEffect(() => {
    // kolleksiyonun referansını al
    const messagesRef = collection(db, "messages");

    // sorgu ayarlarını yap
    const q = query(messagesRef, where("room", "==", room), orderBy("createdAt", "asc"));

    // messages kolleksiyonuna abone ol (değişiklikleri takip)
    // kolleksiyon her değiştiğinde fonksiyon bize dökümanları getirir
    const unsub = onSnapshot(q, (res) => {
      // dökümanları geçici olarak tutulduğu dizi
      const temp = [];

      // dökümanları dönüp içerisindeki datalara erişip diziye aktar
      res.docs.forEach((doc) => temp.push(doc.data()));

      // dökümanları state'e aktar
      setMessages(temp);
    });

    // kullanıcı sayfadan ayrılıca aboneli durdur
    return () => unsub();
  }, []);

  // her yeni mesaj gelme olayında çalışıcak:
  useEffect(() => {
    if (messages.length > 1) {
      // gönderilen son mesaja eriş
      const lastMsg = messages[messages.length - 1];

      // kullanıcı yukardayken yeni mesaj gelirse unread state'ini arttır
      if (messages.length > prevMessagesLength.current && !isAtBottom) {
        // atılan son mesaj farklı kullanıcı tarafından atılmadıysa
        if (lastMsg.author.id !== auth.currentUser.uid) {
          // okunmamış mesaj state'ini arttır
          setUnreadCount((prev) => prev + 1);
          playSound();
        }
      }

      // toplam mesaj sayısını bu referansa aktar
      prevMessagesLength.current = messages.length;

      if (lastMsg.author.id == auth.currentUser.uid) {
        // eğer son mesajı aktif kullanıcı attıysa her koşulda kaydır
        scrollToBottom();
      } else if (isAtBottom) {
        // eğer aşşağıdayken mesaj gelirse son mesaja kaydır
        scrollToBottom();
        playSound();
      }
    }
  }, [messages]);

  // en aşşağıya kaydır
  const scrollToBottom = () => {
    // son mesaja kaydır
    lastMessageRef.current.scrollIntoView();

    // okunmamış mesaj sayısını sıfırla
    setUnreadCount(0);
  };

  // kaydırma anında çalışır
  const handleScroll = () => {
    // scrollTop: kullanıcı yukarıdan itibaren ne kadar kaydırdığı
    // clientHeight: container kullanıcının ekranındaki yüksekliği
    // scrollHeight: tüm içeriğin yüksekliği (gizli kısımlar dahil)
    const { scrollTop, clientHeight, scrollHeight } = containerRef.current;

    // kullanıcı sayfanın en altında mı hesapla ve state'e aktar
    setIsAtBottom(scrollTop + clientHeight >= scrollHeight - 150);
  };

  //TODO: bildirim sesini oynat
  const playSound = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };

  return (
    <main
      onScroll={handleScroll}
      ref={containerRef}
      className="flex-1 p-3 flex flex-col gap-3 w-full overflow-y-auto relative"
    >
      {messages.length < 1 ? (
        <div className="h-full grid place-items-center text-zinc-400">
          <p>Sohbete ilk mesajı gönderin</p>
        </div>
      ) : (
        messages.map((i, key) => <Message item={i} key={key} />)
      )}

      <div ref={lastMessageRef} />

      <Arrow isAtBottom={isAtBottom} scrollToBottom={scrollToBottom} unreadCount={unreadCount} />
    </main>
  );
};

export default List;
