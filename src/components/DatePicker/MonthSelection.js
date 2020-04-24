import React from 'react';
import moment from 'moment';
const format = require('date-fns/format');

export function renderMonthElement({
  month,
  onMonthSelect,
  onYearSelect,
  focusedInput,
  initialDate,
}) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div>
        <select
          className="font-12"
          value={month.month()}
          onChange={(e) => onMonthSelect(month, e.target.value)}
        >
          {moment.months().map((label, value) => (
            <option value={value}>{label}</option>
          ))}
        </select>
      </div>
      <div>
        <select
          className="font-12"
          value={month.year()}
          onChange={(e) => onYearSelect(month, e.target.value)}
        >
          {returnYears(focusedInput, initialDate)}
        </select>
      </div>
    </div>
  );
}

function returnYears(focus, initialDate) {
  const years = [];
  const dt = new Date();
  let endDateRange = dt.getFullYear() - 1970;
  if (focus === 'endDate')
    endDateRange = dt.getFullYear() - format(initialDate, 'YYYY');
  // eslint-disable-next-line no-plusplus
  for (let i = moment().year() - endDateRange; i <= moment().year(); i++) {
    years.push(<option value={i}>{i}</option>);
  }
  return years;
}
