import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/slices/updatedSlice";

const UserListU = () => {
  const { isLoading, error, users } = useSelector((store) => store.updatedReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    // thunk aksiyonunu tetikle
    dispatch(getUsers());
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

export default UserListU;
