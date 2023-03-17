import { cva, VariantProps } from "cva";
import { ComponentProps, ReactNode } from "react";

const textStyles = cva("", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-md",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
    },
    weight: {
      light: "font-light",
      normal: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    size: "sm",
    weight: "normal",
  },
});

type TextStyleProps = VariantProps<typeof textStyles>;

export interface TextProps
  extends ComponentProps<"p">,
    Omit<TextStyleProps, "size" | "weight"> {
  variant: `${NonNullable<TextStyleProps["size"]>}/${NonNullable<
    TextStyleProps["weight"]
  >}`;
  children?: ReactNode;
  color?: string;
  as?: "p" | "span";
}

/**
 * The text component that can be used in a variety of situations.
 * @params {TextStyleProps} variant - Text `size/weight`. It's a combinations of "sm", "md", "lg", or "xl".
 * @params {ReactNode} children - Text content.
 * @params {string} color - Text color.
 */
export default function Text({
  variant,
  children,
  color,
  as = "p",
  className,
  ...props
}: TextProps) {
  const [size, weight] = variant.split("/") as [
    TextStyleProps["size"],
    TextStyleProps["weight"],
  ];

  if (as === "p") {
    return (
      <p className={textStyles({ size, weight, className, ...props })} style={{ color }}>
        {children}
      </p>
    );
  }

  return (
    <span className={textStyles({ size, weight, className, ...props })} style={{ color }}>
      {children}
    </span>
  );
}
