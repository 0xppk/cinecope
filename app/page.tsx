import { use } from "react";
import { MoviesSlider, Trailer } from "~/components";
import { getMovies, getVideo } from "~/utils";

export default function Page() {
  const movies = use(getMovies());
  const random = Math.floor(Math.random() * movies.length);
  const id = movies[random].id;

  return (
    <>
      <MoviesSlider movies={movies} />
      <Trailer id={id} />
    </>
  );
}
