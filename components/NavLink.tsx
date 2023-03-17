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
      <button className="flex items-center">{children}</button>
    </Link>
  );
}

/* eslint-disable react/display-name */
NavLink.Title = ({ children }: { children: ReactNode }) => {
  return (
    <div className="my-2 w-full bg-slate-800 px-3 py-1 text-xs text-white/60">
      {children}
    </div>
  );
};
