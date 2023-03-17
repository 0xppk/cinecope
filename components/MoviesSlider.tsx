"use client";
import Image from "next/image";
import { useMemo, useState } from "react";
import { Modal, Text } from "~/hyezo";
import { MovieType, useISO } from "~/utils";
import { Icons } from "./Icons";
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
      <div className="flex snap-x snap-mandatory gap-5 overflow-x-scroll rounded-2xl pb-10">
        {movies.map((movie, i) => {
          return (
            /* 래퍼. 애니메이션은 이미지에 걸어 무한떨림 방지 */
            <div
              key={movie.id}
              onClick={() => {
                setIsOpen(true);
                setQuery(movie.id);
              }}
              className="relative flex-shrink-0 rounded-2xl sm:snap-center lg:snap-end"
              ref={handleRef}
            >
              {/* 오버레이 */}
              <div
                className={`overlay z-10 cursor-pointer rounded-2xl hover:opacity-90 ${
                  isVisible[i]
                    ? "pointer-events-auto translate-x-0 skew-y-0 skew-x-0 scale-y-100"
                    : "pointer-events-none translate-x-20 skew-y-6 skew-x-6 scale-y-50"
                }`}
              >
                <div className="flex flex-col items-center gap-2">
                  <Icons as="view" className="mr-0 h-10 w-10" color="white" />
                  <p>{movie.vote_count}</p>
                </div>
              </div>
              {/* 이미지 */}
              <Image
                className={`h-auto w-auto transform-gpu select-none rounded-2xl shadow-lg shadow-black duration-500 ${
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
      {pickedMovie && (
        <Modal
          isOpen={isOpen}
          center={true}
          width="wider"
          setIsOpen={setIsOpen}
          className="modal w-screen bg-black/80"
        >
          <div className="relative h-[30vh] w-full">
            <Image
              className="w-full rounded-t-xl object-cover"
              src={pickedMovie.backdrop_path}
              alt={pickedMovie.title}
              fill
            ></Image>
          </div>

          <div className="relative flex flex-col gap-4 bg-gray-900 p-7">
            <Text className="absolute top-0 right-0 pt-5 pr-5" variant="md/bold">
              ⭐️ {pickedMovie.vote_average}
            </Text>
            <Text className="w-5/6 px-2 leading-[2.8rem]" variant="2xl/bold">
              {pickedMovie.title}
            </Text>
            <Text className="px-2" variant="xs/bold">
              {pickedMovie.release_date}
            </Text>
            <Text className="py-5 px-3" variant="sm/bold">
              {pickedMovie.overview}
            </Text>
          </div>
        </Modal>
      )}
    </>
  );
}
