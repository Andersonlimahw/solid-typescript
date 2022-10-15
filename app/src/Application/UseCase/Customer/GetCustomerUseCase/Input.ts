import { IBaseInput } from '../../../../Domain/Interfaces/UseCases/IBaseInput.js';
export class GetCustomerInput implements IBaseInput<string> {
    data: string;
    constructor(data : string) {
        this.data = data;
    }
  
}