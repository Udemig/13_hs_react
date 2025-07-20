const Page = async ({ params }) => {
  const { slug } = await params;

  return (
    <div className="p-20">
      <h1 className="text-4xl font-bold my-20">Docs Sayfası</h1>
      <h1 className="text-2xl font-bold">{slug.join("/")}</h1>
    </div>
  );
};

export default Page;
