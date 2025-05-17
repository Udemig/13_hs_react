import { useDispatch, useSelector } from "react-redux";
import c from "../../utils/nullCheck";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import { open } from "../../redux/slices/detailSlice";
import { mockArr } from "../../utils/constants";

const List = () => {
  // dispatch kurulum
  const dispatch = useDispatch();

  // uçuş verilerini reducerdan al
  const { isLoading, error, flights } = useSelector((store) => store.flights);

  // kaçıncı elemandan itibaren gösterilecek
  const [start, setStart] = useState(0);

  // sayfa başına eleman sayısı
  const perPage = 12;

  // kaçıncı elemana kadar gösterilecek
  const end = start + perPage;

  // slice methodu ile ekrana basılacak aralıktaki elemanları al
  const currentFlights = flights.slice(start, end);

  // yeni sayfa seçilince çalışıcak fonksiyon
  const handleChange = (e) => {
    setStart(e.selected * 12);
  };

  return (
    <div className="list-container">
      <table class="table table-hover table-responsive">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Kod</th>
            <th scope="col">Enlem</th>
            <th scope="col">Boylam</th>
            <th scope="col">Derece</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {isLoading
            ? mockArr.map((_, i) => (
                <tr key={i}>
                  <td className="text-white">.</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              ))
            : currentFlights.map((flight, key) => (
                <tr key={key}>
                  <th scope="row">{c(flight.flightid)}</th>
                  <td>{c(flight.callsign)}</td>
                  <td>{c(flight.lat)}</td>
                  <td>{c(flight.lon)}</td>
                  <td>{c(flight.track)}</td>
                  <td>
                    <button onClick={() => dispatch(open(flight.flightid))}>Detay</button>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>

      <div className="d-flex justify-content-center">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handleChange}
          pageRangeDisplayed={5}
          pageCount={Math.ceil(flights.length / perPage)}
          previousLabel="<"
          renderOnZeroPageCount={null}
          className="pagination"
          pageClassName="page-item"
          nextClassName="page-item"
          previousClassName="page-item"
          pageLinkClassName="page-link"
          nextLinkClassName="page-link"
          previousLinkClassName="page-link"
          activeClassName="active"
        />
      </div>
    </div>
  );
};

export default List;
