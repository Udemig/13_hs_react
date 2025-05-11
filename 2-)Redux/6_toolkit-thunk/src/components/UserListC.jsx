import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setError, setLoading, setUsers } from "../redux/slices/classicSlice";

const UserListC = () => {
  const { isLoading, error, users } = useSelector((store) => store.classicReducer);

  // dispatch kurulum
  const dispatch = useDispatch();

  useEffect(() => {
    // yüklemenin başladığını reducer'a haber ver
    dispatch(setLoading());

    // api isteği at
    axios
      .get("https://dummyjson.com/users")
      // veri geldiğini reducer'a haber ver
      .then((res) => dispatch(setUsers(res.data.users)))
      // hata geldiğini reducer'a haber ver
      .catch((err) => dispatch(setError(err.message)));
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Yükleniyor...</p>
      ) : error ? (
        <p>Bir Hata Oluştu</p>
      ) : (
        users?.map((user) => (
          <div>
            <img src={user.image} width={100} height={100} />
            <h1>{user.firstName + " " + user.lastName}</h1>
          </div>
        ))
      )}
    </div>
  );
};

export default UserListC;
