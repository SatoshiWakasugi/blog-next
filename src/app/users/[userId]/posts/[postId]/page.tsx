import { getPost } from "@/app/apis/posts";
import { Button } from "@/app/components/Button";
import { DeleteButton } from "./_components/DeleteButton";

export default async function UserIdPostId({
  params,
}: {
  params: { postId: number };
}) {
  const { postId } = params;
  const { post } = await getPost(postId);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
        <div className="flex justify-between gap-4 w-full">
          <h1 className="font-bold text-2xl">{post.title}</h1>
          <div className="flex gap-4">
            <DeleteButton variant="outline" color="danger" postId={postId}>
              削除
            </DeleteButton>
            <Button color="primary">編集</Button>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <p>id: {post.id}</p>
          <div>{post.content}</div>
          <p>created_at: {post.created_at}</p>
        </div>
      </main>
    </div>
  );
}
