import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  to?: string
  external?: boolean
  onClick?: () => void
  type?: 'button' | 'submit'
  className?: string
  ariaLabel?: string
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  external = false,
  onClick,
  type = 'button',
  className = '',
  ariaLabel,
}: ButtonProps) {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim()

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    )
  }

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} onClick={onClick} type={type} aria-label={ariaLabel}>
      {children}
    </button>
  )
}
