"use client";

import { usePathname, useRouter } from "next/navigation";

const Welcome = () => {
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="flex flex-col gap-5">
      <button onClick={() => router.forward()}>İleri</button>

      <button onClick={() => router.back()}>Geri</button>

      <button onClick={() => router.push("/users-server")}>Yönlendir</button>

      <button onClick={() => router.replace("/users-client")}>
        Yönlendir (Geçmişi Sil)
      </button>

      <button onClick={() => router.refresh()}>Yenile</button>
    </div>
  );
};

export default Welcome;
