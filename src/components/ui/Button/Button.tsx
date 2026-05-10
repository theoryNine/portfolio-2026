import styles from './Button.module.css'

type Variant = 'primary' | 'outline' | 'ghost'

interface ButtonProps {
  variant?: Variant
  href?: string
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit'
}

export function Button({
  variant = 'primary',
  href,
  children,
  onClick,
  type = 'button',
}: ButtonProps) {
  const className = [styles.button, styles[variant]].join(' ')

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  )
}
