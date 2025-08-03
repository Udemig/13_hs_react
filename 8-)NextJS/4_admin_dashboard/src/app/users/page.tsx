import Loading from "@/components/loading";
import UserModal from "@/components/modal/user-modal";
import UserTable from "@/components/table/user-table";
import { FC, Suspense } from "react";

interface Props {
  searchParams: Promise<{ show?: string }>;
}

const Users: FC<Props> = async ({ searchParams }) => {
  const { show } = await searchParams;

  return (
    <div className="page">
      <h1 className="title">Kullanıcılar</h1>

      {/* Loader'ı sayfanın istediğimiz noktasında gösterebiliyoruz:
         Loading.jsx yöntemindeki gibi bütün sayfa içieriğini ekrandan gitmesini önlüyoruz
      */}
      <Suspense fallback={<Loading designs="my-20" />}>
        <UserTable />
      </Suspense>

      {/*
       * Show parametresi varsa modalı göster
       * Bu yöntem sayesinde modal açık mı state'i tutumamıza gerek kalmaz ve server componentlar üzerinden modalı aç kpa yapabiliriz
       */}
      {show && <UserModal userId={show} />}
    </div>
  );
};

export default Users;
