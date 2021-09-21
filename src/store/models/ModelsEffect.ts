import { EffectUtility, ErrorModel } from '@utilities';
import { EmptyResponseModel } from '@store';

export class ModelsEffect {
  public static async deleteModel(path: string): Promise<EmptyResponseModel | ErrorModel> {
    return EffectUtility.deleteToModel<EmptyResponseModel>(EmptyResponseModel, path);
  }
}
