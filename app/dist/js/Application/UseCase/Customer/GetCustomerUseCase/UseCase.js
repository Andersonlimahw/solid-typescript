var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { GetCustomerInput } from '../GetCustomerUseCase/Input.js';
import { GetOutputCustomer } from '../GetCustomerUseCase/Output.js';
export class GetCustomerUseCase {
    constructor(customerRepository) {
        this._customerRepository = customerRepository;
    }
    handle(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const customerInput = new GetCustomerInput(input.data);
            const response = yield this._customerRepository.get(customerInput.data);
            this._customerRepository.logger();
            const statusCode = response ? 200 : 400;
            return new GetOutputCustomer(response, response !== undefined, statusCode);
        });
    }
    ;
}
