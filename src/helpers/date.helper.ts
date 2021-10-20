import moment from 'moment';

/**
 * Format a date string to german format.
 * @param value [String] Must be a valid date string for moment.js.
 * @return [string] For example "01.01.2021"
 */
export const formatGermanDate = (value: string | moment.Moment | Date): string => {
  return moment(value).format('DD.MM.YYYY');
};
/**
 * Format a time string to german format.
 * @param value [String] Must be a valid date string for moment.js.
 * @return [string] For example "14:30"
 */
export const formatGermanTime = (value: string | moment.Moment | Date): string => {
  return moment(value).format('HH:MM');
};

/**
 * Format a date string to german format with date and time.
 * @param value [String] Must be a valid date string for moment.js.
 * @return [string] For example "01.01.2021 - 14:30"
 */
export const formatGermanDateTime = (value: string | moment.Moment | Date): string => {
  return moment(value).format('DD.MM.YYYY - HH:MM');
};
