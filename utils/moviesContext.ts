"use client";
import { createContext } from "react";
import { MovieType } from "./getMovies";

export const MoviesContext = createContext<MovieType[]>([]);
