"use client"; // client component

import { useEffect } from "react";

const Page = () => {
  console.log("iletişim sayfası render edildi");

  useEffect(() => {
    console.log("component mount oldu");
  }, []);

  return (
    <div className="client-component ">
      <h1>İletişim Sayfası</h1>

      <button onClick={() => alert("tıklandı")}>Tıkla</button>

      <span className="client">client component</span>
    </div>
  );
};

export default Page;
