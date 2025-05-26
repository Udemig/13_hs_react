import PostForm from "../../components/post-form";
import PostList from "../../components/post-list";

const Main = ({ user }) => {
  return (
    <div className="border border-tw-gray overflow-y-auto">
      <header className="border-b border-tw-gray p-4 font-bold">Anasayfa</header>

      <PostForm user={user} />

      <PostList />
    </div>
  );
};

export default Main;
