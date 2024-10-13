import { getUser } from "@/app/apis/users";
import { FC } from "react";

type Props = {
  userId: number;
  children: (data: { user: any }) => React.ReactNode;
};

export const UserContainer: FC<Props> = async ({ userId, children }) => {
  const { user } = await getUser(userId);

  return <>{children({ user })}</>;
};
