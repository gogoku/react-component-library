import React from 'react';
import { PropTypes } from 'prop-types';
import { FiLoader } from 'react-icons/fi';
import styles from './BaseButton.module.css';

const Loader = ({ isLoading }) => (
  <div className={styles['lds-spinner']} disabled={isLoading}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

Loader.propTypes = {
  isLoading: PropTypes.bool,
};

export default function BaseButton(props) {
  const {
    onClick,
    id,
    title,
    buttonType,
    appearance,
    className,
    disabled,
    isLoading,
    onBlur,
    onFocus,
    loaderEnabled,
    iconBefore,
    iconAfter,
    testId,
    name,
    size,
  } = props;

  const onBlurButton = (ev) => {
    onBlur(name, ev);
  };

  const onFocusButton = (ev) => {
    onFocus(name, ev);
  };

  const onClickButton = (ev) => {
    onClick(name, ev);
  };

  return (
    // eslint-disable-next-line react/button-has-type
    <button
      className={`${styles.buttonBase} ${styles[appearance]} ${className} ${styles[size]}`}
      onClick={onClickButton}
      id={id}
      type={buttonType}
      disabled={disabled}
      testId={testId}
      onBlur={onBlurButton}
      onFocus={onFocusButton}
    >
      {loaderEnabled && <FiLoader hidden={isLoading} />}
      <span>{iconBefore}</span>
      <span>{title}</span>
      <span>{iconAfter}</span>
    </button>
  );
}

BaseButton.propTypes = {
  onClick: PropTypes.func,
  id: PropTypes.string,
  title: PropTypes.string,
  buttonType: PropTypes.oneOf(['button', 'submit', 'reset']),
  appearance: PropTypes.oneOf([
    'default',
    'info',
    'warning',
    'danger',
    'success',
  ]),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  testId: PropTypes.string,
  name: PropTypes.string,
  iconAfter: PropTypes.element,
  iconBefore: PropTypes.element,
  loaderEnabled: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

BaseButton.defaultProps = {
  buttonType: 'button',
  appearance: 'default',
  className: '',
  size: 'medium',
  onFocus: () => {},
  onBlur: () => {},
};
