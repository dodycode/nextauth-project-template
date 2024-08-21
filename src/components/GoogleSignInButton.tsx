"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { Button } from "./ui/Button";
import { RiGoogleFill } from "@remixicon/react";
import { cx } from "@/lib/utils";

export default function GoogleSignInButton({
  className,
}: {
  className?: string;
}) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async () => {
    setIsLoading(true);
    try {
      await signIn("google", { callbackUrl: "/dashboard" });
    } catch (error) {
      console.error("Error during sign in:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      asChild
      variant="secondary"
      className={cx(
        "mt-2 w-full sm:mt-0 cursor-pointer flex-grow-0",
        className
      )}
      onClick={handleSignIn}
      isLoading={isLoading}
      loadingText=""
    >
      <div className="inline-flex items-center gap-2">
        <RiGoogleFill className="size-4" aria-hidden={true} />
        {!isLoading && <>Login with Google</>}
      </div>
    </Button>
  );
}
