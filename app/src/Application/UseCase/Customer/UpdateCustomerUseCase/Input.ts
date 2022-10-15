import { IBaseInput } from '../../../../Domain/Interfaces/UseCases/IBaseInput.js';
import { CustomerModel } from '../../../../Domain/Models/Customer/index.js';

export class UpdateCustomerInput implements IBaseInput<CustomerModel> {
    data: CustomerModel;
    constructor(data : CustomerModel) {
        this.data = data;
    }
  
}