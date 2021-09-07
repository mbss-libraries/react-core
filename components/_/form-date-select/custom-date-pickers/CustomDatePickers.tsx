import { DatePicker } from 'antd';
import React, { Fragment, useEffect, useState } from 'react';
import moment from 'moment';
import { Button, Label } from 'semantic-ui-react';
const { RangePicker } = DatePicker;

interface IProps {
  onSubmit?(dates: moment.Moment[]): void;
}
export const CustomDatePickers: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const { onSubmit } = props;
  const [dates, setDates] = useState<moment.Moment[]>([]);
  const [type, setType] = useState<EDatePickerType>(EDatePickerType.DAY);

  useEffect(() => {
    setDates([]);
  }, [type]);

  return (
    <Fragment>
      <div className="d-flex justify-content-center">
        <Label className="clickable" active={type === EDatePickerType.DAY} onClick={() => setType(EDatePickerType.DAY)}>
          Day
        </Label>
        <Label className="clickable" active={type === EDatePickerType.RANGE} onClick={() => setType(EDatePickerType.RANGE)}>
          Range
        </Label>
      </div>

      <div className="mt-3 text-center">
        {type === EDatePickerType.DAY && (
          <DatePicker allowClear format="DD.MM.YYYY" onChange={(value) => (value ? setDates([value]) : setDates([]))} />
        )}
        {type === EDatePickerType.RANGE && (
          <RangePicker
            allowClear
            format="DD.MM.YYYY"
            // onChange={(value) => (value?.[0] && value[1] ? setDates(generateDatesFromRangeAsMoment(value[0], value[1])) : [])}
          />
        )}
        <Button className="ml-3" size="tiny" color="blue" disabled={dates.length === 0} onClick={() => onSubmit && onSubmit(dates)}>
          Add Day(s)
        </Button>
      </div>
    </Fragment>
  );
};

enum EDatePickerType {
  DAY,
  RANGE,
}
{
  /* <Fragment>
<RangePicker
  ranges={{
    'This Week': [moment().startOf('week'), moment().endOf('week')],
  }}
  format="DD.MM.YYYY"
  onChange={(value) => setDates(value as moment.Moment[])}
/>
<div className="mt-2 text-center">
  <Button primary size="tiny">
    Add range
  </Button>
</div>
</Fragment>
} */
}
