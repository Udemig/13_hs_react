import Header from "./Header/header";
import Card from "./Card/card";
import Form from "./Form/form";
import { v4 } from "uuid";
function App() {
  // Bileşen içerisinde javascript kodlaması yapılacaksa bunu return satırı dışarında bileşen içerisinde yaparız.
  const alertFunction = () => {
    alert("Uyarı butonuna tıklandı");
  };

  const courseName = "Udemig";
  // Return satırı bir bileşenin arayüzde render edeceği content'i belirler.Bu kısımda Html kodlaması yapılır.

  console.log(v4());

  return (
    <div className="app">
      <Header />
      <Header />

      <button onClick={alertFunction} className="alert-btn">
        Uyarı Ver
      </button>

      <h1>
        Selamlar,{courseName} akademide geleceğin başarılı yazılımcılarını
        yetiştiriyoruz.
      </h1>

      <div className="card-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <div className="field">
        <label htmlFor="name">İsim</label>
        <input type="text" id="name" />
      </div>

      <img src="https://picsum.photos/201" alt="" />

      <Form />
    </div>
  );
}

export default App;
