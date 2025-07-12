import type { FC } from "react";
import type { Note } from "../../types";

interface Props {
  notes: Note[];
  filteredNotes: Note[];
}

const Total: FC<Props> = ({ notes, filteredNotes }) => {
  return (
    notes.length > 0 && (
      <div className="mt-6 text-text-secondary text-sm flex justify-between items-center">
        <div>
          <span className="text-text-primary">{filteredNotes.length} </span>
          not gösteriliyor toplam ({" "}
          <span className="text-text-primary">{notes.length}</span> )
        </div>
      </div>
    )
  );
};

export default Total;
