import { getUsers } from "@/app/apis/users";

export default async function Home() {
  const users = await getUsers();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:py-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
        <h1 className="text-xl">Users</h1>
        <table className="w-full">
          <thead>
            <tr>
              <th className="border py-2 px-4" scope="col">
                id
              </th>
              <th className="border py-2 px-4" scope="col">
                name
              </th>
              <th className="border py-2 px-4" scope="col">
                email
              </th>
              <th className="border py-2 px-4" scope="col" />
            </tr>
          </thead>
          <tbody>
            {users.map((user: any) => (
              <tr key={user.id}>
                <td className="border py-2 px-4" scope="row">
                  {user.id}
                </td>
                <td className="border py-2 px-4" scope="row">
                  {user.name}
                </td>
                <td className="border py-2 px-4" scope="row">
                  {user.email}
                </td>
                <td className="border py-2 px-4" scope="row">
                  <a
                    href={`/users/${user.id}`}
                    className="flex flex-col text-blue-600 font-bold"
                  >
                    詳細
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
