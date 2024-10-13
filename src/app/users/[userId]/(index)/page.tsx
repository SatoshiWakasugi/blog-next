import { Button } from "@/app/components/Button";
import { UserContainer } from "./_components/UserContainer";

export default function UserId({ params }: { params: { userId: number } }) {
  const { userId } = params;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="row-start-2 items-center sm:items-start w-full">
        <UserContainer userId={userId}>
          {({ user }) => (
            <div className="flex flex-col items-center gap-8">
              <h1 className="text-4xl">{user.name}</h1>
              <div>
                <p>id: {user.id}</p>
                <p>email: {user.email}</p>
              </div>
              <div className="flex gap-2">
                <Button<"Link"> href={`/users/${user.id}/posts`}>
                  投稿一覧へ
                </Button>
              </div>
            </div>
          )}
        </UserContainer>
      </main>
    </div>
  );
}
