import { generateId } from '../../../Utils/generateId.js';
export class CreateCustomerInput {
    constructor(data) {
        this.data = data;
        this.data.id = generateId();
        this.data.code = this.data.id.slice(0, 9);
    }
}
