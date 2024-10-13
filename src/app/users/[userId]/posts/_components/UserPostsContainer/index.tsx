import { getUser, getUserPosts } from "@/app/apis/users";
import { FC } from "react";

type Props = {
  userId: number;
  children: (data: { posts: any }) => React.ReactNode; // レンダープロップスとして渡す関数の型定義
};

export const UserPostsContainer: FC<Props> = async ({ userId, children }) => {
  const { posts } = await getUserPosts(userId);

  console.log(posts);

  return <>{children({ posts })}</>;
};
