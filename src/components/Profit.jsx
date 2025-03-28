import React from "react";
import { profitData } from "../data/cryptoData";
import { ArrowUp, ArrowDown } from "lucide-react";

const Profit = () => {
  return (
    <div className="crypto-card p-5">
      <h3 className="text-lg font-semibold mb-4">Profit</h3>

      <div className="space-y-4">
        <div className="p-3 bg-crypto-dark rounded-lg flex items-center">
          <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center mr-3">
            <ArrowUp size={20} className="text-crypto-positive" />
          </div>
          <div>
            <div className="flex items-baseline mb-1">
              <span className="text-gray-400 text-sm mr-1">$</span>
              <span className="text-xl font-bold text-white">
                {profitData.income.toFixed(2)}
              </span>
            </div>
            <div className="text-xs text-gray-500">Income</div>
          </div>
        </div>

        <div className="p-3 bg-crypto-dark rounded-lg flex items-center">
          <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center mr-3">
            <ArrowDown size={20} className="text-crypto-negative" />
          </div>
          <div>
            <div className="flex items-baseline mb-1">
              <span className="text-gray-400 text-sm mr-1">$</span>
              <span className="text-xl font-bold text-white">
                {profitData.expenses.toFixed(2)}
              </span>
            </div>
            <div className="text-xs text-gray-500">Expenses</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profit;
