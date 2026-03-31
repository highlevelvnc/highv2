import { cn } from '@/lib/utils'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  wide?: boolean
}

/**
 * Max-width container with horizontal padding.
 * Default: 1280px. Wide variant: 1440px.
 */
export default function Container({
  children,
  className,
  wide = false,
}: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-5 sm:px-8 lg:px-12',
        wide ? 'max-w-wide' : 'max-w-container',
        className,
      )}
    >
      {children}
    </div>
  )
}
