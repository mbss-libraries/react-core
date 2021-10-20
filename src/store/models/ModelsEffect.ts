import { EffectUtility, ErrorModel } from '@utilities';
import { EmptyResponseModel } from '@store';

export class ModelsEffect {
  public static async deleteModel(path: string): Promise<EmptyResponseModel | ErrorModel> {
    return EffectUtility.deleteToModel<EmptyResponseModel>(EmptyResponseModel, path);
  }
  public static async requestAutosave(payload: IRequestAutosavePayload): Promise<EmptyResponseModel | ErrorModel> {
    return EffectUtility.patchToModel<EmptyResponseModel>(EmptyResponseModel, payload.url, payload.data);
  }
}

export interface IRequestAutosavePayload {
  data: { [key: string]: unknown };
  url: string;
}
