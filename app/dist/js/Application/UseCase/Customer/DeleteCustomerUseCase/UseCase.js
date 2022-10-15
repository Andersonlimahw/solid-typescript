var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { DeleteCustomerInput } from './Input.js';
import { DeleteOutputCustomer } from './Output.js';
export class DeleteCustomerUseCase {
    constructor(customerRepository) {
        this._customerRepository = customerRepository;
    }
    handle(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const customerInput = new DeleteCustomerInput(input.data);
            const response = yield this._customerRepository.delete(customerInput.data);
            this._customerRepository.logger();
            return new DeleteOutputCustomer(true, true, 204);
        });
    }
    ;
}
