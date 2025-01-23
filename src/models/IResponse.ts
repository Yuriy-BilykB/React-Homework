export interface IResponse<T> {
    total: number;
    skip: number;
    limit: number;
    items: T[];
}