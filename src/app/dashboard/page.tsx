import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signin");
  }

  return (
    <main className="mx-auto mt-36 max-w-6xl">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-y-4">
          <div>
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <p>Welcome, {session?.user?.name}!</p>
            <p>
              This is a protected page. Only authenticated users can see this.
            </p>
          </div>
          <div className="flex flex-col bg-gray-100 rounded-md">
            <div className="p-4 font-bold bg-gray-200 rounded-t-md">
              Current Session
            </div>
            <pre className="py-6 px-4 whitespace-pre-wrap break-all">
              {JSON.stringify(session, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    </main>
  );
}
