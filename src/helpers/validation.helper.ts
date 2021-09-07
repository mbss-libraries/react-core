import { isFasIcon } from '@helpers';
import _ from 'lodash';

export const validateRegex = (value: string, regex: RegExp): boolean => regex.test(value);
export const validateRequired = (value: string | string[]): boolean => value.length > 0;

export const validateIsNumber = (value: unknown): boolean => _.isNumber(value);
export const validateIsFasIconNotRequired = (value: string): boolean => value === '' || isFasIcon(value);
export const validateIsDate = (value: string) => validateRegex(value, /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/gm);
export const validateIsDateArray = (value: string[]) => !value.map((date) => validateIsDate(date)).includes(false);
export const validateIsUuid = (value: string) => validateRegex(value, /^\b[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}\b$/gm);
