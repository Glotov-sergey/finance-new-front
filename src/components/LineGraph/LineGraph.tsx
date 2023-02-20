import React, { FC } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
interface IGraph {
  data: number[];
}

const LineGraph: FC<IGraph> = ({ data }) => {
  const series = [
    {
      name: "trades",
      data: data,
    },
  ];

  const options: ApexOptions = {
    colors: ["#FF7B31"],
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
    // tooltip: {
    //   x: {
    //     format: "dd/MM/yy HH:mm",
    //   },
    // },
    legend: {
      show: false,
    },
  };

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="area"
      height="100%"
    />
  );
};

export default LineGraph;
