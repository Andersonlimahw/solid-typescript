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
const firstCustomer = window.databaseMemory[0];
setTimeout(() => {
    customerController.get(firstCustomer.id);
    customerController.put(Object.assign(Object.assign({}, firstCustomer), { name: 'Tony Stark' }));
    customerController.get(firstCustomer.id);
}, 500);
setTimeout(() => {
    customerController.delete(firstCustomer.id);
}, 1000);
setTimeout(() => {
    customerController.get(firstCustomer.id);
}, 2000);
setTimeout(() => {
    customerController.post({
        id: '1',
        name: 'Lemon',
        code: 'dadad',
        birthDate: new Date()
    });
    customerController.get(window.databaseMemory[0].id);
}, 2000);
