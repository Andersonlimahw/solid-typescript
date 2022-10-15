console.log('## App initilized ## ');

function initFakeDatabase() {
    (window as any).databaseMemory = [];
    console.log('## Fake Database initilized with value ## ', (window as any).databaseMemory);
}
initFakeDatabase();

import { CustomerController } from './Api/CustomerController.js';
import { CustomerModel } from './Domain/Models/Customer/index.js';
const customerController = new CustomerController("customers");

const mockCustomer : CustomerModel = {
    code: 'Abc12452415',
    name: 'Anderson Lima',
    birthDate: new Date(),
    id: 'dahudadha' // TODO: usar autogeneator e n receber no input
}
customerController.post(mockCustomer);

const firstCustomerId = (window as any).databaseMemory[0].id;
customerController.get(firstCustomerId);



customerController.delete(firstCustomerId);
// Must return error:
customerController.post({
    ...mockCustomer,
    id: 'teste', 
    name: 'Lemon'
});
customerController.get('teste');

