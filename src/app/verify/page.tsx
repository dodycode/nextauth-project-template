import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function VerifyRequest() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <Card className="w-[350px]">
        <h2 className="text-2xl font-bold mb-4">Check your email</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          A sign-in link has been sent to your email address. Please check your
          inbox and click the link to sign in.
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          If you don't see the email, check your spam folder.
        </p>
        <Button asChild className="w-full">
          <Link href="/">Return to home page</Link>
        </Button>
      </Card>
    </div>
  );
}
