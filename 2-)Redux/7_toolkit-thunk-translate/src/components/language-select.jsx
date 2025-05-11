import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { setSource, setTarget, swap } from "../redux/slices/translateSlice";

const LanguageSelect = () => {
  const dispatch = useDispatch();
  const { isLoading, languages } = useSelector((store) => store.languageReducer);
  const { sourceLang, targetLang } = useSelector((store) => store.translateReducer);

  // api'dan gelen dizinin formatını çevir
  // nesnelerdeki language değerlerini value'ya
  // name değerilerini label'a çevir
  const formatted = languages?.map((item) => ({
    value: item.language,
    label: item.name,
  }));

  // dili algıla seçeneği
  const detect = { value: undefined, label: "Dili algıla" };

  return (
    <div className="flex gap-2 text-black">
      <Select
        value={sourceLang}
        isDisabled={isLoading}
        isLoading={isLoading}
        options={[detect, ...formatted]}
        className="flex-1"
        onChange={(lang) => {
          if (lang.value === targetLang.value) {
            dispatch(swap());
            return;
          }

          dispatch(setSource(lang));
        }}
      />

      <button
        disabled={sourceLang.value === undefined}
        onClick={() => dispatch(swap())}
        className="bg-zinc-700 py-2 px-6 hover:bg-zinc-800 transition rounded text-white cursor-pointer disabled:opacity-60"
      >
        Değiş
      </button>

      <Select
        value={targetLang}
        isDisabled={isLoading}
        isLoading={isLoading}
        options={formatted}
        className="flex-1"
        onChange={(lang) => {
          if (lang.value === sourceLang.value) {
            dispatch(swap());
          }
          dispatch(setTarget(lang));
        }}
      />
    </div>
  );
};

export default LanguageSelect;
