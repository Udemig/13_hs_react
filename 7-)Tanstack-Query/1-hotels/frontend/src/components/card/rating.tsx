import type { FC } from "react";

interface Props {
  rating: number;
  expand?: boolean;
}

const Rating: FC<Props> = ({ rating, expand }) => {
  // renk belirle
  const color =
    rating > 4.7
      ? "bg-blue-500"
      : rating > 4
      ? "bg-green-500"
      : rating > 3
      ? "bg-yellow-500"
      : "bg-red-500";

  // metin belirle
  const text =
    rating > 4.7
      ? "Çok iyi"
      : rating > 4
      ? "İyi"
      : rating > 3
      ? "Orta"
      : "Kötü";

  return (
    <div>
      <span className={`text-white p-2 rounded-lg font-bold ${color} w-fit`}>
        {rating}
      </span>

      {expand && <span className="font-semibold text-lg ms-2">{text}</span>}
    </div>
  );
};

export default Rating;
