import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Chart } from '../index';
import PropGenerator from '../../PropGenerator';

const defaultValueJson = {
  title: 'Sample Chart',
  xaxistitle: '',
  yaxistitle: '',
  data: [
    {
      x: [1, 2, 3],
      y: [2, 6, 3],
      type: 'scatter',
      mode: 'lines',
      marker: { color: 'red' },
    },
    { type: 'line', x: [1, 2, 3], y: [2, 5, 3] },
  ],
};

const propJson = [
  {
    type: 'text',
    id: 'title',
    name: 'Chart Title',
  },
  {
    type: 'text',
    id: 'xaxistitle',
    name: 'X axis Label',
  },
  {
    type: 'text',
    id: 'yaxistitle',
    name: 'Y axis Label',
  },
  {
    type: 'json',
    id: 'data',
    name: 'Data',
  },
];

function LineChartStories() {
  const [valueJson, UpdateValueJson] = useState(defaultValueJson);
  return (
    <>
      <Chart
        data={valueJson.data}
        xaxistitle={valueJson.xaxistitle}
        yaxistitle={valueJson.yaxistitle}
        title={valueJson.title}
      />
      <br></br>
      <br></br>
      <div>
        <PropGenerator
          propJson={propJson}
          valueJson={valueJson}
          onChange={UpdateValueJson}
        />
      </div>
    </>
  );
}

storiesOf('Chart', module).add('Chart', () => <LineChartStories />);
