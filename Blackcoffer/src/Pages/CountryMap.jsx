import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const position = [20, 78]; // Center of India (change as needed)

const CountryMap = () => {
  return (
    <div className="w-full h-full">
      <MapContainer center={position} zoom={4} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={L.icon({ iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png" })}>
          <Popup>
            Central Marker <br /> You can add more markers dynamically.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default CountryMap;
