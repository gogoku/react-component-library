import React from 'react';
import Select from 'react-select';
import { PropTypes } from 'prop-types';
import CreatableSelect from 'react-select/creatable';
import DropDownstyle from './DropDown.module.css';

export default function DropDown(props) {
  const CustomSelect = props.createable ? CreatableSelect : Select;
  return (
    <CustomSelect
      className={DropDownstyle.dropdown}
      onChange={props.onChange}
      placeholder={props.placeholder}
      options={props.options}
      value={props.value}
      labelKey={props.labelKey} // from option well get object so sort by labelkey and valuekey
      valueKey={props.valueKey}
      style={props.style}
      autoBlur={props.autoBlur}
      isClearable={props.clearable}
      isDisabled={props.disabled}
      readonly={props.Editablefield}
      isLoading={props.isLoading}
      id={props.id}
      isMulti={props.multi || false}
      closeOnSelect={props.closeOnSelect}
    />
  );
}

DropDown.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  labelKey: PropTypes.string,
  valueKey: PropTypes.string,
  style: PropTypes.object,
  autoBlur: PropTypes.bool,
  clearable: PropTypes.bool,
  disabled: PropTypes.bool,
  Editablefield: PropTypes.bool,
  isLoading: PropTypes.bool,
  multi: PropTypes.bool,
  closeOnSelect: PropTypes.bool,
  id: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  options: PropTypes.array,
  createable: PropTypes.bool,
};
