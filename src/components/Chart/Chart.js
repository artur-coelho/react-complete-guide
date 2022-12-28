import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  return (
    <div className='chart'>
      {props.dataPoint.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          value={dataPoint.value}
          maxValue={null}
        />
      ))}
    </div>
  );
};

export default Chart;
