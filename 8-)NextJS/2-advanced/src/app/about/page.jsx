import Form from "./form";

const Page = () => {
  console.log("hakımızda sayfası render edildi");

  const apiKey = "123456";

  return (
    <div className="server-component h-[80vh] -mx-20 p-10">
      <h1>Hakkımızda Sayfası</h1>

      <Form />

      <span className="server">server component</span>
    </div>
  );
};

export default Page;
