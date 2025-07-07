import type { FC } from "react";
import { Link } from "react-router-dom";

const Footer: FC = () => {
  return (
    <footer className="mt-auto bg-card border-t border-border">
      <div className="container py-4 px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-secondary text-sm">
            &copy; {new Date().getFullYear()} NotApp - Modern Not Uygulaması
          </p>

          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link
              to="#"
              className="text-text-secondary hover:text-text-primary transition-all text-sm"
            >
              Hakkında
            </Link>
            <Link
              to="#"
              className="text-text-secondary hover:text-text-primary transition-all text-sm"
            >
              Gizlilik
            </Link>
            <Link
              to="#"
              className="text-text-secondary hover:text-text-primary transition-all text-sm"
            >
              İletişim
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
