import AuthProvider from "@/components/AuthProvider";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Metadata } from "next";
import { GeistSans } from "geist/font/sans"; // import font
import { cx } from "@/lib/utils";
import MainFooter from "@/components/MainFooter";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: "My Next.js App",
  description: "A Next.js app with Google authentication",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(GeistSans.className, "antialiased dark:bg-gray-950 h-full")}
    >
      <body className="h-full flex flex-col">
        <AuthProvider>
          <NextTopLoader />
          <Navbar />
          {children}
        </AuthProvider>
        <MainFooter />
      </body>
    </html>
  );
}
