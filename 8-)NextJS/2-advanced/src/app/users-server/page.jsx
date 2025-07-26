// absolute import
// import { getUsers } from "@/utils/service";

// relative import
import { notFound, redirect } from "next/navigation";
import { getUsers } from "../../utils/service";

// ISR
export const revalidate = 60; // bu sayfa her 60 saniyede bir yenilenir

// Statik sayfayı dinamik sayfaya çevirir
export const dynamic = "force-dynamic";

const UsersServer = async () => {
  const { users } = await getUsers();

  if ("admin değilse") {
    //  redirect("/");
    //notFound();
  }

  return (
    <div>
      <h1 className="font-crack text-4xl mb-10">Kullanıcılar</h1>

      {users.map((user) => (
        <p key={user.id} className="font-play mb-4">
          {user.firstName} {user.lastName}
        </p>
      ))}
    </div>
  );
};

export default UsersServer;
