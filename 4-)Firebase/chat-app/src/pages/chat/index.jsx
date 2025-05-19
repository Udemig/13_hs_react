import { useOutletContext, useParams } from "react-router-dom";
import Header from "../../components/chat/header";
import List from "../../components/chat/list";
import Form from "../../components/chat/form";

const Chat = () => {
  const user = useOutletContext();
  const { room } = useParams();

  return (
    <div className="h-screen md:grid md:place-items-center">
      <div className="bg-white text-grey w-full md:w-[80vw] md:max-w-[600px] h-screen md:h-[80vh] md:rounded-md overflow-hidden flex flex-col">
        <Header user={user} room={room} />
        <List room={room} />
        <Form user={user} room={room} />
      </div>
    </div>
  );
};

export default Chat;
