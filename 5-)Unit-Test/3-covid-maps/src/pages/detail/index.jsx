import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDetails } from "../../redux/actions";
import { useParams } from "react-router-dom";
import Header from "./header";
import Content from "./content";

const Detail = () => {
  const { country } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetails(country));
  }, [country]);

  return (
    <div className="flex-1 grid place-items-center p-6 h-full">
      <div className="bg-white border shadow-2xl min-h-[70%] py-6 px-8 rounded-lg max-w-4xl max-md:w-full md:w-[80%]">
        <Header />

        <Content />
      </div>
    </div>
  );
};

export default Detail;
