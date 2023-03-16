import { getMovies } from "~/utils";

export default function Page({ params }: PageProps) {
  return <div>{params.id}</div>;
}

export async function generateStaticParams() {
  const topics = ["comedy", "thriller", "sf"];
  return topics.map(topic => ({
    id: topic,
  }));
}
