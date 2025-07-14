import type { FC } from "react";
import { SquareCheck, SquareX } from "lucide-react";

interface Props {
  availability: boolean;
  expand?: boolean;
}

const Status: FC<Props> = ({ availability, expand }) => {
  return (
    <div
      className={`flex items-center gap-2 border border-zinc-200 p-2 rounded-md ${
        availability ? "bg-green-100" : "bg-red-100"
      }`}
    >
      {availability ? (
        <SquareCheck className="text-green-500" />
      ) : (
        <SquareX className="text-red-500" />
      )}

      {expand && (
        <span className="font-zinc-700">
          {availability ? "Müsait" : "Dolu"}
        </span>
      )}
    </div>
  );
};

export default Status;
