"use client";
import LoginBtn from "./login-btn";
import { MoviesContext } from "@/utils/index";
import Image from "next/image";
import { use } from "react";
import useISO from "./utils/useISO";

export default function Page() {
  const movies = use(MoviesContext);
  const [handleRef, isVisible] = useISO({ threshold: 0.1 });
  return (
    <>
      <div className="flex gap-5 overflow-x-auto">
        {movies.map((movie, i) => {
          return (
            <Image
              key={movie.id}
              ref={handleRef}
              className={`h-auto w-auto transform-gpu select-none rounded-2xl duration-500 ${
                isVisible[i]
                  ? "skew-y-0 skew-x-0 scale-y-100 opacity-100 "
                  : "skew-y-6 skew-x-6 scale-y-50 opacity-0"
              }`}
              src={movie.poster_path}
              alt={movie.title}
              width={400}
              height={500}
              draggable={false}
              priority
            />
          );
        })}
      </div>
      <LoginBtn />
    </>
  );
}
