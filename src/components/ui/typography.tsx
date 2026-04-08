import * as React from "react";
import { cn } from "@/lib/utils";

const H1 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h1
    ref={ref}
    className={cn(
      "font-serif text-5xl leading-[1.1] tracking-tight md:text-6xl",
      className
    )}
    {...props}
  />
));
H1.displayName = "H1";

const H2 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      "font-serif text-3xl leading-tight tracking-tight md:text-4xl",
      className
    )}
    {...props}
  />
));
H2.displayName = "H2";

const H3 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-serif text-2xl leading-tight tracking-tight", className)}
    {...props}
  />
));
H3.displayName = "H3";

const H4 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h4
    ref={ref}
    className={cn("font-serif text-xl leading-tight", className)}
    {...props}
  />
));
H4.displayName = "H4";

const Lead = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-lg text-muted-foreground", className)}
    {...props}
  />
));
Lead.displayName = "Lead";

const Blockquote = React.forwardRef<
  HTMLQuoteElement,
  React.HTMLAttributes<HTMLQuoteElement>
>(({ className, ...props }, ref) => (
  <blockquote
    ref={ref}
    className={cn(
      "border-l-4 border-accent-warm pl-6 font-serif text-xl italic text-foreground",
      className
    )}
    {...props}
  />
));
Blockquote.displayName = "Blockquote";

const Caption = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "font-mono text-xs uppercase tracking-widest text-muted-2",
      className
    )}
    {...props}
  />
));
Caption.displayName = "Caption";

const Overline = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground",
      className
    )}
    {...props}
  />
));
Overline.displayName = "Overline";

export { H1, H2, H3, H4, Lead, Blockquote, Caption, Overline };
