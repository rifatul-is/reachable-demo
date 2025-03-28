import React from "react";
import Assets from "../components/Assets";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import CryptoPriceCard from "../components/CryptoPriceCard";
import MarketOverview from "../components/MarketOverview";
import QuickTransfer from "../components/QuickTransfer";
import MarketTrend from "../components/MarketTrend";
import Profit from "../components/Profit";
import { chartData, cryptoValues } from "../data/cryptoData";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-crypto-darker text-white">
      <Sidebar />

      <div className="ml-20">
        <Header />

        <main className="p-6">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-5">
              <HeroBanner />
            </div>

            <div className="col-span-12 lg:col-span-7">
              {/* <EthUsdChart /> */}
            </div>

            <div className="col-span-12 md:col-span-4">
              <CryptoPriceCard
                symbol="BTC"
                price={cryptoValues.btc.price}
                change={cryptoValues.btc.change}
                direction={cryptoValues.btc.direction}
                chartData={chartData.btc}
                color="#F7931A"
              />
            </div>

            <div className="col-span-12 md:col-span-4">
              <CryptoPriceCard
                symbol="ETH"
                price={cryptoValues.eth.price}
                change={cryptoValues.eth.change}
                direction={cryptoValues.eth.direction}
                chartData={chartData.eth}
                color="#627EEA"
              />
            </div>

            <div className="col-span-12 md:col-span-4">
              <CryptoPriceCard
                symbol="LTC"
                price={cryptoValues.ltc.price}
                change={cryptoValues.ltc.change}
                direction={cryptoValues.ltc.direction}
                chartData={chartData.ltc}
                color="#345D9D"
              />
            </div>

            <div className="col-span-12 lg:col-span-7">
              <MarketOverview />
            </div>

            {/* Right Side Components */}
            <div className="col-span-12 lg:col-span-5 grid grid-cols-1 gap-6">
              <QuickTransfer />
              <MarketTrend />
              <Profit />
              <Assets />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
