import React from "react";
import { Home, BarChart2, Package, Settings, LogOut } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="h-screen w-20 fixed left-0 top-0 bg-crypto-darker border-r border-white/5 flex flex-col items-center py-6">
      <div className="mb-12">
        <div className="w-12 h-12 bg-gradient-to-tr from-purple-600 to-pink-500 rounded-xl flex items-center justify-center">
          <div className="w-8 h-8 bg-crypto-darker rounded-lg"></div>
        </div>
      </div>

      <nav className="flex flex-col items-center space-y-8">
        <button className="p-3 rounded-xl bg-crypto-dark text-white">
          <Home size={24} />
        </button>
        <button className="p-3 rounded-xl text-gray-500 hover:text-white transition-colors">
          <BarChart2 size={24} />
        </button>
        <button className="p-3 rounded-xl text-gray-500 hover:text-white transition-colors">
          <Package size={24} />
        </button>
        <button className="p-3 rounded-xl text-gray-500 hover:text-white transition-colors">
          <Settings size={24} />
        </button>
      </nav>

      <div className="mt-auto">
        <button className="p-3 rounded-xl text-gray-500 hover:text-white transition-colors">
          <LogOut size={24} />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
