import React from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  // useSearchParams kurulumu
  const [searchParams, setSearchParams] = useSearchParams();
  // Form gönderildiğinde çalışacak fonksiyon
  const handleSubmit = (e) => {
    // Sayfa yenilemeyi engelle
    e.preventDefault();
    // Input'daki değere eriş
    const text = e.target[0].value;

    // Url'e geçilecek parametreyi ayarla
    searchParams.set("search", text);

    // Hazırlanan parametreyi url'e geç
    setSearchParams(searchParams);
  };

  // Select alanında bir değişim olduğunda çalışacak fonksiyon
  const handleChange = (e) => {
    // Select alanındaki değere eriş
    const value = e.target.value;

    // Select alanında elde edilen değeri url'e geçilecek parametre olarak ayarla
    searchParams.set("sort", value);

    // Hazırlanan parametreyi url'e geç
    setSearchParams(searchParams);
  };
  return (
    <div>
      <div className="d-flex justify-content-between mt-4">
        {/* Select */}
        <select onChange={handleChange} className="form-select w-25">
          <option selected disabled>
            Sırala
          </option>
          <option value="a-z">a-z</option>
          <option value="z-a">z-a</option>
        </select>

        {/* Form */}

        <form onSubmit={handleSubmit} className="d-flex gap-2">
          <input
            type="search"
            placeholder="kitap ismi giriniz ..."
            className="form-control"
          />

          <button className="btn btn-primary">Ara</button>
        </form>
      </div>
    </div>
  );
};

export default Filter;
