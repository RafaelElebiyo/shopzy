import React from 'react';
import { Bar } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend 
} from 'chart.js';

// Registra los componentes necesarios de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const SalesChart = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.month),
    datasets: [
      {
        label: 'Nuevos Clientes',
        data: data.map(item => item.newCustomers),
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
      {
        label: 'Pedidos',
        data: data.map(item => item.orders),
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Actividad de Clientes',
      },
    },
  };

  return (
    <div className="card p-3">
      <Bar options={options} data={chartData} />
    </div>
  );
};

export default SalesChart;