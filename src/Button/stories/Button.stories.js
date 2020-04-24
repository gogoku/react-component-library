import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../index';
import PropGenerator from '../../PropGenerator';

const defaultValueJson = {
  btnText: 'Sample Button',
  btnDisabled: false,
  btnAppearance: {
    label: 'default',
    value: 'default',
  },
};
function ButtonClass() {
  const [valueJson, UpdateValueJson] = useState(defaultValueJson);

  const propJson = [
    {
      type: 'text',
      id: 'btnText',
      name: 'Button Text',
    },
    {
      type: 'dropdown',
      id: 'btnAppearance',
      name: 'Appearance',
      options: [
        { label: 'default', value: 'default' },
        { label: 'primary', value: 'primary' },
        { label: 'danger', value: 'danger' },
        { label: 'warning', value: 'warning' },
      ],
    },
    {
      type: 'checkbox',
      id: 'btnDisabled',
      name: 'Is Disabled',
    },
  ];

  return (
    <>
      <div>
        <Button
          title={valueJson.btnText}
          testId="testbutton"
          appearance={valueJson.btnAppearance.value}
          disabled={valueJson.btnDisabled}
        ></Button>
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

storiesOf('Button', module).add('Button', () => <ButtonClass />);
