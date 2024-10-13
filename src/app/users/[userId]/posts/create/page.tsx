"use client";

import { useRef } from "react";
import { createPost } from "@/app/apis/posts";
import { Button } from "@/app/components/Button";

export default function UserIdCreate({
  params,
}: {
  params: { postId: number; userId: number };
}) {
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const { userId } = params;

  const onSubmit = async (event: any) => {
    event.preventDefault();
    try {
      createPost({
        title: titleRef.current?.value,
        content: contentRef.current?.value,
        user_id: userId,
        published: false,
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <form onSubmit={onSubmit}>
          <p>userId:{userId}</p>
          <div className="preference">
            <label htmlFor="title">title:</label>
            <input
              type="text"
              name="title"
              id="title"
              ref={titleRef}
              className="border"
            />
          </div>
          <div className="preference">
            <label htmlFor="content">content:</label>
            <textarea
              name="content"
              id="content"
              ref={contentRef}
              className="border"
            />
          </div>
          <Button type="submit">投稿</Button>
        </form>
      </main>
    </div>
  );
}
