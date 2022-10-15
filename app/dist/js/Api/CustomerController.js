var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { BaseController } from './BaseController.js';
import { CreateCustomerUseCase } from '../Application/UseCase/Customer/CreateCustomerUseCase/UseCase.js';
import { CreateCustomerInput } from '../Application/UseCase/Customer/CreateCustomerUseCase/Input.js';
import { CustomerRepository } from '../Infra/Data/Customer/CustomerRepository.js';
import { GetCustomerInput } from '../Application/UseCase/Customer/GetCustomerUseCase/Input.js';
import { GetCustomerUseCase } from '../Application/UseCase/Customer/GetCustomerUseCase/UseCase.js';
import { DeleteCustomerUseCase } from '../Application/UseCase/Customer/DeleteCustomerUseCase/UseCase.js';
import { DeleteCustomerInput } from '../Application/UseCase/Customer/DeleteCustomerUseCase/Input.js';
export class CustomerController extends BaseController {
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('[CustomerController]:get(), input: ', id);
            const handler = new GetCustomerUseCase(new CustomerRepository());
            const result = yield handler.handle(new GetCustomerInput(id));
            if (!result.success) {
                throw new Error(`[CustomerController]:get(), Error: ${JSON.stringify(result)}`);
            }
            console.log('[CustomerController]:get(), result: ', result);
            return result;
        });
    }
    post(data) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('[CustomerController]:post(), input: ', data);
            const handler = new CreateCustomerUseCase(new CustomerRepository());
            const result = yield handler.handle(new CreateCustomerInput(data));
            if (!result.success) {
                throw new Error(`[CustomerController]:post(), Error: ${JSON.stringify(result)}`);
            }
            console.log('[CustomerController]:post(), result: ', result);
            return result;
        });
    }
    put(data) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('Method not implemented.');
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('[CustomerController]:get(), input: ', id);
            const handler = new DeleteCustomerUseCase(new CustomerRepository());
            const result = yield handler.handle(new DeleteCustomerInput(id));
            if (!result.success) {
                throw new Error(`[CustomerController]:delete(), Error: ${JSON.stringify(result)}`);
            }
            console.log('[CustomerController]:delete(), result: ', result);
            return result;
        });
    }
}
