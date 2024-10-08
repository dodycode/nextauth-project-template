import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className="mx-auto mt-36 max-w-6xl">
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold">NextAuth Starter</h1>
        <div className="flex flex-col gap-y-4">
          <div>
            This is a starter project that use{" "}
            <Link href="https://nextjs.authjs.dev">NextAuth.js</Link> for
            authentication and{" "}
            <Link href="https://raw.tremor.so">Tremor Raw</Link> for components.
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
