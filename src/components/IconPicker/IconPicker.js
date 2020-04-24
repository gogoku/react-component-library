import React from 'react';
import * as icons from 'react-icons/all';
import Select from 'react-virtualized-select';
import 'react-virtualized-select/styles.css';
import 'react-virtualized-select/node_modules/react-select/dist/react-select.css';
import styles from './IconPicker.module.css';

const iconList = Object.keys(icons);
const options = iconList.map((icon) => ({ label: icon, value: icon }));

export default function IconPicker({ onChange, value }) {
  const renderOption = ({ style, option, selectValue }) => {
    const Icon = icons[option.value];
    return (
      <a
        style={style}
        className={styles['iconitem']}
        onClick={() => selectValue(option)}
      >
        <span>
          <span>
            <Icon />
          </span>
          <span>{option.value}</span>
        </span>
      </a>
    );
  };
  const valueRenderer = ({ value }) => {
    const Icon = icons[value];
    return (
      <span>
        <span>
          <Icon />
        </span>
        <span>{value}</span>
      </span>
    );
  };
  return (
    <Select
      options={options}
      style={{ width: '100%' }}
      optionRenderer={renderOption}
      simpleValue
      onChange={onChange}
      value={value}
      valueRenderer={valueRenderer}
    />
  );
}
