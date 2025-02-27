import { Link, usePage } from "@inertiajs/react";
import AppLogo from "./AppLogo";
import { FaSignOutAlt } from "react-icons/fa";

export default function Header() {
    const user = usePage().props.auth.user;

    return (
        <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-[48] w-full bg-white dark:bg-neutral-900 border-b border-slate-100 dark:border-neutral-600 text-sm py-2.5 lg:ps-[260px]">
            <nav className="px-4 sm:px-6 flex basis-full items-center w-full mx-auto">
                <div className="me-5 lg:me-0 lg:hidden">
                    <a
                        className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
                        href="#"
                        aria-label="Preline"
                    >
                        <AppLogo />
                    </a>

                    <div className="lg:hidden ms-1"></div>
                </div>

                <div className="w-full flex items-center justify-end ms-auto md:justify-between gap-x-1 md:gap-x-3">
                    <div className="hidden md:block">
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
                                <svg
                                    className="shrink-0 size-4 text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <circle cx="11" cy="11" r="8" />
                                    <path d="m21 21-4.3-4.3" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                className="py-2 ps-10 pe-16 block w-full bg-white dark:bg-neutral-700 border-gray-200 dark:border-neutral-700 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 dark:focus:border-neutral-300 dark:focus:ring-neutral-300 disabled:opacity-50 disabled:pointer-events-none"
                                placeholder="Search"
                            />
                            <div className="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none z-20 pe-1">
                                <button
                                    type="button"
                                    className="inline-flex shrink-0 justify-center items-center size-6 rounded-full text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600"
                                    aria-label="Close"
                                >
                                    <span className="sr-only">Close</span>
                                    <svg
                                        className="shrink-0 size-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="m15 9-6 6" />
                                        <path d="m9 9 6 6" />
                                    </svg>
                                </button>
                            </div>
                            <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none z-20 pe-3 text-gray-400">
                                <svg
                                    className="shrink-0 size-3 text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                                </svg>
                                <span className="mx-1">
                                    <svg
                                        className="shrink-0 size-3 text-gray-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M5 12h14" />
                                        <path d="M12 5v14" />
                                    </svg>
                                </span>
                                <span className="text-xs">/</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row items-center justify-end gap-1">
                        <button
                            type="button"
                            className="md:hidden size-[38px] relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                        >
                            <svg
                                className="shrink-0 size-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="11" cy="11" r="8" />
                                <path d="m21 21-4.3-4.3" />
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>

                        <button
                            type="button"
                            className="size-[38px] relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700 focus:outline-none focus:bg-gray-100 dark:focus:bg-neutral-600 disabled:opacity-50 disabled:pointer-events-none"
                        >
                            <svg
                                className="shrink-0 size-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                            </svg>
                            <span className="sr-only">Notifications</span>
                        </button>

                        <div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
                            <button
                                id="hs-dropdown-account"
                                type="button"
                                className="size-[38px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
                                aria-haspopup="menu"
                                aria-expanded="false"
                                aria-label="Dropdown"
                            >
                                <img
                                    className="shrink-0 size-[38px] rounded-full"
                                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                                    alt="Avatar"
                                />
                            </button>

                            <div
                                className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white dark:bg-neutral-900 shadow-md rounded-lg mt-2 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full dark:shadow-white"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="hs-dropdown-account"
                            >
                                <div className="py-3 px-5 bg-gray-100 dark:bg-neutral-800 rounded-t-lg">
                                    <p className="text-sm text-gray-500 dark:text-slate-400">
                                        Signed in as
                                    </p>
                                    <p className="text-sm font-medium text-gray-800 dark:text-slate-100">
                                        {user.name}
                                    </p>
                                </div>
                                <div className="p-1.5 space-y-0.5">
                                    <Link
                                        href="/logout"
                                        method="post"
                                        as="button"
                                        className="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 dark:text-slate-100 hover:bg-gray-100 dark:hover:bg-neutral-800 focus:outline-none focus:bg-gray-100"
                                    >
                                        <FaSignOutAlt />
                                        Logout
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
