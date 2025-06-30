import { useState, type FC, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";

const Year: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [year, setYear] = useState<string | null>(
    searchParams.get("year") || null
  );

  // form gönderilince
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (year) {
      searchParams.set("year", year); // yıl parametresini ekle
    } else {
      searchParams.delete("year"); // yıl parametresini sil
    }

    setSearchParams(searchParams); // url'i güncelle
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <label className="text-white font-semibold mb-2 text-sm">Yıl</label>

      <div className="flex items-center">
        <input
          type="number"
          name="year"
          placeholder="örn: 2025"
          className="w-32 h-[52px] px-4 glass-efect rounded-l-2xl border border-white/20 text-white placeholder-grey-light outline-none focus:border-primary-blue/50 focus:bg-white/10 transition-all duration-300"
          onChange={(e) => setYear(e.target.value)}
          value={year || ""}
        />

        <button
          type="submit"
          className="h-[52px] px-4 glass-efect border-l-0 rounded-r-2xl border border-white/20 text-white placeholder-grey-light outline-none focus:border-primary-blue/50 focus:bg-white/10 transition-all duration-300 cursor-pointer hover:bg-primary-blue/20 hover:scale-105"
        >
          <img src="/search.svg" className="size-5 invert" />
        </button>
      </div>
    </form>
  );
};

export default Year;
