import React from "react";

const Navbar = () => {
  return (
    <header className="border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center text-xl font-medium tracking-wider text-gray-700 dark:text-gray-200"
        >
          <svg
            className="size-8 text-lime-600 dark:text-lime-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M17 13v-6l-5 4l-5 -4v6l5 4l5 -4" />
          </svg>

          <span className="font-thin">LOW</span>
          <span className="font-bold">HOOD</span>
        </a>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          {/* Navigation */}
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a
                  href="#"
                  className="border-b-2 border-lime-500 pb-6 text-sm font-medium text-gray-900 dark:border-lime-400 dark:text-white"
                >
                  Dashboard
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                >
                  Teams
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                >
                  Calendar
                </a>
              </li>
            </ul>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex sm:gap-4">
              <a
                href="#"
                className="rounded-md bg-lime-600 px-5 py-2.5 text-sm font-medium text-white shadow transition hover:bg-lime-700 dark:bg-lime-600 dark:hover:bg-lime-700"
              >
                New Project
              </a>
            </div>

            {/* Profile */}
            <a href="#" className="hidden shrink-0 sm:block">
              <span className="sr-only">Profile</span>
              <img
                alt="Man"
                src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&fit=crop&w=1770&q=80"
                className="h-10 w-10 rounded-full object-cover"
              />
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
