import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh]">
      <h1 className="text-4xl font-bold">404</h1>
      <h2 className="text-2xl font-bold">Sayfa Bulunamadı</h2>
      <Link href="/" className="text-blue-500">
        Ana Sayfaya Dön
      </Link>
    </div>
  );
};

export default NotFound;
