import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import moment from 'moment';
import { DateRangePicker } from '../index';
import PropGenerator from '../../PropGenerator';

const defaultValueJson = {
  dateDisabled: false,
};

function DateRangePickerClass() {
  const [valueJson, UpdateValueJson] = useState(defaultValueJson);
  const [valStart, setStartDate] = useState(moment(new Date()));
  const [valEnd, setEndDate] = useState(moment(new Date()));
  const propJson = [
    {
      type: 'checkbox',
      id: 'dateDisabled',
      name: 'Is Disabled',
    },
  ];

  const onDateChange = (start, end) => {
    setStartDate(moment(start));
    setEndDate(moment(end));
  };

  return (
    <>
      <div>
        <DateRangePicker
          testId="testDatePicker"
          disableAll={valueJson.dateDisabled}
          initialDate={valStart}
          finalDate={valEnd}
          onChangeStart={setStartDate}
          onChangeEnd={setEndDate}
          startOnChange={onDateChange}
          dateChange={onDateChange}
          defaultValue={1}
        ></DateRangePicker>
      </div>
      <br></br>
      <div>
        <PropGenerator
          propJson={propJson}
          valueJson={valueJson}
          onChange={UpdateValueJson}
        />
      </div>
    </>
  );
}

storiesOf('Date Picker', module).add('Date Range Picker', () => (
  <DateRangePickerClass />
));
