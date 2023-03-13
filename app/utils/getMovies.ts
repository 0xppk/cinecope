import { z } from "zod";

const MovieInfo = z.object({
  id: z.number(),
  title: z.string(),
  vote_average: z.number(),
  poster_path: z
    .string()
    .nullable()
    .transform((path) => `https://image.tmdb.org/t/p/original${path}`),
  backdrop_path: z
    .string()
    .nullable()
    .transform((path) => `https://image.tmdb.org/t/p/original${path}`),
});

export type MovieType = z.infer<typeof MovieInfo>;

const MovieSchema = z.object({
  results: z.array(MovieInfo),
});

export default async function getMovies() {
  const url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3003"
      : "https://cinecope.vercel.app";

  const data = await await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`,
  ).then((res) => res.json());
  const { results } = MovieSchema.parse(data);
  return results;
}
