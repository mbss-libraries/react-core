import { isFasIcon } from '@helpers';
import _ from 'lodash';

export const ruleAppPermOrRole = /^(?<appId>[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}).((?<name>[0-9a-zA-Z-_.]{1,37}))$/im;
export const ruleLocationPermOrRole =
  /^(?<appId>[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}).(?<locationId>[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}).((?<name>[0-9a-zA-Z-_.]{1,37}))$/im;
export const ruleProjectPermOrRole =
  /^(?<appId>[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}).(?<locationId>[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}).(?<projectId>[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}).((?<name>[0-9a-zA-Z-_.]{1,37}))$/im;

export const validateRegex = (value: string, regex: RegExp): boolean => regex.test(value);

export const validateRequired = (value: string | string[]): boolean => value.length > 0;

export const validateIsNumber = (value: unknown): boolean => _.isNumber(value);
export const validateIsFasIconNotRequired = (value: string): boolean => value === '' || isFasIcon(value);
export const validateIsDate = (value: string) => validateRegex(value, /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/gm);
export const validateIsDateArray = (value: string[]) => !value.map((date) => validateIsDate(date)).includes(false);
export const validateIsUuid = (value: string) => validateRegex(value, /^\b[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}\b$/gm);

export const validateIsProjectPermOrRole = (value: string) => validateRegex(value, ruleProjectPermOrRole);
export const validateIsLocationPermOrRole = (value: string) => validateRegex(value, ruleLocationPermOrRole);
export const validateIsAppPermOrRole = (value: string) => validateRegex(value, ruleAppPermOrRole);
