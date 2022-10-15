import { BaseModel } from '../../../../Domain/Models/Base/index';
import { EProposalStatus } from '../../../Enums/EProposalStatus';
import { CustomerModel } from '../../../../Domain/Models/Customer/index';
export interface QuoteModel extends BaseModel {
    number: string;
    createdAt: Date;
    updatedAt: Date;
    status: EProposalStatus;
    customer: CustomerModel;
}