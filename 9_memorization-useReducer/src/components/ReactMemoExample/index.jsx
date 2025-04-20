import React, { useCallback, useState } from "react";
import Count from "../Count";

const ReactMemoExample = () => {
  const [studentName, setStudentName] = useState("Dilek");
  console.log("⚡️ ReactMemoExample Bileşeninden Selamlar");

  /*
  * Bu örnekte studentName state'i her değiştiğinde ReactMemoExample bileşeni tekrardan render edilir.Count bileşenide ReactMemoExample içerisinde bulunduğunda Count'da render edilir.Bu durumda Count bileşeni gereksiz render edilmiş olur.Bunu engellemek içinse Count bileşeni export ile dosya dışarısına çıkalırken React.memo() ile sarmalanır.
  
  
  */

  const giveAlert = useCallback(() => {
    alert("Dikatttt");
  }, []);
  return (
    <div className="d-flex align-items-center flex-column ">
      <h1 className="mb-5">ReactMemoExample</h1>
      <h1>Öğrenci Adı: {studentName}</h1>
      <input
        onChange={(e) => setStudentName(e.target.value)}
        type="text"
        className="form-control mb-5"
      />
      <Count giveAlert={giveAlert} />
    </div>
  );
};

export default ReactMemoExample;
