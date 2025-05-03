import { useEffect, useState } from "react";
import api from "../../utils/api";
import Loader from "../../components/loader/index";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import { baseImgUrl } from "../../utils/constants";
import { MdImageNotSupported } from "react-icons/md";
import Error from "../../components/error/index";
import Button from "../../components/button";

const Hero = () => {
  const [movie, setMovie] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    api
      .get("/movie/popular?region=TUR")
      .then((res) => {
        // 0-19 arası rastgele sayı üret
        const number = Math.round(Math.random() * 19);

        // rastgele filmi alıp state'e aktar
        setMovie(res.data.results[number]);
      })
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <Error message={error} />;

  if (!movie) return <Loader />;

  return (
    <div className="grid md:grid-cols-2 md:max-h-[400px] gap-5 mb-10">
      <div className="flex flex-col gap-6 items-center justify-center">
        <h1 className="text-3xl font-bold">{movie.title}</h1>
        <p className="text-start text-gray-300">{movie.overview}</p>

        <p>
          <span>IMDB</span>
          <span className="text-yellow-400 ms-2 font-semibold">{movie.vote_average.toFixed(2)}</span>
        </p>

        <div className="flex gap-5">
          <Link to={`/movie/${movie.id}`} className="hero-btn">
            <FaPlay />
            <span>Filmi İzle</span>
          </Link>

          <Button movie={movie} />
        </div>
      </div>

      <div className="flex justify-center">
        {movie.backdrop_path ? (
          <img
            src={baseImgUrl + movie.backdrop_path}
            alt={movie.title}
            className="drop-shadow-[0_0_80px_rgba(255,255,255,0.4)] my-4 rounded object-contain max-h-[300px]"
          />
        ) : (
          <div className="drop-shadow-[0_0_80px_rgba(255,255,255,0.4)] my-4 rounded max-h-[300px] bg-zinc-500 min-h-[200px] h-full w-full grid place-items-center">
            <MdImageNotSupported className="text-5xl" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
