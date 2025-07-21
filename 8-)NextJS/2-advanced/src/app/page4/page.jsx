import Link from "next/link";

const Page4 = () => {
  return (
    <div>
      <h1>Page - 4</h1>
      <Link href="/page3" className="text-blue-500 text-lg">
        Page 3'ye Dön
      </Link>
    </div>
  );
};

export default Page4;
