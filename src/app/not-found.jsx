
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <main className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-[#09090f] px-4 py-16 text-white sm:px-6">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/15 blur-[100px]" />

      {/* Content */}
      <div className="relative w-full max-w-xl text-center">
        {/* 404 */}
        <h1 className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-8xl font-extrabold tracking-tighter text-transparent sm:text-9xl">
          404
        </h1>

        {/* Decorative Line */}
        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />

        <h2 className="mt-8 text-2xl font-bold sm:text-3xl">
          Oops! Page Not Found
        </h2>

        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-gray-400 sm:text-base">
          Looks like this page has gone missing. The link might be broken,
          or the page may have been moved to another place.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col justify-center gap-3 min-[400px]:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3 font-semibold transition duration-300 hover:-translate-y-1 hover:bg-violet-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-6v-7h-4v7H4a1 1 0 0 1-1-1z"
              />
            </svg>
            Back to Home
          </Link>

          <Link
            href="/#projects"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-6 py-3 font-semibold text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-violet-400 hover:text-violet-300"
          >
            Explore Projects
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        {/* Footer Text */}
        <p className="mt-12 text-xs tracking-wide text-gray-600 sm:text-sm">
          LOST IN CODE? &nbsp; LET'S GET YOU BACK ON TRACK.
        </p>
      </div>
    </main>
  );
};

export default NotFound;
