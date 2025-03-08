import GuestLayout from "@/Layouts/GuestLayout";
import { Button, Input } from "@heroui/react";
import { Head, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function ForgotPassword({ status }: { status?: string }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("password.email"));
    };

    return (
        <GuestLayout>
            <Head title="Forgot Password" />

            <div className="mb-4 text-sm text-gray-600">
                Forgot your password? No problem. Just let us know your email
                address and we will email you a password reset link that will
                allow you to choose a new one.
            </div>

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit} className="flex flex-col gap-5">
                <Input
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    className="block w-full"
                    autoFocus
                    onChange={(e) => setData("email", e.target.value)}
                    label="Email"
                    errorMessage={errors.email}
                    isInvalid={Boolean(errors.email)}
                />

                <div className="flex items-center justify-end">
                    <Button
                        type="submit"
                        color="primary"
                        className="ms-4"
                        disabled={processing}
                    >
                        Email Password Reset Link
                    </Button>
                </div>
            </form>
        </GuestLayout>
    );
}
