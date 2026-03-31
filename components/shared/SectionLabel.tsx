import { cn } from '@/lib/utils'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
  withLine?: boolean
}

/**
 * Mono uppercase category label that appears above section headlines.
 * Optionally renders a small decorative line to the left.
 */
export default function SectionLabel({
  children,
  className,
  withLine = true,
}: SectionLabelProps) {
  return (
    <div className={cn('inline-flex items-center gap-3 mb-5', className)}>
      {withLine && (
        <span
          className="block h-px w-8 bg-accent-primary opacity-80 flex-shrink-0"
          aria-hidden="true"
        />
      )}
      <span className="font-mono text-[13px] font-medium uppercase tracking-[0.12em] text-accent-primary">
        {children}
      </span>
    </div>
  )
}
