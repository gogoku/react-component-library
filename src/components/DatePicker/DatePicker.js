import React, { useState } from 'react';
import 'react-dates/initialize'; // it is important that this is before actual react-dates import
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
import PropTypes from 'prop-types';

import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import styles from './DatePicker.module.css';
import { renderMonthElement } from './MonthSelection';

export default function DatePickerBase(props) {
  const { selected, onChange, disabled } = props;
  const [isFocused, setFocus] = useState(false);

  const focusWrappedMonthElement = (data) => {
    return renderMonthElement({ ...data, focusedInput: '', selected });
  };

  const updateFocus = ({ focused }) => {
    setFocus(focused);
  };
  return (
    <div className={styles.datePicker}>
      <SingleDatePicker
        className={`${styles.txtInput}`}
        date={moment(selected)}
        onDateChange={onChange}
        disabled={disabled}
        numberOfMonths={1}
        onFocusChange={updateFocus} // PropTypes.func.isRequired
        orientation="horizontal"
        openDirection="down"
        focused={isFocused} // PropTypes.bool
        displayFormat="DD/MM/YYYY"
        daySize={25}
        small
        renderMonthElement={focusWrappedMonthElement}
      />
    </div>
  );
}

DatePickerBase.propTypes = {
  selected: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

DatePickerBase.defaultProps = {};
