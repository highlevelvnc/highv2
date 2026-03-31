import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

/* ─────────────────────────────────────────────────────────
   Shared style tokens
───────────────────────────────────────────────────────── */

const fieldBase = [
  'w-full rounded-xl border border-border-subtle bg-bg-elevated',
  'font-body text-[15px] text-text-primary placeholder:text-text-muted',
  'px-4 transition-colors duration-200',
  'focus:outline-none focus:border-accent-primary/60 focus:ring-1 focus:ring-accent-primary/20',
  'hover:border-border-hover',
].join(' ')

/* ─────────────────────────────────────────────────────────
   Label
───────────────────────────────────────────────────────── */

interface LabelProps {
  htmlFor: string
  children: React.ReactNode
  required?: boolean
}

export function FormLabel({ htmlFor, children, required }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 block font-body text-[13px] font-medium tracking-[0.02em] text-text-secondary"
    >
      {children}
      {required && (
        <span className="ml-1 text-accent-primary" aria-hidden="true">
          *
        </span>
      )}
    </label>
  )
}

/* ─────────────────────────────────────────────────────────
   Input
───────────────────────────────────────────────────────── */

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, id, required, className, ...props }, ref) => {
    return (
      <div className="flex flex-col">
        {label && (
          <FormLabel htmlFor={id ?? ''} required={required}>
            {label}
          </FormLabel>
        )}
        <input
          ref={ref}
          id={id}
          required={required}
          className={cn(fieldBase, 'h-12', error && 'border-red-500/60', className)}
          {...props}
        />
        {error && (
          <p className="mt-1.5 font-body text-[12px] text-red-400" role="alert">
            {error}
          </p>
        )}
      </div>
    )
  },
)
FormInput.displayName = 'FormInput'

/* ─────────────────────────────────────────────────────────
   Textarea
───────────────────────────────────────────────────────── */

interface FormTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

export const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ label, error, id, required, className, ...props }, ref) => {
    return (
      <div className="flex flex-col">
        {label && (
          <FormLabel htmlFor={id ?? ''} required={required}>
            {label}
          </FormLabel>
        )}
        <textarea
          ref={ref}
          id={id}
          required={required}
          className={cn(
            fieldBase,
            'py-3 resize-none leading-relaxed',
            error && 'border-red-500/60',
            className,
          )}
          {...props}
        />
        {error && (
          <p className="mt-1.5 font-body text-[12px] text-red-400" role="alert">
            {error}
          </p>
        )}
      </div>
    )
  },
)
FormTextarea.displayName = 'FormTextarea'
