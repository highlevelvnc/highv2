import { cn } from '@/lib/utils'

interface DividerProps {
  className?: string
  gradient?: boolean
  width?: 'sm' | 'md' | 'full'
  align?: 'left' | 'center' | 'right'
}

const widthMap = {
  sm: 'w-16',
  md: 'w-32',
  full: 'w-full',
}

const alignMap = {
  left: 'mr-auto',
  center: 'mx-auto',
  right: 'ml-auto',
}

/**
 * Styled horizontal rule for visual separation.
 */
export default function Divider({
  className,
  gradient = false,
  width = 'full',
  align = 'center',
}: DividerProps) {
  return (
    <hr
      className={cn(
        'border-0 h-px',
        widthMap[width],
        alignMap[align],
        gradient
          ? 'bg-accent-gradient'
          : 'bg-border-subtle',
        className,
      )}
    />
  )
}
