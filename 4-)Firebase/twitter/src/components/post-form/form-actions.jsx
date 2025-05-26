import { IoImageOutline as Image } from "react-icons/io5";
import { MdOutlineGifBox as Gif } from "react-icons/md";
import { FaRegSmile as Smile } from "react-icons/fa";
import Loader from "../loader";

const FormActions = ({ isLoading, fileRef, onImageChange }) => {
  return (
    <>
      <div className="flex justify-between">
        <div className="text-tw-blue text-xl flex gap-4">
          <label htmlFor="image" className="form-icon">
            <input ref={fileRef} id="image" name="image" type="file" className="hidden" onChange={onImageChange} />
            <Image />
          </label>
          <button type="button" className="form-icon">
            <Gif />
          </button>
          <button type="button" className="form-icon">
            <Smile />
          </button>
        </div>

        <button
          disabled={isLoading}
          type="submit"
          className="submit-button disabled:brightness-90 disabled:cursor-not-allowed h-[36px]"
        >
          {isLoading ? <Loader /> : "Gönder"}
        </button>
      </div>
    </>
  );
};

export default FormActions;
