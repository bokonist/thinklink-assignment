import React, { useMemo } from 'react';
import { Line } from 'react-chartjs-2';
import '../styles/Graph.css';
import PropTypes from 'prop-types';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from 'chart.js';
import { weekData, monthData, yearData } from '../data/chartData';

const options = {
  scales: {
    yAxes: {
      ticks: {
        beginAtZero: false,
        callback(value) {
          if (parseInt(value, 10) >= 1000) {
            return `$${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
          }
          return `$${value}`;
        },
      },
    },
  },
};
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

function Graph({ selectedRange }) {
  const data = useMemo(() => {
    let apiData;
    if (selectedRange === 'week') apiData = weekData;
    else if (selectedRange === 'month') apiData = monthData;
    else if (selectedRange === 'year') apiData = yearData;

    const labels = Object.keys(apiData);
    const dataInner = {
      labels,
      datasets: [
        {
          label: '',
          data: Object.values(apiData),
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        },
      ],
    };
    return dataInner;
  }, [selectedRange]);

  return (
    <div className="graph-drawing-container" id="graph-drawing-container">
      {Object.entries(data).length > 0 && (
        <Line data={data} options={options} />
      )}
    </div>
  );
}
Graph.propTypes = {
  selectedRange: PropTypes.string.isRequired,
};
export default React.memo(Graph);
