import { IBaseRepository } from '../../Domain/Interfaces/repository/IBaseRepository.js';

export class BaseRespository<T> implements IBaseRepository<T> {
    
    public async create(data: T): Promise<number>  {
        return await (window as any)?.databaseMemory.push(data);
    };

    public async update(data: T) : Promise<T[]> {
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

    public async delete(id: any): Promise<T[]>   {
        const updatedDatabase = await (window as any)?.databaseMemory.filter((x : any) => x.id.toString() !== id.toString());
        (window as any).databaseMemory = updatedDatabase;
        return (window as any).databaseMemory;
    };

    public async get(id: any) : Promise<T> {
        return await (window as any)?.databaseMemory.find((x : any) => x.id === id) as T;
    };

    public logger() : void {
        console.log('[CustomerRepository]: databaseMemory value ', (window as any)?.databaseMemory);
    }

}