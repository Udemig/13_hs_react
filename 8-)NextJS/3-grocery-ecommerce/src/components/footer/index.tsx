import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="bg-green-900 text-white p-5 text-center ">
      Manav Market © {new Date().getFullYear()} Tüm hakları saklıdır.
    </footer>
  );
};

export default Footer;
