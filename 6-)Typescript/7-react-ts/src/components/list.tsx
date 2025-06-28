import { useEffect, useState } from "react";
import { getPosts } from "../utils/service";
import type { Post } from "../types";

const List = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getPosts().then((data) => setPosts(data.posts));
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default List;
