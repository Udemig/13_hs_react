/*
* useRef react'da bir elemana referans ile ulaşmak için kullanılır.

* useRef kullanılırken:
1. React içerisinden useRef'i import ederiz.
2. useRef hook'unu çağırıp bunun bir referansını oluştururuz.
3. Erişilmek istenen elemana ref attribute'ü ile elde edilen referans verilir.


*/

import { useRef } from "react";

const UseRef = () => {
  const handleFocus = () => {
    // Input'a focusla
    inputRef.current.focus();

    console.log(inputRef.current.value);
  };
  // useRef kullanarak bir referans oluştur.
  const inputRef = useRef();

  return (
    <div>
      <h1 className="text-center">USE REF EXAMPLE</h1>
      <div className="d-flex align-items-center gap-3">
        {/* useRef ile erişilmek istenen elemanın ref attribute'üne oluşturulan referansı ver */}
        <input ref={inputRef} type="text" className="form-control" />
        <button
          onClick={() => handleFocus()}
          className="btn btn-primary fs-6 text-nowrap btn-sm px-4 py-2"
        >
          Input'a Odaklan
        </button>
      </div>
    </div>
  );
};

export default UseRef;
