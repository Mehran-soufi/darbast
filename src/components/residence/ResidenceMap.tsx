"use client";

import React from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import L, { LatLngExpression } from "leaflet";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

function ResidenceMap() {
  const position: LatLngExpression = [35.6892, 51.389]; // مختصات تهران

  const customIcon = L.icon({
    iconUrl: "/map/PdpMapMarker.webp", // مسیر تصویر آیکون (آن را در فولدر public قرار دهید)
    iconSize: [100, 100], // اندازه آیکون (عرض، ارتفاع)
    iconAnchor: [19, 38], // نقطه لنگر آیکون
    popupAnchor: [0, -38], // مکان نمایش پاپ‌آپ نسبت به آیکون
  });

  return (
    <div className="w-full p-2 border-b border-gray-300">
      <div className="w-full py-2">
        <p className="font-bold">موقعیت تقریبی اقامتگاه:</p>
        <span>
          آدرس و موقعیت دقیق اقامتگاه، پس از رزرو برای شما ارسال خواهد شد.
        </span>
      </div>
      <div className="w-full flex items-center justify-center">
        <MapContainer
          center={position}
          zoom={13}
          className="w-full h-[50vh] rounded-xl"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position} icon={customIcon}>
            <Popup>این نقطه مارک شده است!</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default ResidenceMap;
