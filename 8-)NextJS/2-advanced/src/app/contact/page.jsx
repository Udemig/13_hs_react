"use client"; // client component

import { useEffect } from "react";
import Socials from "./socials";

const Page = () => {
  console.log("iletişim sayfası render edildi");

  useEffect(() => {
    console.log("component mount oldu");
  }, []);

  return (
    <div className="client-component  h-[80vh] -mx-20 p-10">
      <h1>İletişim Sayfası</h1>

      <button onClick={() => alert("tıklandı")}>Tıkla</button>

      <Socials />

      <span className="client">client component</span>
    </div>
  );
};

export default Page;
