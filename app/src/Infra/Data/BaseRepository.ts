import { IBaseRepository } from '../../Domain/Interfaces/repository/IBaseRepository.js';

export class BaseRespository<T> implements IBaseRepository<T> {
    
    async create(data: T) {
        return await (window as any)?.databaseMemory.push(data);
    };

    async update(data: T) {
        return await (window as any).databaseMemory.map((item : any) => {
            if(item.id === (data as any).id) {
                return {
                    ...item,
                    ...data
                }
            }
            return item;
        });
    };

    async delete(id: any) {
        return await (window as any)?.databaseMemory.filter((x : any) => x.id !== id);
    };

    async get(id: any) {
        return await (window as any)?.databaseMemory.find((x : any) => x.id === id) as T;
    };
    logger() {
        console.log('[CustomerRepository]: databaseMemory value ', (window as any)?.databaseMemory);
    }

}