"use client";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { MoviesContext, type MovieType } from "./index";

type ProvidersProps = {
  movies: MovieType[];
  children: ReactNode;
};

export default function Providers({ movies, children }: ProvidersProps) {
  return (
    <SessionProvider>
      <MoviesContext.Provider value={movies}>{children}</MoviesContext.Provider>
    </SessionProvider>
  );
}
