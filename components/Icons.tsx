import { FiFilm, FiHome, FiLogIn, FiLogOut, FiUsers } from "react-icons/fi";
import { GiPopcorn, GiSharpSmile } from "react-icons/gi";
import { IoIosRocket } from "react-icons/io";
import { type IconBaseProps } from "react-icons/lib";
import { MdOutlineHowToVote } from "react-icons/md";

import { cn } from "~/hyezo/cn";

interface IconProps extends IconBaseProps {
  as:
    | "home"
    | "following"
    | "movies"
    | "login"
    | "logout"
    | "thriller"
    | "comedy"
    | "sf"
    | "view";
}

export const Icons = ({ className, as, ...props }: IconProps) => {
  switch (as) {
    case "home":
      return <FiHome className={cn(`mr-2 inline h-4 w-4 ${className}`)} {...props} />;
    case "following":
      return <FiUsers className={cn(`mr-2 inline h-4 w-4 ${className}`)} {...props} />;
    case "movies":
      return <FiFilm className={cn(`mr-2 inline h-4 w-4 ${className}`)} {...props} />;
    case "login":
      return <FiLogIn className={cn(`mr-2 inline h-4 w-4 ${className}`)} {...props} />;
    case "logout":
      return <FiLogOut className={cn(`mr-2 inline h-4 w-4 ${className}`)} {...props} />;
    case "thriller":
      return (
        <GiSharpSmile className={cn(`mr-2 inline h-4 w-4 ${className}`)} {...props} />
      );
    case "comedy":
      return <GiPopcorn className={cn(`mr-2 inline h-4 w-4 ${className}`)} {...props} />;
    case "sf":
      return (
        <IoIosRocket className={cn(`mr-2 inline h-4 w-4 ${className}`)} {...props} />
      );
    case "view":
      return (
        <MdOutlineHowToVote
          className={cn(`mr-2 inline h-4 w-4 ${className}`)}
          {...props}
        />
      );
    default:
      return <></>;
  }
};
