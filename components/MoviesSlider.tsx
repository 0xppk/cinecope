"use client";
import Image from "next/image";
import { use, useMemo, useState } from "react";
import { Button, Modal } from "~/hyezo";
import { MoviesContext, MovieType, useISO } from "~/utils";

type Props = {
  movies: MovieType[];
};
export default function MoviesSlider({ movies }: Props) {
  const [query, setQuery] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [handleRef, isVisible] = useISO({
    threshold: 0.1,
  });
  const pickedMovie = useMemo(
    () => movies.find(movie => movie.id === query),
    [movies, query],
  );

  return (
    <>
      <div className="flex snap-x snap-mandatory gap-5 overflow-x-scroll rounded-2xl">
        {movies.map((movie, i) => {
          return (
            <div
              key={movie.id}
              onClick={() => {
                setIsOpen(true);
                setQuery(movie.id);
              }}
              className="relative flex-shrink-0 sm:snap-center lg:snap-end"
              ref={handleRef}
            >
              <p className="overlay z-10 cursor-pointer rounded-2xl hover:opacity-90">
                {movie.vote_average}
              </p>
              <Image
                className={`h-auto w-auto transform-gpu select-none rounded-2xl duration-500 ${
                  isVisible[i]
                    ? "translate-x-0 skew-y-0 skew-x-0 scale-y-100 opacity-100"
                    : "translate-x-20 skew-y-6 skew-x-6 scale-y-50 opacity-0"
                }`}
                src={movie.poster_path}
                alt={movie.title}
                width={400}
                height={500}
                draggable={false}
                priority
              />
            </div>
          );
        })}
      </div>
      <Modal
        title="한번 띄워나 보이소"
        isOpen={isOpen}
        center={true}
        width="wider"
        setIsOpen={setIsOpen}
        className="w-screen"
      >
        <Modal.Content>
          <div className="flex flex-col items-center">
            <div>{pickedMovie?.title}</div>
            <div>{pickedMovie?.id}</div>
          </div>
        </Modal.Content>

        <div className="mt-5 flex space-x-4">
          <Button onClick={() => setIsOpen(false)} color="twitter" fullWidth>
            Okay, I understand.
          </Button>
        </div>
      </Modal>
    </>
  );
}
