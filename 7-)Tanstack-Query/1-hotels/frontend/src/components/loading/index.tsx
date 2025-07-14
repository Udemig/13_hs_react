import type { FC } from "react";
import { LoaderCircle } from "lucide-react";

const Loading: FC = () => {
  return (
    <div className="flex justify-center items-center h-full mt-10">
      <LoaderCircle className="animate-spin text-blue-500 size-8" />
    </div>
  );
};

export default Loading;
