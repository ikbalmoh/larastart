import {
    Pagination,
    Table as RootTable,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,
} from "@heroui/react";
import { Key, ReactNode, useMemo } from "react";

interface TableProps {
    columns: { uid: string; name: string }[];
    items: object[];
    total: number;
    totalPage?: number;
    page?: number;
    label: string;
    onChangePage?: (page: number) => void;
    renderCell: (item: any, columnKey: Key) => string | ReactNode;
}

export default function Table({
    label,
    columns,
    items,
    totalPage,
    page,
    renderCell,
    onChangePage,
    total,
}: TableProps) {
    const classNames = useMemo(
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

    return (
        <>
            <RootTable aria-label={label} classNames={classNames} removeWrapper>
                <TableHeader columns={columns} className="rounded-none">
                    {(column) => (
                        <TableColumn
                            key={column.uid}
                            align={
                                column.uid === "actions" ? "center" : "start"
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
                <TableBody items={items}>
                    {(item) => (
                        <TableRow>
                            {(columnKey) => (
                                <TableCell>
                                    {renderCell(item, columnKey)}
                                </TableCell>
                            )}
                        </TableRow>
                    )}
                </TableBody>
            </RootTable>
            <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-neutral-700">
                <div>
                    <p className="text-sm text-gray-600 dark:text-neutral-400">
                        <span className="font-semibold text-gray-800 dark:text-neutral-200">
                            {total}
                        </span>{" "}
                        results
                    </p>
                </div>

                {page != null ? (
                    <Pagination
                        total={totalPage ?? 1}
                        page={page}
                        onChange={onChangePage}
                    />
                ) : null}
            </div>
        </>
    );
}
