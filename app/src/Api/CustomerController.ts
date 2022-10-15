import { BaseController } from './BaseController.js';
import { CustomerModel } from '../Domain/Models/Customer/index.js';
import { CreateCustomerUseCase } from '../Application/UseCase/Customer/CreateCustomerUseCase/UseCase.js';
import { CreateCustomerInput } from '../Application/UseCase/Customer/CreateCustomerUseCase/Input.js';
import { CustomerRepository } from '../Infra/Data/Customer/CustomerRepository.js';

export class CustomerController extends BaseController<CustomerModel> {

    async get(id: any) {
        throw new Error('Method not implemented.');
    }

    async post(data: CustomerModel) {
        console.log('[CustomerController]:post(), input: ', data);
        // Dependcy: Injection with class
        const handler = new CreateCustomerUseCase(new CustomerRepository());
        const result = await handler.handle(new CreateCustomerInput(data));
        console.log('[CustomerController]:post(), result: ', result);
    }
    async put(data: CustomerModel) {
        throw new Error('Method not implemented.');
    }
    async delete(id: any) {
        throw new Error('Method not implemented.');
    }

}