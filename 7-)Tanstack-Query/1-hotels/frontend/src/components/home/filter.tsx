import type { FC } from "react";
import { usePlaces } from "../../service";
import { SORT_OPTIONS } from "../../utils/constants";
import { useSearchParams } from "react-router-dom";

const Filter: FC = () => {
  const { data } = usePlaces();
  const [searchParams, setSearchParams] = useSearchParams();

  // inputtaki değeri url'e parametre olarak ekle
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    searchParams.set(name, value);
    setSearchParams(searchParams);
  };

  // inptuları ve url'i temizle
  const handleReset = () => {
    setSearchParams({});
  };

  // otellerin konum değerlerinden oluşan benzersiz bir dizi oluştur
  const locations = [...new Set(data?.map((i) => i.location))];

  return (
    <form
      onReset={handleReset}
      className="flex flex-col gap-4 lg:gap-10 lg:mt-15 lg:sticky lg:top-10"
    >
      <div className="field">
        <label>Nereye gitmek istiyorsunuz?</label>
        <select name="location" className="input" onChange={handleChange}>
          <option value="">Seçiniz</option>
          {locations.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label>Konaklama yeri adına göre ara</label>
        <input
          name="title"
          type="text"
          className="input"
          placeholder="örn:Seaside Villa"
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label>Sıralama ölçütü</label>

        <select name="order" className="input" onChange={handleChange}>
          <option value="">Seçiniz</option>
          {SORT_OPTIONS.map((i) => (
            <option key={i.value} value={i.value}>
              {i.label}
            </option>
          ))}
        </select>
      </div>

      <button
        type="reset"
        className="bg-blue-500 hover:bg-blue-600 transition text-white mt-3 p-1 cursor-pointer rounded-md"
      >
        Filtreleleri Temizle
      </button>
    </form>
  );
};

export default Filter;
