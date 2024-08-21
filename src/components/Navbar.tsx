"use client";

import useScroll from "@/lib/useScroll";
import { cx } from "@/lib/utils";
import { RiCloseLine, RiDonutChartFill, RiMenuLine } from "@remixicon/react";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/Button";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

function AuthButton({ session }: { session: any }) {
  const router = useRouter();

  return (
    <>
      {session ? (
        <Button
          className="hidden h-10 font-semibold md:flex"
          onClick={() => signOut()}
        >
          Sign Out
        </Button>
      ) : (
        <Button
          className="hidden h-10 font-semibold md:flex"
          onClick={() => router.push("/signin")}
        >
          Sign In
        </Button>
      )}
    </>
  );
}

function MobileNavToggler({
  open,
  setOpen,
  session,
}: {
  open: boolean;
  setOpen: (isOpen: boolean) => void;
  session: any;
}) {
  return (
    <div className="flex gap-x-2 md:hidden">
      <AuthButton session={session} />
      <Button
        onClick={() => setOpen(!open)}
        variant="light"
        className="aspect-square p-2"
      >
        {open ? (
          <RiCloseLine aria-hidden="true" className="size-5" />
        ) : (
          <RiMenuLine aria-hidden="true" className="size-5" />
        )}
      </Button>
    </div>
  );
}

export default function Navbar() {
  const { data: session } = useSession();

  const scrolled = useScroll(15);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery: MediaQueryList = window.matchMedia("(min-width: 768px)");
    const handleMediaQueryChange = () => {
      setOpen(false);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    handleMediaQueryChange();

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <header
      className={cx(
        "fixed inset-x-3 top-4 z-50 mx-auto flex max-w-6xl transform-gpu animate-slide-down-fade justify-center overflow-hidden rounded-xl border border-transparent px-0 py-3 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1.03)] will-change-transform",
        open === true ? "h-52" : "h-16",
        scrolled || open === true
          ? "px-4 backdrop-blur-nav max-w-3xl border-gray-100 bg-white/80 shadow-xl shadow-black/5 dark:border-white/15 dark:bg-black/70"
          : "bg-white/0 dark:bg-gray-950/0"
      )}
    >
      <div className="w-full md:my-auto">
        <div className="relative flex items-center justify-between">
          <Link href="/" aria-label="Home">
            <span className="sr-only">Company logo</span>
            <div className="flex items-center space-x-2.5">
              <RiDonutChartFill
                className="size-7 text-gray-900 dark:text-gray-50"
                aria-hidden={true}
              />
              {!scrolled && (
                <p className="font-medium text-gray-900 dark:text-gray-50">
                  NextAuth.js Starter
                </p>
              )}
            </div>
          </Link>
          <nav className="hidden md:absolute md:left-1/2 md:top-1/2 md:block md:-translate-x-1/2 md:-translate-y-1/2 md:transform">
            <div className="flex items-center gap-10 font-medium">
              {session ? (
                <>
                  <Link
                    className="px-2 py-1 text-gray-900 dark:text-gray-50"
                    href="/dashboard"
                  >
                    Home
                  </Link>
                  <Link
                    className="px-2 py-1 text-gray-900 dark:text-gray-50"
                    href="#"
                  >
                    Second Link
                  </Link>
                  <Link
                    className="px-2 py-1 text-gray-900 dark:text-gray-50"
                    href="#"
                  >
                    Third Link
                  </Link>
                </>
              ) : (
                <></>
              )}
            </div>
          </nav>
          <AuthButton session={session} />
          <MobileNavToggler
            open={open}
            setOpen={(isOpen) => setOpen(isOpen)}
            session={session}
          />
        </div>
        <nav
          className={cx(
            "my-6 flex text-lg ease-in-out will-change-transform md:hidden",
            open ? "" : "hidden"
          )}
        >
          <ul className="space-y-4 font-medium">
            {session && (
              <li onClick={() => setOpen(false)}>
                <Link href="/dashboard">Dashboard</Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
