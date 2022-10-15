import { IBaseOutPut } from '../../../../Domain/Interfaces/UseCases/IBaseOutput.js';
import { CustomerModel } from '../../../../Domain/Models/Customer/index.js';

export class UpdateOutputCustomer implements IBaseOutPut<CustomerModel> {
    data: CustomerModel;
    success: boolean;
    statusCode: number;
    errors?: any[] | undefined;
    
    constructor(data : CustomerModel, success: boolean, statusCode: number, errors?: any[]) {
        this.data = data;
        this.success = success;
        this.statusCode = statusCode;
        this.errors = errors;
    }
}