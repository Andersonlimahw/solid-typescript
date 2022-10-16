import { IBaseInput } from '../../../../Domain/Interfaces/UseCases/IBaseInput.js';
import { CustomerModel } from '../../../../Domain/Models/Customer/index.js';
import { generateId } from '../../../Utils/generateId.js';
export class CreateCustomerInput implements IBaseInput<CustomerModel> {
    data: CustomerModel;
    
    constructor(data : CustomerModel) {
        this.data = data;
        this.data.id = generateId();
        this.data.code = this.data.id.slice(0,9);
    }
  
}