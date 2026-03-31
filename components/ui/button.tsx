'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

/* ─── Variants ───────────────────────────────────────────────── */
const buttonVariants = cva(
  // Base styles
  [
    'inline-flex items-center justify-center gap-2',
    'font-body font-semibold rounded-full',
    'transition-all duration-300',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary',
    'disabled:pointer-events-none disabled:opacity-40',
    'relative overflow-hidden select-none',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-accent-gradient text-white',
          'shadow-[0_0_0_rgba(108,58,255,0)]',
          'hover:shadow-[0_0_30px_rgba(108,58,255,0.45)] hover:scale-[1.02]',
          'active:scale-[0.98]',
          // Shimmer effect via pseudo pseudo-element via before
          'before:absolute before:inset-0 before:rounded-full',
          'before:bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.12)_50%,transparent_100%)]',
          'before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700',
        ],
        secondary: [
          'bg-transparent text-text-secondary border border-border-subtle',
          'hover:border-border-hover hover:text-text-primary hover:bg-bg-glass',
          'active:scale-[0.98]',
        ],
        ghost: [
          'bg-transparent text-text-secondary',
          'hover:text-text-primary hover:bg-bg-glass',
          'active:scale-[0.98]',
        ],
      },
      size: {
        sm: 'h-9 px-5 text-sm',
        md: 'h-11 px-7 text-sm',
        lg: 'h-13 px-9 text-base',
        xl: 'h-[56px] px-12 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

/* ─── Types ──────────────────────────────────────────────────── */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

/* ─── Component ──────────────────────────────────────────────── */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    if (asChild) {
      return (
        <Slot
          className={cn(buttonVariants({ variant, size, className }))}
          {...(props as React.HTMLAttributes<HTMLElement>)}
        >
          {children}
        </Slot>
      )
    }
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'

export { Button, buttonVariants }
