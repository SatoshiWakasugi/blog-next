import dayjs from "dayjs";
import { UserPostsContainer } from "./_components/UserPostsContainer";
import { Button } from "@/app/components/Button";

export default async function UserIdPost({
  params,
}: {
  params: { userId: number };
}) {
  const { userId } = params;

  const hasPosts = (posts: []) => Boolean(posts.length > 0);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
        <h1>投稿一覧</h1>
        <div className="w-full flex justify-end">
          <Button<"Link"> href={`/users/${userId}/posts/create`}>
            新しい投稿
          </Button>
        </div>
        <UserPostsContainer userId={userId}>
          {({ posts }) => {
            return !hasPosts(posts) ? (
              <p>公開中の投稿はありません</p>
            ) : (
              <ul className="flex flex-col gap-2 w-full">
                {posts.map((post: any) => {
                  return (
                    <a
                      key={post.id}
                      href={`/users/${userId}/posts/${post.id}`}
                      className={`${post.deleted_at && "cursor-not-allowed"}`}
                    >
                      <li
                        className={`border-2 border-solid ${
                          post.deleted_at ? "bg-red-50" : "hover:bg-gray-50"
                        } p-4 rounded-lg`}
                      >
                        <div className="flex flex-col gap-4">
                          <p className="font-bold text-2xl">{post.title}</p>
                          <div className="flex justify-between items-end">
                            <div>
                              <p>
                                <span className="font-bold pr-2">ID:</span>
                                {post.id}
                              </p>
                              <div className="flex gap-4">
                                <p>
                                  <span className="font-bold pr-2">
                                    作成日:
                                  </span>
                                  {dayjs(post.created_at).format("YYYY/MM/DD")}
                                </p>
                                {post.deleted_at && (
                                  <p className="text-red-600 font-bold">
                                    <span className="font-bold pr-2">
                                      削除日:
                                    </span>
                                    {dayjs(post.deleted_at).format(
                                      "YYYY/MM/DD"
                                    )}
                                  </p>
                                )}
                              </div>
                            </div>
                            <div className="flex gap-2 justify-end items-center">
                              <div
                                className={`${
                                  post.published
                                    ? "text-green-600"
                                    : "text-red-600"
                                } font-bold text-sm`}
                              >
                                {post.published ? "公開中" : "非公開"}
                              </div>
                              <div
                                className={`rounded-full w-4 h-4 ${
                                  post.published ? "bg-green-600" : "bg-red-600"
                                }`}
                              />
                            </div>
                          </div>
                        </div>
                      </li>
                    </a>
                  );
                })}
              </ul>
            );
          }}
        </UserPostsContainer>
      </main>
    </div>
  );
}
