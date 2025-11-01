import React from "react";
import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const Chart = () => {
  const data = [
    { name: "May", Total: 2700 },
    { name: "Jun", Total: 3000 },
    { name: "Jul", Total: 2900 },
    { name: "Aug", Total: 3100 },
    { name: "Sep", Total: 2950 },
    { name: "Oct", Total: 3050 },
  ];

  return (
    <div className="chart">
      <div className="title">Last 6 months (Revenue)</div>
      <ResponsiveContainer width="90%" aspect={2/1}>
        <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="gray" />
          <YAxis />
          <Tooltip />

          <Area type="monotone" dataKey="Total" stroke="#8884d8" fill="url(#total)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
