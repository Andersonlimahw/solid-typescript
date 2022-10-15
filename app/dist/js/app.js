console.log('## App initilized ## ');
import { CustomerController } from './Api/CustomerController.js';
const customerController = new CustomerController("customers");
const newCustomer = {
    code: 'Abc12452415',
    name: 'Anderson Lima',
    birthDate: new Date(),
    id: 'dahudadha'
};
customerController.post(newCustomer);
