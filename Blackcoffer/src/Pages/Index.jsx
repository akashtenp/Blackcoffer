import React from "react";
import Intensity from "./Intensity";
import Year from "./Year";
import CountryMap from "./CountryMap";
import 'leaflet/dist/leaflet.css';
import City from "./City";
import Topics from "./Topics";


const Index = () => {
  return (
    <div className="h-screen w-full flex overflow-hidden bg-gray-100">

      {/* Filters Panel */}
      <div className="w-1/6 bg-white p-4 overflow-y-auto">
        <h2 className="font-semibold text-lg mb-4">Filters</h2>
        {["End Year", "Topics", "Region", "PEST", "Source", "SWOT", "Country", "City"].map((label) => (
          <div key={label} className="mb-4">
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
              <option>Any</option>
            </select>
          </div>
        ))}
      </div>

      {/* Dashboard Content */}
      <div className="w-5/6 p-4 overflow-hidden">
        <div className="grid grid-rows-3 grid-cols-3 gap-4 h-full">

          {/* Row 1: Line Chart (full width) */}
          <div className="col-span-3 bg-white rounded-xl p-4 shadow overflow-hidden">
            <h3 className="font-semibold text-md mb-2">Intensity, Likelihood, and Relevance</h3>
            <div className="h-full w-full">
              <Intensity />
            </div>
          </div>

          {/* Row 2 & 3: Charts */}
          <div className="bg-white rounded-xl p-4 shadow flex flex-col h-full">
            <h3 className="font-semibold mb-2">Year</h3>
            <div className="flex-1 flex items-center justify-center">
              <Year />
            </div>
          </div>

          

          <div className="bg-white rounded-xl p-4 shadow flex flex-col h-full">
            <h3 className="font-semibold mb-2">Country</h3>
            <div className="flex-1 flex items-center justify-center">
              <CountryMap />
            </div>
          </div>


          <div className="bg-white rounded-xl p-4 shadow flex flex-col">
            <Topics/>
          </div>
          <div className="bg-white rounded-xl p-4 shadow flex flex-col">
            <h3 className="font-semibold mb-2">Region</h3>
            <div className="flex-1 bg-gray-200 flex items-center justify-center">Bar Chart</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow flex flex-col col-span-2">
            <div className="flex-1 flex items-center justify-center">
              <City />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
