import type { FC } from "react";
import type { Shoe } from "../../types";
import Badge from "./badge";
import { Link } from "react-router-dom";
import Price from "./price";

interface Props {
  shoe: Shoe;
}

const Card: FC<Props> = ({ shoe }) => {
  return (
    <div className="flex flex-col justify-between">
      <div>
        <div className="relative p-2 bg-white rounded-2xl xl:rounded-3xl">
          <Badge shoe={shoe} />

          <img
            src={shoe.picture[0]}
            alt="shoe"
            className="rounded-[12px] xl:rounded-[24px]"
          />
        </div>

        <h2 className="font-semibold line-clamp-2 my-4 lg:text-[20px] xl:text-[24px]">
          {shoe.name}
        </h2>
      </div>

      <Link
        to={`/shoe/${shoe._id}`}
        className="bg-dark-grey text-white px-4 py-2 rounded-[8px] transition text-center flex items-center justify-center gap-1"
      >
        Detay - <Price shoe={shoe} />
      </Link>
    </div>
  );
};

export default Card;
