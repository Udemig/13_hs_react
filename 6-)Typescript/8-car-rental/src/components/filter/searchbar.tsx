import { useMemo, useState, type FC, type FormEvent } from "react";
import ReactSelect from "react-select";
import { selectStyles, makes } from "../../utils/consants";
import { useSearchParams } from "react-router-dom";

const Searchbar: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [make, setMake] = useState<string | null>(searchParams.get("make") || null);
  const [model, setModel] = useState<string | null>(searchParams.get("model") || null);

  // markalar dizisini react-select'in istediği formata çevir:
  // useMemo ile yapıyoruz çünkü component her render olduğunda dizinin yeniden oluşturmasını önlüyoruz
  const options = useMemo(() => makes.map((make) => ({ value: make, label: make })), []);

  // form gönderilince
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (make) {
      searchParams.set("make", make);
    } else {
      searchParams.delete("make");
    }

    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    setSearchParams(searchParams);
  };

  return (
    <form onSubmit={handleSubmit} className="searchbar flex gap-4 items-end justify-center">
      {/* Marka */}
      <div className="searchbar-item items-end">
        <div className="w-full flex flex-col">
          <label htmlFor="make" className="text-white font-semibold mb-2 text-sm">
            Marka
          </label>

          <ReactSelect
            value={make ? { value: make, label: make } : null}
            options={options}
            inputId="make"
            placeholder="Marka Seçiniz"
            isSearchable={true}
            className="w-full min-w-[200px] z-2"
            styles={selectStyles}
            onChange={(option) => setMake(option?.value as string)}
          />
        </div>

        <button
          name="ara"
          className="ml-4 sm:hidden p-2 glass-effect rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer"
        >
          <img src="/search.svg" className="size-6 invert" alt="ara" />
        </button>
      </div>

      {/* Model */}
      <div className="searchbar-item items-start flex flex-col">
        <label className="text-white font-semibold mb-2 text-sm">Model</label>

        <div className="w-full flex items-center">
          <div className="relative flex-1">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-1">
              <img src="/model-icon.png" className="size-6" alt="gri araba ön tarafı" />
            </div>
            <input
              type="text"
              className="searchbar-input w-full"
              placeholder="Model Yazınız.."
              onChange={(e) => setModel(e.target.value)}
              value={model || ""}
            />
          </div>

          <button
            name="ara"
            className="ml-4  p-2 glass-effect rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <img src="/search.svg" className="size-6 invert" alt="ara" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default Searchbar;
