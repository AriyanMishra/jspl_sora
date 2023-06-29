import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
      max: 1,
      ticks: {
        stepSize: 0.2,
      },
    },
  },
  plugins: {
    legend: {
      position: 'top',
    },
  },
};


const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Total Cases',
      data: [0.8, 0.4, 1, 1, 0.8, 1, 0.6, 0.8, 1, 0.6, 1, 1],
      backgroundColor: '#FF8F23',
      borderRadius: 5,
      barThickness: 45,
    },
    {
      label: 'Resolved Cases',
      data: [0.6, 0.2, 0.8, 0.6, 0.4, 0.4, 0.4, 0.6, 0.6, 0.4, 0.4, 0.2],
      backgroundColor: '#61BC46',
      borderRadius: 5,
      barThickness: 45,
    },
  ],
};

const VerticalBarChart = () => {
  return (
    <div className="chart">
      <h2 style={{ fontFamily: 'sans-serif', fontSize: '16px', fontStyle: 'light' }}>
        Year Wise PIOs Review (Angul-All Department)
      </h2>
      <Bar options={options} data={data} />
    </div>
  );
};

export default VerticalBarChart;
