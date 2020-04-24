import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { TextInput } from '../index';
import PropGenerator from '../../PropGenerator';

const defaultValueJson = {
  inpDisabled: false,
  inpSize: { label: 'small', value: 'small' },
  inpError: false,
};
function TextInputClass() {
  const [valueJson, UpdateValueJson] = useState(defaultValueJson);

  const propJson = [
    {
      type: 'checkbox',
      id: 'inpDisabled',
      name: 'Is Disabled',
    },
    {
      type: 'checkbox',
      id: 'inpError',
      name: 'Is Error',
    },
    {
      type: 'dropdown',
      id: 'inpSize',
      name: 'Size',
      options: [
        { label: 'small', value: 'small' },
        { label: 'medium', value: 'medium' },
        { label: 'large', value: 'large' },
        { label: 'full', value: 'full' },
      ],
    },
  ];

  return (
    <>
      <div>
        <TextInput
          testId="testbutton"
          disabled={valueJson.inpDisabled}
          size={valueJson.inpSize.value}
          isError={valueJson.inpError}
        ></TextInput>
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

storiesOf('Text Input', module).add('Text Input', () => <TextInputClass />);
