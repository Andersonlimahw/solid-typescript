console.log('## App initilized ## ');
function initFakeDatabase() {
    window.databaseMemory = [];
    console.log('## Fake Database initilized with value ## ', window.databaseMemory);
}
initFakeDatabase();
import { CustomerController } from './Api/CustomerController.js';
const customerController = new CustomerController("customers");
const mockCustomer = {
    code: 'Abc12452415',
    name: 'Anderson Lima',
    birthDate: new Date(),
    id: 'dahudadha'
};
customerController.post(mockCustomer);
const firstCustomerId = window.databaseMemory[0].id;
customerController.get(firstCustomerId);
customerController.delete(firstCustomerId);
customerController.post(Object.assign(Object.assign({}, mockCustomer), { id: 'teste', name: 'Lemon' }));
customerController.get('teste');
