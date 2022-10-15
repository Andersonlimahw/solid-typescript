import { IBaseRepository } from '../../Domain/Interfaces/repository/IBaseRepository.js';

export class BaseRespository<T> implements IBaseRepository<T> {
    databaseMemory : Array<T>;

    constructor() {
        this.databaseMemory = [];
    }
    
    async create(data: T) {
        return await this.databaseMemory.push(data);
    };

    async update(data: T) {
        return await this.databaseMemory.map((item : any) => {
            if(item.id === (data as any).id) {
                return {
                    ...item,
                    ...data
                }
            }
            return item;
        });
    };

    async delete(id: T) {
        return await this.databaseMemory.filter((x : any) => x.id !== id);
    };

    async get(id: any) {
        return await this.databaseMemory.find((x : any) => x.id === id) as T;
    };

}