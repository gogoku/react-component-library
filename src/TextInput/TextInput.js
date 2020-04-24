import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './TextInput.module.css';

export default function TextInput(props) {
  const {
    value,
    onChange,
    name,
    testId,
    id,
    size,
    disabled,
    onBlur,
    onFocus,
    className,
    placeholder,
    isRequired,
    isError,
  } = props;

  const onChangeText = (ev) => {
    onChange(name, ev.currentTarget.value);
  };

  const isValidClass = isError ? styles.error : '';

  return (
    <span>
      <input
        className={`${styles.txtInput} ${styles[size]} ${className} ${isValidClass}`}
        testId={testId}
        onChange={onChangeText}
        value={value}
        id={id}
        disabled={disabled}
        onBlur={onBlur}
        onFocus={onFocus}
        placeholder={placeholder}
        required={isRequired}
      />
    </span>
  );
}

TextInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
  testId: PropTypes.string,
  id: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'full']),
  onBlur: PropTypes.bool,
  onFocus: PropTypes.bool,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  isRequired: PropTypes.isRequired,
  isError: PropTypes.bool,
};

TextInput.defaultProps = {
  size: 'full',
  disabled: false,
  isError: false,
  className: '',
};
