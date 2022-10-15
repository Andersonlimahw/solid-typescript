import { IBaseInput } from './IBaseInput';
export interface IBaseUseCase<T, K> {
    handle: (input: IBaseInput<T>) => Promise<K>
}