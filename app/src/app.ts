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
const firstCustomer : CustomerModel = (window as any).databaseMemory[0];
// Update customer:
setTimeout(() => {
    customerController.get(firstCustomer.id); 
    customerController.put({
        ...firstCustomer,
        name: 'Tony Stark'
    });
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
    customerController.get((window as any).databaseMemory[0].id)
}, 2000);


// // Must return error:
// customerController.post({
//     ...mockCustomer,
//     id: 'teste', 
//     name: 'Lemon'
// });
// customerController.get('teste');

