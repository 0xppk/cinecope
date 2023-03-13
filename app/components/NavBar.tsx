import { ComponentProps } from "react";
import NavLink from "./NavLink";

interface NavBarProps extends ComponentProps<"nav"> {}

export default function NavBar({ children, ...props }: NavBarProps) {
  return (
    <nav {...props}>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/documents">Documents</NavLink>
      <NavLink href="/movies">Movies</NavLink>
      <NavLink href="/login">Login</NavLink>
      {children}
    </nav>
  );
}
