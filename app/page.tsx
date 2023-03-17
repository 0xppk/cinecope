import { use } from "react";
import { MoviesSlider, Trailer } from "~/components";
import { getMovies } from "~/utils";
import Image from "next/image";
import Text from "~/hyezo/Text";

export default function Page() {
  const movies = use(getMovies());
  const random = Math.floor(Math.random() * movies.length);
  const id = movies[random].id;

  return (
    <div className="pb-10 pr-3 sm:my-6 md:my-0">
      <MoviesSlider movies={movies} />
      <Topic />
      <Trailer id={id} />
    </div>
  );
}

function Topic() {
  return (
    <>
      <Text variant="md/semibold" className="mb-5">
        Topics
      </Text>
      <div className="relative mb-7 min-h-[20rem] w-full rounded-xl">
        <Image
          className="w-full rounded-xl bg-white object-cover shadow-lg shadow-black"
          src="/poster4.jpeg"
          alt=""
          fill
        />
        <Text
          variant="3xl/bold"
          className="absolute left-0 bottom-2 pl-6 uppercase text-shadow"
        >
          pacifiction
        </Text>
      </div>
      <div className="flex gap-6 overflow-x-auto rounded-xl pb-12">
        <div className="relative flex-shrink-0">
          <Image
            className="h-full w-full rounded-xl shadow-lg shadow-black"
            src="/poster3.jpeg"
            alt=""
            width={300}
            height={300}
          />
          <Text variant="lg/bold" className="absolute left-0 bottom-2 pl-3 text-shadow">
            Incredible family
          </Text>
        </div>
        <div className="relative flex-shrink-0">
          <Image
            className="h-full w-full rounded-xl shadow-lg shadow-black"
            src="/poster4.jpeg"
            alt=""
            width={300}
            height={300}
          />
          <Text variant="lg/bold" className="absolute left-0 bottom-2 pl-3 text-shadow">
            Incredible story
          </Text>
        </div>
        <div className="relative flex-shrink-0">
          <Image
            className="h-full w-full rounded-xl shadow-lg shadow-black"
            src="/poster2.jpeg"
            alt=""
            width={300}
            height={300}
          />
          <Text variant="lg/bold" className="absolute left-0 bottom-2 pl-3 text-shadow">
            Horrible love
          </Text>
        </div>
      </div>
    </>
  );
}
