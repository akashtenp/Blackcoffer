import React, { useState } from "react";
import { useDispatch ,useSelector  } from "react-redux";
import { setFilter } from "../redux/slices/filterSlice"; // Adjust path as needed

import Intensity from "./Intensity";
import Year from "./Year";
import City from "./City";
import Topics from "./Topics";
import Region from "./Region";
import WorldMap from "./WorldMap";
import "leaflet/dist/leaflet.css";

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
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  
  const [mobileFiltersVisible, setMobileFiltersVisible] = useState(false);

  const handleFilterChange = (fieldLabel, value) => {
    const fieldKey = fieldLabel.toLowerCase().replace(/\s/g, "_");
    dispatch(setFilter({ field: fieldKey, value }));
  };
  // console.log("🔍 Current Redux Filters:", filters); 

  const renderFilter = (label) => (
    <div key={label} className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <select
        className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm text-sm"
        onChange={(e) => handleFilterChange(label, e.target.value)}
      >
        <option value="">Any</option>
        <option value="Sample 1">Sample 1</option>
        <option value="Sample 2">Sample 2</option>
      </select>
    </div>
  );

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-gray-100 overflow-hidden">
      
      {/* Sidebar Filters (Desktop) */}
      <aside className="hidden md:block w-full md:w-1/5 h-screen bg-white p-4 overflow-y-auto border-r">
        <h2 className="font-semibold text-lg mb-4">Filters</h2>
        {filterFields.map(renderFilter)}
      </aside>

      {/* Toggle Button (Mobile) */}
      <div className="md:hidden p-4 bg-white border-b shadow-sm">
        <button
          onClick={() => setMobileFiltersVisible(!mobileFiltersVisible)}
          className="text-sm font-medium text-blue-600"
        >
          {mobileFiltersVisible ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      {/* Mobile Filters */}
      {mobileFiltersVisible && (
        <div className="md:hidden bg-white p-4 border-b">
          {filterFields.map(renderFilter)}
        </div>
      )}

      {/* Dashboard Content */}
      <main className="w-full md:w-4/5 p-4 overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

          {/* Full width chart (spans all columns) */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 bg-white rounded-xl p-4 shadow">
            <h3 className="font-semibold text-md mb-2">Intensity, Likelihood, and Relevance</h3>
            <div className="w-full h-full">
              <Intensity />
            </div>
          </div>

          {/* Year */}
          <div className="bg-white rounded-xl p-4 shadow flex flex-col">
            <h3 className="font-semibold mb-2">Year</h3>
            <div className="flex-1 flex items-center justify-center">
              <Year />
            </div>
          </div>

          {/* Country Map */}
          <div className="bg-white rounded-xl p-4 shadow flex flex-col">
            <h3 className="font-semibold mb-2">Country</h3>
            <WorldMap />
          </div>

          {/* Topics */}
          <div className="bg-white rounded-xl p-4 shadow flex flex-col">
            <Topics />
          </div>

          {/* Region */}
          <div className="bg-white rounded-xl p-4 shadow flex flex-col">
            <Region />
          </div>

          {/* City */}
          <div className="bg-white rounded-xl p-4 shadow flex flex-col sm:col-span-2">
            <div className="flex-1 flex items-center justify-center">
              <City />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Index;
