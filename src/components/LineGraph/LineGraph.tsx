import React, { FC } from "react";
import {
  Area,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
  AreaChart,
} from "recharts";

interface ILineData {
  graphData: any[];
}

const LineGraph: FC<ILineData> = ({ graphData }) => {
  return (
    <>
      <AreaChart
        width={700}
        height={500}
        data={graphData}
        margin={{ top: 140, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#ff7b31" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#ff7b31" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#ffffff" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#ffffff" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="type" />
        <YAxis />
        <CartesianGrid strokeDasharray="1 1" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="profit"
          stroke="#ff7b31"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="commision"
          stroke="#000"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </>
  );
};

export default LineGraph;
