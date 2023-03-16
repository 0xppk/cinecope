export default async function searchMovie(query: string) {
  const data = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1&query=${query}`,
  ).then(res => res.json());

  const { results } = data;
  return results;
}
