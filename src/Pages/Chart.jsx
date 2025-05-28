// LineChart.js
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import './chat.css'; // 👈 Custom styles here

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler // 👈 Enables background fill
);

const LineChart = () => {
  const data = {
    labels: [
      'Apr 4', 'Apr 9', 'Apr 14', 'Apr 20', 'Apr 26', 'May 2', 'May 8',
      'May 14', 'May 20', 'May 26', 'Jun 1', 'Jun 6', 'Jun 11', 'Jun 17',
      'Jun 23', 'Jun 30'
    ],
    datasets: [
      {
        label: 'Mobile',
        data: [20, 30, 45, 60, 20, 30, 60, 5, 55, 40, 65, 70, 20,50, 35, 95],
        borderColor: 'rgba(0, 153, 255, 0.7)',
        backgroundColor: 'rgba(118, 171, 223, 0.56)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Desktop',
        data: [10, 20, 30, 40, 35, 50, 45, 55, 40, 30, 50, 30, 70, 50, 75, 85],
        borderColor: 'rgba(255, 255, 255, 0.6)',
        backgroundColor: 'rgba(124, 185, 232, 0.53)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: '#0d1117',
        },
        position: 'bottom',
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: { color: '#aaa' },
        grid: { color: 'rgba(255,255,255,0.05)' },
      },
      y: {
        ticks: { color: '#aaa' },
        grid: { color: 'rgba(255,255,255,0.05)' },
      },
    },
  };

  return (
    <div className="chart-container">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
