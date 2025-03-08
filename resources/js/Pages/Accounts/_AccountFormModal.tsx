import {
    addToast,
    Button,
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Select,
    SelectItem,
} from "@heroui/react";
import { router, usePage } from "@inertiajs/react";
import { FiLock, FiMail } from "react-icons/fi";
import { AccountsPageProps } from "./Page";
import { useFormik } from "formik";
import { User } from "@/types/user";
import * as Yup from "yup";
import { useEffect } from "react";

interface AccountFormModalProp {
    isOpen: boolean;
    onOpenChange: () => void;
    onClose: () => void;
}

export default function AccountFormModal({
    isOpen,
    onOpenChange,
    onClose,
}: AccountFormModalProp) {
    const { roles } = usePage<AccountsPageProps>().props;

    const {
        values,
        handleBlur,
        handleChange,
        handleSubmit,
        touched,
        errors,
        ...formik
    } = useFormik<User>({
        initialValues: {
            id: 0,
            name: "",
            email: "",
            password: "",
            roleNames: [],
            roles: [],
        },
        validationSchema: Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            password: Yup.string().required(),
            roleNames: Yup.array().min(1).label("role"),
        }),
        onSubmit: (values) => {
            const { name, email, password, roleNames } = values;
            router.post(
                route("accounts.create"),
                {
                    name,
                    email,
                    password,
                    roles: roleNames,
                },
                {
                    onSuccess: (_) => onClose(),
                    onError: (errors) => formik.setErrors(errors),
                }
            );
        },
    });

    return (
        <Modal
            isOpen={isOpen}
            placement="top-center"
            onOpenChange={onOpenChange}
            onClose={onClose}
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">
                            Create Account
                        </ModalHeader>
                        <ModalBody>
                            <Input
                                label="Name"
                                placeholder="Enter account name"
                                variant="flat"
                                isRequired
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name="name"
                                errorMessage={errors.name}
                                isInvalid={touched.name && errors.name != null}
                            />
                            <Input
                                endContent={
                                    <FiMail className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
                                }
                                label="Email"
                                placeholder="Enter account email"
                                variant="flat"
                                isRequired
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name="email"
                                errorMessage={errors.email}
                                isInvalid={
                                    touched.email && errors.email != null
                                }
                            />
                            <Input
                                endContent={
                                    <FiLock className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
                                }
                                label="Password"
                                placeholder="Enter account password"
                                type="password"
                                variant="flat"
                                isRequired
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name="password"
                                errorMessage={errors.password}
                                isInvalid={
                                    touched.password && errors.password != null
                                }
                            />
                            <Select
                                className="max-w-full"
                                label="Account Role"
                                isRequired
                                name="roleNames"
                                onChange={(e) =>
                                    formik.setFieldValue("roleNames", [
                                        e.target.value,
                                    ])
                                }
                                errorMessage={errors.roleNames?.toString()}
                                isInvalid={
                                    touched.roleNames &&
                                    errors.roleNames != null
                                }
                                selectedKeys={values.roleNames}
                            >
                                {roles.map((role) => (
                                    <SelectItem
                                        key={role.name}
                                        className="uppercase"
                                    >
                                        {role.name}
                                    </SelectItem>
                                ))}
                            </Select>
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                color="default"
                                variant="flat"
                                onPress={onClose}
                            >
                                Cancel
                            </Button>
                            <Button
                                color="primary"
                                onPress={() => handleSubmit()}
                            >
                                Create Account
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}
