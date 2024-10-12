import { getUser } from "@/app/api/users";

export default async function UserId({
  params,
}: {
  params: { userId: number };
}) {
  const { userId } = params;
  const { user } = await getUser(userId);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl">{user.name}</h1>
        <div>
          <p>id: {user.id}</p>
          <p>email: {user.email}</p>
        </div>
        <a href={`/user/${userId}/posts`}>{user.name}の投稿一覧</a>
      </main>
    </div>
  );
}
