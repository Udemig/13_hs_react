import { useState, useEffect } from "react";
const FunctionComponent = () => {
  const [count, setCount] = useState(0);

  //  componentDidMount ==> Bir bileşenin ekrana gelmesi
  useEffect(() => {
    // ! Api istekleri
    console.log(`Function Component ekrana geldi ⚡️ `);
  }, []);

  // componentDidUpdate ==> Bir bileşenin güncellenmesi
  useEffect(() => {
    // ! Bir değerin güncellenmesi durumunda işlem yapmak için.Yeni bir kullanıcı kaydı olduğunda mail
    console.log(`Function Component güncellendi geldi ⚡️ `);
  }, [count]);

  // componentDidUnmount ==> Bir bileşenin ekrandan kaldırılması
  useEffect(() => {
    // ! Timer'ların sıfırlanması durumunda kullanılır
    return console.log(`Function Component ekrandan gitti ❌ `);
  }, []);
  return (
    <div className="my-5 border p-5">
      <h1 className="text-center">Function Counter</h1>
      <div className="d-flex align-items-center justify-content-center gap-2 mt-3">
        <button onClick={() => setCount(count + 1)} className="btn btn-success">
          +
        </button>
        <span className="fs-1">{count} </span>
        <button onClick={() => setCount(count - 1)} className="btn btn-danger">
          -
        </button>
      </div>
    </div>
  );
};

export default FunctionComponent;
