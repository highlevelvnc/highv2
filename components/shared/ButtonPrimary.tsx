import { Button, type ButtonProps } from '@/components/ui/button'
import { cn } from '@/lib/utils'

/**
 * Pre-configured primary gradient button.
 * Convenience wrapper over <Button variant="primary" />.
 * No infinite animations — stays calm in scroll contexts.
 */
export default function ButtonPrimary({
  className,
  size = 'lg',
  ...props
}: ButtonProps) {
  return (
    <Button
      variant="primary"
      size={size}
      className={cn(className)}
      {...props}
    />
  )
}
