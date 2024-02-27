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
import coordinates from "@/app/co-ordinates/map_2.json";
import busIconUrl from "@/assets/bus_1.svg";

const Map = () => {
  const [coord, setCoord] = useState([
    [28.261501948498378, 83.97219108030293],
    [28.192351839123205, 84.02524121244574],
  ]);
  const [passenger_no, setPassenger_no] = useState([]);
  const [currentCoord, setCurrentCoord] = useState([]);
  const busRoutes = coordinates;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/map");
        if (!response.ok) {
          throw new Error("Failed to fetch coordinates");
        }
        const data = await response.json();
        if (
          Array.isArray(data.coordinates) &&
          data.coordinates.length > 0 &&
          Array.isArray(data.coordinates[0]) &&
          data.coordinates[0].length === 2
        ) {
          setCoord(data.coordinates);
          setPassenger_no(data.passengers);
        } else {
          throw new Error("Invalid coordinates format in API response");
        }
      } catch (error) {
        console.error("Error fetching coordinates:", error);
      }
    };

    const intervalId = setInterval(fetchData, 5000); // Fetch data every 5 seconds

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, []);

  const handleRouteChange = (RouteIndex) => {
    if (typeof window !== "undefined") {
      console.log(busRoutes.coordinates);
      setCurrentCoord(busRoutes.coordinates[RouteIndex]); // Route 1 selected
    }
  };

  return (
    <div>
      {busRoutes.coordinates.map((_, index) => (
        <button key={index} onClick={() => handleRouteChange(index)}>
          Route {index + 1}
        </button>
      ))}

      <MapContainer
        style={{
          height: "60vh",
          width: "100vw",
        }}
        center={coord[0]}
        zoom={17}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {currentCoord.length > 0 && (
          <Polyline
            positions={currentCoord}
            color="red"
            weight={10}
            opacity={0.4}
          />
        )}
        <Marker
          icon={
            new L.Icon({
              iconUrl: busIconUrl.src,
              iconRetinaUrl: busIconUrl.src,
              iconSize: [25, 41],
              iconAnchor: [12.5, 41],
              popupAnchor: [0, -41],
            })
          }
          position={coord[0]}
        >
          <Popup>
            <div>
              <p>Bus ID: G AA 0000</p>
              <p>Number of Passengers: {passenger_no[0]}</p>
            </div>
          </Popup>
        </Marker>
        <Marker
          icon={
            new L.Icon({
              iconUrl: busIconUrl.src,
              iconRetinaUrl: busIconUrl.src,
              iconSize: [25, 41],
              iconAnchor: [12.5, 41],
              popupAnchor: [0, -41],
            })
          }
          position={coord[1]}
        >
          <Popup>
            <div>
              <p>Bus ID: G AA 9876</p>
              <p>Number of Passengers: {passenger_no[1]}</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
