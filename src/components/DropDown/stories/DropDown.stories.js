import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import DropDown from '../DropDown';
import PropGenerator from '../../PropGenerator';

const defaultValueJson = {
  placeholder: 'Start Adding Options',
  disabled: false,
  multi: false,
  createable: false,
  clearable: false,
  options: [
    { label: 'Sample 1', value: 'sample1' },
    { label: 'Sample 2', value: 'sample2' },
  ],
};
const propJson = [
  {
    type: 'text',
    id: 'placeholder',
    name: 'Placeholder',
  },
  {
    type: 'checkbox',
    id: 'disabled',
    name: 'Is Disabled',
  },
  {
    type: 'checkbox',
    id: 'multi',
    name: 'Multi Select',
  },
  {
    type: 'checkbox',
    id: 'createable',
    name: 'Createable',
  },
  {
    type: 'checkbox',
    id: 'clearable',
    name: 'Clearable',
  },
  {
    type: 'json',
    id: 'options',
    name: 'Options',
  },
];

function DropDownclass() {
  const [selectedOption, setSelected] = useState('');
  const [valueJson, UpdateValueJson] = useState(defaultValueJson);
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ width: '40%' }}>
        <DropDown
          value={selectedOption}
          options={valueJson.options}
          onChange={setSelected}
          placeholder={valueJson.placeholder}
          disabled={valueJson.disabled}
          multi={valueJson.multi}
          createable={valueJson.createable}
          clearable={valueJson.clearable}
        ></DropDown>
      </div>
      <div>
        <PropGenerator
          propJson={propJson}
          valueJson={valueJson}
          onChange={UpdateValueJson}
        />
      </div>
    </div>
  );
}

storiesOf('DropDown', module).add('DropDown1', () => <DropDownclass />);
