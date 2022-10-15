

import { IBaseInput } from '../../../../Domain/Interfaces/UseCases/IBaseInput.js';
import { IBaseUseCase } from '../../../../Domain/Interfaces/UseCases/IBaseUseCase.js';

import { CustomerRepository } from '../../../../Infra/Data/Customer/CustomerRepository';
import { DeleteCustomerInput } from './Input.js';
import { DeleteOutputCustomer } from './Output.js';


export class DeleteCustomerUseCase implements IBaseUseCase<string, DeleteOutputCustomer> {
    private _customerRepository : CustomerRepository;
    constructor(
        customerRepository: CustomerRepository
    ){
        this._customerRepository =  customerRepository;   
    }
 
    async handle(input: IBaseInput<string>){
        const customerInput = new DeleteCustomerInput(input.data);
        const response = await this._customerRepository.delete(customerInput.data);
        this._customerRepository.logger();
        return new DeleteOutputCustomer(
            true,
            true,
            204
        );
    };

}