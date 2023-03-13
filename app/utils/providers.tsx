"use client";
import { MoviesContext, type MovieType } from "@/utils/index";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

type ProvidersProps = {
  movies: MovieType[];
  children: ReactNode;
};

export default function Providers({ movies, children }: ProvidersProps) {
  return (
    <MoviesContext.Provider value={movies}>
      <SessionProvider>{children}</SessionProvider>
    </MoviesContext.Provider>
  );
}
