import { BaseModel } from "../Base/index";

export interface InsurerModel extends BaseModel {
    code: string;
    name: string;
}