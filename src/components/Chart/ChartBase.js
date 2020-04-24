import React from 'react';
import createPlotlyComponent from 'react-plotly.js/factory';
import Plotly from 'plotly.js-basic-dist';
import { PropTypes } from 'prop-types';
const Plot = createPlotlyComponent(Plotly);

export default function Chart(props) {
  const { data, width, height, xaxistitle, yaxistitle, title, style } = props;
  return (
    <Plot
      style={style}
      autosize={false}
      data={data}
      layout={{
        width,
        height,
        title,
        showlegend: true,
        legend: {
          font: { family: 'Arial', size: 12, color: '#ff7f0e' },
          orientation: 'h',
          xanchor: 'center',
          x: '0.5',
          y: '-0.3',
        },
        xaxis: {
          tickfont: { color: '#000', size: 9 },
          title: { text: xaxistitle },
        },
        yaxis: {
          tickfont: { color: '#000', size: 9 },
          title: { text: yaxistitle },
        },
      }}
      useResizeHandler
      config={{
        displayModeBar: false,
      }}
    />
  );
}

Chart.propTypes = {
  data: PropTypes.array,
  width: PropTypes.oneOf(['string', 'number']),
  height: PropTypes.oneOf(['string', 'number']),
  xaxistitle: PropTypes.string,
  yaxistitle: PropTypes.string,
  title: PropTypes.string,
  style: PropTypes.object,
};

Chart.defaultProps = {
  data: [],
  style: {
    width: '100%',
    height: 400,
  },
  xaxistitle: '',
  yaxistitle: '',
  title: '',
};
