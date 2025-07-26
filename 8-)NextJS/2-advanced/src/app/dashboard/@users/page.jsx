import delay from "../../../utils/delay";

const UsersPage = async () => {
  await delay(2000);

  return (
    <div className="box">
      <h1>Kullanıcı Listesi</h1>
    </div>
  );
};

export default UsersPage;
