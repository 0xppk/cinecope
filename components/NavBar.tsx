"use client";
import { signOut, useSession } from "next-auth/react";
import { ComponentProps, useState } from "react";
import { Icons } from "./Icons";
import LoginModal from "./LoginModal";
import NavLink from "./NavLink";

interface NavBarProps extends ComponentProps<"nav"> {}

export default function NavBar({ children, ...props }: NavBarProps) {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const logOut = () => signOut();
  const openModal = () => setIsOpen(true);

  return (
    <nav {...props}>
      {/* 메인 네비게이터 */}
      <div className="flex flex-col justify-center gap-4 p-4">
        <NavLink href="/">
          <Icons as="home" />
          Home
        </NavLink>
        <NavLink href="/following">
          <Icons as="following" />
          Following
        </NavLink>
        <NavLink href="/movies">
          <Icons as="movies" />
          Movies
        </NavLink>
      </div>
      {/* 토픽 */}
      <NavLink.Title>Popular Topics</NavLink.Title>
      <div className="flex justify-center gap-4 p-4 flex-col">
        <NavLink href="/topics/comedy">
          <Icons as="comedy" />
          Comedy
        </NavLink>
        <NavLink href="/topics/thriller">
          <Icons as="thriller" />
          Thriller
        </NavLink>
        <NavLink href="/topics/sf">
          <Icons as="sf" />
          Sci-fi
        </NavLink>
      </div>
      {/* 추천 */}
      {session && <NavLink.Title>Suggested Accounts</NavLink.Title>}

      {/* 로그인-아웃 */}
      <div className="flex justify-center gap-4 p-4 flex-col">
        <div
          className="flex cursor-pointer items-center text-xs text-twitter-600 duration-200 active:text-orange-500/70"
          onClick={session?.user.name ? logOut : openModal}
        >
          {session?.user.name ? <Icons as="logout" /> : <Icons as="login" />}
          {session?.user.name ? "Logout" : "Login"}
        </div>
        <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </nav>
  );
}
