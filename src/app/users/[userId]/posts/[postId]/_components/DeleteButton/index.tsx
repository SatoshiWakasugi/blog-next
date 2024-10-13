"use client";

import { softDeletePost } from "@/app/apis/posts";
import { Button } from "@/app/components/Button";
import type { ButtonProps } from "@/app/components/Button";
import { FC } from "react";

type Props = ButtonProps & {
  postId: number;
  children: React.ReactNode;
};

export const DeleteButton: FC<Props> = ({ children, postId, ...props }) => {
  const onClick = () => {
    softDeletePost(postId);
  };

  return (
    <Button {...props} onClick={onClick}>
      {children}
    </Button>
  );
};
