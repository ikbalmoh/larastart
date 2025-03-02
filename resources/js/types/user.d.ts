export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
    created_at?: string;
    roles: Role[];
}

export interface Role {
    id: number;
    name: string;
}
