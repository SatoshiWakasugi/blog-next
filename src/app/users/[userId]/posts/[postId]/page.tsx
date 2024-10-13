import { getPost } from "@/app/apis/posts";

export default async function UserIdPostId({
  params,
}: {
  params: { postId: number };
}) {
  const { postId } = params;
  const { post } = await getPost(postId);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        詳細{postId}
        <div>
          <p>id: {post.id}</p>
          <p>title: {post.title}</p>
          <p>content: {post.content}</p>
          <p>created_at: {post.created_at}</p>
        </div>
      </main>
    </div>
  );
}
