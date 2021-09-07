/** @Version 1.0 */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { BaseModel } from 'sjs-base-model';
import { Device, Workplace } from '@models';
import { TModelNames } from './ModelsReducer';

export default class RequestModelsResponseModel extends BaseModel {
  public readonly override?: TModelNames[] = [];
  public readonly delete?: { [key in TModelNames]?: string[] } = undefined;
  // -------------------------------------------------------------------------
  // public readonly User: User[] = [User as any];

  public readonly Device: Device[] = [Device as any];
  public readonly Workplace: Workplace[] = [Workplace as any];

  /*
   * Client-Side properties (Not from API)
   */

  constructor(data: Partial<RequestModelsResponseModel>) {
    super();

    this.update(data);
  }

  public update(data: Partial<RequestModelsResponseModel>): void {
    super.update(data);
  }
}
