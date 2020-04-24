import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { DatePicker } from '../index';
import PropGenerator from '../../PropGenerator';

const defaultValueJson = {
  dateDisabled: false,
};

function DatePickerClass() {
  const [valueJson, UpdateValueJson] = useState(defaultValueJson);
  const [val, setDate] = useState(new Date());
  const propJson = [
    {
      type: 'checkbox',
      id: 'dateDisabled',
      name: 'Is Disabled',
    },
  ];

  return (
    <>
      <div>
        <DatePicker
          testId="testDatePicker"
          disabled={valueJson.dateDisabled}
          selected={val}
          onChange={setDate}
        ></DatePicker>
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

storiesOf('Date Picker', module).add('Date Picker', () => <DatePickerClass />);
