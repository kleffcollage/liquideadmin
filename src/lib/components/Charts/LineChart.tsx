import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line as Chart } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  scales: {
    x: {
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        display: true,
        font: {
          size: 8,
          fontFamily: '"Baloo Bhai 2", cursive',
        },
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        font: {
          size: 8,
          fontFamily: '"Baloo Bhai 2", cursive',
        },
      },
    },
  },
  elements: {
    point: {
      pointBorderWidth: 0.5,
      backgroundColor: "#000000",
    },
    line: {
      borderColor: "#000000",
      borderWidth: 2,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
      position: "right" as const,
    },
    datalabels: {
      display: false,
    },
    tooltip: {
      backgroundColor: "#ffd7bd",
      titleColor: "#ffd7bd",
      padding: { x: 20, y: 4 } as unknown as number,
      titleFont: {
        size: 0,
      },
      bodyFont: {
        size: 8,
        fontFamily: '"Baloo Bhai 2", cursive',
        weight: "bold",
      },
      bodyColor: "#000",
      cornerRadius: 10,
      displayColors: false,
      caretPadding: 0,
      bodyAlign: "center" as "center",
      titleMarginBottom: 0,
    },
  },
};

const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export const data = {
  labels,
  datasets: [
    {
      data: [0, 400, 900, 1700, 4000, 1000, 2000],
    },
  ],
};

export default function LineChart() {
  return <Chart options={options} data={data} />;
}

// import dynamic from "next/dynamic";
// import { useState } from "react";
// const Chart = dynamic(() => import("react-apexcharts"), {
//   ssr: false,
// });
// interface ChartProps {
//     marker?: boolean;
// }

// function LineChart({ marker }: ChartProps) {
//   const [chart, setChart] = useState({
//     options: {
//       chart: {
//         id: "basic-bar",
//         toolbar: {
//           show: false,
//         },
//       },
//       grid: {
//         show: false,
//       },
//       stroke: {
//         width: 2,
//         colors: ["#000000"],
//       },
//       markers: {
//         size: 1,
//         strokeColors: "#000000",
//       },
//       xaxis: {
//         categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
//         axisBorder: {
//           show: false,
//         },
//         axisTicks: {
//           show: false,
//         },
//         labels: {
//           style: {
//             fontSize: "8px",
//             fontFamily: '"Baloo Bhai 2", cursive',
//           },
//         },
//       },
//       yaxis: {
//         labels: {
//           style: {
//             fontSize: "8px",
//             fontFamily: '"Baloo Bhai 2", cursive',
//           },
//         },
//         numbers: [0, 500, 1000, 2000, 3000, 4000, 5000],
//       },
//     },

//     series: [
//       {
//         name: "amount",
//         data: [0, 400, 900, 1700, 4000, 1000, 2000],
//       },
//     ],
//   });
//   return (
//     <Chart
//       options={chart.options}
//       series={chart.series}
//       type="line"
//       width="100%"
//       height="100%"
//     />
//   );
// }

// export default LineChart;
