import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-sm border px-3 py-1 text-xs font-bold transition-colors",
  {
    variants: {
      variant: {
        default: "border-primary bg-primary/10 text-primary",
        secondary: "border-secondary bg-secondary/20 text-secondary-foreground",
        outline: "border-border text-foreground",
        destructive: "border-destructive bg-destructive/10 text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant, className }))} {...props} />
  );
}
