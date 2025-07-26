"use client";

import { useParams, useSearchParams } from "next/navigation";

// Server component'larda url'deki parametre component'a prop olarak gelir
// Prop üzerinden parametrelere erişebiliriz
// Client component'larda ise useParams hook'u ile erişebiliriz prop yöntemi çalışmaz
const WelcomeName = () => {
  // pathname'deki parametreleri alabiliriz
  const params = useParams();

  // searchParams'deki parametreleri alabiliriz
  const searchParams = useSearchParams();

  // istediğimiz parametreyi seçip çağırıyoruz
  const zaman = searchParams.get("zaman");

  return (
    <div>
      {zaman === "akşam" ? "İyi akşamlar, " : "Merhaba, "} {params.name}
    </div>
  );
};

export default WelcomeName;
