import { useState } from "react";
const NewCounter = () => {
  /* 
  Bu bileşen içerisinde dinamik bir şekilde counter değerini renderlamak istedik.Bunu için state kullandık.State kullanabilmek için ilk olarak react içerisinde useState hook'unu çağırdık.Sonrasında bu yapıyı bir diziye aktardık.Bu dizinin 1. elemanı state'in adı ikinci elemanı ise state'i güncelleyecek fonksiyonun adıdır.İsimlendirme yaparken istediğimiz şekilde isimlendirme yapabiliriz ama bu ismin tutulacak değer ile ilintili olmasında fayda vardır.
  
  
  */
  const [counter, setCounter] = useState(0);
  return (
    <>
      <h1 className="text-center mb-4">NewCounter</h1>
      <div className="d-flex align-items-center justify-content-center gap-3">
        <button
          onClick={() => setCounter(counter + 1)}
          className="btn btn-success btn-lg"
        >
          +
        </button>
        <span className="fs-1">{counter} </span>
        <button
          onClick={() => setCounter(counter - 1)}
          className="btn btn-danger btn-lg"
        >
          -
        </button>
      </div>
    </>
  );
};

export default NewCounter;
