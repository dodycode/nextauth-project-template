"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignInForm() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;

    if (!email) {
      setIsLoading(false);
      return;
    }

    try {
      await signIn("email", {
        email,
        callbackUrl: "/dashboard",
      });
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setIsLoading(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} method="post" className="mt-6 space-y-4">
      <div>
        <Label
          htmlFor="email"
          className="text-sm font-medium text-gray-900 dark:text-gray-50"
        >
          Email
        </Label>
        <Input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          placeholder="john@company.com"
          className="mt-2"
          required={true}
        />
      </div>
      <Button isLoading={isLoading} type="submit" className="mt-4 w-full">
        Sign in
      </Button>
    </form>
  );
}
