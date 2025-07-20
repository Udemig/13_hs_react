"use client";

// Layout component'ları HOC türündedir.
// Oluşturulduğu route grubundaki tüm sayfalara etki eder

import Link from "next/link";
import { useState } from "react";

// Kapsadığı bütün sayfaların oto. children propu olarak alır
const Layout = ({ children }) => {
  const [name, setName] = useState("");

  return (
    <div className="p-20 flex items-center">
      <aside className="border rounded-md p-5 h-fit whitespace-nowrap flex flex-col gap-5">
        <h1>Selam, {name}</h1>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          className="border"
        />
        <Link href="/signup">Kayıt Ol</Link>
        <Link href="/login">Giriş Yap</Link>
      </aside>

      <div className="w-3/4">{children}</div>
    </div>
  );
};

export default Layout;
