// State,Koşullu Renderlama,Çoklu Renderlama ve Props Örnekleri yapıldı

import ClassicCounter from "./ClassicCounter";
import NewCounter from "./NewCounter";
import Accordion from "./Accordion";
import Theme from "./Theme";
import UserCard from "./UserCard";
import { useState } from "react";
import users from "./contant.js";
function App() {
  const [isAdmin, setIsAdmin] = useState(true);
  const [isAvaiable, setIsAvaiable] = useState(false);

  /*
  
  ! Burada <h1>Admin Girişi</h1> ve <h1>Kullancı Girişi</h1> elemanlarını bir koşula göre ekranda render ettik.Eğer isAdmin değeri true ise <h1>Admin Girişi</h1> değilse ise <h1>Kullanıcı Girişi</h1> render edilecek.Bu yetkinliği ise Ternary Operatör ile elde ettik.

  
  */

  return (
    <div className="app">
      <div className="container my-4">
        <button
          onClick={() => setIsAdmin(!isAdmin)}
          className="btn btn-dark mb-4"
        >
          {/* Eğer admin ise Admin Girişi değilse Kullanıcı Girişi Yazdır */}
          {isAdmin ? "Kullanıcı Girişi" : "Admin Girişi"}
        </button>

        {/* isAdmin değeri true ise [bir boolean değerin true olma durumu için =true denmesi gerekmez. ] Admin Girişi değilse  Kullanıcı Girişi*/}

        <div className="mb-5">
          {isAdmin ? <h1>Admin Girişi</h1> : <h1>Kullanıcı Girişi</h1>}
        </div>

        {/* Eğer isAvaiable ise Müsait yazdır */}

        <div className="mb-5">{isAvaiable && <h1>Müsait</h1>}</div>

        {/* Counter örneği */}

        <ClassicCounter />

        {/* State ile counter örneği */}

        <NewCounter />

        {/* Accordion Örneği */}
        <Accordion />

        {/* Theme Örneği */}
        <Theme />

        {/* Props Örneği */}
        <div className="container card-container my-5">
          <UserCard
            name="Rümeysa"
            surname="Baysal"
            age={35}
            adress={{ city: "İstanbul", cityNo: 34 }}
            hobbies={["Yazılım", "Müzik"]}
            info={function () {
              alert("Udemig Akademiden Selamlar");
            }}
          />
          <UserCard
            name="Abdullah"
            surname="Aydın"
            age={30}
            adress={{ city: "Ankara", cityNo: 6 }}
            hobbies={["Yazılım", "Spor"]}
            info={function () {
              alert("Udemig Akademiden Selamlar");
            }}
          />
          <UserCard
            name="Didem"
            surname="Gedik"
            age={20}
            adress={{ city: "Konya", cityNo: 42 }}
            hobbies={["Yazılım", "Resim"]}
            info={function () {
              alert("Udemig Akademiden Selamlar");
            }}
          />
          <UserCard
            name="Enes"
            surname="Arısoy"
            age={40}
            adress={{ city: "İzmir", cityNo: 35 }}
            hobbies={["Yazılım", "Yüzme"]}
            info={function () {
              alert("Udemig Akademiden Selamlar");
            }}
          />
          <UserCard
            name="Evrim"
            surname="Çay"
            age={25}
            adress={{ city: "Malatya", cityNo: 44 }}
            hobbies={["Yazılım", "Seyehat"]}
            info={function () {
              alert("Udemig Akademiden Selamlar");
            }}
          />
        </div>

        {/* Yukarıdaki gibi birden fazla kullanıcı için UserCard renderlamak için UserCard'ları tek tek yazmak yerine bunları çoklu renderladık.Bu sayede ilgili renderlama işlemini çok daha kolay bir şekilde oluşturduk. */}

        {/* Çoklu Renderlama Örneği */}
        <h1 className="my-5 text-center ">Çoklu Renderlama</h1>
        <div className="container card-container my-5">
          {users.map((user) => (
            <UserCard
              key={user.id}
              name={user.name}
              surname={user.surname}
              age={user.age}
              adress={user.adress}
              hobbies={user.hobbies}
              info={function () {
                alert("Udemig Akademiden Selamlar");
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
