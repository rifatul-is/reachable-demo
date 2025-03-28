import React, { useState } from "react";
import { Line, LineChart, ResponsiveContainer, YAxis, Tooltip } from "recharts";
import { marketOverviewData } from "../data/cryptoData";
import { ChevronDown } from "lucide-react";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-crypto-darker p-3 rounded-lg border border-gray-700">
        <p className="text-sm text-white">${payload[0].value}</p>
      </div>
    );
  }

  return null;
};

const MarketOverview = () => {
  const [timeframe, setTimeframe] = useState("Monthly");

  return (
    <div className="crypto-card p-5">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Market Overview</h3>
        <div className="flex items-center bg-crypto-dark text-white px-3 py-1 rounded-full text-sm">
          <span>{timeframe}</span>
          <ChevronDown size={16} className="ml-1" />
        </div>
      </div>

      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart>
            <YAxis
              orientation="left"
              domain={[0, 70000]}
              ticks={[0, 10000, 20000, 30000, 40000, 50000]}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#6c7293" }}
              tickFormatter={(value) =>
                value === 0 ? "0k" : `${value / 1000}0k`
              }
              width={30}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              data={marketOverviewData.purple}
              dataKey="value"
              stroke="#9b87f5"
              strokeWidth={2.5}
              dot={false}
              activeDot={{ r: 8, fill: "#9b87f5" }}
            />
            <Line
              type="monotone"
              data={marketOverviewData.blue}
              dataKey="value"
              stroke="#61dafb"
              strokeWidth={2.5}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MarketOverview;
