"use client";

import { RiGithubFill } from "@remixicon/react";
import { Button } from "./ui/Button";
import { cx } from "@/lib/utils";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function GithubSignInButton({
  className,
}: {
  className?: string;
}) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async () => {
    setIsLoading(true);
    try {
      await signIn("github", { callbackUrl: "/dashboard" });
    } catch (error) {
      console.error("Error during sign in:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handleSignIn}
      isLoading={isLoading}
      asChild
      variant="secondary"
      className={cx("w-full cursor-pointer", className)}
    >
      <div className="inline-flex items-center gap-2">
        <RiGithubFill className="size-5 shrink-0" aria-hidden={true} />
        {!isLoading && <>Login with GitHub</>}
      </div>
    </Button>
  );
}
