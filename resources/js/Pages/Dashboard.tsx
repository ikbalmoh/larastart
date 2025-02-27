import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard() {
    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />

            <div className="overflow-hidden bg-white dark:bg-neutral-900 shadow-sm sm:rounded-lg">
                <div className="p-6 text-gray-900 dark:text-slate-100">You're logged in!</div>
            </div>
        </AuthenticatedLayout>
    );
}
