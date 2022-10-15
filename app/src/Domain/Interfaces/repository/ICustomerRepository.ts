import { IBaseRepository } from './IBaseRepository';
import { CustomerModel } from '../../Models/Customer/index';
export interface ICustomerRepository extends IBaseRepository<CustomerModel> {

}