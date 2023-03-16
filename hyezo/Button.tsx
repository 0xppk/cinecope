import { cva, VariantProps } from "cva";
import { default as ButtonOrLink, ButtonOrLinkProps } from "./ButtonOrLink";

const buttonStyles = cva(
  "flex itmes-center justify-center px-4 border outline-none py-2 rounded-lg font-medium focus:bg-transparent focus:ring-2 hover:bg-transparent dark:hover:bg-transparent disabled:cursor-not-allowed disabled:hover:animate-wiggle duration-300 focus:font-bold",
  {
    variants: {
      color: {
        blue: "bg-blue-500 focus:text-blue-500 focus:ring-blue-500 hover:border-blue-500 hover:text-blue-500",
        red: "bg-red-500 focus:text-red-500 focus:ring-red-500 hover:border-red-500 hover:text-red-500",
        orange:
          "bg-orange-500 focus:text-orange-500 focus:ring-orange-500 hover:border-orange-500 hover:text-orange-500",
        emerald:
          "bg-emerald-500 focus:text-emerald-500 focus:ring-emerald-500 hover:border-emerald-500 hover:text-emerald-500",
        twitter:
          "bg-twitter-500 focus:text-twitter-500 focus:ring-twitter-500 hover:border-twitter-500 hover:text-twitter-500",
        black:
          "bg-black/90 hover:bg-white hover:text-black hover:border-black focus:text-black focus:ring-black/90",
      },
      size: {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-md",
        lg: "text-lg",
      },
      outline: {
        true: "bg-transparent dark:bg-transparent hover:text-black",
        false: "border-transparent text-white",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    compoundVariants: [
      {
        color: "blue",
        outline: true,
        className: "border-blue-500 text-blue-500 hover:bg-blue-500",
      },
      {
        color: "red",
        outline: true,
        className: "border-red-500 text-red-500 hover:bg-red-500",
      },
      {
        color: "orange",
        outline: true,
        className: "border-orange-500 text-orange-500 hover:bg-orange-500",
      },
      {
        color: "emerald",
        outline: true,
        className: "border-emerald-500 text-emerald-500 hover:bg-emerald-500",
      },
      {
        color: "twitter",
        outline: true,
        className: "border-twitter-500 text-twitter-500 hover:bg-twitter-500",
      },
      {
        color: "black",
        outline: true,
        className:
          "border-white/75 text-white/90 hover:bg-white hover:text-black focus:text-black focus:bg-white focus:ring-black",
      },
    ],
    defaultVariants: {
      color: "twitter",
      size: "xs",
      fullWidth: false,
      outline: false,
    },
  },
);

export interface ButtonProps
  extends ButtonOrLinkProps,
    VariantProps<typeof buttonStyles> {}

/**
 * Button component that can be used as a link or button. If `href` is provided, it will be rendered as a children of Next.js `<Link>` component. Otherwise, it will be rendered as a button.
 * @params {string} color - The color of the button.
 * @params {string} size - The size of the button. It is a combinations of `xs`, `sm`, `md`, `lg`.
 * @params {boolean} outline - Whether the button should have an outline & transparent.
 * @params {boolean} fullWidth - Whether the button should have a full width.
 */
export default function Button({
  color,
  fullWidth,
  outline,
  size,
  className,
  ...props
}: ButtonProps) {
  return (
    <ButtonOrLink
      className={buttonStyles({ color, outline, fullWidth, size, className })}
      {...props}
    />
  );
}
