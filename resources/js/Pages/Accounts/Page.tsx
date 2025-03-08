import React, { SVGProps } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head, router } from "@inertiajs/react";
import { Role, User as UserModel } from "@/types/user";
import { Button, Chip, useDisclosure } from "@heroui/react";
import Table from "@/Components/Table";
import { Pagination as IPagination } from "@/types/pagination";
import { AiOutlinePlus } from "react-icons/ai";
import AccountFormModal from "./_AccountFormModal";

export const columns = [
    { name: "NAME", uid: "name" },
    { name: "ROLE", uid: "roles" },
    { name: "CREATED AT", uid: "created_at" },
    { name: "STATUS", uid: "status" },
    { name: "ACTIONS", uid: "actions" },
];

export type AccountsPageProps = PageProps<{
    accounts: IPagination<UserModel>;
    roles: Role[];
}>;

export default function AccountsPage({ accounts }: AccountsPageProps) {
    const { isOpen, onClose, onOpen, onOpenChange } = useDisclosure();

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
                                {user.roleNames.join(', ')}
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
            <Head title="Accounts" />
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
                                            <Button
                                                color="primary"
                                                onPress={onOpen}
                                            >
                                                <AiOutlinePlus />
                                                Create Account
                                            </Button>
                                        </div>
                                    </div>
                                </div>

                                <Table
                                    items={accounts.data}
                                    columns={columns}
                                    label="Accounts"
                                    renderCell={renderCell}
                                    total={accounts.total}
                                    totalPage={accounts.last_page}
                                    page={accounts.current_page}
                                    onChangePage={(page) =>
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
            <AccountFormModal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                onClose={onClose}
            />
        </AuthenticatedLayout>
    );
}
