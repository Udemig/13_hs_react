import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useDispatch, useSelector } from "react-redux";
import { getIcon } from "../../utils/getIcon";
import { open } from "../../redux/slices/detailSlice";
import { useEffect } from "react";
import { getFlights } from "../../redux/actions";

const Map = () => {
  const dispatch = useDispatch();
  const { flights } = useSelector((store) => store.flights);
  const { info, route } = useSelector((store) => store.details);

  // Gerçek Zamanlı Veri Akışı
  // useEffect(() => {
  //   const id = setInterval(() => {
  //     dispatch(getFlights());
  //   }, 3000);

  //   return () => clearInterval(id);
  // }, []);

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

      {/* Kalkış yaptığı havalimanını işaretle */}
      {info?.airport?.origin?.position && (
        <Marker position={[info?.airport?.origin.position.latitude, info?.airport?.origin.position.longitude]}>
          <Popup>
            <div className="land-popup">
              <span className="title">Kalkış</span>
              <span>{info?.airport?.origin.name}</span>

              <div className="position">
                <span>{info?.airport?.origin.position.country.name}</span> /
                <span> {info?.airport?.origin.position.region.city}</span>
              </div>
            </div>
          </Popup>
        </Marker>
      )}

      {/* İniş yaptığı havalimanını işaretle */}
      {info?.airport?.destination?.position && (
        <Marker
          position={[info?.airport?.destination.position.latitude, info?.airport?.destination.position.longitude]}
        >
          <Popup>
            <div className="land-popup">
              <span className="title">İniş</span>
              <span>{info?.airport?.destination.name}</span>

              <div className="position">
                <span>{info?.airport?.destination.position.country.name}</span> /
                <span> {info?.airport?.destination.position.region.city}</span>
              </div>
            </div>
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default Map;
