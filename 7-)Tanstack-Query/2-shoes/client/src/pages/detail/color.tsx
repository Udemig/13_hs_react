import { useState, type FC } from "react";
import { COLOR_LIST } from "../../utils/constants";

interface Props {
  colors: string;
}

const Color: FC<Props> = ({ colors }) => {
  const [selected, setSelected] = useState<string>("");

  const toggle = (id: string) => {
    setSelected(selected === id ? "" : id);
  };

  return (
    <div>
      <h2 className="font-semibold mb-3">Renk Seçiniz</h2>

      <div className="flex gap-5">
        {colors.split(",").map((id) => {
          // ekrana basılan rengin kodunu bul
          const color = COLOR_LIST.find((color) => color.id === id);

          // ekrana basılan renk seçili mi kontrol et
          const isSelected = selected === id;

          return (
            <div
              key={id}
              className={
                isSelected
                  ? `ring-3 rounded-full ring-[${color?.code}]`
                  : "ring-2 rounded-full ring-gray-400"
              }
            >
              <div
                onClick={() => toggle(id)}
                className="size-9 rounded-full cursor-pointer m-1"
                style={{ background: color?.code }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Color;
