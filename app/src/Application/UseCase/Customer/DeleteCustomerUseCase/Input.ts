import { IBaseInput } from '../../../../Domain/Interfaces/UseCases/IBaseInput.js';
export class DeleteCustomerInput implements IBaseInput<string> {
    data: string;
    constructor(data : string) {
        this.data = data;
    }
  
}