import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../redux/actions";
import Head from "./head";
import Loader from "../loader";
import Error from "../error";
import Gallery from "./gallery";
import Airport from "./airport";
import Time from "./time";
import Aircraft from "./aircraft";

const Modal = () => {
  const dispatch = useDispatch();
  const { flightId, info, isLoading, error } = useSelector((store) => store.details);

  useEffect(() => {
    if (!flightId) return;
    dispatch(getDetails(flightId));
  }, [flightId]);

  return (
    flightId && (
      <div className="detail-modal">
        <div className="modal-inner">
          <Head info={info} />

          {isLoading ? (
            <Loader />
          ) : error ? (
            <Error message={error} />
          ) : (
            info && (
              <div className="info-wrapper">
                <div className="info-box">
                  <div>
                    <Gallery images={info.aircraft.images} />
                    <Airport airport={info.airport} />
                    <Time time={info.time} />
                  </div>

                  <Aircraft aircraft={info.aircraft} />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    )
  );
};

export default Modal;
