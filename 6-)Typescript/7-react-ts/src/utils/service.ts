import type { PostResponse } from "../types";

export const getPosts = async (): Promise<PostResponse> => {
  const res = await fetch("https://dummyjson.com/posts");

  return res.json();
};

export const getTest = async (): Promise<void> => {};
