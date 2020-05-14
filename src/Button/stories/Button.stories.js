import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../index';
import PropGenerator from '../../PropGenerator';
import UiToImage from '../../UiToImage';

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
        { label: 'info', value: 'info' },
        { label: 'danger', value: 'danger' },
        { label: 'warning', value: 'warning' },
        { label: 'success', value: 'success' },
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
      <Button
        title={valueJson.btnText}
        testId="testbutton"
        appearance={valueJson.btnAppearance.value}
        disabled={valueJson.btnDisabled}
      ></Button>
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
