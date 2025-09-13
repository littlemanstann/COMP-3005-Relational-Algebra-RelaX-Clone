"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function EmployeeChart() {
  // Example table data
  const employees = [
    { EID: "E1", Name: "John", Age: 32 },
    { EID: "E2", Name: "Alice", Age: 28 },
    { EID: "E3", Name: "Bob", Age: 45 },
  ];

  const data = {
    labels: employees.map((e) => e.Name),
    datasets: [
      {
        label: "Age",
        data: employees.map((e) => e.Age),
        backgroundColor: "rgba(59, 130, 246, 0.7)", // Tailwind blue-500
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Employee Ages" },
    },
  };

  return <Bar data={data} options={options} />;
}