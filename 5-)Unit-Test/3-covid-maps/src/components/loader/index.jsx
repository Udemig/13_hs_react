import { FaSpinner } from "react-icons/fa";

const Loader = () => {
  return (
    <div data-testid="loader" className="flex justify-center col-span-3 text-pink-500">
      <FaSpinner className="animate-spin text-lg" />
    </div>
  );
};

export default Loader;
