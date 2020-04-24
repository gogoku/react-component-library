/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-else-return */
import React from 'react';
import PropTypes from 'prop-types';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import momentPropTypes from 'react-moment-proptypes';
import moment from 'moment';
import Select from 'react-select';

import { DateRangePicker } from 'react-dates';
import './datepicker.css';
import styles from './DatePicker.module.css';
import { renderMonthElement } from './MonthSelection';
import { Button } from '../Button';

const format = require('date-fns/format');
const subDays = require('date-fns/sub_days');

const defaultProps = {
  // example props for the demo
  initialStartDate: null,
  initialEndDate: null,

  // input related props
  //   startDateId: START_DATE,
  startDatePlaceholderText: 'Start Date',
  //   endDateId: END_DATE,
  endDatePlaceholderText: 'End Date',
  disabled: false,
  required: false,
  showClearDates: false,
  showDefaultInputIcon: false,
  block: false,
  small: true,
  regular: false,

  // calendar presentation and interaction related props

  //   orientation: HORIZONTAL_ORIENTATION,
  //   anchorDirection: ANCHOR_LEFT,
  initialVisibleMonth: null,
  numberOfMonths: 2,

  // navigation related props
  onPrevMonthClick() {},
  onNextMonthClick() {},
  onClose() {},

  // day presentation and interaction related props
  enableOutsideDays: false,
  isDayBlocked: () => false,
  // isOutsideRange: () => false,
  isDayHighlighted: () => false,
  dateChange: (date) => {
    console.log(date);
  },

  // internationalization
  displayFormat: () => moment.localeData().longDateFormat('L'),
  monthFormat: 'MMMM YYYY',
  disabledDate: [],
  //   phrases: DateRangePickerPhrases,
};

const DateArray = [
  { label: 'Today', value: 0 },
  {
    label: 'Last 7 Days',
    value: 1,
  },
  {
    label: 'Last 30 Days',
    value: 2,
  },
  {
    label: 'Last 90 Days',
    value: 3,
  },
  {
    label: 'Last 180 Days',
    value: 4,
  },
  {
    label: 'Last 360 Days',
    value: 5,
  },
  { label: 'Yesterday', value: 6 },
  { label: 'Custom', value: 7, disabled: true },
];

const CustomStyles = {
  control: (style) => ({ ...style, 'min-height': '34px' }),
  dropdownIndicator: (style) => ({ ...style, padding: '4px' }),
};

class DateRangePickerWrapper extends React.Component {
  constructor(props) {
    super(props);
    const { disabledDate } = props;
    DateArray.map((val) => {
      const newVal = { ...val };
      if (disabledDate.indexOf(val.value) !== -1) {
        newVal.disabled = true;
      }
      return newVal;
    });

    this.state = {
      focusedInput: null,
      selectedDate: {
        label: 'Custom',
        value: 7,
      },
      isFullLife: false,
    };
  }

  getDate = (offsetDate, days) => {
    const subdaysvalue = subDays(offsetDate, days);
    return format(subdaysvalue, 'YYYY-MM-D');
  };

  // eslint-disable-next-line react/no-deprecated
  componentWillReceiveProps() {
    const disabled = [0];
    if (this.props.disabledDate) {
      disabled.push(this.props.disabledDate);
    }
  }

  changeDate = (val) => {
    let start = format(this.props.initialDate, 'YYYY-MM-D');
    let end = this.props.offsetDate || moment().format('YYYY-MM-DD');
    switch (val) {
      case 0: {
        start = format(new Date(), 'YYYY-MM-D');
        end = format(new Date(), 'YYYY-MM-D');
        break;
      }
      case 1: {
        start = this.getDate(end, 7);
        break;
      }
      case 2: {
        start = this.getDate(end, 30);
        break;
      }
      case 3: {
        start = this.getDate(end, 90);
        break;
      }
      case 4: {
        start = this.getDate(end, 180);
        break;
      }
      case 5: {
        start = this.getDate(end, 360);
        break;
      }
      case 6: {
        start = this.getDate(end, 1);
        break;
      }
      case 99: {
        start = format(new Date(2007, 0, 1), 'YYYY-MM-D');
        break;
      }
      default: {
        start = format(new Date(), 'YYYY-MM-D');
        end = format(new Date(), 'YYYY-MM-D');
        break;
      }
    }
    this.props.dateChange(start, end);
  };

