import { Divider } from "@/components/ui/Divider";
import GoogleSignInButton from "@/components/GoogleSignInButton";
import SignInForm from "./Form";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import GithubSignInButton from "@/components/GithubSignInButton";

export default async function SignIn() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/dashboard");
  }

  return (
    <main className="mx-auto mt-36 max-w-6xl min-w-full md:min-w-[344px]">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h3 className="mt-6 text-lg font-semibold text-gray-900 dark:text-gray-50">
          Login or create account
        </h3>
        <div className="mt-8 sm:flex sm:items-center sm:gap-x-2">
          <GithubSignInButton className="max-w-[50%]" />
          <GoogleSignInButton className="max-w-[50%]" />
        </div>
        <Divider>or</Divider>
        <SignInForm />
      </div>
    </main>
  );
}
