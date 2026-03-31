import { cn } from '@/lib/utils'

interface SectionHeadlineProps {
  children: React.ReactNode
  className?: string
  as?: 'h1' | 'h2' | 'h3'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  gradient?: boolean
}

const sizeMap = {
  sm: 'text-[clamp(24px,3vw,36px)]',
  md: 'text-[clamp(28px,4vw,48px)]',
  lg: 'text-[clamp(32px,5vw,64px)]',
  xl: 'text-[clamp(36px,6vw,72px)]',
}

/**
 * Section headline with fluid type scaling and optional gradient treatment.
 */
export default function SectionHeadline({
  children,
  className,
  as: Tag = 'h2',
  size = 'lg',
  gradient = false,
}: SectionHeadlineProps) {
  return (
    <Tag
      className={cn(
        'font-display font-semibold leading-[1.1] tracking-[-0.02em] text-text-primary',
        sizeMap[size],
        gradient && 'text-gradient',
        className,
      )}
    >
      {children}
    </Tag>
  )
}
