import { use } from "react";
import { getMovie, getMovies, getVideo } from "~/utils";
import Image from "next/image";
import { Metadata } from "next";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const movie = await getMovie(params.id);
  return {
    title: `${movie.title} || 렛츠꼬 무브무브무브`,
    description: movie.overview,
    openGraph: {
      title: movie.title,
      description: movie.overview ?? "",
      images: movie.poster_path,
    },
  };
}

export default function Page({ params }: PageProps) {
  const movie = use(getMovie(params.id));
  const video = use(getVideo(params.id));

  return (
    <div>
      <h1>{video[0]?.url}</h1>
      <div>{movie.title}</div>
      <div>{movie.overview}</div>
      <div className="flex gap-3">
        {movie.genres.map(g => (
          <div key={g.name}>{g.name}</div>
        ))}
      </div>
      <div>{movie.runtime} min</div>
      <div>{movie.vote_average}</div>
      <div>{movie.popularity}</div>
      <Image
        src={movie.poster_path}
        alt={movie.title}
        width={500}
        height={500}
        priority
      />
    </div>
  );
}

export async function generateStaticParams() {
  const movies = await getMovies();
  return movies.map(({ id }) => ({
    id: String(id),
  }));
}
