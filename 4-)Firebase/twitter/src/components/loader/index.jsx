import { FaSpinner } from "react-icons/fa";

const Loader = ({ designs }) => {
  return (
    <div className={`flex items-center justify-center ${designs}`}>
      <FaSpinner className="animate-spin" />
    </div>
  );
};

export default Loader;
