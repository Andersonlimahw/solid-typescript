import { IBaseOutPut } from '../../../../Domain/Interfaces/UseCases/IBaseOutput.js';

export class DeleteOutputCustomer implements IBaseOutPut<boolean> {
    data: boolean;
    success: boolean;
    statusCode: number;
    errors?: any[] | undefined;
    
    constructor(data : boolean, success: boolean, statusCode: number, errors?: any[]) {
        this.data = data;
        this.success = success;
        this.statusCode = statusCode;
        this.errors = errors;
    }
}