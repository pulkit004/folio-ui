"use client";

import * as React from "react";
import { Loader2 } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const spinnerVariants = cva("animate-spin text-muted-foreground", {
  variants: {
    size: {
      sm: "h-4 w-4",
      default: "h-6 w-6",
      lg: "h-8 w-8",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

const Spinner = React.forwardRef<
  SVGSVGElement,
  React.ComponentPropsWithoutRef<typeof Loader2> &
    VariantProps<typeof spinnerVariants>
>(({ className, size, ...props }, ref) => (
  <Loader2
    ref={ref}
    className={cn(spinnerVariants({ size, className }))}
    {...props}
  />
));
Spinner.displayName = "Spinner";

export { Spinner, spinnerVariants };
