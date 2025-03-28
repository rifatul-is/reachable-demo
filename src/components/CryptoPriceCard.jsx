import React from "react";
import { ArrowUp, ArrowDown, ChevronsRight } from "lucide-react";
import { Line, LineChart, ResponsiveContainer } from "recharts";

const CryptoPriceCard = ({
  symbol,
  price,
  change,
  direction,
  chartData,
  color,
}) => {
  return (
    <div className="crypto-card p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-lg font-semibold text-gray-400">{symbol}</span>
          <ChevronsRight size={16} className="text-gray-600" />
          <span className="text-lg font-semibold text-gray-400">USD</span>
        </div>
        <div
          className={`flex items-center ${
            direction === "up" ? "text-crypto-positive" : "text-crypto-negative"
          }`}
        >
          {direction === "up" ? (
            <ArrowUp size={16} className="mr-1" />
          ) : (
            <ArrowDown size={16} className="mr-1" />
          )}
          <span>{Math.abs(change)}%</span>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-3xl font-bold text-white">{price.toFixed(2)}</h3>
      </div>

      <div className="h-16">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <Line
              type="monotone"
              dataKey="value"
              stroke={direction === "up" ? "#00c48c" : "#ff647c"}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CryptoPriceCard;
