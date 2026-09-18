import { cva, type VariantProps } from "class-variance-authority"

import { twMerge } from "tailwind-merge"

const button = cva(
  [
    "justify-center",
    "inline-flex",
    "items-center",
    "gap-2",
    "rounded-md",
    "text-center",
    "border",
    "font-medium",
    "transition-colors",
    "duration-200",
  ],
  {
    variants: {
      intent: {
        primary: ["border-primary", "bg-primary", "text-primary-content", "hover:bg-primary/85"],
        secondary: [
          "hairline",
          "bg-transparent",
          "text-base-content",
          "hover:border-base-content",
          "hover:bg-base-content",
          "hover:text-base-100",
        ],
      },
      size: {
        sm: ["min-h-9", "text-sm", "py-1.5", "px-4"],
        lg: ["min-h-12", "text-base", "py-2.5", "px-6"],
      },
      underline: { true: ["underline"], false: [] },
    },
    defaultVariants: {
      intent: "primary",
      size: "lg",
    },
  }
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof button> {
  underline?: boolean
  href: string
}

export function Button({ className, intent, size, underline, ...props }: ButtonProps) {
  return (
    <a className={twMerge(button({ intent, size, className, underline }))} {...props}>
      {props.children}
    </a>
  )
}
