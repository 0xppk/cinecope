import { NextApiRequest, NextApiResponse } from "next";
import { env } from "~/env.mjs";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") res.status(405).end();
  try {
    const movies = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`,
    );
    const moviesJson = await movies.json();
    return res.status(200).json(moviesJson);
  } catch (error) {
    console.log(error);
    return res.status(404).end();
  }
}
