import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";



const INITIAL_MAP_CONFIG = { center: [10.984351, -60.869822], zoom: 8 };

function Map() {
  return (
    <MapContainer
      center={INITIAL_MAP_CONFIG.center}
      zoom={INITIAL_MAP_CONFIG.zoom}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}

export default Map;