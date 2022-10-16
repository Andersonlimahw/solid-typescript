var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
console.log("## App initilized ## ");
import { CustomerController } from "./Api/CustomerController.js";
const customerController = new CustomerController("customers");
function initFakeDatabase() {
    window.databaseMemory = [];
    console.log("## Fake Database initilized with value ## ", window.databaseMemory);
}
initFakeDatabase();
function renderFormatedJson(json) {
    return JSON.stringify(json, null, 4);
}
function renderResult(elementId, content) {
    const msg = document.querySelector(elementId);
    if (msg) {
        msg.innerHTML = `
            <pre> 
              ${renderFormatedJson(content)}
            </pre>
        `;
    }
}
const renderCustomerItem = (customer) => {
    return (`
    <div class="row">
        <div class="col-xs-12">
            <b>id: </b> ${customer.id}
            <b>Code: </b> ${customer.code}
            <b>Name: </b> ${customer.name}
            <b>Email: </b> ${customer.email}
        </div>
    </div>
`);
};
function listCustomers() {
    const result = window.databaseMemory;
    const resultMsg = document.querySelector("#result_content_list");
    resultMsg.innerHTML = result
        .map((x) => (renderCustomerItem(x)))
        .join('');
}
const customerByIdInput = document.querySelector("#customerId");
const createCustomerForm = document.querySelector("#customer_form");
if (createCustomerForm) {
    createCustomerForm === null || createCustomerForm === void 0 ? void 0 : createCustomerForm.addEventListener("submit", (event) => __awaiter(void 0, void 0, void 0, function* () {
        event.preventDefault();
        const nameValue = document.querySelector("#name");
        const emailValue = document.querySelector("#email");
        const customerInput = {
            id: "",
            code: "",
            name: nameValue.value,
            email: emailValue.value,
        };
        const result = yield customerController.post(customerInput);
        customerByIdInput.value = result.data.id;
        renderResult('#result_content_create', result);
        listCustomers();
    }));
}
else {
    throw new Error("Formulário não encontrado");
}
const getCustomerByIdForm = document.querySelector("#customer_form_get");
if (getCustomerByIdForm) {
    getCustomerByIdForm === null || getCustomerByIdForm === void 0 ? void 0 : getCustomerByIdForm.addEventListener("submit", (event) => __awaiter(void 0, void 0, void 0, function* () {
        event.preventDefault();
        const result = yield customerController.get(customerByIdInput.value);
        renderResult('#result_content_get', result);
    }));
}
else {
    throw new Error("Formulário não encontrado");
}
const listCustomersButton = document.querySelector("#get_customer_button");
if (listCustomersButton) {
    listCustomersButton === null || listCustomersButton === void 0 ? void 0 : listCustomersButton.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
        listCustomers();
    }));
}
else {
    throw new Error("botao nao encontrado não encontrado");
}
