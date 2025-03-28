import React from "react";

const HeroBanner = () => {
  return (
    <div className="crypto-card overflow-hidden relative">
      <div className="p-8 relative z-10">
        <span className="text-sm text-purple-300 mb-1 block">ETHEREUM 2.0</span>
        <h2 className="text-3xl font-bold text-white mb-2">
          Your Gateway
          <br />
          into Blockchain
        </h2>
        <p className="text-gray-400 mb-8">
          Paronia is a blockchain platform.
          <br />
          We make blockchain accessible.
        </p>
        <button className="bg-crypto-dark hover:bg-opacity-90 text-white py-3 px-6 rounded-lg transition-all">
          Learn More.
        </button>
      </div>

      <div className="absolute right-0 top-0 h-full w-1/2 pointer-events-none">
        {/* 3D Objects */}
        <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-gradient-to-tr from-purple-600 to-indigo-500 rounded-xl transform rotate-45 blur-sm"></div>
        <div className="absolute top-1/2 right-1/3 w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-full blur-sm"></div>
        <div className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-gradient-to-br from-white to-gray-200 rounded-full blur-sm"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-teal-400 to-green-300 rounded-full blur-sm"></div>
        <div className="absolute top-2/3 right-1/2 w-10 h-36 bg-gradient-to-br from-blue-500 to-blue-300 rounded-full blur-sm transform rotate-45"></div>
      </div>
    </div>
  );
};

export default HeroBanner;
