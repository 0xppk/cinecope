"use client";
import Link, { LinkProps } from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { ReactNode } from "react";

type NavProps = {
  children: ReactNode;
} & LinkProps;

export default function NavLink({ children, ...props }: NavProps) {
  const segment = useSelectedLayoutSegment() ?? "";
  const active = props.href === `/${segment}`;

  return (
    <Link className={active ? "underline" : ""} {...props}>
      {children}
    </Link>
  );
}
