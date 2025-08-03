import { LoaderCircle } from "lucide-react";
import { FC } from "react";

interface Props {
  designs?: string;
}

const Loading: FC<Props> = ({ designs }) => {
  return (
    <div className={`grid place-items-center ${designs}`}>
      <LoaderCircle className="animate-spin text-blue-500" />
    </div>
  );
};

export default Loading;
