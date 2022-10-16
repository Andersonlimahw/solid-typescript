console.log("## App initilized ## ");

import { CustomerController } from "./Api/CustomerController.js";
import { CustomerModel } from "./Domain/Models/Customer/index.js";
const customerController = new CustomerController("customers");

// Functions
function initFakeDatabase() {
    (window as any).databaseMemory = [];
    console.log(
      "## Fake Database initilized with value ## ",
      (window as any).databaseMemory
    );
  }
  initFakeDatabase();

function renderFormatedJson(json: any) {
    return JSON.stringify(json, null, 4);
}

function renderResult(elementId: string, content : any) : void {
    const msg = document.querySelector(elementId);
    if(msg) {
        msg.innerHTML = `
            <pre> 
              ${renderFormatedJson(content)}
            </pre>
        `;
    }   
}

const renderCustomerItem = (customer : CustomerModel) : string => {
    return (`
    <div class="row">
        <div class="col-xs-12">
            <b>id: </b> ${customer.id}
            <b>Code: </b> ${customer.code}
            <b>Name: </b> ${customer.name}
            <b>Email: </b> ${customer.email}
        </div>
    </div>
`)  
}

function listCustomers() : void{
    const result = (window as any).databaseMemory;
    const resultMsg = document.querySelector("#result_content_list") as HTMLElement;
   
    resultMsg.innerHTML = result
        .map((x : CustomerModel) => (renderCustomerItem(x)))
        .join('');
}

// Listners
const customerByIdInput = document.querySelector("#customerId") as any;
const customerIdToDelete = document.querySelector("#customerIdToDelete") as any;

const createCustomerForm = document.querySelector("#customer_form");
if (createCustomerForm) {
  createCustomerForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const nameValue = document.querySelector("#name") as any;
    const emailValue = document.querySelector("#email") as any;
    const customerInput: CustomerModel = {
      id: "",
      code: "",
      name: nameValue.value,
      email: emailValue.value,
    };
    const result = await customerController.post(customerInput);
    customerByIdInput.value = result.data.id;
    customerIdToDelete.value = result.data.id;
    renderResult('#result_content_create', result);
    listCustomers();
  });
} else {
  throw new Error("Formulário não encontrado");
}


const getCustomerByIdForm = document.querySelector("#customer_form_get");
if (getCustomerByIdForm) {
    getCustomerByIdForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const result = await customerController.get(customerByIdInput.value);
    renderResult('#result_content_get', result);
  });
} else {
  throw new Error("Formulário não encontrado");
}

const deleteCustomerByIdForm = document.querySelector("#customer_form_delete");
if (deleteCustomerByIdForm) {
    deleteCustomerByIdForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const result = await customerController.delete(customerIdToDelete.value);
    renderResult('#result_content_delete', result);
  });
} else {
  throw new Error("Formulário não encontrado");
}


const listCustomersButton = document.querySelector("#get_customer_button");
if (listCustomersButton) {
    listCustomersButton?.addEventListener("click", async () => {
    listCustomers();
  });
} else {
  throw new Error("botao nao encontrado não encontrado");
}

