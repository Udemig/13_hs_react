import { useEffect, useState } from "react";
import api from "../../utils/api";

const MovieList = ({ genre }) => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    const params = {
      with_genres: genre.id,
      language: "tr",
      region: "TUR",
    };

    api
      .get("/discover/movie", { params }) //
      .then((res) => setMovies(res.data.results));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-3">{genre.name}</h1>

      {movies?.map((movie) => (
        <p>{movie.title}</p>
      ))}
    </div>
  );
};

export default MovieList;
