"use client";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import { useState, useEffect } from "react";
import busIconUrl from "@/assets/bus_1.svg";
import coordinates from "@/components/co-ordinates/map_2.json";

const Map = () => {
  const [busData, setBusData] = useState([]);
  const [currentCoord, setCurrentCoord] = useState([]);
  const [coordinate, setCoordinate] = useState([]);
  const busRoutes = coordinates;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://sahaj-yatra-api.onrender.com/api/v1/bus"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch bus data");
        }
        const data = await response.json();
        console.log(data?.data);
        setBusData(data.data);
        const coords = data.data.map((bus) => [
          bus.currentLocation.latitude,
          bus.currentLocation.longitude,
        ]);
        setCoordinate(coords);
      } catch (error) {
        console.error("Error fetching bus data:", error);
      }
    };

    const intervalId = setInterval(fetchData, 5000); // Fetch data every 5 seconds
    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, [busData]);

  const handleDropdownChange = (event) => {
    const selectedIndex = parseInt(event.target.value);
    if (selectedIndex === -1) {
      setCurrentCoord([]);
    } else {
      setCurrentCoord(busRoutes.coordinates[selectedIndex]);
    }
  };

  return (
    <div>
      <MapContainer
        style={{
          height: "80vh",
          width: "80vw",
        }}
        center={[28.2599325, 83.963232]}
        zoom={17}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <div className="leaflet-top leaflet-right">
          <div className="leaflet-control">
            <select onChange={handleDropdownChange}>
              <option value={-1}>Select Route</option>
              {busRoutes.coordinates.map((_, index) => (
                <option key={index} value={index}>
                  Route {index + 1}
                </option>
              ))}
            </select>
          </div>
        </div>

        {currentCoord.length > 0 && (
          <Polyline
            positions={currentCoord}
            color="red"
            weight={10}
            opacity={0.4}
          />
        )}

        {coordinate.map((coords, index) => (
          <Marker
            key={index}
            position={coords}
            icon={
              new L.Icon({
                iconUrl: busIconUrl.src,
                iconRetinaUrl: busIconUrl.src,
                iconSize: [25, 41],
                iconAnchor: [12.5, 41],
                popupAnchor: [0, -41],
              })
            }
          >
            <Popup>
              <div>
                <p>{busData[index].busNumber}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
