import React, { useState } from 'react';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';
import { FiFilter } from 'react-icons/fi';
import cx from 'classnames';
import { PropTypes } from 'prop-types';
import styles from './BaseTable.module.css';

export default function BaseTable(props) {
  const [filterEnabled, updatedFilter] = useState(false);
  const { tableHeader, data, columns, tableStyle } = props;

  const toggleFilter = () => {
    updatedFilter(!filterEnabled);
  };

  return (
    <>
      <div className={styles.header}>
        <div>
          <span>{tableHeader}</span>
        </div>
        <div>
          <button
            className={cx(styles.filterButton, {
              [styles.filterActive]: filterEnabled,
            })}
            type="button"
            onClick={toggleFilter}
          >
            <FiFilter />
          </button>
        </div>
      </div>
      <ReactTable
        data={data}
        columns={columns}
        showPagination={false}
        defaultPageSize={data.length}
        className="-striped -highlight"
        filterable={filterEnabled}
        style={tableStyle}
      />
    </>
  );
}

BaseTable.propTypes = {
  tableHeader: PropTypes.string,
  data: PropTypes.array,
  columns: PropTypes.array,
  tableStyle: PropTypes.object,
};

BaseTable.defaultProps = {
  data: [],
  columns: [],
};
