import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Select } from 'antd';
import _ from 'lodash';
import moment from 'moment';
import React, { Fragment, useEffect, useState } from 'react';
import { Button } from 'semantic-ui-react';
import { CustomDatePickers } from './custom-date-pickers/CustomDatePickers';

interface IProps {
  title?: string;
  subtitle?: string;
  values?: string[];
  onChange?(dates: string[]): void;
}
export const FormDateSelect: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const { values, onChange } = props;
  const [isDatePickerOpen, setDatePickerOpen] = useState(false);
  const [dates, setDates] = useState<string[]>([]);

  useEffect(() => {
    // setDates(values?.map((date) => formatToDefaultDate(date), 'YYYY-MM-DD') ?? []);
  }, [values]);

  useEffect(() => {
    onChange && onChange(dates);
  }, [dates, onChange]);

  const mergeDates = (values: moment.Moment[], force = false) => {
    const filteredValues = values.filter((value) => value.isValid());
    if (force) {
      // setDates(_.uniq(filteredValues.map((date) => formatToDefaultDate(date))));
    } else {
      // setDates(_.uniq([...dates, ...filteredValues.map((date) => formatToDefaultDate(date))]));
    }
  };

  return (
    <Fragment>
      {props.title && <strong>{props.title}:</strong>}
      <div className="row mx-0">
        <Select
          mode="tags"
          className="col"
          allowClear
          // value={_.orderBy(dates.map((date) => formatGermanDate(date)) ?? [])}
          open={false}
          // onChange={(values) =>
          //   mergeDates(
          //     // values.map((value) => moment(formatToDefaultDate(value), 'YYYY-MM-DD')),
          //     true,
          //   )
          // }
        />
        <Button
          active={isDatePickerOpen}
          className="col-1 mx-2"
          size="tiny"
          icon={<FontAwesomeIcon icon="calendar-plus" />}
          onClick={() => setDatePickerOpen(!isDatePickerOpen)}
        />
      </div>
      {isDatePickerOpen && (
        <div className="m-2 p-1 bg-lighter border rounded">
          <CustomDatePickers onSubmit={(values) => mergeDates(values)} />
        </div>
      )}
      {props.title && <small className="text-muted">{props.subtitle}</small>}
    </Fragment>
  );
};
