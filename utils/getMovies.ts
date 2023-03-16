import { z } from "zod";
import { devOrProd } from ".";

const MovieInfo = z.object({
  id: z.number(),
  title: z.string(),
  vote_average: z.number(),
  poster_path: z
    .string()
    .nullable()
    .transform(path => `https://image.tmdb.org/t/p/original${path}`),
  backdrop_path: z
    .string()
    .nullable()
    .transform(path => `https://image.tmdb.org/t/p/original${path}`),
});

export type MovieType = z.infer<typeof MovieInfo>;

const MovieSchema = z.object({
  results: z.array(MovieInfo),
});

export default async function getMovies(config?: RequestInit) {
  const data = await await fetch(`${devOrProd}/data/upcoming`, config).then(res =>
    res.json(),
  );
  const { results } = MovieSchema.parse(data);
  return results;
}
