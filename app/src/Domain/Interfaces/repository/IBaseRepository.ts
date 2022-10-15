
export interface IBaseRepository<T> {
    create: (data : T) => Promise<number>;
    update: (data: T) => Promise<T[]>;
    delete: (id : any) => Promise<T[]>;
    get: (id: any) => Promise<T>;
}