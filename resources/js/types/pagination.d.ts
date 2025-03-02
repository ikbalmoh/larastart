interface Pagination<T> {
    current_page: number;
    from: number;
    last_page: number;
    per_page: number;
    to: number;
    total: number;
    prev_page_url?: string;
    next_page_url?: string;
    data: T[];
}
