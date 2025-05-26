import { IoMdClose } from "react-icons/io";

const Preview = ({ isLoading, url, close }) => {
  return (
    url && (
      <div className="relative mb-5">
        <button
          disabled={isLoading}
          type="button"
          onClick={close}
          className="absolute top-3 end-3 text-2xl p-1 hover:bg-zinc-700 cursor-pointer transition  disabled:cursor-not-allowed bg-primary/90 rounded-lg"
        >
          <IoMdClose />
        </button>

        <img src={url} alt="preview" className="rounded-md" />
      </div>
    )
  );
};

export default Preview;
