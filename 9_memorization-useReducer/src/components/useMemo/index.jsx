import React, { useMemo, useState } from "react";

const UseMemoExample = () => {
  const [count, setCount] = useState(0);
  /*
   Bir react bileşeni her render olduğunda içerisindeki fonksiyonlarda tekrardan çalışır.VeBu durum eğer ilgili fonksiyonlar kapsamlı birer işlem yapıyorsa uygulamaya aşırı yük binmesi ve performans sorunlarına sebep olur.  
   
   Performans sorununun önüne geçmek ve kapsam hesaplamalarıda yapabilmek için react içerisinde bulunan useMemo hook'u kullanılır.Bu hook sayesinde hesaplama sonucunda elde edilen değer cache'de tutulur ve tekrar tekrar hesaplamaya gerek kalmaz.Eğer hesaplama sonucu değişirsede bu durumda hesaplamayı tekrardan yapar.


   * Bir react bileşeni içerisindeki state'in güncellenmesi durumunda bileşen tekrar render edilir.
           
           */
  const newArray = useMemo(() => {
    const array = new Array(10000).fill("Udemig");

    return array.map((item) => item + "Akademide Selamlar");
  });

  console.log("UseMemoExample'dan selam");

  return (
    <div className="d-flex flex-column align-items-center gap-3">
      <h1>UseMemoExample</h1>

      <div className="d-flex gap-4 items-center">
        <button onClick={() => setCount(count - 1)} className="btn btn-danger">
          -
        </button>
        <span className="fs-2">{count}</span>
        <button onClick={() => setCount(count + 1)} className="btn btn-success">
          +
        </button>
      </div>
    </div>
  );
};

export default UseMemoExample;
