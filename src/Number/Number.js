import React from 'react';
import { PropTypes } from 'prop-types';
import numberstyle from './Number.module.css';

export default function NumberInput(props) {
  return (
    <input
      className={numberstyle.number}
      type="number"
      value={props.value}
      onChange={props.onChange} // onclick of that function action tigger
      name={props.name}
      id={props.id}
      style={props.style}
      readOnly={props.Editablefield}
    />
  );
}

NumberInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
  Editablefield: PropTypes.bool,
  id: PropTypes.string,
  style: PropTypes.object,
};
