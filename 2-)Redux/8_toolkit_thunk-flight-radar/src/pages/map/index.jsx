import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useDispatch, useSelector } from "react-redux";
import { getIcon } from "../../utils/getIcon";
import { open } from "../../redux/slices/detailSlice";

const Map = () => {
  const dispatch = useDispatch();
  const { flights } = useSelector((store) => store.flights);
  const { info, route } = useSelector((store) => store.details);

  return (
    <MapContainer center={[38.924182, 35.41414]} zoom={6} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {flights.map((flight, key) => (
        <Marker
          key={key}
          position={[flight.lat, flight.lon]}
          icon={getIcon(flight.track, info?.identification?.id === flight?.flightid, info?.identification?.id)}
        >
          <Popup>
            <div className="popup">
              <span>Kod: {flight.callsign}</span>
              <button onClick={() => dispatch(open(flight.flightid))}>Detay</button>
            </div>
          </Popup>
        </Marker>
      ))}

      {/* Uçağın Rotasını Çiz */}
      {route.length > 0 && <Polyline positions={route} pathOptions={{ color: "red" }} />}
    </MapContainer>
  );
};

export default Map;
