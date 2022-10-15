export interface IBaseOutPut<T> {
    data: T;
    success: boolean;
    statusCode: number;
    errors?: any[];
}