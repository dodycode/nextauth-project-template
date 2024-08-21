import React from "react";
import Link from "next/link";

const MainFooter: React.FC = () => {
  return (
    <footer className="mt-auto pb-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          Made with <span className="text-red-500">❤</span> by{" "}
          <Link
            href="https://github.com/dodycode"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Dodycode
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default MainFooter;
