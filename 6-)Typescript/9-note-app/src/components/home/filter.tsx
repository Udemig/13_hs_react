import { Search } from "lucide-react";
import { useEffect, useState, type FC } from "react";
import ReactSelect from "react-select";
import { selectStyles } from "../../utils/constants";
import type { Note } from "../../types";

interface Props {
  notes: Note[];
  title: string;
  selectedTags: string[];
  setTitle: (title: string) => void;
  setSelectedTags: (tags: string[]) => void;
}

const Filter: FC<Props> = ({
  notes,
  title,
  selectedTags,
  setTitle,
  setSelectedTags,
}) => {
  const [availableTags, setAvailableTags] = useState<string[]>([]);

  // tüm notların etiketlerini çıkart
  useEffect(() => {
    setAvailableTags([...new Set(notes.map((note) => note.tags).flat())]);
  }, [notes]);

  return (
    <div className="card mb-8 p-5">
      <div className="flex flex-col md:flex-row gap-4 items-start">
        {/* Arama Inputu */}
        <div className="flex-grow w-full md:w-auto">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-text-secondary">
              <Search className="size-5" />
            </div>

            <input
              type="text"
              placeholder="Notları ara..."
              className="pl-10 pr-4 py-2.5 w-full rounded-md border border-border text-text-primary bg-card placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-primary transition"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>

        {/* Etiket Seçici */}
        <div className="w-full md:w-1/2">
          <ReactSelect
            isMulti
            styles={selectStyles}
            placeholder="Etiket seçin..."
            options={availableTags.map((t) => ({ label: t, value: t }))}
            value={selectedTags.map((t) => ({ label: t, value: t }))}
            onChange={(tags) => setSelectedTags(tags?.map((t) => t.value))}
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
