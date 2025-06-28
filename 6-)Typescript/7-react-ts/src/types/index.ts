type Post = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
};

type PostResponse = {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
};

export type { Post, PostResponse };
