import React from 'react';
import { PropTypes } from 'prop-types';
import LongTextstyle from './LongText.module.css';

export default function LongText(props) {
  return (
    <textarea
      className={LongTextstyle.LongText}
      type="textarea"
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange} // onclick of that function action tigger
      onFocus={props.onfocus}
      onBlur={props.onblur}
      name={props.name}
      id={props.id}
      style={props.style}
      readOnly={props.Editablefield}
    />
  );
}

LongText.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onfocus: PropTypes.func,
  onblur: PropTypes.func,
  name: PropTypes.string,
  id: PropTypes.string,
  style: PropTypes.object,
  Editablefield: PropTypes.bool,
};
