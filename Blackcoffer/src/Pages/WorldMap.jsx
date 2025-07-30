import React from "react";
import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import { colorScale, countries, missingCountries } from "./Countries";

const WorldMap = () => {
  return (
    <div className="w-full h-[300px] sm:h-[400px]">
      <VectorMap
        map={worldMill}
        backgroundColor="#1e1e2f"
        containerStyle={{
          width: "100%",
          height: "100%",
        }}
        markers={missingCountries}
        markerStyle={{
          initial: {
            fill: "red",
          },
        }}
        series={{
          regions: [
            {
              scale: colorScale,
              values: countries,
              min: 0,
              max: 100,
            },
          ],
        }}
        onRegionTipShow={function (e, el, code) {
          el.html(`
            <div style="background-color: black; border-radius: 6px; min-height: 50px; width: 125px; color: white; padding-left: 10px">
              <p><b>${el.html()}</b></p>
              <p>${countries[code]}</p>
            </div>`);
        }}
        onMarkerTipShow={function (e, el) {
          el.html(`
            <div style="background-color: white; border-radius: 6px; min-height: 50px; width: 125px; color: black; padding-left: 10px">
              <p style="color: black;"><b>${el.html()}</b></p>
            </div>`);
        }}
      />
    </div>
  );
};

export default WorldMap;
