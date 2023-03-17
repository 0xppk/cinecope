import Link from "next/link";
import { ComponentProps } from "react";

type ButtonOrLinkType = ComponentProps<"button"> & ComponentProps<"a">;

export interface ButtonOrLinkProps extends Omit<ButtonOrLinkType, "color"> {}

export default function ButtonOrLink({ href, ...props }: ButtonOrLinkProps) {
  const isLink = typeof href !== "undefined";

  let Button = <button {...props} />;
  if (isLink)
    return (
      <Link href={href} target="_blank" rel="noopener noreferrer">
        {Button}
      </Link>
    );

  return Button;
}
