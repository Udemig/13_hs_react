import type { FC } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import NotFound from "../../components/detail/not-found";
import { MoveLeft, Pencil, Trash } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { deleteNote } from "../../redux/slices/noteSlice";
import { toast } from "react-toastify";

const Detail: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // url'deki id'yi al
  const { id } = useParams<{ id: string }>();

  // store'daki notları al
  const { notes } = useAppSelector((store) => store.notes);

  // url'deki id ile eşleşen notu al
  const note = notes.find((note) => note.id === id);

  // notu silme fonksiyonu:
  const handleDeleteNote = () => {
    if (note) {
      if (confirm("Notu silmek istediğinize emin misiniz?")) {
        dispatch(deleteNote(note.id));
        toast.success("Not başarıyla silindi.");
        navigate("/");
      }
    }
  };

  // eğer not bulunamadıysa:
  if (!note) return <NotFound />;

  return (
    <div className="flex flex-col gap-6">
      {/* Üst Bilgi */}
      <div className="flex flex-row justify-between sm:items-center gap-4 animate-fade-in">
        <div className="flex items-center">
          <Link
            to={"/"}
            className="p-2 rounded-full text-text-secondary hover:text-text-primary hover:bg-background transition"
          >
            <MoveLeft />
          </Link>
          <h1 className="text-2xl font-bold text-text-primary">Not Detayı</h1>
        </div>

        <div className="flex gap-3">
          <Link
            to={`/edit/${id}`}
            className="inline-flex items-center justify-center px-4 py-2 bg-primary hover:bg-primary-hover text-white rounded-md shadow-sm transition"
          >
            <Pencil className="size-4 mr-1.5" />
            Düzenle
          </Link>

          <button
            onClick={handleDeleteNote}
            className="inline-flex items-center justify-center px-4 py-2 bg-error hover:bg-error/90 text-white rounded-md shadow-sm transition"
          >
            <Trash className="size-4 mr-1.5" />
            Sil
          </button>
        </div>
      </div>

      {/* Not İçeriği */}
      <div className="card p-6 sm:p-8 animate-slide-up">
        {/* Başlık */}
        <h1 className="text-3xl font-bold mb-6 text-text-primary">
          {note.title}
        </h1>

        {/* Etiketler */}
        {note.tags.map((tag, index) => (
          <div
            key={index}
            className="bg-primary text-white inline-flex rounded-full text-sm py-1 px-3 me-3"
          >
            {tag}
          </div>
        ))}

        {/* İçerik */}
        <div className="prose border-t border-border pt-6 mt-6">
          <ReactMarkdown>{note.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default Detail;
