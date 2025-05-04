import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, reset } from "../redux/slices/counterSlice";

const Counter = () => {
  // store'a abone olma işlemi toolkitte aynı kalıyor
  const { count } = useSelector((store) => store.counterReducer);
  // aksiyon tetikleme de toolkitte aynı kalıyor
  const dispatch = useDispatch();

  return (
    <div className="vh-100 w-100 d-grid place-items-center">
      <div className="d-flex flex-column gap-5 align-items-center justify-content-center">
        <h2>Sayaç</h2>

        <div className="d-flex gap-4 align-items-center justify-content-center">
          <button disabled={count === 0} onClick={() => dispatch(decrease())}>
            Azalt
          </button>
          <span className="fs-1">{count}</span>
          <button onClick={() => dispatch(increase())}>Arttır</button>
          <button onClick={() => dispatch(reset(50))}>Sıfırla</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
