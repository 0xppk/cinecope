"use client";
import Link from "next/link";
import { use } from "react";
import { MoviesContext } from "@/utils/index";

export default function HomePage() {
  const movies = use(MoviesContext);

  return (
    <div>
      {movies.map(movie => (
        <h2 key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </h2>
      ))}
    </div>
  );
}
