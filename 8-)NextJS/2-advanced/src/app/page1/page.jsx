import Link from "next/link";

const Page1 = () => {
  return (
    <div>
      <h1>Page - 1</h1>
      <Link href="/page1/page2" className="text-blue-500 text-lg">
        Page 2'ye Git
      </Link>
    </div>
  );
};

export default Page1;
