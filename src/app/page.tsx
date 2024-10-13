import { getUsers } from "./apis/users";

export default async function Home() {
  const users = await getUsers();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-xl">Users</h1>
        <ul>
          {users.map((user: any) => (
            <li key={user.id} className="pb-4">
              <a href={`/users/${user.id}`} className="flex flex-col">
                <p>
                  <span className="font-bold pr-2">name:</span>
                  {user.name}
                </p>
                <p>
                  <span className="font-bold pr-2">email:</span>
                  {user.email}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
