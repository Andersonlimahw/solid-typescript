import { BaseController } from './BaseController.js';
import { CustomerModel } from '../Domain/Models/Customer/index.js';
import { CreateCustomerUseCase } from '../Application/UseCase/Customer/CreateCustomerUseCase/UseCase.js';
import { CreateCustomerInput } from '../Application/UseCase/Customer/CreateCustomerUseCase/Input.js';
import { CustomerRepository } from '../Infra/Data/Customer/CustomerRepository.js';
import { GetCustomerInput } from '../Application/UseCase/Customer/GetCustomerUseCase/Input.js';
import { GetCustomerUseCase } from '../Application/UseCase/Customer/GetCustomerUseCase/UseCase.js';
import { DeleteCustomerUseCase } from '../Application/UseCase/Customer/DeleteCustomerUseCase/UseCase.js';
import { DeleteCustomerInput } from '../Application/UseCase/Customer/DeleteCustomerUseCase/Input.js';
import { UpdateCustomerUseCase } from '../Application/UseCase/Customer/UpdateCustomerUseCase/UseCase.js';
import { UpdateCustomerInput } from '../Application/UseCase/Customer/UpdateCustomerUseCase/Input.js';

export class CustomerController extends BaseController<CustomerModel> {

    async get(id: string) {
        console.log('[CustomerController]:get(), input: ', id);
        // Dependcy: Injection with class
        const handler = new GetCustomerUseCase(new CustomerRepository());
        const result = await handler.handle(new GetCustomerInput(id));
        if(!result.success){
            throw new Error(`[CustomerController]:get(), id: ${id} Error: ${JSON.stringify(result)}`);
        }
        console.log('[CustomerController]:get(), result: ', result);
        return result;
    }

    async post(data: CustomerModel) {
        console.log('[CustomerController]:post(), input: ', data);
        // Dependcy: Injection with class
        const handler = new CreateCustomerUseCase(new CustomerRepository());
        const result = await handler.handle(new CreateCustomerInput(data));
        if(!result.success){
            throw new Error(`[CustomerController]:post(), Error: ${JSON.stringify(result)}`);
        }
        console.log('[CustomerController]:post(), result: ', result);
        return result;
    }
    
    async put(data: CustomerModel) {
        console.log('[CustomerController]:put(), input: ', data);
        // Dependcy: Injection with class
        const handler = new UpdateCustomerUseCase(new CustomerRepository());
        const result = await handler.handle(new UpdateCustomerInput(data));
        if(!result.success){
            throw new Error(`[CustomerController]:put(), Error: ${JSON.stringify(result)}`);
        }
        console.log('[CustomerController]:put(), result: ', result);
        return result;
    }

    async delete(id: any) {
        console.log('[CustomerController]:get(), input: ', id);
        // Dependcy: Injection with class
        const handler = new DeleteCustomerUseCase(new CustomerRepository());
        const result = await handler.handle(new DeleteCustomerInput(id));
        if(!result.success){
            throw new Error(`[CustomerController]:delete(), Error: ${JSON.stringify(result)}`);
        }
        console.log('[CustomerController]:delete(), result: ', result);
        return result;
    }

}