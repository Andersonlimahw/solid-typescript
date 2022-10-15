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
export class CustomerController extends BaseController {
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('Method not implemented.');
        });
    }
    post(data) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('[CustomerController]:post(), input: ', data);
            const handler = new CreateCustomerUseCase(new CustomerRepository());
            const result = yield handler.handle(new CreateCustomerInput(data));
            console.log('[CustomerController]:post(), result: ', result);
        });
    }
    put(data) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('Method not implemented.');
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('Method not implemented.');
        });
    }
}
