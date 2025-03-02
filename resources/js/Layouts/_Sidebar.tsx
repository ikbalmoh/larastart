import AppLogo from "./AppLogo";
import { RiSettings2Fill } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { Link } from "@inertiajs/react";

export default function Sidebar() {
    return (
        <div
            id="hs-application-sidebar"
            className="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform w-[260px] h-full hidden fixed inset-y-0 start-0 z-[60] bg-white dark:bg-neutral-900 border-e border-gray-200 dark:border-neutral-800 lg:block lg:translate-x-0 lg:end-auto lg:bottom-0"
            role="dialog"
            tabIndex={-1}
            aria-label="Sidebar"
        >
            <div className="relative flex flex-col h-full max-h-full">
                <div className="px-6 pt-4 flex items-center">
                    <a
                        className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
                        href="#"
                        aria-label="Preline"
                    >
                        <AppLogo />
                    </a>

                    <div className="hidden lg:block ms-2"></div>
                </div>

                <div className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 mt-3">
                    <nav
                        className="hs-accordion-group p-3 w-full flex flex-col flex-wrap"
                        data-hs-accordion-always-open
                    >
                        <ul className="flex flex-col space-y-1">
                            <li>
                                <a
                                    className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 dark:bg-neutral-800 text-sm text-gray-800 dark:text-slate-200 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-400 focus:outline-none focus:dark:text-white"
                                    href="#"
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
                                        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                        <polyline points="9 22 9 12 15 12 15 22" />
                                    </svg>
                                    Dashboard
                                </a>
                            </li>

                            <li className="hs-accordion" id="users-accordion">
                                <button
                                    type="button"
                                    className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 dark:text-slate-200 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-400 focus:outline-none focus:dark:text-white"
                                    aria-expanded="true"
                                    aria-controls="users-accordion-child"
                                >
                                    <RiSettings2Fill />
                                    Settings
                                    <svg
                                        className="hs-accordion-active:block ms-auto hidden size-4"
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
                                        <path d="m18 15-6-6-6 6" />
                                    </svg>
                                    <svg
                                        className="hs-accordion-active:hidden ms-auto block size-4"
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
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                </button>

                                <div
                                    id="users-accordion-child"
                                    className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                                    role="region"
                                    aria-labelledby="users-accordion"
                                >
                                    <ul
                                        className="hs-accordion-group ps-8 pt-1 space-y-1"
                                        data-hs-accordion-always-open
                                    >
                                        <li>
                                            <Link
                                                className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 dark:text-slate-200 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-400 focus:outline-none focus:dark:text-white"
                                                href={route('accounts.index')}
                                            >
                                                <FiUsers />
                                                Accounts
                                            </Link>
                                        </li>
                                        <li
                                            className="hs-accordion"
                                            id="users-accordion-sub-1"
                                        >
                                            <button
                                                type="button"
                                                className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 dark:text-slate-200 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-400 focus:outline-none focus:dark:text-white"
                                                aria-expanded="true"
                                                aria-controls="users-accordion-sub-1-child"
                                            >
                                                Sub Menu 1
                                                <svg
                                                    className="hs-accordion-active:block ms-auto hidden size-4"
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
                                                    <path d="m18 15-6-6-6 6" />
                                                </svg>
                                                <svg
                                                    className="hs-accordion-active:hidden ms-auto block size-4"
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
                                                    <path d="m6 9 6 6 6-6" />
                                                </svg>
                                            </button>

                                            <div
                                                id="users-accordion-sub-1-child"
                                                className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                                                role="region"
                                                aria-labelledby="users-accordion-sub-1"
                                            >
                                                <ul className="pt-1 space-y-1">
                                                    <li>
                                                        <a
                                                            className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 dark:text-slate-200 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-400 focus:outline-none focus:dark:text-white"
                                                            href="#"
                                                        >
                                                            Link 1
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 dark:text-slate-200 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-400 focus:outline-none focus:dark:text-white"
                                                            href="#"
                                                        >
                                                            Link 2
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 dark:text-slate-200 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-400 focus:outline-none focus:dark:text-white"
                                                            href="#"
                                                        >
                                                            Link 3
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}
