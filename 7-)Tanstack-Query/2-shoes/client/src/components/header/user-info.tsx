import { Search, User } from "lucide-react";
import { useState, type FC } from "react";
import { Link } from "react-router-dom";
import { useLogout, useUser } from "../../service/auth";

const UserInfo: FC = () => {
  const { user } = useUser();
  const { mutate, isPending } = useLogout();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex items-center gap-6 xl:gap-10">
      <button className="cursor-pointer max-md:hidden">
        <Search />
      </button>

      <button className="relative cursor-pointer user-info">
        <User
          className="hover:text-zinc-500"
          onClick={() => setIsOpen(!isOpen)}
        />

        {isOpen && user && (
          <div className="absolute top-10 -left-26 bg-white shadow-lg rounded-md z-50 overflow-hidden border border-zinc-200">
            <button className="font-semibold header-button">
              <span>{user.firstName}</span>
              <span className="ms-1">{user.lastName}</span>
            </button>

            {user.role === "admin" && (
              <Link to="/dashboard" className="header-button cursor-pointer">
                <span>Admin Paneli</span>
              </Link>
            )}

            <button
              disabled={isPending}
              onClick={() => mutate()}
              className="header-button cursor-pointer"
            >
              Çıkış Yap
            </button>
          </div>
        )}
      </button>
    </div>
  );
};

export default UserInfo;
