import { getUserPosts } from "@/app/api/users";

export default async function UserIdPost({
  params,
}: {
  params: { userId: number };
}) {
  const { userId } = params;
  const { posts } = await getUserPosts(userId, true);

  const hasPosts = (posts: []) => Boolean(posts.length > 0);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {!hasPosts(posts) ? (
          <p>公開中の投稿はありません</p>
        ) : (
          <ul className="flex flex-col gap-4">
            {posts.map((post: any) => {
              return (
                <a key={post.id} href={`/user/${userId}/posts/${post.id}`}>
                  <li className="border-2 py-4 px-8">
                    <p>
                      <span className="font-bold pr-2">id:</span>
                      {post.id}
                    </p>
                    <p>
                      <span className="font-bold pr-2">title:</span>
                      {post.title}
                    </p>
                    <p>
                      <span className="font-bold pr-2">content:</span>
                      {post.content}
                    </p>
                    <p>
                      <span className="font-bold pr-2">created_at:</span>
                      {post.created_at}
                    </p>
                  </li>
                </a>
              );
            })}
          </ul>
        )}
      </main>
    </div>
  );
}
