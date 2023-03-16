import { use } from "react";
import { getVideo } from "~/utils";

type Props = {
  id: number;
};
export default function Trailer({ id }: Props) {
  const video = use(getVideo(id));

  return (
    <div className="relative mt-10 pb-[55.25%] ">
      <iframe
        className="absolute inset-0 h-full w-full rounded-2xl bg-black shadow-2xl shadow-black dark:shadow-red-900/30 "
        src={video[0]?.url}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      />
    </div>
  );
}
