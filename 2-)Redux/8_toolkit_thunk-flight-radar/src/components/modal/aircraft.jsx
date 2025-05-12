import { IoAirplaneOutline } from "react-icons/io5";
import c from "../../utils/nullCheck";

const Aircraft = ({ aircraft }) => {
  return (
    <div className="aircraft">
      <div className="icon">
        <IoAirplaneOutline />
      </div>

      <div>
        <p>
          <span className="title">Uçak Tipi</span>
          <span>{c(aircraft?.model?.text)}</span>
        </p>

        <div>
          <p>
            <span className="title">Kuyruk Kodu</span>
            <span>{c(aircraft?.registration)}</span>
          </p>
          <p>
            <span className="title">Ülke Id</span>
            <span>{c(aircraft?.countryId)}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aircraft;
