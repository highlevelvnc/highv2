import { Button, type ButtonProps } from '@/components/ui/button'

/**
 * Pre-configured secondary ghost button.
 * Convenience wrapper over <Button variant="secondary" />.
 */
export default function ButtonSecondary({
  size = 'lg',
  ...props
}: ButtonProps) {
  return <Button variant="secondary" size={size} {...props} />
}
