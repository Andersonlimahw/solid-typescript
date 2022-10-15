console.log('## App initilized ## ');
import { CustomerController } from './Api/CustomerController.js';
import { CustomerModel } from './Domain/Models/Customer/index.js';
const customerController = new CustomerController("customers");

const newCustomer : CustomerModel = {
    code: 'Abc12452415',
    name: 'Anderson Lima',
    birthDate: new Date(),
    id: 'dahudadha'
}
customerController.post(newCustomer);
