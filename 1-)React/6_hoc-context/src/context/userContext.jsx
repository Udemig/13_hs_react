import React, { createContext } from "react";

// ! createContext sayesinde bir context oluşturulur.
const UserContext = createContext();
const UserProvider = ({ children }) => {
  const courseName = "Udemig";
  const students = ["Ali", "Altan", "Didem"];
  const adress = {
    city: "Malatya",
    country: "Türkiye",
    postCode: 44050,
  };
  const giveAlert = () => {
    alert("Dikaaatt");
  };
  return (
    // ! Context içerisindeki değelerin proje içerisinde kullanılabilmesi için Context üzerinden bir Provider oluşturulur.Bu provider'a value olarak context'in tuttuğu değerler verilir
    <UserContext.Provider value={{ courseName, adress, students, giveAlert }}>
      {/*  */}
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
