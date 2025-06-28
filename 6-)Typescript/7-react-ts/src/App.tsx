import { useRef, useState } from "react";
import { Button } from "./components/button";
import Form from "./components/form";

const App = () => {
  // state tanımlarken state'de tutulan verinin tipini generic ile tanımlamalıyız
  const [count, setCount] = useState<number>(0);

  // ref tanımlaken referansı tutulacak elementini tipini generic ile tanımlarız
  const ref = useRef<HTMLButtonElement>(null);

  // getElement methodları ile element seçilirse as operatörü ile element tipini belirleriz
  const inputEle = document.getElementById("search") as HTMLInputElement;

  console.log(inputEle.value);

  return (
    <div>
      <Form />

      <Button text="Merhaba" />

      <input id="search" type="text" />

      <button ref={ref}>Yenile</button>

      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default App;
