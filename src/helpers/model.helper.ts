import { BaseModel } from 'sjs-base-model';

export interface IBaseModel<T extends BaseModel> {
  id: string;
  updatedAt: Date | null;
}
