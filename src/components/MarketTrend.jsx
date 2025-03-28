import React from "react";
import { marketTrendData } from "../data/cryptoData";
import { ArrowUp, ArrowDown } from "lucide-react";

const MarketTrend = () => {
  return (
    <div className="crypto-card p-5">
      <h3 className="text-lg font-semibold mb-4">Market Trend</h3>

      <table className="w-full">
        <thead>
          <tr className="text-gray-500 text-sm border-b border-gray-800">
            <th className="text-left font-medium pb-2">Name</th>
            <th className="text-right font-medium pb-2">Last Price</th>
            <th className="text-right font-medium pb-2">24h Change</th>
          </tr>
        </thead>
        <tbody>
          {marketTrendData.map((crypto, index) => (
            <tr key={index} className="border-b border-gray-800 last:border-0">
              <td className="py-3">
                <div className="flex items-center">
                  <div className="mr-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                      <span className="text-xs font-bold text-white">
                        {crypto.name}
                      </span>
                    </div>
                  </div>
                  <div className="text-sm font-medium">{crypto.fullName}</div>
                </div>
              </td>
              <td className="text-right py-3 text-sm font-medium">
                {crypto.price}
              </td>
              <td className="text-right py-3">
                <div
                  className={`flex items-center justify-end ${
                    crypto.direction === "up"
                      ? "text-crypto-positive"
                      : "text-crypto-negative"
                  }`}
                >
                  {crypto.direction === "up" ? (
                    <ArrowUp size={16} className="mr-1" />
                  ) : (
                    <ArrowDown size={16} className="mr-1" />
                  )}
                  <span className="text-sm font-medium">{crypto.change}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MarketTrend;
