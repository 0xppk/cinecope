import { FiFilm, FiHome, FiLogIn, FiLogOut, FiUsers } from "react-icons/fi";
import { GiSharpSmile, GiPopcorn } from "react-icons/gi";
import { IoIosRocket } from "react-icons/io";

import { cn } from "~/hyezo/cn";

type Props = {
  className?: string;
  as: "home" | "following" | "movies" | "login" | "logout" | "thriller" | "comedy" | "sf";
};

export const Icons = ({ className, as }: Props) => {
  switch (as) {
    case "home":
      return <FiHome className={cn(`mr-2 inline h-4 w-4 ${className}`)} />;
    case "following":
      return <FiUsers className={cn(`mr-2 inline h-4 w-4 ${className}`)} />;
    case "movies":
      return <FiFilm className={cn(`mr-2 inline h-4 w-4 ${className}`)} />;
    case "login":
      return <FiLogIn className={cn(`mr-2 inline h-4 w-4 ${className}`)} />;
    case "logout":
      return <FiLogOut className={cn(`mr-2 inline h-4 w-4 ${className}`)} />;
    case "thriller":
      return <GiSharpSmile className={cn(`mr-2 inline h-4 w-4 ${className}`)} />;
    case "comedy":
      return <GiPopcorn className={cn(`mr-2 inline h-4 w-4 ${className}`)} />;
    case "sf":
      return <IoIosRocket className={cn(`mr-2 inline h-4 w-4 ${className}`)} />;
  }
};
