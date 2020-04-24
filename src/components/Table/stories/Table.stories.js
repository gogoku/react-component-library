import React, { useState, useEffect } from 'react';
import { storiesOf } from '@storybook/react';
import { Table } from '../index';
import PropGenerator from '../../PropGenerator';

const data = [];

const sampleObject = {
  name: 'Tanner Linsley',
  age: 26,
  friend_name: 'Jason Maurer',
  friend_age: 23,
};

for (let i = 0; i < 10; i++) {
  data.push({ ...sampleObject });
}

const columns = [
  {
    Header: 'Name',
    accessor: 'name', // String-based value accessors!
  },
  {
    Header: 'Age',
    accessor: 'age',
  },
  {
    Header: 'Friend Name',
    accessor: 'friend_name',
  },
  {
    Header: 'Friend Age',
    accessor: 'friend_age',
  },
];

const defaultValueJson = {
  tableHeader: 'Sample Table',
  data,
  columns,
};

const propJson = [
  {
    type: 'text',
    id: 'tableHeader',
    name: 'Table Heading',
  },
  {
    type: 'json',
    id: 'data',
    name: 'Data',
  },
  {
    type: 'json',
    id: 'columns',
    name: 'Columns',
  },
];

function TableStories() {
  const [valueJson, UpdateValueJson] = useState(defaultValueJson);

  useEffect(() => {}, [valueJson]);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div>
        <Table
          tableHeader={valueJson.tableHeader}
          data={valueJson.data}
          columns={valueJson.columns}
        />
      </div>
      <div>
        <PropGenerator
          propJson={propJson}
          valueJson={valueJson}
          onChange={UpdateValueJson}
        />
      </div>
    </div>
  );
}

storiesOf('Table', module).add('Table', () => <TableStories />);
