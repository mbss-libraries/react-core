import { isFasIcon } from '@helpers';
import { message } from 'antd';
import _ from 'lodash';

// export const validateIsNumber = (value: unknown): IValidationResult => {
//   return { isValid: _.isNumber(value), message: 'Value is not a number.' };
// };
// export const validateIsFasIconNotRequired = (value: string): boolean => value === '' || isFasIcon(value);
// export const validateIsDate = (value: string) => validateRegex(value, /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/gm);
// export const validateIsDateArray = (value: string[]) => !value.map((date) => validateIsDate(date)).includes(false);

export interface IValidationResult {
  isValid: boolean;
  message: string;
}

//* ------ NEW VALIDATION RULES --------
export abstract class BaseValidation {
  public message = 'This field is invalid';

  constructor(message?: string) {
    if (message) this.message = message;
  }

  public abstract validate(val: unknown, ...other: unknown[]): boolean;
}

export class ValidateRequired extends BaseValidation {
  message = 'This field is required.';
  validate = (val: unknown) => {
    if (_.isString(val) || _.isArray(val)) return val.length > 0;
    return false;
  };
}

export class ValidateRegex extends BaseValidation {
  validate = (val: unknown, regex: RegExp) => {
    if (_.isString(val) && regex instanceof RegExp) return regex.test(val);
    return false;
  };
}
export class ValidateUuid extends BaseValidation {
  message = 'Invalid UUID';
  validate = (val: unknown) => {
    return new ValidateRegex().validate(val, /^\b[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}\b$/gm);
  };
}
