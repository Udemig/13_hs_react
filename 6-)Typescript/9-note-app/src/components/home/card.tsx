import type { FC } from "react";
import type { Note } from "../../types";
import { Link } from "react-router-dom";

interface Props {
  note: Note;
}

const Card: FC<Props> = ({ note }) => {
  // Not içeriği
  const content =
    note.content.length > 100
      ? `${note.content.slice(0, 100)}...`
      : note.content;

  return (
    <Link
      to={`/detail/${note.id}`}
      className="card group p-5 flex flex-col animate-fade-in transform hover:scale-[1.02] transition"
    >
      {/* Başlık */}
      <h3 className="mb-3 text-lg font-bold text-text-primary group-hover:text-primary transition line-clamp-1">
        {note.title}
      </h3>

      {/* İçerik */}
      <p className="text-text-secondary text-sm mb-4 flex-grow">{content}</p>

      {/* Etiketler */}
      {note.tags?.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto pt-2 border-t border-border">
          {note.tags.map((tag, i) => (
            <span
              key={i}
              className="bg-primary text-text-primaryt text-xs py-0.5 px-2 mt-2 rounded-full inline-flex items-center transition hover:bg-opacity-20"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
};

export default Card;
