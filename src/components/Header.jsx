import React from "react";
import { Search, Bell, ChevronLeft } from "lucide-react";

const Header = () => {
  return (
    <header className="px-8 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full bg-crypto-card">
          <ChevronLeft size={18} className="text-gray-400" />
        </button>
        <h1 className="text-xl font-semibold">Home</h1>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 bg-crypto-card rounded-full text-sm text-gray-300 placeholder-gray-500 outline-none w-56"
          />
          <Search
            size={16}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
          />
        </div>

        <div className="relative">
          <button className="p-2 rounded-full bg-crypto-card">
            <Bell size={18} className="text-gray-400" />
          </button>
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </div>

        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-pink-500 flex items-center justify-center">
          <span className="text-white">👤</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
