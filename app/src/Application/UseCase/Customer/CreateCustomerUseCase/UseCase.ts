

import { IBaseInput } from '../../../../Domain/Interfaces/UseCases/IBaseInput.js';
import { IBaseUseCase } from '../../../../Domain/Interfaces/UseCases/IBaseUseCase.js';
import { CustomerModel } from '../../../../Domain/Models/index.js';
import { CreateCustomerInput } from './Input.js';
import { CreateOutputCustomer } from './Output.js';
import { CustomerRepository } from '../../../../Infra/Data/Customer/CustomerRepository';

export class CreateCustomerUseCase implements IBaseUseCase<CustomerModel, CreateOutputCustomer> {
    private _customerRepository : CustomerRepository;
    constructor(
        customerRepository: CustomerRepository
    ){
        this._customerRepository =  customerRepository;   
    }


    async handle(input: IBaseInput<CustomerModel>){
        const customerInput = new CreateCustomerInput(input.data);
        const response = await this._customerRepository.create(customerInput.data);
        return new CreateOutputCustomer(
            customerInput.data, 
            response > 0,
            200
        );
    };

}