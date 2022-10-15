import { CustomerModel } from '../../../Domain/Models/index.js';
import { BaseRespository } from '../BaseRepository.js';
import { ICustomerRepository } from '../../../Domain/Interfaces/repository/ICustomerRepository.js';

export class CustomerRepository extends BaseRespository<CustomerModel> implements ICustomerRepository {

}