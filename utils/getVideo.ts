import { z } from "zod";
import { env } from "~/env.mjs";
import { devOrProd } from ".";

const MovieInfo = z
  .object({
    id: z.string(),
    name: z.string(),
    site: z.string(),
    key: z.string(),
  })
  .transform(obj => {
    let siteURL =
      obj.site === "YouTube"
        ? "https://www.youtube.com/embed/"
        : "https://www.vimeo.com/";
    return { ...obj, url: `${siteURL}${obj.key}` };
  });

const MovieSchema = z.object({
  results: z.array(MovieInfo),
});

export type MovieVideoType = z.infer<typeof MovieInfo>;

export default async function getVideo(id: number, config?: RequestInit) {
  const data = await await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${env.NEXT_PUBLIC_API_KEY}&language=en-US`,
    config,
  ).then(res => res.json());

  const { results } = MovieSchema.parse(data);

  return results;
}
