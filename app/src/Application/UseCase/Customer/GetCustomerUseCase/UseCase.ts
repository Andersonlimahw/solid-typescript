

import { IBaseInput } from '../../../../Domain/Interfaces/UseCases/IBaseInput.js';
import { IBaseUseCase } from '../../../../Domain/Interfaces/UseCases/IBaseUseCase.js';

import { CustomerRepository } from '../../../../Infra/Data/Customer/CustomerRepository';
import { GetCustomerInput } from '../GetCustomerUseCase/Input.js';
import { GetOutputCustomer } from '../GetCustomerUseCase/Output.js';

export class GetCustomerUseCase implements IBaseUseCase<string, GetOutputCustomer> {
    private _customerRepository : CustomerRepository;
    constructor(
        customerRepository: CustomerRepository
    ){
        this._customerRepository =  customerRepository;   
    }
 
    async handle(input: IBaseInput<string>){
        const customerInput = new GetCustomerInput(input.data);
        const response = await this._customerRepository.get(customerInput.data);
        this._customerRepository.logger();
        const statusCode = response ? 200 : 400;
        return new GetOutputCustomer(
            response, 
            response !== undefined,
            statusCode
        );
    };

}