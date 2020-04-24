import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { CardNew } from '../index';
import PropGenerator from '../../PropGenerator';

const defaultValueJson = {
  text: 'Sample Button',
  appearance: {
    label: 'default',
    value: 'default',
  },
  size: {
    label: 'small',
    value: 'small',
  },
};

const propJson = [
  {
    type: 'text',
    id: 'text',
    name: 'Text',
  },
  {
    type: 'dropdown',
    id: 'appearance',
    name: 'Appearance',
    options: [
      { label: 'default', value: 'default' },
      { label: 'primary', value: 'primary' },
      { label: 'danger', value: 'danger' },
      { label: 'warning', value: 'warning' },
      { label: 'success', value: 'success' },
    ],
  },
  {
    type: 'dropdown',
    id: 'size',
    name: 'Size',
    options: [
      { label: 'small', value: 'small' },
      { label: 'medium', value: 'medium' },
      { label: 'large', value: 'large' },
      { label: 'full', value: 'full' },
    ],
  },
];

function CardNewStories() {
  const [valueJson, UpdateValueJson] = useState(defaultValueJson);
  return (
    <>
      <div>
        <CardNew
          title="Card title"
          size={valueJson.size.value}
          type={valueJson.appearance.value}
        >
          <h2>{valueJson.text}</h2>
        </CardNew>
      </div>
      <br />
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

storiesOf('Card', module).add('Card New', CardNewStories);
