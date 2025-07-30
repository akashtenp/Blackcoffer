import React, { useState } from "react";
import Intensity from "./Intensity";
import Year from "./Year";
import CountryMap from "./CountryMap";
import "leaflet/dist/leaflet.css";
import City from "./City";
import Topics from "./Topics";
import Region from "./Region";

const filterFields = [
  "End Year",
  "Topics",
  "Sector",
  "Region",
  "PEST",
  "Source",
  "SWOT",
  "Country",
  "City",
];

const Index = () => {
  const [mobileFiltersVisible, setMobileFiltersVisible] = useState(false);

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-gray-100 overflow-hidden">
      {/* Sidebar Filters (Desktop) */}
      <div className="hidden md:block w-full md:w-1/5 h-screen bg-white p-4 overflow-y-auto border-r">
        <h2 className="font-semibold text-lg mb-4">Filters</h2>
        {filterFields.map((label) => (
          <div key={label} className="mb-4">
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            <select className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm text-sm">
              <option>Any</option>
            </select>
          </div>
        ))}
      </div>

      {/* Toggle Button (Mobile) */}
      <div className="md:hidden p-4 bg-white border-b shadow-sm">
        <button
          onClick={() => setMobileFiltersVisible(!mobileFiltersVisible)}
          className="text-sm font-medium text-blue-600"
        >
          {mobileFiltersVisible ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      {/* Mobile Filter Panel */}
      {mobileFiltersVisible && (
        <div className="md:hidden bg-white p-4 border-b">
          {filterFields.map((label) => (
            <div key={label} className="mb-4">
              <label className="block text-sm font-medium text-gray-700">{label}</label>
              <select className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm text-sm">
                <option>Any</option>
              </select>
            </div>
          ))}
        </div>
      )}

      {/* Dashboard Content */}
      <div className="w-full md:w-4/5 p-4 overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

          {/* Full width chart (spans all columns) */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 bg-white rounded-xl p-4 shadow">
            <h3 className="font-semibold text-md mb-2">Intensity, Likelihood, and Relevance</h3>
            <div className="w-full h-full">
              <Intensity />
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow flex flex-col">
            <h3 className="font-semibold mb-2">Year</h3>
            <div className="flex-1 flex items-center justify-center">
              <Year />
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow flex flex-col">
            <h3 className="font-semibold mb-2">Country</h3>
            <div className="flex-1 flex items-center justify-center">
              <CountryMap />
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow flex flex-col">
            <Topics />
          </div>

          <div className="bg-white rounded-xl p-4 shadow flex flex-col">
            <Region />
          </div>

          <div className="bg-white rounded-xl p-4 shadow flex flex-col sm:col-span-2">
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
