import { cn } from '@/lib/utils'

interface BodyTextProps {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg'
  muted?: boolean
  as?: React.ElementType
}

const sizeMap = {
  sm: 'text-sm leading-relaxed',
  md: 'text-base leading-[1.7]',
  lg: 'text-lg leading-[1.75]',
}

/**
 * Body paragraph with size and color variants.
 */
export default function BodyText({
  children,
  className,
  size = 'md',
  muted = false,
  as: Tag = 'p',
}: BodyTextProps) {
  return (
    <Tag
      className={cn(
        'font-body',
        sizeMap[size],
        muted ? 'text-text-muted' : 'text-text-secondary',
        className,
      )}
    >
      {children}
    </Tag>
  )
}
