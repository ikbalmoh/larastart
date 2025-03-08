export interface User {
    id: number | string;
    name: string;
    email: string;
    password?: string;
    email_verified_at?: string;
    created_at?: string;
    roleNames: string[];
    roles: Role[];
}

export interface Role {
    id: number;
    name: string;
}
