import Link from "next/link";

const Page2 = () => {
  return (
    <div>
      <h1>Page - 2</h1>
      <Link href="/page1" className="text-blue-500 text-lg">
        Page 1'e Dön
      </Link>
    </div>
  );
};

export default Page2;
