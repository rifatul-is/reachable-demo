import React from "react";
import { assetsData } from "../data/cryptoData";
import { Search } from "lucide-react";

const Assets = () => {
  return (
    <div className="crypto-card p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Assets</h3>
        <button className="text-gray-400 p-1">
          <Search size={18} />
        </button>
      </div>

      <div className="space-y-4">
        {assetsData.map((asset, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mr-3">
                <span className="text-xs text-white">₿</span>
              </div>
              <div>
                <div className="text-sm font-medium">{asset.name}</div>
                <div className="text-xs text-gray-500">{asset.symbol}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium">{asset.amount}</div>
              <div className="text-xs text-gray-500">{asset.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assets;
