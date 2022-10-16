import { BaseModel } from '../../../Domain/Models/Base/index.js';
export interface CustomerModel extends BaseModel {
    code: string;
    name: string;
    email: string;
}