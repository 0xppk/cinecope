"use client";
import { ComboBox, Form, SubmitButton } from "hyezo/ui";
import { useRouter } from "next/navigation";
import { type MovieType } from "@/utils/getMovies";

type Props = {
  movies: MovieType[];
};

export default function SearchBar({ movies }: Props) {
  const router = useRouter();

  return (
    <Form
      onSubmit={({ combo: selected }) => {
        const find = movies.find(movie => movie.title === selected);
        if (!find) router.push(`/notFound`);
        else router.push(`/movies/${find.id}`);
      }}
    >
      <div className="flex w-96 gap-3">
        <ComboBox list={movies} />
        <SubmitButton outline>Submit</SubmitButton>
      </div>
    </Form>
  );
}
