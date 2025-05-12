import c from "../../utils/nullCheck";
import t from "../../utils/formatDate";

const Time = ({ time }) => {
  return (
    <div className="time">
      <div>
        <span>Planlanan</span>
        <span>{c(t(time.scheduled?.departure))}</span>
      </div>
      <div>
        <span>Planlanan</span>
        <span>{c(t(time.scheduled?.arrival))}</span>
      </div>
      <div>
        <span>Gerçek.</span>
        <span>{c(t(time.real?.departure))}</span>
      </div>
      <div>
        <span>Tahmini</span>
        <span>{c(t(time.estimated?.arrival))}</span>
      </div>
    </div>
  );
};

export default Time;
