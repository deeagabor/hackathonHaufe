import styles from "./Map.module.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Map() {
  const position = [51.505, -0.09];

  return (
    <div className={styles.map}>
      <MapContainer zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>A sample marker with a popup.</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
