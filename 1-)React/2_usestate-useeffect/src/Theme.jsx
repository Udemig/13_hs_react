import { useState } from "react";
const Theme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    /* todo: Eğer koyu mod aktif ise siyah arka plan değilse beyaz arka plan aktif edilsin */
    <div className="d-flex flex-column gap-4">
      <button
        onClick={() => setIsDarkTheme(!isDarkTheme)}
        className="btn btn-success w-25"
      >
        {isDarkTheme ? "Açık Mod" : "Koyu Mod"}
      </button>
      <div
        className={`p-2 text-center ${
          isDarkTheme ? "bg-dark" : "bg-light text-dark"
        }`}
      >
        <h1>Tema Örneği</h1>
      </div>
    </div>
  );
};

export default Theme;
