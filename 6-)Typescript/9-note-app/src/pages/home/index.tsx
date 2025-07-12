import { useMemo, useState, type FC } from "react";
import { useAppSelector } from "../../redux/hooks";
import Title from "../../components/home/title";
import Filter from "../../components/home/filter";
import Total from "../../components/home/total";
import List from "../../components/home/list";

const Home: FC = () => {
  const [title, setTitle] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const { notes } = useAppSelector((state) => state.notes);

  // seçili title ve selectedTags değerine göre notları filtrele
  const filteredNotes = useMemo(() => {
    return notes.filter((note) => {
      // başlık filtrelemesi
      const titleMatch = note.title.toLowerCase().includes(title.toLowerCase());

      // etiket filtrelemesi
      const tagMatch =
        selectedTags.length === 0 ||
        selectedTags.every((tag) => note.tags.includes(tag));

      // başlık ve etiket filtrelemesini uygula
      return titleMatch && tagMatch;
    });
  }, [notes, title, selectedTags]);

  return (
    <>
      <Title />
      <Filter
        notes={notes}
        title={title}
        setTitle={setTitle}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
      />
      <List notes={filteredNotes} />
      <Total notes={notes} filteredNotes={filteredNotes} />
    </>
  );
};

export default Home;
