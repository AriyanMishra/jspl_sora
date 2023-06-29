import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
export const data = {
  labels ,
  datasets: [
    {
      label: "Total Cases",
      data:[80, 40, 100, 100, 80, 100, 60, 80, 100, 60, 100, 100],
      backgroundColor: "#FF8F23",
      borderRadius: 5,
    },
    {
      label: "Resolved Cases",
      data:[60, 20, 80, 60, 40, 40, 40, 60, 60, 40, 40, 20],
      backgroundColor: "#61BC46",
      borderRadius: 5,
    },
  ],
} 


const VerticalBarChart = () => {
  return (
    <div className="chart">
      <h2 style={{fontFamily: "sans-serif", fontSize: "16px", fontStyle:"light"}}>Year Wise PIOs Review ( Angul-All Department )</h2>
      <Bar options={options} data={data}/>
    </div>
  )
}

export default VerticalBarChart