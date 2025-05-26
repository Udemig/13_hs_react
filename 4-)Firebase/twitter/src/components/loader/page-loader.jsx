import { FaSpinner } from "react-icons/fa";

const PageLoader = () => {
  return (
    <div className="h-screen bg-primary grid place-items-center">
      <FaSpinner className="animate-spin text-white text-xl" />
    </div>
  );
};

export default PageLoader;
