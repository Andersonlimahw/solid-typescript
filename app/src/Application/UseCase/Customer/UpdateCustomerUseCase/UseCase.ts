

import { IBaseInput } from '../../../../Domain/Interfaces/UseCases/IBaseInput.js';
import { IBaseUseCase } from '../../../../Domain/Interfaces/UseCases/IBaseUseCase.js';
import { CustomerModel } from '../../../../Domain/Models/index.js';
import { UpdateCustomerInput } from './Input.js';
import { UpdateOutputCustomer } from './Output.js';
import { CustomerRepository } from '../../../../Infra/Data/Customer/CustomerRepository';

export class UpdateCustomerUseCase implements IBaseUseCase<CustomerModel,UpdateOutputCustomer> {
    private _customerRepository : CustomerRepository;
    constructor(
        customerRepository: CustomerRepository
    ){
        this._customerRepository =  customerRepository;   
    }

    async handle(input: IBaseInput<CustomerModel>){
        const customerInput = new UpdateCustomerInput(input.data);
        const response = await this._customerRepository.update(customerInput.data);
        return new UpdateOutputCustomer(
            customerInput.data, 
            response.length > 0,
            200
        );
    };

}