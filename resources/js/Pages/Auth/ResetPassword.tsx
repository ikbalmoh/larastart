import GuestLayout from "@/Layouts/GuestLayout";
import { Button, Input } from "@heroui/react";
import { Head, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function ResetPassword({
    token,
    email,
}: {
    token: string;
    email: string;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: "",
        password_confirmation: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("password.store"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <GuestLayout>
            <Head title="Reset Password" />

            <form onSubmit={submit} className="flex flex-col gap-4">
                <Input
                    label="Email"
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    className="mt-1 block w-full"
                    autoComplete="username"
                    onChange={(e) => setData("email", e.target.value)}
                    errorMessage={errors.email}
                    isInvalid={Boolean(errors.email)}
                />

                <Input
                    label="Password"
                    id="password"
                    type="password"
                    name="password"
                    value={data.password}
                    className="mt-1 block w-full"
                    autoComplete="new-password"
                    onChange={(e) => setData("password", e.target.value)}
                    errorMessage={errors.password}
                    isInvalid={Boolean(errors.password)}
                />

                <Input
                    label="Confirm Password"
                    type="password"
                    name="password_confirmation"
                    value={data.password_confirmation}
                    className="mt-1 block w-full"
                    autoComplete="new-password"
                    onChange={(e) =>
                        setData("password_confirmation", e.target.value)
                    }
                    errorMessage={errors.password_confirmation}
                    isInvalid={Boolean(errors.password_confirmation)}
                />

                <div className="flex items-center justify-end">
                    <Button
                        type="button"
                        className="ms-4"
                        disabled={processing}
                    >
                        Reset Password
                    </Button>
                </div>
            </form>
        </GuestLayout>
    );
}
