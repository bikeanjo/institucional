import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import L from "leaflet";
import type { Map } from "leaflet";

interface LocalOrganization {
  id: string;
  name: string;
  state: string;
  region: string;
  instagram: string;
  facebook: string;
  location: string;
  date: string;
  time: string;
  registration: string;
  url: string;
  coords: [number, number];
}

interface MapInteractiveProps {
  localOrg: LocalOrganization[];
  selectedCoords: [number, number] | null;
  setSelectedCoords: React.Dispatch<
    React.SetStateAction<[number, number] | null>
  >;
}

function GoToCity({ coords }: { coords: [number, number] }) {
  const map: Map = useMap();

  useEffect(() => {
    map.setView(coords, 12);
  }, [coords, map]);

  return null;
}

const logoIcon = new L.Icon({
  iconUrl: "/assets/icons/logo-bike-anjo-verdanjo.svg",
  iconSize: [60, 60],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

function MarkerWithZoom({
  coords,
  children,
}: {
  coords: [number, number];
  children: React.ReactNode;
}) {
  const map: Map = useMap();

  const handleClick = () => {
    map.setView(coords, 12);
  };

  return (
    <Marker
      position={coords}
      icon={logoIcon}
      eventHandlers={{ click: handleClick }}
    >
      {children}
    </Marker>
  );
}

export default function MapInteractive({
  localOrg,
  selectedCoords,
}: MapInteractiveProps) {
  return (
    <MapContainer
      center={[-14.235, -51.9253]}
      zoom={4}
      style={{ height: "400px", width: "100%", borderRadius: "12px" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {localOrg.map((org) => (
        <MarkerWithZoom key={org.id} coords={org.coords}>
          <Popup>
            <strong>{org.name}</strong> <br />
            {org.name} - {org.state} <br />
            {org.location} <br />
            Instagram: {org.instagram} <br />
            Facebook: {org.facebook}
          </Popup>
        </MarkerWithZoom>
      ))}

      {selectedCoords && <GoToCity coords={selectedCoords} />}
    </MapContainer>
  );
}
