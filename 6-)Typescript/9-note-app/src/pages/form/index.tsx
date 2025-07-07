import { useEffect, useState, type FC, type FormEvent } from "react";
import { Eye, Edit, X, Check } from "lucide-react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import "../../assets/markdown.css";
import { mdOptions } from "../../utils/constants";
import ReactMarkdown from "react-markdown";
import ReactSelect from "react-select/creatable";
import { selectStyles } from "../../utils/constants";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { createNote } from "../../redux/slices/noteSlice";
import { toast } from "react-toastify";

const Form: FC = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [availableTags, setAvailableTags] = useState<string[]>([]);
  const [isPreview, setIsPreview] = useState<boolean>(false);
  const { notes } = useAppSelector((state) => state.notes);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // tüm notların etiketlerini çıkart
  useEffect(() => {
    setAvailableTags([...new Set(notes.map((note) => note.tags).flat())]);
  }, [notes]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // store'a yeni not ekleme aksiyonunu dispatch et
    dispatch(createNote(title, content, selectedTags));

    // bildirim göster
    toast.success("Not başarıyla oluşturuldu");

    // anasayfaya yönlendir
    navigate("/");
  };

  return (
    <>
      {/* sayfa başlığı */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">
            Yeni Not Oluştur
          </h1>
          <p className="text-text-secondary">
            Fikirlerinizi ve notlarınızı kaydedin
          </p>
        </div>
      </div>

      {/* form */}
      <form
        onSubmit={handleSubmit}
        className="card p-6 sm:p-8 animate-slide-up"
      >
        {/* başlık */}
        <div className="mb-6">
          <label className="block text-text-primary text-sm font-medium mb-2">
            Başlık:
          </label>

          <input
            type="text"
            className="w-full px-4 py-2.5 bg-card border border-border rounded-md text-text-primary focus:ring-2 focus:ring-primary/30 transition"
            placeholder="Not başlığı..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* içerik */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <label>İçerik:</label>

            {/* Mod Değiştirme Butonu */}
            <button
              type="button"
              onClick={() => setIsPreview(!isPreview)}
              className="inline-flex items-center text-primary hover:text-primary-hover transition text-sm px-3 py-1 rounded-full hover:bg-primary/10 cursor-pointer"
            >
              {isPreview ? (
                <>
                  <Edit className="w-4 h-4 mr-1.5" />
                  <span>Düzenleme Modu</span>
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4 mr-1.5" />
                  <span>Önizleme</span>
                </>
              )}
            </button>
          </div>

          {isPreview ? (
            <p className="border border-border rounded-md p-5 min-h-[300px] bg-background prose max-w-none">
              <ReactMarkdown>{content}</ReactMarkdown>
            </p>
          ) : (
            <SimpleMDE
              value={content}
              options={mdOptions}
              className="w-full markdown-editor"
              onChange={(value) => setContent(value)}
            />
          )}
        </div>

        {/* etiketler */}
        <div className="mb-6">
          <label className="block text-text-primary text-sm font-medium mb-2">
            Etiketler:
          </label>

          <ReactSelect
            options={availableTags.map((t) => ({ label: t, value: t }))}
            value={selectedTags.map((t) => ({ label: t, value: t }))}
            onChange={(tags) => setSelectedTags(tags.map((t) => t.value))}
            styles={selectStyles}
            isMulti
          />
        </div>

        {/* işlem butonları */}
        <div className="flex flex-col md:flex-row items-center justify-end gap-3 pt-4 border-t border-border">
          <Link
            to="/"
            className="inline-flex items-center justify-center w-full md:w-auto px-5 py-2.5 rounded-md border border-border text-text-primary hover:bg-background transition"
          >
            <X className="w-4 h-4 mr-1.5" />
            İptal
          </Link>

          <button
            type="submit"
            className="inline-flex items-center justify-center w-full md:w-auto px-5 py-2.5 rounded-md border bg-primary border-border text-text-primary hover:bg-primary-hover transition cursor-pointer"
          >
            <Check className="w-4 h-4 mr-1.5" />
            Kaydet
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
