import c from "../../utils/nullCheck";

const Airport = ({ airport }) => {
  return (
    <div className="airport">
      <div>
        <h2>{c(airport.origin?.code?.iata)}</h2>
        <h3>{c(airport.origin?.position?.region?.city)}</h3>
        <span>
          {c(airport.origin?.timezone?.abbr)} <br />
          {c(airport.origin?.timezone?.name)}
        </span>
      </div>

      <div className="icon">
        <img src="/plane.svg" alt="plane" />
      </div>

      <div>
        <h2>{c(airport.destination?.code?.iata)}</h2>
        <h3>{c(airport.destination?.position?.region?.city)}</h3>
        <span>
          {c(airport.destination?.timezone?.abbr)} <br />
          {c(airport.destination?.timezone?.name)}
        </span>
      </div>
    </div>
  );
};

export default Airport;
