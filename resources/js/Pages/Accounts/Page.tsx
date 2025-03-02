import React, { SVGProps } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head, Link, router } from "@inertiajs/react";
import { User as UserModel } from "@/types/user";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    User,
    Chip,
    Tooltip,
    ChipProps,
    Dropdown,
    DropdownTrigger,
    Button,
    Pagination,
} from "@heroui/react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
};

export const columns = [
    { name: "NAME", uid: "name" },
    { name: "ROLE", uid: "roles" },
    { name: "CREATED AT", uid: "created_at" },
    { name: "STATUS", uid: "status" },
    { name: "ACTIONS", uid: "actions" },
];

export default function AccountsPage({
    accounts,
}: PageProps<{ accounts: Pagination<UserModel> }>) {
    const classNames = React.useMemo(
        () => ({
            wrapper: ["max-h-[382px]", "max-w-3xl"],
            table: [
                "min-w-full divide-y divide-gray-200 dark:divide-neutral-700",
            ],
            // thead: ["bg-gray-50", "dark:bg-neutral-800"],
            tbody: ["divide-y divide-gray-200 dark:divide-neutral-700"],
            th: [
                "ps-6 pe-6 py-3 text-start",
                "bg-gray-50",
                "dark:bg-neutral-800",
                "text-default-500",
            ],
            td: ["ps-6 pe-6 py-3 text-sm text-gray-500 dark:text-neutral-500"],
        }),
        []
    );

    const renderCell = React.useCallback(
        (user: UserModel, columnKey: React.Key) => {
            const cellValue = user[columnKey as keyof UserModel];

            switch (columnKey) {
                case "name":
                    return (
                        <div className="py-3">
                            <div className="flex items-center gap-x-3">
                                <span className="inline-flex items-center justify-center size-[38px] rounded-full bg-white border border-gray-300 dark:bg-neutral-800 dark:border-neutral-700">
                                    <span className="font-medium text-sm text-gray-800 leading-none dark:text-neutral-200">
                                        {user.name.at(0)}
                                    </span>
                                </span>
                                <div className="grow">
                                    <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
                                        {user.name}
                                    </span>
                                    <span className="block text-sm text-gray-500 dark:text-neutral-500">
                                        {user.email}
                                    </span>
                                </div>
                            </div>
                        </div>
                    );

                case "roles":
                    return (
                        <div className="flex flex-col">
                            <p className="text-bold text-small capitalize">
                                {user.roles.map((role) => role.name).join(", ")}
                            </p>
                        </div>
                    );
                case "status":
                    return (
                        <Chip
                            className="capitalize border-none gap-1 text-default-600"
                            size="sm"
                            variant="dot"
                            color="success"
                        >
                            Active
                        </Chip>
                    );
                case "actions":
                    return (
                        <div className="relative flex justify-end items-center gap-2"></div>
                    );
                default:
                    return cellValue as string;
            }
        },
        []
    );

    return (
        <AuthenticatedLayout>
            <Head title="Users" />
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="flex flex-col">
                    <div className="-m-1.5 overflow-x-auto">
                        <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-800 dark:border-neutral-700">
                                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-800 dark:text-neutral-200">
                                            Account
                                        </h2>
                                        <p className="text-sm text-gray-600 dark:text-neutral-400">
                                            Add account, edit and more.
                                        </p>
                                    </div>

                                    <div>
                                        <div className="inline-flex gap-x-2">
                                            <a
                                                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
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
                                                    <path d="M5 12h14" />
                                                    <path d="M12 5v14" />
                                                </svg>
                                                Add user
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <Table
                                    aria-label="Users Table"
                                    classNames={classNames}
                                    removeWrapper
                                >
                                    <TableHeader
                                        columns={columns}
                                        className="rounded-none"
                                    >
                                        {(column) => (
                                            <TableColumn
                                                key={column.uid}
                                                align={
                                                    column.uid === "actions"
                                                        ? "center"
                                                        : "start"
                                                }
                                            >
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                        {column.name}
                                                    </span>
                                                </div>
                                            </TableColumn>
                                        )}
                                    </TableHeader>
                                    <TableBody items={accounts.data}>
                                        {(item) => (
                                            <TableRow key={item.id}>
                                                {(columnKey) => (
                                                    <TableCell>
                                                        {renderCell(
                                                            item,
                                                            columnKey
                                                        )}
                                                    </TableCell>
                                                )}
                                            </TableRow>
                                        )}
                                    </TableBody>
                                </Table>

                                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-neutral-700">
                                    <div>
                                        <p className="text-sm text-gray-600 dark:text-neutral-400">
                                            <span className="font-semibold text-gray-800 dark:text-neutral-200">
                                                {accounts.total}
                                            </span>{" "}
                                            results
                                        </p>
                                    </div>

                                    <Pagination
                                        total={accounts.last_page}
                                        page={accounts.current_page}
                                        onChange={(page) =>
                                            router.visit(
                                                route("accounts.index") +
                                                    "?page=" +
                                                    page
                                            )
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
