/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseModel } from 'sjs-base-model';

/*
    //*? Returned Api Data Sample
    {
      hostname: "ZALANDO-12345"
      ip: "172.23.0.1"
    }
 */

export class EmptyResponseModel extends BaseModel {
  public readonly delete?: { [key: string]: string[] } = undefined
  /*
   * Client-Side properties (Not from API)
   */

  constructor(data: Partial<EmptyResponseModel>) {
    super();

    this.update(data);
  }

  public update(data: Partial<EmptyResponseModel>): void {
    super.update(data);
  }
}