  handleDropdownChange = (val) => {
    this.changeDate(val.value);
    this.setState({
      selectedDate: val,
    });
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.setState({
      selectedDate: { label: 'Custom', value: 7, disabled: true },
    });

    const start = format(startDate, 'YYYY-MM-D');
    const end = format(endDate, 'YYYY-MM-D');
    this.props.startOnChange(start, end);
  };

  onFocusChange = (focusedInput) => {
    this.setState({ focusedInput });
  };

  focusWrappedMonthElement = (data) => {
    const { focusedInput } = this.state;
    const { initialDate } = this.props;
    return renderMonthElement({ ...data, focusedInput, initialDate });
  };

  toggleFullLife = () => {
    const { isFullLife } = this.state;
    this.setState({
      isFullLife: !isFullLife,
    });
    if (!isFullLife) {
      this.changeDate(99);
    } else {
      this.changeDate();
    }
  };

  render() {
    const { focusedInput, selectedDate, isFullLife } = this.state;

    return (
      <div className={`${styles.datePicker} ${styles.dateRangePicker}`}>
        <Button
          disabled={this.props.disableAll}
          onClick={this.toggleFullLife}
          title="Full Life"
          appearance="success"
          size="small"
        />
        <Select
          value={selectedDate}
          // value={this.props.defaultValue}
          className={styles['date-picker-dropdown']}
          options={DateArray}
          placeholder="Select a days"
          isClearable={false}
          autosize
          styles={CustomStyles}
          onChange={this.handleDropdownChange}
          isDisabled={isFullLife || this.props.disableAll}
        />
        <div style={{ marginLeft: 8 }}>
          <DateRangePicker
            {...this.props}
            onDatesChange={this.onDatesChange}
            onFocusChange={this.onFocusChange}
            focusedInput={focusedInput}
            startDate={this.props.initialDate}
            endDate={this.props.finalDate}
            renderMonthElement={this.focusWrappedMonthElement}
            displayFormat="DD/MM/YYYY"
            daySize={25}
            small
            disabled={isFullLife || this.props.disableAll}
          />
        </div>
      </div>
    );
  }
}

DateRangePickerWrapper.propTypes = {
  // example props for the demo
  initialStartDate: momentPropTypes.momentObj,
  initialEndDate: momentPropTypes.momentObj,
  startDatePlaceholderText: PropTypes.string,
  //   endDateId: END_DATE,
  endDatePlaceholderText: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  showClearDates: PropTypes.bool,
  showDefaultInputIcon: PropTypes.bool,
  block: PropTypes.bool,
  small: PropTypes.bool,
  regular: PropTypes.bool,
  // calendar presentation and interaction related props
  initialVisibleMonth: PropTypes.oneOf(['element', 'null']),
  numberOfMonths: PropTypes.number,
  enableOutsideDays: PropTypes.bool,
  isDayBlocked: PropTypes.func,
  isDayHighlighted: PropTypes.func,
  // internationalization
  displayFormat: PropTypes.func,
  monthFormat: PropTypes.string,
  disableAll: PropTypes.bool,
  finalDate: PropTypes.string,
  defaultValue: PropTypes.string,
  initialDate: PropTypes.string,
  startOnChange: PropTypes.func,
  dateChange: PropTypes.func,
  endOnChange: PropTypes.func,
  defaultSelectedDate: PropTypes.string,
  offsetDate: PropTypes.string,
  disabledDate: PropTypes.string,
  year: PropTypes.string,
  month: PropTypes.string,
  onPrevMonthClick: PropTypes.func,
  onNextMonthClick: PropTypes.func,
  onClose: PropTypes.func,
};
DateRangePickerWrapper.defaultProps = defaultProps;

export default DateRangePickerWrapper;
