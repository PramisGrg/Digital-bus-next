"use client";
// pages/piechart.js
import { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

const PieChartPage = () => {
  const chartRef = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Destroy existing chart instance, if any
    if (chartInstance) {
      chartInstance.destroy();
    }

    // Create new chart instance
    const newChartInstance = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Credit", "Debit"],
        datasets: [
          {
            label: "My First Dataset",
            data: [12, 19],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
    });

    // Store the new chart instance
    setChartInstance(newChartInstance);

    // Cleanup function
    return () => {
      if (newChartInstance) {
        newChartInstance.destroy();
      }
    };
  }, []);

  return (
    <div>
      <h1>Pie Chart</h1>
      <canvas ref={chartRef} />
    </div>
  );
};

export default PieChartPage;
